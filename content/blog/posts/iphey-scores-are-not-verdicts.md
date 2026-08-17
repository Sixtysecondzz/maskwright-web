---
slug: iphey-scores-are-not-verdicts
title: IPhey scores are not verdicts
metaTitle: IPhey scores are not verdicts on Windows
metaDescription: An IPhey trust score is a vendor opinion, not a court. This note explains what the number reacts to, and why chasing it is the wrong job for a local profile.
excerpt: An IPhey trust score is a vendor opinion, not a court. This note explains what the number reacts to, and why chasing it is the wrong job for a local profile.
author: Avery Chen
published: 2026-06-17
category: browser-fingerprinting
tags: fingerprinting, windows, iphey, trust
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on IPhey scores are not verdicts beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, browserscan-walkthrough, pixelscan-consistency, why-vpn-alone-fails-fingerprint-tests, creepjs-consistency-checks, geolocation-api-versus-ip-geo, how-we-read-browserleaks, what-is-a-dns-leak
---

An IPhey trust score is a vendor opinion. It is not a court, and it is not the site you work on. The number moves when the vendor's witnesses move. Chasing the number is the wrong job for a local profile. The job is a coherent profile you have a right to open.

I will not write a raise-your-IPhey-score guide. If that is the query, stop here.

## What a trust score is reacting to

IPhey mixes network facts with browser facts and then prints a grade. The mix is the problem. An exit IP with a datacenter reputation can pull the number down while the engine still looks like one Windows desktop. A clean residential line can pull the number up while canvas, GPU, and clock still argue.

That is not [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Fingerprinting is a bundle of engine answers that are supposed to agree. A trust score is a product that also cares about who owns the IP, how often that IP shows up, and whether a leak door is open.

I treat the score as a weather report from one vendor. I do not treat it as a verdict on the person.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster already has better tools for the engine half. [How we read BrowserLeaks](/blog/how-we-read-browserleaks) lists values. [CreepJS](/blog/creepjs-consistency-checks) flags forks. [Pixelscan](/blog/pixelscan-consistency) is another consistency skin. IPhey is the one that most often gets used as a trophy.

| What moved | Score can jump | Engine stayed the same |
| --- | --- | --- |
| VPN or proxy exit | Yes | Canvas, fonts, WebGL, cores |
| IP reputation | Yes | The profile folder |
| A DNS or geo fork | Yes | Seed and cookies |
| You rerolled canvas | Maybe | Cookies still name the old login |

## The number is not your profile

A local MaskWright profile is a folder, a seed, and an optional proxy you brought. We do not broker traffic. We do not sell reputation. The public download is Windows 10 and 11 x64. There is no account and no cloud profile sync. None of that appears on IPhey as a feature. IPhey sees a browser and an IP.

If you change only the VPN, the score can jump while the engine stays the same box. That is why [a VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests). The vendor may like the new line. The page you actually work on still sees cores, fonts, and WebGL.

If you change only the paint and leave a [DNS leak](/blog/what-is-a-dns-leak) or a Geolocation pin that ignored the [exit IP](/blog/geolocation-api-versus-ip-geo), the number can still sag. The score is allowed to be noisy. Your profile is not allowed to be a collage.

## What I read instead of the grade

I read whether timezone, locale, and language follow the exit. On profile start we query ip-api.com through the proxy when a proxy is set, or direct when it is not, and we update those fields before launch. That traffic leaves the machine. There is no offline magic that invents a country.

I read whether the Geolocation API and the exit tell the same story. Those are different doors. Alignment is hygiene. It is not a trust token.

I read whether WebRTC, DNS, and ordinary fetches disagree about the address. IPhey will notice some of that. So will any site that bothers. The fix is a policy for each door, not a hunt for a prettier integer.

I read [BrowserScan](/blog/browserscan-walkthrough) the same way I read IPhey: as an audit log, not as a game. Rows that name two APIs are useful. A headline percentage is not.

## Why score chasing breaks the profile

A seed is a decision to remain the same browser. Canvas noise in our inject path is OS-biased and stable. Audio noise is seeded. Client rects get a stable offset. Media device IDs are hashed from a seed. If you reroll those because IPhey looked sad on Tuesday, you taught the next visit that the person changed.

Rarity is the other trap. A unique hash in a lab sample feels like progress. It is often just a broken story. Lots of Windows desktops share a family. Agreement with that family is the work. Standing alone in a vendor chart is not.

We have no published IPhey pass rates. I will not invent a target number. I will not claim the custom Chromium 131 core, when it is installed, produces a better score than system Chrome or Edge with the same inject. The fallback is real. The score is not a core test.

## Authorized work does not need a trophy

If you do not have a right to the account, a higher score will not create that right. If you do have the right, the useful checks are local: the folder is the profile, the cookies are the login, the exit country matches the clock, the GPU family matches the user agent.

Close IPhey when the contradictions are written down. Do not keep refreshing until a vendor smiles. The smile is not the job.

## FAQ

**What does an IPhey score actually mean?**
A vendor opinion that mixes IP reputation with browser facts. It is not a court.

**Should I reroll the fingerprint to raise the score?**
No. You taught the next visit that the person changed.

**Does the custom Chromium core get a better IPhey score?**
Unknown. We have no published rates. The fallback to system Chrome or Edge is real.
