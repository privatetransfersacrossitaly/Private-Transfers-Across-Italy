import type { Locale } from "@/lib/site";
import type { RomeHub } from "./types";

/**
 * The Rome destination hub, in both languages.
 *
 * Every factual claim here is recorded in `docs/rome-research-log.md` with
 * its source and the date it was checked. The ZTL hours are the most
 * volatile of them, which is why the page dates them in the visible copy and
 * links the reader to the city agency rather than presenting them as settled.
 *
 * The Italian is written as Italian. It says the same things and makes the
 * same admissions, but it is not the English run through a dictionary.
 */

const en: RomeHub = {
  meta: {
    title: "Private transfers in Rome",
    description:
      "Which airport, cruise port or station your journey actually starts from, what Rome's limited-traffic zones mean for a door-to-door pickup, and what to send when you ask for a quotation.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome and Lazio",
    h1: "Private transfers in Rome",
    lead: "Rome is served by two airports at very different distances, a cruise port in another town, and four railway stations. Most of what makes a transfer easy or awkward is decided before anyone gets into a car — by which of those you are actually arriving at, and by the street at the other end.",
    primaryCta: "Request a quotation",
    secondaryCta: "Start with your arrival point",
    note: "There are no prices or journey times on this page. What a journey costs, which vehicle it needs and where a driver can wait are settled in the answer to your request, because all four depend on details only you have.",
  },

  arrival: {
    id: "arrival",
    eyebrow: "Where the journey begins",
    heading: "Start with where you actually arrive",
    lead: "Four kinds of arrival point serve Rome, and the differences between them are larger than a map suggests.",
    rows: [
      {
        id: "fiumicino",
        role: "Airport",
        name: "Fiumicino (FCO)",
        page: "fiumicino",
        fact: "Leonardo da Vinci — about 32 km south-west of Rome",
        body: "The hub of the Rome system and much the larger of the two: about 51.3 million passengers in 2025, scheduled national, international and intercontinental flights, and two passenger terminals whose allocation depends on your airline.",
      },
      {
        id: "ciampino",
        role: "Airport",
        name: "Ciampino (CIA)",
        page: "ciampino",
        fact: "Giovan Battista Pastine — about 15 km south-east of Rome",
        body: "Closer to the city and far smaller — about 4 million passengers in 2025 — used mainly by low-cost airlines, express couriers and general aviation. If a ticket says only Rome, it is worth checking which of the two it means.",
      },
      {
        id: "civitavecchia",
        role: "Cruise port",
        name: "Civitavecchia",
        page: "civitavecchia",
        fact: "Roughly 70 km north-west of Rome",
        body: "A separate town with its own railway station, not a Rome quayside. Ships berth at numbered docks inside a working port, which is why a meeting point is something to agree rather than assume.",
      },
      {
        id: "stations",
        role: "Railway",
        name: "Rome's railway stations",
        page: "rome-stations",
        fact: "Termini has 32 tracks; Tiburtina has 17",
        body: "A high-speed train sets you down in the middle of the city with your luggage. Where a car can wait depends on which station it is and on the streets immediately around it.",
      },
    ],
    note: "Passenger figures are the airport operator's own, for 2025. Track counts are the railway infrastructure manager's.",
  },

  access: {
    id: "access",
    eyebrow: "Access",
    heading: "What decides where a car can stop",
    lead: "Much of central Rome is a limited-traffic zone. It is the single thing most likely to change where a door-to-door journey really ends.",
    paragraphs: [
      "A zona a traffico limitato — ZTL — is an area that unauthorised vehicles may not enter during published hours. Cameras at the entrances read number plates. It is not a parking restriction: it governs whether a vehicle may be on the street at all.",
      "The city's mobility agency lists five zones in the centre: Centro Storico, which has both a daytime and a night-time zone; Tridente; Trastevere, likewise day and night; San Lorenzo; and Testaccio. Among the categories permitted to enter, the agency names taxis and cars for hire with driver — noleggio con conducente, the category a private transfer belongs to.",
      "Permission to enter a zone is not the same as a street a car can use. Lanes in the centre are narrow, many are pedestrian, some close for works, markets or events, and no permit widens a road. For an address inside the centre the practical answer is often an agreed point a short walk away — which is a detail worth settling when the journey is arranged, not on the morning itself.",
    ],
    zones: [
      {
        term: "Centro Storico, daytime",
        detail:
          "06:30–18:00 Monday to Friday, and 14:00–18:00 on Saturday, public holidays excepted.",
      },
      {
        term: "Centro Storico, night",
        detail:
          "23:00–03:00 on Friday and Saturday. The night zone is not active in August.",
      },
      {
        term: "Trastevere, daytime",
        detail: "06:30–10:00 Monday to Saturday, public holidays excepted.",
      },
      {
        term: "Who may enter",
        detail:
          "Permit holders, holders of a disabled person's badge, and the categories set out in law — which include taxis and cars for hire with driver.",
      },
    ],
    source: {
      text: "Hours as published by Roma Servizi per la Mobilità and checked in October 2026. They are set by city ordinance and change, including seasonally, so check the rules for your own date:",
      linkText: "the agency publishes the current timetable",
      href: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/",
    },
  },

  districts: {
    id: "districts",
    eyebrow: "Districts",
    heading: "Where you are staying changes the journey",
    lead: "Not because one part of Rome is better served than another, but because the streets are genuinely different.",
    items: [
      {
        term: "Centro Storico",
        detail:
          "The historic centre, inside the limited-traffic zone, on narrow and frequently pedestrian streets. Expect to be met at an agreed point nearby rather than at the door itself.",
      },
      {
        term: "Termini and Esquilino",
        detail:
          "Around the main station. Broad approach roads and dense traffic; the constraint here is usually congestion and the station's own layout rather than access.",
      },
      {
        term: "Prati and the Vatican",
        detail:
          "Across the Tiber, laid out on a grid of wide nineteenth-century streets. Generally the easiest central area for a vehicle to reach an address.",
      },
      {
        term: "Trastevere",
        detail:
          "Has its own limited-traffic zone, day and night, on a web of lanes that were never built for cars. A nearby corner is usually the realistic place to meet.",
      },
      {
        term: "Monti",
        detail:
          "Between the Colosseum and Termini, on a hillside of narrow sloping streets, inside the centre's zone.",
      },
      {
        term: "EUR",
        detail:
          "A planned twentieth-century district south of the centre, with wide roads and generous frontages. Rome's exhibition and conference buildings are here.",
      },
    ],
  },

  routes: {
    id: "routes",
    eyebrow: "Journeys",
    heading: "The journeys people ask about most",
    lead: "Each of these has its own page, because each has its own practical problem.",
    items: [
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "A terminal at one end, a city address at the other.",
      },
      {
        page: "route-cia-rome",
        label: "Ciampino Airport to Rome",
        detail: "Shorter, smaller, and often very early or very late.",
      },
      {
        page: "route-rome-civitavecchia",
        label: "Rome to Civitavecchia cruise port",
        detail: "A sailing-day journey, counted back from all-aboard time.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia",
        detail: "Fly in and sail: same day, or the day before.",
      },
      {
        page: "rome-stations",
        label: "Rome's railway stations",
        detail: "Termini, Tiburtina, Ostiense and San Pietro.",
      },
    ],
  },

  beyond: {
    heading: "Beyond the city",
    paragraphs: [
      "Lazio holds a good deal within an easy drive of Rome. Tivoli alone has two UNESCO World Heritage sites — Villa Adriana, inscribed in 1999, and Villa d'Este, inscribed in 2001 — and the Castelli Romani and Ostia Antica are also close.",
      "A day of that kind is a different request from an airport run: it has stops, waiting and a shape that depends on what you want to see. There is no page here that sets one out, because one itinerary does not fit two travellers. Say where you would like to go and how long you have, and the answer will be about that.",
    ],
    source: {
      text: "The inscription dates above are from the World Heritage List;",
      linkText: "UNESCO publishes both entries",
      href: "https://whc.unesco.org/en/list/907/",
    },
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Questions worth answering before you ask",
    lead: "Short answers, and none of them a sales pitch.",
    items: [
      {
        question: "Which airport serves Rome?",
        answer:
          "Two do. Fiumicino, officially Leonardo da Vinci, is about 32 km south-west of the city and carries the great majority of the traffic — about 51.3 million passengers in 2025. Ciampino, officially Giovan Battista Pastine, is about 15 km south-east and handled about 4 million, mostly low-cost flights, express couriers and general aviation. Both are managed by Aeroporti di Roma.",
      },
      {
        question: "Is Civitavecchia in Rome?",
        answer:
          "No. It is a separate town roughly 70 km north-west of Rome with its own railway station, and its cruise port is a working port where ships berth at numbered docks. Treat the journey between the two as a real one, and confirm where inside the port you are to be met.",
      },
      {
        question: "Can a car collect me from my hotel door in the centre?",
        answer:
          "Sometimes. Taxis and cars for hire with driver are among the categories permitted to enter Rome's limited-traffic zones, but being permitted to enter a zone is not the same as there being a street a vehicle can use. In the historic centre a meeting point a short walk from the door, agreed in advance, is often the workable answer.",
      },
      {
        question: "What changes the price of a transfer?",
        answer:
          "The exact addresses at both ends, the date and the time, how many of you there are and how much luggage you have, the vehicle that suits that, and anything added to the journey. None of it can be answered from a page, which is what a quotation is for.",
      },
      {
        question: "Which Rome station will my train use?",
        answer:
          "Your ticket names it. Termini is the largest, with 32 tracks; Tiburtina, with 17, takes many high-speed services; Ostiense and San Pietro serve other lines. The station decides where a car can reasonably wait, so it is worth checking before you ask.",
      },
      {
        question: "How far ahead should I ask?",
        answer:
          "As soon as the flight, train or sailing is fixed. A request has to be read and answered before anything is arranged, and the details you can give early — the flight number, the full address, the number of bags — are what make the answer useful rather than approximate.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the journey",
    body: "Where you are landing, docking or arriving; where you are going; when; and how many of you there are with how much luggage. That is enough to answer properly.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "What to have ready", page: "home", hash: "prepare" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: RomeHub = {
  meta: {
    title: "Transfer privati a Roma",
    description:
      "Da quale aeroporto, porto o stazione comincia davvero il viaggio, che cosa comportano le ZTL di Roma per un servizio porta a porta e quali dati indicare quando chiedete un preventivo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Roma e Lazio",
    h1: "Transfer privati a Roma",
    lead: "Roma ha due aeroporti a distanze molto diverse, un porto crocieristico in un altro comune e quattro stazioni. Quasi tutto ciò che rende un transfer semplice o complicato si decide prima che qualcuno salga in macchina: dipende da dove arrivate davvero e dalla strada che vi aspetta all'altro capo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Partite dal punto di arrivo",
    note: "In questa pagina non troverete né prezzi né tempi di percorrenza. Quanto costa un viaggio, quale veicolo serve e dove può attendere l'autista si definiscono nella risposta alla vostra richiesta, perché dipendono da dati che avete solo voi.",
  },

  arrival: {
    id: "arrivo",
    eyebrow: "Da dove si parte",
    heading: "Partite da dove arrivate davvero",
    lead: "I punti di arrivo che servono Roma sono di quattro tipi, e fra loro le differenze sono maggiori di quanto suggerisca una cartina.",
    rows: [
      {
        id: "fiumicino",
        role: "Aeroporto",
        name: "Fiumicino (FCO)",
        page: "fiumicino",
        fact: "Leonardo da Vinci — a circa 32 km a sud-ovest di Roma",
        body: "È l'hub del sistema romano e di gran lunga il maggiore dei due: circa 51,3 milioni di passeggeri nel 2025, voli di linea nazionali, internazionali e intercontinentali, e due terminal passeggeri la cui assegnazione dipende dalla compagnia aerea.",
      },
      {
        id: "ciampino",
        role: "Aeroporto",
        name: "Ciampino (CIA)",
        page: "ciampino",
        fact: "Giovan Battista Pastine — a circa 15 km a sud-est di Roma",
        body: "Più vicino alla città e molto più piccolo — circa 4 milioni di passeggeri nel 2025 — usato soprattutto da compagnie low cost, corrieri espresso e aviazione generale. Se il biglietto indica soltanto Roma, vale la pena verificare di quale dei due si tratti.",
      },
      {
        id: "civitavecchia",
        role: "Porto crociere",
        name: "Civitavecchia",
        page: "civitavecchia",
        fact: "A circa 70 km a nord-ovest di Roma",
        body: "È un comune a sé, con una propria stazione ferroviaria: non una banchina di Roma. Le navi ormeggiano a banchine numerate all'interno di un porto operativo, e per questo il punto d'incontro va concordato, non dato per scontato.",
      },
      {
        id: "stazioni",
        role: "Ferrovia",
        name: "Le stazioni di Roma",
        page: "rome-stations",
        fact: "Termini ha 32 binari, Tiburtina 17",
        body: "Un treno ad alta velocità vi lascia in mezzo alla città con i bagagli. Dove possa attendere un'auto dipende da quale stazione sia e dalle strade che la circondano.",
      },
    ],
    note: "I dati sui passeggeri sono quelli pubblicati dal gestore aeroportuale per il 2025; il numero dei binari è quello del gestore dell'infrastruttura ferroviaria.",
  },

  access: {
    id: "accessi",
    eyebrow: "Accessi",
    heading: "Che cosa stabilisce dove un'auto può fermarsi",
    lead: "Gran parte del centro di Roma è zona a traffico limitato. È l'elemento che più di ogni altro può spostare il punto in cui finisce davvero un viaggio porta a porta.",
    paragraphs: [
      "Una ZTL è un'area in cui i veicoli non autorizzati non possono entrare negli orari pubblicati, con telecamere ai varchi che leggono le targhe. Non è una regola di sosta: riguarda la possibilità stessa di percorrere quelle strade.",
      "L'agenzia per la mobilità del Comune elenca cinque zone nel centro: Centro Storico, con una fascia diurna e una notturna; Tridente; Trastevere, anch'essa diurna e notturna; San Lorenzo; e Testaccio. Fra le categorie ammesse l'agenzia indica espressamente i taxi e le auto a noleggio con conducente (NCC), che è la categoria cui appartiene un transfer privato.",
      "Poter entrare in una zona, però, non significa che esista una strada percorribile. I vicoli del centro sono stretti, molti sono pedonali, alcuni chiudono per lavori, mercati o eventi, e nessun permesso allarga una carreggiata. Per un indirizzo in centro la soluzione concreta è spesso un punto concordato a pochi passi: un dettaglio da sistemare quando si organizza il viaggio, non la mattina stessa.",
    ],
    zones: [
      {
        term: "Centro Storico, diurna",
        detail:
          "Dalle 6.30 alle 18.00 dal lunedì al venerdì e dalle 14.00 alle 18.00 il sabato, festivi esclusi.",
      },
      {
        term: "Centro Storico, notturna",
        detail:
          "Dalle 23.00 alle 3.00 il venerdì e il sabato. In agosto la fascia notturna non è attiva.",
      },
      {
        term: "Trastevere, diurna",
        detail: "Dalle 6.30 alle 10.00 dal lunedì al sabato, festivi esclusi.",
      },
      {
        term: "Chi può entrare",
        detail:
          "I titolari di permesso, chi ha il contrassegno per persone con disabilità e le categorie previste dalla legge, fra cui i taxi e le auto a noleggio con conducente.",
      },
    ],
    source: {
      text: "Orari pubblicati da Roma Servizi per la Mobilità e verificati nell'ottobre 2026. Sono stabiliti per ordinanza e cambiano, anche con la stagione: verificate quelli validi per la vostra data.",
      linkText: "L'agenzia pubblica gli orari aggiornati",
      href: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/",
    },
  },

  districts: {
    id: "quartieri",
    eyebrow: "Quartieri",
    heading: "Dove alloggiate cambia il viaggio",
    lead: "Non perché una zona di Roma sia servita meglio di un'altra, ma perché le strade sono davvero diverse.",
    items: [
      {
        term: "Centro Storico",
        detail:
          "Il centro storico, dentro la zona a traffico limitato, con strade strette e spesso pedonali. Mettete in conto un punto d'incontro concordato lì vicino, più che davanti al portone.",
      },
      {
        term: "Termini ed Esquilino",
        detail:
          "Intorno alla stazione centrale. Strade di accesso ampie e traffico intenso: qui il vincolo è di solito la congestione e la conformazione della stazione, non l'accesso.",
      },
      {
        term: "Prati e Vaticano",
        detail:
          "Oltre il Tevere, su una maglia di strade ottocentesche larghe. In genere è l'area centrale in cui è più semplice raggiungere un indirizzo in auto.",
      },
      {
        term: "Trastevere",
        detail:
          "Ha una propria ZTL, diurna e notturna, su un reticolo di vicoli non pensati per le automobili. L'angolo di strada più vicino è di solito il punto d'incontro realistico.",
      },
      {
        term: "Monti",
        detail:
          "Fra il Colosseo e Termini, su una collina di vie strette e in pendenza, all'interno della zona del centro.",
      },
      {
        term: "EUR",
        detail:
          "Quartiere novecentesco pianificato a sud del centro, con strade larghe e ampi spazi davanti agli edifici. Qui si trovano i poli fieristici e congressuali della città.",
      },
    ],
  },

  routes: {
    id: "tratte",
    eyebrow: "Tratte",
    heading: "Le tratte di cui ci si chiede più spesso",
    lead: "Ognuna ha una pagina propria, perché ognuna ha un problema pratico diverso.",
    items: [
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "Un terminal da una parte, un indirizzo in città dall'altra.",
      },
      {
        page: "route-cia-rome",
        label: "Dall'aeroporto di Ciampino a Roma",
        detail: "Più corta, più piccola e spesso a orari estremi.",
      },
      {
        page: "route-rome-civitavecchia",
        label: "Da Roma al porto di Civitavecchia",
        detail: "Il giorno dell'imbarco, contato a ritroso dall'orario di rientro a bordo.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Da Fiumicino a Civitavecchia",
        detail: "Volo e crociera: stesso giorno, o il giorno prima.",
      },
      {
        page: "rome-stations",
        label: "Le stazioni ferroviarie di Roma",
        detail: "Termini, Tiburtina, Ostiense e San Pietro.",
      },
    ],
  },

  beyond: {
    heading: "Fuori città",
    paragraphs: [
      "Il Lazio offre molto a poca distanza da Roma. La sola Tivoli ha due siti del Patrimonio Mondiale UNESCO — Villa Adriana, iscritta nel 1999, e Villa d'Este, iscritta nel 2001 — e anche i Castelli Romani e Ostia Antica sono vicini.",
      "Una giornata così è una richiesta diversa da un transfer aeroportuale: ha soste, attese e una forma che dipende da che cosa volete vedere. Qui non trovate un itinerario già scritto, perché lo stesso programma non va bene per due viaggiatori diversi. Diteci dove vorreste andare e quanto tempo avete: la risposta parlerà di quello.",
    ],
    source: {
      text: "Le date di iscrizione sono quelle della Lista del Patrimonio Mondiale;",
      linkText: "l'UNESCO pubblica entrambe le schede",
      href: "https://whc.unesco.org/en/list/907/",
    },
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande a cui conviene rispondere prima di chiedere",
    lead: "Risposte brevi, e nessuna di queste è una frase di vendita.",
    items: [
      {
        question: "Quale aeroporto serve Roma?",
        answer:
          "Due. Fiumicino, ufficialmente Leonardo da Vinci, si trova a circa 32 km a sud-ovest della città e assorbe la grande maggioranza del traffico: circa 51,3 milioni di passeggeri nel 2025. Ciampino, ufficialmente Giovan Battista Pastine, è a circa 15 km a sud-est e ne ha avuti circa 4 milioni, soprattutto voli low cost, corrieri espresso e aviazione generale. Entrambi sono gestiti da Aeroporti di Roma.",
      },
      {
        question: "Civitavecchia è a Roma?",
        answer:
          "No. È un comune a sé, a circa 70 km a nord-ovest di Roma, con una propria stazione ferroviaria, e il suo porto crocieristico è un porto operativo dove le navi ormeggiano a banchine numerate. Consideratelo un viaggio vero e fatevi confermare in quale punto del porto avverrà l'incontro.",
      },
      {
        question: "Un'auto può venire a prendermi davanti all'hotel in centro?",
        answer:
          "A volte. I taxi e le auto a noleggio con conducente rientrano fra le categorie ammesse nelle ZTL di Roma, ma essere ammessi in una zona non significa che esista una strada percorribile. In centro storico, un punto d'incontro a pochi passi dal portone, concordato prima, è spesso la soluzione praticabile.",
      },
      {
        question: "Che cosa fa cambiare il prezzo di un transfer?",
        answer:
          "Gli indirizzi esatti ai due capi, la data e l'ora, quante persone siete e quanti bagagli avete, il veicolo adatto a quel numero e qualsiasi cosa si aggiunga al percorso. Nulla di tutto questo si può stabilire da una pagina: serve appunto un preventivo.",
      },
      {
        question: "A quale stazione di Roma arriva il mio treno?",
        answer:
          "Lo indica il biglietto. Termini è la più grande, con 32 binari; Tiburtina, con 17, accoglie molti servizi ad alta velocità; Ostiense e San Pietro servono altre linee. La stazione determina dove un'auto possa ragionevolmente attendere, quindi conviene verificarla prima di scrivere.",
      },
      {
        question: "Con quanto anticipo conviene chiedere?",
        answer:
          "Appena sono fissati il volo, il treno o la partenza della nave. Una richiesta va letta e valutata prima che si organizzi qualcosa, e i dati che potete dare in anticipo — numero del volo, indirizzo completo, numero di bagagli — sono ciò che rende la risposta precisa invece che approssimativa.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Raccontateci il viaggio",
    body: "Dove atterrate, sbarcate o arrivate; dove dovete andare; quando; e quante persone siete con quanti bagagli. Tanto basta per rispondere seriamente.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Che cosa tenere pronto",
      page: "home",
      hash: "prepare",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const romeHub: Record<Locale, RomeHub> = { en, it };
