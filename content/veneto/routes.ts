import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The three Veneto route pages.
 *
 * They use the shared route type and component, as Rome's and Milan's do.
 * What differs is the leading module, and none repeats a counterpart:
 *
 * - Marco Polo → Venice: a fork on whether the destination is road-reachable
 *   at all. No other route page in the project forks on that, because no
 *   other city makes it a question.
 * - Treviso → Venice: a two-stage panel — the distance, then the road limit.
 *   Milan's Bergamo route compares three airports by scale; this one stacks
 *   two different obstacles on one journey.
 * - Villafranca → Verona: nothing leads. The endpoints are the content, and
 *   the page's shortness is deliberate after the two Venice pages.
 *
 * No fare, duration or road distance appears on any of them.
 */

/* ── Marco Polo → Venice ──────────────────────────────────────────────── */

const vceEn: RoutePage = {
  meta: {
    title: "Marco Polo Airport to Venice",
    description:
      "The commonest Venice transfer, and the one where the destination may not be reachable by road at all. Where the car actually stops, and what happens next.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Venice Marco Polo (VCE)",
    to: "Venice",
    eyebrow: "Route",
    h1: "Marco Polo Airport to Venice",
    lead: "The most asked-about journey in the Veneto, and the only route in this project where the honest first question is not how long it takes but whether a car can finish it at all.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price, duration or road distance appears here. The airport's own transport pages could not be retrieved for this build and the secondary sources disagreed with one another, so nothing has been invented to fill the gap.",
  },
  lead: {
    id: "fork",
    eyebrow: "The fork",
    heading: "Where exactly are you going?",
    text: "Everything about this journey depends on the answer, and the two answers are not variations of each other.",
    columns: [
      {
        id: "road",
        heading: "A mainland address",
        subheading: "An ordinary airport transfer",
        rows: [
          {
            term: "Where it ends",
            detail:
              "At the address. Mestre, Marghera and the rest of the mainland behave like anywhere else in Italy.",
          },
          {
            term: "What you need to send",
            detail:
              "Flight number, date, scheduled arrival time and the full address.",
          },
          {
            term: "What happens after",
            detail: "Nothing. You have arrived.",
          },
        ],
      },
      {
        id: "water",
        heading: "The historic centre or an island",
        subheading: "The car stops before you do",
        rows: [
          {
            term: "Where it ends",
            detail:
              "At Piazzale Roma or Tronchetto. There is no road past them, for any vehicle.",
          },
          {
            term: "What you need to send",
            detail:
              "The same, plus the sestiere — and a realistic account of how much luggage is coming with you.",
          },
          {
            term: "What happens after",
            detail:
              "You continue on foot or by water, and that leg is yours to arrange. It is not part of a road transfer and is not quoted or included here in any form.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "An airport, and an edge",
    lead: "The airport end is straightforward. The other end is the one this page exists for.",
    from: {
      id: "vce",
      label: "Departure",
      name: "Venice Marco Polo",
      page: "venice-marco-polo",
      linkText: "The land side and the water side",
      items: [
        {
          term: "Where it is",
          detail:
            "At Tessera, inside the comune of Venice, on the edge of the lagoon. Genuinely Venice's airport.",
        },
        {
          term: "When you emerge",
          detail:
            "Landing time is not arrival time. Passport control for a flight from outside the Schengen area, and the baggage belt, both sit between them.",
        },
        {
          term: "What to send",
          detail: "Flight number, date, scheduled arrival time.",
        },
      ],
    },
    to: {
      id: "venice",
      label: "Arrival",
      name: "Venice",
      page: "venice",
      linkText: "Why the road stops where it does",
      items: [
        {
          term: "Mainland or historic centre",
          detail:
            "The single detail that changes the whole arrangement, and the one most requests leave out.",
        },
        {
          term: "The road's end",
          detail:
            "Piazzale Roma and Tronchetto. Beyond them there are canals and lanes, and no road at all.",
        },
        {
          term: "The luggage question",
          detail:
            "From Piazzale Roma into the historic city you are walking or on a boat, often over bridges with steps. Worth being honest with yourself about before the day.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for this journey",
    lead: "Five things, and the second is the one that makes the rest answerable.",
    items: [
      "The flight number, the date and the scheduled arrival time.",
      "Whether the destination is on the mainland or in the historic centre.",
      "The full address, with the sestiere if it is in the historic city.",
      "How many passengers, and how many pieces of luggage.",
      "Whether anyone would struggle with steps or a walk at the far end.",
    ],
    note: "No water leg, porter or onward connection is offered, quoted or included. Where a journey needs one, it is a separate arrangement with its own operator.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-tsf-venice",
        label: "Treviso Airport to Venice",
        detail: "The same city end, from much further out.",
      },
      {
        page: "venice-stations",
        label: "Venice's railway stations",
        detail: "Mestre is road-reachable; Santa Lucia is not.",
      },
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "The geography behind all of this.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Including the one this page answers with a refusal rather than a number.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "No duration is quoted here. The airport's own transport pages could not be retrieved for this build, the secondary sources disagree with one another, and the honest figure depends on your endpoint, the hour and the traffic. A quotation for your own date can give a realistic expectation.",
      },
      {
        question: "Can the car take me to my hotel?",
        answer:
          "If the hotel is on the mainland, yes. If it is in the historic centre, the car stops at Piazzale Roma or Tronchetto and you continue on foot or by water — and that part is not included.",
      },
      {
        question: "Can you book the water taxi too?",
        answer:
          "No. A road transfer is by road. Water services at this airport are run by their own operators and arranged with them; nothing here offers, includes or quotes for one.",
      },
      {
        question: "Is it easier to go to Mestre instead?",
        answer:
          "For the transfer itself, considerably — a car reaches the door. Whether it suits your trip depends on where you want to sleep, which is a different question from where a car can stop.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Mainland or historic centre?",
    body: "Answer that, add the flight and the address, and this becomes an easy journey to arrange. Leave it out and any answer is a guess.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Marco Polo", page: "venice-marco-polo" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const vceIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto Marco Polo a Venezia",
    description:
      "Il transfer veneziano più richiesto, e quello in cui la destinazione potrebbe non essere raggiungibile su strada. Dove si ferma davvero l'auto e che cosa succede dopo.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Venezia Marco Polo (VCE)",
    to: "Venezia",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto Marco Polo a Venezia",
    lead: "È il viaggio più richiesto del Veneto, e l'unica tratta di questo progetto in cui la prima domanda onesta non è quanto duri, ma se un'auto possa portarlo a termine.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto",
    note: "Qui non trovate prezzi, durate o distanze stradali. Le pagine sui trasporti del gestore non sono state raggiungibili durante questa lavorazione e le fonti secondarie non concordano fra loro: non abbiamo inventato nulla per colmare il vuoto.",
  },
  lead: {
    id: "bivio",
    eyebrow: "Il bivio",
    heading: "Dove state andando esattamente?",
    text: "Tutto in questo viaggio dipende dalla risposta, e le due risposte non sono varianti l'una dell'altra.",
    columns: [
      {
        id: "strada",
        heading: "Un indirizzo in terraferma",
        subheading: "Un normale transfer aeroportuale",
        rows: [
          {
            term: "Dove finisce",
            detail:
              "All'indirizzo. Mestre, Marghera e il resto della terraferma funzionano come ovunque in Italia.",
          },
          {
            term: "Che cosa indicare",
            detail:
              "Numero del volo, data, orario di arrivo previsto e indirizzo completo.",
          },
          {
            term: "Che cosa succede dopo",
            detail: "Niente. Siete arrivati.",
          },
        ],
      },
      {
        id: "acqua",
        heading: "Il centro storico o un'isola",
        subheading: "L'auto si ferma prima di voi",
        rows: [
          {
            term: "Dove finisce",
            detail:
              "A Piazzale Roma o al Tronchetto. Oltre non c'è strada, per nessun veicolo.",
          },
          {
            term: "Che cosa indicare",
            detail:
              "Le stesse cose, più il sestiere — e un conto realistico dei bagagli che vi portate dietro.",
          },
          {
            term: "Che cosa succede dopo",
            detail:
              "Si prosegue a piedi o per acqua, e quel tratto lo organizzate voi. Non fa parte di un transfer su strada e qui non è quotato né compreso in alcuna forma.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Un aeroporto e un margine",
    lead: "Il capo aeroportuale è lineare. L'altro è il motivo per cui questa pagina esiste.",
    from: {
      id: "vce",
      label: "Partenza",
      name: "Venezia Marco Polo",
      page: "venice-marco-polo",
      linkText: "Il lato terra e il lato acqua",
      items: [
        {
          term: "Dove si trova",
          detail:
            "A Tessera, dentro il comune di Venezia, sul bordo della laguna. È davvero l'aeroporto di Venezia.",
        },
        {
          term: "Quando uscite",
          detail:
            "L'orario di atterraggio non è quello di uscita: in mezzo ci sono il controllo passaporti per i voli extra Schengen e il nastro bagagli.",
        },
        {
          term: "Che cosa indicare",
          detail: "Numero del volo, data, orario di arrivo previsto.",
        },
      ],
    },
    to: {
      id: "venezia",
      label: "Arrivo",
      name: "Venezia",
      page: "venice",
      linkText: "Perché la strada finisce dove finisce",
      items: [
        {
          term: "Terraferma o centro storico",
          detail:
            "È il singolo dato che cambia tutta l'organizzazione, ed è quello che quasi tutte le richieste dimenticano.",
        },
        {
          term: "La fine della strada",
          detail:
            "Piazzale Roma e Tronchetto. Oltre ci sono canali e calli, e nessuna strada.",
        },
        {
          term: "La questione dei bagagli",
          detail:
            "Da Piazzale Roma verso la città storica si cammina o si va per acqua, spesso su ponti con i gradini. Conviene esserne consapevoli prima del giorno stesso.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per questa tratta",
    lead: "Cinque cose, e la seconda è quella che rende valutabili tutte le altre.",
    items: [
      "Numero del volo, data e orario di arrivo previsto.",
      "Se la destinazione è in terraferma o nel centro storico.",
      "L'indirizzo completo, con il sestiere se si trova nella città storica.",
      "Quanti passeggeri e quanti bagagli.",
      "Se qualcuno avrebbe difficoltà con i gradini o con una camminata all'arrivo.",
    ],
    note: "Nessun tratto per acqua, portabagagli o coincidenza è offerto, quotato o compreso. Dove un viaggio ne ha bisogno, è un'organizzazione separata con il relativo operatore.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-tsf-venice",
        label: "Dall'aeroporto di Treviso a Venezia",
        detail: "Lo stesso capo cittadino, da molto più lontano.",
      },
      {
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail: "Mestre è raggiungibile in auto, Santa Lucia no.",
      },
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "La geografia che sta dietro a tutto questo.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Compresa quella a cui questa pagina risponde con un rifiuto invece che con un numero.",
    items: [
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Qui non trovate una durata. Le pagine sui trasporti del gestore non sono state raggiungibili durante questa lavorazione, le fonti secondarie non concordano, e la cifra onesta dipende dal vostro punto di arrivo, dall'ora e dal traffico. Un preventivo per la vostra data può darvi un'aspettativa realistica.",
      },
      {
        question: "L'auto può portarmi al mio hotel?",
        answer:
          "Se l'hotel è in terraferma, sì. Se è nel centro storico, l'auto si ferma a Piazzale Roma o al Tronchetto e voi proseguite a piedi o per acqua — e quella parte non è compresa.",
      },
      {
        question: "Potete prenotare anche il taxi acqueo?",
        answer:
          "No. Un transfer su strada avviene su strada. I servizi acquei di questo aeroporto sono gestiti dai rispettivi operatori e si organizzano con loro: qui non se ne offre, include o quota nessuno.",
      },
      {
        question: "È più semplice andare a Mestre?",
        answer:
          "Per il transfer in sé, molto di più: l'auto arriva al portone. Se convenga al vostro viaggio dipende da dove volete dormire, che è un'altra domanda rispetto a dove può fermarsi un'auto.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Terraferma o centro storico?",
    body: "Rispondete a questa, aggiungete volo e indirizzo, e la tratta diventa semplice da organizzare. Senza quella risposta, qualsiasi risposta è una supposizione.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto Marco Polo", page: "venice-marco-polo" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Treviso → Venice ─────────────────────────────────────────────────── */

const tsfEn: RoutePage = {
  meta: {
    title: "Treviso Airport to Venice",
    description:
      "About 31 km of road, and then the same limit at Piazzale Roma that every Venice arrival meets. Two obstacles on one journey, set out in order.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Treviso Airport (TSF)",
    to: "Venice",
    eyebrow: "Route",
    h1: "Treviso Airport to Venice",
    lead: "The only journey in this project with two separate obstacles on it: the distance the airport's name conceals, and then the road limit that Venice imposes on everybody.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price, duration or road distance beyond the published approximate figure appears here. The airport's own transport pages could not be retrieved for this build.",
  },
  lead: {
    id: "stages",
    eyebrow: "Two obstacles",
    heading: "The distance, and then the limit",
    text: "Most route pages have one problem to explain. This one has two, and they arrive in order.",
    steps: [
      {
        title: "First: about 31 km you did not expect",
        body: "The airport is at Treviso, roughly 31 km from Venice. If your ticket said Venice, this is the part that comes as a surprise — and it is a real leg of the journey, not an afterthought to the flight.",
      },
      {
        title: "Then: the road ends anyway",
        body: "Arriving from Treviso buys no exemption from Venice's geography. The road into the historic city stops at Piazzale Roma exactly as it does from Marco Polo, and the rest is on foot or by water.",
      },
      {
        title: "So the question is still the same one",
        body: "Mainland or historic centre? The answer decides where this journey actually ends, just as it does from every other direction.",
      },
      {
        title: "And Treviso itself may be the answer",
        body: "If you are staying in Treviso or the country around it, the airport is about 3 km away rather than 31. Worth checking before arranging the longer journey.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where it starts, where it stops",
    lead: "The departure end is simple. The arrival end is Venice, with everything that implies.",
    from: {
      id: "tsf",
      label: "Departure",
      name: "Treviso Airport",
      page: "treviso-airport",
      linkText: "Where the airport actually is",
      items: [
        {
          term: "Where it is",
          detail:
            "At Treviso, about 3 km from that city and about 31 km from Venice.",
        },
        {
          term: "The hours",
          detail:
            "Low-cost schedules concentrate flights early and late. Say the time plainly: it often shapes the whole request.",
        },
        {
          term: "What to send",
          detail: "Flight number, date and scheduled arrival time.",
        },
      ],
    },
    to: {
      id: "venice",
      label: "Arrival",
      name: "Venice",
      page: "venice",
      linkText: "Why the road stops where it does",
      items: [
        {
          term: "Mainland or historic centre",
          detail:
            "The same decisive detail as on every Venice route. Say which when you ask.",
        },
        {
          term: "Where a car can finish",
          detail:
            "A mainland address, or Piazzale Roma and Tronchetto for the historic city. Nothing beyond them.",
        },
        {
          term: "What is not included",
          detail:
            "Any water leg. Not offered, not quoted, not part of a road transfer in any form.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for this journey",
    lead: "The same list as the Marco Polo route, because the city end is the same city.",
    items: [
      "The flight number, the date and the scheduled arrival time.",
      "Whether the destination is on the mainland or in the historic centre.",
      "The full address, with the sestiere if it is in the historic city.",
      "How many passengers, and how many pieces of luggage.",
      "Whether Treviso itself would in fact do, if that is where you are staying.",
    ],
    note: "What can be arranged at an unusual hour is answered in the reply. Nothing here claims a service that runs around the clock, and no water leg is offered.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "The same destination from Venice's own airport.",
      },
      {
        page: "treviso-airport",
        label: "Treviso Airport (TSF)",
        detail: "The airport in full, and the distance drawn.",
      },
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "What waits at the city end.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Asked mostly in the arrivals hall, which is later than ideal.",
    items: [
      {
        question: "How far is it really?",
        answer:
          "The airport is about 31 km from Venice and about 3 km from Treviso. How long the road takes depends on the hour and the traffic, so no duration is quoted here.",
      },
      {
        question: "Why is the airport called Venice-Treviso?",
        answer:
          "Because some airlines market it that way. The reference works are clear that the primary airport serving Venice is Marco Polo, and this one is at Treviso.",
      },
      {
        question: "Does arriving here make Venice harder?",
        answer:
          "It adds a leg. You cover about 31 km first, and then meet the same Piazzale Roma limit as everyone else. Two obstacles rather than one, which is the honest summary of this route.",
      },
      {
        question: "Can the car take me into the historic centre?",
        answer:
          "As far as Piazzale Roma or Tronchetto, like every other vehicle. Beyond that it is on foot or by water, and that part is not included.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Two things to tell us",
    body: "The flight, and whether you are going to the mainland or into the historic centre. On this route both halves of the journey depend on the second one.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Treviso Airport", page: "treviso-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const tsfIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Treviso a Venezia",
    description:
      "Circa 31 km di strada e poi lo stesso limite di Piazzale Roma che incontra qualunque arrivo a Venezia. Due ostacoli in un solo viaggio, nell'ordine.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Treviso (TSF)",
    to: "Venezia",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Treviso a Venezia",
    lead: "È l'unico viaggio del progetto con due ostacoli distinti: la distanza che il nome dell'aeroporto nasconde e, subito dopo, il limite stradale che Venezia impone a tutti.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto",
    note: "Qui non trovate prezzi né durate, e nessuna distanza stradale oltre la cifra approssimativa pubblicata. Le pagine sui trasporti del gestore non sono state raggiungibili durante questa lavorazione.",
  },
  lead: {
    id: "fasi",
    eyebrow: "Due ostacoli",
    heading: "La distanza, e poi il limite",
    text: "Quasi tutte le pagine di tratta hanno un problema da spiegare. Questa ne ha due, e arrivano nell'ordine.",
    steps: [
      {
        title: "Primo: circa 31 km che non vi aspettavate",
        body: "L'aeroporto è a Treviso, a circa 31 km da Venezia. Se il biglietto diceva «Venezia», è questa la parte che sorprende — ed è una tappa vera del viaggio, non un'appendice del volo.",
      },
      {
        title: "Poi: la strada finisce lo stesso",
        body: "Arrivare da Treviso non vi esenta dalla geografia di Venezia. La strada verso la città storica si ferma a Piazzale Roma esattamente come partendo da Marco Polo, e il resto si fa a piedi o per acqua.",
      },
      {
        title: "Quindi la domanda resta la stessa",
        body: "Terraferma o centro storico? La risposta stabilisce dove finisce davvero questo viaggio, esattamente come da qualunque altra direzione.",
      },
      {
        title: "E forse la risposta è Treviso",
        body: "Se alloggiate a Treviso o nella campagna attorno, l'aeroporto dista circa 3 km invece di 31. Conviene verificarlo prima di organizzare il tragitto lungo.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia, dove si ferma",
    lead: "Il capo di partenza è semplice. Quello di arrivo è Venezia, con tutto ciò che comporta.",
    from: {
      id: "tsf",
      label: "Partenza",
      name: "Aeroporto di Treviso",
      page: "treviso-airport",
      linkText: "Dove si trova davvero l'aeroporto",
      items: [
        {
          term: "Dove si trova",
          detail:
            "A Treviso, a circa 3 km da quella città e a circa 31 km da Venezia.",
        },
        {
          term: "Gli orari",
          detail:
            "Gli orari low cost concentrano i voli presto e tardi. Indicate l'ora con chiarezza: spesso dà forma a tutta la richiesta.",
        },
        {
          term: "Che cosa indicare",
          detail: "Numero del volo, data e orario di arrivo previsto.",
        },
      ],
    },
    to: {
      id: "venezia",
      label: "Arrivo",
      name: "Venezia",
      page: "venice",
      linkText: "Perché la strada finisce dove finisce",
      items: [
        {
          term: "Terraferma o centro storico",
          detail:
            "Lo stesso dato decisivo di ogni tratta veneziana. Precisatelo nella richiesta.",
        },
        {
          term: "Dove può fermarsi un'auto",
          detail:
            "A un indirizzo in terraferma, oppure a Piazzale Roma e al Tronchetto per la città storica. Niente oltre.",
        },
        {
          term: "Che cosa non è compreso",
          detail:
            "Qualsiasi tratto per acqua. Non offerto, non quotato, non parte di un transfer su strada in alcuna forma.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per questa tratta",
    lead: "Lo stesso elenco della tratta da Marco Polo, perché il capo cittadino è la stessa città.",
    items: [
      "Numero del volo, data e orario di arrivo previsto.",
      "Se la destinazione è in terraferma o nel centro storico.",
      "L'indirizzo completo, con il sestiere se si trova nella città storica.",
      "Quanti passeggeri e quanti bagagli.",
      "Se in realtà vi andrebbe bene Treviso, nel caso alloggiaste lì.",
    ],
    note: "Che cosa sia organizzabile a un'ora inconsueta ve lo dice la risposta. Qui non si dichiara un servizio attivo ventiquattr'ore su ventiquattro, e nessun tratto per acqua è offerto.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "La stessa destinazione dall'aeroporto di Venezia.",
      },
      {
        page: "treviso-airport",
        label: "Aeroporto di Treviso (TSF)",
        detail: "L'aeroporto per esteso, con la distanza disegnata.",
      },
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "Che cosa vi aspetta dal lato città.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Se le pone soprattutto chi è già in sala arrivi, che è un po' tardi.",
    items: [
      {
        question: "Quanto dista davvero?",
        answer:
          "L'aeroporto si trova a circa 31 km da Venezia e a circa 3 km da Treviso. Quanto tempo richieda la strada dipende dall'ora e dal traffico: per questo qui non trovate una durata.",
      },
      {
        question: "Perché l'aeroporto si chiama Venice-Treviso?",
        answer:
          "Perché alcune compagnie lo commercializzano così. Le fonti di riferimento sono chiare: l'aeroporto principale di Venezia è Marco Polo, e questo si trova a Treviso.",
      },
      {
        question: "Arrivare qui rende Venezia più complicata?",
        answer:
          "Aggiunge una tappa. Prima si coprono circa 31 km, poi si incontra lo stesso limite di Piazzale Roma di tutti gli altri. Due ostacoli invece di uno: è il riassunto onesto di questa tratta.",
      },
      {
        question: "L'auto può portarmi nel centro storico?",
        answer:
          "Fino a Piazzale Roma o al Tronchetto, come qualsiasi altro veicolo. Oltre si prosegue a piedi o per acqua, e quella parte non è compresa.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Due cose da dirci",
    body: "Il volo, e se andate in terraferma o nel centro storico. Su questa tratta entrambe le metà del viaggio dipendono dalla seconda.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Treviso", page: "treviso-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Villafranca → Verona ─────────────────────────────────────────────── */

const vrnEn: RoutePage = {
  meta: {
    title: "Verona Airport to Verona",
    description:
      "The short run from Villafranca into Verona: an ordinary airport transfer that ends at the address, and the shortest page in this cluster for a reason.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Verona Villafranca (VRN)",
    to: "Verona",
    eyebrow: "Route",
    h1: "Verona Airport to Verona",
    lead: "After two pages about a city where a car cannot finish the journey, here is one where it can. About ten kilometres, an ordinary road, and an address at the end of it.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price or journey time appears here either. The distance is the published approximate figure; what it takes to drive depends on the hour and the address.",
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Both of them straightforward",
    lead: "This is the simplest route in the project, and after the Venice pages that is worth saying out loud.",
    from: {
      id: "vrn",
      label: "Departure",
      name: "Verona Villafranca",
      page: "verona-airport",
      linkText: "The airport, and the lake question",
      items: [
        {
          term: "Where it is",
          detail:
            "In the comune of Villafranca di Verona, about 10 km south-west of the city.",
        },
        {
          term: "The size of it",
          detail:
            "Small enough that finding someone is not a problem — which is a genuine advantage at an awkward hour.",
        },
        {
          term: "What to send",
          detail: "Flight number, date and scheduled arrival time.",
        },
      ],
    },
    to: {
      id: "verona",
      label: "Arrival",
      name: "Verona",
      page: "verona",
      linkText: "The city, the station and the lake",
      items: [
        {
          term: "The address",
          detail:
            "Street and number. A car reaches it, which after Venice is worth stating plainly.",
        },
        {
          term: "Or Porta Nuova",
          detail:
            "If you are connecting onwards by rail, say so — the station is a different kind of arrival from a hotel.",
        },
        {
          term: "Local access",
          detail:
            "Street width and local rules apply as they would in any Italian city, but there is no equivalent of Venice's road limit.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Four things. This is genuinely all it takes.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The full address, or the station if you are connecting.",
      "How many passengers and how much luggage.",
    ],
    note: "If your destination is Lake Garda rather than Verona, say the town — no Garda route is published on this site, and the town is what makes that question answerable.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "verona-airport",
        label: "Verona Airport (VRN)",
        detail: "The airport in full, including the lake question.",
      },
      {
        page: "verona",
        label: "Private transfers in Verona",
        detail: "The city, the station and the Airlink.",
      },
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "The other end of the region, under completely different rules.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "There are not many, which is the point of the page.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "No duration is quoted. The airport is about 10 km south-west of the city; what that means in minutes depends on the hour and the address at the other end.",
      },
      {
        question: "Can the car take me to the door?",
        answer:
          "In the ordinary course, yes. Verona is a road city. Street width and local access rules apply as anywhere, but there is nothing here like Venice's road limit.",
      },
      {
        question: "Should I use the Airlink instead?",
        answer:
          "If Porta Nuova or somewhere near it is your destination, quite possibly — it is a public train-and-bus service under a single ticket. If you have luggage and an address, a transfer answers a different question.",
      },
      {
        question: "What if I am going to Lake Garda?",
        answer:
          "Name the town when you ask. No Garda route is published here because coverage has not been confirmed, and the lake has two shores in two regions.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight, time, address",
    body: "On this route that really is the whole list. The simplicity is not an oversight — it is what an ordinary airport transfer looks like when nothing is in the way.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Verona Airport", page: "verona-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const vrnIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Verona alla città",
    description:
      "Il breve tragitto da Villafranca a Verona: un normale transfer aeroportuale che finisce all'indirizzo, e la pagina più breve di questo gruppo per una ragione precisa.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Verona Villafranca (VRN)",
    to: "Verona",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Verona alla città",
    lead: "Dopo due pagine su una città in cui l'auto non può concludere il viaggio, eccone una in cui può. Una decina di chilometri, una strada normale e un indirizzo alla fine.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto",
    note: "Anche qui niente prezzi né durate. La distanza è la cifra approssimativa pubblicata; quanto tempo richieda dipende dall'ora e dall'indirizzo.",
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Entrambi lineari",
    lead: "È la tratta più semplice del progetto e, dopo le pagine veneziane, vale la pena dirlo a voce alta.",
    from: {
      id: "vrn",
      label: "Partenza",
      name: "Verona Villafranca",
      page: "verona-airport",
      linkText: "L'aeroporto e la questione del lago",
      items: [
        {
          term: "Dove si trova",
          detail:
            "Nel comune di Villafranca di Verona, a circa 10 km a sud-ovest della città.",
        },
        {
          term: "Le dimensioni",
          detail:
            "Abbastanza piccolo perché ritrovarsi non sia un problema: a un'ora scomoda è un vantaggio concreto.",
        },
        {
          term: "Che cosa indicare",
          detail: "Numero del volo, data e orario di arrivo previsto.",
        },
      ],
    },
    to: {
      id: "verona",
      label: "Arrivo",
      name: "Verona",
      page: "verona",
      linkText: "La città, la stazione e il lago",
      items: [
        {
          term: "L'indirizzo",
          detail:
            "Via e numero civico. L'auto ci arriva, e dopo Venezia merita di essere detto chiaramente.",
        },
        {
          term: "Oppure Porta Nuova",
          detail:
            "Se proseguite in treno, segnalatelo: la stazione è un arrivo di tipo diverso da un hotel.",
        },
        {
          term: "Accessi locali",
          detail:
            "Larghezza delle vie e regole locali valgono come in qualsiasi città italiana, ma non esiste nulla di paragonabile al limite stradale veneziano.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare",
    lead: "Quattro cose. Serve davvero solo questo.",
    items: [
      "Numero del volo e data.",
      "L'orario di arrivo previsto.",
      "L'indirizzo completo, o la stazione se proseguite.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Se la destinazione è il Lago di Garda e non Verona, indicate il paese: su questo sito non è pubblicata alcuna tratta verso il Garda, ed è il paese a rendere affrontabile la domanda.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "verona-airport",
        label: "Aeroporto di Verona (VRN)",
        detail: "L'aeroporto per esteso, inclusa la questione del lago.",
      },
      {
        page: "verona",
        label: "Transfer privati a Verona",
        detail: "La città, la stazione e l'Airlink.",
      },
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "L'altro capo della regione, con regole completamente diverse.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Non sono molte, ed è proprio il senso di questa pagina.",
    items: [
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non indichiamo una durata. L'aeroporto si trova a circa 10 km a sud-ovest della città; che cosa significhi in minuti dipende dall'ora e dall'indirizzo di arrivo.",
      },
      {
        question: "L'auto può arrivare al portone?",
        answer:
          "Di norma sì: Verona è una città su strada. Larghezza delle vie e regole locali valgono come ovunque, ma non c'è nulla di paragonabile al limite stradale di Venezia.",
      },
      {
        question: "Conviene usare l'Airlink?",
        answer:
          "Se la vostra destinazione è Porta Nuova o un punto vicino, probabilmente sì: è un servizio pubblico treno più bus con biglietto unico. Con bagagli e un indirizzo da raggiungere, un transfer risponde a un'altra domanda.",
      },
      {
        question: "E se devo andare sul Lago di Garda?",
        answer:
          "Indicate il paese quando scrivete. Qui non è pubblicata alcuna tratta verso il Garda perché la copertura non è stata confermata, e il lago ha due sponde in due regioni.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Volo, orario, indirizzo",
    body: "Su questa tratta l'elenco è davvero tutto qui. La semplicità non è una dimenticanza: è l'aspetto che ha un normale transfer aeroportuale quando non c'è nulla di mezzo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Verona", page: "verona-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeVceVenice: Record<Locale, RoutePage> = { en: vceEn, it: vceIt };
export const routeTsfVenice: Record<Locale, RoutePage> = { en: tsfEn, it: tsfIt };
export const routeVrnVerona: Record<Locale, RoutePage> = { en: vrnEn, it: vrnIt };
