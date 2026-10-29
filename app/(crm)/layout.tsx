import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../globals.css";

/**
 * Root layout for the CRM.
 *
 * ── Why the CRM is its own route group ────────────────────────────────────
 * It was briefly nested under `(en)`, which was wrong in a way a screenshot
 * made obvious: that group's layout wraps its children in the public site
 * header and footer, so the CRM login page rendered under a navbar offering
 * "Request a quote" and a language switch. A back office is not a page of
 * the website.
 *
 * A route group needs its own root layout to be free of that, so this is a
 * third one alongside `(en)` and `(it)`. It carries the same fonts and the
 * same stylesheet — the CRM is meant to look like the same product — and
 * nothing else. No header, no footer, no language switch, no call to
 * action.
 *
 * ── `lang="en"` and no Italian counterpart ────────────────────────────────
 * Deliberate. The CRM is an internal tool for one operator, the reference
 * system's CRM is English-only too, and a half-translated back office is
 * worse than an untranslated one.
 *
 * ── Kept out of search, three ways ────────────────────────────────────────
 * `noindex, nofollow` here; an `X-Robots-Tag` header in `next.config.ts`
 * that also covers redirects and errors this metadata cannot; and absence
 * from `lib/routes.ts`, which is the only source the sitemap is built from.
 */

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

/**
 * Every CRM page reads the session at request time, so none can be
 * prerendered into a static shell — and a back office that served a cached
 * shell of someone else's session would be a defect, not an optimisation.
 * `export const dynamic` is rejected outright alongside `cacheComponents`
 * in this version; `instant = false` is how the same thing is said here.
 */
export const instant = false;

export const metadata: Metadata = {
  title: { absolute: "CRM" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CrmRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
