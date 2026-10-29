import type { Locale } from "@/lib/site";
import type { NaplesCruisePort } from "./types";

/**
 * The Naples cruise terminal at the Stazione Marittima.
 *
 * ── The page exists to stop people naming the wrong quay ──────────────────
 * Naples's waterfront carries three facilities within sight of each other:
 * the Stazione Marittima for cruise ships, Calata Beverello for hydrofoils,
 * Calata Porta di Massa for car ferries. "Take me to the port of Naples" is
 * an instruction that can land a passenger at the wrong one, and the cost of
 * that is a missed sailing rather than an inconvenience.
 *
 * ── Two things it must keep apart ─────────────────────────────────────────
 * The owner has confirmed that arrangements are in place for collecting
 * cruise passengers at Naples. That is usable and worth saying. It is **not**
 * a published port rule, and this page never lets it read as one: it sits in
 * its own block, under its own label, in the business's own voice.
 *
 * What remains genuinely unknown is where, inside the port, a vehicle may
 * actually wait — because no public source read establishes it, and the
 * terminal operator's own site returned **HTTP 403** on 27 October 2026, both
 * at audit and on a recheck immediately before this page was written. So the
 * page describes no meeting point, no pier number, no entrance, no parking
 * and no waiting procedure, and it does not link a source it could not open.
 *
 * It also publishes no pier counts, lengths or depths. The only figures
 * available came from a promotional profile.
 *
 * See `docs/campania-source-verification.md` §3, P1–P5.
 */

const sourceEn = {
  text: "The distinction between the Stazione Marittima and the hydrofoil and ferry quays is drawn from publicly available descriptions of the port's facilities, read on 27 October 2026. The terminal operator's own site could not be opened — it returned HTTP 403 to every attempt, at audit and on recheck — so nothing here is presented as its published position, and no substitute source is offered in its place. The quay named on your ticket is the authority for your own sailing:",
  linkText: "the four Naples arrival points, side by side",
  href: "/destinations/naples",
};

const sourceIt = {
  text: "La distinzione fra la Stazione Marittima e le banchine di aliscafi e traghetti deriva da descrizioni pubblicamente disponibili delle strutture portuali, consultate il 27 ottobre 2026. Il sito dell'operatore del terminal non è stato apribile — ha restituito HTTP 403 a ogni tentativo, sia in fase di verifica sia al ricontrollo — perciò nulla qui è presentato come sua posizione pubblicata, e non offriamo alcuna fonte sostitutiva. Per la vostra partenza fa fede la banchina indicata sul biglietto:",
  linkText: "i quattro punti d'arrivo di Napoli, a confronto",
  href: "/it/destinazioni/napoli",
};

