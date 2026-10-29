import type { AmalfiDestination } from "./types";

/**
 * Amalfi.
 *
 * ── The one distinction this page exists to hold ──────────────────────────
 * The Comune's own traffic regulation lets a private-hire vehicle **into** the
 * historic centre, on condition it is out within sixty minutes and does not
 * park. A different article of the same regulation bans **stopping as well as
 * parking, around the clock**, in the four streets a visitor would actually
 * want to be set down in — Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi
 * and Via Pietro Capuano.
 *
 * Entering is not stopping. Merging the two would turn a published access
 * permission into an invented drop-off, and it is the single most likely way
 * this page could put somebody in a stopped car in the wrong street. So the
 * two live in separate bands, and the hero's middle row contradicts its first.
 *
 * ── Documents, all read in full and re-verified before writing ────────────
 * All three were re-downloaded on 27 October 2026 and confirmed byte-identical
 * by SHA-256 to the copies read during the Stage 2D audit.
 *
 *   1. **The Comune's traffic regulation for the historic centre.** Arts. 1, 8,
 *      9 and 17. The Comune lists it as "Regolamento Viabilità 2025"; the
 *      document itself carries **no approval date and no deliberation number**,
 *      and the page says so rather than inventing either.
 *   2. **Ordinanza del Settore Polizia Municipale n. 4 del 28/03/2026**,
 *      Registro Generale n. 11 — the 2026 seasonal pedestrian island.
 *   3. **Amalfi Mobilità's Luna Rossa regulation**, attached to the sole
 *      administrator's deliberation n. 97, verbale n. 66, of 3 August 2023.
 *
 * ── Why the seasonal band is quarantined ──────────────────────────────────
 * Ordinance n. 4 ran from 1 April to **31 October 2026** — four days from the
 * date this page was written. Its `expiry` and `successor` fields are required
 * by the type, it is never the page's headline, and the year-round regulation
 * carries the spine instead. The Comune's Notizie and Comunicati listings were
 * both read on 27 October 2026 and **no successor ordinance was published**;
 * the page states that, with the date of the check, rather than implying the
 * measure continues or guessing at 2027 dates.
 *
 * ── Deliberately absent ───────────────────────────────────────────────────
 * Any car-park tariff: the only figures published anywhere are in a document
 * expressly "decorrenti a far data dal 6.7.2011", fifteen years old, and they
 * are not repeated. Any drop-off point: none is established, and art. 17 makes
 * the obvious one unlawful. The school island's afternoon hours: set by a
 * separate ordinance that was not read. The SS163 alternating-plate scheme:
 * different road, different authority, and unreachable — refused in the same
 * terms as on the Positano page, so the two agree.
 */

const regEn = {
  text: "The access rules, the sixty-minute limit, the stopping prohibition and the hotel-garage provision are set out in the traffic regulation for the historic centre published by the Comune di Amalfi, which the Comune lists as “Regolamento Viabilità 2025”. Read on 27 October 2026. The document carries no approval date and no deliberation number, and none is supplied here:",
  linkText: "the Comune's traffic regulation for the historic centre",
  href: "https://www.comune.amalfi.sa.it/materiali/2501.pdf",
};

const regIt = {
  text: "Le condizioni di accesso, il limite dei sessanta minuti, il divieto di fermata e la norma sui garage delle strutture ricettive sono stabiliti dal regolamento della viabilità nel centro storico pubblicato dal Comune di Amalfi, che il Comune elenca come «Regolamento Viabilità 2025». Consultato il 27 ottobre 2026. Il documento non riporta data di approvazione né numero di delibera, e qui non ne vengono indicati:",
  linkText: "il regolamento della viabilità nel centro storico del Comune",
  href: "https://www.comune.amalfi.sa.it/materiali/2501.pdf",
};

const ordEn = {
  text: "The seasonal pedestrian island was established by Ordinanza del Settore Polizia Municipale n. 4 of 28 March 2026, Registro Generale n. 11, published by the Comune di Amalfi with the full text attached. Read on 27 October 2026:",
  linkText: "the Comune's notice and the ordinance attached to it",
  href: "https://comune.amalfi.sa.it/Novita/Notizie/Isola-pedonale-nel-centro-storico-di-Amalfi-per-la-stagione-turistica-2026",
};

const ordIt = {
  text: "L'isola pedonale stagionale è stata istituita con Ordinanza del Settore Polizia Municipale n. 4 del 28 marzo 2026, Registro Generale n. 11, pubblicata dal Comune di Amalfi con il testo completo in allegato. Consultata il 27 ottobre 2026:",
  linkText: "l'avviso del Comune e l'ordinanza allegata",
  href: "https://comune.amalfi.sa.it/Novita/Notizie/Isola-pedonale-nel-centro-storico-di-Amalfi-per-la-stagione-turistica-2026",
};

