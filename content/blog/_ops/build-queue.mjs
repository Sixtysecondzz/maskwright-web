import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const authors = [
  "Avery Chen",
  "Sam Okonkwo",
  "Riley Park",
  "Jordan Hale",
  "Priya Nair",
  "Morgan Ellis",
];

const images = {
  "antidetect-browsers": [
    "blog-isolated-profiles.png",
    "blog-graphite-mask.png",
    "blog-chromium-core.png",
    "blog-windows-tower.png",
  ],
  "browser-fingerprinting": [
    "blog-fingerprint-grid.png",
    "blog-canvas-noise.png",
    "blog-browserleaks-lab.png",
    "blog-chromium-core.png",
  ],
  "browser-automation": [
    "blog-chromium-core.png",
    "blog-operator-desk.png",
    "blog-launch-checklist.png",
    "blog-graphite-mask.png",
  ],
  "multiple-accounts": [
    "blog-isolated-profiles.png",
    "blog-cookie-jar.png",
    "blog-windows-tower.png",
    "blog-local-vault.png",
  ],
  instagram: [
    "blog-operator-desk.png",
    "blog-cookie-jar.png",
    "blog-launch-checklist.png",
    "blog-isolated-profiles.png",
  ],
  tiktok: [
    "blog-operator-desk.png",
    "blog-timezone-clock.png",
    "blog-no-cloud.png",
    "blog-proxy-map.png",
  ],
  reddit: [
    "blog-proxy-map.png",
    "blog-webrtc-leak.png",
    "blog-residential-street.png",
    "blog-timezone-clock.png",
  ],
  linkedin: [
    "blog-operator-desk.png",
    "blog-launch-checklist.png",
    "blog-empty-chair.png",
    "blog-cookie-jar.png",
  ],
  facebook: [
    "blog-cookie-jar.png",
    "blog-operator-desk.png",
    "blog-browserleaks-lab.png",
    "blog-isolated-profiles.png",
  ],
  x: [
    "blog-operator-desk.png",
    "blog-isolated-profiles.png",
    "blog-launch-checklist.png",
    "blog-cookie-jar.png",
  ],
  youtube: [
    "blog-operator-desk.png",
    "blog-cookie-jar.png",
    "blog-windows-tower.png",
    "blog-launch-checklist.png",
  ],
  proxies: [
    "blog-proxy-map.png",
    "blog-webrtc-leak.png",
    "blog-timezone-clock.png",
    "blog-residential-street.png",
  ],
  "residential-proxies": [
    "blog-residential-street.png",
    "blog-proxy-map.png",
    "blog-timezone-clock.png",
    "blog-webrtc-leak.png",
  ],
  "mobile-proxies": [
    "blog-proxy-map.png",
    "blog-residential-street.png",
    "blog-no-cloud.png",
    "blog-timezone-clock.png",
  ],
  "affiliate-marketing": [
    "blog-launch-checklist.png",
    "blog-operator-desk.png",
    "blog-cookie-jar.png",
    "blog-graphite-mask.png",
  ],
  dropshipping: [
    "blog-isolated-profiles.png",
    "blog-cookie-jar.png",
    "blog-windows-tower.png",
    "blog-launch-checklist.png",
  ],
  "web-scraping": [
    "blog-browserleaks-lab.png",
    "blog-launch-checklist.png",
    "blog-operator-desk.png",
    "blog-graphite-mask.png",
  ],
  "ai-agents": [
    "blog-chromium-core.png",
    "blog-empty-chair.png",
    "blog-no-cloud.png",
    "blog-operator-desk.png",
  ],
  "browser-security": [
    "blog-encrypted-disk.png",
    "blog-local-vault.png",
    "blog-no-cloud.png",
    "blog-cookie-jar.png",
  ],
  "cloud-browsers": [
    "blog-no-cloud.png",
    "blog-empty-chair.png",
    "blog-local-vault.png",
    "blog-windows-tower.png",
  ],
  "team-collaboration": [
    "blog-empty-chair.png",
    "blog-local-vault.png",
    "blog-operator-desk.png",
    "blog-encrypted-disk.png",
  ],
  "account-management": [
    "blog-launch-checklist.png",
    "blog-local-vault.png",
    "blog-operator-desk.png",
    "blog-encrypted-disk.png",
  ],
};

const authorByCategory = {
  "antidetect-browsers": "Riley Park",
  "browser-fingerprinting": "Avery Chen",
  "browser-automation": "Morgan Ellis",
  "multiple-accounts": "Riley Park",
  instagram: "Priya Nair",
  tiktok: "Priya Nair",
  reddit: "Sam Okonkwo",
  linkedin: "Priya Nair",
  facebook: "Priya Nair",
  x: "Priya Nair",
  youtube: "Priya Nair",
  proxies: "Sam Okonkwo",
  "residential-proxies": "Sam Okonkwo",
  "mobile-proxies": "Sam Okonkwo",
  "affiliate-marketing": "Priya Nair",
  dropshipping: "Priya Nair",
  "web-scraping": "Morgan Ellis",
  "ai-agents": "Morgan Ellis",
  "browser-security": "Jordan Hale",
  "cloud-browsers": "Jordan Hale",
  "team-collaboration": "Jordan Hale",
  "account-management": "Riley Park",
};

