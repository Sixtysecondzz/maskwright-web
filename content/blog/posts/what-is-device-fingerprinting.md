---
slug: what-is-device-fingerprinting
title: What device fingerprinting includes beyond the browser
metaTitle: What device fingerprinting includes
metaDescription: Device fingerprinting reaches past the browser tab. Learn which hardware, network, and install signals sit outside a Chromium profile on Windows.
excerpt: Device fingerprinting reaches past the browser tab. Learn which hardware, network, and install signals sit outside a Chromium profile on Windows.
author: Avery Chen
published: 2026-08-10
category: browser-fingerprinting
tags: fingerprinting, windows, device
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on what device fingerprinting includes beyond the browser beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: canvas-fingerprinting-on-windows, what-is-browser-fingerprinting, webgl-renderer-strings, fingerprint-spoofing-versus-tracking-prevention, webgpu-and-new-fingerprint-surfaces, mac-address-is-not-a-browser-fingerprint, webrtc-ip-leaks, cross-browser-fingerprinting
---

A Chromium profile can change what a page reads in JavaScript. It cannot rewrite the NIC, the install path, or the subnet the PC actually sits on. Device fingerprinting is the name for those outer signals. People mash it into [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting) because both words share a root. They are not the same layer.

I keep this note on the outer layer. The [Browser fingerprinting](/blog/browser-fingerprinting) hub collects the in-tab surfaces. Here I want the boundary to stay exact.

## The tab is not the machine

A page in Chromium sees APIs the engine chose to expose. Canvas, WebGL, fonts, screen metrics, and `navigator` fields live there. A local profile can override many of those answers. That is still a browser fingerprint.

A device fingerprint asks questions the tab does not own. What MAC does the adapter use. Which disk serial did the installer see. What hostname and Windows user minted a local key. Which Wi-Fi BSSID sat under the laptop at signup. Those facts can show up in a native app, an MDM agent, a payment SDK, or a desktop client. They do not show up because you called `toDataURL`.

[A MAC address is not a browser fingerprint](/blog/mac-address-is-not-a-browser-fingerprint). MaskWright does not hide MACs. If a vendor is hashing the adapter, you are outside the inject script.

| Layer | What gets measured | Can a local profile change it |
| --- | --- | --- |
| Browser fingerprint | Engine APIs: canvas, WebGL, fonts, screen, UA | Many of them, at launch |
| Device fingerprint | NIC, disk, install, hostname, firmware | No |
| Network path | Exit IP, ASN, WebRTC candidates | Proxy and WebRTC policy only |
| Session | Cookies, localStorage, IndexedDB | Isolated per profile folder |

## Hardware the page can only hint at

Some hardware leaks into the tab as a hint, not as a serial.

WebGL vendor and renderer strings describe a GPU stack. They are not a board serial. [WebGL vendor and renderer strings](/blog/webgl-renderer-strings) still have to match the OS family you claim. [WebGPU adapter info](/blog/webgpu-and-new-fingerprint-surfaces) is the newer version of the same idea. [Canvas on a real Windows box](/blog/canvas-fingerprinting-on-windows) is paint math, not a TPM quote.

Those hints are useful to a site because they are stable and because they should agree with cores, memory, and screen. They are still browser surfaces. Calling them device IDs flatters the API.

True device identifiers sit lower. Firmware, volume IDs, and driver inventories belong to the OS and to software that asked for them with OS permissions. A headed profile does not get those permissions by existing.

## Network facts that are not cookies

The exit IP is a network fact. So is the ASN. So is whether STUN returned a local candidate the proxy never carried. [A WebRTC leak](/blog/webrtc-ip-leaks) is an address path, not a GPU hash.

A site can also see that two profiles share a household subnet, or that a mobile ASN is speaking with a desktop user agent. Those are device-adjacent tells. They are not solved by rerolling canvas noise.

Cross-browser work is another outer path. If a native helper, a second engine, and a phone app all report the same install or the same LAN, the graph is bigger than one Chromium folder. [Fingerprints that follow you across browsers](/blog/cross-browser-fingerprinting) belong in that conversation. A single profile override does not cut the graph.

## Install and disk signals

On Windows the install leaves residue. Program Files paths, scheduled tasks, driver stores, and per-user AppData trees are machine history. MaskWright keeps its index under the Electron userData tree, in `maskwright-data`. The profile index is encrypted. The Chromium user-data directories inside each profile folder are not. Cookie import files on disk are plaintext JSON.

That is an honest local store, not a claim that the PC is anonymous. Anyone with the disk can see that Chromium user-data dirs exist. Full-disk encryption is an OS setting we do not control. We do not upload those folders. We also do not pretend they are invisible to the machine that holds them.

There is no account and no cloud profile sync. That keeps the folders on your disk. It does not hide the disk from software that already has OS access.

## What a local profile is for

A local profile isolates cookies and the in-tab measurement for accounts you have a right to open on one PC. It is [spoofing a coherent identity](/blog/fingerprint-spoofing-versus-tracking-prevention), not shrinking every OS signal.

Use it when two brand logins should not share cookies, localStorage, or a canvas seed. Do not use it as a story that the tower itself became a new computer. If a payment app or a desktop client fingerprints the device, that client is not reading your inject script.

## Keep the vocabulary still

Browser fingerprint: engine APIs and the hashes they produce.

Device fingerprint: hardware, install, and network facts the tab does not own.

IP and WebRTC: routes and candidates.

Cookies: the login.

If a sentence uses two of those words as synonyms, rewrite the sentence. The work on a Windows desk gets easier when the layers stay named.

## FAQ

**Can MaskWright hide my MAC address?**
No. A MAC is a device signal. The inject script never sees it.

**Is a WebGL renderer a device ID?**
No. It is a GPU family string the page can read. Many PCs share the same family. It still has to agree with the OS you claimed.

**Does encrypting profiles.json hide the PC?**
No. Only the index is encrypted. Chromium user-data folders stay on disk as ordinary files.

**If two profiles share one household IP, is that device fingerprinting?**
It is a network fact. Isolation still splits cookies and in-tab measurements. It does not invent a second subnet.
