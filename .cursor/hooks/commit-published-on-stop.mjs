#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { stdin, stdout, cwd, execPath } from "node:process";

if (!stdin.isTTY) {
  await new Promise((resolve) => {
    stdin.resume();
    stdin.on("data", () => {});
    stdin.on("end", resolve);
    stdin.on("error", resolve);
  });
}

const result = spawnSync(
  execPath,
  ["content/blog/_ops/commit-published.mjs"],
  {
    cwd: cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  },
);

if (result.stdout) process.stderr.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

stdout.write("{}\n");
process.exit(0);
