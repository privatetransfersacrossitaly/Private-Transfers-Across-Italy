import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * The database, and the only client this project has.
 *
 * ── Why there is no browser client ────────────────────────────────────────
 * There is nothing for one to do, and no way to make one. A D1 binding exists
 * only inside the Worker: it is handed to server code by the runtime and has
 * no URL, no key and no public endpoint. That is the one genuine security
 * advantage D1 has over the arrangement it replaced — there is no anon key to
 * leak, because there is no key.
 *
 * ── What was lost in the move from Postgres ───────────────────────────────
 * Row-level security. The previous schema enabled RLS with no policy and
 * revoked the blanket grants, so the database itself refused to serve a lead
 * to anything but the service role — a third guard that held even when the
 * application was wrong. D1 has no equivalent. What remains is:
 *
 *   1. the binding is server-side only, per the paragraph above;
 *   2. `server-only` on this file, so importing it from a client component is
 *      a build error rather than a silent leak;
 *   3. every CRM read and write calls `requireCrmUser()` or
 *      `requireCrmActor()` as its first statement.
 *
 * Two guards where there were three. Recorded in
 * `migrations/0001_create_leads.sql` as well, because it is the kind of fact
 * that gets forgotten.
 *
 * ── Why every call goes through `run`/`all`/`first` ───────────────────────
 * D1 has no query builder, so the alternative to a handful of helpers is SQL
 * string-building at 15 call sites. These three take a prepared statement and
 * its bindings and nothing else, so no call site can concatenate a value into
 * SQL by accident.
 */

type D1Env = { DB?: D1Database };

/**
 * The binding, or null when it is absent.
 *
 * Absent is a real state, not an error: `next build` prerenders 130 pages
 * outside a request, where there is no Cloudflare context at all, and an
 * unconfigured or non-Cloudflare host has no binding either. Both must
 * degrade to "this is not set up" rather than crash the route.
 */
function binding(): D1Database | null {
  try {
    const { env } = getCloudflareContext();
    return (env as D1Env).DB ?? null;
  } catch {
    // No Cloudflare context: build time, or a non-Workers runtime.
    return null;
  }
}

export function isDatabaseConfigured(): boolean {
  return binding() !== null;
}

export function getDb(): D1Database {
  const db = binding();
  if (!db) {
    throw new Error(
      "D1 is not available: no DB binding in this context. Check the " +
        "d1_databases block in wrangler.jsonc, and that this code is running " +
        "inside the Worker.",
    );
  }
  return db;
}

/** An ISO-8601 UTC instant in the exact shape the CHECK constraints require. */
export function nowIso(): string {
  return new Date().toISOString();
}

/** A fresh row id. D1 has no `gen_random_uuid()`, so ids come from here. */
export function newId(): string {
  return crypto.randomUUID();
}

/* ── The three query helpers ──────────────────────────────────────────── */

/** A write. Returns the number of rows actually changed. */
export async function run(
  sql: string,
  params: unknown[] = [],
): Promise<number> {
  const result = await getDb()
    .prepare(sql)
    .bind(...params)
    .run();
  return result.meta.changes ?? 0;
}

/** Every matching row. */
export async function all<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  const result = await getDb()
    .prepare(sql)
    .bind(...params)
    .all<T>();
  return result.results ?? [];
}

/** The first matching row, or null. */
export async function first<T>(
  sql: string,
  params: unknown[] = [],
): Promise<T | null> {
  return (
    (await getDb()
      .prepare(sql)
      .bind(...params)
      .first<T>()) ?? null
  );
}

/**
 * Several writes as one transaction.
 *
 * D1 has no interactive transactions; `batch` is the whole of what it offers,
 * and it is atomic. Used where a lead and its first event must both exist or
 * neither does.
 */
export async function batch(
  statements: { sql: string; params?: unknown[] }[],
): Promise<void> {
  const db = getDb();
  await db.batch(
    statements.map(({ sql, params = [] }) => db.prepare(sql).bind(...params)),
  );
}
