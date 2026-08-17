---
slug: proxies-in-an-antidetect-browser
title: Proxies in an antidetect browser
metaTitle: Proxies in an antidetect browser in a local profile
metaDescription: Bring your own HTTP or SOCKS5. No bundled exits. This pillar covers how a local profile uses a line you already pay for, and what the app will not broker.
excerpt: Bring your own HTTP or SOCKS5. No bundled exits. This pillar covers how a local profile uses a line you already pay for, and what the app will not broker.
author: Sam Okonkwo
published: 2026-05-17
category: proxies
tags: proxies, exits, proxy, antidetect
readingTime: 9
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on proxies in an antidetect browser beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: what-are-proxies, socks5-versus-http-proxies, geo-matching-proxy-to-fingerprint, bring-your-own-proxy-ethic, what-leaves-this-machine, timezone-language-and-proxy-country, isp-versus-residential-proxies, how-to-use-a-proxy-server
---

A proxy is a path. An antidetect profile is a browser directory. You can attach a path to a directory. You cannot replace the directory with a path. This page is how a local profile uses a line you already pay for, and what the app will not broker.

Bring your own HTTP or SOCKS5. We do not sell exits. We do not bundle a starter pool. Provider URL templates for a few common shops are convenience strings. Credentials stay in the local profile record. Authorized work only. A cleaner street does not authorize a login you do not own.

The rest of the cluster lives under [Proxies](/blog/proxies). This page is the hub: attach, align, refuse.

## What "bring your own" means in the app

MaskWright parses `host:port`, `host:port:user:pass`, `user:pass@host:port`, and `type://...`. Types: `http`, `https`, `socks5`. The `https` type is treated as an HTTP forwarder. TLS-to-proxy is not implemented. SOCKS4 is not in the type enum.

Chromium gets `--proxy-server` as `type://host:port` without embedded credentials. HTTP auth uses a small MV3 extension (`chrome.webRequest.onAuthRequired`). SOCKS5 auth happens in the handshake. Firefox and Camoufox get proxy via environment variables.

[What proxies are](/blog/what-are-proxies) is the noun. [How to use a proxy server](/blog/how-to-use-a-proxy-server) is the field-by-field how-to. [SOCKS5 versus HTTP](/blog/socks5-versus-http-proxies) is the protocol split.

## Alignment on launch

On profile start, the app can query ip-api.com through the proxy (or direct if there is no proxy) and update timezone, locale, languages, and geolocation before launch. At CDP apply, a page probe to ip-api.com or geojs.io may re-align. [Geo matching](/blog/geo-matching-proxy-to-fingerprint) and [timezone, language, and proxy country](/blog/timezone-language-and-proxy-country) are the siblings.

That lookup leaves the machine. [What leaves this machine](/blog/what-leaves-this-machine) is the privacy ledger. Profiles are not uploaded. Exit geo is.

The connectivity check is TCP connect only. It does not prove HTTP or SOCKS5 auth succeeded. A green badge is weaker than a full handshake. Check the exit IP in a page you trust before you treat the launch as clean.

| Piece | What MaskWright does | What it does not |
| --- | --- | --- |
| Protocols | HTTP, SOCKS5 | SOCKS4, TLS-to-proxy |
| Credentials | Encrypted in `profiles.json` | A separate vault product |
| Geo align | ip-api.com on launch | A guarantee the provider is honest |
| Traffic | Your provider | Broker or resale |
| Check | TCP connect | Full auth handshake |

## Sticky versus rotating, said once

A login you intend to keep wants a sticky exit. Rotating under a cookie store is how risk engines see a new city every click. That is hygiene, not a tactic. Details live in the sticky and rotating siblings.

[ISP versus residential](/blog/isp-versus-residential-proxies) is assignment type. Pick for the job. We will not rank a checkout table. [Bring-your-own ethic](/blog/bring-your-own-proxy-ethic) is why the installer has no pool.

## What I refuse

Bundled residential that is actually your bandwidth. We dropped that model.

A system VPN under every profile. That wraps personal Chrome too. Attach per profile.

Treating a proxy as a fingerprint tool. Canvas and WebGL do not move because the street changed.

Free open lists. They are someone else's abandoned exit, often already flagged, often logged. Pay for a line or use the house connection.

## A launch I trust, and one I do not

I paste SOCKS5 with auth into the ads profile, run the TCP check, launch, then open a lookup page. Country, ASN, no leftover IPv6 from the house. Timezone in the page matches the exit. Then I work. I do not rotate that credential mid-sitting.

I do not paste a free list. I do not enable a Windows proxy. I do not leave personal Chrome on the same line. Geo align talks to ip-api.com. That is expected traffic. Profiles still do not upload.

If auth fails, Chromium may try the house path depending on how the failure looks. That is why the lookup page matters more than the green badge. Fix the string, relaunch, check again.

Provider templates fill a hostname pattern. I still read the shop's log policy. Convenience is not a contract.

## FAQ

### Do I have to use a proxy?

No. Plenty of authorized desks use the household IP plus isolated profiles. A shared home exit is not isolation and is not a crime.

### Why not include a starter pack?

Because then we are a proxy company, and your traffic is our log. Templates are strings. Credentials stay local.

### Can I paste a provider URL?

Yes, for the shops we templated. That is convenience, not an endorsement. Read the provider's log policy yourself.
