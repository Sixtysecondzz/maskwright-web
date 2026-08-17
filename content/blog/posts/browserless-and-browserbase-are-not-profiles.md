---
slug: browserless-and-browserbase-are-not-profiles
title: Browserless and Browserbase are not operator profiles
metaTitle: Browserless and Browserbase are not profiles
metaDescription: Cloud automation browsers hold the session off-box. That is a hosted runtime, not an operator-owned profile sitting on your Windows disk. Authorized work only.
excerpt: Cloud automation browsers hold the session off-box. That is a hosted runtime, not an operator-owned profile sitting on your Windows disk. Authorized work only.
author: Morgan Ellis
published: 2026-06-29
category: automation
tags: automation, ethics, browserless
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on browserless and Browserbase are not operator profiles beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: maskwright-is-not-an-agent-runtime, linkedin-and-automation-tools-we-refuse, browser-automation-vs-a-real-profile, social-media-automation-tools-we-refuse, playwright-and-real-browser-profiles, mcp-is-not-a-local-profile, puppeteer-stealth-is-not-a-profile, agent-browsers-versus-operator-profiles
---

Browserless and Browserbase are real products. They host a browser your script can connect to. That is a useful sentence for CI. It is a bad sentence for a store login. A hosted runtime holds the session off-box. An operator profile sits on your Windows disk. Those are not the same object.

I am not writing a teardown of their pricing. I am writing the custody line.

## What a cloud automation browser is

You send Playwright or Puppeteer to a websocket. Their fleet launches Chromium. Your code drives it. Cookies, screenshots, and logs live where their disk and your pipeline agree to put them.

That is close to [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles) and [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile). The extra fact is location. The cookies are not in `maskwright-data`. They are in a vendor region.

[Agent browsers versus operator profiles](/blog/agent-browsers-versus-operator-profiles) covers the planner variant. MCP as a pipe is [MCP is not a local profile](/blog/mcp-is-not-a-local-profile). The parent split is [browser automation versus a real profile](/blog/browser-automation-vs-a-real-profile).

## When the hosted runtime is fine

End-to-end tests on a staging host you own. Screenshot jobs for a marketing site you operate. CI that must not keep a GPU on your laptop.

Give those runs a disposable identity. Do not reuse a production cookie. Tear the session down.

## When it is the wrong machine

Ads accounts. Seller Central. Bank and payout tabs. Brand social and LinkedIn seats ([LinkedIn automation tools we refuse](/blog/linkedin-and-automation-tools-we-refuse)). Any unofficial engagement bot ([Social media automation tools we refuse](/blog/social-media-automation-tools-we-refuse)).

If the login is the business, do not put it on a fleet you do not hold. Sit in a local profile, or use the official API.

| Question | Hosted automation browser | Local MaskWright profile |
| --- | --- | --- |
| Where cookies live | Vendor disk / your pipeline | Operator Windows disk |
| Who can replay the session | Often anyone with the recording | You, unless you recorded it |
| Good default use | CI on hosts you own | Authorized logins |
| 0.1 relationship | Separate install | This app |

## Custody, logs, and who can replay the session

A hosted browser can keep recordings because that is how you debug a flaky test. Those recordings are a gift in CI. They are a liability when the page was Ads Manager. Ask who can open the replay. Ask how long it lives. Ask whether a support engineer can see the cookie.

A local profile can be screen-recorded too, by you, on purpose. The default is that the cookies stay in a folder you can unplug. That default is the product difference.

Stealth extras on a hosted browser do not move the folder back to your disk. They only dress the driver that already left the building.

## What MaskWright is instead

MaskWright 0.1 is launch and isolate on the operator PC. No Playwright connect URL. No hosted browser. [MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime).

You can still use Browserless or Browserbase tomorrow for a test grid. Use them as a grid. Point them at staging. Give them a bot identity. Delete the session. Do not use them as a locker for work cookies, and do not ask us to bridge the two.

A connect URL in a `.env` file is still a connect URL. If that URL can open a production login, you have already lost the isolation story this blog is for.

I am not asking you to abandon hosted browsers for tests. I am asking you to stop calling them profiles. A profile has a folder you can back up with the rest of the PC. A runtime has a bill and a region. Use the bill for CI. Use the folder for logins.

The cluster is [Automation](/blog/automation). This page exists so the brand names in the query do not get treated as antidetect profiles. They are hosted drivers. Fine for CI you own. Wrong for a session you cannot afford to copy. [Compare local versus cloud](/compare) if that is the buying question.

## FAQ

### Are Browserless and Browserbase "bad"?

No. They are CI products. The mistake is using them as a locker for Seller Central.

### Can MaskWright connect to their websocket?

No. 0.1 has no Playwright connect URL and no hosted browser.
