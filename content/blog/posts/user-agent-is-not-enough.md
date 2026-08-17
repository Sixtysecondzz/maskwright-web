---
slug: user-agent-is-not-enough
title: Why a user agent string is not a fingerprint
metaTitle: Why a user agent string is not a fingerprint
metaDescription: A user agent string is one field, not a profile. See why spoofing UA alone fails, and read Client Hints on the sibling page instead of stuffing both jobs here.
excerpt: A user agent string is one field, not a profile. See why spoofing UA alone fails, and read Client Hints on the sibling page instead of stuffing both jobs here.
author: Avery Chen
published: 2026-07-20
category: browser-fingerprinting
tags: fingerprinting, windows, user, agent
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on why a user agent string is not a fingerprint beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, client-hints-and-user-agent-data, client-rects-and-subpixels, hardware-concurrency-and-cores, font-enumeration-on-windows, screen-resolution-coherence, audio-context-fingerprint, timezone-language-and-proxy-country
---

Changing the user agent string is the first trick people try. It is also the cheapest tell, because every other API still describes the real box. `navigator.userAgent` is one field. A fingerprint is the bundle. If you only swap the string, you left the witnesses.

Client Hints belong on the [sibling page](/blog/client-hints-and-user-agent-data). I will mention them as the reason the old string is no longer enough. I will not do both jobs here.

## What the string actually is

The user agent is a compatibility label. It names a browser family, a version, and a rough OS. Sites used it for quirks. They still read it. They no longer trust it as the whole story.

On Chromium you can override it from CDP, from a launch flag, and from an inject on `navigator.userAgent`. We do all three for a profile. That still leaves `userAgentData`, screen, cores, GPU, fonts, canvas, audio, and timezone on their own APIs.

A Windows 11 string on a process that reports a Mac renderer is not a profile. It is a caption.

| You changed | What still tells the truth | Result |
| --- | --- | --- |
| `navigator.userAgent` only | `userAgentData`, GPU, fonts, screen, cores | Caption vs passport |
| UA plus hints | Canvas, audio, timezone, WebRTC | Half a profile |
| The whole schema | Host TLS, process name, disk | Honest about leftover layers |

## Why the cheap swap fails

Every neighboring surface can contradict the caption.

[hardwareConcurrency](/blog/hardware-concurrency-and-cores) can describe a laptop while the UA describes a server build. [Screen metrics](/blog/screen-resolution-coherence) can describe a 13 inch panel while the UA implies a desktop chrome. [Fonts](/blog/font-enumeration-on-windows) can list a catalog the claimed OS would not ship. [Client rects](/blog/client-rects-and-subpixels) and [AudioContext](/blog/audio-context-fingerprint) will still hash the real stack. [Timezone and language](/blog/timezone-language-and-proxy-country) will still follow the host unless you aligned them to the exit.

The page does not need a genius detector. It needs two fields that cannot be true at once.

## High entropy moved out of the string

Chromium reduced the classic UA on purpose. Brands and versions moved into Client Hints and `navigator.userAgentData`. If you rewrite only `userAgent` and leave `userAgentData` on the real build, you wrote a sign and left the passport.

Read the sibling for the high-entropy fields. The rule on this page is simpler: the string is not the profile.

That is why a UA-only extension from 2018 fails in 2026. It rewrites a caption the engine already devalued, and it leaves the passport and the paint alone.

`navigator.platform` and `navigator.vendor` travel with the same lie. We override platform and vendor in the inject. They still have to agree with the UA family. A Win32 platform next to a Macintosh UA is the same cheap catch in older clothes.

## Desktop claims on this product

MaskWright profiles model desktop OS families. Client Hints mark mobile false. The public channel is Windows 10 and 11 x64. A phone UA on this host is a contradiction we will not sell as a feature. A macOS UA on a Windows process has the same problem unless every other surface agrees, and several deep tells still belong to the host.

When the custom Chromium 131 core is missing, launch falls back to system Chrome or Edge and still applies the UA override. The process on disk is still that fallback browser. The string is still not the whole story.

## Version lies are still lies

A string that says Chrome 131 next to a Client Hint that says another major is the modern form of the old UA swap. The sibling covers the hint. The failure mode is the same: one field updated, one field left on the host.

I also refuse a mobile UA on this product. Desktop profiles only. The host is a Windows PC. The caption should be able to be true.

## How I use the field

I set a UA that can be true for the rest of the profile. Then I check the rest of the profile. I do not treat a matching string as done.

The bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster splits UA and Client Hints so this page can stay on the failure mode: one field, many witnesses.

## FAQ

**Is spoofing the user agent enough in 2026?**
No. Client Hints, GPU, fonts, screen, and cores will still describe the real box.

**Does MaskWright only change the UA string?**
No. CDP, a launch flag, and an inject set the string. Hints and the rest of the schema are separate fields that still have to agree.

**Can I put a phone UA on a Windows profile?**
Not as a coherent story. This product is desktop profiles. Client Hints mark mobile false.
