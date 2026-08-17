---
slug: what-we-refuse-to-log-about-proxies
title: What we refuse to log about proxies
metaTitle: What we refuse to log about proxies in a local profile
metaDescription: Credentials live in encrypted profiles.json. This page lists what we refuse to log about your exits, because a local tool should not become a proxy diary.
excerpt: Credentials live in encrypted profiles.json. This page lists what we refuse to log about your exits, because a local tool should not become a proxy diary.
author: Sam Okonkwo
published: 2026-08-16
category: proxies
tags: proxies, exits, proxy, logging
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on what we refuse to log about proxies beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, what-are-residential-proxies, proxy-plus-cookies, residential-versus-datacenter-proxies, ipv6-leaks-we-still-see, isp-proxies-on-a-local-profile, dns-leaks-on-windows, residential-proxy-ethics
---

We will not keep a diary of your exits on a server we operate. A local tool that phones home host, port, user, pass, and every launch timestamp is a cloud product with extra steps. MaskWright stores proxy fields on the profile record inside encrypted `profiles.json`. That file sits in your Windows user folder. It is not a telemetry event.

I can refuse a log because there is no profile API to send it to. The less honest version would be “we care about privacy” while a backend writes your SOCKS5 password next to a user id. We do not have that backend.

## What sits on disk

The index is AES-256-GCM. Key material is `MASKWRIGHT_STORE_KEY` if you set it, otherwise a SHA-256 of a local string plus hostname and username. Proxy type, host, port, and credentials live on the profile record. That is a secret on your disk. Protect the disk.

The Chromium user-data directory is not encrypted by our code. Cookie import files are plaintext JSON. Refusing a cloud log does not make those files unreadable to whoever can open your user folder.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is how the field is used at launch. This page is only what we do not ship as a diary.

## What we will not record remotely

- Proxy host, port, username, password
- A MaskWright user id next to those fields (there is no user id)
- A launch history of which exit ran when
- Bandwidth totals per profile
- A copy of the ip-api.com JSON beyond the in-memory geo alignment for that start

Geo lookups still leave the machine when you ask for exit alignment. ip-api.com sees an IP. It does not see a MaskWright account, because we do not send one. That is a third-party lookup, not our proxy log.

## What you might still leak without us

[DNS leaks on Windows](/blog/dns-leaks-on-windows) and [IPv6 leaks](/blog/ipv6-leaks-we-still-see) are how a profile talks past the proxy. Those packets are not our log. They are your network stack. Check them if the exit is supposed to be the only path.

[Proxy plus cookies](/blog/proxy-plus-cookies) is the other mix: a sticky exit with a shared cookie store is still one identity. Logging is not the only way two jobs get glued together.

Residential versus datacenter is a provider claim. [What residential proxies are](/blog/what-are-residential-proxies), [residential versus datacenter](/blog/residential-versus-datacenter-proxies), and [ISP proxies on a local profile](/blog/isp-proxies-on-a-local-profile) are evaluation notes. [Residential proxy ethics](/blog/residential-proxy-ethics) is consent. None of those pages require us to store your pool name.

| Data | On your disk | On a MaskWright server |
| --- | --- | --- |
| Proxy password | In encrypted `profiles.json` | Not stored |
| Launch timestamps | Not a product feature | Not stored |
| Exit IP from a check | Seen by ip-api.com if you check | Not stored |
| Cookie files | Plaintext in the profile dir | Not stored |

If you need a paper trail of which exit ran, keep it in your own ops notes or in the proxy vendor’s dashboard. That is their product. Putting the same diary in an antidetect backend would make us a second copy of your network map. I would rather the local app be boring: a field, a check, a launch.

## FAQ

### Can my proxy provider still log me?

Yes. You brought the line. Their acceptable use policy and their logs are their product. BYO means we are not a second logger. It does not erase the first.

### Do crash reports include proxy URLs?

There is no analytics SDK in the desktop source I can point at. If a crash reporter appears later, that is a new row on the leave-the-machine list. It is not here in 0.1.

### Why encrypt the index if you do not log anyway?

Because the index holds secrets on a shared family PC, a stolen laptop, and a backup drive. Encryption at rest is for the disk you hold, not for a server we do not run.

The [Proxies](/blog/proxies) hub is how to attach and test an exit. This page is the refusal: we will not become a proxy diary. [Download MaskWright](/download) if you wanted the field without the account.
