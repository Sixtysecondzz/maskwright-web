---
slug: puppeteer-stealth-is-not-a-profile
title: Puppeteer Stealth is not a profile
metaTitle: Puppeteer Stealth is not a profile on this automation desk
metaDescription: Stealth plugins patch a driver. They do not create an operator profile. Zero hype: this note refuses to treat Puppeteer Stealth as a MaskWright substitute.
excerpt: Stealth plugins patch a driver. They do not create an operator profile. Zero hype: this note refuses to treat Puppeteer Stealth as a MaskWright substitute.
author: Morgan Ellis
published: 2026-08-03
category: automation
tags: automation, ethics, puppeteer, stealth
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on Puppeteer Stealth is not a profile beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: selenium-webdriver-flags, playwright-and-real-browser-profiles, playwright-vs-puppeteer-vs-selenium, browser-automation-vs-a-real-profile, headed-vs-headless-detection, maskwright-is-not-an-agent-runtime, ai-agents-in-a-browser-they-do-not-own, browserless-and-browserbase-are-not-profiles
---

Puppeteer Stealth has a reputation it did not earn. The plugin patches a list of automation tells. People then talk as if they minted a person. They did not. They patched a driver.

I will not write a setup guide. I will not rank evasion scores. This note exists because search still treats Stealth as a substitute for a local profile. It is not.

## What the plugin actually is

Puppeteer launches Chromium for a script. The Stealth extra applies evasions: it flips `navigator.webdriver`, it touches `window.chrome`, it trims a few headless leftovers. The process is still Puppeteer. The browser is still created to obey Node.

A profile is a folder that keeps cookies, a fingerprint seed, and a history of operator work. MaskWright profiles are that folder on disk. You can close the window, come back tomorrow, and the login is still there because the directory is still there. Puppeteer Stealth is a launch-time patch on a short-lived process. When Node exits, the patch exits. Those are not the same object with different branding.

If you want the family comparison, start with [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). If you want the Playwright version of this correction, read [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles). The Selenium version is [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags). None of those pages teach you to hide the flag.

## Why the disguise fails as a product story

Stealth lists rot. Chromium ships a new tell. The plugin lags. A site that wanted to stop bots still wants to stop bots. You are then in a patch race that has nothing to do with authorized work.

Even when a patch holds for a week, you do not have:

- A named profile you can reopen tomorrow with the same cookies
- Isolation from other logins on the same PC
- A local store that is not a script's temporary user-data-dir
- A human in the chair when the site asked for a human

Headed mode does not finish the disguise. [Headed versus headless detection](/blog/headed-vs-headless-detection) is about tells, not about a hide recipe. A headed Puppeteer window is still a driver with a GUI.

| Object | Lives where | Survives Node exit | Fit for a store login |
| --- | --- | --- | --- |
| Puppeteer + Stealth | A process your script started | No | No |
| MaskWright profile | A folder under local app data | Yes | Yes, if you own the account |
| Hosted Puppeteer | A vendor fleet | Until they delete the session | No |

## Official Puppeteer is fine. Stealth as identity is not.

Puppeteer is a reasonable client for pages you own. So is Playwright. So is Selenium. The choice among them is [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). Use the stock library. Talk to your own app. Tear the browser down.

The moment the pitch becomes "undetectable Puppeteer," the job has changed. That pitch is usually aimed at logins, captchas, and rate limits that were written to stop you. We do not help that job.

Cloud hosts that run Puppeteer for you have a second problem. They hold the session. [Browserless and Browserbase are not operator profiles](/blog/browserless-and-browserbase-are-not-profiles). A Stealth flag on a rented browser is still a rented browser.

Agent products that wrap the same idea, a model driving a browser you do not own, belong in [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own). Same custody issue. Same missing operator.

## What we ship instead

MaskWright 0.1 does not embed Puppeteer. It does not load stealth extras. It does not export a connect URL for your script. The product sentence is [MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime).

What it does: launch isolated Chromium or Firefox profiles on Windows, keep the index local, let you bring a proxy, let you import cookies you already own. An operator uses the window. A script stays in another directory.

If your work is allowed automation, use Puppeteer without the mythology. If your work needs a person, sit down. If your work was refused by the site, a plugin will not make it ethical.

More of that line lives under [Automation](/blog/automation). This page is only the Stealth correction: a patch is not a profile, and we will not sell it as one. [Download MaskWright](/download) if you need the folder. Keep Puppeteer in Node if you need the driver.

## FAQ

### Does Stealth make Puppeteer look like a normal user?

It patches a few well known tells. That is not the same as being a person, and it is not a stable identity you can reopen tomorrow. I have not run a lab score for this page, and I will not invent one.

### Should I use Stealth on my own staging site?

You do not need it. Allow the test user. A flag on a host you own is a configuration problem, not a costume problem.
