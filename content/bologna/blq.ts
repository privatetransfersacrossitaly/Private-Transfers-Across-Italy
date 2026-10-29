import type { Locale } from "@/lib/site";
import type { BlqAirport } from "./types";

/**
 * Bologna Guglielmo Marconi.
 *
 * ── The page is built on a gap in the published record ────────────────────
 * The airport's own site is generous about public transport and silent about
 * the thing a transfer customer needs. It describes the Marconi Express in
 * detail — a monorail to the central station, two stations, a seven-minute
 * ride, a train every seven to fifteen minutes. On its "car rental with
 * driver" page it lists three companies and says nothing whatever about where
 * such vehicles wait, whether a desk or authorisation is involved, or what
 * its own relationship to them is.
 *
 * So the page sets the two side by side. Being open about a strong public
 * alternative is the price of being believed about the rest, and the airport's
 * silence on pickup is a fact worth stating rather than papering over.
 *
 * ── What it must not do ───────────────────────────────────────────────────
 * The three firms the airport lists are third parties and competitors. They
 * are not named here, exactly as the two chauffeur companies in Toscana
 * Aeroporti's charter were not named on the Tuscan pages. No pickup point,
 * kerbside arrangement or parking permission is described, because the
 * operator publishes none.
 *
 * See `docs/bologna-research-log.md` §1, B1–B9.
 */

const sourceEn = {
  text: "The Marconi Express details, the transport categories and the absence of any published private-hire pickup arrangement are all from the airport operator's own website, read on 27 October 2026. No fare, journey time or road distance is quoted, because the operator publishes none for a road transfer:",
  linkText: "Bologna Airport publishes its own transport information",
  href: "https://www.bologna-airport.it/en/from-and-to-the-airport/transfer-from-and-to-the-airport/train-to-the-city-centre/?idC=62594",
};

const sourceIt = {
  text: "I dati sul Marconi Express, le categorie di trasporto e l'assenza di qualsiasi indicazione pubblicata sul punto di prelievo per il noleggio con conducente provengono tutti dal sito del gestore aeroportuale, consultato il 27 ottobre 2026. Non indichiamo tariffe, durate o distanze stradali, perché il gestore non ne pubblica per un tragitto su strada:",
  linkText: "L'aeroporto di Bologna pubblica le proprie informazioni sui trasporti",
  href: "https://www.bologna-airport.it/it/da-e-per-l-aeroporto/transfer-da-e-per-l-aeroporto/treno-per-il-centro-citta/?idC=62594",
};

