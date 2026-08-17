---
slug: facebook-page-roles-not-cookie-dumps
title: Facebook page roles, not cookie dumps
metaTitle: Facebook page roles, not cookie dumps
metaDescription: Page roles are how a real desk shares access. Cookie dumps are how a farm shares access. This how-to picks roles and refuses the dump. Local Windows notes only.
excerpt: Page roles are how a real desk shares access. Cookie dumps are how a farm shares access. This how-to picks roles and refuses the dump. Local Windows notes only.
author: Priya Nair
published: 2026-06-25
category: social-media
tags: accounts, isolation, facebook, cookies, how-to, page
readingTime: 6
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on Facebook page roles, not cookie dumps beside one social admin tab and a closed profile drawer, photographed as a working operator setup.
related: multiple-accounts-on-one-pc, facebook-ads-account-limits-are-business-facts, facebook-and-personal-profiles, reddit-sessions-on-a-local-profile, facebook-pixels-stay-in-brand-rooms, reddit-moderation-accounts, facebook-business-manager-isolation, reddit-ads-manager-isolation
---

If someone needs access to a Page, I give them a Page role or a Business Manager role. I do not export cookies. A Netscape file is a copy of the login. A role is an invite Meta can revoke.

That is the useful fact in the first screen. Cookie dumps are how farms share access. This desk is not a farm. Local Windows notes only. Authorized Pages only.

## Why a dump is the wrong onboarding kit

Cookies, localStorage, and the Chromium user-data directory are the session. MaskWright can import Netscape or JSON cookies and apply them at launch via CDP. Those files are plaintext on disk. That feature is for moving a session you own between machines you control. It is not VA onboarding.

Once a contractor has the dump, they have the login until Facebook expires it. You cannot see their clicks the way you can see a role. You cannot revoke a file that already left your disk.

[Multiple accounts on one PC](/blog/multiple-accounts-on-one-pc) is isolation for logins you run. Sharing is a platform permission problem. [Facebook Business Manager isolation](/blog/facebook-business-manager-isolation) is where those permissions live.

## What I do instead

1. Invite the person with the least role that does the job.
2. They install their own local profile on their Windows 10/11 PC. Empty cookies. [Facebook personal versus business rooms](/blog/facebook-and-personal-profiles) if they also have a personal login.
3. They sign in as themselves. 2FA on a device they hold.
4. When the contract ends, I remove the role in Meta. I do not try to "expire" a file.

Pixel helpers stay in the brand profile I run, not in a dump I mailed. [Facebook pixels stay in brand rooms](/blog/facebook-pixels-stay-in-brand-rooms).

## Limits and dumps

[Facebook ads account limits are business facts](/blog/facebook-ads-account-limits-are-business-facts). A cookie dump will not restore a disabled ads account. It can spread a disabled session to more machines. I will not write restore steps.

## Same rule on other desks

Reddit brand sessions: [Reddit sessions on a local profile](/blog/reddit-sessions-on-a-local-profile). Mod access is a mod role, not a shared password file. [Reddit moderation accounts](/blog/reddit-moderation-accounts). Reddit ads: [Reddit Ads Manager isolation](/blog/reddit-ads-manager-isolation). Invite advertisers. Do not mail cookies.

| Share this | Do not share this |
| --- | --- |
| Page role, BM partner, official staff invite | Netscape / JSON cookie export |
| Their own empty local profile | A zip of `profiles/<id>` |
| Docs in a repo they were invited to | Authenticator seeds, SMS access |

MaskWright has no team seats. There is no "give them the cloud locker." Local disk plus a platform role is the model. `profiles.json` is encrypted. The Chromium tree is not. A mailed folder is a mailed session.

## On a real Windows desk

Cookie export in MaskWright writes Netscape format. Import accepts Netscape or JSON. Both land as plaintext with a best-effort restrictive file mode that Windows may ignore. That is enough reason not to put the file on Slack, email, or a shared Drive.

If I must move my own session between two PCs I own, I carry the export on encrypted storage I control, import on the destination, then delete the file. I still prefer to sign in fresh and complete 2FA. Import is the exception for a machine I am retiring, not the default for a new person.

LocalStorage export is the same class of mistake. IndexedDB is a third store people forget. Copying `profiles/<id>` copies all three plus the extension tree. That is why "just send the folder" is how a contractor becomes you.

Windows users on a shared tower are cheaper than a mailed session. Each person gets an OS login and their own MaskWright store. Platform roles still sit on top.

## FAQ

### Cookie export exists. When is it OK?

When you are moving your own session between two PCs you control, and you store the file like a key. Not when a person needs access. Use a role.

### What if Meta has no role for that task?

Then the task may need the owner to do it, or you need a different official product (Ads Manager access, a partner agency setup). I do not fill the gap with a dump.

### Can two people sit in the same MaskWright profile on a shared tower?

They can physically. I do not recommend it. You cannot tell who clicked. Give them separate OS users at minimum, and separate platform identities when the job is theirs.

### Is localStorage export any better?

No. LocalStorage is a second cookie. Import/export exists in the product as JSON. Same rule: your machines, your session, not onboarding.

Invite. Revoke. Keep the session on the machine that belongs to the person who signed in.

More notes sit under [Social media](/blog/social-media). [Download MaskWright](/download) for the local launcher those people would use on their own PCs.
