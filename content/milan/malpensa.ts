import type { Locale } from "@/lib/site";
import type { BigAirport } from "./types";

/**
 * Malpensa.
 *
 * The page is built around a geographic fact that distinguishes this airport
 * from every other in either cluster: it has two quite different directions
 * leading away from it. Milan is south-east of the airport; the lakes are
 * north of it. A traveller bound for the lake is not passing through the city
 * at all. So the dominant module is a matrix of destinations rather than a
 * timeline of an arrival.
 *
 * No proportion of arrivals is claimed anywhere — not in the copy and not
 * here. Nothing in the research log establishes how Malpensa's traffic
 * divides by destination, and an earlier draft of this comment asserted that
 * half of it went into Milan, which was unsupported. See the final review.
 *
 * No distance to Milan is quoted. SEA does not publish one in the material
 * checked, and the figures circulating elsewhere disagree — so the page says
 * where the airport is and refuses to invent how far.
 */

const en: BigAirport = {
  meta: {
    title: "Malpensa Airport transfers (MXP)",
    description:
      "Italy's principal intercontinental gateway, north-west of Milan: which terminal you are using, what a pickup request needs, and where a transfer can actually take you.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Milan Malpensa · MXP",
    h1: "Transfers at Malpensa Airport",
    lead: "Malpensa is the country's principal intercontinental gateway, and it is not in Milan — it stands north-west of the city, in the province of Varese. That position is the thing to understand: the lakes lie north of the airport, so for anyone bound there, Milan is a detour rather than a stop.",
    primaryCta: "Request a quotation",
    secondaryCta: "Where people actually go",
    note: "No meeting point, waiting allowance or parking rule appears on this page. The airport sets those and revises them; the arrangement for your own journey is confirmed with your quotation.",
  },

  terminals: {
    id: "terminals",
    eyebrow: "Terminals",
    heading: "Terminal 1 or Terminal 2",
    lead: "Malpensa has two passenger terminals, with a cargo terminal alongside them. They are separate buildings with their own check-in and security, which makes the terminal the one part of the address nobody can infer for you.",
    columns: [
      {
        id: "t1",
        heading: "Terminal 1",
        subheading: "SEA calls it the intercontinental airport of Milan",
        rows: [
          {
            term: "What it handles",
            detail:
              "The bulk of the airport's traffic, long-haul included. Between them the two terminals list 93 gates and 139 aircraft stands.",
          },
          {
            term: "Why it matters for a pickup",
            detail:
              "Arrivals from outside the Schengen area clear passport control here, and then wait at the belt. Landing time and the time you walk out are not the same thing.",
          },
        ],
      },
      {
        id: "t2",
        heading: "Terminal 2",
        subheading: "International, weighted to the premium end of low-cost",
        rows: [
          {
            term: "What it handles",
            detail:
              "International traffic, with a focus the operator describes as the premium end of low-cost flying.",
          },
          {
            term: "Why it matters for a pickup",
            detail:
              "It is a separate building from Terminal 1. Going to the wrong one is not a short walk, which is why the terminal belongs in your request.",
          },
        ],
      },
    ],
    source: {
      text: "Terminal roles and infrastructure figures as published by SEA, the airport's operator, and checked in October 2026. Allocation changes, so check your boarding pass and your airline's messages before travelling:",
      linkText: "SEA's published airport data",
      href: "https://milanairports.com/en/group/technical-data",
    },
  },

  matrix: {
    id: "destinations",
    eyebrow: "Where people go",
    heading: "Malpensa serves two completely different journeys",
    lead: "Into the city, and out to the lakes. They are not variations of one another, and the second is the reason this airport is not simply Milan's front door.",
    groups: [
      {
        id: "city",
        heading: "Into Milan",
        note: "South-east, and then the two traffic zones decide the last part.",
        items: [
          {
            page: "route-mxp-milan",
            label: "Malpensa Airport to Milan",
            detail: "What the city end actually requires.",
          },
          {
            page: "milan",
            label: "Private transfers in Milan",
            detail: "Districts, Area B and Area C.",
          },
          {
            page: "milan-stations",
            label: "Milan's railway stations",
            detail: "If the journey continues by train.",
          },
        ],
      },
      {
        id: "lakes",
        heading: "Out to the lakes",
        note: "North, towards the mountains — and away from Milan, which lies south-east of the airport.",
        items: [
          {
            page: "route-mxp-como",
            label: "Malpensa Airport to Lake Como",
            detail: "Which town you name changes the road.",
          },
          {
            page: "lake-como",
            label: "Lake Como",
            detail: "The towns, the three arms of water, and the ferries.",
          },
        ],
      },
      {
        id: "other",
        heading: "The other Milan airports",
        note: "If you are still comparing flights, or connecting between them.",
        items: [
          {
            page: "linate",
            label: "Linate Airport (LIN)",
            detail: "The city airport, closest in.",
          },
          {
            page: "bergamo-airport",
            label: "Bergamo Airport (BGY)",
            detail: "Sold as Milan, about 50 km away.",
          },
        ],
      },
    ],
  },

  send: {
    id: "request",
    heading: "What makes a Malpensa request answerable",
    lead: "Six things — and on this route the third matters more than it does anywhere else.",
    items: [
      "The flight number and the date, not just the airline.",
      "The terminal, as printed on the boarding pass.",
      "The full destination address — and if it is a lake address, the town, because the lake alone is not a destination.",
      "How many passengers, and how many of them are children.",
      "How many pieces of hold luggage, and how many cabin bags.",
      "Anything bulky: skis, golf clubs, a pushchair, a wheelchair.",
    ],
    note: "Whether a particular vehicle, a child seat or an accessible vehicle can be provided is answered in the reply to your request. Nothing on this site promises any of them in advance.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Malpensa questions",
    lead: "Including one this page answers by refusing to give a number.",
    items: [
      {
        question: "Which terminal will my flight use?",
        answer:
          "Your boarding pass names it and your airline's messages repeat it. Terminal 1 and Terminal 2 are separate buildings with their own check-in and security, so this is worth confirming rather than assuming — and worth sending with your request.",
      },
      {
        question: "How far is Malpensa from Milan?",
        answer:
          "It is north-west of the city, in the province of Varese. No distance figure appears on this page because the operator does not publish one in the material checked and the numbers circulating elsewhere disagree with each other. What the journey takes depends on the hour, the traffic and the address at the other end in any case.",
      },
      {
        question: "Can a transfer go straight to Lake Como?",
        answer:
          "Yes, and it is worth asking for directly. The lake is north of the airport and Milan is not on the way, so routing through the city would add distance rather than save it. Name the town rather than the lake: Como, Bellagio, Varenna, Menaggio and Tremezzina are not interchangeable, and the road to each is different.",
      },
      {
        question: "Is the Malpensa Express a better option?",
        answer:
          "It is a different one. The rail service runs to Milano Cadorna and Milano Centrale, so it answers the question of getting into Milan but not the question of getting to an address with luggage. No timings or fares are quoted here — check the operator for those.",
      },
      {
        question: "Will a driver wait if my flight is delayed?",
        answer:
          "That depends on the arrangement, and this site does not state a waiting policy it has not confirmed. Send the flight number with your request and ask the question explicitly; the answer should be in writing before you agree to anything.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Flight, terminal, and where you are really going",
    body: "The last of those does most of the work at Malpensa. A city address and a lake town are different journeys from the same door, and the answer can only be specific if it knows which one you mean.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Milan", page: "milan" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: BigAirport = {
  meta: {
    title: "Transfer aeroporto di Malpensa (MXP)",
    description:
      "Il principale scalo intercontinentale italiano, a nord-ovest di Milano: quale terminal vi riguarda, che cosa indicare nella richiesta e dove può davvero portarvi un transfer da Malpensa.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Milano Malpensa · MXP",
    h1: "Transfer all'aeroporto di Malpensa",
    lead: "Malpensa è il principale scalo intercontinentale del Paese e non si trova a Milano: sorge a nord-ovest della città, in provincia di Varese. È la posizione a contare: i laghi sono a nord dell'aeroporto, quindi per chi è diretto lì Milano è una deviazione e non una tappa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va davvero",
    note: "In questa pagina non troverete un punto d'incontro, un'attesa inclusa o le regole di sosta. Le stabilisce l'aeroporto e cambiano nel tempo; le modalità del vostro viaggio si confermano con il preventivo.",
  },

  terminals: {
    id: "terminal",
    eyebrow: "Terminal",
    heading: "Terminal 1 o Terminal 2",
    lead: "Malpensa ha due terminal passeggeri, affiancati da un terminal merci. Sono edifici separati, con accettazione e controlli propri: per questo il terminal è l'unica parte dell'indirizzo che nessuno può dedurre al posto vostro.",
    columns: [
      {
        id: "t1",
        heading: "Terminal 1",
        subheading: "SEA lo definisce lo scalo intercontinentale di Milano",
        rows: [
          {
            term: "Che cosa accoglie",
            detail:
              "La maggior parte del traffico dell'aeroporto, lungo raggio compreso. Fra i due terminal il gestore indica 93 gate e 139 piazzole.",
          },
          {
            term: "Perché conta per il prelievo",
            detail:
              "Chi arriva da fuori area Schengen passa qui il controllo passaporti e poi attende al nastro. L'orario di atterraggio e il momento in cui si esce non coincidono.",
          },
        ],
      },
      {
        id: "t2",
        heading: "Terminal 2",
        subheading: "Internazionale, orientato alla fascia alta del low cost",
        rows: [
          {
            term: "Che cosa accoglie",
            detail:
              "Traffico internazionale, con un orientamento che il gestore descrive come la fascia premium del volo low cost.",
          },
          {
            term: "Perché conta per il prelievo",
            detail:
              "È un edificio separato dal Terminal 1: sbagliarlo non significa fare due passi. Ed è il motivo per cui il terminal va indicato nella richiesta.",
          },
        ],
      },
    ],
    source: {
      text: "Funzione dei terminal e dati infrastrutturali pubblicati da SEA, gestore dell'aeroporto, e verificati nell'ottobre 2026. L'assegnazione cambia: controllate la carta d'imbarco e le comunicazioni della compagnia prima di partire.",
      linkText: "I dati pubblicati da SEA",
      href: "https://milanairports.com/it/gruppo/dati-tecnici",
    },
  },

  matrix: {
    id: "destinazioni",
    eyebrow: "Dove si va",
    heading: "Da Malpensa partono due viaggi completamente diversi",
    lead: "Verso la città e verso i laghi. Non sono varianti l'uno dell'altro, e il secondo è il motivo per cui questo aeroporto non è semplicemente la porta d'ingresso di Milano.",
    groups: [
      {
        id: "citta",
        heading: "Verso Milano",
        note: "A sud-est; poi sono le due zone a traffico limitato a decidere l'ultimo tratto.",
        items: [
          {
            page: "route-mxp-milan",
            label: "Dall'aeroporto di Malpensa a Milano",
            detail: "Che cosa richiede davvero il capo cittadino.",
          },
          {
            page: "milan",
            label: "Transfer privati a Milano",
            detail: "Quartieri, Area B e Area C.",
          },
          {
            page: "milan-stations",
            label: "Le stazioni ferroviarie di Milano",
            detail: "Se il viaggio prosegue in treno.",
          },
        ],
      },
      {
        id: "laghi",
        heading: "Verso i laghi",
        note: "A nord, verso le montagne — e in direzione opposta a Milano, che sta a sud-est dell'aeroporto.",
        items: [
          {
            page: "route-mxp-como",
            label: "Da Malpensa al Lago di Como",
            detail: "Il paese che indicate cambia la strada.",
          },
          {
            page: "lake-como",
            label: "Lago di Como",
            detail: "I paesi, i tre rami d'acqua e i traghetti.",
          },
        ],
      },
      {
        id: "altri",
        heading: "Gli altri aeroporti di Milano",
        note: "Se state ancora confrontando i voli, o dovete passare dall'uno all'altro.",
        items: [
          {
            page: "linate",
            label: "Aeroporto di Linate (LIN)",
            detail: "L'aeroporto cittadino, il più vicino.",
          },
          {
            page: "bergamo-airport",
            label: "Aeroporto di Bergamo (BGY)",
            detail: "Venduto come Milano, a circa 50 km.",
          },
        ],
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa rende utile una richiesta per Malpensa",
    lead: "Sei informazioni, e la terza qui pesa più che altrove.",
    items: [
      "Numero del volo e data, non la sola compagnia.",
      "Il terminal, come riportato sulla carta d'imbarco.",
      "L'indirizzo completo di destinazione e, se è sul lago, il paese: «il lago» non è una destinazione.",
      "Quanti passeggeri siete e quanti sono bambini.",
      "Quanti bagagli da stiva e quanti a mano.",
      "Eventuali ingombri: sci, sacca da golf, passeggino, carrozzina.",
    ],
    note: "Se sia disponibile un veicolo specifico, un seggiolino o un mezzo accessibile è una risposta che arriva con il preventivo. Nessuna pagina di questo sito lo promette in anticipo.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Malpensa",
    lead: "Compresa una a cui questa pagina risponde rifiutandosi di dare un numero.",
    items: [
      {
        question: "Da quale terminal parte il mio volo?",
        answer:
          "Lo indica la carta d'imbarco e lo ripetono le comunicazioni della compagnia. Terminal 1 e Terminal 2 sono edifici separati, con accettazione e controlli propri: conviene verificarlo invece di presumerlo, e indicarlo nella richiesta.",
      },
      {
        question: "Quanto dista Malpensa da Milano?",
        answer:
          "Si trova a nord-ovest della città, in provincia di Varese. Qui non trovate una distanza perché il gestore non la pubblica nei materiali consultati e le cifre che circolano altrove non concordano fra loro. In ogni caso, quanto duri il viaggio dipende dall'ora, dal traffico e dall'indirizzo di arrivo.",
      },
      {
        question: "Un transfer può portarmi direttamente sul Lago di Como?",
        answer:
          "Sì, e conviene chiederlo direttamente. Il lago è a nord dell'aeroporto e Milano non è sulla strada: passare dalla città allungherebbe il percorso invece di accorciarlo. Indicate il paese e non il lago: Como, Bellagio, Varenna, Menaggio e Tremezzina non sono intercambiabili e la strada per ciascuno è diversa.",
      },
      {
        question: "Il Malpensa Express è un'alternativa migliore?",
        answer:
          "È un'alternativa diversa. Il collegamento ferroviario arriva a Milano Cadorna e a Milano Centrale, quindi risolve il problema di raggiungere Milano ma non quello di arrivare a un indirizzo con i bagagli. Qui non trovate orari né tariffe: per quelli consultate l'operatore.",
      },
      {
        question: "L'autista aspetta se il volo è in ritardo?",
        answer:
          "Dipende dall'accordo, e questo sito non dichiara una politica di attesa che non ha verificato. Indicate il numero del volo e ponete la domanda in modo esplicito: la risposta deve arrivarvi per iscritto prima che accettiate.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Volo, terminal e dove state andando davvero",
    body: "A Malpensa è l'ultimo dato a fare la maggior parte del lavoro. Un indirizzo in città e un paese sul lago sono due viaggi diversi dalla stessa porta, e la risposta può essere precisa solo se sa di quale si tratta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Milano", page: "milan" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const malpensa: Record<Locale, BigAirport> = { en, it };
