---
slug: navigator-webdriver-and-automation-flags
title: navigator.webdriver and automation flags
metaTitle: navigator.webdriver and automation flags
metaDescription: navigator.webdriver and related flags tell a site the session was driven. See what the product sets, and why a stealth plugin is not the same as a profile.
excerpt: navigator.webdriver and related flags tell a site the session was driven. See what the product sets, and why a stealth plugin is not the same as a profile.
author: Avery Chen
published: 2026-06-29
category: browser-fingerprinting
tags: fingerprinting, windows, navigator, webdriver
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on navigator.webdriver and automation flags beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, gpu-renderer-must-match-the-ua, ja3-ja4-tls-fingerprints, mobile-ua-on-a-desktop-profile, what-is-an-ip-leak, macos-fingerprint-on-a-windows-host, what-is-a-dns-leak, testing-a-fingerprint-before-work
---

`navigator.webdriver` is a boolean a page can read. When it is true, the session is telling the site it was driven. Related launch flags and runtime leftovers say the same thing in other words. This page names the tell and states what MaskWright sets. It is not a hide-the-driver walkthrough.

If the property is not yours, a false flag will not create a right to drive it. If the property is yours, you do not need a stealth plugin. You allow the test user or you call the official API.

## What the flag is for

The WebDriver protocol is a control channel. Chromium started for that channel is not the same process as Chromium started by a person. The platform added `navigator.webdriver` so a page could ask the obvious question. Sites also look at launch switches, `window.chrome` shape, headless traits, and command patterns no person produces.

That question is not [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). Fingerprinting is a bundle of engine answers that should agree. WebDriver is a process confession. A coherent GPU and a true webdriver bit can sit in the same tab. A false bit and a collage can sit in the same tab too.

The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps those jobs apart. [Testing a fingerprint before work](/blog/testing-a-fingerprint-before-work) is a checklist for leaks and coherence. It is not a recipe for clearing this flag on a public lab.

| What we set | What we do not ship |
| --- | --- |
| `navigator.webdriver` false on Chromium profiles | Playwright, Puppeteer, or Selenium integration |
| `--disable-blink-features=AutomationControlled` | A user automation API |
| Internal CDP for fingerprint, cookies, localStorage | Documented attach-to-debug-port instructions |
| Bulk start/stop in the UI (a person clicking) | RPA or window sync in 0.1 |

## What we set, and what we do not ship

On Chromium profiles the inject sets `navigator.webdriver` to false. Launch also passes `--disable-blink-features=AutomationControlled`. Those two facts are in the desktop code. I will say them once.

We do not ship Playwright, Puppeteer, or Selenium integration. We do not export a user automation API. Internal CDP is used for fingerprint apply, cookies, localStorage, and an optional tab open. The remote debugging port is chosen per launch. It is not documented for operators to attach to. 0.1 has no RPA and no window sync.

A stealth plugin that only patches the boolean is not a profile. A profile is a folder, a seed, cookies, and an optional proxy. The plugin is an overlay on a driver. We refuse that product.

![A headed Chromium window on a Windows automation desk](/blog/blog-automation-bench.png "A false webdriver bit is a flag. It is not a profile, and it is not a right to drive a property you do not own.")

## What the flag will not fix

It will not make a [GPU renderer match the user agent](/blog/gpu-renderer-must-match-the-ua). WebGL strings still have to sound like the OS family you claimed.

It will not make a [mobile user agent on a desktop profile](/blog/mobile-ua-on-a-desktop-profile) coherent. Client Hints in this product mark `mobile` false. Presets are desktop families.

It will not make a [macOS fingerprint on a Windows host](/blog/macos-fingerprint-on-a-windows-host) true. Fonts, raster, and the hello still sit on Windows.

It will not close [an IP leak](/blog/what-is-an-ip-leak) or [a DNS leak](/blog/what-is-a-dns-leak). Addresses are paths. The boolean is not a path.

It will not rewrite [JA3 or JA4](/blog/ja3-ja4-tls-fingerprints). Those hashes belong to the binary. Page script does not pack the Client Hello.

## Why the old stealth articles are the wrong genre

They exist to rank on "navigator.webdriver true." They end with a snippet that sets the bit false and a promise that the site will now treat you as a person. That is the refused angle on this desk.

A headed window does not retire the protocol. Headless versus headed is a different note. Headed Selenium is still Selenium. Headed Puppeteer is still Puppeteer. MaskWright is a local operator profile. It is not an agent runtime.

If you are testing your own property, leave the flag visible or use a bot account the platform issued. If you are opening an authorized work profile, launch it as a person launches a browser. Do not park a driver inside it and then ask the inject to lie about the parking.

## How I want you to use this page

Know that sites can read the bit. Know that we set it false and disable AutomationControlled on Chromium launches. Know that this is not a pass token and not a Playwright feature.

Bulk start and stop in the UI is still a person clicking profiles. It is not a driver protocol. A launch-tab timer that reopens a URL through internal CDP is also not a user automation API. Do not treat those internals as a green light to attach Selenium.

Then go back to the profile: folder, cookies, seed, exit, GPU family. The boolean is one line. The profile is the product.

## FAQ

**Does MaskWright include Playwright?**
No. No Playwright, Puppeteer, or Selenium product. Internal CDP is for fingerprint apply, not a user API.

**Is a false webdriver bit a pass token?**
No. It is a flag we set. It is not authorization and not a coherent GPU.

**Can I attach Selenium to the debug port?**
The port is ephemeral and not documented for operators. Do not treat internals as a green light.
