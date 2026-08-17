import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTHORS, CATEGORIES } from "@/lib/blog-config";
import { getFaq, getPost, getPosts, getRelated } from "@/lib/blog";
import { MarkdownBody } from "@/lib/markdown";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Note" };
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      publishedTime: post.date,
      images: [`/blog/${post.images[0]?.src}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(post);
  const faq = getFaq(post);
  const category = CATEGORIES[post.category];
  const author = AUTHORS[post.author];
  const hero = post.images[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "MaskWright" },
    image: hero ? `https://maskwright.com/blog/${hero.src}` : undefined,
    wordCount: post.wordCount,
    mainEntityOfPage: `https://maskwright.com/blog/${post.slug}`,
  };

  const faqLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maskwright.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://maskwright.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: `https://maskwright.com/blog/${post.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://maskwright.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />

      <nav className="text-sm text-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        <span className="px-2 text-dim">/</span>
        <Link href={`/blog/${post.category}`} className="hover:text-ink">
          {category.title}
        </Link>
      </nav>
      <p className="mt-6 text-xs text-dim">
        {post.date} · {post.author} · {post.wordCount} words
      </p>
      <h1 className="display mt-3 text-4xl leading-tight text-ink sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
      {hero ? (
        <figure className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-bg-deep">
            <Image
              src={`/blog/${hero.src}`}
              alt={hero.alt}
              fill
              className="object-cover"
              priority
              sizes="768px"
            />
          </div>
          {hero.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-dim">
              {hero.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <MarkdownBody markdown={post.body} />

      <aside className="mt-14 rounded-2xl border border-line bg-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">
          {author.role}
        </p>
        <p className="mt-2 text-ink">{post.author}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{author.bio}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/download" className="text-accent hover:text-accent-hover">
            Download MaskWright
          </Link>
          <Link href="/compare" className="text-accent hover:text-accent-hover">
            Compare with cloud tools
          </Link>
          <Link
            href={`/blog/${post.category}`}
            className="text-accent hover:text-accent-hover"
          >
            More in {category.title}
          </Link>
          <Link
            href={`/blog/author/${encodeURIComponent(post.author)}`}
            className="text-accent hover:text-accent-hover"
          >
            {post.author}
          </Link>
        </div>
      </aside>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="display text-2xl text-ink">Related notes</h2>
          <ul className="mt-5 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-accent hover:text-accent-hover"
                >
                  {item.title}
                </Link>
                <span className="ml-2 text-xs text-dim">
                  {CATEGORIES[item.category].title}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
