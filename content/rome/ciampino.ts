import type { Locale } from "@/lib/site";
import type { SecondAirport } from "./types";

/**
 * Ciampino.
 *
 * The real search intent here is a comparison — people arrive at this page
 * having discovered that Rome has a second airport — so the comparison is the
 * first thing on the page rather than a footnote to an introduction.
 *
 * This is also the one page in the cluster with no photograph. Not an
 * oversight: no photograph of Ciampino was available under a licence that
 * permits presentation without a visible credit, and every candidate that was
 * found showed another operator's branded coach. Using one would have
 * advertised a competitor and implied an affiliation that does not exist, so
 * the page is typographic by design. See the asset manifest.
 */

const en: SecondAirport = {
  meta: {
    title: "Ciampino Airport transfers (CIA)",
    description:
      "Rome's second airport and how it differs from Fiumicino: closer to the city, far smaller, busiest at the ends of the day. What to check and what to send when you arrange a car.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome Ciampino · CIA",
    h1: "Transfers at Ciampino Airport",
    lead: "Most people arrive at Ciampino because a low-cost airline put them there, and find it is not the airport they had pictured. It is closer to Rome than Fiumicino and about a twelfth of its size. Both facts change how a transfer is planned.",
    primaryCta: "Request a quotation",
    secondaryCta: "Compare it with Fiumicino",
    facts: [
      { label: "Official name", value: "Giovan Battista Pastine" },
      { label: "IATA code", value: "CIA" },
      { label: "From Rome", value: "About 15 km south-east" },
      { label: "Passengers, 2025", value: "About 4 million" },
    ],
  },

  compare: {
    id: "compare",
    eyebrow: "The comparison",
    heading: "Ciampino is not a smaller Fiumicino",
    lead: "They are two airports doing different jobs. The differences that matter for a car are these.",
    columns: [
      {
        id: "cia",
        heading: "Ciampino (CIA)",
        subheading: "Giovan Battista Pastine",
        rows: [
          { term: "Distance from Rome", detail: "About 15 km, south-east." },
          { term: "Passengers in 2025", detail: "About 4 million." },
          {
            term: "What uses it",
            detail:
              "Mainly low-cost airlines, express couriers and general aviation.",
          },
          {
            term: "What that means for a pickup",
            detail:
              "A shorter drive, a small building in which to find someone, and flight times that cluster at the beginning and end of the day.",
          },
        ],
      },
      {
        id: "fco",
        heading: "Fiumicino (FCO)",
        subheading: "Leonardo da Vinci",
        rows: [
          { term: "Distance from Rome", detail: "About 32 km, south-west." },
          { term: "Passengers in 2025", detail: "About 51.3 million." },
          {
            term: "What uses it",
            detail:
              "Scheduled national, international and intercontinental flights.",
          },
          {
            term: "What that means for a pickup",
            detail:
              "Two terminals to tell apart, and a longer gap between landing and walking out.",
          },
        ],
      },
    ],
    source: {
      text: "Both airports are managed by Aeroporti di Roma. Distances and 2025 passenger figures are the operator's own, checked in October 2026:",
      linkText: "Aeroporti di Roma on the Rome airport system",
      href: "https://www.adr.it/web/aeroporti-di-roma-en/bsn-rome-airport-system",
    },
  },

  practical: {
    id: "planning",
    eyebrow: "Planning",
    heading: "What to think about at Ciampino",
    lead: "Three things come up here more often than they do at Fiumicino.",
    sections: [
      {
        heading: "The hours are the problem, not the distance",
        paragraphs: [
          "Low-cost schedules push flights towards the ends of the day. An arrival near midnight or a departure before dawn is ordinary here, and it is the part of the journey worth settling first — not because anything is impossible at those hours, but because it is exactly the sort of detail that ought to be agreed in writing rather than assumed.",
          "So give the time plainly when you ask. A pre-dawn departure from a central address and a late-night arrival are different requests, and both are easier to answer when they are not a surprise.",
        ],
      },
      {
        heading: "One passenger building — and a separate one for private flights",
        paragraphs: [
          "The passenger side of Ciampino is a single building holding departures and arrivals, which makes finding someone simpler than at a multi-terminal airport. The operator also runs a separate terminal for general aviation, the private and air-taxi flights the airport is known for. That is a different part of the airport and a different arrangement, so if it is where you are landing, say so: it is not the default assumption.",
        ],
      },
      {
        heading: "Closer does not mean quicker",
        paragraphs: [
          "Ciampino is roughly half Fiumicino's distance from the centre, but the approach runs through the south-eastern edge of the city rather than down a motorway, and Rome's limited-traffic zones apply to both journeys alike. Distance is one input into how long a journey takes. The hour and the address at the other end are the others, and neither can be read off a map.",
        ],
      },
    ],
  },

  onward: {
    id: "onward",
    heading: "From Ciampino to",
    items: [
      {
        page: "route-cia-rome",
        label: "Ciampino Airport to Rome",
        detail: "The short run into the city, and what decides it.",
      },
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "Arrival points, districts and access across the city.",
      },
      {
        page: "fiumicino",
        label: "Fiumicino Airport (FCO)",
        detail: "The other Rome airport, in full.",
      },
      {
        page: "rome-stations",
        label: "Rome's railway stations",
        detail: "If the journey continues by train.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Ciampino questions",
    lead: "Mostly asked by people who have just realised they are not flying into Fiumicino.",
    items: [
      {
        question: "Is Ciampino in Rome?",
        answer:
          "It is about 15 km south-east of the centre, in the town of Ciampino, and it is one of the two airports that make up the Rome system. Its official name is Giovan Battista Pastine Airport, and like Fiumicino it is managed by Aeroporti di Roma.",
      },
      {
        question: "Which of the two airports will my flight use?",
        answer:
          "Your ticket names it, and it is worth checking: a booking that says only 'Rome' can mean either, and the two sit on opposite sides of the city.",
      },
      {
        question: "Is a transfer from Ciampino cheaper than from Fiumicino?",
        answer:
          "It is a shorter journey, but no price for either appears on this site, because the cost turns on the address at the other end, the hour, the number of passengers and the vehicle that suits them. If you are still choosing between flights, ask about both and compare the answers.",
      },
      {
        question: "My flight lands after midnight. Is that a problem?",
        answer:
          "It is common at Ciampino, and it is the right thing to raise explicitly in your request rather than to hope for. What can be arranged at that hour is answered in the reply; this page does not claim a service that runs around the clock.",
      },
      {
        question: "I am arriving on a private flight. Is that the same thing?",
        answer:
          "No. General aviation uses a separate terminal at Ciampino, which is a different arrangement from a scheduled arrival. Say so when you ask, so that the answer is about the right part of the airport.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Say when you land, and where you are going",
    body: "The flight number and date, the time it is due, the address at the other end, how many of you there are and how much luggage you have. At Ciampino the hour matters as much as the route.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: SecondAirport = {
  meta: {
    title: "Transfer aeroporto di Ciampino (CIA)",
    description:
      "Il secondo aeroporto di Roma e come differisce da Fiumicino: più vicino, molto più piccolo, con voli agli estremi della giornata. Che cosa verificare e che cosa indicare.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Roma Ciampino · CIA",
    h1: "Transfer all'aeroporto di Ciampino",
    lead: "Alla maggior parte dei viaggiatori Ciampino capita perché ce li ha portati una compagnia low cost, e scoprono che non è l'aeroporto che avevano in mente. È più vicino a Roma di Fiumicino ed è circa un dodicesimo della sua dimensione: entrambe le cose cambiano il modo di organizzare un transfer.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Confrontalo con Fiumicino",
    facts: [
      { label: "Denominazione", value: "Giovan Battista Pastine" },
      { label: "Codice IATA", value: "CIA" },
      { label: "Da Roma", value: "Circa 15 km a sud-est" },
      { label: "Passeggeri 2025", value: "Circa 4 milioni" },
    ],
  },

  compare: {
    id: "confronto",
    eyebrow: "Il confronto",
    heading: "Ciampino non è un Fiumicino in piccolo",
    lead: "Sono due aeroporti con funzioni diverse. Le differenze che contano per un'auto sono queste.",
    columns: [
      {
        id: "cia",
        heading: "Ciampino (CIA)",
        subheading: "Giovan Battista Pastine",
        rows: [
          { term: "Distanza da Roma", detail: "Circa 15 km, a sud-est." },
          { term: "Passeggeri nel 2025", detail: "Circa 4 milioni." },
          {
            term: "Chi lo usa",
            detail:
              "Soprattutto compagnie low cost, corrieri espresso e aviazione generale.",
          },
          {
            term: "Che cosa comporta per il prelievo",
            detail:
              "Un tragitto più breve, un edificio piccolo in cui ritrovarsi e orari concentrati all'inizio e alla fine della giornata.",
          },
        ],
      },
      {
        id: "fco",
        heading: "Fiumicino (FCO)",
        subheading: "Leonardo da Vinci",
        rows: [
          { term: "Distanza da Roma", detail: "Circa 32 km, a sud-ovest." },
          { term: "Passeggeri nel 2025", detail: "Circa 51,3 milioni." },
          {
            term: "Chi lo usa",
            detail:
              "Voli di linea nazionali, internazionali e intercontinentali.",
          },
          {
            term: "Che cosa comporta per il prelievo",
            detail:
              "Due terminal da distinguere e un intervallo più lungo fra l'atterraggio e l'uscita.",
          },
        ],
      },
    ],
    source: {
      text: "Entrambi gli aeroporti sono gestiti da Aeroporti di Roma. Distanze e dati di traffico 2025 sono quelli del gestore, verificati nell'ottobre 2026:",
      linkText: "Aeroporti di Roma, il sistema aeroportuale romano",
      href: "https://www.adr.it/bsn-sistema-aeroportuale-romano",
    },
  },

  practical: {
    id: "organizzare",
    eyebrow: "Organizzare",
    heading: "A che cosa pensare a Ciampino",
    lead: "Tre questioni si presentano qui più spesso che a Fiumicino.",
    sections: [
      {
        heading: "Il problema sono gli orari, non la distanza",
        paragraphs: [
          "Gli orari low cost spingono i voli agli estremi della giornata. Un arrivo vicino a mezzanotte o una partenza prima dell'alba qui sono normali, ed è la parte del viaggio da definire per prima: non perché a quelle ore sia impossibile qualcosa, ma perché è proprio il genere di dettaglio che va concordato per iscritto invece che dato per scontato.",
          "Indicate quindi l'orario in modo esplicito. Una partenza all'alba da un indirizzo in centro e un arrivo a notte fonda sono richieste diverse, e in entrambi i casi la risposta è più semplice se l'orario non è una sorpresa.",
        ],
      },
      {
        heading: "Un solo edificio passeggeri, e uno separato per i voli privati",
        paragraphs: [
          "Il lato passeggeri di Ciampino è un unico edificio che ospita partenze e arrivi: ritrovarsi è più semplice che in un aeroporto con più terminal. Il gestore mantiene inoltre un terminal separato per l'aviazione generale, cioè i voli privati e i taxi aerei per cui l'aeroporto è noto. È un'altra parte dell'aeroporto e un'altra organizzazione: se atterrate lì, segnalatelo, perché non è l'ipotesi predefinita.",
        ],
      },
      {
        heading: "Più vicino non vuol dire più veloce",
        paragraphs: [
          "Ciampino dista dal centro all'incirca la metà di Fiumicino, ma vi si arriva attraverso il margine sud-orientale della città e non lungo un'autostrada, e le ZTL del centro valgono allo stesso modo per entrambi i percorsi. La distanza è uno degli elementi che determinano la durata: gli altri sono l'ora e l'indirizzo di arrivo, e nessuno dei due si legge su una cartina.",
        ],
      },
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Ciampino verso",
    items: [
      {
        page: "route-cia-rome",
        label: "Dall'aeroporto di Ciampino a Roma",
        detail: "Il tragitto breve verso la città, e da che cosa dipende.",
      },
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Punti di arrivo, quartieri e accessi in città.",
      },
      {
        page: "fiumicino",
        label: "Aeroporto di Fiumicino (FCO)",
        detail: "L'altro aeroporto di Roma, per esteso.",
      },
      {
        page: "rome-stations",
        label: "Le stazioni ferroviarie di Roma",
        detail: "Se il viaggio prosegue in treno.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Ciampino",
    lead: "Se le pone soprattutto chi ha appena capito che non atterrerà a Fiumicino.",
    items: [
      {
        question: "Ciampino è a Roma?",
        answer:
          "Si trova a circa 15 km a sud-est del centro, nel comune di Ciampino, ed è uno dei due aeroporti che compongono il sistema romano. La denominazione ufficiale è aeroporto Giovan Battista Pastine e, come Fiumicino, è gestito da Aeroporti di Roma.",
      },
      {
        question: "Da quale dei due aeroporti parte il mio volo?",
        answer:
          "Lo indica il biglietto, e conviene controllarlo: una prenotazione che dice soltanto «Roma» può riferirsi a entrambi, e i due si trovano su lati opposti della città.",
      },
      {
        question: "Un transfer da Ciampino costa meno che da Fiumicino?",
        answer:
          "Il percorso è più breve, ma su questo sito non trovate un prezzo per nessuno dei due, perché il costo dipende dall'indirizzo di arrivo, dall'ora, dal numero di passeggeri e dal veicolo adatto. Se state ancora scegliendo il volo, chiedete per entrambi e confrontate le risposte.",
      },
      {
        question: "Il mio volo atterra dopo mezzanotte. È un problema?",
        answer:
          "A Ciampino è frequente, ed è la cosa giusta da scrivere esplicitamente nella richiesta invece che sperare. Che cosa sia organizzabile a quell'ora ve lo dirà la risposta: questa pagina non dichiara un servizio attivo ventiquattr'ore su ventiquattro.",
      },
      {
        question: "Arrivo con un volo privato. È la stessa cosa?",
        answer:
          "No. L'aviazione generale a Ciampino usa un terminal separato, ed è un'organizzazione diversa da quella di un volo di linea. Indicatelo nella richiesta, così la risposta riguarderà la parte giusta dell'aeroporto.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Dite quando atterrate e dove andate",
    body: "Numero del volo e data, orario previsto, indirizzo di arrivo, quante persone siete e quanti bagagli avete. A Ciampino l'ora conta quanto il percorso.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const ciampino: Record<Locale, SecondAirport> = { en, it };
