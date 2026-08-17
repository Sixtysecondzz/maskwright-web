---
slug: firefox-vs-chromium-antidetect-cores
title: Firefox versus Chromium antidetect cores
metaTitle: Firefox versus Chromium antidetect cores
metaDescription: Firefox-core and Chromium-core antidetect tools are different engines. Compare the cores here. Camoufox as a commercial query lives on the sibling page.
excerpt: Firefox-core and Chromium-core antidetect tools are different engines. Compare the cores here. Camoufox as a commercial query lives on the sibling page.
author: Riley Park
published: 2026-07-04
category: antidetect-browsers
tags: antidetect, profiles, chromium, firefox, comparison
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on Firefox versus Chromium antidetect cores beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, camoufox-and-firefox-antidetect-notes, chromium-core-in-an-antidetect-browser, why-we-built-a-local-antidetect-browser, antidetect-browser-for-windows, antidetect-browser-without-an-account, multi-session-browser, antidetect-profile-caps-vs-local-limits
---

Firefox-core and Chromium-core antidetect tools are different engines. They do not share a cookie database, a TLS stack, or a JavaScript object model. Treating them as skins of one product is how operators get a mismatch they then blame on the proxy. This page compares the cores. [Camoufox](/blog/camoufox-and-firefox-antidetect-notes) is the named Firefox option. Keep that sibling for the commercial query.

[What an antidetect browser is](/blog/what-is-an-antidetect-browser) still holds: isolation is the folder and the seed. The engine is how the folder gets a process. The rest of the cluster lives under [Antidetect browsers](/blog/antidetect-browsers).

## Two families, two stores

A Chromium profile launches a Chromium-family binary into a Chromium user-data directory. A Firefox profile launches a Firefox-family binary into a Firefox profile tree. You cannot move a Chromium cookie file into Firefox and call that a restore. The files are not the same format. The fingerprint surfaces are not the same list.

MaskWright profiles are typed `chromium` (default) or `firefox`. Chromium prefers a custom 131 core when present, else system Chrome or Edge. Firefox prefers Camoufox when installed into `{userData}/cores`, else stock Firefox. Homepage marketing talks Chromium. The code has both. I will not hide the second engine because it is under-marketed.

Pick the family the site already expects for that authorized account. A brand that lives in Chrome-shaped Client Hints should not wake up in Gecko because you wanted to try a lab. A research profile that must look like ordinary Firefox should not launch Chromium with a Firefox user agent. That mismatch is a tell.

## What actually differs

| Area | Chromium path | Firefox / Camoufox path |
| --- | --- | --- |
| Proxy attach | `--proxy-server` as `type://host:port` | Env: `http_proxy`, `https_proxy`, `MASKWRIGHT_PROXY_URL` |
| HTTP auth | MV3 extension (`onAuthRequired`) | Via the env URL |
| SOCKS5 auth | Handshake | Via the env URL |
| Fingerprint apply | Long CDP + inject list | Not a carbon copy of that path |
| Unpacked extensions | `--load-extension` from `extensions/` | Parity not verified in the audit |
| Cookie / storage import | CDP on Chromium | Treat as a different job until tested |
| TLS | Patched tree when custom 131 present | Firefox handshake |

[The Chromium core](/blog/chromium-core-in-an-antidetect-browser) is the 131 explainer. Read it if you only run Chromium profiles. This page exists because some desks run both.

Do not assume every Chromium surface has a Gecko twin in 0.1. If a row is unknown for Firefox, I will not invent it. If you need an unpacked add-on in a work profile, test that profile or use Chromium.

## Isolation does not care which logo you like

Two Firefox profiles that share a profile directory share a life. Two Chromium profiles that share a user-data directory share a life. The engine brand is not the isolation. The folder is.

In MaskWright the store root is `{Electron userData}/maskwright-data`. The index is `profiles.json`, encrypted at rest with AES-256-GCM. Each profile is `profiles/<uuid>/`. That tree is not encrypted by our code. Cookie import JSON and localStorage import JSON are plaintext. There is no account and no cloud sync. [Without an account](/blog/antidetect-browser-without-an-account) is the custody cut. [Why local](/blog/why-we-built-a-local-antidetect-browser) is the architecture note.

Disk use still grows per profile. Firefox and Chromium both cache. [Windows](/blog/antidetect-browser-for-windows) is still one GPU and one NIC. A second engine does not give you a second PC.

There is no profile cap in the local store. The cap is disk, RAM, and the number of authorized accounts you can keep honest. [Profile caps versus local limits](/blog/antidetect-profile-caps-vs-local-limits) is that argument. A [multi-session browser](/blog/multi-session-browser) is still folders, not a seat meter.

## When to pick which

Use Chromium when the authorized work already lives in a Chrome-shaped world: Google ads surfaces, most storefronts, most business suites that assume Blink. Use Firefox when the profile is supposed to be a Firefox user, or when you want a second engine family so two authorized identities do not even share a rendering stack.

Do not pick Firefox to "be less detected." Detection is a site policy plus a stack we do not control. A coherent Firefox profile can still fail a check. A coherent Chromium profile can still pass. Trophy lab scores are not this comparison.

Do not mix families inside one login over time. If last month's session was Chromium 131 and this month's is stock Firefox, the site sees a new device story. That is hygiene, not a bypass tip. Authorized work only.

## FAQ

**Can I convert a Chromium profile to Firefox?**
Not by copying cookies. Start a Firefox-typed profile if you need Gecko. Do not bounce a live login between families.

**Is Camoufox required for Firefox profiles?**
No. Stock Firefox is the fallback. Camoufox is preferred when installed.

**Which core is "better"?**
Neither. The right core is the one that matches the account. This page refuses a winner.

Two engines. Two folder formats. One store on the operator PC. Pick on purpose.
