---
slug: creepjs-consistency-checks
title: What CreepJS consistency checks are telling you
metaTitle: What CreepJS consistency checks tell you
metaDescription: CreepJS is useful for consistency, not as a scoreboard. Here is how I read the checks, and why I will not write a pass-CreepJS guide.
excerpt: CreepJS is useful for consistency, not as a scoreboard. Here is how I read the checks, and why I will not write a pass-CreepJS guide.
author: Avery Chen
published: 2026-05-28
category: browser-fingerprinting
tags: fingerprinting, windows, creepjs
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on what CreepJS consistency checks are telling you beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, pixelscan-consistency, how-we-read-browserleaks, iphey-scores-are-not-verdicts, fingerprint-stability-across-launches, browserscan-walkthrough, seed-versus-random-fingerprints, why-vpn-alone-fails-fingerprint-tests
---

CreepJS is useful when it points at a contradiction. It is useless as a score you try to win. The project compares APIs that are supposed to describe one browser. When two of them disagree, the report is doing its job. When a blog turns that report into a pass guide, the report stops being a tool and becomes a trophy.

I will not write a pass-CreepJS guide. Consistency is the only part I will take.

## What a consistency check is

A check asks whether two witnesses can be true at once. User agent versus `userAgentData`. Platform versus GPU family. Timezone versus language. Worker versus window. Canvas versus the rest of the engine. If the answers fork, you do not have one person. You have a collage.

That is the same idea as [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). CreepJS is one implementation of the idea. [BrowserLeaks](/blog/how-we-read-browserleaks) is a map of values. CreepJS is louder about whether those values agree.

| I keep | I skip |
| --- | --- |
| UA versus hints | The urge to clear every warning |
| Platform versus GPU | Reduce-signal checks for browsers we are not running |
| Clock versus exit | Scoreboards on other vendors |
| Window versus worker | Rows that only say you are not unique |
| Canvas versus a relaunch | Averaging two vendors into a grade |

## What I read, and what I skip

I read the mismatches. A Windows platform next to a Mac renderer. A mobile hint on a desktop screen. A new canvas hash after a relaunch I did not [reseed](/blog/seed-versus-random-fingerprints). A clock that ignored the exit. Those are profiles I can fix as stories.

I skip the urge to clear every warning. Some checks describe reduce-signal browsers. Some describe engines we are not running. Some will fire because a custom core and a spoofed UA are not the same binary. That last case is real. When we fall back to system Chrome or Edge, the inject is not a patched process. Honesty about the fallback is better than a hunted row.

I also skip scoreboards on [Pixelscan](/blog/pixelscan-consistency), [IPhey](/blog/iphey-scores-are-not-verdicts), and [BrowserScan](/blog/browserscan-walkthrough). Different skins, same trophy habit.

## Window versus worker is a real fork

A check that compares the window realm to a worker realm is looking for an inject that only patched one of them. If `hardwareConcurrency` differs, or if UA differs, the collage is in the engine, not in the GPU. I treat that as a first-class mismatch. I do not treat it as a reason to hunt a public gist that "fixes CreepJS."

Lies about `navigator.webdriver` and automation flags are a different note. We set webdriver false and launch with `--disable-blink-features=AutomationControlled`. That is a demonstrated flag. It is not a pass token. Consistency checks that still see driver residue are describing the process, not grading your soul.

If the report is long, I still only keep the rows that name two APIs. Rows that only say you are not unique are not actionable. Lots of Windows desktops share a family. Agreement is the job.

## Stability is part of consistency

A check that passes once and fails after quit is not a personality. It is drift. [Stability across launches](/blog/fingerprint-stability-across-launches) is how I test whether the profile is still the profile. If CreepJS changes its mind and I did not change the profile, the seed is not a seed.

## A VPN will not clear the report

[A VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests) because the exit moved and the engine did not. CreepJS will still see cores, canvas, and GPU. Do not treat a new line as a new consistency story.

## I keep a short mismatch list

UA versus hints. Platform versus GPU. Clock versus exit. Window versus worker. Canvas versus a relaunch. That is enough to work. A 40-row report is a product demo. I will not turn it into a checklist you must clear.

If the short list is clean and a long tail remains, I stop. The long tail is not the job.

I do not compare two vendors' reports to average a grade. BrowserLeaks names values. CreepJS names forks. Pixelscan and IPhey attach scores. Averaging them is how you end up hunting a number none of those sites will honor tomorrow.

## How I want you to use it

Open it when you are testing a profile you already have a right to use. Write down the contradictions. Align the story or leave the surface on the host truth. Close the tab. Do not iterate for a grade.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster is the longer mechanism. CreepJS is a consistency lamp. It is not a finish line.

## FAQ

**Will you publish a pass-CreepJS guide?**
No. Consistency is the only part I will take.

**Should I clear every warning?**
No. Keep the rows that name two APIs. Leave the long tail.

**Does a new VPN clear the report?**
No. The exit moved. Cores, canvas, and GPU did not.
