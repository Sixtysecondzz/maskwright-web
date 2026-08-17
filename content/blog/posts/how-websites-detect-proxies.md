---
slug: how-websites-detect-proxies
title: How websites detect proxies
metaTitle: How websites detect proxies, as mechanism
metaDescription: Mechanism, not a hide-the-proxy guide. Learn the signals sites use to label an exit, then decide whether that line still fits authorized work.
excerpt: Mechanism, not a hide-the-proxy guide. Learn the signals sites use to label an exit, then decide whether that line still fits authorized work.
author: Sam Okonkwo
published: 2026-06-13
category: proxies
tags: proxies, exits, websites, detect
readingTime: 5
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on how websites detect proxies beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, https-proxy-versus-http-forwarder, carrier-grade-nat-and-shared-exits, how-to-evaluate-a-proxy-provider, mobile-versus-residential, free-proxy-lists-are-a-trap, mobile-asn-on-a-desktop-browser, isp-versus-residential-proxies
---

Sites label exits. They do it with lists, latency, ASN data, and behavior. Short pages in this query rush to how to hide. This page stays on mechanism. Learn the signals, then decide whether the line you bought still fits authorized work. I will not tell you how to slip a list.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## Lists and whois

The oldest signal is a list. Datacenter prefixes, known VPN ranges, open resolvers, and published proxy ports get tagged. [Free lists are a trap](/blog/free-proxy-lists-are-a-trap) because they are on those lists by definition, and because they are someone else's traffic.

Commercial risk vendors sell feeds. An IP that was in a residential product last month can still be in a feed this month. [ISP versus residential](/blog/isp-versus-residential-proxies) is how the address is assigned. Feeds do not owe you a correct label. They owe their customer a guess.

ASN and org name are public. A cloud ASN plus a residential SKU is a labeling fight you will lose in the feed even if you win it in a blog. A carrier ASN is [mobile](/blog/mobile-versus-residential) or [CGNAT](/blog/carrier-grade-nat-and-shared-exits), which is shared by design. Shared is not hidden.

## Latency, TTL, and the path

A browser on a household NIC and a browser on a cross-ocean forwarder do not time the same. Sites that care measure handshake time, HTTP time, and sometimes traceroute-shaped hints from the server side. A US geo on a 400ms path is a story.

TTL and hop counts can look like a datacenter or a home router. I will not publish target values. The mechanism is: the path has a shape, and a proxy adds a shape.

[HTTPS versus an HTTP forwarder](/blog/https-proxy-versus-http-forwarder) matters here only as honesty. TLS-to-proxy is not implemented in this app. The site still sees TLS from the browser to the origin (on `CONNECT`). Extra hops still exist.

## Browser and leak surfaces

The page can read WebRTC candidates, IPv6, and DNS side effects. A house IP next to a proxied page is a detection without a list. A desktop UA on a [mobile ASN](/blog/mobile-asn-on-a-desktop-browser) is a coherence signal, not a phone.

Timezone, language, and geolocation that follow the office while the IP follows Frankfurt are a one-glance mismatch. Alignment is coherence. It is not a hide.

Headless and automation flags are a different cluster. This page is the exit. A headed local profile can still sit on a listed IP.

| Signal class | Example | What it tells the site |
| --- | --- | --- |
| Lists / whois | Datacenter ASN, known VPN range | "This IP is a product" |
| Path | High RTT vs claimed geo | Extra hop |
| Leaks | House IPv6, WebRTC host candidate | Two streets |
| Coherence | Office clock on Frankfurt IP | Costume |
| Behavior | Many logins from one /24 in an hour | Neighbors, or you |

## Behavior and neighbors

Velocity: many accounts, many user-agents, many countries from one /24 in an hour. You inherit neighbors on shared space. Your authorized profile can look like a fleet because the prefix is a fleet. That is not fair. It is how feeds work.

Reuse: the same IP in a login, a scrape, and a captcha farm. If your provider's other customers did that, the address arrives pre-argued.

Protocol quirks: open proxy banners, proxy-connection headers on sloppy stacks, CONNECT to odd ports. A browser using `--proxy-server` on a normal HTTPS site is quieter than a misconfigured forwarder. Quiet is not invisible.

## What I do with a label

I [evaluate the provider](/blog/how-to-evaluate-a-proxy-provider) on lists they admit, sticky time, and source ethics. I test the exit before a login. If the IP is in a public datacenter range and I paid for residential, I stop. If the IP is carrier CGNAT and I needed a phone, I stop and name the mismatch.

I do not chase a "not a proxy" trophy on a lab site. Lab sites are not the risk engine that matters. I do not rotate under a live login to escape a label. I do not buy a new GPU string because the ASN was listed.

MaskWright does not broker traffic and does not certify a pool. Credentials live in `profiles.json`, AES-256-GCM at rest. The site sees the IP. The vault does not wash it.

## FAQ

**How do I make the site stop labeling my proxy?**
I will not answer that. If the line is a bad fit, pick another line or use the house.

**Does MaskWright hide proxy headers?**
We attach HTTP or SOCKS5 the normal Chromium way. Quiet is not invisible.

**Is a lab "proxy detect" score the verdict?**
No. Feeds, latency, and neighbors matter more than a trophy page.

Detection is a site policy plus a stack we do not control. Mechanism is lists, path, leaks, coherence, and neighbors. If those rows make the line a bad fit for the authorized profile, pick another line or use the house. Do not ask the app to launder the street.
