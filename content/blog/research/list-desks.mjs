import { readFileSync } from "node:fs";

const rows = readFileSync(
  new URL("./content-map.csv", import.meta.url),
  "utf8",
)
  .trim()
  .split(/\r?\n/)
  .slice(1);

function parse(line) {
  const out = [];
  let cur = "";
  let q = false;
  for (const ch of line) {
    if (ch === '"') {
      q = !q;
      continue;
    }
    if (ch === "," && !q) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

const desks = {};
for (const line of rows) {
  const c = parse(line);
  const slug = c[0];
  const desk = c[6];
  const pillar = c[7];
  desks[desk] ??= [];
  desks[desk].push({ slug, pillar });
}

for (const [desk, list] of Object.entries(desks)) {
  console.log(desk, list.length, "pillars", list.filter((x) => x.pillar === "true").length);
  console.log(list.map((x) => x.slug).join("\n"));
  console.log("---");
}
