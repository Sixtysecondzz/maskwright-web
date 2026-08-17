---
slug: bring-your-own-proxy-ethic
title: Bring your own proxy
metaTitle: Bring your own proxy. We do not sell exits.
metaDescription: Credentials stay local. We do not sell traffic. This ethic page is the opposite of a broker blog: you bring the line, and the vault does not phone it home.
excerpt: Credentials stay local. We do not sell traffic. This ethic page is the opposite of a broker blog: you bring the line, and the vault does not phone it home.
author: Sam Okonkwo
published: 2026-05-29
category: proxies
tags: proxies, exits, byo, proxy
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on bring your own proxy beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: checking-exit-ip-before-launch, socks5-versus-http-proxies, geo-matching-proxy-to-fingerprint, how-to-use-a-proxy-server, sticky-sessions-and-why-they-matter, what-are-proxies, rotating-proxies-break-logins, proxies-in-an-antidetect-browser
---

Bring the line you already pay for. We will not sell you ours. MaskWright parses HTTP, HTTPS-as-a-forwarder, and SOCKS5. It does not broker bandwidth. It does not resell residential pools. Provider URL templates for a few common shops are fill-in strings. Credentials stay in the local profile record. They are not an upload.

I write this because a lot of antidetect blogs are storefronts with a tutorial on top. They rank exits they earn on. They bundle a starter pack. “Free profiles” depend on buying traffic. A local tool that does that is still a broker.

## What BYO means on the machine

You paste `host:port`, `user:pass@host:port`, or a `type://` URL into the profile. [How to use a proxy server](/blog/how-to-use-a-proxy-server) is the mechanics. [What proxies are](/blog/what-are-proxies) is the vocabulary. [Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is how that field attaches to a launched Chromium.

HTTP proxy auth goes through a small MV3 extension (`onAuthRequired`). SOCKS5 auth is in the handshake. Chromium’s `--proxy-server` flag gets `type://host:port` without embedded passwords. Firefox/Camoufox gets env vars. HTTPS as a type is treated as an HTTP forwarder. TLS-to-proxy is not implemented. If you needed a true HTTPS proxy CONNECT with TLS to the proxy itself, this 0.1 path is the wrong tool.

Proxy credentials live inside encrypted `profiles.json` (AES-256-GCM). They do not live in a MaskWright cloud. The Chromium folder still is not encrypted by our code. Someone with your Windows user can still read a live session. BYO is about us not taking a copy, not about the folder being unreadable.

## What we will not do with your line

We will not log host, port, user, and pass to a server we operate. We will not meter gigabytes. We will not swap your exit for a cheaper pool to save us money. Templates for IPRoyal, Smartproxy, and Bright Data are convenience. They are not a checkout.

[Checking the exit IP before launch](/blog/checking-exit-ip-before-launch) is on you, and on a lookup through the proxy to ip-api.com when you ask for it. That lookup leaves the machine. It is not us storing the password.

## Sticky versus rotating, HTTP versus SOCKS5

Logins want a sticky exit. [Sticky sessions](/blog/sticky-sessions-and-why-they-matter) is the why. [Rotating proxies break logins](/blog/rotating-proxies-break-logins) is the failure mode. I will not tell you to rotate a Seller Central session to look “more residential.” That is how you get a checkpoint you then want a playbook for. We do not write that playbook.

[SOCKS5 versus HTTP](/blog/socks5-versus-http-proxies) is a protocol choice. Both work in the parser. Pick what your provider actually gave you. Do not mix a mobile ASN with a desktop UA and call it matching. [Geo matching](/blog/geo-matching-proxy-to-fingerprint) is timezone, language, and coordinates following the exit you already bought.

| Topic | MaskWright 0.1 | Broker-style antidetect |
| --- | --- | --- |
| Who sells the IP | You, elsewhere | Often them |
| Where creds sit | Local `profiles.json` | Their account + often local |
| Traffic share | None | Sometimes the business |
| Templates | Fill-in strings | Checkout |

On Windows 11 I paste the line, run the proxy check, and look at country and timezone before the first login of the day. If the check fails, I do not “try the shop anyway.” A profile with a dead exit on a money tab is how you leak the house IP for one request and then spend the afternoon in a checkpoint you will want a playbook for. We do not write that playbook.

Provider templates are not health checks. They do not prove the pool is sticky. They do not prove consent. They only stop you from fighting the URL parser. After that, the provider dashboard and a leak test are your job.

## FAQ

### Do you take a cut if I use the IPRoyal template?

No. Paste credentials you already have. We are not on that invoice.

### Can I skip a proxy entirely?

Yes. The profile then leaves through the house IP. Isolation of cookies still works. Geo alignment to a foreign city will not, because there is no foreign exit to follow.

### Will you add bundled residential later?

Not as a product I am willing to defend. [Download MaskWright](/download) is a local launcher. The [Proxies](/blog/proxies) hub is how to attach a line you chose. If you wanted a storefront for IPs, you are on the wrong site.
