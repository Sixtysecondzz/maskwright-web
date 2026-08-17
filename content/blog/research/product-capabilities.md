# MaskWright Product Capabilities Audit

Audit date: August 16, 2026  
Sources: desktop repo `E:\windows app\maskwright`, marketing site `E:\windows app\maskwright-web`  
Method: marketing pages read, desktop TypeScript/Electron code inspected. Facts only; unverified items marked **Unknown**.

---

## 1. Platform

### Demonstrated

| Fact | Evidence |
|------|----------|
| Public download channel is **Windows x64 only** (10/11). | `E:\windows app\maskwright-web\app\download\page.tsx` states "Windows 10/11 x64" and "macOS and Linux packs are not the public channel yet." FAQ matches: `E:\windows app\maskwright-web\components\faq.tsx`. |
| Desktop app version **0.1.0**. | `E:\windows app\maskwright\apps\desktop\package.json` (`"version": "0.1.0"`). |
| NSIS installer target for Windows x64. | `E:\windows app\maskwright\apps\desktop\electron-builder.yml` (`win.target: nsis`, `arch: x64`). |
| Installer may be **unsigned**; SmartScreen warning expected. | `E:\windows app\maskwright-web\app\download\page.tsx`. |
| Build scripts exist for **macOS** (dmg, zip; x64 + arm64) and **Linux** (AppImage). | `E:\windows app\maskwright\apps\desktop\package.json` (`pack:mac`, `pack:linux`); `electron-builder.yml` mac/linux sections. |
| README describes product as "Windows (Mac-ready)". | `E:\windows app\maskwright\README.md`. |
| Electron shell **37.2.6**. | `E:\windows app\maskwright\apps\desktop\package.json`, `electron-builder.yml`. |
| Windows-specific launch behavior: `--no-sandbox`, `--use-angle=d3d11` for Chromium on win32. | `E:\windows app\maskwright\packages\browser-launch\src\launch.ts` (`chromiumDeepTellArgs`). |

### Unknown

- Whether macOS or Linux installers are published or tested end-to-end.
- Minimum supported Windows build number beyond "10/11".

---

## 2. Account / login / cloud sync / team seats

### Demonstrated

| Fact | Evidence |
|------|----------|
| **No MaskWright account, login, or sign-up** in desktop code. | No auth modules in `E:\windows app\maskwright\apps\desktop\src\main\index.ts` IPC handlers; settings UI: `NavPanels.tsx` ("No cloud sync, no accounts"). |
| **No cloud profile sync** implementation. | `ProfileStore` is local filesystem only: `E:\windows app\maskwright\packages\profile-store\src\store.ts`. |
| **No team seats** or multi-user permissions. | Marketing compare page: `E:\windows app\maskwright-web\app\compare\page.tsx` ("Not offered, by design"). No seat/team code in desktop repo. |
| Profiles are created and managed entirely via local IPC (`profiles:create`, `profiles:list`, etc.). | `E:\windows app\maskwright\apps\desktop\src\main\index.ts`. |

### Unknown

- Future roadmap for accounts or sync (not in code reviewed).

---

## 3. Profile storage and encryption at rest

### Demonstrated

| Fact | Evidence |
|------|----------|
| Store root: `{Electron userData}/maskwright-data`. | `dataRoot()` in `E:\windows app\maskwright\apps\desktop\src\main\index.ts` (`join(app.getPath('userData'), 'maskwright-data')`). |
| Layout: `profiles.json` (index) + `profiles/<uuid>/` per profile. | `E:\windows app\maskwright\packages\profile-store\src\store.ts` comments and implementation. |
| **`profiles.json` is encrypted**: AES-256-GCM envelope, scrypt key derivation (32-byte key). | `E:\windows app\maskwright\packages\profile-store\src\crypto.ts` (`encryptJson`, `decryptJson`). |
| Key material: `MASKWRIGHT_STORE_KEY` env var if set; else SHA-256 of `maskwright-store-v1:{hostname}:{username}`. | `crypto.ts` `keyMaterial()`. |
| Legacy plaintext `profiles.json` is read once and re-saved encrypted. | `store.ts` `load()`. |
| Index written with mode `0o600` (best-effort; Windows may ignore). | `store.ts` `persist()`. |
| **Per-profile browser data** (`profiles/<id>/`) holds Chromium `user-data-dir` contents, import files, extensions staging. **Not encrypted** by MaskWright code. | `launch.ts` uses `--user-data-dir=${opts.profileDir}`; no encryption on profile subdirs. |
| Cookie import file `maskwright-cookies.json`: **plaintext JSON**, mode `0o600`. | `E:\windows app\maskwright\packages\profile-store\src\cookies.ts`. |
| Local storage import file `maskwright-localstorage.json`: **plaintext JSON**. | `E:\windows app\maskwright\packages\profile-store\src\storage.ts`. |
| Proxy credentials stored inside encrypted `profiles.json` index (as part of profile records). | `ProfileRecord.proxy` in `store.ts`; not a separate secrets vault. |

