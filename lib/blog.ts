import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  AUTHORS,
  CATEGORIES,
  type AuthorId,
  type CategoryId,
} from "@/lib/blog-config";
import { countWords, extractFaq, extractImages } from "@/lib/markdown";

export type BlogImage = {
  src: string;
  alt: string;
  caption: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: AuthorId;
  category: CategoryId;
  tags: string[];
  related: string[];
  readingTime: string;
  heroImagePrompt: string;
  body: string;
  images: BlogImage[];
  wordCount: number;
};

function parseFrontmatter(raw: string) {
  if (!raw.startsWith("---")) {
    throw new Error("Missing frontmatter");
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) throw new Error("Unclosed frontmatter");
  const fm = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\s*\n/, "");
  const data: Record<string, string> = {};
  for (const line of fm.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { data, body };
}

function splitList(value: string | undefined) {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadPost(filePath: string): BlogPost {
  const raw = readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const category = (data.category || data.cluster) as CategoryId;
  if (!CATEGORIES[category]) {
    throw new Error(`Unknown category ${data.category} in ${filePath}`);
  }
  const author = data.author as AuthorId;
  if (!AUTHORS[author]) {
    throw new Error(`Unknown author ${data.author} in ${filePath}`);
  }
  const images = extractImages(body).map((image) => ({
    ...image,
    src: image.src.replace(/^\/blog\//, ""),
  }));
  const fallback = CATEGORIES[category].images.map((src, index) => ({
    src,
    alt: `${data.title} ${index + 1}`,
    caption: "",
  }));
  const merged = [...images];
  for (const extra of fallback) {
    if (merged.length >= 4) break;
    if (!merged.some((image) => image.src === extra.src)) merged.push(extra);
  }
  const excerpt = data.excerpt || data.metaDescription || "";
  return {
    slug: data.slug,
    title: data.title,
    excerpt,
    metaTitle: data.metaTitle || data.title,
    metaDescription: data.metaDescription || excerpt,
    date: data.published || data.date,
    author,
    category,
    tags: splitList(data.tags),
    related: splitList(data.related),
    readingTime: data.readingTime || "",
    heroImagePrompt: data.heroImagePrompt || "",
    body,
    images: merged.slice(0, 4),
    wordCount: countWords(body),
  };
}

const POSTS_DIR = join(process.cwd(), "content/blog/posts");

export function getPosts(): BlogPost[] {
  const files = readdirSync(POSTS_DIR).filter((name) => name.endsWith(".md"));
  return files
    .map((name) => loadPost(join(POSTS_DIR, name)))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: CategoryId): BlogPost[] {
  return getPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const needle = tag.toLowerCase();
  return getPosts().filter((post) =>
    post.tags.some((item) => item.toLowerCase() === needle),
  );
}

export function getPostsByAuthor(author: AuthorId): BlogPost[] {
  return getPosts().filter((post) => post.author === author);
}

export function getTags(): string[] {
  return [...new Set(getPosts().flatMap((post) => post.tags))].sort();
}

export function getRelated(post: BlogPost, limit = 8): BlogPost[] {
  const all = getPosts();
  const bySlug = new Map(all.map((item) => [item.slug, item]));
  const picked: BlogPost[] = [];
  for (const slug of post.related) {
    const match = bySlug.get(slug);
    if (match && match.slug !== post.slug) picked.push(match);
  }
  for (const item of all) {
    if (picked.length >= limit) break;
    if (item.slug === post.slug) continue;
    if (item.category === post.category && !picked.includes(item)) {
      picked.push(item);
    }
  }
  return picked.slice(0, limit);
}

export function getFaq(post: BlogPost) {
  return extractFaq(post.body);
}

export function getSearchIndex() {
  return getPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    author: post.author,
    date: post.date,
  }));
}
