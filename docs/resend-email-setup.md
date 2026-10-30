# Resend — the steps only you can do

Checked 30 October 2026.

**The sending domain is not verified, and cannot be yet.** The zone
`privatetransfersacrossitaly.com` is live on Cloudflare nameservers
(`edward.ns.cloudflare.com`, `rihana.ns.cloudflare.com` — its SOA answers),
but it is **empty**. Queried against the authoritative nameserver directly,
not a cache:

| Record | Needed for | Found |
|---|---|---|
| `resend._domainkey.privatetransfersacrossitaly.com` TXT | DKIM — mandatory | **NXDOMAIN** |
| `send.privatetransfersacrossitaly.com` TXT | SPF | **NXDOMAIN** |
| `send.privatetransfersacrossitaly.com` MX | bounce handling | **NXDOMAIN** |
| `privatetransfersacrossitaly.com` TXT | any SPF at apex | none |
| `privatetransfersacrossitaly.com` MX | receiving mail | none |
| `_dmarc.privatetransfersacrossitaly.com` TXT | DMARC | none |

Cross-checked on 1.1.1.1 and 8.8.8.8. DKIM is not optional for Resend, so
whatever the Resend dashboard shows, this domain cannot send until the
records exist. I have no Resend credential, so I could not query Resend's own
view of it — but the DNS side is decisive on its own.

---

## 1. Add the domain in Resend

**resend.com/domains → Add Domain →** `privatetransfersacrossitaly.com`.

Pick the region closest to you; it changes the MX value you will be given
(`eu-west-1` for Europe). Resend then shows three records.

**Copy the values from that screen, not from this document.** The DKIM public
key is generated for your domain and nobody can predict it. The shape is:

| Type | Name | Value |
|---|---|---|
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEB…` — unique to you |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| MX | `send` | `feedback-smtp.<region>.amazonses.com`, priority `10` |

## 2. Add them in Cloudflare DNS

**dash.cloudflare.com →** `privatetransfersacrossitaly.com` **→ DNS →
Records.**

Enter the names exactly as Resend gives them — Cloudflare appends the domain,
so the name is `resend._domainkey`, **not**
`resend._domainkey.privatetransfersacrossitaly.com`. Typing the full name
creates `resend._domainkey.privatetransfersacrossitaly.com.privatetransfersacrossitaly.com`,
which is the single commonest reason verification never completes.

Set **Proxy status: DNS only** (grey cloud). TXT and MX records cannot be
proxied, but the toggle sometimes appears anyway.

## 3. Verify

Back in Resend, **Verify DNS Records**. Cloudflare propagates in seconds;
Resend usually confirms within a few minutes.

## 4. Consider DMARC

Not required by Resend, and worth adding once SPF and DKIM pass. Start in
monitor mode so nothing is rejected while you watch:

| Type | Name | Value |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:privatetransfersacrossitaly@gmail.com` |

## 5. The one secret I cannot set

```
npx wrangler secret put RESEND_API_KEY
```

Get it from **resend.com/api-keys**, scope **Sending access**. Paste it at the
prompt, which does not echo. **Do not paste it into a chat, a commit or this
file** — unlike the Access identifiers, this one is a real credential: it can
send mail as your domain.

Already set, verified by `wrangler secret list`:

| Secret | Value |
|---|---|
| `LEAD_ADMIN_EMAIL` | `privatetransfersacrossitaly@gmail.com` |
| `LEAD_FROM_EMAIL` | `Private Transfer Across Italy <bookings@privatetransfersacrossitaly.com>` |
| `LEAD_REPLY_TO_EMAIL` | **deliberately unset** — see `.env.example` |

`mailConfig()` requires the API key, the From address **and** the admin
address together. Two of three means email stays switched off, both statuses
record as `skipped`, and the success page says nothing about email. There is
no half-configured state that sends anything.

## 6. `bookings@` cannot receive replies

There is no MX record on the apex, so nothing can deliver mail *to*
`bookings@privatetransfersacrossitaly.com`. Sending is unaffected — that is
what SPF and DKIM on the `send` subdomain are for — and ordinary replies are
fine, because both messages set a Reply-To that points at the Gmail address.
But a customer whose mail client ignores Reply-To, and every bounce or
out-of-office, goes nowhere.

Fix it free with **Cloudflare Email Routing** (dashboard → Email → Email
Routing): forward `bookings@privatetransfersacrossitaly.com` to the Gmail
address. It adds its own MX records, so do it *after* Resend verification
passes, and do not remove the `send` subdomain records when you do.

## 7. Then test

After `RESEND_API_KEY` is set and the domain is verified — and after a deploy,
since secrets only reach the running Worker:

1. Submit a real enquiry at `/get-a-quote` with an address you can read.
2. The admin notification arrives at the Gmail address. **Reply to it** — the
   reply should address the customer, not yourself.
3. The customer confirmation arrives at the submitted address, in the
   language of the form that was used.
4. In the CRM, that lead shows `admin: sent` and `cust: sent`.
5. Check the From address reads `bookings@privatetransfersacrossitaly.com` and
   that neither message is in spam. If either is, DMARC is the next step.

Step 4 is the one worth watching. `skipped` means the key never reached the
Worker; `failed` means Resend rejected the message, and the commonest reason
is a From address on a domain that is not verified after all.
