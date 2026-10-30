import { NextResponse, type NextRequest } from "next/server";

/**
 * A cheap first refusal for the CRM.
 *
 * This is Next 16's `proxy.ts`, which replaces the old `middleware.ts`
 * convention — same request-time position, new file name and export name.
 *
 * ── What changed when Cloudflare Access went ──────────────────────────────
 * Under Access, Cloudflare refused unauthenticated requests at the edge and
 * this file only had to notice that the Access assertion was missing. Now the
 * application owns the session, so what it notices is a missing session
 * cookie — and the consequence of being wrong is larger, because there is no
 * longer an edge refusal behind it.
 *
 * It still does **not** validate the session. Validation means an HMAC check
 * and a D1 lookup, and doing that here would duplicate, on every request,
 * work that `lib/crm/auth.ts` already does properly a moment later. What this
 * buys is that a request with no cookie at all never renders a page.
 *
 * ── Why this is not the security boundary ─────────────────────────────────
 * It can be defeated by sending any cookie whatsoever. The guards that hold:
 *
 *   1. `requireCrmUser()` in every CRM page, which verifies the cookie
 *      signature, looks the session up, and enforces both expiry clocks.
 *   2. `requireCrmActorWithCsrf()` in every CRM server action, and
 *      `requireCrmActor()` inside `setLeadStatus` and `setLeadNotes` — the
 *      layer closest to the data. An action is reachable by POST and an
 *      action id is not a secret.
 *
 * Delete this file and nothing becomes readable. Delete the check in an
 * action and everything does.
 */

/**
 * Reachable without a session, because they are how a session is obtained.
 *
 * `/crm/login` renders the form and makes no lead query. Nothing else under
 * `/crm` belongs here, and adding a path to this list is the one edit in this
 * file that could expose data.
 */
const PUBLIC_CRM_PATHS = ["/crm/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_CRM_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // Presence only. `lib/crm/auth.ts` decides whether it means anything.
  if (!request.cookies.get("crm_session")?.value) {
    const target = request.nextUrl.clone();
    target.pathname = "/crm/login";
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
