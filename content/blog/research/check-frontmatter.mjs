import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = "E:/windows app/maskwright-web/content/blog/posts";
const cats = new Set([
  "browser-fingerprinting",
  "antidetect-browsers",
  "automation",
  "proxies",
  "social-media",
  "ecommerce",
  "scraping",
  "privacy",
]);
const authors = new Set([
  "Avery Chen",
  "Sam Okonkwo",
  "Riley Park",
  "Jordan Hale",
  "Priya Nair",
  "Morgan Ellis",
]);
const bad = [];
for (const file of readdirSync(dir).filter((n) => n.endsWith(".md"))) {
  const raw = readFileSync(join(dir, file), "utf8");
  const cat = raw.match(/^category:\s*(.+)$/m)?.[1]?.trim();
  const author = raw.match(/^author:\s*(.+)$/m)?.[1]?.trim();
  const slug = raw.match(/^slug:\s*(.+)$/m)?.[1]?.trim();
  if (!cats.has(cat)) bad.push(`${file} cat=${cat}`);
  if (!authors.has(author)) bad.push(`${file} author=${author}`);
  if (slug && slug + ".md" !== file) bad.push(`${file} slug=${slug}`);
}
console.log("bad", bad.length);
console.log(bad.slice(0, 40).join("\n"));
