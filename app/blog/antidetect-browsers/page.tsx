import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES["antidetect-browsers"].title,
  description: CATEGORIES["antidetect-browsers"].excerpt,
};

export default function Page() {
  return <BlogHub category="antidetect-browsers" />;
}
