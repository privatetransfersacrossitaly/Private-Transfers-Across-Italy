import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StickyQuoteCta } from "@/components/site/sticky-quote-cta";
import { homeContent } from "@/content/home";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "../globals.css";

/**
 * Root layout for the Italian site.
 *
 * There is one of these per language because `<html lang>` has to be right
 * for each, and a server layout cannot read the current path. The two are
 * deliberately identical apart from the locale they pass down: the design
 * system, the header, the footer and the fonts are shared files, so there is
 * no second design system hiding in here.
 *
 * Both typefaces are self-hosted by `next/font` at build time — no request to
 * a font CDN — and both are licensed under the SIL Open Font License.
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
};

export default function ItalianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const chrome = homeContent.it.chrome;

  return (
    <html lang="it">
      <body className={`${body.variable} ${display.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-deep focus:px-4 focus:py-2 focus:text-deep-foreground"
        >
          {chrome.skipToContent}
        </a>
        <SiteHeader locale="it" />
        <main id="main">{children}</main>
        <SiteFooter locale="it" />
        {/* Phone only, and never on the quotation page itself. */}
        <StickyQuoteCta locale="it" label={chrome.quoteCta} />
      </body>
    </html>
  );
}
