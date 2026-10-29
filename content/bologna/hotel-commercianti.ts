import type { Locale } from "@/lib/site";
import type { CommerciantiHotel } from "./types";

/**
 * Art Hotel Commercianti.
 *
 * ── This page corrects a Phase 1 assumption ───────────────────────────────
 * Phase 1 planned it around "the car finishes nearby and the last stretch is
 * on foot" — the Venice formulation. The hotel's own site says something
 * different and more useful: it confirms it sits *"in un'area pedonale
 * all'interno della zona a traffico limitato"*, and then says it *"può essere
 * raggiunto con l'automobile seguendo un percorso autorizzato"*.
 *
 * So the subject is not an obstacle but a **procedure**: contact reception,
 * the hotel notes the vehicle's number plate, an authorised route follows.
 * That is why the page is built on numbered steps rather than on a contrast —
 * the Majestic's page is about two addresses, this one is about a sequence.
 *
 * ── The line this page must not cross ─────────────────────────────────────
 * The arrangement is the hotel's, for its guests, and the plate registration
 * is something the hotel does. It is not a general right of access and it
 * does not automatically cover our vehicles. The page also does not reproduce
 * the authorised route — the hotel does not publish it, and inventing one
 * would be worse than useless — and states no drop-off point, because the
 * site gives none.
 *
 * See `docs/bologna-stage2-hotel-verification.md` §3.
 */

const sourceEn = {
  text: "The address, the hotel's description of its own location inside the limited-traffic zone, the authorised-route arrangement, the number-plate registration and the garage hours are all published on the hotel's official site and were read on 27 October 2026. The route itself is not published and is not reproduced here:",
  linkText: "the hotel publishes its own arrival information",
  href: "https://www.art-hotel-commercianti.com/",
};

const sourceIt = {
  text: "L'indirizzo, la descrizione che l'hotel dà della propria collocazione dentro la zona a traffico limitato, l'accordo sul percorso autorizzato, la registrazione della targa e gli orari del garage sono tutti pubblicati sul sito ufficiale dell'hotel e sono stati consultati il 27 ottobre 2026. Il percorso in sé non è pubblicato e qui non viene riportato:",
  linkText: "l'hotel pubblica le proprie informazioni sull'arrivo",
  href: "https://www.art-hotel-commercianti.com/",
};

