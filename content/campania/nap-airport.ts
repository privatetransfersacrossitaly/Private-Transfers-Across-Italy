import type { NaplesAirport } from "./types";

/**
 * Naples Capodichino.
 *
 * ── The distinction this page exists to hold ──────────────────────────────
 * "Can the car stop at the terminal?" is six questions at Capodichino, and
 * ENAC answers them separately. A private-hire vehicle may enter the
 * controlled zone and transit it for up to fifteen minutes; it may make a
 * *fermata* in the yellow bays; it may not take *sosta* in the central lane;
 * it sets down there and collects somewhere else; and doing either anywhere
 * else is prohibited outright. Collapsing those into "you can stop outside
 * arrivals" would be the one error on this page a driver could be fined for.
 *
 * ── Sources, re-verified immediately before writing ───────────────────────
 * Both ordinances were re-downloaded on 27 October 2026 and confirmed
 * byte-identical by SHA-256 to the copies read during the Stage 2G audit.
 *
 *   1. **ENAC Ordinanza n. 3/2025**, Direzione Territoriale Campania, signed
 *      Naples 4 December 2025, in force from 00:00 on 10 December 2025 — the
 *      governing regulation for airport roads and parking. Arts. 6, 11, 14, 15.
 *      Its art. 17 c.2 repeals all earlier conflicting provisions, which is why
 *      the 2016 Taxi/NCC ordinance is not relied on here.
 *   2. **ENAC Ordinanza n. 2/2026**, 19 October 2026 — the November closure.
 *
 * Penalty amounts come from **GESAC's published ZTC guidance**, not from the
 * ordinance, which cites the law rather than the sum. The attribution is
 * written that way deliberately.
 *
 * ── The meeting point this page refuses to give ───────────────────────────
 * The ordinance identifies bays by reference to annexed planimetries A, B and
 * C. Those are drawings, and they were not legible enough in the audit to
 * place anything physically. So this page names the **category** of permitted
 * bay, with its article, and states plainly that it cannot name a terminal
 * exit, kerb, lane position or bay number. `meeting` is a required field for
 * exactly that reason.
 *
 * ── Two regimes that must never merge ─────────────────────────────────────
 * The blue Pick-up bays with fifteen free minutes are for *accompagnatori dei
 * passeggeri in arrivo* — people meeting arriving passengers — under art. 6
 * c.17 and an ENAC Director-General disposition. They are not a private-hire
 * entitlement. The only private-hire route into that area is art. 11 c.3, for
 * vans over 2.0 m. `pickUp` and `vans` are separate required fields so the
 * general rule and the narrow exception stay apart.
 *
 * ── Deliberately absent ───────────────────────────────────────────────────
 * Fares, distances, durations, availability. Any terminal exit or bay. Any
 * airline rerouting, cancellation beyond the ordinance, or claim that Salerno
 * is an official alternative. Any permit, partnership or exclusive access of
 * ours. Any statement about what happens after 30 November 2026.
 */

const ordEn = {
  text: "The zone, the fifteen-minute limit and the places a private-hire vehicle may set down or collect are established by ENAC Ordinanza n. 3/2025, signed by the Direzione Territoriale Campania on 4 December 2025 and in force from 10 December 2025. Read on 27 October 2026. ENAC is the Italian civil aviation authority; the ordinance is published by the airport operator among its ENAC ordinances:",
  linkText: "the ENAC ordinances published by the airport operator",
  href: "https://www.aeroportodinapoli.it/en/ordinanze-e.n.a.c.",
};

const ordIt = {
  text: "La zona, il limite dei quindici minuti e i luoghi in cui un veicolo a noleggio con conducente può far scendere o prelevare i passeggeri sono stabiliti dall'Ordinanza ENAC n. 3/2025, firmata dalla Direzione Territoriale Campania il 4 dicembre 2025 ed entrata in vigore il 10 dicembre 2025. Consultata il 27 ottobre 2026. L'ENAC è l'Ente Nazionale per l'Aviazione Civile; l'ordinanza è pubblicata dal gestore aeroportuale fra le proprie ordinanze ENAC:",
  linkText: "le ordinanze ENAC pubblicate dal gestore aeroportuale",
  href: "https://www.aeroportodinapoli.it/en/ordinanze-e.n.a.c.",
};

const ztcEn = {
  text: "The operator's own mobility guidance describes how the controlled zone works in practice, including the penalty range quoted here. Read on 27 October 2026. The penalty figures are the operator's; the ordinance cites the law rather than the amount:",
  linkText: "the airport operator's published ZTC guidance",
  href: "https://www.aeroportodinapoli.it/en/info-mobility-ztc",
};

const ztcIt = {
  text: "La guida alla mobilità del gestore descrive come funziona nella pratica la zona a traffico controllato, compresa la forbice sanzionatoria qui citata. Consultata il 27 ottobre 2026. Gli importi sono del gestore: l'ordinanza richiama la legge e non la cifra:",
  linkText: "la guida ZTC pubblicata dal gestore aeroportuale",
  href: "https://www.aeroportodinapoli.it/en/info-mobility-ztc",
};

const hoursEn = {
  text: "The opening hours and the rule about remaining in the terminal overnight are published by GE.S.A.C. S.p.A., which operates the airport. Read on 27 October 2026:",
  linkText: "the airport operator's own site",
  href: "https://www.aeroportodinapoli.it/en/",
};

