#!/usr/bin/env node
/**
 * Commit and push blog posts whose OpenClaw status is PUBLISHED.
 * Never touches AWAITING_APPROVAL drafts, memory/, or secrets.
 *
 * Usage (repo root):
 *   node content/blog/_ops/commit-published.mjs
 *   node content/blog/_ops/commit-published.mjs --no-push
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const noPush = process.argv.includes("--no-push");
const statePath = join(root, "content/blog/_ops/state/content-creation-state.json");

if (!existsSync(statePath)) {
  console.log("commit-published: no content-creation-state.json");
  process.exit(0);
}

const state = JSON.parse(readFileSync(statePath, "utf8"));
const slugs = (state.articles || [])
  .filter((row) => row && row.status === "PUBLISHED" && typeof row.slug === "string")
  .map((row) => row.slug.trim())
  .filter(Boolean);

const relFiles = slugs
  .map((slug) => `content/blog/posts/${slug}.md`)
  .filter((rel) => existsSync(join(root, rel)));

if (!relFiles.length) {
  console.log("commit-published: no PUBLISHED post files on disk");
  process.exit(0);
}

function git(args, opts = {}) {
  const result = spawnSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...opts,
  });
  if (result.status !== 0) {
    const err = (result.stderr || result.stdout || `git ${args.join(" ")} failed`).trim();
    throw new Error(err);
  }
  return (result.stdout || "").trim();
}

const porcelain = git(["status", "--porcelain", "--", ...relFiles]);
const dirty = porcelain
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);
if (!dirty.length) {
  console.log("commit-published: nothing to commit");
  process.exit(0);
}

const toAdd = dirty.map((line) => line.slice(3).trim().replace(/^"|"$/g, ""));
git(["add", "--", ...toAdd]);

const names = toAdd.map((file) =>
  file.replace(/^content\/blog\/posts\//, "").replace(/\.md$/, ""),
);
const message =
  names.length === 1
    ? `Publish ${names[0]}.`
    : `Publish ${names.length} blog posts (${names.join(", ")}).`;

try {
  git(["commit", "-m", message]);
} catch (err) {
  const text = String(err.message || err);
  if (/nothing to commit/i.test(text)) {
    console.log("commit-published: nothing to commit");
    process.exit(0);
  }
  throw err;
}

console.log(`commit-published: ${message}`);

if (noPush) {
  process.exit(0);
}

git(["push", "-u", "origin", "HEAD"]);
console.log("commit-published: pushed");
