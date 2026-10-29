import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Who is allowed into the CRM, and how that is decided on the server.
 *
 * ── The defect this file exists to avoid ──────────────────────────────────
 * The system this CRM was modelled on protects itself with a `useEffect`
 * that calls `getSession()` in the browser and redirects if there isn't one.
 * That is a redirect, not a security boundary: it runs after the page has
 * already been sent, it can be skipped by anything that is not a browser,
 * and — more seriously — none of that project's CRM *server actions* checks
 * anything at all before using the service-role key. A server action is
 * reachable by POST; an action id is not a secret. Anyone who finds one can
 * delete a booking.
 *
 * So authorization here is server-side, and it happens in three places that
 * each work on their own:
 *
 *   1. `middleware.ts` turns an unauthenticated request away before any
 *      HTML is produced.
 *   2. every CRM page awaits `requireCrmUser()` before it renders.
 *   3. every CRM server action awaits `requireCrmUser()` as its first
 *      statement, before the service-role client is touched.
 *
 * Three layers because the first is a convenience, the second protects the
 * page, and only the third protects the data. Remove the middleware and
 * nothing becomes readable; remove the check in an action and everything is.
 *
 * ── Authentication is not authorization ───────────────────────────────────
 * A Supabase project's sign-up endpoint can be open. Being *signed in* must
 * therefore not be the same as being allowed into the CRM, or anyone who can
 * create an account in the project can read the customer list. So a session
 * gets a second test: the address must be on the allow-list in
 * `CRM_ALLOWED_EMAILS`.
 *
 * An empty allow-list denies everyone. That is deliberate — a misconfigured
 * deployment should lock the CRM, not open it.
 */

export type CrmUser = { id: string; email: string };

/** The addresses permitted into the CRM, lower-cased. */
function allowList(): string[] {
  return (process.env.CRM_ALLOWED_EMAILS ?? "")
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
}

export function isCrmConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      allowList().length > 0,
  );
}

/**
 * A Supabase client bound to the request's cookies.
 *
 * It uses the **anon** key, never the service role: its only job is to read
 * and refresh the session. Reading a lead is a separate decision, made after
 * this one, with a different client.
 */
export async function createSessionClient() {
  const store = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        getAll: () => store.getAll(),
        setAll: (toSet) => {
          try {
            for (const { name, value, options } of toSet) {
              store.set(name, value, options);
            }
          } catch {
            // Called from a Server Component, where cookies are read-only.
            // The middleware refreshes the session, so this is safe to skip.
          }
        },
      },
    },
  );
}

/**
 * The signed-in CRM user, or `null`.
 *
 * `getUser()` rather than `getSession()`: the session is read from a cookie
 * the client could have written, while `getUser()` revalidates it against
 * the auth server. For an authorization decision only the second is worth
 * anything.
 */
export async function getCrmUser(): Promise<CrmUser | null> {
  if (!isCrmConfigured()) return null;

  const supabase = await createSessionClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user?.email) return null;

  const email = data.user.email.toLowerCase();
  if (!allowList().includes(email)) return null;

  return { id: data.user.id, email };
}

/**
 * The same, but it does not return without one.
 *
 * Every CRM page and every CRM server action starts with this. `redirect()`
 * throws, so there is no path past it — a caller that forgets to check the
 * return value is still stopped.
 */
export async function requireCrmUser(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) redirect("/crm/login");
  return user;
}

/**
 * For server actions, which should refuse rather than redirect.
 *
 * A redirect from an action is a confusing answer to a programmatic call,
 * and it tells an unauthorised caller that the route exists. This throws a
 * flat error instead, with no detail about why.
 */
export async function requireCrmActor(): Promise<CrmUser> {
  const user = await getCrmUser();
  if (!user) throw new Error("Not authorised.");
  return user;
}
