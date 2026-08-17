---
slug: do-not-email-a-user-data-folder
title: Do not email a user-data folder
metaTitle: Do not email a user-data folder on the operator disk
metaDescription: Do not email a Chromium user-data directory. That folder is a live session. This how-to is the short version of a very expensive mistake. Authorized work only.
excerpt: Do not email a Chromium user-data directory. That folder is a live session. This how-to is the short version of a very expensive mistake. Authorized work only.
author: Jordan Hale
published: 2026-06-11
category: privacy
tags: privacy, local, how-to, send, browser
readingTime: 4
heroImagePrompt: A Windows laptop on a kitchen table after hours, open to a page on do not email a user-data folder beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, audit-trails-you-cannot-have-without-a-server, contractor-access-done-right, export-and-import-cookies, why-we-refuse-team-seats, importing-local-storage, offline-operator-days, backing-up-the-store
---

Do not email a Chromium user-data directory. That folder is a live session. Zip, Drive, Slack, a USB left on a desk: same mistake. This how-to is the short version of an expensive habit.

The page lives in [Privacy](/blog/privacy) because a mailed folder is a mailed login.

## What is in the folder

Cookies, [localStorage import files](/blog/importing-local-storage), IndexedDB, cache, extensions, sometimes saved passwords, sometimes download history. MaskWright’s `profiles/<uuid>/` is that tree. `maskwright-cookies.json` is plaintext. `profiles.json` is AES-256-GCM, and you should not email that either. It holds proxy passwords.

[Export cookies](/blog/export-and-import-cookies) is a smaller gun, still a gun. Use it to move a login you own between machines you own. Do not paste it into chat.

## What to do instead

[Contractor access](/blog/contractor-access-done-right): platform roles. [No team seats](/blog/why-we-refuse-team-seats): we will not launder the zip into a “share” button. [Backing up the store](/blog/backing-up-the-store): copy to a volume you control, not to Gmail. [Offline](/blog/offline-operator-days) is not an excuse to mail the folder to yourself at the hotel.

[What leaves this machine](/blog/what-leaves-this-machine): we do not upload it. You can still upload it. [Audit trails we cannot have](/blog/audit-trails-you-cannot-have-without-a-server): we will not be able to tell you who emailed it.

| Channel | OK for user-data? |
| --- | --- |
| Encrypted disk you hold | Backup, yes |
| Email / Slack / Drive link | No |
| Platform invite | Yes, that is access |
| USB in a backpack | Treat as a key, not as a theme |

A story I have heard too often: someone zips `AppData`, mails it to a VA, the VA logs in from another country, the site challenges, the owner pastes 2FA into chat, and now the VA has the folder and the phone codes. That is a full takeover. Platform roles exist to avoid it.

Outlook and Gmail will happily send a 2GB zip until they bounce. Drive links last forever in a shared folder you forgot. Slack retains files. USB copies survive after the contractor is gone. Treat every channel as permanent.

If you needed the profile on a second PC you own, carry an encrypted disk, restore, and expect a challenge. That is still you. Mail is not you.

Also do not paste Netscape exports into a ticket with MaskWright or with a proxy vendor. We do not need your cookies to debug a launch flag.

Pushback I hear: “it is encrypted zip.” The recipient still has the session. Slack still retains the file. Drive links still last. USB copies still survive after the contractor is gone. Platform roles exist so you never send the tree. If you needed a second PC you own, carry the disk yourself. Mail is not a restore channel.

## FAQ

### What if the zip is passworded?

Better than nothing. The recipient still has a live session. So does anyone who screenshots the password. Prefer roles.

### Can I send only cookies, not the whole tree?

Still a session. Still no.

### Does MaskWright warn me before I copy the folder?

No. Explorer will copy anything. [Download MaskWright](/download) does not include a nanny. This page is the nanny.

### What if I password the zip and send the password in a second channel?

Better than a naked zip. The recipient still has a live session. Slack still retains files. Use a platform role. If you needed a second PC you own, carry the disk.

Outlook will bounce a huge zip. Drive links last forever. Slack retains files. USB copies survive after the contractor is gone. Treat every channel as permanent. A password on the zip is not a role.

Do not paste Netscape exports into a support ticket either. We do not need your cookies to debug a launch flag.

A password on the zip is not a role. The recipient still has the login until it dies.

If the sentence starts with “can you send me the profile,” the answer is no. Send a role, or sit at the PC. The folder stays on the disk that is supposed to hold it.
