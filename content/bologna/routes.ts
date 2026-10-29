import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The two Ravenna cruise-terminal routes.
 *
 * ── The first genuinely bidirectional pair on this site ───────────────────
 * Every other route page in this project runs one way: airport to city, or
 * city to port. These two run both ways between the same pair of places, and
 * they are only worth having separately because the two journeys are not
 * mirror images of each other.
 *
 * - **Disembarkation** is a crowd problem. A whole ship comes off at once,
 *   and the regional tourism authority's own position is that taxis there are
 *   limited and cannot be booked in advance. Being late costs you a morning.
 * - **Embarkation** is a deadline problem. The ship sails whether or not you
 *   are on it, and nothing about missing it can be recovered. Being late
 *   costs you the holiday.
 *
 * Same road, opposite stakes, so the leading module differs: the outbound
 * page leads on what is waiting at the port, the inbound page leads on
 * margin.
 *
 * No distance, duration or fare appears on either. Two official publishers
 * disagree about the distance (13 km against about 15 km) and the terminal
 * page shows that disagreement rather than resolving it.
 */

const operatorEn = {
  text: "Bus line 90, the taxi arrangements and the temporary terminal are as published by the port operator, read on 27 October 2026. The conflicting distance figures are set out on the terminal page; none is used here:",
  linkText: "Ravenna Cruise Port publishes its own guest information",
  href: "https://rccp.it/en/guests/",
};

const operatorIt = {
  text: "La linea 90, le modalità del servizio taxi e il terminal provvisorio sono quelli pubblicati dall'operatore portuale, consultati il 27 ottobre 2026. Le distanze discordanti sono esposte nella pagina del terminal; qui non se ne usa nessuna:",
  linkText: "Ravenna Cruise Port pubblica le proprie informazioni per i passeggeri",
  href: "https://rccp.it/en/guests/",
};

/* ── Terminal → Ravenna: disembarkation ───────────────────────────────── */