const items = [
  ["antidetect-browsers", "what-is-an-antidetect-browser", "What an antidetect browser actually is", "what is an antidetect browser", "A sealed workshop on one PC, not a costume over ordinary Chrome."],
  ["antidetect-browsers", "antidetect-browser-vs-chrome", "Antidetect browser vs Chrome", "antidetect browser vs chrome", "Chrome is one person. A workshop is many sealed rooms."],
  ["antidetect-browsers", "antidetect-browser-vs-vpn", "Antidetect browser vs VPN", "antidetect browser vs vpn", "A VPN changes the road. The car still talks."],
  ["antidetect-browsers", "antidetect-browser-vs-incognito", "Antidetect browser vs incognito", "antidetect vs incognito", "Incognito is amnesia. It is not a second machine."],
  ["antidetect-browsers", "best-antidetect-browsers-local-vs-cloud", "Best antidetect browsers: local vs cloud", "best antidetect browsers 2026", "Compare architecture, not badge screenshots."],
  ["antidetect-browsers", "free-antidetect-browser-what-free-means", "What a free antidetect browser actually means", "free antidetect browser", "Free is the Windows app on your disk. It is not a farm license."],
  ["antidetect-browsers", "how-antidetect-browsers-work", "How antidetect browsers work", "how antidetect browsers work", "Process trees, jars, and a coherent device story."],
  ["antidetect-browsers", "antidetect-browser-for-windows", "Antidetect browser for Windows", "antidetect browser windows", "We ship Windows first because that is the bench we trust."],
  ["antidetect-browsers", "chromium-core-in-an-antidetect-browser", "The Chromium core inside an antidetect browser", "antidetect chromium", "A purpose-built core on the GPU in front of you."],
  ["antidetect-browsers", "firefox-vs-chromium-antidetect-cores", "Firefox vs Chromium antidetect cores", "firefox antidetect browser", "We study Firefox work. The public channel stays Chromium."],
  ["antidetect-browsers", "camoufox-and-firefox-antidetect-notes", "Camoufox and Firefox antidetect notes", "camoufox", "Research notes, not a second product we pretend to ship."],
  ["antidetect-browsers", "why-we-built-a-local-antidetect-browser", "Why we built a local antidetect browser", "local antidetect browser", "No landlord. No seat. A folder you can point at."],
  ["antidetect-browsers", "antidetect-browser-without-an-account", "An antidetect browser without an account", "antidetect browser no account", "If launch needs a login to us, we already failed."],
  ["antidetect-browsers", "antidetect-profile-caps-vs-local-limits", "Profile caps vs local limits", "antidetect profile limit", "A plan caps rooms. A PC caps RAM and patience."],
  ["antidetect-browsers", "vendor-lock-in-in-antidetect-tools", "Vendor lock-in in antidetect tools", "antidetect vendor lock-in", "Accounts, hosted shelves, and silent bandwidth kits."],
  ["antidetect-browsers", "antidetect-browser-for-agencies", "Antidetect browsers for agencies, and what we refuse", "antidetect browser for agencies", "Agencies need platform roles. They do not need our vault."],
  ["antidetect-browsers", "most-secure-browsers-are-not-antidetect", "The most secure browsers are still not antidetect", "most secure browser vs antidetect", "Hardened Chrome is one locked room, not many."],
  ["antidetect-browsers", "antidetect-browser-glossary", "Antidetect browser glossary", "antidetect browser terms", "Jars, seeds, exits, and rooms in plain language."],
  ["antidetect-browsers", "when-you-do-not-need-an-antidetect-browser", "When you do not need an antidetect browser", "do I need an antidetect browser", "One personal life can stay in ordinary Chrome."],
  ["antidetect-browsers", "how-to-choose-an-antidetect-browser", "How to choose an antidetect browser", "how to choose antidetect browser", "Ask where the vault lives before you ask about scores."],
  ["browser-fingerprinting", "what-is-device-fingerprinting", "What device fingerprinting actually is", "what is device fingerprinting", "A pile of signals that have to agree, not one magic hash."],
  ["browser-fingerprinting", "what-is-browser-fingerprinting", "What browser fingerprinting actually is", "what is browser fingerprinting", "The window, the worker, and the GPU all speak."],
  ["browser-fingerprinting", "canvas-fingerprinting-on-windows", "Canvas fingerprinting on a real Windows GPU", "canvas fingerprinting", "Drawing is a product of GPU, driver, and ClearType."],
  ["browser-fingerprinting", "webgl-renderer-strings", "WebGL renderer strings have to name a real chip", "webgl fingerprint", "A pretty Chrome string cannot rescue an impossible GPU."],
  ["browser-fingerprinting", "webrtc-ip-leaks", "WebRTC will name this LAN if we let it", "webrtc leak", "Treat STUN as a network test, not a media feature."],
  ["browser-fingerprinting", "audio-context-fingerprint", "What AudioContext actually hashes on Windows", "audio fingerprinting", "The graph is small and it still names the machine."],
  ["browser-fingerprinting", "font-enumeration-leaks", "Font enumeration leaks on Windows", "font fingerprinting", "Host-only families and Apple names on a Win32 story."],
  ["browser-fingerprinting", "client-rects-and-subpixels", "Client rects and the subpixel story on Windows", "getclientrects fingerprint", "Widths that no spoofed font should have."],
  ["browser-fingerprinting", "hardware-concurrency-and-cores", "Hardware concurrency and cores that could be bought", "hardwareconcurrency fingerprint", "Seed a laptop, not a joke server."],
  ["browser-fingerprinting", "screen-resolution-coherence", "Screen resolution has to fit the chassis", "screen fingerprint", "Mobile pixels on a desktop UA are a seam."],
  ["browser-fingerprinting", "user-agent-is-not-enough", "The user agent is not a disguise", "user agent spoofing", "A label on a box is not the box."],
  ["browser-fingerprinting", "timezone-language-and-proxy-country", "Timezone, language, and proxy country", "timezone proxy mismatch", "A comfortable clock in the wrong country is a leak."],
  ["browser-fingerprinting", "battery-and-media-device-ids", "Battery status and media device IDs", "battery api fingerprint", "Small sticky tells that pair rooms by accident."],
  ["browser-fingerprinting", "webgpu-and-new-fingerprint-surfaces", "WebGPU and the next fingerprint surfaces", "webgpu fingerprint", "Adapter names have to join the WebGL story."],
  ["browser-fingerprinting", "seed-versus-random-fingerprints", "Seed versus random fingerprints", "fingerprint seed", "Random every launch is its own pattern."],
  ["browser-fingerprinting", "how-we-read-browserleaks", "How we read BrowserLeaks style pages", "browserleaks", "A checklist on this box, not a score to beat."],
  ["browser-fingerprinting", "creepjs-consistency-checks", "What CreepJS consistency checks are pointing at", "creepjs", "Window versus worker, not a taste contest."],
  ["browser-fingerprinting", "pixelscan-consistency", "Pixelscan is a consistency test, not a trophy", "pixelscan", "Seams, not certification."],
  ["browser-fingerprinting", "iphey-scores-are-not-verdicts", "IPhey scores are not verdicts", "iphey trust score", "Read the fields. Ignore the addiction to a number."],
  ["browser-fingerprinting", "browserscan-walkthrough", "A BrowserScan walkthrough we actually use", "browserscan", "A second dump of the same facts."],
  ["browser-fingerprinting", "why-vpn-alone-fails-fingerprint-tests", "Why a VPN alone fails fingerprint tests", "vpn fingerprinting", "The machine keeps talking after the IP changes."],
  ["browser-fingerprinting", "client-hints-and-user-agent-data", "Client Hints and userAgentData", "client hints fingerprint", "Frozen UA with a live UA-CH is a lie."],
  ["browser-fingerprinting", "timezone-must-match-the-proxy", "Timezone has to match the proxy exit", "timezone must match proxy", "More rooms die on the clock than on canvas."],
  ["browser-fingerprinting", "deep-tell-coverage", "Deep tell coverage on a local Chromium", "browser fingerprint surfaces", "Surfaces that agree, on hardware you hold."],
  ["browser-fingerprinting", "testing-a-fingerprint-before-work", "Testing a fingerprint before any real work", "test browser fingerprint", "Contradictions first. Trophies never."],
  ["browser-fingerprinting", "new-fingerprint-same-folder", "A new fingerprint in the same folder", "new fingerprint profile", "A new story still needs its own exit."],
  ["browser-fingerprinting", "gpu-and-sandbox-flags", "GPU and sandbox flags on Windows", "chromium gpu sandbox", "Flags that keep the core honest and the box alive."],
  ["browser-fingerprinting", "fingerprint-stability-across-launches", "Fingerprint stability across launches", "stable browser fingerprint", "A real device does not grow a new GPU at lunch."],
  ["browser-automation", "browser-automation-vs-a-real-profile", "Browser automation versus a real profile", "browser automation vs antidetect", "A script is a script. Do not dress it as a customer."],
  ["browser-automation", "playwright-and-real-browser-profiles", "Playwright and real browser profiles", "playwright antidetect", "Connect to a room you understand, or use an API."],
  ["browser-automation", "puppeteer-stealth-is-not-a-profile", "Puppeteer stealth is not a profile", "puppeteer stealth", "Patches on headless are not a sealed jar."],
  ["browser-automation", "selenium-webdriver-flags", "Selenium and WebDriver flags", "selenium detection", "We will not document how to hide a driver."],
  ["browser-automation", "headed-vs-headless-detection", "Headed vs headless detection", "headless browser detection", "Missing chrome bits are real. Mouse entropy theater is not."],
  ["browser-automation", "ai-agents-in-a-browser-they-do-not-own", "AI agents in a browser they do not own", "ai agent browser", "An agent should not wear a store admin."],
  ["browser-automation", "window-sync-and-rpa-we-will-not-ship", "Window sync and RPA we will not ship", "antidetect rpa", "Launch and isolate first. Orchestras are another product."],
  ["browser-automation", "official-apis-versus-ui-bots", "Official APIs versus UI bots", "browser bot vs api", "If the task is allowed to be a bot, use the bot door."],
  ["browser-automation", "debugging-ports-and-operator-risk", "Debugging ports and operator risk", "chrome remote debugging", "Do not leave inspector open on a store admin."],
  ["browser-automation", "keyboard-timing-packs-are-theater", "Keyboard timing packs are theater", "human typing simulation", "If the job needs a person, put a person in the chair."],
  ["browser-automation", "batch-launch-is-not-a-farm", "Batch launch is not a farm", "batch browser profiles", "Bring up rooms you already named."],
  ["browser-automation", "automation-ethics-we-follow", "Automation ethics we follow", "ethical browser automation", "No account creation loops. No fake reviews."],
  ["browser-automation", "when-to-use-a-bot-account", "When to use a bot account", "bot account vs user session", "Platforms issue keys for a reason."],
  ["browser-automation", "local-scripts-outside-work-rooms", "Local scripts stay outside work rooms", "local browser scripts", "A token leak and a cookie jar should not be one incident."],
  ["browser-automation", "captcha-solvers-are-not-research", "Captcha solvers are not research", "captcha solver ethics", "A puzzle at scale is a business of pretending."],
  ["browser-automation", "playwright-vs-puppeteer-vs-selenium", "Playwright vs Puppeteer vs Selenium", "playwright vs puppeteer vs selenium", "Pick a tool for pages you own or APIs you were given."],
  ["multiple-accounts", "multiple-accounts-on-one-pc", "Multiple accounts on one PC", "multiple accounts one computer", "The machine is shared. The jars are not."],
  ["multiple-accounts", "one-machine-many-identities", "One machine, many identities", "multiple identities one pc", "Sealed process trees on hardware you already maintain."],
  ["multiple-accounts", "isolated-profiles-on-one-pc", "Isolated profiles on one PC", "isolated browser profiles", "A room is not a tab."],
  ["multiple-accounts", "cookie-jars-are-not-optional", "Cookie jars are not optional", "cookie isolation", "A fingerprint without a private jar is a costume."],
  ["multiple-accounts", "do-not-share-a-live-profile", "Do not share a live profile", "share browser profile", "A running room is an open jar."],
  ["multiple-accounts", "cloning-a-profile-safely", "Cloning a profile without cloning the person", "clone browser profile", "Stop first. Then decide what the stencil may remember."],
  ["multiple-accounts", "naming-profiles-without-leaking", "Naming profiles without leaking", "browser profile names", "Name the job, not the password."],
  ["multiple-accounts", "folders-and-tags-for-operators", "Folders and tags for operators", "organize browser profiles", "A visible floor plan. Enforcement is still you."],
  ["multiple-accounts", "when-not-to-open-a-profile", "When I do not open a profile", "when not to launch profile", "Leaving a room closed keeps jars clean."],
  ["multiple-accounts", "first-profile-checklist", "First profile checklist", "create antidetect profile", "Name, exit, clock, lab pass, then work."],
  ["multiple-accounts", "platform-roles-versus-extra-logins", "Platform roles versus extra logins", "business manager roles vs profiles", "Use the seat the site already sells."],
  ["multiple-accounts", "two-factor-stays-in-the-real-world", "Two factor stays in the real world", "2fa antidetect", "Do not zip tokens. Do not text cookie dumps."],
  ["multiple-accounts", "authorized-accounts-only", "Authorized accounts only", "legitimate multiple accounts", "A second profile is not a second citizen."],
  ["multiple-accounts", "how-accounts-get-linked", "How accounts get linked", "how websites link accounts", "Cookies, device, exit, and behavior. We only isolate the first three."],
  ["multiple-accounts", "household-ip-versus-profile-isolation", "Household IP versus profile isolation", "same ip multiple accounts", "A house can share a street. It should not share a jar."],
  ["multiple-accounts", "multiple-accounts-and-the-law", "Multiple accounts, terms, and the law", "are multiple accounts legal", "Software does not rewrite a site's rules."],
  ["instagram", "instagram-business-accounts-on-a-local-profile", "Instagram business accounts on a local profile", "manage instagram accounts antidetect", "Authorized pages. Separate jars. No invented faces."],
  ["instagram", "instagram-cookies-and-session-hygiene", "Instagram cookies and session hygiene", "instagram cookies", "The jar is how Meta remembers the room."],
  ["instagram", "instagram-meta-business-suite-isolation", "Instagram and Meta Business Suite isolation", "instagram business suite profiles", "Suite tabs do not belong in a personal jar."],
  ["instagram", "instagram-and-residential-exits", "Instagram and residential exits", "instagram residential proxy", "Match the region the brand already works in."],
  ["instagram", "instagram-content-research-without-mixing-jars", "Instagram research without mixing jars", "instagram competitor research", "Public pages in a cold room. Notes, not credentials."],
  ["instagram", "instagram-ads-manager-on-windows", "Instagram ads manager on Windows", "instagram ads manager browser", "Billing stays in the brand room."],
  ["instagram", "instagram-login-challenges-what-they-mean", "Instagram login challenges, what they mean", "instagram login checkpoint", "Complete true facts once. Do not rotate exits as a hobby."],
  ["instagram", "instagram-creator-vs-business-rooms", "Instagram creator vs business rooms", "instagram creator account isolation", "Two jobs, two temperatures."],
  ["instagram", "instagram-and-shared-device-signals", "Instagram and shared device signals", "instagram device fingerprint", "The app and the web still rhyme if you let them."],
  ["instagram", "instagram-scheduling-without-unofficial-helpers", "Instagram scheduling without unofficial helpers", "instagram scheduler safety", "Native tools or approved vendors. No mass-follow hoses."],
  ["instagram", "instagram-brand-safety-on-one-pc", "Instagram brand safety on one PC", "instagram multiple brand accounts", "One desk. Many authorized pages. No farm."],
  ["instagram", "instagram-we-will-not-teach-ban-evasion", "We will not teach Instagram ban evasion", "instagram ban evasion", "Appeal is the path. A prettier fingerprint is not."],
  ["tiktok", "tiktok-web-versus-the-app", "TikTok web versus the app", "tiktok web login", "A desktop Chromium is not a rented Android."],
  ["tiktok", "tiktok-ads-manager-isolation", "TikTok ads manager isolation", "tiktok ads manager antidetect", "Operations stay out of the research room."],
  ["tiktok", "tiktok-and-mobile-proxy-myths", "TikTok and mobile proxy myths", "tiktok mobile proxy", "A carrier ASN on desktop is a story. It is not a key."],
  ["tiktok", "tiktok-research-rooms", "TikTok research rooms", "tiktok research browser", "Public shelves. Slow notes. No login you were not given."],
  ["tiktok", "tiktok-timezone-and-region", "TikTok timezone and region", "tiktok proxy country", "The clock follows the exit the brand already uses."],
  ["tiktok", "tiktok-business-center-hygiene", "TikTok Business Center hygiene", "tiktok business center", "Roles from TikTok. Not a zipped profile."],
  ["tiktok", "tiktok-device-checks-we-can-see", "TikTok device checks we can see", "tiktok device check", "Web tells we can dump. App tells we do not fake."],
  ["tiktok", "tiktok-and-cloud-phones-are-not-us", "TikTok and cloud phones are not us", "tiktok cloud phone", "Rented Androids are a different product."],
  ["tiktok", "tiktok-creator-accounts-you-own", "TikTok creator accounts you own", "multiple tiktok accounts brand", "Own the identity on paper first."],
  ["tiktok", "tiktok-pixel-and-cookie-bleed", "TikTok pixel and cookie bleed", "tiktok pixel isolation", "Pixels are sticky. Curiosity does not belong in that jar."],
  ["tiktok", "tiktok-login-challenges", "TikTok login challenges", "tiktok login verification", "True business facts. One room. No exit hopping."],
  ["tiktok", "tiktok-we-will-not-teach-shadowban-tricks", "We will not teach TikTok shadowban tricks", "tiktok shadowban", "If the account is restricted, use the official path."],
  ["reddit", "reddit-sessions-on-a-local-profile", "Reddit sessions on a local profile", "reddit antidetect browser", "Community and brand rooms you are allowed to hold."],
  ["reddit", "reddit-and-shared-exits", "Reddit and shared exits", "reddit proxy", "Famous pools already had a fight this morning."],
  ["reddit", "reddit-moderation-accounts", "Reddit moderation accounts", "reddit mod account isolation", "Mod tools stay out of personal scrolling."],
  ["reddit", "reddit-ads-manager-isolation", "Reddit ads manager isolation", "reddit ads manager", "Billing is a financial page. Close it when you finish."],
  ["reddit", "reddit-research-versus-automation", "Reddit research versus automation", "reddit scraping", "Public threads slowly, or the official API."],
  ["reddit", "reddit-ipv6-leaks", "Reddit and IPv6 leaks", "reddit ipv6 leak", "Two homes is not a fingerprint problem."],
  ["reddit", "reddit-old-cookies-new-ip", "Old Reddit cookies on a new IP", "reddit cookie new ip", "Rotation under a login looks like theft."],
  ["reddit", "reddit-community-work-for-brands", "Reddit community work for brands", "reddit brand accounts", "Official brand accounts. No brigading."],
  ["reddit", "reddit-api-versus-headed-browsing", "Reddit API versus headed browsing", "reddit api vs browser", "Bots use keys. People use rooms."],
  ["reddit", "reddit-ip-blocks-what-we-observe", "Reddit IP blocks, what we observe", "reddit ip banned", "Patterns, not a key. We will not publish a way around a ban."],
  ["linkedin", "linkedin-company-pages-on-one-pc", "LinkedIn company pages on one PC", "linkedin multiple accounts", "Company pages you were added to through LinkedIn roles."],
  ["linkedin", "linkedin-warm-sessions-mean-calendars", "LinkedIn warm sessions mean calendars", "linkedin warm up account", "Warm is showing up as the same coherent device. Not a playlist."],
  ["linkedin", "linkedin-sales-navigator-stays-licensed", "LinkedIn Sales Navigator stays licensed", "linkedin sales navigator browser", "Paid surfaces are accounts, not public shelves."],
  ["linkedin", "linkedin-and-automation-tools-we-refuse", "LinkedIn automation tools we refuse", "linkedin automation tools", "No invite bots. Official products or a slower hand."],
  ["linkedin", "linkedin-recruiter-workflows", "LinkedIn Recruiter workflows", "linkedin recruiter antidetect", "Use the licensed seat. Candidates are people."],
  ["linkedin", "linkedin-research-on-public-pages", "LinkedIn research on public pages", "linkedin public profile research", "Signed-out pages. Notes. No shadow CRM."],
  ["linkedin", "linkedin-ads-manager-isolation", "LinkedIn ads manager isolation", "linkedin campaign manager", "The contract identity owns that room."],
  ["linkedin", "linkedin-login-challenges", "LinkedIn login challenges", "linkedin checkpoint", "True facts once. No proxy retry hobby."],
  ["linkedin", "linkedin-personal-vs-work-rooms", "LinkedIn personal vs work rooms", "linkedin personal profile isolation", "Your face does not need a forged GPU."],
  ["linkedin", "linkedin-we-will-not-scrape-inboxes", "We will not scrape LinkedIn inboxes", "linkedin inbox scrape", "Inboxes are not a dataset."],
  ["facebook", "facebook-ads-library-research-locally", "Facebook Ads Library research that stays local", "facebook ads library scrape", "Public ads, notes, no warehouse of someone else's art."],
  ["facebook", "facebook-business-manager-isolation", "Facebook Business Manager isolation", "facebook business manager antidetect", "Add people through Meta roles."],
  ["facebook", "facebook-pixels-stay-in-brand-rooms", "Facebook pixels stay in brand rooms", "facebook pixel isolation", "Debug in the account that owns the pixel."],
  ["facebook", "facebook-and-personal-profiles", "Facebook and personal profiles", "facebook personal vs business browser", "Consumer Facebook is a different temperature."],
  ["facebook", "facebook-login-checkpoints", "Facebook login checkpoints", "facebook checkpoint", "A business event. A meeting, not a fingerprint experiment."],
  ["facebook", "facebook-commerce-manager", "Facebook Commerce Manager hygiene", "facebook commerce manager", "Catalogs and payouts stay in the entity room."],
  ["facebook", "facebook-page-roles-not-cookie-dumps", "Facebook page roles, not cookie dumps", "share facebook cookies", "Onboarding is a role invite."],
  ["facebook", "facebook-ads-account-limits-are-business-facts", "Facebook ads account limits are business facts", "facebook ads account limit", "Documents, not recycled managers."],
  ["facebook", "facebook-catalogs-and-cookies", "Facebook catalogs and cookies", "facebook catalog isolation", "A catalog pixel does not belong in a research jar."],
  ["facebook", "facebook-research-vs-operations", "Facebook research vs operations", "facebook ads research", "Two jobs. Two rooms. One PC."],
  ["facebook", "facebook-and-residential-exits", "Facebook and residential exits", "facebook residential proxy", "The company region, not a costume country."],
  ["facebook", "facebook-we-will-not-recycle-business-managers", "We will not recycle Business Managers", "buy facebook business manager", "If a brand needs more accounts, they talk to the platform."],
  ["x", "x-brand-accounts-on-a-local-profile", "X brand accounts on a local profile", "manage twitter accounts antidetect", "Brand rooms you own. No engagement farm."],
  ["x", "x-ads-manager-isolation", "X ads manager isolation", "twitter ads manager browser", "Billing closed when the export finishes."],
  ["x", "x-api-versus-unofficial-helpers", "X API versus unofficial helpers", "twitter api vs bot", "If it is a bot job, pay for the API."],
  ["x", "x-research-rooms", "X research rooms", "twitter research browser", "Public posts. Light notes. No credential harvest."],
  ["x", "x-and-shared-device-tells", "X and shared device tells", "twitter fingerprint", "The same GPU story across brand rooms is still one chassis."],
  ["x", "x-login-challenges", "X login challenges", "twitter login verification", "True facts. One exit. No retry carousel."],
  ["x", "x-creator-accounts-you-own", "X creator accounts you own", "multiple twitter accounts", "Paper first. Software second."],
  ["x", "x-we-will-not-farm-engagement", "We will not farm engagement on X", "twitter engagement farm", "If honest reach is not enough, the post is the problem."],
  ["youtube", "youtube-studio-on-a-local-profile", "YouTube Studio on a local profile", "youtube studio antidetect", "Brand channels you admin through Google roles."],
  ["youtube", "youtube-brand-accounts", "YouTube brand accounts", "youtube brand account isolation", "Brand Account is a Google object. Treat it like one."],
  ["youtube", "youtube-ads-manager-isolation", "YouTube ads manager isolation", "youtube ads google ads", "Google Ads stays in the entity that pays."],
  ["youtube", "youtube-and-google-account-clusters", "YouTube and Google account clusters", "google account linking youtube", "Clusters are real. Do not add a fake graph on top."],
  ["youtube", "youtube-research-without-mixing", "YouTube research without mixing rooms", "youtube competitor research", "Public watch pages. No stolen creatives."],
  ["youtube", "youtube-login-challenges", "YouTube login challenges", "youtube verification", "Complete the challenge in the room that owns the channel."],
  ["youtube", "youtube-analytics-exports", "YouTube analytics exports", "youtube analytics export", "CSV into the brand tray. Then close."],
  ["youtube", "youtube-we-will-not-fake-watch-time", "We will not fake watch time", "youtube watch time bot", "That is fraud. This blog will not host it."],
  ["proxies", "proxies-in-an-antidetect-browser", "Proxies in an antidetect browser", "proxy antidetect browser", "You bring the line. We keep the identity on disk."],
  ["proxies", "socks5-versus-http-proxies", "SOCKS5 versus HTTP proxies", "socks5 vs http proxy", "A checklist, not a brand preference."],
  ["proxies", "bring-your-own-proxy-ethic", "The bring-your-own proxy ethic", "byo proxy", "We will not take a cut of the exit."],
  ["proxies", "checking-exit-ip-before-launch", "Checking the exit IP before launch", "check proxy ip", "A public IP page is part of opening the shop."],
  ["proxies", "geo-matching-proxy-to-fingerprint", "Geo matching a proxy to a fingerprint", "proxy fingerprint match", "City, clock, and language are one triangle."],
  ["proxies", "sticky-sessions-and-why-they-matter", "Sticky sessions, and why a login hates a new door", "sticky proxy", "Sticky time is part of the profile."],
  ["proxies", "rotating-proxies-break-logins", "Rotating proxies break logins", "rotating proxy accounts", "A new door under old cookies looks like theft."],
  ["proxies", "proxy-auth-formats", "Proxy auth formats we accept", "proxy user pass format", "HTTP and SOCKS5 strings, pasted locally."],
  ["proxies", "dns-leaks-on-windows", "DNS leaks on Windows", "dns leak windows proxy", "Watch where the names resolve."],
  ["proxies", "ipv6-leaks-we-still-see", "IPv6 leaks we still see", "ipv6 leak proxy", "v4 page clean, v6 house open."],
  ["proxies", "webrtc-disabled-still-check-stun", "WebRTC disabled, and I still check STUN", "webrtc disabled leak", "Toggles lie. Candidate lists do not."],
  ["proxies", "proxy-plus-cookies", "Proxy plus cookies", "proxy cookies session", "The exit and the jar have to stay a pair."],
  ["proxies", "latency-and-profile-feel", "Latency and how a profile feels", "proxy latency browsing", "A distant exit makes a local core feel rented."],
  ["proxies", "failover-when-a-peer-dies", "Failover when a peer dies", "proxy failover", "Rest, then a coherent backup. Not a banned-identity carousel."],
  ["proxies", "provider-templates-without-lock-in", "Provider templates without lock-in", "proxy provider template", "A paste format is not a partnership."],
  ["proxies", "what-we-refuse-to-log-about-proxies", "What we refuse to log about proxies", "proxy logging privacy", "Endpoints never leave this app toward us."],
  ["residential-proxies", "what-are-residential-proxies", "What residential proxies are", "what are residential proxies", "Household-looking exits, with hallway traffic you do not see."],
  ["residential-proxies", "residential-versus-datacenter-proxies", "Residential versus datacenter proxies", "residential vs datacenter proxies", "Consistency versus fame. Neither is a costume for forbidden work."],
  ["residential-proxies", "isp-proxies-on-a-local-profile", "ISP proxies on a local profile", "isp proxies", "Stable ASNs for brands that already live in that region."],
  ["residential-proxies", "residential-proxy-ethics", "Residential proxy ethics", "ethical residential proxies", "Consenting networks. No stolen wifi stories."],
  ["residential-proxies", "sticky-residential-for-logins", "Sticky residential for logins", "sticky residential proxy", "Logins want a door that stays put."],
  ["residential-proxies", "residential-pools-get-tired", "Residential pools get tired", "residential proxy quality", "Shared peers collect other people's mornings."],
  ["residential-proxies", "residential-versus-vpn", "Residential proxies versus a VPN", "residential proxy vs vpn", "A VPN is usually one identity for the whole PC."],
  ["residential-proxies", "how-to-test-a-residential-exit", "How to test a residential exit", "test residential proxy", "IP page, STUN, DNS, then the clock."],
  ["residential-proxies", "residential-proxies-and-timezone", "Residential proxies and timezone", "residential proxy timezone", "Paris packets with a Sydney clock fail first."],
  ["residential-proxies", "shared-residential-subnets", "Shared residential subnets", "shared residential ip", "You are renting a hallway."],
  ["residential-proxies", "residential-proxies-we-do-not-sell", "Residential proxies we do not sell", "buy residential proxies antidetect", "Bring your own. Keep us honest."],
  ["residential-proxies", "residential-proxies-for-storefronts", "Residential proxies for storefronts", "residential proxy ecommerce", "Match the warehouse city the business already uses."],
  ["mobile-proxies", "what-are-mobile-proxies", "What mobile proxies are", "what are mobile proxies", "Carrier exits. Often CGNAT. Sometimes useful."],
  ["mobile-proxies", "mobile-4g-proxies", "Mobile 4G proxies on a desktop profile", "4g mobile proxies", "A phone ASN in a Windows Chromium is a mixed story."],
  ["mobile-proxies", "mobile-proxy-versus-cloud-phone", "Mobile proxy versus a cloud phone", "mobile proxy vs cloud phone", "An exit is not a handset image in a rack."],
  ["mobile-proxies", "mobile-asn-on-a-desktop-browser", "A mobile ASN on a desktop browser", "mobile ip desktop browser", "UA, screen, and GPU still say PC."],
  ["mobile-proxies", "mobile-proxies-and-tiktok-myths", "Mobile proxies and TikTok myths", "mobile proxy tiktok", "We will not sell a magic carrier key."],
  ["mobile-proxies", "mobile-sticky-sessions", "Mobile sticky sessions", "sticky mobile proxy", "Carrier handoffs already move. Do not add a rotator."],
  ["mobile-proxies", "mobile-versus-residential", "Mobile versus residential proxies", "mobile vs residential proxies", "Pick for the job, not for a forum rumor."],
  ["mobile-proxies", "carrier-grade-nat-and-shared-exits", "Carrier-grade NAT and shared exits", "cgnat proxy", "You share the hallway with a neighborhood."],
  ["mobile-proxies", "mobile-proxies-for-ads-research", "Mobile proxies for ads research", "mobile proxy ads research", "Only for regions you are allowed to discuss."],
  ["mobile-proxies", "mobile-proxies-we-do-not-bundle", "Mobile proxies we do not bundle", "antidetect mobile proxies", "No default endpoint in a new profile."],
  ["affiliate-marketing", "affiliate-ops-without-a-cloud-seat", "Affiliate ops without a cloud seat", "affiliate marketing antidetect", "Allowed programs. No invented shoppers."],
  ["affiliate-marketing", "affiliate-disclosures-still-apply", "Affiliate disclosures still apply", "affiliate disclosure", "A local browser does not make a paid post organic."],
  ["affiliate-marketing", "affiliate-dashboard-isolation", "Affiliate dashboard isolation", "affiliate network dashboard", "Pixels do not belong in a client ads room."],
  ["affiliate-marketing", "affiliate-self-clicks-are-fraud", "Affiliate self clicks are fraud", "affiliate fraud self click", "A stack of rooms is still you."],
  ["affiliate-marketing", "affiliate-locale-is-not-a-proxy-trick", "Affiliate locale is not a proxy trick", "affiliate geo proxy", "A proxy is not a license."],
  ["affiliate-marketing", "affiliate-creatives-and-download-trays", "Affiliate creatives and download trays", "affiliate creative files", "Campaign ids do not sit next to packing slips."],
  ["affiliate-marketing", "affiliate-networks-and-multiple-brands", "Affiliate networks and multiple brands", "multiple affiliate accounts", "Documents, not a new person in a profile."],
  ["affiliate-marketing", "affiliate-research-rooms", "Affiliate research rooms", "affiliate landing page research", "Public pages. Official previews. No self conversion tests."],
  ["affiliate-marketing", "affiliate-extensions-we-refuse", "Affiliate extensions we refuse", "affiliate cloaking extension", "Tools that hide clicks are out."],
  ["affiliate-marketing", "affiliate-reporting-hygiene", "Affiliate reporting hygiene", "affiliate reporting", "Open, export, close. Payout pages are financial pages."],
  ["dropshipping", "dropshipping-stores-on-one-pc", "Dropshipping stores on one PC", "dropshipping multiple stores", "Brands you are allowed to run. Separate rooms."],
  ["dropshipping", "supplier-portals-vs-retail-admin", "Supplier portals vs retail admin", "supplier portal isolation", "Wholesale cookies do not belong in checkout admin."],
  ["dropshipping", "marketplace-one-identity-rules", "Marketplace one-identity rules", "amazon multiple seller accounts", "A second profile is not a second legal entity."],
  ["dropshipping", "product-research-in-a-cold-room", "Product research in a cold room", "dropshipping product research", "Public catalogs. No stress tests on someone else's cart."],
  ["dropshipping", "payment-and-tax-tabs-stay-in-entity", "Payment and tax tabs stay in the entity", "store payout isolation", "Do not copy numbers across forbidden duplicates."],
  ["dropshipping", "shipping-extensions-per-store", "Shipping extensions per store", "shipping addon isolation", "Repeat a boring install. Do not share a plugin id."],
  ["dropshipping", "customer-data-never-in-research", "Customer data never goes in research", "ecommerce data isolation", "Exports stay in the brand tray."],
  ["dropshipping", "dropshipping-ads-accounts", "Dropshipping ads accounts", "dropshipping facebook ads", "The entity that pays owns the room."],
  ["dropshipping", "clone-a-store-stencil-not-a-session", "Clone a store stencil, not a session", "clone ecommerce profile", "Empty cookies. Keep the layout."],
  ["dropshipping", "dropshipping-we-will-not-multiply-seller-ids", "We will not multiply seller IDs", "multiple marketplace accounts", "Form the company on paper first."],
  ["web-scraping", "scraping-ethics-we-follow", "The scraping ethics we follow", "ethical web scraping", "Public pages slowly. Locks stay locked."],
  ["web-scraping", "robots-txt-and-terms-come-first", "robots.txt and terms come first", "robots.txt scraping", "A coherent fingerprint does not turn a bot into a guest."],
  ["web-scraping", "official-apis-versus-headed-collection", "Official APIs versus headed collection", "scraping api vs browser", "Pay for the feed when they sell a feed."],
  ["web-scraping", "public-pages-slowly", "Collect public pages slowly", "slow scraping", "A person does not request 200 URLs in a minute."],
  ["web-scraping", "rate-limits-are-not-a-puzzle", "Rate limits are not a puzzle", "scrape rate limit", "Slow down, switch to an API, or stop."],
  ["web-scraping", "captchas-are-a-stop-sign", "Captchas are a stop sign", "captcha scraping", "No farms. No solvers pasted into MaskWright."],
  ["web-scraping", "user-agent-honesty-in-research", "User agent honesty in research", "scraper user agent", "Do not spoof Googlebot."],
  ["web-scraping", "storing-research-files", "Storing research files", "scrape data storage", "A tray with a delete date."],
  ["web-scraping", "facebook-ads-library-notes", "Facebook Ads Library notes", "facebook ads library research", "Headlines into a brief. Not a mirror of the art."],
  ["web-scraping", "scraping-behind-login-is-not-research", "Scraping behind a login is not research", "scrape behind login", "Auth walls are not public shelves."],
  ["web-scraping", "playwright-for-pages-you-own", "Playwright for pages you own", "playwright scraping own site", "Load test your shop, not theirs."],
  ["web-scraping", "anti-bot-pages-and-official-channels", "Anti-bot pages and official channels", "cloudflare scraping ethics", "A block is an answer."],
  ["web-scraping", "personal-data-and-collection", "Personal data and collection", "scraping personal data", "If you might be a controller, stop."],
  ["web-scraping", "we-will-not-hide-a-scraper", "We will not hide a scraper", "undetectable scraper", "Makeup for a forbidden loop is not a note we will write."],
  ["ai-agents", "ai-agents-need-a-browser-they-do-not-own", "AI agents need a browser they do not own", "ai agent browser", "Do not seat the agent in the store admin."],
  ["ai-agents", "agent-browsers-versus-operator-profiles", "Agent browsers versus operator profiles", "agent browser vs antidetect", "A robot runtime is not a vault."],
  ["ai-agents", "persistent-sessions-and-agent-risk", "Persistent sessions and agent risk", "ai agent cookies", "Months of cookies in a cloud agent is a second landlord."],
  ["ai-agents", "tool-use-without-wearing-a-store-login", "Tool use without wearing a store login", "ai agent tools browser", "Give the agent a tool, not a costume."],
  ["ai-agents", "local-agents-on-windows", "Local agents on Windows", "local ai agent browser", "If the agent stays on this PC, you can unplug it."],
  ["ai-agents", "cloud-agent-browsers-hold-your-cookies", "Cloud agent browsers hold your cookies", "cloud browser ai agent", "The jar sits on a network you do not run."],
  ["ai-agents", "agents-and-official-apis", "Agents and official APIs", "ai agent api", "Prefer a key over a headed impersonation."],
  ["ai-agents", "agents-should-not-impersonate-customers", "Agents should not impersonate customers", "ai agent fake user", "A puppet that claims to be a shopper is fraud adjacent."],
  ["ai-agents", "evaluating-agent-browser-products", "Evaluating agent browser products", "best agent browser", "Ask who holds state when the demo ends."],
  ["ai-agents", "maskwright-is-not-an-agent-runtime-yet", "MaskWright is not an agent runtime yet", "maskwright automation", "0.1 is launch and isolate. Say that out loud."],
  ["browser-security", "browser-security-versus-antidetect", "Browser security versus antidetect", "secure browser vs antidetect", "Locking one room is not sealing many."],
  ["browser-security", "profile-encryption-at-rest", "Profile encryption at rest", "encrypted browser profiles", "The store wraps the room. Downloads may not."],
  ["browser-security", "what-leaves-this-machine", "What leaves this machine", "antidetect telemetry", "Version check, optional ad feed, and the sites you open."],
  ["browser-security", "privacy-policy-in-practice", "Privacy policy in practice", "maskwright privacy", "The short list has to match the process list."],
  ["browser-security", "extensions-inside-a-profile", "Extensions inside a profile", "browser extension isolation", "An extension is part of the device story."],
  ["browser-security", "downloads-folder-discipline", "Downloads folder discipline", "browser downloads isolation", "A sealed room can still drop files on a shared desk."],
  ["browser-security", "cookie-hygiene", "Cookie hygiene on a local profile", "cookie hygiene", "Memory, not a shortcut between identities."],
  ["browser-security", "local-storage-is-a-second-cookie", "Local storage is a second cookie", "localstorage isolation", "Workers and IDB remember you too."],
  ["browser-security", "if-a-vendor-is-breached", "If a vendor is breached", "antidetect breach", "We cannot dump a vault we never held."],
  ["browser-security", "update-channel-habits", "Update channel habits", "browser update hygiene", "Current cores. Quiet Mondays. No half upgraded fleet."],
  ["browser-security", "malware-and-unwanted-kits", "Malware and unwanted kits", "unwanted software antidetect", "No silent nodes. No drivers we cannot name."],
  ["browser-security", "why-we-dropped-bandwidth-sharing", "Why we dropped bandwidth sharing", "bandwidth sharing sdk", "Your uplink is not inventory."],
  ["cloud-browsers", "what-is-a-cloud-browser", "What a cloud browser is", "what is a cloud browser", "A tab in someone else's rack."],
  ["cloud-browsers", "cloud-browser-risk", "The risk in a browser you do not hold", "cloud browser security", "A spare copy of every session you care about."],
  ["cloud-browsers", "cloud-phones-are-not-our-product", "Cloud phones are not our product", "cloud phone antidetect", "Rented Androids solve a different job."],
  ["cloud-browsers", "cloud-phones-versus-local-windows", "Cloud phones versus local Windows", "cloud phone vs antidetect browser", "Handset image versus a GPU you can see."],
  ["cloud-browsers", "data-residency-is-your-disk", "Data residency is your disk", "browser data residency", "No region picker. NTFS and BitLocker."],
  ["cloud-browsers", "why-we-do-not-sync-profiles", "Why we do not sync profiles", "antidetect sync", "Sync is a second copy on a machine you do not hold."],
  ["cloud-browsers", "why-we-stay-local", "Why we stay local", "local first antidetect", "The reasoning, not a slogan."],
  ["cloud-browsers", "rented-androids-and-identity", "Rented Androids and identity", "android cloud phone identity", "The rack still has a timing story."],
  ["cloud-browsers", "cloud-browser-for-automation-tradeoffs", "Cloud browsers for automation, the tradeoffs", "cloud browser playwright", "Convenient. Also a landlord of the jar."],
  ["cloud-browsers", "who-holds-the-cookie-jar", "Who holds the cookie jar", "cloud browser cookies", "If you cannot point at a folder, you do not hold it."],
  ["cloud-browsers", "offline-operator-days", "Offline operator days", "offline antidetect browser", "If we never connect to us, profiles still launch."],
  ["cloud-browsers", "windows-first-on-purpose", "Windows first, on purpose", "windows antidetect browser", "The machine operators already trust."],
  ["team-collaboration", "why-we-refuse-team-seats", "Why we refuse team seats", "antidetect team seats", "A seat is permission to wear someone else's cookies."],
  ["team-collaboration", "team-features-we-will-not-ship", "Team features we will not ship", "antidetect collaboration", "No pale copy of a cloud lobby."],
  ["team-collaboration", "sharing-profiles-is-sharing-cookies", "Sharing profiles is sharing cookies", "share antidetect profile", "A zip file is a worse team plan."],
  ["team-collaboration", "platform-roles-beat-shared-vaults", "Platform roles beat shared vaults", "business manager seats", "Let the site issue the chair."],
  ["team-collaboration", "contractor-access-done-right", "Contractor access done right", "contractor ad account access", "Invites, not USB sticks."],
  ["team-collaboration", "agencies-and-local-vaults", "Agencies and local vaults", "agency antidetect", "Walk a colleague through a meeting. Do not sync the jar."],
  ["team-collaboration", "do-not-email-a-user-data-folder", "Do not email a user-data folder", "send browser profile", "That folder is a keyring."],
  ["team-collaboration", "audit-trails-you-cannot-have-without-a-server", "Audit trails you cannot have without a server", "antidetect audit log", "We refused the server. We refuse the fake log too."],
  ["team-collaboration", "one-operator-one-pc", "One operator, one PC", "solo antidetect operator", "The product we chose to be."],
  ["team-collaboration", "when-a-company-needs-a-different-product", "When a company needs a different product", "antidetect for teams", "If you need chairs, buy a chair product. Not a pale us."],
  ["account-management", "account-management-on-a-local-browser", "Account management on a local browser", "account management antidetect", "Authorized logins. Clean stops. No seat meter."],
  ["account-management", "operator-daily-workflow", "Operator daily workflow", "antidetect daily workflow", "Blocks, not a pile of open rooms."],
  ["account-management", "stopping-a-profile-cleanly", "Stop a profile like you mean it", "close antidetect profile", "Flush the jar. Do not murder the process first."],
  ["account-management", "backing-up-the-store", "Back up the local store on purpose", "backup antidetect profiles", "A rest copy when every room is stopped."],
  ["account-management", "export-and-import-cookies", "Export and import cookies without mixing rooms", "import cookies antidetect", "A keyring you chose to write to disk."],
  ["account-management", "importing-local-storage", "Importing local storage", "import localstorage", "A second cookie. Treat it like one."],
  ["account-management", "disk-use-and-user-data", "Disk use and user-data", "antidetect disk space", "Cache is not free. You decide what to keep."],
  ["account-management", "running-many-windows-processes", "Running many Windows processes", "multiple chromium processes", "RAM, heat, and names you can still recite."],
  ["account-management", "no-cloud-sync-means-you-back-up", "No cloud sync means you back up", "local profile backup", "The chore is the price of no landlord."],
  ["account-management", "ads-in-the-dashboard-not-in-your-tabs", "Ads in the dashboard, not in your tabs", "antidetect app ads", "Owned chrome. Not inventory inside a marketplace tab."],
  ["account-management", "free-app-owned-ad-slots", "A free app with owned ad slots", "free antidetect monetization", "We sell a rectangle we draw. Not your uplink."],
  ["account-management", "first-week-with-maskwright", "First week with MaskWright", "maskwright getting started", "One lab room. One real room. Then a habit."],
];