const en: BlqAirport = {
  meta: {
    title: "Bologna Marconi Airport transfers",
    description:
      "BLQ has a monorail of its own to Bologna Centrale, and publishes nothing at all about where a private-hire car collects you. Both are worth knowing.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Arriving in Bologna",
    h1: "Bologna Guglielmo Marconi Airport",
    lead: "Bologna's airport is unusually well connected to its city by rail and unusually quiet about everything else. It is worth knowing both halves of that before you decide how to get into town.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the airport publishes",
    facts: [
      { label: "IATA", value: "BLQ" },
      { label: "Rail link", value: "Marconi Express" },
      { label: "Runs to", value: "Bologna Centrale" },
      { label: "Stated ride", value: "7 minutes" },
    ],
  },

  record: {
    id: "record",
    eyebrow: "The published record",
    heading: "Generous about the train, silent about the car",
    lead: "Both columns below are the airport's own position. The gap between them is the reason this page exists.",
    columns: [
      {
        id: "published",
        heading: "What the airport publishes",
        subheading: "In its own words",
        rows: [
          {
            term: "A monorail to the station",
            detail:
              "The Marconi Express is described as the monorail train connecting the airport to Bologna central train station, with a stated seven-minute ride and a train every seven to fifteen minutes.",
          },
          {
            term: "Two stations, and no more",
            detail:
              "Airport Terminal and Bologna Train station. There are no intermediate stops, which is what makes it quick and also what limits where it can take you.",
          },
          {
            term: "Taxi operators",
            detail:
              "Two radio-taxi operators are listed with telephone numbers. No rank position and no fare or fixed tariff appear anywhere on that page.",
          },
          {
            term: "Buses and trains",
            detail:
              "Bus services and onward rail connections each have their own page. These are public services, run by others.",
          },
        ],
      },
      {
        id: "unpublished",
        heading: "What it does not",
        subheading: "Also the airport's position",
        rows: [
          {
            term: "No pickup point for private hire",
            detail:
              "The airport has a page for cars with a driver. It says nothing about where such vehicles wait, mentions no desk and no authorisation, and makes no statement about its own relationship to the firms it lists.",
          },
          {
            term: "No fare, anywhere",
            detail:
              "Neither the Marconi Express page nor the taxi page publishes a price. An older airport taxi tariff circulates elsewhere and is not current evidence; it is not used here.",
          },
          {
            term: "No distance or journey time by road",
            detail:
              "None is published for a car into the city, so none is quoted on this site. What it takes depends on the hour and on the address.",
          },
          {
            term: "No operator is endorsed",
            detail:
              "Being listed by an airport is not an endorsement, and no company named on that page appears here. We are not among them and do not claim to be.",
          },
        ],
      },
    ],
    source: sourceEn,
  },

  onward: {
    id: "onward",
    eyebrow: "Where people go from here",
    heading: "Leaving the airport",
    lead: "The city first, and then a region that runs east to the Adriatic.",
    items: [
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city, and the three strengths of its restricted centre — the part of a Bologna arrival that actually needs planning.",
      },
      {
        page: "route-blq-majestic",
        label: "This airport to the Grand Hotel Majestic",
        detail:
          "An address the hotel tells guests not to drive to, and what that means for an arrival.",
      },
      {
        page: "route-blq-commercianti",
        label: "This airport to the Art Hotel Commercianti",
        detail:
          "A pedestrian address reached by an authorised route the hotel arranges.",
      },
      {
        page: "route-blq-excelsior",
        label: "This airport to the Starhotels Excelsior",
        detail:
          "Opposite the station the Marconi Express terminates at — a transfer and the monorail, compared.",
      },
      {
        page: "ravenna",
        label: "Transfers in Ravenna",
        detail:
          "East towards the coast. A separate city, and a separate journey from anything inside Bologna.",
      },
      {
        page: "ravenna-terminal",
        label: "Ravenna Cruise Terminal at Porto Corsini",
        detail:
          "For passengers joining or leaving a ship, which is not the same destination as Ravenna itself.",
      },
    ],
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "The airport end of a request from here is ordinary. The city end is the one that needs care.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The full destination address — street and number.",
      "How many passengers, and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "No meeting point is promised on this page, because the airport publishes none for private hire. Where a driver waits is settled in the reply to your request rather than stated here as though it were a fixed rule.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this airport",
    lead: "Including the one this page answers against its own interest.",
    items: [
      {
        question: "Should I just take the Marconi Express?",
        answer:
          "If Bologna Centrale or somewhere near it is where you are going, quite possibly. The airport states a seven-minute ride and a train every seven to fifteen minutes, and that is a good service by any standard. What it does not do is take your luggage to a street address, which is the question a transfer answers.",
      },
      {
        question: "Where will the driver meet me?",
        answer:
          "That is settled in the reply to your request. The airport publishes no pickup arrangement for cars with a driver at all — not a point, not a desk, not a procedure — so nothing is described here as though it were fixed.",
      },
      {
        question: "How long does it take into the city?",
        answer:
          "No duration is quoted. The operator publishes none for a road journey, and no other source consulted does either. It would depend on the hour and on which part of the centre you are heading for.",
      },
      {
        question: "Can the car take me into the historic centre?",
        answer:
          "That depends on the street. Bologna's centre is restricted from 07:00 to 20:00, and Area T and the pedestrian zones are restricted around the clock. We work under a valid authorisation where one is required, but no page here will promise that a particular door can be driven to. The Bologna page sets out the three bands.",
      },
      {
        question: "Are you one of the companies listed on the airport's site?",
        answer:
          "No. The airport lists several firms offering cars with a driver; we are not among them, and this site does not reproduce them. A listing is not an endorsement in either direction.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Flight, time, and a street in Bologna",
    body: "The airport end of this is simple. The street at the other end is what decides the answer, because it decides which of the city's three restriction bands applies.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Bologna", page: "bologna" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: BlqAirport = {
  meta: {
    title: "Transfer dall'aeroporto di Bologna Marconi",
    description:
      "Il BLQ ha una monorotaia propria per Bologna Centrale e non pubblica nulla su dove un'auto con conducente vi prenda a bordo. Vale la pena sapere entrambe le cose.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Arrivare a Bologna",
    h1: "Aeroporto di Bologna Guglielmo Marconi",
    lead: "L'aeroporto di Bologna è collegato alla sua città su ferro insolitamente bene, e su tutto il resto è insolitamente silenzioso. Conviene conoscere entrambe le metà prima di decidere come raggiungere il centro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa pubblica l'aeroporto",
    facts: [
      { label: "IATA", value: "BLQ" },
      { label: "Collegamento su ferro", value: "Marconi Express" },
      { label: "Arriva a", value: "Bologna Centrale" },
      { label: "Percorso dichiarato", value: "7 minuti" },
    ],
  },

  record: {
    id: "pubblicato",
    eyebrow: "Ciò che è pubblicato",
    heading: "Generoso sul treno, silenzioso sull'auto",
    lead: "Entrambe le colonne riportano la posizione dell'aeroporto stesso. È la distanza fra le due a giustificare questa pagina.",
    columns: [
      {
        id: "pubblicato",
        heading: "Che cosa l'aeroporto pubblica",
        subheading: "Con parole sue",
        rows: [
          {
            term: "Una monorotaia per la stazione",
            detail:
              "Il Marconi Express è descritto come la monorotaia che collega l'aeroporto alla stazione centrale di Bologna, con un percorso dichiarato di sette minuti e una corsa ogni sette-quindici minuti.",
          },
          {
            term: "Due stazioni, non una di più",
            detail:
              "Airport Terminal e Bologna Train station. Non ci sono fermate intermedie: è ciò che lo rende rapido ed è anche ciò che limita dove può portarvi.",
          },
          {
            term: "Operatori taxi",
            detail:
              "Sono indicati due radiotaxi con i rispettivi numeri. Su quella pagina non compaiono né la posizione del posteggio né alcuna tariffa.",
          },
          {
            term: "Bus e treni",
            detail:
              "I servizi di autobus e i collegamenti ferroviari hanno pagine proprie. Sono servizi pubblici, gestiti da altri.",
          },
        ],
      },
      {
        id: "non-pubblicato",
        heading: "Che cosa non pubblica",
        subheading: "Anche questa è la posizione dell'aeroporto",
        rows: [
          {
            term: "Nessun punto di prelievo per il noleggio con conducente",
            detail:
              "L'aeroporto ha una pagina dedicata alle auto con conducente. Non dice nulla su dove questi veicoli attendano, non cita banchi né autorizzazioni e non si esprime sul proprio rapporto con le società elencate.",
          },
          {
            term: "Nessuna tariffa, da nessuna parte",
            detail:
              "Né la pagina del Marconi Express né quella dei taxi pubblicano un prezzo. Circola altrove un vecchio tariffario taxi aeroportuale: non è prova attuale e qui non viene usato.",
          },
          {
            term: "Nessuna distanza né durata su strada",
            detail:
              "Non ne è pubblicata alcuna per un'auto diretta in città, perciò su questo sito non ne indichiamo. Quanto duri dipende dall'ora e dall'indirizzo.",
          },
          {
            term: "Nessun operatore è avallato",
            detail:
              "Essere elencati da un aeroporto non è un avallo, e nessuna delle società citate su quella pagina compare qui. Non siamo fra loro e non pretendiamo di esserlo.",
          },
        ],
      },
    ],
    source: sourceIt,
  },

  onward: {
    id: "proseguimenti",
    eyebrow: "Dove si va da qui",
    heading: "Uscire dall'aeroporto",
    lead: "Prima la città, poi una regione che si allunga a est fino all'Adriatico.",
    items: [
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La città e i tre gradi del suo centro limitato: la parte di un arrivo bolognese che richiede davvero di essere pianificata.",
      },
      {
        page: "route-blq-majestic",
        label: "Da questo aeroporto al Grand Hotel Majestic",
        detail:
          "Un indirizzo a cui l'hotel raccomanda di non guidare, e che cosa comporta per un arrivo.",
      },
      {
        page: "route-blq-commercianti",
        label: "Da questo aeroporto all'Art Hotel Commercianti",
        detail:
          "Un indirizzo pedonale raggiunto con un percorso autorizzato che organizza l'hotel.",
      },
      {
        page: "route-blq-excelsior",
        label: "Da questo aeroporto allo Starhotels Excelsior",
        detail:
          "Di fronte alla stazione dove arriva il Marconi Express: transfer e monorotaia a confronto.",
      },
      {
        page: "ravenna",
        label: "Transfer a Ravenna",
        detail:
          "Verso la costa. Un'altra città, e un viaggio diverso da qualsiasi tragitto interno a Bologna.",
      },
      {
        page: "ravenna-terminal",
        label: "Terminal crociere di Ravenna a Porto Corsini",
        detail:
          "Per chi si imbarca o sbarca: non è la stessa destinazione di Ravenna città.",
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Il capo aeroportuale di una richiesta da qui è ordinario. È quello cittadino a richiedere attenzione.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "L'indirizzo completo di destinazione: via e numero.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "Su questa pagina non promettiamo alcun punto d'incontro, perché l'aeroporto non ne pubblica per il noleggio con conducente. Dove attenda un autista si definisce nella risposta alla vostra richiesta, non lo si enuncia qui come se fosse una regola fissa.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo aeroporto",
    lead: "Compresa quella a cui questa pagina risponde contro il proprio interesse.",
    items: [
      {
        question: "Non conviene semplicemente prendere il Marconi Express?",
        answer:
          "Se la vostra destinazione è Bologna Centrale o le sue vicinanze, molto probabilmente sì. L'aeroporto dichiara un percorso di sette minuti e una corsa ogni sette-quindici minuti: è un buon servizio per qualsiasi standard. Quello che non fa è portare i vostri bagagli a un indirizzo, che è la domanda a cui risponde un transfer.",
      },
      {
        question: "Dove mi aspetta l'autista?",
        answer:
          "Si stabilisce nella risposta alla vostra richiesta. L'aeroporto non pubblica alcuna modalità di prelievo per le auto con conducente: né un punto, né un banco, né una procedura. Qui quindi non ne descriviamo nessuna come se fosse fissata.",
      },
      {
        question: "Quanto ci vuole per arrivare in città?",
        answer:
          "Non indichiamo durate. Il gestore non ne pubblica per un tragitto su strada, e nessun'altra fonte consultata lo fa. Dipenderebbe comunque dall'ora e da quale parte del centro cercate.",
      },
      {
        question: "L'auto può portarmi nel centro storico?",
        answer:
          "Dipende dalla via. Il centro di Bologna è limitato dalle 7 alle 20, e l'Area T con le zone pedonali lo è tutto il giorno. Operiamo con regolare autorizzazione dove ne serve una, ma nessuna pagina qui promette che una determinata porta sia raggiungibile in auto. La pagina su Bologna espone le tre fasce.",
      },
      {
        question: "Siete una delle società elencate sul sito dell'aeroporto?",
        answer:
          "No. L'aeroporto elenca alcune società di noleggio con conducente; noi non siamo fra quelle, e questo sito non le riporta. Un elenco non è un avallo, in nessuna delle due direzioni.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Volo, orario e una via di Bologna",
    body: "Il capo aeroportuale è semplice. È la via all'altro capo a determinare la risposta, perché determina quale delle tre fasce di limitazione si applica.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Bologna", page: "bologna" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const blqAirport: Record<Locale, BlqAirport> = { en, it };
