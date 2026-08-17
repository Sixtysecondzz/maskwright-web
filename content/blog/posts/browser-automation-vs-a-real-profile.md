---
slug: browser-automation-vs-a-real-profile
title: Browser automation versus a real profile
metaTitle: Browser automation versus a real profile
metaDescription: A headed profile is not a driver. This pillar separates operator rooms from Playwright, Puppeteer, and Selenium so the two jobs stop sharing one costume.
excerpt: A headed profile is not a driver. This pillar separates operator rooms from Playwright, Puppeteer, and Selenium so the two jobs stop sharing one costume.
author: Morgan Ellis
published: 2026-05-17
category: automation
tags: automation, ethics, comparison, browser
readingTime: 9
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on browser automation versus a real profile beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: playwright-and-real-browser-profiles, official-apis-versus-ui-bots, headed-vs-headless-detection, what-is-web-scraping, maskwright-is-not-an-agent-runtime, navigator-webdriver-and-automation-flags, puppeteer-stealth-is-not-a-profile, browserless-and-browserbase-are-not-profiles
---

One thing worth flagging before the rest of this page: a visible Chrome window is not proof that a person is in control. Playwright, Puppeteer, and Selenium can all show a window. MaskWright 0.1 can also show a window. Those are two different products that happen to draw rectangles.

I keep a scripts folder and a set of named profiles on the same Windows 10 PC. The scripts talk to hosts I operate, or they call APIs I already have keys for. The profiles hold logins I am allowed to use. They do not share a user-data directory. When someone asks me for "antidetect automation," they usually want those two folders to become one. That is how a store login turns into a test fixture.

This pillar is the long version of that split. The rest of the [Automation](/blog/automation) notes stay shorter because this page holds the map.

## What each object is for

A driver exists so a program can open a browser, hit a URL, read the tree, and exit. Persistence is optional. Microsoft documents Playwright. The Chrome DevTools lineage documents Puppeteer. The WebDriver ecosystem documents Selenium. All three are good tools. None of them is a login you mean to reopen tomorrow.

A profile exists so a person can keep cookies, localStorage, and a fingerprint seed in one folder. You start it. You type. You close it. The folder is still there after lunch. That is the job MaskWright 0.1 actually ships: launch and isolate on Windows 10 and 11 x64. It is not an RPA product. It is not a Playwright product.

![A local automation bench next to a closed script folder](/blog/blog-automation-bench.png "Keep the driver in a scripts directory. Keep production logins in a profile you open by hand.")

Marketing pages blur the columns because "headed plus fingerprint" sounds like a person. It is still a process with a control channel. [Playwright is not a MaskWright profile](/blog/playwright-and-real-browser-profiles) covers that mix-up for one library. [Puppeteer Stealth is not a profile](/blog/puppeteer-stealth-is-not-a-profile) covers the plugin version.

## What a site can actually see

I will stay at the class of signal. I am not going to publish a hide list.

A page can ask whether a WebDriver or CDP client is in control. It can read `navigator.webdriver`. It can look at runtime shapes that show up when Chromium was started for a script. It can compare screen size, GPU strings, and fonts to the user agent. It can watch a burst of commands that no person produces.

Headless used to advertise itself in the user agent. Newer headless is quieter and still not a person. Headed mode shows a rectangle and still leaves a control channel. [Headed versus headless detection](/blog/headed-vs-headless-detection) is the sibling note. [navigator.webdriver and automation flags](/blog/navigator-webdriver-and-automation-flags) is the flag note. Neither page is a bypass guide.

If you are testing a host you operate, none of this is a crisis. Allow the test user. Do not treat your own staging bot like an attacker. If you are pointing the same driver at a login you were not invited to automate, the flags are doing useful work.

## Official APIs are the first fork

Before you pick Playwright, ask whether the platform already published a door. Ads reports, catalog exports, public research feeds, partner APIs. A UI bot is a worse client for those jobs. It breaks when the pixels move. It also puts a production cookie store in the blast radius of one bad selector.

[Official APIs versus UI bots](/blog/official-apis-versus-ui-bots) is the short fork. The order I use on a Tuesday:

1. Official API or documented export.
2. A person in an isolated profile, for work that still needs eyes.
3. A stock driver against hosts you own, disposable directory, test identity.
4. Stop.

There is no step that says "put the production login in Playwright and add stealth." If a landing page starts at that step, close it.

## Collection is a different cluster

People arrive here from scraping keywords. Collection has its own hub. [What web scraping is](/blog/what-is-web-scraping) is the definition. The rule that belongs on this pillar is narrower.

A headed profile is not permission to harvest a page. Authorization is permission. robots.txt and terms are part of that. A captcha is a stop, not a feature request. I will not teach captcha farms. I will not teach hiding WebDriver so a collector can continue.

If the job is public pages you are allowed to read, use a slow honest client or the official feed. If the job is a dashboard you already pay for, sit in the profile. If the job is volume against a stranger's login, that job is refused.

## Cloud runtimes are still drivers

A websocket to a hosted Chromium is convenient for CI. Browserless and Browserbase live in that sentence. Cookies, screenshots, and logs live where their disk and your pipeline agree to put them. That is a runtime you rent. It is not an operator profile on a Windows disk.

[Browserless and Browserbase are not operator profiles](/blog/browserless-and-browserbase-are-not-profiles). The same custody line applies to agent browsers. A model that clicks in a pane you do not hold is a remote operator with your cookies. Keep store logins out of that pane.

