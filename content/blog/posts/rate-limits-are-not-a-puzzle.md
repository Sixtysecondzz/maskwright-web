---
slug: rate-limits-are-not-a-puzzle
title: Rate limits are not a puzzle
metaTitle: Rate limits are not a puzzle to solve
metaDescription: Rate limits are a contract, not a puzzle. This page refuses the sport of squeezing one more request out of a door that already told you to wait.
excerpt: Rate limits are a contract, not a puzzle. This page refuses the sport of squeezing one more request out of a door that already told you to wait.
author: Morgan Ellis
published: 2026-07-17
category: scraping
tags: scraping, research, scrape, rate
readingTime: 6
heroImagePrompt: A Windows tower in a quiet office corner, open to a page on rate limits are not a puzzle beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: what-is-web-scraping, captchas-are-a-stop-sign, public-pages-slowly, user-agent-honesty-in-research, official-apis-versus-headed-collection, storing-research-files, robots-txt-and-terms-come-first, facebook-ads-library-research-locally
---

A rate limit is a contract line. The door told you how often you may knock. The sport of squeezing one more request out of that door is not research. It is ignoring the line and calling the ignore a technique.

I write this as an operator who has watched 429 pages get treated like Capture the Flag. I will not write that sport.

## What a limit is saying

On an official API the limit is documented. Requests per window, burst rules, a header that tells you when to resume. [Official APIs versus headed collection](/blog/official-apis-versus-headed-collection). Waiting is compliance. Paying for a higher tier is a business decision. Rotating keys or exits to reset the window is a refused one.

On a public page the limit may be unspoken. The site still has a capacity. [Public pages, slowly](/blog/public-pages-slowly) is how we treat that silence: human pace, not a guessed threshold. [robots.txt and terms come first](/blog/robots-txt-and-terms-come-first). A crawl-delay, a Disallow, or a terms clause about automated access is the written form of the same contract.

[What web scraping is](/blog/what-is-web-scraping) already put pace next to permission. This URL owns the limit itself.

## What I will not treat as a puzzle piece

**Backoff as a hide.** Exponential backoff is polite when you were invited and you blipped. It is not a way to finish a harvest after the site said no.

**New exits.** A proxy is an exit you brought for a job you were already allowed to do. A new residential IP so the counter resets is a disguise.

**New user agents.** [User-agent honesty in research](/blog/user-agent-honesty-in-research). Changing the string to look like many browsers is a hide. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper).

**New accounts.** A second app key, a second login, a second "research" profile pointed at the same harvest. That is a fleet of clients. Behind-login collection is not research if you minted the login for the scrape.

**A captcha after the 429.** That is two stops. [Captchas are a stop sign](/blog/captchas-are-a-stop-sign). Do not chain a solver to a limiter.

| Signal | Honest read | Puzzle read I skip |
| --- | --- | --- |
| 429 + Retry-After | Sleep until then | Spin a second key |
| Unspoken public-page capacity | Human pace | Tune jitter against a WAF |
| Captcha after a limit | Stop | Solver plus new exit |

## What wait looks like in a client

On an official API the response often tells you when to resume. You sleep until that time. You log the window. You do not spin a second process against a second key. You do not open a headed profile so a person can "keep going" in the UI.

On a public page there may be no header. Wait still looks like a person putting the kettle on, not like a jitter function tuned against a WAF. If you are measuring the site to find the highest rate that does not trip a wall, you have already turned the contract into a puzzle.

A retry that fires immediately is a second knock. A retry after the stated window is the same knock, later. Only the second one belongs in a research client.

## Honest options when the window is too small

Shrink the job. You do not need every row. You need the rows the decision requires.

Schedule the rest for the next window. Sleep is a feature.

Pay the tier the platform sells. Official volume usually has a price.

Drop the dataset. A 2023 tutorial that assumed unlimited JSON is not a stakeholder.

Export from a button the product already ships. Public Ads Library research prefers the public UI and official tools over a paging client. [Facebook Ads Library research locally](/blog/facebook-ads-library-research-locally).

## What the leftover should record

[Storing research files](/blog/storing-research-files). Write the limit you hit. Write that you stopped. A half-finished dump stored as if volume were the goal trains the next operator to finish it the wrong way.

Provenance is one line: endpoint or URL, time, official client or signed-out page, and "stopped at limit" when that is what happened.

## Local desk

Scripts live outside work profiles. Tokens live in the script folder. A 429 handler in that folder should sleep or exit. It should not open a MaskWright profile and continue as a person.

MaskWright 0.1 has no request queue and no retry engine. Bulk start opens authorized profiles. It does not page an API. Internal CDP is not a collection client.

The [Scraping](/blog/scraping) hub will keep repeating this sentence. A limit is a contract. If you need more than the contract allows, you are negotiating with the publisher, not with a puzzle.

## FAQ

### Is exponential backoff always wrong?

No. It is right when you were invited and you blipped. It is wrong when you use it to finish a harvest the site already refused.

### Can I open a headed profile after a 429 to keep going?

No. That turns a person into a second client against the same job. Wait, shrink, or pay.
