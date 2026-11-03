import type { Metadata } from "next";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { getPost, getAllPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { Para } from "@/components/para";
import VoiceMessageBubble from "@/components/voice-message-bubble";
import { BlogTag } from "@/components/blog-tag";
import BlogSummary from "@/components/blog-summary";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Vijay Bansal",
    };
  }

  return {
    title: `${post.title} | Vijay Bansal`,
    description: post.description || "Read this article on Vijay Bansal's blog.",
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading className="flex min-h-64 items-center justify-center text-center">
          Post not found
        </Heading>
      </Block>
    );
  }

  return (
    <div>
      <Block className="blog-page-block mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading className="mb-2 text-2xl font-bold md:text-3xl">
          {post?.title}
        </Heading>

        <Para className="mb-4 text-xs">{post?.date}</Para>

        <div className="mb-4 hidden flex-wrap gap-1 md:flex">
          {post?.tags?.map((tag, index) => (
            <BlogTag key={tag} index={index}>
              #{tag}
            </BlogTag>
          ))}
        </div>
        <VoiceMessageBubble text={stripHtml(post.content || "")} />
        <BlogSummary content={stripHtml(post.content || "")} />
        <div
          className={cn(
            "text-vj-secondary dark:text-vj-secondary-dark text-sm",
            "pt-4 text-sm md:text-base",
            "prose prose-lg dark:prose-invert max-w-none",
          )}
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </Block>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}
