# Phase 2 — D1 schema design and migrations

Written 30 October 2026. **Nothing has been applied to production.** Both
migrations below were applied to a local D1 and verified; the results are in §6.

Decisions taken from your brief: no contact messages, CRM-only invoices, print
to PDF, no VAT, phased delivery.

---

## 1. Which new tables are required

**For Phase 1 (Core CRM): none.**

That is the main finding. Everything Phase 1 needs — dashboard statistics,
lead editing, confirmation, cancellation, weekly transfers and the activity
log — is satisfied by columns added to `leads` plus the `lead_events` table
that already exists. You asked for the activity log to use `lead_events`, and
it fits: every event Phase 1 produces belongs to a lead.

New tables arrive with the phases that use them, rather than sitting empty for
weeks:

| Phase | Tables | Why not now |
|---|---|---|
| 2 — Drivers | `drivers`, `booking_assignments` | No code reads them until that phase |
| 3 — Invoices | `invoices`, `invoice_items`, `payments` | Same |
| 4 — Reports | none — reports are queries over the above | — |

`contact_messages` is dropped from the plan entirely, per your decision.

**One limitation to note now.** `lead_events.lead_id` is `NOT NULL` with a
foreign key, so it can only record events that belong to a lead. That covers
everything in Phase 1. When Phase 2 adds driver management, an action like
"driver added" belongs to no lead and will not fit. The fix then is either a
nullable `lead_id` or a separate table — deliberately deferred, because
changing it now would mean rebuilding a table for a feature that does not
exist yet.

## 2. Which existing tables and columns are reused

| Existing | Reused for | Change |
|---|---|---|
| `leads` | the booking record itself | 10 columns added |
| `leads.status` | booking status | 2 values added — see §4 |
| `leads.source_form` | "filter by source" | none; indexed |
| `leads.admin_notes` | internal notes | none |
| `leads.pickup_at` | weekly transfers | none; composite index added |
| `leads.admin_email_status` / `customer_email_status` | email outcomes | none |
| `lead_events` | the activity log | none |
| `crm_sessions`, `crm_login_attempts` | authentication | none |

No column is dropped, renamed or retyped. The quote form writes exactly the
columns it writes today.

A `source` column was proposed in the audit and **is not being added**:
`source_form` already holds it, and two columns meaning the same thing is how
they drift apart.

## 3. Relationships created

```
leads (1) ──< lead_events          existing FK, ON DELETE CASCADE
leads (1) ──  booking_reference    unique where not null
```

Phase 1 adds no new foreign keys. Later phases will add:

```
leads (1) ──< booking_assignments >── (1) drivers
leads (1) ──< invoices (1) ──< invoice_items
invoices (1) ──< payments
```

## 4. Will existing data be modified?

**Migration 0003 — no.** Every statement is `ALTER TABLE ... ADD COLUMN`,
which SQLite applies by changing the table header. Existing rows are not
rewritten. It is safe to apply at any time.

**Migration 0004 — yes, and this is the one to think about.**

SQLite cannot add a value to a CHECK constraint. `leads.status` is declared
`CHECK (status IN ('pending','confirmed','completed','cancelled'))`, and
adding `quoted` and `awaiting_customer` requires rebuilding the table: create,
copy, drop, rename.

No row's *values* change. Every row is copied column for column, and no status
is rewritten. But the table is genuinely dropped and recreated, so this is the
one migration where a mistake costs data.

**It found a real bug during testing, which is why it is worth reading.**
`lead_events.lead_id` is declared `ON DELETE CASCADE`. With foreign keys
enforced, `DROP TABLE leads` performs an implicit delete — which cascades.
The first version of this migration used `PRAGMA defer_foreign_keys = ON` to
prevent that. **It did not work.** Tested locally:

```
before:  leads 1,  lead_events 2
after:   leads 1,  lead_events 0        ← the entire audit trail, gone
report:  "16 commands executed successfully"
```

`wrangler d1 execute --file` runs each statement separately, so the pragma's
scope ends before `DROP TABLE` is reached. Had that run against production, the
history would have been deleted silently and the migration would have claimed
success.

