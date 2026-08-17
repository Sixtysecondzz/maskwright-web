---
slug: web-scraping-with-python-overview
title: Web scraping with Python, without a stealth stack
metaTitle: Web scraping with Python, without stealth
metaDescription: Overview. Official libraries and APIs. No stealth stack. If you collect with Python, start from the documented door, not a random Chrome costume.
excerpt: Overview. Official libraries and APIs. No stealth stack. If you collect with Python, start from the documented door, not a random Chrome costume.
author: Morgan Ellis
published: 2026-08-10
category: scraping
tags: scraping, research, how-to, web
readingTime: 6
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on web scraping with Python, without a stealth stack beside a public documentation page and a local notes folder, photographed as a working operator setup.
related: what-is-web-scraping, web-scraping-tools-criteria, what-is-a-scraping-browser, proxies-for-web-scraping, we-will-not-hide-a-scraper, instagram-public-research-versus-scrape, personal-data-and-collection, linkedin-we-will-not-scrape-inboxes
---

If you collect with Python, start from the documented door, not a random Chrome disguise. This overview is official libraries and APIs. It is not a Beautiful Soup plus stealth Chromium recipe. The 2023 gists that skip permission are the pages we are not refreshing.

[What web scraping is](/blog/what-is-web-scraping) is the definition. This URL is the language note for people who already chose Python.

## The order in a repo

1. Find the official SDK or HTTP API. Use `requests` or `httpx` against that contract. Identify the app. Store tokens in the repo's env, not in a browser cookie store.
2. If there is no API and the page is public and permitted, a slow HTTP client with an honest UA may be enough. [User-agent honesty in research](/blog/user-agent-honesty-in-research). [Public pages, slowly](/blog/public-pages-slowly). [robots.txt and terms come first](/blog/robots-txt-and-terms-come-first).
3. If you own the host and you need a real browser, Playwright lives in this repo, pointed at your hostname. [Playwright for pages you own](/blog/playwright-for-pages-you-own). MaskWright does not ship it.
4. If none of those doors open, stop. Do not add undetected-chromedriver. [We will not hide a scraper](/blog/we-will-not-hide-a-scraper).

I will not paste a selector tutorial. Selectors are how you read a tree you were already invited to read. They are not the interesting part.

## Libraries I will name as doors, not as disguises

Official platform SDKs when the job is Reddit, X, ads reporting, or a shop catalog. Those are Python because the vendor shipped Python. [Official APIs versus headed collection](/blog/official-apis-versus-headed-collection). [Rate limits are not a puzzle](/blog/rate-limits-are-not-a-puzzle). Honor the headers. Sleep. Exit.

`httpx` or `requests` for a documented JSON URL. Parse with the stdlib or a JSON library. Write a CSV you can provenance.

A parser on HTML you were allowed to fetch. The parser is not the ethics. The fetch is.

I will not name stealth wrappers. I will not name solver bindings. I will not name a "real Chrome" launcher as the default next step after a 403.

| Step | Library shape | Next step I skip |
| --- | --- | --- |
| Official API | Vendor SDK or `httpx` | Headed Chrome because HTML looked easier |
| Permitted public HTML | Slow `httpx`, honest UA | Rotating UA pack |
| Host I own | Playwright in the repo | Attach to a MaskWright profile |
| Closed door | Stop | undetected-chromedriver |

## What Python is not for here

LinkedIn inboxes. [We will not scrape LinkedIn inboxes](/blog/linkedin-we-will-not-scrape-inboxes). Instagram harvest scripts. [Instagram public research versus a scrape](/blog/instagram-public-research-versus-scrape). Email lists from storefronts. [Personal data and collection](/blog/personal-data-and-collection). Those jobs stay refused even when the language is Python.

A scraping-browser control plane. [What a scraping browser is](/blog/what-is-a-scraping-browser). If your `requirements.txt` is a headed fleet plus a proxy rotator, you skipped the overview.

An exit in `HTTP_PROXY` is fine for an allowed client that must leave through a line you brought. It is not a residential disguise.

## What the file tree looks like

```
E:\work\research-client\
  .venv\
  .env                 # tokens, not cookies
  src\client.py        # official HTTP, honest UA
  out\2026-08-16.csv   # leftover with a provenance line
```

No `user-data-dir` copied from MaskWright. No `undetected` extra. No solver package. If the tree grows a `stealth` folder, the overview failed.

## Local Windows notes

The virtualenv lives next to the repo, not under `maskwright-data`. Work profiles stay closed while the client runs. Do not import `maskwright-cookies.json` into a session. That file is plaintext and it is a login.

Write `source`, `time`, `client`, `ua` in a sidecar next to the leftover. If you are choosing a hosted API instead of a script, judge it on permission and pace, not on stealth demos. [How to judge a web scraping tool](/blog/web-scraping-tools-criteria). Python is not mandatory. Permission is.

A 403 with a challenge is a stop. Your next file is not a stealth extra. It is the vendor's API docs, or an empty folder.

MaskWright 0.1 will not grow a Python runner. Bulk start will not invoke your script. If you need both a profile and a client, they still do not share a folder.

A first script that only hits a documented `/v1/reports` URL and writes ten rows is a finished overview. A first script that launches Chrome is a skipped overview. Keep the boring file.

If `pip freeze` grows a browser extra you cannot explain as "our staging host," remove it. The overview is finished when the client has a name, a limit handler that sleeps or exits, and a leftover with a provenance line.

The [Scraping](/blog/scraping) hub will keep this overview boring on purpose. Official client, honest name, wait on the limit, store a leftover you can defend.

## FAQ

### Should I start with Beautiful Soup?

Start with the API docs. A parser is how you read a tree you were already invited to fetch. The fetch is the ethics.

### Can MaskWright run my Python client?

No. Keep the venv next to the repo. Keep work profiles closed while it runs.
