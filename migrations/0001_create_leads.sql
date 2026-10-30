-- Leads and lead events, for Cloudflare D1 (SQLite).
--
-- A translation of supabase/migrations/001_create_leads.sql, column for
-- column. Every difference below is forced by SQLite, and each one costs
-- something the Postgres schema was relying on, so each is recorded.
--
-- ── What SQLite cannot do, and what replaces it ────────────────────────────
--
-- 1. No UUID type, no gen_random_uuid(). `id` is TEXT and the application
--    supplies crypto.randomUUID(). A row inserted without an id is now a bug
--    the database cannot catch, so lib/db/d1.ts exposes newId() and every
--    insert uses it.
--
-- 2. No TIMESTAMPTZ. Instants are TEXT in strict ISO-8601 UTC with a
--    trailing Z, which sorts and compares correctly as a string precisely
--    because the format is fixed-width. The CHECK constraints enforce that
--    shape. That matters more than it sounds: without them, one row holding
--    '29/10/2026' would silently corrupt every ORDER BY created_at in the
--    CRM. Postgres enforced it by type; here it is enforced by assertion.
--
-- 3. No native boolean. `has_return` is INTEGER 0/1, constrained to those two
--    values so it cannot drift to 2 or -1.
--
-- 4. No JSONB. `lead_events.detail` is TEXT holding JSON, serialised by the
--    application. Nothing queries inside it, so no capability is lost.
--
-- 5. No PL/pgSQL. The updated_at trigger is a SQLite AFTER UPDATE trigger
--    with a WHEN guard, so setting updated_at does not re-fire it.
--
-- 6. **No row-level security, and no roles to revoke from.** This is the real
--    loss. In Postgres, RLS with no policy plus
--    `REVOKE ALL ... FROM anon, authenticated` meant the database itself
--    refused to serve a lead to anything but the service role — a third
--    guard that held even when the application was wrong. D1 has no
--    equivalent at any price. What replaces it is narrower:
--      - a D1 binding exists only inside the Worker, so there is no public
--        endpoint and no anon key that reaches the data;
--      - lib/db/d1.ts is `server-only`, so importing it into a client
--        component is a build error;
--      - every CRM read and write calls requireCrmUser() or
--        requireCrmActor() as its first statement.
--    Two guards where there were three, and not recoverable inside D1.
--
-- CHECK constraints, partial unique indexes, expression indexes and foreign
-- keys with ON DELETE CASCADE all exist in SQLite and are kept. D1 enables
-- foreign_keys by default.
--
-- Safe to re-run: every statement is IF NOT EXISTS, and nothing is dropped.