const parkEn = {
  text: "The height and fuel restrictions apply to the Luna Rossa car park specifically, and are published in its own regulation and general conditions, attached to the sole administrator's deliberation n. 97, verbale n. 66, of 3 August 2023. That document states that the tariffs in force are displayed by the operator, so none is quoted here. Read on 27 October 2026:",
  linkText: "the Luna Rossa car park's own regulation",
  href: "https://www.comune.amalfi.sa.it/materiali/2562.pdf",
};

const parkIt = {
  text: "I limiti di altezza e di alimentazione riguardano specificamente il parcheggio Luna Rossa e sono pubblicati nel suo regolamento e condizioni generali, allegato alla delibera dell'Amministratore Unico n. 97, verbale n. 66, del 3 agosto 2023. Quel documento precisa che le tariffe in vigore sono esposte dal gestore, perciò qui non ne viene indicata nessuna. Consultato il 27 ottobre 2026:",
  linkText: "il regolamento del parcheggio Luna Rossa",
  href: "https://www.comune.amalfi.sa.it/materiali/2562.pdf",
};

const en: AmalfiDestination = {
  meta: {
    title: "Private transfers to Amalfi",
    description:
      "The Comune's regulation lets a private-hire vehicle into Amalfi's historic centre for up to sixty minutes, and bans stopping outright in its four main streets.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers to Amalfi",
    lead:
      "Amalfi's own traffic regulation does two things that sound contradictory and are not. It lets a private-hire vehicle drive into the historic centre, with an hour to get out again. And in the four streets at the heart of that centre it forbids stopping altogether, at every hour of the day. Being allowed in is not the same as being allowed to stop.",
    primaryCta: "Request a quotation",
    secondaryCta: "The access rules",
    chooser: {
      heading: "Three questions with three different answers",
      note: "All three come from the traffic regulation the Comune publishes for its historic centre. The seasonal pedestrian island is a separate, dated measure and is set out further down.",
      rows: [
        {
          id: "drive-in",
          code: "01",
          name: "Driving into the centre",
          fact: "Permitted for taxi and private-hire vehicles, which may not park and must be out within sixty minutes.",
          section: "access",
        },
        {
          id: "stop",
          code: "02",
          name: "Stopping in the four main streets",
          fact: "Prohibited outright, 00:00 to 24:00 — parking and stopping alike.",
          section: "stopping",
        },
        {
          id: "hotel",
          code: "03",
          name: "A hotel inside the zone",
          fact: "Possible where the hotel has its own garage — an arrangement the hotel makes, not one we hold.",
          section: "hotel",
        },
      ],
    },
  },

  access: {
    id: "access",
    eyebrow: "The year-round rules",
    heading: "What the Comune's regulation allows, and for how long",
    lead:
      "These apply all year. They are not the summer pedestrian island, which is a separate measure with its own dates.",
    paragraphs: [
      "The Comune defines its limited-traffic zone street by street: the stretch taking in Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi, Via Pietro Capuano, Piazza Spirito Santo, Via Cardinale Marino del Giudice, Via Casamare, Via delle Cartiere and Largo ex Saponiera. The regulation governs access, circulation, presence, parking and exit within that area.",
      "Vehicles providing a taxi or private-hire service appear in the regulation's own list of categories that may enter and circulate but may not park, with an obligation to leave within sixty minutes. That is the provision a transfer to Amalfi actually runs on: the vehicle is admitted to pass through and to set off again, not to remain.",
      "On school days the regulation also closes the area between Via Mansone I, Via Lorenzo d'Amalfi, Via Pietro Capuano and Piazza Spirito Santo to access and circulation from 07:45 to 08:30, and says further closures coinciding with pupils leaving are fixed by a separate ordinance of the municipal police. Only the 07:45 to 08:30 window is stated in the regulation itself, so it is the only school-day time given here.",
    ],
    unverified: {
      heading: "What we could not establish",
      body: "The regulation's approval date and deliberation number are not printed in the document, and the Comune's page that links it gives neither — so this page attributes it as the Comune's published regulation, listed by the Comune as “Regolamento Viabilità 2025”, and dates it no further. The separate ordinance setting the afternoon school closures was not obtained, so those hours are not stated anywhere here.",
    },
    source: regEn,
  },

  stopping: {
    id: "stopping",
    eyebrow: "Where a vehicle may not even pause",
    heading: "Four streets with an absolute stopping ban",
    lead:
      "This is the article that decides where a transfer can and cannot end, and it is stricter than a parking restriction.",
    paragraphs: [
      "The regulation imposes an absolute prohibition on parking and, separately, on stopping — in its own words, di sosta e di fermata — from 00:00 to 24:00, in four named streets. A stopping ban is not a parking ban with a shorter clock: it rules out pausing to let someone out.",
      "Those four streets are the centre of Amalfi, including the piazza in front of the cathedral. Which means the place most people would name as their destination is a place no vehicle is permitted to halt, at any hour, however briefly, and regardless of any other permission it holds.",
    ],
    streetsLabel: "Subject to the 00:00–24:00 ban on parking and stopping",
    streets: [
      "Via Mansone I",
      "Piazza Duomo",
      "Via Lorenzo d'Amalfi",
      "Via Pietro Capuano",
    ],
    callout: {
      heading: "Permission to enter is not permission to stop",
      body: "Nothing on this page should be read as saying that a vehicle entitled to drive into the zone may therefore stop, wait or set passengers down inside it. The regulation grants the first and refuses the second, and the refusal is absolute in the four streets listed here.",
    },
    source: regEn,
  },

  meeting: {
    id: "meeting",
    eyebrow: "The gap in the official record",
    heading: "No official meeting point is published",
    body: "We looked for one. The regulation describes who may enter, how long they may stay and where they may not stop, but it names no place where a passenger may be picked up or set down. The seasonal ordinance permits taxi and private-hire access when a journey starts or ends inside the pedestrian area, yet it too names no stopping place. Nothing in the material we read establishes a meeting point, so none is described here.",
    note: "Where your driver can actually meet you is settled in the reply to your request, against the rules in force that day. We would rather tell you that than name a kerb the Comune has not.",
  },

  hotel: {
    id: "hotel",
    eyebrow: "If you are staying inside the zone",
    heading: "The hotel-garage provision, and whose arrangement it is",
    lead:
      "The regulation has a route for guests of accommodation inside the zone, and it runs through the hotel rather than through us.",
    paragraphs: [
      "Vehicles bound for accommodation businesses inside the limited-traffic zone that have their own garage may enter and circulate without parking on the street. The regulation requires the accommodation business itself to communicate the vehicle's registration plates to Amalfi Mobilità, and defines a garage of that kind narrowly: one operating exclusively for that business, licensed to the same company.",
      "So if your hotel is inside the zone and has its own garage, the plates go in through the hotel. Ask them directly, and ask early, naming the date and the vehicle if you already know it.",
    ],
    note:
      "This is the hotel's arrangement to make with Amalfi Mobilità, not a permit we hold or can obtain on your behalf, and not something this page can confirm for any particular property. We have verified no hotel's garage, no hotel's licence and no hotel's arrangement.",
    source: regEn,
  },

  parking: {
    id: "parking",
    eyebrow: "One car park, one set of rules",
    heading: "What the Luna Rossa car park will not take",
    lead:
      "A genuinely practical constraint, and one that can decide which vehicle is suitable — but it applies to this facility and no other.",
    asOf: "Published 3 August 2023",
    items: [
      {
        term: "Under two metres tall",
        detail:
          "The car park's regulation admits cars below two metres in gross height, measured to include a roof rack or anything carried on the roof, and states that vehicles above that height may not park there.",
      },
      {
        term: "Petrol, diesel or electric only",
        detail:
          "The same regulation excludes vehicles running on LPG or methane, and says so even where the vehicle is fitted with a petrol invertor.",
      },
      {
        term: "Entered from the coast road",
        detail:
          "The regulation describes the car park as cut into rock with forced-air ventilation, paid, uncustodied and under video surveillance, with access from the SS 163 Amalfitana.",
      },
    ],
    note:
      "These limits are the Luna Rossa car park's own and are not generalised here to any other car park in Amalfi. The Comune names several others in its regulation and sets their tariffs by a separate deliberation, which we did not obtain — so no price appears on this page. Nor does this page claim that any particular vehicle of ours meets or fails these limits; that is part of the reply to your request.",
    source: parkEn,
  },

  seasonal: {
    id: "seasonal",
    eyebrow: "A dated measure, not a standing rule",
    heading: "The 2026 summer pedestrian island",
    lead:
      "Read the dates before the detail. This was a seasonal measure for 2026 and it is written here as one.",
    ordinance:
      "Ordinanza del Settore Polizia Municipale n. 4 of 28 March 2026, Registro Generale n. 11",
    validity: "In force from 1 April to 31 October 2026",
    expiry:
      "This measure stops applying after 31 October 2026. Nothing on this page states or implies that it continues beyond that date, and no dates for any later year are given, because none has been published.",
    windowsLabel: "The four daily windows the ordinance set",
    windows: [
      { label: "First window", value: "11.10 – 11.50" },
      { label: "Second window", value: "12.10 – 12.50" },
      { label: "Third window", value: "14.10 – 14.50" },
      { label: "Fourth window", value: "15.10 – 15.50" },
    ],
    permitted:
      "Within the area the ordinance covers — between Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi, Via Pietro Capuano and Largo Spirito Santo — it prohibited the circulation of all vehicles during those windows, with a list of exceptions. Taxi and private-hire vehicles were among them, permitted when the pedestrian area was the start or the arrival point of the journey. Hotel guests were permitted a first access to their accommodation. That is a permission to enter during a closure; it is not, and was not, permission to stop, and the four-street ban above applied regardless.",
    successor:
      "We checked the Comune's news and announcements listings on 27 October 2026 and found no successor ordinance and no measure extending this one beyond 31 October 2026. That is what we found on that date, not a guarantee that none exists or that none will be published. Check with the Comune before relying on any of it.",
    source: ordEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover in Amalfi",
    body: "We arrange transfers in Campania, including the Amalfi Coast road and Amalfi itself. That is our own operating position — the Comune publishes nothing about us, and nothing here should be read as a municipal arrangement, an endorsement, a permit we hold, or permission to stop anywhere in particular. Which vehicle is suitable and where a driver can meet you are settled in the reply to your request.",
  },

  send: {
    id: "send",
    heading: "What to send with an Amalfi request",
    lead:
      "Two of these matter more in Amalfi than almost anywhere, because the rules turn on time and on where you are actually going.",
    items: [
      "Where you are starting from and the date",
      "The address or hotel you are going to, and whether it is inside the historic centre",
      "Whether that hotel has its own garage, if you know",
      "The time you would like to arrive, and anything fixed you have to meet",
      "Passengers and luggage",
    ],
    note:
      "Tell us whether the address is inside the centre. The regulation gives a vehicle sixty minutes inside the zone and forbids it from stopping in the four central streets, so an address a few metres either side of that boundary can mean a different arrangement.",
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
        page: "positano",
        label: "Transfers to Positano",
        detail:
          "The other coast comune with published rules, and an entirely different kind: a charge by seat count rather than a limit by the clock.",
      },
      {
        page: "ravello",
        label: "Transfers to Ravello",
        detail:
          "Above Amalfi, and governed differently again: four named areas, and permission booked the day before.",
      },
      {
        page: "naples-cruise-port",
        label: "The cruise terminal at the Stazione Marittima",
        detail:
          "The quay to name if your day on the coast begins or ends on a ship.",
      },
      {
        page: "salerno-airport",
        label: "Salerno Costa d'Amalfi Airport (QSR)",
        detail:
          "The region's other airport, with a terminal that closes overnight.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Amalfi questions",
    lead: "Mostly about the difference between getting in and being able to stop.",
    items: [
      {
        question: "Can the car drive into Amalfi's historic centre?",
        answer:
          "The Comune's regulation lists taxi and private-hire vehicles among the categories that may enter and circulate in the limited-traffic zone, on condition that they do not park and that they leave within sixty minutes. That is permission to pass through, not to remain.",
      },
      {
        question: "Can we be dropped off at the cathedral?",
        answer:
          "No. The regulation imposes an absolute ban on parking and on stopping, from 00:00 to 24:00, in Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi and Via Pietro Capuano. A stopping ban rules out pausing to let someone out, whatever other permission the vehicle holds.",
      },
      {
        question: "So where will the driver meet us?",
        answer:
          "Settled in the reply to your request. Nothing in the official material we read names a pick-up or set-down point anywhere in the zone, so there is none this page could describe honestly. We would rather say that than name a street the Comune has not.",
      },
      {
        question: "What was the summer pedestrian island, and does it still apply?",
        answer:
          "Ordinance n. 4 of 28 March 2026 closed the central area to all vehicle circulation in four daily windows — 11.10–11.50, 12.10–12.50, 14.10–14.50 and 15.10–15.50 — from 1 April to 31 October 2026, with taxi and private-hire access permitted when the journey started or ended inside the area. It stops applying after 31 October 2026. We checked the Comune's listings on 27 October 2026 and found no successor, so ask the Comune about any later measure.",
      },
      {
        question: "Our hotel is inside the zone. Can the car reach it?",
        answer:
          "Possibly, and it depends on the hotel rather than on us. The regulation allows vehicles bound for accommodation inside the zone that has its own garage, and requires the hotel to communicate the plates to Amalfi Mobilità. Ask your hotel directly and early. We hold no permit of our own and cannot arrange this for you.",
      },
      {
        question: "Is there a car park that takes any vehicle?",
        answer:
          "Not one we can promise. The Luna Rossa car park's own regulation, published in August 2023, admits cars under two metres in gross height and excludes vehicles running on LPG or methane even with a petrol invertor. Those are that car park's rules; the Comune names others and sets their tariffs separately, and we have not obtained those, so no prices appear here.",
      },
      {
        question: "What about the alternating number-plate rule on the coast road?",
        answer:
          "That is a different restriction, on a different road, under a different authority — the state road along the coast rather than Amalfi's own streets. We could not reach the road authority's site at all, so this page makes no claim about it, including about whether any category is exempt. Check with the road authority and the municipalities before relying on anything you read about it elsewhere.",
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
    heading: "Tell us the address, not just the town",
    body:
      "Whether it sits inside the historic centre changes what is possible, and whether the hotel has a garage changes it again. Both come back answered in the quotation.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "Positano, and its charge by seat count",
      page: "positano",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: AmalfiDestination = {
  meta: {
    title: "Transfer privati per Amalfi",
    description:
      "Il regolamento del Comune consente a un veicolo NCC di entrare nel centro storico di Amalfi per un massimo di sessanta minuti, e vieta del tutto la fermata nelle quattro vie principali.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati per Amalfi",
    lead:
      "Il regolamento della viabilità di Amalfi fa due cose che sembrano contraddirsi e non si contraddicono. Consente a un veicolo a noleggio con conducente di entrare nel centro storico, con un'ora per uscirne. E nelle quattro vie che ne sono il cuore vieta del tutto la fermata, a qualsiasi ora. Poter entrare non significa potersi fermare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Le condizioni di accesso",
    chooser: {
      heading: "Tre domande con tre risposte diverse",
      note: "Tutte e tre vengono dal regolamento della viabilità che il Comune pubblica per il proprio centro storico. L'isola pedonale stagionale è una misura distinta e datata, riportata più in basso.",
      rows: [
        {
          id: "drive-in",
          code: "01",
          name: "Entrare nel centro",
          fact: "Consentito ai veicoli taxi e NCC, che non possono sostare e devono uscire entro sessanta minuti.",
          section: "accesso",
        },
        {
          id: "stop",
          code: "02",
          name: "Fermarsi nelle quattro vie principali",
          fact: "Vietato in assoluto, dalle 0:00 alle 24:00: sosta e fermata allo stesso modo.",
          section: "fermata",
        },
        {
          id: "hotel",
          code: "03",
          name: "Un albergo dentro la zona",
          fact: "Possibile se l'albergo ha un garage pertinenziale: è un adempimento suo, non un permesso nostro.",
          section: "albergo",
        },
      ],
    },
  },

  access: {
    id: "accesso",
    eyebrow: "Le regole di tutto l'anno",
    heading: "Che cosa consente il regolamento del Comune, e per quanto tempo",
    lead:
      "Valgono tutto l'anno. Non sono l'isola pedonale estiva, che è una misura distinta con date proprie.",
    paragraphs: [
      "Il Comune definisce la propria zona a traffico limitato via per via: il tratto che comprende Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi, Via Pietro Capuano, Piazza Spirito Santo, Via Cardinale Marino del Giudice, Via Casamare, Via delle Cartiere e Largo ex Saponiera. Il regolamento disciplina accesso, circolazione, permanenza, sosta e uscita dei veicoli all'interno di quell'area.",
      "I veicoli che esercitano servizio taxi o NCC figurano nell'elenco delle categorie che possono accedere e circolare ma non sostare, con obbligo di uscita entro sessanta minuti. È questa la norma su cui si regge davvero un transfer per Amalfi: il veicolo è ammesso a transitare e a ripartire, non a restare.",
      "Nei giorni di apertura delle scuole il regolamento vieta inoltre accesso e circolazione nell'area compresa tra Via Mansone I, Via Lorenzo d'Amalfi, Via Pietro Capuano e Piazza Spirito Santo dalle 7.45 alle 8.30, e precisa che gli altri orari coincidenti con l'uscita massiva degli studenti sono fissati con apposita ordinanza del Comando di Polizia Municipale. Solo la fascia 7.45–8.30 è indicata nel regolamento stesso, e quindi è l'unico orario scolastico riportato qui.",
    ],
    unverified: {
      heading: "Che cosa non abbiamo potuto stabilire",
      body: "La data di approvazione e il numero di delibera del regolamento non sono riportati nel documento, e la pagina del Comune che lo collega non li indica: questa pagina lo attribuisce quindi come regolamento pubblicato dal Comune, da esso elencato come «Regolamento Viabilità 2025», senza datarlo ulteriormente. L'ordinanza distinta che fissa le chiusure scolastiche pomeridiane non è stata reperita, perciò quegli orari non sono indicati da nessuna parte qui.",
    },
    source: regIt,
  },

  stopping: {
    id: "fermata",
    eyebrow: "Dove un veicolo non può nemmeno accostare",
    heading: "Quattro vie con divieto assoluto di fermata",
    lead:
      "È l'articolo che decide dove un transfer può e non può concludersi, ed è più severo di un divieto di sosta.",
    paragraphs: [
      "Il regolamento stabilisce un divieto assoluto di sosta e, distintamente, di fermata — sono le sue parole — dalle ore 0:00 alle ore 24:00, in quattro vie indicate per nome. Un divieto di fermata non è un divieto di sosta con il cronometro più corto: esclude anche l'accostare per far scendere qualcuno.",
      "Quelle quattro vie sono il centro di Amalfi, compresa la piazza davanti al Duomo. Significa che il luogo che quasi tutti indicherebbero come destinazione è un luogo in cui a nessun veicolo è consentito fermarsi, a nessuna ora, nemmeno per un istante, e indipendentemente da qualsiasi altro titolo possegga.",
    ],
    streetsLabel: "Soggette al divieto di sosta e fermata 0:00–24:00",
    streets: [
      "Via Mansone I",
      "Piazza Duomo",
      "Via Lorenzo d'Amalfi",
      "Via Pietro Capuano",
    ],
    callout: {
      heading: "Il permesso di entrare non è il permesso di fermarsi",
      body: "Nulla in questa pagina va letto come se un veicolo autorizzato a entrare nella zona possa per questo fermarsi, attendere o far scendere i passeggeri al suo interno. Il regolamento concede la prima cosa e nega la seconda, e nelle quattro vie elencate qui il divieto è assoluto.",
    },
    source: regIt,
  },

  meeting: {
    id: "incontro",
    eyebrow: "La lacuna nei documenti ufficiali",
    heading: "Nessun punto d'incontro ufficiale è pubblicato",
    body: "Lo abbiamo cercato. Il regolamento descrive chi può entrare, per quanto tempo può restare e dove non può fermarsi, ma non indica alcun luogo in cui un passeggero possa salire o scendere. L'ordinanza stagionale consente l'accesso a taxi e NCC quando la corsa parte o arriva nell'area pedonale, ma nemmeno essa indica un luogo di fermata. Nel materiale che abbiamo letto nulla stabilisce un punto d'incontro, e qui non ne viene descritto nessuno.",
    note: "Dove il vostro autista potrà effettivamente incontrarvi si definisce nella risposta alla vostra richiesta, in base alle regole in vigore quel giorno. Preferiamo dirvelo piuttosto che indicarvi un marciapiede che il Comune non ha indicato.",
  },

  hotel: {
    id: "albergo",
    eyebrow: "Se alloggiate dentro la zona",
    heading: "La norma sui garage delle strutture ricettive, e di chi è l'adempimento",
    lead:
      "Il regolamento prevede una strada per gli ospiti delle strutture dentro la zona, e passa dall'albergo e non da noi.",
    paragraphs: [
      "I veicoli diretti a strutture ricettive ubicate nella zona a traffico limitato che siano dotate di garage pertinenziali possono accedere e circolare senza sostare su strada. Il regolamento impone alla struttura ricettiva stessa di comunicare ad Amalfi Mobilità le targhe dei veicoli, e definisce in senso stretto quel tipo di garage: solo quelli che operano al servizio esclusivo di quella struttura e la cui licenza d'esercizio è intestata alla medesima ditta.",
      "Se dunque il vostro albergo è dentro la zona e ha un garage proprio, le targhe passano dall'albergo. Chiedetelo direttamente a loro, e con anticipo, indicando la data e il veicolo se già lo conoscete.",
    ],
    note:
      "È un adempimento che l'albergo deve assolvere verso Amalfi Mobilità, non un permesso che possediamo o che possiamo ottenere per voi, e non qualcosa che questa pagina possa confermare per una struttura specifica. Non abbiamo verificato il garage, la licenza né gli adempimenti di alcun albergo.",
    source: regIt,
  },

  parking: {
    id: "parcheggio",
    eyebrow: "Un parcheggio, un suo regolamento",
    heading: "Che cosa il parcheggio Luna Rossa non accetta",
    lead:
      "Un vincolo concreto, che può decidere quale veicolo sia adatto, ma che riguarda questa struttura e nessun'altra.",
    asOf: "Pubblicato il 3 agosto 2023",
    items: [
      {
        term: "Sotto i due metri di altezza",
        detail:
          "Il regolamento del parcheggio ammette le auto di altezza inferiore a due metri, misurata al lordo di portabagagli o di quanto sia caricato sul tetto, e stabilisce che i veicoli più alti non vi possono sostare.",
      },
      {
        term: "Solo benzina, gasolio o elettrico",
        detail:
          "Lo stesso regolamento esclude i veicoli alimentati a gas o metano, e lo precisa anche quando il veicolo sia dotato di invertitore a benzina.",
      },
      {
        term: "Ingresso dalla strada costiera",
        detail:
          "Il regolamento descrive il parcheggio come realizzato in roccia con ventilazione ad aria forzata, a pagamento, senza custodia e sottoposto a videosorveglianza, con accesso dalla S.S. 163 Amalfitana.",
      },
    ],
    note:
      "Questi limiti sono propri del parcheggio Luna Rossa e qui non vengono estesi a nessun altro parcheggio di Amalfi. Il Comune ne elenca diversi altri nel proprio regolamento e ne fissa le tariffe con delibera distinta, che non abbiamo reperito: su questa pagina non compare quindi alcun prezzo. Né questa pagina afferma che un nostro veicolo rispetti o non rispetti tali limiti: fa parte della risposta alla vostra richiesta.",
    source: parkIt,
  },

  seasonal: {
    id: "stagionale",
    eyebrow: "Una misura datata, non una regola permanente",
    heading: "L'isola pedonale estiva 2026",
    lead:
      "Leggete le date prima dei dettagli. Era una misura stagionale per il 2026 e qui è riportata come tale.",
    ordinance:
      "Ordinanza del Settore Polizia Municipale n. 4 del 28 marzo 2026, Registro Generale n. 11",
    validity: "In vigore dal 1° aprile al 31 ottobre 2026",
    expiry:
      "Questa misura cessa di applicarsi dopo il 31 ottobre 2026. Nulla in questa pagina afferma o lascia intendere che prosegua oltre quella data, e non vengono indicate date per anni successivi, perché nessuna è stata pubblicata.",
    windowsLabel: "Le quattro fasce orarie giornaliere fissate dall'ordinanza",
    windows: [
      { label: "Prima fascia", value: "11.10 – 11.50" },
      { label: "Seconda fascia", value: "12.10 – 12.50" },
      { label: "Terza fascia", value: "14.10 – 14.50" },
      { label: "Quarta fascia", value: "15.10 – 15.50" },
    ],
    permitted:
      "Nell'area coperta dall'ordinanza — tra Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi, Via Pietro Capuano e Largo Spirito Santo — era vietata la circolazione di tutti i veicoli durante quelle fasce, con un elenco di eccezioni. Fra queste i veicoli del servizio pubblico non di linea, taxi e noleggio con conducente, consentiti quando l'area pedonale fosse la partenza o l'arrivo della corsa-servizio. Ai clienti degli alberghi era consentito un primo accesso alla struttura. È un permesso di entrare durante una chiusura: non era, e non è, un permesso di fermarsi, e il divieto nelle quattro vie qui sopra valeva comunque.",
    successor:
      "Abbiamo consultato gli elenchi di notizie e comunicati del Comune il 27 ottobre 2026 e non abbiamo trovato alcuna ordinanza successiva né alcuna misura che prorogasse questa oltre il 31 ottobre 2026. È quanto abbiamo riscontrato in quella data, non una garanzia che non esista o che non venga pubblicata. Verificate con il Comune prima di fare affidamento su queste informazioni.",
    source: ordIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo ad Amalfi",
    body: "Organizziamo transfer in Campania, compresa la strada della Costiera Amalfitana e Amalfi stessa. È la nostra posizione operativa: il Comune non pubblica nulla sul nostro conto, e niente qui va letto come un accordo comunale, un avallo, un permesso che possediamo o un'autorizzazione a fermarsi in un punto preciso. Quale veicolo sia adatto e dove un autista possa incontrarvi si definiscono nella risposta alla vostra richiesta.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per Amalfi",
    lead:
      "Due di queste voci contano ad Amalfi più che quasi altrove, perché le regole dipendono dal tempo e da dove state andando davvero.",
    items: [
      "Da dove partite e la data",
      "L'indirizzo o l'albergo di destinazione, e se si trova dentro il centro storico",
      "Se quell'albergo ha un garage pertinenziale, se lo sapete",
      "A che ora desiderate arrivare, e se avete impegni a orario fisso",
      "Passeggeri e bagagli",
    ],
    note:
      "Diteci se l'indirizzo è dentro il centro. Il regolamento concede al veicolo sessanta minuti nella zona e gli vieta di fermarsi nelle quattro vie centrali: un indirizzo a pochi metri da un lato o dall'altro di quel confine può comportare un'organizzazione diversa.",
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
        page: "positano",
        label: "Transfer per Positano",
        detail:
          "L'altro comune costiero con regole pubblicate, di natura completamente diversa: una tariffa in base ai posti invece di un limite di tempo.",
      },
      {
        page: "ravello",
        label: "Transfer per Ravello",
        detail:
          "Sopra Amalfi, e disciplinata in modo ancora diverso: quattro aree indicate e un permesso prenotato il giorno prima.",
      },
      {
        page: "naples-cruise-port",
        label: "Il terminal crociere alla Stazione Marittima",
        detail:
          "La banchina da indicare se la vostra giornata in costiera inizia o finisce su una nave.",
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
    heading: "Domande su Amalfi",
    lead: "In gran parte sulla differenza fra entrare e potersi fermare.",
    items: [
      {
        question: "L'auto può entrare nel centro storico di Amalfi?",
        answer:
          "Il regolamento del Comune elenca i veicoli taxi e NCC fra le categorie che possono accedere e circolare nella zona a traffico limitato, a condizione di non sostare e di uscire entro sessanta minuti. È un permesso di transitare, non di restare.",
      },
      {
        question: "Possiamo scendere davanti al Duomo?",
        answer:
          "No. Il regolamento stabilisce il divieto assoluto di sosta e di fermata, dalle 0:00 alle 24:00, in Via Mansone I, Piazza Duomo, Via Lorenzo d'Amalfi e Via Pietro Capuano. Un divieto di fermata esclude anche l'accostare per far scendere qualcuno, qualunque altro titolo abbia il veicolo.",
      },
      {
        question: "E allora dove ci incontrerà l'autista?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. Nel materiale ufficiale che abbiamo letto nulla indica un punto di salita o discesa nella zona: non esiste quindi un luogo che questa pagina possa descrivere onestamente. Preferiamo dirlo piuttosto che indicare una via che il Comune non ha indicato.",
      },
      {
        question: "Che cos'era l'isola pedonale estiva, e vale ancora?",
        answer:
          "L'ordinanza n. 4 del 28 marzo 2026 vietava la circolazione di tutti i veicoli nell'area centrale in quattro fasce giornaliere — 11.10–11.50, 12.10–12.50, 14.10–14.50 e 15.10–15.50 — dal 1° aprile al 31 ottobre 2026, con accesso consentito a taxi e NCC quando la corsa partiva o arrivava nell'area. Cessa di applicarsi dopo il 31 ottobre 2026. Abbiamo consultato gli elenchi del Comune il 27 ottobre 2026 senza trovare alcuna ordinanza successiva: chiedete al Comune per eventuali misure più recenti.",
      },
      {
        question: "Il nostro albergo è dentro la zona. L'auto può arrivarci?",
        answer:
          "Forse, e dipende dall'albergo e non da noi. Il regolamento ammette i veicoli diretti a strutture ricettive dentro la zona dotate di garage pertinenziale, e impone alla struttura di comunicare le targhe ad Amalfi Mobilità. Chiedetelo direttamente al vostro albergo e con anticipo. Noi non possediamo alcun permesso e non possiamo provvedere per voi.",
      },
      {
        question: "C'è un parcheggio che accetti qualsiasi veicolo?",
        answer:
          "Nessuno che possiamo garantire. Il regolamento del parcheggio Luna Rossa, pubblicato nell'agosto 2023, ammette le auto di altezza inferiore a due metri ed esclude i veicoli a gas o metano anche con invertitore a benzina. Sono le regole di quel parcheggio; il Comune ne elenca altri e ne fissa le tariffe a parte, che non abbiamo reperito: qui non compaiono prezzi.",
      },
      {
        question: "E la regola delle targhe alterne sulla strada costiera?",
        answer:
          "È una limitazione diversa, su una strada diversa e di un'autorità diversa: la strada statale lungo la costa, non le vie di Amalfi. Non siamo riusciti a raggiungere in alcun modo il sito dell'ente gestore, perciò questa pagina non afferma nulla al riguardo, nemmeno sulle eventuali categorie esenti. Verificate con l'ente gestore e con i comuni prima di fare affidamento su quanto si legge altrove.",
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
    heading: "Indicate l'indirizzo, non solo il paese",
    body:
      "Se si trovi dentro il centro storico cambia ciò che è possibile, e se l'albergo abbia un garage lo cambia ancora. Entrambe le cose tornano con una risposta nel preventivo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Positano e la sua tariffa in base ai posti",
      page: "positano",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const amalfi = { en, it };
