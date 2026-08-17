# Editor report

Scan date: 16 August 2026  
Corpus: `content/blog/posts` (246 markdown files)  
Scope: em/en dashes, generic AI intros, repeated identical first sentences. Two short drafts expanded. No strategy or slug changes.

## Counts

| Check | Count | Action |
| --- | --- | --- |
| Posts scanned | 246 | |
| Em dashes (U+2014) | 0 | None |
| En dashes (U+2013) | 0 | None |
| Other unicode dashes (U+2012, U+2015, U+2212) | 0 | None |
| HTML dash entities (`&mdash;`, `&ndash;`, `&#8212;`, `&#8211;`) | 0 | None |
| Space-hyphen-space used as a dash | 0 | None |
| Generic AI intros in first three body paragraphs | 0 | None |
| Identical first-sentence groups | 1 | Flagged, not rewritten |
| Intro rewrites this pass | 0 | Cap was 10; none needed |
| Drafts expanded | 2 | See word counts below |

Generic AI phrases searched in opening paragraphs included: "In today's digital landscape", "Whether you're a", "In the world of", "It's no secret", "In this article", "Let's dive", "Let's explore", "In an era", "When it comes to", "In recent years", "Have you ever", "Picture this", "The truth is", "In conclusion", and nearby variants. Zero hits in intros. One mid-article use of "in this article" in `firefox-vs-chromium-antidetect-cores.md` is a refusal sentence, not an opener. Left alone.

## Word counts (body, after frontmatter)

| File | Before | After | Range |
| --- | --- | --- | --- |
| `maskwright-is-not-an-agent-runtime.md` | 705 | **986** | 700-1000 |
| `social-media-automation-tools-we-refuse.md` | 702 | **964** | 700-1000 |

`readingTime` on the agent-runtime draft moved from 4 to 5 to match the longer body. Frontmatter slugs, titles, related lists, and strategy fields were not changed.

## Flagged files

### Identical first sentence (1 group)

Both files open with the same sentence: **A proxy is an exit.**

- `proxies-for-web-scraping.md`
- `what-are-proxies.md`

The second sentences diverge (collector vs path). Flagged only. Not rewritten. This pass does not restyle the corpus.

### Near-match first five words (not identical; not rewritten)

Three files start with "The commercial query wants a …" and then different nouns:

- `social-media-automation-tools-we-refuse.md`: "The commercial query wants a stack."
- `captcha-solvers-are-not-research.md`: "The commercial query wants a leaderboard."
- `instagram-scheduling-without-unofficial-helpers.md`: "The commercial query wants a third-party scheduler that posts while you sleep."

Not identical. Left alone.

### Short first sentences

Many posts open in four to seven words. That is the house voice, not a generic AI intro. Examples: "No team seats.", "The words are collapsing.", "Google clusters.", "Public pages." Not treated as defects.

## Fixes this pass

1. Expanded `maskwright-is-not-an-agent-runtime.md` with product-audit facts only: Windows 10/11 x64, local store, Chromium 131 plus fallbacks, internal CDP, ephemeral debugging port is not a user API, no Playwright/Puppeteer/Selenium/RPA/window sync/MCP/cloud phone/team seats. Added a connect-URL section. No roadmap tease. 0.1 stays launch and isolate.
2. Expanded `social-media-automation-tools-we-refuse.md` with a custody test, why jobs are refused without a brand shopping list, what a local room still does, and official suites versus cookie-holding dashboards. Still a hard no on unofficial schedulers and engagement bots.

No dash replacements. No intro rewrites.

## Left alone on purpose

- The identical "A proxy is an exit." pair.
- The "commercial query wants a" near-match trio.
- Short house-voice openers.
- Style preference across the rest of the 246 files.