function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20260501);
const start = new Date("2026-05-01T12:00:00Z");
const end = new Date("2026-08-16T12:00:00Z");
const days = [];
for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
  days.push(d.toISOString().slice(0, 10));
}

const counts = days.map((date) => {
  const dow = new Date(`${date}T12:00:00Z`).getUTCDay();
  const base = dow === 0 ? 1 : dow === 6 ? 2 : 3;
  const roll = rand();
  if (roll < 0.12) return 0;
  if (roll < 0.28) return Math.max(0, base - 2);
  if (roll < 0.55) return base - 1;
  if (roll < 0.82) return base;
  return base + 1;
});

let capacity = counts.reduce((a, b) => a + b, 0);
while (capacity < items.length) {
  const i = Math.floor(rand() * counts.length);
  if (counts[i] < 5) {
    counts[i] += 1;
    capacity += 1;
  }
}
while (capacity > items.length) {
  const i = Math.floor(rand() * counts.length);
  if (counts[i] > 0) {
    counts[i] -= 1;
    capacity -= 1;
  }
}

const dates = [];
days.forEach((date, i) => {
  for (let n = 0; n < counts[i]; n += 1) dates.push(date);
});

const byCategory = new Map();
const queue = items.map(([category, slug, title, keyword, angle], index) => {
  const list = byCategory.get(category) ?? [];
  list.push(slug);
  byCategory.set(category, list);
  const pool = images[category];
  const authorPool = [authorByCategory[category], authors[index % authors.length]];
  return {
    slug,
    title,
    keyword,
    intent: /what|how|why|vs|versus/.test(keyword) ? "informational" : "commercial-investigation",
    category,
    author: authorPool[index % 2],
    date: dates[index],
    cluster: category,
    angle,
    images: [pool[index % pool.length], pool[(index + 1) % pool.length], pool[(index + 2) % pool.length]],
    related: [],
  };
});

