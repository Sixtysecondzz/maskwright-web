---
slug: proxies-for-web-scraping
title: Proxies for web scraping
metaTitle: Proxies for web scraping
metaDescription: When a proxy is enough, and when a headed profile is the wrong tool. This commercial page keeps exits and collectors from being sold as the same product.
excerpt: When a proxy is enough, and when a headed profile is the wrong tool. This commercial page keeps exits and collectors from being sold as the same product.
author: Priya Nair
published: 2026-07-06
category: scraping
tags: scraping, research, proxies, web
readingTime: 6
heroImagePrompt: A Windows tower in a spare-room office with blinds half drawn, open to a page on proxies for web scraping beside a headed Chromium window and a closed script folder, photographed as a working operator setup.
related: instagram-public-research-versus-scrape, web-scraping-tools-criteria, linkedin-we-will-not-scrape-inboxes, web-scraping-with-python-overview, what-is-web-scraping, what-is-a-scraping-browser, scraping-ethics-we-follow, we-will-not-hide-a-scraper
---

A proxy is an exit. A scraper is a collector. I will not sell them as the same product. If you only need a different IP for a job you are allowed to do, an HTTP or SOCKS5 line may be enough. If you need a headed cookie store, that is a browser profile, and it is still not a license to hide a collector.

The useful caveat: MaskWright 0.1 is a local headed launcher. It is not a scraping browser. No Playwright product. We will not hide a scraper. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper). [Scraping ethics we follow](/blog/scraping-ethics-we-follow).

## When a proxy is enough

Official APIs that already accept a static or rotating exit. Your own servers. Jobs where robots.txt and terms already allow automated collection, and you are not trying to look like a shopper. [What is web scraping](/blog/what-is-web-scraping). [Web scraping with Python overview](/blog/web-scraping-with-python-overview). [Web scraping tools criteria](/blog/web-scraping-tools-criteria).

MaskWright parses http, https (treated as an HTTP forwarder; TLS-to-proxy is not implemented), and socks5. We do not broker traffic. Provider templates exist for convenience. Credentials stay in the encrypted `profiles.json` index.

## When a headed profile is the wrong tool

Sites that asked for a person. Inboxes. Anything you would have to disguise. [LinkedIn we will not scrape inboxes](/blog/linkedin-we-will-not-scrape-inboxes). Instagram public looking versus collection: [Instagram public research versus scrape](/blog/instagram-public-research-versus-scrape).

A headed window with a proxy is still automation if a script drives it. [What is a scraping browser](/blog/what-is-a-scraping-browser). I do not document attaching drivers to MaskWright's internal debugging port.

| Need | Tool |
| --- | --- |
| Different IP, allowed collection | Proxy in your scraper, not a fake shopper |
| Person reading public pages | Headed profile, often logged out |
| Inbox, paywall, forbidden collection | Stop, or official API |

## Sticky versus rotating

Logins want sticky exits. Bulk collection, where it is allowed, often wants rotation. Do not put a rotating exit under a live store or ads login you still need tomorrow.

Geo: if you attach a proxy to a MaskWright profile, timezone and language can follow exit geo on launch. That is for operator profiles, not a scrape costume.

## What I attach where

For an allowed collector I control, the proxy lives in the collector's config, not in a MaskWright profile I also use for Seller Central. Mixing those is how a rotate kills a login.

For headed public reading, I may attach HTTP or SOCKS5 to an empty MaskWright profile. Geo check. I still do not hide a loop. I read. I note. I stop at login walls I am not invited through.

HTTPS proxy type is parsed but TLS-to-proxy is not implemented. If a provider sold you that, it is their problem, not a MaskWright feature. SOCKS5 auth is in the handshake. HTTP auth uses a per-launch MV3 helper. Connectivity check is TCP only, so I still verify the first request.

Sticky with any login I must keep. Rotate only on jobs that are allowed to be anonymous collection. Do not put a mobile ASN in front of a desktop Client Hints profile and call it a phone.

Inboxes, Instagram private graphs, LinkedIn Recruiter dumps: stop. Official APIs or a person in a licensed seat.

## FAQ

### Do I need residential proxies to scrape?

Only if the job is allowed and the destination actually requires that class of exit. I do not treat residential as a magic bypass. MaskWright does not sell exits.

### Can I use MaskWright as the scraping browser?

No. Use a collector you understand, against targets you are allowed to collect, with an exit you brought. Use MaskWright to sit in a chair on authorized logins.

### Is a cloud scraping browser better?

Someone else holds the session and the HTML. That is a custody choice. [Compare local versus cloud](/compare) is about operator profiles, not a scrape endorsement.

### Captcha farms in front of the proxy?

No.

### Can I point MaskWright at a rotating pool and page through search?

That is a collector in a headed costume. If the site forbade it, stop. If an official API exists, use the API. Do not hide the loop in a profile you also use for logins.

Bring an exit for work you are allowed to do. Do not dress a collector as a shopper. Keep headed profiles for people.

I skip captcha farms, TLS-to-proxy claims we did not implement, and attaching drivers to the internal debug port. Sticky with logins. Rotate only on allowed anonymous collection in a tool that is actually a collector.

More notes sit under [Scraping](/blog/scraping). [Download MaskWright](/download) if you wanted a local operator profile instead of a scraper.
