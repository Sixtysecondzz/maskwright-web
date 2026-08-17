---
slug: screen-resolution-coherence
title: Screen metrics that have to stay coherent
metaTitle: Screen metrics that have to stay coherent
metaDescription: Avail size, color depth, and pixel ratio have to stay in one story. This page is about screen coherence on Windows, not a list of popular resolutions to fake.
excerpt: Avail size, color depth, and pixel ratio have to stay in one story. This page is about screen coherence on Windows, not a list of popular resolutions to fake.
author: Avery Chen
published: 2026-07-08
category: browser-fingerprinting
tags: fingerprinting, windows, screen, fingerprint
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on screen metrics that have to stay coherent beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, timezone-language-and-proxy-country, hardware-concurrency-and-cores, battery-and-media-device-ids, client-hints-and-user-agent-data, seed-versus-random-fingerprints, user-agent-is-not-enough, fingerprint-stability-across-launches
---

Screen width is easy to type. Avail height, color depth, and device pixel ratio have to belong to the same monitor story. A page reads `screen.width`, `screen.height`, `availWidth`, `availHeight`, `colorDepth`, and `devicePixelRatio`. It also sees the inner window. If those numbers cannot be one Windows desktop, the rest of the fingerprint does not matter.

This is not a list of popular resolutions. It is a coherence note.

## The fields that have to agree

Width and height are the panel. Avail size is the panel minus taskbar and other reserved chrome. On Windows, avail height is usually a little smaller than height. A story where avail equals the raw panel, or where avail is larger than the panel, is a cheap tell.

Color depth on a modern desktop is usually 24 or 32. A 16 bit claim next to a 4K panel is theater.

Device pixel ratio has to match the claimed display. A ratio of 1.0 on a laptop story that also claims 2880 CSS pixels is two machines. A ratio of 3.0 on a 1920 tower is two machines.

We apply screen metrics through CDP `setDeviceMetricsOverride` and through inject on `screen.*` and `devicePixelRatio`. The schema holds width, height, avail, color depth, and pixel ratio. Keep them as one object. Do not edit one field in isolation.

| Field | Typical Windows desktop | Cheap fork |
| --- | --- | --- |
| `width` / `height` | 1920x1080, 2560x1440, laptop panels | Phone 390x844 next to `mobile: false` |
| `availHeight` | A bit smaller than height (taskbar) | Avail larger than the panel |
| `colorDepth` | 24 or 32 | 16 bit on a 4K claim |
| `devicePixelRatio` | 1.0 or 1.25 on most PCs | 3.0 on a 1920 tower |

## Inner size is not the panel

`window.innerWidth` and `innerHeight` describe the viewport, not the monitor. A maximized Chrome on Windows is smaller than `screen.availHeight` because of the tab strip. A page that sees inner size equal to the full panel, with no chrome, is looking at a headless or a lie.

We override device metrics through CDP and `screen.*` through inject. The inner window still has to be a number that can exist inside the avail box. I will not publish a chrome-pixel recipe. I will say the viewport cannot be larger than the screen you claimed.

Color depth and `pixelDepth` should match each other. A 24 versus 32 split that never happens on that Windows display path is trivia that still gets read.

## Taskbar math is part of Windows

Avail height should drop by a taskbar-sized strip on a typical desktop. Avail width can drop if the bar is vertical. A story where avail equals the raw panel on Windows 11 is possible with auto-hide, but it is not the default. I prefer the default story unless the profile has a reason.

I also refuse a phone resolution on this product. Desktop profiles only. A 390 by 844 CSS viewport next to `mobile: false` is a collage.

`outerWidth` and `outerHeight` include window chrome. They should sit above inner size and at or under avail. A tool window that reports outer equal to inner with no caption is a headed-versus-headless tell, not a monitor tell. I still read it next to the panel. Multi-monitor hosts can confuse a copied width. We apply one screen object. I do not claim we virtualize a second display. Pick the panel this profile is supposed to own and keep it.

## Partners that sit beside the panel

[hardwareConcurrency](/blog/hardware-concurrency-and-cores) should sound like a PC that would own this panel. [Battery](/blog/battery-and-media-device-ids) should not describe a phone. [Client Hints](/blog/client-hints-and-user-agent-data) mark mobile false on our profiles. [The user agent](/blog/user-agent-is-not-enough) should still say desktop Windows if the screen says desktop Windows.

[Timezone](/blog/timezone-language-and-proxy-country) is a different axis. A correct panel does not fix a Tokyo clock on a Dallas exit.

## Stability across launches

The profile is the same person if the folder and the seed stay put. [Stability across launches](/blog/fingerprint-stability-across-launches) includes the monitor story. Do not give the profile a new panel every morning unless you meant a new machine. [A seed versus a new random](/blog/seed-versus-random-fingerprints) is the same policy in other words.

## How I set a panel

I pick a boring Windows desktop or laptop geometry that can exist with the GPU and the core count. I keep avail smaller than the raw size in the way a taskbar would. I keep the ratio ordinary. I relaunch once and confirm the numbers did not drift.

The parent bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) notes keep screen on its own page so operators stop treating width as the whole surface.

## FAQ

**Is typing 1920x1080 enough?**
No. Avail size, color depth, and pixel ratio have to belong to the same monitor.

**Should avail equal the raw panel?**
Usually no. Windows taskbar math makes avail a bit smaller. Auto-hide can equalize them, but that is not the default.

**Can I use a phone resolution on MaskWright?**
Not as a coherent story. Desktop profiles only. Client Hints mark mobile false.