MCP is a tool protocol, not a Chromium folder. MaskWright is not an MCP runtime. A connect URL is not a profile.

## What MaskWright 0.1 actually does

I want this section boring, because the search results are not.

The public download is Windows 10 and 11, x64. There is no MaskWright account and no cloud profile sync. Profiles live under the local data root. The profile index `profiles.json` is encrypted with AES-256-GCM. The Chromium user-data directories on disk are ordinary browser folders. Cookie import files are plaintext JSON. We will not pretend otherwise.

You can attach a proxy you brought. HTTP and SOCKS5. Language and timezone can follow the exit geo the app looks up on start. You can import a cookie store you already own. You can load unpacked extensions into one profile. You can start and stop a selected batch from the toolbar. That batch opens windows. It does not type.

The browser core is Chromium 131 when the custom build is present. If it is missing, the app can fall back to system Chrome or Edge. Firefox via Camoufox is in the code. The homepage does not sell it as the main story.

Internal CDP applies fingerprint overrides, cookies, and optional tab opens. The remote debugging port is chosen per launch. It is not documented as a user automation API. Do not build a product on attaching to it.

There is no Playwright export. No Puppeteer extra. No Selenium binding. No RPA recorder. No window sync. No cloud phone. No captcha hook. Ads, when they appear, live in dashboard chrome we draw, not as a feature inside your work tabs.

[MaskWright is not an agent runtime](/blog/maskwright-is-not-an-agent-runtime) is the brand-sized version of this list. [Download MaskWright](/download) if you need profiles. Install Playwright from Playwright if you need Playwright.

## How both objects share one PC

Work profiles live in the app. They have names. They hold accounts you are allowed to run. You open them with your hands. You close them when you stand up.

Scripts live in another directory. They talk HTTP, or they launch their own browser into a throwaway user-data-dir, or they run in CI against staging. When the run ends, that directory dies.

The scripts folder does not receive a path into `maskwright-data`. The work profile does not receive a Playwright handle. If you need to watch a test, watch the throwaway window. If you need to approve a creative, open the ads profile. If you need both in one morning, do them in sequence, not in one process.

Bulk start is for the morning you need four authorized profiles on screen. It is not a fleet controller. Window sync and RPA are competitor features we did not ship in 0.1. Keyboard timing packs that fake tired wrists are theater. I will not add a humanize layer so a replay looks sleepy.

![An empty chair at a Windows operator desk](/blog/blog-empty-chair.png "If the cookie lives in a work profile, a person opens that profile. If it lives in a test, the test deletes it.")

## A table you can keep

| Question | Driver (Playwright, Puppeteer, Selenium) | Operator profile (MaskWright) |
| --- | --- | --- |
| Who is in control | A program | A person |
| Where state should live | Disposable directory or none | Local user-data-dir you mean to reopen |
| Official home | Library docs, CI, hosts you own | Isolated logins you are allowed to use |
| Headed window means | You can watch the test | You can do the work |
| Stealth plugin means | A patched driver, still a driver | Not a substitute for a profile |
| Hosted connect URL means | A rented runtime | The wrong place for a store login |
| 0.1 support | None, by design | Launch, isolate, batch open and close |

Use the table when a landing page blurs the columns.

## How to choose on a Tuesday

You have a report to pull. The ads platform has an API. Use the API. Do not open Playwright.

You have a creative to approve. Open the ads profile. Do not record the clicks.

You have a regression on your own checkout. Use Playwright against staging. Do not point it at the production seller folder.

You have a public research page and a terms file that allows a slow client. Use a named research user agent or the official feed. Do not dress the client as a person.

You have a social inbox and a vendor who wants the cookie. Refuse the vendor. Use the official suite or a person.

You have five brand profiles and one morning. Batch start. Sit. Do not sync the windows.

If a step only works after you hide a driver flag, the step was not authorized. Stop and pick a different door.

## What this cluster is for

The short notes under this pillar take one object each. Playwright. Puppeteer Stealth. Selenium flags. Headed versus headless. Official APIs. Agents. MCP. Hosted runtimes. Social and LinkedIn bots. Ethics. Scripts outside profiles. The brand honesty page.

This page is the map. A headed profile is not a driver. A driver is not a profile. MaskWright 0.1 will keep being the profile launcher. The other tools can stay excellent at the job they already have.

If you only remember one line, remember the folder. If the cookie lives in a work profile, a person opens that profile. If the cookie lives in a test, the test deletes it.

## FAQ

### Can I point Playwright at a MaskWright profile?

Not as a supported feature. 0.1 has no Playwright export. Internal CDP is for fingerprint and cookie apply at launch. Attaching a script to a live work profile is how a store login becomes a fixture. Run Playwright against a disposable directory on a host you own.

### Does a headed window make automation undetectable?

No. Headed is a display mode. The control channel is still there. If you need a bot, use a door that allows bots. If you need a person, sit in a profile that is not scripted.

### Why would I keep both tools on one PC?

Because they are good at different jobs. Playwright is a strong test client. A local profile is a strong place to keep an authorized login. Sharing a folder is the mistake, not installing both.

### Is MaskWright planning RPA or window sync?

Not in 0.1. Bulk start opens windows. It does not type, and it does not keep windows in lockstep. If you need a robot, use an official driver on property you own, outside this app.
