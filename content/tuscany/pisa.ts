import type { Locale } from "@/lib/site";
import type { PisaAirport } from "./types";

/**
 * Pisa Galileo Galilei.
 *
 * ── The inverted Treviso ──────────────────────────────────────────────────
 * Treviso's page corrects a reader who believes their airport is in Venice.
 * This page does something subtler, and the difference is the reason it is
 * not built from Treviso's drawn-distance hero.
 *
 * Pisa's airport *is* in Pisa. It is correctly named, it is not sold under
 * another city's name, and nothing about it is mis-sold. It is simply also
 * the usual way into Florence, which is a different city — so the correction
 * is not "this airport is not where you think" but "this airport serves more
 * than its name describes".
 *
 * No distance is drawn because none was verified: no source consulted states
 * the road distance from the airport to Pisa or to Florence. Treviso's hero
 * had two published figures to put on a rule. This page has none, and a
 * diagram with invented numbers on it would be worse than no diagram.
 *
 * The operator's own site refused connection for this build, so no fact here
 * is presented as operator-confirmed. See `docs/tuscany-research-log.md` §1.
 */

const en: PisaAirport = {
  meta: {
    title: "Pisa Galileo Galilei Airport transfers",
    description:
      "Tuscany's busiest airport is in Pisa, is named for Pisa, and is still how most people reach Florence. What that means when you arrange a car.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Arriving in Tuscany",
    h1: "Pisa Galileo Galilei Airport",
    lead: "The airport for Tuscany is not in the city most of its passengers are going to. Nothing about that is a trick — it is correctly named, it is genuinely in Pisa, and it is also the ordinary way into Florence. The name is simply narrower than the job.",
    primaryCta: "Request a quotation",
    secondaryCta: "Why it serves more than Pisa",
    facts: [
      { label: "IATA", value: "PSA" },
      { label: "ICAO", value: "LIRP" },
      { label: "Stands in", value: "The comune of Pisa" },
      { label: "In Tuscany", value: "The busiest" },
    ],
  },

  expectation: {
    id: "expectation",
    eyebrow: "The gap in the name",
    heading: "What the name says, and what the airport does",
    lead: "Most airport pages on this site exist because a name is misleading. This one exists because a name is accurate and still incomplete.",
    columns: [
      {
        id: "name",
        heading: "What the name tells you",
        subheading: "All of it true",
        rows: [
          {
            term: "It is in Pisa",
            detail:
              "The airport stands in the comune of Pisa. Unlike Bergamo or Treviso, it is not sold under the name of a city it is nowhere near.",
          },
          {
            term: "It is named properly",
            detail:
              "Pisa International Airport, also known as Galileo Galilei. The code is PSA, which matches the city rather than a region or an operator.",
          },
          {
            term: "It serves Pisa",
            detail:
              "If Pisa is where you are going, this is the right airport and there is nothing further to explain.",
          },
        ],
      },
      {
        id: "reality",
        heading: "What it leaves out",
        subheading: "Also true",
        rows: [
          {
            term: "It is Tuscany's busiest",
            detail:
              "More traffic passes through here than through Florence's own airport, and a large share of it is not staying in Pisa. Its operator runs the two Tuscan airports as complements and points this one at tourist and low-cost traffic.",
          },
            {
            term: "It is a Florence gateway",
            detail:
              "For many visitors the itinerary is land at Pisa, travel to Florence. That is an ordinary intercity journey between two separate cities, not a transfer across one.",
          },
          {
            term: "It is a joint field",
            detail:
              "The airport is operated by Toscana Aeroporti alongside the Italian Air Force. Worth knowing; it changes nothing about arranging a car.",
          },
        ],
      },
    ],
    source: {
      text: "The operator, the way it divides work between its two airports, this airport's position about a kilometre from Pisa and the taxi arrangements all come from Toscana Aeroporti's own 2025 Service Charter for Pisa, read on 27 October 2026. The company's website refuses automated requests, so the charter was read from an archived copy of the published document and its own pages should be preferred where the two differ. Names, codes and the joint civil/military status are from published reference records rather than from the charter. No fare or journey time is quoted, and no distance to Florence, because no source consulted states one:",
      linkText: "Toscana Aeroporti's 2025 Service Charter for Pisa, archived copy",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },

  onwardTo: {
    id: "onward",
    eyebrow: "Where people go from here",
    heading: "Leaving the airport",
    lead: "Two destinations have pages on this site. Anywhere else in Tuscany can still be asked about, but it is not described here as though it were covered.",
    items: [
      {
        page: "route-psa-florence",
        label: "Pisa Airport to Florence",
        detail:
          "The commonest journey from this airport, and the only airport route in this project whose two ends are different cities.",
      },
      {
        page: "florence",
        label: "Private transfers in Florence",
        detail:
          "The city itself, including the restricted centre and what this site could not confirm about it.",
      },
      {
        page: "val-dorcia",
        label: "The Val d'Orcia",
        detail:
          "The countryside to the south-east. The valley's own tourist authority lists Pisa among the airports nearest to it.",
      },
      {
        page: "florence-airport",
        label: "Florence Peretola (FLR)",
        detail:
          "The other Tuscan airport, under the same operator, and a good deal smaller for a physical reason.",
      },
    ],
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "The airport end of a request from here is ordinary. It is the other end that decides the answer.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The full destination address — street and number, not just the city.",
      "How many passengers, and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "No meeting point is promised on this page. The airport recognises private hire with driver as one of its transport options but publishes no pick-up point for it, so where a driver waits is settled in the reply to your request rather than promised in advance.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this airport",
    lead: "Including the ones this page answers by declining to answer them.",
    items: [
      {
        question: "Is Pisa Airport near Florence?",
        answer:
          "It is in a different city. The operator's own charter places the airport about a kilometre from Pisa, on the coast, but states no distance and no time to Florence, and no other source consulted does either — so none is quoted here. Pisa and Florence are separate cities and the journey between them is an intercity one. It is still, for many visitors, the normal way to reach Florence.",
      },
      {
        question: "How long does the transfer to Florence take?",
        answer:
          "No duration appears on this page. The operator's own 2025 service charter says nothing about the time or the distance to Florence, and no other source consulted publishes a figure. An estimate invented here would be the kind of number people plan a flight connection around.",
      },
      {
        question: "Where will the driver meet me?",
        answer:
          "That is settled in the reply to your request. The airport lists private hire with driver among its own transport options, so the category is an ordinary one here — but it publishes no pick-up point for it, and where a particular driver waits is part of the arrangement rather than a fixed rule. For comparison, its charter puts the taxi rank in front of the terminal exit on the arrivals side.",
      },
      {
        question: "Is this the same company as Florence Airport?",
        answer:
          "Yes. Both Tuscan airports are operated by Toscana Aeroporti. It makes no practical difference to arranging a car, but it explains why the two are often discussed together.",
      },
      {
        question: "Can you take me somewhere else in Tuscany?",
        answer:
          "Ask, and name the place. Florence and the Val d'Orcia have pages here because something could be verified about reaching them. Other destinations can be requested; they are simply not described on this site as though coverage had been established.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Land at Pisa, arrive somewhere else",
    body: "That is the normal shape of a journey from this airport, and it is worth saying plainly rather than leaving a visitor to work it out at the kerb. Flight, date, time, and the address at the far end.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Pisa Airport to Florence", page: "route-psa-florence" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: PisaAirport = {
  meta: {
    title: "Transfer dall'aeroporto di Pisa Galileo Galilei",
    description:
      "L'aeroporto più trafficato della Toscana è a Pisa, porta il nome di Pisa, ed è comunque il modo in cui la maggior parte dei viaggiatori raggiunge Firenze.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Arrivare in Toscana",
    h1: "Aeroporto di Pisa Galileo Galilei",
    lead: "L'aeroporto della Toscana non si trova nella città in cui è diretta la maggior parte dei suoi passeggeri. Non c'è alcun trucco: il nome è corretto, l'aeroporto è davvero a Pisa, ed è anche la via normale per Firenze. È semplicemente un nome più stretto del mestiere che svolge.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Perché serve più di Pisa",
    facts: [
      { label: "IATA", value: "PSA" },
      { label: "ICAO", value: "LIRP" },
      { label: "Si trova nel", value: "Comune di Pisa" },
      { label: "In Toscana", value: "Il più trafficato" },
    ],
  },

  expectation: {
    id: "aspettativa",
    eyebrow: "Ciò che il nome non dice",
    heading: "Che cosa dice il nome, e che cosa fa l'aeroporto",
    lead: "Quasi tutte le pagine aeroportuali di questo sito esistono perché un nome inganna. Questa esiste perché un nome è esatto e tuttavia incompleto.",
    columns: [
      {
        id: "nome",
        heading: "Che cosa vi dice il nome",
        subheading: "Tutto vero",
        rows: [
          {
            term: "È a Pisa",
            detail:
              "L'aeroporto si trova nel comune di Pisa. A differenza di Bergamo o di Treviso, non è venduto con il nome di una città a cui non è affatto vicino.",
          },
          {
            term: "È nominato correttamente",
            detail:
              "Aeroporto Internazionale di Pisa, noto anche come Galileo Galilei. Il codice è PSA, che corrisponde alla città e non a una regione o a un gestore.",
          },
          {
            term: "Serve Pisa",
            detail:
              "Se la vostra destinazione è Pisa, questo è l'aeroporto giusto e non c'è altro da spiegare.",
          },
        ],
      },
      {
        id: "realta",
        heading: "Che cosa il nome tralascia",
        subheading: "Altrettanto vero",
        rows: [
          {
            term: "È il più trafficato della Toscana",
            detail:
              "Ci passa più traffico che dall'aeroporto di Firenze, e una quota consistente non si ferma a Pisa. Il gestore conduce i due scali toscani come complementari e destina questo al traffico turistico e low cost.",
          },
          {
            term: "È una porta d'accesso a Firenze",
            detail:
              "Per molti visitatori l'itinerario è: atterrare a Pisa, proseguire per Firenze. È un normale viaggio fra due città distinte, non uno spostamento all'interno della stessa.",
          },
          {
            term: "È uno scalo misto",
            detail:
              "L'aeroporto è gestito da Toscana Aeroporti insieme all'Aeronautica Militare. Vale la pena saperlo; non cambia nulla nell'organizzare un'auto.",
          },
        ],
      },
    ],
    source: {
      text: "Il gestore, il modo in cui ripartisce il lavoro fra i suoi due aeroporti, la posizione di questo scalo a circa un chilometro da Pisa e le modalità del servizio taxi provengono tutti dalla carta dei servizi 2025 di Toscana Aeroporti per Pisa, letta il 27 ottobre 2026. Il sito della società rifiuta le richieste automatiche: la carta è stata quindi letta da una copia archiviata del documento pubblicato, e in caso di divergenza fanno fede le pagine della società. Denominazioni, codici e la natura di scalo civile e militare provengono da registri di riferimento pubblicati e non dalla carta. Non indichiamo tariffe o durate, né distanze verso Firenze, perché nessuna fonte consultata ne riporta:",
      linkText: "La carta dei servizi 2025 di Toscana Aeroporti per Pisa, copia archiviata",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },

  onwardTo: {
    id: "proseguimenti",
    eyebrow: "Dove si va da qui",
    heading: "Uscire dall'aeroporto",
    lead: "Due destinazioni hanno una pagina su questo sito. Qualunque altro luogo della Toscana si può comunque chiedere, ma qui non è descritto come se fosse coperto.",
    items: [
      {
        page: "route-psa-florence",
        label: "Dall'aeroporto di Pisa a Firenze",
        detail:
          "Il tragitto più richiesto da questo aeroporto, e l'unica tratta aeroportuale del progetto con due città diverse ai suoi capi.",
      },
      {
        page: "florence",
        label: "Transfer privati a Firenze",
        detail:
          "La città, con il centro a traffico limitato e ciò che su di esso non abbiamo potuto confermare.",
      },
      {
        page: "val-dorcia",
        label: "La Val d'Orcia",
        detail:
          "La campagna a sud-est. L'ente turistico della valle indica Pisa fra gli aeroporti più vicini.",
      },
      {
        page: "florence-airport",
        label: "Firenze Peretola (FLR)",
        detail:
          "L'altro aeroporto toscano, dello stesso gestore, e parecchio più piccolo per una ragione fisica.",
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Il capo aeroportuale di una richiesta da qui è ordinario. È l'altro capo a determinare la risposta.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "L'indirizzo completo di destinazione: via e numero, non solo la città.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "Su questa pagina non promettiamo alcun punto d'incontro. L'aeroporto riconosce il noleggio con conducente fra le proprie modalità di trasporto ma non pubblica alcun punto di prelievo dedicato: dove attenda un autista si definisce quindi nella risposta alla vostra richiesta, non lo si promette in anticipo.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo aeroporto",
    lead: "Comprese quelle a cui questa pagina risponde rifiutandosi di rispondere.",
    items: [
      {
        question: "L'aeroporto di Pisa è vicino a Firenze?",
        answer:
          "È in un'altra città. La carta dei servizi del gestore colloca l'aeroporto a circa un chilometro da Pisa, sulla costa, ma non indica alcuna distanza né alcun tempo verso Firenze, e nessun'altra fonte consultata lo fa: perciò qui non ne riportiamo. Pisa e Firenze sono città distinte e il tragitto fra le due è un viaggio interurbano. Resta, per molti visitatori, il modo normale di raggiungere Firenze.",
      },
      {
        question: "Quanto dura il transfer per Firenze?",
        answer:
          "Su questa pagina non compare alcuna durata. La carta dei servizi 2025 del gestore non dice nulla sul tempo o sulla distanza verso Firenze, e nessun'altra fonte consultata pubblica un dato. Una stima inventata qui sarebbe proprio il genere di numero su cui si pianifica una coincidenza aerea.",
      },
      {
        question: "Dove mi aspetta l'autista?",
        answer:
          "Si stabilisce nella risposta alla vostra richiesta. L'aeroporto elenca il noleggio con conducente fra le proprie modalità di trasporto, quindi qui la categoria è ordinaria — ma non pubblica alcun punto di prelievo dedicato, e dove attenda un determinato autista fa parte dell'accordo e non di una regola fissa. Per confronto, la sua carta dei servizi colloca il posteggio dei taxi davanti all'uscita del terminal, lato arrivi.",
      },
      {
        question: "È la stessa società dell'aeroporto di Firenze?",
        answer:
          "Sì. Entrambi gli aeroporti toscani sono gestiti da Toscana Aeroporti. Non cambia nulla nell'organizzare un'auto, ma spiega perché spesso se ne parli insieme.",
      },
      {
        question: "Mi portate altrove in Toscana?",
        answer:
          "Chiedetelo, indicando il luogo. Firenze e la Val d'Orcia hanno una pagina qui perché su come raggiungerle è stato possibile verificare qualcosa. Altre destinazioni si possono richiedere: semplicemente non sono descritte su questo sito come se la copertura fosse accertata.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Atterrare a Pisa, arrivare altrove",
    body: "È la forma normale di un viaggio da questo aeroporto, e conviene dirlo chiaramente invece di lasciarlo capire al marciapiede degli arrivi. Volo, data, ora e l'indirizzo all'altro capo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Da Pisa a Firenze", page: "route-psa-florence" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const pisaAirport: Record<Locale, PisaAirport> = { en, it };