### Unknown

- Whether OS-level full-disk encryption protects profile dirs on the user's machine.
- Whether Chromium's own on-disk cookie encryption (OS-dependent) applies inside profile dirs.

---

## 4. Browser engine

### Demonstrated

| Fact | Evidence |
|------|----------|
| Two profile cores: **`chromium`** (default) and **`firefox`**. | `E:\windows app\maskwright\packages\profile-store\src\types.ts` (`BrowserCore`). |
| **Target Chromium version: 131.0.6778.85** (`MASKWRIGHT_CHROMIUM_FULL_VERSION`). | `E:\windows app\maskwright\packages\fingerprint\src\index.ts`, `packages\browser-launch\src\launch.ts`; manifest `patchSeriesTarget` in `E:\windows app\maskwright\cores\manifests\chromium.json`. |
| **Custom patched Chromium** when binary present under cores path or `MASKWRIGHT_CHROMIUM_PATH`. Patches documented for process branding, TLS notes, font raster, GPU GL_VENDOR, `--load-extension`. | `cores\manifests\chromium.json`, `tools\chromium-patches\README.md`, `deep-tells.ts`. |
| **Fallback**: system Chrome or Edge if MaskWright Chromium not installed. | `launch.ts` `resolveExecutable()`; `NavPanels.tsx` Cores panel copy. |
| **Firefox path**: Camoufox preferred (`resolveCamoufoxPath()`), else stock Firefox. Camoufox installable from UI into `{userData}/cores`. | `launch.ts`, `camoufox.ts`, `index.ts` IPC `cores:installCamoufox`. |
| Marketing compare page cites "Custom Chromium 131 core". | `E:\windows app\maskwright-web\app\compare\page.tsx`. |
| Marketing homepage says "purpose-built Chromium"; does not mention Firefox/Camoufox on homepage. | `E:\windows app\maskwright-web\app\page.tsx`. |
| Chromium launches with `--remote-debugging-port` for internal CDP spoof (not exposed as user automation API). | `launch.ts` `buildChromiumArgs`. |
| Windows: unsigned custom `chrome.exe` runs with `--no-sandbox`. | `launch.ts` `chromiumDeepTellArgs` comments. |

### Unknown

- Whether the patched Chromium binary in `cores/downloads/chromium/win-x64/` in the dev tree matches a signed production release.
- JA3/JA4 effectiveness of the custom core without runtime TLS testing (code documents limitations in `deep-tells.ts`).

---

## 5. Fingerprint surfaces implemented

Fingerprint schema defined in `E:\windows app\maskwright\packages\fingerprint\src\index.ts`. Runtime application split between **CDP** (`cdp-spoof.ts`) and **MAIN-world inject script** (`inject-script.ts`), plus **Chromium prefs** (`webrtc-prefs.ts`, `geo-prefs.ts`) and **env vars** for patched core (`MASKWRIGHT_GL_VENDOR`, `MASKWRIGHT_FONT_LIST`).

