# CRM login — replacing Cloudflare Access

Built and tested locally on 30 October 2026. **Not deployed.** The live site
still authenticates with Cloudflare Access, and will until you approve a
deploy — which is the right order, because the Access application must stay
in place until the replacement is proven.

---

## 1. What changed, and what deliberately did not

| | Before | After |
|---|---|---|
| Who authenticates | Cloudflare, at the edge | this application |
| Credential | your Google/OTP identity | username + password |
| Session | Access cookie, edge-managed | row in D1, app-managed |
| Can a session be revoked? | at the edge | **yes — logout deletes the row** |
| `/crm` reachable by the public? | no | **yes** |

That last row is the real cost and it should not be glossed over. Access
refused unauthenticated requests before your Worker ran at all. Now the login
form, the password hashing and the rate limiter face the open internet. The
replacement is carefully built, but it is software you are relying on rather
than Cloudflare's edge, and that is a genuine reduction in depth.

**Unchanged, and verified unchanged:** the D1 lead tables, the quote form,
lead management, email notifications, SEO (57/57 checks still pass), every
public page, and the Worker deployment configuration.

## 2. Generate your credentials

```
node scripts/hash-password.mjs
```

It generates a 20-character password, hashes it, and prints the three
`wrangler secret put` commands with their values. Nothing contacts the
network; the password cannot be recovered from the hash.

**Copy the password into a password manager before closing the terminal.**
There is no recovery — losing it means running the script again and setting
the secret again.

To choose your own password instead, `--ask` (it is not echoed, and under 12
characters is refused). For a username other than `admin`, `--username name`.

### Why it generates the password for you

Workers Free allows **10 ms of CPU per request**. Measured in the actual
Workers runtime on this machine:

| PBKDF2-HMAC-SHA256 | CPU |
|---|---|
| 10,000 | ~6 ms |
| 16,000 | ~10 ms — at the limit |
| 210,000 (OWASP minimum) | 169 ms |
| 600,000 (OWASP current) | 432 ms |

So the recommended iteration counts are 20–40× over budget: a login would be
killed mid-request. The default is 10,000, which fits with margin.

What closes the gap is entropy. A 20-character random password is about 115
bits — no iteration count is relevant against a space that size. A password
*you* invented is the one case where 10,000 would matter, which is why the
script makes the strong option the default one.

It is also worth being clear about what the hash is protecting. It lives in a
Worker secret, not a database. There is no leak path to it that does not
already expose `CRM_SESSION_SECRET` (forge any session) and the D1 binding
(read every lead). By the time an attacker holds the hash, it is the least
valuable thing they have.

**On Workers Paid** (30 s CPU) regenerate with `--iterations 600000` and set
the secret again. No code changes: the count is stored inside the hash.

## 3. Set the secrets

The script prints these with values filled in:

```
npx wrangler secret put CRM_ADMIN_USERNAME
npx wrangler secret put CRM_ADMIN_PASSWORD_HASH
npx wrangler secret put CRM_SESSION_SECRET
```

Leave the three `CF_ACCESS_*` / `CRM_ALLOWED_EMAILS` secrets in place for now.
They are unused by the new code and removing them is tidying, not security —
do it after you have removed the Access application.

## 4. Apply the migration

Two new tables. Nothing touches `leads` or `lead_events`.

```
npx wrangler d1 execute italytransfers --remote --file=migrations/0002_crm_auth.sql
```

## 5. Deploy, then test, then remove Access — in that order

While the Access application exists it intercepts `/crm` **before** your
Worker, so the new login page is unreachable on the production domain. That
is not a problem; it is useful. Test on the workers.dev URL first, where
Access does not apply, and leave the apex protected until you are satisfied.

1. Deploy.
2. On `https://private-transfers-across-italy.privatetransfersacrossitaly.workers.dev/crm`,
   work through the checks in §7.
3. Only then remove the Access application in the Zero Trust dashboard.
4. Re-test on `https://privatetransfersacrossitaly.com/crm`.

## 6. How the pieces fit

