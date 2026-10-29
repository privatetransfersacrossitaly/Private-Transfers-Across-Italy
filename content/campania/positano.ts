import type { PositanoDestination } from "./types";

/**
 * Positano.
 *
 * ── Why this page exists at all ───────────────────────────────────────────
 * Every other Campania page answers "which place do you mean". This one
 * answers a question no other page on this site can: **how many seats does
 * your vehicle have**, because Positano's limited-traffic zone charges on
 * exactly that, and the threshold runs straight through a transfer fleet. Five
 * seats including the driver is under it. A minivan is over it.
 *
 * ── The two documents everything here rests on ────────────────────────────
 * Both were read on 27 October 2026, and both were re-downloaded immediately
 * before this page was written and confirmed byte-identical by checksum to the
 * copies read during the audit.
 *
 *   1. **Deliberazione della Giunta Comunale n. 37 del 21.03.2024**, linked
 *      from the Comune's own ZTL portal. Gives the zone, the one-way axis, the
 *      seat threshold, the categories, the exemptions, the payment mechanism,
 *      and — decisively — that paying does not authorise stopping.
 *   2. **"Guide to the portal ZTL www.ztlpositano.it ver. 1.2 of 20.05.2026"**,
 *      published by the Comune. Gives the rate card the deliberation's own text
 *      layer lost, and the registration requirements.
 *
 * ── The qualification that is not optional ────────────────────────────────
 * The amounts come from a guide **dated 20 May 2026**. The portal's news page
 * carries nothing later, so no amendment is known — but "no amendment found"
 * is not "confirmed current", and the page says so in the band heading, in the
 * `asOf` line, in the note and in the FAQ. `rates.asOf` is a required field so
 * that a later edit cannot drop the date and leave bare numbers behind.
 *
 * ── The meeting point this page refuses to give ───────────────────────────
 * DGC 37/2024 refers in passing to an earlier Area Vigilanza ordinance
 * concerning where passengers of taxi and NCC vehicles may board and alight.
 * **That ordinance could not be obtained.** The Comune's own ZTL topic page
 * links only the two guides, and its published-measures archive does not list
 * 2016. So no meeting point, street or stopping place appears anywhere here.
 *
 * That omission matters more on this page than on any other in the cluster,
 * because a reader who has just been shown a tariff table will reasonably
 * assume the tariff buys a place to stop. The deliberation says it does not,
 * and that sentence gets its own band **before** the procedure, so nobody
 * learns how to buy a pass before learning what it is not.
 *
 * ── What is deliberately absent ───────────────────────────────────────────
 * The SS163 alternating-plate scheme. It governs the coast road rather than
 * the town, its authority is ANAS rather than the Comune, and ANAS could not
 * be reached from this environment at all. The page names the gap instead of
 * filling it from secondary reports.
 */

const delibEn = {
  text: "The zone, the seat threshold, the categories charged, the exemptions and the rule about stopping are set out in Deliberazione della Giunta Comunale n. 37 of 21 March 2024, published by the Comune di Positano and linked from its own ZTL portal. Read on 27 October 2026:",
  linkText: "the Comune's deliberation of 21 March 2024",
  href: "https://ztlpositano.it/uploads/ZTL/0_Pk6f_D.G.C.%20n.%2037%20DEL%2021.03.2024.pdf",
};

const delibIt = {
  text: "La zona, la soglia dei posti, le categorie soggette al pagamento, le esenzioni e la regola sulla sosta sono stabilite dalla Deliberazione della Giunta Comunale n. 37 del 21 marzo 2024, pubblicata dal Comune di Positano e collegata dal suo stesso portale ZTL. Consultata il 27 ottobre 2026:",
  linkText: "la delibera del Comune del 21 marzo 2024",
  href: "https://ztlpositano.it/uploads/ZTL/0_Pk6f_D.G.C.%20n.%2037%20DEL%2021.03.2024.pdf",
};

const guideEn = {
  text: "The amounts and the registration requirements are published by the Comune di Positano in “Guide to the portal ZTL www.ztlpositano.it ver. 1.2 of 20.05.2026”. Read on 27 October 2026, when the portal's notices showed nothing published after that guide:",
  linkText: "the Comune's ZTL portal guide, version 1.2 of 20 May 2026",
  href: "https://comune.positano.sa.it/documento-pubblico/documento-tecnico-di-supporto/guide-portal-ztl-wwwztlpositanoit-ver-12-eng",
};

