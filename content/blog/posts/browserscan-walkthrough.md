---
slug: browserscan-walkthrough
title: How to read a BrowserScan audit
metaTitle: How to read a BrowserScan audit
metaDescription: BrowserScan is an audit log, not a game. Learn how to read the rows on a Windows profile, and why we refuse a pass-every-test framing. Local Windows notes only.
excerpt: BrowserScan is an audit log, not a game. Learn how to read the rows on a Windows profile, and why we refuse a pass-every-test framing. Local Windows notes only.
author: Avery Chen
published: 2026-05-22
category: browser-fingerprinting
tags: fingerprinting, windows, browserscan
readingTime: 5
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on how to read a BrowserScan audit beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, why-vpn-alone-fails-fingerprint-tests, iphey-scores-are-not-verdicts, geolocation-api-versus-ip-geo, pixelscan-consistency, what-is-a-dns-leak, creepjs-consistency-checks, what-is-an-ip-leak
---

BrowserScan is an audit log. It is not a game, and it is not the site you work on. The useful motion is to read the rows, write down the contradictions, and stop. A pass-every-test framing turns the log into a trophy. I will not write that framing.

If you came here for a green BrowserScan walkthrough, the honest answer is no.

## What the audit is good for

The page names surfaces an operator can check. User agent and Client Hints. WebGL. Canvas. Timezone. IP. WebRTC. DNS. Hardware. Those names match the mechanism in [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Use BrowserScan to see the current values. Use the mechanism notes to know whether those values can be true together.

That is the same job as [CreepJS](/blog/creepjs-consistency-checks), with a different skin. [Pixelscan](/blog/pixelscan-consistency) is another consistency view. [IPhey](/blog/iphey-scores-are-not-verdicts) attaches a number. I treat all of them as maps. I do not treat any of them as a court.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster is built for that reading habit. This page stays on how I walk a BrowserScan audit on a Windows profile.

![Browser diagnostic panels on a Windows operator desk](/blog/blog-browserleaks-lab.png "Read the audit as a list of measurements. Do not treat a row color as a verdict on the person.")

## How I walk the rows

I start with disagreement, not with rarity.

Does the user agent family match the GPU family. Does `userAgentData` still describe the same build the string claims. Does the screen story sound like a desktop while a touch or mobile hint claims a phone. Does the timezone match the exit. Does the Geolocation API agree with the [exit IP](/blog/geolocation-api-versus-ip-geo), or did the host GPS story leak through.

Then I look at address doors as separate doors. [What an IP leak is](/blog/what-is-an-ip-leak) is the parent definition. [What a DNS leak is](/blog/what-is-a-dns-leak) is one door. WebRTC is another. A clean resolver with a loud host candidate is still a WebRTC problem. A quiet WebRTC policy with a resolver that bypasses the proxy is a DNS problem. BrowserScan may print both on one page. I still refuse to merge them.

Then I relaunch the same profile and look again. If a hash moved and I did not change the seed, the profile is not a profile. If the audit changed its mind because I only changed the VPN, I already know [a VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests). The exit moved. The box did not.

I do not screenshot a red row and shop for a setting that paints it green. That is the trophy habit.

| Order I check | Question |
| --- | --- |
| 1. UA and hints | Same build, same platform, mobile false |
| 2. GPU | Renderer family matches the UA |
| 3. Clock and pin | Follow the exit, not the host |
| 4. IP / WebRTC / DNS | Three doors, not one row |
| 5. Relaunch | Same seed still matches |

## What I ignore on purpose

Score language. Percentages. Trust labels. Real-user badges. Those are vendor product. They are not a fact about your authorized profile.

Rows that only say you are not unique. Lots of Windows desktops share a family. Agreement is the job. Standing alone in a sample is often a broken story.

Rows that describe a reduce-signal browser we are not running. MaskWright presents a coherent desktop identity. It does not strip APIs to look like a privacy browser. A warning that you still have canvas is not a defect in that design.

Rows that fire because the custom Chromium 131 core is missing. When the core is not installed, launch falls back to system Chrome or Edge and still applies CDP and inject overrides. The inject is not a patched process. I will not hunt a gist that hides that fact.

## What a local profile can change, and what it cannot

On Windows, a headed profile can override a lot of what JavaScript sees. User agent and Client Hints go through CDP and an inject script. Timezone, locale, and languages can follow the proxy exit after a geo lookup. Screen metrics, hardware concurrency, device memory, WebGL parameters, WebGPU adapter info, canvas output, font probes, client rects, audio noise, battery, and media device IDs are in the fingerprint schema we apply at launch.

Some things stay outside that schema. JA3 and JA4 are TLS fingerprints. They are not JavaScript spoofs. A script in the page cannot rewrite the Client Hello. Font raster through DirectWrite is only partly in our hands, and only when the custom core is present with a font list. The process name in Task Manager is a Windows tell, not a DOM tell.

We have no published BrowserScan pass rates. I will not invent them. I will not claim a clean audit means a named anti-bot stack will agree.

## How I want you to leave the tab

Write the contradictions that name two APIs. Fix the story you meant to tell for a profile you already have a right to open. Relaunch. Confirm the story stayed. Close BrowserScan.

The work site does not grade you with this vendor's row colors. A green log is not authorization. A red log is not a ban. The audit is a mirror. It is not a game.

## FAQ

**Is this a pass-every-test walkthrough?**
No. Read the rows, write contradictions, stop.

**Should I treat IP, WebRTC, and DNS as one result?**
No. Three doors. A clean resolver with a loud host candidate is still a WebRTC problem.

**Does a clean audit mean anti-bot stacks will agree?**
Unknown. We have no published pass rates.
