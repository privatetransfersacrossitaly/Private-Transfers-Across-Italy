import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { LanguageSwitch } from "@/components/site/language-switch";
import { SiteNav } from "@/components/site/site-nav";
import { homeContent } from "@/content/home";
import { buildNavigation } from "@/content/navigation";
import { homePath, otherLocale, quotePathFor, siteName, type Locale } from "@/lib/site";

/**
 * The site's one header, rendered from each root layout so every page in
 * either language gets the same one.
 *
 * The logo is the brand name in full and never changes: it is the name of
 * the business, not a string to be translated. Everything around it — menu
 * labels, the quote button, the language switch — comes from the locale.
 *
 * ── Why the image carries explicit dimensions and no `sizes` ──────────────
 * `images.unoptimized` is on, because Cloudflare Images transformations are
 * billable and were not approved. next/image therefore serves the file
 * byte-for-byte, so the asset in public/brand is already sized for its
 * largest use (480px wide for a ~190px slot, i.e. 2x) rather than resized at
 * request time. `priority` because it sits in the header of every page and is
 * part of the first paint; without it the brand flashes in late.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const chrome = homeContent[locale].chrome;
  const other = otherLocale[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <Container size="wide" className="flex items-center gap-3 py-3 sm:gap-4 xl:gap-5">
        <Link
          href={homePath[locale]}
          className="inline-flex min-h-11 min-w-0 shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Image
            src="/brand/logo.png"
            alt={siteName}
            width={480}
            height={105}
            priority
            className="h-8 w-auto sm:h-9 xl:h-10"
          />
        </Link>

        <SiteNav
          entries={buildNavigation(locale)}
          quote={{ href: quotePathFor(locale), label: chrome.quoteCta }}
          strings={{
            menuLabel: chrome.menuLabel,
            openMenu: chrome.openMenu,
            closeMenu: chrome.closeMenu,
          }}
          language={{
            code: other.toUpperCase(),
            lang: other,
            label: chrome.languageLabel,
          }}
        />

        <div className="ml-auto flex items-center gap-2">
          {/* The switcher goes to the counterpart of the page you are on, and
              falls back to the other language's homepage when there is none. */}
          <LanguageSwitch
            other={other}
            label={chrome.languageLabel}
            className="hidden sm:inline-flex"
          />
          <Cta href={quotePathFor(locale)} className="hidden sm:inline-flex lg:px-3.5 xl:px-5">
            {chrome.quoteCta}
          </Cta>
        </div>
      </Container>
    </header>
  );
}
