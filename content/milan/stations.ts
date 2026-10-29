import type { Locale } from "@/lib/site";
import type { MilanStations } from "./types";

/**
 * Milan's railway stations — one page, not four.
 *
 * Rome's station page makes the point that no vehicle reaches a platform.
 * Milan's makes a different one: four stations, two infrastructure managers,
 * and the terminus of the airport rail service is not an RFI station at all.
 * That is why Cadorna's row reads differently from the other three, and why
 * the page has a section about who runs what.
 *
 * Where nothing was verified, nothing is claimed — including Cadorna's track
 * count, which a different manager publishes differently.
 */

const en: MilanStations = {
  meta: {
    title: "Milan railway station transfers",
    description:
      "Centrale, Porta Garibaldi, Cadorna and Rogoredo: what is verified about each, why one of them is run by a different company, and where a car fits into a rail journey.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Milan by rail",
    h1: "Transfers at Milan's railway stations",
    lead: "Four stations worth knowing about, and a detail that catches people out: they are not all run by the same company, and the one where the airport train terminates is the odd one out.",
    primaryCta: "Request a quotation",
    secondaryCta: "Compare the stations",
  },

  table: {
    id: "stations",
    eyebrow: "The stations",
    heading: "Four stations, and what is verified about each",
    lead: "Track counts are the infrastructure manager's own. Where a figure is not published for a station, none is invented for it.",
    caption: "Milan's railway stations compared",
    columns: ["Station", "Scale", "What to know"],
    rows: [
      {
        id: "centrale",
        name: "Milano Centrale",
        scale: "24 tracks",
        note: "The principal station, and the largest of the four. Bus and tram stops, car rental and car sharing are among the services listed for it. Its scale is the thing to plan around — the walk from a platform out to a street is a long one.",
      },
      {
        id: "garibaldi",
        name: "Milano Porta Garibaldi",
        scale: "20 tracks",
        note: "Nearly as large as Centrale and the station many high-speed and regional services use. It sits beside the Porta Nuova district, which is among the easier parts of central Milan for a vehicle to reach.",
      },
      {
        id: "cadorna",
        name: "Milano Cadorna",
        scale: "A different manager",
        note: "Operated by FerrovieNord rather than RFI, which is why no comparable track count appears here. It is where the Malpensa Express terminates, so for many air passengers it is the station that matters most.",
      },
      {
        id: "rogoredo",
        name: "Milano Rogoredo",
        scale: "13 tracks",
        note: "South-east of the centre, serving high-speed and regional trains. Smaller and quieter than the other two RFI stations, which can make it the simpler place to be met.",
      },
    ],
    source: {
      text: "Track counts and listed services are published by RFI, the national railway infrastructure manager, and were checked in October 2026. Cadorna is not an RFI station, so RFI publishes no equivalent figure for it:",
      linkText: "RFI's page for Milano Centrale",
      href: "https://www.rfi.it/en/stations/milano-centrale.html",
    },
  },

  managers: {
    id: "managers",
    eyebrow: "Why Cadorna is different",
    heading: "Two companies, four stations",
    lead: "This is not trivia. It changes which timetable you are reading and which station your ticket means.",
    paragraphs: [
      "Centrale, Porta Garibaldi and Rogoredo are managed by RFI, the national rail infrastructure manager, and appear in its station information with track counts, services and assistance arrangements. Cadorna is managed by FerrovieNord, a different company, which publishes its own information in its own way.",
      "For a transfer the consequence is simple but easy to miss: a ticket that says Milano may mean any of them, and they are kilometres apart. Cadorna in particular is not a smaller Centrale — it is a separate station on the western side of the centre, and it is where the Malpensa Express service terminates.",
      "So send the station, not the city. The train number and the arrival time help too, because the station determines where a car can reasonably wait and the time determines what the traffic around it is doing.",
    ],
  },

  assistance: {
    heading: "Assistance for passengers who need it",
    paragraphs: [
      "The RFI stations here are served by the Sala Blu at Milano, the railway's assistance service for disabled passengers and passengers with reduced mobility. Assistance between 07:45 and 22:30 can be requested in person or by telephone up to one hour before departure or arrival.",
      "That is the railway's service rather than this site's. If the road part of the journey needs an accessible vehicle, that is a separate question and should be raised separately when you request a quotation — nothing here promises one.",
    ],
    source: {
      text: "Assistance hours and the booking window are published by RFI and were checked in October 2026:",
      linkText: "RFI's station information",
      href: "https://www.rfi.it/en/stations/milano-porta-garibaldi.html",
    },
  },

  onward: {
    id: "onward",
    heading: "Where the journey continues",
    items: [
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "Districts, Area B and Area C — what governs the last part.",
      },
      {
        page: "malpensa",
        label: "Malpensa Airport (MXP)",
        detail: "Where the Malpensa Express runs from.",
      },
      {
        page: "lake-como",
        label: "Lake Como",
        detail: "If the train is one leg of a longer journey north.",
      },
      {
        page: "route-mxp-milan",
        label: "Malpensa Airport to Milan",
        detail: "The road version of the same journey.",
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
        question: "Which Milan station will my train arrive at?",
        answer:
          "Your ticket names it. Centrale has 24 tracks and Porta Garibaldi 20; Rogoredo has 13; Cadorna is managed by a different company altogether. They are kilometres apart, so it is worth checking before anything is arranged.",
      },
      {
        question: "Why is Cadorna not listed like the others?",
        answer:
          "Because it is managed by FerrovieNord rather than RFI, so the national infrastructure manager publishes no equivalent figures for it. Rather than borrow a number from elsewhere, this page says so.",
      },
      {
        question: "Can a car meet me on the platform?",
        answer:
          "No — no vehicle reaches a platform at any station. A meeting point outside, agreed in advance, is how it works everywhere, which is why the station, train number and arrival time are worth sending with your request.",
      },
      {
        question: "Is Centrale or Garibaldi better for my hotel?",
        answer:
          "It depends on where the hotel is, and in practice your ticket decides it. What helps is saying which station, so the meeting point suits that station rather than a general idea of one.",
      },
      {
        question: "I need assistance getting off the train. How does that work?",
        answer:
          "Through the railway's own Sala Blu service at Milano: assistance between 07:45 and 22:30 can be requested in person or by telephone up to an hour before. Arrange that with the railway, and mention it separately when you ask about a car.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the station, not the city",
    body: "Which station, which train, what time, where you are going, and how many of you there are with how much luggage. In Milan the station is doing more work than the city name is.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Milan", page: "milan" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: MilanStations = {
  meta: {
    title: "Transfer per le stazioni di Milano",
    description:
      "Centrale, Porta Garibaldi, Cadorna e Rogoredo: che cosa è verificato di ciascuna, perché una è gestita da un'altra società e dove si colloca l'auto in un viaggio in treno.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Milano in treno",
    h1: "Transfer alle stazioni ferroviarie di Milano",
    lead: "Quattro stazioni da conoscere e un dettaglio che spiazza: non sono tutte gestite dalla stessa società, e quella dove arriva il treno dell'aeroporto è proprio l'eccezione.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Confronta le stazioni",
  },

  table: {
    id: "stazioni",
    eyebrow: "Le stazioni",
    heading: "Quattro stazioni, e che cosa è verificato di ciascuna",
    lead: "Il numero dei binari è quello del gestore dell'infrastruttura. Dove per una stazione non è pubblicato, qui non ne inventiamo uno.",
    caption: "Le stazioni ferroviarie di Milano a confronto",
    columns: ["Stazione", "Dimensione", "Che cosa sapere"],
    rows: [
      {
        id: "centrale",
        name: "Milano Centrale",
        scale: "24 binari",
        note: "È la stazione principale e la più grande delle quattro. Fra i servizi indicati ci sono fermate di bus e tram, autonoleggio e car sharing. La dimensione è l'elemento da considerare: dal binario alla strada il percorso a piedi è lungo.",
      },
      {
        id: "garibaldi",
        name: "Milano Porta Garibaldi",
        scale: "20 binari",
        note: "Quasi quanto Centrale, ed è la stazione usata da molti servizi ad alta velocità e regionali. Si trova accanto a Porta Nuova, uno dei quartieri centrali più semplici da raggiungere in auto.",
      },
      {
        id: "cadorna",
        name: "Milano Cadorna",
        scale: "Gestore diverso",
        note: "È gestita da FerrovieNord e non da RFI: per questo qui non compare un numero di binari confrontabile. È il capolinea del Malpensa Express, quindi per molti passeggeri aerei è la stazione che conta di più.",
      },
      {
        id: "rogoredo",
        name: "Milano Rogoredo",
        scale: "13 binari",
        note: "A sud-est del centro, servita da treni ad alta velocità e regionali. Più piccola e più tranquilla delle altre due stazioni RFI, e per questo a volte il posto più semplice dove farsi trovare.",
      },
    ],
    source: {
      text: "Numero dei binari e servizi elencati sono pubblicati da RFI, gestore nazionale dell'infrastruttura ferroviaria, e verificati nell'ottobre 2026. Cadorna non è una stazione RFI, quindi RFI non ne pubblica un dato equivalente:",
      linkText: "la scheda RFI di Milano Centrale",
      href: "https://www.rfi.it/it/stazioni/milano-centrale.html",
    },
  },

  managers: {
    id: "gestori",
    eyebrow: "Perché Cadorna fa eccezione",
    heading: "Due società, quattro stazioni",
    lead: "Non è una curiosità: cambia quale orario state leggendo e quale stazione intende il vostro biglietto.",
    paragraphs: [
      "Centrale, Porta Garibaldi e Rogoredo sono gestite da RFI, il gestore nazionale dell'infrastruttura ferroviaria, e compaiono nelle sue schede di stazione con binari, servizi e modalità di assistenza. Cadorna è gestita da FerrovieNord, una società diversa, che pubblica le proprie informazioni a modo suo.",
      "Per un transfer la conseguenza è semplice ma sfugge facilmente: un biglietto che dice «Milano» può riferirsi a una qualsiasi di queste stazioni, e fra loro ci sono chilometri. Cadorna in particolare non è una Centrale in piccolo: è una stazione a sé, sul lato occidentale del centro, ed è il capolinea del Malpensa Express.",
      "Indicate quindi la stazione, non la città. Aiutano anche il numero del treno e l'orario di arrivo: la stazione determina dove un'auto possa ragionevolmente attendere, e l'ora determina che cosa stia facendo il traffico lì attorno.",
    ],
  },

  assistance: {
    heading: "Assistenza per chi ne ha bisogno",
    paragraphs: [
      "Le stazioni RFI qui elencate fanno capo alla Sala Blu di Milano, il servizio ferroviario di assistenza alle persone con disabilità e a mobilità ridotta. L'assistenza fra le 7.45 e le 22.30 si può richiedere di persona o per telefono fino a un'ora prima della partenza o dell'arrivo.",
      "È un servizio delle ferrovie, non di questo sito. Se il tratto su strada richiede un veicolo accessibile, è una domanda a sé e va posta separatamente quando chiedete un preventivo: qui non viene promesso nulla in merito.",
    ],
    source: {
      text: "Orari dell'assistenza e termini per la richiesta sono pubblicati da RFI e verificati nell'ottobre 2026:",
      linkText: "le informazioni di stazione di RFI",
      href: "https://www.rfi.it/it/stazioni/milano-porta-garibaldi.html",
    },
  },

  onward: {
    id: "proseguimenti",
    heading: "Dove prosegue il viaggio",
    items: [
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Quartieri, Area B e Area C: ciò che governa l'ultimo tratto.",
      },
      {
        page: "malpensa",
        label: "Aeroporto di Malpensa (MXP)",
        detail: "Da dove parte il Malpensa Express.",
      },
      {
        page: "lake-como",
        label: "Lago di Como",
        detail: "Se il treno è una tappa di un viaggio più a nord.",
      },
      {
        page: "route-mxp-milan",
        label: "Dall'aeroporto di Malpensa a Milano",
        detail: "La versione su strada dello stesso viaggio.",
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
        question: "A quale stazione di Milano arriva il mio treno?",
        answer:
          "Lo indica il biglietto. Centrale ha 24 binari e Porta Garibaldi 20; Rogoredo ne ha 13; Cadorna è gestita da tutt'altra società. Fra loro ci sono chilometri, quindi conviene verificarlo prima di organizzare qualsiasi cosa.",
      },
      {
        question: "Perché Cadorna non è indicata come le altre?",
        answer:
          "Perché è gestita da FerrovieNord e non da RFI, quindi il gestore nazionale non ne pubblica dati equivalenti. Invece di prendere in prestito un numero da altre fonti, questa pagina lo dice.",
      },
      {
        question: "Un'auto può venire a prendermi al binario?",
        answer:
          "No: in nessuna stazione un veicolo arriva al binario. Ovunque si procede con un punto d'incontro all'esterno, concordato prima, ed è il motivo per cui conviene indicare stazione, numero del treno e orario di arrivo.",
      },
      {
        question: "Per il mio hotel è meglio Centrale o Garibaldi?",
        answer:
          "Dipende da dove si trova l'hotel e, in pratica, lo decide il vostro biglietto. Quello che aiuta è indicare quale stazione, così il punto d'incontro sarà adatto a quella e non a un'idea generica.",
      },
      {
        question: "Ho bisogno di assistenza per scendere dal treno. Come funziona?",
        answer:
          "Tramite il servizio Sala Blu delle ferrovie a Milano: l'assistenza fra le 7.45 e le 22.30 si richiede di persona o per telefono fino a un'ora prima. Organizzatela con le ferrovie e segnalatela a parte quando chiedete dell'auto.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate la stazione, non la città",
    body: "Quale stazione, quale treno, a che ora, dove dovete andare e quante persone siete con quanti bagagli. A Milano è la stazione a fare più lavoro del nome della città.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Milano", page: "milan" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const milanStations: Record<Locale, MilanStations> = { en, it };
