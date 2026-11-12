import { outboundRel, type Locale } from "@/lib/site";

/**
 * Everything that happens to a stored post body between D1 and the page.
 *
 * Ported from Italy Taxi Service (src/lib/blog-content.ts and the FAQ
 * extractor in its post route), with the conventions kept so a post body
 * written for that site renders here unchanged:
 *
 *   - FAQ pairs are `<h3 id="faq-…">question</h3><p>answer</p>`, introduced
 *     by an `<h2>` reading "Frequently Asked Questions" / "Domande frequenti".
 *     They are lifted out into the page's FAQ section and FAQPage schema.
 *   - `<h2>`/`<h3>` with ids feed the table of contents.
 *
 * ── What is different here, and why ───────────────────────────────────────
 *
 * 1. **No Markdown.** Italy Taxi converts Markdown with `marked` because 13
 *    of its legacy rows were Markdown. This blog starts empty and every post
 *    is written as HTML by the publish script, so there is nothing to
 *    convert — and not adding a dependency avoids touching package-lock.json
 *    (see commit 69a5828 for what that cost last time).
 *
 * 2. **Executable markup is removed.** Italy Taxi renders stored HTML
 *    verbatim. Posts here are written by trusted scripts too, but the body is
 *    still the one place on the site that injects HTML, so scripts, frames,
 *    embeds, inline event handlers and `javascript:` URLs are stripped
 *    before rendering. It is a guard, not a full sanitiser: the input is
 *    trusted, and this stops a pasted snippet from becoming code.
 *
 * 3. **External links follow the site rule.** Since 11 November 2026 every
 *    external link carries `nofollow` (see `outboundRel` in lib/site.ts), and
 *    seo-check.mjs fails a page that has one without it. Links inside a post
 *    are rewritten to the same rule at render time, so a post cannot break
 *    it however it was written.
 *
 * 4. **Every h2/h3 gets an id.** Italy Taxi only listed headings that
 *    already had one, so its table of contents depended on how carefully a
 *    seed script was written. Here ids are added where missing.
 */

export type FaqItem = { question: string; answer: string };
export type TocItem = { id: string; text: string; level: 2 | 3 };

export type PreparedPost = {
  /** Body to render: cleaned, ids added, links ruled, FAQ block removed. */
  html: string;
  faq: FaqItem[];
  toc: TocItem[];
  /**
   * Credit for the featured image, as HTML, when the post supplies one.
   *
   * Written in the body as `<p data-image-credit>…</p>` and lifted out here
   * so the page can print it directly under the featured image — which a
   * CC BY licence requires — without a database column for it. Cleaned and
   * link-ruled like the rest of the body before it is lifted.
   */
  imageCredit: string | null;
};

const decodeEntities = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#x27;|&apos;/g, "'");

const plainText = (html: string) =>
  decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

export function slugifyHeading(text: string): string {
  return (
    plainText(text)
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "section"
  );
}

/* ── 1. Remove anything executable ─────────────────────────────────────── */

function stripExecutable(html: string): string {
  return html
    .replace(/<(script|style|iframe|object|embed|form|template)\b[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<(script|style|iframe|object|embed|form|template|link|meta|base)\b[^>]*\/?>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(href|src)\s*=\s*("|')\s*(javascript|vbscript|data):[^"']*\2/gi, "");
}

/* ── 2. Heading ids ────────────────────────────────────────────────────── */

function addHeadingIds(html: string): string {
  const used = new Set<string>();
  // Ids already present are reserved first, so a generated id never clashes.
  for (const m of html.matchAll(/<h[1-6][^>]*\sid\s*=\s*"([^"]+)"/gi)) used.add(m[1]);
  return html.replace(
    /<h([23])((?:\s[^>]*)?)>([\s\S]*?)<\/h\1>/gi,
    (whole, level: string, attrs: string, inner: string) => {
      if (/\sid\s*=/i.test(attrs)) return whole;
      const base = slugifyHeading(inner);
      let id = base;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
      used.add(id);
      return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
    },
  );
}

/* ── 3. External links: the site's nofollow rule ───────────────────────── */

function ruleLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (whole, attrs: string) => {
    const href = /\shref\s*=\s*"([^"]*)"/i.exec(attrs)?.[1];
    if (!href) return whole;
    const rel = outboundRel(href);
    if (!rel) return whole; // internal or relative: left exactly as written
    const blank = /\starget\s*=\s*"_blank"/i.test(attrs);
    const wanted = new Set(rel.split(" "));
    if (blank) wanted.add("noreferrer");
    const existing = /\srel\s*=\s*"([^"]*)"/i.exec(attrs)?.[1];
    if (existing) for (const t of existing.split(/\s+/).filter(Boolean)) wanted.add(t.toLowerCase());
    // "dofollow" is not a value browsers or crawlers recognise; drop it.
    wanted.delete("dofollow");
    const relAttr = ` rel="${[...wanted].join(" ")}"`;
    const without = attrs.replace(/\srel\s*=\s*"[^"]*"/i, "");
    return `<a${without}${relAttr}>`;
  });
}

/* ── 4. FAQ: extract, then remove from the body ────────────────────────── */

const FAQ_PAIR = /<h3[^>]*\sid="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>\s*/gi;
const FAQ_HEADING =
  /<h2[^>]*>\s*(?:Frequently\s+Asked\s+Questions|FAQs?|Domande\s+frequenti)\s*<\/h2>\s*/gi;

function extractFaq(html: string): FaqItem[] {
  const items: FaqItem[] = [];
  for (const m of html.matchAll(FAQ_PAIR)) {
    const question = plainText(m[1]);
    const answer = plainText(m[2]);
    if (question && answer) items.push({ question, answer });
  }
  return items;
}

/* ── 5. Table of contents ──────────────────────────────────────────────── */

function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  for (const m of html.matchAll(/<h([23])[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/gi)) {
    const text = plainText(m[3]);
    if (text) items.push({ id: m[2], text, level: m[1] === "2" ? 2 : 3 });
  }
  return items;
}

/**
 * The one entry point the post pages use.
 *
 * Order matters: clean first, so nothing removed later was ever counted;
 * add ids before extracting the FAQ (whose headings already carry theirs)
 * and the table of contents (which needs every id).
 */
const IMAGE_CREDIT = /<p\b[^>]*\sdata-image-credit\b[^>]*>([\s\S]*?)<\/p>\s*/i;

export function prepareBlogHtml(stored: string | null | undefined): PreparedPost {
  const ruled = ruleLinks(addHeadingIds(stripExecutable(stored ?? "")));
  const credit = IMAGE_CREDIT.exec(ruled);
  const cleaned = credit ? ruled.replace(IMAGE_CREDIT, "") : ruled;
  const faq = extractFaq(cleaned);
  const html =
    faq.length > 0 ? cleaned.replace(FAQ_PAIR, "").replace(FAQ_HEADING, "") : cleaned;
  return { html, faq, toc: extractToc(html), imageCredit: credit ? credit[1].trim() : null };
}

/**
 * "6 min read" when the post does not state one.
 *
 * About 200 words a minute, rounded up, never under a minute. The stored
 * value always wins: it is an editorial statement, this is an estimate.
 */
export function readTimeFor(
  stored: string | null,
  html: string,
  locale: Locale,
): string {
  if (stored && stored.trim()) return stored.trim();
  const words = plainText(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return locale === "it" ? `${minutes} min di lettura` : `${minutes} min read`;
}