const outEn: RoutePage = {
  meta: {
    title: "Ravenna Cruise Terminal to Ravenna",
    description:
      "Coming off a ship at Porto Corsini when everyone else is too. What the port publishes about getting away, and what it does not.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Ravenna Cruise Terminal",
    to: "Ravenna",
    eyebrow: "Route",
    h1: "Cruise terminal to Ravenna",
    lead: "Disembarkation is a crowd problem rather than a clock problem. A whole ship wants to leave at the same moment, from a port with a temporary terminal and, by the tourism authority's own account, a limited supply of taxis.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the terminal",
    note: "No price, journey time or distance appears here. Two official publishers give different distances between the port and the city, so this site publishes neither and shows both on the terminal page instead.",
  },
  lead: {
    id: "arriving",
    eyebrow: "What is waiting at the port",
    heading: "What the published record says about getting away",
    text: "All of this is somebody else's information about the port — useful context, and not a description of our service.",
    terms: [
      {
        term: "There is a public bus",
        detail:
          "Line 90 runs between the terminal area and Ravenna's railway station. The port operator and the tourism authority disagree about whether its stop is in front of the terminal or a short walk away.",
      },
      {
        term: "Taxis are not guaranteed",
        detail:
          "The port operator says taxis are normally available in the terminal area when ships are in. The regional tourism authority says availability is limited and that they cannot be booked in advance. That second sentence is the clearest reason to arrange something beforehand, and it is theirs rather than ours.",
      },
      {
        term: "The terminal is temporary",
        detail:
          "The operator states that a marquee is presently in use as the cruise terminal. Expect less shelter than the word suggests, and no fixed concourse to wait in.",
      },
      {
        term: "Where a car waits is not published",
        detail:
          "The operator sets no rule for private vehicles collecting passengers, so this page describes none. The arrangement is settled in the reply to your request.",
      },
    ],
    source: operatorEn,
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A port, and a city that is not next to it",
    lead: "The two are joined by road. They are not the same destination, and a request that confuses them goes to the wrong place.",
    from: {
      id: "terminal",
      label: "Departure",
      name: "Ravenna Cruise Terminal at Porto Corsini",
      page: "ravenna-terminal",
      linkText: "The terminal, and where the sources disagree",
      items: [
        {
          term: "Where it is",
          detail:
            "The cruise pier at Porto Corsini, on the coast. The operator gives it as Molo Crociere Porto Corsini.",
        },
        {
          term: "What to send",
          detail:
            "The ship's name, the date and the scheduled arrival time. Those three make the port end answerable.",
        },
        {
          term: "Where you are met",
          detail:
            "Settled in the reply to your request. The port publishes no pick-up rule and the terminal is a temporary structure, so nothing is promised here.",
        },
      ],
    },
    to: {
      id: "ravenna",
      label: "Arrival",
      name: "Ravenna",
      page: "ravenna",
      linkText: "The city, and why it is not the port",
      items: [
        {
          term: "The address",
          detail:
            "Street and number, or the station if you are connecting onwards by rail.",
        },
        {
          term: "The station is in the city",
          detail:
            "Unlike the port. If your onward train matters more than your hotel, say so — it changes where the journey should end.",
        },
        {
          term: "No duration is quoted",
          detail:
            "Not for this journey or any other in this cluster, because the distance itself is disputed between official sources.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Five things, and the first is the one that makes an arrival trackable.",
    items: [
      "The ship's name and the date.",
      "The scheduled arrival time at the port.",
      "The full address in Ravenna, or the station.",
      "How many passengers and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "Say that you are disembarking rather than joining. The two directions get different advice, and the difference is not cosmetic — a late start here costs you part of a morning, while a late start in the other direction can cost you the ship.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "ravenna-terminal",
        label: "Ravenna Cruise Terminal at Porto Corsini",
        detail: "The port in full, and the three sources that describe it differently.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Ravenna to the cruise terminal",
        detail: "The same road in the other direction, with the stakes reversed.",
      },
      {
        page: "ravenna",
        label: "Private transfers in Ravenna",
        detail: "The city, the station, and why the port is neither.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about what the port does and does not publish.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "No duration is quoted. The two official publishers do not even agree on the distance — 13 km against about 15 km — so a journey time derived from either would rest on a figure that is itself disputed.",
      },
      {
        question: "Where will the driver be waiting?",
        answer:
          "Settled in the reply to your request. The port operator publishes no pick-up rule for private vehicles, and the terminal is currently a temporary marquee, so there is no fixed point this page could describe honestly.",
      },
      {
        question: "Why not just take a taxi at the port?",
        answer:
          "You may be able to. The port operator says taxis are normally available in the terminal area when ships are in; the regional tourism authority says availability is limited and they cannot be booked ahead. Both are official and they disagree, which is itself worth knowing before a whole ship disembarks around you.",
      },
      {
        question: "Can you take me somewhere other than Ravenna?",
        answer:
          "Ask, and name the place. This page covers the port into the city. Longer runs — to Bologna, say — are not published here yet, because they have not been worked through, and a long intercity journey deserves a proper answer rather than an implied one.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Ship, date, and an address in Ravenna",
    body: "The port end is straightforward once the ship is named. The city end just needs a street — or the station, if a train matters more than a hotel.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About the terminal", page: "ravenna-terminal" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const outIt: RoutePage = {
  meta: {
    title: "Dal terminal crociere di Ravenna alla città",
    description:
      "Sbarcare a Porto Corsini mentre lo fanno tutti. Che cosa pubblica il porto su come ripartire e che cosa non pubblica.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Terminal crociere di Ravenna",
    to: "Ravenna",
    eyebrow: "Tratta",
    h1: "Dal terminal crociere a Ravenna",
    lead: "Lo sbarco è un problema di folla più che di orologio. Un'intera nave vuole ripartire nello stesso momento, da un porto con un terminal provvisorio e, stando all'ente turistico stesso, con un numero limitato di taxi.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sul terminal",
    note: "Qui non compaiono prezzi, durate o distanze. Due fonti ufficiali indicano distanze diverse fra il porto e la città: questo sito non ne pubblica nessuna e le mostra entrambe nella pagina del terminal.",
  },
  lead: {
    id: "arrivo",
    eyebrow: "Che cosa vi aspetta al porto",
    heading: "Che cosa dicono le fonti su come ripartire",
    text: "Tutto quanto segue è informazione altrui sul porto: contesto utile, non una descrizione del nostro servizio.",
    terms: [
      {
        term: "C'è un autobus pubblico",
        detail:
          "La linea 90 collega l'area del terminal alla stazione ferroviaria di Ravenna. L'operatore portuale e l'ente turistico non concordano su se la fermata sia davanti al terminal o a pochi minuti a piedi.",
      },
      {
        term: "I taxi non sono garantiti",
        detail:
          "L'operatore portuale dice che di norma i taxi sono disponibili nell'area del terminal quando ci sono navi. L'ente turistico regionale dice che la disponibilità è limitata e che non si possono prenotare in anticipo. Questa seconda frase è la ragione più chiara per organizzarsi prima, ed è loro, non nostra.",
      },
      {
        term: "Il terminal è provvisorio",
        detail:
          "L'operatore dichiara che come terminal crociere si utilizza attualmente una struttura temporanea. Aspettatevi meno riparo di quanto la parola suggerisca e nessun atrio stabile in cui attendere.",
      },
      {
        term: "Dove attenda un'auto non è pubblicato",
        detail:
          "L'operatore non fissa alcuna regola per i veicoli privati che prelevano passeggeri: questa pagina quindi non ne descrive nessuna. La modalità si definisce nella risposta alla vostra richiesta.",
      },
    ],
    source: operatorIt,
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Un porto e una città che non gli sta accanto",
    lead: "I due sono uniti da una strada. Non sono la stessa destinazione, e una richiesta che li confonde arriva nel posto sbagliato.",
    from: {
      id: "terminal",
      label: "Partenza",
      name: "Terminal crociere di Ravenna a Porto Corsini",
      page: "ravenna-terminal",
      linkText: "Il terminal, e dove le fonti non concordano",
      items: [
        {
          term: "Dove si trova",
          detail:
            "Il molo crociere a Porto Corsini, sulla costa. L'operatore lo indica come Molo Crociere Porto Corsini.",
        },
        {
          term: "Che cosa inviare",
          detail:
            "Il nome della nave, la data e l'orario previsto di arrivo. Questi tre dati rendono rispondibile il capo portuale.",
        },
        {
          term: "Dove vi si incontra",
          detail:
            "Si definisce nella risposta alla vostra richiesta. Il porto non pubblica regole di prelievo e il terminal è una struttura provvisoria: qui non promettiamo nulla.",
        },
      ],
    },
    to: {
      id: "ravenna",
      label: "Arrivo",
      name: "Ravenna",
      page: "ravenna",
      linkText: "La città, e perché non è il porto",
      items: [
        {
          term: "L'indirizzo",
          detail:
            "Via e numero, oppure la stazione se proseguite in treno.",
        },
        {
          term: "La stazione è in città",
          detail:
            "A differenza del porto. Se il treno successivo conta più dell'hotel, ditelo: cambia dove deve finire il viaggio.",
        },
        {
          term: "Non indichiamo durate",
          detail:
            "Né per questo tragitto né per altri di questa sezione, perché la distanza stessa è discordante fra fonti ufficiali.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Cinque cose, e la prima è quella che rende tracciabile un arrivo.",
    items: [
      "Il nome della nave e la data.",
      "L'orario previsto di arrivo al porto.",
      "L'indirizzo completo a Ravenna, o la stazione.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "Precisate che state sbarcando e non imbarcando. Le due direzioni ricevono consigli diversi, e la differenza non è di forma: partire tardi qui vi costa parte di una mattinata, mentre partire tardi nell'altra direzione può costarvi la nave.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "ravenna-terminal",
        label: "Terminal crociere di Ravenna a Porto Corsini",
        detail: "Il porto per esteso, e le tre fonti che lo descrivono diversamente.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Da Ravenna al terminal crociere",
        detail: "La stessa strada nell'altro senso, con la posta rovesciata.",
      },
      {
        page: "ravenna",
        label: "Transfer privati a Ravenna",
        detail: "La città, la stazione e perché il porto non è né l'una né l'altra.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Quasi tutte su che cosa il porto pubblica e che cosa no.",
    items: [
      {
        question: "Quanto ci vuole?",
        answer:
          "Non indichiamo durate. Le due fonti ufficiali non concordano nemmeno sulla distanza — 13 km contro circa 15 km — quindi un tempo di percorrenza ricavato dall'una o dall'altra poggerebbe su un dato a sua volta discusso.",
      },
      {
        question: "Dove sarà l'autista ad attendermi?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. L'operatore portuale non pubblica regole di prelievo per i veicoli privati, e il terminal è attualmente una struttura temporanea: non c'è un punto fisso che questa pagina possa descrivere onestamente.",
      },
      {
        question: "Perché non prendere un taxi al porto?",
        answer:
          "Potreste riuscirci. L'operatore portuale dice che di norma i taxi sono disponibili nell'area del terminal quando ci sono navi; l'ente turistico regionale dice che la disponibilità è limitata e che non si prenotano in anticipo. Sono entrambi ufficiali e non concordano: vale la pena saperlo prima che un'intera nave sbarchi insieme a voi.",
      },
      {
        question: "Potete portarmi altrove, non a Ravenna?",
        answer:
          "Chiedetelo indicando il luogo. Questa pagina riguarda il tragitto dal porto alla città. Percorsi più lunghi — verso Bologna, per esempio — non sono ancora pubblicati qui perché non sono stati approfonditi, e un lungo viaggio interurbano merita una risposta vera e non sottintesa.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Nave, data e un indirizzo a Ravenna",
    body: "Il capo portuale è semplice una volta indicata la nave. A quello cittadino basta una via — o la stazione, se il treno conta più dell'hotel.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sul terminal", page: "ravenna-terminal" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Ravenna → terminal: embarkation ──────────────────────────────────── */

const inEn: RoutePage = {
  meta: {
    title: "Ravenna to Ravenna Cruise Terminal",
    description:
      "Getting to a ship at Porto Corsini, where the sailing time is fixed and the margin is the whole problem.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Ravenna",
    to: "Ravenna Cruise Terminal",
    eyebrow: "Route",
    h1: "Ravenna to the cruise terminal",
    lead: "This is the same road as the journey out, with the stakes reversed. A ship sails whether or not you are aboard, and there is no later one. Everything on this page is about margin.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the terminal",
    note: "No price, journey time or distance appears here either. Since the two official sources disagree about how far the port is, any margin advice has to be about habits rather than arithmetic.",
  },
  lead: {
    id: "margin",
    eyebrow: "The only thing that matters",
    heading: "Why this direction is not the other one reversed",
    text: "Disembarkation is inconvenient when it goes wrong. Embarkation is unrecoverable.",
    steps: [
      {
        title: "The deadline is somebody else's",
        body: "A sailing time is set by the ship and is not negotiable. Unlike a flight, there is no next one in two hours, and no desk to rebook at. That single fact is why this page exists separately from the one going the other way.",
      },
      {
        title: "The distance is disputed, so plan on habits instead",
        body: "Two official publishers give different distances between the city and the port, so no journey time is quoted here. The usable advice is not a number: leave earlier than feels necessary, and tell us your all-aboard time rather than your own preferred departure time.",
      },
      {
        title: "Say the all-aboard time, not the sailing time",
        body: "They are different, and the one that binds you is the earlier of the two. Put it in your request and the arrangement is built backwards from it.",
      },
    ],
    source: operatorEn,
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A city, and a pier outside it",
    lead: "The city end is ordinary. The port end is the one with a deadline attached.",
    from: {
      id: "ravenna",
      label: "Departure",
      name: "Ravenna",
      page: "ravenna",
      linkText: "The city, and why the port is elsewhere",
      items: [
        {
          term: "The address",
          detail:
            "Street and number. A hotel, an apartment or the railway station if you are arriving by train that morning.",
        },
        {
          term: "What to send",
          detail: "The address, the date, and the time you must be aboard.",
        },
        {
          term: "If you are coming from further away",
          detail:
            "Say so. A journey that starts outside Ravenna is a different arrangement, and it changes the margin.",
        },
      ],
    },
    to: {
      id: "terminal",
      label: "Arrival",
      name: "Ravenna Cruise Terminal at Porto Corsini",
      page: "ravenna-terminal",
      linkText: "The terminal, and what is not published about it",
      items: [
        {
          term: "The ship",
          detail:
            "Name her. The pier is shared, and which vessel you are joining is part of knowing where to go.",
        },
        {
          term: "A temporary terminal",
          detail:
            "The operator states a marquee is currently in use rather than a terminal building. Expect less shelter than you might assume, which matters more in the rain with luggage.",
        },
        {
          term: "No set-down rule is published",
          detail:
            "The port publishes none for private vehicles, so this page describes none. The arrangement is settled in the reply to your request.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Four things, and the third is the one that does the work.",
    items: [
      "The ship's name and the sailing date.",
      "The full address you are leaving from.",
      "The all-aboard time — not the sailing time.",
      "How many passengers and how much luggage.",
    ],
    note: "If you are flying into Bologna the same day and sailing that evening, say so plainly. Two legs on one deadline is a different proposition from either on its own, and it is better raised in the request than discovered on the road.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "ravenna-terminal",
        label: "Ravenna Cruise Terminal at Porto Corsini",
        detail: "The port, the temporary terminal, and the sources that disagree.",
      },
      {
        page: "route-terminal-ravenna",
        label: "Cruise terminal to Ravenna",
        detail: "The journey out, which is a crowd problem rather than a deadline.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail: "The nearest airport, if you are flying in before you sail.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Short, and all of it about time.",
    items: [
      {
        question: "How much time should I allow?",
        answer:
          "More than the distance suggests, and this page will not turn that into a number. The two official sources disagree about how far the port is, so any figure here would be built on a disputed one. Send your all-aboard time and the arrangement is planned backwards from it.",
      },
      {
        question: "Can you collect me from Bologna Airport on the sailing day?",
        answer:
          "Ask, and say both ends and the all-aboard time. No Bologna-to-Porto Corsini route is published on this site yet, because it has not been properly worked through — but a same-day connection is exactly the sort of thing to raise in a request rather than assume.",
      },
      {
        question: "Where does the car set me down at the port?",
        answer:
          "Settled in the reply to your request. The operator publishes no set-down rule for private vehicles, and the terminal is a temporary structure, so nothing is stated here as though it were fixed.",
      },
      {
        question: "What if my ship's schedule changes?",
        answer:
          "Tell us as soon as you know. Nothing on this page claims ship tracking or an automatic adjustment — neither is offered, and a page that implied otherwise would be making a promise about somebody else's vessel.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "All-aboard time, and where you are starting",
    body: "Those two settle almost everything else on this route. The ship's name and the date complete it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About the terminal", page: "ravenna-terminal" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const inIt: RoutePage = {
  meta: {
    title: "Da Ravenna al terminal crociere",
    description:
      "Raggiungere la nave a Porto Corsini, dove l'orario di partenza è fisso e il margine è tutto il problema.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Ravenna",
    to: "Terminal crociere di Ravenna",
    eyebrow: "Tratta",
    h1: "Da Ravenna al terminal crociere",
    lead: "È la stessa strada del viaggio di ritorno, con la posta rovesciata. Una nave parte che siate a bordo o no, e non ce n'è una dopo. Tutto in questa pagina riguarda il margine.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sul terminal",
    note: "Nemmeno qui compaiono prezzi, durate o distanze. Poiché le due fonti ufficiali non concordano su quanto disti il porto, qualsiasi consiglio sul margine deve riguardare le abitudini e non l'aritmetica.",
  },
  lead: {
    id: "margine",
    eyebrow: "L'unica cosa che conta",
    heading: "Perché questa direzione non è l'altra al contrario",
    text: "Lo sbarco, se va storto, è scomodo. L'imbarco, se va storto, non si recupera.",
    steps: [
      {
        title: "La scadenza è di qualcun altro",
        body: "L'orario di partenza lo fissa la nave e non è negoziabile. A differenza di un volo, non ce n'è un altro fra due ore né un banco dove riprotezionarsi. È questo singolo fatto a giustificare una pagina separata da quella in senso opposto.",
      },
      {
        title: "La distanza è discussa: regolatevi sulle abitudini",
        body: "Due fonti ufficiali indicano distanze diverse fra la città e il porto, perciò qui non trovate alcuna durata. Il consiglio utilizzabile non è un numero: partite prima di quanto sembri necessario, e indicateci l'orario di imbarco anziché l'ora in cui preferireste muovervi.",
      },
      {
        title: "Dite l'orario di imbarco, non quello di partenza",
        body: "Sono due cose diverse, e quella che vi vincola è la più anticipata. Mettetela nella richiesta e l'organizzazione verrà costruita a ritroso da lì.",
      },
    ],
    source: operatorIt,
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Una città e un molo fuori da essa",
    lead: "Il capo cittadino è ordinario. Quello portuale è quello con una scadenza attaccata.",
    from: {
      id: "ravenna",
      label: "Partenza",
      name: "Ravenna",
      page: "ravenna",
      linkText: "La città, e perché il porto è altrove",
      items: [
        {
          term: "L'indirizzo",
          detail:
            "Via e numero. Un hotel, un appartamento o la stazione se quella mattina arrivate in treno.",
        },
        {
          term: "Che cosa inviare",
          detail: "L'indirizzo, la data e l'ora in cui dovete essere a bordo.",
        },
        {
          term: "Se venite da più lontano",
          detail:
            "Ditelo. Un viaggio che parte fuori Ravenna è un altro accordo, e cambia il margine.",
        },
      ],
    },
    to: {
      id: "terminal",
      label: "Arrivo",
      name: "Terminal crociere di Ravenna a Porto Corsini",
      page: "ravenna-terminal",
      linkText: "Il terminal, e ciò che non se ne pubblica",
      items: [
        {
          term: "La nave",
          detail:
            "Indicatene il nome. Il molo è condiviso, e sapere quale nave prendete fa parte del sapere dove andare.",
        },
        {
          term: "Un terminal provvisorio",
          detail:
            "L'operatore dichiara che si utilizza una struttura temporanea e non un edificio. Aspettatevi meno riparo di quanto immaginiate: conta parecchio sotto la pioggia con i bagagli.",
        },
        {
          term: "Nessuna regola di rilascio pubblicata",
          detail:
            "Il porto non ne pubblica per i veicoli privati, quindi questa pagina non ne descrive. La modalità si definisce nella risposta alla vostra richiesta.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Quattro cose, e la terza è quella che fa il lavoro.",
    items: [
      "Il nome della nave e la data di partenza.",
      "L'indirizzo completo da cui partite.",
      "L'orario di imbarco, non quello di salpamento.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Se atterrate a Bologna lo stesso giorno e salpate la sera, ditelo chiaramente. Due tratte su un'unica scadenza sono un'altra cosa rispetto a ciascuna presa da sola, ed è meglio sollevarlo nella richiesta che scoprirlo per strada.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "ravenna-terminal",
        label: "Terminal crociere di Ravenna a Porto Corsini",
        detail: "Il porto, il terminal provvisorio e le fonti che non concordano.",
      },
      {
        page: "route-terminal-ravenna",
        label: "Dal terminal crociere a Ravenna",
        detail: "Il viaggio di ritorno, che è un problema di folla e non di scadenza.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail: "L'aeroporto più vicino, se arrivate in aereo prima di salpare.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Poche, e tutte sul tempo.",
    items: [
      {
        question: "Quanto margine devo lasciare?",
        answer:
          "Più di quanto la distanza suggerisca, e questa pagina non lo tradurrà in un numero. Le due fonti ufficiali non concordano su quanto disti il porto, quindi qualsiasi cifra qui poggerebbe su un dato discusso. Inviate l'orario di imbarco e l'organizzazione verrà pianificata a ritroso.",
      },
      {
        question: "Potete prendermi all'aeroporto di Bologna il giorno della partenza?",
        answer:
          "Chiedetelo indicando entrambi i capi e l'orario di imbarco. Su questo sito non è ancora pubblicata alcuna tratta Bologna–Porto Corsini, perché non è stata approfondita a dovere, ma una coincidenza in giornata è esattamente il genere di cosa da sollevare in una richiesta invece di darla per scontata.",
      },
      {
        question: "Dove mi lascia l'auto al porto?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. L'operatore non pubblica regole di rilascio per i veicoli privati, e il terminal è una struttura provvisoria: qui non enunciamo nulla come se fosse fissato.",
      },
      {
        question: "E se cambia l'orario della nave?",
        answer:
          "Ditecelo appena lo sapete. Nulla in questa pagina promette il monitoraggio della nave o un adeguamento automatico: non li offriamo, e una pagina che lasciasse intendere il contrario farebbe una promessa sulla nave di qualcun altro.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Orario di imbarco e punto di partenza",
    body: "Questi due risolvono quasi tutto il resto su questa tratta. Il nome della nave e la data completano il quadro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sul terminal", page: "ravenna-terminal" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeTerminalRavenna: Record<Locale, RoutePage> = {
  en: outEn,
  it: outIt,
};
export const routeRavennaTerminal: Record<Locale, RoutePage> = {
  en: inEn,
  it: inIt,
};
