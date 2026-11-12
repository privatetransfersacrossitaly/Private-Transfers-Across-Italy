-- The blog: authors and posts, for Cloudflare D1 (SQLite).
--
-- A translation of the Italy Taxi Service blog schema
-- (italytaxi/supabase/migrations/create_blog_tables.sql and
-- add_blogs_language.sql), column for column, plus three additions noted
-- below. Every other difference is forced by SQLite, as in 0001.
--
-- ── Additive only ─────────────────────────────────────────────────────────
-- Two new tables and their indexes. Nothing here reads, alters or rebuilds
-- `leads`, `lead_events` or the CRM tables, so applying this to the live
-- database changes nothing that already works. `IF NOT EXISTS` throughout,
-- so a second run is a no-op.
--
-- ── What changed in translation ───────────────────────────────────────────
--
-- 1. `bloggers.id` no longer references an auth user. In Supabase it was
--    `REFERENCES auth.users(id)`; this project has no blogger accounts, so
--    an author is a profile and nothing more. Posts are written by the
--    publish script (scripts/blog/publish.mjs), exactly as Italy Taxi's are
--    written by its seed scripts — there was never a blogger login there
--    either.
--
-- 2. UUIDs, timestamps and booleans follow 0001: TEXT ids from
--    crypto.randomUUID(), ISO-8601 UTC strings constrained by CHECK, and
--    INTEGER 0/1 for `is_active`.
--
-- 3. `tags` is TEXT holding a JSON array. Italy Taxi stores `text[]`; SQLite
--    has no arrays. Constrained to valid JSON so it cannot hold junk.
--
-- 4. RLS is gone, as everywhere in D1 (see 0001, point 6). Its job here was
--    "the public may read published rows only". That rule now lives in the
--    one place posts are read for the public — lib/blog/repository.ts —
--    where every public query carries `status = 'published'`.
--
-- ── Additions ─────────────────────────────────────────────────────────────
--
-- a. `featured_image_alt`. Italy Taxi reused the title as alt text; a real
--    description is better for accessibility and image search.
--
-- b. The slug is unique per language, not globally. English posts live at
--    /blog/<slug> and Italian at /it/blog/<slug>, so the two never collide
--    in a URL; a global constraint would only forbid a legitimate case.
--
-- c. One Italian translation per English post at most, enforced by a
--    partial unique index on `translation_of`. Italy Taxi relied on the seed
--    scripts never doing otherwise; hreflang breaks if they ever do.

CREATE TABLE IF NOT EXISTS bloggers (
  id          TEXT PRIMARY KEY,
  full_name   TEXT NOT NULL CHECK (length(trim(full_name)) > 0),
  email       TEXT,
  avatar_url  TEXT,
  bio         TEXT,
  is_active   INTEGER NOT NULL DEFAULT 1 CHECK (is_active IN (0, 1)),
  created_at  TEXT NOT NULL CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  updated_at  TEXT NOT NULL CHECK (updated_at LIKE '____-__-__T__:__:__%Z')
);

CREATE TABLE IF NOT EXISTS blogs (
  id                  TEXT PRIMARY KEY,

  -- 'en' rows are originals at /blog/<slug>; 'it' rows at /it/blog/<slug>.
  language            TEXT NOT NULL DEFAULT 'en' CHECK (language IN ('en', 'it')),
  -- Lowercase letters, digits and single hyphens; no leading/trailing hyphen.
  slug                TEXT NOT NULL CHECK (
                        length(slug) BETWEEN 3 AND 120
                        AND slug NOT GLOB '*[^a-z0-9-]*'
                        AND slug NOT LIKE '-%'
                        AND slug NOT LIKE '%-'
                        AND slug NOT LIKE '%--%'
                      ),
  -- Italian rows only: the slug of the English post this one translates.
  translation_of      TEXT CHECK (translation_of IS NULL OR language = 'it'),

  title               TEXT NOT NULL CHECK (length(trim(title)) > 0),
  excerpt             TEXT,
  -- HTML. Rendered as stored, after lib/blog/content.ts has added heading
  -- ids, applied the site's nofollow rule to external links and removed
  -- anything executable.
  content             TEXT NOT NULL DEFAULT '',
  featured_image_url  TEXT,
  featured_image_alt  TEXT,
  category            TEXT NOT NULL DEFAULT 'Travel guide',
  tags                TEXT NOT NULL DEFAULT '[]' CHECK (json_valid(tags) AND json_type(tags) = 'array'),

  status              TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id           TEXT REFERENCES bloggers(id) ON DELETE SET NULL,
  read_time           TEXT,

  seo_title           TEXT,
  seo_description     TEXT,
  focus_keyword       TEXT,

  created_at          TEXT NOT NULL CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  updated_at          TEXT NOT NULL CHECK (updated_at LIKE '____-__-__T__:__:__%Z'),
  published_at        TEXT CHECK (published_at IS NULL OR published_at LIKE '____-__-__T__:__:__%Z'),

  -- A published post always has a publication date; the listing sorts on it.
  CHECK (status = 'draft' OR published_at IS NOT NULL)
);

CREATE UNIQUE INDEX IF NOT EXISTS blogs_language_slug_key
  ON blogs (language, slug);

CREATE UNIQUE INDEX IF NOT EXISTS blogs_translation_of_key
  ON blogs (translation_of)
  WHERE translation_of IS NOT NULL;

-- The listing query: published, one language, newest first.
CREATE INDEX IF NOT EXISTS blogs_listing_idx
  ON blogs (status, language, published_at DESC);

CREATE TRIGGER IF NOT EXISTS blogs_set_updated_at
  AFTER UPDATE ON blogs
  FOR EACH ROW
  WHEN NEW.updated_at = OLD.updated_at
  BEGIN
    UPDATE blogs
       SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
     WHERE id = NEW.id;
  END;

CREATE TRIGGER IF NOT EXISTS bloggers_set_updated_at
  AFTER UPDATE ON bloggers
  FOR EACH ROW
  WHEN NEW.updated_at = OLD.updated_at
  BEGIN
    UPDATE bloggers
       SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
     WHERE id = NEW.id;
  END;
