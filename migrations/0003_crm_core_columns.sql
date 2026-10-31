-- CRM core: booking, pricing and lifecycle columns on `leads`.
--
-- ── Purely additive. No existing data is read, rewritten or deleted ───────
-- Every statement is ALTER TABLE ... ADD COLUMN with a NULL default, which
-- SQLite applies by changing the table header only: existing rows are not
-- rewritten and cannot be corrupted by it. No column is dropped, renamed or
-- retyped. The quote form, the public site and every existing query keep
-- working with this applied and with it absent.
--
-- The one change that *does* touch existing rows is widening the `status`
-- CHECK constraint, which SQLite cannot do in place. That is deliberately
-- NOT in this file — see 0004_leads_status_values.sql, which can be approved
-- separately or declined.
--
-- ── Money is stored in minor units, as INTEGER ────────────────────────────
-- Not REAL. 0.1 + 0.2 is not 0.3 in binary floating point, and a booking
-- system that is a cent out on a supplier reconciliation is worse than one
-- that cannot store decimals at all. Every amount below is an integer count
-- of cents: €125.50 is 12550. The application formats for display.
--
-- ── Why commission is stored and not only derived ─────────────────────────
-- Commission is normally quoted_amount_cents - supplier_cost_cents, and the
-- application computes exactly that when `commission_cents` is NULL. The
-- column exists for the case the arithmetic does not cover: an agreed
-- commission that differs from the difference, because of a discount, a
-- refund or a split with the supplier. NULL means "derive it"; a value means
-- "this was agreed, do not recompute".

-- ── Booking identity ──────────────────────────────────────────────────────
-- Assigned when a booking is confirmed, not when the enquiry arrives, so it
-- is NULL for everything still in the pipeline.
ALTER TABLE leads ADD COLUMN booking_reference TEXT;

-- Unique only among rows that have one. A partial index is what lets the
-- many NULLs coexist while still making a duplicate reference impossible.
CREATE UNIQUE INDEX IF NOT EXISTS leads_booking_reference_unique
  ON leads (booking_reference)
  WHERE booking_reference IS NOT NULL;

-- ── Lifecycle timestamps ──────────────────────────────────────────────────
-- ISO-8601 UTC, fixed width, same shape as created_at/updated_at so that
-- string comparison stays chronological. The CHECKs are what make that true;
-- without them one '30/10/2026' would silently corrupt every ORDER BY.
ALTER TABLE leads ADD COLUMN confirmed_at TEXT
  CHECK (confirmed_at IS NULL OR confirmed_at LIKE '____-__-__T__:__:__%Z');

ALTER TABLE leads ADD COLUMN cancelled_at TEXT
  CHECK (cancelled_at IS NULL OR cancelled_at LIKE '____-__-__T__:__:__%Z');

-- Free text. Required by the workflow, never by the database: a cancellation
-- must be recordable even when the reason is not yet known.
ALTER TABLE leads ADD COLUMN cancellation_reason TEXT;

-- ── Money ─────────────────────────────────────────────────────────────────
-- EUR is the default because that is what the business quotes in. The column
-- exists so a non-EUR job is representable without a migration.
ALTER TABLE leads ADD COLUMN currency TEXT NOT NULL DEFAULT 'EUR'
  CHECK (length(currency) = 3);

-- What the customer was quoted.
ALTER TABLE leads ADD COLUMN quoted_amount_cents INTEGER
  CHECK (quoted_amount_cents IS NULL OR quoted_amount_cents >= 0);

-- What the customer has actually paid. Deliberately separate from the quote:
-- a quote is an offer, a payment is a fact, and conflating them is how a
-- revenue report ends up counting money nobody received.
ALTER TABLE leads ADD COLUMN customer_paid_cents INTEGER
  CHECK (customer_paid_cents IS NULL OR customer_paid_cents >= 0);

-- What the local driver or transfer company is owed. Never shown to the
-- customer and never mixed into customer-facing totals.
ALTER TABLE leads ADD COLUMN supplier_cost_cents INTEGER
  CHECK (supplier_cost_cents IS NULL OR supplier_cost_cents >= 0);

-- NULL = derive from quoted - supplier. A value = an agreed override.
-- Negative is permitted: a job taken at a loss is a fact worth recording.
ALTER TABLE leads ADD COLUMN commission_cents INTEGER;

-- Where the customer stands on paying. Distinct from booking status: a
-- confirmed booking can be unpaid, and a cancelled one can already be paid
-- and awaiting refund.
ALTER TABLE leads ADD COLUMN payment_status TEXT NOT NULL DEFAULT 'unpaid'
  CHECK (payment_status IN ('unpaid', 'partial', 'paid', 'refunded'));

-- ── Indexes for the dashboard and reports ─────────────────────────────────
-- The dashboard's weekly view is "confirmed bookings whose pickup falls in
-- the next seven days", which filters on status and ranges over pickup_at.
CREATE INDEX IF NOT EXISTS leads_status_pickup_at_idx
  ON leads (status, pickup_at);

-- Reports group by month over confirmation date.
CREATE INDEX IF NOT EXISTS leads_confirmed_at_idx
  ON leads (confirmed_at)
  WHERE confirmed_at IS NOT NULL;

-- "Filter by source" in the lead list. `source_form` already existed and is
-- reused rather than duplicated into a new `source` column.
CREATE INDEX IF NOT EXISTS leads_source_form_idx
  ON leads (source_form);

-- Payment filtering in the financial views.
CREATE INDEX IF NOT EXISTS leads_payment_status_idx
  ON leads (payment_status);
