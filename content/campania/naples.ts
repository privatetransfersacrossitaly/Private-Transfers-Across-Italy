import type { Locale } from "@/lib/site";
import type { NaplesHub } from "./types";

/**
 * The Naples hub.
 *
 * ── Four gateways, one name ───────────────────────────────────────────────
 * Naples's problem for a transfer is not a restricted centre, as in Florence
 * or Bologna. It is that the city has four separate arrival points and people
 * name them all "Naples": the airport, the cruise terminal at the Stazione
 * Marittima, the hydrofoil quay at Calata Beverello, and the ferry quay at
 * Calata Porta di Massa. A request naming the wrong one can cost a sailing.
 *
 * So the page is a chooser, and its central module is a table rather than
 * prose — four rows, compared directly, because comparison is the task.
 *
 * ── The notice, and its boundary ──────────────────────────────────────────
 * The airport operator's own site carries the headline "Naples airport closed
 * for runway requalification (November 2026)", dated 19 October and rechecked
 * on 27 October 2026. It publishes **the month and nothing else** — no start
 * date, no end date, no reopening, no airline list, and no statement that any
 * other airport is an alternative.
 *
 * This page therefore says exactly that much and sends the reader to the
 * operator. It does not repeat the 1–30 November dates that secondary outlets
 * report, because no official source could be found for them.
 *
 * ── Two kinds of claim, kept apart ────────────────────────────────────────
 * `ownerClaim` carries what the business says about itself. It is labelled as
 * such wherever it appears, and never mixed into a sourced paragraph.
 */

const naplesAirportSourceEn = {
  text: "The closure notice and the airport's normal opening hours are published by GE.S.A.C. S.p.A., which operates the airport. Its site was read on 27 October 2026 and carried the headline but no dates, no reopening and no list of affected flights. Dates reported elsewhere are not repeated here because no official source for them could be found:",
  linkText: "the airport operator publishes its own notices",
  href: "https://www.aeroportodinapoli.it/en/",
};

const naplesAirportSourceIt = {
  text: "L'avviso di chiusura e gli orari ordinari dell'aeroporto sono pubblicati da GE.S.A.C. S.p.A., che gestisce lo scalo. Il suo sito è stato consultato il 27 ottobre 2026 e riportava il titolo ma nessuna data, nessuna riapertura e nessun elenco di voli coinvolti. Le date riportate altrove non vengono ripetute qui, perché non è stato possibile trovarne una fonte ufficiale:",
  linkText: "il gestore aeroportuale pubblica i propri avvisi",
  href: "https://www.aeroportodinapoli.it/it/",
};

