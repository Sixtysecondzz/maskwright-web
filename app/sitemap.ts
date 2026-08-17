import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maskwright.com";
  const posts = getPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const categories = Object.keys(CATEGORIES).map((category) => ({
    url: `${base}/blog/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const authors = [
    "Avery Chen",
    "Sam Okonkwo",
    "Riley Park",
    "Jordan Hale",
    "Priya Nair",
    "Morgan Ellis",
  ].map((author) => ({
    url: `${base}/blog/author/${encodeURIComponent(author)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/download`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/feed.xml`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.3 },
    ...categories,
    ...authors,
    ...posts,
  ];
}
