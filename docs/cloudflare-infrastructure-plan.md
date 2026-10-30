# Cloudflare infrastructure — audit, adapter, and an unresolved blocker

**Date:** 29 October 2026
**Status: the app builds for Cloudflare Workers. It does not yet run on one
that I can verify.**

Nothing was committed, pushed or deployed. No Cloudflare resource was created.
No Cloudflare account was accessed — see §3.

---

## 1. What the repository contained before today

| Looked for | Found |
|---|---|
| `wrangler.toml` / `wrangler.jsonc` | **None** |
| `@opennextjs/cloudflare`, `open-next.config.ts` | **None** |
| `.github/workflows` or any CI | **None** |
| Build target | `next build` → `next start`, a **Node server** |
| Database | **Supabase Postgres**, `supabase/migrations/001_create_leads.sql` |
| Auth | **Supabase Auth** (email + password) |
| Email | **Resend** |
| Object storage | **Not used anywhere** |

A Next.js 16 app with Server Actions and a `proxy.ts` cannot run on Workers
without an adapter, and there was none. Whatever is connected on the
Cloudflare side today, this repo could not have produced a working Worker from
it — the build would fail, or worse, emit static pages with every server
action dead, so the quote form would render and silently do nothing.

### The code as it stands

- **Quote form** → `app/actions/quote.ts`. Honeypot → server-side validation →
  DB-backed rate limit → `createLead` → emails. `status: "delivered"` is
  decided by the database write alone.
- **Phone** → `libphonenumber-js/min`, four columns (`phone_country`,
  `phone_calling_code`, `phone_national`, `phone_e164`).
- **Idempotency** → SHA-256 of the submission via `node:crypto`, unique
  `idempotency_key` column.
- **Rate limit** → counted in the database, keyed on email.
- **CRM** → three guards: `proxy.ts` redirect, `requireCrmUser()` /
  `requireCrmActor()` as the first statement of every page and action, and
  database-level RLS.
- **Server-only** → eight modules carry `import "server-only"`.

---

## 2. Service choice

### R2 — needed only as a cache, and not even that here

The **application** needs no object storage: no file input, no upload, no
multipart handler, no storage call. I said so in the first version of this
document and then found the adapter's own template provisions an R2 bucket
anyway — as OpenNext's **incremental cache**, not for app files. That matters
because `next.config.ts` sets `cacheComponents: true`, and Next's deployment
guide lists a shared cache as a requirement for functional fidelity with it.

I configured `staticAssetsIncrementalCache` instead, which serves the cache
out of the Worker's own asset bundle: **no R2 bucket, nothing billable**. That
is correct for this site because nothing revalidates at runtime — no route
calls `revalidatePath` or `revalidateTag`, and none sets a `revalidate`
window. R2 becomes the right answer the first time a page needs to change
between deploys, because the asset bundle is immutable.

### D1 — recommended against. Keep Supabase.

**Postgres features the schema uses that D1 (SQLite) does not have:**

| Feature | Used at | D1 |
|---|---|---|
| `UUID` + `gen_random_uuid()` | both tables' `id` | No UUID type, no generator |
| `TIMESTAMPTZ` + `now()` | `created_at`, `updated_at`, `pickup_at`, `return_at` | No timestamp type; every comparison and sort needs re-checking |
| PL/pgSQL trigger `leads_set_updated_at` | `updated_at` | Must be rewritten |
| **`ENABLE ROW LEVEL SECURITY` + `REVOKE … FROM anon, authenticated`** | both tables | **No RLS, no roles, no equivalent** |
| `CREATE INDEX … (lower(email))` | email lookup | Expression indexes exist; fine |

**The RLS line is the one that matters.** The CRM's third guard is the
database refusing to serve lead data to anything but the service role. D1 has
no such concept: any binding that can read the table reads every lead. Moving
to D1 deletes a security layer protecting customers' names, phone numbers and
home addresses, and replaces it with "the application code is careful".

**Supabase Auth is the second blocker.** The CRM uses `signInWithPassword`,
revalidates with `getUser()` against the auth server rather than trusting a
cookie, and refreshes the session in `proxy.ts`. D1 has no auth. Replacing it
means hand-rolling password auth — which is how this goes wrong — or putting
Cloudflare Access in front of `/crm`, which is sound but a separate project.

**Also portable but not free:** the CRM search uses PostgREST
`.or(...ilike...)`. SQLite's `LIKE` is case-insensitive for ASCII only, so
searching Italian names with accents would quietly change behaviour.

### Final architecture