const en: NaplesCruisePort = {
  meta: {
    title: "Naples cruise terminal transfers — Stazione Marittima",
    description:
      "Three quays within sight of each other take three different kinds of vessel. Which one your ship uses decides the journey, and it is on your ticket.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Joining or leaving a ship",
    h1: "The Naples cruise terminal at the Stazione Marittima",
    lead: "Naples has several quays along one stretch of waterfront, and they take entirely different vessels. Getting the right name into your request is most of what makes this journey work.",
    primaryCta: "Request a quotation",
    secondaryCta: "Which quay is which",
    constraint: {
      label: "Before anything else",
      heading: "What is settled, and what is not",
      known: [
        {
          term: "The cruise facility",
          detail:
            "The Stazione Marittima is the terminal cruise ships use. It is not the hydrofoil quay and not the ferry quay, although all three are close together.",
        },
        {
          term: "Your ticket is the authority",
          detail:
            "The facility you need is named on it. Copy that name into your request rather than writing “the port of Naples”, which could mean any of three places.",
        },
        {
          term: "We do cover this",
          detail:
            "Arrangements for collecting cruise passengers at Naples are in place. That is our own position, set out below — not a rule the port publishes.",
        },
      ],
      unknown: {
        label: "What this page will not tell you",
        body: "Where exactly a vehicle may wait inside the port. No public source we could read establishes it, and the terminal operator's own website returned an error to every attempt to open it — at audit and again immediately before this page was written. So there is no meeting point, pier number, entrance, parking arrangement or waiting procedure described here, and we have not substituted another source for the one we could not read. The meeting arrangement is settled in the reply to your request.",
      },
      source: sourceEn,
    },
  },

  quays: {
    id: "quays",
    eyebrow: "The distinction",
    heading: "Three quays, three kinds of vessel",
    lead: "Close enough together to be confused for one another, and different enough that arriving at the wrong one is a serious problem on a sailing day.",
    split: {
      caption: "Naples waterfront facilities and what calls at each",
      columns: {
        facility: "Where",
        serves: "What calls there",
        detail: "When it is the one you mean",
      },
      items: [
        {
          id: "stazione-marittima",
          name: "Stazione Marittima",
          serves: "Cruise ships",
          detail:
            "When a cruise line issued your ticket. This is the facility this page is about.",
        },
        {
          id: "beverello",
          name: "Calata Beverello",
          serves: "Hydrofoils and fast ferries",
          detail:
            "When you are taking a fast service across the bay rather than joining a cruise.",
        },
        {
          id: "porta-di-massa",
          name: "Calata Porta di Massa",
          serves: "Car ferries",
          detail:
            "When you are on a conventional ferry, typically with a vehicle.",
        },
      ],
    },
    note: "If your documents name something not on this list, send us the name as written rather than translating it into one of these. Naples has more maritime facilities than the three a cruise passenger normally meets, and the exact words on a ticket are more reliable than any summary.",
  },

  ownerClaim: {
    label: "Our own position, not a published port rule",
    heading: "What we can tell you about collection",
    body: "We have arrangements in place for collecting cruise passengers at Naples, and we serve Campania including the Amalfi Coast road. That is information about our business rather than about the port: it is not published by the port authority or the terminal operator, it is not an endorsement by either, and it does not establish any right of access. What it does mean is that this is a journey you can ask us to arrange, and that the meeting arrangement will be set out in the reply you get — specifically, rather than assumed from this page.",
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "Five things, and the second is the one this whole page is about.",
    items: [
      "The ship's name and the date.",
      "The facility named on your ticket — Stazione Marittima, or whatever it actually says.",
      "Whether you are joining the ship or leaving it.",
      "The address at the other end, in full.",
      "How many passengers and how much luggage.",
    ],
    note: "Say whether you are embarking or disembarking. They are not the same journey: a missed sailing cannot be recovered, while a slow start after disembarkation usually can, and the margin we suggest depends on which you are doing.",
  },

  onward: {
    id: "onward",
    heading: "Around the port",
    items: [
      {
        page: "naples",
        label: "Private transfers in Naples",
        detail:
          "The city and its four arrival points, including the airport and the notice that currently applies to it.",
      },
      {
        page: "salerno-airport",
        label: "Salerno Costa d'Amalfi Airport (QSR)",
        detail:
          "If you are flying in before you sail, and the reason its terminal hours matter.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this terminal",
    lead: "Including two answered with what is not known, which here is the useful answer.",
    items: [
      {
        question: "Is the Stazione Marittima the same as Beverello?",
        answer:
          "No. They are separate facilities on the same stretch of waterfront. The Stazione Marittima takes cruise ships; Calata Beverello takes hydrofoils and fast ferries; Calata Porta di Massa takes car ferries. A request naming the wrong one sends a car to the wrong place on a day when that matters.",
      },
      {
        question: "Where exactly will the driver meet me?",
        answer:
          "Settled in the reply to your request. No public source we could read sets out where a vehicle may wait inside the port, and the terminal operator's own site would not open for us — so there is no meeting point this page could describe honestly. We would rather tell you that than invent one.",
      },
      {
        question: "Do you actually serve this port?",
        answer:
          "Yes. Arrangements for collecting cruise passengers at Naples are in place, and we serve Campania including the Amalfi Coast road. That is our own operating position; the port has published nothing about us, and nothing here should be read as a partnership or an endorsement by it.",
      },
      {
        question: "How big is the terminal, and how many berths does it have?",
        answer:
          "No figures appear on this page. The ones in circulation come from promotional material rather than from a source we could verify, and a pier count is not something a transfer page needs to be right about.",
      },
      {
        question: "What if my ship's schedule changes?",
        answer:
          "Tell us as soon as you know. Nothing here claims ship tracking or an automatic adjustment — neither is offered, and a page implying otherwise would be making a promise about somebody else's vessel.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Copy the quay name from your ticket",
    body: "It is the one detail that makes this request unambiguous. The ship, the date, whether you are joining or leaving her, and the address at the other end.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Naples", page: "naples" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: NaplesCruisePort = {
  meta: {
    title: "Transfer per il terminal crociere di Napoli — Stazione Marittima",
    description:
      "Tre banchine a vista l'una dall'altra accolgono tre tipi di mezzo diversi. Quale usi la vostra nave decide il viaggio, ed è scritto sul biglietto.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Imbarco e sbarco",
    h1: "Il terminal crociere di Napoli alla Stazione Marittima",
    lead: "Napoli ha più banchine lungo lo stesso tratto di waterfront, e accolgono mezzi completamente diversi. Mettere il nome giusto nella richiesta è quasi tutto ciò che fa funzionare questo viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Quale banchina è quale",
    constraint: {
      label: "Prima di ogni altra cosa",
      heading: "Che cosa è certo e che cosa no",
      known: [
        {
          term: "La struttura crocieristica",
          detail:
            "La Stazione Marittima è il terminal usato dalle navi da crociera. Non è la banchina degli aliscafi né quella dei traghetti, benché siano tutte vicine.",
        },
        {
          term: "Fa fede il vostro biglietto",
          detail:
            "La struttura che vi serve è indicata lì sopra. Copiate quel nome nella richiesta invece di scrivere «il porto di Napoli», che può indicare tre luoghi diversi.",
        },
        {
          term: "Questo lo copriamo",
          detail:
            "Gli accordi per il prelievo dei crocieristi a Napoli sono attivi. È la nostra posizione, esposta più sotto, non una regola pubblicata dal porto.",
        },
      ],
      unknown: {
        label: "Che cosa questa pagina non vi dirà",
        body: "Dove esattamente un veicolo possa attendere dentro il porto. Nessuna fonte pubblica consultabile lo stabilisce, e il sito dell'operatore del terminal ha restituito un errore a ogni tentativo di apertura, sia in fase di verifica sia subito prima che questa pagina venisse scritta. Qui non sono quindi descritti punti d'incontro, numeri di banchina, ingressi, parcheggi o procedure d'attesa, e non abbiamo sostituito con altro la fonte che non siamo riusciti a leggere. La modalità d'incontro si definisce nella risposta alla vostra richiesta.",
      },
      source: sourceIt,
    },
  },

  quays: {
    id: "banchine",
    eyebrow: "La distinzione",
    heading: "Tre banchine, tre tipi di mezzo",
    lead: "Abbastanza vicine da confondersi, e abbastanza diverse da rendere un arrivo sbagliato un problema serio nel giorno della partenza.",
    split: {
      caption: "Le strutture del waterfront napoletano e che cosa vi attracca",
      columns: {
        facility: "Dove",
        serves: "Che cosa vi arriva",
        detail: "Quando è quella che intendete",
      },
      items: [
        {
          id: "stazione-marittima",
          name: "Stazione Marittima",
          serves: "Navi da crociera",
          detail:
            "Quando il biglietto ve l'ha emesso una compagnia di crociere. È la struttura di cui parla questa pagina.",
        },
        {
          id: "beverello",
          name: "Calata Beverello",
          serves: "Aliscafi e navi veloci",
          detail:
            "Quando prendete un collegamento veloce attraverso il golfo e non vi imbarcate su una crociera.",
        },
        {
          id: "porta-di-massa",
          name: "Calata Porta di Massa",
          serves: "Traghetti",
          detail:
            "Quando viaggiate su un traghetto tradizionale, di solito con un veicolo.",
        },
      ],
    },
    note: "Se i vostri documenti indicano qualcosa che non compare in questo elenco, mandateci il nome così com'è scritto invece di ricondurlo a uno di questi. Napoli ha più strutture portuali delle tre che un crocierista incontra di solito, e le parole esatte su un biglietto sono più affidabili di qualsiasi riassunto.",
  },

  ownerClaim: {
    label: "La nostra posizione, non una regola portuale pubblicata",
    heading: "Che cosa possiamo dirvi sul prelievo",
    body: "Abbiamo accordi attivi per il prelievo dei crocieristi a Napoli, e serviamo la Campania compresa la strada della Costiera Amalfitana. È un'informazione sulla nostra attività, non sul porto: non è pubblicata dall'autorità portuale né dall'operatore del terminal, non è un avallo di nessuno dei due e non stabilisce alcun diritto di accesso. Significa però che è un viaggio che potete chiederci di organizzare, e che la modalità d'incontro sarà indicata nella risposta che riceverete, in modo preciso anziché dedotto da questa pagina.",
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Cinque cose, e la seconda è ciò di cui parla tutta questa pagina.",
    items: [
      "Il nome della nave e la data.",
      "La struttura indicata sul biglietto: Stazione Marittima, o qualunque cosa ci sia scritta.",
      "Se vi imbarcate o sbarcate.",
      "L'indirizzo all'altro capo, per esteso.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Precisate se vi imbarcate o sbarcate. Non sono lo stesso viaggio: una partenza persa non si recupera, mentre una partenza lenta dopo lo sbarco di solito sì, e il margine che vi suggeriremo dipende da quale delle due state facendo.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Attorno al porto",
    items: [
      {
        page: "naples",
        label: "Transfer privati a Napoli",
        detail:
          "La città e i suoi quattro punti d'arrivo, compreso l'aeroporto e l'avviso che al momento lo riguarda.",
      },
      {
        page: "salerno-airport",
        label: "Aeroporto di Salerno Costa d'Amalfi (QSR)",
        detail:
          "Se arrivate in aereo prima di salpare, e il motivo per cui contano gli orari del suo terminal.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo terminal",
    lead: "Comprese due a cui si risponde con ciò che non si sa, che qui è la risposta utile.",
    items: [
      {
        question: "La Stazione Marittima è la stessa cosa di Beverello?",
        answer:
          "No. Sono strutture distinte sullo stesso tratto di banchina. La Stazione Marittima accoglie le navi da crociera; Calata Beverello gli aliscafi e le navi veloci; Calata Porta di Massa i traghetti. Una richiesta che ne indichi una sbagliata manda l'auto nel posto sbagliato in un giorno in cui la cosa pesa.",
      },
      {
        question: "Dove mi aspetterà esattamente l'autista?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. Nessuna fonte pubblica consultabile stabilisce dove un veicolo possa attendere dentro il porto, e il sito dell'operatore del terminal non si è aperto: non esiste quindi un punto d'incontro che questa pagina possa descrivere onestamente. Preferiamo dirvelo piuttosto che inventarne uno.",
      },
      {
        question: "Servite davvero questo porto?",
        answer:
          "Sì. Gli accordi per il prelievo dei crocieristi a Napoli sono attivi, e serviamo la Campania compresa la strada della Costiera Amalfitana. È la nostra posizione operativa; il porto non ha pubblicato nulla sul nostro conto, e niente qui va letto come una partnership o un suo avallo.",
      },
      {
        question: "Quanto è grande il terminal e quanti accosti ha?",
        answer:
          "Su questa pagina non compaiono cifre. Quelle in circolazione provengono da materiale promozionale e non da una fonte verificabile, e il numero di accosti non è qualcosa su cui una pagina di transfer debba avere ragione.",
      },
      {
        question: "E se cambia l'orario della nave?",
        answer:
          "Ditecelo appena lo sapete. Nulla qui promette il monitoraggio della nave o un adeguamento automatico: non li offriamo, e una pagina che lasciasse intendere il contrario farebbe una promessa sulla nave di qualcun altro.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Copiate dal biglietto il nome della banchina",
    body: "È l'unico dettaglio che rende inequivocabile questa richiesta. La nave, la data, se vi imbarcate o sbarcate e l'indirizzo all'altro capo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Napoli", page: "naples" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const naplesCruisePort: Record<Locale, NaplesCruisePort> = { en, it };
