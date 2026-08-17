---
slug: cross-browser-fingerprinting
title: Fingerprints that follow you across browsers
metaTitle: Fingerprints that follow you across browsers
metaDescription: Some signals survive a browser swap on the same box. Learn what cross-browser fingerprinting can still join, and what a second engine does not hide.
excerpt: Some signals survive a browser swap on the same box. Learn what cross-browser fingerprinting can still join, and what a second engine does not hide.
author: Avery Chen
published: 2026-05-28
category: browser-fingerprinting
tags: fingerprinting, windows, cross, browser
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on fingerprints that follow you across browsers beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: mac-address-is-not-a-browser-fingerprint, digital-footprint-versus-browser-fingerprint, fingerprint-spoofing-versus-tracking-prevention, after-third-party-cookies, what-is-browser-fingerprinting, fingerprint-surfaces-we-actually-cover, what-is-device-fingerprinting, new-fingerprint-same-folder
---

One thing worth flagging: closing Chrome and opening Firefox on the same Windows PC does not hide the desk. The site may lose `window.chrome` and Client Hints. It still has a chance at the facts that do not belong to one engine: the exit IP, the OS font catalog, the GPU family, the screen, and sometimes the person you already logged in as.

A second engine is an engine choice. It is not a new person. This page names what can still follow you. It is not a stealth guide. The rest of the notes live under [Browser fingerprinting](/blog/browser-fingerprinting).

## What "across browsers" actually means

[What browser fingerprinting measures](/blog/what-is-browser-fingerprinting) is usually inside one process. User agent, `userAgentData`, `window.chrome`, and plugin lists change when the engine changes. A vendor that only stored those fields will lose you at the swap.

A vendor that also stored the stable outside can try again.

| Signal | Survives a Chrome to Firefox swap? | Why |
| --- | --- | --- |
| User agent and Client Hints | Usually no | Engine-specific |
| Cookie jar | No, if folders are separate | Different stores |
| Public IP /24 | Yes, if both use the same path | NIC or shared VPN |
| Screen size and color depth | Often yes | Same monitor |
| GPU family | Often yes | Same card, different strings |
| Installed font catalog | Often yes, on stock browsers | Windows catalog |
| Logged-in Google account | Yes | [Digital footprint](/blog/digital-footprint-versus-browser-fingerprint), not canvas |

Research papers call that cross-browser fingerprinting. It is adjacent to [device fingerprinting](/blog/what-is-device-fingerprinting). Device work reaches NIC, disk, and install facts the tab does not own. Cross-browser work is the overlap two tabs can both see.

## What a second engine does not hide

The hop. If both browsers leave through the same NIC or the same VPN, the exit is shared. A per-profile proxy on one MaskWright profile does not move the other profile. HTTP or SOCKS5 attaches to a profile, not to the host.

The OS. Fonts on Windows are a catalog. An inject can allowlist probes inside one profile. Stock Firefox sitting beside it still sees the real catalog. [A new fingerprint in the same folder](/blog/new-fingerprint-same-folder) is a one-engine leftover. A second engine is a two-catalog problem.

The GPU. Two browsers on one tower often rhyme. Strings differ. Family does not.

The person. If you sign the same Google account in Chrome and in Firefox, the graph joined you before the hash did.

The NIC. A [MAC address is not a browser fingerprint](/blog/mac-address-is-not-a-browser-fingerprint). Pages in the tab usually cannot read it. The subnet and the exit still can. We do not hide MACs.

## What a second engine does change

DOM answers. [The surfaces we actually cover](/blog/fingerprint-surfaces-we-actually-cover) are applied inside a MaskWright profile. They do not automatically apply to system Firefox you opened beside it. We do have a Firefox path: Camoufox preferred, else stock Firefox. That is a second core, not a promise that the two cores look unrelated on the same host.

Cookie policy. [After third-party cookies](/blog/after-third-party-cookies) each engine has its own storage rules. Topics and CHIPS do not join Chrome to Firefox by themselves. First-party logins still can.

Tracking prevention. [Spoofing versus tracking prevention](/blog/fingerprint-spoofing-versus-tracking-prevention) is a different job. Firefox-style reduce-signal can strip APIs. That may make two browsers look less alike, or it may make one of them look like a privacy browser next to a full desktop profile. Either way it is not isolation of the NIC.

TLS. Chromium and Firefox have different handshakes. A site that stores JA3 is looking at the binary, not at your inject script. Switching families is a new handshake. It is not a hide.

## What I will not claim

I will not claim two MaskWright cores on one PC are unlinkable. We have no published cross-browser tests. I will not claim Camoufox plus Chromium is a join-proof pair. I will not claim a second engine washes a shared exit.

The public channel is Windows 10 and 11 x64. Both cores still sit on that host. Font raster, process list, and the network path remain Windows facts.

If I need two authorized identities to stay apart, I give them separate folders, separate cookies, and exits that do not casually share a vantage. I do not treat "I opened Firefox" as a new person.

## FAQ

**Does opening Firefox hide me from a site that already saw Chrome?**
Only from the engine-specific fields. IP, screen, GPU family, and a reused login can still join the visits.

**Should I run Chromium and Firefox profiles on the same login over time?**
No. If last month's session was Chromium 131 and this month's is stock Firefox, the site sees a new device story. Pick a family and keep it.

**Does MaskWright make the two cores look unrelated?**
No. Isolation is per folder. Host hardware and a shared exit are still shared.

A second engine is useful when you need Firefox behavior, or when Camoufox is the core you meant to run. Use it as an engine choice. Do not use it as a hide. The host, the exit, and the person you typed remain available to anyone who bothers to store them.
