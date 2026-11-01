import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { homePath, quotePathFor, type Locale } from "@/lib/site";

/**
 * The site's single navigation source, in both languages.
 *
 * ── The rule that shapes this file ─────────────────────────────────────────
 * An item is rendered only when it resolves to something that exists. In this
 * phase that means the homepage and its section anchors: no city, airport,
 * port or service page has been built, and a menu full of links to pages that
 * do not exist is worse than a short menu.
 *
 * Anchors are shared between languages because the section ids are the same
 * on both homepages — only the prefix differs (`/` or `/it`). That is also
 * what lets the language switcher keep you on the section you were reading.
 *
 * As real pages ship they are added here with a real href, and the navbar
 * component needs no change: groups appear, menus grow, and a menu left with
 * a single link collapses into a plain top-level link on its own.
 */

export type NavItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = { id: string; heading: string; items: NavItem[] };

export type NavEntry = {
  id: string;
  label: string;
  href?: string;
  groups?: NavGroup[];
};

type Strings = {
  destinations: string;
  airports: string;
  transfers: string;
  services: string;
  home: string;
  onArrival: string;
  betweenPlaces: string;
  journeys: string;
  planning: string;
  romeAndLazio: string;
  milanAndLombardy: string;
  veniceAndVeneto: string;
  florenceAndTuscany: string;
  bolognaAndRomagna: string;
  naplesAndCampania: string;
  puglia: string;
  acrossItaly: string;
  journeysGroup: string;
  milanJourneysGroup: string;
  romeAirports: string;
  milanAirports: string;
  venetoAirports: string;
  tuscanyAirports: string;
  romagnaAirports: string;
  campaniaAirports: string;
  pages: Partial<Record<PageId, string>>;
  items: Record<string, { label: string; description?: string }>;
  footer: {
    transfers: string;
    journeys: string;
    planning: string;
    rome: string;
    milan: string;
    veneto: string;
    tuscany: string;
    bologna: string;
    campania: string;
    legal: string;
  };
};

