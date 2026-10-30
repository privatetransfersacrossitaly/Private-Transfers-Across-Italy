# Production domain, canonical, sitemap and indexing — audit and preparation

**Date:** 29 October 2026
**Production origin:** `https://privatetransfersacrossitaly.com` (non-`www`)
**Status:** the application is ready. The **domain is not** — it currently
serves a parked page that blocks all crawling, and the host performs none of
the required redirects.

Nothing was committed, pushed or deployed.

---

## 1. Initial audit, route by route

### 1a. What the repository was doing

Every URL the site emits already came from one place. That was the good news,
and it meant the domain change touched three files rather than a hundred and
thirty.

| Thing inspected | Found | How checked |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Unset.** One use, `lib/site.ts:10`, falling back to `http://localhost:3000` | grep across the repo; no `.env` file exists |
| `.env.example` | Placeholder `https://www.your-domain.com` — and `www`, which contradicts the chosen origin | read |
| `metadataBase` | Set in both root layouts from `siteUrl` | `app/(en)/layout.tsx:36`, `app/(it)/layout.tsx:36` |
| Page metadata | 128 pages, all through `pageMetadata()`; 2 homepages through `homeMetadata()` | grep: no page writes its own canonical, none takes a URL as an argument |
| Canonical source | `urlFor(id, locale)` from the route registry | `lib/metadata.ts:36` |
| hreflang source | `alternatesFor(id)` — `en`, `it`, `x-default`→`en` | `lib/routes.ts:743` |
| `robots` directives | Site default `index, follow`; `noindex, nofollow` on exactly 6 pages (the policy drafts) and the CRM | grep, then verified in served HTML |
| `X-Robots-Tag` | `noindex, nofollow` on `/crm/:path*` only | `next.config.ts:23`; verified in the response headers |
| `app/robots.ts` | `allow: /`, absolute sitemap URL | read, then fetched |
| `app/sitemap.ts` | Built from `publishedPages()`; **one hardcoded `lastModified` for all 116 URLs** | read |
| Route registry | 58 page ids × 2 languages; 55 published, 3 drafts | `lib/routes.ts` |
| Localhost / preview / obsolete hosts | **One** occurrence in all of `app`, `lib`, `components`, `content` — the fallback itself | grep for `localhost`, `your-domain`, `vercel.app`, `netlify.app`, `http://` |
| CRM routes in the registry | Absent, so structurally unable to reach the sitemap | read |

### 1b. Route table

Grouping rather than 116 rows; every route in a group is identical in kind,
and the per-URL results are in §4.

| Group | EN | IT | In sitemap | Indexable | Verified in the response |
|---|---|---|---|---|---|
| Homepage | `/` | `/it` | yes | yes | ✅ 200, self-canonical, reciprocal |
| City and destination hubs | 18 | 18 | yes | yes | ✅ |
| Airports | 13 | 13 | yes | yes | ✅ |
| Cruise ports | 3 | 3 | yes | yes | ✅ |
| Station transfers | 3 | 3 | yes | yes | ✅ |
| Named hotels | 3 | 3 | yes | yes | ✅ |
| Routes | 18 | 18 | yes | yes | ✅ |
| About us | `/about` | `/it/chi-siamo` | yes | yes | ✅ |
| Get a quote | `/get-a-quote` | `/it/richiedi-preventivo` | yes | yes | ✅ |
| **Privacy (draft)** | `/privacy-policy` | `/it/privacy` | **no** | **no** | ✅ 200, `noindex, nofollow`, self-canonical |
| **Terms (draft)** | `/terms-and-conditions` | `/it/termini-e-condizioni` | **no** | **no** | ✅ |
| **Cancellation (draft)** | `/cancellation-and-refund` | `/it/cancellazione-e-rimborsi` | **no** | **no** | ✅ |
| **CRM (private)** | `/crm`, `/crm/login` | — | **no** | **no** | ✅ `X-Robots-Tag: noindex, nofollow` |
| 404 | any unknown path | — | no | no | ✅ 404 + `noindex`, no canonical |

**Source directive vs. verified behaviour.** Every ✅ above was fetched from a
production build and read out of the real HTML or the real response headers.
None of it has been verified *on the production domain*, because the
production domain does not serve this application yet — see §6.

### 1c. The one defect the audit found in the code

The homepage disagreed with itself about its own URL.

```
sitemap   <loc>https://privatetransfersacrossitaly.com/</loc>     ← trailing slash
page      <link rel="canonical" href="https://privatetransfersacrossitaly.com"/>
page      <link rel="alternate" hreflang="en" href="https://privatetransfersacrossitaly.com"/>
sitemap   <xhtml:link rel="alternate" hreflang="en" href="https://privatetransfersacrossitaly.com/" />
```

