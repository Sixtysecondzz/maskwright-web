---
slug: fingerprint-stability-across-launches
title: A fingerprint that stays put across launches
metaTitle: A fingerprint that stays put across launches
metaDescription: Stability means the same folder and the same seed after you quit. Learn what has to persist across launches if the room is meant to be the same person.
excerpt: Stability means the same folder and the same seed after you quit. Learn what has to persist across launches if the room is meant to be the same person.
author: Avery Chen
published: 2026-06-03
category: browser-fingerprinting
tags: fingerprinting, windows, how-to, stable, browser
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on a fingerprint that stays put across launches beside browser diagnostic panels and a local profile sidebar, photographed as a working operator setup.
related: what-is-browser-fingerprinting, how-we-read-browserleaks, seed-versus-random-fingerprints, creepjs-consistency-checks, battery-and-media-device-ids, pixelscan-consistency, timezone-language-and-proxy-country, iphey-scores-are-not-verdicts
---

Closing the window is not a new identity. If the folder and the seed stay put, the next launch should look like the same browser. Sites compare visits. They are allowed to. A profile that is supposed to be one authorized person has to survive quit and open.

This is an operations note. It is not a claim that stability fools a named stack. We have no published pass rates.

## What has to persist

The Chromium user-data directory. Cookies, localStorage, and the rest of the session live there. Each MaskWright profile has its own folder under the local store. That folder is the profile.

The fingerprint seed. Canvas noise, audio noise, client rect offsets, and [media device IDs](/blog/battery-and-media-device-ids) are generated to repeat. [Seed versus random](/blog/seed-versus-random-fingerprints) is the policy behind those fields.

The coherent extras you chose: screen, cores, GPU strings, UA, Client Hints. If those drift between launches, [consistency checks](/blog/creepjs-consistency-checks) will describe the drift. That description is useful. A score on [IPhey](/blog/iphey-scores-are-not-verdicts) or [Pixelscan](/blog/pixelscan-consistency) is not a verdict.

| Must persist | Allowed to change | Not a new person |
| --- | --- | --- |
| Folder, seed, UA, GPU, screen, cores | The page you open | Dashboard ads in the operator UI |
| Cookies and localStorage | The exit, if you changed the proxy on purpose | Bulk start of other profiles |
| Media IDs, canvas, audio, rects | Timezone after a deliberate new exit | A clean stop vs a crashed process |

## What is allowed to change

The exit, if you changed the proxy on purpose. Then [timezone and language](/blog/timezone-language-and-proxy-country) have to follow the new exit. A new country with yesterday's clock is a new disagreement.

The page you open. Stability is the engine and the session, not a frozen tab.

Ads in the MaskWright dashboard chrome. Those are operator UI. They are not the profile.

## How we apply the same paint again

On start, the app loads the local profile record, aligns geo when a proxy is set, launches the core, and applies CDP plus the inject script. The custom Chromium 131 core is used when it is installed. Otherwise system Chrome or Edge gets the same overrides. Either path should apply the same schema to the same folder.

If you edit the schema and keep the folder, you painted a new person on old cookies. Do that only when you meant to. Most of the time you meant to leave the profile alone.

## What the folder actually holds

The store root is `{userData}/maskwright-data`. The index is `profiles.json`, encrypted. Each profile is `profiles/<uuid>/` and that tree is the Chromium user-data-dir. Cookies, localStorage, and IndexedDB grow there. Those files are not encrypted by MaskWright code. Stability includes that residue. If you delete the tree and keep the index record, you kept a seed and lost the session. If you copy the tree to a new id and keep the old seed, you cloned a person.

Quit means the process ended. It does not mean Chromium flushed every write. Give the profile a clean stop before you call the test done. Then launch the same id.

Bulk start and stop can open several profiles. That is not a farm, and it is not a new identity for any of them. Each folder should still answer as itself.

## Same seed, new core is still a risk

If you switch from the custom Chromium 131 core to system Edge, the inject can apply the same schema and the TLS and process layers can still move. Stability means the same folder, the same seed, and the same core when you can keep it. The fallback exists. It is not a silent no-op.

I note which binary launched. I do not call a profile stable across a core swap without reading the map again.

Cookie import files on disk are plaintext JSON. Importing a new session into a stable seed is a session change, not a fingerprint change. I still relaunch once after an import so I know the paint did not move with the cookies. localStorage import is the same rule. IndexedDB is a third store in the same folder. We do not encrypt it. It still has to stay in that folder if the person stays.

## How I test stability

I launch. I read a map such as [BrowserLeaks](/blog/how-we-read-browserleaks). I quit. I launch the same profile. I ask whether canvas, audio, rects, media IDs, screen, and UA still match. I do not need a green badge. I need a match.

The parent bundle is [what browser fingerprinting actually measures](/blog/what-is-browser-fingerprinting). The [Browser fingerprinting](/blog/browser-fingerprinting) hub is where this operations note belongs: same folder, same seed, same person.

## FAQ

**Does quitting the window create a new fingerprint?**
No. Same folder and same seed should look like the same browser.

**Are Chromium profile folders encrypted?**
No. `profiles.json` is encrypted. The user-data directories are not.

**Is a core swap (custom Chromium to Edge) still stable?**
The inject can apply the same schema. TLS and process layers can still move. Read the map again.
