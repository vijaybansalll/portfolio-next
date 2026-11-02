"use client";

import dynamic from "next/dynamic";

const ChatbotClient = dynamic(
  () => import("@/components/chatbot").then((mod) => mod.Chatbot),
  {
    ssr: false,
  },
);

export function DynamicChatbot() {
  return <ChatbotClient />;
}