const strings: Record<Locale, Strings> = {
  en: {
    home: "Home",
    destinations: "Destinations",
    airports: "Airports",
    transfers: "Transfers",
    services: "Services",
    onArrival: "On arrival",
    betweenPlaces: "Between places",
    journeys: "Journeys",
    planning: "Planning",
    romeAndLazio: "Rome and Lazio",
    milanAndLombardy: "Milan and Lombardy",
    veniceAndVeneto: "Venice and the Veneto",
    florenceAndTuscany: "Florence and Tuscany",
    bolognaAndRomagna: "Bologna and Romagna",
    naplesAndCampania: "Naples and Campania",
    puglia: "Puglia",
    acrossItaly: "Across Italy",
    journeysGroup: "Journeys from Rome",
    milanJourneysGroup: "Journeys from Milan",
    romeAirports: "Rome",
    milanAirports: "Milan",
    venetoAirports: "Venice and Verona",
    tuscanyAirports: "Tuscany",
    romagnaAirports: "Emilia-Romagna",
    campaniaAirports: "Campania",
    pages: {
      rome: "Transfers in Rome",
      fiumicino: "Fiumicino Airport (FCO)",
      ciampino: "Ciampino Airport (CIA)",
      civitavecchia: "Civitavecchia cruise port",
      "rome-stations": "Rome railway stations",
      "route-fco-rome": "Fiumicino Airport to Rome",
      "route-cia-rome": "Ciampino Airport to Rome",
      "route-rome-civitavecchia": "Rome to Civitavecchia",
      "route-fco-civitavecchia": "Fiumicino to Civitavecchia",
      milan: "Transfers in Milan",
      malpensa: "Malpensa Airport (MXP)",
      linate: "Linate Airport (LIN)",
      "bergamo-airport": "Bergamo Airport (BGY)",
      "milan-stations": "Milan railway stations",
      "lake-como": "Lake Como",
      "route-mxp-milan": "Malpensa Airport to Milan",
      "route-lin-milan": "Linate Airport to Milan",
      "route-bgy-milan": "Bergamo Airport to Milan",
      "route-mxp-como": "Malpensa Airport to Lake Como",
      venice: "Transfers in Venice",
      verona: "Transfers in Verona",
      "venice-marco-polo": "Venice Marco Polo (VCE)",
      "treviso-airport": "Treviso (TSF)",
      "verona-airport": "Verona Villafranca (VRN)",
      "venice-stations": "Venice railway stations",
      "route-vce-venice": "Marco Polo Airport to Venice",
      "route-tsf-venice": "Treviso Airport to Venice",
      "route-vrn-verona": "Verona Airport to Verona",
      florence: "Transfers in Florence",
      "val-dorcia": "Val d'Orcia",
      "pisa-airport": "Pisa Galileo Galilei (PSA)",
      "florence-airport": "Florence Peretola (FLR)",
      "route-psa-florence": "Pisa Airport to Florence",
      "route-flr-florence": "Florence Airport to Florence",
      bologna: "Transfers in Bologna",
      blq: "Bologna Marconi Airport (BLQ)",
      ravenna: "Transfers in Ravenna",
      "ravenna-terminal": "Ravenna Cruise Terminal",
      "route-terminal-ravenna": "Cruise terminal to Ravenna",
      "route-ravenna-terminal": "Ravenna to the cruise terminal",
      "hotel-majestic": "Grand Hotel Majestic",
      "hotel-commercianti": "Art Hotel Commercianti",
      "hotel-excelsior": "Starhotels Excelsior",
      "route-blq-majestic": "Bologna Airport to the Grand Hotel Majestic",
      "route-blq-commercianti": "Bologna Airport to the Art Hotel Commercianti",
      "route-blq-excelsior": "Bologna Airport to the Starhotels Excelsior",
      naples: "Transfers in Naples",
      "salerno-airport": "Salerno Costa d'Amalfi Airport (QSR)",
      "nap-airport": "Naples Capodichino Airport (NAP)",
      "naples-cruise-port": "Naples cruise terminal",
      caserta: "Transfers to Caserta",
      pompeii: "Transfers to Pompeii",
      positano: "Transfers to Positano",
      amalfi: "Transfers to Amalfi",
      ravello: "Transfers to Ravello",
      about: "About us",
      quote: "Get a quote",
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
      cancellation: "Cancellation and Refund Policy",
    },
    items: {
      "airport-transfers": {
        label: "Airport transfers",
        description: "Arrivals and departures at Italian airports.",
      },
      "station-transfers": {
        label: "Railway station transfers",
        description: "Main-line stations, with the platform end on foot.",
      },
      "cruise-port-transfers": {
        label: "Cruise port transfers",
        description: "To and from the terminal named on your documents.",
      },
      "hotel-transfers": {
        label: "Hotel transfers",
        description: "Door-to-door where the address allows it.",
      },
      "intercity-transfers": {
        label: "Intercity transfers",
        description: "City to city, in one vehicle, without changes.",
      },
      "cross-border-transfers": {
        label: "Cross-border journeys",
        description: "Selected routes beyond Italy, subject to confirmation.",
      },
      "day-trips": {
        label: "Day trips and private tours",
        description: "A day built around your itinerary, not a timetable.",
      },
      "business-events": {
        label: "Business and events",
        description: "Meetings, exhibitions and multi-stop days.",
      },
      "how-it-works": {
        label: "How it works",
        description: "From a request to a confirmed arrangement.",
      },
      prepare: {
        label: "What to have ready",
        description: "The details that make a quotation useful.",
      },
      faq: {
        label: "Questions",
        description: "Straight answers about what can be requested.",
      },
      destinations: { label: "Destinations in Italy" },
      airports: { label: "Airports we are asked about" },
      quote: { label: "Request a quote" },
    },
    footer: {
      transfers: "Transfers",
      journeys: "Journeys",
      planning: "Planning a journey",
      rome: "Rome and Lazio",
      milan: "Milan and Lombardy",
      veneto: "Venice and the Veneto",
      tuscany: "Florence and Tuscany",
      bologna: "Bologna and Romagna",
      campania: "Naples and Campania",
      legal: "Legal",
    },
  },
  it: {
    home: "Home",
    destinations: "Destinazioni",
    airports: "Aeroporti",
    transfers: "Transfer",
    services: "Servizi",
    onArrival: "All'arrivo",
    betweenPlaces: "Fra una città e l'altra",
    journeys: "Viaggi",
    planning: "Organizzare",
    romeAndLazio: "Roma e Lazio",
    milanAndLombardy: "Milano e Lombardia",
    veniceAndVeneto: "Venezia e il Veneto",
    florenceAndTuscany: "Firenze e la Toscana",
    bolognaAndRomagna: "Bologna e la Romagna",
    naplesAndCampania: "Napoli e la Campania",
    puglia: "Puglia",
    acrossItaly: "In tutta Italia",
    journeysGroup: "Tratte da Roma",
    milanJourneysGroup: "Tratte da Milano",
    romeAirports: "Roma",
    milanAirports: "Milano",
    venetoAirports: "Venezia e Verona",
    tuscanyAirports: "Toscana",
    romagnaAirports: "Emilia-Romagna",
    campaniaAirports: "Campania",
    pages: {
      rome: "Transfer a Roma",
      fiumicino: "Aeroporto di Fiumicino (FCO)",
      ciampino: "Aeroporto di Ciampino (CIA)",
      civitavecchia: "Porto di Civitavecchia",
      "rome-stations": "Stazioni ferroviarie di Roma",
      "route-fco-rome": "Da Fiumicino a Roma",
      "route-cia-rome": "Da Ciampino a Roma",
      "route-rome-civitavecchia": "Da Roma a Civitavecchia",
      "route-fco-civitavecchia": "Da Fiumicino a Civitavecchia",
      milan: "Transfer a Milano",
      malpensa: "Aeroporto di Malpensa (MXP)",
      linate: "Aeroporto di Linate (LIN)",
      "bergamo-airport": "Aeroporto di Bergamo (BGY)",
      "milan-stations": "Stazioni ferroviarie di Milano",
      "lake-como": "Lago di Como",
      "route-mxp-milan": "Da Malpensa a Milano",
      "route-lin-milan": "Da Linate a Milano",
      "route-bgy-milan": "Da Bergamo a Milano",
      "route-mxp-como": "Da Malpensa al Lago di Como",
      venice: "Transfer a Venezia",
      verona: "Transfer a Verona",
      "venice-marco-polo": "Venezia Marco Polo (VCE)",
      "treviso-airport": "Treviso (TSF)",
      "verona-airport": "Verona Villafranca (VRN)",
      "venice-stations": "Stazioni ferroviarie di Venezia",
      "route-vce-venice": "Dall'aeroporto Marco Polo a Venezia",
      "route-tsf-venice": "Dall'aeroporto di Treviso a Venezia",
      "route-vrn-verona": "Dall'aeroporto di Verona alla città",
      florence: "Transfer a Firenze",
      "val-dorcia": "Val d'Orcia",
      "pisa-airport": "Aeroporto di Pisa Galileo Galilei (PSA)",
      "florence-airport": "Aeroporto di Firenze Peretola (FLR)",
      "route-psa-florence": "Dall'aeroporto di Pisa a Firenze",
      "route-flr-florence": "Dall'aeroporto di Firenze alla città",
      bologna: "Transfer a Bologna",
      blq: "Aeroporto di Bologna Marconi (BLQ)",
      ravenna: "Transfer a Ravenna",
      "ravenna-terminal": "Terminal crociere di Ravenna",
      "route-terminal-ravenna": "Dal terminal crociere a Ravenna",
      "route-ravenna-terminal": "Da Ravenna al terminal crociere",
      "hotel-majestic": "Grand Hotel Majestic",
      "hotel-commercianti": "Art Hotel Commercianti",
      "hotel-excelsior": "Starhotels Excelsior",
      "route-blq-majestic": "Dall'aeroporto di Bologna al Grand Hotel Majestic",
      "route-blq-commercianti": "Dall'aeroporto di Bologna all'Art Hotel Commercianti",
      "route-blq-excelsior": "Dall'aeroporto di Bologna allo Starhotels Excelsior",
      naples: "Transfer a Napoli",
      "salerno-airport": "Aeroporto di Salerno Costa d'Amalfi (QSR)",
      "nap-airport": "Aeroporto di Napoli Capodichino (NAP)",
      "naples-cruise-port": "Terminal crociere di Napoli",
      caserta: "Transfer per Caserta",
      pompeii: "Transfer per Pompei",
      positano: "Transfer per Positano",
      amalfi: "Transfer per Amalfi",
      ravello: "Transfer per Ravello",
      about: "Chi siamo",
      quote: "Richiedi un preventivo",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
      cancellation: "Cancellazioni e rimborsi",
    },
    items: {
      "airport-transfers": {
        label: "Transfer aeroportuali",
        description: "Arrivi e partenze dagli aeroporti italiani.",
      },
      "station-transfers": {
        label: "Transfer per le stazioni",
        description: "Stazioni principali; l'ultimo tratto al binario a piedi.",
      },
      "cruise-port-transfers": {
        label: "Transfer per i porti crocieristici",
        description: "Da e per il terminal indicato sui vostri documenti.",
      },
      "hotel-transfers": {
        label: "Transfer per gli hotel",
        description: "Da porta a porta dove l'indirizzo lo consente.",
      },
      "intercity-transfers": {
        label: "Trasferimenti fra città",
        description: "Da una città all'altra, un solo veicolo, senza cambi.",
      },
      "cross-border-transfers": {
        label: "Viaggi oltre confine",
        description: "Alcune tratte fuori dall'Italia, soggette a conferma.",
      },
      "day-trips": {
        label: "Escursioni e tour privati",
        description: "Una giornata sul vostro itinerario, non su un orario.",
      },
      "business-events": {
        label: "Aziende ed eventi",
        description: "Riunioni, fiere e giornate con più tappe.",
      },
      "how-it-works": {
        label: "Come funziona",
        description: "Dalla richiesta all'accordo confermato.",
      },
      prepare: {
        label: "Che cosa tenere pronto",
        description: "I dettagli che rendono utile un preventivo.",
      },
      faq: {
        label: "Domande",
        description: "Risposte dirette su che cosa si può chiedere.",
      },
      destinations: { label: "Destinazioni in Italia" },
      airports: { label: "Gli aeroporti di cui ci si chiede" },
      quote: { label: "Richiedi un preventivo" },
    },
    footer: {
      transfers: "Transfer",
      journeys: "Viaggi",
      planning: "Organizzare il viaggio",
      rome: "Roma e Lazio",
      milan: "Milano e Lombardia",
      veneto: "Venezia e il Veneto",
      tuscany: "Firenze e la Toscana",
      bologna: "Bologna e la Romagna",
      campania: "Napoli e la Campania",
      legal: "Note legali",
    },
  },
};

