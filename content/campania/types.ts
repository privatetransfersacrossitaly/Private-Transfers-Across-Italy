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
 * The shapes the Campania cluster's content files satisfy.
 *
 * ── Two types, both built around a distinction the site must not blur ─────
 *
 * `OwnerClaim` is the important one, and it is new to this cluster. Until
 * now every page here could say only what a public source supported. For
 * Campania the owner has confirmed operational facts that no public source
 * states — coverage of the Amalfi Coast road, and arrangements for collecting
 * cruise passengers at Naples. That information is usable and worth telling a
 * reader, but it is a different kind of claim from an operator's published
 * timetable, and a page that let the two blur would be the worst thing this
 * cluster could do.
 *
 * So the type separates them physically. A page carries `sources` for what
 * publishers state and `ownerClaim` for what the business states about
 * itself, and the component renders them differently and labels the second.
 * No later edit can quietly promote one into the other.
 *
 * `FacilitySplit` is the Naples problem in a type. The city's waterfront is
 * several quays with one name, and the airport is a fourth gateway again. A
 * hub page cannot describe "Naples" as an endpoint without saying which of
 * them it means.
 */

/** Something the business states about itself, never a published fact. */
export type OwnerClaim = {
  label: string;
  heading: string;
  body: string;
};

/** One of Naples's gateways, and what actually calls there. */
export type Facility = {
  id: string;
  name: string;
  serves: string;
  detail: string;
  /** Set only where a page for this facility exists. */
  page?: PageId;
};

export type FacilitySplit = {
  caption: string;
  columns: { facility: string; serves: string; detail: string };
  items: Facility[];
};

/* ── Naples hub: four gateways, one name ──────────────────────────────── */

export type NaplesHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  gateways: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    split: FacilitySplit;
    note: string;
  };
  /** The airport closure: a real notice, carefully bounded. */
  airportNotice: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    limits: { heading: string; body: string };
    source: Source;
  };
  ownerClaim: OwnerClaim;
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Salerno: the airport that closes at night ────────────────────────── */

export type SalernoAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  terminal: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    caution: { heading: string; body: string };
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Caserta: two gates, and no parking of its own ───────────────────── */

/**
 * The palace publishes two entrances and almost nothing about cars.
 *
 * `entrances` is a two-column comparison rather than a table, because there
 * are exactly two of them and the useful question is which one a given
 * passenger wants — not how four things rank, which is what the hub's table
 * answers.
 *
 * `stopping` exists because the most useful sentence on the palace's own site
 * is a negative one, and a page that buried it in a FAQ would be hiding the
 * thing a driven visitor most needs to know.
 */
export type CasertaDestination = PageChrome & {
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
  entrances: {
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
    /** How the disputed street number is handled. Required, so it stays. */
    note: string;
    source: Source;
  };
  stopping: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    limits: { heading: string; body: string };
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Pompeii: three entrances, and what cannot come in ───────────────── */

/**
 * The park's rules decide this page, not its ruins.
 *
 * `modes` carries the three entrances in the hero, because the park names
 * them differently on two of its own pages and a reader who picks the wrong
 * one has picked the wrong side of the site.
 *
 * `rules` is a definition list of what the current access regulation forbids.
 * One of those rules — the bag size — is the single most consequential fact
 * on this page for someone arriving by car with luggage, which is why it is
 * body content and not a footnote.
 *
 * `parking` is separate and carries its own `asOf`, because the park's
 * statement about car parks is years old and must never read as current.
 */
export type PompeiiDestination = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    modes: { id: string; label: string; name: string; detail: string }[];
  };
  entrances: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    limits: { heading: string; body: string };
    source: Source;
  };
  rules: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    note: string;
    source: Source;
  };
  /** The dated statement, with its date carried in the type. */
  parking: {
    id: string;
    heading: string;
    asOf: string;
    body: string;
    caution: string;
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Positano: a charge that lands on our own vehicle class ──────────── */

/**
 * The only page in this cluster whose central fact is a price.
 *
 * Positano's limited-traffic zone charges by **seat count**, and the threshold
 * falls exactly across this business's fleet: a saloon is under it, a minivan
 * is over it. So the page is organised around the threshold rather than around
 * the town, and `tiers` carries it in the hero.
 *
 * Two fields exist to stop a later edit quietly misrepresenting the evidence.
 *
 * `rates.asOf` is required, because the amounts come from a guide published on
 * a stated date and this page must never present them as confirmed-current.
 *
 * `limits` is required, because the governing deliberation says in terms that
 * paying the charge does **not** authorise stopping or waiting. A page that
 * listed the tariffs without that sentence would read as permission to pull up
 * outside a hotel, which is the single most likely way this page could mislead
 * someone.
 */
export type PositanoDestination = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    tiers: {
      heading: string;
      note: string;
      items: {
        id: string;
        label: string;
        rule: string;
        consequence: string;
        /**
         * How much freedom the vehicle actually has, mapped onto the shared
         * hero's three steps: `none` = not subject to the charge at all,
         * `timed` = admitted on payment, `absolute` = barred outright.
         */
        strength: "none" | "timed" | "absolute";
      }[];
    };
  };
  /** The official rate card. `asOf` is required so the date travels with it. */
  rates: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    asOf: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
    source: Source;
  };
  /** Required: what paying does not buy, and the meeting point we cannot give. */
  limits: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    callout: { heading: string; body: string };
    unknown: { heading: string; body: string };
    source: Source;
  };
  procedure: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Amalfi: entering is not stopping ────────────────────────────────── */

