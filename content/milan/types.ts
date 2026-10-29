import type { PageId } from "@/lib/routes";
import type { PageChrome, Source, Step, Term } from "../page-types";

export type {
  Cta,
  Endpoint,
  Faq,
  Meta,
  PageChrome,
  RoutePage,
  Source,
  Step,
  Term,
} from "../page-types";

/**
 * The shapes the Milan cluster's content files satisfy.
 *
 * As in Rome, each page type has its own shape rather than sharing a generic
 * one — but none of these is a copy of a Rome type. Milan's pages are built
 * around different problems: three airports under one city name, two nested
 * traffic zones, and a lake that is really a set of towns on three arms of
 * water. The types say so.
 *
 * `RoutePage` is the exception, and is shared on purpose: a route page
 * answers the same kind of question whichever cluster it belongs to.
 */

/* ── Milan destination hub ────────────────────────────────────────────── */

export type MilanHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    chooser: {
      heading: string;
      note: string;
      rows: {
        id: string;
        page: PageId;
        code: string;
        name: string;
        fact: string;
      }[];
    };
  };
  zones: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    outer: { label: string; name: string; detail: string; hours: string };
    inner: { label: string; name: string; detail: string; hours: string };
    source: Source;
  };
  districts: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Malpensa: the airport that serves two different journeys ─────────── */

export type BigAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  terminals: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    columns: {
      id: string;
      heading: string;
      subheading: string;
      rows: Term[];
    }[];
    source: Source;
  };
  /** The module that makes this page what it is: where people actually go. */
  matrix: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: {
      id: string;
      heading: string;
      note: string;
      items: { page: PageId; label: string; detail: string }[];
    }[];
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
};

/* ── Linate: the short page ───────────────────────────────────────────── */

export type CityAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  cases: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
  caution: {
    id: string;
    heading: string;
    paragraphs: string[];
    source: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Bergamo: the page that corrects a map ────────────────────────────── */

export type DistantAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    diagram: {
      caption: string;
      nodes: { id: string; label: string; detail: string; emphasis?: boolean }[];
      gaps: string[];
    };
  };
  identity: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    facts: { label: string; value: string }[];
    source: Source;
  };
  consequences: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Milan's stations: four stations, two managers ────────────────────── */

export type MilanStations = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  table: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; name: string; scale: string; note: string }[];
    source: Source;
  };
  managers: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  assistance: {
    heading: string;
    paragraphs: string[];
    source: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Lake Como: a destination that is several destinations ────────────── */

export type LakeComo = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    townsHeading: string;
  };
  shape: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  towns: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; name: string; branch: string; detail: string }[];
  };
  /** The page's integrity test: what a road transfer is not. */
  water: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    warning: { heading: string; body: string };
    source: Source;
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};
