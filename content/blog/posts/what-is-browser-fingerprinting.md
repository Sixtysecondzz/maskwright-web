---
slug: what-is-browser-fingerprinting
title: What browser fingerprinting actually measures
metaTitle: What browser fingerprinting actually measures
metaDescription: Sites can recognize a Windows browser without a cookie. This note explains the surfaces they read, what stays stable, and what a score does not prove.
excerpt: Sites can recognize a Windows browser without a cookie. This note explains the surfaces they read, what stays stable, and what a score does not prove.
author: Avery Chen
published: 2026-05-16
category: browser-fingerprinting
tags: fingerprinting, windows, browser
readingTime: 11
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on what browser fingerprinting actually measures beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-device-fingerprinting, fingerprint-surfaces-we-actually-cover, what-is-an-antidetect-browser, testing-a-fingerprint-before-work, digital-footprint-versus-browser-fingerprint, why-vpn-alone-fails-fingerprint-tests, fingerprint-spoofing-versus-tracking-prevention, canvas-fingerprinting-on-windows
---

One thing worth flagging first: deleting cookies does not give you a new browser. A site can still measure the engine you opened and ask whether this looks like the same Windows process it saw last week. The cookie was a name you handed over. The fingerprint is a set of answers the page can take without asking.

I use this page as the definition. The rest of the [Browser fingerprinting](/blog/browser-fingerprinting) notes take one API at a time. If you only need the short version: a fingerprint is a stable, coherent bundle of engine answers, plus a few network paths. A score on a public checker is not part of that definition.

## What the page is actually asking

Fingerprinting starts when JavaScript calls APIs Chromium already exposes. How many cores does `navigator.hardwareConcurrency` report. What does `screen.width` say. Which WebGL renderer string comes back. What hash do you get from a canvas `toDataURL` call. What timezone does `Intl` think you live in.

None of those answers are a password. They are properties of the process you launched. A site that still has a cookie can bind the measurement to that session. A site that lost the cookie can take the measurement again and compare.

That is why a [digital footprint versus a browser fingerprint](/blog/digital-footprint-versus-browser-fingerprint) is a different job. Accounts, emails, and payment cards live in the social graph. Canvas hashes and GPU strings live in the engine. Clearing cookies does not mint a new person. It only drops the name.

## The surfaces that show up in real work

A modern Chromium tab exposes more than a user agent string. The ones I actually check on a Windows profile look like this:

| Surface | What the page asks | Why it sticks |
| --- | --- | --- |
| User agent and Client Hints | Who do you claim to be | Cheap, and checked against `userAgentData` |
| Screen, pixel ratio, color depth | What monitor story are you telling | Avail size has to match the claim |
| Hardware concurrency and device memory | How large is this PC | Has to agree with GPU class |
| Canvas | How do you paint text and shapes | ClearType and GPU make a stable hash |
| WebGL vendor and renderer | Which GPU stack answers | Strings have to match the OS family |
| WebGPU adapter info | What does `navigator.gpu` admit | Older checklists still skip it |
| Fonts | Which faces exist and how they measure | Windows catalogs are distinctive |
| Client rects | How do boxes land in subpixels | Layout math is stable on one machine |
| AudioContext | How do you render a silent graph | The graph repeats if the seed repeats |
| WebRTC | Which ICE candidates appear | Local IPs are not the proxy exit |
| Timezone, language, locale | Where do you claim to sit | Must follow the exit if a proxy is on |
| Battery and media device IDs | Are you a laptop, and which mics exist | Easy to forget, easy to contradict |

That table is the mechanism. A [full inventory of surfaces we actually cover](/blog/fingerprint-surfaces-we-actually-cover) lives in a sibling. I am not going to pretend every commercial anti-bot stack reads every row the same way. We have no published pass rates, and I will not invent them.

![A grid of browser diagnostic panels on a Windows desk](/blog/blog-fingerprint-grid.png "A fingerprint is a set of measurements that have to agree, not a single string you swap.")

## Stability is the useful property

A useful fingerprint is boring. Same profile, same folder, same seed, same answers after you quit and open it again. Sites care about that more than they care about a one-off screenshot.

Noise that changes every reload is not stealth. It is a new person every time, or a broken person if the rest of the box stayed put. That is why canvas noise in our inject path is OS-biased and stable, why audio noise is seeded, and why client rects get a stable offset instead of a fresh random. A seed is a decision to remain the same browser.

The opposite decision is a new identity. New seed, new strings, new hashes. Do that on purpose when the profile is supposed to be someone else. Do not do it because a lab page looked prettier after a refresh.

## Coherence is the tell that actually catches people

Most operators get caught on disagreement, not on a rare hash. A Windows 10 user agent next to a macOS renderer. A 13 inch laptop resolution next to a workstation GPU string. A Tokyo timezone next to a Dallas exit. A charging battery on a tower story. A mobile Client Hint on a desktop profile.

The page does not need a perfect identifier if two APIs refuse to share a story. Consistency checkers exist to surface that. They are not a verdict that you are a real human. They are a list of contradictions.

This is also why [a VPN alone fails fingerprint tests](/blog/why-vpn-alone-fails-fingerprint-tests). A VPN changes the route. It does not rewrite canvas, fonts, WebGL, or `hardwareConcurrency`. The exit moved. The box did not.

## Cookies and the folder are a second system

A fingerprint is not a cookie store. The store is still the login. Chromium keeps cookies, localStorage, and IndexedDB in the user-data directory. In MaskWright each profile gets its own folder under the local store. Separate profiles means separate cookie stores. That is isolation, not a new GPU.

