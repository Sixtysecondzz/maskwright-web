---
slug: proxy-plus-cookies
title: A new exit does not clean an old cookie jar
metaTitle: A new exit does not clean an old cookie jar
metaDescription: A new exit does not clean an old cookie jar. They treat this as warmup. We treat it as hygiene. Swap the line and the room still remembers the last site.
excerpt: A new exit does not clean an old cookie jar. They treat this as warmup. We treat it as hygiene. Swap the line and the room still remembers the last site.
author: Sam Okonkwo
published: 2026-07-09
category: proxies
tags: proxies, exits, cookies, how-to, proxy
readingTime: 4
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on a new exit does not clean an old cookie jar beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, what-we-refuse-to-log-about-proxies, ipv6-leaks-we-still-see, what-are-residential-proxies, dns-leaks-on-windows, residential-versus-datacenter-proxies, proxy-auth-formats, isp-proxies-on-a-local-profile
---

A new exit does not clean an old cookie store. Swap the line and the profile still remembers the last site. Competitor pages treat this pairing as warmup: new IP, old cookies, "heat the session." We treat it as hygiene. The cookies are the identity the site already has. The street is decoration until you change the cookies on purpose.

Authorized work only. A warmer story does not authorize a login you do not own.

This how-to sits under [Proxies](/blog/proxies).

## What actually identifies the login

Cookies first. Then localStorage and IndexedDB. Then whatever device checks the site runs in the page. The IP is one more signal. It is rarely the only one.

I have watched people paste a fresh residential line into a profile that still held last week's ads cookies and then act surprised that the dashboard still knew them. Of course it did. That is what cookies are for.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) attaches the line. It does not wipe `Network.setCookies` or the Chromium cookie DB.

If you meant a clean look, you need a clean profile, or an export you did not re-import. If you meant to keep the login, keep the cookies and keep the exit still.

| You wanted | Do this | Do not do this |
| --- | --- | --- |
| Same authorized login | Same profile, sticky exit | New IP every click |
| Signed-out public page | Cold profile or Incognito | Old cookies plus new IP |
| "Warm" a stolen session | Do not | That is not our topic |

## Import and export are keys

MaskWright can import Netscape or JSON cookies and export Netscape. Those files are plaintext JSON or Netscape on disk (`maskwright-cookies.json` is plaintext). Treat them like keys. Do not email them. Do not drop them into a random profile "to test the proxy."

A new proxy on an imported cookie file is the same login on a new street. [Proxy auth formats](/blog/proxy-auth-formats) change how you authenticate to the proxy, not what the site has in the cookie.

## Assignment type does not wipe state

[What residential proxies are](/blog/what-are-residential-proxies), [residential versus datacenter](/blog/residential-versus-datacenter-proxies), and [ISP proxies](/blog/isp-proxies-on-a-local-profile) change how the street looks. None of them empty the cookie store.

Leaks still matter. [DNS](/blog/dns-leaks-on-windows) and [IPv6](/blog/ipv6-leaks-we-still-see) can show a second address beside the new line. Then the site sees old cookies plus two streets. Worse, not better.

[What we refuse to log about proxies](/blog/what-we-refuse-to-log-about-proxies): we do not want your pool in our logs. Your cookies should not land in a provider's support ticket either. Do not paste HAR files that contain Cookie headers into a chat.

## The test that settles arguments

Export cookies from a profile. Import them into a second profile. Change only the proxy. Launch. You are still signed in. Of course you are. The site is doing its job.

The inverse: clear cookies, keep the proxy. You are signed out. The street did not hold the login. People who "warmup" by pairing a new IP with an old cookie file are running the first test and calling it strategy. It is just the same session on a new street.

If you needed a clean look, start a profile with no import. If you needed the login, keep the import and keep sticky. Do not email `maskwright-cookies.json`. Plaintext keys.

HAR files from DevTools include Cookie headers. Do not paste those into provider chat.

I keep a sticky note on the desk: new proxy, old cookies, still signed in. That is expected. The only time I wipe cookies after a line change is when I meant to sign out. Provider support that asks for a HAR "to debug the proxy" is asking for the cookie header. I send the exit IP and the error, not the HAR.

If two profiles must not meet, I do not "refresh" them with one new gateway and a shared import file. That is cloning onto a new street. Split directories first. Then pick still exits per login you keep.

## FAQ

### If I change proxy, should I delete cookies?

Only if you meant to sign out. If you meant to keep the login, keep the cookies and use sticky.

### Is this the same as clearing Chrome data?

Related. Clearing data signs you out. Changing proxy does not. People confuse the two because both feel like a "fresh start." Only one is.

### Can I import cookies into a new profile with a new proxy?

You can. You just cloned the login onto a new street. Do that only for a login you own, and know that the site may still link the sessions.