for (const post of queue) {
  const siblings = byCategory.get(post.category).filter((slug) => slug !== post.slug);
  const others = queue
    .filter((item) => item.category !== post.category)
    .map((item) => item.slug);
  const related = [];
  for (let i = 0; i < 5 && i < siblings.length; i += 1) {
    related.push(siblings[(queue.indexOf(post) + i) % siblings.length]);
  }
  related.push(others[Math.floor(rand() * others.length)]);
  related.push(others[Math.floor(rand() * others.length)]);
  post.related = [...new Set(related)].slice(0, 7);
}

const keywords = queue.map((post) => ({
  keyword: post.keyword,
  slug: post.slug,
  category: post.category,
  intent: post.intent,
  opportunity: [
    "instagram",
    "tiktok",
    "reddit",
    "linkedin",
    "facebook",
    "web-scraping",
    "cloud-browsers",
  ].includes(post.category)
    ? "high"
    : "medium",
  competitorCoverage: "gologin+multilogin topic class, original MaskWright angle",
}));

const clusters = [...byCategory.entries()].map(([category, slugs]) => ({
  category,
  pillar: slugs[0],
  slugs,
}));

const calendar = {};
for (const post of queue) {
  calendar[post.date] = calendar[post.date] ?? [];
  calendar[post.date].push(post.slug);
}

