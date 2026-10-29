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
 * The shapes the Bologna cluster's content files satisfy.
 *
 * ── The two types that carry this cluster's risks ─────────────────────────
 * `TierModel` is the useful one. Bologna's restricted centre is not one rule
 * but three strengths of the same rule, and which one applies is a property
 * of the street rather than of the traveller. Modelling it means a page
 * cannot describe the restriction without saying how much freedom it leaves,
 * which is the only part anybody can act on.
 *
 * `SourceDisagreement` is the honest one, and it exists because the Ravenna
 * cruise terminal is described differently by the three official bodies that
 * describe it — the port operator, the tourism authority and the Comune. A
 * page that quietly picked one figure would look more confident and be less
 * true, so the disagreement is data rather than prose: a row per question, a
 * column per publisher, and no averaging.
 */

/* ── Bologna: one restriction at three strengths ──────────────────────── */

export type TierModel = {
  heading: string;
  note: string;
  items: {
    id: string;
    label: string;
    rule: string;
    consequence: string;
    strength: "none" | "timed" | "absolute";
  }[];
};

export type BolognaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    tiers: TierModel;
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
  arrivals: {
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

/* ── BLQ: generous about the train, silent about the car ──────────────── */

export type BlqAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  /** What the operator publishes, beside what it does not. */
  record: {
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
  onward: {
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

/* ── Ravenna: a short hub whose point is that the port is elsewhere ───── */

export type RavennaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  port: {
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

/* ── Porto Corsini: where the published record does not agree ─────────── */

export type SourceDisagreement = {
  caption: string;
  /** Header for the row-label column, so no `<th>` is left empty. */
  questionHeading: string;
  /** Publisher names, in column order. */
  publishers: string[];
  rows: { id: string; question: string; answers: string[] }[];
};

export type RavennaTerminal = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    constraint: {
      label: string;
      heading: string;
      known: Term[];
      /** Required, so the gap cannot be quietly dropped by a later edit. */
      unknown: { label: string; body: string };
      source: Source;
    };
  };
  disagreement: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    table: SourceDisagreement;
    note: string;
  };
  marquee: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    source: Source;
  };
  directions: {
    id: string;
    heading: string;
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

/* ── Hotels (Stage 2A) ────────────────────────────────────────────────── */

/**
 * The three hotel pages are deliberately three different shapes.
 *
 * Phase 1 planned them around a shared "ZTL tier" label. Verification killed
 * that: the Comune's own rules could not be read, and for two of the three
 * hotels no source — municipal or otherwise — places the address inside or
 * outside the zone. A tier label would have been a confident-sounding
 * invention.
 *
 * What each hotel *does* publish about arriving by car turned out to be
 * better evidence and far more specific, and it differs so much between the
 * three that one type could not hold it honestly:
 *
 * - The Majestic publishes a vehicle entrance that is **not its address**.
 * - Commercianti publishes a **procedure**: call, plate, authorised route.
 * - The Excelsior publishes **ordinary directions** and no restriction at all.
 *
 * Every one of these types therefore carries a required `limits` block. Each
 * hotel describes a permission or arrangement that is **the hotel's own**,
 * and the single most dangerous thing these pages could do is let a reader
 * think it extends to our vehicles. Making the block required means no later
 * edit can drop it and keep the page.
 */

/** What the page explicitly does not claim. Required on every hotel page. */
export type HotelLimits = {
  heading: string;
  body: string;
};

/** The Majestic: the address you book is not the address a car goes to. */
export type MajesticHotel = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    constraint: {
      label: string;
      heading: string;
      known: Term[];
      unknown: { label: string; body: string };
      source: Source;
    };
  };
  addresses: {
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
  limits: HotelLimits;
  streets: {
    id: string;
    eyebrow: string;
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

/** Commercianti: a published procedure, not a published address. */
export type CommerciantiHotel = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  procedure: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    source: Source;
  };
  limits: HotelLimits;
  garage: {
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

/** The Excelsior: three ways to a door nothing stands in front of. */
export type ExcelsiorHotel = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    modes: { id: string; label: string; name: string; detail: string }[];
  };
  driving: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    source: Source;
  };
  limits: HotelLimits;
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};