| Surface | Implemented | How | Source files |
|---------|-------------|-----|--------------|
| User agent | Yes | CDP `Emulation.setUserAgentOverride`; CLI `--user-agent`; inject `navigator.userAgent` | `cdp-spoof.ts`, `launch.ts`, `inject-script.ts` |
| Client Hints / `navigator.userAgentData` | Yes | CDP `userAgentMetadata`; inject high-entropy values | `cdp-spoof.ts` `uaMetadata`, `inject-script.ts` |
| Platform, vendor | Yes | Inject + CDP | `inject-script.ts` |
| Languages / locale | Yes | CDP locale override; inject `languages`, `language` | `cdp-spoof.ts`, `inject-script.ts` |
| Timezone | Yes | CDP `Emulation.setTimezoneOverride`; env `TZ` on launch | `cdp-spoof.ts`, `launch.ts` |
| Screen (width, height, avail, colorDepth, pixelRatio) | Yes | CDP `setDeviceMetricsOverride`; inject `screen.*`, `devicePixelRatio` | `cdp-spoof.ts`, `inject-script.ts` |
| Hardware concurrency, device memory | Yes | Inject | `inject-script.ts` |
| WebGL vendor/renderer + getParameter table | Yes | Inject overrides `WEBGL_debug_renderer_info` and named params; env `MASKWRIGHT_GL_*` for patched core | `inject-script.ts`, `launch.ts`, `deep-tells.ts` |
| WebGPU (`navigator.gpu`) | Yes | Inject adapter info from fingerprint.webgpu | `inject-script.ts` |
| Canvas | Yes | Inject `toDataURL` / `toBlob` with OS-biased stable noise | `inject-script.ts` |
| Fonts (enumeration probes) | Yes | Inject allowlist; `document.fonts.check`; offsetWidth/Height fallbacks; getBoundingClientRect for font probes | `inject-script.ts` |
| Client rects / bounding rects | Yes | Inject stable noise on `getBoundingClientRect`, `getClientRects`, Range variants | `inject-script.ts` |
| Audio (OfflineAudioContext / Analyser) | Yes | Inject seeded noise (`fp.audioNoise`) | `inject-script.ts` |
| WebRTC leak control | Yes | Chromium prefs `webrtc.ip_handling_policy`; inject RTCPeerConnection filters; modes: `disabled`, `proxy`, `public`, `real` | `webrtc-prefs.ts`, `inject-script.ts`, `webrtc-filter.mjs` |
| Geolocation | Yes | CDP `setGeolocationOverride`; fingerprint.geolocation; aligned to proxy exit | `cdp-spoof.ts`, `align-exit-geo.ts`, `index.ts` `profiles:start` |
| Media devices (deviceId/groupId) | Yes | Inject stable hashed IDs from `mediaDevices.seed` | `inject-script.ts` |
| Plugins / mimeTypes | Yes | Inject OS/browser-coherent lists | `inject-script.ts` |
| Battery API | Yes | Inject desktop plugged-in BatteryManager | `inject-script.ts` |
| Network Information API | Yes | Patch connection object | `inject-script.ts` |
| Speech synthesis voices | Yes | Synthetic locale-matched voices | `inject-script.ts` |
| Permissions (notifications) | Yes | Inject prompt state | `inject-script.ts` |
| Bluetooth adapter | Yes | Inject presence | `inject-script.ts` |
| `window.chrome` | Yes | Inject for Chromium profiles | `inject-script.ts` |
| `navigator.webdriver` | Yes | Set false; `--disable-blink-features=AutomationControlled` | `inject-script.ts`, `launch.ts` |
| Do Not Track | Yes | In fingerprint schema + inject | `fingerprint\index.ts`, `inject-script.ts` |
| Max touch points | Yes | Fingerprint field (default 0) | `fingerprint\index.ts` |
| TLS JA3/JA4 | Partial / compile-time | Documented as needing patched BoringSSL tree; not JS-spoofed | `deep-tells.ts`, `tools/chromium-patches` |
| Font raster (DirectWrite) | Partial | `MASKWRIGHT_FONT_LIST` file + patch when custom core present | `launch.ts`, `deep-tells.ts` |
| Process name in Task Manager | Partial | Optional `MASKWRIGHT_ALIAS_PROCESS` hardlink; or compile-time patch | `deep-tells.ts`, `win-process-alias.ts` |

### Geo / locale alignment with proxy exit

- On profile start, `fetchExitGeo(proxy)` queries **ip-api.com** (via proxy or direct). Timezone, locale, languages, geolocation updated before launch. `E:\windows app\maskwright\apps\desktop\src\main\index.ts`.
- At CDP apply, in-browser probe to ip-api.com / geojs.io may re-align fingerprint. `cdp-spoof.ts` `probeExitGeoViaPage`, `align-exit-geo.ts`.
- Proxy check UI also uses ip-api.com through proxy. `packages\proxy\src\geo.ts`.

### Unknown

- Real-world detection resistance on commercial fingerprinting sites (no test results in repo).
- Whether all inject patches survive every Chromium minor revision without breakage.

---

## 6. Proxy support

### Demonstrated