| Layer | Choice |
|---|---|
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` 1.20.14, `nodejs_compat` |
| Database | **Supabase Postgres** — unchanged, reached over HTTPS, keeps RLS |
| Auth | **Supabase Auth** — unchanged |
| Email | **Resend** — unchanged, HTTP API works from Workers |
| Incremental cache | `staticAssetsIncrementalCache` — no R2, nothing billable |
| Images | Cloudflare `IMAGES` binding (see §6) |
| Object storage | **None** |

If you would rather be all-Cloudflare on principle, say so and I will scope
the D1 + Access migration as its own piece of work.

---

## 3. Cloudflare access — I still do not have it

There is **no Cloudflare tool or integration in this session.** I have not
accessed your account and nothing here was read from it.

One thing you should know: `opennextjs-cloudflare migrate` **tried to open an
OAuth login** to your Cloudflare account in a browser. It timed out and
nothing was authorized, which is the right outcome — but it is why the adapter
could not finish setting up the cache, and why it printed
*"Failed to set up cache for your project."* I configured that by hand
instead (§2).

I will never ask you for a password, Global API key, GitHub token or any
secret value in chat.

---

## 4. What I built, and what it proved

### Installed (dev dependencies only)

`@opennextjs/cloudflare@1.20.14` — peer range `next: >=16.4.1`, and this
project is on 16.4.2, so it is supported — plus `wrangler@4.155.0`.

### Files created

| File | What it is |
|---|---|
| `wrangler.jsonc` | Worker config: `nodejs_compat`, assets binding, self-reference service, images binding |
| `open-next.config.ts` | **Hand-written.** Sets `staticAssetsIncrementalCache`, with the reasoning in the file |
| `public/_headers` | Immutable cache headers for `/_next/static/*` |
| `.dev.vars` | Contains only `NEXTJS_ENV=development`. **No secrets.** Gitignored |

### Files changed

| File | Change |
|---|---|
| `package.json` | Four scripts: `preview`, `deploy`, `upload`, `cf-typegen` |
| `.gitignore` | `.open-next`, `.wrangler`, `.dev.vars*` |
| `eslint.config.mjs` | Ignore `.open-next/**`, `.wrangler/**` — see §5 |
| `next.config.ts` | migrate's appended line **removed** — see §5 |

### The build works

`opennextjs-cloudflare build` → **exit 0**, 130/130 pages, worker written.

`wrangler deploy --dry-run` (no auth, no deploy) reports the real size:

```
Total Upload: 14036.02 KiB / gzip: 2672.20 KiB
Bindings: WORKER_SELF_REFERENCE, IMAGES, ASSETS
```

**2.61 MiB compressed.** The Workers limit is 3 MiB on the Free plan and
10 MiB on Paid — so it fits Free today with about 0.4 MiB of headroom. The
112 remaining FAQ illustrations and any further city cluster will eat that.
Worth knowing before you pick a plan.

### The runtime does not work, and I could not find out why

`wrangler dev` starts the Worker and serves `/robots.txt` with a 200. **Every
server-rendered HTML route returns 500**, with:

> Uncaught Error: The Workers runtime canceled this request because it
> detected that your Worker's code had hung and would never generate a
> response.

Reproducible in ~0.5s per request, from a cold start, on all 130 routes.

**Two hypotheses tested and eliminated:**

1. **The experimental Node.js middleware.** The build warns *"Node.js
   middleware support is experimental in cloudflare, and not officially
   maintained by OpenNext maintainers."* `proxy.ts` is Node middleware because
   it imports `@supabase/ssr`. I moved `proxy.ts` aside, rebuilt, retested:
   **still 500.** Not the cause. (`proxy.ts` is restored, byte-for-byte.)
2. **The missing incremental cache**, given `cacheComponents: true`. I
   configured `staticAssetsIncrementalCache`, rebuilt, retested: **still
   500.** Not the cause.

**The most likely remaining explanation is the host.** Building without
`proxy.ts` surfaced a second warning the first build had buried:

> WARN While OpenNext may function on Windows, it could encounter
> unpredictable failures during runtime.

This machine is Windows. Static routes serve; the server render path hangs.
That is consistent with OpenNext's own warning, and inconsistent with an
application defect — the same code serves all 130 routes correctly under
`next start`, and passes 57/57 SEO checks there.

**So: I cannot verify the Workers runtime from this machine, and I am not
going to claim it works or that it is broken in production.** Resolving it
needs one of:

- a build and `wrangler dev` run under **WSL or Linux**, which is the
  supported path and the cheaper test; or
- a deploy to a **Cloudflare preview URL**, which needs your approval and an
  authorized account.

---

## 5. Two side effects I caused and fixed

Recorded because they were mine, not pre-existing.

**`next.config.ts`.** migrate appended
`import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev())`.
That function starts a `workerd` process beside `next dev` so app code can
read a Cloudflare binding through `getCloudflareContext()`. **No code in this
project reads a binding** — the database is HTTPS, email is an HTTP API,
nothing touches R2 or KV. Meanwhile your running dev server kept spawning and
respawning `workerd` from it. Removed, with the reason recorded in the file.
Put it back when a binding is actually used.

**`eslint.config.mjs`.** `npx eslint .` went from seconds to not finishing,
because `.open-next` is ~39 MB of generated JavaScript and eslint was linting
all of it. Added to the ignore list with `.wrangler`.

Also note: `public/_headers` is consumed by Cloudflare but would be served as
a plain text file at `/_headers` by `next start`. It contains nothing but
cache-control rules, so this is cosmetic.

---

## 6. Environment variables

Twelve, of which three are optional. **Three public, nine server-only.**
Anything `NEXT_PUBLIC_` is compiled into the browser bundle; the rest must be
Worker **secrets** (`wrangler secret put NAME`, or the dashboard), never plain
vars in `wrangler.jsonc`.

### Public

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://privatetransfersacrossitaly.com` — must be in the **build** environment; it is inlined at build time |
| `NEXT_PUBLIC_SUPABASE_URL` | your project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | the anon key — used only for CRM sign-in, never to read a lead |

### Server-only secrets

| Variable | Purpose | Required |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | The only key that can read or write a lead. **Full database access.** | Yes |
| `RESEND_API_KEY` | Email delivery | For email |
| `LEAD_FROM_EMAIL` | Sender, on a domain verified in your Resend account | For email |
| `LEAD_ADMIN_EMAIL` | Where a new request is announced | For email |
| `LEAD_REPLY_TO_EMAIL` | Reply-to | Optional |
| `CRM_ALLOWED_EMAILS` | Allow-list. **Empty or unset denies everyone**, deliberately | Yes, for the CRM |
| `QUOTE_RATE_LIMIT` | Default 10 | Optional |
| `QUOTE_RATE_WINDOW_MS` | Default 600000 | Optional |

**All twelve are unset.** Only `.env.example` exists.

Degradation when unset, which is deliberate: no Supabase → the form validates
and tells the visitor plainly that nothing was sent, never a false success. No
Resend → the lead still saves, both emails recorded as `skipped`. No
`CRM_ALLOWED_EMAILS` → the CRM locks everyone out.

---

## 7. Still needed from you

1. **The Worker's name.** `wrangler.jsonc` currently says `rome-transfers`,
   taken from `package.json`. It must match your existing Worker, because it
   is also the `WORKER_SELF_REFERENCE` service name — a mismatch fails at
   deploy. I will not guess this.
2. **Workers Build from GitHub, or `wrangler deploy` from CI?** That decides
   where `NEXT_PUBLIC_SITE_URL` goes and who runs the build.
3. **Confirm the architecture** in §2: Supabase retained, no D1, no R2.
4. **Cloudflare Images.** `wrangler.jsonc` declares the `IMAGES` binding so
   `next/image` works without `sharp`. Image transformations are billable on
   some plans. If you would rather not, the alternative is
   `images: { unoptimized: true }` — your 30 local images are already sized,
   so the cost is losing automatic AVIF/WebP conversion.
5. **Approval to deploy to a preview URL**, if you want the runtime question
   in §4 settled that way rather than by my re-testing under WSL.

---

## 8. Phase-by-phase status, honestly

| Phase | Status |
|---|---|
| 1 — Inspect | ✅ Complete |
| 2 — Choose services | ✅ Complete: Workers + Supabase + Resend, no D1, no R2 |
| 3 — Authorize access | ⛔ **No access available.** Not simulated |
| 4 — Database and storage | ⛔ **Not applicable** — Supabase retained, no D1 or R2 to create |
| 5 — Env vars and secrets | ⚠️ Checklist complete (§6); **nothing configured** — no credentials exist |
| 6 — Quote form functional | ⛔ **Cannot be verified.** No database, and the Workers runtime fails locally |
| 7 — CRM functional | ⛔ **Cannot be verified.** Same reasons |
| 8 — End-to-end test | ⛔ **Not performed.** No test lead was created because there is no database to create one in |
| 9 — Deliverables | This document |

### Verified

`tsc` clean · `eslint` clean · `next build` **130/130** · `check:seo`
**57/57** against the Node server · `opennextjs-cloudflare build` exit 0 ·
`wrangler deploy --dry-run` exit 0, 2.61 MiB compressed.

### Not verified, and not claimed

**The complete production flow is not verified.** No lead has ever been
written, no email has ever been sent, the CRM has never listed a real record,
and every HTML route returns 500 under local Workers preview. The Node
deployment path is fully green and unaffected by today's work; the Cloudflare
path builds and does not yet run.

No automated test suite exists in this project. The 57 checks are a script
pointed at a running server.
