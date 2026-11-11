import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { homeContent } from "@/content/home";
import { buildFooterNav, buildLegalNav } from "@/content/navigation";
import {
  contactEmail,
  copyrightYear,
  homePath,
  outboundRel,
  quotePathFor,
  publicSiteName,
  socialProfiles,
  type Locale,
  type SocialNetwork,
} from "@/lib/site";

/**
 * The two network marks, drawn inline so they inherit `currentColor`, cost
 * no request and cannot 404 — the same reasoning as the WhatsApp button.
 * Decorative: the link carries the accessible name.
 */
function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}

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
 * service is, a contact email, the social profiles (Instagram and Pinterest,
 * from `socialProfiles` in `lib/site.ts`) and a quotation CTA. There is still
 * no postal address, telephone number or company registration, because none
 * has been supplied — and the WhatsApp number behind the floating button is
 * deliberately not printed here.
 *
 * The email comes from `contactEmail` in `lib/site.ts`, the same constant the
 * privacy, terms and cancellation pages use, so the address shown in the
 * footer cannot drift away from the one in the policies.
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
                alt={publicSiteName}
                width={480}
                height={105}
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="mt-4 max-w-[42ch] type-small text-deep-muted">
              {chrome.footerTagline}
            </p>

            <div className="mt-6">
              <h2 className="type-label text-accent-glow">
                {chrome.contactHeading}
              </h2>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex min-h-6 items-center break-all type-small text-deep-muted underline decoration-1 underline-offset-4 transition-colors hover:text-deep-foreground hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {contactEmail}
              </a>
            </div>

            <div className="mt-6">
              <h2 className="type-label text-accent-glow">
                {chrome.followHeading}
              </h2>
              <ul className="mt-2 flex gap-2">
                {socialProfiles.map((profile) => (
                  <li key={profile.network}>
                    {/* New tab, so the visitor keeps their place here. Every
                        external link on the site is nofollow by the owner's
                        decision; `noreferrer` accompanies `_blank`. */}
                    <a
                      href={profile.href}
                      target="_blank"
                      rel={`${outboundRel(profile.href)} noreferrer`}
                      aria-label={chrome.followOn.replace("{network}", profile.name)}
                      title={profile.name}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-deep-line text-deep-muted transition-colors hover:border-deep-foreground hover:text-deep-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <SocialIcon network={profile.network} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

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
            © {copyrightYear} {publicSiteName}
          </p>
          <p className="max-w-[60ch]">{chrome.footerLegal}</p>
        </div>
      </Container>
    </footer>
  );
}
