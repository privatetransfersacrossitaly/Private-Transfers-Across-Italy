import type { Locale } from "@/lib/site";
import type { PageId } from "@/lib/routes";

/**
 * The shape of the Puglia regional pillar page.
 *
 * ── Why Puglia has its own content type ───────────────────────────────────
 * Rome, Milan and Campania each describe a city and the airports that serve
 * it. Puglia is a different problem: it is a 400 km region with two airports
 * at opposite ends, where the accommodation is often not in a town at all,
 * and where the question a visitor actually has is "which airport, and how
 * far apart is everything really?". Forcing that into the city-hub shape
 * would have produced a page that answers the wrong question, so the
 * sections here follow the enquiry rather than the template.
 *
 * ── The town list carries ids, not URLs ───────────────────────────────────
 * Each town names a `PageId`. The component asks the registry whether that
 * page is published and renders a link or plain text accordingly, so the
 * pillar can name all eight from the day it ships while their pages arrive
 * over later phases — without a broken link and without a stub page written
 * only to satisfy one.
 */

export type PugliaTown = {
  id: PageId;
  /** Short label, as it appears in the card. */
  name: string;
  /** One line on what the place is. */
  summary: string;
  /** Who tends to need a transfer there, and why. */
  travellers: string;
  /** The airport that usually makes sense. */
  airport: string;
};

export type PugliaJourney = {
  from: string;
  to: string;
  note: string;
};

export type Titled = { title: string; body: string };
export type Termed = { term: string; detail: string };
export type FaqItem = { question: string; answer: string };

