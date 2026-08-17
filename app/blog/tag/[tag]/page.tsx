import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { getPostsByTag, getTags } from "@/lib/blog";

type Props = { params: Promise<{ tag: string }> };

export function generateStaticParams() {
  return getTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return { title: `Tag: ${tag}` };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(decodeURIComponent(tag));

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/blog" className="text-sm text-muted hover:text-ink">
        All notes
      </Link>
      <h1 className="display mt-6 text-4xl text-ink">Tag: {decodeURIComponent(tag)}</h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
