---
name: maskwright-ops
description: Runs MaskWright site ops: blog QA, queue vs published, clusters, sitemap/robots, ads chrome, and Ezoic handoff. Use for SEO audits, calendars, broken links, publisher checks, and daily/weekly OpenClaw jobs.
---

# MaskWright site ops

Repo: `E:\windows app\maskwright-web`
Live site: `https://maskwright.com`

OpenClaw writes content and runs local QA. Cursor (this desk) still owns Ezoic through the `user-ezoic-setup` MCP.

## Daily

From the repo root:

```
node content/blog/_ops/qa.mjs
```

Then:

1. Diff `content/blog/_ops/queue.json` slugs against `content/blog/posts/*.md`
2. Note under-1200, missing FAQ, missing category/product links, dash hits
3. Write a short status into OpenClaw `memory/YYYY-MM-DD.md`
4. If a queue row is due and unpublished, draft it with `$maskwright-seo`

Do not ship a post that fails QA.

When a post is marked `PUBLISHED` in `content/blog/_ops/state/content-creation-state.json`, run:

```
node content/blog/_ops/commit-published.mjs
```

That commits and pushes only `content/blog/posts/{slug}.md` for PUBLISHED rows. Leave `AWAITING_APPROVAL` drafts, `memory/`, and secrets untracked.

## Weekly

- Read `content/blog/_ops/clusters.json` and `content/blog/_ops/linking-map.json`
- Check orphan slugs and unpublished related links (they 404 until the cluster lands)
- Skim `content/blog/_ops/seo-audit.md` risks: thin social dupes, lab-page trophy tone
- Confirm `app/sitemap.ts` still lists product pages, categories, authors, posts
- Confirm `app/robots.ts` allows `/` and disallows `/ops/`, `/api/t`, `/api/download`

## What OpenClaw may change

- `content/blog/posts/*.md`
- `content/blog/_ops/*` queue, calendar, clusters, audit notes
- Internal links, excerpts, FAQs, related slugs

## What OpenClaw must not treat as MaskWright product

- Do not add agent-browser features, CDP attach docs, or "AI runs your profiles"
- Do not put OpenClaw, MCP, or this desk on public marketing pages
- Public line stays: local profiles, no cloud sync, not an agent runtime

## Ads and Ezoic

Site ads for the Windows app live in dashboard chrome (`public/ads/v1/creatives.json`), not in launched tabs.

Ezoic for maskwright.com is configured in Cursor via MCP `user-ezoic-setup`. To change Ezoic:

1. Ask the Cursor agent, not a public blog post
2. Call `ask(message, thread)` on that MCP with a stable UUID thread
3. Record the decision in `memory/YYYY-MM-DD.md` without storing tokens

## Telemetry and downloads

- Anonymous usage pings: `lib/telemetry.ts`, `app/api/t/route.ts`
- Windows installer redirect: `app/api/download/route.ts`, `lib/download.ts`
- Do not log profile contents. Do not invent download stats.

## Useful paths

| Job | Path |
| --- | --- |
| Editorial policy | `content/blog/_ops/editorial-policy.md` |
| Writer brief | `content/blog/_ops/writer-brief.md` |
| Queue | `content/blog/_ops/queue.json` |
| Calendar | `content/blog/_ops/calendar.json` |
| Keywords | `content/blog/_ops/keywords.json` |
| OpenClaw runbook | `content/blog/_ops/openclaw.md` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
