---
slug: free-app-owned-ad-slots
title: A free app funded by owned ad slots
metaTitle: A free app funded by owned ad slots
metaDescription: Owned ad slots fund the app. Distinct from the free-antidetect commercial page. This note is the monetization honesty: we draw the slots, we do not mine the.
excerpt: Owned ad slots fund the app. Distinct from the free-antidetect commercial page. This note is the monetization honesty: we draw the slots, we do not mine the.
author: Jordan Hale
published: 2026-07-12
category: privacy
tags: privacy, local, free, antidetect
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on a free app funded by owned ad slots beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: what-leaves-this-machine, what-is-cookie-based-session-management, ads-in-the-dashboard-not-in-your-tabs, sharing-profiles-is-sharing-cookies, disk-use-and-user-data, unsigned-windows-builds-and-smartscreen, backing-up-the-store, geo-lookups-leave-the-machine
---

MaskWright 0.1 is free. There is no paywall, no seat meter, and no profile cap in the code. We fund the app with ad slots we draw in the operator dashboard, not by mining your launched tabs and not by reselling your bandwidth.

The useful caveat: "encrypted at rest" on marketing pages is easy to over-read. `profiles.json` is AES-256-GCM. Per-profile Chromium directories, cookie import JSON, and localStorage import JSON are not encrypted by our code. [Disk use and user data](/blog/disk-use-and-user-data). [Backing up the store](/blog/backing-up-the-store). [Sharing profiles is sharing cookies](/blog/sharing-profiles-is-sharing-cookies).

## What "owned ad slots" means

The desktop UI loads iframe wrappers we host (sidebar 300x250, footer 728x90) and a small creatives JSON feed from maskwright.com. [Ads in the dashboard, not in your tabs](/blog/ads-in-the-dashboard-not-in-your-tabs) is the sibling. Default launch-tab hooks in the ads package can still open a URL in a profile browser. Treat that as a setting to watch, not as a claim that profile tabs are always empty of our ads.

We dropped bandwidth-sharing SDKs. We do not broker residential traffic. We do not require a MaskWright account.

## What still leaves the machine

[What leaves this machine](/blog/what-leaves-this-machine). Packaged builds check `updates.maskwright.com`. Geo checks and launch alignment may call ip-api.com (and a geojs probe in the page). Ad iframes load third-party ad scripts. [Geo lookups leave the machine](/blog/geo-lookups-leave-the-machine). Browsing you do in a profile is normal site traffic.

There is no analytics SDK in the desktop source I would call Sentry or PostHog. Unsigned Windows builds can trip SmartScreen. [Unsigned Windows builds and SmartScreen](/blog/unsigned-windows-builds-and-smartscreen).

[What is cookie-based session management](/blog/what-is-cookie-based-session-management) is the session primer. Ads in the shell are not your store cookies, but they are still network.

| Funded by | Not how we fund |
| --- | --- |
| Dashboard slots we draw | Mining launched tabs as the product |
| Optional creatives JSON | Bandwidth sharing |
| $0 download | Seats, profile caps, cloud sync |

## Honesty limits

I do not claim you can disable ads in the UI today without blocking hosts or changing code. I do not invent revenue-share terms. I do not claim macOS/Linux packs are the public channel. Windows 10/11 x64 is.

If you want a paid local tool with no ads, buy someone else's SKU. This one is free with owned slots.

## What I tell operators who ask about the ads

Dashboard iframes load wrappers on maskwright.com that then load third-party ad networks. That traffic leaves the machine. The creatives JSON is a small public feed. Rotation is on the order of tens of seconds in the rotator. I do not pretend that is "nothing leaves."

Profile cookies are not uploaded by a MaskWright server API. They live in `user-data-dir`. Back them up like logins. Do not email them. Ads in the shell are not a backup plan for a mailed folder.

If a profile opens a tab on start, check `launchUrl` / `launchTabUrl` behavior in your build. Defaults in code have pointed at ad or checker URLs in examples. Verify on your machine. I will not invent a guarantee the binary does not enforce.

No Honeygain-style SDK. No profile cap. No subscription code. Windows x64 public channel. Unsigned builds may hit SmartScreen. Geo probes to ip-api.com are a separate leave-the-machine path from ads.

If you block the ad hosts, the app may still run. I do not document a supported off switch in 0.1 UI.

## FAQ

### Is the browsing profile full of ads?

The product intent is ads in dashboard chrome. Launch-tab hooks exist in the ads feed. Check what a profile opens on start. Do not take a slogan as a packet capture.

### Are proxy credentials in the ads request?

Proxy fields live in the encrypted index. Ads are a separate fetch. I still would not treat an ad iframe as a secrets boundary.

### Can I run fully offline?

Profile CRUD can. Updates, ads, and geo checks want network unless you block them.

### Why not subscriptions?

No payment code in 0.1. Slots pay for the lights. If that changes, it will be a product change, not a silent meter.

Free means no invoice. Owned slots mean we draw the chrome. Your store cookies stay in folders you hold, with the encryption split above.

More notes sit under [Privacy](/blog/privacy). [Download MaskWright](/download) for the Windows build, or [compare local versus cloud](/compare) if custody is the decision.
