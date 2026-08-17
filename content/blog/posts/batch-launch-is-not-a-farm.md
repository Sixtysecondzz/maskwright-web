---
slug: batch-launch-is-not-a-farm
title: Batch launch is not a farm
metaTitle: Batch launch is not a farm playbook
metaDescription: The product can bulk start and stop rooms. That is operator convenience, not a farm. This how-to stays on batch control and the line we will not cross.
excerpt: The product can bulk start and stop rooms. That is operator convenience, not a farm. This how-to stays on batch control and the line we will not cross.
author: Priya Nair
published: 2026-06-25
category: automation
tags: automation, ethics, how-to, batch, browser
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on batch launch is not a farm beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, automation-ethics-we-follow, keyboard-timing-packs-are-theater, captcha-solvers-are-not-research, debugging-ports-and-operator-risk, local-scripts-outside-work-rooms, official-apis-versus-ui-bots, agent-browsers-versus-operator-profiles
---

The product can bulk start and stop selected profiles. That is a loop in the UI. It is not a volume playbook. I will write how the control works and where it stops.

Authorized profiles only. Brand pages you already run. Ads accounts the business already owns. Storefronts the entity already registered. Research looks at public pages. Extra logins that exist to dodge a limit are a platform problem. A batch button does not change that.

This how-to lives under [Automation](/blog/automation) because the volume query sits next to drivers and RPA. The line is the same line as the rest of the desk.

## What bulk start actually does

In MaskWright 0.1, bulk start and bulk stop walk a list of selected profiles sequentially. Each launch is a real Chromium or Firefox with its own user-data directory. RAM adds up. Disk adds up. The machine will swap if you ask it to open ten heavy admins on 16 GB.

There is no Playwright product. No Puppeteer export. No window sync. No RPA. Internal CDP is used for fingerprint, cookies, and optional tab open. It is not a user automation API.

I use bulk start on a Monday when I need Store, Ads, and Brand social for one entity. I do not use it to open a grid of extra identities.

| Control | What it is | What it is not |
| --- | --- | --- |
| Bulk start | Sequential launches you selected | Unattended fleet |
| Bulk stop | Sequential closes | A wipe of the disk |
| launchTabUrl timer | Optional URL reopen via CDP | A bot |
| Remote debugging port | Internal, ephemeral | A documented attach API |

## Where we stop

[Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile) is the parent split. [Automation ethics](/blog/automation-ethics-we-follow) is the policy. [Official APIs versus UI bots](/blog/official-apis-versus-ui-bots) is what to use when the platform already gave you an API.

We will not ship keyboard timing packs. [Keyboard timing packs are theater](/blog/keyboard-timing-packs-are-theater). We will not document captcha solvers as research. [Captcha solvers are not research](/blog/captcha-solvers-are-not-research). We will not tell you to attach an external driver to the debugging port. [Debugging ports](/blog/debugging-ports-and-operator-risk) is the risk note.

[Local scripts](/blog/local-scripts-outside-work-rooms) stay outside authorized profiles. [Agent browsers versus operator profiles](/blog/agent-browsers-versus-operator-profiles) if the new pitch is a model that clicks for you. MaskWright is not an agent runtime.

## Practical limits I actually hit

Four or five Chromium profiles at once is a busy morning on a mid tower. Cache-heavy ads UIs are worse than a cold research profile. Close what you are not using. Bulk stop exists for that.

If a site put a captcha in front of you, stop. A batch button is not a solver. If the platform asked for a human, send a human.

Do not schedule bulk start against a login you do not intend to sit in. Unattended headed browsers are how people turn a convenience into a bot and then act surprised.

## How I use the button without lying to myself

Monday I select Store, Ads, and Brand social for one entity and bulk start. I sit in them. I bulk stop when lunch hits so RAM comes back. I do not select every profile in the sidebar. I do not leave them running overnight on a timer. `launchTabUrl` exists for optional tab reopen. I treat that as an ad-feed hook, not a bot.

If a captcha appears, I stop the batch. If I needed a script against a site I own, Playwright stays outside these profiles, on staging. Internal CDP is not a documented attach API. I do not point an agent at the debugging port.

Fifty selected rows is a UI affordance, not capacity. Watch Task Manager. Close what you are not in.

## FAQ

### Can I start 50 profiles at once?

The UI will let you select them. RAM and Windows will not enjoy it. There is no farm mode. Disk and attention are the caps.

### Is bulk start the same as Playwright?

No. Sequential operator launches. No script runner. No selector API for you.

### Why put this under Automation?

Because search puts "batch" next to bots. The article exists to keep the button honest.