const linking = queue.map((post) => ({
  slug: post.slug,
  related: post.related,
  category: `/blog/category/${post.category}`,
  product: ["/download", "/compare"],
}));

const dir = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(dir, "queue.json"), JSON.stringify(queue, null, 2));
writeFileSync(join(dir, "keywords.json"), JSON.stringify(keywords, null, 2));
writeFileSync(join(dir, "clusters.json"), JSON.stringify(clusters, null, 2));
writeFileSync(join(dir, "calendar.json"), JSON.stringify(calendar, null, 2));
writeFileSync(join(dir, "linking-map.json"), JSON.stringify(linking, null, 2));
writeFileSync(
  join(dir, "seo-audit.md"),
  [
    "# SEO audit (pre-publish)",
    "",
    `- Planned articles: ${queue.length}`,
    `- Categories: ${byCategory.size}`,
    `- Authors: ${authors.length}`,
    `- Window: 2026-05-01 to 2026-08-16`,
    `- Days with at least one post: ${Object.keys(calendar).length}`,
    "",
    "## Competitor gaps we cover on purpose",
    "",
    "- Local vault versus cloud locker (they underwrite this).",
    "- Windows GPU, fonts, client rects, WebGPU (they stay generic).",
    "- BYO proxy ethic and no bandwidth kit (they upsell exits).",
    "- Official APIs and refused ban-evasion (they rank on evasion intent).",
    "- Team seats we will not ship (they sell seats).",
    "- Cloud phones we will not ship (they filled July and August with reviews).",
    "",
    "## Risks",
    "",
    "- Thin near-duplicate social posts. Each platform note must use a different opening and a different table.",
    "- Lab-page posts must not become pass-the-test guides.",
    "- Internal links to unpublished slugs 404 until the wave lands. Publish clusters together.",
    "",
    "## Next QA",
    "",
    "- Word count >= 1200",
    "- Zero em dashes and en dashes",
    "- 2-4 images with alt and caption",
    "- 3-8 body links plus category and product",
    "- Unique first 40 words across the corpus",
    "",
  ].join("\n"),
);

console.log(`queue ${queue.length} days ${Object.keys(calendar).length}`);