const en: CommerciantiHotel = {
  meta: {
    title: "Transfers to the Art Hotel Commercianti, Bologna",
    description:
      "A pedestrian address inside Bologna's limited-traffic zone that the hotel says can still be reached by car — through a procedure, not a shortcut.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "A Bologna address",
    h1: "Transfers to the Art Hotel Commercianti",
    lead: "A pedestrian street beside San Petronio, inside the restricted centre — and, according to the hotel, still reachable by car. The difference is that it takes a procedure rather than a postcode.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the hotel asks you to do",
    facts: [
      { label: "Address", value: "Via de' Pignattari 11" },
      { label: "Postal code", value: "40124 Bologna" },
      { label: "The hotel's own description", value: "Pedestrian area inside the ZTL" },
    ],
  },

  procedure: {
    id: "procedure",
    eyebrow: "The arrangement",
    heading: "What the hotel publishes, in order",
    lead: "Four steps, all of them the hotel's own account of how arriving by car works here. None of them is something this page invented.",
    steps: [
      {
        title: "It tells you where it is, plainly",
        body: "The hotel describes its own location as a pedestrian area inside the limited-traffic zone. That is unusually direct — most hotels leave a guest to discover it — and it is the starting point for everything else.",
      },
      {
        title: "It says a car can still get there",
        body: "In its own words, the hotel can be reached by car along an authorised route. It does not publish what that route is, and this page does not guess at it. The route is something the hotel gives you, not something to be worked out from a map.",
      },
      {
        title: "You contact reception first",
        body: "The hotel asks guests to contact it for detailed instructions. That step is not a formality here: without it there is no authorised route to follow.",
      },
      {
        title: "It registers the number plate",
        body: "The hotel says it will note the vehicle's registration. That is the mechanism the whole arrangement turns on, and it is operated by the hotel rather than by whoever is driving.",
      },
    ],
    source: sourceEn,
  },

  limits: {
    heading: "What this page does not claim",
    body: "That the hotel's arrangement automatically covers our vehicles. What it describes is an arrangement it makes for its guests, with a plate it registers itself — not a general right of access, and not something we can assume on your behalf. Bologna's municipal rules on private-hire access could not be read while this page was written, so nothing here says whether such vehicles may enter as a category. Contact the hotel for its current instructions, tell us what it needs, and the arrangement can be built around that rather than around a guess. We describe no route and no drop-off point, because the hotel publishes neither.",
  },

  garage: {
    id: "garage",
    eyebrow: "If you are driving yourself",
    heading: "The hotel's garage",
    lead: "Relevant if you arrive in your own car rather than by transfer, and published by the hotel.",
    paragraphs: [
      "The hotel says it has a private garage, that the service is paid for, and that it is available from seven in the morning until ten at night. Those are its hours, not ours, and they are worth checking against your arrival time if you are driving yourself — an address inside a pedestrian area is an awkward place to be at half past ten with a car and nowhere to put it.",
      "If you are arriving by transfer, the garage is not part of the arrangement. It is listed here because a page about reaching this hotel by road would be incomplete without it, not because it is something this site provides.",
    ],
  },

  onward: {
    id: "onward",
    heading: "Around this hotel",
    items: [
      {
        page: "route-blq-commercianti",
        label: "Bologna Airport to this hotel",
        detail:
          "The arrival route, and the step that has to happen before you fly.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at its three strengths, and why the street decides the answer.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport most guests arrive through, and what it publishes about ground transport.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "Another central address with an access problem of its own — there, a second entrance rather than a procedure.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About reaching this hotel",
    lead: "Shorter than you might expect, because the hotel has answered most of it already.",
    items: [
      {
        question: "Is the hotel inside the restricted centre?",
        answer:
          "Yes, and the hotel says so itself: it describes its location as a pedestrian area inside the limited-traffic zone. That is the hotel's own published description rather than our inference from a map.",
      },
      {
        question: "So can a car reach it at all?",
        answer:
          "The hotel says it can, along an authorised route. What it does not publish is the route — that is something it gives guests when they contact reception, along with registering the vehicle's number plate.",
      },
      {
        question: "Does that arrangement cover your vehicle?",
        answer:
          "Not automatically, and this page will not pretend otherwise. The arrangement is the hotel's, made for its guests, with a plate the hotel registers. Ask the hotel what it requires for a car arriving on your behalf, tell us the answer, and the arrangement follows from that.",
      },
      {
        question: "Where exactly would I be dropped off?",
        answer:
          "No drop-off point is stated here, because the hotel publishes none. Where a particular vehicle can stop is settled when your request is answered, once the hotel's current instructions are known.",
      },
      {
        question: "What should I send when I ask?",
        answer:
          "The hotel name, the date and time, your flight or train if there is one, and anything reception has told you about arriving by car — particularly whether it wants a registration in advance.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Ask the hotel first, then ask us",
    body: "This is one of the few addresses where that order genuinely matters. The hotel holds the route and registers the plate; we build the journey around what it tells you.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Bologna", page: "bologna" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: CommerciantiHotel = {
  meta: {
    title: "Transfer per l'Art Hotel Commercianti, Bologna",
    description:
      "Un indirizzo pedonale dentro la ZTL di Bologna che, secondo l'hotel, resta raggiungibile in auto: con una procedura, non con una scorciatoia.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Un indirizzo bolognese",
    h1: "Transfer per l'Art Hotel Commercianti",
    lead: "Una via pedonale accanto a San Petronio, dentro il centro limitato — e, stando all'hotel, comunque raggiungibile in auto. La differenza è che serve una procedura, non un CAP.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa chiede di fare l'hotel",
    facts: [
      { label: "Indirizzo", value: "Via de' Pignattari 11" },
      { label: "CAP", value: "40124 Bologna" },
      { label: "Come si descrive l'hotel", value: "Area pedonale dentro la ZTL" },
    ],
  },

  procedure: {
    id: "procedura",
    eyebrow: "L'accordo",
    heading: "Che cosa pubblica l'hotel, in ordine",
    lead: "Quattro passaggi, tutti tratti dal resoconto che l'hotel dà dell'arrivo in auto. Nessuno è inventato da questa pagina.",
    steps: [
      {
        title: "Dice chiaramente dove si trova",
        body: "L'hotel descrive la propria collocazione come un'area pedonale all'interno della zona a traffico limitato. È insolitamente diretto — la maggior parte degli alberghi lascia che sia l'ospite a scoprirlo — ed è il punto di partenza di tutto il resto.",
      },
      {
        title: "Dice che un'auto può comunque arrivarci",
        body: "Con parole sue, l'hotel può essere raggiunto in auto seguendo un percorso autorizzato. Non pubblica quale sia quel percorso, e questa pagina non prova a indovinarlo: è qualcosa che l'hotel vi fornisce, non che si ricavi da una mappa.",
      },
      {
        title: "Prima si contatta la reception",
        body: "L'hotel chiede agli ospiti di contattarlo per ricevere istruzioni dettagliate. Qui non è una formalità: senza quel passaggio non c'è alcun percorso autorizzato da seguire.",
      },
      {
        title: "Registra la targa",
        body: "L'hotel dichiara che prenderà nota della targa del veicolo. È il meccanismo su cui ruota l'intero accordo, ed è gestito dall'hotel e non da chi guida.",
      },
    ],
    source: sourceIt,
  },

  limits: {
    heading: "Che cosa questa pagina non afferma",
    body: "Che l'accordo dell'hotel copra automaticamente i nostri veicoli. Quello che descrive è un accordo che l'hotel prende per i propri ospiti, con una targa che registra lui — non un diritto generale di accesso, e non qualcosa che possiamo dare per scontato al posto vostro. Le norme comunali di Bologna sull'accesso degli NCC non sono state consultabili mentre questa pagina veniva scritta: qui quindi non diciamo se tali veicoli possano entrare come categoria. Contattate l'hotel per le istruzioni aggiornate, diteci che cosa richiede, e l'accordo si costruirà su quello e non su un'ipotesi. Non descriviamo alcun percorso né alcun punto di discesa, perché l'hotel non ne pubblica.",
  },

  garage: {
    id: "garage",
    eyebrow: "Se guidate voi",
    heading: "Il garage dell'hotel",
    lead: "Rilevante se arrivate con la vostra auto anziché con un transfer, ed è l'hotel a pubblicarlo.",
    paragraphs: [
      "L'hotel dichiara di avere un garage privato, che il servizio è a pagamento e che è disponibile dalle sette del mattino alle dieci di sera. Sono i suoi orari, non i nostri, e conviene confrontarli con l'ora del vostro arrivo se guidate voi: un indirizzo dentro un'area pedonale è un posto scomodo in cui trovarsi alle dieci e mezza con un'auto e nessun luogo dove metterla.",
      "Se arrivate con un transfer, il garage non fa parte dell'accordo. È riportato qui perché una pagina su come raggiungere questo hotel su strada sarebbe incompleta senza, non perché sia qualcosa che offriamo noi.",
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Attorno a questo hotel",
    items: [
      {
        page: "route-blq-commercianti",
        label: "Dall'aeroporto di Bologna a questo hotel",
        detail:
          "La tratta d'arrivo, e il passaggio da compiere prima di partire.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail:
          "L'aeroporto da cui arriva la maggior parte degli ospiti, e che cosa pubblica sui trasporti a terra.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "Un altro indirizzo centrale con un problema d'accesso tutto suo: lì un secondo ingresso, non una procedura.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su come raggiungere questo hotel",
    lead: "Più brevi di quanto ci si aspetti, perché a gran parte ha già risposto l'hotel.",
    items: [
      {
        question: "L'hotel è dentro il centro limitato?",
        answer:
          "Sì, ed è l'hotel stesso a dirlo: descrive la propria collocazione come un'area pedonale all'interno della zona a traffico limitato. È la sua descrizione pubblicata, non una nostra deduzione da una mappa.",
      },
      {
        question: "Un'auto può quindi arrivarci?",
        answer:
          "L'hotel dice di sì, seguendo un percorso autorizzato. Quello che non pubblica è il percorso: lo fornisce agli ospiti quando contattano la reception, insieme alla registrazione della targa del veicolo.",
      },
      {
        question: "Quell'accordo copre il vostro veicolo?",
        answer:
          "Non automaticamente, e questa pagina non farà finta del contrario. L'accordo è dell'hotel, preso per i suoi ospiti, con una targa che registra l'hotel. Chiedete all'hotel che cosa richiede per un'auto che arriva per vostro conto, diteci la risposta e l'accordo seguirà da lì.",
      },
      {
        question: "Dove verrei lasciato esattamente?",
        answer:
          "Qui non indichiamo alcun punto di discesa, perché l'hotel non ne pubblica. Dove un determinato veicolo possa fermarsi si definisce quando si risponde alla vostra richiesta, una volta note le istruzioni aggiornate dell'hotel.",
      },
      {
        question: "Che cosa devo inviare nella richiesta?",
        answer:
          "Il nome dell'hotel, la data e l'ora, il volo o il treno se ce n'è uno, e tutto quello che la reception vi ha detto sull'arrivo in auto, in particolare se vuole una targa in anticipo.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Prima l'hotel, poi noi",
    body: "È uno dei pochi indirizzi in cui quest'ordine conta davvero. L'hotel detiene il percorso e registra la targa; noi costruiamo il viaggio su ciò che vi risponde.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Bologna", page: "bologna" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const hotelCommercianti: Record<Locale, CommerciantiHotel> = { en, it };
