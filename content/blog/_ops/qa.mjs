import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "content/blog/posts");
const files = readdirSync(dir).filter((name) => name.endsWith(".md"));
const dash = /[\u2012\u2013\u2014\u2015]/;
const reports = [];

for (const name of files) {
  const raw = readFileSync(join(dir, name), "utf8");
  const body = raw.replace(/^---[\s\S]*?\n---\s*/, "");
  const words = body
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split(/\s+/)
    .filter(Boolean).length;
  const images = (body.match(/!\[[^\]]*\]\([^)]+\)/g) || []).length;
  const faq = /^##\s+faq$/im.test(body);
  const categoryLink = /\/blog\/category\//.test(body);
  const productLink = /\/download|\/compare/.test(body);
  const related = (body.match(/\]\(\/blog\/[a-z0-9-]+\)/g) || []).length;
  reports.push({
    file: name,
    words,
    images,
    faq,
    categoryLink,
    productLink,
    related,
    dashes: dash.test(raw),
    short: words < 1200,
  });
}

const short = reports.filter((row) => row.short);
const dashed = reports.filter((row) => row.dashes);
console.log(`posts ${reports.length}`);
console.log(`under 1200: ${short.length}`);
console.log(`dashes: ${dashed.length}`);
if (short.length) console.log(short.map((row) => `${row.file} ${row.words}`).join("\n"));
if (dashed.length) console.log(dashed.map((row) => row.file).join("\n"));
