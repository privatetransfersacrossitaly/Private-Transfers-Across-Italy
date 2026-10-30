-- CRM administrator sessions and login attempts, for Cloudflare D1 (SQLite).
--
-- Added when CRM authentication moved off Cloudflare Access onto a local
-- username and password. Access kept its session at the edge, so the
-- application needed none of this; now the application owns the session and
-- has to store it somewhere it can be revoked.
--
-- Nothing here touches `leads` or `lead_events`. Both tables are new and
-- independent, so this migration cannot affect a single stored enquiry.
--
-- ── Why sessions are in the database and not in a signed cookie ───────────
-- A signed cookie needs no storage and cannot be revoked. "Log out" would
-- mean "delete the copy in this browser", leaving a captured cookie valid
-- until it expired, and there would be no way to end a session from
-- anywhere else. Because the row is authoritative here, DELETE really does
-- invalidate the session: a replayed cookie finds nothing and is refused.
--
-- The cost is one indexed lookup per CRM request. On Workers that lookup is
-- a network wait, which does not count against the 10 ms CPU limit the free
-- plan allows, so it is close to free in the budget that actually binds.
--
-- ── What is NOT stored ────────────────────────────────────────────────────
-- Not the session token. `id` is the SHA-256 of it, so the table holds a
-- verifier rather than a credential: an attacker who reads every row still
-- cannot mint a cookie, because SHA-256 does not run backwards. This is the
-- same reason a password file stores hashes.
--
-- Not the password, and not its hash. That lives in CRM_ADMIN_PASSWORD_HASH,
-- a Worker secret, and never reaches the database.

-- ── Sessions ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS crm_sessions (
  -- SHA-256 (lower-case hex, 64 chars) of the token held in the cookie.
  id TEXT PRIMARY KEY CHECK (length(id) = 64),

  -- Who the session belongs to, as configured in CRM_ADMIN_USERNAME at the
  -- time of login. Recorded so that changing the configured username does
  -- not silently keep old sessions alive under the new name.
  username TEXT NOT NULL CHECK (length(username) BETWEEN 1 AND 190),

  -- ISO-8601 UTC, fixed width so string comparison is chronological. The
  -- CHECKs are what make `expires_at > ?` a correct expiry test in SQL
  -- rather than a lexicographic accident.
  created_at TEXT NOT NULL CHECK (created_at LIKE '____-__-__T__:__:__%Z'),
  expires_at TEXT NOT NULL CHECK (expires_at LIKE '____-__-__T__:__:__%Z'),
  last_seen_at TEXT NOT NULL CHECK (last_seen_at LIKE '____-__-__T__:__:__%Z'),

  -- Diagnostics only. Never used to authenticate: both are attacker-supplied
  -- on every request, so binding a session to them would add no security and
  -- would break the session the moment a mobile network changed the IP.
  ip TEXT,
  user_agent TEXT
);

-- Expiry sweeps and the "is this session still valid" test both filter on
-- expires_at, and the session count stays small, so one index covers it.
CREATE INDEX IF NOT EXISTS idx_crm_sessions_expires_at
  ON crm_sessions (expires_at);

-- ── Login attempts ────────────────────────────────────────────────────────
-- Counted in the database rather than in process memory, for the same reason
-- the quote form's rate limit is: a Worker runs in many isolates at once, and
-- an in-memory counter would let an attacker get N attempts per isolate
-- instead of N in total. That is not a rate limit, it is a suggestion.
CREATE TABLE IF NOT EXISTS crm_login_attempts (
  id TEXT PRIMARY KEY,
  at TEXT NOT NULL CHECK (at LIKE '____-__-__T__:__:__%Z'),

  -- Lower-cased, as submitted. Stored to rate limit per username as well as
  -- per address, so one attacker cannot exhaust the limit for everyone, and
  -- a distributed attack on one account is still counted together.
  username TEXT NOT NULL,

  -- From CF-Connecting-IP. Spoofable in principle, which is exactly why the
  -- username limit exists alongside it rather than instead of it.
  ip TEXT NOT NULL,

  -- 0 = refused, 1 = accepted. Successes are recorded too, so the log can
  -- answer "when did someone last get in", not only "who failed".
  ok INTEGER NOT NULL CHECK (ok IN (0, 1))
);

-- Every rate-limit query is "attempts since T for this ip / this username",
-- so both composite indexes lead with the filtered column and end with the
-- range column.
CREATE INDEX IF NOT EXISTS idx_crm_login_attempts_ip_at
  ON crm_login_attempts (ip, at);
CREATE INDEX IF NOT EXISTS idx_crm_login_attempts_username_at
  ON crm_login_attempts (username, at);

-- Supports pruning old rows, which nothing does automatically: the table is
-- swept opportunistically on login. Without the index that sweep would be a
-- full scan on every attempt.
CREATE INDEX IF NOT EXISTS idx_crm_login_attempts_at
  ON crm_login_attempts (at);
