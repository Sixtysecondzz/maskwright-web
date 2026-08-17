---
slug: custom-chromium-versus-system-chrome
title: Custom Chromium versus system Chrome
metaTitle: Custom Chromium versus system Chrome
metaDescription: The product prefers a 131 core and can fall back to system Chrome or Edge. Learn what that fallback changes for isolation and for the fingerprint story.
excerpt: The product prefers a 131 core and can fall back to system Chrome or Edge. Learn what that fallback changes for isolation and for the fingerprint story.
author: Riley Park
published: 2026-06-29
category: antidetect-browsers
tags: antidetect, profiles, chromium, custom
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on custom Chromium versus system Chrome beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, mobile-antidetect-is-not-a-desktop-profile, browser-as-a-service-risks, antidetect-browser-for-agencies, ghost-browser-vs-antidetect, proxy-browser-vs-antidetect, antidetect-browsers-for-seo, virtual-machine-vs-antidetect-browser
---

The product prefers a custom Chromium 131 core. If that binary is missing, launch falls back to system Chrome or Edge. Those are not the same fingerprint story. Isolation can still hold, because isolation is the user-data directory. The handshake, the process name, and the font raster follow whichever executable actually started. This page says what the fallback changes.

[What an antidetect browser is](/blog/what-is-an-antidetect-browser) is the definition. The rest of the cluster lives under [Antidetect browsers](/blog/antidetect-browsers).

## What stays the same

A Chromium-typed profile still gets its own folder. In MaskWright that is `profiles/<uuid>/` under `{Electron userData}/maskwright-data`. Cookies, localStorage, IndexedDB, and extension state land there. The index `profiles.json` is encrypted at rest with AES-256-GCM. The per-profile tree is not. Cookie import JSON and localStorage import JSON are plaintext. Fallback does not encrypt the profile. It also does not merge profiles.

Fingerprint apply through CDP and inject still runs: user agent and Client Hints, timezone, screen, WebGL overrides, canvas noise, fonts, audio, WebRTC handling, geolocation, and the rest of the JS layer. `navigator.webdriver` is still set false. AutomationControlled is still disabled on the command line. A proxy you attached still goes through `--proxy-server` plus the HTTP auth extension or the SOCKS5 handshake.

There is still no account, no cloud sync, and no cloud phone. [A mobile antidetect is not a desktop profile](/blog/mobile-antidetect-is-not-a-desktop-profile). System Chrome does not turn the app into Android.

Authorized work only. A system-Chrome fallback does not authorize a login you do not own.

## What changes when the custom core is missing

| Surface | Custom 131 core | System Chrome or Edge |
| --- | --- | --- |
| TLS JA3 / JA4 | Patched BoringSSL when present | Google's or Microsoft's handshake |
| Font raster | Can take `MASKWRIGHT_FONT_LIST` | Host DirectWrite |
| Process name | Optional alias / patch | `chrome.exe` or `msedge.exe` |
| GL vendor at the binary | `MASKWRIGHT_GL_VENDOR` | Real adapter; inject still overrides JS |
| Sandbox | `--no-sandbox` on unsigned custom `chrome.exe` | Normal system sandbox |
| Updates | Stays 131 until we ship another core | Google's or Microsoft's schedule |

A spoofed user agent that says 131 while system Chrome is 132-plus is a coherence bug. Check which executable came up.

![The binary on disk is the story the handshake tells](/blog/blog-chromium-core.png "Custom 131 when present. System Chrome or Edge when not.")

JS font enumeration probes can still follow an allowlist on either binary. The pixels of the glyphs are a different layer. Inject still overrides `WEBGL_debug_renderer_info` for the page. A page that only reads JS may see the spoof. A deeper probe may not.

## Isolation versus the homepage sentence

People hear fallback and think the profiles collapsed. They did not. Two profiles still do not share cookies. That is the product. [A proxy browser versus an antidetect browser](/blog/proxy-browser-vs-antidetect) is a different collapse: exit only, one house.

What fallback costs is the claim "purpose-built Chromium" as a blanket. It is conditional. Marketing homepage copy does not mention the fallback. The Cores panel and the launch code do. I will not sell you the homepage sentence if your disk has no core.

[Browser-as-a-service](/blog/browser-as-a-service-risks) is the other extreme: someone else's Chromium on someone else's disk. Fallback to *your* Chrome is still local. The vendor does not hold the cookies. Google or Microsoft may update the binary under you. That is a different custody problem.

A [virtual machine](/blog/virtual-machine-vs-antidetect-browser) is heavier isolation when the host Chrome install itself is the problem (extensions you cannot unload, a managed policy, a GPU you cannot explain). Most authorized brand desks do not need that. They need to know which binary launched.

## When fallback is acceptable

It is acceptable for a first install while the custom core downloads. It is acceptable for a profile that only needs cookie isolation and a stable JS seed, and you have checked that the UA and Client Hints match the real Chrome version on disk. It is acceptable when you would rather trust a signed system browser than an unsigned custom `chrome.exe` with `--no-sandbox`.

It is not acceptable when you told a client the profile runs patched 131 and you never installed the core. It is not acceptable when last week's session was the custom tree and this week's is Edge, on the same login. That is a new device story. Hygiene, not a bypass tip.

[Agencies](/blog/antidetect-browser-for-agencies) should write the binary into the runbook. [SEO research profiles](/blog/antidetect-browsers-for-seo) should not bounce cores under a login they intend to keep. Ghost-browser-style session switchers are a different product. This page is about which Chromium family executable started.

## FAQ

**Did my profiles merge because I have no custom core?**
No. Folders still isolate cookies. Only the deep tells changed.

**Should I prefer signed Chrome over the unsigned custom binary?**
That is a real tradeoff. Signed system Chrome, weaker patched tells. Unsigned custom 131, `--no-sandbox` on Windows. Pick on purpose.

**Can I mix cores on one login?**
Do not. Keep one executable family for the life of that session.

Check the executable. Keep the folder. Keep the seed. Install the 131 core if you need the patched tells. Use system Chrome on purpose if you need a signed consumer binary. Do not mix those choices inside one authorized profile without noticing.