The migration now copies `lead_events` into a plain table with no foreign key —
which the cascade cannot reach — and restores it afterwards. That is correct
whether or not the pragma is honoured, which is the property worth having in
something that cannot be rehearsed on the real data.

**Production currently holds 1 lead.** If 0004 is ever going to run, now is the
cheapest moment.

## 5. How to apply and verify safely

### Before

```
npx wrangler d1 export italytransfers --remote --output backup-pre-0003.sql
```

Take the backup even though 0003 is additive. It costs a minute.

Record the baseline:

```
npx wrangler d1 execute italytransfers --remote --command \
  "SELECT (SELECT COUNT(*) FROM leads) AS leads, (SELECT COUNT(*) FROM lead_events) AS events"
```

### Apply

```
npx wrangler d1 execute italytransfers --remote --file=migrations/0003_crm_core_columns.sql
npx wrangler d1 execute italytransfers --remote --file=migrations/0004_leads_status_values.sql
```

0003 can be applied on its own. 0004 depends on it — it reproduces the columns
0003 adds, so running it first would fail.

### Verify

```sql
SELECT
  (SELECT COUNT(*) FROM leads)                          AS leads,        -- unchanged
  (SELECT COUNT(*) FROM lead_events)                     AS events,       -- unchanged
  (SELECT COUNT(*) FROM pragma_table_info('leads'))      AS columns,      -- 46
  (SELECT COUNT(*) FROM sqlite_master
     WHERE type='index' AND tbl_name='leads')            AS indexes,      -- 11
  (SELECT COUNT(*) FROM sqlite_master
     WHERE type='trigger' AND tbl_name='leads')          AS triggers,     -- 1
  (SELECT COUNT(*) FROM sqlite_master
     WHERE name='lead_events_preserved')                 AS temp_left;    -- 0
```

`leads` and `events` must match the baseline exactly. If `events` dropped, stop
and restore from the backup.

Then confirm the constraint took:

```sql
UPDATE leads SET status='quoted' WHERE id='<any id>';      -- must succeed
UPDATE leads SET status='nonsense' WHERE id='<any id>';    -- must fail
```

### Rollback

0003 is additive; nothing needs undoing, and the application tolerates the
columns being present and unused. For 0004, restore the export taken above.

## 6. Test results (local D1, full reset, both migrations)

| Check | Result |
|---|---|
| 0003 applied | 15 statements, no error |
| Existing row intact after 0003 | ✅ name, email, status unchanged |
| Columns 36 → 46 | ✅ |
| `currency` defaults to EUR, `payment_status` to unpaid | ✅ |
| `payment_status='nonsense'` | rejected |
| `quoted_amount_cents=-500` | rejected |
| `confirmed_at='30/10/2026'` | rejected |
| `currency='EUROS'` | rejected |
| 0004 applied | 20 statements, no error |
| **`lead_events` preserved** | **2 → 2** |
| `admin_notes` preserved | ✅ "keep me" |
| `status` preserved | ✅ confirmed |
| Indexes after rebuild | 11 |
| `updated_at` trigger still fires | ✅ |
| Temp table cleaned up | ✅ |
| `pending / quoted / awaiting_customer / confirmed / completed / cancelled` | all accepted |
| `nonsense` | rejected |

## 7. Money representation

Amounts are `INTEGER` counts of minor units, not `REAL`. €125.50 is `12550`.
Binary floating point cannot represent 0.1 exactly, and a transfer business
reconciling supplier costs against customer payments is precisely where that
error surfaces. The application formats for display.

`commission_cents` is nullable: NULL means "derive it as quoted − supplier",
a value means "this was agreed, do not recompute" — for a discount, a refund
or a split that the arithmetic does not describe.

## 8. What I need from you

1. **Approve 0003** — additive, no data touched. Low risk.
2. **Approve 0004 separately** — it rebuilds `leads`. The backup step in §5 is
   not optional. Alternatively, say so and I will keep the four existing
   statuses and drop `quoted` / `awaiting_customer` from the design, which
   avoids the rebuild entirely at the cost of a coarser pipeline.

Nothing is applied to production, deployed or committed until you say so.