const hoursIt = {
  text: "Gli orari di apertura e la regola sul rimanere in aerostazione durante la chiusura notturna sono pubblicati da GE.S.A.C. S.p.A., che gestisce l'aeroporto. Consultato il 27 ottobre 2026:",
  linkText: "il sito del gestore aeroportuale",
  href: "https://www.aeroportodinapoli.it/en/",
};

const en: NaplesAirport = {
  meta: {
    title: "Private transfers at Naples Capodichino Airport",
    description:
      "Naples airport has a controlled traffic zone with a fifteen-minute limit, and private-hire vehicles have designated places to set down and to collect.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers at Naples Capodichino Airport",
    lead:
      "Collection and drop-off at Capodichino follow designated-area rules, not kerbside improvisation. The airport sits inside a controlled traffic zone with a published time limit, and the civil aviation authority sets out separately where a private-hire vehicle may set a passenger down and where it may collect one. Those are not the same place.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the rules allow",
    constraint: {
      label: "From the ordinance in force",
      heading: "Four things the regulation settles, and one it does not",
      known: [
        {
          term: "A controlled zone",
          detail:
            "The airport roads lie inside a Zona a Traffico Controllato, instituted under Law 33/2012, with camera-monitored entry and exit gates.",
        },
        {
          term: "Fifteen minutes",
          detail:
            "The ordinance sets a maximum transit time of fifteen minutes inside the controlled zone, enforced by approved automatic equipment.",
        },
        {
          term: "A brief stop, not a wait",
          detail:
            "In the central lane of the zone a private-hire vehicle may make a fermata — a brief stop — and may not take sosta, which is waiting or parking.",
        },
        {
          term: "Two different places",
          detail:
            "Setting a departing passenger down and collecting an arriving one are governed separately, and the ordinance prohibits doing either anywhere other than the places it names.",
        },
      ],
      unknown: {
        label: "What this page cannot tell you",
        body: "Exactly where your driver will be standing. The ordinance identifies its bays by reference to annexed site drawings, and those drawings were not legible enough to place anything physically. So no terminal exit, kerb, lane position or bay number appears anywhere on this page. The meeting arrangement is confirmed with your driver.",
      },
      source: ordEn,
    },
  },

  zone: {
    id: "zone",
    eyebrow: "The year-round rule",
    heading: "The controlled traffic zone, and the fifteen-minute clock",
    lead:
      "This applies all year. It is not the November closure, which is a separate, dated measure further down.",
    paragraphs: [
      "ENAC's ordinance institutes a Zona a Traffico Controllato covering the airport's internal roads open to public use, with its entry and exit gates shown on an annexed drawing. Inside it, the ordinance states that a vehicle's transit time may not exceed fifteen minutes, beyond which the sanctions in its own article 15 apply. The limit does not apply to motorcycles and mopeds.",
      "Compliance is not judged by eye. The ordinance provides for the time inside the zone to be checked by approved automatic equipment, and the operator describes cameras at the entrances, the exits and in all the car parks. Entering a car park takes a vehicle out of the zone and restarts the clock.",
      "Certain categories can be authorised to stay longer, by applying to the operator for their registration plate to be added to an authorised list, or by requesting a temporary permit through the airport's own ZTC web pages. Those routes are the operator's to grant, and nothing here should be read as saying we hold such an authorisation.",
    ],
    penalties: {
      heading: "What exceeding the limit costs",
      body: "The airport operator's published guidance states that overstays are detected by automatic plate recognition and attract an administrative penalty of between €80 and €318 under Law 33/2012, with the revenue going to Naples City Council. Those figures are the operator's: the ordinance itself cites the law rather than the amount. Whether any particular situation is penalised is a matter for the authorities, and nothing here is advice about that.",
    },
    penaltiesSource: ztcEn,
    source: ordEn,
  },

  actions: {
    id: "actions",
    eyebrow: "Six questions, six answers",
    heading: "What a private-hire vehicle may and may not do",
    lead:
      "These are not interchangeable, and the ordinance answers each one separately.",
    caption:
      "Actions by a private-hire vehicle at Naples Capodichino, what ENAC Ordinanza n. 3/2025 allows, and which article says so",
    columns: ["Action", "What the ordinance allows", "Where", "Basis"],
    rows: [
      {
        id: "enter",
        cells: [
          "Entering the zone",
          "Permitted. Private hire is a named category in the ordinance.",
          "The airport's internal roads inside the controlled zone.",
          "Arts. 6 and 11",
        ],
      },
      {
        id: "transit",
        cells: [
          "Transiting",
          "Permitted, for no more than fifteen minutes.",
          "Anywhere within the controlled zone.",
          "Art. 6",
        ],
      },
      {
        id: "fermata",
        cells: [
          "Fermata — a brief stop",
          "Permitted, in the bays marked for it.",
          "The yellow bays, which include those in the central lane of the zone.",
          "Art. 6",
        ],
      },
      {
        id: "sosta",
        cells: [
          "Sosta — waiting or parking",
          "Not permitted in the central lane. The ordinance allows the brief stop and refuses the wait, in those words.",
          "—",
          "Art. 11",
        ],
      },
      {
        id: "set-down",
        cells: [
          "Setting down a departing passenger",
          "Permitted, for the time needed to set the passengers carried and their luggage down.",
          "The yellow bays of the central lane, or the user car-park bays.",
          "Arts. 6 and 11",
        ],
      },
      {
        id: "collect",
        cells: [
          "Collecting an arriving passenger",
          "Permitted.",
          "The user car-park bays identified in the ordinance's annexed drawing A, whose access is barrier-controlled, or the bays named in article 6.",
          "Art. 11",
        ],
      },
      {
        id: "elsewhere",
        cells: [
          "Either, anywhere else",
          "Prohibited. The ordinance states that collection and drop-off are not permitted in areas other than those it specifies.",
          "—",
          "Art. 11",
        ],
      },
    ],
    note:
      "The practical consequence is the one worth carrying away: a departure and an arrival are not mirror images at this airport. Setting someone down happens at the kerb lane; collecting someone happens at the car-park bays. A driver who treats the two as the same place is in the wrong one for half the journeys.",
    source: ordEn,
  },

  pickUp: {
    id: "pick-up",
    eyebrow: "Two regimes, easily confused",
    heading: "The blue Pick-up bays are not a private-hire facility",
    lead:
      "This is the distinction most likely to be got wrong, because the airport's public guidance about it is written for a different reader.",
    columns: [
      {
        id: "accompanying",
        heading: "The blue Pick-up bays",
        subheading: "For people meeting arriving passengers",
        rows: [
          {
            term: "Who they are for",
            detail:
              "The ordinance allows free parking in the blue-striped bays of the Pick-up area to those accompanying arriving passengers, in line with a disposition of ENAC's Director-General of 5 February 2024.",
          },
          {
            term: "How long",
            detail:
              "A maximum of fifteen minutes, free, with a ticket taken from the parking meter after entering the registration number and displayed visibly on the dashboard.",
          },
          {
            term: "How often",
            detail:
              "The ordinance states that each vehicle may enter the Pick-up area once per day.",
          },
          {
            term: "What it is not",
            detail:
              "It is not a general private-hire entitlement. Nothing in the ordinance extends this provision to ordinary private-hire vehicles, and this page does not.",
          },
        ],
      },
      {
        id: "ncc",
        heading: "The private-hire bays",
        subheading: "A separate provision, in a different place",
        rows: [
          {
            term: "Where collection happens",
            detail:
              "At the user car-park bays identified in the ordinance's annexed drawing A, whose access is controlled by automatic barriers, or at the bays named in article 6.",
          },
          {
            term: "Where setting down happens",
            detail:
              "In the yellow bays of the central lane, as a brief stop only, for the time the drop-off takes.",
          },
          {
            term: "What is forbidden",
            detail:
              "Waiting or parking in the central lane, and collection or drop-off anywhere other than the places the ordinance names.",
          },
          {
            term: "Who checks",
            detail:
              "The ordinance requires operators and vehicles to hold every requisite in force and allows the competent authorities to carry out checks at any time.",
          },
        ],
      },
    ],
    note:
      "If you have read the airport's own page about arriving by car and seen fifteen free minutes in front of arrivals, that is the left-hand column. It describes what a friend or relative meeting you may do. It does not describe what a private-hire car is entitled to.",
    source: ordEn,
  },

  vans: {
    id: "vans",
    heading: "One narrow exception, for tall vans",
    body:
      "The ordinance makes a single, specific allowance: private-hire vans whose height exceeds 2.0 metres may use the Pick-up parking area, under the conditions its article 6 sets for that area and in the bays shown on its annexed drawings B and C.",
    note:
      "This is an exception defined by vehicle height, and it is written here as one. It does not extend to private-hire vehicles generally, and this page makes no claim about the height of any vehicle that might be sent for your journey — that is settled in the reply to your request, not here.",
    source: ordEn,
  },

  meeting: {
    id: "meeting",
    eyebrow: "The limit of what we can publish",
    heading: "Where exactly the driver will meet you is confirmed with the driver",
    body: "The ordinance names the categories of bay a private-hire vehicle may use, but it identifies them by reference to site drawings annexed to it, and those drawings were not legible enough for us to place anything physically. We are therefore able to tell you which kind of location the rules permit, and not where it is. No terminal exit, kerb, lane, bay number or walking direction appears anywhere on this page.",
    note: "The precise meeting arrangement is confirmed with the operator and your driver for your own journey. We hold no airport permit, no partnership and no exclusive access, and we would rather tell you where the published record stops than invent a door number.",
  },

  hours: {
    id: "hours",
    eyebrow: "Before you plan a late arrival",
    heading: "The airport's published opening hours",
    lead:
      "A practical constraint on a night arrival, and one the operator states in its own words.",
    items: [
      {
        term: "Open 03:30 to 22:30",
        detail:
          "The operator publishes these as the airport's normal opening hours, and states that the airport is closed from 10.30pm to 3.30am except for exceptional flight delays.",
      },
      {
        term: "You may not remain in the terminal",
        detail:
          "The operator states that during the night closure it is not permitted to remain in the terminal. Arrange what happens after a late landing before you travel, not on arrival.",
      },
      {
        term: "The exception is the operator's to apply",
        detail:
          "The exception the operator names is for exceptional flight delays. It is for the airport to apply, not for us to promise, and this page does not say what will happen on any particular night.",
      },
    ],
    note:
      "Nothing here should be read as saying that a driver may wait inside the terminal at any hour. The terminal is the airport's, and the waiting rules outside it are the ones set out above.",
    source: hoursEn,
  },

  closure: {
    id: "closure",
    eyebrow: "A dated notice, not a standing rule",
    heading: "The November 2026 closure",
    lead:
      "Read the dates before the detail. This is a bounded measure and it is written here as one.",
    ordinance:
      "ENAC Ordinanza n. 2/2026, Direzione Territoriale Campania, dated 19 October 2026",
    period:
      "The ordinance states that passenger air traffic is interrupted, and the airport temporarily closed for runway rebuilding works, for the period from 1 November 2026 to 30 November 2026 inclusive.",
    expiry:
      "This notice describes a measure that applies only to that period. Nothing on this page states or implies that it continues after 30 November 2026, and no date for any later period is given, because none has been published.",
    successor:
      "We checked the airport operator's published list of ENAC ordinances on 27 October 2026. The most recent item was this ordinance, n. 2/2026, and we found nothing numbered after it and nothing extending or replacing it. That is what the list showed on that date; it is not proof that no later measure exists or will be issued. Check with the operator and with your airline.",
    limits: {
      heading: "What this notice does not say",
      body: "It names no airline, no cancelled or rerouted flight beyond the interruption it states, and no alternative airport — and it says nothing about what happens after 30 November. The same ordinance suspends only the penalty for exceeding the fifteen-minute limit during that period, and says in terms that it leaves the rest of the road, stopping, parking and airport-security rules untouched. A suspended penalty is not a suspended rule.",
    },
    source: ordEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover at Naples airport",
    body: "We arrange transfers in Campania. Whether a particular journey to or from Capodichino can be arranged, which vehicle would be sent, and how the fifteen-minute limit and the designated-bay rules are handled on the day are all settled in the reply to your request. The airport publishes nothing about us: nothing here is an arrangement with it, an endorsement by it, a permit we hold, or permission to stop anywhere in particular.",
  },

  send: {
    id: "send",
    heading: "What to send with a Naples airport request",
    lead:
      "The first two matter more here than at most airports, because the rules turn on direction and on timing.",
    items: [
      "Whether you are arriving or departing — they are governed differently",
      "The flight number and the scheduled time, and the date",
      "Where you are going to or coming from",
      "Passengers and luggage",
      "Anything fixed you have to meet, such as a ship's all-aboard time",
    ],
    note:
      "Say which direction the journey runs. Setting a departing passenger down and collecting an arriving one happen in different places under the ordinance, so the two are not the same request even when the addresses are identical.",
  },

  onward: {
    id: "onward",
    heading: "Nearby",
    items: [
      {
        page: "naples",
        label: "Transfers in Naples",
        detail:
          "The regional hub — four arrival points with one name, and which of them you actually mean.",
      },
      {
        page: "naples-cruise-port",
        label: "The cruise terminal at the Stazione Marittima",
        detail:
          "The quay to name if the airport is one end of a journey that begins or ends on a ship.",
      },
      {
        page: "salerno-airport",
        label: "Salerno Costa d'Amalfi Airport (QSR)",
        detail:
          "The region's other airport, run by the same operator, with a terminal that closes overnight.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Naples airport questions",
    lead: "Mostly about where a car may actually stop, and for how long.",
    items: [
      {
        question: "Can the car stop outside the terminal?",
        answer:
          "It can make a brief stop — a fermata — in the bays marked for it, including in the central lane of the controlled zone, and that is for setting passengers and luggage down. What it may not do there is wait or park: the ordinance allows the one and refuses the other in those words.",
      },
      {
        question: "Where will the driver collect us when we land?",
        answer:
          "At the bays the ordinance designates for it — the user car-park bays shown on its annexed drawing A, whose access is barrier-controlled, or the bays named in its article 6. Where those are physically, this page cannot tell you: the drawings were not legible enough to place them, so no bay number or terminal exit appears here. The meeting arrangement is confirmed with your driver.",
      },
      {
        question: "Isn't there a Pick-up area with fifteen free minutes?",
        answer:
          "There is, and it is for people meeting arriving passengers — the blue-striped bays, free for fifteen minutes with a dashboard ticket, and each vehicle may enter once a day. That is a different provision from the private-hire one, and nothing in the ordinance extends it to private-hire vehicles generally.",
      },
      {
        question: "What about larger vans?",
        answer:
          "The ordinance makes one narrow exception: private-hire vans over 2.0 metres in height may use the Pick-up parking area under the conditions set for it. It is defined by vehicle height and applies to nothing else, and this page makes no claim about the height of any vehicle that might be sent for your journey.",
      },
      {
        question: "What happens if a car stays too long?",
        answer:
          "The operator's published guidance says overstays are caught by automatic plate recognition and carry an administrative penalty of €80 to €318 under Law 33/2012. Whether a given situation is penalised is for the authorities, and nothing here is advice about that.",
      },
      {
        question: "Is the airport closed in November 2026?",
        answer:
          "The civil aviation authority's ordinance of 19 October 2026 states that passenger air traffic is interrupted and the airport temporarily closed for runway rebuilding from 1 to 30 November 2026 inclusive. It names no airline and no alternative airport, and says nothing about afterwards. We checked the operator's ordinance list on 27 October 2026 and found nothing later; check with the operator and your airline.",
      },
      {
        question: "Can we wait inside the terminal after a late landing?",
        answer:
          "The operator publishes opening hours of 03:30 to 22:30 and states that during the night closure it is not permitted to remain in the terminal, with an exception it names for exceptional flight delays. That exception is the airport's to apply, not ours to promise, so arrange what happens after a late landing before you travel.",
      },
      {
        question: "Is a request a booking?",
        answer:
          "No. Every journey on this site is an enquiry. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Tell us the direction, and the flight",
    body:
      "Whether you are landing or leaving decides which rule applies and which part of the airport the car goes to. The flight number and time decide the rest.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "Naples and its four gateways",
      page: "naples",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: NaplesAirport = {
  meta: {
    title: "Transfer privati all'aeroporto di Napoli Capodichino",
    description:
      "L'aeroporto di Napoli ha una zona a traffico controllato con limite di quindici minuti, e i veicoli NCC hanno luoghi designati per la discesa e il prelievo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati all'aeroporto di Napoli Capodichino",
    lead:
      "A Capodichino il prelievo e la discesa dei passeggeri seguono regole di aree designate, non l'improvvisazione a bordo strada. L'aeroporto si trova in una zona a traffico controllato con un limite di tempo pubblicato, e l'ente dell'aviazione civile stabilisce separatamente dove un veicolo NCC possa far scendere un passeggero e dove possa prelevarlo. Non sono lo stesso luogo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa è consentito",
    constraint: {
      label: "Dall'ordinanza in vigore",
      heading: "Quattro cose che il regolamento stabilisce, e una che non stabilisce",
      known: [
        {
          term: "Una zona controllata",
          detail:
            "La viabilità aeroportuale ricade in una Zona a Traffico Controllato, istituita ai sensi della Legge 33/2012, con varchi di ingresso e uscita sorvegliati da telecamere.",
        },
        {
          term: "Quindici minuti",
          detail:
            "L'ordinanza fissa in quindici minuti il tempo massimo di percorrenza all'interno della zona, verificato con apparecchiature omologate.",
        },
        {
          term: "Fermata, non sosta",
          detail:
            "Nella corsia centrale della zona un veicolo NCC può effettuare la fermata — l'arresto breve — e non la sosta, cioè l'attesa o il parcheggio.",
        },
        {
          term: "Due luoghi diversi",
          detail:
            "Far scendere un passeggero in partenza e prelevarne uno in arrivo sono disciplinati separatamente, e l'ordinanza vieta di fare l'una o l'altra cosa in aree diverse da quelle che indica.",
        },
      ],
      unknown: {
        label: "Che cosa questa pagina non può dirvi",
        body: "Dove esattamente si troverà il vostro autista. L'ordinanza individua i propri stalli rinviando alle planimetrie allegate, e quelle planimetrie non erano leggibili al punto da poterne collocare fisicamente alcunché. In questa pagina non compaiono quindi uscite del terminal, marciapiedi, posizioni di corsia o numeri di stallo. La modalità d'incontro si conferma con il vostro autista.",
      },
      source: ordIt,
    },
  },

  zone: {
    id: "zona",
    eyebrow: "La regola di tutto l'anno",
    heading: "La zona a traffico controllato e i quindici minuti",
    lead:
      "Vale tutto l'anno. Non è la chiusura di novembre, che è una misura distinta e datata, più in basso.",
    paragraphs: [
      "L'ordinanza ENAC istituisce una Zona a Traffico Controllato che interessa la viabilità interna dell'aeroporto aperta all'uso pubblico, con i varchi di ingresso e uscita indicati in una planimetria allegata. Al suo interno l'ordinanza stabilisce che il tempo di percorrenza dei veicoli non possa superare i quindici minuti, oltre i quali si incorre nelle sanzioni previste dal suo stesso articolo 15. Il limite non si applica a motoveicoli e ciclomotori.",
      "Il rispetto del limite non è valutato a occhio. L'ordinanza prevede che il tempo di permanenza nella zona sia controllato con apparecchiature omologate, e il gestore descrive telecamere ai varchi di ingresso, a quelli di uscita e in tutti i parcheggi. Entrare in un parcheggio fa uscire il veicolo dalla zona e azzera il conteggio.",
      "Determinate categorie possono essere autorizzate a permanenze più lunghe, chiedendo al gestore l'inserimento della targa in un elenco di autorizzati oppure un permesso temporaneo attraverso le pagine ZTC del sito dell'aeroporto. Sono procedure che concede il gestore, e nulla qui va letto come se noi disponessimo di una simile autorizzazione.",
    ],
    penalties: {
      heading: "Quanto costa superare il limite",
      body: "La guida pubblicata dal gestore aeroportuale indica che gli sforamenti sono rilevati con lettura automatica delle targhe e comportano una sanzione amministrativa compresa fra 80 e 318 euro ai sensi della Legge 33/2012, i cui proventi vanno al Comune di Napoli. Gli importi sono del gestore: l'ordinanza richiama la legge e non la cifra. Se una situazione specifica venga sanzionata spetta alle autorità, e nulla qui costituisce una consulenza in materia.",
    },
    penaltiesSource: ztcIt,
    source: ordIt,
  },

  actions: {
    id: "azioni",
    eyebrow: "Sei domande, sei risposte",
    heading: "Che cosa un veicolo NCC può e non può fare",
    lead:
      "Non sono intercambiabili, e l'ordinanza risponde a ciascuna separatamente.",
    caption:
      "Azioni di un veicolo NCC a Napoli Capodichino, ciò che l'Ordinanza ENAC n. 3/2025 consente e l'articolo che lo stabilisce",
    columns: ["Azione", "Che cosa consente l'ordinanza", "Dove", "Riferimento"],
    rows: [
      {
        id: "enter",
        cells: [
          "Entrare nella zona",
          "Consentito. Il noleggio con conducente è una categoria espressamente indicata dall'ordinanza.",
          "La viabilità interna dell'aeroporto all'interno della zona controllata.",
          "Artt. 6 e 11",
        ],
      },
      {
        id: "transit",
        cells: [
          "Transitare",
          "Consentito, per non più di quindici minuti.",
          "Ovunque all'interno della zona controllata.",
          "Art. 6",
        ],
      },
      {
        id: "fermata",
        cells: [
          "Fermata, l'arresto breve",
          "Consentita, negli stalli a ciò destinati.",
          "Gli stalli gialli, compresi quelli della corsia centrale della zona.",
          "Art. 6",
        ],
      },
      {
        id: "sosta",
        cells: [
          "Sosta, attesa o parcheggio",
          "Non consentita nella corsia centrale. L'ordinanza consente la fermata e nega la sosta, con queste parole.",
          "—",
          "Art. 11",
        ],
      },
      {
        id: "set-down",
        cells: [
          "Far scendere un passeggero in partenza",
          "Consentito, per il tempo necessario alla discesa dei clienti trasportati e dei relativi bagagli.",
          "Gli stalli gialli della corsia centrale, oppure gli stalli dei parcheggi utenti.",
          "Artt. 6 e 11",
        ],
      },
      {
        id: "collect",
        cells: [
          "Prelevare un passeggero in arrivo",
          "Consentito.",
          "Gli stalli dei parcheggi utenti indicati nella planimetria A allegata, il cui accesso è regolato da sbarre, oppure gli stalli indicati dall'articolo 6.",
          "Art. 11",
        ],
      },
      {
        id: "elsewhere",
        cells: [
          "L'una o l'altra cosa altrove",
          "Vietato. L'ordinanza stabilisce che il prelievo e la discesa non sono consentiti in aree diverse da quelle che indica.",
          "—",
          "Art. 11",
        ],
      },
    ],
    note:
      "La conseguenza pratica è quella da portarsi via: a questo aeroporto una partenza e un arrivo non sono immagini speculari. Far scendere qualcuno avviene nella corsia a bordo terminal; prelevare qualcuno avviene negli stalli dei parcheggi. Un autista che tratti le due cose come lo stesso luogo si trova in quello sbagliato per metà dei viaggi.",
    source: ordIt,
  },

  pickUp: {
    id: "pick-up",
    eyebrow: "Due regimi, facili da confondere",
    heading: "Gli stalli blu dell'area Pick-up non sono una struttura per gli NCC",
    lead:
      "È la distinzione che più facilmente si sbaglia, perché la comunicazione pubblica dell'aeroporto al riguardo è scritta per un altro lettore.",
    columns: [
      {
        id: "accompanying",
        heading: "Gli stalli blu dell'area Pick-up",
        subheading: "Per chi accompagna o attende i passeggeri in arrivo",
        rows: [
          {
            term: "A chi sono destinati",
            detail:
              "L'ordinanza consente la sosta gratuita negli stalli delimitati da strisce blu dell'area Pick-up agli accompagnatori dei passeggeri in arrivo, in conformità a una disposizione del Direttore Generale dell'ENAC del 5 febbraio 2024.",
          },
          {
            term: "Per quanto tempo",
            detail:
              "Per un massimo di quindici minuti, gratuitamente, con uno scontrino prelevato al parcometro dopo aver inserito la targa ed esposto in maniera visibile sul cruscotto.",
          },
          {
            term: "Quante volte",
            detail:
              "L'ordinanza stabilisce che ogni veicolo possa accedere all'area Pick-up una sola volta al giorno.",
          },
          {
            term: "Che cosa non è",
            detail:
              "Non è un diritto generale per il noleggio con conducente. Nulla nell'ordinanza estende questa previsione ai veicoli NCC in generale, e questa pagina non lo fa.",
          },
        ],
      },
      {
        id: "ncc",
        heading: "Gli stalli per il noleggio con conducente",
        subheading: "Una previsione distinta, in un luogo diverso",
        rows: [
          {
            term: "Dove avviene il prelievo",
            detail:
              "Negli stalli dei parcheggi utenti indicati nella planimetria A allegata all'ordinanza, il cui accesso è regolato da sbarre automatiche, oppure negli stalli indicati dall'articolo 6.",
          },
          {
            term: "Dove avviene la discesa",
            detail:
              "Negli stalli gialli della corsia centrale, come sola fermata, per il tempo necessario alle operazioni di discesa.",
          },
          {
            term: "Che cosa è vietato",
            detail:
              "La sosta nella corsia centrale, e il prelievo o la discesa in aree diverse da quelle indicate dall'ordinanza.",
          },
          {
            term: "Chi controlla",
            detail:
              "L'ordinanza impone a soggetti e veicoli il possesso di tutti i requisiti previsti dalle normative vigenti e consente alle autorità competenti verifiche e controlli in qualsiasi momento.",
          },
        ],
      },
    ],
    note:
      "Se avete letto la pagina dell'aeroporto su come arrivare in auto e avete visto i quindici minuti gratuiti davanti agli arrivi, quella è la colonna di sinistra. Descrive ciò che può fare un parente o un amico che vi viene a prendere. Non descrive ciò a cui ha diritto un'auto a noleggio con conducente.",
    source: ordIt,
  },

  vans: {
    id: "van",
    heading: "Un'unica eccezione, per i van alti",
    body:
      "L'ordinanza prevede una sola previsione specifica: i van NCC la cui altezza superi i 2,0 metri possono usare l'area di sosta Pick-up, secondo le modalità che il suo articolo 6 stabilisce per quell'area e negli stalli riportati nelle planimetrie B e C allegate.",
    note:
      "È un'eccezione definita dall'altezza del veicolo, ed è riportata qui come tale. Non si estende ai veicoli NCC in generale, e questa pagina non afferma nulla sull'altezza di un eventuale veicolo destinato al vostro viaggio: si definisce nella risposta alla vostra richiesta, non qui.",
    source: ordIt,
  },

  meeting: {
    id: "incontro",
    eyebrow: "Il limite di ciò che possiamo pubblicare",
    heading: "Dove esattamente vi incontrerà l'autista si conferma con l'autista",
    body: "L'ordinanza indica le categorie di stalli che un veicolo NCC può usare, ma le individua rinviando alle planimetrie allegate, e quelle planimetrie non erano leggibili al punto da poterne collocare fisicamente alcunché. Possiamo quindi dirvi quale tipo di luogo le regole consentono, non dove si trovi. In questa pagina non compaiono uscite del terminal, marciapiedi, corsie, numeri di stallo o indicazioni a piedi.",
    note: "La modalità d'incontro precisa si conferma con il gestore e con il vostro autista per il vostro viaggio. Non possediamo alcun permesso aeroportuale, alcun accordo e alcun accesso esclusivo, e preferiamo dirvi dove si ferma la documentazione pubblica piuttosto che inventare il numero di una porta.",
  },

  hours: {
    id: "orari",
    eyebrow: "Prima di programmare un arrivo notturno",
    heading: "Gli orari di apertura pubblicati dall'aeroporto",
    lead:
      "Un vincolo concreto per chi atterra di notte, e che il gestore dichiara con parole sue.",
    items: [
      {
        term: "Aperto dalle 3.30 alle 22.30",
        detail:
          "Il gestore pubblica questi come orari ordinari di apertura e dichiara che l'aeroporto è chiuso dalle 22.30 alle 3.30, salvo ritardi eccezionali dei voli.",
      },
      {
        term: "Non si può restare in aerostazione",
        detail:
          "Il gestore dichiara che durante la chiusura notturna non è consentito rimanere nel terminal. Organizzate ciò che accade dopo un atterraggio tardivo prima di partire, non all'arrivo.",
      },
      {
        term: "L'eccezione la applica il gestore",
        detail:
          "L'eccezione indicata dal gestore riguarda i ritardi eccezionali dei voli. Spetta all'aeroporto applicarla, non a noi prometterla, e questa pagina non dice che cosa accadrà in una determinata notte.",
      },
    ],
    note:
      "Nulla qui va letto come se un autista potesse attendere dentro il terminal a una qualsiasi ora. Il terminal è dell'aeroporto, e le regole d'attesa all'esterno sono quelle indicate qui sopra.",
    source: hoursIt,
  },

  closure: {
    id: "chiusura",
    eyebrow: "Un avviso datato, non una regola permanente",
    heading: "La chiusura di novembre 2026",
    lead:
      "Leggete le date prima dei dettagli. È una misura delimitata ed è riportata qui come tale.",
    ordinance:
      "Ordinanza ENAC n. 2/2026, Direzione Territoriale Campania, del 19 ottobre 2026",
    period:
      "L'ordinanza dichiara l'interruzione del traffico aereo passeggeri e la temporanea chiusura dello scalo per i lavori di rifacimento della pista, per il periodo dal 1° novembre 2026 al 30 novembre 2026 compresi.",
    expiry:
      "Questo avviso descrive una misura che riguarda soltanto quel periodo. Nulla in questa pagina afferma o lascia intendere che prosegua dopo il 30 novembre 2026, e non viene indicata alcuna data per periodi successivi, perché nessuna è stata pubblicata.",
    successor:
      "Abbiamo consultato l'elenco delle ordinanze ENAC pubblicato dal gestore aeroportuale il 27 ottobre 2026. La voce più recente era questa ordinanza, la n. 2/2026, e non abbiamo trovato nulla di numerato successivamente né alcuna misura che la prorogasse o la sostituisse. È quanto l'elenco riportava in quella data: non è la prova che non esista o non verrà emanata una misura successiva. Verificate con il gestore e con la vostra compagnia aerea.",
    limits: {
      heading: "Che cosa questo avviso non dice",
      body: "Non nomina alcuna compagnia aerea, alcun volo cancellato o dirottato oltre l'interruzione che dichiara, né alcun aeroporto alternativo, e non dice nulla su che cosa accadrà dopo il 30 novembre. La stessa ordinanza sospende soltanto il sanzionamento per il superamento del limite di quindici minuti in quel periodo, e precisa espressamente di non incidere sulle restanti norme in materia di circolazione, fermata, sosta e sicurezza aeroportuale. Una sanzione sospesa non è una regola sospesa.",
    },
    source: ordIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo all'aeroporto di Napoli",
    body: "Organizziamo transfer in Campania. Se un determinato viaggio da o per Capodichino sia organizzabile, quale veicolo verrebbe inviato e come vengano gestiti nella giornata il limite dei quindici minuti e le regole sugli stalli designati si definiscono tutti nella risposta alla vostra richiesta. L'aeroporto non pubblica nulla sul nostro conto: niente qui è un accordo con esso, un suo avallo, un permesso che possediamo o un'autorizzazione a fermarsi in un punto preciso.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per l'aeroporto di Napoli",
    lead:
      "Le prime due voci qui contano più che nella maggior parte degli aeroporti, perché le regole dipendono dalla direzione e dall'orario.",
    items: [
      "Se siete in arrivo o in partenza: sono disciplinati diversamente",
      "Il numero del volo, l'orario previsto e la data",
      "Dove siete diretti o da dove venite",
      "Passeggeri e bagagli",
      "Eventuali orari da rispettare, per esempio il rientro a bordo di una nave",
    ],
    note:
      "Indicate la direzione del viaggio. Far scendere un passeggero in partenza e prelevarne uno in arrivo avvengono in luoghi diversi secondo l'ordinanza: non sono la stessa richiesta nemmeno quando gli indirizzi coincidono.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Nei dintorni",
    items: [
      {
        page: "naples",
        label: "Transfer a Napoli",
        detail:
          "Il riferimento regionale: quattro punti d'arrivo con un solo nome, e quale intendete davvero.",
      },
      {
        page: "naples-cruise-port",
        label: "Il terminal crociere alla Stazione Marittima",
        detail:
          "La banchina da indicare se l'aeroporto è un capo di un viaggio che inizia o finisce su una nave.",
      },
      {
        page: "salerno-airport",
        label: "Aeroporto di Salerno Costa d'Amalfi (QSR)",
        detail:
          "L'altro aeroporto della regione, dello stesso gestore, con il terminal che di notte chiude.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sull'aeroporto di Napoli",
    lead: "In gran parte su dove un'auto possa davvero fermarsi, e per quanto.",
    items: [
      {
        question: "L'auto può fermarsi davanti al terminal?",
        answer:
          "Può effettuare una fermata — un arresto breve — negli stalli a ciò destinati, compresi quelli della corsia centrale della zona controllata, e serve a far scendere passeggeri e bagagli. Quello che non può fare lì è sostare: l'ordinanza consente la fermata e nega la sosta, con queste parole.",
      },
      {
        question: "Dove ci preleverà l'autista quando atterriamo?",
        answer:
          "Negli stalli che l'ordinanza designa a questo scopo: gli stalli dei parcheggi utenti indicati nella planimetria A allegata, il cui accesso è regolato da sbarre, oppure quelli indicati dall'articolo 6. Dove si trovino fisicamente questa pagina non può dirvelo: le planimetrie non erano leggibili al punto da collocarli, perciò qui non compaiono numeri di stallo né uscite del terminal. La modalità d'incontro si conferma con il vostro autista.",
      },
      {
        question: "Non c'è un'area Pick-up con quindici minuti gratuiti?",
        answer:
          "C'è, ed è destinata agli accompagnatori dei passeggeri in arrivo: gli stalli a strisce blu, gratuiti per quindici minuti con scontrino sul cruscotto, e ogni veicolo può accedervi una sola volta al giorno. È una previsione diversa da quella per il noleggio con conducente, e nulla nell'ordinanza la estende agli NCC in generale.",
      },
      {
        question: "E i van più grandi?",
        answer:
          "L'ordinanza prevede un'unica eccezione: i van NCC di altezza superiore a 2,0 metri possono usare l'area di sosta Pick-up secondo le modalità stabilite per quell'area. È definita dall'altezza del veicolo e non si applica ad altro, e questa pagina non afferma nulla sull'altezza di un eventuale veicolo destinato al vostro viaggio.",
      },
      {
        question: "Che cosa succede se un'auto resta troppo a lungo?",
        answer:
          "La guida pubblicata dal gestore indica che gli sforamenti vengono rilevati con lettura automatica delle targhe e comportano una sanzione amministrativa da 80 a 318 euro ai sensi della Legge 33/2012. Se una determinata situazione venga sanzionata spetta alle autorità, e nulla qui è una consulenza al riguardo.",
      },
      {
        question: "L'aeroporto è chiuso a novembre 2026?",
        answer:
          "L'ordinanza dell'ente dell'aviazione civile del 19 ottobre 2026 dichiara l'interruzione del traffico aereo passeggeri e la temporanea chiusura dello scalo per il rifacimento della pista dal 1° al 30 novembre 2026 compresi. Non nomina compagnie aeree né aeroporti alternativi, e non dice nulla sul dopo. Abbiamo consultato l'elenco delle ordinanze del gestore il 27 ottobre 2026 senza trovare nulla di successivo: verificate con il gestore e con la vostra compagnia.",
      },
      {
        question: "Possiamo attendere dentro il terminal dopo un atterraggio tardivo?",
        answer:
          "Il gestore pubblica orari di apertura dalle 3.30 alle 22.30 e dichiara che durante la chiusura notturna non è consentito rimanere nel terminal, con un'eccezione che indica per i ritardi eccezionali dei voli. Quell'eccezione spetta all'aeroporto applicarla, non a noi prometterla: organizzate prima di partire ciò che accade dopo un atterraggio tardivo.",
      },
      {
        question: "Una richiesta è una prenotazione?",
        answer:
          "No. Ogni viaggio su questo sito è una richiesta. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Diteci la direzione, e il volo",
    body:
      "Se state atterrando o partendo decide quale regola si applica e a quale parte dell'aeroporto va l'auto. Numero e orario del volo decidono il resto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Napoli e i suoi quattro accessi",
      page: "naples",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const naplesAirport = { en, it };
