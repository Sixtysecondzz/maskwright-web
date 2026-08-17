---
slug: client-hints-and-user-agent-data
title: Client Hints and userAgentData
metaTitle: Client Hints and userAgentData
metaDescription: Client Hints and userAgentData have to match the UA you claim. This note covers the high-entropy fields sites read after the classic user agent string.
excerpt: Client Hints and userAgentData have to match the UA you claim. This note covers the high-entropy fields sites read after the classic user agent string.
author: Avery Chen
published: 2026-05-25
category: browser-fingerprinting
tags: fingerprinting, windows, client, hints
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on Client Hints and userAgentData beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, hardware-concurrency-and-cores, user-agent-is-not-enough, screen-resolution-coherence, client-rects-and-subpixels, timezone-language-and-proxy-country, font-enumeration-on-windows, battery-and-media-device-ids
---

Client Hints exist because the classic user agent string was too coarse and too easy to lie about. Sites now ask for the high-entropy fields directly. `Sec-CH-UA`, platform, architecture, bitness, model, and full version sit in headers and on `navigator.userAgentData`. If those fields disagree with `navigator.userAgent`, the caption failed.

[Why a user agent string is not a fingerprint](/blog/user-agent-is-not-enough) is the sibling. This page is the passport that replaced the caption.

## What the page reads

Low-entropy hints are cheap: brand list, mobile bit, platform. High-entropy hints need a permissioned `getHighEntropyValues` call or a server opt-in. They return architecture, bitness, full version list, model, platform version, and related fields.

A Windows desktop profile should answer like a Windows desktop. MaskWright fingerprints set `mobile` false. There is no Android emulation path. A model string that sounds like a phone on this host is a contradiction.

The same profile also has to agree with [screen metrics](/blog/screen-resolution-coherence), [hardwareConcurrency](/blog/hardware-concurrency-and-cores), [fonts](/blog/font-enumeration-on-windows), and [timezone](/blog/timezone-language-and-proxy-country). Hints are not a sealed identity. They are one more witness.

| Field | Where it shows up | Cheap mismatch |
| --- | --- | --- |
| Brand + major | Headers and `userAgentData` | UA says 131, hints say another major |
| `mobile` | Low-entropy hint | True on a desktop screen |
| `platform` / `platformVersion` | High-entropy | Macintosh on a Windows process, or Win10 vs Win11 fork |
| Architecture / bitness | High-entropy | x86 story on an x64 room |

## How we set the fields

CDP `Emulation.setUserAgentOverride` carries `userAgentMetadata`. The inject script writes the high-entropy values onto `navigator.userAgentData`. That is the implementation. It has to match the UA string we also set. Two sources, one story.

When the custom Chromium 131 core is missing, the fallback is system Chrome or Edge plus the same CDP and inject. The real binary version and the spoofed full version can still be a deep tell at the TLS or process layer. Hints will not fix JA3. JA3 is not a JavaScript spoof.

## Headers and JavaScript have to match

Client Hints arrive as request headers when the server asks, and as `navigator.userAgentData` in the page. A profile that spoofs only the JS object leaves the next navigation on the real binary. A profile that spoofs only headers leaves a scripted probe on the real object. We set metadata through CDP and the high-entropy values through inject. Both have to name the same brand, the same major, and the same platform.

GREASE brands in the brand list are normal Chromium behavior. A list that looks too clean can be as loud as a list that looks too fake. I will not publish a brand recipe. I will say the list has to look like Chrome on Windows if that is the UA you claimed.

Full version is the field people set to 131 and then forget when the fallback binary is a different Edge build. The process on disk can still disagree at a layer hints cannot see. Hints are still required. They are not sufficient.

## Platform version is the quiet field

`platformVersion` is easy to leave on the host. A UA that says Windows 11 next to a hint that still names a Windows 10 build is a cheap fork. Architecture and bitness are the other quiet pair. x64 on a 32-bit story, or the reverse, is the same class of mistake as a GPU mismatch.

I read those three after brand and major. I do not treat them as optional polish.

Plugins and mimeTypes are another witness we set to an OS-coherent list. They are not Client Hints. They still have to sound like the same Windows Chrome. `window.chrome` is the other Chromium-shaped witness we inject on Chromium profiles. Hints that say Chrome and a missing `window.chrome` are a fork. I check that object on Chromium profiles only. Firefox cores are a different story.

## Mismatch patterns I actually see

UA says Chrome 131, hints say another major.

Platform hint says Windows, UA says Macintosh.

Mobile bit is true, [battery](/blog/battery-and-media-device-ids) looks like a plugged-in desktop, screen looks like a tower.

Architecture says x86, the rest of the profile says a different class.

[Client rects](/blog/client-rects-and-subpixels) will not save those. Neither will a prettier canvas.

## How I use hints

I treat `userAgentData` as required, not optional polish. I read it next to the UA, not after. I do not ship a profile that only changed the old string.

The parent bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) notes keep this slug so the high-entropy fields have a home the 2023 crawls never wrote.

## FAQ

**Are Client Hints the same as the user agent string?**
No. They are the high-entropy fields that replaced most of what the old string used to carry.

**Is spoofing only the JavaScript object enough?**
No. Headers and `userAgentData` have to name the same brand, major, and platform.

**Does this fix JA3?**
No. TLS fingerprints belong to the binary. Hints are JavaScript and HTTP headers.
