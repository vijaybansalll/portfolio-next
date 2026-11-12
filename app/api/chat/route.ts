import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";

let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY || "",
    });
  }
  return openaiClient;
}

const predefinedAnswers: Record<string, string> = {
  "who are you":
    "I'm Vijay's AI assistant 🤖. Ask me about his frontend work, crypto exchange and DeFi/trading platforms, skills, experience at Webcom Systems, or how to contact him.",

  "who is vijay":
    "Vijay Bansal is a Front-end Developer at Webcom Systems Pvt. Ltd. specializing in React, Next.js, TypeScript, and Tailwind CSS. He builds responsive web apps, crypto/DeFi/trading UIs, and motion-rich interfaces.",

  "tell me about vijay":
    "Vijay Bansal is a Front-end Developer based in Mohali with a BCA from Punjabi University (2021–2024). Since June 2024, he's been building responsive UIs, micro-interactions, and crypto, DeFi, remittance, and trading platforms at Webcom Systems Pvt. Ltd.",

  "what do you do":
    "Vijay focuses on three core areas: responsive web apps (React, Next.js, TypeScript), crypto exchange, DeFi, remittance & trading UIs, and UI engineering with Tailwind CSS, Sass, Figma, and Framer Motion.",

  "what does vijay do":
    "He builds modern, high-performance web applications, crypto/DeFi/trading dashboards, remittance platforms, and interactive UIs using React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.",

  skills:
    "Vijay's skills span HTML5, CSS3, JavaScript, TypeScript, and Sass; React, Next.js, Tailwind CSS, Shadcn UI, Aceternity UI, and Magic UI; Framer Motion, Figma, Dribbble, and Freepik; plus Bun, Cursor, VS Code, Git/GitHub, Google Antigravity, Google Stitch, and Gemini.",

  "tech stack":
    "His core stack includes React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Aceternity UI, Magic UI, Framer Motion, and Sass — alongside tools like Bun, Cursor, VS Code, Git/GitHub, and Gemini.",

  technologies:
    "Vijay works with HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Sass, Shadcn UI, Aceternity UI, Magic UI, Framer Motion, Figma, and modern AI dev tools like Cursor, Google Antigravity, Google Stitch, and Gemini.",

  "show projects":
    "You can explore Vijay's work on the /projects page across domains including Crypto Exchange, Web3 / DeFi, Remittance, and Trading platforms.",

  "ai projects":
    "Vijay built this portfolio's AI assistant chatbot (powered by OpenRouter with Upstash rate limiting) and integrates AI tools like Gemini, Cursor, Google Antigravity, and Google Stitch into his workflow.",

  projects:
    "Vijay has built production UIs across Crypto Exchange, Web3 / DeFi, Remittance, and Trading platforms using React, Next.js, TypeScript, Tailwind CSS, and Shadcn UI.",

  "work experience":
    "Vijay has been a Front-end Developer at Webcom Systems Pvt. Ltd. since June 2024, building responsive UI components, clean dashboard layouts, and micro-interactions for crypto exchange, DeFi, trading, and remittance platforms.",

  experience:
    "Vijay works as a Front-end Developer at Webcom Systems Pvt. Ltd. (June 2024 – Present), shipping interfaces across crypto trading, DeFi, and remittance platforms with a focus on responsive design and performance.",

  ai: "Vijay builds AI-powered features like this portfolio chatbot and uses modern AI tooling including Gemini, Cursor, Google Antigravity, and Google Stitch in his frontend workflow.",

  "how to contact":
    "You can reach Vijay via the contact form on the /contact page or email him directly at gotovijay22@gmail.com.",

  contact:
    "You can reach Vijay at gotovijay22@gmail.com, through the /contact page, or connect on LinkedIn (/in/vijaybansalll), GitHub (@vijaybansalll), and X (@vijaybansalll).",

  email:
    "Vijay's email is gotovijay22@gmail.com — you can also copy it or send a message directly from the /contact page.",

  "are you available for work":
    "Yes! Vijay is open to frontend opportunities, meaningful product teams, and collaborations. Reach out at gotovijay22@gmail.com or via /contact.",

  "hire vijay":
    "You can reach out to Vijay for frontend development roles or collaborations at gotovijay22@gmail.com or through the /contact page.",

  education:
    "Vijay holds a Bachelor of Computer Applications (BCA) from Punjabi University (PUP), completed in 2021–2024, and writes about React, Next.js, Tailwind CSS, and Motion on his /blog.",

  "why should i hire vijay":
    "Vijay combines production experience across Crypto Exchange, Web3 / DeFi, Remittance, and Trading platforms with strong UI/UX craft, Framer Motion micro-interactions, and clean React/Next.js architecture.",

  "what makes vijay different":
    "He pairs clean React/Next.js and TypeScript engineering with a sharp eye for design — crafting responsive layouts, smooth Framer Motion micro-interactions, and fast, cross-browser interfaces.",

  help: "You can ask about Vijay's projects (Crypto Exchange, Web3 / DeFi, Remittance, Trading), skills & tech stack, experience at Webcom Systems, education, or how to contact him.",

  hello: "Hey there! 👋 Ask me anything about Vijay's projects, skills, or experience.",

  hi: "Hi! 👋 I'm Vijay's AI assistant. Ask me about his frontend work, projects, or tech stack.",

  thanks:
    "You're welcome! 😊 Let me know if you'd like to know more about Vijay's work or how to reach him.",
};

