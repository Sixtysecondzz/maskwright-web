---
slug: ai-agents-in-a-browser-they-do-not-own
title: AI agents in a browser they do not own
metaTitle: AI agents in a browser they do not own
metaDescription: Agent browsers run someone else's runtime around your session. Compare that to an operator-owned local profile, and keep store logins out of the agent.
excerpt: Agent browsers run someone else's runtime around your session. Compare that to an operator-owned local profile, and keep store logins out of the agent.
author: Morgan Ellis
published: 2026-06-21
category: automation
tags: automation, ethics, agent, browser
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on aI agents in a browser they do not own beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, window-sync-and-rpa-we-will-not-ship, headed-vs-headless-detection, official-apis-versus-ui-bots, playwright-vs-puppeteer-vs-selenium, debugging-ports-and-operator-risk, selenium-webdriver-flags, keyboard-timing-packs-are-theater
---

The new pitch is a model that uses the web for you. The demo is always the same. A chat box, a live browser pane, a store login completed while you watch. The pane is not yours. The runtime is not yours. The cookies sit where the vendor put them.

I want that custody fact in the first screen. An AI agent in a browser it does not own is a remote operator with your session. That is not an antidetect profile on a Windows disk.

## What an agent browser is

An agent browser is a hosted or bundled Chromium that a model drives. You type a goal. The model clicks. The vendor sees the session at least as much as you do. Sometimes the browser lives in their cloud. Sometimes a local window is still wired to their planner.

The architecture is closer to a driver than to a profile. Playwright, Puppeteer, and Selenium are explicit about that. Agent products hide the driver behind a prompt. The demo hides the custody question: who can read the cookie after you close the tab. The comparison of the explicit tools is [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). The parent split is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile).

A headed live view does not change custody. [Headed versus headless detection](/blog/headed-vs-headless-detection) is about tells. Here the tell that matters is who holds the folder.

## What an operator profile is

An operator profile is a local user-data directory you can copy, back up, and keep offline. You start it. You type. You close it. MaskWright 0.1 is that launcher. It is not an agent runtime. It does not take a goal and click for you.

If you need the model to summarize a public page, paste the text. If you need the model to call an API you already use, call the API. [Official APIs versus UI bots](/blog/official-apis-versus-ui-bots) still applies when the bot has a friendly name.

| Question | Agent browser | Operator profile |
| --- | --- | --- |
| Who picks the next click | A model or planner | You |
| Where cookies live | Often a vendor runtime | Your Windows disk |
| 2FA | Easy to paste into the pane | Stays on a device you hold |
| Fit for Seller Central | No | Yes, if you own the account |
| MaskWright 0.1 | Not shipped | Launch and isolate |

## Keep store logins out of the agent

This is the practical rule.

Do not let an agent open Seller Central, Ads Manager, a bank, or a brand social login. Those sessions are the business. A vendor breach, a prompt injection, or a confused click is enough to spend money or dump a session.

Do not paste 2FA codes into an agent pane. Two-factor stays on a device you hold.

Do not ask an agent to warm up a login with human typing. [Keyboard timing packs are theater](/blog/keyboard-timing-packs-are-theater). A model firing delayed key events is still a bot.

If the platform gave you an official integration, use that. If it did not, a person sits in a local profile.

## What we will not add to look current

We will not ship an agent that drives MaskWright profiles. We will not ship window sync so a planner can puppet the visible window. [Window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship).

We will not document attaching a model to the internal debugging port. That port is ephemeral and internal. The risk note is [remote debugging ports and operator risk](/blog/debugging-ports-and-operator-risk).

We will not treat automation flags as a problem the agent should hide. If a site asked for a human, send a human. Selenium users already know the flags are visible. [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags).

## When an agent is still a reasonable tool

- Drafting copy from notes you already have
- Summarizing documents you uploaded on purpose
- Calling APIs with keys you issued for that job
- Driving a throwaway browser against a staging app you own

Those jobs do not need your production cookie store. Give the agent a sandbox with no wallets and no ads accounts.

The sibling architecture page is [agent browsers versus operator profiles](/blog/agent-browsers-versus-operator-profiles). This commercial note is the warning: the browser in the demo is not a profile you own.

MaskWright stays on the operator side. Launch, isolate, sit down. The [Automation](/blog/automation) cluster is where we keep saying no to runtimes that want the chair. [Download MaskWright](/download) if you need the local folder.

## FAQ

### Is a local agent browser safer than a cloud one?

Safer for latency, maybe. Safer for custody, only if the planner, logs, and screenshots also stay on your disk. A local window wired to a vendor planner is still their runtime.

### Can I use an agent on public pages?

For summaries of text you already have, yes. For clicking through a site that forbade bots, no. Paste the text. Do not hand the session to the model.
