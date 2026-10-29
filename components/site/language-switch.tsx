"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { counterpartForPath } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * Switches language without losing the page.
 *
 * It resolves the current path to its counterpart through the route
 * registry, so a reader on the Civitavecchia page in English lands on the
 * Civitavecchia page in Italian rather than at the top of the Italian
 * homepage. A path with no counterpart — a not-found, for instance — falls
 * back to the other language's homepage, which always exists.
 *
 * Client-side only because it needs the current path, and the header is
 * rendered by the layout, which cannot know it.
 */
export function LanguageSwitch({
  other,
  label,
  className,
}: {
  other: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const href = counterpartForPath(pathname, other);
  const code = other.toUpperCase();

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      aria-label={`${label}: ${code}`}
      className={cn(
        "min-h-11 items-center rounded-md border border-border-strong px-2.5 type-caption font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:bg-surface-sunken hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      {code}
    </Link>
  );
}
