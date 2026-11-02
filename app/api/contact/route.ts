import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(254, "Email must be less than 254 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message must be less than 5000 characters"),
});

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateLimit = await checkRateLimit(ip, "contact");

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
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
        { success: false, error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const { name, email, message } = validationResult.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env?.EMAIL_USER,
        pass: process.env?.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env?.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>Portfolio Enquiry (Contact Form)</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      {
        headers: {
          "X-RateLimit-Limit": rateLimit.limit.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          "X-RateLimit-Reset": rateLimit.reset.toString(),
        },
      },
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
