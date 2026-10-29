import type { Locale } from "@/lib/site";
import type { VeronaAirport } from "./types";

/**
 * Verona Villafranca — Valerio Catullo.
 *
 * A small airport with two quite different things people leave it for: the
 * city ten kilometres away, and Lake Garda to the west. The page forks on
 * that, and is careful about the second prong — Garda is named as a
 * direction, never as a route this site claims to serve, because coverage
 * has not been confirmed. See `docs/veneto-research-log.md` §3 and §7.
 *
 * The Airlink section is the one place in this cluster where an operator's
 * own page was reachable, so it carries real operating hours. The fare is
 * deliberately omitted, on the same policy that kept Rome's ZTL charge and
 * Milan's Area C charge off those pages.
 */

const en: VeronaAirport = {
  meta: {
    title: "Verona Airport transfers (VRN)",
    description:
      "Verona Villafranca, about 10 km south-west of the city: the run into Verona, the honest position on Lake Garda, and what the Airlink does and does not solve.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Verona Villafranca · VRN",
    h1: "Transfers at Verona Airport",
    lead: "Valerio Catullo is a small airport with two quite different exits: the city about ten kilometres to the north-east, and Lake Garda to the west. Which one you need changes the request entirely.",
    primaryCta: "Request a quotation",
    secondaryCta: "City or lake?",
    facts: [
      { label: "Official name", value: "Valerio Catullo" },
      { label: "Codes", value: "VRN · LIPX" },
      { label: "Location", value: "Villafranca di Verona" },
      { label: "From Verona", value: "About 10 km south-west" },
    ],
  },

  fork: {
    id: "fork",
    eyebrow: "The fork",
    heading: "Two directions out of one small airport",
    lead: "They are not variations of each other, and only one of them is something this site publishes a route for.",
    columns: [
      {
        id: "city",
        heading: "Into Verona",
        subheading: "About 10 km north-east",
        rows: [
          {
            term: "What the journey is",
            detail:
              "A short run into an ordinary road city, ending at the address. After the Venice pages, a refreshingly simple proposition.",
          },
          {
            term: "What to send",
            detail:
              "The flight number and date, the scheduled arrival time, and the full address with the district if you know it.",
          },
          {
            term: "The public alternative",
            detail:
              "The Airlink runs to Verona Porta Nuova under a single ticket. Useful if the station is where you are going; less so if you have luggage and an address.",
          },
        ],
      },
      {
        id: "lake",
        heading: "Towards Lake Garda",
        subheading: "West — and no route is published for it",
        rows: [
          {
            term: "Why the lake is different",
            detail:
              "Garda has a Verona side and a Lombardy side. A town on one shore is not a short hop from a town on the other, and the town you name decides the road completely.",
          },
          {
            term: "What exists publicly",
            detail:
              "In summer the local bus operator runs services from the airport to comuni along the lake. That is a seasonal public service, listed as context, not as something provided here.",
          },
          {
            term: "What this page will not do",
            detail:
              "Claim that any particular Garda town can be served. Coverage has not been confirmed, so no route to the lake is published. Name the town when you ask and the answer will be about that town.",
          },
        ],
      },
    ],
  },

  airlink: {
    id: "airlink",
    heading: "The Verona Airlink, and what it does not solve",
    paragraphs: [
      "Trenitalia runs a combined train-and-bus service under a single ticket, linking Verona Porta Nuova with the airport in partnership with ATV. The bus leg is scheduled roughly every twenty minutes at peak times and every forty minutes otherwise, with departures from Porta Nuova between 05:15 and 22:50 and from the airport between 05:35 and 23:10.",
      "It is a public service and not ours, and it is worth knowing about honestly: if your destination is Porta Nuova or somewhere an easy walk from it, it may well be the better answer. What it does not solve is the thing a transfer solves — getting you and your luggage from the airport to a particular address at a time you choose.",
    ],
    source: {
      text: "Structure and operating hours as published by Trenitalia and checked in October 2026. Timetables change, and no fare is quoted here because fares change more often still:",
      linkText: "Trenitalia publishes the Airlink's current details",
      href: "https://www.trenitalia.com/en/connections/verona-airlink.html",
    },
  },

  onward: {
    id: "onward",
    heading: "From Verona Airport",
    items: [
      {
        page: "route-vrn-verona",
        label: "Verona Airport to Verona",
        detail: "The short run into the city, in full.",
      },
      {
        page: "verona",
        label: "Private transfers in Verona",
        detail: "The city, the station and the lake question.",
      },
      {
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "If you are comparing the region's airports.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Verona Airport questions",
    lead: "Half of them turn out to be about the lake.",
    items: [
      {
        question: "How far is the airport from Verona?",
        answer:
          "About 10 km south-west, in the comune of Villafranca di Verona. How long the drive takes depends on the hour and the address, so no duration is quoted here.",
      },
      {
        question: "Can you take me to Lake Garda?",
        answer:
          "Ask, and name the town. No Garda route is published on this site because coverage has not been confirmed, and the lake has two shores in two different regions. Without a town the question cannot be answered properly, and with one it usually can.",
      },
      {
        question: "Is the Airlink better than a transfer?",
        answer:
          "For reaching Porta Nuova, quite possibly. For reaching an address with luggage at a time of your choosing, no — they solve different problems. It is worth comparing rather than assuming either way.",
      },
      {
        question: "Is this airport good for Venice?",
        answer:
          "It is a long way from Venice and in a different part of the region. If Venice is your destination, Marco Polo or Treviso will almost always make more sense, and both have pages here.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "City or lake — say which",
    body: "If it is the city, the flight and the address are enough. If it is the lake, the town is the detail that makes the question answerable at all.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Verona", page: "verona" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: VeronaAirport = {
  meta: {
    title: "Transfer aeroporto di Verona (VRN)",
    description:
      "Verona Villafranca, a circa 10 km a sud-ovest della città: il tragitto verso Verona, che cosa possiamo dire davvero sul Lago di Garda e che cosa l'Airlink non risolve.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Verona Villafranca · VRN",
    h1: "Transfer all'aeroporto di Verona",
    lead: "Valerio Catullo è un aeroporto piccolo con due uscite molto diverse: la città, circa dieci chilometri a nord-est, e il Lago di Garda, a ovest. Quale delle due vi riguardi cambia completamente la richiesta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Città o lago?",
    facts: [
      { label: "Denominazione", value: "Valerio Catullo" },
      { label: "Codici", value: "VRN · LIPX" },
      { label: "Dove si trova", value: "Villafranca di Verona" },
      { label: "Da Verona", value: "Circa 10 km a sud-ovest" },
    ],
  },

  fork: {
    id: "bivio",
    eyebrow: "Il bivio",
    heading: "Due direzioni da un solo piccolo aeroporto",
    lead: "Non sono varianti l'una dell'altra, e soltanto per una di esse questo sito pubblica una tratta.",
    columns: [
      {
        id: "citta",
        heading: "Verso Verona",
        subheading: "Circa 10 km a nord-est",
        rows: [
          {
            term: "Che viaggio è",
            detail:
              "Un breve tragitto verso una normale città su strada, con arrivo all'indirizzo. Dopo le pagine veneziane, una proposta piacevolmente semplice.",
          },
          {
            term: "Che cosa indicare",
            detail:
              "Numero del volo e data, orario di arrivo previsto e indirizzo completo, con il quartiere se lo conoscete.",
          },
          {
            term: "L'alternativa pubblica",
            detail:
              "L'Airlink arriva a Verona Porta Nuova con biglietto unico. Utile se la stazione è la vostra destinazione; molto meno con i bagagli e un indirizzo da raggiungere.",
          },
        ],
      },
      {
        id: "lago",
        heading: "Verso il Lago di Garda",
        subheading: "A ovest — e non pubblichiamo alcuna tratta",
        rows: [
          {
            term: "Perché il lago è diverso",
            detail:
              "Il Garda ha una sponda veronese e una lombarda. Un paese su una riva non è a due passi da un paese sull'altra, e il paese che indicate determina del tutto la strada.",
          },
          {
            term: "Che cosa esiste di pubblico",
            detail:
              "D'estate l'azienda di trasporto locale collega l'aeroporto ad alcuni comuni rivieraschi. È un servizio pubblico stagionale, citato come contesto e non come qualcosa che offriamo noi.",
          },
          {
            term: "Che cosa questa pagina non farà",
            detail:
              "Affermare che un determinato paese del Garda sia servito. La copertura non è stata confermata, quindi nessuna tratta verso il lago è pubblicata. Indicate il paese e la risposta parlerà di quel paese.",
          },
        ],
      },
    ],
  },

  airlink: {
    id: "airlink",
    heading: "Il Verona Airlink, e che cosa non risolve",
    paragraphs: [
      "Trenitalia gestisce un servizio combinato treno più bus con biglietto unico che collega Verona Porta Nuova all'aeroporto in collaborazione con ATV. La tratta in bus è prevista all'incirca ogni venti minuti nelle ore di punta e ogni quaranta nelle altre, con partenze da Porta Nuova fra le 5.15 e le 22.50 e dall'aeroporto fra le 5.35 e le 23.10.",
      "È un servizio pubblico e non nostro, e conviene dirlo con onestà: se la vostra destinazione è Porta Nuova o un punto a pochi passi da lì, può benissimo essere la soluzione migliore. Quello che non risolve è ciò che risolve un transfer: portare voi e i vostri bagagli dall'aeroporto a un indirizzo preciso, all'ora che scegliete.",
    ],
    source: {
      text: "Struttura e orari come pubblicati da Trenitalia e verificati nell'ottobre 2026. Gli orari cambiano, e qui non indichiamo tariffe perché le tariffe cambiano ancora più spesso:",
      linkText: "Trenitalia pubblica i dettagli aggiornati dell'Airlink",
      href: "https://www.trenitalia.com/it/treni_regionali/veneto/verona-airlink.html",
    },
  },

  onward: {
    id: "proseguimenti",
    heading: "Dall'aeroporto di Verona",
    items: [
      {
        page: "route-vrn-verona",
        label: "Dall'aeroporto di Verona alla città",
        detail: "Il breve tragitto verso il centro, per esteso.",
      },
      {
        page: "verona",
        label: "Transfer privati a Verona",
        detail: "La città, la stazione e la questione del lago.",
      },
      {
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "Se state confrontando gli aeroporti della regione.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sull'aeroporto di Verona",
    lead: "Metà riguardano, alla fine, il lago.",
    items: [
      {
        question: "Quanto dista l'aeroporto da Verona?",
        answer:
          "Circa 10 km a sud-ovest, nel comune di Villafranca di Verona. Quanto duri il tragitto dipende dall'ora e dall'indirizzo: per questo qui non trovate una durata.",
      },
      {
        question: "Mi portate sul Lago di Garda?",
        answer:
          "Chiedetelo indicando il paese. Su questo sito non è pubblicata alcuna tratta verso il Garda perché la copertura non è stata confermata, e il lago ha due sponde in due regioni diverse. Senza il paese la domanda non si può affrontare bene; con il paese, di solito sì.",
      },
      {
        question: "L'Airlink è meglio di un transfer?",
        answer:
          "Per raggiungere Porta Nuova, probabilmente sì. Per arrivare a un indirizzo con i bagagli all'ora che preferite, no: risolvono problemi diversi. Conviene confrontarli invece di dare per scontato l'uno o l'altro.",
      },
      {
        question: "Questo aeroporto va bene per Venezia?",
        answer:
          "È lontano da Venezia e in un'altra parte della regione. Se la vostra destinazione è Venezia, quasi sempre hanno più senso Marco Polo o Treviso: per entrambi trovate una pagina qui.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Città o lago: ditecelo",
    body: "Se è la città, bastano il volo e l'indirizzo. Se è il lago, è il nome del paese il dato che rende la domanda affrontabile.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Verona", page: "verona" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const veronaAirport: Record<Locale, VeronaAirport> = { en, it };
