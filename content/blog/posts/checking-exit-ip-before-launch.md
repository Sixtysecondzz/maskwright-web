---
slug: checking-exit-ip-before-launch
title: Check the exit IP before launch
metaTitle: Check the exit IP before you launch work
metaDescription: Check the exit before you open work. Product uses ip-api.com for that lookup. This is a short operational habit, not a 2019 vendor review. Authorized work only.
excerpt: Check the exit before you open work. Product uses ip-api.com for that lookup. This is a short operational habit, not a 2019 vendor review. Authorized work only.
author: Sam Okonkwo
published: 2026-06-02
category: proxies
tags: proxies, exits, how-to, check, proxy
readingTime: 5
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on check the exit IP before launch beside a proxy field and an exit-IP lookup, photographed as a working operator setup.
related: proxies-in-an-antidetect-browser, geo-matching-proxy-to-fingerprint, bring-your-own-proxy-ethic, sticky-sessions-and-why-they-matter, socks5-versus-http-proxies, rotating-proxies-break-logins, how-to-use-a-proxy-server, proxy-auth-formats
---

Check the exit before you open work. The 2019 pages in this query review vendors. This page is a habit. You pasted a line into a profile. You do not know the street until something on the far side tells you. MaskWright can query ip-api.com through the proxy and report IP, country, city, timezone, and ISP. Believe that lookup, then launch the authorized profile. Do not launch a login and hope.

[Proxies in an antidetect browser](/blog/proxies-in-an-antidetect-browser) is the pillar. The rest of the cluster lives under [Proxies](/blog/proxies). Authorized work only.

## What the product actually checks

Two different checks exist. Do not mix them up.

| Check | What it proves | What it does not prove |
| --- | --- | --- |
| TCP connect | The port answered | Auth worked, country is right |
| Geo via ip-api.com | Exit IP, country, city, timezone, ISP through the line | The next hour will stay sticky |

`checkProxy` opens a TCP connection to host:port. It does not complete an HTTP or SOCKS5 auth handshake. A green connect means the port answered.

`fetchProxyGeo` asks ip-api.com through the line (or direct if there is no proxy). That request leaves the machine. There is no offline magic that invents a country.

On profile start the app can run the same style of lookup and update timezone, locale, languages, and geolocation before the browser comes up. At CDP apply, the page may probe ip-api.com or geojs.io again. [Match the fingerprint to the exit geo](/blog/geo-matching-proxy-to-fingerprint) is that alignment. This page is the habit of reading the IP before you treat the profile as ready.

If the lookup fails, the host clock and the host language will leak. I do not open the ads login in that state. I fix the line, fix the [auth format](/blog/proxy-auth-formats), or I work without a proxy.

![An exit lookup beside a named profile](/blog/blog-launch-checklist.png "TCP is not a blessing. A geo result through the line is the check.")

## What I read on the result

**The IP.** Is it the sticky address I expected, or a new one? [Sticky sessions](/blog/sticky-sessions-and-why-they-matter) exist so a login stays on one street. A rotating product under cookies you intend to keep is how the session dies. [Rotating proxies break logins](/blog/rotating-proxies-break-logins) is hygiene, not a ban guide.

**The country and city.** Do they match the profile's story? A US storefront profile on a Frankfurt exit is a mismatch you chose, or a provider surprise. Either way, notice it before the first request from the live login.

**The timezone.** It should follow the exit. If the lookup says America/Chicago and the profile still has the office clock, alignment failed.

**The ISP or ASN label.** Residential, mobile, and datacenter read differently. The label is not a blessing. Shared and tired space stays tired when you attach it. The lookup is a fact, not a quality score.

**Whether the IP is yours.** If the result is the house IP, the proxy did not carry the lookup. Auth failed, the scheme was wrong, or the browser skipped the line. [SOCKS5 versus HTTP](/blog/socks5-versus-http-proxies) is the protocol page. [How to use a proxy server](/blog/how-to-use-a-proxy-server) is the attach how-to.

## What the check is not

It is not a hide-the-proxy test. Sites use more than ip-api.com. This habit answers: did my line come up, and where?

It is not a connectivity guarantee for the next hour. Sticky time ends. Providers reshuffle. Check again after a sleep, after a crash, after you edited the string.

It is not consent. [Bring your own proxy](/blog/bring-your-own-proxy-ethic) means we do not sell the exit. We also do not certify the pool. A residential label can still be a bad source. Ethics stay with the provider you paid.

It is not encryption. Proxy credentials live in `profiles.json`, which is AES-256-GCM at rest. The geo hosts see that a lookup happened through that exit. Profile folders and cookie JSON are not uploaded by a MaskWright server API in the code we audited. The lookup itself still leaves.

## Operator sequence I actually use

1. Paste the line into the profile that needs it, not into Windows.
2. Confirm scheme and auth format.
3. Run the geo check. Read IP, country, timezone, ISP.
4. If the result is the house, stop. Fix auth or scheme.
5. If the result is a surprise country, stop. Confirm the product you bought.
6. If the result matches the profile, start it and let alignment run.
7. Open authorized work. Do not open a second brand in the same folder to "just check."

I do not skip step 3 because yesterday's sticky session should still be there. I do not skip it because TCP connected. I do not skip it because the vendor dashboard showed a green dot in another timezone.

## FAQ

**TCP succeeded. Can I skip geo?**
No. TCP does not prove auth or country.

**The lookup returned my home IP. What now?**
The line never carried the request. Fix scheme or auth. Do not open the login.

**Does this certify the proxy is "clean"?**
No. It tells you the exit you got. Reputation and source ethics are separate.

Check the street, then walk onto it with a profile you already have a right to open. If the street is wrong, stay home. This is not a 2019 vendor review. We will not list "safe" ASNs.
