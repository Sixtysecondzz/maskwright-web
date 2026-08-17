---
slug: fingerprint-surfaces-we-actually-cover
title: Fingerprint surfaces we actually cover
metaTitle: Fingerprint surfaces we actually cover
metaDescription: This is the inventory we implement, not a 2022 listicle. Read which surfaces a local MaskWright profile actually handles on Windows. Local Windows notes only.
excerpt: This is the inventory we implement, not a 2022 listicle. Read which surfaces a local MaskWright profile actually handles on Windows. Local Windows notes only.
author: Avery Chen
published: 2026-06-05
category: browser-fingerprinting
tags: fingerprinting, windows, browser, fingerprint
readingTime: 5
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on fingerprint surfaces we actually cover beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, after-third-party-cookies, new-fingerprint-same-folder, digital-footprint-versus-browser-fingerprint, testing-a-fingerprint-before-work, cross-browser-fingerprinting, macos-fingerprint-on-a-windows-host, mac-address-is-not-a-browser-fingerprint
---

This is the inventory we implement, not a 2022 listicle. Buyer guides still copy the same surface names and stop. I want the list that is actually in the desktop code on Windows, plus the rows that are only partial, plus the things we do not touch.

[What browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) is the mechanism. This page is the stock list. We have no published pass rates. I will not turn the list into a trophy.

## How the inventory is applied

The fingerprint schema lives in the desktop fingerprint package. Runtime apply is split. CDP handles user agent, Client Hints metadata, locale, timezone, screen metrics, and geolocation. A MAIN-world inject handles most DOM surfaces. Chromium prefs handle WebRTC and some geo bits. Env vars feed the patched core for GL vendor and font list when that binary is present.

When the custom Chromium 131 core is installed, launch can use it. When it is missing, the app falls back to system Chrome or Edge and still applies CDP and inject. The fallback is not a patched process.

The public channel is Windows 10 and 11 x64. Profiles are desktop families. Client Hints mark `mobile` false.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster is the rest of the commentary. This page stays on what is on and what is not.

![A grid of browser diagnostic panels on a Windows desk](/blog/blog-fingerprint-grid.png "The inventory is a set of APIs we actually override. It is not a 2022 list of every rumor.")

## Surfaces that are implemented

| Surface | How |
| --- | --- |
| User agent | CDP `setUserAgentOverride`, `--user-agent`, inject on `navigator.userAgent` |
| Client Hints / `userAgentData` | CDP metadata + high-entropy inject |
| Platform, vendor | Inject + CDP |
| Languages / locale | CDP locale override + inject |
| Timezone | CDP `setTimezoneOverride` + `TZ` env |
| Screen (width, height, avail, colorDepth, pixelRatio) | CDP device metrics + inject |
| Hardware concurrency, device memory | Inject |
| WebGL vendor / renderer / getParameter | Inject + `MASKWRIGHT_GL_*` when patched core is present |
| WebGPU adapter info | Inject from `fingerprint.webgpu` |
| Canvas `toDataURL` / `toBlob` | OS-biased stable noise |
| Font probes | Allowlist, `document.fonts.check`, offset and rect fallbacks |
| Client rects | Stable noise on element and Range APIs |
| Audio (OfflineAudioContext / Analyser) | Seeded noise |
| WebRTC | Prefs + inject filters; modes disabled, proxy, public, real |
| Geolocation | CDP override, aligned to exit via ip-api.com |
| Media deviceId / groupId | Stable hashes from a seed |
| Plugins / mimeTypes | OS- and browser-coherent lists |
| Battery | Desktop plugged-in BatteryManager |
| Network Information | Patched connection object |
| Speech voices | Synthetic, locale-matched |
| Notifications permission | Inject prompt state |
| Bluetooth presence | Inject |
| `window.chrome` | Inject on Chromium profiles |
| `navigator.webdriver` | False + `--disable-blink-features=AutomationControlled` |
| Do Not Track | Schema + inject |
| Max touch points | Field, default 0 |

## Partial, and named as partial

TLS JA3 / JA4: compile-time, documented as needing a patched BoringSSL tree, not JavaScript-spoofed. Effectiveness without runtime TLS tests is unknown.

Font raster through DirectWrite: a `MASKWRIGHT_FONT_LIST` plus a patch when the custom core is present.

Process name in Task Manager: optional `MASKWRIGHT_ALIAS_PROCESS` hardlink, or a compile-time patch.

## What this inventory is not

It is not a [MAC address](/blog/mac-address-is-not-a-browser-fingerprint). We do not hide MACs. A NIC is not a canvas.

It is not a [digital footprint](/blog/digital-footprint-versus-browser-fingerprint). Accounts and payment instruments do not live in the inject.

It is not [Topics or CHIPS](/blog/after-third-party-cookies). Those replace third-party cookies. They are not a surface we spoof.

It is not [cross-browser joining](/blog/cross-browser-fingerprinting) by itself. A second engine on the same box still shares IP, fonts at the OS layer, and the NIC.

It is not a wipe. [A new fingerprint in the same folder](/blog/new-fingerprint-same-folder) leaves the cookies.

It is not a Mac. [A macOS fingerprint on a Windows host](/blog/macos-fingerprint-on-a-windows-host) still sits on a PC.

## How I want you to use the list

[Test the profile before work](/blog/testing-a-fingerprint-before-work) against this inventory, not against a 2022 blog table. If a lab names a surface we do not claim, believe the lab and do not invent a toggle.

If a surface is Yes, expect an override and expect it to stay put across launches. If it is Partial, expect a core-dependent story. If it is absent, it is absent.

## FAQ

**Does a Yes row mean we pass commercial anti-bot stacks?**
No. It means we implement an override. We have no published pass rates.

**Is the fallback to system Chrome a patched engine?**
No. CDP and inject still run. The process is not patched.

**Do you hide MAC addresses?**
No. That is outside the tab.
