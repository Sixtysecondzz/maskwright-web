import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES["browser-fingerprinting"].title,
  description: CATEGORIES["browser-fingerprinting"].excerpt,
};

export default function Page() {
  return <BlogHub category="browser-fingerprinting" />;
}
