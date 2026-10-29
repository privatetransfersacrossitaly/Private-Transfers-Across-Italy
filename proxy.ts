import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * The first of the three guards on the CRM.
 *
 * This is Next 16's `proxy.ts`, which replaces the old `middleware.ts`
 * convention — same request-time position, new file name and export name.
 *
 * It turns an unauthenticated request away before any HTML is produced,
 * which is what the system this was modelled on does not do: there the page
 * is sent, hydrates, and *then* a `useEffect` decides whether the visitor
 * should have seen it.
 *
 * It is deliberately not the only guard. This is the right place to
 * redirect and the wrong place to rely on — it is easy to misconfigure a
 * matcher, and a route that slips past it must still be safe. So every CRM
 * page and every CRM server action repeats the check for itself. See
 * `lib/crm/auth.ts`.
 *
 * This also refreshes the auth cookie on each request, which is the one
 * thing a Server Component cannot do: cookies are read-only there.
 */

const PUBLIC_CRM_PATHS = ["/crm/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Unconfigured: let the request through to the page, which says so. The
  // pages themselves still refuse to render lead data without a user.
  if (!url || !anonKey) return response;

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (toSet) => {
        for (const { name, value } of toSet) {
          request.cookies.set(name, value);
        }
        response = NextResponse.next({ request });
        for (const { name, value, options } of toSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  // Revalidates against the auth server rather than trusting the cookie.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublic = PUBLIC_CRM_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (!user && !isPublic) {
    const target = request.nextUrl.clone();
    target.pathname = "/crm/login";
    target.search = "";
    return NextResponse.redirect(target);
  }

  // Already signed in and asking for the login page: send them onward.
  if (user && isPublic) {
    const target = request.nextUrl.clone();
    target.pathname = "/crm";
    target.search = "";
    return NextResponse.redirect(target);
  }

  return response;
}

/**
 * CRM routes only.
 *
 * Every other page on this site is static and public, and running
 * middleware on them would cost a function invocation per request for
 * nothing.
 */
export const config = {
  matcher: ["/crm/:path*"],
};
