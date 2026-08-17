---
slug: how-to-test-a-residential-exit
title: How to test a residential exit
metaTitle: How to test a residential exit in a local profile
metaDescription: Exit, ASN, sticky time, and leak checks. Product geo check is TCP plus ip-api. This how-to is how you verify the line before a login, not how you hide it.
excerpt: Exit, ASN, sticky time, and leak checks. Product geo check is TCP plus ip-api. This how-to is how you verify the line before a login, not how you hide it.
author: Sam Okonkwo
published: 2026-06-10
category: proxies
tags: proxies, exits, residential, how-to, test
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on how to test a residential exit beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, shared-residential-subnets, residential-versus-vpn, residential-proxies-we-do-not-sell, residential-proxy-ethics, what-are-mobile-proxies, isp-proxies-on-a-local-profile, mobile-proxy-versus-cloud-phone
---

Test the line before you open a login. A residential label on an invoice is not a test. MaskWright can TCP-connect and then ask ip-api.com through the proxy for IP, country, city, timezone, and ISP. That is a lookup, not a blessing. This how-to is how you verify an exit you already paid for. It is not how you hide one.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only. We [do not sell residential](/blog/residential-proxies-we-do-not-sell) exits.

## What I am testing for

| Row | Pass | Fail |
| --- | --- | --- |
| Attach | Geo through the line is not the house IP | House IP, or lookup fails after TCP |
| Place | Country and timezone match the profile | Surprise country |
| Type | ISP/ASN looks like the product you bought | "Residential" SKU on a cloud ASN |
| Stick | Same sticky username, same IP a few minutes later | IP jumps under a login you intend to keep |
| Leaks | One public family, no house IPv6 or house DNS | Two streets |
| Source | Provider can say how the address is assigned | Silent app, unclear pool |

[Shared residential subnets](/blog/shared-residential-subnets) mean you inherit reputation. Tired space stays tired. The lookup will not say tired. An ASN whois and a recent history on that /24 are the adult version of a score.

Residential, [ISP](/blog/isp-proxies-on-a-local-profile), [mobile](/blog/what-are-mobile-proxies), and datacenter read differently. A labeling problem is a fail even if the page loads.

## The product checks, in order

1. Parse the string. `http`, `https` as an HTTP forwarder, or `socks5`.
2. TCP connect to host:port. Port alive, not auth.
3. Geo through the proxy via ip-api.com.
4. On start, align timezone, locale, languages, geolocation from that geo.
5. Optional second probe from the page to ip-api.com or geojs.io.

I do those before the authorized login, not after a checkpoint. Testing through the ads account is how you teach the site a bad first story.

![A street you can name before you walk it](/blog/blog-residential-street.png "Exit, ASN, sticky, leaks. Then the login.")

## What I open in the profile

A public IP page that shows v4 and v6. A public DNS-leak page. A WebRTC page if I need candidates. I want one country, one public address family, no house IP in candidates.

I do not open a "proxy detect" trophy site as a pass/fail for the provider. Sites detect pools with lists, latency, and behavior. [Residential versus a VPN](/blog/residential-versus-vpn) is a type cut, not a score. A clean lab page and a tired subnet can both be true.

I do not test in personal Chrome. I do not test in the Electron dashboard. The profile is the process with the proxy.

## Ethics stay in the test

[Residential proxy ethics](/blog/residential-proxy-ethics) is the source question. A cheap label can still be malware or a silent app. If the provider cannot say how the address is assigned, that is a fail even if ip-api.com says residential. We will parse the string. We will not launder the source.

Consent is not a geo field. I will not tell you how to look more like a household. I will tell you not to attach a line you would not defend in writing.

A [mobile proxy versus a cloud phone](/blog/mobile-proxy-versus-cloud-phone) is a different product test. A carrier ASN on this desktop browser is still a desktop browser. Do not grade a residential line as a phone.

## Sticky, then stop

If the IP holds for the sticky window you paid for, write that window in the runbook. If it does not, this line is a fetch tool, not a login tool. Do not make it work by logging in anyway.

If the IP holds but the subnet is famous for pools, decide whether this authorized profile can live with neighbors. Shared space is normal on residential. Surprise is not. Recheck after a provider incident, after you change the username, after a crash.

The index that stores the line is `profiles.json`, AES-256-GCM at rest. The test traffic still leaves: ip-api.com, maybe geojs.io, then whatever pages you opened. Profile folders are not uploaded by a MaskWright server API in the code we audited.

## FAQ

**Is a residential label enough?**
No. Test attach, place, type, stick, leaks, and source.

**Should I test by logging into Ads Manager?**
No. Test first. A bad first story is expensive.

**Do you sell a cleaner pool?**
No. Bring your own line.

Verify attach, place, type, stick, leaks, and source. If any row fails, do not open the login. Use a different line, or use the house path without a costume.