/**
 * The page whose whole job is to separate two permissions people conflate.
 *
 * Amalfi's own regulation lets a private-hire vehicle **into** the historic
 * centre and gives it an hour to leave. A different article of the same
 * regulation forbids **stopping** — not merely parking — around the clock in
 * the four streets a visitor would actually want to be set down in. Those two
 * facts are easy to merge and dangerous to merge, so the type keeps them in
 * separate fields that render in separate bands.
 *
 * Three fields are required rather than optional, each guarding a specific
 * way this page could go wrong later:
 *
 * `meeting` — the drop-off point no source establishes. Required, so no edit
 * can quietly delete the admission and leave the access rules looking like
 * permission to pull up.
 *
 * `seasonal.expiry` and `seasonal.successor` — the 2026 pedestrian-island
 * ordinance runs out on a stated date. The expiry sentence and the record of
 * whether a successor was found are both mandatory, so the measure cannot
 * outlive its evidence or drift into reading as a permanent rule.
 *
 * `access.unverified` — what the regulation does not date and what a separate
 * ordinance governs. Required for the same reason.
 */
export type AmalfiDestination = PageChrome & {
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
        code: string;
        name: string;
        fact: string;
        /** Section id on this page. The component builds the anchor. */
        section: string;
      }[];
    };
  };
  /** Year-round: the regulation the Comune publishes for the centre. */
  access: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    /** Required: what the documents do not settle. */
    unverified: { heading: string; body: string };
    source: Source;
  };
  /** Year-round: article 17, and the four streets it names. */
  stopping: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    streetsLabel: string;
    streets: string[];
    callout: { heading: string; body: string };
    source: Source;
  };
  /** Required: the drop-off point no source establishes. */
  meeting: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
  };
  /** The hotel's arrangement to make, never ours to promise. */
  hotel: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    note: string;
    source: Source;
  };
  /** Scoped to one named car park, never generalised. */
  parking: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    asOf: string;
    items: Term[];
    note: string;
    source: Source;
  };
  /** Dated, bounded, and unable to outlive its ordinance. */
  seasonal: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    ordinance: string;
    validity: string;
    /** Required: states in terms when the measure stops applying. */
    expiry: string;
    windowsLabel: string;
    windows: { label: string; value: string }[];
    permitted: string;
    /** Required: whether a successor was found, and when that was checked. */
    successor: string;
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Naples Capodichino: six actions, not one ────────────────────────── */

/**
 * The airport page whose subject is a set of distinctions people collapse.
 *
 * At Naples Capodichino "can the car stop at the terminal" is six different
 * questions with six different answers: entering the controlled zone,
 * transiting it, stopping briefly (*fermata*), waiting or parking (*sosta*),
 * setting down a departing passenger, and collecting an arriving one. ENAC's
 * ordinance answers each separately, and they do not all come out the same
 * way. `actions` holds them as a matrix precisely so a later edit cannot
 * flatten them into "you can stop outside arrivals".
 *
 * Four fields are required rather than optional:
 *
 * `meeting` — the annexed planimetries could not be read, so no bay, kerb,
 * lane or terminal exit is nameable. The admission is mandatory so that the
 * designated-area rules can never read as a physical meeting point.
 *
 * `pickUp` — the blue Pick-up bays are an *accompanying person's* facility,
 * not a general private-hire entitlement. Keeping it a required, separate
 * field stops the two regimes being merged, which is the single most likely
 * way this page could mislead a driver into a penalty.
 *
 * `closure.expiry` and `closure.successor` — the November 2026 notice rests
 * on an ordinance with a stated end date. Both fields are mandatory so the
 * notice cannot silently become a standing rule, and so the date the
 * successor check was run travels with its result.
 */
