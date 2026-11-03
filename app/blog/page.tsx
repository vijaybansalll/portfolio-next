import type { Metadata } from "next";
import BlogSection from "@/sections/BlogSection";
import BlogBlogsSection from "@/sections/BlogBlogsSection";

export const metadata: Metadata = {
  title: "Blog | Vijay Bansal",
  description: "Articles and insights on modern frontend development, React, Next.js, and CSS.",
};

export default function BlogPage() {
  return (
    <>
      <BlogSection />
      <BlogBlogsSection />
    </>
  );
}
