---
slug: isp-proxies-on-a-local-profile
title: What ISP proxies are
metaTitle: What ISP proxies are, without a vendor list
metaDescription: ISP proxies are assigned to a provider ASN, not a random household. A definition page, not a top-10 list, for operators attaching a line to a local room.
excerpt: ISP proxies are assigned to a provider ASN, not a random household. A definition page, not a top-10 list, for operators attaching a line to a local room.
author: Sam Okonkwo
published: 2026-06-22
category: proxies
tags: proxies, exits, isp
readingTime: 5
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on what ISP proxies are beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, residential-proxy-ethics, residential-versus-datacenter-proxies, residential-versus-vpn, what-are-residential-proxies, how-to-test-a-residential-exit, what-we-refuse-to-log-about-proxies, shared-residential-subnets
---

ISP proxies are addresses assigned to an internet provider's ASN, issued on purpose, usually static. They are not a random household pulled from a rotating pool. They are not a datacenter ASN wearing a costume. This is a definition for operators attaching a line to a local profile. It is not a top-10.

Authorized work only. A prettier ASN does not authorize a login you do not own.

The definition lives under [Proxies](/blog/proxies).

## What "ISP" means on an invoice

You pay for a still IPv4 (sometimes a small block) announced by a consumer or regional ISP, hosted in a facility that ISP allows. WHOIS looks like an ISP, not like AWS. The address does not hop when sticky expires, because there is no sticky timer. It hops when you change the product or the provider reclaims it.

Catalogs also call this "static residential." I prefer ISP, because "residential" already means a pool. [What residential proxies are](/blog/what-are-residential-proxies) is the pool noun. [Residential versus datacenter](/blog/residential-versus-datacenter-proxies) is the hosting cut. This page is the still provider-ASN line.

## Why people buy them for logins

A shop admin or ads login that will be opened for months wants the same street. Pools hop. Datacenter gets listed. ISP is the compromise: still, ISP-looking, more expensive than datacenter, often cheaper than a lot of rotating GB.

It is still a proxy. Other customers may sit on nearby IPs in the same subnet. [Shared residential subnets](/blog/shared-residential-subnets) is that neighborhood problem. [How to test an exit](/blog/how-to-test-a-residential-exit) still applies. Look up the ASN yourself.

| Trait | ISP / static | Residential pool |
| --- | --- | --- |
| IP stability | Until you change SKU | Sticky timer |
| Look | Provider ASN | Consumer ISP, rotating peers |
| Typical use | Long-lived logins | Short sittings, some research |
| Sharing | Subnet neighbors | Many peers over time |

## Attach it like any other line

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser): HTTP or SOCKS5 on the profile. Align timezone to the exit country. [Residential versus VPN](/blog/residential-versus-vpn) if someone on the desk wanted a tunnel app instead.

[Ethics](/blog/residential-proxy-ethics) still matter. An ISP product can be a clean allocation. It can also be a fuzzy one. Read the provider. [What we refuse to log](/blog/what-we-refuse-to-log-about-proxies): we do not want that traffic.

MaskWright does not sell ISP lines. Paste yours. Check the exit. Keep cookies coherent. Do not rotate a static product by accident by pasting a rotate username.

## How I treat a static line on disk

I paste it into one profile that will live for months: shop admin or ads, authorized, same entity. I do not share that IP across two clients unless I accepted a shared street. I check the ASN on day one and again after a month in case the provider moved me. I keep sticky talk out of the username. This SKU is still.

Backups: the credential sits in encrypted `profiles.json`. The Chromium dir still has cookies in plaintext files. Losing the PC loses both unless I backed up `maskwright-data`. The still IP at the provider does not back up my cookies.

If the invoice said ISP and the IP hops weekly, I open a ticket or I leave. Still was the product.

Subnet neighbors still exist. A still IP in a dirty neighborhood can look worse than a clean datacenter you control. I look up the /24, not only the ASN name. If the provider cannot tell me the allocation story, I treat it as a pool with extra marketing. I keep a lookup screenshot from day one so a later hop is a fact, not a vibe. Still was the product I paid for.

## FAQ

### Is an ISP proxy a home connection?

It is an address on an ISP ASN. It is usually not the house you sit in. If you needed the house, use the house.

### Can I share one ISP IP across two authorized profiles?

You can. Then they share a street. Split cookies still. Shared last mile is a signal, not isolation.

### Why not a vendor list?

Lists go stale and they turn this page into a checkout. Definition only.
