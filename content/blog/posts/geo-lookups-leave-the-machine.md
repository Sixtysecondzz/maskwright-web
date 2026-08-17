---
slug: geo-lookups-leave-the-machine
title: Geo lookups leave the machine
metaTitle: Geo lookups leave the machine on purpose
metaDescription: Exit geo via ip-api.com and geojs.io. That traffic leaves the machine. This privacy note lists a lookup you opted into by asking the room to match an exit.
excerpt: Exit geo via ip-api.com and geojs.io. That traffic leaves the machine. This privacy note lists a lookup you opted into by asking the room to match an exit.
author: Jordan Hale
published: 2026-06-23
category: privacy
tags: privacy, local, api, geo
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on geo lookups leave the machine beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: indexeddb-is-a-third-jar, unsigned-windows-builds-and-smartscreen, pre-made-cookies-and-cookie-robots, sharing-profiles-is-sharing-cookies, what-leaves-this-machine, what-is-cookie-based-session-management, browser-security-versus-antidetect, free-app-owned-ad-slots
---

Exit geo via ip-api.com and geojs.io. That traffic leaves the machine. You opted into it when you asked the profile to match an exit: timezone, language, and coordinates that follow the proxy, not the office clock. This privacy note names the lookup so it does not hide under “ads and updates only.”

The page sits in [Privacy](/blog/privacy). The pillar is [what leaves this machine](/blog/what-leaves-this-machine). This is one row.

## When the lookup runs

On profile start, if you asked for exit alignment, the app can query ip-api.com through the proxy (or direct). Timezone, locale, languages, and geolocation can update before launch. After launch, a page-level probe may hit ip-api.com or get.geojs.io. The proxy check UI also uses ip-api.com through the proxy.

The geo host sees an IP and a lookup. It does not see a MaskWright user id. We do not send one. We do not send `profiles.json`. We do not send cookies. [Cookie-based sessions](/blog/what-is-cookie-based-session-management) stay in the user-data dir. [Sharing a profile](/blog/sharing-profiles-is-sharing-cookies) is a different leak.

## What it is not

Not a fingerprint test. Not [IndexedDB](/blog/indexeddb-is-a-third-jar). Not [pre-made cookies](/blog/pre-made-cookies-and-cookie-robots). Not [SmartScreen](/blog/unsigned-windows-builds-and-smartscreen). Not [dashboard ads](/blog/free-app-owned-ad-slots). Not a security-browser score. [Browser security versus antidetect](/blog/browser-security-versus-antidetect).

If you want zero geo hosts, do not ask the app to name the exit country. A local profile can run on the house clock. A profile that pretends to sit in Tokyo cannot, not honestly.

HTTPS proxy type is still an HTTP forwarder in 0.1. The lookup uses the proxy path we actually implemented.

| Trigger | Hosts |
| --- | --- |
| Profile start with alignment | ip-api.com (via proxy or direct) |
| In-page re-align | ip-api.com, geojs.io |
| Proxy check UI | ip-api.com via proxy |
| No proxy, no check | None of these, for this row |

I run the proxy check on purpose before a new sticky line. I want to see the country string. I accept that ip-api.com saw that IP. I do not also need a MaskWright diary of it. If I am on house IP and I never click check, this row stays quiet.

Alignment exists because a London timezone on a Miami exit looks sloppy. It is not a tracking SDK. It is still a third party. Privacy-minded people who firewall everything will get a profile that follows the office clock. That can be correct.

Do not confuse this with the Geolocation API a site calls in-page. We can override coordinates from the fingerprint. The lookup is how we pick those coordinates to match the exit. Two mechanisms, one goal.

Pushback I hear: “then do not align.” Fine. Leave the office clock. A Tokyo pretence without a lookup is a lie you tell yourself. I run the check on a new sticky line, accept that ip-api.com saw the IP, and I do not also need a MaskWright diary. Firewall the hosts if you want this row silent.

## FAQ

### Can I switch the geo provider?

Not as a supported setting I will document. The code points at those hosts. A later build might change. This page would then be wrong until rewritten.

### Does the lookup include my proxy password?

The password is used to authenticate to your proxy. It is not a field we POST to ip-api as a MaskWright secret. The proxy still sees the connection. ip-api sees the exit IP.

### Is this telemetry?

It is a third-party geo API you invoked by asking for alignment. It is not an analytics SDK. [Download MaskWright](/download) still does it when you ask.

### Does the lookup send my profile name?

No. It is a geo API against an IP. The profile name stays on disk. The packet is still a packet. Firewall it if you want this row silent, and accept the office clock.

Timezone matching is useful. It is also a packet. Keep both sentences. The pillar has the rest of the leftover list. This row is only the map pin.
