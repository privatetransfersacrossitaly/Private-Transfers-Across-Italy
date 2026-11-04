import type { Locale } from "@/lib/site";
import type { PageId } from "@/lib/routes";

/**
 * The Sicily cluster's content types.
 *
 * ── Why Sicily is not Puglia with different nouns ─────────────────────────
 * Puglia is a long strip with an airport at each end, so its pillar is built
 * around "which end are you going to". Sicily is a triangle with three
 * working corners — Palermo in the north-west, Catania in the east, and the
 * south coast that neither airport sits on — and the question a visitor
 * actually arrives with is "which corner am I in, and what does that cost me
 * in driving". So the pillar is organised by corner, not by a list of towns.
 *
 * ── Ids, not URLs ─────────────────────────────────────────────────────────
 * Every reference to another page is a `PageId`. The component asks the
 * registry whether that page is published and renders a link or plain text
 * accordingly, so the pillar can name all thirteen supporting pages from the
 * day it ships while they arrive over later phases — with no broken link and
 * no stub page written only to satisfy one.
 */

/** A fact in the strip under a hero. */
export type HeroFact = { label: string; value: string };

export type Titled = { title: string; body: string };
export type Termed = { term: string; detail: string };
export type FaqItem = { question: string; answer: string };

/** One of the island's three working corners. */
export type SicilyCorner = {
  /** Short label for the corner itself, e.g. "The north-west". */
  corner: string;
  /** The arrival point that serves it, named in prose. */
  arrival: string;
  body: string;
  /** The places in this corner, as ids so they can become links. */
  places: PageId[];
};

/** An airport on the pillar. */
export type SicilyAirport = {
  id: PageId;
  code: string;
  /** The airport's name as its own sources give it. */
  name: string;
  body: string;
  /** What it genuinely serves. Not every destination on the island. */
  serves: string;
};

/** A cruise port on the pillar. */
export type SicilyPort = {
  id: PageId;
  name: string;
  body: string;
};

/** A destination card on the pillar. */
export type SicilyPlace = {
  id: PageId;
  name: string;
  summary: string;
  /** Which arrival point usually makes sense, in a few words. */
  arrival: string;
};

/**
 * One sourced distance.
 *
 * `source` is not decoration. Sicilian road distances vary considerably
 * between route planners, and the only figures printed anywhere in this
 * cluster are ones that can be attributed, so the type makes the attribution
 * impossible to leave out.
 */
export type SourcedDistance = {
  between: string;
  figure: string;
  source: string;
};

/** A way of travelling that is not a private transfer. */
export type AlternativeMode = {
  mode: string;
  suits: string;
  /** The honest drawback. Never omitted. */
  against: string;
};

