---
slug: mcp-is-not-a-local-profile
title: MCP is not a local profile
metaTitle: MCP is not a local MaskWright profile
metaDescription: We are not an MCP runtime. A model-control path is not a local Chromium folder. This page answers the promo query without becoming one. Authorized work only.
excerpt: We are not an MCP runtime. A model-control path is not a local Chromium folder. This page answers the promo query without becoming one. Authorized work only.
author: Morgan Ellis
published: 2026-07-22
category: automation
tags: automation, ethics, mcp, antidetect
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on MCP is not a local profile beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, social-media-automation-tools-we-refuse, agent-browsers-versus-operator-profiles, linkedin-and-automation-tools-we-refuse, local-scripts-outside-work-rooms, browserless-and-browserbase-are-not-profiles, captcha-solvers-are-not-research, maskwright-is-not-an-agent-runtime
---

A long promo can make MCP sound like a browser. It is not. Model Context Protocol is a way for a model to call tools. A local profile is a Chromium folder on disk. We are not an MCP runtime. This page answers the query without turning into the promo.

## What MCP is

MCP is a control path. A host talks to a server. The server exposes tools: files, APIs, sometimes a browser. The model picks a tool and the host runs it. That is useful when you already trust the host and the tools.

It is still a remote hand on whatever the tool can touch. If the tool is "open this URL and click," you are back in driver territory. [Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). If the tool is a hosted browser, you are in [Browserless and Browserbase are not operator profiles](/blog/browserless-and-browserbase-are-not-profiles).

## What a local profile is

A MaskWright profile is a user-data directory plus an encrypted index row. You launch it. You sit in it. Nothing in 0.1 registers that profile as a tool for a model.

The product honesty page is [MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime). The sibling comparison is [agent browsers versus operator profiles](/blog/agent-browsers-versus-operator-profiles).

## Why the promo query exists

People want a sentence like "connect Claude to your antidetect profiles." That sentence is a custody failure waiting to happen. A model with a tool that can see the ads-account cookies can spend, post, or export.

We will not ship that connector. We will not document pointing an MCP browser tool at a work profile. Scripts stay outside. [Local scripts stay outside work rooms](/blog/local-scripts-outside-work-rooms).

| Tool the model can call | Reasonable target | Not a target |
| --- | --- | --- |
| Files | A docs folder you chose | `maskwright-data` |
| HTTP API | A scoped key you issued | A live work cookie |
| Browser | Staging you own | Ads Manager, Seller Central |
| Shell | A locked-down account | Anything that can start a profile |

## Authorized uses that do not need the myth

You can use MCP against tools that are not your production cookie store. That is a reasonable host on a locked-down account, pointed at a docs folder you chose, an official API with a scoped key, or a staging site you own.

You cannot use it as a polite name for unofficial social bots. [Social media automation tools we refuse](/blog/social-media-automation-tools-we-refuse). You cannot use it as a LinkedIn inbox machine. [LinkedIn automation tools we refuse](/blog/linkedin-and-automation-tools-we-refuse). You cannot use it to buy captcha tokens. [Captcha solvers are not research](/blog/captcha-solvers-are-not-research).

## What a tool path can touch

A model with a file tool can read whatever directory you mounted. A model with a browser tool can see whatever session that browser holds. A model with a shell tool can run whatever the host user can run.

That is why "connect it to your profiles" is not a cute integration. It is a permission grant. We will not put profile start, cookie export, or a live CDP port on that grant.

If you already run MCP for docs and issue trackers, keep that host away from `maskwright-data`. Same rule as scripts. Adjacent folders still leak when a tool is too broad.

## What 0.1 will keep saying

No MCP server in the app. No tool listing for profiles. No "ask the model to open profile B." Launch and isolate. If you want a model to summarize text, paste the text. If you want a model to call an API, give it the API, not the cookie.

That is the whole answer to the promo. A protocol is not a profile. We will not become a runtime so the protocol can pretend otherwise.

If a blog from 2025 sold MCP as the missing antidetect layer, treat it as a category error. Antidetect, here, is isolation on a Windows disk. MCP is a way to let a model call tools. Crossing the two is how a work cookie store becomes a tool argument.

More of this cluster sits under [Automation](/blog/automation). Read it when a stack diagram puts MCP in the same box as a local Chromium folder. The box is wrong.

## FAQ

### Does MaskWright speak MCP?

No. 0.1 has no MCP server and no profile tools for a model.

### Can I run MCP on the same PC?

Yes, pointed at docs and APIs you chose. Keep the host away from the profile store. Do not mount `maskwright-data` as a file tool.
