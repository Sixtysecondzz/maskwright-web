---
slug: pixelscan-consistency
title: Pixelscan consistency is not a verdict
metaTitle: Pixelscan consistency is not a verdict
metaDescription: Pixelscan can flag mismatches. It cannot certify a person. Read the consistency view, then stop. We will not walk you to a green Pixelscan badge.
excerpt: Pixelscan can flag mismatches. It cannot certify a person. Read the consistency view, then stop. We will not walk you to a green Pixelscan badge.
author: Avery Chen
published: 2026-07-05
category: browser-fingerprinting
tags: fingerprinting, windows, pixelscan
readingTime: 5
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on Pixelscan consistency is not a verdict beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, iphey-scores-are-not-verdicts, creepjs-consistency-checks, browserscan-walkthrough, how-we-read-browserleaks, why-vpn-alone-fails-fingerprint-tests, fingerprint-stability-across-launches, geolocation-api-versus-ip-geo
---

Pixelscan is useful when two fields cannot be true at once. It is useless as a certificate that you are a real person. The page can list mismatches. It cannot sit in the path of the site you actually work on. A green consistency view is not authorization. A red one is not a ban.

I will not walk you to a green Pixelscan badge. If that is the query you brought, the honest answer is no. Consistency is the only part I will take.

## What the consistency view is actually doing

A consistency checker asks whether the witnesses agree. User agent versus Client Hints. Platform versus GPU family. Timezone versus the exit. Screen story versus touch story. Those questions are the same mechanism as [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Pixelscan is one commercial skin of that idea.

I read the mismatches. I do not read the page as a court. Vendor copy likes words like trust, risk, and real user. Those words are a product. They are not a fact about the operator sitting at a Windows desk.

The rest of the [Browser fingerprinting](/blog/browser-fingerprinting) cluster treats lab pages as maps. [How we read BrowserLeaks](/blog/how-we-read-browserleaks) is a map of values. [CreepJS consistency checks](/blog/creepjs-consistency-checks) are louder about whether those values can share one story. Pixelscan sits closer to CreepJS than to a cookie store.

![A grid of browser diagnostic panels on a Windows desk](/blog/blog-fingerprint-grid.png "Consistency is a list of disagreements. It is not a verdict on the person who opened the profile.")

## What I keep from a Pixelscan pass

I keep the rows that name two APIs. A Windows platform next to a Mac renderer. A mobile hint on a desktop screen. A Tokyo clock on a Dallas exit. A Geolocation pin that ignored the [exit IP](/blog/geolocation-api-versus-ip-geo). Those are profiles I can fix as stories.

I keep stability. If I quit the profile and open it again, the same folder and the same seed should still look like the same browser. [Stability across launches](/blog/fingerprint-stability-across-launches) is the test. If Pixelscan changes its mind and I did not change the profile, the seed is not a seed.

I keep the reminder that a [VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests). The exit moved. Canvas, fonts, WebGL, and `hardwareConcurrency` did not. Pixelscan will still see the box. A new line is not a new consistency story.

| Keep | Throw away |
| --- | --- |
| Rows that name two APIs | Trust / real-user copy |
| Drift after a relaunch | The urge to clear every warning |
| Clock versus exit | Rarity as a goal |
| GPU versus platform | A settings list that paints the lab green |

## What I throw away

I throw away the urge to clear every warning. Some rows describe reduce-signal browsers we are not running. Some describe engines we are not shipping. Some will fire because a custom Chromium core and a spoofed user agent are not the same binary.

That last case is real in this product. When the custom Chromium 131 core is installed, launch can use that binary. When it is missing, the app falls back to system Chrome or Edge and still applies CDP and inject overrides. Honesty about the fallback is better than a hunted row.

I throw away score language on [IPhey](/blog/iphey-scores-are-not-verdicts) and the pass-every-test framing on [BrowserScan](/blog/browserscan-walkthrough). Different skins, same trophy habit. None of those pages decide whether you have a right to the account.

I throw away rarity as a goal. Lots of Windows desktops share a family. Agreement is the job. Being the only hash in a lab sample is not a personality, and it is not a reason to reroll a seed that was supposed to stay put.

## Coherence is cheaper than a badge

Most operators get caught on disagreement, not on a rare canvas. A 13 inch laptop resolution next to a workstation GPU string. A charging battery on a tower story. A phone Client Hint on a desktop profile. The page does not need a perfect identifier if two APIs refuse to share a story.

That is why I will not publish a Pixelscan settings list. A list teaches you to paint the lab. It does not teach you to keep one authorized profile honest. The work on a local Windows profile is isolation: a folder, cookies, a seed, an exit whose country and clock agree, a GPU story that matches the user agent.

We have no published pass rates on commercial fingerprinting sites in the repo. I will not invent them. I will not claim a green Pixelscan view means a named anti-bot stack will agree. Those are different vendors with different witnesses.

## How I want you to use this page

Open Pixelscan the way you open a checklist, not the way you open a game. Write down the contradictions. Fix the story you meant to tell. Relaunch and see whether the story stayed. Then close the tab and go to the work you are authorized to do.

If a row still nags and it does not name two APIs, leave it. If a row names two APIs and they still fork after you told the truth, you have a collage, not a person. That is useful. A badge is not.

## FAQ

**Will a green Pixelscan view pass a named anti-bot stack?**
Unknown. Different vendors, different witnesses. We have no published pass rates.

**Should I reroll the seed to look rarer?**
No. Agreement is the job. Rarity is often a broken story.

**Does a VPN create a new consistency story?**
No. The exit moved. The engine did not.