If you import cookies into a profile, you imported a session. The fingerprint you apply on top has to look like a browser that could have held that session. A new random paint on an old session is another coherence problem. The sibling on a new fingerprint in the same folder covers leftover cookies. Here the rule is simpler: the measurement and the session are two systems. Keep them both honest for the profile you meant to open.

`profiles.json` is encrypted. The Chromium user-data directories inside each profile folder are not. Cookie import files on disk are plaintext JSON. That is the honest local store. Anyone with the disk can see those folders exist.

## What a local profile can change

On Windows, a headed profile can override a lot of what JavaScript sees. User agent and Client Hints go through CDP and an inject script. Timezone, locale, and languages can follow the proxy exit after a geo lookup. Screen metrics, hardware concurrency, device memory, WebGL parameters, WebGPU adapter info, canvas output, font probes, client rects, audio noise, battery, and media device IDs are all in the fingerprint schema we apply at launch.

Some things stay outside that schema. JA3 and JA4 are TLS fingerprints. They are not JavaScript spoofs. A custom Chromium tree can touch BoringSSL at compile time. A script in the page cannot. Font raster through DirectWrite is only partly in our hands, and only when the custom core is present with a font list. The process name in Task Manager is a Windows tell, not a DOM tell.

The public download channel is Windows 10 and 11 x64. Profiles are desktop families. Client Hints mark `mobile` false. A phone user agent on this host is a contradiction, not a feature.

When the custom Chromium 131 core is installed, launch can use that binary. When it is missing, the app falls back to system Chrome or Edge and still applies the CDP and inject overrides. That fallback is real. Do not market a missing core as a patched engine.

You bring your own HTTP or SOCKS5. MaskWright does not broker traffic. There is no account, no cloud profile sync, and no team seats.

## What a score does not prove

Lab pages are maps. BrowserLeaks lists surfaces. CreepJS flags inconsistencies. Pixelscan and IPhey attach numbers. None of those pages sit in the path of the site you actually work on. A green row is not authorization. A red row is not a ban.

[Testing a fingerprint before work](/blog/testing-a-fingerprint-before-work) is an operator checklist: exit, timezone, cookies, core, and whether the profile still looks like itself. It is not a recipe for gaming a public checker.

[Fingerprint spoofing versus tracking prevention](/blog/fingerprint-spoofing-versus-tracking-prevention) is the other fork. Reducing signal (fewer fonts, blocked canvas, stripped APIs) is a privacy-browser move. Presenting a coherent desktop identity is an isolation move. They are not the same product. MaskWright is the second job, on the operator PC.

## Device signals sit outside the tab

A browser fingerprint is what the page can read from the engine. [Device fingerprinting](/blog/what-is-device-fingerprinting) reaches past that: NIC, install, disk, and network facts the tab does not own. A local profile does not hide a MAC address. It does not rewrite the subnet. If a vendor is measuring the machine, you are in a different layer than canvas.

Keep the layers named. Otherwise every Windows tell gets blamed on the browser, and every browser tell gets blamed on the PC.

## WebRTC is an IP path, not a hash

Most surfaces above are hashes and strings. WebRTC is a network conversation. STUN can produce local and public candidates that never went through the proxy you configured. That is a leak of address, not a leak of ClearType.

Treat it as its own mechanism. Disabled, proxy, public, and real are policies. They are not a single checkbox labeled safe.

## Canvas is the surface people screenshot

[Canvas fingerprinting on a real Windows box](/blog/canvas-fingerprinting-on-windows) is the first sibling to read if you want the mechanism in your hands. A script draws a pangram, maybe a gradient, then hashes `toDataURL` or `toBlob`. ClearType, fonts, and the GPU path land in the pixels. Two towers that look identical on a spec sheet can still disagree.

The hash should stay put. A hash that jumps every reload while the user agent and GPU stay put looks like a liar, not like a new PC. Uniqueness is overrated. Stability and coherence are the useful properties.

![Canvas output on a real Windows box](/blog/blog-canvas-noise.png "Canvas is one surface. ClearType, fonts, and GPU make the hash, and the hash should not reroll on every launch.")

## How I want you to use this page

If you came from the query "what is browser fingerprinting," you now have the measurement: a stable, coherent bundle of engine answers, plus a few network paths, taken without needing the cookie to still be there.

If you run more than one authorized account on one Windows PC, the work is isolation. Separate folders. Separate cookie stores. A seed that stays put for the person that profile is supposed to be. An exit whose country, timezone, and language agree. A GPU story that matches the user agent. Canvas and audio that do not reroll because you wanted a prettier lab screenshot.

[What an antidetect browser is](/blog/what-is-an-antidetect-browser) is the product-shaped version of that isolation. This page stays on the measurement.

## FAQ

**Is a fingerprint the same as a cookie?**
No. A cookie is storage the site wrote. A fingerprint is a measurement the site takes of the engine. You can delete one and still have the other.

**Can a VPN hide my fingerprint?**
No. A VPN changes the exit IP. It does not change canvas, fonts, WebGL, screen, or core count. The route moved. The box did not.

**Does a high score on a checker mean I am safe?**
No. Those pages are maps. They are not the site you work on. We have no published pass rates, and a green row is not authorization.

**What should stay the same across launches?**
The folder, the seed, and the coherent extras you chose: screen, cores, GPU strings, user agent, Client Hints. If those drift and you did not mean a new person, something is wrong.

**Is this the same as device fingerprinting?**
No. Device fingerprinting reaches past the tab: NIC, install, disk, subnet. A local profile can change many in-tab answers. It cannot rewrite the machine.