| Fact | Evidence |
|------|----------|
| Types parsed: **http**, **https**, **socks5**. | `E:\windows app\maskwright\packages\proxy\src\types.ts`, `parse.ts`. |
| Input formats: `host:port`, `host:port:user:pass`, `user:pass@host:port`, `type://...`. | `parse.ts`. |
| **HTTP proxy auth**: MV3 extension via `buildChromeProxyExtension` (`chrome.webRequest.onAuthRequired`). | `launch.ts`, `packages\proxy\src\chrome-auth-extension.ts`. |
| **SOCKS5 auth**: username/password in SOCKS5 handshake. | `geo.ts` `socks5Handshake`. |
| Chromium `--proxy-server` uses `type://host:port` without embedded credentials. | `launch.ts` `chromiumProxyServerArg`. |
| Firefox/Camoufox: proxy via env `http_proxy`, `https_proxy`, `MASKWRIGHT_PROXY_URL`. | `launch.ts` `buildLaunchEnv`. |
| **Geo check**: exit IP, country, city, timezone, ISP via ip-api.com through proxy. | `geo.ts` `fetchProxyGeo`. |
| **Timezone/language/geo matching** on profile launch from exit geo. | `index.ts` `profiles:start`; proxy panel copy in `NavPanels.tsx`. |
| Connectivity check: **TCP connect only** (not full HTTP/SOCKS handshake). | `check.ts`. |
| Provider URL templates (IPRoyal, Smartproxy, Bright Data) for convenience; **MaskWright does not broker traffic**. | `providers.ts`. |
| Marketing: bring your own HTTP/SOCKS5; no bundled proxies. | `page.tsx`, `faq.tsx`, `compare\page.tsx`. |

### Limitations (from code comments)

- Proxy type `https` treated as HTTP forwarder; **TLS-to-proxy not implemented**. `geo.ts`.
- `checkProxy` does not validate SOCKS5 or HTTP auth success.

### Unknown

- SOCKS4 support (not in `ProxyType` enum).

---

## 7. Cloud phones / Android / mobile emulation

### Demonstrated

| Fact | Evidence |
|------|----------|
| **No cloud phone or Android emulation** code paths. | No matches in desktop packages beyond unrelated Chromium telemetry protos. |
| Fingerprint presets model **desktop** OS families (windows, macos, linux); `mobile: false` in Client Hints. | `fingerprint\index.ts`, `cdp-spoof.ts` `uaMetadata`. |
| Marketing compare: "No. Desktop profiles only." | `compare\page.tsx`. |

### Unknown

- Whether mobile UA presets are planned (not in code).

---

## 8. Automation / Playwright / Puppeteer / Selenium / RPA / window sync

### Demonstrated

| Fact | Evidence |
|------|----------|
| **No Playwright, Puppeteer, or Selenium** integration or exports. | Repo search in `E:\windows app\maskwright` (excluding node_modules). |
| **No RPA or window sync** features in UI or main process. | `compare\page.tsx` ("Not in 0.1"); no sync/RPA modules. |
| **Bulk start/stop** of selected profiles (sequential loop). | `App.tsx` `bulkStart`, `bulkStop`; `PageToolbar.tsx`. |
| Internal **CDP** used for fingerprint, cookies, localStorage, optional tab open (`openCdpTab`). | `cdp-spoof.ts`, `launch.ts`. |
| `launchTabUrl` + interval can reopen a URL in running Chromium via CDP on a timer. | `index.ts` `startLaunchTabTimer`, `openCdpTab`. |
| Anti-automation flag: `--disable-blink-features=AutomationControlled`. | `launch.ts`. |

### Unknown

- Whether external tools can attach to the ephemeral `--remote-debugging-port` (port is chosen per launch; not documented for users).

---

## 9. Cookie import/export, local storage, extensions

### Cookies

| Fact | Evidence |
|------|----------|
| Import: Netscape format or JSON array / `{ cookies: [...] }`. | `cookies.ts` `parseCookiesAuto`. |
| Export: Netscape format. | `cookies.ts` `formatNetscapeCookies`. |
| UI IPC: `profiles:importCookies`, `profiles:exportCookies`. | `index.ts`. |
| Applied at Chromium launch via CDP `Network.setCookies` (not native Chrome cookie DB on import). | `cdp-spoof.ts`, `cookies.ts` comments. |

### Local storage

| Fact | Evidence |
|------|----------|
| Import/export JSON array of `{ origin, items }`. | `storage.ts`. |
| IPC: `profiles:importLocalStorage`, `profiles:exportLocalStorage`. | `index.ts`. |
| Injected on new documents via CDP `Page.addScriptToEvaluateOnNewDocument`. | `cdp-spoof.ts`. |

### Extensions

