/**
 * The handful of facts about this site that more than one file needs.
 *
 * Deliberately short, and deliberately free of anything that has not been
 * verified. There is no postal address, telephone number, company
 * registration or social account here, because none has been supplied — and
 * an invented one would end up in structured data, in the footer and in
 * search results.
 */

/**
 * The canonical production origin.
 *
 * Non-`www` by decision. The host must redirect `www.` and plain `http://`
 * to this spelling, because a canonical that disagrees with what the host
 * serves is the one SEO defect that costs rankings silently.
 *
 * It is written here as well as in the hosting dashboard on purpose. These
 * pages are statically generated, so every canonical, every hreflang, every
 * Open Graph URL and every sitemap entry is baked in at `next build` time —
 * a `NEXT_PUBLIC_` variable missing from the *build* environment cannot be
 * repaired at runtime. A build without it used to emit `http://localhost:3000`
 * into every one of them. Now the worst case is the right origin, and
 * `NEXT_PUBLIC_SITE_URL` is only needed to point a staging or preview build
 * somewhere else.
 */
export const productionUrl = "https://privatetransfersacrossitaly.com";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (
  configuredSiteUrl ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : productionUrl)
).replace(/\/+$/, "");

/**
 * The one published contact address.
 *
 * Supplied by the owner, and the only contact detail on this site that has
 * been. It is the privacy contact, the complaints contact and the
 * cancellations contact, because they are the same mailbox — writing it once
 * is what keeps the English and the Italian policies from drifting apart.
 *
 * It is now also shown in the site footer, so it is genuinely site-wide:
 * one constant, so the legal pages and the footer cannot drift apart.
 */
export const contactEmail = "privatetransfersacrossitaly@gmail.com";

/**
 * The WhatsApp number behind the floating contact button, in the digits-only
 * form wa.me requires: country code first, no plus, no spaces.
 *
 * ── It is deliberately never rendered as text ─────────────────────────────
 * The brief was that the number must not appear on the site, so no component
 * prints it and no `tel:` link carries it. What cannot be avoided is that a
 * wa.me deep link *is* the number: the value below ends up in the button's
 * `href`, which means it is visible in the page source, on hover in a desktop
 * browser's status bar, and in the address bar once the link is followed.
 * That is inherent to how WhatsApp links work, not a choice made here — the
 * only way to keep it out of the markup entirely would be to drop the deep
 * link and route through a server redirect instead. Flagged rather than
 * quietly ignored.
 */
export const whatsappNumber = "923148932631";

/** The wa.me link for the floating button. */
export const whatsappHref = `https://wa.me/${whatsappNumber}`;

export const siteName = "Private Transfer Across Italy";

/**
 * One sentence, used for metadata and for the organisation's description in
 * structured data. It says what can be requested, not what is guaranteed.
 */
export const siteDescription =
  "Request private transfers across Italy: airport arrivals and departures, " +
  "journeys between cities, cruise-port connections, day trips and selected " +
  "cross-border routes. Every journey is quoted individually.";

export const locales = ["en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Path of the homepage for a locale. English is the bare root. */
export const homePath: Record<Locale, string> = {
  en: "/",
  it: "/it",
};

/** BCP 47 tags used for `<html lang>` and `inLanguage`. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  it: "it",
};

/**
 * A path turned into an absolute URL on the canonical origin.
 *
 * The homepage is the one case worth a line of code. Its registry path is
 * `/`, and `${siteUrl}/` is the same resource as `${siteUrl}` — but not the
 * same string, and the two surfaces that a crawler compares were emitting one
 * each. Next normalises a resolved canonical by dropping the lone trailing
 * slash, so the homepage declared `…/transfersacrossitaly.com` while the
 * sitemap offered `…/transfersacrossitaly.com/`, and the hreflang cluster
 * disagreed with itself across the two. Returning the bare origin here makes
 * every surface emit the string Next would, and matches the registry's
 * no-trailing-slash rule.
 *
 * `scripts/seo-check.mjs` is what found it, and asserts it stays fixed.
 */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/**
 * The `rel` for a link whose destination comes from a content file.
 *
 * ── Do-follow by decision ─────────────────────────────────────────────────
 * Every external link on this site is a citation: the comune whose ordinance
 * a page quotes, the airport operator whose terminal allocation it reports,
 * RFI, UNESCO. `nofollow` exists for untrusted and paid links, and these are
 * neither — linking to the authority a claim rests on is the whole editorial
 * premise of the site. So ordinary external links are followed.
 *
 * `noopener` stays. Nothing here opens in a new tab, so it is a no-op today
 * rather than a protection, and it costs nothing to keep correct in advance
 * of the first link that does.
 *
 * ── Why the destination decides, and not the component ───────────────────
 * A citation is external in almost every case written so far — but not every
 * case. The Stazione Marittima pages cite `/destinations/naples`, which is
 * this site's own. When the components hardcoded their `rel`, that internal
 * link got the external treatment, which was invisible in the source and
 * only turned up by parsing the built HTML.
 *
 * `undefined` for anything on this site or any relative path; React then
 * omits the attribute entirely.
 */
export function outboundRel(href: string): string | undefined {
  if (!/^https?:\/\//i.test(href)) return undefined;
  try {
    const host = new URL(href).hostname;
    const own = new URL(productionUrl).hostname;
    if (host === own || host === `www.${own}`) return undefined;
  } catch {
    return undefined;
  }
  return "noopener";
}

/**
 * Where the quote request lives.
 *
 * Every "Request a quote" on the site — the header button, the footer
 * button, every page's closing call to action — goes through this one
 * function. That was the point of writing it: while the form did not exist
 * it returned the homepage's `#request-a-quote` section, which listed what
 * to have ready and said plainly that nothing was being sent.
 *
 * The form now exists, so it returns the form. This single edit repointed
 * every call to action on the site; nothing else had to change.
 *
 * It still takes a locale, because an Italian reader must land on the
 * Italian form. Sending them to the English one would be a language switch
 * disguised as a call to action.
 *
 * Deliberately not reading the route registry: `lib/routes.ts` imports from
 * this module, and having this import it back would be a cycle. The two
 * paths are checked against each other by the QA crawl instead.
 */
const quotePaths: Record<Locale, string> = {
  en: "/get-a-quote",
  it: "/it/richiedi-preventivo",
};

export function quotePathFor(locale: Locale): string {
  return quotePaths[locale];
}

/** The other language, for the switcher. */
export const otherLocale: Record<Locale, Locale> = { en: "it", it: "en" };

export const copyrightYear = 2026;
