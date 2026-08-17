import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/blog-config";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Operator notes on antidetect browsers, fingerprinting, proxies, and local profile management on Windows.",
};

export default function BlogIndex() {
  const posts = getPosts();
  const categories = Object.entries(CATEGORIES);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">
        Field notes
      </p>
      <h1 className="display mt-3 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
        What we learned running profiles on this machine
      </h1>
      <p className="mt-5 max-w-2xl text-muted leading-7">
        I write these as we ship MaskWright. Local Windows profiles. No cloud
        locker. No playbook for work you should not do.{" "}
        <Link href="/feed.xml" className="text-accent hover:text-accent-hover">
          RSS
        </Link>
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map(([id, category]) => (
          <Link
            key={id}
            href={`/blog/${id}`}
            className="rounded-full border border-line px-3 py-1.5 text-xs text-muted hover:border-line-strong hover:text-ink"
          >
            {category.title}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
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
        ))}
      </div>
    </div>
  );
}
