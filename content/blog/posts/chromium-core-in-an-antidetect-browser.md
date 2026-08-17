---
slug: chromium-core-in-an-antidetect-browser
title: The Chromium core in an antidetect browser
metaTitle: The Chromium core in an antidetect browser
metaDescription: The core is a Chromium build on the operator PC, targeting 131 with a system fallback. This is a core explainer, not a product-update changelog.
excerpt: The core is a Chromium build on the operator PC, targeting 131 with a system fallback. This is a core explainer, not a product-update changelog.
author: Riley Park
published: 2026-06-25
category: antidetect-browsers
tags: antidetect, profiles, chromium
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on the Chromium core in an antidetect browser beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, firefox-vs-chromium-antidetect-cores, antidetect-browser-for-windows, camoufox-and-firefox-antidetect-notes, multi-session-browser, why-we-built-a-local-antidetect-browser, multi-account-browser, antidetect-browser-without-an-account
---

Most tools in this category launch Chromium. The word core gets used like a brand. It is a binary. On a local Windows desk the core is the Chromium build the profile process actually runs, plus the patches and launch flags that binary accepts. MaskWright targets 131.0.6778.85 when the custom build is present. If it is missing, launch falls back to system Chrome or Edge. Those are not the same fingerprint story.

This page is that explainer, not a changelog of minor versions. [What an antidetect browser is](/blog/what-is-an-antidetect-browser) is the definition. The rest of the cluster lives under [Antidetect browsers](/blog/antidetect-browsers).

## What core means on disk

A Chromium core is an executable and its supporting files. The antidetect app is a launcher and a store around that executable. The launcher picks a profile folder, applies a fingerprint record, attaches a proxy if you pasted one, and starts the binary with that folder as `--user-data-dir`.

The custom binary can live under a cores directory or `MASKWRIGHT_CHROMIUM_PATH`. Patches in the tree cover process branding, TLS notes, font raster, GPU `GL_VENDOR`, and `--load-extension`. Marketing can say purpose-built Chromium. The honest sentence is: a patched 131 core when installed, otherwise the system browser.

If the custom binary is missing, JavaScript and CDP still override a long list of surfaces. TLS JA3 and JA4, font raster, and process name still follow the binary you actually launched. I will not pretend the fallback is the same product as the patched tree.

![A Chromium family process on a local Windows box](/blog/blog-chromium-core.png "The core is the binary on the operator PC, not a version string in a blog post.")

## What the core can do that a script cannot

A page that cares will read more than `navigator.userAgent`. Canvas, WebGL, audio, fonts, Client Hints, and the TLS handshake all sit below the costume a userscript can paint.

JavaScript inject and CDP can override user agent and Client Hints, timezone, screen, WebGL vendor and renderer, canvas noise, fonts, audio, WebRTC handling, geolocation, media device IDs, and a list of smaller surfaces. `navigator.webdriver` is set false. `--disable-blink-features=AutomationControlled` is on the Chromium command line. That is the JS and CDP layer.

Some tells are compile-time or patch-time:

| Tell | JS/CDP enough? | What actually moves it |
| --- | --- | --- |
| User agent, screen, timezone | Yes | CDP + inject |
| Canvas / WebGL JS probes | Mostly | Inject, plus GL env on patched core |
| TLS JA3 / JA4 | No | Patched BoringSSL tree |
| Font raster (DirectWrite) | Partial | `MASKWRIGHT_FONT_LIST` when custom core present |
| Process name in Task Manager | No | Optional alias or compile-time patch |

Those last rows are partial. I will not quote lab scores. We do not have published pass rates in the audit.

Windows launch also passes `--no-sandbox` and `--use-angle=d3d11` for the unsigned custom `chrome.exe`. That is a Windows fact, not a feature list. [Antidetect on Windows](/blog/antidetect-browser-for-windows) is the platform note.

## Isolation is the folder, not the logo on the binary

Two Chromium processes that share a user-data directory share a life. The core does not invent isolation. The directory does. Cookies, localStorage, IndexedDB, and extension state live in that tree. The fingerprint seed lives in the profile record and is applied at launch.

In MaskWright the store root is `{Electron userData}/maskwright-data`. The index is `profiles.json`, encrypted at rest with AES-256-GCM. Each profile is `profiles/<uuid>/`. That per-profile tree is not encrypted by our code. Cookie import JSON and localStorage import JSON are plaintext. The core writes ordinary Chromium files into the folder. Treat the folder like a house, not like a vault.

There is no MaskWright account and no cloud profile sync. [A local antidetect without an account](/blog/antidetect-browser-without-an-account) is the custody cut. [Why we built a local tool](/blog/why-we-built-a-local-antidetect-browser) is the architecture note. If the session lives on a vendor disk, you are renting storage that happens to launch Chromium.

Internal CDP is used for fingerprint apply, cookies, localStorage, and an optional tab open. Chromium starts with an ephemeral `--remote-debugging-port` for that work. It is not documented as a user automation API. Do not treat the core as Playwright with a nicer skin.

## Firefox is a second core, not a theme

Some desks want a Firefox-family engine. MaskWright profiles can be `chromium` (default) or `firefox`. Firefox prefers Camoufox when installed, else stock Firefox. [Firefox versus Chromium](/blog/firefox-vs-chromium-antidetect-cores) is the comparison. [Camoufox notes](/blog/camoufox-and-firefox-antidetect-notes) is the named-core page. Homepage marketing talks Chromium. The code has both.

A [multi-account browser](/blog/multi-account-browser) is still this core plus folders. The word does not change the binary. Authorized accounts only. Extra logins that exist only to dodge a limit are a platform problem, not a Chromium feature.

## FAQ

**How do I know which binary launched?**
Check the executable. A Chromium profile on system Edge is not the patched 131 tree. Folder isolation still holds. The handshake follows the binary.

**Is version 131 undetectable?**
No. Detection is a site policy plus a stack we do not control. A coherent profile on a known core is the most the launcher can offer.

**Do I need the custom core to isolate cookies?**
No. Isolation is the user-data directory. You need the custom core for the patched tells (TLS notes, font raster, process alias).

The core is a Chromium build on the operator PC. Target 131 when present. System fallback when not. Folders do the isolation. The changelog can wait.
