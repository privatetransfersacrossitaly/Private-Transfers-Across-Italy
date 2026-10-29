import type { Locale } from "@/lib/site";
import type { StationsPage } from "./types";

/**
 * Rome's railway stations — one page, not four.
 *
 * Termini and Tiburtina are merged into it and Ostiense and San Pietro are
 * named rather than described, because the infrastructure manager publishes
 * little that is page-worthy per station and four pages differing only in a
 * name is the pattern the architecture document forbids. The inventory
 * records the merge and the two deferrals.
 *
 * Where nothing was verified, nothing is claimed — and the table says so in
 * the row rather than leaving a confident-looking blank.
 */

const en: StationsPage = {
  meta: {
    title: "Rome railway station transfers",
    description:
      "Termini, Tiburtina, Ostiense and San Pietro: what is verified about each, where a car fits into a rail journey, and the assistance service the two main stations share.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome by rail",
    h1: "Transfers at Rome's railway stations",
    lead: "A train sets you down in the middle of a city with your luggage and no obvious next step. This page is about that step: which station you are at, what it is like, and where a car realistically fits into the day.",
    primaryCta: "Request a quotation",
    secondaryCta: "Compare the stations",
  },

  table: {
    id: "stations",
    eyebrow: "The stations",
    heading: "Four stations, and what is verified about each",
    lead: "Only what the infrastructure manager publishes. Where nothing is published, nothing is claimed.",
    caption: "Rome's railway stations compared",
    columns: ["Station", "Scale", "What to know"],
    rows: [
      {
        id: "termini",
        name: "Roma Termini",
        scale: "32 tracks",
        note: "Rome's principal station and the busiest in Italy. Metro, bus and tram connections, car rental and car sharing are among the services listed for it. Its scale is the thing to plan around: the walk from a platform to a street can be a long one.",
      },
      {
        id: "tiburtina",
        name: "Roma Tiburtina",
        scale: "17 tracks",
        note: "Rome's second station, used by many high-speed services. Lifts operate from 05:00 to 00:00, and the infrastructure manager notes that temporary lift outages can affect step-free access.",
      },
      {
        id: "ostiense",
        name: "Roma Ostiense",
        scale: "Not stated here",
        note: "Serves other lines into the city. Nothing further is set out on this page, because nothing further was verified from a primary source — it is named because it may be the station on your ticket.",
      },
      {
        id: "san-pietro",
        name: "Roma San Pietro",
        scale: "Not stated here",
        note: "A smaller station on the western side of the city. As above: named because it exists and may be where you arrive, not described beyond what is known.",
      },
    ],
    source: {
      text: "Track counts, listed services and lift hours are published by RFI, the railway infrastructure manager, and were checked in October 2026:",
      linkText: "RFI's page for Roma Termini",
      href: "https://www.rfi.it/en/stations/roma-termini.html",
    },
  },

  handover: {
    id: "handover",
    eyebrow: "The handover",
    heading: "The last hundred metres are on foot",
    lead: "This is the part worth understanding before the day rather than during it.",
    paragraphs: [
      "No vehicle reaches a platform. Whatever is arranged, the end of a rail journey and the beginning of a road one are joined by a walk through a station — and at Termini, with its 32 tracks, that walk can be substantial. Build it into the plan instead of discovering it with four cases.",
      "Where a car can wait depends on the station and on the streets outside it, and those are not the same at Termini, ringed by busy roads and taxi ranks, as they are at Tiburtina. The practical meeting point is something to agree when the journey is arranged, together with the train number and the arrival time, so that both sides are working from the same information.",
      "If the journey continues into the historic centre, Rome's limited-traffic zones apply to that leg exactly as they do to an airport run. What they are and when they operate is set out on the Rome page.",
    ],
  },

  assistance: {
    heading: "Assistance for passengers who need it",
    paragraphs: [
      "Both Termini and Tiburtina are served by the Sala Blu at Roma, the railway's assistance service for disabled passengers and passengers with reduced mobility. Assistance between 07:45 and 22:30 can be requested in person or by telephone up to one hour before departure or arrival.",
      "That is the railway's service rather than this site's. If the road part of the journey needs an accessible vehicle, that is a separate question and should be asked separately when you request a quotation — nothing here promises one.",
    ],
    source: {
      text: "Assistance hours and the booking window are published by RFI and were checked in October 2026:",
      linkText: "RFI's station information",
      href: "https://www.rfi.it/en/stations/roma-tiburtina.html",
    },
  },

  onward: {
    id: "onward",
    heading: "Where the journey continues",
    items: [
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "Districts, access and what decides where a car can stop.",
      },
      {
        page: "fiumicino",
        label: "Fiumicino Airport (FCO)",
        detail: "If the train connects with a flight.",
      },
      {
        page: "ciampino",
        label: "Ciampino Airport (CIA)",
        detail: "Rome's smaller airport, to the south-east.",
      },
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "The city end of that journey is the same problem.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Station questions",
    lead: "Short answers about the gap between a platform and a car.",
    items: [
      {
        question: "Which Rome station will my train arrive at?",
        answer:
          "Your ticket names it. Termini is the largest, with 32 tracks; Tiburtina has 17 and takes many high-speed services; Ostiense and San Pietro serve other lines. It is worth checking before anything is arranged, because the stations are kilometres apart.",
      },
      {
        question: "Can a car meet me on the platform?",
        answer:
          "No. No vehicle reaches a platform at any station. A meeting point outside, agreed beforehand, is how it works everywhere — which is why the train number and the arrival time are worth sending with your request.",
      },
      {
        question: "Is Termini or Tiburtina better for my hotel?",
        answer:
          "It depends entirely on where the hotel is, and in practice your ticket decides it for you. What does help is saying which station, which train and what time, so that the meeting point suits that station rather than a general idea of one.",
      },
      {
        question: "I need assistance getting off the train. How does that work?",
        answer:
          "Through the railway's own Sala Blu service, which covers both main Rome stations: assistance between 07:45 and 22:30 can be requested in person or by telephone up to an hour before departure or arrival. Arrange that with the railway, and mention it separately when you ask about a car.",
      },
      {
        question: "Can the car take me from the station into the centre?",
        answer:
          "That is an ordinary request. Whether it can reach the exact address depends on the limited-traffic zones and on the street itself, both of which the Rome page explains.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the train, not just the city",
    body: "The station, the train number, the arrival time, where you are going, and how many of you there are with how much luggage. The station is what decides where the car can be.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: StationsPage = {
  meta: {
    title: "Transfer per le stazioni di Roma",
    description:
      "Termini, Tiburtina, Ostiense e San Pietro: che cosa è verificato di ciascuna, dove si colloca l'auto in un viaggio in treno e il servizio di assistenza comune alle due stazioni principali.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Roma in treno",
    h1: "Transfer alle stazioni ferroviarie di Roma",
    lead: "Un treno vi lascia in mezzo alla città con i bagagli e senza un passo successivo ovvio. Questa pagina parla proprio di quel passo: in quale stazione siete, com'è fatta e dove si colloca realisticamente un'auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Confronta le stazioni",
  },

  table: {
    id: "stazioni",
    eyebrow: "Le stazioni",
    heading: "Quattro stazioni, e che cosa è verificato di ciascuna",
    lead: "Soltanto ciò che pubblica il gestore dell'infrastruttura. Dove non è pubblicato nulla, qui non si afferma nulla.",
    caption: "Le stazioni ferroviarie di Roma a confronto",
    columns: ["Stazione", "Dimensione", "Che cosa sapere"],
    rows: [
      {
        id: "termini",
        name: "Roma Termini",
        scale: "32 binari",
        note: "È la stazione principale di Roma e la più frequentata d'Italia. Fra i servizi indicati ci sono i collegamenti con metropolitana, bus e tram, l'autonoleggio e il car sharing. La dimensione è l'elemento da considerare: dal binario alla strada il percorso a piedi può essere lungo.",
      },
      {
        id: "tiburtina",
        name: "Roma Tiburtina",
        scale: "17 binari",
        note: "Seconda stazione di Roma, servita da molti treni ad alta velocità. Gli ascensori funzionano dalle 5.00 alle 24.00 e il gestore segnala che eventuali guasti temporanei possono incidere sull'accessibilità.",
      },
      {
        id: "ostiense",
        name: "Roma Ostiense",
        scale: "Non indicata qui",
        note: "Serve altre linee verso la città. Su questa pagina non aggiungiamo altro, perché nient'altro è stato verificato su una fonte primaria: la citiamo perché potrebbe essere la stazione indicata sul vostro biglietto.",
      },
      {
        id: "san-pietro",
        name: "Roma San Pietro",
        scale: "Non indicata qui",
        note: "Stazione più piccola, sul versante occidentale della città. Come sopra: citata perché esiste e potrebbe essere il vostro punto di arrivo, non descritta oltre ciò che è noto.",
      },
    ],
    source: {
      text: "Numero dei binari, servizi elencati e orari degli ascensori sono pubblicati da RFI, gestore dell'infrastruttura ferroviaria, e verificati nell'ottobre 2026:",
      linkText: "la scheda RFI di Roma Termini",
      href: "https://www.rfi.it/it/stazioni/roma-termini.html",
    },
  },

  handover: {
    id: "passaggio",
    eyebrow: "Il passaggio",
    heading: "Gli ultimi cento metri si fanno a piedi",
    lead: "È la parte che conviene capire prima del giorno, non durante.",
    paragraphs: [
      "Nessun veicolo arriva al binario. Comunque sia organizzato il viaggio, fra la fine del tragitto in treno e l'inizio di quello su strada c'è una camminata dentro la stazione, e a Termini, con i suoi 32 binari, può essere lunga. Mettetela in conto invece di scoprirla con quattro valigie.",
      "Dove possa attendere un'auto dipende dalla stazione e dalle strade che la circondano, e non sono le stesse a Termini — circondata da strade trafficate e aree taxi — e a Tiburtina. Il punto d'incontro concreto si concorda quando si organizza il viaggio, insieme al numero del treno e all'orario di arrivo, così che entrambe le parti lavorino sugli stessi dati.",
      "Se il viaggio prosegue verso il centro storico, le ZTL valgono per quel tratto esattamente come per un transfer aeroportuale. Che cosa siano e quando sono attive è spiegato nella pagina di Roma.",
    ],
  },

  assistance: {
    heading: "Assistenza per chi ne ha bisogno",
    paragraphs: [
      "Termini e Tiburtina fanno capo alla Sala Blu di Roma, il servizio ferroviario di assistenza alle persone con disabilità e a mobilità ridotta. L'assistenza fra le 7.45 e le 22.30 si può richiedere di persona o per telefono fino a un'ora prima della partenza o dell'arrivo.",
      "È un servizio delle ferrovie, non di questo sito. Se il tratto su strada richiede un veicolo accessibile, è una domanda a sé e va posta separatamente quando chiedete un preventivo: qui non viene promesso nulla in merito.",
    ],
    source: {
      text: "Orari dell'assistenza e termini per la richiesta sono pubblicati da RFI e verificati nell'ottobre 2026:",
      linkText: "le informazioni di stazione di RFI",
      href: "https://www.rfi.it/it/stazioni/roma-tiburtina.html",
    },
  },

  onward: {
    id: "proseguimenti",
    heading: "Dove prosegue il viaggio",
    items: [
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Quartieri, accessi e che cosa stabilisce dove un'auto si ferma.",
      },
      {
        page: "fiumicino",
        label: "Aeroporto di Fiumicino (FCO)",
        detail: "Se il treno si collega a un volo.",
      },
      {
        page: "ciampino",
        label: "Aeroporto di Ciampino (CIA)",
        detail: "L'aeroporto più piccolo di Roma, a sud-est.",
      },
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "Il capo cittadino di quel viaggio pone lo stesso problema.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sulle stazioni",
    lead: "Risposte brevi sullo spazio fra un binario e un'auto.",
    items: [
      {
        question: "A quale stazione di Roma arriva il mio treno?",
        answer:
          "Lo indica il biglietto. Termini è la più grande, con 32 binari; Tiburtina ne ha 17 e accoglie molti treni ad alta velocità; Ostiense e San Pietro servono altre linee. Conviene verificarlo prima di organizzare qualsiasi cosa, perché le stazioni distano chilometri l'una dall'altra.",
      },
      {
        question: "Un'auto può venire a prendermi al binario?",
        answer:
          "No. In nessuna stazione un veicolo arriva al binario. Ovunque si procede con un punto d'incontro all'esterno, concordato prima: ed è il motivo per cui conviene indicare numero del treno e orario di arrivo nella richiesta.",
      },
      {
        question: "Per il mio hotel è meglio Termini o Tiburtina?",
        answer:
          "Dipende interamente da dove si trova l'hotel e, in pratica, lo decide il vostro biglietto. Quello che aiuta davvero è indicare quale stazione, quale treno e a che ora, così che il punto d'incontro sia adatto a quella stazione e non a un'idea generica.",
      },
      {
        question: "Ho bisogno di assistenza per scendere dal treno. Come funziona?",
        answer:
          "Tramite il servizio Sala Blu delle ferrovie, che copre entrambe le stazioni principali di Roma: l'assistenza fra le 7.45 e le 22.30 si richiede di persona o per telefono fino a un'ora prima. Organizzatela con le ferrovie e segnalatela a parte quando chiedete dell'auto.",
      },
      {
        question: "L'auto può portarmi dalla stazione al centro?",
        answer:
          "È una richiesta ordinaria. Se possa raggiungere l'indirizzo esatto dipende dalle ZTL e dalla strada stessa: entrambe le cose sono spiegate nella pagina di Roma.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il treno, non solo la città",
    body: "La stazione, il numero del treno, l'orario di arrivo, dove dovete andare e quante persone siete con quanti bagagli. È la stazione a stabilire dove possa trovarsi l'auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const stations: Record<Locale, StationsPage> = { en, it };
