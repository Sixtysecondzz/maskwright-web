import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL(".", import.meta.url);
const map = readFileSync(new URL("./content-map.csv", import.meta.url), "utf8")
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((line) => line.split(",")[0]);
const postsDir = join(root.pathname.replace(/^\//, ""), "../../posts");
const winPosts = "E:/windows app/maskwright-web/content/blog/posts";
const files = readdirSync(winPosts).filter((n) => n.endsWith(".md"));
const slugs = new Set(files.map((n) => n.replace(/\.md$/, "")));
const missing = map.filter((s) => !slugs.has(s));
const extra = [...slugs].filter((s) => !map.includes(s));
const dash = /[\u2012\u2013\u2014\u2015]/;
const dashed = [];
const short = [];
for (const file of files) {
  const raw = readFileSync(join(winPosts, file), "utf8");
  if (dash.test(raw)) dashed.push(file);
  const body = raw.replace(/^---[\s\S]*?\n---\s*/, "");
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < 650) short.push(`${file} ${words}`);
}
console.log(
  JSON.stringify(
    {
      map: map.length,
      files: files.length,
      missing: missing.length,
      extra: extra.length,
      dashed: dashed.length,
      short: short.length,
      missingSample: missing.slice(0, 20),
      extraSample: extra.slice(0, 20),
      dashedSample: dashed.slice(0, 20),
      shortSample: short.slice(0, 20),
    },
    null,
    2,
  ),
);
