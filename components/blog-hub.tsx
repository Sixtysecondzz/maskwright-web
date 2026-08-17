import Link from "next/link";
import { CATEGORIES, type CategoryId } from "@/lib/blog-config";
import { getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export function BlogHub({ category }: { category: CategoryId }) {
  const meta = CATEGORIES[category];
  const posts = getPostsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/blog" className="text-sm text-muted hover:text-ink">
        All notes
      </Link>
      <h1 className="display mt-6 text-4xl leading-tight text-ink sm:text-5xl">
        {meta.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{meta.excerpt}</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
