import type { Metadata } from "next";
import Link from "next/link";
import { AUTHORS, type AuthorId } from "@/lib/blog-config";
import { BlogCard } from "@/components/blog-card";
import { getPostsByAuthor } from "@/lib/blog";

type Props = { params: Promise<{ author: string }> };

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((author) => ({
    author: encodeURIComponent(author),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { author } = await params;
  const name = decodeURIComponent(author) as AuthorId;
  return { title: name };
}

export default async function AuthorPage({ params }: Props) {
  const { author } = await params;
  const name = decodeURIComponent(author) as AuthorId;
  const meta = AUTHORS[name];
  if (!meta) return null;
  const posts = getPostsByAuthor(name);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/blog" className="text-sm text-muted hover:text-ink">
        All notes
      </Link>
      <h1 className="display mt-6 text-4xl text-ink">{name}</h1>
      <p className="mt-3 text-sm text-dim">{meta.role}</p>
      <p className="mt-4 max-w-2xl text-muted leading-7">{meta.bio}</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
