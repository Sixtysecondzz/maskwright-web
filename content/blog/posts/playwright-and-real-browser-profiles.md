---
slug: playwright-and-real-browser-profiles
title: Playwright is not a MaskWright profile
metaTitle: Playwright is not a MaskWright profile
metaDescription: Product has no Playwright export. Say that plainly. This page covers why a Playwright context is not a local MaskWright room, without a stealth recipe.
excerpt: Product has no Playwright export. Say that plainly. This page covers why a Playwright context is not a local MaskWright room, without a stealth recipe.
author: Morgan Ellis
published: 2026-07-28
category: automation
tags: automation, ethics, playwright, antidetect
readingTime: 5
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on Playwright is not a MaskWright profile beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: playwright-vs-puppeteer-vs-selenium, playwright-for-pages-you-own, maskwright-is-not-an-agent-runtime, puppeteer-stealth-is-not-a-profile, browser-automation-vs-a-real-profile, selenium-webdriver-flags, browserless-and-browserbase-are-not-profiles, headed-vs-headless-detection
---

I get this question in the same form every month. Someone has a Playwright script, a blocked run, and a hope that MaskWright will hand them a "real" browser they can drive. We do not ship that handle. 0.1 launches and isolates profiles. It is not a Playwright product.

Say it once so the rest of the page can stay useful. There is no Playwright export. There is no supported way to point `chromium.connect` at a work profile and call that a feature. If you need Playwright, you run Playwright on properties you own, in a folder that is not a live account profile.

## Two different objects

A Playwright context is a programmable browser. You create it, you tell it where to go, you read the DOM, you tear it down. Persistence is optional and usually thin. The process exists to obey a script.

A MaskWright profile is a local Chromium user-data directory with its own cookie store, storage, and fingerprint seed. An operator sits in that window. The app can bulk start and stop profiles. It uses CDP internally to apply fingerprint and cookie work. That port is not a user automation API.

Those objects can live on the same PC. They should not share a folder. A script that writes into a work profile is how a store login becomes a test fixture.

The longer comparison is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile). This note is only about Playwright, because a lot of 2023 articles treat "Playwright antidetect" as a product category. It is not one we sell.

## Where Playwright belongs

Playwright is a good official tool. Microsoft documents it. It talks to Chromium, Firefox, and WebKit. It is the right client for:

- End-to-end tests on a site you operate
- Screenshots and crawls of properties you own
- Internal admin flows you were asked to automate
- CI that hits staging, not a stranger's login

That job has its own page: [Playwright for pages you own](/blog/playwright-for-pages-you-own). The rule is ownership, not stealth.

If you are choosing among drivers for allowed work, read [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). Pick the API. Do not pick a disguise.

| Question | Playwright context | MaskWright profile |
| --- | --- | --- |
| Who drives it | Your script | You |
| Typical lifetime | One test run | Months, same folder |
| 0.1 integration | None | Launch, isolate, import cookies |
| Good default use | Staging you own | Authorized logins on Windows |

## What a context is not

A Playwright context is not a stable operator identity. It does not replace a local profile store. It does not encrypt an index of profiles. It does not keep ads-account cookies on your disk while you go to lunch.

Stealth wrappers around Playwright are still wrappers around a driver. They sit in the same family as [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile). Patching `navigator.webdriver` does not create a profile. It creates a patched driver. Sites that look for drivers keep looking.

Headed Playwright is still Playwright. [Headed versus headless detection](/blog/headed-vs-headless-detection) covers the tells. This page will not teach you to hide them. If the site did not invite a bot, a headed window is not a permission slip.

## Cloud Playwright is still a driver

Services that host a browser for your script hold the session off-box. That is a runtime you rent. It is not an operator profile on a Windows disk. [Browserless and Browserbase are not operator profiles](/blog/browserless-and-browserbase-are-not-profiles) is the custody note.

If the login matters, do not put it in a rented browser you drive from a pipeline. Sit in a local profile, or use the official API the platform already published.

## What 0.1 actually does

MaskWright 0.1 is launch and isolate. Profiles live under the local data root. You can import cookies and localStorage into a profile you own. You can attach a proxy you brought. You can start several profiles from the toolbar.

You cannot ask the app for a Playwright browser object. You should not point a script at a work profile's debugging port and call that supported. The honest product page is [MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime).

Selenium users hear the same line. [Selenium WebDriver flags a site can see](/blog/selenium-webdriver-flags) exists because flags are visible and we will not walk through hiding them. Playwright users get this page instead of a recipe.

## The practical split on one PC

Keep a `scripts` directory. Keep work profiles in the app. Never aim the script at the work folder. If a test needs a browser, let Playwright create its own profile directory and delete it when the test ends.

If a human needs to click, the human uses the profile. If a machine needs to click on a property you own, the machine uses Playwright. If a machine wants to click on a property you do not own, stop.

That is the whole integration story. There is not a deeper one coming in 0.1. [Download MaskWright](/download) if you need profiles. Install Playwright from its own docs if you need Playwright.

The rest of this cluster lives under [Automation](/blog/automation). Use those notes when you are choosing a driver, skipping a stealth pack, or deciding that the official API was the door all along.

## FAQ

### Will MaskWright add a Playwright export later?

Not in 0.1, and this page is not a teaser. If that changes, it needs a new honesty note. Today the app launches profiles and stops there.

### Can I copy cookies from a profile into Playwright?

You can export cookies as a backup you hold. Feeding that file into a collector is how a login becomes a pipeline. Keep exports off the work profile, and do not use them as a shortcut around a login you were not invited to automate.
