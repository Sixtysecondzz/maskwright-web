---
slug: what-are-residential-proxies
title: What residential proxies are
metaTitle: What residential proxies are in a local profile
metaDescription: A definition of residential exits, without a provider top-10. Learn what the label claims, what a pool actually is, and why we will not sell you the line.
excerpt: A definition of residential exits, without a provider top-10. Learn what the label claims, what a pool actually is, and why we will not sell you the line.
author: Sam Okonkwo
published: 2026-08-11
category: proxies
tags: proxies, exits, residential, are
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on what residential proxies are beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, residential-versus-datacenter-proxies, what-we-refuse-to-log-about-proxies, isp-proxies-on-a-local-profile, proxy-plus-cookies, residential-proxy-ethics, ipv6-leaks-we-still-see, residential-versus-vpn
---

A residential proxy is an exit whose outbound address is assigned by a consumer ISP. The label claims the site will see a household, not a machine block. That is the definition. It is not a top-10. It is not a checkout.

Pools are shared. The address you get is one of many. Sticky time is how you keep one for a while. We will not sell you the line. Authorized work only.

This definition lives under [Proxies](/blog/proxies).

## What the label actually claims

WHOIS or an ASN lookup shows a consumer internet provider, not AWS, not a known hosting block. Risk engines still have lists of residential-proxy ASNs and subnets. "Residential" is not invisible. It is a different reputation class than datacenter.

How the provider got that address is the ethics question. Some pools are opted-in SDK traffic. Some are fuzzier. [Residential proxy ethics](/blog/residential-proxy-ethics) is that note. I will not pretend every cheap GB is a clean household.

[Residential versus datacenter](/blog/residential-versus-datacenter-proxies) is the hosting cut. [ISP proxies](/blog/isp-proxies-on-a-local-profile) are provider-ASN lines issued on purpose, usually static. Different SKU. [Residential versus a VPN](/blog/residential-versus-vpn) is exit type versus a tunnel app.

## What a pool is

You authenticate. The gateway picks a peer. You leave through that peer's IP until sticky expires or the peer drops. Other customers may have used that IP an hour ago. That is the product.

Sticky exists because logins cannot hop. [A new exit does not clean cookies](/blog/proxy-plus-cookies). [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is how you attach the gateway to one profile.

| Trait | Typical residential pool |
| --- | --- |
| ASN look | Consumer ISP |
| Sharing | Many customers per subnet over time |
| Sticky | Timer or session ID |
| Speed | Variable, peer-dependent |
| Ethics | Read the provider's sourcing |

## What we will not do

Rank a top-10 you can checkout through us. Broker traffic. Log your destinations. [What we refuse to log](/blog/what-we-refuse-to-log-about-proxies).

Treat residential as a fingerprint tool. Canvas does not move because the ISP name did.

Ignore IPv6. [IPv6 leaks](/blog/ipv6-leaks-we-still-see) can show a house address beside a residential IPv4.

## When I actually buy residential

An authorized ads or shop login that needs to look like a household in a specific country, and a datacenter ASN has already been a problem for that site. I still verify the exit. I still keep sticky. I still keep cookies coherent.

When the job is my own site's uptime check, datacenter is cheaper and more honest. When the job is a household IP I already have, I use the house line and skip the invoice.

## What I verify before I pay for GB

ASN lookup on a test exit. Sticky that actually holds for 30 minutes. A sourcing sentence I can live with. A log policy that names a company. If any of those fail, I do not care that the landing page said "real residential."

I also check whether the subnet is famous. Shared pools get listed. [How to test a residential exit](/blog/how-to-test-a-residential-exit) is the habit. One GB of trial beats a year of a blog rank.

Ethics: if the provider's pool is an SDK in a consumer app, I want that in writing. If they wink, I walk. MaskWright will not launder that choice. We do not resell the GB.

For many authorized desks the house IP is enough. Residential is a tool, not a default.

I still meet people who think residential means "the site cannot tell." Pools get listed. Subnets get listed. Behavior (hopping, timezone mismatch, WebRTC) still talks. The label is a reputation class, not a cloak. Verify, sit still, keep cookies coherent. That is the whole product after you pay.

## FAQ

### Are residential proxies "real home IPs"?

They are addresses announced by consumer ISPs. Whether a real person opted in is a provider question. Look it up.

### Is ISP the same as residential?

No. ISP (static residential, in some catalogs) is a still provider-ASN line. Residential pools are usually rotating households. Separate page for that cut.

### Does MaskWright include residential GBs?

No. Bring your own HTTP or SOCKS5. Templates are strings, not a pack.
