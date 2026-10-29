import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The three BLQ → hotel arrival routes.
 *
 * ── How they avoid being one page three times ─────────────────────────────
 * They share the project's route type and component, which is right — they
 * answer the same kind of question. What they do not share is a shape. Each
 * declares a different leading module, and the module is chosen by what the
 * hotel at the far end actually publishes:
 *
 *   Majestic      a definition list — the gap between the address on the
 *                 booking and the arrival instructions the hotel publishes,
 *                 and where our part of it stops
 *   Commercianti  numbered steps — the hotel's arrangement is a sequence
 *                 that has to be started before anybody leaves the airport
 *   Excelsior     two columns — a transfer and the airport monorail set side
 *                 by side as distinct options, neither sold as the answer
 *
 * ── The line all three hold ───────────────────────────────────────────────
 * Two of these hotels publish an access arrangement of their own. Both
 * arrangements belong to the hotel and are operated by the hotel. Nothing
 * establishes that they extend to our vehicles, and every page here says so
 * rather than letting a reader assume it.
 *
 * No fare, distance or journey time appears on any of them. The airport
 * publishes no pickup point for private hire, so none is described.
 *
 * See `docs/bologna-stage2-hotel-verification.md` and
 * `docs/bologna-research-log.md` §1.
 */

/* ── Shared source notes ──────────────────────────────────────────────── */

const blqSourceEn = {
  text: "The Marconi Express details and the fact that the airport publishes no pickup arrangement for private hire are from the airport operator's own site, read on 27 October 2026. No fare, journey time or road distance is quoted, because none is published for a road transfer:",
  linkText: "Bologna Airport publishes its own transport information",
  href: "https://www.bologna-airport.it/en/from-and-to-the-airport/transfer-from-and-to-the-airport/train-to-the-city-centre/?idC=62594",
};

const blqSourceIt = {
  text: "I dati sul Marconi Express e il fatto che l'aeroporto non pubblichi alcuna modalità di prelievo per il noleggio con conducente provengono dal sito del gestore aeroportuale, consultato il 27 ottobre 2026. Non indichiamo tariffe, durate o distanze stradali, perché non ne sono pubblicate per un tragitto su strada:",
  linkText: "L'aeroporto di Bologna pubblica le proprie informazioni sui trasporti",
  href: "https://www.bologna-airport.it/it/da-e-per-l-aeroporto/transfer-da-e-per-l-aeroporto/treno-per-il-centro-citta/?idC=62594",
};

/* ── BLQ → Grand Hotel Majestic ───────────────────────────────────────── */

