---
slug: why-we-built-a-local-antidetect-browser
title: Why a local antidetect browser
metaTitle: Why we built a local antidetect browser
metaDescription: Sessions stay on your Windows disk. No MaskWright account, no cloud sync. Here is why local isolation is the product, and what that costs you.
excerpt: Sessions stay on your Windows disk. No MaskWright account, no cloud sync. Here is why local isolation is the product, and what that costs you.
author: Riley Park
published: 2026-08-12
category: antidetect-browsers
tags: antidetect, profiles, local
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on why a local antidetect browser beside named local browser profiles in a sidebar, photographed as a working operator setup.
related: what-is-an-antidetect-browser, antidetect-browser-without-an-account, camoufox-and-firefox-antidetect-notes, antidetect-profile-caps-vs-local-limits, firefox-vs-chromium-antidetect-cores, vendor-lock-in-in-antidetect-tools, chromium-core-in-an-antidetect-browser, when-you-do-not-need-an-antidetect-browser
---

I wanted the session files on a disk I can unplug. That is the useful fact, and it is also why MaskWright is a Windows app instead of a tab you stream. Cloud antidetect products sell sync, seats, and a browser that lives on their host. Convenient. Also a second copy of every cookie.

[What an antidetect browser is](/blog/what-is-an-antidetect-browser) does not require a remote desktop. It requires isolated user-data directories, a fingerprint that stays coherent for that profile, and an exit you chose. Those pieces can sit under `%APPDATA%` on Windows 10 or 11. That is where we put them.

## What “local” means in 0.1

The store root is `{Electron userData}/maskwright-data`. The index is `profiles.json`. Each profile is `profiles/<uuid>/`. Create, list, start, and stop go over local IPC. There is no MaskWright account. There is no sign-up. There is no profile sync API. [An antidetect browser without an account](/blog/antidetect-browser-without-an-account) is the sibling of this page.

Encryption honesty, because “local” gets sold as “sealed.” `profiles.json` is encrypted at rest with AES-256-GCM. Key material is `MASKWRIGHT_STORE_KEY` if you set it, otherwise a SHA-256 of a local string plus hostname and username. Proxy credentials live in that index. The Chromium or Firefox user-data tree is not encrypted by our code. `maskwright-cookies.json` and `maskwright-localstorage.json` are plaintext JSON. File mode `0o600` is best effort. Windows may ignore it.

If that split bothers you, BitLocker on the volume is the actual disk seal. We did not invent a second one for every cookie file.

## Why cloud products keep winning demos

A cloud profile starts from any cafe. A teammate can “take the seat.” Support can reset a password and the sessions come back. Those are real product wins. They are also the reason a vendor breach, a billing freeze, or a bored contractor can copy the same sessions.

[Vendor lock-in in antidetect tools](/blog/vendor-lock-in-in-antidetect-tools) is usually sold as export pain. The deeper lock is custody. If the only live copy of Seller Central lives on their disk, you are renting the login.

Local has the opposite demo. You back it up yourself. You restore it yourself. You lose it yourself if the SSD dies and you never copied `maskwright-data`. I would rather that chore than a replica I cannot see.

## Caps, cores, and what we actually ship

Cloud plans meter profiles. A local store does not, in 0.1. RAM, disk, and how many Chromium processes Windows will tolerate are the caps. [Profile caps versus local limits](/blog/antidetect-profile-caps-vs-local-limits) is the practical note.

The public download is Windows 10/11 x64. The target Chromium is 131.0.6778.85 when the custom core is installed. If it is not, the app can fall back to system Chrome or Edge and still apply CDP and inject spoof. Firefox via Camoufox is a second core, under-marketed on the homepage, real in the code. [Chromium core in an antidetect browser](/blog/chromium-core-in-an-antidetect-browser) and [Firefox versus Chromium cores](/blog/firefox-vs-chromium-antidetect-cores) cover the split. [Camoufox notes](/blog/camoufox-and-firefox-antidetect-notes) are the Firefox-specific page.

We do not ship cloud phones. We do not ship team seats. We do not broker proxies. Bring your own HTTP or SOCKS5. Ads fund the app in dashboard chrome, not as a claim that nothing ever opens a URL in a launched profile. The honesty page for leftover traffic is elsewhere. This page is only why the store is a folder.

## When you should skip us

If you need the same live session on three laptops without copying a folder, a cloud product matches the job. If you need a manager to revoke a contractor without touching Facebook roles, a roster server matches the job. [When you do not need an antidetect browser](/blog/when-you-do-not-need-an-antidetect-browser) is still true: one personal Chrome profile is often enough.

I built local because I did not want a password reset to be a cookie dump. [Compare local versus cloud](/compare) if you are still picking an architecture. [Download MaskWright](/download) if you already decided the folder should sit on your disk.

| Need | Local MaskWright | Typical cloud antidetect |
| --- | --- | --- |
| Where cookies live | Your user-data dir | Vendor disk |
| Account to launch | None | Vendor login |
| Sync across PCs | You copy the store | Built in |
| Team roster | Not offered | Seats |
| Offline CRUD | Works | Depends on their API |

## FAQ

### Is local automatically more private?

It is more local. Profiles do not upload. A short list of other traffic still leaves: updates, ads feed, dashboard ad iframes, geo lookups when you ask for exit alignment, and the sites you visit. Local is custody, not a magic air gap.

### Can I run this on a Mac?

Build scripts exist. The public channel is Windows x64. I will not pretend a Mac pack is the download page.

### Why not encrypt the whole profile folder?

Chromium’s user-data tree is large, live, and rewritten constantly. We encrypt the index that holds proxy passwords and profile records. The rest is files on disk. Full-disk encryption is the OS job.

The [Antidetect browsers](/blog/antidetect-browsers) hub is the rest of the isolation notes. This page is only the reason the product is a folder you can point at.
