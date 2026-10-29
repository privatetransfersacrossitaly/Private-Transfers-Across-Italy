import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * The database client, and the only one this project has.
 *
 * ── Why there is no browser client ────────────────────────────────────────
 * The system this was modelled on exposes an anon-key client to the browser
 * and lets the CRM query the lead table directly from a visitor's machine.
 * Its entire data protection is therefore whatever row-level policy happens
 * to be configured, and that could not be verified from its repository.
 *
 * This project does the opposite: `001_create_leads.sql` enables RLS with no
 * policy and revokes the blanket grants, so neither `anon` nor
 * `authenticated` can read a lead at all. Every read and write goes through
 * the service role, from the server, in code that has already checked who is
 * asking. There is nothing for a browser client to do, so there isn't one.
 *
 * ── Why `server-only` ─────────────────────────────────────────────────────
 * The first line of this file makes importing it from a client component a
 * build error rather than a silent leak of the service-role key into the
 * bundle. It is the cheapest guarantee available and it is worth more than a
 * comment asking people not to.
 */

let client: SupabaseClient | null = null;

export type DbConfig = { url: string; serviceKey: string };

/** The configuration, or nothing when it has not been set. */
export function dbConfig(): DbConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return { url, serviceKey };
}

export function isDatabaseConfigured(): boolean {
  return dbConfig() !== null;
}

/**
 * The service-role client.
 *
 * Built on first use, not at module load: an unconfigured deployment must
 * degrade to "this is not set up yet" rather than crash every route that
 * imports this file. Callers check `isDatabaseConfigured()` first and report
 * the honest answer; this throws only if one forgets.
 */
export function getDb(): SupabaseClient {
  const config = dbConfig();
  if (!config) {
    throw new Error(
      "Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }
  if (!client) {
    client = createClient(config.url, config.serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}
