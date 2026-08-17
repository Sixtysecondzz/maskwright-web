---
slug: carrier-grade-nat-and-shared-exits
title: Carrier-grade NAT and shared exits
metaTitle: Carrier-grade NAT and shared exits
metaDescription: CGNAT means many subscribers share an address. This adjacent note explains shared mobile exits, a topic with no dedicated crawl page and a lot of confusion.
excerpt: CGNAT means many subscribers share an address. This adjacent note explains shared mobile exits, a topic with no dedicated crawl page and a lot of confusion.
author: Sam Okonkwo
published: 2026-05-30
category: proxies
tags: proxies, exits, cgnat, proxy
readingTime: 4
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on carrier-grade NAT and shared exits beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, how-websites-detect-proxies, mobile-versus-residential, https-proxy-versus-http-forwarder, mobile-asn-on-a-desktop-browser, how-to-evaluate-a-proxy-provider, mobile-proxy-versus-cloud-phone, free-proxy-lists-are-a-trap
---

Carrier-grade NAT means many subscribers share one public IPv4. Mobile networks do this as a matter of course. Some residential ISPs do it too. A proxy product that sells "a mobile IP" is often selling a seat on that shared address, not a private handset. There was no dedicated crawl page for this, and the confusion is expensive. This note names the share.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## What CGNAT is

IPv4 ran short. Carriers put thousands of customers behind a smaller set of public addresses. Your phone (or the proxy gateway) gets a private address. The carrier translates outbound connections. The site sees the public address, not you.

Port space is shared. Two subscribers can appear as the same IP at the same hour. Reputation is shared. A neighbor who burned that address on a free list [trap](/blog/free-proxy-lists-are-a-trap) did you no favor. You still arrive as that IP.

This is not the same as a residential proxy pool, but it rhymes.

| Setup | Why the IP is shared | What "dedicated" usually means |
| --- | --- | --- |
| CGNAT (carrier) | Network design | Almost never a private IPv4 |
| Residential proxy pool | Provider customers on a prefix | Sticky seat, not a house |
| Datacenter | Cloud ASN | Not a household |

In a pool, the provider's customers share a prefix on purpose. In CGNAT, the carrier's subscribers share an address because that is how the network is built. A mobile proxy product sits on top of the second fact and sells access to the first.

[Mobile versus residential](/blog/mobile-versus-residential) is the type cut. [A mobile ASN on a desktop browser](/blog/mobile-asn-on-a-desktop-browser) is the coherence cut. CGNAT is why "unique mobile IP" is usually marketing.

## What the site can infer

The IP is in a carrier range. Geo may be coarse. [How websites detect proxies](/blog/how-websites-detect-proxies) still applies: lists, latency, behavior, and whether this address has been in a product. CGNAT does not hide a pool. It explains why many real humans already share the address.

Sticky time on a mobile product is a seat on that translation, not a lease on the IPv4. The public IP can stay while the carrier reshuffles, or jump while you thought you were sticky. Test twice. Do not trust the username's "30 minutes" as physics.

A desktop UA on a CGNAT carrier IP is a laptop on LTE or a desktop behind a mobile proxy. [Mobile proxy versus a cloud phone](/blog/mobile-proxy-versus-cloud-phone): we do not ship a phone. Do not tell a client the NAT made you one.

## What a local profile should do with that

Align timezone and language to the exit when the lookup works. Keep the browser desktop if the profile is desktop. Do not paint a phone fingerprint on a CGNAT address and call it coherence.

Expect challenges that real carrier users also see. Shared exits get rate limits that look personal and are not. That is not a reason to open a second unofficial login. It is a reason to use platform roles and official apps when the web surface is the wrong door.

[Evaluate a provider](/blog/how-to-evaluate-a-proxy-provider) on whether they admit CGNAT, how they describe stickiness, and whether they sell you dedicated on a translated address. We do not rank a top-10. We will parse HTTP or SOCKS5. [HTTPS as a type](/blog/https-proxy-versus-http-forwarder) is still an HTTP forwarder.

Credentials live in `profiles.json`, AES-256-GCM at rest. Encryption does not give you a private IPv4. The per-profile tree is not encrypted. Cookie JSON is plaintext on disk.

## IPv6 and CGNAT

Some carriers offer IPv6 to the subscriber while still translating IPv4. A mobile line that only wraps IPv4 can leak house or carrier IPv6 depending on whose NIC you are on. If you are on a USB modem, the modem's v6 is part of the path. If you are on a proxy product, the product may not carry v6 at all. Check both families in the launched profile.

Do not "fix" CGNAT by rotating usernames under a login. You are shopping for a new shared address. The cookies still remember the last site.

## FAQ

**Did I get a unique mobile IP?**
Usually no. CGNAT shares public IPv4 by design.

**Does CGNAT hide a proxy product?**
No. It explains why many humans already share the address. Feeds still list pools.

**Can MaskWright give me a private IPv4?**
No. We do not broker traffic. Encryption of `profiles.json` does not mint an address.

Many humans share the address. You are one more, or you are a proxy customer on the same door. Name that, keep the desktop story honest, and only open work you already have a right to open.
