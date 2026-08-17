import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CATEGORIES, type CategoryId } from "@/lib/blog-config";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORIES[category as CategoryId];
  if (!meta) return { title: "Category" };
  return { title: meta.title, description: meta.excerpt };
}

export default async function CategoryRedirect({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES[category as CategoryId]) notFound();
  redirect(`/blog/${category}`);
}
