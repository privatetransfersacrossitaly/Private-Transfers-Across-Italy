import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { homeContent } from "@/content/home";
import { buildFooterNav, buildLegalNav } from "@/content/navigation";
import {
  copyrightYear,
  homePath,
  quotePathFor,
  siteName,
  type Locale,
} from "@/lib/site";

/**
 * The site's one footer, in either language.
 *
 * ── Why the logo sits on an ivory plate here and not in the header ───────
 * This footer is `bg-deep`, a dark navy. Two of the three words in the
 * supplied lockup are dark navy themselves, so placed directly on this
 * background they would be invisible — the gold "Transfers" would appear to
 * float alone. The asset has no light-text variant and one cannot be derived
 * from it, because the wordmark sits on a photographic composite rather than
 * flat artwork. The plate is the honest fix: it reads as deliberate, and it
 * keeps a single logo file serving both surfaces.
 *
 * Three columns of links that all resolve, a short description of what the
 * service is, and a quotation CTA. There is no address, telephone number,
 * company registration or social account, because none has been supplied.
 * Legal and contact pages are a later phase; when they exist they join the
 * footer navigation and appear here without this component changing.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const chrome = homeContent[locale].chrome;
  const legal = buildLegalNav(locale);

  return (
    <footer className="border-t border-border bg-deep text-deep-foreground">
      {/* Extra bottom padding on a phone, where the sticky quote button
          floats over the foot of the page. */}
      <Container size="wide" className="pt-14 pb-28 sm:pt-16 md:pb-16">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <div>
            <Link
              href={homePath[locale]}
              className="inline-flex rounded-lg bg-background p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Image
                src="/brand/logo.png"
                alt={siteName}
                width={480}
                height={105}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="mt-4 max-w-[42ch] type-small text-deep-muted">
              {chrome.footerTagline}
            </p>
            <Cta href={quotePathFor(locale)} variant="onDeep" className="mt-6">
              {chrome.quoteCta}
            </Cta>
          </div>

          <nav aria-label="Footer" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {buildFooterNav(locale).map((group) => (
              <div key={group.id}>
                <h2 className="type-label text-accent-glow">{group.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="inline-flex min-h-6 items-center type-small text-deep-muted transition-colors hover:text-deep-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* The policy pages, in the bottom bar rather than as a tenth column
            in the grid above. As a column they landed alone on a fourth row
            below a screen of whitespace; here they are where a reader looks
            for them. */}
        <nav
          aria-label={legal.heading}
          className="mt-14 border-t border-deep-line pt-6"
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {legal.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-8 items-center type-small text-deep-muted underline decoration-deep-line underline-offset-4 transition-colors hover:text-deep-foreground hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-3 type-caption text-deep-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {copyrightYear} {siteName}
          </p>
          <p className="max-w-[60ch]">{chrome.footerLegal}</p>
        </div>
      </Container>
    </footer>
  );
}
