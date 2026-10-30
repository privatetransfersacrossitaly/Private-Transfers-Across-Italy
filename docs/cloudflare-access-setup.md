# Cloudflare Access for the CRM — the steps only you can do

The application side is finished and tested. **Authentication is not active
yet**, and it cannot be until the Access application exists and its two
identifiers are configured. Nothing below can be done with the token I hold:
these need Zero Trust permissions I deliberately did not request.

Work through it in order. It takes about ten minutes and costs nothing —
Access is free for up to 50 users.

---

## 1. Create the Access application

1. Go to **one.dash.cloudflare.com** → **Access** → **Applications** → **Add
   an application** → **Self-hosted**.
2. **Application name:** `Private Transfers CRM`
3. **Session duration:** 24 hours is sensible. Shorter is fine.
4. **Public hostname:** add one entry —
   - Subdomain: *(leave empty)*
   - Domain: `privatetransfersacrossitaly.com`
   - Path: `crm`

   The path matters. Without it Access sits in front of the whole website and
   every visitor is asked to log in before they can read a destination page.

5. Save and continue to the policy.

## 2. Create the policy — the email allow-list

1. **Policy name:** `CRM owners`
2. **Action:** `Allow`
3. **Configure rules → Include →** selector **Emails**, and add:
   - `privatetransfersacrossitaly@gmail.com`
   - any other address that should reach the CRM

Use **Emails**, not *Emails ending in* — a domain rule would let every Gmail
address in.

4. Save.

## 3. Pick a login method

**Access → Settings → Authentication.** If nothing is configured, add
**One-time PIN**: Cloudflare emails a code to the address, no identity
provider needed, and it works immediately. Add Google or another provider
later if you prefer.

## 4. Copy the two values I need

**Access → Applications →** your app **→ Overview**:

- **Application Audience (AUD) Tag** — a 64-character hex string. Copy it.
- Your **team domain**, shown in **Access → Settings** as something like
  `yourteam.cloudflareaccess.com`.

## 5. Set them as Worker secrets

**Done — see §5a below for the actual values and commands.**

Three commands, run from the project directory. Each prompts for the value
and does not echo it:

```
npx wrangler secret put CF_ACCESS_TEAM_DOMAIN
npx wrangler secret put CF_ACCESS_AUD
npx wrangler secret put CRM_ALLOWED_EMAILS
```

**Correction to an earlier version of this document:** it said the token I
hold could not do this, because it lacks `workers:write` and
`secrets_store:write`. That was wrong. `wrangler secret list` succeeds with
the scopes I have, so `workers_scripts:write` covers secret operations — the
commands above work with the credential already on this machine.

### Are these actually secrets?

Not really, and it is worth being accurate. Neither is a credential:

- the **team domain** is a public hostname — it serves your signing keys at
  `/cdn-cgi/access/certs` to anyone who asks;
- the **AUD tag** is an audience identifier. Knowing it does not let anyone
  forge a token, because forging one needs Cloudflare's private signing key.

So pasting them in a chat did no harm. The reason to keep them out of the
repository is not confidentiality but coupling: committing them ties the
codebase to one Access application, and a fork or a staging copy would
silently authenticate against the wrong one. Secrets are simply the tidiest
place for a per-deployment value.

## 5a. The three commands, with your values

Run these one at a time in `D:\Mine Projects\rome-transfers`. Each one waits
for the value, then prints `✨ Success!`.

```
npx wrangler secret put CF_ACCESS_TEAM_DOMAIN
```
paste: `shiny-wave-c55f.cloudflareaccess.com`

*No `https://`, no trailing slash. The code builds the URL itself and also
compares the token's `iss` claim against `https://` + this value, so an extra
scheme here makes every token fail.*

```
npx wrangler secret put CF_ACCESS_AUD
```
paste: `bae5565777c84ef7882551f6a78ef9f426105ff332d904b89eddb535ac2181bc`

```
npx wrangler secret put CRM_ALLOWED_EMAILS
```
paste: `privatetransfersacrossitaly@gmail.com`

