"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { ctaVariants } from "@/components/site/cta";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * "Request a quote", following the reader down every page on a phone.
 *
 * ── Why it is a client component ──────────────────────────────────────────
 * It has to know which page it is on, because there is exactly one page it
 * must not appear on: the quotation form itself, where a floating button
 * pointing at the page you are already reading would be noise sitting on top
 * of the thing it points at. A server layout cannot read the current path,
 * so this reads it with `usePathname`.
 *
 * ── Why there is no bar behind it ─────────────────────────────────────────
 * No surface, no scrim, no blur — just the button. A solid strip across the
 * foot of a phone screen covers content and reads as chrome; the button on
 * its own reads as an action. The wrapper is `pointer-events-none` so the
 * transparent space around the button does not swallow taps meant for the
 * page underneath, and the button itself turns pointer events back on.
 *
 * ── Why `md:hidden` ───────────────────────────────────────────────────────
 * From `md` the header's own quote button is on screen and sticky, so a
 * second one would be redundant.
 */
export function StickyQuoteCta({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const target = quotePathFor(locale);

  // Both locales' quote routes, so the Italian page is excluded as well.
  const onQuotePage =
    pathname === quotePathFor("en") || pathname === quotePathFor("it");
  if (onQuotePage) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.875rem,env(safe-area-inset-bottom))] md:hidden">
      <Link
        href={target}
        className={cn(
          ctaVariants({ variant: "primary", size: "lg" }),
          "pointer-events-auto w-full shadow-lg shadow-foreground/20",
        )}
      >
        {label}
      </Link>
    </div>
  );
}
