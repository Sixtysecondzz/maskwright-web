---
slug: how-we-read-browserleaks
title: How we read BrowserLeaks
metaTitle: How we read BrowserLeaks, without a trophy hunt
metaDescription: BrowserLeaks is a map of surfaces, not a pass/fail exam. This page shows how we read the panels on Windows, without turning the site into a trophy hunt.
excerpt: BrowserLeaks is a map of surfaces, not a pass/fail exam. This page shows how we read the panels on Windows, without turning the site into a trophy hunt.
author: Avery Chen
published: 2026-06-15
category: browser-fingerprinting
tags: fingerprinting, windows, browserleaks
readingTime: 5
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on how we read BrowserLeaks beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, creepjs-consistency-checks, fingerprint-stability-across-launches, pixelscan-consistency, seed-versus-random-fingerprints, iphey-scores-are-not-verdicts, battery-and-media-device-ids, browserscan-walkthrough
---

BrowserLeaks is a panel of measurements. I open it to see which surfaces disagree, not to collect a green row. The site is good at naming APIs. It is not the site you work on. A clean panel is not authorization. A red panel is not a ban.

I will not write a pass-BrowserLeaks guide. If that is the query you brought, the honest answer is no.

## What the page is good for

It lists surfaces in language an operator can check. WebRTC candidates. Canvas. WebGL. Fonts. Audio. IP. JavaScript clocks. You can walk the list and ask whether each row still belongs to the profile you launched.

That is a map. [What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) is the mechanism behind the map. Use BrowserLeaks to see the current values. Use the mechanism notes to know whether those values can be true together.

![Browser diagnostic panels on a Windows operator desk](/blog/blog-browserleaks-lab.png "Read the panels as a list of measurements. Do not treat a row color as a verdict on the person.")

## How I walk the panels

I start with disagreement, not with rarity.

Does WebRTC show a host candidate I did not expect. Does the timezone match the exit. Do WebGL strings match the UA family. Does canvas stay put after I quit and reopen. Do [battery and media device IDs](/blog/battery-and-media-device-ids) still sound like a desktop.

Then I relaunch the same profile and look again. [Stability across launches](/blog/fingerprint-stability-across-launches) is the test. If a hash moved and I did not [draw a new seed](/blog/seed-versus-random-fingerprints), something in the profile is not a seed.

I do not screenshot a row and shop for a setting that paints it green. That is the trophy habit.

| I read | I ignore |
| --- | --- |
| Two APIs that cannot both be true | Uniqueness theater |
| Values that drifted after a relaunch | Score language on other checkers |
| IP, WebRTC, and DNS as three doors | A coworker PNG with no profile id |

## What I ignore

Score language on other checkers. [CreepJS](/blog/creepjs-consistency-checks) is useful for consistency, not as a grade. [Pixelscan](/blog/pixelscan-consistency) and [IPhey](/blog/iphey-scores-are-not-verdicts) attach numbers. [BrowserScan](/blog/browserscan-walkthrough) is another audit to read, not a game. None of them sit in the path of an ads manager you are authorized to open.

I also ignore uniqueness theater. A common Windows canvas family that agrees with fonts and GPU is a coherent profile. A rare hash that cannot exist on the UA is a worse profile.

## Read the IP family as three doors

The IP page, the WebRTC page, and the DNS page are not one result. A correct proxy exit on the IP page does not prove ICE is quiet. A quiet ICE list does not prove the Windows resolver went through the proxy. Write them down as three facts.

JavaScript and HTTP clocks belong next to timezone, not next to canvas. If the clock panel disagrees with the exit country, that is alignment work, not a GPU problem.

I take notes in the order the profile can fail: exit, clock, WebRTC, UA and hints, GPU, canvas, fonts, audio. I stop when I have the disagreements. I do not finish the site for sport.

## Do not export a trophy folder

I have seen operators keep a directory of green screenshots as if that were a profile backup. It is not. The backup is `maskwright-data`. The screenshot is a moment on a public site. If the profile drifted and the screenshot did not, you trusted the wrong file.

Read, note, close. Keep the folder.

I also refuse to treat a second visit as a new exam. If I already have the mismatch list, I am done. Reloading for a better mood is how trophy folders get born. If a coworker sends a screenshot, I ask which profile id and which core launched. A PNG without a folder is not evidence the profile is stable. I also refuse to compare my panel to a stranger's panel on a forum. Their GPU is not my profile. Agreement inside one profile is the only comparison that pays.

## What this is not

It is not a claim MaskWright passes BrowserLeaks. The repo has no published scores. I will not invent them.

It is not a substitute for checking the exit you configured, or the cookies you imported. A pretty IP panel next to yesterday's cookies is still yesterday's session.

## How I want you to leave the tab

Write down the disagreements. Fix the story in the profile if it is supposed to be one person. Leave the lab. Do the authorized work.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster is the longer map. BrowserLeaks is one place we look. It is not the exam.

## FAQ

**Does a green BrowserLeaks panel mean I am safe?**
No. It is a map, not the site you work on. We have no published pass rates.

**Should I keep screenshots as a backup?**
No. The backup is `maskwright-data`. A PNG is a moment on a public site.

**Is uniqueness the goal?**
No. Agreement inside one profile is the goal. A rare hash that cannot exist on the UA is worse.
