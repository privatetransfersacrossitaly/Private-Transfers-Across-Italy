import "server-only";
import { redirect } from "next/navigation";
import { assertCsrf, isSessionConfigured, readSession } from "@/lib/crm/session";

/**
 * Who is allowed into the CRM.
 *
 * ── What changed when Cloudflare Access went ──────────────────────────────
 * This file used to verify an Access JWT: fetch the team's JWKS, check an
 * RS256 signature, then the issuer, audience and expiry, then an allow-list
 * of email addresses. Cloudflare authenticated at the edge and refused
 * unauthenticated requests before the Worker ran at all.
 *
 * Now the application authenticates, with a username and password, and owns
 * the session itself. That is a deliberate reduction in depth and it should
 * be recorded plainly: `/crm` is reachable from the public internet, so the
 * login form, the key derivation and the rate limiter are what stand in
 * front of the lead data, rather than Cloudflare's edge.
 *
 * ── The exports did not change, and that was the point ────────────────────
 * `getCrmUser`, `requireCrmUser`, `requireCrmActor` and `isCrmConfigured`
 * keep the same names and shapes they had under Access. Every CRM page,
 * every server action and both mutations in `lib/crm/leads.ts` call them and
 * needed no edit, so swapping the authentication method could not quietly
 * drop a guard. The only visible difference is that a user is identified by
 * a username rather than an email address.
 *
 * ── Two guards, each sufficient alone ─────────────────────────────────────
 *   1. every CRM page awaits `requireCrmUser()` before it renders;
 *   2. every CRM server action awaits `requireCrmActor()` as its first
 *      statement, and so do `setLeadStatus` and `setLeadNotes` in
 *      lib/crm/leads.ts — the layer closest to the data.
 *
 * `proxy.ts` adds a cheap third check that turns a cookie-less request away
 * early. It is not a security boundary: it can be defeated by sending any
 * cookie at all, and the two guards above are what actually hold.
 */

export type CrmUser = { id: string; username: string };

/**
 * Configured means: a username, a password hash and a session secret are all
 * present. Missing any of them is a locked CRM, not an open one.
 */
export function isCrmConfigured(): boolean {
  return isSessionConfigured();
}

/** The names of whatever is missing, for the setup notice. */
export function missingCrmConfig(): string[] {
  return [
    !process.env.CRM_ADMIN_USERNAME && "CRM_ADMIN_USERNAME",
    !process.env.CRM_ADMIN_PASSWORD_HASH && "CRM_ADMIN_PASSWORD_HASH",
    !(process.env.CRM_SESSION_SECRET && process.env.CRM_SESSION_SECRET.length >= 32) &&
      "CRM_SESSION_SECRET (at least 32 characters)",
  ].filter((value): value is string => Boolean(value));
}

/**
 * The authenticated CRM user, or null.
 *
 * The username is read from the session row, never from anything the browser
 * sent. A cookie proves only that some session exists; which session it is,
 * and who it belongs to, is decided by the database.
 */
export async function getCrmUser(): Promise<CrmUser | null> {
  if (!isCrmConfigured()) return null;

  const session = await readSession();
  if (!session) return null;

  // A session issued to a username that is no longer the configured
  // administrator is refused. Without this, changing CRM_ADMIN_USERNAME
  // would leave every session minted under the old name still working.
  const configured = process.env.CRM_ADMIN_USERNAME;
  if (!configured || session.username !== configured.trim().toLowerCase()) {
    return null;
  }

  return { id: session.id, username: session.username };
}

/**
 * The same, but it does not return without one.
 *
 * Every CRM page starts with this. `redirect()` throws, so there is no path
 * past it — a caller that forgets to check the return value is still stopped.
 */
export async function requireCrmUser(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) redirect("/crm/login");
  return user;
}

/**
 * For server actions, which should refuse rather than redirect.
 *
 * A redirect from an action is a confusing answer to a programmatic call, and
 * it tells an unauthorised caller that the route exists. This throws a flat
 * error instead, with no detail about why.
 */
export async function requireCrmActor(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) throw new Error("Not authorised.");
  return user;
}

/**
 * Authorise a state-changing action: a valid session *and* a CSRF token that
 * belongs to it.
 *
 * Next verifies the Origin header on server actions, which already blocks
 * the classic cross-site POST. This is the second lock: the token is an HMAC
 * over the session id, so it cannot be guessed, it cannot be replayed into a
 * different session, and it dies with the session it came from.
 */
export async function requireCrmActorWithCsrf(
  formData: FormData,
): Promise<CrmUser> {
  const user = await requireCrmActor();
  if (!(await assertCsrf(user.id, formData.get("csrf")))) {
    throw new Error("Not authorised.");
  }
  return user;
}
