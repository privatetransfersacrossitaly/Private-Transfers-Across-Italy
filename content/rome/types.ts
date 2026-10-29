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
 * The shapes the Rome cluster's content files satisfy.
 *
 * Each page type has its own shape rather than sharing one generic one. That
 * is deliberate: a route page has two endpoints and a port page has a
 * checklist, and a single `sections: Section[]` type that could hold either
 * would let a page quietly become a different page without the compiler
 * noticing.
 *
 * The primitives they are built from — and the route page type, which Milan
 * uses too — live in `content/page-types.ts`.
 */

/* ── Destination hub ──────────────────────────────────────────────────── */

export type RomeHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  arrival: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    rows: {
      id: string;
      role: string;
      name: string;
      page: PageId;
      fact: string;
      body: string;
    }[];
    note: string;
  };
  access: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    zones: Term[];
    source: Source;
  };
  districts: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
  routes: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
  beyond: {
    heading: string;
    paragraphs: string[];
    source: Source;
  };
};

/* ── Airport hubs ─────────────────────────────────────────────────────── */

export type AirportHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note?: string;
  };
  facts: { label: string; value: string }[];
  factsSource: Source;
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
  sequence: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
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
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/** Ciampino: comparison-led, and the one page in the cluster with no photograph. */
export type SecondAirport = PageChrome & {
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
  practical: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Cruise port ──────────────────────────────────────────────────────── */

export type CruisePort = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  geography: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    stages: { label: string; title: string; body: string }[];
    source: Source;
  };
  confirm: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    warning: { heading: string; body: string };
  };
  connections: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Station reference page ───────────────────────────────────────────── */

export type StationsPage = PageChrome & {
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
  handover: {
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