export type NaplesAirport = PageChrome & {
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
      /** Required: the physical meeting point no source establishes. */
      unknown: { label: string; body: string };
      source: Source;
    };
  };
  zone: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    /** Penalties, attributed to the operator's guidance rather than the decree. */
    penalties: { heading: string; body: string };
    /** Required: the operator's guidance is where the amounts come from. */
    penaltiesSource: Source;
    source: Source;
  };
  /** The six actions, kept apart on purpose. */
  actions: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
    source: Source;
  };
  /** Required: NCC bays beside the blue Pick-up area, never merged. */
  pickUp: {
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
    note: string;
    source: Source;
  };
  /** The height exception, scoped narrowly and never generalised. */
  vans: {
    id: string;
    heading: string;
    body: string;
    note: string;
    source: Source;
  };
  /** Required: what this page cannot tell you about where to stand. */
  meeting: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
  };
  hours: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    note: string;
    source: Source;
  };
  /** Dated, bounded, and unable to outlive its ordinance. */
  closure: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    ordinance: string;
    period: string;
    /** Required: states when the measure stops applying. */
    expiry: string;
    /** Required: what the successor check found, and when it was run. */
    successor: string;
    limits: { heading: string; body: string };
    source: Source;
  };
  ownerClaim: OwnerClaim;
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

/* ── Ravello: four named places and a deadline ───────────────────────── */

/**
 * The page whose evidence moved under it, twice.
 *
 * Ravello's access rules are unusually generous to a transfer page: the
 * Comune **names** the areas where passengers may be set down and collected,
 * which no other comune in this cluster does. They are also unusually
 * treacherous to cite. Within two days of first being read, the governing
 * ordinance was found to have superseded an earlier one that the Comune's own
 * service page still links, and then to have been amended by a third that had
 * not appeared on the portal the day before.
 *
 * So `rule` is a required block carrying the whole provenance chain, rendered
 * rather than left in a comment:
 *
 * `governing` and `amendedBy` — both required, because a single date would
 * present the base ordinance as current when an amendment already exists.
 *
 * `supersession` — required, so no editor reaches for the revoked 2022
 * ordinance or the original 2025 tariff table, and so a reader who follows the
 * Comune's own link is warned before they act on it.
 *
 * `unresolvedTariff` — required, and the reason there is no price for an
 * ordinary car anywhere on this page. The amending ordinance replaced the
 * tariff table with one that omits the car band while another of its clauses
 * continues to regulate that same category. Until the Comune resolves it, the
 * figure is not publishable, and this field says so on the page itself.
 *
 * `verifiedOn` — the date the regulatory claims were last checked.
 */
export type RavelloRule = {
  label: string;
  governing: string;
  amendedBy: string;
  supersession: string;
  unresolvedTariff: string;
  verifiedOn: string;
};

export type RavelloDestination = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  /** The four areas the ordinance names. */
  areas: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    note: string;
    source: Source;
  };
  /** The process, and the deadline that decides it. */
  booking: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
    source: Source;
  };
  /** Two obligations constantly conflated: the authorisation and the fee. */
  waiver: {
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
    callout: { heading: string; body: string };
    source: Source;
  };
  /** Vehicle limits, and only the tariff bands that are unambiguous. */
  limits: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    /** Required: says in the page why no ordinary-car price appears. */
    note: string;
    source: Source;
  };
  /** Required: no usable official map, so no physical meeting point. */
  meeting: {
    id: string;
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
  };
  /** Required: the provenance chain, rendered. */
  rule: RavelloRule;
  ownerClaim: OwnerClaim;
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

/* ── Naples cruise terminal: the right quay ───────────────────────────── */

export type NaplesCruisePort = PageChrome & {
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
      /** Required, so the gap cannot be dropped by a later edit. */
      unknown: { label: string; body: string };
      source: Source;
    };
  };
  quays: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    split: FacilitySplit;
    note: string;
  };
  ownerClaim: OwnerClaim;
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
