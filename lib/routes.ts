import { absoluteUrl, homePath, locales, type Locale } from "@/lib/site";

/**
 * Every page on the site, in both languages, in one place.
 *
 * ── Why a registry rather than a path in each file ─────────────────────────
 * A page's path is needed in six places: its own canonical, its hreflang
 * alternates, its counterpart's alternates, the sitemap, its breadcrumb
 * trail, and every internal link that points at it. Written out six times it
 * would eventually disagree with itself, and a canonical that disagrees with
 * a sitemap entry is the kind of defect nobody notices for months.
 *
 * So the path is written once. Everything else is derived.
 *
 * ── The publishing gate ───────────────────────────────────────────────────
 * `published` is what the sitemap reads. A page can exist as a route, be
 * linked from nowhere and marked `published: false`, and it will not be
 * offered to a crawler. Adding a file does not publish a page; saying so
 * here does.
 *
 * Italian paths are Italian. The decision, and the trailing-slash policy that
 * goes with it, is recorded in `docs/rome-ia-decisions.md`.
 */
export type PageId =
  | "home"
  | "rome"
  | "fiumicino"
  | "ciampino"
  | "civitavecchia"
  | "rome-stations"
  | "route-fco-rome"
  | "route-cia-rome"
  | "route-rome-civitavecchia"
  | "route-fco-civitavecchia"
  | "milan"
  | "malpensa"
  | "linate"
  | "bergamo-airport"
  | "milan-stations"
  | "lake-como"
  | "route-mxp-milan"
  | "route-lin-milan"
  | "route-bgy-milan"
  | "route-mxp-como"
  | "venice"
  | "verona"
  | "venice-marco-polo"
  | "treviso-airport"
  | "verona-airport"
  | "venice-stations"
  | "route-vce-venice"
  | "route-tsf-venice"
  | "route-vrn-verona"
  | "florence"
  | "pisa-airport"
  | "florence-airport"
  | "val-dorcia"
  | "route-psa-florence"
  | "route-flr-florence"
  | "bologna"
  | "blq"
  | "ravenna"
  | "ravenna-terminal"
  | "route-terminal-ravenna"
  | "route-ravenna-terminal"
  | "hotel-majestic"
  | "hotel-commercianti"
  | "hotel-excelsior"
  | "route-blq-majestic"
  | "route-blq-commercianti"
  | "route-blq-excelsior"
  | "naples"
  | "salerno-airport"
  | "naples-cruise-port"
  | "caserta"
  | "pompeii"
  | "positano"
  | "amalfi"
  | "nap-airport"
  | "ravello"
  | "puglia"
  | "bari"
  | "brindisi"
  | "lecce"
  | "ostuni"
  | "alberobello"
  | "monopoli"
  | "polignano-a-mare"
  | "salento"
  | "about"
  | "quote"
  | "privacy"
  | "terms"
  | "cancellation";

type PageRecord = {
  /** Path per language, without a trailing slash. */
  path: Record<Locale, string>;
  /** The page one level up in the content hierarchy, for breadcrumbs. */
  parent?: PageId;
  /** Whether this page belongs in the sitemap. */
  published: boolean;
  /** Sitemap priority. The homepage is 1; hubs outrank the routes they own. */
  priority: number;
};

