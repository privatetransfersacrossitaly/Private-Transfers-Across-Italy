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
 * The shapes the Veneto cluster's content files satisfy.
 *
 * The type that matters most here is `EndpointSplit`, and it exists because
 * of one fact: Venice is the only city in this project where a road transfer
 * cannot finish at the address. Every Venice page has to say where a car can
 * end and what happens after that, so the distinction is modelled in the type
 * system rather than left to prose discipline — a page cannot describe a
 * destination without placing it on one side of the split.
 */

/* ── The Venice distinction, as a type ────────────────────────────────── */

export type EndpointSplit = {
  /** Places a road vehicle can actually reach. */
  road: {
    label: string;
    heading: string;
    note: string;
    items: { id: string; name: string; detail: string }[];
  };
  /** Places where the last leg is on foot or on water, and is not ours. */
  water: {
    label: string;
    heading: string;
    note: string;
    items: { id: string; name: string; detail: string }[];
  };
};

/* ── Venice hub ───────────────────────────────────────────────────────── */

export type VeniceHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    split: EndpointSplit;
  };
  why: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  arrivals: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
  /** The city access fee: real, volatile, and not a transfer matter. */
  accessFee: {
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

/* ── Verona hub: three ways in ────────────────────────────────────────── */

export type VeronaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    modes: { id: string; label: string; name: string; detail: string }[];
  };
  station: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    airlink: { heading: string; body: string };
    source: Source;
  };
  garda: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    caution: { heading: string; body: string };
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Venice Marco Polo ────────────────────────────────────────────────── */

export type MarcoPolo = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  facts: { label: string; value: string }[];
  factsSource: Source;
  /** The land side and the water side, as the homepage already calls them. */
  sides: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    split: EndpointSplit;
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

/* ── Treviso: the distance the name conceals ──────────────────────────── */

export type TrevisoAirport = PageChrome & {
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

/* ── Verona Villafranca: city or lake ─────────────────────────────────── */

export type VeronaAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  fork: {
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
  };
  airlink: {
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

/* ── Venice stations: two places, one name ────────────────────────────── */

export type VeniceStations = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  compare: {
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
  bridge: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};
