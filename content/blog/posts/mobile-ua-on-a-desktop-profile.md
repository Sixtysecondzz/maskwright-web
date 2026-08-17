---
slug: mobile-ua-on-a-desktop-profile
title: A mobile user agent on a desktop profile
metaTitle: A mobile user agent on a desktop profile
metaDescription: MaskWright is a desktop product. A phone UA on a Windows host fails basic coherence. Learn why that costume is visible before you try it. Authorized work only.
excerpt: MaskWright is a desktop product. A phone UA on a Windows host fails basic coherence. Learn why that costume is visible before you try it. Authorized work only.
author: Avery Chen
published: 2026-06-25
category: browser-fingerprinting
tags: fingerprinting, windows, mobile, user
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on a mobile user agent on a desktop profile beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, macos-fingerprint-on-a-windows-host, gpu-renderer-must-match-the-ua, testing-a-fingerprint-before-work, navigator-webdriver-and-automation-flags, new-fingerprint-same-folder, ja3-ja4-tls-fingerprints, fingerprint-surfaces-we-actually-cover
---

MaskWright is a desktop product. A phone user agent on a Windows host fails basic coherence. The string can say iPhone. The rest of the process still says a PC. This page explains why that claim is visible. It is not a mobile-emulation guide. We do not ship one.

If you need a phone, use a phone you have a right to use. Do not dress a tower as a handset.

## What the product actually is

The public download channel is Windows 10 and 11 x64. Fingerprint presets model desktop OS families: Windows, macOS, and Linux. Client Hints mark `mobile` false. Compare copy says desktop profiles only. There is no cloud phone and no Android emulation path in the desktop code.

That is the constraint. A mobile UA on this host is not a feature we forgot to document. It is a contradiction we will not dress up.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster treats [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) as a bundle. The UA is one field. The bundle includes screen, touch, GPU, battery, plugins, and Client Hints. A phone caption that leaves those fields on desktop values is a collage.

| Witness | Desktop truth on this host | Phone caption that fails |
| --- | --- | --- |
| Screen | 1920x1080-class monitor, PC chrome | 390x844 next to `mobile: false` |
| Touch | Max touch points default 0 | Phone UA with zero touch |
| GPU | ANGLE + desktop card | Mobile Safari next to D3D11 |
| Battery | Plugged-in desktop manager | A draining phone story |
| Client Hints | `mobile: false` | Android UA, desktop hints |
| TLS | Windows Chromium hello | Phone UA on a PC hello |

## The witnesses a phone caption cannot carry

Screen. A 1920x1080 desktop frame with a device pixel ratio from a monitor is not a 390x844 phone. Avail width, chrome, and orientation still describe a PC.

Touch. Max touch points default to 0 in our schema. A phone UA with zero touch is a joke the page can read in one line.

GPU. [The renderer has to match the user agent](/blog/gpu-renderer-must-match-the-ua). ANGLE plus a desktop card next to Mobile Safari is a cheap catch. A mobile GPU string next to a desktop screen is the same catch from the other side.

Battery. The inject presents a desktop plugged-in BatteryManager. Phones drain. Towers do not tell that story.

Plugins and `window.chrome`. Chromium profiles get a chrome object and OS-coherent plugin lists. A Safari-on-iPhone caption with `window.chrome` present is a fork.

Client Hints. High-entropy values and `mobile: false` will argue with an Android UA if you only rewrote `navigator.userAgent`.

TLS. [JA3 and JA4](/blog/ja3-ja4-tls-fingerprints) belong to the binary. A Windows Chromium hello with a phone UA is another layer of the same collage.

## Nearby claims that fail the same way

A [macOS fingerprint on a Windows host](/blog/macos-fingerprint-on-a-windows-host) is the OS-family version of this mistake. Different caption. Same host tells: fonts, raster, process, hello.

[A new fingerprint in the same folder](/blog/new-fingerprint-same-folder) is the leftover-cookie version. You changed the paint to a phone and left desktop cookies in the Chromium directory. The site has a mobile caption on a desktop session.

[Automation flags](/blog/navigator-webdriver-and-automation-flags) are a third overlay. We set webdriver false. That does not make a tower a phone.

## What I will not claim

I will not claim a future mobile preset. The audit marks that unknown. I will not claim viewport overrides turn the host into a device lab. CDP can set device metrics. The GPU, the fonts, the hello, and the process name remain a Windows desktop.

I will not publish a "best mobile UA" string. The [surfaces we actually cover](/blog/fingerprint-surfaces-we-actually-cover) are desktop surfaces. Covering them well on a PC is the product. Covering a phone on a PC is a different product, and it is not this one.

A headed window with device metrics set to a handset size is still a headed Windows Chromium. The process still launches with `--no-sandbox` and `--use-angle=d3d11` on win32. Task Manager still shows a PC binary. Those host facts do not become a phone because the caption changed.

We have no published pass rates. A lab that greens a phone UA on a desktop profile is not a reason to ship the claim.

## How I want you to use this page

[Test the profile before work](/blog/testing-a-fingerprint-before-work) as a desktop profile. If the authorized account is a mobile app account, open it on a phone. If it is a desktop ads or social admin, keep the UA, the hints, the screen, and the GPU in one desktop family.

Responsive mode in DevTools is a layout tool. It is not a device. Operators who screenshot a narrow pane and call it mobile still have a desktop process, a desktop hello, and a desktop font catalog. The work site can ask any of those witnesses.

The claim is visible before you try it. That is the whole note.

## FAQ

**Does MaskWright emulate Android?**
No. Desktop profiles only. No cloud phone. Client Hints mark mobile false.

**Is DevTools responsive mode a phone?**
No. It is a layout tool. The process, hello, and fonts stay desktop.

**Can CDP device metrics make the host a phone?**
They can resize the viewport. GPU, fonts, hello, and Task Manager stay a Windows desktop.
