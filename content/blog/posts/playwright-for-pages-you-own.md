---
slug: playwright-for-pages-you-own
title: Playwright for pages you own
metaTitle: Playwright for pages you own, not stealth
metaDescription: Playwright on properties you own. Product does not ship Playwright. This how-to keeps official automation on your own sites, outside MaskWright.
excerpt: Playwright on properties you own. Product does not ship Playwright. This how-to keeps official automation on your own sites, outside MaskWright.
author: Morgan Ellis
published: 2026-07-08
category: scraping
tags: scraping, research, playwright, how-to
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on Playwright for pages you own beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: what-is-web-scraping, anti-bot-pages-and-official-channels, scraping-behind-login-is-not-research, personal-data-and-collection, facebook-ads-library-research-locally, we-will-not-hide-a-scraper, storing-research-files, what-is-a-scraping-browser
---

Playwright belongs on properties you own. Your shop, your docs, your staging host, a checkout you can break without paging a stranger. MaskWright does not ship Playwright. This how-to keeps that driver in a scripts folder, pointed at your hosts, outside the profile store.

The automation cluster already split [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile) and [Playwright versus Puppeteer versus Selenium](/blog/playwright-vs-puppeteer-vs-selenium). This page is the scraping-desk application: when a headed driver is collection against furniture you control.

## What "you own" means

A hostname you operate. A staging URL on your laptop. A production shop whose robots and terms you also write. A login you created for your own admin.

It does not mean a SaaS inbox you pay for. Paying for LinkedIn or Shopify does not make their HTML your property. [Scraping behind a login is not research](/blog/scraping-behind-login-is-not-research). Official APIs and exports are still the door on those hosts.

It does not mean a public Ads Library card you want to harvest. [Facebook Ads Library research locally](/blog/facebook-ads-library-research-locally) is a person or an official tool. Not Playwright.

## Where the driver lives

A repo on disk, not under `%APPDATA%` next to `maskwright-data`. Disposable profile folders Playwright creates for a run. Logs you delete. [Local scripts stay outside work rooms](/blog/local-scripts-outside-work-rooms).

Do not point `userDataDir` at a MaskWright profile. Do not attach to a remote debugging port on a work profile. Internal CDP in 0.1 is for fingerprint and cookie apply. It is not a user automation API. [What a scraping browser is](/blog/what-is-a-scraping-browser) is a collector product. MaskWright is not one.

Traces and HAR files from your own host can live in the research folder. Traces from someone else's login cannot. [Storing research files](/blog/storing-research-files).

## Disposable directories

Playwright will create a profile folder if you ask it to. That folder is a fixture. Delete it after the run. Do not reuse it as a MaskWright profile. Do not copy cookies from `maskwright-data` into it so a spec can "be" the store login.

On Windows the fixture can live under the repo, for example `E:\work\shop-tests\.pw-user`. The store profile stays under the Electron user-data path. If you cannot point at two different trees, you have already mixed the jobs.

A headed run on localhost is still a driver. You will see automation flags. That is fine on a host you own. You are not hiding from yourself. You are checking a page.

| Target | Playwright | MaskWright profile |
| --- | --- | --- |
| `staging.yourshop.test` | Yes | Unnecessary |
| Your production admin, as a person | No, sit in the profile | Yes |
| Competitor checkout | No | No |
| Public Ads Library harvest | No | Cold look as a person, if at all |

## What I will not turn this how-to into

A stealth launch recipe. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper). No `navigator.webdriver` theater for third-party sites.

An anti-bot walkthrough. If your own site trips a wall you bought, you fix the allowlist. [Anti-bot pages and official channels](/blog/anti-bot-pages-and-official-channels). You do not learn bypass on a stranger's wall.

A personal-data harvest against a store you do not operate. [Personal data and collection](/blog/personal-data-and-collection).

A "Playwright plus antidetect" stack. Collection and operator profiles stay apart. A profile is a folder. A driver is a process.

## Honest uses on a Windows desk

Screenshot your own marketing pages in a few viewports. Click your own checkout after a deploy. Pull text from your own docs into a fixture. Hit your own staging API through a real browser when a unit test is not enough.

Use an honest UA on your own host if you want. On someone else's host, this how-to does not apply.

A Friday deploy is a good test of the split. The spec hits `https://staging.yourshop.test`. The Seller Central profile stays closed. If the spec fails, you fix your page. You do not point the same spec at a competitor checkout to "see how they do it." That is someone else's host.

MaskWright 0.1 has no Playwright, Puppeteer, or Selenium integration. It will not grow one so a spec file can share cookies with Seller Central. If you need the driver, you already know the install command. Point it at a hostname you can defend.

The [Scraping](/blog/scraping) hub will keep this URL narrow. Own host, outside the store, no disguise. Everyone else's pages go back to official channels or a slow public look.

If a teammate checks in a spec that hits a third-party login, reject the PR. The spec is not coverage. It is a harvest with a test runner's name on it.

## FAQ

### Can I point Playwright at a MaskWright user-data-dir?

Do not. Keep the fixture under the repo. Keep work profiles in the app.

### Does "I pay for Shopify" mean I own Shopify's HTML?

No. You own your shop's storefront if you operate it. You do not own the admin HTML as a scrape target. Use Shopify's APIs and exports for machine work.
