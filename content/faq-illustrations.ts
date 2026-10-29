import type { PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * One illustration per localized route, beside that route's questions.
 *
 * ── Why the key is page id *and* locale ───────────────────────────────────
 * A page id serves two routes, and the brief for these asks that the English
 * and Italian routes each get their own asset rather than sharing one. So the
 * key is `${id}:${locale}`, and `/destinations/amalfi` and
 * `/it/destinazioni/amalfi` draw different files.
 *
 * ── Why a map rather than a prop on each page ─────────────────────────────
 * Because the uniqueness requirement is the hard part. With every assignment
 * in one object, "no asset appears twice" is a property of this file that can
 * be read, and checked, in one place — rather than something spread across
 * dozens of components and hoped for.
 *
 * ── What these may and may not show ───────────────────────────────────────
 * Nothing in them depicts a vehicle, a kerb, a meeting, a permit or any
 * facility arrangement. That is not squeamishness: pages in this project
 * spend paragraphs declining to say where a car may stop, and a drawing that
 * showed one would assert above the fold exactly what the copy refuses below
 * it. The motifs are therefore places, instruments and signage — a departures
 * board, hillside terraces, a porthole, a platform clock, a lemon pergola, a
 * nautical chart — each carrying the question mark that marks the section.
 *
 * ── Alt text ──────────────────────────────────────────────────────────────
 * Deliberately empty. Each illustration sits beside a heading that already
 * names the section in words, so describing the picture would add a second,
 * redundant announcement for a screen reader without adding information.
 * They are ornament, and they are marked as such.
 */
export type FaqIllustration = {
  /** Path under `public/`. */
  src: string;
  width: number;
  height: number;
  /** Set when the illustration sits on the deep-toned band. */
  onDeep?: boolean;
};

const illustrations: Partial<Record<string, FaqIllustration>> = {
  "nap-airport:en": {
    src: "/illustrations/faq-nap-airport-en.svg",
    width: 320,
    height: 260,
  },
  "ravello:en": {
    src: "/illustrations/faq-ravello-en.svg",
    width: 320,
    height: 260,
  },
  "naples-cruise-port:en": {
    src: "/illustrations/faq-naples-cruise-port-en.svg",
    width: 320,
    height: 260,
  },
  "rome-stations:en": {
    src: "/illustrations/faq-rome-stations-en.svg",
    width: 320,
    height: 260,
    onDeep: true,
  },
  "amalfi:en": {
    src: "/illustrations/faq-amalfi-en.svg",
    width: 320,
    height: 260,
  },
  "amalfi:it": {
    src: "/illustrations/faq-amalfi-it.svg",
    width: 320,
    height: 260,
  },

  // About us is one page in two languages, and its drawing has no words in
  // it, so both routes take the same file. The pilot's English and Italian
  // Amalfi assets differ because that brief asked for two; nothing about the
  // uniqueness rule requires a second drawing of the same subject.
  "about:en": { src: "/illustrations/faq-about.svg", width: 320, height: 260 },
  "about:it": { src: "/illustrations/faq-about.svg", width: 320, height: 260 },
};

/** The illustration for one localized route, or nothing if it has none yet. */
export function faqIllustration(
  id: PageId,
  locale: Locale,
): FaqIllustration | undefined {
  return illustrations[`${id}:${locale}`];
}

/** Every assignment, for the uniqueness check. */
export const faqIllustrationEntries = Object.entries(illustrations) as [
  string,
  FaqIllustration,
][];
