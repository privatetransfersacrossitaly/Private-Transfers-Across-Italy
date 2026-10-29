import type { Locale } from "@/lib/site";
import type { DistantAirport } from "./types";

/**
 * Bergamo — Il Caravaggio International Airport.
 *
 * This page exists to correct a map. An airport sold as Milan stands about
 * fifty kilometres from Milan and about five from Bergamo, in a different
 * province, run by a different company. Everything else on the page follows
 * from making that legible as early as possible, which is why the distance is
 * drawn in the hero rather than described three paragraphs down.
 *
 * Two refusals worth noting. The 2025 passenger figure is not used, because
 * SACBO's is a projection rather than a result; the settled 2024 figure is
 * used instead and labelled as such. And the planned rail link to Milan is
 * not mentioned as though it exists — it has been reported without a
 * confirmed opening, and a transfer page that implied a train would mislead
 * precisely the reader it is written for.
 */

const en: DistantAirport = {
  meta: {
    title: "Bergamo Airport transfers (BGY)",
    description:
      "The airport sold as Milan is about 50 km from it, in the province of Bergamo. Where it actually is, who runs it, and what that distance changes about your transfer.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Milan Bergamo · BGY",
    h1: "Transfers at Bergamo Airport",
    lead: "Most people meet this airport as a surprise. It is sold under Milan's name, and it stands at Orio al Serio in the province of Bergamo — about five kilometres from Bergamo and about fifty from Milan.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the distance changes",
    diagram: {
      caption:
        "Approximate distances as published by the local tourism authority and checked in October 2026. The airport is in the province of Bergamo, not the province of Milan.",
      nodes: [
        {
          id: "milan",
          label: "Milan",
          detail:
            "The city on your ticket, and for most arrivals the actual destination.",
        },
        {
          id: "bgy",
          label: "Bergamo Airport (BGY)",
          detail:
            "Officially Il Caravaggio International Airport, at Orio al Serio.",
          emphasis: true,
        },
        {
          id: "bergamo",
          label: "Bergamo",
          detail: "A city in its own right, and the nearer of the two by far.",
        },
      ],
      gaps: ["about 50 km", "about 5 km"],
    },
  },

  identity: {
    id: "identity",
    eyebrow: "What it actually is",
    heading: "A Bergamo airport with Milan's name on it",
    lead: "None of this is a complaint about the airport. It is a working international gateway — it is simply not where its name suggests.",
    facts: [
      { label: "Official name", value: "Il Caravaggio" },
      { label: "IATA code", value: "BGY" },
      { label: "Operator", value: "SACBO" },
      { label: "Passengers, 2024", value: "About 17.4 million" },
    ],
    source: {
      text: "The airport is named after the painter Michelangelo Merisi da Caravaggio and is operated by SACBO — a different company from SEA, which runs Malpensa and Linate. The 2024 passenger figure is used because it is settled; the 2025 number circulating elsewhere is a projection, not a result. Checked October 2026.",
      linkText: "the airport's own site",
      href: "https://www.milanbergamoairport.it/en/",
    },
  },

  consequences: {
    id: "consequences",
    eyebrow: "In practice",
    heading: "What fifty kilometres changes",
    lead: "Four things, and the first catches people out more than the rest put together.",
    steps: [
      {
        title: "It is a journey, not a hop",
        body: "A transfer from here into Milan crosses most of the province and then meets the city's traffic zones at the other end. Plan it as a real leg of the trip rather than as the last five minutes of the flight.",
      },
      {
        title: "Bergamo may be the better answer",
        body: "If your business or your stay is anywhere east of Milan, the nearer city is five kilometres away rather than fifty. It is worth asking whether Milan is genuinely where you need to be before arranging the longer journey.",
      },
      {
        title: "Late and early flights are normal here",
        body: "The airport's traffic is weighted towards schedules that start early and finish late. Say the hour plainly in your request; what can be arranged at that time is answered in the reply rather than assumed.",
      },
      {
        title: "A train is not a plan yet",
        body: "A rail link towards Milan has been reported but has no confirmed opening in the sources checked. This page will not tell you to count on one, because a page that did would be wrong for exactly the person reading it.",
      },
    ],
  },

  onward: {
    id: "onward",
    heading: "From Bergamo Airport",
    items: [
      {
        page: "route-bgy-milan",
        label: "Bergamo Airport to Milan",
        detail: "The fifty kilometres, set out properly.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "What waits at the city end: Area B, Area C and the districts.",
      },
      {
        page: "malpensa",
        label: "Malpensa Airport (MXP)",
        detail: "If you are still choosing between flights.",
      },
      {
        page: "linate",
        label: "Linate Airport (LIN)",
        detail: "The city airport, for comparison.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Bergamo Airport questions",
    lead: "Asked almost entirely by people who have just looked at a map.",
    items: [
      {
        question: "Is Bergamo Airport in Milan?",
        answer:
          "No. It is at Orio al Serio, in the province of Bergamo, about 50 km from Milan and about 5 km from Bergamo. It is commonly sold as a Milan airport, which is where the confusion starts.",
      },
      {
        question: "Why is it called Milan Bergamo?",
        answer:
          "Because it serves Milan commercially, as a third airport for the metropolitan area. Its official name is Il Caravaggio International Airport, after the painter, and it is operated by SACBO — a different company from the one that runs Malpensa and Linate.",
      },
      {
        question: "Should I go to Bergamo instead of Milan?",
        answer:
          "That depends entirely on why you are travelling, but it is worth asking. Bergamo is a city in its own right and is a tenth of the distance from the airport. If nothing specific requires Milan, the shorter journey may be the better one.",
      },
      {
        question: "Is there a train from the airport to Milan?",
        answer:
          "A rail link has been reported but has no confirmed opening date in the sources checked here, so this page will not tell you to rely on one. Check the airport and the rail operator for the current position before you plan around it.",
      },
      {
        question: "My flight lands very late. Is that a problem?",
        answer:
          "Late and early departures are ordinary at this airport. It is the right thing to state explicitly in your request rather than hope for; what can be arranged at that hour is answered in the reply, and this site does not claim a service that runs around the clock.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Say where you are really going",
    body: "The flight and its time, and the full address at the other end — Milan, Bergamo or somewhere else entirely. From this airport the destination is doing more work than usual.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Milan", page: "milan" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: DistantAirport = {
  meta: {
    title: "Transfer aeroporto di Bergamo (BGY)",
    description:
      "L'aeroporto venduto come Milano dista da Milano circa 50 km, in provincia di Bergamo. Dove si trova davvero, chi lo gestisce e che cosa comporta quella distanza.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Milano Bergamo · BGY",
    h1: "Transfer all'aeroporto di Bergamo",
    lead: "Per quasi tutti questo aeroporto è una sorpresa. Viene venduto con il nome di Milano e si trova a Orio al Serio, in provincia di Bergamo: circa cinque chilometri da Bergamo e circa cinquanta da Milano.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa comporta la distanza",
    diagram: {
      caption:
        "Distanze approssimative pubblicate dall'ente turistico locale e verificate nell'ottobre 2026. L'aeroporto è in provincia di Bergamo, non in provincia di Milano.",
      nodes: [
        {
          id: "milano",
          label: "Milano",
          detail:
            "La città indicata sul biglietto e, per la maggior parte degli arrivi, la destinazione reale.",
        },
        {
          id: "bgy",
          label: "Aeroporto di Bergamo (BGY)",
          detail:
            "Ufficialmente Il Caravaggio International Airport, a Orio al Serio.",
          emphasis: true,
        },
        {
          id: "bergamo",
          label: "Bergamo",
          detail: "Una città a sé, e di gran lunga la più vicina delle due.",
        },
      ],
      gaps: ["circa 50 km", "circa 5 km"],
    },
  },

  identity: {
    id: "identita",
    eyebrow: "Che cos'è davvero",
    heading: "Un aeroporto bergamasco con il nome di Milano",
    lead: "Nulla di tutto questo è una critica all'aeroporto: è uno scalo internazionale che funziona. Semplicemente, non si trova dove il nome lascia intendere.",
    facts: [
      { label: "Denominazione", value: "Il Caravaggio" },
      { label: "Codice IATA", value: "BGY" },
      { label: "Gestore", value: "SACBO" },
      { label: "Passeggeri 2024", value: "Circa 17,4 milioni" },
    ],
    source: {
      text: "L'aeroporto è intitolato al pittore Michelangelo Merisi da Caravaggio ed è gestito da SACBO, società diversa da SEA che gestisce Malpensa e Linate. Usiamo il dato 2024 perché è consolidato: la cifra 2025 che circola altrove è una previsione, non un consuntivo. Verificato nell'ottobre 2026.",
      linkText: "il sito dell'aeroporto",
      href: "https://www.milanbergamoairport.it/it/",
    },
  },

  consequences: {
    id: "conseguenze",
    eyebrow: "In pratica",
    heading: "Che cosa cambiano cinquanta chilometri",
    lead: "Quattro cose, e la prima sorprende più di tutte le altre messe insieme.",
    steps: [
      {
        title: "È un viaggio, non un salto",
        body: "Un transfer da qui verso Milano attraversa buona parte della provincia e all'arrivo incontra le zone a traffico limitato della città. Consideratelo una tappa vera del viaggio, non gli ultimi cinque minuti del volo.",
      },
      {
        title: "Forse la risposta giusta è Bergamo",
        body: "Se il vostro impegno o il vostro soggiorno è a est di Milano, la città più vicina è a cinque chilometri invece che a cinquanta. Prima di organizzare il tragitto lungo, vale la pena chiedersi se Milano sia davvero dove dovete andare.",
      },
      {
        title: "Qui gli orari estremi sono la norma",
        body: "Il traffico di questo scalo è concentrato su orari che cominciano presto e finiscono tardi. Indicate l'ora in modo esplicito: che cosa sia organizzabile a quell'ora ve lo dirà la risposta, invece di darlo per scontato.",
      },
      {
        title: "Il treno non è ancora un piano",
        body: "Un collegamento ferroviario verso Milano è stato annunciato ma, nelle fonti consultate, non ha una data di apertura confermata. Questa pagina non vi dirà di contarci, perché sarebbe sbagliata proprio per chi la sta leggendo.",
      },
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Dall'aeroporto di Bergamo",
    items: [
      {
        page: "route-bgy-milan",
        label: "Dall'aeroporto di Bergamo a Milano",
        detail: "I cinquanta chilometri, spiegati per bene.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Che cosa vi aspetta in città: Area B, Area C e i quartieri.",
      },
      {
        page: "malpensa",
        label: "Aeroporto di Malpensa (MXP)",
        detail: "Se state ancora scegliendo fra i voli.",
      },
      {
        page: "linate",
        label: "Aeroporto di Linate (LIN)",
        detail: "L'aeroporto cittadino, per confronto.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sull'aeroporto di Bergamo",
    lead: "Se le pone quasi sempre chi ha appena guardato una cartina.",
    items: [
      {
        question: "L'aeroporto di Bergamo è a Milano?",
        answer:
          "No. Si trova a Orio al Serio, in provincia di Bergamo, a circa 50 km da Milano e a circa 5 km da Bergamo. Viene comunemente venduto come aeroporto di Milano, ed è da lì che nasce l'equivoco.",
      },
      {
        question: "Perché si chiama Milano Bergamo?",
        answer:
          "Perché serve commercialmente Milano, come terzo scalo dell'area metropolitana. La denominazione ufficiale è Il Caravaggio International Airport, dal nome del pittore, ed è gestito da SACBO: una società diversa da quella che gestisce Malpensa e Linate.",
      },
      {
        question: "Conviene andare a Bergamo invece che a Milano?",
        answer:
          "Dipende interamente dal motivo del viaggio, ma vale la pena chiederselo. Bergamo è una città a sé e dista dall'aeroporto un decimo della strada. Se nulla vi obbliga ad andare a Milano, il tragitto più breve può essere la scelta migliore.",
      },
      {
        question: "C'è un treno dall'aeroporto a Milano?",
        answer:
          "Un collegamento ferroviario è stato annunciato ma, nelle fonti qui consultate, non ha una data di apertura confermata: questa pagina non vi dirà di contarci. Verificate la situazione aggiornata sul sito dell'aeroporto e dell'operatore ferroviario prima di organizzarvi.",
      },
      {
        question: "Il mio volo atterra molto tardi. È un problema?",
        answer:
          "Partenze e arrivi a orari estremi qui sono normali. È la cosa giusta da scrivere esplicitamente nella richiesta invece che sperare: che cosa sia organizzabile a quell'ora ve lo dirà la risposta, e questo sito non dichiara un servizio attivo ventiquattr'ore su ventiquattro.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Dite dove state andando davvero",
    body: "Il volo con il suo orario e l'indirizzo completo di arrivo: Milano, Bergamo o tutt'altro. Da questo aeroporto è la destinazione a fare più lavoro del solito.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Milano", page: "milan" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const bergamoAirport: Record<Locale, DistantAirport> = { en, it };
