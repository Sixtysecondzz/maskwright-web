import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES.privacy.title,
  description: CATEGORIES.privacy.excerpt,
};

export default function Page() {
  return <BlogHub category="privacy" />;
}