/** `/#faq` in English, `/it#faq` in Italian. */
function anchor(locale: Locale, id: string): string {
  const base = homePath[locale];
  return `${base === "/" ? "" : base}/#${id}`.replace("//#", "/#");
}

export function buildNavigation(locale: Locale): NavEntry[] {
  const s = strings[locale];
  const item = (id: string): NavItem => ({
    id,
    label: s.items[id].label,
    description: s.items[id].description,
    href: anchor(locale, id),
  });
  /** A real page, labelled from the navigation strings. */
  const page = (id: PageId): NavItem => ({
    id,
    label: s.pages[id] ?? pageName(id, locale),
    href: pathFor(id, locale),
  });

  return [
    { id: "home", label: s.home, href: homePath[locale] },
    {
      id: "destinations",
      label: s.destinations,
      groups: [
        {
          id: "rome-and-lazio",
          heading: s.romeAndLazio,
          items: [
            page("rome"),
            page("rome-stations"),
            page("civitavecchia"),
          ],
        },
        {
          id: "rome-journeys",
          heading: s.journeysGroup,
          items: [
            page("route-fco-rome"),
            page("route-cia-rome"),
            page("route-rome-civitavecchia"),
            page("route-fco-civitavecchia"),
          ],
        },
        {
          id: "milan-and-lombardy",
          heading: s.milanAndLombardy,
          items: [page("milan"), page("lake-como"), page("milan-stations")],
        },
        {
          id: "venice-and-veneto",
          heading: s.veniceAndVeneto,
          items: [page("venice"), page("verona"), page("venice-stations")],
        },
        {
          id: "florence-and-tuscany",
          heading: s.florenceAndTuscany,
          items: [page("florence"), page("val-dorcia")],
        },
        {
          id: "bologna-and-romagna",
          heading: s.bolognaAndRomagna,
          items: [page("bologna"), page("ravenna"), page("ravenna-terminal")],
        },
        {
          id: "puglia",
          heading: s.puglia,
          // Only published pages appear. All eight towns shipped across
          // Phases 3–5 and all eight are published, so the filter currently
          // passes everything — it stays because it is what kept the menu
          // honest while they arrived one phase at a time, and it is what
          // would keep it honest again if a page were ever unpublished.
          items: (
            [
              "puglia", "bari", "brindisi", "lecce", "ostuni",
              "alberobello", "monopoli", "polignano-a-mare", "salento",
            ] as PageId[]
          )
            .filter((id) => isPublished(id))
            .map((id) => page(id)),
        },
        {
          id: "naples-and-campania",
          heading: s.naplesAndCampania,
          items: [
            page("naples"),
            page("naples-cruise-port"),
            page("positano"),
            page("amalfi"),
            page("ravello"),
            page("pompeii"),
            page("caserta"),
          ],
        },
        {
          id: "across-italy",
          heading: s.acrossItaly,
          items: [
            {
              id: "all-destinations",
              label: s.items.destinations.label,
              href: anchor(locale, "destinations"),
            },
          ],
        },
      ],
    },
    {
      id: "airports",
      label: s.airports,
      groups: [
        {
          id: "rome-airports",
          heading: s.romeAirports,
          items: [page("fiumicino"), page("ciampino")],
        },
        {
          id: "milan-airports",
          heading: s.milanAirports,
          items: [page("malpensa"), page("linate"), page("bergamo-airport")],
        },
        {
          id: "veneto-airports",
          heading: s.venetoAirports,
          items: [
            page("venice-marco-polo"),
            page("treviso-airport"),
            page("verona-airport"),
          ],
        },
        {
          id: "tuscany-airports",
          heading: s.tuscanyAirports,
          items: [page("pisa-airport"), page("florence-airport")],
        },
        {
          id: "romagna-airports",
          heading: s.romagnaAirports,
          items: [page("blq")],
        },
        {
          id: "campania-airports",
          heading: s.campaniaAirports,
          items: [page("nap-airport"), page("salerno-airport")],
        },
        {
          id: "italy-airports",
          heading: s.acrossItaly,
          items: [
            {
              id: "all-airports",
              label: s.items.airports.label,
              href: anchor(locale, "airports"),
            },
          ],
        },
      ],
    },
    {
      id: "transfers",
      label: s.transfers,
      groups: [
        {
          id: "on-arrival",
          heading: s.onArrival,
          items: [
            item("airport-transfers"),
            item("station-transfers"),
            item("cruise-port-transfers"),
            item("hotel-transfers"),
          ],
        },
        {
          id: "between-places",
          heading: s.betweenPlaces,
          items: [item("intercity-transfers"), item("cross-border-transfers")],
        },
      ],
    },
    {
      id: "services",
      label: s.services,
      groups: [
        {
          id: "journeys",
          heading: s.journeys,
          items: [item("day-trips"), item("business-events")],
        },
        {
          id: "planning",
          heading: s.planning,
          items: [item("how-it-works"), item("prepare"), item("faq")],
        },
      ],
    },
    // A plain top-level link, not a menu: About us is one page, and the
    // navbar already renders a single-link entry as a link rather than a
    // dropdown. It sits last because it answers a question about the site
    // rather than about a journey.
    {
      id: "about",
      label: s.pages.about ?? pageName("about", locale),
      href: pathFor("about", locale),
    },
  ];
}

