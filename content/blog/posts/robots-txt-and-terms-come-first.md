---
slug: robots-txt-and-terms-come-first
title: robots.txt and terms come first
metaTitle: robots.txt and terms come first, always
metaDescription: robots.txt and terms come first. No crawl page on their side treats this as the rule. This one does, before any talk of headed collection. Authorized work only.
excerpt: robots.txt and terms come first. No crawl page on their side treats this as the rule. This one does, before any talk of headed collection. Authorized work only.
author: Morgan Ellis
published: 2026-07-20
category: scraping
tags: scraping, research, robots, txt
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on robots.txt and terms come first beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: official-apis-versus-headed-collection, scraping-ethics-we-follow, public-pages-slowly, what-is-web-scraping, rate-limits-are-not-a-puzzle, linkedin-we-will-not-scrape-inboxes, captchas-are-a-stop-sign, instagram-public-research-versus-scrape
---

Before a headed client, before a Python request, before a note about pace, read the robots file and the written terms. Competitor crawl pages treat this as a footnote, then teach the bypass. This page treats it as the rule.

I am not giving legal advice. I am describing the order we write in. [Scraping ethics we follow](/blog/scraping-ethics-we-follow) is the full list. This note is only the first item.

## What robots.txt is

robots.txt is a file at the site root that tells automated clients which paths the publisher wants left alone. It is not a lock on the door. It is a published preference with a long custom of being honored by people who claim to be doing research.

If `Disallow` covers the path you wanted, you stop. You do not fetch it with a browser so you can say you were not a bot. [What web scraping is](/blog/what-is-web-scraping) does not include that disguise. [User-agent honesty in research](/blog/user-agent-honesty-in-research) means your client name should match a robots group you are willing to obey.

Allow on a path is not a blank check. Terms of use, rate limits, and login walls still apply. robots.txt is necessary. It is not sufficient.

## What terms are

Terms are the contract the site published for people and for developers. They say whether you may copy, whether you may automate, whether you may use the data in a product. They are longer than a robots file and easier to skip. We do not skip them.

If the terms forbid scraping, a public URL is not an invitation. If they point you at an API, that is the door. [Official APIs versus headed collection](/blog/official-apis-versus-headed-collection). If they forbid inbox export by a third-party tool, we will not write the tool. [We will not scrape LinkedIn inboxes](/blog/linkedin-we-will-not-scrape-inboxes).

Instagram's public grid is not a dataset because a 2023 gist said so. Instagram public research is look, in a cold profile, or official channels.

## The order on a real desk

1. Name the job in one sentence.
2. Search for an official API, feed, or export.
3. Read terms for automated access.
4. Fetch `/robots.txt` as the client you intend to be.
5. Only then decide whether a slow public-page read is still allowed.

[Public pages, slowly](/blog/public-pages-slowly) comes after this list, not before. [Rate limits are not a puzzle](/blog/rate-limits-are-not-a-puzzle) is the next contract if the official door has one.

If a captcha or an anti-bot page appears, that is another published stop. You do not "solve robots" by solving a puzzle.

| Claim I hear | What I do |
| --- | --- |
| "robots.txt is not law" | Still a stop here. We are not writing a test case. |
| "I used a real browser" | A headed client that ignores Disallow is still ignoring Disallow. |
| "I am only researching" | Purpose does not rewrite a Disallow. |
| "The sitemap listed it" | A sitemap helps discovery. It does not override robots or terms. |
| "The marketing page is public" | Public to a person is not invited for a harvest. |

## What I will not treat as a loophole

A headed client is still a client. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper). A captcha after you ignored Disallow is two stops, not a hint.

## Local notes

Do not keep a "robots bypass" snippet in the research folder. Leftovers you can defend belong there. A Disallow you ignored is not that.

Print the robots group you matched and the terms paragraph you relied on into the same sidecar as the leftover. If you cannot find a paragraph, you do not have a method. "Everyone scrapes this" is not a paragraph. "The marketing page loaded in my cold profile" is a look, not a harvest license.

Work profiles that hold logins never run the collector. Scripts stay outside MaskWright's store. The product will not fetch robots for you and will not ignore it for you. 0.1 isolates profiles. It is not a crawler.

The [Scraping](/blog/scraping) hub starts here more often than it starts at a library name. If you skip this page, the rest of the cluster will read like a disguise shop. We will not write that shop.

## FAQ

### Do I need robots.txt if I am a person looking at a page?

A person in a chair can read a public page. A program should still fetch robots as the client it is. Do not use "I could have looked" as a license for a harvest.

### What if robots.txt is missing?

Terms still apply. Missing robots is not an invitation to volume. Go slowly, or use the official API.