function getPredefinedAnswer(message: string) {
  const lower = message.toLowerCase();

  for (const [key, answer] of Object.entries(predefinedAnswers)) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`\\b${escaped}\\b`, "i").test(lower)) {
      return answer;
    }
  }

  return null;
}

const SYSTEM_PROMPT = `
You are Vijay Bansal's AI assistant on his portfolio website.

About Vijay:
- Front-end Developer at Webcom Systems Pvt. Ltd. (June 2024 – Present)
- Education: Bachelor of Computer Applications (BCA), Punjabi University (PUP), 2021–2024
- Core focus: Responsive Web Apps (React, Next.js, TypeScript, JavaScript), Crypto/DeFi & Trading UIs, and UI Engineering & Motion
- Skills: HTML5, CSS3, JavaScript, TypeScript, Sass, React, Next.js, Tailwind CSS, Shadcn UI, Aceternity UI, Magic UI, Framer Motion, Figma, Dribbble, Freepik, VS Code, Git, GitHub, npm, Bun, Cursor, Google Antigravity, Google Stitch, Gemini
- Project domains: Crypto Exchange, Web3 / DeFi, Remittance, and Trading platforms
- Contact: gotovijay22@gmail.com, /contact page, GitHub (@vijaybansalll), LinkedIn (/in/vijaybansalll), X (@vijaybansalll)

Rules:
- Keep answers short, accurate, and friendly
- Answer as Vijay's portfolio assistant using only the facts above (refer to project domains rather than specific client/project names)
- If a question is unrelated, politely redirect to Vijay's work, projects, or contact info
`;

const chatMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const chatRequestSchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("summary"),
    content: z.string().min(1, "Content is required for summary").max(20000),
  }),
  z.object({
    mode: z.literal("chat").optional(),
    messages: z.array(chatMessageSchema).min(1, "At least one message is required"),
  }),
]);

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateLimit = await checkRateLimit(ip, "chat");

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please slow down and try again shortly.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimit.limit.toString(),
            "X-RateLimit-Remaining": rateLimit.remaining.toString(),
            "X-RateLimit-Reset": rateLimit.reset.toString(),
          },
        },
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const validationResult = chatRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const rateLimitHeaders = {
      "X-RateLimit-Limit": rateLimit.limit.toString(),
      "X-RateLimit-Remaining": rateLimit.remaining.toString(),
      "X-RateLimit-Reset": rateLimit.reset.toString(),
    };

    const data = validationResult.data;

    if (data.mode === "summary") {
      const completion = await getOpenAIClient().chat.completions.create({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Summarize the given blog into 2-3 short bullet points. Keep it crisp and easy to scan. ",
          },
          {
            role: "user",
            content: data.content,
          },
        ],
      });

      return NextResponse.json(
        {
          summary: completion.choices[0].message.content,
        },
        { headers: rateLimitHeaders },
      );
    }

    const messages = data.messages;
    const userMessage = messages[messages.length - 1].content;
    const predefined = getPredefinedAnswer(userMessage);

    if (predefined) {
      return NextResponse.json(
        {
          reply: { content: predefined },
        },
        { headers: rateLimitHeaders },
      );
    }

    const completion = await getOpenAIClient().chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
    });

    return NextResponse.json(
      {
        reply: {
          content: completion.choices[0].message.content,
        },
      },
      { headers: rateLimitHeaders },
    );
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Something went wrong";
    console.error("Chat route error:", errorMessage);

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 },
    );
  }
}
