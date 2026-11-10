import type { PhotoSlug } from "../photos";
import type { PageId } from "@/lib/routes";

/**
 * The shape of the homepage, in any language.
 *
 * English and Italian are two files satisfying this type rather than one file
 * with a translation table: the Italian is written as Italian, not assembled
 * from English fragments, and the compiler still guarantees that neither
 * version is missing a section the other has.
 *
 * Photograph slugs live in the shared content, not in the per-language files
 * — the same photograph illustrates the same section in both languages, and
 * only its alt text differs.
 */

export type ServiceCard = {
  id: string;
  title: string;
  body: string;
  /** Only where a licence-clear photograph of the subject exists. */
  photo?: PhotoSlug;
};

export type DestinationCard = {
  id: string;
  name: string;
  blurb: string;
  photo?: PhotoSlug;
  /**
   * Shown on the typographic plate that stands in for a missing photograph.
   * Repeating the card's own name there would print it twice, so this is
   * something the heading does not already say. Ignored when `photo` is set.
   */
  plate?: string;
  /** Set once a destination page exists; the tile becomes a link. */
  page?: PageId;
  /**
   * Secondary links shown beneath the blurb, for a destination whose
   * cluster has more than one obvious entry point — Puglia's two airports
   * are at opposite ends of the region, so which one a visitor wants is a
   * real question and not a detail to bury one level down.
   *
   * They render outside the tile's own link: an anchor inside an anchor is
   * invalid HTML and browsers resolve it unpredictably.
   */
  links?: { page: PageId; label: string }[];
};

export type AirportGroup = {
  id: string;
  region: string;
  airports: {
    name: string;
    code: string;
    note: string;
    /** Set once an airport page exists; the name becomes a link. */
    page?: PageId;
  }[];
};

export type Step = { title: string; body: string };
export type PrepareItem = { title: string; body: string };
export type FaqItem = { question: string; answer: string };

export type HomeContent = {
  meta: {
    title: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    caveat: string;
    photo: PhotoSlug;
  };

  services: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    cards: ServiceCard[];
  };

  destinations: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    cards: DestinationCard[];
    alsoHeading: string;
    /**
     * Places a journey can be quoted for. A plain string is a name only; an
     * entry with a `page` is a place that has a page of its own, and renders
     * as a link to it.
     */
    also: (string | { label: string; page: PageId })[];
    note: string;
  };

  airports: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: AirportGroup[];
    note: string;
    checklistHeading: string;
    checklist: string[];
  };

  intercity: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    photo?: PhotoSlug;
    note: string;
  };

  cruise: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    photo?: PhotoSlug;
    /** The ports that have pages of their own. */
    links?: { page: PageId; label: string }[];
    checklistHeading: string;
    checklist: string[];
  };

  dayTrips: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    photos: PhotoSlug[];
    note: string;
  };

  how: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
  };

  prepare: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: PrepareItem[];
  };

  faq: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: FaqItem[];
  };

  finalCta: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };

  /** Labels used by the chrome rather than by a section. */
  chrome: {
    skipToContent: string;
    quoteCta: string;
    menuLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    footerTagline: string;
    footerLegal: string;
    /** Label above the contact email in the footer. */
    contactHeading: string;
    /** Accessible name for the floating WhatsApp button. */
    whatsappLabel: string;
  };
};
