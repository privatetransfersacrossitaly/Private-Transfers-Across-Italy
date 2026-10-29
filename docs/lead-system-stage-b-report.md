# Stage B — Core CRM and access controls

**Date:** 28 October 2026
**Scope:** Stage B only. No invoices, no drivers, no dispatch.
**Status:** code complete, security properties tested. **Not end-to-end tested** — that needs a real Supabase project, which does not exist yet. See §6.

---

## 1. What was built

| Route | Rendering | Guarded by |
|---|---|---|
| `/crm/login` | request-time (`ƒ`) | public by design; renders no lead data |
| `/crm` | request-time (`ƒ`) | proxy → `requireCrmUser()` |
| `/crm/leads/[id]` | request-time (`ƒ`) | proxy → `requireCrmUser()` |

English only, matching the reference CRM and the brief. The routes are **absent from `lib/routes.ts`**, which is the only source the sitemap is built from.

### Features, against the reference audit

| Reference feature | Here |
|---|---|
| Lead list, newest first | ✅ |
| Status filter with counts | ✅ tabs: all / pending / confirmed / completed / cancelled |
| Free-text search | ✅ name, email, E.164, national number, pickup, drop-off |
| Date filter | ✅ on the outbound leg |
| Lead detail | ✅ contact, outbound, return, party, luggage, customer message |
| Status management | ✅ pending / confirmed / cancelled |
| Derived `completed` | ✅ from the later of the two legs, as the reference does |
| Internal notes | ✅ |
| **Pagination** | ✅ 25/page — the reference has none |
| **Audit trail** | ✅ every mutation writes `lead_events` — the reference has none |
| **Email delivery status** | ✅ visible per lead |

---

## 2. Authorization model

Three independent layers. The first is a convenience, the second protects the page, **only the third protects the data**.

1. **`proxy.ts`** — guards `/crm/:path*`, redirects before any HTML is produced.
2. **Every page** awaits `requireCrmUser()`, which `redirect()`s — and `redirect()` throws, so there is no path past it.
3. **Every mutation** awaits `requireCrmActor()` as its first statement, *before* the service-role client is created.

**Authentication is not authorization.** A Supabase project's sign-up endpoint can be open, so being signed in is not enough: the address must be in `CRM_ALLOWED_EMAILS`. An address that authenticates but is not listed is signed straight back out by `signInAction`. **An empty allow-list denies everyone** — a misconfigured deployment locks the CRM rather than opening it.

Session validation uses `supabase.auth.getUser()`, not `getSession()`. The latter reads a cookie the client could have written; only the former revalidates against the auth server.

### Database access

Unchanged from Stage A and verified again: RLS enabled with **no policy**, plus `REVOKE ALL … FROM anon, authenticated`. Every read and write goes through the service role, server-side, after authorization. **There is no browser Supabase client for data** — the anon key is used only for the session.

This is the specific thing the reference gets wrong on all three counts: a client-side-only guard, unauthenticated service-role server actions, and browser-side reads of the lead table with the anon key.

---

## 3. Files

### Created (10)

| File | Purpose |
|---|---|
| `proxy.ts` | request-time guard on `/crm/:path*` |
| `lib/crm/auth.ts` | `getCrmUser`, `requireCrmUser`, `requireCrmActor`, allow-list |
| `lib/crm/leads.ts` | every CRM read and write; each authorizes first |
| `lib/crm/action-state.ts` | the form state object, kept out of the `"use server"` module |
| `app/actions/crm.ts` | sign in, sign out, set status, set notes |
| `app/(crm)/layout.tsx` | the CRM's own root layout |
| `app/(crm)/crm/page.tsx` | lead list |
| `app/(crm)/crm/login/page.tsx` | sign in |
| `app/(crm)/crm/leads/[id]/page.tsx` | lead detail |
| `components/crm/chrome.tsx`, `login-form.tsx`, `lead-controls.tsx` | CRM UI |

### Modified (2)

| File | Change |
|---|---|
| `next.config.ts` | `X-Robots-Tag: noindex, nofollow` on `/crm/:path*` |
| `.env.example` | `CRM_ALLOWED_EMAILS` documented |

### Dependency added (1)

`@supabase/ssr@0.12.7` — MIT, one dependency (`cookie`). Needed for cookie-backed sessions the **server** can verify; without it the session is only readable in the browser, which is the reference's problem.

### Not touched

City pages, legal-page content, global navigation, shared components, the Stage A form and backend, and the Italy Taxi Service project.

---

## 4. Checks performed

| Check | Result |
|---|---|
| `npx tsc --noEmit` | clean |
| `npx eslint .` | clean |
| `npx next build` | **130/130** (was 127) |
| Automated test suite | **none exists.** No tests were run. |

### Security tests

