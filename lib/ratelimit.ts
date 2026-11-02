import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory sliding window fallback when Upstash Redis env variables are not set
interface RateLimitRecord {
  timestamps: number[];
}

const memoryStore = new Map<string, RateLimitRecord>();

function memoryRateLimit(
  identifier: string,
  limit: number,
  windowMs: number,
): { success: boolean; limit: number; remaining: number; reset: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  const record = memoryStore.get(identifier) ?? { timestamps: [] };
  // Filter timestamps within current window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= limit) {
    const oldestTimestamp = activeTimestamps[0];
    const reset = Math.ceil((oldestTimestamp + windowMs) / 1000);
    return {
      success: false,
      limit,
      remaining: 0,
      reset,
    };
  }

  activeTimestamps.push(now);
  memoryStore.set(identifier, { timestamps: activeTimestamps });

  return {
    success: true,
    limit,
    remaining: limit - activeTimestamps.length,
    reset: Math.ceil((now + windowMs) / 1000),
  };
}

// Initialize Upstash Redis if credentials are provided in environment
const hasUpstashConfig = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const upstashRedis = hasUpstashConfig
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

// Configurable limiters for different endpoints
export const ratelimitConfigs = {
  // Chat / AI: 10 requests per 1 minute
  chat: {
    limit: 10,
    windowMs: 60 * 1000,
    upstash: hasUpstashConfig && upstashRedis
      ? new Ratelimit({
          redis: upstashRedis,
          limiter: Ratelimit.slidingWindow(10, "1 m"),
          analytics: true,
          prefix: "@upstash/ratelimit:chat",
        })
      : null,
  },
  // Contact form: 5 submissions per 10 minutes
  contact: {
    limit: 5,
    windowMs: 10 * 60 * 1000,
    upstash: hasUpstashConfig && upstashRedis
      ? new Ratelimit({
          redis: upstashRedis,
          limiter: Ratelimit.slidingWindow(5, "10 m"),
          analytics: true,
          prefix: "@upstash/ratelimit:contact",
        })
      : null,
  },
};

export async function checkRateLimit(
  identifier: string,
  type: keyof typeof ratelimitConfigs,
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const config = ratelimitConfigs[type];

  if (config.upstash) {
    try {
      const result = await config.upstash.limit(identifier);
      return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
      };
    } catch (error) {
      console.warn("Upstash rate limiting failed, falling back to in-memory limiter:", error);
    }
  }

  return memoryRateLimit(`${type}:${identifier}`, config.limit, config.windowMs);
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  return "127.0.0.1";
}
