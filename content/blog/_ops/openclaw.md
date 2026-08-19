# OpenClaw desk for MaskWright SEO

AI in Cursor drives OpenClaw. OpenClaw runs the blog factory and local QA. MaskWright the product stays a headed local browser, not an agent runtime.

## One-liner (already installed on this PC)

```
powershell -c "irm https://openclaw.ai/install.ps1 | iex"
```

## Layout

| Piece | Path |
| --- | --- |
| CLI | `openclaw` on npm global PATH |
| Config | `%USERPROFILE%\.openclaw\openclaw.json` |
| Agent home | `%USERPROFILE%\.openclaw\workspace` |
| Project skills | `.agents/skills/maskwright-seo` and `maskwright-ops` |
| Cursor skill | `.cursor/skills/openclaw-ops` |
| Cursor MCP | `.cursor/mcp.json` → `openclaw mcp serve` |

## Turn it on

1. Put a model key in the environment (Anthropic, OpenAI, Gemini, or OpenRouter).
2. `openclaw onboard --non-interactive --accept-risk --mode local --gateway-bind loopback --install-daemon`
3. `openclaw doctor --fix`
4. `openclaw dashboard`
5. Chat: `Use $maskwright-ops. What is unpublished in the queue?`

## Recurring jobs (after Gateway is up)

Daily QA, no model:

```
openclaw cron add --name "MaskWright blog QA" --cron "0 9 * * *" --tz Australia/Sydney --command-argv "[\"node\",\"content/blog/_ops/qa.mjs\"]" --command-cwd "E:\\windows app\\maskwright-web"
```

Daily draft pass, needs a model:

```
openclaw cron add --name "MaskWright SEO desk" --cron "30 9 * * *" --tz Australia/Sydney --session isolated --model qwen/qwen3.7-plus --message "Use $maskwright-ops then $maskwright-seo. Report queue gaps. Draft at most one due unpublished post. Run QA. Do not invent keywords. Do not write ban-evasion. If you marked a post PUBLISHED, run node content/blog/_ops/commit-published.mjs from the repo root."
```

After marking a post `PUBLISHED` in `content/blog/_ops/state/content-creation-state.json`, always run:

```
node content/blog/_ops/commit-published.mjs
```

That script commits only those published markdown files and pushes to origin. It will not commit `AWAITING_APPROVAL` drafts. A Cursor `stop` hook runs the same script when a session ends.

## From Cursor

```
openclaw agent --message "Use $maskwright-ops. Summarize QA and the next due slug."
```

Ezoic stays in Cursor (`user-ezoic-setup`). Do not put publisher tokens in the OpenClaw workspace.