/**
 * The policy pages, for the footer's bottom bar.
 *
 * They are built separately from `buildFooterNav` rather than as a tenth
 * column in it. With nine columns in a three-column grid the grid is three
 * clean rows; a tenth lands alone on a fourth row, below a screen's worth of
 * whitespace, which is where these links were effectively invisible. The
 * bottom bar beside the copyright line is both where legal links are
 * conventionally looked for and where they can actually be seen.
 */
export function buildLegalNav(locale: Locale): NavGroup {
  const s = strings[locale];
  return {
    id: "legal",
    heading: s.footer.legal,
    items: (["privacy", "terms", "cancellation"] as PageId[]).map((id) => ({
      id,
      label: s.pages[id] ?? pageName(id, locale),
      href: pathFor(id, locale),
    })),
  };
}

export function buildFooterNav(locale: Locale): NavGroup[] {
  const s = strings[locale];
  const item = (id: string): NavItem => ({
    id,
    label: s.items[id].label,
    href: anchor(locale, id),
  });
  const page = (id: PageId): NavItem => ({
    id,
    label: s.pages[id] ?? pageName(id, locale),
    href: pathFor(id, locale),
  });

  return [
    {
      id: "rome",
      heading: s.footer.rome,
      items: [
        page("rome"),
        page("fiumicino"),
        page("ciampino"),
        page("civitavecchia"),
        page("rome-stations"),
      ],
    },
    {
      id: "milan",
      heading: s.footer.milan,
      items: [
        page("milan"),
        page("malpensa"),
        page("linate"),
        page("bergamo-airport"),
        page("lake-como"),
        page("milan-stations"),
      ],
    },
    {
      id: "veneto",
      heading: s.footer.veneto,
      items: [
        page("venice"),
        page("verona"),
        page("venice-marco-polo"),
        page("treviso-airport"),
        page("verona-airport"),
        page("venice-stations"),
      ],
    },
    {
      id: "tuscany",
      heading: s.footer.tuscany,
      items: [
        page("florence"),
        page("pisa-airport"),
        page("florence-airport"),
        page("val-dorcia"),
      ],
    },
    {
      id: "bologna",
      heading: s.footer.bologna,
      items: [
        page("bologna"),
        page("blq"),
        page("hotel-majestic"),
        page("hotel-commercianti"),
        page("hotel-excelsior"),
        page("ravenna"),
        page("ravenna-terminal"),
      ],
    },
    {
      id: "campania",
      heading: s.footer.campania,
      items: [
        page("naples"),
        page("nap-airport"),
        page("salerno-airport"),
        page("naples-cruise-port"),
        page("positano"),
        page("amalfi"),
        page("ravello"),
        page("pompeii"),
        page("caserta"),
      ],
    },
    {
      id: "transfers",
      heading: s.footer.transfers,
      items: [
        item("airport-transfers"),
        item("intercity-transfers"),
        item("cross-border-transfers"),
        item("cruise-port-transfers"),
        item("station-transfers"),
        item("hotel-transfers"),
      ],
    },
    {
      id: "journeys",
      heading: s.footer.journeys,
      items: [
        item("day-trips"),
        item("business-events"),
        item("destinations"),
        item("airports"),
      ],
    },
    {
      id: "planning",
      heading: s.footer.planning,
      items: [
        item("how-it-works"),
        item("prepare"),
        item("faq"),
        // The quotation form, not the homepage section it used to be. This
        // is the one link in the file that does not come from `page()` or
        // `item()`: its label is the call-to-action wording rather than the
        // page's own name, and its href comes from `quotePathFor` so it
        // moves with every other call to action on the site.
        {
          id: "quote",
          label: s.items.quote.label,
          href: quotePathFor(locale),
        },
        // The first page here that is not a section of the homepage.
        page("about"),
      ],
    },
    // The policy pages are deliberately NOT a tenth column here. They are
    // rendered in the footer's bottom bar by `buildLegalNav`; see the note
    // on that function.
  ];
}

/** Anchors the navigation depends on; the QA crawl checks each homepage. */
export const requiredAnchors = [
  "destinations",
  "airports",
  "airport-transfers",
  "station-transfers",
  "cruise-port-transfers",
  "hotel-transfers",
  "intercity-transfers",
  "cross-border-transfers",
  "day-trips",
  "business-events",
  "how-it-works",
  "prepare",
  "faq",
  "request-a-quote",
] as const;
