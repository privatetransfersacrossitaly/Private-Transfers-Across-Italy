import Link from "next/link";
import { cn } from "cn";
import { pageName } from "@/content/page-names";
import { pathFor, trailFor, type PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * The trail from the homepage to the page you are on.
 *
 * It follows the content hierarchy rather than the URL segments: an airport's
 * parent is the Rome hub, although its path begins `/airports/`. The reason
 * is in `docs/rome-ia-decisions.md` — `/airports` is a path segment with no
 * page behind it, and a breadcrumb level that 404s is worse than one that
 * does not mirror the path.
 *
 * The last item is the current page: it is text rather than a link, and
 * carries `aria-current="page"`. The matching `BreadcrumbList` markup is
 * generated from the same trail, so the two cannot disagree.
 */
export function Breadcrumbs({
  id,
  locale,
  label,
  tone = "default",
  className,
}: {
  id: PageId;
  locale: Locale;
  /** Localised accessible name for the nav landmark, e.g. "Breadcrumb". */
  label: string;
  tone?: "default" | "deep";
  className?: string;
}) {
  const trail = trailFor(id);
  const deep = tone === "deep";

  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 type-caption">
        {trail.map((step, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={step} className="flex items-center gap-2">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className={deep ? "text-deep-muted/60" : "text-border-strong"}
                >
                  /
                </span>
              ) : null}
              {last ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    deep ? "text-deep-foreground" : "text-foreground",
                  )}
                >
                  {pageName(step, locale)}
                </span>
              ) : (
                <Link
                  href={pathFor(step, locale)}
                  className={cn(
                    "inline-flex min-h-6 items-center py-1 underline decoration-transparent underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    deep
                      ? "text-deep-muted hover:text-deep-foreground hover:decoration-current"
                      : "text-muted-foreground hover:text-foreground hover:decoration-current",
                  )}
                >
                  {pageName(step, locale)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