*Lower-case, no spaces. For more than one address, separate with commas and
no spaces: `a@x.com,b@y.com`. The code lower-cases both sides before
comparing, so case will not bite you, but a stray space would.*

Then confirm all three landed — this prints names only, never values:

```
npx wrangler secret list
```

Expected: three entries, `CF_ACCESS_AUD`, `CF_ACCESS_TEAM_DOMAIN`,
`CRM_ALLOWED_EMAILS`, each `"type": "secret_text"`. Tell me when it does and
I will verify it myself.

**If a command fails with a permissions error**, the token needs widening:
`npx wrangler login --scopes account:read user:read d1:write workers_scripts:write zone:read workers:write`
— or set the three in the dashboard instead, under **Workers & Pages →
private-transfers-across-italy → Settings → Variables and Secrets**, choosing
**Secret** rather than **Text** for each.

### Why the allow-list is duplicated

Because the Access policy and the application are deliberately independent.
Access decides who may reach the Worker; `CRM_ALLOWED_EMAILS` decides who may
see leads. Widening one by accident does not widen the other, and an empty or
missing list denies everyone rather than admitting everyone.

---

## 6. Test it, in this order

Only after a deploy, and treat each as a pass/fail:

| # | Do this | Expect |
|---|---|---|
| 1 | Open `privatetransfersacrossitaly.com/crm` signed out | Cloudflare login page, not the CRM |
| 2 | Log in as an allow-listed address | The CRM lead list |
| 3 | Log in as an address in Access but **not** in `CRM_ALLOWED_EMAILS` | The "No access to this CRM" page, and no lead data |
| 4 | Open `/get-a-quote`, send a test enquiry | A reference number |
| 5 | Reload the CRM | That enquiry in the list |
| 6 | Change its status, add a note, reload | Both persisted |
| 7 | Open any public page, e.g. `/destinations/rome` | Loads with **no** login prompt |

Test 3 is the one worth doing properly — it is the test that proves the
allow-list is doing something, and it is the one everybody skips.

Test 7 is the one that catches a misconfigured hostname: if Access was added
without the `crm` path, the whole site asks visitors to log in.

---

## 7. What I verified against your real Access configuration

Run on the Workers runtime on 30 October 2026, with your actual team domain
and AUD tag in place.

**First, the configuration itself.** `https://shiny-wave-c55f.cloudflareaccess.com/cdn-cgi/access/certs`
serves **2 RSA keys, both `alg: RS256`**, plus a `public_cert`. That is
exactly the shape the verifier expects, and it confirms the team domain is
right.

**Then the refusals:**

| Request | Result |
|---|---|
| `/crm`, no token | refused → `/crm/denied` |
| `/crm`, **forged** `Cf-Access-Authenticated-User-Email` only | **refused** |
| `/crm`, token with a **real `kid` from your JWKS**, the correct `iss`, the correct `aud`, an allow-listed `email`, and an **invalid signature** | **refused** |
| the same token — any lead data in the response? | **none** |
| `/crm/leads/<real id>`, forged email header | refused |
| `/crm/denied` | 200, renders no lead data |

Two rows carry the weight.

The **forged email header** row: `Cf-Access-Authenticated-User-Email` is an
ordinary header that anybody can send, so an implementation trusting it lets
anyone be anyone. This one requires the signed JWT and reads the address only
from the verified payload.

The **real `kid`, bad signature** row is the sharper test. Everything a
claims-only check would look at was correct — issuer, audience, expiry, an
allow-listed address, and a key id that genuinely exists in your JWKS. It was
still refused, which means the RSA signature is actually being verified
against your published keys rather than the claims merely being read.

**Still not verified: the allow path.** Issuing a validly signed token needs
Cloudflare's private key, so "an allow-listed user sees the lead list" cannot
be tested from here. **Authentication is configured but not yet proven
working, and I am not claiming otherwise** — §6 tests 2 and 3 are what settle
it, after a deploy.
