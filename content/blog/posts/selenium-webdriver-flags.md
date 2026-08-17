---
slug: selenium-webdriver-flags
title: Selenium WebDriver flags a site can see
metaTitle: Selenium WebDriver flags a site can see
metaDescription: WebDriver flags are visible. There is no product integration. This page explains the tells and stops at official APIs. No hide-the-driver walkthrough.
excerpt: WebDriver flags are visible. There is no product integration. This page explains the tells and stops at official APIs. No hide-the-driver walkthrough.
author: Morgan Ellis
published: 2026-08-06
category: automation
tags: automation, ethics, selenium, detection
readingTime: 5
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on Selenium WebDriver flags a site can see beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: playwright-vs-puppeteer-vs-selenium, puppeteer-stealth-is-not-a-profile, headed-vs-headless-detection, playwright-and-real-browser-profiles, ai-agents-in-a-browser-they-do-not-own, browser-automation-vs-a-real-profile, window-sync-and-rpa-we-will-not-ship, maskwright-is-not-an-agent-runtime
---

Selenium is old enough that the internet still treats "undetected ChromeDriver" as a genre. The short 2020 pages all end the same way: here is how you hide the flag. I will not write that ending.

WebDriver leaves marks a page can read. That is the point of this note. MaskWright has no Selenium integration. 0.1 will not grow one so you can park a driver inside a work profile.

## What a site can see without a thriller

I am not going to publish a bypass list. I will name the class of signal, because operators keep being surprised that a "normal looking" Chrome window still reports as automated.

The WebDriver protocol is a control channel. Chromium started for that channel is not the same process as Chromium started by a person. Pages can ask `navigator.webdriver`. They can look at chrome runtime leftovers, window sizes that only a driver uses, and headless traits that survive a headed switch. They can watch for command patterns that no person produces.

[Headed versus headless detection](/blog/headed-vs-headless-detection) covers the headed disguise. Headed Selenium is still Selenium. A GUI does not retire the protocol.

None of this is a puzzle you are supposed to solve for a site that forbade bots. It is a reminder that the flag is doing its job.

## Why the old articles are the wrong genre

Those 400-word posts exist to rank on "selenium detection." They promise you can keep using a driver against a login after the site said no. That is the refused angle here.

If the property is yours, you do not need to hide WebDriver. You allow the test user. You hit staging. You use a bot account the platform issued. You call the official API when the job is data, not clicks.

If the property is not yours, hiding the flag is not research. It is trespass with extra steps.

The same correction applies to [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile) and to [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles). Plugins that flip `webdriver` to false are still driver patches. I will not document how to apply them.

## Selenium as an official tool

Selenium is still a reasonable choice for allowed UI tests. It speaks a standard protocol. QA teams know it. Language bindings are everywhere. When you compare it to Playwright and Puppeteer for work you may automate, use [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). The criteria are language, browser coverage, and CI fit. The criterion is not "which one hides better."

Keep that Selenium process out of operator profiles. A work profile is a cookie store you reopen. A test run is a fixture. Mixing them is how production cookies land in a grid.

| Situation | What I do | What I skip |
| --- | --- | --- |
| Staging checkout I operate | Stock Selenium, test user | Flag hiding |
| Ads report the platform exports | Official API | A Selenium click path |
| Brand login I am hired to run | Person in a local profile | ChromeDriver |
| Site that forbade bots | Stop | Undetected forks |

## What 0.1 will not ship

We will not wrap Selenium. We will not ship window sync so a driver can puppet a visible profile. That boundary is [window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship). We will not host an agent that drives the same window. See [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own).

MaskWright 0.1 launches isolated profiles. Internal CDP applies fingerprint and cookie work. That is not a Selenium endpoint. The product sentence is [MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime).

The architectural split is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). Drivers on one side. Operator profiles on the other.

## What to do instead of a hide guide

1. Confirm you are allowed to automate the target.
2. Prefer the official API or a documented export.
3. If you need UI tests, run Selenium against your own stack with a test identity.
4. Leave work profiles closed while the test grid is up.
5. If a captcha or a terms page stops you, stop.

That is the entire Selenium story I will tell. Flags are visible. I will not help you unsee them.

The rest of the cluster sits under [Automation](/blog/automation). Use it when you need ethics, API-versus-bot, or a reminder that a headed profile is not a driver. [Download MaskWright](/download) if you need the profile side.

## FAQ

### Is navigator.webdriver the only tell?

No. It is the one people quote. Runtime leftovers, window geometry, and command cadence sit next to it. Naming the class is enough. A checklist would be a hide guide.

### Can I use Selenium with MaskWright profiles?

Not as a supported feature. Keep Selenium on a disposable directory. Keep production logins in the app.