const en: NaplesHub = {
  meta: {
    title: "Private transfers in Naples",
    description:
      "Naples has four arrival points and one name. Which you mean decides the journey — and the airport operator has announced a runway closure for November 2026.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers in Naples",
    lead: "Most Italian cities have one front door. Naples has four, and people call them all Naples. Sorting out which one your journey actually ends at is the single most useful thing this page can do for you.",
    primaryCta: "Request a quotation",
    secondaryCta: "The four gateways",
    facts: [
      { label: "By air", value: "Capodichino" },
      { label: "Cruise ships", value: "Stazione Marittima" },
      { label: "Hydrofoils", value: "Calata Beverello" },
      { label: "Car ferries", value: "Calata Porta di Massa" },
    ],
  },

  gateways: {
    id: "gateways",
    eyebrow: "The distinction that matters",
    heading: "Four arrival points, and they are not interchangeable",
    lead: "Three of these are on the same stretch of waterfront, within sight of one another, and they take entirely different vessels. Naming the wrong one is the commonest way a Naples transfer goes wrong.",
    split: {
      caption: "Naples arrival points and what calls at each",
      columns: {
        facility: "Where",
        serves: "What calls there",
        detail: "What it means for a car",
      },
      items: [
        {
          id: "airport",
          name: "Naples International Airport (Capodichino)",
          serves: "Flights",
          detail:
            "Inside the Naples urban area. See the notice below: its operator has announced a runway closure for November 2026.",
        },
        {
          id: "stazione-marittima",
          name: "Stazione Marittima",
          serves: "Cruise ships",
          detail:
            "The cruise terminal. If a cruise line sent you a ticket, this is almost certainly the one you mean.",
          page: "naples-cruise-port",
        },
        {
          id: "beverello",
          name: "Calata Beverello",
          serves: "Hydrofoils and fast ferries",
          detail:
            "Where fast services to the bay islands run from. A different quay from the cruise terminal, and a different journey.",
        },
        {
          id: "porta-di-massa",
          name: "Calata Porta di Massa",
          serves: "Car ferries",
          detail:
            "The conventional ferry quay. Again separate, and again not where a cruise ship ties up.",
        },
      ],
    },
    note: "No page on this site claims to know which quay your vessel uses — that is on your ticket, and it is the thing to copy into your request. Tell us the facility by name rather than the city, and the answer will be about the right place.",
  },

  airportNotice: {
    id: "airport-notice",
    eyebrow: "Time-critical",
    heading: "The airport operator has announced a November 2026 closure",
    lead: "Worth knowing before you book anything that depends on flying into Naples.",
    paragraphs: [
      "The company that runs Naples airport publishes, on its own site, a notice headed “Naples airport closed for runway requalification (November 2026)”. It is dated 19 October, and it was still there when this page was last checked on 27 October 2026.",
      "What the operator publishes is the month. It does not state a start date, an end date or a reopening date on the page we could read, it does not name any affected flight or airline, and it does not say that any other airport is a substitute. Other dates are circulating; we have not found an official source for them, so they are not repeated here.",
      "If your plans involve flying into or out of Naples around that period, treat this as a reason to check with your airline and with the operator rather than as a schedule. We can arrange a car to or from wherever you actually end up — but we cannot tell you when the runway reopens, and we are not going to guess.",
    ],
    limits: {
      heading: "What this page does not claim",
      body: "Any specific closure dates, any reopening date, any list of affected airlines, or that a particular alternative airport is the official substitute. None of that is published by the operator in what we could read, and inventing it on a transfer page would be the sort of guess people rebook flights around. The operator's own notices are the version to act on.",
    },
    source: naplesAirportSourceEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover in Campania",
    body: "We arrange transfers in Campania, including the Amalfi Coast road, and we have arrangements in place for collecting cruise passengers at Naples. That is our own operating position — it is not something the airport, the port or any public authority publishes about us, and it is not an endorsement by any of them. It also does not mean every quay, street or address can be driven to; where a car can actually stop is settled in the reply to your request.",
  },

  onward: {
    id: "onward",
    heading: "Around Naples",
    items: [
      {
        page: "naples-cruise-port",
        label: "The cruise terminal at the Stazione Marittima",
        detail:
          "The quay cruise ships use, and how to tell it from the two beside it.",
      },
      {
        page: "nap-airport",
        label: "Naples Capodichino Airport (NAP)",
        detail:
          "The city's own airport, its controlled traffic zone, and where a car may actually set you down.",
      },
      {
        page: "salerno-airport",
        label: "Salerno Costa d'Amalfi Airport (QSR)",
        detail:
          "The region's other airport, run by the same operator — and one that closes its terminal overnight.",
      },
      {
        page: "positano",
        label: "Transfers to Positano",
        detail:
          "The coast comune that charges for entry by seat count, and what the charge does not buy.",
      },
      {
        page: "amalfi",
        label: "Transfers to Amalfi",
        detail:
          "Sixty minutes inside the historic centre, and four streets where stopping is banned outright.",
      },
      {
        page: "ravello",
        label: "Transfers to Ravello",
        detail:
          "Four named areas for setting passengers down, and an access authorisation booked the day before.",
      },
      {
        page: "pompeii",
        label: "Transfers to Pompeii",
        detail:
          "Three gates the park names two different ways, and a regulation that keeps suitcases outside them.",
      },
      {
        page: "caserta",
        label: "Transfers to Caserta",
        detail:
          "Two entrances, and a palace that states plainly it has no public parking of its own.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Naples questions",
    lead: "Mostly about telling four similar-sounding places apart.",
    items: [
      {
        question: "I am arriving on a cruise. Which one do I want?",
        answer:
          "Almost certainly the Stazione Marittima, which is the cruise terminal. Calata Beverello takes hydrofoils and Calata Porta di Massa takes car ferries; both are nearby and neither is where a cruise ship ties up. Your ticket will name the facility — copy that name into your request rather than writing “the port”.",
      },
      {
        question: "Is Naples airport closing?",
        answer:
          "Its operator has published a notice headed “Naples airport closed for runway requalification (November 2026)”, dated 19 October and still on its site on 27 October 2026. The operator gives the month and no more — no dates, no reopening, no airline list. Check with your airline and with the operator; this page will not invent the detail.",
      },
      {
        question: "Can you still collect me if my flight moves?",
        answer:
          "Ask, and tell us where you are actually landing. We arrange transfers in Campania and that does not depend on which airport your airline sends you to — but a journey from somewhere else is a different arrangement, and it needs to be quoted as one.",
      },
      {
        question: "Do you cover the Amalfi Coast?",
        answer:
          "Yes. That is our own operating position rather than something a public authority publishes about us, and it does not mean every address on the coast can be driven to. Name the town and the address when you ask and you will get an answer about that address.",
      },
      {
        question: "Do you run tours of Pompeii or the coast?",
        answer:
          "No. We drive; we are not a tour operator, we do not sell tickets or admissions, and nothing here is an offer of a guided visit. A car to a named address at a named time is a different thing, and it is the thing we do.",
      },
      {
        question: "Is a request a booking?",
        answer:
          "No. Every journey on this site is an enquiry. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Name the facility, not the city",
    body: "Capodichino, the Stazione Marittima, Beverello or Porta di Massa. Four different places, four different journeys, and the name on your ticket is the one that makes a reply useful.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "The cruise terminal",
      page: "naples-cruise-port",
    },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: NaplesHub = {
  meta: {
    title: "Transfer privati a Napoli",
    description:
      "Napoli ha quattro punti d'arrivo e un solo nome. Quale intendete decide il viaggio — e il gestore aeroportuale ha annunciato una chiusura della pista per novembre 2026.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati a Napoli",
    lead: "Quasi tutte le città italiane hanno una porta d'ingresso. Napoli ne ha quattro, e le si chiama tutte Napoli. Capire a quale finisca davvero il vostro viaggio è la cosa più utile che questa pagina possa fare per voi.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "I quattro accessi",
    facts: [
      { label: "In aereo", value: "Capodichino" },
      { label: "Navi da crociera", value: "Stazione Marittima" },
      { label: "Aliscafi", value: "Calata Beverello" },
      { label: "Traghetti", value: "Calata Porta di Massa" },
    ],
  },

  gateways: {
    id: "accessi",
    eyebrow: "La distinzione che conta",
    heading: "Quattro punti d'arrivo, e non sono intercambiabili",
    lead: "Tre si trovano sullo stesso tratto di banchina, a vista l'uno dall'altro, e accolgono mezzi completamente diversi. Indicare quello sbagliato è il modo più comune in cui un transfer napoletano va storto.",
    split: {
      caption: "I punti d'arrivo di Napoli e che cosa vi attracca",
      columns: {
        facility: "Dove",
        serves: "Che cosa vi arriva",
        detail: "Che cosa comporta per un'auto",
      },
      items: [
        {
          id: "airport",
          name: "Aeroporto internazionale di Napoli (Capodichino)",
          serves: "Voli",
          detail:
            "Dentro l'area urbana di Napoli. Vedi l'avviso qui sotto: il gestore ha annunciato una chiusura della pista per novembre 2026.",
        },
        {
          id: "stazione-marittima",
          name: "Stazione Marittima",
          serves: "Navi da crociera",
          detail:
            "Il terminal crociere. Se la compagnia vi ha mandato un biglietto, quasi sicuramente è questo che intendete.",
          page: "naples-cruise-port",
        },
        {
          id: "beverello",
          name: "Calata Beverello",
          serves: "Aliscafi e navi veloci",
          detail:
            "Da qui partono i collegamenti veloci per le isole del golfo. Una banchina diversa dal terminal crociere, e un viaggio diverso.",
        },
        {
          id: "porta-di-massa",
          name: "Calata Porta di Massa",
          serves: "Traghetti",
          detail:
            "La banchina dei traghetti tradizionali. Anche questa separata, e anche questa non è dove ormeggia una nave da crociera.",
        },
      ],
    },
    note: "Nessuna pagina di questo sito pretende di sapere quale banchina usi il vostro mezzo: è scritto sul biglietto, ed è il dato da copiare nella richiesta. Indicateci la struttura per nome anziché la città, e la risposta riguarderà il posto giusto.",
  },

  airportNotice: {
    id: "avviso-aeroporto",
    eyebrow: "Informazione urgente",
    heading: "Il gestore aeroportuale ha annunciato una chiusura per novembre 2026",
    lead: "Vale la pena saperlo prima di prenotare qualcosa che dipenda dall'atterrare a Napoli.",
    paragraphs: [
      "La società che gestisce l'aeroporto di Napoli pubblica sul proprio sito un avviso intitolato «Naples airport closed for runway requalification (November 2026)». È datato 19 ottobre ed era ancora presente quando questa pagina è stata verificata l'ultima volta, il 27 ottobre 2026.",
      "Quello che il gestore pubblica è il mese. Sulla pagina che abbiamo potuto leggere non indica una data d'inizio, una di fine o una di riapertura, non nomina alcun volo o compagnia coinvolta e non dice che un altro aeroporto faccia da sostituto. Circolano altre date: non ne abbiamo trovato una fonte ufficiale, perciò qui non le riportiamo.",
      "Se i vostri programmi prevedono di volare da o per Napoli in quel periodo, consideratelo un motivo per verificare con la compagnia aerea e con il gestore, non un orario. Possiamo organizzare un'auto da o per il luogo in cui finirete davvero, ma non possiamo dirvi quando riaprirà la pista, e non tireremo a indovinare.",
    ],
    limits: {
      heading: "Che cosa questa pagina non afferma",
      body: "Date precise di chiusura, una data di riapertura, un elenco di compagnie coinvolte o che un determinato aeroporto alternativo sia il sostituto ufficiale. Nulla di tutto ciò è pubblicato dal gestore in quanto abbiamo potuto leggere, e inventarlo su una pagina di transfer sarebbe il tipo di ipotesi su cui le persone riprenotano un volo. Gli avvisi del gestore sono la versione su cui regolarsi.",
    },
    source: naplesAirportSourceIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo in Campania",
    body: "Organizziamo transfer in Campania, compresa la strada della Costiera Amalfitana, e abbiamo accordi operativi per il prelievo dei crocieristi a Napoli. È la nostra posizione operativa: non è qualcosa che l'aeroporto, il porto o un'autorità pubblica pubblichino sul nostro conto, e non è un avallo da parte di nessuno di essi. Non significa nemmeno che ogni banchina, via o indirizzo sia raggiungibile in auto: dove un'auto possa effettivamente fermarsi si definisce nella risposta alla vostra richiesta.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Attorno a Napoli",
    items: [
      {
        page: "naples-cruise-port",
        label: "Il terminal crociere alla Stazione Marittima",
        detail:
          "La banchina usata dalle navi da crociera, e come distinguerla dalle due accanto.",
      },
      {
        page: "nap-airport",
        label: "Aeroporto di Napoli Capodichino (NAP)",
        detail:
          "L'aeroporto della città, la sua zona a traffico controllato e dove un'auto può davvero farvi scendere.",
      },
      {
        page: "salerno-airport",
        label: "Aeroporto di Salerno Costa d'Amalfi (QSR)",
        detail:
          "L'altro aeroporto della regione, dello stesso gestore, e che di notte chiude il terminal.",
      },
      {
        page: "positano",
        label: "Transfer per Positano",
        detail:
          "Il comune costiero che fa pagare l'ingresso in base ai posti, e che cosa quella tariffa non comprende.",
      },
      {
        page: "amalfi",
        label: "Transfer per Amalfi",
        detail:
          "Sessanta minuti dentro il centro storico, e quattro vie in cui la fermata è vietata del tutto.",
      },
      {
        page: "ravello",
        label: "Transfer per Ravello",
        detail:
          "Quattro aree indicate per far scendere i passeggeri, e un'autorizzazione da prenotare il giorno prima.",
      },
      {
        page: "pompeii",
        label: "Transfer per Pompei",
        detail:
          "Tre cancelli che il Parco chiama in due modi diversi, e un regolamento che lascia le valigie fuori.",
      },
      {
        page: "caserta",
        label: "Transfer per Caserta",
        detail:
          "Due ingressi, e una Reggia che dichiara apertamente di non avere un parcheggio pubblico proprio.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Napoli",
    lead: "Quasi tutte su come distinguere quattro luoghi dal nome simile.",
    items: [
      {
        question: "Arrivo in crociera: quale mi serve?",
        answer:
          "Quasi certamente la Stazione Marittima, che è il terminal crociere. Calata Beverello accoglie gli aliscafi e Calata Porta di Massa i traghetti; sono entrambe vicine e nessuna delle due è dove ormeggia una nave da crociera. Sul biglietto è indicata la struttura: copiate quel nome nella richiesta invece di scrivere «il porto».",
      },
      {
        question: "L'aeroporto di Napoli sta per chiudere?",
        answer:
          "Il gestore ha pubblicato un avviso intitolato «Naples airport closed for runway requalification (November 2026)», datato 19 ottobre e ancora presente sul sito il 27 ottobre 2026. Il gestore indica il mese e nient'altro: nessuna data, nessuna riapertura, nessun elenco di compagnie. Verificate con la vostra compagnia aerea e con il gestore; questa pagina non inventerà i dettagli.",
      },
      {
        question: "Potete prendermi lo stesso se il volo viene spostato?",
        answer:
          "Chiedetelo, dicendoci dove atterrate davvero. Organizziamo transfer in Campania e questo non dipende dall'aeroporto su cui vi dirotta la compagnia, ma un viaggio da un altro luogo è un altro accordo e va preventivato come tale.",
      },
      {
        question: "Coprite la Costiera Amalfitana?",
        answer:
          "Sì. È la nostra posizione operativa, non qualcosa che un'autorità pubblica pubblichi sul nostro conto, e non significa che ogni indirizzo della costiera sia raggiungibile in auto. Indicate il paese e l'indirizzo quando scrivete e riceverete una risposta su quell'indirizzo.",
      },
      {
        question: "Organizzate tour di Pompei o della costiera?",
        answer:
          "No. Noi guidiamo: non siamo un tour operator, non vendiamo biglietti né ingressi, e nulla qui è un'offerta di visita guidata. Un'auto verso un indirizzo preciso a un'ora precisa è un'altra cosa, ed è quella che facciamo.",
      },
      {
        question: "Una richiesta è una prenotazione?",
        answer:
          "No. Ogni viaggio su questo sito è una richiesta. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate la struttura, non la città",
    body: "Capodichino, la Stazione Marittima, Beverello o Porta di Massa. Quattro luoghi diversi, quattro viaggi diversi, ed è il nome sul vostro biglietto a rendere utile una risposta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Il terminal crociere",
      page: "naples-cruise-port",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const naplesHub: Record<Locale, NaplesHub> = { en, it };
