---
slug: playwright-vs-puppeteer-vs-selenium
title: Playwright versus Puppeteer versus Selenium
metaTitle: Playwright versus Puppeteer versus Selenium
metaDescription: One comparison of official APIs, not a 2020 stealth bake-off. Pick a driver for work you are allowed to automate. Do not pick a costume for a login.
excerpt: One comparison of official APIs, not a 2020 stealth bake-off. Pick a driver for work you are allowed to automate. Do not pick a costume for a login.
author: Morgan Ellis
published: 2026-07-30
category: automation
tags: automation, ethics, playwright, puppeteer, selenium, comparison
readingTime: 5
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on Playwright versus Puppeteer versus Selenium beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: headed-vs-headless-detection, selenium-webdriver-flags, ai-agents-in-a-browser-they-do-not-own, puppeteer-stealth-is-not-a-profile, window-sync-and-rpa-we-will-not-ship, playwright-and-real-browser-profiles, official-apis-versus-ui-bots, browser-automation-vs-a-real-profile
---

The pairwise posts from 2020 treat this as a stealth contest. Which driver is quieter. Which extra hides `webdriver`. That is the wrong table. This page compares official APIs for work you are already allowed to automate. If the job is a login you were not invited to drive, none of the three is the tool.

I keep MaskWright out of the bake-off. 0.1 does not export Playwright, Puppeteer, or Selenium. The product launches profiles. Drivers stay in a scripts folder.

## The job before the library

Ask two questions first.

Is there an official API or export for this data? If yes, use that. A UI bot is a worse client. [Official APIs versus UI bots](/blog/official-apis-versus-ui-bots) is the longer version.

Are you automating a property you own, a staging site, or a bot identity the platform issued? If no, stop. A better selector engine will not create permission.

Only then pick a driver. Official, here, means the library as its maintainers ship it. Not a fork that promises to be quieter. Not an extra that rewrites the runtime so a login stops noticing.

## What each official API is for

**Selenium** is the oldest WebDriver client. It is language-broad. QA orgs already have grids. It is verbose. It shows automation flags because it is automation. Read [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags) if you need that reminder, not a hide list.

**Puppeteer** is Chrome DevTools Protocol in Node, historically Chromium-first. It is fast to write for Chrome-shaped apps you own. The Stealth extra is not part of this comparison. [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile).

**Playwright** is the newer multi-browser client. Chromium, Firefox, WebKit. Good traces. Good for end-to-end tests on your own stack. It is still a driver. [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles).

| Question | Selenium | Puppeteer | Playwright |
| --- | --- | --- | --- |
| Official maintainer story | W3C WebDriver ecosystem | Chrome DevTools team lineage | Microsoft |
| Languages | Many | Node first | Node, Python, Java, .NET |
| Browsers you can test | Wide, through drivers | Chromium family first | Chromium, Firefox, WebKit |
| Best default use | Existing QA grids | Chrome-only app tests | New end-to-end suites |
| Is it a login disguise | No | No | No |

That table is enough. I will not add a "detection score" column. I have not run one, and a score would invite the wrong buyer.

## Headed and headless are modes, not products

All three can run headed or headless. Headless is convenient in CI. Headed is convenient on a developer box. Neither mode is a person. [Headed versus headless detection](/blog/headed-vs-headless-detection) explains the difference without a hide recipe.

If your CI needs a browser, use headless against staging. If a human needs to confirm a layout, sit in a real profile. Do not split the difference by driving a work folder from a test runner.

## What this comparison skips

I will not rank undetected-chromedriver forks. I will not recommend a stealth Playwright plugin. I will not tell you to sync a visible window to a script. That last one is [window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship).

I will not put an AI agent in the fourth column. An agent that drives a browser you do not own is a different architecture. See [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own).

The parent distinction is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). Drivers automate. Profiles isolate. One PC can hold both. They should not share a cookie folder.

## A practical pick

- Existing Java or C# grid: Selenium.
- Node team, Chrome-only internal app: Puppeteer is fine. Playwright is also fine.
- New suite, more than one engine, first-class traces: Playwright.
- Data job with a documented HTTP API: none of them. Use the API.

Install the library from its official docs. Point it at hosts you control. Give it a disposable profile directory. Delete that directory when the run ends.

If you came here hoping one of the three would open MaskWright profiles, the answer is no. Use the [Automation](/blog/automation) notes for the ethics and the product boundary. Use this page only to pick a driver for allowed work. [Compare local versus cloud](/compare) if you are still mixing a hosted browser with a local profile.

## FAQ

### Which library is hardest to detect?

That is the 2020 question. All three are drivers. Pick language and browser coverage. If detection is the buying criterion, the job is probably not allowed automation.

### Should I wrap any of them with stealth extras?

Not for work I will write about. Stock library, hosts you own, disposable directory. A stealth extra is still a patched driver.