const majesticEn: RoutePage = {
  meta: {
    title: "Bologna Airport to the Grand Hotel Majestic",
    description:
      "The hotel tells guests not to use its own address for driving directions. What that means for an arrival from BLQ, and where our part of it stops.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Grand Hotel Majestic",
    eyebrow: "Route",
    h1: "Bologna Airport to the Grand Hotel Majestic",
    lead: "An ordinary airport run with an unusual ending. The hotel publishes arrival instructions that point somewhere other than its own address, and the useful work on this route is understanding whose arrangement is whose.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the hotel",
    note: "No price, journey time or road distance appears here. The airport publishes none for a road transfer, and it publishes no pickup point for private hire either, so neither is described on this page.",
  },
  lead: {
    id: "two-ends",
    eyebrow: "What makes this route different",
    heading: "Whose arrangement is whose",
    text: "Three facts, in the order they matter. The first two are the hotel's; the third is ours, and it is the one most easily assumed away.",
    terms: [
      {
        term: "The hotel's address is not a driving destination",
        detail:
          "Its own published directions say not to use Via dell'Indipendenza 8 for satellite navigation, describing the street as pedestrianised. That instruction is the hotel's, and it applies to anyone driving — a hire car, a friend, or a transfer.",
      },
      {
        term: "The hotel publishes an arrival arrangement of its own",
        detail:
          "It describes a side entrance at Via Manzoni 2, a ZTL gate at Via Marconi, and a valet who meets guests. It also states that it holds a municipality permission for its guests. All of that is the hotel's account of the hotel's arrangement, operated by the hotel's staff.",
      },
      {
        term: "That permission is not ours, and this page will not borrow it",
        detail:
          "Nothing we could verify establishes that a private-hire vehicle may use the same route, and Bologna's municipal rules on private-hire access could not be read. So we promise no drop-off at the side entrance and no particular kerb. What we can do is take you to Bologna and settle the last part with you directly.",
      },
      {
        term: "Confirm the current instructions with the hotel",
        detail:
          "The directions document we read carries no revision date. Ask the hotel what it wants for an arriving car on your date, tell us the answer, and the arrangement follows from that rather than from a summary written in advance.",
      },
    ],
    source: blqSourceEn,
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A simple start and a careful finish",
    lead: "The airport end of this journey is ordinary. Everything that needs thought is at the other.",
    from: {
      id: "blq",
      label: "Departure",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "The airport, and what it does not publish",
      items: [
        {
          term: "What to send",
          detail:
            "Flight number, date and scheduled arrival time. Those three make the airport end answerable.",
        },
        {
          term: "Where you are met",
          detail:
            "Settled in the reply to your request. The airport publishes no pickup point for cars with a driver, so none is stated here.",
        },
        {
          term: "There is also a monorail",
          detail:
            "The Marconi Express runs to Bologna Centrale. It does not go near this hotel, but it is worth knowing it exists.",
        },
      ],
    },
    to: {
      id: "majestic",
      label: "Arrival",
      name: "Grand Hotel Majestic “già Baglioni”",
      page: "hotel-majestic",
      linkText: "The hotel, and its two addresses",
      items: [
        {
          term: "Via dell'Indipendenza, 8",
          detail:
            "40121 Bologna. The address on your booking, and the one the hotel says not to drive to.",
        },
        {
          term: "What the hotel publishes instead",
          detail:
            "A side entrance at Via Manzoni 2. Described by the hotel, for the hotel's own arrangement — not a point this page promises.",
        },
        {
          term: "What we will tell you",
          detail:
            "Where a car can actually stop on your date and at your hour, once you have told us what the hotel requires. Sometimes that means a short walk, and we would rather say so than imply otherwise.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Five things, and the fifth is specific to this hotel.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The hotel name — and the fact that it is the Majestic.",
      "How many passengers and how much luggage.",
      "Anything the hotel has told you about how it wants arriving cars handled.",
    ],
    note: "That last item does more work here than anywhere else in this cluster. The hotel holds the arrangement; the more precisely you can tell us what it expects, the more precisely we can answer.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Leaving for the airport",
    lead: "Shorter than the section above, and deliberately so: there is less published about leaving this hotel than about arriving at it.",
    paragraphs: [
      "The hotel's directions document is written for arriving guests. It explains where to drive, which gate to use and who will meet you \u2014 and it says nothing at all about a car collecting someone on the way out. We are not going to fill that silence with a procedure of our own invention.",
      "So a departure here is arranged rather than looked up. Tell us the flight and the date when you ask, and ask the hotel what it expects for a car collecting a guest; between the two answers the arrangement becomes a real one instead of an assumption. It is worth doing before you travel rather than on the morning itself.",
    ],
    note: "No collection point, waiting arrangement or lead time is stated here, because none is published and none may be assumed. The hotel's access permission remains the hotel's, exercised through its own valet, and nothing on this page extends it to our vehicles.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "The hotel in full: two addresses, the streets it says you may not drive, and what we do not claim.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport, its monorail to the station, and its silence about private hire.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at three strengths, and why the street decides the answer.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about the last two hundred metres, which is where the difficulty is.",
    items: [
      {
        question: "Will the car take me to the hotel entrance?",
        answer:
          "Not to the Via dell'Indipendenza entrance: the hotel describes that street as pedestrianised and tells guests not to drive to it. Whether a car can use the side entrance the hotel names is the hotel's arrangement to grant, not ours to promise. Tell us what the hotel says and we will tell you what we can do.",
      },
      {
        question: "But the hotel says it has a permit.",
        answer:
          "It does say that, for its own guests, operated through its own valet. That is not the same as a permission covering a private-hire vehicle arriving on your behalf, and nothing we could read establishes one. We are not going to describe somebody else's authorisation as ours.",
      },
      {
        question: "How long does the journey take?",
        answer:
          "No duration is quoted. The airport publishes none for a road transfer and nor does any other source consulted. It would in any case depend on the hour and on where a car can stop at the other end.",
      },
      {
        question: "Where will the driver meet me at the airport?",
        answer:
          "Settled in the reply to your request. The airport publishes no pickup arrangement for cars with a driver — not a point, not a desk, not a procedure — so nothing is stated here as though it were fixed.",
      },
      {
        question: "Might I have to walk the last part?",
        answer:
          "Possibly, and it is better to know that now. A central Bologna address inside a pedestrianised street sometimes ends in a short walk whoever is driving. What that means for your arrival is answered specifically when you ask, not promised in general here.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight, date, and what the hotel told you",
    body: "On this route the third item is as useful as the first two. The hotel holds the arrival arrangement, and the answer we can give depends on knowing what it is.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "About the Grand Hotel Majestic",
      page: "hotel-majestic",
    },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const majesticIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Bologna al Grand Hotel Majestic",
    description:
      "L'hotel raccomanda di non usare il proprio indirizzo per il navigatore. Che cosa comporta per un arrivo dal BLQ e dove finisce la nostra parte.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Grand Hotel Majestic",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Bologna al Grand Hotel Majestic",
    lead: "Un normale tragitto aeroportuale con un finale insolito. L'hotel pubblica istruzioni d'arrivo che puntano altrove rispetto al proprio indirizzo, e il lavoro utile su questa tratta sta nel capire di chi sia ciascun accordo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'hotel",
    note: "Qui non compaiono prezzi, durate o distanze stradali. L'aeroporto non ne pubblica per un tragitto su strada, e non pubblica nemmeno un punto di prelievo per il noleggio con conducente: nessuno dei due viene quindi descritto in questa pagina.",
  },
  lead: {
    id: "due-capi",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Di chi è ciascun accordo",
    text: "Tre fatti, nell'ordine in cui contano. I primi due sono dell'hotel; il terzo è nostro, ed è quello che più facilmente si dà per scontato.",
    terms: [
      {
        term: "L'indirizzo dell'hotel non è una destinazione per il navigatore",
        detail:
          "Le sue indicazioni pubblicate raccomandano di non impostare via dell'Indipendenza 8 sul navigatore satellitare, descrivendo la via come pedonalizzata. Quell'istruzione è dell'hotel e vale per chiunque guidi: un'auto a noleggio, un amico o un transfer.",
      },
      {
        term: "L'hotel pubblica un proprio accordo d'arrivo",
        detail:
          "Descrive un ingresso laterale in via Manzoni 2, un varco ZTL in via Marconi e un parcheggiatore che accoglie gli ospiti. Dichiara inoltre di avere un'autorizzazione comunale per i propri ospiti. È tutto il resoconto che l'hotel dà del proprio accordo, gestito dal proprio personale.",
      },
      {
        term: "Quell'autorizzazione non è nostra, e questa pagina non se ne appropria",
        detail:
          "Nulla di verificabile stabilisce che un veicolo a noleggio con conducente possa seguire lo stesso percorso, e le norme comunali di Bologna sull'accesso degli NCC non sono state consultabili. Non promettiamo quindi alcuna discesa all'ingresso laterale né a un marciapiede preciso. Quello che possiamo fare è portarvi a Bologna e definire con voi l'ultimo tratto.",
      },
      {
        term: "Verificate con l'hotel le istruzioni aggiornate",
        detail:
          "Il documento di indicazioni che abbiamo letto non riporta una data di revisione. Chiedete all'hotel che cosa richiede per un'auto in arrivo nella vostra data, diteci la risposta, e l'accordo seguirà da lì anziché da un riassunto scritto in anticipo.",
      },
    ],
    source: blqSourceIt,
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Una partenza semplice e un arrivo da curare",
    lead: "Il capo aeroportuale di questo viaggio è ordinario. Tutto ciò che richiede attenzione sta all'altro.",
    from: {
      id: "blq",
      label: "Partenza",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "L'aeroporto, e ciò che non pubblica",
      items: [
        {
          term: "Che cosa inviare",
          detail:
            "Numero del volo, data e orario previsto di arrivo. Questi tre dati rendono rispondibile il capo aeroportuale.",
        },
        {
          term: "Dove vi si incontra",
          detail:
            "Si definisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcun punto di prelievo per le auto con conducente: qui non ne indichiamo.",
        },
        {
          term: "C'è anche una monorotaia",
          detail:
            "Il Marconi Express arriva a Bologna Centrale. Non passa vicino a questo hotel, ma vale la pena sapere che esiste.",
        },
      ],
    },
    to: {
      id: "majestic",
      label: "Arrivo",
      name: "Grand Hotel Majestic “già Baglioni”",
      page: "hotel-majestic",
      linkText: "L'hotel e i suoi due indirizzi",
      items: [
        {
          term: "Via dell'Indipendenza, 8",
          detail:
            "40121 Bologna. L'indirizzo sulla vostra prenotazione, e quello a cui l'hotel dice di non guidare.",
        },
        {
          term: "Che cosa pubblica invece l'hotel",
          detail:
            "Un ingresso laterale in via Manzoni 2. Lo descrive l'hotel, per il proprio accordo: non è un punto che questa pagina promette.",
        },
        {
          term: "Che cosa vi diremo noi",
          detail:
            "Dove un'auto possa effettivamente fermarsi nella vostra data e alla vostra ora, una volta che ci avrete detto che cosa richiede l'hotel. A volte significa pochi minuti a piedi, e preferiamo dirlo che lasciar intendere il contrario.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Cinque cose, e la quinta riguarda proprio questo hotel.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "Il nome dell'hotel, precisando che si tratta del Majestic.",
      "Quanti passeggeri e quanti bagagli.",
      "Tutto ciò che l'hotel vi ha detto su come vuole siano gestite le auto in arrivo.",
    ],
    note: "Quest'ultima voce qui lavora più che in ogni altro punto della sezione. L'accordo è dell'hotel: più precisamente ci dite che cosa si aspetta, più precisamente possiamo rispondere.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Partire per l'aeroporto",
    lead: "Pi\u00f9 breve della sezione qui sopra, e volutamente: su come si lascia questo hotel \u00e8 pubblicato molto meno che su come ci si arriva.",
    paragraphs: [
      "Il documento di indicazioni dell'hotel \u00e8 scritto per chi arriva. Spiega dove guidare, quale varco usare e chi vi accoglier\u00e0, e non dice assolutamente nulla su un'auto che venga a prendere qualcuno in partenza. Quel silenzio non lo riempiremo con una procedura inventata da noi.",
      "Una partenza da qui, quindi, si concorda invece di cercarla. Indicateci il volo e la data quando scrivete, e chiedete all'hotel che cosa prevede per un'auto che viene a prelevare un ospite: fra le due risposte l'accordo diventa reale e non un'ipotesi. Conviene farlo prima di partire, non la mattina stessa.",
    ],
    note: "Qui non indichiamo alcun punto di prelievo, modalit\u00e0 di attesa o anticipo consigliato, perch\u00e9 non ne sono pubblicati e non vanno dati per scontati. L'autorizzazione d'accesso resta dell'hotel, esercitata tramite il suo parcheggiatore, e nulla in questa pagina la estende ai nostri veicoli.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "L'hotel per esteso: due indirizzi, le vie che dice di non percorrere e ciò che non affermiamo.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail:
          "L'aeroporto, la sua monorotaia per la stazione e il suo silenzio sul noleggio con conducente.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Quasi tutte sugli ultimi duecento metri, che è dove sta la difficoltà.",
    items: [
      {
        question: "L'auto mi porterà all'ingresso dell'hotel?",
        answer:
          "Non a quello di via dell'Indipendenza: l'hotel descrive quella via come pedonalizzata e raccomanda agli ospiti di non guidarci. Se un'auto possa usare l'ingresso laterale che l'hotel indica è l'hotel a poterlo concedere, non noi a poterlo promettere. Diteci che cosa vi risponde e vi diremo che cosa possiamo fare.",
      },
      {
        question: "Ma l'hotel dice di avere un permesso.",
        answer:
          "Lo dice, per i propri ospiti e tramite il proprio parcheggiatore. Non è la stessa cosa di un'autorizzazione che copra un veicolo a noleggio con conducente in arrivo per vostro conto, e nulla di quanto abbiamo potuto leggere ne stabilisce una. Non descriveremo come nostra l'autorizzazione di qualcun altro.",
      },
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non indichiamo durate. L'aeroporto non ne pubblica per un tragitto su strada, e nemmeno le altre fonti consultate. Dipenderebbe comunque dall'ora e da dove un'auto possa fermarsi all'arrivo.",
      },
      {
        question: "Dove mi aspetta l'autista in aeroporto?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcuna modalità di prelievo per le auto con conducente: né un punto, né un banco, né una procedura. Qui non enunciamo nulla come se fosse fissato.",
      },
      {
        question: "Potrei dover fare l'ultimo tratto a piedi?",
        answer:
          "Può succedere, ed è meglio saperlo ora. Un indirizzo del centro di Bologna dentro una via pedonalizzata a volte si conclude con pochi minuti a piedi, chiunque guidi. Che cosa significhi per il vostro arrivo ve lo diciamo quando lo chiedete, non lo promettiamo in generale qui.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Volo, data e ciò che vi ha detto l'hotel",
    body: "Su questa tratta la terza voce è utile quanto le prime due. L'accordo d'arrivo è dell'hotel, e la risposta che possiamo darvi dipende dal conoscerlo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Sul Grand Hotel Majestic",
      page: "hotel-majestic",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── BLQ → Art Hotel Commercianti ─────────────────────────────────────── */

const commerciantiEn: RoutePage = {
  meta: {
    title: "Bologna Airport to the Art Hotel Commercianti",
    description:
      "The hotel says a car can reach it by an authorised route, once it has your number plate. What that means for an arrival from BLQ, and when to start.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Art Hotel Commercianti",
    eyebrow: "Route",
    h1: "Bologna Airport to the Art Hotel Commercianti",
    lead: "The hotel sits in a pedestrian area inside Bologna's restricted centre, and says a car can still reach it along an authorised route. That makes this the one arrival on the site where something has to be arranged before anybody leaves the airport.",
    primaryCta: "Request a quotation",
    secondaryCta: "What has to happen first",
    note: "No price, journey time or road distance appears here. The airport publishes none for a road transfer, and this page describes neither the authorised route nor a drop-off point, because the hotel publishes neither.",
  },
  lead: {
    id: "sequence",
    eyebrow: "Before you fly",
    heading: "An arrival that starts before the flight lands",
    text: "The hotel's arrangement is a sequence, and the order matters. Everything in the first three steps is the hotel's own published account; the fourth is ours.",
    steps: [
      {
        title: "The hotel tells you where it is",
        body: "It describes its own location as a pedestrian area inside the limited-traffic zone. That is the hotel's description, published on its own site, and it is unusually candid — most hotels leave a guest to find out.",
      },
      {
        title: "It says a car can still get there",
        body: "In its own words, the hotel can be reached by car along an authorised route. It does not publish what that route is, and this page does not guess at one. Nothing here says the journey is impossible, and nothing here says the last stretch must be walked.",
      },
      {
        title: "You contact reception, and it registers a plate",
        body: "The hotel asks guests to contact it for detailed instructions, and says it will note the vehicle's registration. That is the step this route turns on, and it is done by the hotel rather than by whoever is driving.",
      },
      {
        title: "Tell us what it needs, and when",
        body: "If the hotel wants a registration in advance, we need to know before the day, because a vehicle is assigned to a journey rather than to a booking form. Raise it in your request and the arrangement can be built around it instead of discovered at a gate.",
      },
    ],
    source: blqSourceEn,
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "An ordinary airport, a centre with a procedure",
    lead: "The work on this route is paperwork rather than driving, and it belongs at the far end.",
    from: {
      id: "blq",
      label: "Departure",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "The airport, and what it does not publish",
      items: [
        {
          term: "What to send",
          detail:
            "Flight number, date and scheduled arrival time, as for any airport transfer.",
        },
        {
          term: "Where you are met",
          detail:
            "Settled in the reply to your request. The airport publishes no pickup point for cars with a driver.",
        },
        {
          term: "Why the timing matters here",
          detail:
            "If the hotel needs a registration in advance, that is a thing to settle days before, not at the kerb.",
        },
      ],
    },
    to: {
      id: "commercianti",
      label: "Arrival",
      name: "Art Hotel Commercianti",
      page: "hotel-commercianti",
      linkText: "The hotel, and its published arrangement",
      items: [
        {
          term: "Via de' Pignattari 11",
          detail:
            "40124 Bologna, beside San Petronio. The hotel describes this as a pedestrian area inside the limited-traffic zone.",
        },
        {
          term: "An authorised route exists",
          detail:
            "The hotel says so, and holds the details. We do not reproduce the route, because it is not published and because it is the hotel's to give.",
        },
        {
          term: "What we will confirm",
          detail:
            "What a car can do on your date, once the hotel's current requirements are known. That is a specific answer rather than a general reassurance.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Five things, and one of them is a question for the hotel rather than for us.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The hotel name, and your booking reference if you have one.",
      "How many passengers and how much luggage.",
      "Whether reception has asked for a vehicle registration in advance.",
    ],
    note: "Ask the hotel that last question before you write to us if you can. Its answer is the difference between an arrangement that is ready on the day and one that is still being sorted out when you land.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Leaving for the airport",
    lead: "The arrangement above is published for arriving guests. Nothing equivalent is published for leaving, and this section will not invent one.",
    paragraphs: [
      "The hotel's authorised route and its plate registration are both described on its site as part of how guests get to it. Whether the same arrangement applies to a car collecting someone, and whether a registration is needed again, are questions the hotel has not answered in public \u2014 so they are questions to put to the hotel rather than facts to read here.",
      "In practice that makes a departure from this address something to settle twice over: once with the hotel, once with us. Ask reception what it requires for a departure collection, tell us the answer along with your flight and date, and the arrangement can be built on it.",
    ],
    note: "No departure route, collection point, registration deadline or walking distance is stated here. The hotel's arrangement is made for its guests and does not automatically cover a vehicle arriving on your behalf.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "The hotel in full: its own account of where it is, the authorised route, and the garage.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport, and what it publishes about ground transport.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at three strengths, and why the street decides the answer.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Most of them are about the step before the journey.",
    items: [
      {
        question: "Can a car actually reach the hotel?",
        answer:
          "The hotel says it can, along an authorised route, and it is better placed to know than we are. What this page will not do is reproduce a route the hotel does not publish, or promise that a particular vehicle may use it. Ask reception, tell us what it says, and the answer becomes specific.",
      },
      {
        question: "Does the hotel's arrangement cover your vehicle?",
        answer:
          "Not automatically. The arrangement is the hotel's, made for its guests, with a plate the hotel registers. Whether it extends to a car arriving on your behalf is a question for the hotel, and Bologna's municipal rules on private-hire access could not be read while this page was written.",
      },
      {
        question: "When should I contact the hotel?",
        answer:
          "Before the day, and ideally before you ask us. If a registration is wanted in advance, it has to be a real registration — which means knowing which vehicle is doing the journey, which is settled when the arrangement is confirmed rather than when the request is sent.",
      },
      {
        question: "Where exactly would I be dropped off?",
        answer:
          "No point is stated here, because the hotel publishes none. Where a car can stop is confirmed in the reply to your request.",
      },
      {
        question: "How long does the journey take?",
        answer:
          "No duration is quoted. The airport publishes none for a road transfer, and nor does any other source consulted.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Ask the hotel, then ask us",
    body: "On this route that order saves trouble. The hotel holds the route and registers the plate; we build the journey around what it tells you.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "About the Art Hotel Commercianti",
      page: "hotel-commercianti",
    },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const commerciantiIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Bologna all'Art Hotel Commercianti",
    description:
      "L'hotel dice che un'auto può raggiungerlo con un percorso autorizzato, una volta registrata la targa. Che cosa comporta per un arrivo dal BLQ e quando muoversi.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Art Hotel Commercianti",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Bologna all'Art Hotel Commercianti",
    lead: "L'hotel si trova in un'area pedonale dentro il centro limitato di Bologna, e dice che un'auto può comunque raggiungerlo con un percorso autorizzato. È l'unico arrivo del sito in cui qualcosa va organizzato prima ancora di lasciare l'aeroporto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa deve succedere prima",
    note: "Qui non compaiono prezzi, durate o distanze stradali. L'aeroporto non ne pubblica per un tragitto su strada, e questa pagina non descrive né il percorso autorizzato né un punto di discesa, perché l'hotel non ne pubblica.",
  },
  lead: {
    id: "sequenza",
    eyebrow: "Prima di partire",
    heading: "Un arrivo che comincia prima dell'atterraggio",
    text: "L'accordo dell'hotel è una sequenza, e l'ordine conta. I primi tre passaggi sono il resoconto pubblicato dall'hotel; il quarto è nostro.",
    steps: [
      {
        title: "L'hotel dice dove si trova",
        body: "Descrive la propria collocazione come un'area pedonale all'interno della zona a traffico limitato. È la sua descrizione, pubblicata sul suo sito, ed è insolitamente franca: la maggior parte degli alberghi lascia che sia l'ospite a scoprirlo.",
      },
      {
        title: "Dice che un'auto può comunque arrivarci",
        body: "Con parole sue, l'hotel può essere raggiunto in auto seguendo un percorso autorizzato. Non pubblica quale sia, e questa pagina non prova a indovinarlo. Qui non si dice che il viaggio sia impossibile, né che l'ultimo tratto debba per forza essere fatto a piedi.",
      },
      {
        title: "Si contatta la reception, che registra una targa",
        body: "L'hotel chiede agli ospiti di contattarlo per istruzioni dettagliate e dichiara che prenderà nota della targa del veicolo. È il passaggio su cui ruota questa tratta, ed è l'hotel a compierlo, non chi guida.",
      },
      {
        title: "Diteci che cosa serve, e quando",
        body: "Se l'hotel vuole una targa in anticipo, dobbiamo saperlo prima del giorno stesso, perché un veicolo si assegna a un viaggio e non a un modulo di prenotazione. Sollevatelo nella richiesta: l'accordo si costruirà attorno a questo invece di scoprirlo a un varco.",
      },
    ],
    source: blqSourceIt,
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Un aeroporto ordinario, un centro con una procedura",
    lead: "Su questa tratta il lavoro è burocratico più che di guida, e sta all'altro capo.",
    from: {
      id: "blq",
      label: "Partenza",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "L'aeroporto, e ciò che non pubblica",
      items: [
        {
          term: "Che cosa inviare",
          detail:
            "Numero del volo, data e orario previsto di arrivo, come per qualsiasi transfer aeroportuale.",
        },
        {
          term: "Dove vi si incontra",
          detail:
            "Si definisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcun punto di prelievo per le auto con conducente.",
        },
        {
          term: "Perché qui conta il tempismo",
          detail:
            "Se l'hotel ha bisogno di una targa in anticipo, è una cosa da sistemare giorni prima, non al marciapiede.",
        },
      ],
    },
    to: {
      id: "commercianti",
      label: "Arrivo",
      name: "Art Hotel Commercianti",
      page: "hotel-commercianti",
      linkText: "L'hotel e il suo accordo pubblicato",
      items: [
        {
          term: "Via de' Pignattari 11",
          detail:
            "40124 Bologna, accanto a San Petronio. L'hotel lo descrive come un'area pedonale dentro la zona a traffico limitato.",
        },
        {
          term: "Esiste un percorso autorizzato",
          detail:
            "Lo dice l'hotel, che ne detiene i dettagli. Noi non lo riportiamo, perché non è pubblicato e perché spetta all'hotel fornirlo.",
        },
        {
          term: "Che cosa confermeremo",
          detail:
            "Che cosa può fare un'auto nella vostra data, una volta note le richieste aggiornate dell'hotel. È una risposta precisa, non una rassicurazione generica.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Cinque cose, e una è una domanda per l'hotel più che per noi.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "Il nome dell'hotel e, se l'avete, il riferimento della prenotazione.",
      "Quanti passeggeri e quanti bagagli.",
      "Se la reception ha chiesto una targa in anticipo.",
    ],
    note: "Se potete, ponete quest'ultima domanda all'hotel prima di scriverci. La sua risposta è la differenza fra un accordo pronto il giorno stesso e uno ancora da sistemare quando atterrate.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Partire per l'aeroporto",
    lead: "L'accordo descritto sopra \u00e8 pubblicato per chi arriva. Per la partenza non ne esiste uno equivalente, e questa sezione non se lo inventer\u00e0.",
    paragraphs: [
      "Il percorso autorizzato dell'hotel e la registrazione della targa sono descritti sul suo sito come parte del modo in cui gli ospiti lo raggiungono. Se lo stesso accordo valga per un'auto che viene a prelevare qualcuno, e se serva registrare di nuovo una targa, sono domande a cui l'hotel non ha risposto pubblicamente: vanno quindi poste all'hotel, non lette qui come se fossero dati di fatto.",
      "In pratica una partenza da questo indirizzo si definisce due volte: una con l'hotel e una con noi. Chiedete alla reception che cosa richiede per un prelievo in partenza, riferiteci la risposta insieme a volo e data, e l'accordo si costruir\u00e0 su quella.",
    ],
    note: "Qui non indichiamo alcun percorso di partenza, punto di prelievo, termine per la registrazione della targa o distanza a piedi. L'accordo dell'hotel \u00e8 preso per i suoi ospiti e non copre automaticamente un veicolo che arrivi per vostro conto.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "L'hotel per esteso: come descrive la propria posizione, il percorso autorizzato e il garage.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail: "L'aeroporto e ciò che pubblica sui trasporti a terra.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Quasi tutte riguardano il passaggio che precede il viaggio.",
    items: [
      {
        question: "Un'auto può davvero arrivare all'hotel?",
        answer:
          "L'hotel dice di sì, con un percorso autorizzato, ed è più titolato di noi a saperlo. Quello che questa pagina non farà è riportare un percorso che l'hotel non pubblica, o promettere che un determinato veicolo possa usarlo. Chiedete alla reception, diteci la risposta, e l'esito diventa preciso.",
      },
      {
        question: "L'accordo dell'hotel copre il vostro veicolo?",
        answer:
          "Non automaticamente. L'accordo è dell'hotel, preso per i suoi ospiti, con una targa che registra l'hotel. Se si estenda a un'auto in arrivo per vostro conto è una domanda da porre all'hotel, e le norme comunali di Bologna sull'accesso degli NCC non sono state consultabili mentre questa pagina veniva scritta.",
      },
      {
        question: "Quando devo contattare l'hotel?",
        answer:
          "Prima del giorno stesso, e possibilmente prima di scrivere a noi. Se vuole una targa in anticipo, dev'essere una targa reale: significa sapere quale veicolo farà il viaggio, cosa che si definisce alla conferma dell'accordo e non all'invio della richiesta.",
      },
      {
        question: "Dove verrei lasciato esattamente?",
        answer:
          "Qui non indichiamo alcun punto, perché l'hotel non ne pubblica. Dove un'auto possa fermarsi si conferma nella risposta alla vostra richiesta.",
      },
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non indichiamo durate. L'aeroporto non ne pubblica per un tragitto su strada, e nemmeno le altre fonti consultate.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Prima l'hotel, poi noi",
    body: "Su questa tratta quest'ordine fa risparmiare guai. L'hotel detiene il percorso e registra la targa; noi costruiamo il viaggio su ciò che vi risponde.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Sull'Art Hotel Commercianti",
      page: "hotel-commercianti",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── BLQ → Starhotels Excelsior ───────────────────────────────────────── */

const excelsiorEn: RoutePage = {
  meta: {
    title: "Bologna Airport to the Starhotels Excelsior",
    description:
      "The airport's monorail terminates at the station this hotel faces. A transfer and the Marconi Express, set side by side without either being sold as the answer.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Starhotels Excelsior",
    eyebrow: "Route",
    h1: "Bologna Airport to the Starhotels Excelsior",
    lead: "This is the one Bologna arrival where a public service goes almost exactly where you are going. It would be dishonest to write this page without saying so, and dishonest to pretend that settles it.",
    primaryCta: "Request a quotation",
    secondaryCta: "Two ways of doing this",
    note: "No price, journey time or road distance appears here. The airport publishes no road figure, the hotel's own distance to the airport is unconfirmed by any authority, and neither is repeated on this site.",
  },
  lead: {
    id: "options",
    eyebrow: "Two options, honestly compared",
    heading: "A transfer, and the airport's monorail",
    text: "Both are real. Which suits you depends on what you are carrying, what hour you land, and how many of you there are — not on which one this page would rather sell.",
    columns: [
      {
        id: "transfer",
        heading: "A private transfer",
        subheading: "What it answers",
        rows: [
          {
            term: "A vehicle for your party",
            detail:
              "One car, one journey, with your luggage in it. No platform, no change, and no queue with a suitcase in each hand.",
          },
          {
            term: "Timed to your flight",
            detail:
              "Arranged around your scheduled arrival rather than around a service pattern. Send the flight number and the date with your request.",
          },
          {
            term: "Useful at awkward hours",
            detail:
              "Public services keep hours; an arrangement made in advance does not have to. What the airport publishes about the monorail's own hours is on its site.",
          },
          {
            term: "An enquiry, not a booking",
            detail:
              "Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement. The airport publishes no pickup point for private hire, so that is settled in the reply.",
          },
        ],
      },
      {
        id: "monorail",
        heading: "The Marconi Express",
        subheading: "What it answers",
        rows: [
          {
            term: "It goes where you are going",
            detail:
              "The airport describes it as the monorail connecting the airport to Bologna central station. The hotel says the stop is right in front of it. Two independent publishers, the same fact.",
          },
          {
            term: "It is quick",
            detail:
              "The airport states a seven-minute ride, with a train every seven to fifteen minutes. That is its own figure for its own service.",
          },
          {
            term: "Two stations, no more",
            detail:
              "Airport terminal and Bologna train station. No intermediate stops, which is what makes it fast and also what limits where it can take you.",
          },
          {
            term: "What it does not do",
            detail:
              "Carry your bags for you, or wait if your flight is late. For a light traveller at a reasonable hour that may not matter. With a family and four cases at midnight, it might.",
          },
        ],
      },
    ],
    source: blqSourceEn,
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "The simplest pair in the cluster",
    lead: "Neither end of this journey has an access problem we could find — and that is said carefully, because nobody publishes the answer either way.",
    from: {
      id: "blq",
      label: "Departure",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "The airport, and its monorail",
      items: [
        {
          term: "What to send",
          detail: "Flight number, date and scheduled arrival time.",
        },
        {
          term: "Where you are met",
          detail:
            "Settled in the reply to your request. The airport publishes no pickup point for cars with a driver.",
        },
        {
          term: "The monorail starts here too",
          detail:
            "If you decide the train suits you better, that is a perfectly good outcome and the airport's own pages explain it.",
        },
      ],
    },
    to: {
      id: "excelsior",
      label: "Arrival",
      name: "Starhotels Excelsior",
      page: "hotel-excelsior",
      linkText: "The hotel, and what nobody publishes about its street",
      items: [
        {
          term: "Viale Pietramellara, 51",
          detail:
            "40121 Bologna. The hotel describes itself as opposite the railway station.",
        },
        {
          term: "No zone claim is made",
          detail:
            "Whether this address lies inside or outside Bologna's limited-traffic zone is not established by any source we could read, and this page does not assert either.",
        },
        {
          term: "No distance is published",
          detail:
            "The hotel states a figure to the airport; no authority confirms it, so it is not repeated here.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Four things. This is the shortest list in the Bologna cluster.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "How many passengers and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "No hotel-specific arrangement is needed for this address, which is not something that can be said of the other two Bologna hotels on this site.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Leaving for the airport",
    lead: "The comparison above works in reverse too \u2014 with one difference that only matters on the way out.",
    paragraphs: [
      "The monorail keeps hours. Its operator publishes a service window running from 5:40 in the morning until midnight, with a train roughly every seven minutes at peak times and every fifteen minutes when it is quieter. Between midnight and 5:40 the operator says bus line Q covers the same link between the airport and the central station.",
      "That is the whole of the difference, and it is a real one. An early flight can want you at the airport before the monorail has started, and a late one can land you back after it has stopped \u2014 neither of which arises when you are arriving on your own schedule. If your departure falls outside the window, or close to either end of it, a car arranged in advance stops being a preference and starts being the practical option.",
      "Inside the window, the honest position is the one already on this page: for a light traveller leaving at a civil hour from a hotel facing the station, the train is hard to beat. Which suits you depends on your flight time and what you are carrying, not on what we would rather you chose.",
    ],
    note: "Service times are the operator's and can change; check its timetable for your own date. No road journey time is published for this route in either direction, so no departure lead time is suggested here \u2014 send your flight details and the margin can be planned around them.",
    source: {
      text: "Service hours and frequency are published by Marconi Express S.p.A., the line's operator, and were read on 27 October 2026. Times change; check the operator's own timetable for your date. No road journey time, fare or distance appears on this page, because none is published:",
      linkText: "Marconi Express publishes its own timetable",
      href: "https://www.marconiexpress.it/en/timetable/",
    },
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "hotel-excelsior",
        label: "Starhotels Excelsior",
        detail:
          "The hotel in full: three ways in, and what nobody publishes about its street.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport, generous about its monorail and silent about private hire.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at three strengths, and why the street decides the answer.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Beginning with the one a transfer company is least keen to answer.",
    items: [
      {
        question: "Should I just take the Marconi Express?",
        answer:
          "Quite possibly, and it depends on your circumstances rather than on ours. It goes to the station this hotel faces, the airport states a seven-minute ride, and for a light traveller at a civil hour that is hard to improve on. What it does not do is carry your luggage to a door or wait when a flight is late — which is what a transfer is for. Weigh the two rather than assume either.",
      },
      {
        question: "How long does the transfer take by road?",
        answer:
          "No duration is quoted. The airport publishes none for a road journey and no other source consulted does either. The seven-minute figure above is the airport's own, for the monorail, and is not a road journey time.",
      },
      {
        question: "How far is the hotel from the airport?",
        answer:
          "No distance is published here. The hotel states one; no authority confirms it, and this site does not repeat unverified numbers for journeys people plan flight connections around.",
      },
      {
        question: "Is the hotel inside the ZTL?",
        answer:
          "We do not know. The Comune's own rules could not be read, and the hotel's site does not mention the zone — it publishes ordinary motorway directions with no restriction noted, which is suggestive and not an answer.",
      },
      {
        question: "Where will the driver meet me at the airport?",
        answer:
          "Settled in the reply to your request. The airport publishes no pickup arrangement for cars with a driver, so nothing is described here as though it were fixed.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight, time, and how much you are carrying",
    body: "On this route the last of those decides more than anything else — including whether you need us at all, which is a question worth asking before you book anybody.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "About the Starhotels Excelsior",
      page: "hotel-excelsior",
    },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const excelsiorIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Bologna allo Starhotels Excelsior",
    description:
      "La monorotaia dell'aeroporto arriva alla stazione di fronte a questo hotel. Un transfer e il Marconi Express, affiancati senza vendere né l'uno né l'altro.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Bologna Marconi (BLQ)",
    to: "Starhotels Excelsior",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Bologna allo Starhotels Excelsior",
    lead: "È l'unico arrivo bolognese in cui un servizio pubblico va quasi esattamente dove dovete andare. Scrivere questa pagina senza dirlo sarebbe disonesto; far finta che questo chiuda la questione, altrettanto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Due modi di farlo",
    note: "Qui non compaiono prezzi, durate o distanze stradali. L'aeroporto non pubblica dati sul tragitto su strada, la distanza dall'aeroporto indicata dall'hotel non è confermata da alcun ente, e nessuna delle due viene ripetuta su questo sito.",
  },
  lead: {
    id: "opzioni",
    eyebrow: "Due opzioni, confrontate onestamente",
    heading: "Un transfer e la monorotaia dell'aeroporto",
    text: "Sono entrambe reali. Quale vi convenga dipende da che cosa portate, a che ora atterrate e in quanti siete — non da quale delle due questa pagina preferirebbe vendervi.",
    columns: [
      {
        id: "transfer",
        heading: "Un transfer privato",
        subheading: "A che cosa risponde",
        rows: [
          {
            term: "Un veicolo per il vostro gruppo",
            detail:
              "Un'auto, un viaggio, con i vostri bagagli a bordo. Niente binari, niente cambi, niente coda con una valigia per mano.",
          },
          {
            term: "Sull'orario del vostro volo",
            detail:
              "Organizzato sull'orario previsto di arrivo e non su una frequenza di servizio. Inviate numero del volo e data con la richiesta.",
          },
          {
            term: "Utile alle ore scomode",
            detail:
              "I servizi pubblici hanno orari; un accordo preso in anticipo non è obbligato ad averne. Gli orari della monorotaia li pubblica l'aeroporto sul proprio sito.",
          },
          {
            term: "Una richiesta, non una prenotazione",
            detail:
              "Nulla è organizzato finché non ricevete una risposta con veicolo, prezzo e modalità d'incontro. L'aeroporto non pubblica alcun punto di prelievo per il noleggio con conducente: si definisce nella risposta.",
          },
        ],
      },
      {
        id: "monorotaia",
        heading: "Il Marconi Express",
        subheading: "A che cosa risponde",
        rows: [
          {
            term: "Va dove dovete andare",
            detail:
              "L'aeroporto lo descrive come la monorotaia che collega lo scalo alla stazione centrale di Bologna. L'hotel dice che la fermata gli è proprio davanti. Due fonti indipendenti, lo stesso dato.",
          },
          {
            term: "È rapido",
            detail:
              "L'aeroporto dichiara un percorso di sette minuti, con una corsa ogni sette-quindici minuti. È il suo dato, per il suo servizio.",
          },
          {
            term: "Due stazioni, non una di più",
            detail:
              "Terminal aeroportuale e stazione di Bologna. Nessuna fermata intermedia: è ciò che lo rende veloce ed è anche ciò che limita dove può portarvi.",
          },
          {
            term: "Che cosa non fa",
            detail:
              "Portarvi i bagagli, o aspettare se il volo è in ritardo. Per chi viaggia leggero a un'ora ragionevole può non contare. Con una famiglia e quattro valigie a mezzanotte, può contare parecchio.",
          },
        ],
      },
    ],
    source: blqSourceIt,
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "La coppia più semplice della sezione",
    lead: "Nessuno dei due capi di questo viaggio presenta un problema d'accesso che abbiamo potuto riscontrare — e lo diciamo con cautela, perché nessuno pubblica la risposta in un senso o nell'altro.",
    from: {
      id: "blq",
      label: "Partenza",
      name: "Bologna Guglielmo Marconi",
      page: "blq",
      linkText: "L'aeroporto e la sua monorotaia",
      items: [
        {
          term: "Che cosa inviare",
          detail: "Numero del volo, data e orario previsto di arrivo.",
        },
        {
          term: "Dove vi si incontra",
          detail:
            "Si definisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcun punto di prelievo per le auto con conducente.",
        },
        {
          term: "Anche la monorotaia parte da qui",
          detail:
            "Se decidete che il treno vi conviene di più, è un esito del tutto accettabile e le pagine dell'aeroporto lo spiegano.",
        },
      ],
    },
    to: {
      id: "excelsior",
      label: "Arrivo",
      name: "Starhotels Excelsior",
      page: "hotel-excelsior",
      linkText: "L'hotel, e ciò che nessuno pubblica sulla sua via",
      items: [
        {
          term: "Viale Pietramellara, 51",
          detail:
            "40121 Bologna. L'hotel si descrive come situato di fronte alla stazione ferroviaria.",
        },
        {
          term: "Non facciamo affermazioni sulla zona",
          detail:
            "Se questo indirizzo ricada dentro o fuori dalla zona a traffico limitato di Bologna non è stabilito da alcuna fonte che abbiamo potuto leggere, e questa pagina non afferma né l'una né l'altra cosa.",
        },
        {
          term: "Non pubblichiamo distanze",
          detail:
            "L'hotel indica un proprio dato verso l'aeroporto; nessun ente lo conferma, perciò qui non lo ripetiamo.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Quattro cose. È l'elenco più breve della sezione bolognese.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "Per questo indirizzo non serve alcun accordo specifico con l'hotel: non è una cosa che si possa dire degli altri due hotel bolognesi presenti su questo sito.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Partire per l'aeroporto",
    lead: "Il confronto qui sopra vale anche al contrario, con una differenza che conta solo in partenza.",
    paragraphs: [
      "La monorotaia ha i suoi orari. L'operatore pubblica un servizio attivo dalle 5.40 del mattino a mezzanotte, con una corsa all'incirca ogni sette minuti nelle ore di punta e ogni quindici quando c'\u00e8 meno affluenza. Fra mezzanotte e le 5.40 l'operatore indica la linea bus Q a coprire lo stesso collegamento fra aeroporto e stazione centrale.",
      "La differenza \u00e8 tutta qui, ed \u00e8 concreta. Un volo molto presto pu\u00f2 richiedervi in aeroporto prima che la monorotaia abbia cominciato, e uno molto tardi pu\u00f2 riportarvi dopo che ha smesso: cose che all'arrivo, quando l'orario lo decidete voi, non si pongono. Se la vostra partenza cade fuori da quella fascia, o vicino a uno dei due estremi, un'auto concordata in anticipo smette di essere una preferenza e diventa la soluzione pratica.",
      "Dentro la fascia oraria, la posizione onesta resta quella gi\u00e0 scritta in questa pagina: per chi viaggia leggero e parte a un'ora civile da un hotel di fronte alla stazione, il treno \u00e8 difficile da battere. Quale convenga dipende dall'orario del volo e da quanto portate, non da che cosa preferiremmo noi.",
    ],
    note: "Gli orari del servizio sono dell'operatore e possono cambiare: verificate il suo orario per la vostra data. Per questa tratta non \u00e8 pubblicato alcun tempo di percorrenza su strada in nessuna delle due direzioni, perci\u00f2 qui non suggeriamo un anticipo: inviateci i dati del volo e il margine si pianifica su quelli.",
    source: {
      text: "Orari e frequenza sono pubblicati da Marconi Express S.p.A., che gestisce la linea, e sono stati consultati il 27 ottobre 2026. Gli orari cambiano: verificate l'orario ufficiale dell'operatore per la vostra data. Su questa pagina non compaiono tempi di percorrenza su strada, tariffe o distanze, perch\u00e9 non ne sono pubblicate:",
      linkText: "Marconi Express pubblica il proprio orario",
      href: "https://www.marconiexpress.it/it/orari/",
    },
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "hotel-excelsior",
        label: "Starhotels Excelsior",
        detail:
          "L'hotel per esteso: tre modi per arrivarci e ciò che nessuno pubblica sulla sua via.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail:
          "L'aeroporto, generoso sulla monorotaia e silenzioso sul noleggio con conducente.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "A partire da quella a cui una società di transfer risponde meno volentieri.",
    items: [
      {
        question: "Non conviene semplicemente prendere il Marconi Express?",
        answer:
          "Molto probabilmente sì, e dipende dalla vostra situazione più che dalla nostra. Arriva alla stazione di fronte a questo hotel, l'aeroporto dichiara un percorso di sette minuti, e per chi viaggia leggero a un'ora civile è difficile fare meglio. Quello che non fa è portare i bagagli a una porta o aspettare quando un volo ritarda: a questo serve un transfer. Valutate le due cose invece di darne una per scontata.",
      },
      {
        question: "Quanto dura il transfer su strada?",
        answer:
          "Non indichiamo durate. L'aeroporto non ne pubblica per un tragitto su strada e nemmeno le altre fonti consultate. I sette minuti citati sopra sono il dato dell'aeroporto per la monorotaia, non un tempo di percorrenza stradale.",
      },
      {
        question: "Quanto dista l'hotel dall'aeroporto?",
        answer:
          "Qui non pubblichiamo distanze. L'hotel ne indica una; nessun ente la conferma, e questo sito non ripete numeri non verificati per tragitti attorno a cui si pianificano coincidenze aeree.",
      },
      {
        question: "L'hotel è dentro la ZTL?",
        answer:
          "Non lo sappiamo. Le norme del Comune non sono state consultabili e il sito dell'hotel non cita la zona: pubblica normali indicazioni autostradali senza segnalare limitazioni, il che è un indizio e non una risposta.",
      },
      {
        question: "Dove mi aspetta l'autista in aeroporto?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcuna modalità di prelievo per le auto con conducente: qui non ne descriviamo nessuna come se fosse fissata.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Volo, orario e quanto portate",
    body: "Su questa tratta è l'ultimo punto a decidere più di ogni altro — compreso se vi serviamo davvero, domanda che conviene porsi prima di prenotare chiunque.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Sullo Starhotels Excelsior",
      page: "hotel-excelsior",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeBlqMajestic: Record<Locale, RoutePage> = {
  en: majesticEn,
  it: majesticIt,
};
export const routeBlqCommercianti: Record<Locale, RoutePage> = {
  en: commerciantiEn,
  it: commerciantiIt,
};
export const routeBlqExcelsior: Record<Locale, RoutePage> = {
  en: excelsiorEn,
  it: excelsiorIt,
};
