-- Widen the allowed values of `leads.status`.
--
--   before: pending, confirmed, completed, cancelled
--   after : pending, quoted, awaiting_customer, confirmed, completed, cancelled
--
-- ⚠️ THIS IS THE ONLY MIGRATION THAT TOUCHES EXISTING ROWS. Read this header
-- before approving it.
--
-- ── Why a rebuild is unavoidable ──────────────────────────────────────────
-- SQLite cannot add to, drop or alter a CHECK constraint. There is no
-- ALTER TABLE form for it. The only supported route is the twelve-step
-- procedure in the SQLite documentation: build a new table with the wanted
-- constraint, copy every row across, drop the original, rename.
--
-- ── The trap this file exists to avoid ────────────────────────────────────
-- `lead_events.lead_id` is declared REFERENCES leads(id) ON DELETE CASCADE.
-- With foreign keys enforced, DROP TABLE leads performs an implicit delete of
-- every row for referential purposes — which cascades, and takes the entire
-- activity history with it. The audit trail would be gone, silently, and the
-- migration would report success.
--
-- `PRAGMA defer_foreign_keys = ON` is supposed to suspend that enforcement
-- until the end of the transaction. **It does not work here.** Tested against
-- a local D1 on 30 October 2026: with the pragma set, lead_events went from
-- 2 rows to 0 and the migration still reported "16 commands executed
-- successfully". `wrangler d1 execute --file` runs each statement on its own,
-- so the pragma's scope ends before DROP TABLE is reached.
--
-- So the events are copied into a plain table first — one with no foreign key,
-- which the cascade therefore cannot touch — and restored afterwards. That is
-- correct whether or not the pragma is honoured, which is the property worth
-- having in a migration that cannot be rehearsed on the real data.
--
-- ── What is preserved ─────────────────────────────────────────────────────
-- Every column, every value, every row id, the updated_at trigger, and all
-- indexes — including the ones added by 0003, which is why this migration
-- must run AFTER it. Column order is preserved so `INSERT INTO ... SELECT *`
-- maps correctly.
--
-- ── What is NOT changed ───────────────────────────────────────────────────
-- No existing row's status value is rewritten. The four current values stay
-- valid; two more become possible.

PRAGMA defer_foreign_keys = ON;

-- Survives the cascade because it has no foreign key of its own. CREATE TABLE
-- AS SELECT copies values and nothing else: no constraints, no references.
DROP TABLE IF EXISTS lead_events_preserved;
CREATE TABLE lead_events_preserved AS SELECT * FROM lead_events;

CREATE TABLE leads_rebuilt (
  id                      TEXT    PRIMARY KEY,
  created_at              TEXT    NOT NULL
                                  CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  updated_at              TEXT    NOT NULL
                                  CHECK (updated_at LIKE '____-__-__T__:__:__%Z'),
  source_form             TEXT    NOT NULL DEFAULT 'Get a Quote',
  locale                  TEXT    NOT NULL DEFAULT 'en'
                                  CHECK (locale IN ('en', 'it')),

  -- The one line this entire migration exists for.
  status                  TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (status IN ('pending', 'quoted', 'awaiting_customer',
                                                    'confirmed', 'completed', 'cancelled')),

  -- Nullable with no default, exactly as production declares it. An earlier
  -- draft wrote NOT NULL DEFAULT 'other' here, which would have tightened the
  -- contract during a migration that is supposed to change one CHECK — and
  -- would have failed outright on any row holding NULL. A rebuild reproduces
  -- the live schema, not the schema one remembers.
  service_type            TEXT,
  trip_type               TEXT    NOT NULL DEFAULT 'one-way'
                                  CHECK (trip_type IN ('one-way', 'return')),
  full_name               TEXT    NOT NULL,
  email                   TEXT    NOT NULL,
  phone_country           TEXT    NOT NULL,
  phone_calling_code      TEXT    NOT NULL,
  phone_national          TEXT    NOT NULL,
  phone_e164              TEXT    NOT NULL,
  pickup                  TEXT    NOT NULL,
  dropoff                 TEXT    NOT NULL,
  pickup_at               TEXT    NOT NULL
                                  CHECK (pickup_at LIKE '____-__-__T__:__:__%Z'),
  pickup_at_local         TEXT    NOT NULL,
  travel_reference        TEXT,
  has_return              INTEGER NOT NULL DEFAULT 0 CHECK (has_return IN (0, 1)),
  return_pickup           TEXT,
  return_dropoff          TEXT,
  return_at               TEXT    CHECK (return_at IS NULL OR return_at LIKE '____-__-__T__:__:__%Z'),
  return_at_local         TEXT,
  return_travel_reference TEXT,
  adults                  INTEGER NOT NULL DEFAULT 1 CHECK (adults   >= 1 AND adults        <= 99),
  children                INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0 AND children      <= 99),
  child_ages              TEXT,
  passengers              INTEGER NOT NULL DEFAULT 1,
  luggage_hold            INTEGER NOT NULL DEFAULT 0 CHECK (luggage_hold  >= 0 AND luggage_hold  <= 99),
  luggage_cabin           INTEGER NOT NULL DEFAULT 0 CHECK (luggage_cabin >= 0 AND luggage_cabin <= 99),
  customer_message        TEXT,
  admin_notes             TEXT,
  idempotency_key         TEXT,
  admin_email_status      TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (admin_email_status    IN ('pending', 'sent', 'failed', 'skipped')),
  customer_email_status   TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (customer_email_status IN ('pending', 'sent', 'failed', 'skipped')),

  -- Added by 0003. Repeated here because a rebuild must reproduce the whole
  -- table, not the version that existed before the previous migration.
  booking_reference       TEXT,
  confirmed_at            TEXT    CHECK (confirmed_at IS NULL OR confirmed_at LIKE '____-__-__T__:__:__%Z'),
  cancelled_at            TEXT    CHECK (cancelled_at IS NULL OR cancelled_at LIKE '____-__-__T__:__:__%Z'),
  cancellation_reason     TEXT,
  currency                TEXT    NOT NULL DEFAULT 'EUR' CHECK (length(currency) = 3),
  quoted_amount_cents     INTEGER CHECK (quoted_amount_cents IS NULL OR quoted_amount_cents >= 0),
  customer_paid_cents     INTEGER CHECK (customer_paid_cents IS NULL OR customer_paid_cents >= 0),
  supplier_cost_cents     INTEGER CHECK (supplier_cost_cents IS NULL OR supplier_cost_cents >= 0),
  commission_cents        INTEGER,
  payment_status          TEXT    NOT NULL DEFAULT 'unpaid'
                                  CHECK (payment_status IN ('unpaid', 'partial', 'paid', 'refunded'))
);

