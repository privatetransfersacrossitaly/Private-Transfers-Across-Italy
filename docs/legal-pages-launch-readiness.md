# Legal pages — published

**Date:** 29 October 2026
**Status: all six pages are published, indexable and in the sitemap.**

The Privacy Policy, Terms and Conditions and Cancellation and Refund Policy,
in English and Italian, are finished documents written for customers. The
drafting apparatus is gone: no placeholders, no review callouts, no
not-in-force notices.

---

## 1. The facts that made publication possible

| Fact | Where it lands |
|---|---|
| **Private Transfers Across Italy**, operated and managed by an individual, not a company | Privacy §2, Terms §2 |
| Established outside the EU/EEA | Privacy §2, §9 |
| The owner personally handles correspondence, quotations and coordination | Privacy §2, Terms §2 |
| **The customer pays the local transfer company directly**, normally the driver at the end of the journey | Terms §5, §6; Cancellation §1, §3, §4, §9, §10 |
| The transfer company supplies the vehicle and driver and performs the journey | Terms §2, §13; Privacy §7 |
| `privatetransfersacrossitaly@gmail.com` | All six pages |
| Retention: 12 months / 7 years / 3 years | Privacy §10 |

The direct-payment fact did the most work. It resolved payment, refunds,
provider failure and the three-party responsibility split in one go, and it is
why §10 can now say something useful — you are not charged for a journey that
was not provided — rather than declining to set a rule.

**Not published, by instruction:** no commission rate, no margin, no
commercial arrangement between this site and the transfer companies. No
personal name, home address or company registration. Terms §5 says the
customer pays the transfer company and that no fee is added; what sits behind
that is not a customer's business and no section hints at it.

---

## 2. What was removed from the pages

| Removed | Count |
|---|---|
| `[TO BE CONFIRMED]` / `[DA CONFERMARE]` tokens | 8 |
| `section.pending` review callouts | 36 |
| "Not yet in force" notices | 6 |
| "Draft, pending owner confirmation and legal review" status rows | 6 |
| "A working draft" in meta descriptions | 6 |

The mechanisms went too: `draft` and `pending` are gone from `PolicySection`
in `content/legal/types.ts` and from `components/legal/policy-page.tsx`, so
neither can return by accident. `status` remains — in force, from when —
because the Terms depend on it: the version that governs a booking is the one
in force when the booking was confirmed.

**Nothing substantive went with them.** Every limit those callouts flagged is
still disclosed, now in the page's own voice. Cancellation §6 keeps the
60-minute airport rule and says plainly that the written confirmation governs
everywhere else. §4 keeps the 24-hour charge and commits to not applying it
mechanically after illness, a bereavement or a cancelled flight. §12 and Terms
§17 preserve mandatory consumer rights.

---

## 3. Two claims deliberately not made

Both were written, caught on review and tightened before publication.

- **"a licensed local transfer company"** → "a local transfer company". The
  allocation of responsibility is accurate and stays: Terms §2 says the
  company *is responsible for* holding the licences, permits and insurance.
  Certifying that it does would be a claim about a third party nobody has
  verified.
- **"Your booking confirmation also gives you a number to call"** → "tells you
  how to reach us". No telephone number exists.

---

## 4. One thing to do before the pages are served publicly

Privacy §8 names the hosting provider, **Supabase** and **Resend** as the
processors and describes storage and email delivery as operating. That is how
the site is built and what will be true in production — but the accounts are
not connected yet (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
`RESEND_API_KEY` are unset).

**Connect them before the site goes live**, or §8 describes handling that is
not yet happening. This is the same deployment step as setting
`NEXT_PUBLIC_SITE_URL`; see `docs/production-domain-seo-audit.md` §6.

Nothing else blocks. The pages are accurate for the business as described.

---

## 5. Worth a lawyer's eye, not blocking

Published and defensible, but a solicitor would earn their fee on four
provisions. None is a reason to hold the pages back.

1. **The 24-hour charge and the no-show charge** (Cancellation §4, §5). Both
   are "up to 100%" with stated discretion rather than flat and absolute,
   which is what usually survives a consumer-law challenge.
2. **The five-day evidence deadline** (§8), now written as a request with an
   extension available rather than an automatic refusal.
3. **No governing law or chosen court** (Terms §17). Deliberate: a non-EU
   operator choosing its own law against EU consumers is unenforceable anyway.
   §17 says instead that the customer keeps their own country's mandatory
   protection.
4. **No limitation of liability** (Terms §13). Leaving it unstated leaves the
   ordinary law in place, which is the safer of the two defaults.

An EU representative under Article 27 may also be required, given a non-EU
controller offering services into the EU. There is a narrow exemption for
occasional, low-risk processing that may well cover an operation this size,
but it is worth confirming.

---

## 6. Files changed

| File | Change |
|---|---|
| `content/legal/privacy.ts` | 34 replacements, both languages, plus the file header |
| `content/legal/terms.ts` | 24 replacements + 6 claim tightenings, both languages, plus the file header |
| `content/legal/cancellation.ts` | 30 replacements, both languages, plus the file header |
| `content/legal/types.ts` | `draft` and `pending` removed from the types |
| `components/legal/policy-page.tsx` | Draft notice and pending callout removed from the render; unused `Callout` import dropped |
| `lib/routes.ts` | `privacy`, `terms`, `cancellation` → `published: true` |
| `app/(en)/{privacy-policy,terms-and-conditions,cancellation-and-refund}/page.tsx` | `robots: { index: false, follow: false }` removed |
| `app/(it)/it/{privacy,termini-e-condizioni,cancellazione-e-rimborsi}/page.tsx` | Same |
| `scripts/seo-check.mjs` | Draft-exclusion assertions replaced with publication assertions |

Unchanged: navigation, the footer, the quotation form, the CRM, external-link
behaviour, and every city, airport, port and route page.

---

## 7. Validation

`npx tsc --noEmit` clean · `npx eslint .` clean · `npx next build`
**130/130 pages** · `npm run check:seo` **57/57**.

**There is no automated test suite in this project**, and none was added. The
57 assertions are a script run against a production server.

Verified on the six pages in a real build:

| Check | Result |
|---|---|
| All six return 200 | ✅ |
| `robots: index, follow` — no `noindex` in metadata | ✅ |
| No `noindex` response header | ✅ |
| Canonical is absolute, self-referencing, on the production origin | ✅ |
| Reciprocal EN↔IT `hreflang`, each pointing at its counterpart | ✅ |
| Present in the sitemap | ✅ — **122 URLs**, up from 116 |
| 61 English / 61 Italian, one counterpart each | ✅ |
| No drafting text: 13 phrases swept in both languages | ✅ **0 hits** |
| CRM still `X-Robots-Tag: noindex, nofollow` | ✅ |
| External links still do-follow with `noopener`, no internal nofollowed | ✅ |

Nothing was committed, pushed or deployed.
