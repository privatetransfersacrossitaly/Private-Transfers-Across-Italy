import Link from "next/link";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import type { AirportRoute } from "@/content/sicily";

/**
 * The two pieces every Sicily airport page needs and none of them should
 * reimplement.
 *
 * This is deliberately small. The three airport pages are meant to look
 * unlike each other — PMO is a departures board, CTA a three-way route
 * comparison, TPS a single narrow column — so almost nothing is shared
 * between them. What IS shared is behaviour rather than appearance: how a
 * place name becomes a link only once its page exists, and how a route that
 * has no page at all still gets named. Duplicating that logic three times
 * would be three chances to get the published-gate wrong.
 *
 * Colour comes in as a prop because each page owns its own palette.
 */

/** A page name that is a link only when the page is published. */
export function PlaceLink({
  id,
  locale,
  color,
}: {
  id: PageId;
  locale: Locale;
  color: string;
}) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color }}
    >
      {label}
    </Link>
  );
}

/**
 * A route's name.
 *
 * `id: null` means a place we are willing to name but hold no page for —
 * Marsala, from Trapani's airport. It renders as plain text from the
 * content's own `name`, which is the only place in the cluster where a
 * destination string is written by hand rather than read from the registry.
 */
export function RouteName({
  route,
  locale,
  color,
}: {
  route: AirportRoute;
  locale: Locale;
  color: string;
}) {
  if (route.id === null) {
    return <span style={{ color }}>{route.name}</span>;
  }
  return <PlaceLink id={route.id} locale={locale} color={color} />;
}
