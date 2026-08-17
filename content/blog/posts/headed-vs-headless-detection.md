---
slug: headed-vs-headless-detection
title: Headed versus headless detection
metaTitle: Headed versus headless detection tells
metaDescription: Headless still leaves tells. Headed is not invisible either. This page covers detection differences, and it will not teach you to hide a headless driver.
excerpt: Headless still leaves tells. Headed is not invisible either. This page covers detection differences, and it will not teach you to hide a headless driver.
author: Morgan Ellis
published: 2026-07-07
category: automation
tags: automation, ethics, headless, browser
readingTime: 6
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on headed versus headless detection beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: browser-automation-vs-a-real-profile, ai-agents-in-a-browser-they-do-not-own, playwright-vs-puppeteer-vs-selenium, window-sync-and-rpa-we-will-not-ship, selenium-webdriver-flags, official-apis-versus-ui-bots, puppeteer-stealth-is-not-a-profile, debugging-ports-and-operator-risk
---

Headless used to be a punchline. Pages looked for `HeadlessChrome` in the user agent and called it a day. That era is over, and the replacement myth is worse. People now launch a headed driver and talk as if the window made them a customer. It did not.

This page is about the difference a site can see. It is not a hide-the-driver guide. If you need a bot, use a door that allows bots. If you need a person, sit in a profile that is not scripted.

## Two launch modes, one job

Headless means the browser runs without a visible window. CI likes it. Servers like it. It saves GPU and attention.

Headed means a window appears. A developer can watch the test. A marketer can screenshot the run. The process is still created by a driver.

Both modes exist in Playwright, Puppeteer, and Selenium. The library comparison is [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). Mode is a flag, not a product.

A MaskWright profile is headed because an operator uses it. That profile is not a driver. The parent essay is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile).

## What still leaks from headless

I will stay at the class level.

Headless Chromium has historically advertised itself in the user agent, in Client Hints, and in chrome runtime shapes. Even when the string is cleaned, the environment is still a server-shaped box: missing GPU details, odd screen metrics, no real window chrome, fonts that only a container installed.

New headless is closer to headed than the old mode was. Closer is not identical. A page that cares will still see a control channel, a WebDriver or CDP client, and behavior that arrives in bursts.

If you are testing your own app, this does not matter. Allow the CI user. Do not treat your staging bot like an attacker.

## What headed fails to hide

A headed driver still sets automation flags. [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags) is the Selenium note. Puppeteer and Playwright have the same class of signal. [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile) is the plugin correction.

The window also lies in human terms. A person pauses. A person mis-clicks. A person looks at a second monitor. A script issues a chain of commands with driver timing. Keyboard packs that fake the pauses are theater. A visible rectangle is not a biography.

An agent product that shows you a live view of a browser it owns is still not your profile. [AI agents in a browser they do not own](/blog/ai-agents-in-a-browser-they-do-not-own).

| Mode | Useful for | Still a driver | Person in the chair |
| --- | --- | --- | --- |
| Headless | CI, servers, your own hosts | Yes | No |
| Headed driver | Watching a test locally | Yes | No |
| MaskWright profile | Authorized logins you operate | No | Yes |

## Why I will not publish a hide list

The search intent for this keyword is usually "how to make headless look headed." That intent is how people attach collectors to logins. I will not provide the checklist.

We also will not ship window sync so a script can puppet a visible profile and call it headed authenticity. [Window sync and RPA we will not ship](/blog/window-sync-and-rpa-we-will-not-ship).

If a site presents a captcha or a terms wall to your driver, that is a stop. Official channels are [official APIs versus UI bots](/blog/official-apis-versus-ui-bots).

## Operator risk that is not a detection score

Headed drivers often enable a debugging port so the library can talk to the browser. Leaving that port open on a work profile is a different problem than UA strings. [Remote debugging ports and operator risk](/blog/debugging-ports-and-operator-risk) is the hygiene note. MaskWright uses an ephemeral port internally. That is not a user automation API.

Do not point a headed test at a live ads-account folder so you can "watch it work." Watch a disposable directory. Keep the real cookie store closed.

## How I choose a mode on this desk

- CI against our own hosts: headless, stock library, test identity.
- Local debug of our own hosts: headed, same disposable directory.
- Real accounts: no driver. A local profile. A person in the chair.
- Public research we are allowed to do: official API first, then a slow honest client, never a headless disguise.

MaskWright 0.1 does not offer a headless product mode for work profiles. It launches windows for operators. If you need headless, you are in a scripts folder, on a target you own.

The rest of the cluster is under [Automation](/blog/automation). Use those pages when the question is ethics, APIs, or why a headed profile is still not a driver.

## FAQ

### Is new headless undetectable?

It is quieter than the old `HeadlessChrome` string. Quieter is not a person. I have not published lab scores, and I will not invent them.

### Should I run MaskWright headless?

Not as a product mode in 0.1. The app is for operators who sit in a window. Headless belongs in CI against hosts you own.
