-- ============================================================================
-- Private Transfer Across Italy — lead schema, first migration.
--
-- Run this in the SQL editor of THIS SITE'S OWN Supabase project. It must not
-- be run against the Italy Taxi Service project: these are separate systems
-- with separate data, and nothing here is compatible with that project's
-- `bookings` table by design.
--
-- Two tables:
--   leads        one row per quotation request
--   lead_events  an append-only record of what was done to a lead
--
-- Three decisions worth stating, because each one differs from the reference
-- implementation this schema was modelled on:
--
-- 1. TIMESTAMPS ARE TIMESTAMPS. The reference stores the trip time as TEXT in
--    the browser's "YYYY-MM-DDTHH:MM" form and re-parses it in four places.
--    Here the raw string the form produced is kept for display fidelity AND a
--    real `timestamptz` is stored beside it, so sorting, filtering and "has
--    this leg already happened" are database questions rather than string
--    comparisons.
--
-- 2. THE PHONE NUMBER IS THREE COLUMNS. The reference keeps one free-text
--    field with no validation. Here the ISO country, the calling code, the
--    national number and the canonical E.164 form are all stored: the first
--    is what made validation possible, the last is what makes search,
--    deduplication and click-to-call reliable.
--
-- 3. ROW LEVEL SECURITY IS ON WITH NO POLICY AT ALL. That is not an omission.
--    Every read and write goes through the service role from the server; the
--    browser never holds a database key and never queries these tables. With
--    RLS enabled and no policy granted, a leaked anon key reads nothing.
-- ============================================================================

-- ─── leads ──────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.leads (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Where it came from. There is no `source_site`: this database serves one
  -- website, and a column implying otherwise would invite exactly the shared
  -- arrangement this project was separated out of.
  source_form             TEXT        NOT NULL DEFAULT 'Get a Quote',
  locale                  TEXT        NOT NULL DEFAULT 'en'
                                      CHECK (locale IN ('en', 'it')),

  status                  TEXT        NOT NULL DEFAULT 'pending'
                                      CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),

  -- What was asked for.
  service_type            TEXT,
  trip_type               TEXT        NOT NULL DEFAULT 'one-way'
                                      CHECK (trip_type IN ('one-way', 'return')),

  -- Contact.
  full_name               TEXT        NOT NULL,
  email                   TEXT        NOT NULL,
  phone_country           TEXT        NOT NULL,   -- ISO 3166-1 alpha-2, e.g. "IT"
  phone_calling_code      TEXT        NOT NULL,   -- e.g. "+39"
  phone_national          TEXT        NOT NULL,   -- digits only, no calling code
  phone_e164              TEXT        NOT NULL,   -- e.g. "+393331234567"

  -- Outbound leg.
  pickup                  TEXT        NOT NULL,
  dropoff                 TEXT        NOT NULL,
  pickup_at               TIMESTAMPTZ NOT NULL,
  pickup_at_local         TEXT        NOT NULL,   -- exactly what the form produced
  travel_reference        TEXT,

  -- Return leg. Null throughout when trip_type is 'one-way'.
  has_return              BOOLEAN     NOT NULL DEFAULT FALSE,
  return_pickup           TEXT,
  return_dropoff          TEXT,
  return_at               TIMESTAMPTZ,
  return_at_local         TEXT,
  return_travel_reference TEXT,

  -- Party and luggage.
  adults                  INTEGER     NOT NULL DEFAULT 1 CHECK (adults  >= 1  AND adults   <= 99),
  children                INTEGER     NOT NULL DEFAULT 0 CHECK (children >= 0 AND children <= 99),
  child_ages              TEXT,
  passengers              INTEGER     NOT NULL DEFAULT 1,
  luggage_hold            INTEGER     NOT NULL DEFAULT 0 CHECK (luggage_hold  >= 0 AND luggage_hold  <= 99),
  luggage_cabin           INTEGER     NOT NULL DEFAULT 0 CHECK (luggage_cabin >= 0 AND luggage_cabin <= 99),

  customer_message        TEXT,
  admin_notes             TEXT,

  -- A retried submission resolves to the row it already created.
  idempotency_key         TEXT,

  -- Whether each notification actually went out. The reference logs an email
  -- failure to the console and tells nobody; recording it means a silent
  -- failure is visible on the lead itself.
  admin_email_status      TEXT        NOT NULL DEFAULT 'pending'
                                      CHECK (admin_email_status    IN ('pending', 'sent', 'failed', 'skipped')),
  customer_email_status   TEXT        NOT NULL DEFAULT 'pending'
                                      CHECK (customer_email_status IN ('pending', 'sent', 'failed', 'skipped'))
);

-- A retry cannot create a second lead. Partial, so rows without a key — a
-- manually entered lead, say — are exempt rather than colliding on NULL.
CREATE UNIQUE INDEX IF NOT EXISTS leads_idempotency_key_unique
    ON public.leads (idempotency_key)
 WHERE idempotency_key IS NOT NULL;

-- The CRM's default view is newest first; its filters are status and date.
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx     ON public.leads (status);
CREATE INDEX IF NOT EXISTS leads_pickup_at_idx  ON public.leads (pickup_at);
-- Deduplication and "has this person written before" both key on E.164
-- rather than on whatever they typed, which is the point of storing it.
CREATE INDEX IF NOT EXISTS leads_phone_e164_idx ON public.leads (phone_e164);
CREATE INDEX IF NOT EXISTS leads_email_idx      ON public.leads (lower(email));

-- ─── lead_events ────────────────────────────────────────────────────────────
-- The audit trail the reference system has no equivalent of. Every mutation
-- the CRM makes writes one row here, so a deletion or a status change is
-- attributable afterwards.

CREATE TABLE IF NOT EXISTS public.lead_events (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id    UUID        NOT NULL REFERENCES public.leads (id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- The authenticated user's email, or 'system' for anything automatic.
  actor      TEXT        NOT NULL DEFAULT 'system',
  event      TEXT        NOT NULL,
  detail     JSONB
);

CREATE INDEX IF NOT EXISTS lead_events_lead_id_idx
    ON public.lead_events (lead_id, created_at DESC);

-- ─── updated_at ─────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_set_updated_at ON public.leads;
CREATE TRIGGER leads_set_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ─── Least privilege ────────────────────────────────────────────────────────
-- RLS on, and deliberately no policy. Neither `anon` nor `authenticated` can
-- read, insert, update or delete a row. The service-role key bypasses RLS and
-- is used only from the server, so every access path is one this application
-- controls. If a policy is ever added here, it should be because a specific
-- browser-side read was deliberately chosen — not to make something work.

ALTER TABLE public.leads       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_events ENABLE ROW LEVEL SECURITY;

-- Belt and braces: revoke the blanket grants Supabase gives these roles on
-- new tables in the public schema, so the tables are unreachable even if RLS
-- were later disabled by accident.
REVOKE ALL ON public.leads       FROM anon, authenticated;
REVOKE ALL ON public.lead_events FROM anon, authenticated;
