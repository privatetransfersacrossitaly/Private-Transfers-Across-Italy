import { NextResponse, type NextRequest } from "next/server";

/**
 * A cheap first refusal for the CRM.
 *
 * This is Next 16's `proxy.ts`, which replaces the old `middleware.ts`
 * convention — same request-time position, new file name and export name.
 *
 * ── What changed when Supabase Auth went ──────────────────────────────────
 * It used to create a Supabase client, revalidate the session against the
 * auth server and refresh the session cookie, because a Server Component
 * cannot write cookies. None of that is needed now: Cloudflare Access owns
 * the session, issues the cookie and refuses unauthenticated requests at the
 * edge, before this Worker is invoked at all.
 *
 * So what is left is deliberately thin — a request with no Access assertion
 * is turned away before any HTML is produced. It does **not** verify the
 * token. Verification needs a network fetch for the team's signing keys, and
 * doing that in the proxy would put a round trip in front of every CRM
 * request to duplicate a check that `lib/crm/auth.ts` already makes properly.
 *
 * ── Why this is not the security boundary ─────────────────────────────────
 * It is the third-cheapest of three guards and the only one that can be
 * misconfigured into uselessness by editing a matcher. The ones that hold:
 *
 *   1. Cloudflare Access, at the edge, before this runs.
 *   2. `requireCrmUser()` in every CRM page, which verifies the JWT
 *      signature, issuer, audience and expiry and then checks the allow-list.
 *   3. `requireCrmActor()` as the first statement of every CRM server
 *      action, for the same reason — an action is reachable by POST and an
 *      action id is not a secret.
 *
 * Delete this file and nothing becomes readable. Delete the check in an
 * action and everything does.
 */

/** Reachable without an Access assertion, because it is what explains why. */
const PUBLIC_CRM_PATHS = ["/crm/denied"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_CRM_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // Presence only. `lib/crm/auth.ts` decides whether it means anything.
  const assertion =
    request.headers.get("cf-access-jwt-assertion") ??
    request.cookies.get("CF_Authorization")?.value ??
    null;

  if (!assertion) {
    const target = request.nextUrl.clone();
    target.pathname = "/crm/denied";
    target.search = "";
    const response = NextResponse.redirect(target);
    // `next.config.ts` sets `X-Robots-Tag` on `/crm/:path*`, but those headers
    // attach to rendered responses. A redirect produced here never passes
    // through that layer and went out bare, and a 307 is indexable in
    // principle. Set only here, so a rendered response does not get it twice.
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

/**
 * CRM routes only.
 *
 * Every other page on this site is static and public, and running this on
 * them would cost an invocation per request for nothing.
 */
export const config = {
  matcher: ["/crm/:path*"],
};