| Fact | Evidence |
|------|----------|
| User unpacked extensions: `<profileDir>/extensions/<name>/manifest.json` copied to `.maskwright-user-ext/` and loaded with `--load-extension`. | `launch.ts` `applyProfileExtensions`. |
| Built-in per launch: spoof extension (`.maskwright-ext`), proxy auth extension (`.maskwright-proxy-auth`). | `launch.ts` `buildChromiumArgs`. |
| `--disable-features=DisableLoadExtensionCommandLineSwitch` to allow CLI extension loading. | `launch.ts`. |

### Unknown

- Firefox/Camoufox extension loading parity with Chromium (not verified in `camoufox.ts` excerpt).

---

## 10. Monetization (ads in dashboard vs tabs, bandwidth sharing)

### Demonstrated

| Fact | Evidence |
|------|----------|
| **No subscription, payment, or in-app purchase** code. | No billing modules in desktop app. |
| **No bandwidth-sharing** or residential proxy resale by MaskWright. | No honeygain/packetstream-style code; `providers.ts` states credentials stay local. |
| **Dashboard ads (operator UI)**: iframes load `https://www.maskwright.com/electron-ad-sidebar` (300x250) and `electron-ad-test` (728x90 footer). | `AdsStack.tsx`; routes `E:\windows app\maskwright-web\app\electron-ad-sidebar\route.ts`, `electron-ad-test\route.ts` embed third-party ad networks (effectivecpmnetwork.com, highperformanceformat.com, etc.). |
| **Remote ads JSON feed**: `https://maskwright.com/ads/v1/creatives.json` (override `MASKWRIGHT_ADS_URL`). | `packages\ads\src\defaults.ts`, `index.ts` `resolveAdsUrl`, `privacy\page.tsx`. |
| `AdRotator` fetches feed every 15-20s for slot rotation; provides `launchUrl`, `launchTabUrl`, `launchTabIntervalSec`. | `rotator.ts`. |
| **Profile browser tabs**: on start, optional `launchUrl` and periodic `launchTabUrl` from ads profile hooks. Default fallback `launchTabUrl` points to effectivecpmnetwork.com; hosted `creatives.json` example uses browserleaks.com. | `defaults.ts`, `hosting\website\ads\v1\creatives.json`, `index.ts` `profiles:start`. |
| Dashboard iframe components **do not** currently bind to `AdRotator` creative `clickUrl`; they use hardcoded maskwright.com ad wrapper URLs. | `AdsStack.tsx` ignores `ads` prop for src; `App.tsx` passes `ads` but `AdsStack` does not use it. |

### Unknown

- Revenue share terms with ad networks.
- Whether users can disable ads without modifying code or blocking hosts.

---

## 11. Update / telemetry / what leaves the machine

### Demonstrated

| Fact | Evidence |
|------|----------|
| **No analytics SDK** (Sentry, PostHog, etc.) in desktop source. | Grep across `E:\windows app\maskwright` app/packages. |
| **Auto-update** (packaged builds only): `electron-updater` generic provider `https://updates.maskwright.com`. | `updater.ts`; dev builds skip (`dev-skipped`). |
| **Ads feed fetch**: GET `maskwright.com/ads/v1/creatives.json` (or localhost in dev). | `rotator.ts`, `resolveAdsUrl`. |
| **Dashboard ad iframes**: load maskwright.com ad wrapper pages, which load third-party ad scripts. | `AdsStack.tsx`, web ad routes. |
| **Proxy/geo lookups**: app and launched browser may contact **ip-api.com**, **get.geojs.io** (CDP probe). | `geo.ts`, `cdp-spoof.ts` `EXIT_GEO_PROBE`. |
| **Browsing traffic**: sites user visits in profile browsers (normal browser behavior). | Stated in marketing `page.tsx` privacy ledger. |
| **External links** from app open in system browser via `shell.openExternal`. | `index.ts`. |
| Profile data, cookies, proxy creds: **not uploaded** by any MaskWright server API in code reviewed. | No upload endpoints in desktop app. |

### Unknown

- Exact payload of `electron-updater` requests (standard electron-updater behavior; not custom-logged in repo).
- Whether ad third parties receive device identifiers beyond normal web ad behavior.

---

## 12. Pricing

### Demonstrated

| Fact | Evidence |
|------|----------|
| **Free** positioning: $0 in schema.org offer, homepage, FAQ, compare page. | `page.tsx` jsonLd `price: "0"`; `faq.tsx`; `compare\page.tsx` "Local app; owned ad slots fund the product". |
| No paywall, profile caps, or seat metering in code. | No limit checks in `ProfileStore` or UI. |
| Funding model stated: optional in-app ads. | Marketing + ads package. |

