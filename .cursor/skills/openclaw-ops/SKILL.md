---
name: openclaw-ops
description: Drives the local OpenClaw Gateway to run MaskWright SEO and site ops. Use when the user mentions OpenClaw, lobster install, SEO factory, blog queue, heartbeats, or using AI to operate maskwright.com.
---

# Drive OpenClaw for MaskWright

This Cursor agent is the operator. OpenClaw is the always-on desk that writes posts, runs QA, and keeps the queue moving.

## Install already done

OpenClaw 2026.7.1-2 is on this machine:

```
powershell -c "irm https://openclaw.ai/install.ps1 | iex"
```

CLI: `openclaw` (npm global, `%AppData%\npm`).
State: `%USERPROFILE%\.openclaw\`
Workspace: `%USERPROFILE%\.openclaw\workspace`
Repo skills: `E:\windows app\maskwright-web\.agents\skills\`

## First thing every session

1. Put npm global on PATH if needed: `$env:Path = "$(npm prefix -g);$env:Path"`
2. `openclaw --version`
3. `openclaw gateway status`
4. If Gateway is down and a model is configured: `openclaw gateway start` or `openclaw gateway install`

## Model auth (required before agent turns)

No provider key was in the environment at setup. Ask the human for one provider, then:

```
openclaw onboard --non-interactive --accept-risk --skip-health --mode local --gateway-bind loopback --install-daemon --auth-choice <choice> --<provider>-api-key $env:KEY
```

Common choices: `apiKey` (Anthropic), `openai-api-key`, `gemini-api-key`, `openrouter-api-key`.

Then:

```
openclaw doctor --fix
openclaw gateway install
openclaw gateway status
openclaw dashboard
```

Never commit keys. Never paste them into the blog.

## Dispatch SEO work

From any Cursor session:

```
openclaw agent --message "Use $maskwright-seo and $maskwright-ops. <task>"
```

Examples:

- Next unpublished queue row due today
- Expand a short post over 1,200 words with no extra dashes
- Weekly cluster/internal-link pass
- QA only, report, do not draft

Prefer `--message-file` for long briefs.

After OpenClaw marks a post `PUBLISHED`, run `node content/blog/_ops/commit-published.mjs` from the repo root (or rely on the Cursor `stop` hook). That is the commit+push path for live posts. Do not commit drafts that are still `AWAITING_APPROVAL`.

If Gateway is not running and a key exists in this shell:

```
openclaw agent --local --message "..."
```

## Cursor MCP bridge

Project MCP file: `.cursor/mcp.json` runs `openclaw mcp serve`.

That stdio server needs a live Gateway. If tools fail, start the Gateway, then retry. After `openclaw onboard`, the Gateway uses token auth; if serve asks for a token, set it via `openclaw mcp serve --token-file` or update the MCP args. Do not commit the token.

## Split of labor

| Work | Who |
| --- | --- |
| Blog drafts, QA, queue, clusters, sitemap checks | OpenClaw via `$maskwright-seo` / `$maskwright-ops` |
| Next.js app code, layout, download pipeline | This Cursor agent in the repo |
| Ezoic | This Cursor agent via `user-ezoic-setup` MCP `ask(message, thread)` |
| Public product copy that would imply MaskWright is an agent | Refuse. Point at `maskwright-is-not-an-agent-runtime` |

## Do not

- Point OpenClaw at MaskWright debugging ports or launched profiles
- Publish OpenClaw as a MaskWright feature
- Run `irm ... \| iex` again unless the human asked to reinstall
- Force-push, skip hooks, or commit `.env` / OpenClaw credentials
