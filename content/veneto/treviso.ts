import type { Locale } from "@/lib/site";
import type { TrevisoAirport } from "./types";

/**
 * Treviso — Antonio Canova.
 *
 * The same page Bergamo is, in a different province: an airport sold under a
 * city's name that stands about 31 km from it. The drawn distance from the
 * Milan cluster is reused deliberately, because the problem genuinely recurs
 * and inventing a different primitive for the same job would be variation for
 * its own sake. `docs/veneto-design-differentiation.md` argues that properly.
 *
 * Where it departs from Bergamo is the second half. Bergamo's reader has a
 * long drive and then an ordinary city; Treviso's has a long drive and then
 * Venice, where the road stops again. Two obstacles, not one — and the page
 * is built to say so.
 */

const en: TrevisoAirport = {
  meta: {
    title: "Treviso Airport transfers (TSF)",
    description:
      "The airport sold under Venice's name stands about 31 km from it, at Treviso. What that distance changes — and the second obstacle waiting at the other end.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Treviso · TSF",
    h1: "Transfers at Treviso Airport",
    lead: "Some airlines call this airport Venice-Treviso. It is about 3 km from Treviso and about 31 km from Venice, and the reference works are plain that the primary airport serving Venice is Marco Polo, not this one.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the distance changes",
    diagram: {
      caption:
        "Approximate distances, checked in October 2026. The airport is at Treviso; Venice is a separate journey from it — and the road into Venice stops at Piazzale Roma whichever airport you start from.",
      nodes: [
        {
          id: "venice",
          label: "Venice",
          detail:
            "The city on many tickets, and for most arrivals the actual destination.",
        },
        {
          id: "tsf",
          label: "Treviso Airport (TSF)",
          detail: "Aeroporto di Treviso A. Canova, operated by Aer Tre.",
          emphasis: true,
        },
        {
          id: "treviso",
          label: "Treviso",
          detail: "The city it actually belongs to, and much the nearer of the two.",
        },
      ],
      gaps: ["about 31 km", "about 3 km"],
    },
  },

  identity: {
    id: "identity",
    eyebrow: "What it actually is",
    heading: "A Treviso airport with Venice's name attached",
    lead: "None of this is a complaint about the airport. It works, and for a great deal of low-cost traffic it is the sensible way into the region. It is simply not where its marketing name suggests.",
    facts: [
      { label: "Official name", value: "A. Canova" },
      { label: "Codes", value: "TSF · LIPH" },
      { label: "Operator", value: "Aer Tre S.p.A." },
      { label: "Location", value: "Treviso" },
    ],
    source: {
      text: "Aer Tre is part of the SAVE Group, which also operates Marco Polo — two airports in one group, with very different roles. Identity, codes and distances checked October 2026; the operator's own transport pages could not be retrieved:",
      linkText: "the airport's encyclopaedic record",
      href: "https://en.wikipedia.org/wiki/Treviso_Airport",
    },
  },

  consequences: {
    id: "consequences",
    eyebrow: "In practice",
    heading: "Two obstacles, not one",
    lead: "This is where Treviso differs from every other airport in the project. The distance is only the first problem.",
    steps: [
      {
        title: "First, the distance the name conceals",
        body: "About 31 km of road between the airport and Venice. That is a real leg of the journey rather than an afterthought to the flight, and it is worth planning as one.",
      },
      {
        title: "Then, the road stops anyway",
        body: "Arriving from Treviso does not exempt you from Venice's geography. The road into the historic city ends at Piazzale Roma exactly as it does from Marco Polo, and the rest is on foot or by water.",
      },
      {
        title: "Treviso itself may be the answer",
        body: "If your business or your stay is in Treviso or the country around it, the airport is three kilometres away rather than thirty-one. It is worth checking that Venice is genuinely where you need to be.",
      },
      {
        title: "Low-cost hours are normal here",
        body: "The airport's traffic is weighted towards schedules that start early and finish late. Say the hour plainly in your request; what can be arranged at that time is answered in the reply rather than assumed.",
      },
    ],
  },

  onward: {
    id: "onward",
    heading: "From Treviso Airport",
    items: [
      {
        page: "route-tsf-venice",
        label: "Treviso Airport to Venice",
        detail: "Both obstacles, set out in order.",
      },
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "Where the road ends, and what happens after it.",
      },
      {
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "The airport inside the comune of Venice, for comparison.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Treviso Airport questions",
    lead: "Asked mostly by people who have just worked out where they have landed.",
    items: [
      {
        question: "Is Treviso Airport in Venice?",
        answer:
          "No. It is at Treviso, about 3 km from that city and about 31 km from Venice. Some airlines market it as Venice-Treviso, which is where the confusion comes from.",
      },
      {
        question: "So which is the real Venice airport?",
        answer:
          "Marco Polo, at Tessera inside the comune of Venice. The reference works say so directly, and it is the practical answer too — though neither airport can put a car at a historic-centre door.",
      },
      {
        question: "Does arriving at Treviso make Venice easier to reach?",
        answer:
          "It makes it further. You have about 31 km of road first, and then the same limit at Piazzale Roma that every Venice arrival meets. Two obstacles rather than one.",
      },
      {
        question: "Would I be better off staying in Treviso?",
        answer:
          "Possibly, and it is worth asking before arranging the longer journey. Treviso is a city in its own right and is a tenth of the distance from the airport.",
      },
      {
        question: "My flight lands very late. Is that a problem?",
        answer:
          "Late arrivals and early departures are ordinary at this airport. It is the right thing to state explicitly in your request rather than hope for; what can be arranged at that hour is answered in the reply, and this site does not claim a service that runs around the clock.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Say where you are really going",
    body: "The flight and its time, and the full address at the other end — Treviso, mainland Venice, or the historic centre. From this airport the destination does two jobs at once.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Venice", page: "venice" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: TrevisoAirport = {
  meta: {
    title: "Transfer aeroporto di Treviso (TSF)",
    description:
      "L'aeroporto venduto con il nome di Venezia dista da Venezia circa 31 km e si trova a Treviso. Che cosa comporta quella distanza, e il secondo ostacolo che vi aspetta all'arrivo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Treviso · TSF",
    h1: "Transfer all'aeroporto di Treviso",
    lead: "Alcune compagnie lo chiamano Venice-Treviso. Dista circa 3 km da Treviso e circa 31 km da Venezia, e le fonti di riferimento sono esplicite: l'aeroporto principale di Venezia è Marco Polo, non questo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa comporta la distanza",
    diagram: {
      caption:
        "Distanze approssimative, verificate nell'ottobre 2026. L'aeroporto è a Treviso; Venezia è un viaggio a sé — e la strada per Venezia si ferma comunque a Piazzale Roma, da qualunque aeroporto si parta.",
      nodes: [
        {
          id: "venezia",
          label: "Venezia",
          detail:
            "La città indicata su molti biglietti e, per la maggior parte degli arrivi, la destinazione reale.",
        },
        {
          id: "tsf",
          label: "Aeroporto di Treviso (TSF)",
          detail: "Aeroporto di Treviso A. Canova, gestito da Aer Tre.",
          emphasis: true,
        },
        {
          id: "treviso",
          label: "Treviso",
          detail: "La città a cui appartiene davvero, e di gran lunga la più vicina.",
        },
      ],
      gaps: ["circa 31 km", "circa 3 km"],
    },
  },

  identity: {
    id: "identita",
    eyebrow: "Che cos'è davvero",
    heading: "Un aeroporto trevigiano con il nome di Venezia attaccato",
    lead: "Nulla di tutto questo è una critica all'aeroporto: funziona e, per buona parte del traffico low cost, è il modo sensato di entrare nella regione. Semplicemente, non si trova dove il nome commerciale lascia intendere.",
    facts: [
      { label: "Denominazione", value: "A. Canova" },
      { label: "Codici", value: "TSF · LIPH" },
      { label: "Gestore", value: "Aer Tre S.p.A." },
      { label: "Dove si trova", value: "Treviso" },
    ],
    source: {
      text: "Aer Tre fa parte del Gruppo SAVE, che gestisce anche Marco Polo: due aeroporti di uno stesso gruppo, con funzioni molto diverse. Denominazione, codici e distanze verificati nell'ottobre 2026; le pagine sui trasporti del gestore non sono state raggiungibili:",
      linkText: "la scheda enciclopedica dell'aeroporto",
      href: "https://it.wikipedia.org/wiki/Aeroporto_di_Treviso-Sant%27Angelo",
    },
  },

  consequences: {
    id: "conseguenze",
    eyebrow: "In pratica",
    heading: "Due ostacoli, non uno",
    lead: "È qui che Treviso si distingue da ogni altro aeroporto del progetto: la distanza è solo il primo problema.",
    steps: [
      {
        title: "Prima, la distanza che il nome nasconde",
        body: "Circa 31 km di strada fra l'aeroporto e Venezia. È una tappa vera del viaggio, non un'appendice del volo, e conviene organizzarla come tale.",
      },
      {
        title: "Poi, la strada finisce lo stesso",
        body: "Arrivare da Treviso non esenta dalla geografia di Venezia. La strada verso la città storica finisce a Piazzale Roma esattamente come partendo da Marco Polo, e il resto si fa a piedi o per acqua.",
      },
      {
        title: "Forse la risposta è Treviso stessa",
        body: "Se il vostro impegno o il vostro soggiorno è a Treviso o nella campagna attorno, l'aeroporto dista tre chilometri invece di trentuno. Vale la pena verificare che Venezia sia davvero dove dovete andare.",
      },
      {
        title: "Qui gli orari low cost sono la norma",
        body: "Il traffico di questo scalo è concentrato su orari che cominciano presto e finiscono tardi. Indicate l'ora in modo esplicito: che cosa sia organizzabile a quell'ora ve lo dirà la risposta.",
      },
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Dall'aeroporto di Treviso",
    items: [
      {
        page: "route-tsf-venice",
        label: "Dall'aeroporto di Treviso a Venezia",
        detail: "Entrambi gli ostacoli, nell'ordine.",
      },
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "Dove finisce la strada e che cosa succede dopo.",
      },
      {
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "L'aeroporto dentro il comune di Venezia, per confronto.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sull'aeroporto di Treviso",
    lead: "Se le pone soprattutto chi ha appena capito dove è atterrato.",
    items: [
      {
        question: "L'aeroporto di Treviso è a Venezia?",
        answer:
          "No. Si trova a Treviso, a circa 3 km da quella città e a circa 31 km da Venezia. Alcune compagnie lo commercializzano come Venice-Treviso, ed è da lì che nasce l'equivoco.",
      },
      {
        question: "Qual è allora il vero aeroporto di Venezia?",
        answer:
          "Marco Polo, a Tessera, dentro il comune di Venezia. Lo dicono esplicitamente le fonti di riferimento ed è anche la risposta pratica, benché nessuno dei due aeroporti possa portare un'auto davanti a un portone del centro storico.",
      },
      {
        question: "Arrivare a Treviso rende Venezia più comoda?",
        answer:
          "La rende più lontana. Prima ci sono circa 31 km di strada, poi lo stesso limite di Piazzale Roma che incontra qualunque arrivo a Venezia. Due ostacoli invece di uno.",
      },
      {
        question: "Converrebbe fermarsi a Treviso?",
        answer:
          "Forse, e vale la pena chiederselo prima di organizzare il tragitto lungo. Treviso è una città a sé e dista dall'aeroporto un decimo della strada.",
      },
      {
        question: "Il mio volo atterra molto tardi. È un problema?",
        answer:
          "Arrivi tardi e partenze all'alba qui sono normali. È la cosa giusta da scrivere esplicitamente nella richiesta invece che sperare: che cosa sia organizzabile a quell'ora ve lo dirà la risposta, e questo sito non dichiara un servizio attivo ventiquattr'ore su ventiquattro.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Dite dove state andando davvero",
    body: "Il volo con il suo orario e l'indirizzo completo di arrivo: Treviso, la terraferma veneziana o il centro storico. Da questo aeroporto la destinazione fa due lavori insieme.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Venezia", page: "venice" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const trevisoAirport: Record<Locale, TrevisoAirport> = { en, it };
