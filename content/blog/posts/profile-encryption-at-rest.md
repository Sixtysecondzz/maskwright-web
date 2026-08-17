---
slug: profile-encryption-at-rest
title: What encryption at rest actually covers
metaTitle: What encryption at rest actually covers
metaDescription: Honesty: profiles.json is AES-256-GCM. Chromium user-data dirs and cookie JSON are not. This page says what the lock covers, and what it does not.
excerpt: Honesty: profiles.json is AES-256-GCM. Chromium user-data dirs and cookie JSON are not. This page says what the lock covers, and what it does not.
author: Jordan Hale
published: 2026-07-14
category: privacy
tags: privacy, local, encrypted, browser
readingTime: 4
heroImagePrompt: A Windows PC on a sit-down desk with a notebook beside the keyboard, open to a page on what encryption at rest actually covers beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: extensions-inside-a-profile, browser-security-versus-antidetect, downloads-folder-discipline, what-leaves-this-machine, local-storage-is-a-second-cookie, pre-made-cookies-and-cookie-robots, if-a-vendor-is-breached, indexeddb-is-a-third-jar
---

"Profiles encrypted at rest" is a phrase that does too much work. In MaskWright the lock covers one file: `profiles.json`. That index is an AES-256-GCM envelope with a scrypt-derived 32-byte key. The Chromium or Firefox user-data directories are not encrypted by our code. Cookie import JSON and localStorage import JSON are plaintext. This page says what the lock covers, and what it does not.

[What leaves this machine](/blog/what-leaves-this-machine) is the traffic ledger. This page is the disk ledger. The rest of the cluster lives under [Privacy](/blog/privacy).

## What is in the locked file

The store root is `{Electron userData}/maskwright-data`. The index lists profiles: ids, names, core type, fingerprint records, proxy records including credentials. Persist writes the file with mode `0o600` when the OS honors it. Windows may ignore that mode.

Key material is `MASKWRIGHT_STORE_KEY` if you set it. Otherwise it is SHA-256 of `maskwright-store-v1:{hostname}:{username}`. That default is local, not a password you chose. Anyone with your Windows user can derive it. A stolen laptop that is already logged in is not stopped by the default key. Set the env var if you want a secret you control. Full-disk encryption (BitLocker) is still the OS lock I actually trust for the rest of the tree.

Legacy plaintext `profiles.json` is read once and re-saved encrypted. If you found an old unencrypted index, treat that copy as a live key and delete it after the rewrite.

There is no separate secrets vault. Proxy passwords live in the index. That is why the index is the file we encrypt.

## What is not locked by us

| Path | Encrypted by MaskWright? | What is in it |
| --- | --- | --- |
| `profiles.json` | Yes. AES-256-GCM | Names, fingerprint records, proxy creds |
| `profiles/<uuid>/` | No | Chromium/Firefox user-data |
| `maskwright-cookies.json` | No | Import file, plaintext JSON |
| `maskwright-localstorage.json` | No | Import file, plaintext JSON |

`profiles/<uuid>/` holds cookies the engine wrote, cache, [IndexedDB](/blog/indexeddb-is-a-third-jar), [localStorage](/blog/local-storage-is-a-second-cookie), [extensions](/blog/extensions-inside-a-profile) staging, history. Ordinary Chromium or Firefox files. Launch uses `--user-data-dir` at that path. No MaskWright encrypt/decrypt step wraps the tree.

[Pre-made cookies](/blog/pre-made-cookies-and-cookie-robots) are still a bad idea. A plaintext dump you created is still a key.

Unknown in the audit: whether Chromium's own on-disk cookie encryption (OS-dependent) applies inside those dirs. Unknown: whether BitLocker is on. Do not take our AES line as a substitute for either.

![A lock on the index, not on the whole disk](/blog/blog-encrypted-disk.png "AES-256-GCM is profiles.json. The user-data tree is still files.")

## Why marketing overshoots

The FAQ can say encrypted at rest without the index-versus-tree split. That sentence is partially true and overstated. I will not repeat it without the split. [Browser security versus antidetect](/blog/browser-security-versus-antidetect) is a different job: harden one person against the open web. This page is custody of profiles on disk.

A cloud vendor that encrypts their locker still holds the keys or the unlock path. [If a vendor is breached](/blog/if-a-vendor-is-breached) they hold the cookies. Our honesty is the opposite shape: we encrypt a small index, we leave the trees as browser files, we do not upload either. You can point at the folder. You can also lose the folder.

[Downloads](/blog/downloads-folder-discipline) sit outside the tree if the tray is the Windows default. Encryption of `profiles.json` will not hide a CSV on the desktop.

## What I tell operators

Back up `maskwright-data` as a whole, not just the index. A restored index without the trees is a list of profiles with empty houses. A restored tree without the index is a house the app may not list.

Treat cookie and localStorage JSON as secrets. Do not email them. Do not put them in a shared Drive.

Set `MASKWRIGHT_STORE_KEY` on a box that holds live ads logins if you understand env-var custody. Use BitLocker. Lock the Windows user. The AES line is not a laptop policy.

Do not assume a stopped profile is unreadable on disk. Stop means the process is down. The files are still files.

We do not upload `profiles.json` or the trees to a MaskWright server API in the code we audited. Updates, ads feed, and geo lookups still leave. Encryption at rest is not "nothing leaves."

## FAQ

**Are my Chromium cookies encrypted by MaskWright?**
No. Only the index is. The user-data tree is ordinary files.

**Does the default key protect a stolen laptop?**
Not if Windows is already logged in. BitLocker is the OS lock. Set `MASKWRIGHT_STORE_KEY` if you want a secret you control.

**If a later build encrypts the trees, is this page wrong?**
Yes, until we rewrite it. Until then, the lock is the index.

Only `profiles.json` is AES-256-GCM. The user-data directories, cookie JSON, and localStorage JSON are not. Plan custody for both.
