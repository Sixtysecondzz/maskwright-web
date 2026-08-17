import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES.proxies.title,
  description: CATEGORIES.proxies.excerpt,
};

export default function Page() {
  return <BlogHub category="proxies" />;
}
