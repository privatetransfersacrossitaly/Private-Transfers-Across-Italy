import type { Locale } from "@/lib/site";
import type { RavennaHub } from "./types";

/**
 * The Ravenna hub.
 *
 * ── Deliberately the shortest page in the cluster ─────────────────────────
 * It exists for two reasons, and it does not pretend to more.
 *
 * First, structurally: the shared route type requires a page id at both ends
 * of a journey, so the two cruise-terminal routes cannot exist without a city
 * page to be the city end of them.
 *
 * Second, editorially: there is exactly one thing a visitor needs to be told
 * about Ravenna before anything else, which is that its cruise port is not in
 * Ravenna. Porto Corsini is a separate place on the coast, and a passenger who
 * books a car "to Ravenna" when they mean the ship has booked the wrong
 * journey.
 *
 * Writing a long page here would mean inventing material about a city nothing
 * in this project has researched. The Verona route set the precedent: brevity
 * is the honest answer when brevity is the truth.
 */

const en: RavennaHub = {
  meta: {
    title: "Private transfers in Ravenna",
    description:
      "Ravenna's cruise port is not in Ravenna. Porto Corsini is a separate place on the coast, and which one you mean changes the journey entirely.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Romagna and the Adriatic",
    h1: "Private transfers in Ravenna",
    lead: "There is one thing to settle before anything else here, and it catches out more cruise passengers than any other detail on this site: the port is not in the city.",
    primaryCta: "Request a quotation",
    secondaryCta: "The port is elsewhere",
    facts: [
      { label: "The city", value: "Ravenna" },
      { label: "The cruise port", value: "Porto Corsini" },
      { label: "Relationship", value: "Not the same place" },
    ],
  },

  port: {
    id: "port",
    eyebrow: "The distinction that matters",
    heading: "Ravenna, the station, and Porto Corsini",
    lead: "Three destinations, one name on a ticket, and they are not interchangeable.",
    paragraphs: [
      "Ravenna is a city a little inland. Its railway station sits in the city, as most Italian stations do. Its cruise berth does not: ships tie up at Porto Corsini, out on the coast, and the two are joined by road rather than by being parts of the same place.",
      "That matters because of what people write when they ask for a car. A request to “Ravenna” made by someone who means the ship is a request to the wrong destination, and it is the kind of mistake that is only discovered when there is no time left to fix it. If a ship is involved, say so and name Porto Corsini.",
      "We serve both, and they are genuinely different journeys. The terminal page sets out what is known about the port, what the published sources disagree about, and what nobody publishes at all.",
    ],
  },

  onward: {
    id: "onward",
    heading: "From Ravenna",
    items: [
      {
        page: "ravenna-terminal",
        label: "Ravenna Cruise Terminal at Porto Corsini",
        detail:
          "The port itself, and the three official sources that describe it differently.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Ravenna to the cruise terminal",
        detail: "Getting to the ship, where the sailing time is fixed.",
      },
      {
        page: "route-terminal-ravenna",
        label: "Cruise terminal to Ravenna",
        detail: "Coming off the ship, when everyone else is doing the same.",
      },
      {
        page: "bologna",
        label: "Transfers in Bologna",
        detail:
          "The nearest city with an airport, and where most visitors to this coast arrive.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Ravenna questions",
    lead: "Short, because this page is.",
    items: [
      {
        question: "Is the cruise terminal in Ravenna?",
        answer:
          "No. Ships berth at Porto Corsini, out on the coast; Ravenna is inland of it. They are connected by road and are not the same destination. If your journey involves a ship, name Porto Corsini when you ask.",
      },
      {
        question: "How far is the port from the city?",
        answer:
          "No distance is published on this site, and that is deliberate: the port operator and the regional tourism authority give different figures. The terminal page shows what each of them says rather than averaging them into a number nobody stated.",
      },
      {
        question: "Do you cover Ravenna and Porto Corsini?",
        answer:
          "Yes, both. That is our own operating position rather than something the port or the city publishes about us, and it does not extend to claims about where a vehicle may wait inside the port area.",
      },
      {
        question: "Can you take me between Bologna and Ravenna?",
        answer:
          "Ask, and say which end you mean — the city or the port. No Bologna-to-Porto Corsini route is published on this site yet, because it has not been worked through properly, and a long intercity run deserves a proper answer rather than an implied one.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Say which Ravenna you mean",
    body: "The city, the station or the ship at Porto Corsini. Those are three different journeys, and naming the right one is most of what makes a reply useful.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "The cruise terminal at Porto Corsini",
      page: "ravenna-terminal",
    },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: RavennaHub = {
  meta: {
    title: "Transfer privati a Ravenna",
    description:
      "Il porto crociere di Ravenna non è a Ravenna. Porto Corsini è un luogo distinto sulla costa, e quale dei due indicate cambia completamente il viaggio.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Romagna e Adriatico",
    h1: "Transfer privati a Ravenna",
    lead: "Qui c'è una cosa da chiarire prima di ogni altra, e coglie di sorpresa più crocieristi di qualsiasi altro dettaglio di questo sito: il porto non è in città.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il porto è altrove",
    facts: [
      { label: "La città", value: "Ravenna" },
      { label: "Il porto crociere", value: "Porto Corsini" },
      { label: "Rapporto", value: "Non sono lo stesso luogo" },
    ],
  },

  port: {
    id: "porto",
    eyebrow: "La distinzione che conta",
    heading: "Ravenna, la stazione e Porto Corsini",
    lead: "Tre destinazioni, un solo nome sul biglietto, e non sono intercambiabili.",
    paragraphs: [
      "Ravenna è una città un po' nell'entroterra. La sua stazione ferroviaria sta in città, come quasi tutte le stazioni italiane. L'attracco delle crociere no: le navi ormeggiano a Porto Corsini, sulla costa, e i due luoghi sono uniti da una strada, non dall'essere parti dello stesso posto.",
      "La cosa conta per via di che cosa si scrive quando si chiede un'auto. Una richiesta «per Ravenna» fatta da chi intende la nave è una richiesta alla destinazione sbagliata, ed è l'errore che si scopre quando non c'è più tempo per rimediare. Se c'è di mezzo una nave, ditelo e indicate Porto Corsini.",
      "Serviamo entrambi, e sono viaggi davvero diversi. La pagina del terminal espone ciò che si sa del porto, ciò su cui le fonti pubblicate non concordano e ciò che nessuno pubblica affatto.",
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Ravenna",
    items: [
      {
        page: "ravenna-terminal",
        label: "Terminal crociere di Ravenna a Porto Corsini",
        detail:
          "Il porto, e le tre fonti ufficiali che lo descrivono in modo diverso.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Da Ravenna al terminal crociere",
        detail: "Raggiungere la nave, quando l'orario di partenza è fisso.",
      },
      {
        page: "route-terminal-ravenna",
        label: "Dal terminal crociere a Ravenna",
        detail: "Scendere dalla nave, mentre lo fanno tutti insieme.",
      },
      {
        page: "bologna",
        label: "Transfer a Bologna",
        detail:
          "La città con l'aeroporto più vicino, e il punto da cui arriva la maggior parte dei visitatori di questa costa.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Ravenna",
    lead: "Poche, come questa pagina.",
    items: [
      {
        question: "Il terminal crociere è a Ravenna?",
        answer:
          "No. Le navi ormeggiano a Porto Corsini, sulla costa; Ravenna sta più nell'entroterra. Sono collegati da una strada e non sono la stessa destinazione. Se il vostro viaggio riguarda una nave, indicate Porto Corsini quando scrivete.",
      },
      {
        question: "Quanto dista il porto dalla città?",
        answer:
          "Su questo sito non pubblichiamo alcuna distanza, ed è una scelta: l'operatore portuale e l'ente turistico indicano cifre diverse. La pagina del terminal mostra che cosa dice ciascuno invece di farne una media che nessuno ha scritto.",
      },
      {
        question: "Coprite Ravenna e Porto Corsini?",
        answer:
          "Sì, entrambi. È la nostra posizione operativa, non qualcosa che il porto o la città pubblichino sul nostro conto, e non si estende ad affermazioni su dove un veicolo possa attendere dentro l'area portuale.",
      },
      {
        question: "Mi portate fra Bologna e Ravenna?",
        answer:
          "Chiedetelo, indicando quale capo intendete: la città o il porto. Su questo sito non è ancora pubblicata alcuna tratta Bologna–Porto Corsini, perché non è stata approfondita come si deve, e un lungo tragitto interurbano merita una risposta vera e non sottintesa.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Dite quale Ravenna intendete",
    body: "La città, la stazione o la nave a Porto Corsini. Sono tre viaggi diversi, e indicare quello giusto è gran parte di ciò che rende utile una risposta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Il terminal crociere a Porto Corsini",
      page: "ravenna-terminal",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const ravennaHub: Record<Locale, RavennaHub> = { en, it };
