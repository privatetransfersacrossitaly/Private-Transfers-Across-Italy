import type { Locale } from "@/lib/site";
import type { RoutePage } from "@/content/page-types";

/**
 * The Sicily airport routes: Catania → Taormina, Catania → Syracuse/Ortigia,
 * Palermo → Cefalù. Added 18 November 2026.
 *
 * ── What each page owns ───────────────────────────────────────────────────
 * The Sicily keyword table (docs/sicily-cluster-plan.md) gives the town
 * pages their town queries and forbids them airport queries; it gives the
 * airport pages "<airport> transfers" and forbids them town queries. The
 * "<airport> to <town>" query sat between the two, owned by nobody. Each page
 * here owns exactly that query and nothing else: it does not describe the
 * town (the town page does) or the airport (the airport page does). It
 * describes the journey between them — the two ends meeting, which is the
 * argument every route page in this project is built on.
 *
 * ── Facts, and the facts deliberately absent ──────────────────────────────
 * Every factual statement is one the cluster has already published with a
 * source behind it: Fontanarossa's 4.3 km, operator, passenger figure and
 * three terminals; Falcone Borsellino at Cinisi, about 35 km from Palermo;
 * Taormina's 250 m and restricted centre; Ortigia's two bridges and changing
 * access rules; Cefalù's 70 km from Palermo by its own entry. As on every
 * Sicily page: no journey times, no road distances beyond those, no prices,
 * no vehicle or fleet claims, no availability promises.
 *
 * ── Leading modules, so the three are not one page three times ───────────
 *   Taormina  two columns — the town above vs the coast below, because the
 *             address decides which arrival it is
 *   Syracuse  two columns — Ortigia vs the mainland, because the bridge
 *             decides the ending
 *   Cefalù    numbered steps — the airport is already west of Palermo, so the
 *             journey is a sequence across the city and along the coast
 */

/* ── Catania Airport → Taormina ────────────────────────────────────────── */

