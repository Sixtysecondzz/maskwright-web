import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/blog-config";
import { BlogHub } from "@/components/blog-hub";

export const metadata: Metadata = {
  title: CATEGORIES.ecommerce.title,
  description: CATEGORIES.ecommerce.excerpt,
};

export default function Page() {
  return <BlogHub category="ecommerce" />;
}