const guideIt = {
  text: "Gli importi e i requisiti di registrazione sono pubblicati dal Comune di Positano nella «Guida al portale ZTL www.ztlpositano.it ver. 1.2 del 20.05.2026». Consultata il 27 ottobre 2026, quando negli avvisi del portale non risultava nulla di pubblicato dopo quella guida:",
  linkText: "la guida al portale ZTL del Comune, versione 1.2 del 20 maggio 2026",
  href: "https://comune.positano.sa.it/documento-pubblico/documento-tecnico-di-supporto/guida-al-portale-ztl-wwwztlpositanoit-ver-12-ita",
};

const en: PositanoDestination = {
  meta: {
    title: "Private transfers to Positano",
    description:
      "Positano's limited-traffic zone charges vehicles with six or more seats including the driver. What the Comune publishes about the charge, and what paying it does not allow.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers to Positano",
    lead:
      "Positano charges for entry to its limited-traffic zone by seat count, and the threshold falls in an awkward place for anyone being driven: five seats and under are not on the charged list, six and over are. Which side your vehicle falls on is the first useful thing to know.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the Comune charges",
    tiers: {
      heading: "Where the threshold falls",
      note: "Thresholds and categories from the Comune's deliberation of 21 March 2024; the amounts from its portal guide of 20 May 2026. Both are linked in full below.",
      items: [
        {
          id: "under",
          label: "Five seats or fewer, including the driver",
          rule: "Not on the charged list",
          consequence:
            "The Comune's guide names the vehicles that must register and pay as those with six or more seats including the driver. A car below that is not among them.",
          strength: "none",
        },
        {
          id: "over",
          label: "Six or more seats, including the driver",
          rule: "Admitted on payment",
          consequence:
            "Charged, and the deliberation applies the same treatment to private-hire, taxi and private use alike. A minivan on a Positano job is in this band.",
          strength: "timed",
        },
        {
          id: "bus",
          label: "Buses outside the published limits",
          rule: "Cannot enter",
          consequence:
            "The guide sets maximum dimensions of 7.70 m by 2.20 m and an emissions floor, and states that buses which do not meet those requirements cannot access the zone.",
          strength: "absolute",
        },
      ],
    },
  },

  rates: {
    id: "rates",
    eyebrow: "Published by the Comune",
    heading: "What the Comune's guide of 20 May 2026 lists",
    lead:
      "These are the amounts in the municipality's own portal guide. They are quoted with its date because that is what can be evidenced, not because they are confirmed to be today's figures.",
    asOf: "As published 20 May 2026",
    caption:
      "Charges listed in the Comune di Positano's ZTL portal guide version 1.2 of 20 May 2026, by permit type",
    columns: ["Permit", "Amount listed", "What the guide says it covers"],
    rows: [
      {
        id: "single",
        cells: [
          "Single",
          "€5.00",
          "Valid for one transit within the zone, to be paid within 72 hours of entry.",
        ],
      },
      {
        id: "monthly",
        cells: [
          "Monthly",
          "€100.00",
          "Unlimited access in the selected month from the date of payment, also covering transits in the 72 hours before payment.",
        ],
      },
      {
        id: "half",
        cells: [
          "Half-year",
          "€500.00",
          "January–June or July–December, on the same basis as the monthly permit.",
        ],
      },
      {
        id: "annual",
        cells: [
          "Annual",
          "€800.00",
          "Unlimited access in the selected year, on the same basis.",
        ],
      },
      {
        id: "bus",
        cells: [
          "Buses, per transit",
          "€60.00 to €90.00",
          "Set by emissions class rather than chosen: Euro 6 at the lower end, Euro 3 at the upper. Buses outside the published size and emissions limits cannot enter at all.",
        ],
      },
    ],
    note:
      "The deliberation of 21 March 2024 gives the single transit as €5.00 and states that paid access applies from 1 January to 31 December each year, so this is not a seasonal charge. It also lists the exempt categories: police, fire and rescue vehicles; vehicles carrying people with impaired mobility who hold the special badge; scheduled public-service vehicles and school buses; and vehicles of residents or domiciled persons who need services exclusively within the zone. Private-hire vehicles are not among the exemptions.",
    source: guideEn,
  },

  limits: {
    id: "limits",
    eyebrow: "Read this before the procedure",
    heading: "What paying does not buy",
    lead:
      "The most important sentence in the Comune's deliberation is not about money. It is about stopping.",
    paragraphs: [
      "The deliberation states, in terms, that payment of the pass does not authorise stopping or waiting along the route within the limited-traffic zone, and that conduct to the contrary is penalised under the Highway Code. A permit is permission to pass through. It is not permission to pull up.",
      "The zone covers the whole axis of Viale Pasitea, Piazza dei Mulini and Via C. Colombo, and the deliberation records that this axis is one-way. One pass authorises one access, and the date and time of that access have to be stated when it is paid for.",
      "This page therefore does not tell you where your driver will set you down. That is settled when your journey is quoted, against the rules in force on the day — not assumed from a tariff table.",
    ],
    callout: {
      heading: "A permit is not a parking right",
      body: "Nothing on this page should be read as saying that a paid transit allows a vehicle to stop, wait, park or set down at a chosen point inside the zone. The Comune's own deliberation says the opposite, and we are not going to soften it.",
    },
    unknown: {
      heading: "The meeting point we cannot give you",
      body: "The deliberation refers in passing to an earlier ordinance of the Comune's enforcement department concerning where passengers of taxi and private-hire vehicles may board and alight. We could not obtain that ordinance: the Comune's own ZTL topic page links only its two portal guides, and its published-measures archive does not list that year. So the official material we were able to read does not establish any meeting point, and none is named here. We would rather say that than describe a street we have not verified.",
    },
    source: delibEn,
  },

  procedure: {
    id: "procedure",
    eyebrow: "How the Comune's portal works",
    heading: "The steps the guide sets out",
    lead:
      "Published for anyone using the municipal portal. Worth knowing because the vehicle, not the passenger, is what gets registered.",
    steps: [
      {
        title: "Register the vehicle on the municipal portal",
        body: "The guide states that vehicles subject to the charge must be registered, and that the vehicle registration certificate is needed in PDF form for the registration to be approved.",
      },
      {
        title: "Give the seat count and the emissions class",
        body: "The portal asks for the total number of seats in the vehicle including the driver, and for its emissions class. Those two entries are what decide whether a charge applies and, for a bus, how much.",
      },
      {
        title: "Choose the permit",
        body: "Single, monthly, half-year or annual for the vehicle category this page describes. For buses the guide states the rate is not chosen, because it follows the emissions class.",
      },
      {
        title: "State the date and time of the transit",
        body: "Both the deliberation and the guide require the intended date and time of access to be given at the point of payment.",
      },
      {
        title: "Pay through the portal, and keep the receipt",
        body: "The deliberation states that payment can be made only through the municipal portal, after registration validated by the municipal police, using the PagoPA system, and that the receipt must be shown to officers on request. A single permit is payable within 72 hours of entry.",
      },
    ],
    note:
      "Registration is validated by the Comune's municipal police, not by us. We are not an official Positano service and have no municipal arrangement: this is a description of what the Comune publishes, so that you know what the arrangement for your journey has to deal with.",
    source: guideEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover in Positano",
    body: "We arrange transfers in Campania, including the Amalfi Coast road and Positano. That is our own operating position — the Comune publishes nothing about us, and nothing here should be read as a municipal arrangement, an endorsement, or permission to stop anywhere in particular. Which vehicle is sent, how the zone charge is handled for your journey, and where a driver can meet you are all settled in the reply to your request.",
  },

  send: {
    id: "send",
    heading: "What to send with a Positano request",
    lead:
      "The party size matters more here than almost anywhere else on this site, because it decides which side of the Comune's threshold the vehicle sits on.",
    items: [
      "Where you are starting from and the date",
      "How many passengers, and how much luggage",
      "The address or hotel you are going to, as it is written on your booking",
      "Whether you want the car to wait, and roughly for how long",
      "Any arrival or departure time you have to meet, such as a ship's all-aboard",
    ],
    note:
      "Give the passenger count precisely rather than approximately. Six seats including the driver is the published threshold, so a party of five and a party of six are not the same request.",
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
          "The quay to name if your Positano day begins or ends on a ship.",
      },
      {
        page: "amalfi",
        label: "Transfers to Amalfi",
        detail:
          "The next comune along, with rules of a different kind: a time limit and an outright stopping ban rather than a charge.",
      },
      {
        page: "salerno-airport",
        label: "Salerno Costa d'Amalfi Airport (QSR)",
        detail:
          "The region's other airport, and one whose terminal closes overnight.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Positano questions",
    lead: "Mostly about the threshold, the charge and what it does not cover.",
    items: [
      {
        question: "Does my vehicle have to pay to enter Positano?",
        answer:
          "It depends on seats, not on passengers. The Comune's portal guide names the vehicles that must register and pay as motor vehicles with six or more seats including the driver. A vehicle with five or fewer is not on that list. Buses are treated separately and have their own size and emissions requirements.",
      },
      {
        question: "What does the charge cost?",
        answer:
          "The Comune's guide of 20 May 2026 lists €5.00 for a single transit, €100.00 monthly, €500.00 per half-year and €800.00 annually for this vehicle category, with buses charged €60.00 to €90.00 per transit by emissions class. Those are the published figures as at that date; we have found nothing published since, which is not the same as confirming they are unchanged today.",
      },
      {
        question: "Is private hire exempt?",
        answer:
          "No. The deliberation of 21 March 2024 applies the charge to private-hire, taxi and private use alike, and its exempt list covers emergency vehicles, badge-holding disabled transport, scheduled public services and school buses, and residents or domiciled persons needing services inside the zone. Private hire is not among them.",
      },
      {
        question: "Does paying the charge mean the car can stop outside my hotel?",
        answer:
          "No, and this is the point most easily misread. The deliberation states that payment of the pass does not authorise stopping or waiting along the route inside the zone. A permit covers passing through. Where a driver can actually meet you is settled in the reply to your request.",
      },
      {
        question: "Where will the driver meet us?",
        answer:
          "Settled in the reply to your request. The deliberation mentions an earlier municipal ordinance about boarding and alighting by taxi and private-hire passengers, but we could not obtain it from the Comune's own pages, so the official material we read establishes no meeting point. We are not going to name a street we have not verified.",
      },
      {
        question: "What about the alternating number-plate rule on the coast road?",
        answer:
          "That is a different restriction, on a different road, under a different authority — the state road along the coast rather than Positano's own streets. We could not reach the road authority's site at all, so this page makes no claim about it, including about whether any category is exempt. Check with the road authority and the municipalities before relying on anything you read about it elsewhere.",
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
    heading: "Tell us the party size, and the address",
    body:
      "How many of you there are decides which side of the Comune's threshold the vehicle falls on, and the address decides what is possible once inside the zone. Both come back answered in the quotation.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "Naples and its four gateways",
      page: "naples",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: PositanoDestination = {
  meta: {
    title: "Transfer privati per Positano",
    description:
      "La ZTL di Positano fa pagare l'accesso ai veicoli con sei o più posti, conducente compreso. Cosa pubblica il Comune sulla tariffa, e cosa pagarla non consente.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati per Positano",
    lead:
      "Positano fa pagare l'ingresso nella ZTL in base al numero di posti, e la soglia cade in un punto scomodo per chi viaggia con autista: fino a cinque posti non si è nell'elenco dei veicoli soggetti al pagamento, da sei in su sì. Da quale parte si trovi il vostro veicolo è la prima cosa utile da sapere.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Quanto fa pagare il Comune",
    tiers: {
      heading: "Dove cade la soglia",
      note: "Soglia e categorie dalla delibera comunale del 21 marzo 2024; gli importi dalla guida al portale del 20 maggio 2026. Entrambe sono collegate per intero qui sotto.",
      items: [
        {
          id: "under",
          label: "Fino a cinque posti, conducente compreso",
          rule: "Non nell'elenco dei soggetti al pagamento",
          consequence:
            "La guida del Comune indica come veicoli che devono registrarsi e pagare quelli con sei o più posti, conducente compreso. Un'auto al di sotto non vi compare.",
          strength: "none",
        },
        {
          id: "over",
          label: "Sei posti o più, conducente compreso",
          rule: "Ammessi a pagamento",
          consequence:
            "Soggetti alla tariffa, e la delibera applica lo stesso trattamento a noleggio con conducente, taxi e uso privato. Un minivan per Positano sta in questa fascia.",
          strength: "timed",
        },
        {
          id: "bus",
          label: "Autobus fuori dai limiti pubblicati",
          rule: "Non possono entrare",
          consequence:
            "La guida fissa dimensioni massime di 7,70 m per 2,20 m e una soglia di classe ambientale, e dichiara che gli autobus che non rispettano tali requisiti non possono accedere alla zona.",
          strength: "absolute",
        },
      ],
    },
  },

  rates: {
    id: "tariffe",
    eyebrow: "Pubblicate dal Comune",
    heading: "Quanto indica la guida del Comune del 20 maggio 2026",
    lead:
      "Sono gli importi riportati nella guida al portale del Comune stesso. Li citiamo con la loro data perché è quello che si può documentare, non perché sia confermato che siano le cifre di oggi.",
    asOf: "Come pubblicato il 20 maggio 2026",
    caption:
      "Importi indicati nella guida al portale ZTL del Comune di Positano, versione 1.2 del 20 maggio 2026, per tipo di permesso",
    columns: ["Permesso", "Importo indicato", "Che cosa copre, secondo la guida"],
    rows: [
      {
        id: "single",
        cells: [
          "Singolo",
          "5,00 €",
          "Valido per un transito nella zona, da pagare entro 72 ore dall'ingresso.",
        ],
      },
      {
        id: "monthly",
        cells: [
          "Mensile",
          "100,00 €",
          "Accessi illimitati nel mese scelto a partire dalla data di pagamento, coprendo anche i transiti nelle 72 ore precedenti.",
        ],
      },
      {
        id: "half",
        cells: [
          "Semestrale",
          "500,00 €",
          "Gennaio–giugno o luglio–dicembre, con lo stesso criterio del mensile.",
        ],
      },
      {
        id: "annual",
        cells: [
          "Annuale",
          "800,00 €",
          "Accessi illimitati nell'anno scelto, con lo stesso criterio.",
        ],
      },
      {
        id: "bus",
        cells: [
          "Autobus, per transito",
          "da 60,00 € a 90,00 €",
          "Determinato dalla classe ambientale e non scelto: Euro 6 all'importo più basso, Euro 3 al più alto. Gli autobus fuori dai limiti di dimensione e di classe pubblicati non possono entrare.",
        ],
      },
    ],
    note:
      "La delibera del 21 marzo 2024 indica il transito singolo a 5,00 € e stabilisce che l'accesso a pagamento vale dal 1° gennaio al 31 dicembre di ogni anno: non è quindi una tariffa stagionale. Elenca anche le categorie esenti: veicoli di polizia stradale, vigili del fuoco e servizi di soccorso; veicoli adibiti al trasporto di persone con limitata o impedita capacità motoria provvisti di contrassegno speciale; veicoli del servizio pubblico di linea e scuolabus; e veicoli di residenti o domiciliati che devono usufruire di servizi esclusivamente in ZTL. Il noleggio con conducente non è fra le esenzioni.",
    source: guideIt,
  },

  limits: {
    id: "limiti",
    eyebrow: "Da leggere prima della procedura",
    heading: "Che cosa il pagamento non vi dà",
    lead:
      "La frase più importante della delibera comunale non riguarda il denaro. Riguarda la sosta.",
    paragraphs: [
      "La delibera stabilisce espressamente che il pagamento del pass non autorizza la sosta e la fermata lungo il percorso che ricade nella zona a traffico limitato, e che i comportamenti contrari sono sanzionati a norma del Codice della Strada. Il permesso autorizza a transitare. Non autorizza ad accostare.",
      "La zona interessa l'intero asse di Viale Pasitea, Piazza dei Mulini e Via C. Colombo, e la delibera registra che tale asse è a senso unico di marcia. Il pagamento di un pass autorizza un solo accesso, e data e ora di quell'accesso vanno indicate al momento del pagamento.",
      "Questa pagina non vi dice quindi dove vi farà scendere l'autista. Lo si definisce quando il viaggio viene preventivato, in base alle regole in vigore quel giorno, e non lo si deduce da una tabella di tariffe.",
    ],
    callout: {
      heading: "Un permesso non è un diritto di sosta",
      body: "Nulla in questa pagina va letto come se un transito pagato permettesse a un veicolo di fermarsi, attendere, parcheggiare o far scendere i passeggeri in un punto scelto all'interno della zona. La delibera del Comune afferma il contrario, e non intendiamo attenuarlo.",
    },
    unknown: {
      heading: "Il punto d'incontro che non possiamo indicarvi",
      body: "La delibera richiama di passaggio una precedente ordinanza dell'area vigilanza del Comune sui luoghi in cui i passeggeri dei veicoli taxi e a noleggio con conducente possono salire e scendere. Non siamo riusciti a ottenere quell'ordinanza: la pagina tematica ZTL del Comune collega soltanto le due guide al portale, e il suo archivio dei provvedimenti non riporta quell'anno. Il materiale ufficiale che abbiamo potuto leggere non stabilisce quindi alcun punto d'incontro, e qui non ne indichiamo nessuno. Preferiamo dirvelo piuttosto che descrivere una via che non abbiamo verificato.",
    },
    source: delibIt,
  },

  procedure: {
    id: "procedura",
    eyebrow: "Come funziona il portale del Comune",
    heading: "I passaggi indicati dalla guida",
    lead:
      "Pubblicati per chi usa il portale comunale. Vale la pena conoscerli perché ciò che si registra è il veicolo, non il passeggero.",
    steps: [
      {
        title: "Registrare il veicolo sul portale comunale",
        body: "La guida stabilisce che i veicoli soggetti alla tariffa devono essere registrati, e che per l'approvazione della registrazione serve la carta di circolazione in formato PDF.",
      },
      {
        title: "Indicare il numero di posti e la classe ambientale",
        body: "Il portale chiede il numero totale di posti del veicolo, conducente compreso, e la sua classe ambientale. Sono questi due dati a decidere se la tariffa si applica e, per un autobus, a quanto ammonta.",
      },
      {
        title: "Scegliere il permesso",
        body: "Singolo, mensile, semestrale o annuale per la categoria di veicoli descritta in questa pagina. Per gli autobus la guida precisa che la tariffa non si scelge, perché segue la classe ambientale.",
      },
      {
        title: "Indicare data e ora del transito",
        body: "Sia la delibera sia la guida richiedono che data e ora dell'accesso previsto siano indicate al momento del pagamento.",
      },
      {
        title: "Pagare dal portale e conservare la ricevuta",
        body: "La delibera stabilisce che il pagamento può avvenire unicamente tramite il portale comunale, previa registrazione validata dalla Polizia Municipale, con il sistema PagoPA, e che la ricevuta va mostrata agli agenti su richiesta. Il permesso singolo si paga entro 72 ore dall'ingresso.",
      },
    ],
    note:
      "La registrazione è validata dalla Polizia Municipale del Comune, non da noi. Non siamo un servizio ufficiale di Positano e non abbiamo alcun accordo comunale: questa è una descrizione di ciò che il Comune pubblica, perché sappiate con che cosa deve fare i conti l'organizzazione del vostro viaggio.",
    source: guideIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo a Positano",
    body: "Organizziamo transfer in Campania, compresa la strada della Costiera Amalfitana e Positano. È la nostra posizione operativa: il Comune non pubblica nulla sul nostro conto, e niente qui va letto come un accordo comunale, un avallo o un permesso di fermarsi in un punto preciso. Quale veicolo viene inviato, come viene gestita la tariffa della zona per il vostro viaggio e dove un autista può incontrarvi si definiscono tutti nella risposta alla vostra richiesta.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per Positano",
    lead:
      "Qui il numero di passeggeri conta più che in quasi ogni altra pagina di questo sito, perché decide da quale parte della soglia comunale si trova il veicolo.",
    items: [
      "Da dove partite e la data",
      "Quanti passeggeri siete e quanti bagagli avete",
      "L'indirizzo o l'albergo di destinazione, come è scritto sulla vostra prenotazione",
      "Se volete che l'auto attenda, e per quanto tempo circa",
      "Eventuali orari da rispettare in arrivo o in partenza, per esempio il rientro a bordo di una nave",
    ],
    note:
      "Indicate il numero di passeggeri con precisione e non per approssimazione. La soglia pubblicata è di sei posti conducente compreso: un gruppo di cinque e un gruppo di sei non sono la stessa richiesta.",
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
          "La banchina da indicare se la vostra giornata a Positano inizia o finisce su una nave.",
      },
      {
        page: "amalfi",
        label: "Transfer per Amalfi",
        detail:
          "Il comune accanto, con regole di natura diversa: un limite di tempo e un divieto di fermata, invece di una tariffa.",
      },
      {
        page: "salerno-airport",
        label: "Aeroporto di Salerno Costa d'Amalfi (QSR)",
        detail:
          "L'altro aeroporto della regione, con il terminal che di notte chiude.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Positano",
    lead: "In gran parte sulla soglia, sulla tariffa e su ciò che non comprende.",
    items: [
      {
        question: "Il nostro veicolo deve pagare per entrare a Positano?",
        answer:
          "Dipende dai posti, non dai passeggeri. La guida al portale del Comune indica come veicoli che devono registrarsi e pagare gli autoveicoli con sei o più posti, conducente compreso. Un veicolo con cinque o meno non è in quell'elenco. Gli autobus sono trattati a parte e hanno propri requisiti di dimensione e classe ambientale.",
      },
      {
        question: "Quanto costa la tariffa?",
        answer:
          "La guida del Comune del 20 maggio 2026 indica 5,00 € per un transito singolo, 100,00 € al mese, 500,00 € a semestre e 800,00 € all'anno per questa categoria di veicoli, con gli autobus da 60,00 € a 90,00 € per transito in base alla classe ambientale. Sono le cifre pubblicate a quella data; non abbiamo trovato nulla di pubblicato successivamente, che non equivale a confermare che oggi siano invariate.",
      },
      {
        question: "Il noleggio con conducente è esente?",
        answer:
          "No. La delibera del 21 marzo 2024 applica la tariffa a noleggio con conducente, taxi e uso privato allo stesso modo, e il suo elenco di esenzioni riguarda i mezzi di soccorso, il trasporto di persone con contrassegno per disabilità, i servizi pubblici di linea e gli scuolabus, e i residenti o domiciliati che devono usufruire di servizi in ZTL. Il noleggio con conducente non vi compare.",
      },
      {
        question: "Pagare la tariffa significa che l'auto può fermarsi davanti al nostro albergo?",
        answer:
          "No, ed è il punto che più facilmente si fraintende. La delibera stabilisce che il pagamento del pass non autorizza la sosta e la fermata lungo il percorso all'interno della zona. Il permesso copre il transito. Dove un autista possa effettivamente incontrarvi si definisce nella risposta alla vostra richiesta.",
      },
      {
        question: "Dove ci incontrerà l'autista?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. La delibera richiama una precedente ordinanza comunale sulla salita e discesa dei passeggeri di taxi e noleggio con conducente, ma non siamo riusciti a ottenerla dalle pagine del Comune: il materiale ufficiale che abbiamo letto non stabilisce quindi alcun punto d'incontro. Non intendiamo indicare una via che non abbiamo verificato.",
      },
      {
        question: "E la regola delle targhe alterne sulla strada costiera?",
        answer:
          "È una limitazione diversa, su una strada diversa e di un'autorità diversa: la strada statale lungo la costa, non le vie di Positano. Non siamo riusciti a raggiungere in alcun modo il sito dell'ente gestore, perciò questa pagina non afferma nulla al riguardo, nemmeno sulle eventuali categorie esenti. Verificate con l'ente gestore e con i comuni prima di fare affidamento su quanto si legge altrove.",
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
    heading: "Diteci quanti siete, e l'indirizzo",
    body:
      "Quanti siete decide da quale parte della soglia comunale si trova il veicolo, e l'indirizzo decide che cosa è possibile una volta dentro la zona. Entrambe le cose tornano con una risposta nel preventivo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Napoli e i suoi quattro accessi",
      page: "naples",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const positano = { en, it };