const ctaTaorminaEn: RoutePage = {
  meta: {
    title: "Catania Airport to Taormina Transfer – Book a Private Car",
    description:
      "A private car from Catania Fontanarossa to Taormina: meeting at the terminal, the coast road north, and arriving in a town 250 m up with a restricted centre.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Catania Airport (CTA)",
    to: "Taormina",
    eyebrow: "Route",
    h1: "Catania Airport to Taormina",
    lead: "The most requested journey out of Fontanarossa, and one where the drive is the easy part. Taormina sits about 250 metres above the sea with a restricted centre, and a great many properties sold under its name are down on the shore. Which of the two you are going to decides how the journey ends.",
    primaryCta: "Request a quote",
    secondaryCta: "About Catania Airport",
    note: "We arrange these transfers with licensed local transfer companies and drivers; we do not own vehicles or employ the drivers directly. No price, journey time or road distance appears here: the operator confirms the routing, and the price comes to you in writing before anything is confirmed.",
    photo: "taormina-teatro-greco",
  },
  lead: {
    id: "two-arrivals",
    eyebrow: "What makes this route different",
    heading: "Two Taorminas, one booking name",
    text: "Up in the town or down by the sea: the address settles which arrival this is, and the difference matters more than anything about the road.",
    columns: [
      {
        id: "town",
        heading: "Up in the town",
        subheading: "About 250 m above the Ionian",
        rows: [
          {
            term: "The centre",
            detail: "A limited-traffic zone, with Corso Umberto largely given over to people on foot. A vehicle cannot simply drive to a door inside it and stop.",
          },
          {
            term: "Who arranges access",
            detail: "Properties inside the restricted area can often register a vehicle in advance with the authorities. The hotel arranges that, not the driver and not us — ask them when you book.",
          },
          {
            term: "If it cannot be arranged",
            detail: "The drop-off is at the edge of the zone and the last stretch is on foot, sometimes uphill. With several cases, that is the part to plan for.",
          },
        ],
      },
      {
        id: "shore",
        heading: "Down by the sea",
        subheading: "Sold as Taormina, reached by road",
        rows: [
          {
            term: "Isola Bella and the shore",
            detail: "The nature reserve and the coast just below the town, connected to it by an aerial tramway built in 1992 or by road down the hillside.",
          },
          {
            term: "Giardini Naxos",
            detail: "The resort further south beside its bay. Many people \"staying in Taormina\" are in fact here, at sea level — a much simpler arrival than the town.",
          },
          {
            term: "What settles it",
            detail: "The full address, not the town name. Send it with the request and the driver goes to the right altitude.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead: "Fontanarossa is a large airport with more than one terminal; Taormina is a small town on a hillside. Each end has its own question.",
    from: {
      id: "cta",
      label: "Pickup",
      name: "Catania Fontanarossa (CTA)",
      page: "catania-airport",
      linkText: "About Catania Airport",
      items: [
        {
          term: "Which terminal",
          detail: "Terminals B and C opened in 2018 beside the original Terminal A, and C is used only by easyJet. The flight number tells the driver which hall to wait in.",
        },
        {
          term: "Being met",
          detail: "The driver waits in arrivals with a name board. Tell us the surname exactly as it will be written, because that is how two people find each other in a crowded hall.",
        },
        {
          term: "Delays",
          detail: "With the flight number, a delay or a diversion is seen as it happens rather than discovered on landing. It is the single most useful detail in the request.",
        },
      ],
    },
    to: {
      id: "taormina",
      label: "Drop-off",
      name: "Taormina",
      page: "taormina",
      linkText: "Transfers in Taormina",
      items: [
        {
          term: "The hotel name",
          detail: "Send it as well as the street. In Taormina it decides where the vehicle is allowed to stop, and the property is usually the only one who can arrange otherwise.",
        },
        {
          term: "Town or coast",
          detail: "An address in the old town and one at Isola Bella or Giardini Naxos are different arrivals with different stopping points, though all are sold as Taormina.",
        },
        {
          term: "Luggage",
          detail: "Where the last stretch is on foot, the number of cases is a real constraint. Count everything that will not fold.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send with the request",
    lead: "Enough to match a vehicle and a meeting point to your arrival, and the ending to your address.",
    items: [
      "The flight number and the date, so the arrival can be followed.",
      "The full address in or near Taormina, with the name of the hotel or villa.",
      "Whether the property has said it can register a vehicle for the restricted centre.",
      "How many adults and children, and the ages of any children.",
      "How many suitcases and cabin bags, and anything bulky such as a pushchair or golf clubs.",
      "Whether you also need the journey back to the airport, and your departure flight.",
    ],
    note: "Whether a particular vehicle, child seat or accessible vehicle can be provided is answered in the reply, not promised here.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Back to Catania Airport",
    lead: "The same road in the other direction, with the airport's check-in times as the deadline.",
    paragraphs: [
      "For the return, the departure flight is what the pickup time is worked back from. Tell us the flight and the time it leaves when you ask, and the reply sets out when and where the driver will collect you — we do not print a lead time here, because it depends on the hour, the season and the address.",
      "If your hotel is inside the restricted centre, the collection point is usually the same edge you were dropped at, unless the property arranges access again. Ask them when you check in rather than on the morning you leave.",
    ],
    note: "Booking the outward and return journeys together in one request is the simplest way to have both confirmed in the same written reply.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "taormina",
        label: "Private transfers in Taormina",
        detail: "The town in full: where a car can stop, the coast below, and the day trips from it.",
      },
      {
        page: "catania-airport",
        label: "Catania Airport (CTA)",
        detail: "The terminals, being met, and every route out of Fontanarossa.",
      },
      {
        page: "route-cta-syracuse",
        label: "Catania Airport to Syracuse",
        detail: "The same airport, the other direction: south to Ortigia.",
      },
      {
        page: "messina-cruise-port",
        label: "Messina cruise port",
        detail: "If you are arriving by ship rather than by air, for a day in Taormina.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about the arrival end, because that is where this route differs.",
    items: [
      {
        question: "How long does the transfer from Catania Airport to Taormina take?",
        answer: "We do not publish a journey time. The figures in circulation come from route planners that disagree with one another, and the coast road in August is not the coast road in March. The operator confirms the routing when we quote, based on your date and time.",
      },
      {
        question: "Can the car take me to my hotel door in Taormina?",
        answer: "It depends on the hotel. The historic centre is a limited-traffic zone, and properties inside it can often register a vehicle in advance. If yours can, the arrival is straightforward; if not, the drop-off is at the edge of the zone and the last stretch is on foot.",
      },
      {
        question: "My hotel says Taormina but is by the sea. Does that change anything?",
        answer: "Yes, for the better. Properties at Isola Bella, on the shore below the town or at Giardini Naxos are ordinary addresses a car can reach. Send the full address so the driver goes to the right one.",
      },
      {
        question: "Which terminal will I arrive at?",
        answer: "Catania has Terminals A, B and C, and Terminal C is used only by easyJet. Send the flight number and the driver will wait in the right arrivals hall.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "With the flight number, the delay is followed as it happens. That is why we ask for it rather than the scheduled arrival time.",
      },
      {
        question: "Can I book the return journey to the airport at the same time?",
        answer: "Yes. Include the departure flight and its time in the same request, and both journeys are set out in one written reply.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight number, hotel, and how many of you",
    body: "Send the flight, the full Taormina address with the hotel's name, and the passengers and luggage. We reply in writing with the vehicle, the price and where you will be met.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "About Catania Airport", page: "catania-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const ctaTaorminaIt: RoutePage = {
  meta: {
    title: "Transfer aeroporto Catania–Taormina – Prenota l'autista",
    description:
      "Auto privata da Catania Fontanarossa a Taormina: l'incontro al terminal, la strada costiera verso nord e l'arrivo in un paese a 250 m con centro limitato.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Catania (CTA)",
    to: "Taormina",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Catania a Taormina",
    lead: "Il tragitto più richiesto da Fontanarossa, e uno in cui la strada è la parte facile. Taormina è a circa 250 metri sul mare con un centro a traffico limitato, e moltissime strutture vendute con il suo nome si trovano giù sulla costa. Quale delle due sia la vostra decide come finisce il viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Catania",
    note: "Organizziamo questi transfer con aziende e autisti locali autorizzati; non possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non compaiono prezzi, tempi di percorrenza o distanze stradali: l'operatore conferma il percorso, e il prezzo vi arriva per iscritto prima che qualsiasi cosa sia confermata.",
    photo: "taormina-teatro-greco",
  },
  lead: {
    id: "due-arrivi",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Due Taormine, un solo nome sulla prenotazione",
    text: "In paese o in riva al mare: è l'indirizzo a stabilire quale arrivo sia, e la differenza conta più di qualsiasi cosa sulla strada.",
    columns: [
      {
        id: "paese",
        heading: "Su in paese",
        subheading: "A circa 250 m sullo Ionio",
        rows: [
          {
            term: "Il centro",
            detail: "Una zona a traffico limitato, con Corso Umberto in gran parte pedonale. Un veicolo non può semplicemente arrivare a un portone del centro e fermarsi.",
          },
          {
            term: "Chi organizza l'accesso",
            detail: "Le strutture dentro l'area limitata possono spesso registrare un veicolo in anticipo presso le autorità. Lo fa l'hotel, non l'autista e non noi: chiedetelo quando prenotate.",
          },
          {
            term: "Se non è possibile",
            detail: "La discesa avviene al limite della zona e l'ultimo tratto è a piedi, a volte in salita. Con diverse valigie, è la parte da pianificare.",
          },
        ],
      },
      {
        id: "costa",
        heading: "Giù in riva al mare",
        subheading: "Venduto come Taormina, raggiungibile su strada",
        rows: [
          {
            term: "Isola Bella e la costa",
            detail: "La riserva naturale e la costa appena sotto il paese, collegate a esso da una funivia costruita nel 1992 o dalla strada che scende lungo il versante.",
          },
          {
            term: "Giardini Naxos",
            detail: "La località balneare più a sud, sulla sua baia. Molti di quelli che \"alloggiano a Taormina\" sono in realtà qui, al livello del mare: un arrivo molto più semplice.",
          },
          {
            term: "Che cosa lo decide",
            detail: "L'indirizzo completo, non il nome del paese. Indicatelo nella richiesta e l'autista andrà alla quota giusta.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead: "Fontanarossa è un grande aeroporto con più di un terminal; Taormina è un piccolo paese su un versante. Ognuno dei due capi pone la sua domanda.",
    from: {
      id: "cta",
      label: "Partenza",
      name: "Catania Fontanarossa (CTA)",
      page: "catania-airport",
      linkText: "Sull'aeroporto di Catania",
      items: [
        {
          term: "Quale terminal",
          detail: "I Terminal B e C sono stati aperti nel 2018 accanto al Terminal A originario, e il C è usato solo da easyJet. Il numero di volo dice all'autista in quale sala aspettare.",
        },
        {
          term: "L'incontro",
          detail: "L'autista aspetta agli arrivi con un cartello nominativo. Indicateci il cognome esattamente come sarà scritto: è così che due persone si trovano in una sala affollata.",
        },
        {
          term: "Ritardi",
          detail: "Con il numero di volo, un ritardo o un dirottamento si vede mentre accade invece di scoprirlo all'atterraggio. È il dato più utile della richiesta.",
        },
      ],
    },
    to: {
      id: "taormina",
      label: "Arrivo",
      name: "Taormina",
      page: "taormina",
      linkText: "Transfer a Taormina",
      items: [
        {
          term: "Il nome dell'hotel",
          detail: "Indicatelo insieme alla via. A Taormina decide dove il veicolo può fermarsi, e di solito solo la struttura può organizzare diversamente.",
        },
        {
          term: "Paese o costa",
          detail: "Un indirizzo nel centro storico e uno a Isola Bella o a Giardini Naxos sono arrivi diversi, con punti di sosta diversi, anche se tutti venduti come Taormina.",
        },
        {
          term: "Bagagli",
          detail: "Dove l'ultimo tratto è a piedi, il numero di valigie è un vincolo reale. Contate tutto ciò che non si piega.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare nella richiesta",
    lead: "Quanto basta per abbinare un veicolo e un punto d'incontro al vostro arrivo, e la conclusione al vostro indirizzo.",
    items: [
      "Il numero di volo e la data, perché l'arrivo possa essere seguito.",
      "L'indirizzo completo a Taormina o nei dintorni, con il nome dell'hotel o della villa.",
      "Se la struttura vi ha detto di poter registrare un veicolo per il centro limitato.",
      "Quanti adulti e bambini, e l'età dei bambini.",
      "Quante valigie e quanti bagagli a mano, e qualsiasi cosa ingombrante come un passeggino o una sacca da golf.",
      "Se vi serve anche il ritorno in aeroporto, e il volo di partenza.",
    ],
    note: "Se un determinato veicolo, un seggiolino o un veicolo accessibile siano disponibili viene indicato nella risposta, non promesso qui.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Di nuovo all'aeroporto di Catania",
    lead: "La stessa strada nell'altra direzione, con gli orari del check-in come scadenza.",
    paragraphs: [
      "Per il ritorno, è dal volo di partenza che si ricava l'orario di prelievo. Indicateci il volo e l'ora in cui parte quando scrivete, e la risposta vi dirà quando e dove passerà l'autista: qui non indichiamo un anticipo, perché dipende dall'ora, dalla stagione e dall'indirizzo.",
      "Se l'hotel è dentro il centro limitato, il punto di prelievo è di solito lo stesso limite dove siete scesi, a meno che la struttura non organizzi di nuovo l'accesso. Chiedetelo al check-in, non la mattina della partenza.",
    ],
    note: "Chiedere andata e ritorno nella stessa richiesta è il modo più semplice per averli confermati entrambi nella stessa risposta scritta.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "taormina",
        label: "Transfer privati a Taormina",
        detail: "Il paese per esteso: dove un'auto può fermarsi, la costa sottostante e le gite in giornata.",
      },
      {
        page: "catania-airport",
        label: "Aeroporto di Catania (CTA)",
        detail: "I terminal, l'incontro e tutte le tratte in partenza da Fontanarossa.",
      },
      {
        page: "route-cta-syracuse",
        label: "Dall'aeroporto di Catania a Siracusa",
        detail: "Lo stesso aeroporto, nell'altra direzione: a sud verso Ortigia.",
      },
      {
        page: "messina-cruise-port",
        label: "Porto crociere di Messina",
        detail: "Se arrivate in nave invece che in aereo, per una giornata a Taormina.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Soprattutto sull'arrivo, perché è lì che questa tratta è diversa.",
    items: [
      {
        question: "Quanto dura il transfer dall'aeroporto di Catania a Taormina?",
        answer: "Non pubblichiamo un tempo di percorrenza. I dati in circolazione vengono da calcolatori di percorso che non concordano tra loro, e la strada costiera ad agosto non è quella di marzo. L'operatore conferma il percorso quando prepariamo il preventivo, in base a data e ora.",
      },
      {
        question: "L'auto può portarmi fino alla porta dell'hotel a Taormina?",
        answer: "Dipende dall'hotel. Il centro storico è una zona a traffico limitato, e le strutture al suo interno possono spesso registrare un veicolo in anticipo. Se la vostra può farlo, l'arrivo è semplice; altrimenti la discesa avviene al limite della zona e l'ultimo tratto è a piedi.",
      },
      {
        question: "Il mio hotel dice Taormina ma è sul mare. Cambia qualcosa?",
        answer: "Sì, in meglio. Le strutture a Isola Bella, sulla costa sotto il paese o a Giardini Naxos sono indirizzi normali che un'auto raggiunge. Indicate l'indirizzo completo perché l'autista vada a quello giusto.",
      },
      {
        question: "In quale terminal arriverò?",
        answer: "Catania ha i Terminal A, B e C, e il Terminal C è usato solo da easyJet. Indicate il numero di volo e l'autista vi aspetterà nella sala arrivi giusta.",
      },
      {
        question: "Che cosa succede se il volo è in ritardo?",
        answer: "Con il numero di volo, il ritardo viene seguito mentre accade. Per questo chiediamo il volo e non l'orario di arrivo previsto.",
      },
      {
        question: "Posso prenotare insieme anche il ritorno in aeroporto?",
        answer: "Sì. Indicate il volo di partenza e il suo orario nella stessa richiesta, e entrambi i viaggi saranno descritti in un'unica risposta scritta.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Numero di volo, hotel e quanti siete",
    body: "Indicate il volo, l'indirizzo completo a Taormina con il nome dell'hotel, i passeggeri e i bagagli. Vi rispondiamo per iscritto con il veicolo, il prezzo e il punto d'incontro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sull'aeroporto di Catania", page: "catania-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Catania Airport → Syracuse / Ortigia ──────────────────────────────── */

const ctaSyracuseEn: RoutePage = {
  meta: {
    title: "Catania Airport to Syracuse Transfer – Book Your Driver",
    description:
      "A private car from Catania Fontanarossa to Syracuse and Ortigia: being met at the terminal, the run south, and arriving on an island with restricted access.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Catania Airport (CTA)",
    to: "Syracuse and Ortigia",
    eyebrow: "Route",
    h1: "Catania Airport to Syracuse and Ortigia",
    lead: "There is no airport closer to Syracuse than Catania, so almost everyone arrives this way. The run south is ordinary. The ending is not: Syracuse is a mainland city plus Ortigia, the island that is its historic centre, and which side of the water your address is on decides how the journey ends.",
    primaryCta: "Request a quote",
    secondaryCta: "About Catania Airport",
    note: "We arrange these transfers with licensed local transfer companies and drivers; we do not own vehicles or employ the drivers directly. No price, journey time or road distance appears here: the operator confirms the routing, and the price comes to you in writing before anything is confirmed.",
    photo: "ortigia-temple-of-apollo",
  },
  lead: {
    id: "which-side",
    eyebrow: "What makes this route different",
    heading: "Which side of the bridge",
    text: "The island and the mainland city share a name and a postcode prefix, and almost nothing else that matters to a car.",
    columns: [
      {
        id: "ortigia",
        heading: "On Ortigia",
        subheading: "The historic centre, reached by two bridges",
        rows: [
          {
            term: "Getting across",
            detail: "Ortigia is joined to the city by the Ponte Umbertino and the Ponte Santa Lucia. Which a vehicle may use, and in which direction, has been changed by the comune more than once.",
          },
          {
            term: "Access",
            detail: "Restricted for non-residents, and tightened in stages. The drop-off point for an island address is confirmed by the operator close to the day, against the rules in force then.",
          },
          {
            term: "Your hotel's part",
            detail: "A property on the island is often the only party that can arrange access for a vehicle, usually by registering it in advance. Ask when you book.",
          },
        ],
      },
      {
        id: "mainland",
        heading: "On the mainland",
        subheading: "Ordinary streets, ordinary stopping",
        rows: [
          {
            term: "Addresses off the island",
            detail: "They behave normally: a car reaches the door. The archaeological park and the hotels on that side of the water are easy arrivals.",
          },
          {
            term: "If you are choosing a room",
            detail: "Travelling heavy, an address on the mainland side makes the last few hundred metres a non-question. Worth knowing before you book.",
          },
          {
            term: "What settles it",
            detail: "The full address. Tell us whether you are staying on Ortigia or on the mainland and the rest follows from that.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead: "A busy airport at one end and a restricted island at the other. The flight number solves the first; the address solves the second.",
    from: {
      id: "cta",
      label: "Pickup",
      name: "Catania Fontanarossa (CTA)",
      page: "catania-airport",
      linkText: "About Catania Airport",
      items: [
        {
          term: "The airport",
          detail: "Sicily's busiest by a wide margin — 12,346,530 passengers in 2024, operated by SAC — and about 4.3 km south-west of Catania, already on the road south.",
        },
        {
          term: "Which terminal",
          detail: "Terminals A, B and C; Terminal C is used only by easyJet. The flight number tells the driver which arrivals hall to wait in.",
        },
        {
          term: "Being met",
          detail: "The driver waits in arrivals with a name board. A delayed flight is followed through its number, so the meeting moves with it.",
        },
      ],
    },
    to: {
      id: "syracuse",
      label: "Drop-off",
      name: "Syracuse and Ortigia",
      page: "syracuse",
      linkText: "Transfers in Syracuse",
      items: [
        {
          term: "Island or mainland",
          detail: "The one detail that changes the ending. An Ortigia address may end at the edge of the restricted area; a mainland address ends at the door.",
        },
        {
          term: "The last stretch",
          detail: "Where the drop-off is at the edge, the final part is on foot over a bridge or through narrow lanes. It is short — but better known beforehand than discovered with the cases out.",
        },
        {
          term: "Luggage",
          detail: "Count everything that will not fold. On the island, the number of bags is a real constraint rather than a formality.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send with the request",
    lead: "The flight for the airport end, the address for the island end, and the party for the vehicle.",
    items: [
      "The flight number and the date, so the arrival can be followed.",
      "The full address in Syracuse, and whether it is on Ortigia or the mainland.",
      "Whether the property has said it can arrange vehicle access to the island.",
      "How many adults and children, and the ages of any children.",
      "How many suitcases and cabin bags, and anything bulky.",
      "Whether you also need the journey back to Catania Airport, and your departure flight.",
    ],
    note: "Whether a particular vehicle, child seat or accessible vehicle can be provided is answered in the reply, not promised here.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Back to Catania Airport",
    lead: "North again, with the departure flight as the deadline.",
    paragraphs: [
      "The pickup time for the return is worked back from your departure flight. Send the flight and its time with the request, and the reply sets out when and where you will be collected. We do not print a lead time, because it depends on the hour, the season and which side of the water you are leaving from.",
      "Leaving Ortigia, the collection point follows the same access rules as the arrival. If you were dropped at the edge, expect to be collected there too, unless your hotel arranges otherwise for the morning you leave.",
    ],
    note: "Asking for the outward and return journeys in one request is the simplest way to have both confirmed in the same written reply.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "syracuse",
        label: "Private transfers in Syracuse",
        detail: "Ortigia, the mainland city, the bridges, and the day trips from here.",
      },
      {
        page: "catania-airport",
        label: "Catania Airport (CTA)",
        detail: "The terminals, being met, and every route out of Fontanarossa.",
      },
      {
        page: "route-cta-taormina",
        label: "Catania Airport to Taormina",
        detail: "The same airport, the other direction: north up the coast.",
      },
      {
        page: "sicily",
        label: "Private transfers in Sicily",
        detail: "Which airport suits which corner of the island, and how the regions fit together.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Most of them are about the island, because that is what this route is really about.",
    items: [
      {
        question: "Which airport is closest to Syracuse?",
        answer: "Catania Fontanarossa. There is no airport closer, and it serves the whole south-east of Sicily, which is why this is the usual way into Syracuse.",
      },
      {
        question: "How long is the transfer from Catania Airport to Syracuse?",
        answer: "We do not publish a journey time. The figures in circulation disagree with one another and change with the season and the hour; the operator confirms the routing when we prepare the quote.",
      },
      {
        question: "Can a car drive onto Ortigia?",
        answer: "It depends on the rules in force and on your hotel. Access for non-residents is restricted and the arrangements have changed more than once. Where a property can register a vehicle in advance, the arrival is straightforward; where it cannot, the drop-off is at the edge and the last stretch is on foot.",
      },
      {
        question: "Is my hotel on Ortigia or on the mainland?",
        answer: "The address tells you: Ortigia is the island joined to the city by the Ponte Umbertino and the Ponte Santa Lucia. If you are unsure, send the full address and the operator will confirm which arrival it is.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "With the flight number, the delay is followed as it happens and the meeting moves with it. That is why we ask for the flight rather than the scheduled time.",
      },
      {
        question: "Can I book the return to Catania Airport at the same time?",
        answer: "Yes. Include the departure flight and its time in the same request, and both journeys are set out in one written reply.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight number, address, and which side of the bridge",
    body: "Send the flight, the full Syracuse address — on Ortigia or not — and the passengers and luggage. We reply in writing with the vehicle, the price and where you will be met.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "About Catania Airport", page: "catania-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const ctaSyracuseIt: RoutePage = {
  meta: {
    title: "Transfer aeroporto Catania–Siracusa e Ortigia – Prenota",
    description:
      "Auto privata da Catania Fontanarossa a Siracusa e Ortigia: l'incontro al terminal, il tragitto verso sud e l'arrivo su un'isola ad accesso limitato.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Catania (CTA)",
    to: "Siracusa e Ortigia",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Catania a Siracusa e Ortigia",
    lead: "Non c'è un aeroporto più vicino a Siracusa di quello di Catania, quindi quasi tutti arrivano da qui. Il tragitto verso sud è normale. La conclusione no: Siracusa è una città sulla terraferma più Ortigia, l'isola che ne è il centro storico, e da quale parte dell'acqua si trova il vostro indirizzo decide come finisce il viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Catania",
    note: "Organizziamo questi transfer con aziende e autisti locali autorizzati; non possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non compaiono prezzi, tempi di percorrenza o distanze stradali: l'operatore conferma il percorso, e il prezzo vi arriva per iscritto prima che qualsiasi cosa sia confermata.",
    photo: "ortigia-temple-of-apollo",
  },
  lead: {
    id: "quale-lato",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Da quale parte del ponte",
    text: "L'isola e la città sulla terraferma condividono un nome e quasi nient'altro che conti per un'auto.",
    columns: [
      {
        id: "ortigia",
        heading: "A Ortigia",
        subheading: "Il centro storico, raggiunto da due ponti",
        rows: [
          {
            term: "L'attraversamento",
            detail: "Ortigia è collegata alla città dal Ponte Umbertino e dal Ponte Santa Lucia. Quale un veicolo possa usare, e in quale direzione, è stato cambiato dal comune più di una volta.",
          },
          {
            term: "L'accesso",
            detail: "Limitato per i non residenti, e ristretto per gradi. Il punto di discesa per un indirizzo sull'isola viene confermato dall'operatore a ridosso della data, in base alle regole allora in vigore.",
          },
          {
            term: "Il ruolo dell'hotel",
            detail: "Una struttura sull'isola è spesso l'unica che può organizzare l'accesso di un veicolo, di solito registrandolo in anticipo. Chiedetelo quando prenotate.",
          },
        ],
      },
      {
        id: "terraferma",
        heading: "Sulla terraferma",
        subheading: "Vie normali, soste normali",
        rows: [
          {
            term: "Indirizzi fuori dall'isola",
            detail: "Si comportano normalmente: l'auto arriva alla porta. Il parco archeologico e gli hotel su quel lato dell'acqua sono arrivi semplici.",
          },
          {
            term: "Se state scegliendo la camera",
            detail: "Viaggiando con molti bagagli, un indirizzo sulla terraferma toglie ogni problema agli ultimi metri. Meglio saperlo prima di prenotare.",
          },
          {
            term: "Che cosa lo decide",
            detail: "L'indirizzo completo. Diteci se alloggiate a Ortigia o sulla terraferma e il resto ne deriva.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead: "Un aeroporto trafficato a un capo e un'isola ad accesso limitato all'altro. Il numero di volo risolve il primo; l'indirizzo il secondo.",
    from: {
      id: "cta",
      label: "Partenza",
      name: "Catania Fontanarossa (CTA)",
      page: "catania-airport",
      linkText: "Sull'aeroporto di Catania",
      items: [
        {
          term: "L'aeroporto",
          detail: "Il più trafficato della Sicilia con ampio margine — 12.346.530 passeggeri nel 2024, gestito da SAC — e a circa 4,3 km a sud-ovest di Catania, già sulla strada verso sud.",
        },
        {
          term: "Quale terminal",
          detail: "Terminal A, B e C; il Terminal C è usato solo da easyJet. Il numero di volo dice all'autista in quale sala arrivi aspettare.",
        },
        {
          term: "L'incontro",
          detail: "L'autista aspetta agli arrivi con un cartello nominativo. Un volo in ritardo viene seguito tramite il suo numero, e l'incontro si sposta con esso.",
        },
      ],
    },
    to: {
      id: "siracusa",
      label: "Arrivo",
      name: "Siracusa e Ortigia",
      page: "syracuse",
      linkText: "Transfer a Siracusa",
      items: [
        {
          term: "Isola o terraferma",
          detail: "L'unico dato che cambia la conclusione. Un indirizzo a Ortigia può finire al limite dell'area limitata; uno sulla terraferma finisce alla porta.",
        },
        {
          term: "L'ultimo tratto",
          detail: "Dove la discesa è al limite, l'ultima parte è a piedi su un ponte o tra vicoli stretti. È breve, ma meglio saperlo prima che scoprirlo con le valigie in mano.",
        },
        {
          term: "Bagagli",
          detail: "Contate tutto ciò che non si piega. Sull'isola il numero di valigie è un vincolo reale, non una formalità.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare nella richiesta",
    lead: "Il volo per il capo aeroportuale, l'indirizzo per il capo sull'isola, e il gruppo per il veicolo.",
    items: [
      "Il numero di volo e la data, perché l'arrivo possa essere seguito.",
      "L'indirizzo completo a Siracusa, e se è a Ortigia o sulla terraferma.",
      "Se la struttura vi ha detto di poter organizzare l'accesso del veicolo all'isola.",
      "Quanti adulti e bambini, e l'età dei bambini.",
      "Quante valigie e quanti bagagli a mano, e qualsiasi cosa ingombrante.",
      "Se vi serve anche il ritorno all'aeroporto di Catania, e il volo di partenza.",
    ],
    note: "Se un determinato veicolo, un seggiolino o un veicolo accessibile siano disponibili viene indicato nella risposta, non promesso qui.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Di nuovo all'aeroporto di Catania",
    lead: "Di nuovo verso nord, con il volo di partenza come scadenza.",
    paragraphs: [
      "L'orario di prelievo per il ritorno si ricava dal volo di partenza. Indicate il volo e il suo orario nella richiesta, e la risposta vi dirà quando e dove passerà l'autista. Non indichiamo un anticipo, perché dipende dall'ora, dalla stagione e da quale lato dell'acqua partite.",
      "Partendo da Ortigia, il punto di prelievo segue le stesse regole d'accesso dell'arrivo. Se siete scesi al limite, aspettatevi di essere ripresi lì, a meno che l'hotel non organizzi diversamente per la mattina della partenza.",
    ],
    note: "Chiedere andata e ritorno nella stessa richiesta è il modo più semplice per averli confermati entrambi nella stessa risposta scritta.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "syracuse",
        label: "Transfer privati a Siracusa",
        detail: "Ortigia, la città sulla terraferma, i ponti e le gite in giornata da qui.",
      },
      {
        page: "catania-airport",
        label: "Aeroporto di Catania (CTA)",
        detail: "I terminal, l'incontro e tutte le tratte in partenza da Fontanarossa.",
      },
      {
        page: "route-cta-taormina",
        label: "Dall'aeroporto di Catania a Taormina",
        detail: "Lo stesso aeroporto, nell'altra direzione: a nord lungo la costa.",
      },
      {
        page: "sicily",
        label: "Transfer privati in Sicilia",
        detail: "Quale aeroporto serve quale angolo dell'isola, e come si collegano le zone.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Quasi tutte riguardano l'isola, perché è di questo che parla davvero questa tratta.",
    items: [
      {
        question: "Qual è l'aeroporto più vicino a Siracusa?",
        answer: "Catania Fontanarossa. Non ce n'è uno più vicino, e serve tutto il sud-est della Sicilia: per questo è la via abituale per Siracusa.",
      },
      {
        question: "Quanto dura il transfer dall'aeroporto di Catania a Siracusa?",
        answer: "Non pubblichiamo un tempo di percorrenza. I dati in circolazione non concordano tra loro e cambiano con la stagione e l'ora; l'operatore conferma il percorso quando prepariamo il preventivo.",
      },
      {
        question: "Un'auto può entrare a Ortigia?",
        answer: "Dipende dalle regole in vigore e dall'hotel. L'accesso per i non residenti è limitato e le modalità sono cambiate più di una volta. Dove una struttura può registrare un veicolo in anticipo, l'arrivo è semplice; dove non può, la discesa è al limite e l'ultimo tratto è a piedi.",
      },
      {
        question: "Il mio hotel è a Ortigia o sulla terraferma?",
        answer: "Lo dice l'indirizzo: Ortigia è l'isola collegata alla città dal Ponte Umbertino e dal Ponte Santa Lucia. Se non ne siete sicuri, indicate l'indirizzo completo e l'operatore confermerà di quale arrivo si tratta.",
      },
      {
        question: "Che cosa succede se il volo è in ritardo?",
        answer: "Con il numero di volo, il ritardo viene seguito mentre accade e l'incontro si sposta con esso. Per questo chiediamo il volo e non l'orario previsto.",
      },
      {
        question: "Posso prenotare insieme anche il ritorno all'aeroporto di Catania?",
        answer: "Sì. Indicate il volo di partenza e il suo orario nella stessa richiesta, e entrambi i viaggi saranno descritti in un'unica risposta scritta.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Numero di volo, indirizzo e lato del ponte",
    body: "Indicate il volo, l'indirizzo completo a Siracusa — a Ortigia o no — e i passeggeri con i bagagli. Vi rispondiamo per iscritto con il veicolo, il prezzo e il punto d'incontro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sull'aeroporto di Catania", page: "catania-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Palermo Airport → Cefalù ──────────────────────────────────────────── */

const pmoCefaluEn: RoutePage = {
  meta: {
    title: "Palermo Airport to Cefalù Transfer – Book a Private Car",
    description:
      "A private car from Palermo Falcone Borsellino to Cefalù: being met at Cinisi, the run east past the city, and arriving in the old town or along the coast.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Palermo Airport (PMO)",
    to: "Cefalù",
    eyebrow: "Route",
    h1: "Palermo Airport to Cefalù",
    lead: "Falcone Borsellino is out at Cinisi, west of Palermo, and Cefalù is on the coast east of it — so this transfer is the length of the city plus the coast beyond. It is a common first journey for people basing themselves on the north coast, and one of the more straightforward arrivals in Sicily once you are there.",
    primaryCta: "Request a quote",
    secondaryCta: "About Palermo Airport",
    note: "We arrange these transfers with licensed local transfer companies and drivers; we do not own vehicles or employ the drivers directly. No price or journey time appears here: the operator confirms the routing, and the price comes to you in writing before anything is confirmed.",
    photo: "cefalu-cathedral-old-town",
  },
  lead: {
    id: "the-journey",
    eyebrow: "What makes this route different",
    heading: "West of the city to east of it",
    text: "The airport sits on the wrong side of Palermo for Cefalù, which shapes the journey more than anything at either end.",
    steps: [
      {
        title: "Arrivals at Cinisi",
        body: "Falcone Borsellino is at Cinisi, about 35 km west-north-west of Palermo. Many arrivals here are early morning or late evening, because that is where low-cost schedules place them — and a late landing is exactly when a driver already watching the flight matters most.",
      },
      {
        title: "Past Palermo",
        body: "The run east goes the length of the city rather than starting from it. That is why the airport-to-Cefalù journey is longer than the city-to-Cefalù one, and why the time of day matters to the routing the operator chooses.",
      },
      {
        title: "Along the north coast",
        body: "Cefalù is on the Tyrrhenian coast about 70 km east of Palermo, by the town's own entry — one of the very few distances in Sicily we can attribute to a source. We still publish no journey time: the coast road in August and in March are not the same road.",
      },
      {
        title: "Into Cefalù",
        body: "Unlike Taormina, the town is at sea level and the approach is flat. The medieval streets under the rock are narrow and partly restricted, so a hotel in there may be reached from an edge; addresses along the coast either side are ordinary stops.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead: "A long way from the city at one end, a compact old town under a headland at the other.",
    from: {
      id: "pmo",
      label: "Pickup",
      name: "Palermo Falcone Borsellino (PMO)",
      page: "palermo-airport",
      linkText: "About Palermo Airport",
      items: [
        {
          term: "The airport",
          detail: "Still widely called Punta Raisi, managed by GESAP, and 9,220,905 passengers in 2025. Its distance from the city is the first thing to plan around.",
        },
        {
          term: "Being met",
          detail: "The driver waits in arrivals with a name board. Give the surname exactly as it will be written, so you find each other first time.",
        },
        {
          term: "Late arrivals",
          detail: "Availability in the small hours is tighter than in the middle of the day, so a late landing is worth arranging early. The flight number lets the driver follow a delay rather than wait through it.",
        },
      ],
    },
    to: {
      id: "cefalu",
      label: "Drop-off",
      name: "Cefalù",
      page: "cefalu",
      linkText: "Transfers in Cefalù",
      items: [
        {
          term: "The old town",
          detail: "Narrow, partly restricted streets under the rock with the Norman castle on top. For a hotel in here, the stopping point can be at an edge — knowing which edge saves the circuit.",
        },
        {
          term: "Along the coast",
          detail: "A good deal of the accommodation is outside the town in both directions, at ordinary addresses a car can reach. Properties several kilometres out are still sold as Cefalù.",
        },
        {
          term: "The pin, not the name",
          detail: "Send the full address so the driver is going to the right stretch of coast, not just the right town name.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send with the request",
    lead: "The flight for the airport end, the exact address for the coast end, and the party for the vehicle.",
    items: [
      "The flight number and the date — especially for an early-morning or late-evening landing.",
      "The full address in or near Cefalù, with the name of the hotel or villa.",
      "Whether the address is in the old town or along the coast.",
      "How many adults and children, and the ages of any children.",
      "How many suitcases and cabin bags, and anything bulky such as beach or golf equipment.",
      "Whether you also need the journey back to Palermo Airport, and your departure flight.",
    ],
    note: "Whether a particular vehicle, child seat or accessible vehicle can be provided is answered in the reply, not promised here.",
  },
  departure: {
    id: "going-back",
    eyebrow: "The journey home",
    heading: "Back to Palermo Airport",
    lead: "West again, past the city, with the departure flight as the deadline.",
    paragraphs: [
      "Because the airport is on the far side of Palermo, the return is the longer of the journeys people usually make from Cefalù. The pickup time is worked back from your departure flight: send the flight and its time, and the reply sets out when and where you will be collected. We do not print a lead time here.",
      "For a hotel in the old town, the collection point is usually the same edge you arrived at. An early flight from Palermo means an early start from Cefalù, so it is worth confirming the pickup with the property the evening before.",
    ],
    note: "Asking for the outward and return journeys in one request is the simplest way to have both confirmed in the same written reply.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "cefalu",
        label: "Private transfers in Cefalù",
        detail: "The old town, the coast either side, and the journeys from here.",
      },
      {
        page: "palermo-airport",
        label: "Palermo Airport (PMO)",
        detail: "Being met at Cinisi, and every route west and east from the airport.",
      },
      {
        page: "palermo",
        label: "Private transfers in Palermo",
        detail: "The capital itself, for a night or two before the coast.",
      },
      {
        page: "sicily",
        label: "Private transfers in Sicily",
        detail: "Which airport suits which corner of the island.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about the airport's position and the address at the other end.",
    items: [
      {
        question: "How far is Cefalù from Palermo Airport?",
        answer: "Cefalù is about 70 km east of Palermo by the town's own entry, and the airport is about 35 km west-north-west of the city — so the journey is the length of the city plus the coast beyond. We do not publish a single airport-to-Cefalù figure or a journey time; the operator confirms the routing when we quote.",
      },
      {
        question: "Does the transfer go through Palermo?",
        answer: "It passes the city, because the airport is on the west side and Cefalù is on the east. The operator chooses the routing for your date and time.",
      },
      {
        question: "Can the car reach my hotel in Cefalù?",
        answer: "Addresses along the coast and in the modern streets are ordinary stops. In the medieval centre under the rock the streets are narrow and partly restricted, so the drop-off may be at an edge — the full address lets the driver choose the nearest one.",
      },
      {
        question: "My flight lands late at night. Is that a problem?",
        answer: "It is manageable, but worth arranging early: a large share of arrivals at Palermo are late, and availability in the small hours is tighter. With the flight number, the driver follows the arrival as it happens.",
      },
      {
        question: "My accommodation is outside Cefalù. Can I still book this route?",
        answer: "Yes. Many properties several kilometres along the coast are sold as Cefalù. Send the full address and the journey is quoted to that address.",
      },
      {
        question: "Can I book the return to Palermo Airport at the same time?",
        answer: "Yes. Include the departure flight and its time in the same request, and both journeys are set out in one written reply.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight number, address, and how many of you",
    body: "Send the flight, the full Cefalù address — old town or coast — and the passengers and luggage. We reply in writing with the vehicle, the price and where you will be met.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "About Palermo Airport", page: "palermo-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const pmoCefaluIt: RoutePage = {
  meta: {
    title: "Transfer aeroporto Palermo–Cefalù – Prenota l'autista",
    description:
      "Auto privata da Palermo Falcone Borsellino a Cefalù: l'incontro a Cinisi, il tragitto verso est oltre la città lungo la costa e l'arrivo in centro o vicino",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Palermo (PMO)",
    to: "Cefalù",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Palermo a Cefalù",
    lead: "Il Falcone Borsellino è a Cinisi, a ovest di Palermo, e Cefalù è sulla costa a est: questo transfer è quindi la lunghezza della città più la costa oltre. È un primo viaggio frequente per chi sceglie di stare sulla costa nord, e uno degli arrivi più semplici della Sicilia una volta sul posto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Palermo",
    note: "Organizziamo questi transfer con aziende e autisti locali autorizzati; non possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non compaiono prezzi né tempi di percorrenza: l'operatore conferma il percorso, e il prezzo vi arriva per iscritto prima che qualsiasi cosa sia confermata.",
    photo: "cefalu-cathedral-old-town",
  },
  lead: {
    id: "il-viaggio",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Da ovest della città a est",
    text: "L'aeroporto si trova dal lato sbagliato di Palermo per Cefalù, e questo determina il viaggio più di qualsiasi cosa ai due capi.",
    steps: [
      {
        title: "Gli arrivi a Cinisi",
        body: "Il Falcone Borsellino è a Cinisi, a circa 35 km a ovest-nord-ovest di Palermo. Molti arrivi qui sono di primo mattino o a tarda sera, perché è lì che li collocano gli orari low cost — ed è proprio con un atterraggio tardivo che conta di più un autista che segue già il volo.",
      },
      {
        title: "Oltre Palermo",
        body: "Il tragitto verso est attraversa tutta la lunghezza della città invece di partire da essa. Per questo il viaggio aeroporto–Cefalù è più lungo di quello città–Cefalù, e per questo l'ora del giorno conta nel percorso che sceglie l'operatore.",
      },
      {
        title: "Lungo la costa nord",
        body: "Cefalù è sulla costa tirrenica a circa 70 km a est di Palermo, secondo la scheda del comune stesso: una delle pochissime distanze in Sicilia che possiamo attribuire a una fonte. Non pubblichiamo comunque un tempo di percorrenza: la strada costiera ad agosto e a marzo non è la stessa strada.",
      },
      {
        title: "A Cefalù",
        body: "A differenza di Taormina, il paese è al livello del mare e l'accesso è pianeggiante. Le vie medievali sotto la rocca sono strette e in parte limitate, quindi un hotel lì può essere raggiunto da un limite; gli indirizzi lungo la costa ai due lati sono soste normali.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead: "Molto lontano dalla città a un capo, un centro storico compatto sotto un promontorio all'altro.",
    from: {
      id: "pmo",
      label: "Partenza",
      name: "Palermo Falcone Borsellino (PMO)",
      page: "palermo-airport",
      linkText: "Sull'aeroporto di Palermo",
      items: [
        {
          term: "L'aeroporto",
          detail: "Ancora chiamato da molti Punta Raisi, gestito da GESAP, con 9.220.905 passeggeri nel 2025. La sua distanza dalla città è la prima cosa da pianificare.",
        },
        {
          term: "L'incontro",
          detail: "L'autista aspetta agli arrivi con un cartello nominativo. Indicate il cognome esattamente come sarà scritto, così vi trovate al primo colpo.",
        },
        {
          term: "Arrivi tardivi",
          detail: "La disponibilità nelle ore piccole è più ridotta che a metà giornata, quindi un atterraggio tardivo conviene organizzarlo presto. Il numero di volo permette all'autista di seguire un ritardo invece di subirlo.",
        },
      ],
    },
    to: {
      id: "cefalu",
      label: "Arrivo",
      name: "Cefalù",
      page: "cefalu",
      linkText: "Transfer a Cefalù",
      items: [
        {
          term: "Il centro storico",
          detail: "Vie strette e in parte limitate sotto la rocca con i resti del castello normanno. Per un hotel lì, il punto di sosta può essere a un limite — sapere quale evita il giro.",
        },
        {
          term: "Lungo la costa",
          detail: "Buona parte degli alloggi è fuori dal paese in entrambe le direzioni, a indirizzi normali che un'auto raggiunge. Strutture a diversi chilometri sono comunque vendute come Cefalù.",
        },
        {
          term: "La posizione, non il nome",
          detail: "Indicate l'indirizzo completo perché l'autista vada sul tratto di costa giusto, non solo al nome del paese giusto.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare nella richiesta",
    lead: "Il volo per il capo aeroportuale, l'indirizzo esatto per il capo sulla costa, e il gruppo per il veicolo.",
    items: [
      "Il numero di volo e la data — soprattutto per un atterraggio di primo mattino o a tarda sera.",
      "L'indirizzo completo a Cefalù o nei dintorni, con il nome dell'hotel o della villa.",
      "Se l'indirizzo è nel centro storico o lungo la costa.",
      "Quanti adulti e bambini, e l'età dei bambini.",
      "Quante valigie e quanti bagagli a mano, e qualsiasi cosa ingombrante come attrezzatura da spiaggia o da golf.",
      "Se vi serve anche il ritorno all'aeroporto di Palermo, e il volo di partenza.",
    ],
    note: "Se un determinato veicolo, un seggiolino o un veicolo accessibile siano disponibili viene indicato nella risposta, non promesso qui.",
  },
  departure: {
    id: "ritorno",
    eyebrow: "Il viaggio di ritorno",
    heading: "Di nuovo all'aeroporto di Palermo",
    lead: "Di nuovo verso ovest, oltre la città, con il volo di partenza come scadenza.",
    paragraphs: [
      "Poiché l'aeroporto è dall'altro lato di Palermo, il ritorno è il più lungo dei viaggi che si fanno di solito da Cefalù. L'orario di prelievo si ricava dal volo di partenza: indicate il volo e il suo orario, e la risposta vi dirà quando e dove passerà l'autista. Qui non indichiamo un anticipo.",
      "Per un hotel nel centro storico, il punto di prelievo è di solito lo stesso limite dove siete arrivati. Un volo presto da Palermo significa una partenza presto da Cefalù, quindi conviene confermare il prelievo con la struttura la sera prima.",
    ],
    note: "Chiedere andata e ritorno nella stessa richiesta è il modo più semplice per averli confermati entrambi nella stessa risposta scritta.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "cefalu",
        label: "Transfer privati a Cefalù",
        detail: "Il centro storico, la costa ai due lati e i viaggi da qui.",
      },
      {
        page: "palermo-airport",
        label: "Aeroporto di Palermo (PMO)",
        detail: "L'incontro a Cinisi, e tutte le tratte verso ovest e verso est dall'aeroporto.",
      },
      {
        page: "palermo",
        label: "Transfer privati a Palermo",
        detail: "Il capoluogo, per una notte o due prima della costa.",
      },
      {
        page: "sicily",
        label: "Transfer privati in Sicilia",
        detail: "Quale aeroporto serve quale angolo dell'isola.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Soprattutto sulla posizione dell'aeroporto e sull'indirizzo all'altro capo.",
    items: [
      {
        question: "Quanto dista Cefalù dall'aeroporto di Palermo?",
        answer: "Cefalù è a circa 70 km a est di Palermo secondo la scheda del comune, e l'aeroporto è a circa 35 km a ovest-nord-ovest della città: il viaggio è quindi la lunghezza della città più la costa oltre. Non pubblichiamo una distanza unica aeroporto–Cefalù né un tempo di percorrenza; l'operatore conferma il percorso con il preventivo.",
      },
      {
        question: "Il transfer passa per Palermo?",
        answer: "Supera la città, perché l'aeroporto è sul lato ovest e Cefalù su quello est. L'operatore sceglie il percorso in base a data e ora.",
      },
      {
        question: "L'auto può raggiungere il mio hotel a Cefalù?",
        answer: "Gli indirizzi lungo la costa e nelle vie moderne sono soste normali. Nel centro medievale sotto la rocca le vie sono strette e in parte limitate, quindi la discesa può avvenire a un limite: l'indirizzo completo permette all'autista di scegliere il più vicino.",
      },
      {
        question: "Il mio volo atterra a tarda notte. È un problema?",
        answer: "È gestibile, ma conviene organizzarlo presto: una buona parte degli arrivi a Palermo è tardiva, e la disponibilità nelle ore piccole è più ridotta. Con il numero di volo, l'autista segue l'arrivo mentre accade.",
      },
      {
        question: "Il mio alloggio è fuori Cefalù. Posso comunque prenotare questa tratta?",
        answer: "Sì. Molte strutture a diversi chilometri lungo la costa sono vendute come Cefalù. Indicate l'indirizzo completo e il viaggio sarà quotato fino a quell'indirizzo.",
      },
      {
        question: "Posso prenotare insieme anche il ritorno all'aeroporto di Palermo?",
        answer: "Sì. Indicate il volo di partenza e il suo orario nella stessa richiesta, e entrambi i viaggi saranno descritti in un'unica risposta scritta.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Numero di volo, indirizzo e quanti siete",
    body: "Indicate il volo, l'indirizzo completo a Cefalù — centro storico o costa — e i passeggeri con i bagagli. Vi rispondiamo per iscritto con il veicolo, il prezzo e il punto d'incontro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sull'aeroporto di Palermo", page: "palermo-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeCtaTaormina: Record<Locale, RoutePage> = { en: ctaTaorminaEn, it: ctaTaorminaIt };
export const routeCtaSyracuse: Record<Locale, RoutePage> = { en: ctaSyracuseEn, it: ctaSyracuseIt };
export const routePmoCefalu: Record<Locale, RoutePage> = { en: pmoCefaluEn, it: pmoCefaluIt };
