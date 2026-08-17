---
slug: font-enumeration-on-windows
title: Font enumeration leaks on Windows
metaTitle: Font enumeration leaks on Windows
metaDescription: Windows font lists leak through DirectWrite and enumeration APIs. Learn why an allowlist matters on a real box, and why a random font set looks false.
excerpt: Windows font lists leak through DirectWrite and enumeration APIs. Learn why an allowlist matters on a real box, and why a random font set looks false.
author: Avery Chen
published: 2026-06-06
category: browser-fingerprinting
tags: fingerprinting, windows, font
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on font enumeration leaks on Windows beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, client-rects-and-subpixels, audio-context-fingerprint, user-agent-is-not-enough, webrtc-modes-disabled-proxy-public-real, client-hints-and-user-agent-data, webrtc-ip-leaks, hardware-concurrency-and-cores
---

Windows ships a font catalog that no clean laptop would invent from scratch. Enumeration APIs and DirectWrite both leak that catalog. A page does not need to list every face in Settings. It can call `document.fonts.check`, measure a hidden span, or compare `offsetWidth` across a probe list. The set of hits is the fingerprint.

A random bag of faces looks false. An allowlist that could exist on the OS you claimed looks like a computer.

## How the probe works

Scripts keep a list of likely names. For each name they ask whether the face exists and how wide a test string draws. Widths are layout. That is why this surface sits next to [client rects and subpixels](/blog/client-rects-and-subpixels). A face that exists but measures like a substitute is a tell. A face that a Windows 11 box should have, and does not, is a tell.

DirectWrite is the raster path under Chromium on Windows. The inject script can constrain `document.fonts.check` and the measurement fallbacks. It cannot fully rewrite every glyph the GPU already knows. When the custom Chromium core is present, launch can pass a `MASKWRIGHT_FONT_LIST` into a patched raster. That path is partial. When the core is missing, you have the inject only.

| Probe | What it infers | What we wrap |
| --- | --- | --- |
| `document.fonts.check` | Face exists or not | Allowlist |
| `offsetWidth` / `offsetHeight` | Width changed vs fallback | Font-probe fallbacks |
| `getBoundingClientRect` | Same inference via floats | Font-probe path |
| `queryLocalFonts` | Full catalog | Gated and loud; not the usual probe |

## Why a random set fails

Operators copy a macOS list onto a Windows UA. Or they hide Calibri and keep a Windows Client Hint. Or they allow a designer catalog that a stock laptop would not have. The page does not need a rare font to catch that. It needs two APIs that disagree.

[A user agent string](/blog/user-agent-is-not-enough) will not save a lying catalog. [Client Hints](/blog/client-hints-and-user-agent-data) will make the lie louder if `platform` says Windows and the faces say otherwise.

The allowlist should sound like the family you claimed: desktop Windows, not a phone, not a Mac. MaskWright profiles are desktop families. Do not dress a Windows host in a foreign catalog and call it isolation.

## Probe list versus the installed catalog

A page does not need `queryLocalFonts`. That API is gated and loud. The old method is enough: a list of a few hundred names, `document.fonts.check`, and a width comparison against a fallback face. If the width changes, the face exists.

Windows stock faces are the boring set: Segoe UI, Calibri, Cambria, Consolas, and the rest of a clean 10 or 11 install. Designer catalogs, Adobe suites, and games add hits that a stock laptop would not have. Those hits identify a machine family. Hiding them with an allowlist can be coherent. Hiding Segoe UI on a Windows UA cannot.

The raster path is the leftover risk. DirectWrite still knows faces the allowlist denied if the custom core and `MASKWRIGHT_FONT_LIST` are not in play. Canvas will paint what the raster has. Keep the two notes in one head even though they are two slugs.

## Measurement fallbacks are the second list

When `document.fonts.check` is patched, probes fall back to DOM measurement. They set a face on a hidden span, compare width to a known fallback, and infer existence. That is why the inject also covers offsetWidth, offsetHeight, and getBoundingClientRect when they are used as font probes. A wrap on `check` alone is a half door.

I still expect the allowlist to be short. A 400-face allowlist that includes every designer font you ever installed is a machine family, not a stock Windows story.

Without the custom core, treat DirectWrite as host truth with a JavaScript allowlist on top. That is honest. It is also why a random Mac catalog on a Windows process fails twice: the inject can hide names, and the raster can still paint them.

## Neighboring surfaces

Fonts leak into canvas paint. They also leak into bounding rects. [AudioContext](/blog/audio-context-fingerprint) is unrelated math. [WebRTC](/blog/webrtc-ip-leaks) is unrelated addresses. [WebRTC modes](/blog/webrtc-modes-disabled-proxy-public-real) will not change a face list. [hardwareConcurrency](/blog/hardware-concurrency-and-cores) should still sound like the same class of PC that would own this catalog.

## How I use the allowlist

I want a short, boring Windows set that stays put across launches. I do not want a new random catalog when I reopen the profile. I do not want faces that cannot exist on the UA.

The parent note is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps enumeration here so canvas can stay on paint. The list and the raster are related. They are not the same API.

## FAQ

**Is hiding Segoe UI a good idea on Windows?**
No. A Windows UA without Segoe UI is a cheap catch.

**Does the inject rewrite DirectWrite?**
Only partly, and only when the custom core is present with a font list. Otherwise you have a JavaScript allowlist on host raster.

**Will WebRTC modes change my font list?**
No. Those are address policies.
