---
slug: after-third-party-cookies
title: What replaces third-party cookies for tracking
metaTitle: What replaces third-party cookies for tracking
metaDescription: Third-party cookies are fading. Topics, CHIPS, and first-party sets are not a fingerprint. This adjacent note keeps the tracking shift separate from canvas.
excerpt: Third-party cookies are fading. Topics, CHIPS, and first-party sets are not a fingerprint. This adjacent note keeps the tracking shift separate from canvas.
author: Avery Chen
published: 2026-05-20
category: browser-fingerprinting
tags: fingerprinting, windows, cookies, privacy, sandbox
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on what replaces third-party cookies for tracking beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, digital-footprint-versus-browser-fingerprint, fingerprint-surfaces-we-actually-cover, cross-browser-fingerprinting, new-fingerprint-same-folder, mac-address-is-not-a-browser-fingerprint, testing-a-fingerprint-before-work, fingerprint-spoofing-versus-tracking-prevention
---

Third-party cookies are fading. What replaces them for tracking is a set of browser features with names like Topics, CHIPS, and first-party sets. Those features are not a fingerprint. Canvas, WebGL, and fonts are not a cookie replacement. This adjacent note keeps the tracking shift separate from the engine measurement.

I am not going to write a Privacy Sandbox implementation guide. MaskWright does not implement Topics. The [surfaces we actually cover](/blog/fingerprint-surfaces-we-actually-cover) are DOM and launch overrides. They are not an ads API.

## What third-party cookies were doing

A third-party cookie is a name a different origin wrote while you were on someone else's site. An ad iframe on a publisher page could store an id, then see that id again on another publisher. The graph was the point.

Chrome has been tightening that path. Other browsers already blocked it. The industry answer was not "we will stop recognizing browsers." The answer was new APIs and a heavier use of first-party cookies, plus the fingerprinting that was already there.

[What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) existed before this shift and will exist after it. A site that lost the third-party cookie can still ask the engine questions. A site that kept a first-party cookie still will.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster needs this page so "cookies are dead" does not get treated as "fingerprinting is the new cookie." They are parallel systems.

| Mechanism | What it is | A fingerprint |
| --- | --- | --- |
| Third-party cookie | Cross-site id in an embed | No |
| First-party cookie | Login and site state in the profile folder | No |
| Topics | Browser-mediated interest labels | No |
| CHIPS | Partitioned cookie by top-level site | No |
| Related Website Sets | Several domains treated as one party | No |
| Canvas / WebGL / fonts | Engine measurements | Yes |

## Topics, CHIPS, and first-party sets, in operator language

Topics is a browser-mediated interest label. The engine observes sites you visit and later offers coarse topics to callers that are allowed to ask. It is a replacement for some ad-interest graphs. It is not a canvas hash. It is not a GPU string.

CHIPS (Cookies Having Independent Partitioned State) lets a third party set a cookie that is partitioned by the top-level site. The cookie works on that embed, and it does not automatically follow you to every other embedder. That is a cookie rule. It is not a fingerprint.

First-party sets (and the later Related Website Sets language) let a company declare that several domains are one party for some cookie purposes. That is also a cookie rule. It is not a renderer string.

None of these APIs hide a [MAC address](/blog/mac-address-is-not-a-browser-fingerprint). None of them split two authorized profiles that share one Chromium folder.

## What still lives in the folder

First-party cookies did not fade. Logins still sit in the user-data directory. [A new fingerprint in the same folder](/blog/new-fingerprint-same-folder) still inherits those logins. Isolation is still a separate `user-data-dir` per profile.

[Digital footprint versus browser fingerprint](/blog/digital-footprint-versus-browser-fingerprint) is the other split. Email, payment, and recovery graphs are not Topics. They are not canvas. Clearing a third-party cookie does not clear a card fingerprint at the processor.

[Cross-browser fingerprinting](/blog/cross-browser-fingerprinting) can still join two engines on one box through IP, fonts, and hardware. Losing a third-party cookie does not break that join.

## Spoof versus reduce-signal

[Fingerprint spoofing versus tracking prevention](/blog/fingerprint-spoofing-versus-tracking-prevention) is the product fork. Tracking prevention reduces signal: block the third-party cookie, strip storage, decline Topics. Spoofing paints a coherent desktop identity so two authorized profiles do not share one measurement.

MaskWright is the second job. It is a local Windows profile tool. It is not a Privacy Sandbox browser. It does not claim to implement CHIPS policy beyond whatever the launched Chromium already does. When we fall back to system Chrome or Edge, you get that browser's cookie policy plus our inject.

I will not claim we disable Topics. I will not claim we ship a Sandbox toggle. Those would be invented capabilities.

## How I want you to use this page

When a headline says cookies are dead, ask which cookie. Third-party tracking cookies are the ones under pressure. First-party login cookies are not. Fingerprints were never cookies.

[Test the profile before work](/blog/testing-a-fingerprint-before-work) as a folder, a seed, and an exit. Do not add a Topics row to that checklist unless the work site actually reads Topics and you know what you are looking at.

Partitioned cookies can still identify an embed on one publisher. That is a smaller graph, not a missing graph. Operators who hear "CHIPS" and empty a profile folder have mixed a cookie rule with a wipe. Keep the folder if the person is the same. Change the folder if the person is not.

Keep the words still. A tracking replacement is a tracking replacement. A fingerprint is a measurement. A leftover first-party cookie is still a login.

## FAQ

**Are Topics a fingerprint?**
No. They are browser-mediated interest labels. Canvas and WebGL are measurements.

**Did first-party cookies fade too?**
No. Logins still live in the user-data directory.

**Does MaskWright implement Privacy Sandbox APIs?**
No. We do not implement Topics. We do not ship a Sandbox toggle. You get whatever the launched Chromium already does.
