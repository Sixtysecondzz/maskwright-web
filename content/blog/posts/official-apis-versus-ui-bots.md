---
slug: official-apis-versus-ui-bots
title: Official APIs versus UI bots
metaTitle: Official APIs versus UI bots for the same job
metaDescription: If the platform has an API, that is the door. UI bots against a login you were not invited to automate are a different, refused job. Local Windows notes only.
excerpt: If the platform has an API, that is the door. UI bots against a login you were not invited to automate are a different, refused job. Local Windows notes only.
author: Morgan Ellis
published: 2026-07-24
category: automation
tags: automation, ethics, browser, bot
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on official APIs versus UI bots beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, debugging-ports-and-operator-risk, window-sync-and-rpa-we-will-not-ship, keyboard-timing-packs-are-theater, ai-agents-in-a-browser-they-do-not-own, batch-launch-is-not-a-farm, headed-vs-headless-detection, automation-ethics-we-follow
---

Most browser-bot tutorials skip the first fork. Does the platform already publish a door? If it does, a UI bot is not a clever alternative. It is a worse client with a higher chance of breaking a login you care about.

I write this from a Windows desk that launches profiles, not robots. MaskWright 0.1 will not host the bot. The ethics page is [automation ethics we follow](/blog/automation-ethics-we-follow). This note is only the fork.

## The door that was already built

An official API has a contract. Scopes. Keys. Rate limits that are written down. A changelog. A support path when the contract moves.

That contract is how ads platforms want you to pull reports. It is how a shop wants you to list products. It is how a social network wants you to schedule if they want you to schedule at all.

A UI bot has none of that. It clicks the same pixels a person sees. When the pixels move, the bot breaks. When the site adds a checkpoint, the bot is the reason.

If both can do the job, pick the API. Every time. A report pull, a catalog sync, a public ads library export, a partner feed: those are API jobs even when a YouTube video shows a bot clicking the same screen. The video is optimizing for a demo. You are optimizing for a login you still need next quarter.

## When a headed window is still the right tool

Not every task is a data job. Sometimes you are approving a creative. Sometimes you are walking a supplier portal that has no API. Sometimes you are a person because the terms said a person.

That is operator work. It belongs in a local profile, not in a replay. [Browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile) is the longer split. [Batch launch is not a farm](/blog/batch-launch-is-not-a-farm) if you need several authorized profiles open.

A headed driver watching that work is not a person. [Headed versus headless detection](/blog/headed-vs-headless-detection). Do not attach a script to the profile so you can save time on a login the API already covers.

| Job | First door | UI bot |
| --- | --- | --- |
| Ads report | Official reporting API | Breaks when the table moves |
| Catalog sync | Shop API | Clicks through admin HTML |
| Approve a creative | Person in the ads profile | Unnecessary |
| Staging checkout you own | Driver in CI, test user | Fine, as a test |
| Social inbox you were not given a tool for | Stop | Refused |

## UI bots I skip

I skip bots that drive a social inbox you were not given an official tool for, click like or connect on a schedule, walk a checkout you do not own, solve or skip a captcha so the walk can continue, or record a flow and play it across many profiles.

The last item is [window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship). Timing packs that make the replay look human are [keyboard timing packs are theater](/blog/keyboard-timing-packs-are-theater).

An agent that does the same clicks from a prompt is still a UI bot. [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own).

## Local Windows hygiene

Keep API keys in a secrets store or an env file that is not a Chromium profile. A key in a profile is a key in every extension and every screenshot that profile ever takes. Keep work profiles free of debug ports you do not understand. [Remote debugging ports and operator risk](/blog/debugging-ports-and-operator-risk).

If you write a small script for a property you own, it lives outside the work folders. It talks HTTP. It does not launch the ads-account profile.

If the platform has no API and the terms forbid automation, the remaining option is a person in a chair, slowly. That is not a failure of tooling. That is the rule.

## What a UI bot costs besides time

A bot that clicks a production UI shares the same cookie the person uses. One bad deploy of your script can change a budget, send a message, or export a customer list. An API key can be scoped and revoked. A stolen or confused session is a full login.

UI bots also teach the wrong monitoring habit. You start watching selectors instead of changelogs. When the platform wants you to move, they publish an API version. They do not publish a CSS class.

## A short decision order

1. Official API or documented export.
2. Official first-party UI, used by a person, in an isolated profile.
3. Driver against hosts you own, disposable directory, test identity.
4. Stop.

There is no step that says "bot the production login because the API is annoying." Annoying is not unauthorized, but annoying is also not a reason to risk the session.

The rest of this desk sits under [Automation](/blog/automation). Use the ethics page when you need the policy voice. Use this page when someone says a selector is just as good as a key.

## FAQ

### The API is rate limited and the UI is not. Can I bot the UI instead?

No. The UI limit is often unwritten and enforced later. Pay the tier, shrink the job, or wait. A selector is not a higher quota.

### Does MaskWright run UI bots?

No. 0.1 launches profiles. Bulk start opens windows. It does not click them.
