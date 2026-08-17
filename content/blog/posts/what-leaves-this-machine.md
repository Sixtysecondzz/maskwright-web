---
slug: what-leaves-this-machine
title: What leaves this machine
metaTitle: What leaves this machine in MaskWright
metaDescription: Ads feed, updater, ip-api, ad iframes. No analytics SDK. No profile upload. This privacy pillar lists the short set of things that leave a MaskWright box.
excerpt: Ads feed, updater, ip-api, ad iframes. No analytics SDK. No profile upload. This privacy pillar lists the short set of things that leave a MaskWright box.
author: Jordan Hale
published: 2026-05-19
category: privacy
tags: privacy, local, antidetect, telemetry
readingTime: 12
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what leaves this machine beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: profile-encryption-at-rest, geo-lookups-leave-the-machine, ads-in-the-dashboard-not-in-your-tabs, why-we-do-not-sync-profiles, update-channel-habits, why-we-built-a-local-antidetect-browser, browser-security-versus-antidetect, pre-made-cookies-and-cookie-robots
---

“Nothing leaves the machine” is a slogan. It is also false for this app, and I will not print it. Profiles do not upload. Cookies do not upload. Proxy passwords do not upload. A short list of other traffic still leaves a Windows box that runs MaskWright. This page is that list, written as a ledger instead of a feeling.

I want you to be able to point at each row and decide whether to allow it. If a later build adds a row, this page is wrong until we rewrite it. The audit behind this draft is August 2026. Treat it as a snapshot of the desktop code, not as a forever promise.

This note is the pillar for the [Privacy](/blog/privacy) hub. Sibling pages go deeper on one row each. This page holds the map.

## What I mean by leave

Leave means a packet that is not your own browsing. When you open Seller Central in a profile, that HTTPS session is supposed to leave. That is the browser doing its job. I will name it, then I will set it aside. The interesting traffic is what the app starts without you clicking a site.

Two more distinctions matter.

**App traffic versus profile traffic.** The Electron shell can fetch an ads JSON file and load dashboard iframes. A launched Chromium or Firefox profile can also talk to geo hosts when we align timezone and language to an exit. Those are different processes. Blocking one does not block the other.

**Our host versus a third party.** `updates.maskwright.com` and `maskwright.com` are ours. ip-api.com, geojs.io, and the ad networks inside the dashboard wrappers are not. I will not flatten those into “MaskWright telemetry.” They are still things that leave.

## What does not leave

There is no MaskWright account. There is no sign-up. There is no profile sync API. The store root is `{Electron userData}/maskwright-data`. The index is `profiles.json`. Each profile is `profiles/<uuid>/`. Create, list, start, and stop go over local IPC. Nothing in that path posts the folder to us.

Encryption, because people hear “local” and assume “sealed.” The index is encrypted at rest with AES-256-GCM. Key material is `MASKWRIGHT_STORE_KEY` if you set it, otherwise a SHA-256 of a local string plus hostname and username. Proxy credentials live inside that index. The Chromium or Firefox user-data tree is not encrypted by our code. `maskwright-cookies.json` and `maskwright-localstorage.json` are plaintext JSON. File mode `0o600` is best effort. Windows may ignore it. [What encryption at rest actually covers](/blog/profile-encryption-at-rest) is the dedicated honesty page. The point for this ledger: we do not upload the sealed file or the unsealed tree.

There is no analytics SDK in the desktop source. No Sentry. No PostHog. No “anonymous usage” client I can point at. If a crash reporter appears later, that is a new row. It is not here.

There is no bandwidth-sharing SDK. We do not resell your last mile. That refusal belongs on this map because “free” in this category sometimes means your line is the product. Ours does not.

[Why we do not sync profiles](/blog/why-we-do-not-sync-profiles) is the architecture twin. If the profiles lived in our cloud, this whole page would be a privacy policy about a remote copy. They do not. [Why we built a local antidetect browser](/blog/why-we-built-a-local-antidetect-browser) is the product reason.

## Row 1: the update check

Packaged builds use `electron-updater` against a generic provider at `https://updates.maskwright.com`. Dev builds skip that path. I have not logged the exact updater payload in our repo. Treat it as ordinary electron-updater behavior: the app asks whether a newer package exists. That request leaves. It is not a profile upload.

[Update channel habits](/blog/update-channel-habits) is the hygiene sibling. The short version here: the update host sees that a copy of the app checked in. It does not receive `profiles.json`. If you run an air-gapped copy, you will not get those packages from us unless you carry them yourself.

## Row 2: the ads JSON feed

The operator UI can GET `https://maskwright.com/ads/v1/creatives.json`. `MASKWRIGHT_ADS_URL` can override that. In dev the feed may point at localhost. The rotator fetches on a 15 to 20 second timer so slots can change.

That file is a small public JSON document. It can include creative fields and, in the ads package, hooks named `launchUrl`, `launchTabUrl`, and `launchTabIntervalSec`. Those hooks can open a URL when a profile starts, and can reopen a URL on a timer through internal CDP. Hosted examples have pointed at lab pages. Defaults in code have pointed at an ad network host. That is not a banner injected into every site you visit. It is also not “ads never touch a launched profile.”

[Ads in the dashboard, not in your tabs](/blog/ads-in-the-dashboard-not-in-your-tabs) is the placement note. Read both. The feed is the control plane. The iframes are the painted slots. The launch hooks are the caveat I will not drop to make the title prettier.

I cannot point at a settings toggle that disables the feed. The audit did not find one. If you block the host, the fetch fails. That is an operator choice, not a shipped opt-out.

## Row 3: dashboard ad iframes