export type SicilyPillar = {
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
  corners: { heading: string; lead: string; items: SicilyCorner[] };
  airports: {
    heading: string;
    lead: string;
    items: SicilyAirport[];
    choosing: { heading: string; body: string };
  };
  ports: {
    heading: string;
    lead: string;
    items: SicilyPort[];
    ferries: { heading: string; body: string };
  };
  places: { heading: string; lead: string; items: SicilyPlace[] };
  distances: {
    heading: string;
    lead: string;
    rows: SourcedDistance[];
    footnote: string;
  };
  alternatives: {
    heading: string;
    lead: string;
    modes: AlternativeMode[];
    verdict: string;
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type SicilyPillarContent = Record<Locale, SicilyPillar>;

/* ══════════════════════════════════════════════════════════════════════════
   Destination pages
   ══════════════════════════════════════════════════════════════════════════

   ── One interface, seven designs ────────────────────────────────────────
   Puglia's towns each got a bespoke type, because Bari — an airport and a
   cruise terminal — genuinely is a different kind of object from
   Alberobello. Sicily's seven are not: every one of them answers the same
   four questions, in the same order, for somebody who has landed and now
   has to get somewhere. Seven near-identical interfaces would have been
   ceremony.

   What makes the pages different is the component. Each has its own
   structural device and its own palette — Palermo's stacked quarters,
   Catania's vertical coast-to-Etna axis — so the pages are told apart by
   how they are built, not by how their data is shaped.

   ── Optional sections are the point ─────────────────────────────────────
   `going` and `ferries` are optional because the brief was explicit that
   not every section belongs on every page. Cefalù has a beach and Trapani
   has ferries; forcing either onto the other would produce the padding
   this cluster exists to avoid.

   ── No distance field, and that is deliberate ───────────────────────────
   There isn't one. Road distances between Sicilian towns could not be
   sourced to anything better than travel sites that disagree with each
   other, so rather than leave a field that invites a guess, the type has
   nowhere to put one. The few figures that ARE sourced — airport to its
   own city, Cefalù to Palermo and Messina — live on the pillar, in rows
   that carry their source with them.
*/

/** An arrival point for a destination: an airport, or a port. */
export type ArrivalOption = {
  id: PageId;
  /** How this arrival point is described here, e.g. "The usual one". */
  label: string;
  body: string;
};

/** Something people travel to this place for. */
export type Draw = {
  name: string;
  body: string;
};

/** A neighbouring destination worth naming. */
export type Neighbour = {
  id: PageId;
  body: string;
};

export type SicilyDestination = {
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
  /** Which airport or port, and what arriving there is actually like. */
  arrival: {
    heading: string;
    lead: string;
    options: ArrivalOption[];
    note: string;
  };
  /** Where a car can legally stop. The question that decides the last 200 m. */
  kerb: { heading: string; lead: string; items: Titled[] };
  /** What people are here for. Optional: not every page needs it. */
  going?: { heading: string; lead: string; items: Draw[] };
  /** Ferry connections. Only where they genuinely exist. */
  ferries?: { heading: string; body: string };
  nearby: { heading: string; lead: string; items: Neighbour[] };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type SicilyDestinationContent = Record<Locale, SicilyDestination>;

/* ══════════════════════════════════════════════════════════════════════════
   Airport pages — PMO, CTA, TPS
   ══════════════════════════════════════════════════════════════════════════

   One interface, three components, for the same reason the destinations
   share one: an airport is an airport. What differs is the page's shape —
   PMO is an arrivals board, CTA a route comparison, TPS a single narrow
   column — and the palette, not the data.

   This deliberately does NOT reuse the Puglia cluster's AirportPage type.
   Importing a Puglia type into Sicily would couple two clusters that have
   no reason to move together, and this one needs something Puglia's did not:
   a `ports` block, because two of Sicily's three airports sit near a cruise
   port that people transfer between.
*/

/** Somewhere an airport genuinely serves. */
export type AirportRoute = {
  /** Registry id where the destination has a page; null when it does not. */
  id: PageId | null;
  /** Used only when `id` is null — a place we name but do not have a page for. */
  name?: string;
  note: string;
};

export type SicilyAirportPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  /** The airport itself: names, codes, operator, scale. */
  identity: { heading: string; paragraphs: string[] };
  /** Being met. The mechanics, not the marketing. */
  meeting: { heading: string; lead: string; steps: Titled[]; note: string };
  routes: {
    heading: string;
    lead: string;
    /** The city this airport serves, called out before the rest. */
    city: AirportRoute;
    items: AirportRoute[];
    footnote: string;
  };
  /** Cruise ports reachable from here. Optional: TPS has none. */
  ports?: { heading: string; lead: string; items: AirportRoute[] };
  /** Honest comparison with everything that is not a private transfer. */
  alternatives: {
    heading: string;
    lead: string;
    modes: AlternativeMode[];
    verdict: string;
  };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type SicilyAirportContent = Record<Locale, SicilyAirportPage>;

/* ══════════════════════════════════════════════════════════════════════════
   Cruise port pages — Palermo, Catania, Messina
   ══════════════════════════════════════════════════════════════════════════

   Three, not the brief's five. Trapani and Milazzo are ferry ports; filing
   Milazzo — the Aeolian ferry port — under /cruise-ports/ would have put a
   page under a name that misdescribes it, so their ferry traffic lives on
   the Trapani destination page and the pillar instead.

   ── Why a port page is not an airport page ──────────────────────────────
   An airport arrival is governed by when you land. A cruise call is
   governed by when you must be back, and the all-aboard time is earlier
   than the departure printed on a ticket. That single fact reorganises the
   page: `shore` is the spine, and it is built backwards from a deadline
   rather than forwards from an arrival. Hence `allAboard` as a field of
   its own — it is the thing a page about a cruise call exists to say, and
   making it a required field means no port page can quietly omit it.

   ── Sourcing is thinner here than anywhere else in the cluster ──────────
   Palermo's published passenger figures are 2018. Messina's are 2006 and
   2009. Catania has no encyclopedic article at all — en.wikipedia.org's
   "Port of Catania" is a 404 — so its page rests on trade press, says so,
   and says less than its siblings rather than more. No page names a port
   authority: the 2016 reform, later sources and the current decree do not
   agree, and Messina may not fall under a Sicilian authority at all.
*/

export type SicilyPortPage = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: HeroFact[];
  };
  identity: { heading: string; paragraphs: string[] };
  /** Where a driver waits, and what the quayside is actually like. */
  meeting: { heading: string; lead: string; steps: Titled[]; note: string };
  shore: {
    heading: string;
    lead: string;
    /** The one thing a cruise page must say. Required on purpose. */
    allAboard: string;
    options: AirportRoute[];
    footnote: string;
  };
  /** Port-to-airport runs, where an airport is close enough to matter. */
  airports?: { heading: string; lead: string; items: AirportRoute[] };
  practical: { heading: string; lead: string; items: Termed[] };
  faq: { heading: string; items: FaqItem[] };
  close: { heading: string; body: string; cta: string };
};

export type SicilyPortContent = Record<Locale, SicilyPortPage>;