`absoluteUrl("/")` produced `${siteUrl}/`. Next normalises a resolved canonical
by dropping a lone trailing slash, so the page emitted the bare origin while
the sitemap kept the slash — two strings for one page, in precisely the two
places a crawler compares, and the hreflang cluster inconsistent across the
two surfaces as well. Same resource, different identifiers; the kind of thing
that sits there for months.

Fixed in `absoluteUrl`, and `scripts/seo-check.mjs` now asserts it.

---

## 2. Changes made

Five files. No navigation, design system, quote form, CRM or page content was
touched.

| File | Change |
|---|---|
| `lib/site.ts` | Added `productionUrl`; `siteUrl` now falls back to it outside development instead of to localhost; `absoluteUrl("/")` returns the bare origin; added `contactEmail` (see the legal report) |
| `.env.example` | `NEXT_PUBLIC_SITE_URL=https://privatetransfersacrossitaly.com`, and a note that it has to be in the **build** environment |
| `app/sitemap.ts` | Removed the blanket `lastModified` |
| `app/robots.ts` | Comment only: why `/crm` is deliberately **not** disallowed |
| `package.json` | `"check:seo": "node scripts/seo-check.mjs"` |
| `scripts/seo-check.mjs` | **New.** 43 launch assertions against a running server |

### Why the fallback is no longer localhost

These pages are statically generated, so `NEXT_PUBLIC_SITE_URL` is inlined at
`next build` and every canonical, hreflang, Open Graph URL and sitemap entry
is frozen then. A variable added to a hosting dashboard *after* a build
changes nothing, and one that is missing *at* build time cannot be repaired at
runtime — it had already baked `http://localhost:3000` into all 116 URLs.

So `productionUrl` is in the source as well. `next dev` still uses localhost;
a production build with the variable missing now gets the right domain instead
of the wrong one. **Set it explicitly anyway**, and set it to the preview host
on any staging deployment so that staging does not claim production's
canonicals.

### Why `lastModified` is gone

It was one hardcoded date stamped identically onto all 116 URLs, which said
the homepage and a hotel route page had last changed at the same instant. That
is not a modification date; it is a number shaped like one. A crawler that
trusts it is misled and a crawler that does not trust it ignores the field, so
the honest value is no value. Restoring it means deriving a real per-page date
— the last commit touching that page's content file would do — not reinstating
a constant.

### Why `/crm` is not in `robots.txt`

Two reasons, and they both point the same way. A `Disallow` line publishes the
path to everyone who reads `robots.txt`, which is the most-read file on any
site; and it is counterproductive, because a disallowed URL can still be
indexed if something links to it while the crawler, told not to fetch it,
never sees the `noindex` that would have kept it out. `/crm` is therefore left
crawlable and kept out of the index by a response header the crawler has to
fetch the page to read. Access control is separate: `proxy.ts`, plus a check in
every CRM page and every CRM action.

---

## 3. Final route lists

**Public and indexable — 116 URLs** (58 English, 58 Italian): the homepage,
18 destination hubs, 13 airports, 3 cruise ports, 3 station-transfer pages, 3
named hotels, 18 routes, About us and Get a quote, in both languages.

**Draft, `noindex, nofollow`, out of the sitemap — 6 URLs:**
`/privacy-policy`, `/terms-and-conditions`, `/cancellation-and-refund` and
their Italian counterparts.

**Private, `noindex, nofollow`, out of the sitemap — `/crm/*`.** Kept out by
three independent mechanisms: layout metadata, the `X-Robots-Tag` header, and
absence from the registry the sitemap is built from.

**Not a URL:** section anchors (`/#prepare` and the rest). None appears in the
sitemap.

---

## 4. Validation

`scripts/seo-check.mjs` fetches real responses from a running production
server and compares them against the production origin. It reads the source
only for the two lists it deliberately duplicates — the six draft paths and
the CRM paths — so that publishing a draft in the registry makes the check
disagree and fail.

Redirects are never followed. A sitemap URL that redirects is a defect, and
following it would hide exactly that.

```
npm run build && npx next start -p 3472
npm run check:seo -- http://localhost:3472
```

**43 of 43 passed.**

| Assertion | Result |
|---|---|
| `robots.txt` 200, names the production sitemap absolutely, no blanket disallow | ✅ |
| `robots.txt` free of localhost, preview and `www` hosts | ✅ |
| `sitemap.xml` 200, 116 URLs, all on the production origin | ✅ |
| No duplicate URL, no localhost or preview URL, no trailing slash, no anchors | ✅ |
| All 6 drafts and both CRM paths excluded | ✅ |
| 58 English URLs, 58 Italian — one counterpart each | ✅ |
| No fabricated `<lastmod>` | ✅ |
| All 116 URLs return **200**, not a redirect | ✅ |
| All 116 canonical to **themselves**, absolute, on the production origin | ✅ |
| No published page carries `noindex` in metadata or in a response header | ✅ |
| Every page declares `en`, `it` and `x-default`; `x-default` = the English URL | ✅ |
| Every pair declares the **same alternate set** (not merely a link each way) | ✅ |
| No page's HTML mentions localhost, a preview host or `www.` | ✅ |
| The 6 drafts: 200, `noindex, nofollow`, still self-canonical | ✅ |
| `/crm` and `/crm/login`: `X-Robots-Tag: noindex, nofollow` | ✅ |

