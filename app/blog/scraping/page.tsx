import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES.scraping.title,
  description: CATEGORIES.scraping.excerpt,
};

export default function Page() {
  return <BlogHub category="scraping" />;
}