export type PugliaPillar = {
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
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  why: {
    heading: string;
    lead: string;
    points: Titled[];
  };
  airports: {
    heading: string;
    lead: string;
    items: {
      code: string;
      name: string;
      body: string;
      suits: string[];
    }[];
    choosing: { heading: string; body: string };
  };
  cruise: {
    heading: string;
    paragraphs: string[];
  };
  towns: {
    heading: string;
    lead: string;
    items: PugliaTown[];
  };
  journeys: {
    heading: string;
    lead: string;
    items: PugliaJourney[];
  };
  staying: {
    heading: string;
    lead: string;
    groups: Titled[];
  };
  booking: {
    heading: string;
    lead: string;
    steps: Titled[];
  };
  practical: {
    heading: string;
    lead: string;
    items: Termed[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  close: {
    heading: string;
    body: string;
    cta: string;
  };
};

export type PugliaPillarContent = Record<Locale, PugliaPillar>;

/* ══════════════════════════════════════════════════════════════════════════
   Destination pages
   ══════════════════════════════════════════════════════════════════════════

   Bari and Brindisi are both arrival pages, and both sit under the Puglia
   pillar, but they answer different questions and so they do not share a
   type. Bari is about *two ways in* — a runway and a quayside — and the
   shape that matters is the sequence from landing or docking to the car.
   Brindisi is about *how far south* — the only question its visitors
   actually have is how long the drive is to Ostuni, to Lecce, to a masseria
   down a lane in Salento.

   Giving them one shared type would have meant one shared component, and
   the brief asked for two distinct pages. A type per page keeps the two
   honest: a section that exists on Bari cannot quietly appear on Brindisi
   because the interface allowed it. */

/** A fact shown in the small strip under a destination hero. */
export type HeroFact = { label: string; value: string };

/** One step in Bari's arrival sequence. */
export type ArrivalStep = {
  /** Short imperative label, e.g. "Baggage reclaim". */
  title: string;
  body: string;
};

/** One row of Bari's "ways into the city" comparison. */
export type WayIn = {
  mode: string;
  /** What it is good for, stated plainly. */
  suits: string;
  /** The honest drawback. Never omitted — a comparison with no drawbacks
      is an advertisement, and reads like one. */
  against: string;
};

/** An onward journey from Bari, optionally linking to its own page. */
export type OnwardJourney = {
  /** Registry id, so the component can link once the page is published. */
  id: PageId | null;
  name: string;
  /** Approximate road distance, written as published sources give it. */
  distance: string;
  note: string;
};

export type BariPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  airport: {
    heading: string;
    lead: string;
    steps: ArrivalStep[];
    note: string;
  };
  waysIn: {
    heading: string;
    lead: string;
    rows: WayIn[];
    verdict: string;
  };
  port: {
    heading: string;
    lead: string;
    paragraphs: string[];
    terminals: Titled[];
    shoreNote: string;
  };
  onward: {
    heading: string;
    lead: string;
    items: OnwardJourney[];
    footnote: string;
  };
  staying: { heading: string; lead: string; groups: Titled[] };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

/** One rung of Brindisi's distance ladder. */
export type LadderStop = {
  id: PageId | null;
  name: string;
  /** Distance as published sources give it, ranges included. */
  distance: string;
  /** Rough drive, phrased as an allowance rather than a promise. */
  drive: string;
  note: string;
};

export type BrindisiPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  ladder: {
    heading: string;
    lead: string;
    stops: LadderStop[];
    footnote: string;
  };
  versusBari: {
    heading: string;
    lead: string;
    rule: string;
    columns: { heading: string; points: string[] }[];
    caveat: string;
  };
  airport: { heading: string; paragraphs: string[]; meeting: Titled[] };
  lecce: { heading: string; paragraphs: string[] };
  masserie: {
    heading: string;
    lead: string;
    paragraphs: string[];
    send: { heading: string; items: string[] };
  };
  coasts: {
    heading: string;
    lead: string;
    sides: { heading: string; body: string; places: string }[];
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type BariContent = Record<Locale, BariPage>;
export type BrindisiContent = Record<Locale, BrindisiPage>;

/* ══════════════════════════════════════════════════════════════════════════
   Phase 4 — Lecce, Ostuni, Alberobello
   ══════════════════════════════════════════════════════════════════════════

   Three towns, three genuinely different problems, and so three types.

   Lecce is a *walled city*: the question is how you get inside it, because
   the historic centre has three gates and most of the accommodation is
   behind them. Ostuni is a *town and its countryside*: almost nobody stays
   in the citadel, and the page is really about masserie, weddings and the
   lane that leads to them. Alberobello is a *listed site*: a UNESCO
   property with two protected districts, a day-visitor problem and an
   overnight-in-a-trullo problem that are not the same problem.

   None of these shapes is the arrival sequence that Bari uses or the
   distance ladder that Brindisi uses. A shared type would have produced a
   shared component and three pages that differ only in their nouns. */

/** A gate into Lecce's historic centre. */
export type Gate = {
  name: string;
  /** What it is, in one line — built date and dedication where verified. */
  detail: string;
  /** Which part of the centre it serves, for drop-off purposes. */
  serves: string;
};

/** An onward journey named but deliberately not described in detail. */
export type Onward = {
  id: PageId | null;
  name: string;
  note: string;
};

export type LeccePage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  arriving: {
    heading: string;
    lead: string;
    routes: { from: string; body: string; detail: string }[];
    note: string;
  };
  gates: {
    heading: string;
    lead: string;
    items: Gate[];
    note: string;
  };
  staying: { heading: string; lead: string; paragraphs: string[]; tips: Titled[] };
  weddings: { heading: string; lead: string; paragraphs: string[]; covers: string[] };
  around: { heading: string; lead: string; items: Termed[] };
  onward: { heading: string; lead: string; items: Onward[]; footnote: string };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

/** One half of an Ostuni diptych: the town, or the country. */
export type Diptych = {
  heading: string;
  body: string;
  points: string[];
};

export type OstuniPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  twoWorlds: {
    heading: string;
    lead: string;
    town: Diptych;
    country: Diptych;
  };
  masserie: {
    heading: string;
    lead: string;
    paragraphs: string[];
    problems: Titled[];
    send: { heading: string; items: string[] };
  };
  airports: {
    heading: string;
    lead: string;
    options: { airport: string; distance: string; body: string }[];
    note: string;
  };
  weddings: {
    heading: string;
    lead: string;
    paragraphs: string[];
    phases: Titled[];
    limits: string;
  };
  luxury: { heading: string; paragraphs: string[] };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

/** A protected district of Alberobello. */
export type District = {
  name: string;
  scale: string;
  character: string;
  body: string;
};

export type AlberobelloPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  listing: {
    heading: string;
    officialName: string;
    rows: HeroFact[];
    note: string;
  };
  intro: { heading: string; paragraphs: string[] };
  districts: { heading: string; lead: string; items: District[]; note: string };
  arriving: {
    heading: string;
    lead: string;
    routes: { from: string; distance: string; body: string }[];
    note: string;
  };
  dayVisit: { heading: string; lead: string; paragraphs: string[]; steps: Titled[] };
  staying: { heading: string; lead: string; paragraphs: string[] };
  valley: {
    heading: string;
    lead: string;
    towns: { id: PageId | null; name: string; note: string }[];
    footnote: string;
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type LecceContent = Record<Locale, LeccePage>;
export type OstuniContent = Record<Locale, OstuniPage>;
export type AlberobelloContent = Record<Locale, AlberobelloPage>;

/* ══════════════════════════════════════════════════════════════════════════
   Phase 5 — Monopoli, Polignano a Mare, Salento
   ══════════════════════════════════════════════════════════════════════════

   The last three, and again three shapes rather than one.

   Monopoli is a *coast*: a working harbour with beaches strung north and
   south of it, and the thing a visitor needs is to know where along that
   line they are staying. Polignano is a *point*: one small cliff-top town,
   mostly couples and small parties, where the whole page is really one
   narrow question answered carefully. Salento is a *circuit*: nobody stays
   in Salento, they stay somewhere in it and move around, so the page is
   organised as a tour of the peninsula and a count of how many journeys a
   week there actually takes.

   Salento is the one page in the cluster that must not describe Lecce. The
   type has no section that could hold a city description, which is the
   cheapest way to keep that boundary. */

/** A stop along Monopoli's coastline, ordered north to south. */
export type CoastStop = {
  name: string;
  /** Where it sits relative to the harbour. */
  position: string;
  note: string;
};

export type MonopoliPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  coast: {
    heading: string;
    lead: string;
    stops: CoastStop[];
    footnote: string;
  };
  harbour: { heading: string; paragraphs: string[]; sights: Titled[] };
  arriving: {
    heading: string;
    lead: string;
    routes: { from: string; distance: string; body: string }[];
    note: string;
  };
  staying: { heading: string; lead: string; groups: Titled[] };
  excursions: {
    heading: string;
    lead: string;
    items: { id: PageId | null; name: string; note: string }[];
    footnote: string;
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type PolignanoPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  intro: { heading: string; paragraphs: string[] };
  theDrop: {
    heading: string;
    lead: string;
    paragraphs: string[];
    consequences: Titled[];
  };
  arriving: {
    heading: string;
    lead: string;
    paragraphs: string[];
    options: { mode: string; body: string }[];
  };
  staying: { heading: string; lead: string; paragraphs: string[]; kinds: Titled[] };
  weddings: {
    heading: string;
    lead: string;
    paragraphs: string[];
    scope: string[];
    limits: string;
  };
  neighbours: {
    heading: string;
    lead: string;
    items: { id: PageId | null; name: string; note: string }[];
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

/** One destination on the Salento circuit. */
export type CircuitStop = {
  name: string;
  /** "Ionian" or "Adriatic", localised. */
  coast: string;
  /** Distance or position, always qualified. */
  reach: string;
  body: string;
};

export type SalentoPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  definition: { heading: string; paragraphs: string[]; bounds: Termed[] };
  circuit: {
    heading: string;
    lead: string;
    stops: CircuitStop[];
    footnote: string;
  };
  tip: { heading: string; paragraphs: string[] };
  planning: {
    heading: string;
    lead: string;
    paragraphs: string[];
    patterns: { shape: string; journeys: string; body: string }[];
    note: string;
  };
  basing: {
    heading: string;
    lead: string;
    options: { id: PageId | null; name: string; body: string }[];
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type MonopoliContent = Record<Locale, MonopoliPage>;
export type PolignanoContent = Record<Locale, PolignanoPage>;
export type SalentoContent = Record<Locale, SalentoPage>;