const pages: Record<PageId, PageRecord> = {
  home: {
    path: { en: homePath.en, it: homePath.it },
    published: true,
    priority: 1,
  },
  rome: {
    path: { en: "/destinations/rome", it: "/it/destinazioni/roma" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  fiumicino: {
    path: {
      en: "/airports/rome-fiumicino",
      it: "/it/aeroporti/roma-fiumicino",
    },
    parent: "rome",
    published: true,
    priority: 0.9,
  },
  ciampino: {
    path: { en: "/airports/rome-ciampino", it: "/it/aeroporti/roma-ciampino" },
    parent: "rome",
    published: true,
    priority: 0.8,
  },
  civitavecchia: {
    path: {
      en: "/cruise-ports/civitavecchia",
      it: "/it/porti-crociere/civitavecchia",
    },
    parent: "rome",
    published: true,
    priority: 0.8,
  },
  "rome-stations": {
    path: {
      en: "/destinations/rome/train-station-transfers",
      it: "/it/destinazioni/roma/transfer-stazioni",
    },
    parent: "rome",
    published: true,
    priority: 0.7,
  },
  "route-fco-rome": {
    path: {
      en: "/routes/fiumicino-airport-to-rome",
      it: "/it/tratte/aeroporto-fiumicino-roma",
    },
    parent: "fiumicino",
    published: true,
    priority: 0.8,
  },
  "route-cia-rome": {
    path: {
      en: "/routes/ciampino-airport-to-rome",
      it: "/it/tratte/aeroporto-ciampino-roma",
    },
    parent: "ciampino",
    published: true,
    priority: 0.7,
  },
  "route-rome-civitavecchia": {
    path: {
      en: "/routes/rome-to-civitavecchia",
      it: "/it/tratte/roma-civitavecchia",
    },
    parent: "civitavecchia",
    published: true,
    priority: 0.8,
  },
  "route-fco-civitavecchia": {
    path: {
      en: "/routes/fiumicino-airport-to-civitavecchia",
      it: "/it/tratte/aeroporto-fiumicino-civitavecchia",
    },
    parent: "civitavecchia",
    published: true,
    priority: 0.7,
  },

  // ── Milan and Lombardy ────────────────────────────────────────────────
  milan: {
    path: { en: "/destinations/milan", it: "/it/destinazioni/milano" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  malpensa: {
    path: {
      en: "/airports/milan-malpensa",
      it: "/it/aeroporti/milano-malpensa",
    },
    parent: "milan",
    published: true,
    priority: 0.9,
  },
  linate: {
    path: { en: "/airports/milan-linate", it: "/it/aeroporti/milano-linate" },
    parent: "milan",
    published: true,
    priority: 0.8,
  },
  "bergamo-airport": {
    path: { en: "/airports/milan-bergamo", it: "/it/aeroporti/milano-bergamo" },
    parent: "milan",
    published: true,
    priority: 0.8,
  },
  "milan-stations": {
    path: {
      en: "/destinations/milan/train-station-transfers",
      it: "/it/destinazioni/milano/transfer-stazioni",
    },
    parent: "milan",
    published: true,
    priority: 0.7,
  },
  // Lake Como's parent is Milan, not because the lake is in Milan — it is
  // not — but because Milan and its airports are how a visitor reaches it,
  // and the breadcrumb follows the link architecture.
  "lake-como": {
    path: { en: "/destinations/lake-como", it: "/it/destinazioni/lago-di-como" },
    parent: "milan",
    published: true,
    priority: 0.9,
  },
  "route-mxp-milan": {
    path: {
      en: "/routes/malpensa-airport-to-milan",
      it: "/it/tratte/aeroporto-malpensa-milano",
    },
    parent: "malpensa",
    published: true,
    priority: 0.8,
  },
  "route-lin-milan": {
    path: {
      en: "/routes/linate-airport-to-milan",
      it: "/it/tratte/aeroporto-linate-milano",
    },
    parent: "linate",
    published: true,
    priority: 0.7,
  },
  "route-bgy-milan": {
    path: {
      en: "/routes/bergamo-airport-to-milan",
      it: "/it/tratte/aeroporto-bergamo-milano",
    },
    parent: "bergamo-airport",
    published: true,
    priority: 0.7,
  },
  "route-mxp-como": {
    path: {
      en: "/routes/malpensa-airport-to-lake-como",
      it: "/it/tratte/aeroporto-malpensa-lago-di-como",
    },
    parent: "lake-como",
    published: true,
    priority: 0.8,
  },

  // ── Venice, Verona and the Veneto ─────────────────────────────────────
  // Venice and Venezia are ONE page in two languages, not two pages. That is
  // the Veneto architecture document's first rule, and holding it here —
  // one id, two paths — is what makes it structurally impossible to break.
  venice: {
    path: { en: "/destinations/venice", it: "/it/destinazioni/venezia" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  verona: {
    path: { en: "/destinations/verona", it: "/it/destinazioni/verona" },
    parent: "home",
    published: true,
    priority: 0.8,
  },
  "venice-marco-polo": {
    path: {
      en: "/airports/venice-marco-polo",
      it: "/it/aeroporti/venezia-marco-polo",
    },
    parent: "venice",
    published: true,
    priority: 0.9,
  },
  // Parented to Venice rather than to Treviso: the airport is 31 km from
  // Venice and 3 km from Treviso, but Venice is where its passengers are
  // going, and the breadcrumb follows the link architecture. The page spends
  // its first screen on exactly that gap.
  "treviso-airport": {
    path: { en: "/airports/treviso-canova", it: "/it/aeroporti/treviso-canova" },
    parent: "venice",
    published: true,
    priority: 0.8,
  },
  "verona-airport": {
    path: {
      en: "/airports/verona-villafranca",
      it: "/it/aeroporti/verona-villafranca",
    },
    parent: "verona",
    published: true,
    priority: 0.8,
  },
  "venice-stations": {
    path: {
      en: "/destinations/venice/train-station-transfers",
      it: "/it/destinazioni/venezia/transfer-stazioni",
    },
    parent: "venice",
    published: true,
    priority: 0.8,
  },
  "route-vce-venice": {
    path: {
      en: "/routes/marco-polo-airport-to-venice",
      it: "/it/tratte/aeroporto-marco-polo-venezia",
    },
    parent: "venice-marco-polo",
    published: true,
    priority: 0.8,
  },
  "route-tsf-venice": {
    path: {
      en: "/routes/treviso-airport-to-venice",
      it: "/it/tratte/aeroporto-treviso-venezia",
    },
    parent: "treviso-airport",
    published: true,
    priority: 0.7,
  },
  "route-vrn-verona": {
    path: {
      en: "/routes/verona-airport-to-verona",
      it: "/it/tratte/aeroporto-verona-citta",
    },
    parent: "verona-airport",
    published: true,
    priority: 0.7,
  },

  // ── Florence and Tuscany ──────────────────────────────────────────────
  // Florence and Firenze are one page with two paths, as Venice/Venezia is.
  florence: {
    path: { en: "/destinations/florence", it: "/it/destinazioni/firenze" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  // Both Tuscan airports are parented to Florence rather than to the comune
  // they stand in. Pisa's airport is in Pisa and is correctly named, but
  // Florence is where its passengers are going, and the breadcrumb follows
  // the link architecture rather than the map.
  //
  // The slug is `/airports/pisa-galilei`, not `/airports/pisa`: a Pisa city
  // page is a plausible later addition and the two must not collide.
  "pisa-airport": {
    path: { en: "/airports/pisa-galilei", it: "/it/aeroporti/pisa-galilei" },
    parent: "florence",
    published: true,
    priority: 0.9,
  },
  // `florence-peretola`, not `florence`, for the same reason: the city hub
  // already owns the word Florence.
  "florence-airport": {
    path: {
      en: "/airports/florence-peretola",
      it: "/it/aeroporti/firenze-peretola",
    },
    parent: "florence",
    published: true,
    priority: 0.8,
  },
  // Parented to Florence because that is the hub a visitor arrives through,
  // exactly as Lake Como is parented to Milan.
  "val-dorcia": {
    path: { en: "/destinations/val-d-orcia", it: "/it/destinazioni/val-d-orcia" },
    parent: "florence",
    published: true,
    priority: 0.8,
  },
  "route-psa-florence": {
    path: {
      en: "/routes/pisa-airport-to-florence",
      it: "/it/tratte/aeroporto-pisa-firenze",
    },
    parent: "pisa-airport",
    published: true,
    priority: 0.8,
  },
  "route-flr-florence": {
    path: {
      en: "/routes/florence-airport-to-florence",
      it: "/it/tratte/aeroporto-firenze-citta",
    },
    parent: "florence-airport",
    published: true,
    priority: 0.7,
  },

  // ── Bologna, Emilia-Romagna and the Ravenna cruise port ───────────────
  // Stage 1 of the Bologna cluster. The four hotel pages and their eight
  // route pages are planned but deliberately not built yet; see
  // `docs/bologna-phase1-recommendation.md` §9.
  bologna: {
    path: { en: "/destinations/bologna", it: "/it/destinazioni/bologna" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  // `bologna-marconi`, not `bologna`: the registry's <city>-<airport> rule is
  // what keeps an airport from ever colliding with its city.
  blq: {
    path: {
      en: "/airports/bologna-marconi",
      it: "/it/aeroporti/bologna-marconi",
    },
    parent: "bologna",
    published: true,
    priority: 0.9,
  },
  // Ravenna is parented to the homepage rather than to Bologna: it is a
  // separate city roughly 75 km away, not a Bolognese destination, and the
  // breadcrumb should not imply otherwise.
  ravenna: {
    path: { en: "/destinations/ravenna", it: "/it/destinazioni/ravenna" },
    parent: "home",
    published: true,
    priority: 0.7,
  },
  // `ravenna-porto-corsini`, because the port is NOT in Ravenna and the slug
  // should not say it is — the same reasoning as `bologna-marconi`.
  "ravenna-terminal": {
    path: {
      en: "/cruise-ports/ravenna-porto-corsini",
      it: "/it/porti-crociere/ravenna-porto-corsini",
    },
    parent: "ravenna",
    published: true,
    priority: 0.8,
  },
  "route-terminal-ravenna": {
    path: {
      en: "/routes/ravenna-cruise-terminal-to-ravenna",
      it: "/it/tratte/terminal-crociere-ravenna-citta",
    },
    parent: "ravenna-terminal",
    published: true,
    priority: 0.8,
  },
  "route-ravenna-terminal": {
    path: {
      en: "/routes/ravenna-to-ravenna-cruise-terminal",
      it: "/it/tratte/ravenna-terminal-crociere",
    },
    parent: "ravenna",
    published: true,
    priority: 0.7,
  },

  // ── Bologna hotels (Stage 2A) ─────────────────────────────────────────
  // Nested under the city rather than given a top-level /hotels segment:
  // the shape already used by the three `train-station-transfers` pages, and
  // the reason a future Milan hotel can never compete with /destinations/milan.
  //
  // Hotel slugs are identical in both languages. A hotel's name is a proper
  // noun; only the path prefix localizes, as with `val-d-orcia`.
  //
  // Savoia Hotel Regency is deliberately absent — held for Wave 2 because its
  // own site contradicts itself on distances. See
  // `docs/bologna-stage2-hotel-verification.md`.
  "hotel-majestic": {
    path: {
      en: "/destinations/bologna/grand-hotel-majestic",
      it: "/it/destinazioni/bologna/grand-hotel-majestic",
    },
    parent: "bologna",
    published: true,
    priority: 0.7,
  },
  "hotel-commercianti": {
    path: {
      en: "/destinations/bologna/art-hotel-commercianti",
      it: "/it/destinazioni/bologna/art-hotel-commercianti",
    },
    parent: "bologna",
    published: true,
    priority: 0.7,
  },
  "hotel-excelsior": {
    path: {
      en: "/destinations/bologna/starhotels-excelsior",
      it: "/it/destinazioni/bologna/starhotels-excelsior",
    },
    parent: "bologna",
    published: true,
    priority: 0.7,
  },

  // ── BLQ to hotel: arrival routes (Stage 3) ────────────────────────────
  // Parented to the airport rather than to the hotel, because the breadcrumb
  // follows the journey's starting point, as every other arrival route on
  // this site does.
  //
  // The matching hotel-to-BLQ departure routes are deliberately absent: they
  // are Stage 4, and `docs/bologna-phase1-recommendation.md` marks them the
  // first thing to cut if the pairs read as too close. Savoia has no route
  // here either — the hotel itself is held for Wave 2.
  "route-blq-majestic": {
    path: {
      en: "/routes/bologna-airport-to-grand-hotel-majestic",
      it: "/it/tratte/aeroporto-bologna-grand-hotel-majestic",
    },
    parent: "blq",
    published: true,
    priority: 0.7,
  },
  "route-blq-commercianti": {
    path: {
      en: "/routes/bologna-airport-to-art-hotel-commercianti",
      it: "/it/tratte/aeroporto-bologna-art-hotel-commercianti",
    },
    parent: "blq",
    published: true,
    priority: 0.7,
  },
  "route-blq-excelsior": {
    path: {
      en: "/routes/bologna-airport-to-starhotels-excelsior",
      it: "/it/tratte/aeroporto-bologna-starhotels-excelsior",
    },
    parent: "blq",
    published: true,
    priority: 0.7,
  },

  // ── Naples and Campania (Stage 1) ─────────────────────────────────────
  // Three pages only. `nap-airport` is deliberately absent: the airport
  // operator has announced a runway closure for November 2026 but publishes
  // no dates, so a page about it would lead on a fact it cannot source and
  // would be obsolete within weeks. The Naples hub carries an attributed
  // notice instead. See `docs/campania-phase1-recommendation.md` §2.
  naples: {
    path: { en: "/destinations/naples", it: "/it/destinazioni/napoli" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  // `salerno-costa-damalfi`, following the registry's <city>-<airport> rule.
  // The operator's own name for it carries an apostrophe, which cannot
  // survive a slug; the Italian path uses the hyphenated form, which reads
  // more naturally in Italian.
  "salerno-airport": {
    path: {
      en: "/airports/salerno-costa-damalfi",
      it: "/it/aeroporti/salerno-costa-d-amalfi",
    },
    parent: "naples",
    published: true,
    priority: 0.8,
  },
  // The slug names the FACILITY, not the city, as `ravenna-porto-corsini`
  // does — because Naples has several quays and only one of them takes
  // cruise ships. Calata Beverello and Calata Porta di Massa keep their own
  // identities and could never collide with this.
  "naples-cruise-port": {
    path: {
      en: "/cruise-ports/naples-stazione-marittima",
      it: "/it/porti-crociere/napoli-stazione-marittima",
    },
    parent: "naples",
    published: true,
    priority: 0.8,
  },

  // ── Caserta and Pompeii (Stage 2A) ────────────────────────────────────
  // Both parent to `naples`, which keeps the hub as the regional spine and
  // avoids a second top-level Campania entry point. Both are transfer
  // DESTINATION pages, not visit guides: the homepage states twice that the
  // business is not a tour operator and sells no admissions, so neither page
  // carries opening times, tickets or itineraries.
  caserta: {
    path: { en: "/destinations/caserta", it: "/it/destinazioni/caserta" },
    parent: "naples",
    published: true,
    priority: 0.7,
  },
  // English keeps the English exonym, Italian the Italian name — the Venice
  // and Florence precedent. One page id spans both, so the language switcher
  // and the sitemap pair them automatically.
  pompeii: {
    path: { en: "/destinations/pompeii", it: "/it/destinazioni/pompei" },
    parent: "naples",
    published: true,
    priority: 0.7,
  },

  // ── Positano (Stage 2C) ───────────────────────────────────────────────
  // The slug is the comune's own name and is identical in both languages,
  // so only the path prefix localizes. Parented to `naples` like the rest of
  // the cluster. Sorrento, Amalfi, Ravello and Salerno city remain absent:
  // Positano is the only coast comune whose access rules could be read from
  // primary municipal sources. See the Stage 2B audit.
  positano: {
    path: { en: "/destinations/positano", it: "/it/destinazioni/positano" },
    parent: "naples",
    published: true,
    priority: 0.7,
  },

  // ── Amalfi (Stage 2E) ─────────────────────────────────────────────────
  // Same slug in both languages, so only the path prefix localizes. Parented
  // to `naples` like the rest of the cluster. Sorrento, Ravello and Salerno
  // city remain absent: Sorrento's municipal site is unreachable from this
  // environment and the other two have unread ordinances. See the Stage 2D
  // audit.
  amalfi: {
    path: { en: "/destinations/amalfi", it: "/it/destinazioni/amalfi" },
    parent: "naples",
    published: true,
    priority: 0.7,
  },

  // ── Naples Capodichino (Stage 2H) ─────────────────────────────────────
  // Follows the registry's <city>-<airport> rule, which is what keeps an
  // airport structurally incapable of colliding with its own city page. The
  // page was deferred while the governing NCC rules were unreadable; ENAC
  // Ordinanza n. 3/2025 settled them, so it is built now with the November
  // 2026 closure as a dated notice rather than as its subject.
  "nap-airport": {
    path: {
      en: "/airports/naples-capodichino",
      it: "/it/aeroporti/napoli-capodichino",
    },
    parent: "naples",
    published: true,
    priority: 0.8,
  },

  // ── Ravello (Stage 2I-B) ──────────────────────────────────────────────
  // Same slug in both languages. Parented to `naples` like the rest of the
  // cluster. Sorrento and Salerno city remain absent: Sorrento's municipal
  // site is unreachable from this environment, and Salerno city has no
  // retrievable current ordinance. See the Stage 2I and 2I-A audits.
  ravello: {
    path: { en: "/destinations/ravello", it: "/it/destinazioni/ravello" },
    parent: "naples",
    published: true,
    priority: 0.7,
  },

  // ── About the site ────────────────────────────────────────────────────
  // Not a destination, so its parent is the homepage rather than a hub, and
  // its priority sits below every page that answers a journey question. It
  // is the first of the non-journey pages; the legal pages join it here.
  /* ── Puglia ──────────────────────────────────────────────────────────
     English under /destinations/puglia, Italian under /it/destinazioni/puglia,
     no trailing slash — the site's existing convention, confirmed against
     production before the cluster was started. See docs/puglia-keyword-map.md.

     All eight towns are registered so that `pathFor` resolves and the pillar
     can link to each one the moment its page lands. Bari and Brindisi
     shipped in Phase 3; Lecce, Ostuni and Alberobello in Phase 4; Monopoli,
     Polignano a Mare and Salento in Phase 5. The cluster is complete, and
     every town in this record is now published. An id in this record is a route,
     and `published` is the only thing the sitemap and the nav read, so an
     unfinished page cannot be offered to a crawler — or linked from the
     pillar — by accident. */
  puglia: {
    path: { en: "/destinations/puglia", it: "/it/destinazioni/puglia" },
    parent: "home",
    published: true,
    priority: 0.9,
  },
  bari: {
    path: { en: "/destinations/puglia/bari", it: "/it/destinazioni/puglia/bari" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  brindisi: {
    path: { en: "/destinations/puglia/brindisi", it: "/it/destinazioni/puglia/brindisi" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  lecce: {
    path: { en: "/destinations/puglia/lecce", it: "/it/destinazioni/puglia/lecce" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  ostuni: {
    path: { en: "/destinations/puglia/ostuni", it: "/it/destinazioni/puglia/ostuni" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  alberobello: {
    path: { en: "/destinations/puglia/alberobello", it: "/it/destinazioni/puglia/alberobello" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  monopoli: {
    path: { en: "/destinations/puglia/monopoli", it: "/it/destinazioni/puglia/monopoli" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  "polignano-a-mare": {
    path: {
      en: "/destinations/puglia/polignano-a-mare",
      it: "/it/destinazioni/puglia/polignano-a-mare",
    },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },
  salento: {
    path: { en: "/destinations/puglia/salento", it: "/it/destinazioni/puglia/salento" },
    parent: "puglia",
    published: true,
    priority: 0.8,
  },

  about: {
    path: { en: "/about", it: "/it/chi-siamo" },
    parent: "home",
    published: true,
    priority: 0.5,
  },

  // The destination every "Request a quote" on the site points at. High
  // priority because it is the one page the whole site is pointed at, and
  // `quotePathFor()` in lib/site.ts resolves to it.
  quote: {
    path: { en: "/get-a-quote", it: "/it/richiedi-preventivo" },
    parent: "home",
    published: true,
    priority: 0.9,
  },

  // ── The policy pages ──────────────────────────────────────────────────
  // Published. These were `published: false` while they were drafts that
  // depended on business facts nobody had supplied; the facts are in, the
  // pages are finished, and the gate has been opened. Low priority because a
  // policy is something a customer looks up rather than something a search
  // engine should rank above a destination page — not because it matters
  // less.
  privacy: {
    path: { en: "/privacy-policy", it: "/it/privacy" },
    parent: "home",
    published: true,
    priority: 0.3,
  },
  terms: {
    path: { en: "/terms-and-conditions", it: "/it/termini-e-condizioni" },
    parent: "home",
    published: true,
    priority: 0.3,
  },
  cancellation: {
    path: {
      en: "/cancellation-and-refund",
      it: "/it/cancellazione-e-rimborsi",
    },
    parent: "home",
    published: true,
    priority: 0.3,
  },
};

export const pageIds = Object.keys(pages) as PageId[];

/** The path of a page in one language. */
export function pathFor(id: PageId, locale: Locale): string {
  return pages[id].path[locale];
}

/**
 * A path with a section anchor on it.
 *
 * Shaped like `quotePathFor`: `/#prepare` in English, `/it/#prepare` in
 * Italian, so every anchor link on the site has the same spelling.
 */
export function pathWithHash(
  id: PageId,
  locale: Locale,
  hash?: string,
): string {
  const base = pathFor(id, locale);
  if (!hash) return base;
  return `${base === "/" ? "" : base}/#${hash}`.replace("//#", "/#");
}

/** The absolute URL of a page in one language. */
export function urlFor(id: PageId, locale: Locale): string {
  return absoluteUrl(pathFor(id, locale));
}

/**
 * Reciprocal hreflang for a page that exists in both languages.
 *
 * `x-default` points at the English URL: English is the site's default entry
 * point, not a third version of the page.
 */
export function alternatesFor(id: PageId): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = urlFor(id, locale);
  languages["x-default"] = urlFor(id, "en");
  return languages;
}

/**
 * Where the language switcher goes from a given page.
 *
 * Every page in this wave exists in both languages, so this is always the
 * counterpart. The fallback is here for the first page that does not: the
 * switcher lands on the other language's homepage rather than a 404.
 */
export function counterpartPath(id: PageId | undefined, other: Locale): string {
  if (!id || !(id in pages)) return homePath[other];
  return pathFor(id, other);
}

/** Pages in the sitemap: published only, both languages. */
export function publishedPages(): { id: PageId; priority: number }[] {
  return pageIds
    .filter((id) => pages[id].published)
    .map((id) => ({ id, priority: pages[id].priority }));
}

/**
 * The breadcrumb trail for a page, root first, the page itself last.
 *
 * It follows the content hierarchy rather than the URL segments, because
 * `/airports` and `/cruise-ports` are path segments with no page behind them
 * and a breadcrumb level that 404s is worse than one that does not mirror the
 * path. See `docs/rome-ia-decisions.md`.
 */
/**
 * Whether a page may be linked to yet.
 *
 * The pillar names all eight Puglia towns from the day it ships, but their
 * pages arrive over later phases. Rather than hard-code a list that someone
 * must remember to edit, the component asks here: a town renders as a link
 * once its entry is published, and as plain text before that. No broken
 * links, and no stub pages written only to satisfy a link.
 */
export function isPublished(id: PageId): boolean {
  return pages[id].published;
}

export function trailFor(id: PageId): PageId[] {
  const trail: PageId[] = [id];
  let cursor = pages[id].parent;
  // The registry is a tree, but a mis-edit could make it a cycle; the depth
  // cap means a bad edit shows up as a short breadcrumb, not a hung render.
  for (let depth = 0; cursor && depth < 8; depth += 1) {
    trail.unshift(cursor);
    cursor = pages[cursor].parent;
  }
  return trail;
}

/**
 * The counterpart of a path in the other language.
 *
 * The language switcher lives in the header, which is rendered by the layout
 * and cannot be told which page it is on — so it matches the current path
 * against the registry instead. A path that is not a registered page (a
 * not-found, say) falls back to the other language's homepage, which is
 * always a real page.
 *
 * Trailing slashes are tolerated because a visitor may well type one.
 */
export function counterpartForPath(pathname: string, other: Locale): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  for (const id of pageIds) {
    for (const locale of locales) {
      if (pages[id].path[locale] === path) return pages[id].path[other];
    }
  }
  return homePath[other];
}
