---
slug: maskwright-is-not-an-agent-runtime
title: MaskWright is not an agent runtime
metaTitle: MaskWright is not an agent runtime on this automation desk
metaDescription: Product honesty for 0.1: no Playwright, Puppeteer, Selenium, or agent runtime. If you need those, use them on properties you own, outside this app.
excerpt: Product honesty for 0.1: no Playwright, Puppeteer, Selenium, or agent runtime. If you need those, use them on properties you own, outside this app.
author: Morgan Ellis
published: 2026-07-19
category: automation
tags: automation, ethics, maskwright
readingTime: 5
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on MaskWright is not an agent runtime beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, browserless-and-browserbase-are-not-profiles, playwright-and-real-browser-profiles, linkedin-and-automation-tools-we-refuse, puppeteer-stealth-is-not-a-profile, social-media-automation-tools-we-refuse, selenium-webdriver-flags, mcp-is-not-a-local-profile
---

I will say the product sentence without a roadmap tease. MaskWright 0.1 does not run Playwright, Puppeteer, Selenium, or an agent. It launches isolated profiles on Windows. If you need a driver or a planner, you run that software somewhere else, on properties you own.

This page exists because people search the brand next to "automation" and expect a connect URL. They have used Browserless, Playwright attach, or a model pane. They want that socket here. 0.1 does not ship it.

## What 0.1 actually is

A local app. No MaskWright account. Profiles on disk. Chromium 131 when the core is present, system Chrome or Edge as fallback, optional Firefox via Camoufox. Bring your own HTTP or SOCKS5. Bulk start and stop. Cookie and localStorage import for sessions you already own.

The public download is Windows 10 and 11, x64. Profiles live under the local data root. The profile index is encrypted. Chromium user-data directories and cookie import files are ordinary files on disk. We will not blur that.

Launch means you pick a named profile and a window opens. Isolate means that profile has its own cookies, storage, and fingerprint seed. Close the window and the folder stays. That is the product. It is not a planner.

Internal CDP applies fingerprint and cookie work. The debugging port is ephemeral and not a user API. There is no RPA. There is no window sync. There is no MCP server. [MCP is not a local profile](/blog/mcp-is-not-a-local-profile).

## What 0.1 is not

Not a Playwright product. [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles). There is no export and no supported attach to a work profile.

Not a stealth Puppeteer host. [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile). A patched driver is still a driver.

Not a Selenium grid. [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags). We will not hide those flags for you.

Not a cloud automation browser. [Browserless and Browserbase are not operator profiles](/blog/browserless-and-browserbase-are-not-profiles). A rented Chromium is a runtime someone else holds.

Not a social or LinkedIn bot. [Social media automation tools we refuse](/blog/social-media-automation-tools-we-refuse). [LinkedIn automation tools we refuse](/blog/linkedin-and-automation-tools-we-refuse).

The long comparison is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). This page is only the brand sentence: launch and isolate, not an agent runtime.

| Looking for | Use | Not MaskWright 0.1 |
| --- | --- | --- |
| Isolated logins on Windows | This app | A connect URL |
| End-to-end tests | Playwright / Puppeteer / Selenium | A profile export |
| Hosted Chromium for CI | Browserless-class grid | Local profiles |
| A model that clicks | A sandbox with no wallets | A prompt box in this UI |

## What you will not find in the UI

There is no prompt box. There is no record button. There is no "connect Playwright" toggle. There is no solver token field. There is no team seat that can drive your profiles from another city. There is no cloud phone.

There is a profile list, a launch action, proxy fields you fill with credentials you already have, and cookie import for sessions you already own. Bulk start is a loop over that list. It opens windows. It does not type. If that looks small, it is the 0.1 we shipped.

## The connect URL habit

Recent tooling taught people that a browser is a socket. Playwright can attach. Cloud vendors sell a websocket. MCP promos sell a tool that "uses the browser." Those are runtimes. They need a control plane.

0.1 uses CDP inside the launch path so fingerprint, cookies, and storage land before you sit down. The debugging port is chosen per launch. It is not a user API. We will not publish a connect recipe. Attaching a script to a live work profile is how a store login becomes a fixture.

If you need a driver, install the driver. Point it at a disposable directory on a host you own. Do not point it at the folder this app just opened.

## Where the other tools belong

On a staging host you operate. In a scripts directory. In CI. Against an official API. Never as a disguise for a work profile this app launched.

Install Playwright from its own docs. Install Puppeteer the same way. Keep Selenium on the QA grid. Keep an agent in a sandbox with no wallets and no ads-account cookies. None of those installs need a MaskWright checkbox.

[Download MaskWright](/download) if you need profiles. Install Playwright from Playwright if you need Playwright. Do not wait for us to merge the two.

The rest of the desk is [Automation](/blog/automation). This is the brand page that says no, on purpose, in 0.1.

## FAQ

### Will 0.2 add an agent?

This page is for the build that launches profiles and stops there. If that changes, it needs a new honesty note. I will not tease a hybrid here.

### Can I attach to the debugging port anyway?

The port is ephemeral and internal. It is not a user API. Do not build a product on it.