-- ── leads ─────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS leads (
  id                      TEXT    PRIMARY KEY,

  -- ISO-8601 UTC, e.g. 2026-10-29T13:25:21.630Z. The CHECK is what makes
  -- lexical ordering equal chronological ordering.
  created_at              TEXT    NOT NULL
                                  CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  updated_at              TEXT    NOT NULL
                                  CHECK (updated_at LIKE '____-__-__T__:__:__%Z'),

  -- Where it came from. There is no `source_site`: this database serves one
  -- website, and a column implying otherwise would invite exactly the shared
  -- arrangement this project was separated out of.
  source_form             TEXT    NOT NULL DEFAULT 'Get a Quote',
  locale                  TEXT    NOT NULL DEFAULT 'en'
                                  CHECK (locale IN ('en', 'it')),

  status                  TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),

  -- What was asked for.
  service_type            TEXT,
  trip_type               TEXT    NOT NULL DEFAULT 'one-way'
                                  CHECK (trip_type IN ('one-way', 'return')),

  -- Contact.
  full_name               TEXT    NOT NULL,
  email                   TEXT    NOT NULL,
  phone_country           TEXT    NOT NULL,   -- ISO 3166-1 alpha-2, e.g. "IT"
  phone_calling_code      TEXT    NOT NULL,   -- e.g. "+39"
  phone_national          TEXT    NOT NULL,   -- digits only, no calling code
  phone_e164              TEXT    NOT NULL,   -- e.g. "+393331234567"

  -- Outbound leg.
  pickup                  TEXT    NOT NULL,
  dropoff                 TEXT    NOT NULL,
  pickup_at               TEXT    NOT NULL
                                  CHECK (pickup_at LIKE '____-__-__T__:__:__%Z'),
  pickup_at_local         TEXT    NOT NULL,   -- exactly what the form produced
  travel_reference        TEXT,

  -- Return leg. Null throughout when trip_type is 'one-way'.
  has_return              INTEGER NOT NULL DEFAULT 0 CHECK (has_return IN (0, 1)),
  return_pickup           TEXT,
  return_dropoff          TEXT,
  return_at               TEXT
                                  CHECK (return_at IS NULL OR return_at LIKE '____-__-__T__:__:__%Z'),
  return_at_local         TEXT,
  return_travel_reference TEXT,

  -- Party and luggage. The upper bounds are not decoration: they are what
  -- stops a scripted submission claiming 10^9 passengers.
  adults                  INTEGER NOT NULL DEFAULT 1 CHECK (adults   >= 1 AND adults        <= 99),
  children                INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0 AND children      <= 99),
  child_ages              TEXT,
  passengers              INTEGER NOT NULL DEFAULT 1,
  luggage_hold            INTEGER NOT NULL DEFAULT 0 CHECK (luggage_hold  >= 0 AND luggage_hold  <= 99),
  luggage_cabin           INTEGER NOT NULL DEFAULT 0 CHECK (luggage_cabin >= 0 AND luggage_cabin <= 99),

  customer_message        TEXT,
  admin_notes             TEXT,

  -- A retried submission resolves to the row it already created.
  idempotency_key         TEXT,

  -- Whether each notification actually went out. 'skipped' is a real outcome
  -- rather than a failure: it is what an unconfigured mailer records, so an
  -- unconfigured deployment stays distinguishable from a broken one.
  admin_email_status      TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (admin_email_status    IN ('pending', 'sent', 'failed', 'skipped')),
  customer_email_status   TEXT    NOT NULL DEFAULT 'pending'
                                  CHECK (customer_email_status IN ('pending', 'sent', 'failed', 'skipped'))
);

-- Partial unique index, exactly as in Postgres: a null key is not a
-- collision, so rows written before idempotency existed stay insertable.
CREATE UNIQUE INDEX IF NOT EXISTS leads_idempotency_key_unique
    ON leads (idempotency_key)
 WHERE idempotency_key IS NOT NULL;

-- The CRM's default view is newest first; its filters are status and date.
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx     ON leads (status);
CREATE INDEX IF NOT EXISTS leads_pickup_at_idx  ON leads (pickup_at);
-- Deduplication and "has this person written before" both key on E.164
-- rather than on whatever they typed, which is the point of storing it.
CREATE INDEX IF NOT EXISTS leads_phone_e164_idx ON leads (phone_e164);
CREATE INDEX IF NOT EXISTS leads_email_idx      ON leads (lower(email));

-- ── lead_events ───────────────────────────────────────────────────────────
-- The audit trail. Every mutation the CRM makes writes one row here, so a
-- status change or a note is attributable afterwards.

CREATE TABLE IF NOT EXISTS lead_events (
  id         TEXT PRIMARY KEY,
  lead_id    TEXT NOT NULL REFERENCES leads (id) ON DELETE CASCADE,
  created_at TEXT NOT NULL
                  CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  -- The authenticated user's email, or 'system' for anything automatic.
  actor      TEXT NOT NULL DEFAULT 'system',
  event      TEXT NOT NULL,
  -- JSON, serialised by the application. Was JSONB; nothing queries inside
  -- it, so TEXT loses no capability here.
  detail     TEXT
);

CREATE INDEX IF NOT EXISTS lead_events_lead_id_idx
    ON lead_events (lead_id, created_at DESC);

-- ── updated_at ────────────────────────────────────────────────────────────
-- Replaces the PL/pgSQL BEFORE UPDATE trigger. SQLite has no BEFORE-row
-- mutation, so this is AFTER UPDATE with a second write, and the WHEN guard
-- stops it firing on its own write and recursing.

CREATE TRIGGER IF NOT EXISTS leads_set_updated_at
AFTER UPDATE ON leads
FOR EACH ROW
WHEN NEW.updated_at = OLD.updated_at
BEGIN
  UPDATE leads
     SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
   WHERE id = NEW.id;
END;