**Password** — PBKDF2-HMAC-SHA256 via `crypto.subtle`, stored as
`pbkdf2-sha256$i=<n>$<salt>$<key>`. Compared in constant time. Argon2id was
considered and rejected: no native Workers support, so it would need a WASM
build, and being memory-hard it costs *more* CPU than PBKDF2 — the opposite
of what the 10 ms limit needs.

**Session** — a 256-bit random token plus an HMAC in the cookie; the database
stores only the token's SHA-256, so `crm_sessions` holds a verifier rather
than a credential. `HttpOnly`, `Secure`, `SameSite=Lax`, `Path=/`. Expiry is
**12 hours absolute and 2 hours idle**, both enforced inside the lookup query
rather than checked afterwards. Logout deletes the row.

`Secure` is omitted only when the host is `localhost` or `127.0.0.1`, because
browsers discard a `Secure` cookie over plain http and `wrangler dev` serves
http. Every real hostname gets it, and no environment variable can turn it
off.

**Brute force** — failures counted in D1, per IP (10) and per username (20) in
a 15-minute window, checked *before* the password is hashed so a flood cannot
be converted into a CPU bill. Counting in the database rather than in memory
matters on Workers: an in-memory counter is per-isolate, so an attacker would
get the allowance once per warm isolate instead of once in total.

**CSRF** — a per-session token derived as `HMAC(CRM_SESSION_SECRET,
sessionId)`, so it needs no storage, cannot be guessed, cannot be replayed
into another session, and expires with the session. Checked in every
state-changing action. Next already verifies `Origin` on server actions; this
is the second lock.

**Three guards, unchanged in shape:**

1. `proxy.ts` turns away a request with no session cookie. Not a security
   boundary — any cookie defeats it.
2. `requireCrmUser()` in every CRM page.
3. `requireCrmActorWithCsrf()` in every CRM action, and `requireCrmActor()`
   inside `setLeadStatus`/`setLeadNotes` — the layer closest to the data.

`lib/crm/auth.ts` kept its exports, so no page, action or lead function
needed editing. That is what makes it safe to swap the authentication method:
the change could not quietly drop a guard.

## 7. Tests — all 47 passed locally

Run against the real Workers runtime, through a real browser for the login
and action paths.

| # | Case | Result |
|---|---|---|
| 1 | Correct username + password | dashboard, session cookie issued |
| 2 | Incorrect password | refused, no cookie, generic message |
| — | Correct password, wrong username | refused, **identical** message |
| 3 | Unauthenticated visitor | redirected to `/crm/login`, no lead data |
| 4 | Expired session (absolute) | login required |
| — | Idle session (over 2 h) | login required |
| 5 | Direct lead URL, signed out | redirected, no lead data |
| 6 | Action with no session | refused, **database unchanged** |
| — | Action with forged CSRF | refused, database unchanged |
| — | Action with missing CSRF | refused, database unchanged |
| 7 | Logout | cookie cleared, row deleted |
| — | **Replay of pre-logout cookie** | refused |
| — | Tampered cookie signature | refused |
| — | Signature lifted from another session | refused |
| — | 10 failures, then the **correct** password | refused, with the rate-limit message |
| — | Blocked attempt recorded? | no — a lockout cannot be extended by hammering it |
| — | Cookie flags | HttpOnly, SameSite=Lax, Path=/, invisible to JavaScript |

The replay test is the one that distinguishes this from a signed stateless
cookie: that design cannot revoke, so it would have accepted the old cookie.

The rate-limit test is the one worth understanding. It blocks the *correct*
password once the threshold is passed. A limiter that only blocks wrong
passwords stops nothing, because the attacker is trying to find the right one.

## 8. One bug this surfaced, worth knowing about

The lead detail page read the session cookie without `await connection()`.
With `cacheComponents` that page is partially prerendered, so the cookie was
read while the static shell was produced — where there is no request and so
no cookie. The symptom was specific and misleading: a correctly signed-in
administrator was bounced to the login page by that one route while `/crm`
worked, because `/crm` already called `connection()`.

Fixed. It is the kind of fault that looks like a broken password and is not.