**1. Unauthenticated page access** — `/crm` and `/crm/leads/[id]` both return **307 → `/crm/login`**. A real browser ends at `/crm/login`.

**2. Secrets in the client bundle.** Built with sentinel values and grepped `.next/static`:

| Value | In client bundle |
|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | **0 files** |
| `RESEND_API_KEY` | **0 files** |
| `CRM_ALLOWED_EMAILS` | **0 files** |

**3. Render mode.** With configuration present, `/crm` and `/crm/login` build as **`ƒ` (Dynamic, server-rendered on demand)**. No authenticated shell is ever prerendered.

**4. Server actions invoked directly, with no session — the reference system's actual hole.**

The proxy caught every attempt (307), so to test layer 3 on its own **the proxy matcher was temporarily disabled, the app rebuilt, the actions posted, and the matcher then restored and rebuilt.** With the proxy off and no session, the server log shows:

```
Error: Not authorised.   digest: '3811210804'   ← updateLeadStatusAction
Error: Not authorised.   digest: '3462289166'   ← updateLeadNotesAction
```

Both lead mutations refuse before touching the database. `signOutAction` errored on the malformed body (it takes no form data) and is harmless to an anonymous caller; `signInAction` is the public login action and returned its validation message.

**5. Page-level guard without the proxy.** With the matcher disabled, `GET /crm` returns HTTP **200** — but the body contains `NEXT_REDIRECT` to `/crm/login` and **zero lead-bearing markup** (0 occurrences of `tel:`, `mailto:`, `phone_e164`, any table, or "Sign out"). The 200 is a streaming shell carrying the redirect, not a leak. A browser follows it. This is exactly why the proxy exists as layer 1: it turns that into a clean 307.

**6. Regression.** Stage A intact — both quote routes 200, phone-country fields and honeypot present. **All six legal pages still `noindex, nofollow` and out of the sitemap (6/6).** Sitemap at 116 entries, **0 mentioning `/crm`**. `X-Robots-Tag` present even on the 307.

---

## 5. Two defects found and fixed during QA

**1. The CRM was inheriting the public site header and footer.** It was first placed under the `(en)` route group, whose layout wraps children in `SiteHeader`/`SiteFooter` — so the CRM login rendered under a navbar offering "Request a quote" and a language switch. A screenshot made it obvious. Fixed by moving the CRM to its own route group, `app/(crm)/`, with its own root layout carrying the same fonts and stylesheet and nothing else.

**2. `/crm/login` was prerendered, freezing its configured/unconfigured branch at build time.** A site built before Supabase was attached would keep serving "not configured" afterwards. Fixed with `await connection()` on both pages that branch on runtime configuration. Verified both ways: with config present the form renders and the setup notice does not; with config absent, the reverse.

Two version-specific corrections were also needed, both from reading `node_modules/next/dist/docs/` rather than assuming: `middleware.ts` is deprecated in favour of **`proxy.ts`**, and `export const dynamic` is **rejected outright** alongside `cacheComponents` — `export const instant = false` is the equivalent. A third was the project's own documented trap: an object exported from a `"use server"` file fails the build, so `initialCrmActionState` moved to `lib/crm/action-state.ts`.

---

## 6. Outstanding — and what is *not* claimed

**The full workflow has not been tested end to end, because there is no Supabase project to test against.** Everything in §4 was verified with placeholder configuration pointing at a dead URL, which exercises the guards (an unreachable auth server means "no user", which is the unauthenticated path) but cannot exercise a real session.

**Not verified, and not claimed:**

- Signing in with real credentials.
- The allow-list admitting a listed address and rejecting a listed-but-wrong-password one.
- The lead list rendering real rows, and search/filter/pagination against real data.
- A status change or a note persisting, and its `lead_events` row.
- That the migration applies cleanly, and that RLS behaves as the SQL intends.

### To finish

1. Create the independent Supabase project; run `supabase/migrations/001_create_leads.sql`.
2. Create one CRM user (Authentication → Users → Add user). **Do not enable public sign-ups.**
3. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `CRM_ALLOWED_EMAILS`.
4. Submit one quotation request, confirm the lead appears in `/crm`, open it, change its status, and confirm the `lead_events` row.
5. Confirm with the anon key directly that `select * from leads` returns nothing — the RLS check the repository cannot make for you.

### Open items

| Item | Status |
|---|---|
| End-to-end test | **blocked** on the Supabase project |
| Stage C (further lead-management features) | not started; awaiting your approval |
| Invoices, drivers, dispatch | deferred by your decision |
| Customer-facing field editing | deliberately not in Stage B — editing what the customer wrote, without a reason field, would weaken the audit trail |
| Italian CRM | English only; confirm if you want otherwise |

Nothing was committed, pushed or deployed. No production migration was run and no real email was sent — `RESEND_API_KEY` is unset in this project, so the mailer skips and records `skipped`.
