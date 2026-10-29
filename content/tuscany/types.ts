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
 * The shapes the Tuscany cluster's content files satisfy.
 *
 * ── The type that carries the cluster's one real risk ─────────────────────
 * `Constraint` is the important one. Rome and Milan could each state, in the
 * city's own words, that private-hire vehicles are among the categories
 * permitted into the restricted centre. For Florence no such text could be
 * read, and a page that quietly implied otherwise would be the worst thing
 * this cluster could ship.
 *
 * So the gap is modelled rather than left to prose discipline: a Florence
 * hero cannot be written without supplying `unknown` — a labelled statement
 * of what could not be confirmed — and `source`, the authority the reader is
 * sent to instead. There is no shape of this content in which the open
 * question can be quietly dropped.
 */

export type Constraint = {
  label: string;
  heading: string;
  /** What the page can say, each item sourced. */
  known: Term[];
  /** What it cannot. Required, so it cannot be omitted. */
  unknown: { label: string; body: string };
  source: Source;
};

/* ── Florence hub ─────────────────────────────────────────────────────── */

export type FlorenceHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    constraint: Constraint;
  };
  arrivals: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    rows: {
      id: string;
      role: string;
      page: PageId;
      name: string;
      fact: string;
      body: string;
    }[];
  };
  ztl: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    caution: { heading: string; body: string };
    source: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Pisa: the airport for a region, not for a city ───────────────────── */

export type PisaAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  /** The inverted expectation: the name is right, the geography is wider. */
  expectation: {
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
  onwardTo: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
};

/* ── Florence Peretola: one fact, carrying the page ───────────────────── */

export type FlorenceAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  runway: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    consequence: { heading: string; body: string };
    source: Source;
  };
  meaning: {
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

/* ── Val d'Orcia: the destination with no railway ─────────────────────── */

export type ValDOrcia = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    modes: { id: string; label: string; name: string; detail: string }[];
  };
  comuni: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    stationLabel: string;
    items: { id: string; name: string; station: string; detail: string }[];
  };
  noRail: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    source: Source;
  };
  byAir: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
    caution: { heading: string; body: string };
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
};