The operator chrome loads iframes from `https://www.maskwright.com/electron-ad-sidebar` (300 by 250) and `electron-ad-test` (728 by 90 footer). Those wrapper pages embed third-party ad scripts. Names that appear in the web routes include effectivecpmnetwork.com and highperformanceformat.com. I will not pretend those vendors see nothing. They see a normal web ad request from the machine that loaded the iframe.

The dashboard components currently use those hardcoded wrapper URLs. They do not bind the iframe `src` to the JSON feed’s click URL. The feed and the iframes are two channels that happen to sit in the same app. Funding is owned slots in chrome we draw. Third parties still run inside those slots.

What I do not know, and will mark as unknown: whether those ad parties receive device identifiers beyond ordinary web ad behavior. I will not invent a “no cookies, no IDs” sentence to fill that gap.

## Row 4: geo lookups

On profile start, if you asked the profile to follow an exit, the app can query ip-api.com through the proxy or direct. Timezone, locale, languages, and geolocation can be updated before launch. After launch, a page-level probe may hit ip-api.com or get.geojs.io to re-align. The proxy check UI also uses ip-api.com through the proxy.

That traffic leaves. The geo host sees an IP and a lookup. It does not see a MaskWright user id, because we do not send one. [Geo lookups leave the machine](/blog/geo-lookups-leave-the-machine) is the dedicated row. I list it here so nobody reads “ads and updates only” and misses the alignment calls.

If you never attach a proxy and you never ask for exit alignment, you still may see a check if you use the proxy panel. If you want zero geo hosts, you have to stop asking the app to name the exit country. A local profile can run without that lookup. A profile that pretends to sit in another city cannot.

## Row 5: your browsing, and links we open outside

Sites you visit in a profile are ordinary browser traffic. Cookies those sites set stay in that profile’s user-data directory. We do not intercept that stream to a MaskWright warehouse.

External links from the app open in the system browser via `shell.openExternal`. Those sites have their own policies. That is not a profile upload. It is still a leave.

[Pre-made cookies and cookie robots](/blog/pre-made-cookies-and-cookie-robots) are a different leave: you importing someone else’s session. That does not go to us. It goes into your plaintext import file and then into the profile. I mention it because people who care about this pillar sometimes still paste a bought cookie store and call the desk private. The desk can be local and the session can still be stolen property.

## What “no server” overstates

Marketing copy that says there is no MaskWright server is too clean. There is no profile cloud. There is still `updates.maskwright.com`. There is still `maskwright.com` for ads wrappers and the creatives file. There are still third-party geo and ad hosts.

A cloud product has a longer ledger. The vendor holds cookies, often holds backups, and often holds a user account that can reset into those cookies. If that vendor is breached, they hold the sessions. Our breach story, for profiles, is your disk. Our remaining story is this short list plus whatever the sites you visit collect.

[Browser security versus antidetect](/blog/browser-security-versus-antidetect) is a different job. A hardened daily driver tries to leak less about one person. This app isolates profiles. Hardening lists will not replace this ledger. Our leftover traffic is still leftover traffic.

## Offline is a partial fact

Create, list, and edit profiles work without a WAN. That is real. Updates do not. Ads fetches do not. Geo checks do not, unless you block them and accept a profile that will not self-align. I will not sell “fully offline” as a feature we shipped. We shipped a local store that can sit quiet, and a shell that still has chores when the line is up.

If you take a laptop to a cabin and you only need to open a profile you already configured, you can work. If you expect the ads chrome to stay pretty and the updater to stay current, you cannot.

## How I want you to read the list

Write the rows down if you need a control sheet:

1. Updater to `updates.maskwright.com` (packaged builds).
2. Ads JSON to `maskwright.com/ads/v1/creatives.json` (or your override).
3. Dashboard iframes to maskwright.com wrappers, which load third-party ad scripts.
4. Optional launch-tab hooks from the ads profile path.
5. ip-api.com and geojs.io when you ask for exit geo.
6. Destinations you open in a profile.
7. Destinations we open in the system browser.

Then write the non-rows: no account, no profile upload, no analytics SDK, no bandwidth share, no team seat that would require a roster server.

| Traffic | Who sees it | Contains profiles? |
| --- | --- | --- |
| electron-updater | updates.maskwright.com | No |
| creatives.json | maskwright.com | No |
| Ad iframes | Our wrappers + ad networks | No |
| ip-api / geojs | Those hosts | No |
| Sites you visit | Those sites | Their cookies, in your folder |
| Profile sync | Does not exist | n/a |

If you need a SIEM of who launched which profile, you will not get it from us. A local store cannot honestly offer one. If you need a backup, you copy `maskwright-data` yourself. That chore is yours because we will not hold a replica.

## FAQ

### Can I disable all of this?

You can firewall hosts. There is no shipped master switch in 0.1. Blocking ads hosts may blank the dashboard slots. Blocking the updater skips packages. Blocking geo hosts skips alignment. Blocking the internet also blocks the sites you came to open.

### Do you log my proxy password when I check an exit?

The password is used locally to talk through the proxy. We do not have a server diary of that field. ip-api.com sees the exit IP. Read the geo sibling.

### Is the custom Chromium phoning Google?

A Chromium build can still have Google-shaped endpoints depending on flags and fallback. The public product uses a patched core when present, with `--no-sandbox` on Windows for that unsigned binary, and can fall back to system Chrome or Edge. I will not claim a fully disconnected Chromium. I will claim we do not upload `maskwright-data`.

### Where do I get the app if I do not want the site’s ad wrappers?

[Download MaskWright](/download) is still our channel. The desktop ads are a separate path after install. [Compare local versus cloud](/compare) if the leftover rows made you want a different architecture. Cloud products have longer ledgers.

I would rather lose the slogan than lie about a packet. The profiles stay on the operator disk. A short, named set of chores still leaves. That is the product, and that is this pillar.
