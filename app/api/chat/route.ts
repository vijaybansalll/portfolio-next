import OpenAI from "openai";
import { NextResponse } from "next/server";

// Initialize OpenAI client lazily inside the handler (will be created when request arrives)
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

// 🔹 Predefined answers (instant + smart)
const predefinedAnswers: Record<string, string> = {
  // Identity
  "who are you":
    "I'm Vijay's AI assistant 🤖. I can help you explore his skills, projects, and experience.",

  "who is vijay":
    "Vijay is a Frontend Developer who specializes in React and Next.js. He focuses on building fast, scalable, and visually engaging web applications.",

  "tell me about vijay":
    "Vijay is a passionate frontend developer with expertise in modern web technologies like React, Next.js, and TypeScript. He loves crafting smooth user experiences and clean interfaces.",

  // Work & Role
  "what do you do":
    "Vijay builds modern web applications with a focus on performance, scalability, and great user experience.",

  "what does vijay do":
    "He develops responsive and interactive web apps using React, Next.js, and modern frontend tools.",

  // Skills
  skills:
    "Vijay works with React, Next.js, TypeScript, Tailwind CSS, JavaScript, and modern UI/UX practices.",

  "tech stack":
    "His tech stack includes React, Next.js, TypeScript, Tailwind CSS, and various frontend libraries.",

  technologies:
    "Vijay is experienced in frontend technologies like React, Next.js, TypeScript, Tailwind CSS, and integrates APIs effectively.",

  // Projects
  projects:
    "Vijay has built scalable frontend apps, reusable UI components, and AI-powered features like chatbots.",

  "show projects":
    "You can explore Vijay's projects in the projects section of this portfolio. They include modern UI apps and AI integrations.",

  // Experience
  experience:
    "Vijay has hands-on experience building production-ready web applications and continuously improves his frontend and AI skills.",

  "work experience":
    "He has worked on real-world applications focusing on performance, UI consistency, and scalability.",

  // AI
  ai: "Vijay is actively exploring AI integrations, including chatbots and smart UI features.",

  "ai projects":
    "He has worked on AI-powered features like this chatbot and is continuously experimenting with intelligent interfaces.",

  // Contact
  contact:
    "You can reach out to Vijay through the contact section on this portfolio.",

  "how to contact":
    "Feel free to use the contact form available on the portfolio to get in touch with Vijay.",

  email:
    "You can contact Vijay via the contact section where his email details are available.",

  // Availability
  "are you available for work":
    "Yes! Vijay is open to exciting opportunities and freelance projects.",

  "hire vijay":
    "You can hire Vijay for frontend development projects. Reach out via the contact section to discuss your requirements.",

  // Education
  education:
    "Vijay has a strong foundation in web development and continuously learns new technologies to stay updated.",

  // Personality / Soft touch
  "why should i hire vijay":
    "Vijay combines strong technical skills with a keen eye for design, ensuring both functionality and great user experience.",

  "what makes vijay different":
    "He focuses on clean code, performance, and intuitive UI — not just making things work, but making them feel great to use.",

  // Fallback-ish friendly answers
  help: "You can ask about Vijay's skills, projects, experience, or how to contact him.",

  hello: "Hey there! 👋 Ask me anything about Vijay.",

  hi: "Hi! I'm here to help you learn more about Vijay.",

  thanks:
    "You're welcome! 😊 Let me know if you'd like to know more about Vijay.",
};

// 🔹 Match predefined answers
function getPredefinedAnswer(message: string) {
  const lower = message.toLowerCase();

  for (const key in predefinedAnswers) {
    if (lower.includes(key)) {
      return predefinedAnswers[key];
    }
  }

  return null;
}

// 🔹 System prompt (AI personality)
const SYSTEM_PROMPT = `
You are Vijay's AI assistant.

About Vijay:
- Frontend Developer
- Specializes in React, Tailwind CSS, ShadCN UI, TypeScript, JavaScript, CSS, Next.js
- Builds scalable and interactive web applications
- Focuses on micro-interactions, UI/UX, animations, and user experience
- Exploring AI integrations

Rules:
- Keep answers short and friendly
- Answer as if you represent Vijay
- If question is unrelated, politely redirect to Vijay's work
`;

export async function POST(req: Request) {
  try {
    const { messages, mode, content } = await req.json();

    if (mode === "summary") {
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
            content: content,
          },
        ],
      });

      return NextResponse.json({
        summary: completion.choices[0].message.content,
      });
    }

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 },
      );
    }

    const userMessage = messages[messages.length - 1].content;

    // ✅ 1. Predefined answer check
    const predefined = getPredefinedAnswer(userMessage);

    if (predefined) {
      return NextResponse.json({
        reply: { content: predefined },
      });
    }

    // ✅ 2. AI fallback (OpenRouter)
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

    return NextResponse.json({
      reply: {
        content: completion.choices[0].message.content,
      },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Something went wrong";
    console.error("ERROR:", errorMessage);

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 },
    );
  }
}
