import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/blog-config";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl border border-line bg-panel hover:border-line-strong transition-colors"
    >
      <div className="relative aspect-[16/9] bg-bg-deep">
        <Image
          src={`/blog/${post.images[0]?.src ?? "blog-operator-desk.png"}`}
          alt={post.images[0]?.alt ?? post.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-dim">
          {post.date} · {post.author} · {CATEGORIES[post.category].title}
        </p>
        <h2 className="mt-2 text-xl text-ink group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}
