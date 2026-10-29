import type { Locale } from "@/lib/site";
import type { VeniceStations } from "./types";

/**
 * Venice's two stations.
 *
 * Rome's and Milan's station pages are reference lookups across four stations
 * each, and a table is the right primitive for that. Venice has exactly two
 * that matter, and they are not a list — they are a contrast, because a
 * ticket says "Venezia" for both and only one of them can be reached by car.
 *
 * So this page is a two-column comparison rather than a table, and the whole
 * thing is built around a single question: which one does your ticket mean?
 */

const en: VeniceStations = {
  meta: {
    title: "Venice railway station transfers",
    description:
      "Santa Lucia is in the historic centre and cannot be reached by car. Mestre is on the mainland and can. Both say Venezia on a ticket — and the difference decides your transfer.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Venice by rail",
    h1: "Transfers at Venice's railway stations",
    lead: "Two stations, one city name, and a difference that decides everything: one of them is inside the historic centre and unreachable by road, and the other is on the mainland and perfectly ordinary. Your ticket says which.",
    primaryCta: "Request a quotation",
    secondaryCta: "Compare the two",
    facts: [
      { label: "In the historic centre", value: "Santa Lucia" },
      { label: "On the mainland", value: "Mestre" },
      { label: "Linked by", value: "Ponte della Libertà" },
    ],
  },

  compare: {
    id: "compare",
    eyebrow: "The two stations",
    heading: "Santa Lucia and Mestre are not the same place",
    lead: "They are a few kilometres and one bridge apart, and for a transfer they could hardly be more different.",
    columns: [
      {
        id: "santa-lucia",
        heading: "Venezia Santa Lucia",
        subheading: "Inside the historic city — no road access",
        rows: [
          {
            term: "Where it is",
            detail:
              "In Cannaregio, at the western end of the Grand Canal, inside the historic centre.",
          },
          {
            term: "Can a car reach it?",
            detail:
              "No. Road transport ends at Piazzale Roma. From there to the station is on foot or by water — a short distance, but not a drivable one.",
          },
          {
            term: "What a transfer means here",
            detail:
              "A transfer to Santa Lucia is in practice a transfer to Piazzale Roma. Say so in your request and the arrangement will match reality.",
          },
          {
            term: "Onward",
            detail:
              "The rest of the historic city is on foot or by water from the station door.",
          },
        ],
      },
      {
        id: "mestre",
        heading: "Venezia Mestre",
        subheading: "On the mainland — an ordinary station",
        rows: [
          {
            term: "Where it is",
            detail:
              "On the mainland, a mainline junction with the streets of Mestre around it.",
          },
          {
            term: "Can a car reach it?",
            detail:
              "Yes, like any station anywhere. This is the road-reachable half of Venice's railway answer.",
          },
          {
            term: "What a transfer means here",
            detail:
              "An ordinary station transfer: a car to the station area, or from it to a mainland address, door to door.",
          },
          {
            term: "Onward",
            detail:
              "Trains and buses cross the bridge to the historic city; the airport's land connections also run here.",
          },
        ],
      },
    ],
    source: {
      text: "Station locations and the relationship between them checked in October 2026. Both are major stations and both appear as Venice on a ticket, which is exactly why the distinction is worth making before you travel:",
      linkText: "the station's encyclopaedic record",
      href: "https://en.wikipedia.org/wiki/Venezia_Santa_Lucia_railway_station",
    },
  },

  bridge: {
    id: "bridge",
    eyebrow: "The bridge",
    heading: "One causeway, and everything that follows from it",
    lead: "The Ponte della Libertà is the reason Venice has two stations at all.",
    paragraphs: [
      "The bridge carries road and rail from the mainland onto the edge of the historic islands. The railway crosses it and ends at Santa Lucia, inside the city. The road crosses it and ends at Piazzale Roma and Tronchetto, beside the station but on the road side of the divide.",
      "That is the whole explanation. A train can finish inside Venice because a railway was built into it; a car cannot, because no road was. Santa Lucia and Piazzale Roma are a few minutes apart on foot, and the gap between them is where almost every misunderstanding about Venice transfers lives.",
      "If your ticket says Venezia Mestre, none of this applies to you — you are on the mainland and a car reaches the door. It is worth checking the ticket before assuming either way.",
    ],
  },

  onward: {
    id: "onward",
    heading: "Where the journey continues",
    items: [
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "The road limit, the water, and what is never included.",
      },
      {
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "The airport's land connections run to Mestre and Piazzale Roma.",
      },
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "The same endpoint question, from the airport.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Station questions",
    lead: "Nearly all of them are the same one: which station does my ticket mean?",
    items: [
      {
        question: "Which station should I book my train to?",
        answer:
          "If you are staying in the historic centre, Santa Lucia puts you inside it — but remember a car cannot meet you there. If you are staying on the mainland, Mestre is both nearer and road-reachable. The right answer depends on where you sleep, not on which sounds more like Venice.",
      },
      {
        question: "Can a car meet me at Santa Lucia?",
        answer:
          "Not at the station itself. Road transport ends at Piazzale Roma, which is a short walk away across the Grand Canal. A transfer billed as being to Santa Lucia is in practice a transfer to Piazzale Roma, and it is better to say so plainly.",
      },
      {
        question: "Is Mestre a worse place to arrive?",
        answer:
          "Not for a transfer — it is the easier of the two by a distance, because a car reaches the door. Whether it is a worse place to stay is a different question and depends on what you came for.",
      },
      {
        question: "How far apart are the two stations?",
        answer:
          "A few kilometres and one bridge. No journey time is quoted here because it depends entirely on the hour and the traffic on the causeway.",
      },
      {
        question: "Does the airport bus go to either?",
        answer:
          "The airport's land connections run to both Piazzale Roma and Venezia Mestre. Those are public services rather than ours, and they are listed here as context, not as an offer.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the station, not the city",
    body: "Santa Lucia or Mestre, the train and its arrival time, where you are going afterwards, and how many of you there are with how much luggage. In Venice the station name is doing far more work than the city name.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Venice", page: "venice" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: VeniceStations = {
  meta: {
    title: "Transfer per le stazioni di Venezia",
    description:
      "Santa Lucia è nel centro storico e non si raggiunge in auto. Mestre è in terraferma e sì. Sul biglietto compaiono entrambe come Venezia, e la differenza decide il vostro transfer.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Venezia in treno",
    h1: "Transfer alle stazioni ferroviarie di Venezia",
    lead: "Due stazioni, un solo nome di città e una differenza che decide tutto: una è dentro il centro storico e irraggiungibile su gomma, l'altra è in terraferma e del tutto ordinaria. Lo dice il vostro biglietto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Confronta le due",
    facts: [
      { label: "Nel centro storico", value: "Santa Lucia" },
      { label: "In terraferma", value: "Mestre" },
      { label: "Collegate dal", value: "Ponte della Libertà" },
    ],
  },

  compare: {
    id: "confronto",
    eyebrow: "Le due stazioni",
    heading: "Santa Lucia e Mestre non sono lo stesso posto",
    lead: "Le separano pochi chilometri e un ponte, e per un transfer non potrebbero essere più diverse.",
    columns: [
      {
        id: "santa-lucia",
        heading: "Venezia Santa Lucia",
        subheading: "Dentro la città storica — niente accesso stradale",
        rows: [
          {
            term: "Dove si trova",
            detail:
              "A Cannaregio, all'estremità occidentale del Canal Grande, dentro il centro storico.",
          },
          {
            term: "Ci arriva un'auto?",
            detail:
              "No. Il trasporto su gomma finisce a Piazzale Roma. Da lì alla stazione si va a piedi o per acqua: pochi passi, ma non percorribili in auto.",
          },
          {
            term: "Che cosa significa qui un transfer",
            detail:
              "Un transfer per Santa Lucia è in pratica un transfer per Piazzale Roma. Scrivetelo nella richiesta e l'accordo corrisponderà alla realtà.",
          },
          {
            term: "Da lì in poi",
            detail:
              "Il resto della città storica si raggiunge a piedi o per acqua dalla porta della stazione.",
          },
        ],
      },
      {
        id: "mestre",
        heading: "Venezia Mestre",
        subheading: "In terraferma — una stazione normale",
        rows: [
          {
            term: "Dove si trova",
            detail:
              "In terraferma: un nodo ferroviario con attorno le vie di Mestre.",
          },
          {
            term: "Ci arriva un'auto?",
            detail:
              "Sì, come in qualsiasi stazione. È la metà raggiungibile su strada della risposta ferroviaria veneziana.",
          },
          {
            term: "Che cosa significa qui un transfer",
            detail:
              "Un normale transfer di stazione: un'auto fino all'area della stazione, o da lì a un indirizzo in terraferma, porta a porta.",
          },
          {
            term: "Da lì in poi",
            detail:
              "Treni e autobus attraversano il ponte verso la città storica; anche i collegamenti via terra dell'aeroporto arrivano qui.",
          },
        ],
      },
    ],
    source: {
      text: "Collocazione delle stazioni e rapporto fra le due verificati nell'ottobre 2026. Sono entrambe stazioni importanti ed entrambe compaiono come «Venezia» sul biglietto: è esattamente per questo che la distinzione va fatta prima di partire.",
      linkText: "la scheda enciclopedica della stazione",
      href: "https://it.wikipedia.org/wiki/Stazione_di_Venezia_Santa_Lucia",
    },
  },

  bridge: {
    id: "ponte",
    eyebrow: "Il ponte",
    heading: "Un ponte, e tutto quello che ne consegue",
    lead: "Il Ponte della Libertà è il motivo per cui Venezia ha due stazioni.",
    paragraphs: [
      "Il ponte porta strada e ferrovia dalla terraferma fino al margine delle isole storiche. La ferrovia lo attraversa e termina a Santa Lucia, dentro la città. La strada lo attraversa e termina a Piazzale Roma e al Tronchetto: accanto alla stazione, ma dal lato stradale del confine.",
      "È tutta qui la spiegazione. Un treno può finire dentro Venezia perché una ferrovia è stata costruita fin lì; un'auto no, perché una strada non c'è. Santa Lucia e Piazzale Roma distano pochi minuti a piedi, e in quello scarto vive quasi ogni equivoco sui transfer veneziani.",
      "Se il vostro biglietto dice Venezia Mestre, nulla di tutto questo vi riguarda: siete in terraferma e l'auto arriva al portone. Conviene controllare il biglietto prima di dare per scontata una cosa o l'altra.",
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Dove prosegue il viaggio",
    items: [
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "Il limite stradale, l'acqua e ciò che non è mai compreso.",
      },
      {
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "I collegamenti via terra dell'aeroporto arrivano a Mestre e a Piazzale Roma.",
      },
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "La stessa questione dei punti di arrivo, vista dall'aeroporto.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sulle stazioni",
    lead: "Quasi tutte sono la stessa: quale stazione intende il mio biglietto?",
    items: [
      {
        question: "Per quale stazione conviene prenotare il treno?",
        answer:
          "Se alloggiate nel centro storico, Santa Lucia vi lascia dentro — ma ricordate che lì un'auto non può venirvi incontro. Se alloggiate in terraferma, Mestre è più vicina e raggiungibile su strada. La risposta giusta dipende da dove dormite, non da quale nome suoni più «Venezia».",
      },
      {
        question: "Un'auto può venire a prendermi a Santa Lucia?",
        answer:
          "Non alla stazione. Il trasporto su gomma finisce a Piazzale Roma, a pochi passi di là dal Canal Grande. Un transfer presentato come «per Santa Lucia» è in pratica un transfer per Piazzale Roma, ed è meglio dirlo chiaramente.",
      },
      {
        question: "Arrivare a Mestre è peggio?",
        answer:
          "Non per un transfer: è di gran lunga la più semplice delle due, perché l'auto arriva al portone. Se sia un posto peggiore in cui alloggiare è un'altra domanda e dipende da che cosa siete venuti a fare.",
      },
      {
        question: "Quanto distano fra loro le due stazioni?",
        answer:
          "Pochi chilometri e un ponte. Qui non trovate una durata perché dipende interamente dall'ora e dal traffico sul ponte.",
      },
      {
        question: "Il bus dell'aeroporto arriva a una delle due?",
        answer:
          "I collegamenti via terra dell'aeroporto arrivano sia a Piazzale Roma sia a Venezia Mestre. Sono servizi pubblici e non nostri: li citiamo come contesto, non come un'offerta.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate la stazione, non la città",
    body: "Santa Lucia o Mestre, il treno con l'orario di arrivo, dove andate poi e quante persone siete con quanti bagagli. A Venezia il nome della stazione lavora molto più di quello della città.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Venezia", page: "venice" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const veniceStations: Record<Locale, VeniceStations> = { en, it };
