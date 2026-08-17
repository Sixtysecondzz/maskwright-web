---
slug: antidetect-browser-for-windows
title: Antidetect browsers for Windows
metaTitle: Antidetect browsers for Windows 10 and 11
metaDescription: The public channel is Windows 10 and 11 x64. This page covers a local Windows antidetect, and it will not invent a Mac pack the product does not ship.
excerpt: The public channel is Windows 10 and 11 x64. This page covers a local Windows antidetect, and it will not invent a Mac pack the product does not ship.
author: Riley Park
published: 2026-05-25
category: antidetect-browsers
tags: antidetect, profiles, windows, browser
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on antidetect browsers for Windows beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, chromium-core-in-an-antidetect-browser, multi-session-browser, firefox-vs-chromium-antidetect-cores, multi-account-browser, camoufox-and-firefox-antidetect-notes, firefox-containers-vs-antidetect, why-we-built-a-local-antidetect-browser
---

The download button on our site says Windows 10 and 11 x64 because that is the public channel. It is not a teaser for a Mac pack sitting in another tab. Build scripts for macOS and Linux exist in the desktop repo. They are not the channel we hand a stranger. I will not invent a dmg to rank for a query we cannot fulfill.

This is the Windows note in [Antidetect browsers](/blog/antidetect-browsers). If you needed the noun first, [what an antidetect browser is](/blog/what-is-an-antidetect-browser) is the definition. Here the subject is the box.

## What a local Windows app actually is

MaskWright is an Electron shell (37.2.6 in the desktop repo we audited) that launches Chromium or Firefox profiles on this PC. Store root: `maskwright-data` under the Electron user-data path. Index: `profiles.json`, encrypted AES-256-GCM. Per-profile browser data: ordinary Chromium or Firefox files, not encrypted by our code.

There is no MaskWright account. No cloud profile sync. No team seats. Public download is an NSIS installer for Windows x64. The installer may be unsigned. SmartScreen will warn. That is expected on a young public channel, not proof of malware and not proof of trust.

Windows launches Chromium with `--no-sandbox` and `--use-angle=d3d11` in the current launch path. That is a Windows-specific fact, not a slogan. [Why a local antidetect browser](/blog/why-we-built-a-local-antidetect-browser) is the architecture sibling.

## What the core looks like on this OS

The target Chromium is 131.0.6778.85 when the patched binary is present. If it is not, the app falls back to system Chrome or Edge. [The Chromium core](/blog/chromium-core-in-an-antidetect-browser) is the longer note. [Firefox versus Chromium cores](/blog/firefox-vs-chromium-antidetect-cores) and [Camoufox notes](/blog/camoufox-and-firefox-antidetect-notes) cover the Firefox path. Camoufox can be installed from the UI into the local cores folder.

A macOS fingerprint preset on a Windows host is a mismatch you can select. I would not. GPU strings, fonts, and Client Hints should rhyme with the box you actually sat down at.

| Fact | What we ship |
| --- | --- |
| Public OS | Windows 10 and 11 x64 |
| macOS / Linux | Build scripts exist, not the public channel |
| Account | None |
| Seats | None |
| Proxy | Bring your own HTTP or SOCKS5 |
| Encryption | Index yes, Chromium dirs no |

## Windows ambient state you still share

One Windows user. One Downloads folder unless you fight it. One set of printers. One GPU. Antidetect profiles split browser data. They do not split the OS. If two authorized logins must not share a machine at all, that is a VM or a second PC, not a profile.

[A multi-account browser](/blog/multi-account-browser) is the authorized-logins definition. [A multi-session browser](/blog/multi-session-browser) is the Chrome tab-stack class. [Firefox containers](/blog/firefox-containers-vs-antidetect) run wherever Firefox runs. Reach is not the Windows channel.

Do not treat Task Manager process names as the product. Alias and compile-time branding are partial. A page that cares will read more than the process list.

## What leaves a Windows box anyway

Packaged builds check `updates.maskwright.com`. The ads feed is fetched on a timer. Dashboard iframes load third-party ad scripts. Geo alignment talks to ip-api.com. Your browsing leaves in the usual way. Profiles are not uploaded.

IPv6 and DNS leaks are Windows problems as much as browser problems. A per-profile proxy does not magically fix a system resolver that still talks on the side. Check the exit before you treat the launch as clean.

## When Windows is the wrong answer

You wanted a Mac app we do not ship. You wanted a cloud phone. You wanted seats so three contractors share one vault. Those are other products. Stay on Chrome if one install covers the desk. [Download MaskWright](/download) only if the public channel matches the box in front of you.

## FAQ

### Will there be a Mac download?

Not as the public channel I can point at. Build scripts exist. I will not rank for a pack we do not hand a stranger.

### Does it run on Windows ARM?

The public channel is x64. I will not invent ARM support we did not ship.

### Why does SmartScreen warn?

Unsigned installer on a young channel. Expected. Verify the download source. Do not treat a warning as proof of either safety or malice.
