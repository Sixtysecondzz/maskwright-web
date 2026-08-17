# Writer desk brief

You write drafts only for slugs assigned to your desk. You do not add, drop, or retarget rows. Strategy changes go back to SEO, then CEO.

Read first:

- content/blog/research/product-capabilities.md
- content/blog/research/ceo-approval.md
- content/blog/research/metadata.json (your slugs only)
- content/blog/research/content-map.csv (your row notes)

Quality benchmark: the deleted gold-standard article "What an antidetect browser actually is". Reproduce its qualities, not its wording, metaphors, or outline.

## File

Write E:\windows app\maskwright-web\content\blog\posts\{slug}.md

Frontmatter (values from metadata.json):

```
---
slug:
title:
metaTitle:
metaDescription:
excerpt: (use metaDescription)
author:
published:
category:
tags: comma separated
readingTime:
heroImagePrompt:
related: comma separated slugs
---
```

## Draft rules

- 700-1000 words for standard rows. Pillars (pillar true in content-map) may be 1500-2500 if the subject needs it. Do not pad.
- No em dashes or en dashes.
- No H1 in the body. Structure follows the subject.
- FAQ only if real questions remain.
- 4-8 contextual internal links to related slugs: [visible text](/blog/slug)
- Link the hub once: [category title](/blog/{category})
- MaskWright only when it fits. Never invent product capabilities. If the audit says unknown, do not claim it.
- Visuals: include 0-3 markdown images only if they help. Use existing /blog/*.png files. Do not manufacture a quota.
- Authorized-account isolation is allowed. No ban-evasion, fake accounts, hidden scrapers, or trophy lab scores.
- First person is fine when truthful to the product audit.

Allowed images in public/blog: blog-fingerprint-grid.png, blog-canvas-noise.png, blog-browserleaks-lab.png, blog-isolated-profiles.png, blog-graphite-mask.png, blog-chromium-core.png, blog-automation-bench.png, blog-launch-checklist.png, blog-proxy-map.png, blog-webrtc-leak.png, blog-residential-street.png, blog-social-desk.png, blog-cookie-jar.png, blog-operator-desk.png, blog-windows-tower.png, blog-encrypted-disk.png, blog-local-vault.png, blog-no-cloud.png, blog-empty-chair.png, blog-timezone-clock.png
