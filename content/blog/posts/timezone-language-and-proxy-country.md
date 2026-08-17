---
slug: timezone-language-and-proxy-country
title: Timezone and language have to follow the exit
metaTitle: Timezone and language follow the exit
metaDescription: Timezone, language, and locale have to follow the exit geo. This is an alignment note for a local profile, not a ban-evasion checklist. Authorized work only.
excerpt: Timezone, language, and locale have to follow the exit geo. This is an alignment note for a local profile, not a ban-evasion checklist. Authorized work only.
author: Avery Chen
published: 2026-07-16
category: browser-fingerprinting
tags: fingerprinting, windows, how-to, timezone, proxy
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on timezone and language have to follow the exit beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, geo-matching-proxy-to-fingerprint, geolocation-api-versus-ip-geo, what-are-proxies, battery-and-media-device-ids, screen-resolution-coherence, seed-versus-random-fingerprints, hardware-concurrency-and-cores
---

A proxy changes the exit. It does not change `Intl`, `navigator.languages`, or the timezone Chromium reports unless you make those follow the exit. A Dallas line with a host clock still set to the kitchen in Sydney is a coherence tell. Sites do not need a rare canvas hash if the clock and the IP argue.

This is an alignment note for accounts you have a right to open. It is not a ban checklist. If you do not have a right to the account, stop.

## What has to follow

Timezone. Locale. Languages. Geolocation coordinates if the page asks the Geolocation API.

The exit country is the source of truth for that bundle. [What proxies are](/blog/what-are-proxies) is the beginner definition. [Match the fingerprint to the exit geo](/blog/geo-matching-proxy-to-fingerprint) is the operator version. [Geolocation API versus the exit IP](/blog/geolocation-api-versus-ip-geo) splits the two location doors. This page stays on clock and language.

![A clock next to a proxy map on a Windows desk](/blog/blog-timezone-clock.png "Timezone and language are profile fields. They have to follow the exit you actually launched, not the host you sit in.")

| Field | How a page reads it | What it must follow |
| --- | --- | --- |
| Timezone | `Intl.DateTimeFormat().resolvedOptions().timeZone`, `Date.getTimezoneOffset` | Exit country |
| Languages | `navigator.language` and `navigator.languages` | A list a person in that country could have |
| Locale | Date formats, first day of week, Accept-Language | The same set as languages |
| Geolocation | `navigator.geolocation` | The same exit lookup, not the host city |

## How we align on launch

On profile start, MaskWright queries ip-api.com through the proxy when a proxy is set, or direct when it is not. The response updates timezone, locale, languages, and geolocation before the browser comes up. CDP applies `Emulation.setTimezoneOverride`. Launch also sets a `TZ` env. The inject writes `navigator.language` and `languages`.

At CDP apply, the page may probe ip-api.com or geojs.io again and realign. That traffic leaves the machine. There is no offline magic that invents an exit country.

You bring the HTTP or SOCKS5. We do not broker the line. A sticky exit keeps the story still. A rotating exit will move the country under cookies that did not move. That is a login problem, not a reason to reroll [the seed](/blog/seed-versus-random-fingerprints).

## Intl is a second clock

`Intl.DateTimeFormat().resolvedOptions().timeZone` is the usual read. `Date.getTimezoneOffset` is the older one. They have to agree with the CDP timezone override and with the `TZ` env on launch. A page that compares both will catch a half-applied profile.

Languages are a list, not a single `en`. `navigator.language` should be the first item of `navigator.languages`. A country that speaks Portuguese should not ship a lone `en-US` unless that is actually the operator's work language for that authorized account. Flavor lists that include five locales the exit would not explain are theater.

The geo lookup uses ip-api.com. The in-page probe may also hit geojs.io. Those hosts see an exit IP. That is traffic that leaves the machine. There is no MaskWright server holding the result. There is also no claim that the lookup is private beyond "we do not upload the profile."

## Locale strings have to be a set

`en-US` and `en-GB` are not interchangeable flavor. Date formats, first day of week, and Accept-Language all move with the locale. CDP locale override and the inject languages should be one set. A header that says `de-DE` next to `navigator.language` of `en-US` is the same class of fork as a clock that ignored the exit.

I keep the set small. One primary, maybe one fallback. I do not pack a tourist list.

Geolocation coordinates are aligned to the same exit lookup. A clock in Paris next to a lat-long in Ohio is the sibling problem. I mention it here so you do not treat timezone as finished while the Geolocation API still tells the host city. Speech voices should follow the same locale set. A French clock with only US English voices is another leftover.

## What alignment will not fix

A correct clock does not fix [screen metrics](/blog/screen-resolution-coherence). It does not fix [hardwareConcurrency](/blog/hardware-concurrency-and-cores). It does not fix [battery or media device IDs](/blog/battery-and-media-device-ids). Those fields still have to sound like one desktop.

A correct clock also does not authorize a second identity you do not own. Alignment is hygiene for a profile you already have a right to open.

## How I check before work

I read the exit country. I read the timezone Chromium reports. I read `navigator.languages`. I ask whether a person in that country would have that language list. I do not invent a rare locale for flavor.

If the geo lookup failed, I do not launch and hope. The host clock will leak.

The parent bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) cluster keeps this note on alignment so competitor titles that frame it as evasion do not set our outline.

## FAQ

**Does a proxy change my timezone automatically?**
Only if the profile aligns it. MaskWright looks up exit geo on start and updates timezone, locale, languages, and geolocation. A host VPN app does not do that for you.

**What if the geo lookup fails?**
Do not launch and hope. The host clock will leak.

**Is a long language list more realistic?**
Usually no. One primary and maybe one fallback. A tourist list is theater.