-- Column lists are written out rather than using SELECT *, so that a future
-- column-order difference becomes an error instead of silently shifting every
-- value one field to the left.
INSERT INTO leads_rebuilt (
  id, created_at, updated_at, source_form, locale, status, service_type,
  trip_type, full_name, email, phone_country, phone_calling_code,
  phone_national, phone_e164, pickup, dropoff, pickup_at, pickup_at_local,
  travel_reference, has_return, return_pickup, return_dropoff, return_at,
  return_at_local, return_travel_reference, adults, children, child_ages,
  passengers, luggage_hold, luggage_cabin, customer_message, admin_notes,
  idempotency_key, admin_email_status, customer_email_status,
  booking_reference, confirmed_at, cancelled_at, cancellation_reason,
  currency, quoted_amount_cents, customer_paid_cents, supplier_cost_cents,
  commission_cents, payment_status
)
SELECT
  id, created_at, updated_at, source_form, locale, status, service_type,
  trip_type, full_name, email, phone_country, phone_calling_code,
  phone_national, phone_e164, pickup, dropoff, pickup_at, pickup_at_local,
  travel_reference, has_return, return_pickup, return_dropoff, return_at,
  return_at_local, return_travel_reference, adults, children, child_ages,
  passengers, luggage_hold, luggage_cabin, customer_message, admin_notes,
  idempotency_key, admin_email_status, customer_email_status,
  booking_reference, confirmed_at, cancelled_at, cancellation_reason,
  currency, quoted_amount_cents, customer_paid_cents, supplier_cost_cents,
  commission_cents, payment_status
FROM leads;

DROP TABLE leads;

ALTER TABLE leads_rebuilt RENAME TO leads;

-- ── Recreate everything the original table carried ────────────────────────
-- Copied verbatim from the live schema (`SELECT sql FROM sqlite_master`), not
-- written from memory. An earlier draft of this file renamed five of these and
-- omitted leads_phone_e164_idx entirely — and the test that was supposed to
-- catch it only counted indexes, which came to the same number. Counting is
-- not comparing. The verification in docs/crm-upgrade-phase2.md now diffs
-- names and definitions.
CREATE UNIQUE INDEX IF NOT EXISTS leads_idempotency_key_unique
    ON leads (idempotency_key)
 WHERE idempotency_key IS NOT NULL;
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx     ON leads (status);
CREATE INDEX IF NOT EXISTS leads_pickup_at_idx  ON leads (pickup_at);
CREATE INDEX IF NOT EXISTS leads_phone_e164_idx ON leads (phone_e164);
CREATE INDEX IF NOT EXISTS leads_email_idx      ON leads (lower(email));

-- Added by 0003, recreated here for the same reason as the rest.
CREATE UNIQUE INDEX IF NOT EXISTS leads_booking_reference_unique
    ON leads (booking_reference)
 WHERE booking_reference IS NOT NULL;
CREATE INDEX IF NOT EXISTS leads_status_pickup_at_idx ON leads (status, pickup_at);
CREATE INDEX IF NOT EXISTS leads_confirmed_at_idx
    ON leads (confirmed_at) WHERE confirmed_at IS NOT NULL;
CREATE INDEX IF NOT EXISTS leads_source_form_idx     ON leads (source_form);
CREATE INDEX IF NOT EXISTS leads_payment_status_idx  ON leads (payment_status);

-- ── Restore the audit trail ───────────────────────────────────────────────
-- The rows the cascade removed, put back now that `leads` exists again under
-- its own name so every lead_id resolves. INSERT OR IGNORE so that re-running
-- this migration cannot duplicate them.
INSERT OR IGNORE INTO lead_events (id, lead_id, created_at, actor, event, detail)
SELECT id, lead_id, created_at, actor, event, detail FROM lead_events_preserved;

DROP TABLE lead_events_preserved;

-- The updated_at trigger, with its original WHEN guard so that setting
-- updated_at does not re-fire it.
CREATE TRIGGER IF NOT EXISTS leads_set_updated_at
AFTER UPDATE ON leads
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE leads SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') WHERE id = NEW.id;
END;
