---
slug: camoufox-and-firefox-antidetect-notes
title: Camoufox and Firefox antidetect notes
metaTitle: Camoufox and Firefox antidetect notes
metaDescription: Camoufox is a Firefox-core option people search by name. We treat it as an optional core note, not a rival review written to rank a trophy lab.
excerpt: Camoufox is a Firefox-core option people search by name. We treat it as an optional core note, not a rival review written to rank a trophy lab.
author: Riley Park
published: 2026-06-19
category: antidetect-browsers
tags: antidetect, profiles, firefox, camoufox
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on Camoufox and Firefox antidetect notes beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, why-we-built-a-local-antidetect-browser, firefox-vs-chromium-antidetect-cores, antidetect-browser-without-an-account, chromium-core-in-an-antidetect-browser, antidetect-profile-caps-vs-local-limits, antidetect-browser-for-windows, vendor-lock-in-in-antidetect-tools
---

People search Camoufox as if it were a rival product to review. On this desk it is an optional Firefox-family core. You can install it from the UI into `{userData}/cores`. Firefox profiles prefer that binary when it is present, and fall back to stock Firefox when it is not. This page is that note. It is not a trophy-lab review and it will not rank Camoufox against a cloud locker.

[What an antidetect browser is](/blog/what-is-an-antidetect-browser) still holds. Isolation is the folder and the seed. Camoufox is how a Firefox-typed profile gets a process. The rest of the cluster lives under [Antidetect browsers](/blog/antidetect-browsers).

## What we actually ship around the name

MaskWright profiles are `chromium` or `firefox`. Chromium is the default. Firefox is a second core type. On Firefox launch the app resolves a Camoufox path first. If that path is empty, it resolves stock Firefox. You can install Camoufox from the Cores panel. The files land under the Electron user-data tree, not in a cloud locker.

Homepage marketing talks Chromium. Compare copy cites a custom Chromium 131 core. Firefox and Camoufox are in the desktop code and under-marketed. I will not pretend the homepage is the inventory. [The Chromium core](/blog/chromium-core-in-an-antidetect-browser) is the Blink explainer. [Firefox versus Chromium](/blog/firefox-vs-chromium-antidetect-cores) is the family comparison. This page is the named Firefox option.

| Setup | What actually launches |
| --- | --- |
| Firefox profile, Camoufox installed | Camoufox binary from `{userData}/cores` |
| Firefox profile, Camoufox missing | Stock Firefox |
| Chromium profile, custom 131 present | Patched Chromium 131 |
| Chromium profile, core missing | System Chrome or Edge |

Proxy attach on Firefox and Camoufox goes through environment variables: `http_proxy`, `https_proxy`, `MASKWRIGHT_PROXY_URL`. That is different plumbing from Chromium `--proxy-server` plus an HTTP auth extension. The operator habit is the same. Paste the line into the profile. Check the exit. Keep timezone and language honest.

Extension loading parity with Chromium is not verified in the audit. Do not assume `--load-extension` behavior exists on the Firefox path. If you need an unpacked add-on in a work profile, test that profile or use Chromium.

## Optional means optional

You do not need Camoufox to use the app. Chromium profiles work without it. Firefox profiles work with stock Firefox if Camoufox is missing. The custom Chromium 131 core is also optional in the same sense: missing binary, system Chrome or Edge. Optional cores are how a local install stays installable. They are also how operators launch a different fingerprint story than they think they launched.

Check which executable came up. A Firefox profile on stock Firefox is not a Camoufox profile. A Chromium profile on system Edge is not the patched 131 tree. The folder isolation still holds. The handshake and the deep tells follow the binary.

There is no MaskWright account attached to the core install. [Without an account](/blog/antidetect-browser-without-an-account) is the custody cut. Cores live on the operator disk. If you delete the cores folder, the next Firefox launch looks for stock Firefox. That is local maintenance, not a seat feature.

## What Camoufox does not change

It does not encrypt the profile tree. The index `profiles.json` is AES-256-GCM. Per-profile browser data is ordinary files. Cookie import JSON and localStorage import JSON are plaintext. Camoufox does not turn that tree into a vault.

It does not add cloud sync, team seats, or a cloud phone. [Why we built a local tool](/blog/why-we-built-a-local-antidetect-browser) is still the architecture. Profiles model desktop OS families. A Firefox UA on Windows is still a desktop browser.

It does not remove [vendor lock-in](/blog/vendor-lock-in-in-antidetect-tools) if your cookies only exist inside someone else's locker. Camoufox as a local binary you can point at is the opposite of a locker. Camoufox as a brand you cannot export from is a different product. We use the binary as a core. We do not broker a Camoufox cloud.

It does not lift a profile cap, because there is no profile cap in the local store. Disk, RAM, and honesty are the limits. [Caps versus local limits](/blog/antidetect-profile-caps-vs-local-limits) is that page. [Windows](/blog/antidetect-browser-for-windows) is still one box.

It does not authorize a login. Authorized accounts only. A cleaner Gecko fingerprint does not make an account yours.

## Why operators reach for the name

Firefox-family engines show a different TLS handshake, a different JS object model, and a different cookie store than Chromium. Some authorized research profiles should look like ordinary Firefox. Some desks want two engine families so two brand identities do not share a rendering stack. Those are coherent reasons.

"Less detected" is not a coherent reason. Detection is a site policy plus a stack we do not control. I will not publish a Browserleaks trophy or a CreepJS screenshot as a Camoufox selling point. We do not have published pass rates in the audit. Rival reviews that exist to rank a lab are a different genre. This note will not join that genre.

If you install Camoufox, treat it like the Chromium core: a binary on disk, a launch path, a fallback. Keep the profile's seed stable. Do not bounce a live login between stock Firefox, Camoufox, and Chromium because a forum thread changed its mind.

## FAQ

**Do I have to install Camoufox?**
No. It is optional. Chromium profiles never need it.

**Is this a Camoufox review?**
No. We launch it as a core. We do not rank it against cloud tools.

**Will installing it encrypt my profiles?**
No. Encryption is still just `profiles.json`.

If you searched the name: optional Firefox core, preferred when present, stock Firefox when not. Use it when the profile should be Firefox. Leave it off when the profile should be Chromium.
