---
slug: audit-trails-you-cannot-have-without-a-server
title: Audit trails you cannot have without a server
metaTitle: Audit trails you cannot have without a server
metaDescription: Audit trails need a server. We do not have one for profiles. This honesty page is what a local tool cannot claim, so a buyer does not expect a SIEM.
excerpt: Audit trails need a server. We do not have one for profiles. This honesty page is what a local tool cannot claim, so a buyer does not expect a SIEM.
author: Jordan Hale
published: 2026-05-28
category: privacy
tags: privacy, local, antidetect, audit
readingTime: 4
heroImagePrompt: A Windows PC on a standing desk with one monitor, open to a page on audit trails you cannot have without a server beside a closed laptop beside an external drive for local backups, photographed as a working operator setup.
related: what-leaves-this-machine, export-and-import-cookies, do-not-email-a-user-data-folder, importing-local-storage, contractor-access-done-right, backing-up-the-store, why-we-refuse-team-seats, disk-use-and-user-data
---

Audit trails need a server. We do not have one for profiles. A buyer who wants a SIEM of who launched which profile will not find it here. This honesty page exists so that expectation dies before procurement.

The note sits in [Privacy](/blog/privacy) because “we do not log you” and “we cannot prove who clicked” are the same architecture.

## What a real trail requires

A user id. Clocks you trust. An append-only log off the workstation. Integrity so the operator cannot edit the history. That is a control plane. It is also a diary of your work. [No team seats](/blog/why-we-refuse-team-seats) means we never built the roster that log would attach to.

Windows Event Logs, your EDR, your proxy provider’s dashboard: those are trails that exist without us. They are not “MaskWright launched uuid X at 14:02.”

## What we have instead

A local store. [Disk use](/blog/disk-use-and-user-data) is files on disk. mtime on folders if you go looking. [Backups](/blog/backing-up-the-store) you make. [Cookie export](/blog/export-and-import-cookies) and [localStorage import](/blog/importing-local-storage) as operator actions we do not phone home. [What leaves this machine](/blog/what-leaves-this-machine): updater and ads, not a launch ledger.

[Contractors](/blog/contractor-access-done-right) should be visible in Facebook’s user list, not in a MaskWright admin. [Do not email the folder](/blog/do-not-email-a-user-data-folder): we cannot tell you if they did.

`profiles.json` encryption does not produce an audit stream. It produces a sealed index at rest.

| Wanted | In 0.1 |
| --- | --- |
| Who launched profile X | Not recorded by us |
| Who exported cookies | Not recorded by us |
| Vendor access log | No vendor access to profiles |
| Platform user log | On the platform |

If a SOC2 questionnaire asks whether we log administrator access to customer sessions, the accurate answer is that we do not host customer sessions. There is no administrator. There is a Windows user. Your EDR can watch that user. Facebook can tell you which BM user spent. We cannot tell you which uuid launched at 14:02 last Tuesday unless you kept your own notes.

I keep a boring ops note when it matters: who sat at the PC, which profile name, which job. That note is yours. It is not a product feature. It is also not evidence we signed.

Do not buy MaskWright expecting a paper trail for a fight with a contractor. Buy platform roles and a contract. The local folder will not testify.

Pushback I hear: “we need this for SOC2.” Then you need a hosted control plane, not this app. We will not fake a launch ledger. Use platform admin logs and your EDR. A local folder will not testify in a fight with a contractor. That is the honesty page. Procurement should read it before they buy.

## FAQ

### Can I grep logs on the PC?

You can look at OS artifacts. We do not ship a product audit UI. Treat it as best-effort forensics, not compliance evidence.

### Will enterprises require this?

Some will. Those buyers should buy a cloud product with a DPA and a log. Do not force a local app to lie.

### Is “no audit trail” a privacy feature?

It is a consequence. Privacy-minded people like it. Security teams hate it. Both are reacting to the same missing server. [Download MaskWright](/download) if you wanted the missing server.

### Can I tail a log file MaskWright writes?

We do not ship a product launch ledger. OS artifacts are your forensics, not our evidence. Do not expect a SIEM row with a uuid and a timestamp signed by us.

Facebook can tell you which BM user spent. Your EDR can watch the Windows user. We cannot tell you which uuid launched at 14:02 last Tuesday unless you kept your own notes. Those notes are yours, not a product feature.

A local folder will not testify. Buy platform roles and a contract if the fight is with a contractor.

If procurement asked for a SIEM of antidetect launches, answer with the platform’s admin logs and your EDR. Do not answer with us. We cannot honestly offer that row.
