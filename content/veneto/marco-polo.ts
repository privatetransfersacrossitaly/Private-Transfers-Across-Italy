import type { Locale } from "@/lib/site";
import type { MarcoPolo } from "./types";

/**
 * Venice Marco Polo.
 *
 * The page turns on a tension worth stating plainly: this airport is inside
 * the comune of Venice — it is genuinely Venice's own — and it still cannot
 * put a car at a historic-centre door. Being the right airport does not
 * change the city's geography.
 *
 * The homepage already calls VCE an airport "with a land side and a water
 * side". This page takes that phrase and makes it the structure, using the
 * same road/water split as the Venice hub so a reader who has seen one
 * recognises the other.
 *
 * No fare, frequency or duration for any onward option appears here. The
 * operator's own transport pages returned HTTP 403 and the secondary sources
 * disagreed with one another. See `docs/veneto-research-log.md` §0 and §1.
 */

const en: MarcoPolo = {
  meta: {
    title: "Marco Polo Airport transfers (VCE)",
    description:
      "Venice's own airport, at Tessera inside the comune — and still unable to deliver a car to a historic-centre door. Where a transfer from VCE can actually end.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Venice Marco Polo · VCE",
    h1: "Transfers at Venice Marco Polo",
    lead: "Marco Polo is genuinely Venice's airport: it stands at Tessera, inside the comune of Venice, on the edge of the lagoon. What it cannot do — what no airport could — is put a car at a door in the historic centre.",
    primaryCta: "Request a quotation",
    secondaryCta: "The land side and the water side",
    note: "No meeting point, waiting allowance or parking rule appears on this page, and no fare or duration for any onward option. The airport's own transport pages could not be retrieved for this build, and nothing here is invented to fill the gap.",
  },

  facts: [
    { label: "Official name", value: "Venice Marco Polo" },
    { label: "Codes", value: "VCE · LIPZ" },
    { label: "Operator", value: "SAVE S.p.A." },
    { label: "Location", value: "Tessera, comune of Venice" },
  ],
  factsSource: {
    text: "Identity, codes, operator and location checked in October 2026. The airport lies about 7.5 km north-east of the Venice city centre — a straight-line figure across the lagoon, not a road distance, which is part of why no journey time is quoted:",
    linkText: "the airport's encyclopaedic record",
    href: "https://en.wikipedia.org/wiki/Venice_Marco_Polo_Airport",
  },

  sides: {
    id: "sides",
    eyebrow: "Endpoints",
    heading: "The land side and the water side",
    lead: "Every journey out of this airport is one or the other, and which one you need decides what can be arranged.",
    split: {
      road: {
        label: "A car can reach",
        heading: "Where a road transfer from VCE can end",
        note: "If your destination is here, this is an ordinary airport transfer and behaves like one anywhere else in Italy.",
        items: [
          {
            id: "piazzale-roma",
            name: "Piazzale Roma",
            detail:
              "The road terminus for the historic city, and the usual end point for a car heading into Venice.",
          },
          {
            id: "tronchetto",
            name: "Tronchetto",
            detail: "The other road terminus, beside Piazzale Roma.",
          },
          {
            id: "mestre",
            name: "Venezia Mestre and the mainland",
            detail:
              "The mainland station, the district around it, and any mainland address — reachable to the door.",
          },
          {
            id: "beyond",
            name: "Beyond the lagoon",
            detail:
              "Treviso, Padua, Verona and the rest of the mainland road network.",
          },
        ],
      },
      water: {
        label: "A car cannot reach",
        heading: "Where the journey continues without us",
        note: "A water leg is not part of a road transfer. The airport has public and private water services and they are arranged with their own operators; nothing on this page is an offer of one.",
        items: [
          {
            id: "historic",
            name: "The historic centre",
            detail:
              "San Marco, Cannaregio, Dorsoduro and the rest — no road beyond Piazzale Roma.",
          },
          {
            id: "santa-lucia",
            name: "Venezia Santa Lucia",
            detail:
              "The station inside the historic city. On foot or by water from Piazzale Roma.",
          },
          {
            id: "islands",
            name: "The lagoon islands",
            detail: "Lido, Murano, Burano and the others.",
          },
        ],
      },
    },
    source: {
      text: "The airport's land connections run to Piazzale Roma and Venezia Mestre, and water services run across the lagoon. Those are the public options and are listed as context, not as something this service provides. Checked October 2026:",
      linkText: "the airport's encyclopaedic record",
      href: "https://en.wikipedia.org/wiki/Venice_Marco_Polo_Airport",
    },
  },

  send: {
    id: "request",
    heading: "What makes a Marco Polo request answerable",
    lead: "Five things — and the second is the one this airport makes unavoidable.",
    items: [
      "The flight number and the date.",
      "Whether your destination is on the mainland or in the historic centre. These are different journeys, not variations of one.",
      "The full address, with the sestiere if it is in the historic city.",
      "How many passengers, and how many pieces of luggage.",
      "Whether anyone in the party would struggle with a walk over bridges with steps.",
    ],
    note: "Whether a particular vehicle can be provided is answered in the reply to your request. No water leg, porter or onward connection is offered here in any form.",
  },

  onward: {
    id: "onward",
    heading: "From Marco Polo",
    items: [
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "The journey set out endpoint by endpoint.",
      },
      {
        page: "venice",
        label: "Private transfers in Venice",
        detail: "Why the road stops where it does.",
      },
      {
        page: "venice-stations",
        label: "Venice's railway stations",
        detail: "Mestre is the road-reachable one; Santa Lucia is not.",
      },
      {
        page: "treviso-airport",
        label: "Treviso Airport (TSF)",
        detail: "The other airport sold under Venice's name.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Marco Polo questions",
    lead: "Including the one this airport generates more than any other in the project.",
    items: [
      {
        question: "Is Marco Polo actually in Venice?",
        answer:
          "Yes. It stands at Tessera, which is a frazione of the comune of Venice, on the edge of the lagoon. That makes it Venice's own airport in a way Treviso is not — and it still cannot put a car at a historic-centre door, because no road goes there.",
      },
      {
        question: "Can a transfer take me to my hotel?",
        answer:
          "If the hotel is on the mainland, yes, to the door. If it is in the historic centre, the transfer ends at Piazzale Roma or Tronchetto and the rest is on foot or by water. Say which when you ask, because they are genuinely different arrangements.",
      },
      {
        question: "Can you arrange the water taxi as well?",
        answer:
          "Not as part of a road transfer. The water services at this airport are run by their own operators and are arranged with them. Nothing on this site offers, includes or quotes for one.",
      },
      {
        question: "How far is the airport from Venice?",
        answer:
          "About 7.5 km north-east of the city centre — but that is a straight line across the lagoon, not a road distance, and the road goes around. It is one of several reasons no journey time is quoted here.",
      },
      {
        question: "What is the difference between this and Treviso?",
        answer:
          "Marco Polo is inside the comune of Venice. Treviso is a Treviso airport about 31 km from Venice, used mainly by low-cost airlines and often sold under Venice's name. Both have pages here.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Say mainland or historic centre",
    body: "That one word changes the whole arrangement: the end point, what happens afterwards, and what you will be carrying while it happens. Add the flight, the address and the party, and the answer can be precise.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Venice", page: "venice" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: MarcoPolo = {
  meta: {
    title: "Transfer aeroporto Marco Polo (VCE)",
    description:
      "L'aeroporto di Venezia, a Tessera, dentro il comune — e comunque incapace di portare un'auto davanti a un portone del centro storico. Dove può finire davvero un transfer da VCE.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Venezia Marco Polo · VCE",
    h1: "Transfer all'aeroporto di Venezia Marco Polo",
    lead: "Marco Polo è davvero l'aeroporto di Venezia: sorge a Tessera, dentro il comune di Venezia, sul bordo della laguna. Quello che non può fare — e che nessun aeroporto potrebbe — è portare un'auto davanti a un portone del centro storico.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il lato terra e il lato acqua",
    note: "In questa pagina non troverete un punto d'incontro, un'attesa inclusa o regole di sosta, né tariffe o durate per i collegamenti. Le pagine sui trasporti del gestore non sono state raggiungibili durante questa lavorazione, e qui non inventiamo nulla per colmare il vuoto.",
  },

  facts: [
    { label: "Denominazione", value: "Venezia Marco Polo" },
    { label: "Codici", value: "VCE · LIPZ" },
    { label: "Gestore", value: "SAVE S.p.A." },
    { label: "Dove si trova", value: "Tessera, comune di Venezia" },
  ],
  factsSource: {
    text: "Denominazione, codici, gestore e collocazione verificati nell'ottobre 2026. L'aeroporto dista circa 7,5 km a nord-est del centro di Venezia: è una distanza in linea d'aria attraverso la laguna, non stradale, ed è una delle ragioni per cui qui non trovate una durata:",
    linkText: "la scheda enciclopedica dell'aeroporto",
    href: "https://it.wikipedia.org/wiki/Aeroporto_di_Venezia-Tessera",
  },

  sides: {
    id: "lati",
    eyebrow: "Punti di arrivo",
    heading: "Il lato terra e il lato acqua",
    lead: "Ogni viaggio che parte da qui è o l'uno o l'altro, e quale dei due vi riguardi determina che cosa si può organizzare.",
    split: {
      road: {
        label: "L'auto ci arriva",
        heading: "Dove può finire un transfer su strada da VCE",
        note: "Se la vostra destinazione è qui, si tratta di un normale transfer aeroportuale e funziona come ovunque in Italia.",
        items: [
          {
            id: "piazzale-roma",
            name: "Piazzale Roma",
            detail:
              "Il capolinea stradale della città storica, e il punto in cui di norma termina un'auto diretta a Venezia.",
          },
          {
            id: "tronchetto",
            name: "Tronchetto",
            detail: "L'altro capolinea stradale, accanto a Piazzale Roma.",
          },
          {
            id: "mestre",
            name: "Venezia Mestre e la terraferma",
            detail:
              "La stazione di terraferma, il quartiere attorno e qualsiasi indirizzo continentale: fino al portone.",
          },
          {
            id: "beyond",
            name: "Oltre la laguna",
            detail:
              "Treviso, Padova, Verona e il resto della rete stradale.",
          },
        ],
      },
      water: {
        label: "L'auto non ci arriva",
        heading: "Dove il viaggio prosegue senza di noi",
        note: "Il tratto per acqua non fa parte di un transfer su strada. L'aeroporto ha servizi acquei pubblici e privati, che si organizzano con i rispettivi operatori: nulla in questa pagina ne è un'offerta.",
        items: [
          {
            id: "historic",
            name: "Il centro storico",
            detail:
              "San Marco, Cannaregio, Dorsoduro e gli altri sestieri: oltre Piazzale Roma non c'è strada.",
          },
          {
            id: "santa-lucia",
            name: "Venezia Santa Lucia",
            detail:
              "La stazione dentro la città storica. Da Piazzale Roma si raggiunge a piedi o per acqua.",
          },
          {
            id: "islands",
            name: "Le isole della laguna",
            detail: "Lido, Murano, Burano e le altre.",
          },
        ],
      },
    },
    source: {
      text: "I collegamenti via terra dell'aeroporto arrivano a Piazzale Roma e a Venezia Mestre, e i servizi acquei attraversano la laguna. Sono le opzioni pubbliche, citate come contesto e non come qualcosa che questo servizio fornisce. Verificato nell'ottobre 2026:",
      linkText: "la scheda enciclopedica dell'aeroporto",
      href: "https://it.wikipedia.org/wiki/Aeroporto_di_Venezia-Tessera",
    },
  },

  send: {
    id: "richiesta",
    heading: "Che cosa rende utile una richiesta per Marco Polo",
    lead: "Cinque informazioni, e la seconda qui è inevitabile.",
    items: [
      "Numero del volo e data.",
      "Se la destinazione è in terraferma o nel centro storico. Sono viaggi diversi, non varianti dello stesso.",
      "L'indirizzo completo, con il sestiere se si trova nella città storica.",
      "Quanti passeggeri e quanti bagagli.",
      "Se qualcuno del gruppo avrebbe difficoltà a camminare su ponti con i gradini.",
    ],
    note: "Se un determinato veicolo sia disponibile ve lo dirà la risposta. Nessun tratto per acqua, portabagagli o coincidenza è qui offerto in alcuna forma.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Marco Polo",
    items: [
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "Il viaggio spiegato punto di arrivo per punto di arrivo.",
      },
      {
        page: "venice",
        label: "Transfer privati a Venezia",
        detail: "Perché la strada finisce dove finisce.",
      },
      {
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail: "Mestre è quella raggiungibile in auto, Santa Lucia no.",
      },
      {
        page: "treviso-airport",
        label: "Aeroporto di Treviso (TSF)",
        detail: "L'altro aeroporto venduto con il nome di Venezia.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Marco Polo",
    lead: "Compresa quella che questo aeroporto genera più di ogni altro del progetto.",
    items: [
      {
        question: "Marco Polo è davvero a Venezia?",
        answer:
          "Sì. Si trova a Tessera, frazione del comune di Venezia, sul bordo della laguna. È quindi l'aeroporto di Venezia in un senso in cui Treviso non lo è — e comunque non può portare un'auto davanti a un portone del centro storico, perché lì non arriva alcuna strada.",
      },
      {
        question: "Un transfer può portarmi al mio hotel?",
        answer:
          "Se l'hotel è in terraferma, sì, fino al portone. Se è nel centro storico, il transfer finisce a Piazzale Roma o al Tronchetto e il resto si fa a piedi o per acqua. Precisatelo quando scrivete, perché sono accordi davvero diversi.",
      },
      {
        question: "Potete organizzare anche il taxi acqueo?",
        answer:
          "Non come parte di un transfer su strada. I servizi acquei di questo aeroporto sono gestiti dai rispettivi operatori e si organizzano con loro. Nulla in questo sito ne offre, include o quota uno.",
      },
      {
        question: "Quanto dista l'aeroporto da Venezia?",
        answer:
          "Circa 7,5 km a nord-est del centro, ma è una distanza in linea d'aria attraverso la laguna, e la strada gira intorno. È una delle ragioni per cui qui non trovate una durata.",
      },
      {
        question: "Che differenza c'è rispetto a Treviso?",
        answer:
          "Marco Polo è dentro il comune di Venezia. Treviso è un aeroporto trevigiano a circa 31 km da Venezia, usato soprattutto da compagnie low cost e spesso venduto con il nome di Venezia. Qui trovate una pagina per ciascuno.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Dite «terraferma» o «centro storico»",
    body: "Quella sola parola cambia tutta l'organizzazione: il punto di arrivo, che cosa succede dopo e che cosa starete trasportando mentre succede. Aggiungete volo, indirizzo e numero di persone, e la risposta potrà essere precisa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Venezia", page: "venice" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const marcoPolo: Record<Locale, MarcoPolo> = { en, it };