### Unknown

- Long-term pricing policy (marketing only; no enforcement code).

---

## 13. Marketing claims vs code

| Marketing claim | Verdict | Notes |
|-----------------|---------|-------|
| Windows 10/11, download for Windows | **Verified** | Public channel Windows x64; build scripts exist for other OSes but not public. |
| No account, nothing synced | **Verified** | Local store only. |
| 100% free, no seats/profile caps | **Verified** in code | Ads fund product; no payment flow. |
| Profiles encrypted at rest | **Partially verified / overstated** | Only `profiles.json` index is AES-256-GCM encrypted. Per-profile Chromium dirs, `maskwright-cookies.json`, and `maskwright-localstorage.json` are plaintext JSON/files on disk. FAQ says "encrypted at rest" without this distinction. |
| No MaskWright server / no server | **Overstated** | No profile cloud, but app depends on `updates.maskwright.com`, `maskwright.com` (ads), and third-party geo/ad hosts. |
| HTTP or SOCKS5 proxy; language and timezone follow exit | **Verified** | SOCKS5 + HTTP; geo alignment on launch and proxy check. HTTPS proxy type parsed but TLS-to-proxy limited. |
| Purpose-built Chromium core | **Conditional** | Custom 131 core when installed; otherwise system Chrome/Edge with JS/CDP spoof only. |
| Separate cookies, storage, logins per profile | **Verified** | Isolated `user-data-dir` per profile id. |
| Run a batch at once | **Verified** | Bulk start/stop in UI. |
| Optional ad feed (small public JSON) | **Partially verified** | JSON feed exists and controls launch tab hooks; dashboard ads use separate hardcoded iframe URLs to maskwright.com wrappers. |
| Custom Chromium 131 (compare page) | **Verified** as target version | Fallback to stock Chrome/Edge when core missing. |
| No cloud phones / desktop only | **Verified** | |
| No RPA / window sync in 0.1 | **Verified** | |
| No bundled proxies | **Verified** | Provider templates only. |
| Privacy: ads and updates only leave machine (for MaskWright) | **Mostly verified** | Plus third-party ad/geo networks as above. |
| "SQLite profiles" (README) | **Not verified / incorrect** | Store is JSON file index (`store.ts`), not SQLite. |
| Firefox support | **In code, under-marketed** | Camoufox core; not on homepage feature list. |
| Fully offline use | **Partially true** | Core profile CRUD works offline; updates, ads, geo checks, and ad iframes need network unless blocked. |

---

## Source file index (primary)

| Area | Path |
|------|------|
| Desktop main / IPC | `E:\windows app\maskwright\apps\desktop\src\main\index.ts` |
| Profile store | `E:\windows app\maskwright\packages\profile-store\src\store.ts` |
| Encryption | `E:\windows app\maskwright\packages\profile-store\src\crypto.ts` |
| Fingerprint engine | `E:\windows app\maskwright\packages\fingerprint\src\index.ts` |
| Browser launch | `E:\windows app\maskwright\packages\browser-launch\src\launch.ts` |
| CDP spoof | `E:\windows app\maskwright\packages\browser-launch\src\cdp-spoof.ts` |
| Inject script | `E:\windows app\maskwright\packages\browser-launch\src\inject-script.ts` |
| Deep tells | `E:\windows app\maskwright\packages\browser-launch\src\deep-tells.ts` |
| Proxy | `E:\windows app\maskwright\packages\proxy\src\` |
| Ads | `E:\windows app\maskwright\packages\ads\src\` |
| Updater | `E:\windows app\maskwright\apps\desktop\src\main\updater.ts` |
| Marketing home | `E:\windows app\maskwright-web\app\page.tsx` |
| Compare | `E:\windows app\maskwright-web\app\compare\page.tsx` |
| Privacy | `E:\windows app\maskwright-web\app\privacy\page.tsx` |
| Download | `E:\windows app\maskwright-web\app\download\page.tsx` |
| FAQ | `E:\windows app\maskwright-web\components\faq.tsx` |

---

## Summary unknowns (for editorial use)

1. Production readiness of macOS/Linux packs and patched Chromium distribution.
2. Real-world fingerprint pass rates on major anti-bot stacks.
3. User-facing ability to disable ads or opt out of launch-tab ad URLs.
4. Whether Chromium profile dirs gain encryption in future versions.
5. External automation via CDP port (possible but undocumented).