Also checked by hand: a 404 returns status 404 with `noindex` and no canonical.
`/crm` currently returns 200 rather than redirecting, because Supabase is
unconfigured and the proxy passes the request through to the page that says so;
the page refuses to render lead data without a user.

### Build and lint

`npx tsc --noEmit` clean. `npx eslint .` clean. `npx next build` **130/130
pages**, no errors or warnings.

**There is no automated test suite in this project, and none was added.** The
43 assertions above are a script that has to be pointed at a running server;
they are not unit tests and they did not run as part of the build.

---

## 5. The live domain — verified, and it is the main blocker

Checked today against `https://privatetransfersacrossitaly.com`.

| Check | Result |
|---|---|
| DNS, apex | ✅ resolves to `2.57.91.91` |
| DNS, `www` | ✅ alias of the apex, same address |
| TLS | ✅ valid; `curl` verified the chain on both hosts |
| What is served | ❌ **a parked page** — `<title>Parked Domain name on Hostinger DNS system</title>`, 32 KB |
| `http://` → `https://` | ❌ **no redirect.** `http://` returns **200** |
| `www` → apex | ❌ **no redirect.** `www` returns **200** |
| `/robots.txt` | ❌ currently `User-agent: *` / **`Disallow: /`** — the whole domain is blocked from crawling |
| `/sitemap.xml` | ❌ returns the parking **HTML** page with status 200, not XML |
| Homepage robots meta | ❌ `noindex, nofollow, noarchive, nosnippet` |
| Response header | `Server: hcdn` |

Two notes on reading that table. The `Disallow: /`, the `noindex` and the HTML
`/sitemap.xml` all belong to the parking page and will be replaced by this
application's own `robots.txt`, metadata and sitemap the moment it is deployed
— they are not defects to fix, they are evidence that nothing is deployed yet.
**The two missing redirects are different**: they are the host's job, not the
application's, and deploying will not fix them.

`Server: hcdn` and the parking page's own wording both point at Hostinger. I
have not assumed it — the brief said the provider is unspecified, so that is
observed evidence for you to confirm, not a conclusion.

---

## 6. What you have to do in the hosting dashboard

I cannot do any of this from the repository, and none of it should be guessed.

1. **Set the build environment variable.** `NEXT_PUBLIC_SITE_URL=https://privatetransfersacrossitaly.com`
   — in the **build** environment, not only at runtime, for the reason in §2.
   Where exactly depends on the provider; tell me which one and I will give you
   the precise screen. On Hostinger it differs between Web Hosting with Node
   and VPS.
2. **Redirect `http://` to `https://`** with a 301, on both hosts.
3. **Redirect `www.privatetransfersacrossitaly.com` to the apex** with a 301.
   Both currently return 200, so all four scheme/host combinations serve the
   same content under four different URLs. The canonical tag mitigates this; a
   redirect settles it.
4. **Do not add a hosting-level `noindex` or password protection** to the
   production deployment. If the provider offers "block search engines", leave
   it off — it emits an `X-Robots-Tag` that overrides everything in this
   repository, and it is the single most common reason a correctly configured
   site stays invisible.
5. **Replace the parked `robots.txt`.** Once the app is deployed its own
   `/robots.txt` serves `Allow: /`. Verify that by fetching it, because a
   hosting-level static file will win over the application route if one exists.
6. **After deploying, re-run the checks against the real domain:**
   `npm run check:seo -- https://privatetransfersacrossitaly.com`.
   All 43 should pass. Then submit `https://privatetransfersacrossitaly.com/sitemap.xml`
   to Search Console.

No DNS record, redirect rule or provider-specific configuration has been
invented here, and nothing in the repository was changed on the assumption of
a particular host.

---

## 7. Remaining blockers

**Launch blockers, hosting (all yours, §6):** the build variable, the two
redirects, no hosting-level `noindex`, and the parked `robots.txt`.

**Launch blockers, legal:** unchanged by this task and listed in
`docs/legal-pages-launch-readiness.md`. The six policy pages remain
`published: false`, `noindex, nofollow` and out of the sitemap. No placeholder
was removed, no page was marked published, and no `noindex` was lifted.

**Not a blocker, worth knowing:** `changeFrequency: "monthly"` is still
emitted on all 116 URLs and is as unverifiable as `lastModified` was. Search
engines ignore it, so removing it would change nothing either way; I left it
rather than widen the diff.
