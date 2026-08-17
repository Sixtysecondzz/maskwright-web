import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES["social-media"].title,
  description: CATEGORIES["social-media"].excerpt,
};

export default function Page() {
  return <BlogHub category="social-media" />;
}
