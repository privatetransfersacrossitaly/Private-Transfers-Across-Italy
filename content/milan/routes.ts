import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The four Milan route pages.
 *
 * They use the shared `RoutePage` type and the shared route component, which
 * is correct: a route page answers the same kind of question wherever it is.
 * What differs is the leading module, and none of the four repeats the module
 * its Rome counterpart uses:
 *
 * - Malpensa → Milan: endpoints lead, with no preceding module. Rome's
 *   Fiumicino page does the same — but there the hard half is a narrow lane,
 *   and here it is a pair of nested traffic zones, so the endpoint columns
 *   carry entirely different content.
 * - Linate → Milan: a panel that contradicts the obvious assumption, because
 *   the obvious assumption about this route is wrong.
 * - Bergamo → Milan: a three-way distance comparison, because the page's job
 *   is to make fifty kilometres legible to someone who thought they had
 *   landed in Milan.
 * - Malpensa → Lake Como: a fork between towns, because the destination is
 *   ambiguous until the traveller names it. The only route page in either
 *   cluster whose endpoint is not yet known when the reader arrives.
 *
 * No page states a price, a duration or a distance beyond the ones the
 * operators publish. See `docs/milan-research-log.md`.
 */

/* ── Malpensa → Milan ─────────────────────────────────────────────────── */

const mxpMilanEn: RoutePage = {
  meta: {
    title: "Malpensa Airport to Milan",
    description:
      "The terminal at one end, and two nested traffic zones at the other. What a quotation for the Malpensa run actually needs to know.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Malpensa Airport (MXP)",
    to: "Milan",
    eyebrow: "Route",
    h1: "Malpensa Airport to Milan",
    lead: "The most asked-about Milan transfer, and — as in most cities — the airport is the easy end. What complicates this one is what happens in the last two kilometres.",
    primaryCta: "Request a quotation",
    secondaryCta: "About Malpensa",
    note: "No price and no journey time appear on this page. The operator publishes no distance figure this page is willing to quote, and how long the drive takes depends on the hour, the traffic and the address.",
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Two endpoints, two different problems",
    lead: "They are not symmetrical, and the second is the harder one.",
    from: {
      id: "mxp",
      label: "Departure",
      name: "Malpensa Airport",
      page: "malpensa",
      linkText: "Terminals, timings and what to send",
      items: [
        {
          term: "The terminal",
          detail:
            "Terminal 1 and Terminal 2 are separate buildings with their own check-in and security. Going to the wrong one is not a short walk, so the terminal belongs in your request.",
        },
        {
          term: "When you actually emerge",
          detail:
            "Taxiing, passport control for a flight from outside the Schengen area, and the baggage belt all sit between landing and walking out.",
        },
        {
          term: "What to send",
          detail:
            "Flight number, date, scheduled arrival time and the terminal.",
        },
      ],
    },
    to: {
      id: "milan",
      label: "Arrival",
      name: "A Milan address",
      page: "milan",
      linkText: "Area B, Area C and the districts",
      items: [
        {
          term: "Two zones, not one",
          detail:
            "Area B covers most of the city; Area C sits inside it around the historic centre. A journey to a central address crosses both, and both run Monday to Friday, 07:30 to 19:30.",
        },
        {
          term: "The exact address",
          detail:
            "Street and number, and the district if you know it. A hotel's name is not an address, and in Milan the district is a good predictor of how close a car can get.",
        },
        {
          term: "What to expect",
          detail:
            "In the Centro Storico or Brera, a meeting point a short walk from the door — agreed in advance — is often the workable answer. In Porta Nuova or CityLife it usually is not necessary.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What a quotation for this journey needs",
    lead: "Six lines in an email turn a guess into an answer.",
    items: [
      "The flight number and the date, not just the airline.",
      "The terminal, from the boarding pass.",
      "The full destination address, with the district if you know it.",
      "How many passengers, and how many are children.",
      "How many hold bags and how many cabin bags.",
      "Anything bulky: skis, golf clubs, a pushchair, a wheelchair.",
    ],
    note: "Whether a specific vehicle, a child seat or an accessible vehicle can be provided is answered in the reply, not promised here.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-mxp-como",
        label: "Malpensa Airport to Lake Como",
        detail: "The same airport, going the other way entirely.",
      },
      {
        page: "route-lin-milan",
        label: "Linate Airport to Milan",
        detail: "If you are still choosing between flights.",
      },
      {
        page: "milan-stations",
        label: "Milan's railway stations",
        detail: "If the journey continues by train.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Including the two this page will not answer with a number.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "That cannot be answered honestly from a web page. The airport is north-west of the city in the province of Varese, and the drive depends on the hour, the traffic and the address at the other end. A quotation for your own date and time can give a realistic expectation.",
      },
      {
        question: "What does it cost?",
        answer:
          "It depends on the address, the hour, how many of you there are and the vehicle that suits you. No fixed fare is published here, because one that ignored those things would be either wrong or padded to cover being wrong.",
      },
      {
        question: "Will the zones stop the car reaching my hotel?",
        answer:
          "Not usually by themselves — taxis and private-hire cars of up to nine seats are among the categories the city exempts from the Area C charge when their plates are registered. The narrowness of the street is the more common obstacle, which is why the district is worth sending.",
      },
      {
        question: "Is the Malpensa Express a better option?",
        answer:
          "It is a different one. The rail service runs to Milano Cadorna and Milano Centrale, which answers the question of reaching Milan but not of reaching an address with luggage. No timings or fares are quoted here.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Six lines, and you have an answer",
    body: "Flight, date, terminal, address, passengers, luggage. Send those and the reply can be specific rather than a range with the risk priced into it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Malpensa Airport", page: "malpensa" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const mxpMilanIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Malpensa a Milano",
    description:
      "Il terminal da una parte e due zone a traffico limitato una dentro l'altra dall'altra. Che cosa serve davvero per un preventivo sulla tratta da Malpensa.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Malpensa (MXP)",
    to: "Milano",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Malpensa a Milano",
    lead: "È il transfer milanese più richiesto e, come in quasi tutte le città, l'aeroporto è il capo semplice. A complicare questo viaggio è ciò che succede negli ultimi due chilometri.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto di Malpensa",
    note: "In questa pagina non ci sono né prezzi né tempi di percorrenza. Il gestore non pubblica una distanza che questa pagina sia disposta a citare, e quanto duri il viaggio dipende dall'ora, dal traffico e dall'indirizzo.",
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Due estremi, due problemi diversi",
    lead: "Non sono simmetrici, e il secondo è il più complicato.",
    from: {
      id: "mxp",
      label: "Partenza",
      name: "Aeroporto di Malpensa",
      page: "malpensa",
      linkText: "Terminal, tempi e che cosa indicare",
      items: [
        {
          term: "Il terminal",
          detail:
            "Terminal 1 e Terminal 2 sono edifici separati, con accettazione e controlli propri. Sbagliarlo non significa fare due passi: per questo il terminal va indicato nella richiesta.",
        },
        {
          term: "Quando uscite davvero",
          detail:
            "Fra l'atterraggio e l'uscita ci sono il rullaggio, il controllo passaporti per i voli extra Schengen e il nastro bagagli.",
        },
        {
          term: "Che cosa indicare",
          detail:
            "Numero del volo, data, orario di arrivo previsto e terminal.",
        },
      ],
    },
    to: {
      id: "milano",
      label: "Arrivo",
      name: "Un indirizzo a Milano",
      page: "milan",
      linkText: "Area B, Area C e i quartieri",
      items: [
        {
          term: "Due zone, non una",
          detail:
            "Area B copre quasi tutta la città; Area C sta al suo interno, attorno al centro storico. Un viaggio verso un indirizzo centrale le attraversa entrambe, e sono attive dal lunedì al venerdì dalle 7.30 alle 19.30.",
        },
        {
          term: "L'indirizzo esatto",
          detail:
            "Via e numero civico, e il quartiere se lo conoscete. Il nome di un hotel non è un indirizzo, e a Milano il quartiere anticipa bene quanto vicino possa arrivare un'auto.",
        },
        {
          term: "Che cosa aspettarsi",
          detail:
            "In centro storico o a Brera, un punto d'incontro a pochi passi dal portone, concordato prima, è spesso la soluzione praticabile. A Porta Nuova o in CityLife di solito non serve.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa serve per un preventivo su questa tratta",
    lead: "Sei righe in una mail trasformano una stima in una risposta.",
    items: [
      "Numero del volo e data, non la sola compagnia.",
      "Il terminal, come riportato sulla carta d'imbarco.",
      "L'indirizzo completo di destinazione, con il quartiere se lo conoscete.",
      "Quanti passeggeri e quanti di loro sono bambini.",
      "Quanti bagagli da stiva e quanti a mano.",
      "Eventuali ingombri: sci, sacca da golf, passeggino, carrozzina.",
    ],
    note: "Se sia disponibile un veicolo specifico, un seggiolino o un mezzo accessibile lo dice la risposta: qui non viene promesso.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-mxp-como",
        label: "Da Malpensa al Lago di Como",
        detail: "Stesso aeroporto, direzione opposta.",
      },
      {
        page: "route-lin-milan",
        label: "Dall'aeroporto di Linate a Milano",
        detail: "Se state ancora scegliendo fra i voli.",
      },
      {
        page: "milan-stations",
        label: "Le stazioni ferroviarie di Milano",
        detail: "Se il viaggio prosegue in treno.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Comprese le due a cui questa pagina non risponde con un numero.",
    items: [
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non si può rispondere onestamente da una pagina web. L'aeroporto si trova a nord-ovest della città, in provincia di Varese, e il tragitto dipende dall'ora, dal traffico e dall'indirizzo di arrivo. Un preventivo per la vostra data e il vostro orario può darvi un'aspettativa realistica.",
      },
      {
        question: "Quanto costa?",
        answer:
          "Dipende dall'indirizzo, dall'ora, da quante persone siete e dal veicolo adatto. Qui non viene pubblicata una tariffa fissa, perché una tariffa che ignorasse quei fattori sarebbe sbagliata, oppure gonfiata per coprire l'errore.",
      },
      {
        question: "Le zone impediscono all'auto di arrivare al mio hotel?",
        answer:
          "Di norma non da sole: taxi e NCC fino a nove posti rientrano fra le categorie che il Comune esenta dal ticket di Area C quando la targa è registrata. L'ostacolo più frequente è la larghezza della strada, ed è il motivo per cui conviene indicare il quartiere.",
      },
      {
        question: "Il Malpensa Express è un'alternativa migliore?",
        answer:
          "È un'alternativa diversa. Il collegamento ferroviario arriva a Milano Cadorna e a Milano Centrale: risolve il problema di raggiungere Milano, non quello di arrivare a un indirizzo con i bagagli. Qui non trovate orari né tariffe.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Sei righe, e avete una risposta",
    body: "Volo, data, terminal, indirizzo, passeggeri, bagagli. Con questi dati la risposta può essere precisa invece che una forbice con dentro il margine di errore.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Malpensa", page: "malpensa" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Linate → Milan ───────────────────────────────────────────────────── */

const linMilanEn: RoutePage = {
  meta: {
    title: "Linate Airport to Milan",
    description:
      "The shortest of Milan's three airport runs, and why short does not reliably mean quick. What to send, and what the traffic zones do to the last part.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Linate Airport (LIN)",
    to: "Milan",
    eyebrow: "Route",
    h1: "Linate Airport to Milan",
    lead: "The shortest of the three, from the airport its own operator calls the city airport. The catch is in the word city.",
    primaryCta: "Request a quotation",
    secondaryCta: "About Linate",
    note: "No price and no journey time appear here. On this route in particular an average would be misleading: the same distance behaves completely differently at nine in the morning and at nine at night.",
  },
  lead: {
    id: "assumption",
    eyebrow: "The assumption",
    heading: "Short does not reliably mean quick",
    text: "It is the obvious conclusion about this route, and it is the one thing worth being careful about.",
    terms: [
      {
        term: "Both ends are in the city",
        detail:
          "Unlike a journey from Malpensa or Bergamo, this one does not spend most of its time on open road. It is a city journey from beginning to end, which means it is a traffic journey from beginning to end.",
      },
      {
        term: "The zones apply to the whole of it",
        detail:
          "Area B covers most of Milan and Area C sits inside it. A journey from Linate to a central address is inside the restricted area for almost all of its length, not just at the finish.",
      },
      {
        term: "The hours line up badly",
        detail:
          "Both zones run Monday to Friday, 07:30 to 19:30 — which is exactly when a business flight is most likely to land. The overlap is the rule rather than the exception here.",
      },
      {
        term: "What that means in practice",
        detail:
          "Not that the journey is difficult. Only that its length tells you less than its timing does, and that a deadline is a more useful thing to send than a distance.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where it starts, where it finishes",
    lead: "The airport end is genuinely simple here, which is the reverse of Malpensa.",
    from: {
      id: "lin",
      label: "Departure",
      name: "Linate Airport",
      page: "linate",
      linkText: "About Linate, and what proximity buys",
      items: [
        {
          term: "The building",
          detail:
            "Small by comparison with the other two, which makes finding someone straightforward. Nothing to confuse at the airport end.",
        },
        {
          term: "The time that matters",
          detail:
            "Usually not the flight's arrival but the meeting, the appointment or the return flight. Send that one.",
        },
        {
          term: "If you are connecting",
          detail:
            "Arriving here and departing from Malpensa is a journey across the whole metropolitan area. Treat it as a transfer in its own right.",
        },
      ],
    },
    to: {
      id: "milan",
      label: "Arrival",
      name: "A Milan address",
      page: "milan",
      linkText: "Area B, Area C and the districts",
      items: [
        {
          term: "The zone, and the hour",
          detail:
            "Both zones operate on weekdays from 07:30 to 19:30. Which of them your address is in, and whether you arrive inside those hours, matters more than the kilometres.",
        },
        {
          term: "The exact address",
          detail:
            "Street and number, and the district. Porta Nuova and CityLife behave quite differently from the Centro Storico.",
        },
        {
          term: "Where it really ends",
          detail:
            "For a central address, possibly a short walk from the door. Agreed in advance, that is a detail; discovered on arrival, it is a problem.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for a Linate journey",
    lead: "Shorter than the Malpensa list, because there is no terminal to specify.",
    items: [
      "The flight number and the date.",
      "The time that actually matters — the meeting, the appointment, the return flight.",
      "The full address at the other end, with the district.",
      "How many passengers, and how many are children.",
      "How many bags, hold and cabin.",
      "Whether there is a return leg the same day.",
    ],
    note: "Whether a car can wait, or be held for part of a day, is a different arrangement and is answered in the reply. Nothing here claims one in advance.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-mxp-milan",
        label: "Malpensa Airport to Milan",
        detail: "The same city end, from much further out.",
      },
      {
        page: "linate",
        label: "Linate Airport (LIN)",
        detail: "The airport in full.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "What governs the last part of any journey here.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about the clock rather than the map.",
    items: [
      {
        question: "Is this the quickest of the three airport transfers?",
        answer:
          "It is the shortest. Whether it is the quickest on your date and at your hour depends on the traffic and the address, because unlike the other two this journey is inside the city for nearly all of its length.",
      },
      {
        question: "Does the Area C charge affect my transfer?",
        answer:
          "Taxis and private-hire cars of up to nine seats are among the categories the city exempts from the charge when their plates are registered for limited-traffic zones. The practical constraint is the street, not the charge.",
      },
      {
        question: "I have a meeting at a fixed time. What should I send?",
        answer:
          "The meeting time and its address, as well as the flight. On this route the deadline is more useful than the distance, and an answer built around it is worth more than one built around an average.",
      },
      {
        question: "Can the same car take me back for an evening flight?",
        answer:
          "Send both legs in one request and it can be answered as one arrangement. Whether it can be offered for your date is settled in the reply.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Send the deadline, not just the flight",
    body: "The flight and date, the time you need to be somewhere, the address and district, and how many of you there are. On this route the clock does more work than the map.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Linate Airport", page: "linate" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const linMilanIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Linate a Milano",
    description:
      "La più breve delle tre tratte aeroportuali milanesi, e perché breve non significa affidabilmente rapida. Che cosa indicare e che cosa fanno le zone a traffico limitato all'ultimo tratto.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Linate (LIN)",
    to: "Milano",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Linate a Milano",
    lead: "La più breve delle tre, dall'aeroporto che il suo stesso gestore chiama «aeroporto cittadino». L'insidia sta proprio in quella parola.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto di Linate",
    note: "Qui non trovate né prezzi né durate. Su questa tratta in particolare una media sarebbe fuorviante: la stessa distanza si comporta in modo completamente diverso alle nove del mattino e alle nove di sera.",
  },
  lead: {
    id: "supposizione",
    eyebrow: "La supposizione",
    heading: "Breve non significa affidabilmente rapido",
    text: "È la conclusione ovvia su questa tratta, ed è l'unica cosa su cui valga la pena andare cauti.",
    terms: [
      {
        term: "Entrambi i capi sono in città",
        detail:
          "A differenza di un viaggio da Malpensa o da Bergamo, questo non passa la maggior parte del tempo su strade scorrevoli. È un viaggio urbano dall'inizio alla fine, quindi un viaggio nel traffico dall'inizio alla fine.",
      },
      {
        term: "Le zone riguardano tutto il percorso",
        detail:
          "Area B copre quasi tutta Milano e Area C sta al suo interno. Un tragitto da Linate a un indirizzo centrale resta dentro l'area regolamentata per quasi tutta la sua lunghezza, non solo all'arrivo.",
      },
      {
        term: "Gli orari coincidono male",
        detail:
          "Entrambe le zone sono attive dal lunedì al venerdì dalle 7.30 alle 19.30, cioè esattamente quando è più probabile che atterri un volo di lavoro. Qui la sovrapposizione è la regola, non l'eccezione.",
      },
      {
        term: "Che cosa significa in pratica",
        detail:
          "Non che il viaggio sia difficile. Solo che la sua lunghezza dice meno del suo orario, e che una scadenza è un dato più utile di una distanza.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia e dove finisce",
    lead: "Qui il capo aeroportuale è davvero semplice: l'opposto di Malpensa.",
    from: {
      id: "lin",
      label: "Partenza",
      name: "Aeroporto di Linate",
      page: "linate",
      linkText: "Linate, e che cosa dà la vicinanza",
      items: [
        {
          term: "L'edificio",
          detail:
            "Piccolo rispetto agli altri due, il che rende semplice ritrovarsi. Dal lato aeroporto non c'è nulla da confondere.",
        },
        {
          term: "L'orario che conta",
          detail:
            "Di solito non quello di arrivo del volo, ma la riunione, l'appuntamento o il volo di ritorno. Indicate quello.",
        },
        {
          term: "Se dovete fare scalo",
          detail:
            "Arrivare qui e ripartire da Malpensa è un viaggio attraverso tutta l'area metropolitana. Trattatelo come un transfer a sé.",
        },
      ],
    },
    to: {
      id: "milano",
      label: "Arrivo",
      name: "Un indirizzo a Milano",
      page: "milan",
      linkText: "Area B, Area C e i quartieri",
      items: [
        {
          term: "La zona, e l'ora",
          detail:
            "Entrambe le zone sono attive nei giorni feriali dalle 7.30 alle 19.30. In quale si trovi il vostro indirizzo, e se arrivate dentro quella fascia, conta più dei chilometri.",
        },
        {
          term: "L'indirizzo esatto",
          detail:
            "Via, numero civico e quartiere. Porta Nuova e CityLife si comportano in modo molto diverso dal centro storico.",
        },
        {
          term: "Dove finisce davvero",
          detail:
            "Per un indirizzo centrale, forse a pochi passi dal portone. Concordato prima è un dettaglio; scoperto all'arrivo è un problema.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per un viaggio da Linate",
    lead: "L'elenco è più breve di quello di Malpensa, perché non c'è alcun terminal da specificare.",
    items: [
      "Numero del volo e data.",
      "L'orario che conta davvero: la riunione, l'appuntamento, il volo di ritorno.",
      "L'indirizzo completo di arrivo, con il quartiere.",
      "Quanti passeggeri e quanti di loro sono bambini.",
      "Quanti bagagli, da stiva e a mano.",
      "Se è previsto un ritorno in giornata.",
    ],
    note: "Se un'auto possa attendere, o restare a disposizione per parte della giornata, è un'organizzazione diversa e lo dice la risposta. Qui non viene dichiarata in anticipo.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-mxp-milan",
        label: "Dall'aeroporto di Malpensa a Milano",
        detail: "Lo stesso capo cittadino, da molto più lontano.",
      },
      {
        page: "linate",
        label: "Aeroporto di Linate (LIN)",
        detail: "L'aeroporto per esteso.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Che cosa governa l'ultimo tratto di qualsiasi viaggio qui.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Riguardano più l'orologio che la cartina.",
    items: [
      {
        question: "È il più rapido dei tre transfer aeroportuali?",
        answer:
          "È il più breve. Se sia anche il più rapido nella vostra data e alla vostra ora dipende dal traffico e dall'indirizzo, perché a differenza degli altri due questo viaggio è dentro la città per quasi tutta la sua lunghezza.",
      },
      {
        question: "Il ticket di Area C incide sul mio transfer?",
        answer:
          "Taxi e NCC fino a nove posti rientrano fra le categorie che il Comune esenta dal pagamento quando la targa è registrata per le ZTL. Il vincolo concreto è la strada, non il ticket.",
      },
      {
        question: "Ho una riunione a un'ora fissa. Che cosa devo indicare?",
        answer:
          "L'ora della riunione e il suo indirizzo, oltre al volo. Su questa tratta la scadenza è più utile della distanza, e una risposta costruita su quella vale più di una costruita su una media.",
      },
      {
        question: "La stessa auto può riportarmi per un volo serale?",
        answer:
          "Indicate entrambe le tratte in un'unica richiesta e si potrà rispondere come a un'organizzazione sola. Se sia possibile nella vostra data lo dirà la risposta.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Indicate la scadenza, non solo il volo",
    body: "Volo e data, l'ora in cui dovete essere da qualche parte, indirizzo e quartiere, e quante persone siete. Su questa tratta l'orologio lavora più della cartina.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Linate", page: "linate" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Bergamo → Milan ──────────────────────────────────────────────────── */

const bgyMilanEn: RoutePage = {
  meta: {
    title: "Bergamo Airport to Milan",
    description:
      "About fifty kilometres, from an airport in a different province. What that distance means in practice, and what a quotation needs to know.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Bergamo Airport (BGY)",
    to: "Milan",
    eyebrow: "Route",
    h1: "Bergamo Airport to Milan",
    lead: "This is the journey the airport's name does not prepare you for. It carries Milan's name and stands about fifty kilometres away, in the province of Bergamo.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price and no journey time appear here. The distance is the local authority's published figure; what it takes to drive depends on the hour, the traffic and the address at the other end.",
  },
  lead: {
    id: "scale",
    eyebrow: "The comparison",
    heading: "Fifty kilometres, in context",
    text: "Set beside the other two Milan airports, the scale of this journey is easier to take seriously.",
    columns: [
      {
        id: "bgy",
        heading: "From Bergamo Airport",
        subheading: "About 50 km, and a different province",
        rows: [
          {
            term: "What the journey is",
            detail:
              "A crossing of most of the province, then Milan's traffic zones at the other end. A full leg of the trip rather than an afterthought to the flight.",
          },
          {
            term: "What it is not",
            detail:
              "A short hop from a Milan airport. Nothing about the airport's name prepares anyone for this, which is why the page says it plainly.",
          },
          {
            term: "Worth asking first",
            detail:
              "Whether Milan is genuinely where you need to be. Bergamo is about 5 km from the same airport.",
          },
        ],
      },
      {
        id: "others",
        heading: "From the other two",
        subheading: "Both inside the Milan metropolitan area",
        rows: [
          {
            term: "Linate",
            detail:
              "The city airport — the closest of the three, and a city journey from end to end.",
          },
          {
            term: "Malpensa",
            detail:
              "North-west of Milan in the province of Varese, and the country's principal intercontinental gateway.",
          },
          {
            term: "Why the comparison helps",
            detail:
              "Because all three are sold as Milan, and only the distances tell you how differently they behave.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where it starts, where it finishes",
    lead: "A long first half and a congested second one.",
    from: {
      id: "bgy",
      label: "Departure",
      name: "Bergamo Airport",
      page: "bergamo-airport",
      linkText: "Where the airport actually is",
      items: [
        {
          term: "The building",
          detail:
            "A single passenger operation at Orio al Serio, in the province of Bergamo, operated by SACBO rather than by SEA.",
        },
        {
          term: "The hour",
          detail:
            "Schedules here are weighted to the start and end of the day. Say the time plainly: it is often the detail that shapes the request.",
        },
        {
          term: "What to send",
          detail:
            "Flight number, date and scheduled arrival time.",
        },
      ],
    },
    to: {
      id: "milan",
      label: "Arrival",
      name: "A Milan address",
      page: "milan",
      linkText: "Area B, Area C and the districts",
      items: [
        {
          term: "The zones",
          detail:
            "Area B over most of the city, Area C around the historic centre inside it, both on weekdays from 07:30 to 19:30. The long drive ends in the same restrictions as a short one.",
        },
        {
          term: "The exact address",
          detail:
            "Street, number and district. After fifty kilometres the last two hundred metres still decide where the car can stop.",
        },
        {
          term: "Or somewhere else entirely",
          detail:
            "If your destination is east of Milan, say so — the airport may be far closer to it than Milan is.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for this journey",
    lead: "The last item is the one people forget, and on this route it changes the answer most.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time, stated explicitly if it is late at night or before dawn.",
      "The full destination address, with the district.",
      "How many passengers and how much luggage.",
      "Whether anyone in the party has a fixed commitment on arrival.",
      "Whether Milan is actually the destination, or whether somewhere nearer the airport would do.",
    ],
    note: "What can be arranged at an unusual hour is answered in the reply. Nothing on this site claims a service that runs around the clock.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "bergamo-airport",
        label: "Bergamo Airport (BGY)",
        detail: "Where it is, who runs it, and what the distance changes.",
      },
      {
        page: "route-mxp-milan",
        label: "Malpensa Airport to Milan",
        detail: "The same destination from the other direction.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "What waits at the city end.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Asked mostly in the arrivals hall, which is later than ideal.",
    items: [
      {
        question: "How far is it really?",
        answer:
          "The airport is about 50 km from Milan and about 5 km from Bergamo, in the province of Bergamo. Those figures are the local tourism authority's. How long the drive takes depends on the hour, the traffic and the address.",
      },
      {
        question: "Why is the airport called Milan Bergamo if it is this far?",
        answer:
          "Because it serves Milan commercially as a third airport for the metropolitan area. Its official name is Il Caravaggio International Airport and it is operated by SACBO, a different company from the one running Malpensa and Linate.",
      },
      {
        question: "Is there a train I could take instead?",
        answer:
          "A rail link towards Milan has been reported but has no confirmed opening in the sources checked here, so this page will not suggest planning around one. Check the airport and the rail operator for the current position.",
      },
      {
        question: "Would it be better to stay in Bergamo?",
        answer:
          "Possibly, and it is worth asking before arranging the longer journey. Bergamo is a city in its own right and is a tenth of the distance from the airport.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Say where you are really going",
    body: "The flight and its time, and the full address at the other end — Milan, Bergamo, or somewhere else. From this airport the destination does more work than usual.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Bergamo Airport", page: "bergamo-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const bgyMilanIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Bergamo a Milano",
    description:
      "Circa cinquanta chilometri, da un aeroporto in un'altra provincia. Che cosa comporta in pratica quella distanza e che cosa serve per un preventivo.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Bergamo (BGY)",
    to: "Milano",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Bergamo a Milano",
    lead: "È il viaggio a cui il nome dell'aeroporto non prepara. Porta il nome di Milano e si trova a circa cinquanta chilometri, in provincia di Bergamo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto",
    note: "Qui non trovate né prezzi né durate. La distanza è quella pubblicata dall'ente locale; quanto tempo richieda in auto dipende dall'ora, dal traffico e dall'indirizzo di arrivo.",
  },
  lead: {
    id: "scala",
    eyebrow: "Il confronto",
    heading: "Cinquanta chilometri, in prospettiva",
    text: "Messa accanto agli altri due aeroporti milanesi, la portata di questo viaggio si prende più sul serio.",
    columns: [
      {
        id: "bgy",
        heading: "Dall'aeroporto di Bergamo",
        subheading: "Circa 50 km, e un'altra provincia",
        rows: [
          {
            term: "Che viaggio è",
            detail:
              "Si attraversa buona parte della provincia e all'arrivo si incontrano le zone a traffico limitato di Milano. È una tappa vera, non un'appendice del volo.",
          },
          {
            term: "Che viaggio non è",
            detail:
              "Un salto breve da un aeroporto milanese. Il nome dell'aeroporto non prepara nessuno a questo, ed è il motivo per cui la pagina lo dice chiaramente.",
          },
          {
            term: "Da chiedersi prima",
            detail:
              "Se Milano sia davvero dove dovete andare. Bergamo dista dallo stesso aeroporto circa 5 km.",
          },
        ],
      },
      {
        id: "altri",
        heading: "Dagli altri due",
        subheading: "Entrambi nell'area metropolitana milanese",
        rows: [
          {
            term: "Linate",
            detail:
              "L'aeroporto cittadino: il più vicino dei tre, e un viaggio urbano da un capo all'altro.",
          },
          {
            term: "Malpensa",
            detail:
              "A nord-ovest di Milano, in provincia di Varese, ed è il principale scalo intercontinentale del Paese.",
          },
          {
            term: "Perché il confronto aiuta",
            detail:
              "Perché tutti e tre vengono venduti come «Milano», e solo le distanze dicono quanto diversamente si comportino.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia e dove finisce",
    lead: "Una prima metà lunga e una seconda congestionata.",
    from: {
      id: "bgy",
      label: "Partenza",
      name: "Aeroporto di Bergamo",
      page: "bergamo-airport",
      linkText: "Dove si trova davvero l'aeroporto",
      items: [
        {
          term: "L'edificio",
          detail:
            "Un'unica struttura passeggeri a Orio al Serio, in provincia di Bergamo, gestita da SACBO e non da SEA.",
        },
        {
          term: "L'ora",
          detail:
            "Qui gli orari sono concentrati all'inizio e alla fine della giornata. Indicatela con chiarezza: spesso è il dato che dà forma alla richiesta.",
        },
        {
          term: "Che cosa indicare",
          detail: "Numero del volo, data e orario di arrivo previsto.",
        },
      ],
    },
    to: {
      id: "milano",
      label: "Arrivo",
      name: "Un indirizzo a Milano",
      page: "milan",
      linkText: "Area B, Area C e i quartieri",
      items: [
        {
          term: "Le zone",
          detail:
            "Area B su quasi tutta la città, Area C al suo interno attorno al centro storico, entrambe nei feriali dalle 7.30 alle 19.30. Il tragitto lungo finisce nelle stesse limitazioni di uno breve.",
        },
        {
          term: "L'indirizzo esatto",
          detail:
            "Via, numero civico e quartiere. Dopo cinquanta chilometri sono ancora gli ultimi duecento metri a stabilire dove l'auto possa fermarsi.",
        },
        {
          term: "O tutt'altra destinazione",
          detail:
            "Se dovete andare a est di Milano, segnalatelo: l'aeroporto potrebbe essere molto più vicino di Milano alla vostra meta.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per questa tratta",
    lead: "L'ultima voce è quella che si dimentica, e su questa tratta è quella che cambia di più la risposta.",
    items: [
      "Numero del volo e data.",
      "L'orario di arrivo previsto, detto esplicitamente se è notturno o prima dell'alba.",
      "L'indirizzo completo di destinazione, con il quartiere.",
      "Quanti passeggeri e quanti bagagli.",
      "Se qualcuno del gruppo ha un impegno a orario fisso appena arrivato.",
      "Se la destinazione sia davvero Milano o se andrebbe bene un posto più vicino all'aeroporto.",
    ],
    note: "Che cosa sia organizzabile a un'ora inconsueta ve lo dice la risposta. Nessuna pagina di questo sito dichiara un servizio attivo ventiquattr'ore su ventiquattro.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "bergamo-airport",
        label: "Aeroporto di Bergamo (BGY)",
        detail: "Dov'è, chi lo gestisce e che cosa comporta la distanza.",
      },
      {
        page: "route-mxp-milan",
        label: "Dall'aeroporto di Malpensa a Milano",
        detail: "La stessa destinazione dalla direzione opposta.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Che cosa vi aspetta dal lato città.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Se le pone soprattutto chi è già in sala arrivi, che è un po' tardi.",
    items: [
      {
        question: "Quanto dista davvero?",
        answer:
          "L'aeroporto si trova a circa 50 km da Milano e a circa 5 km da Bergamo, in provincia di Bergamo. Le cifre sono quelle pubblicate dall'ente turistico locale. Quanto duri il tragitto dipende dall'ora, dal traffico e dall'indirizzo.",
      },
      {
        question: "Perché si chiama Milano Bergamo se è così lontano?",
        answer:
          "Perché serve commercialmente Milano come terzo scalo dell'area metropolitana. La denominazione ufficiale è Il Caravaggio International Airport ed è gestito da SACBO, società diversa da quella che gestisce Malpensa e Linate.",
      },
      {
        question: "C'è un treno che potrei prendere?",
        answer:
          "Un collegamento ferroviario verso Milano è stato annunciato ma, nelle fonti qui consultate, non ha una data di apertura confermata: questa pagina non suggerisce di organizzarsi su quello. Verificate la situazione sul sito dell'aeroporto e dell'operatore ferroviario.",
      },
      {
        question: "Converrebbe fermarsi a Bergamo?",
        answer:
          "Forse, e vale la pena chiederselo prima di organizzare il tragitto lungo. Bergamo è una città a sé e dista dall'aeroporto un decimo della strada.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Dite dove state andando davvero",
    body: "Il volo con il suo orario e l'indirizzo completo di arrivo: Milano, Bergamo o altro. Da questo aeroporto la destinazione fa più lavoro del solito.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "L'aeroporto di Bergamo",
      page: "bergamo-airport",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Malpensa → Lake Como ─────────────────────────────────────────────── */

const mxpComoEn: RoutePage = {
  meta: {
    title: "Malpensa Airport to Lake Como",
    description:
      "The lake is north of the airport and Milan is not on the way. Which town you name decides the road — and no boat is included.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Malpensa Airport (MXP)",
    to: "Lake Como",
    eyebrow: "Route",
    h1: "Malpensa Airport to Lake Como",
    lead: "Not everyone who lands at Malpensa is going to Milan. The lake lies north of the airport and the city is not on the way — but “Lake Como” is not yet a destination either.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the lake",
    note: "No price, distance or duration appears here, and no boat is included in a road transfer. Both of those are set out properly on the lake page.",
  },
  lead: {
    id: "fork",
    eyebrow: "The fork",
    heading: "One airport, several different drives",
    text: "The journey divides the moment you name a town, because the lake has three arms and a road has to follow one of them.",
    terms: [
      {
        term: "Como",
        detail:
          "At the southern tip of the western branch, and the closest of the lake towns to the airport. The simplest of these drives, and a working city at the end of it rather than a village.",
      },
      {
        term: "Menaggio and Tremezzina",
        detail:
          "Up the western shore, which is the side of the lake nearer the airport. Tremezzina is a municipality of several villages rather than one centre, so name the one you want.",
      },
      {
        term: "Bellagio",
        detail:
          "On the headland between the two southern arms. Reaching it by road means following a shore all the way up and round, so it is usually further in time than it looks on a map.",
      },
      {
        term: "Varenna",
        detail:
          "On the eastern shore, facing Bellagio across the water. A different side of the lake entirely, and therefore a different drive from the airport.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A terminal, and a town you have to name",
    lead: "The airport end is the familiar one. The other end is the one this page exists for.",
    from: {
      id: "mxp",
      label: "Departure",
      name: "Malpensa Airport",
      page: "malpensa",
      linkText: "Terminals, timings and what to send",
      items: [
        {
          term: "The terminal",
          detail:
            "Terminal 1 and Terminal 2 are separate buildings. Send which one, from your boarding pass.",
        },
        {
          term: "The arrival gap",
          detail:
            "Long-haul arrivals clear passport control and the baggage belt before anyone appears. Landing time is not arrival time.",
        },
        {
          term: "Why this airport",
          detail:
            "It sits north-west of Milan and the lake is north of that, so for lake-bound travellers the city is a detour rather than a stop.",
        },
      ],
    },
    to: {
      id: "lake",
      label: "Arrival",
      name: "A town on the lake",
      page: "lake-como",
      linkText: "The towns, the branches and the ferries",
      items: [
        {
          term: "The town, not the lake",
          detail:
            "About fifty kilometres of shoreline on three arms. Como, Bellagio, Varenna, Menaggio and Tremezzina are genuinely different journeys.",
        },
        {
          term: "The address within it",
          detail:
            "A villa or hotel name helps, and so does anything unusual about the access — a steep private drive, a restricted lane, or no road at all.",
        },
        {
          term: "No boat is included",
          detail:
            "A road transfer is by road. The lake's public ferry service is a separate arrangement with its operator unless something else is explicitly agreed.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for this journey",
    lead: "The first two items are the ones that make it answerable at all.",
    items: [
      "The town on the lake — and the address or property name within it.",
      "The flight number, date, scheduled arrival time and terminal.",
      "How many passengers and how much luggage.",
      "Anything unusual about the property's access.",
      "Whether you expect any part of the journey to involve a boat, so it can be answered clearly.",
      "Whether anyone else in the party is arriving separately.",
    ],
    note: "Whether a particular journey can be arranged for your date, and in what vehicle, is answered in the reply. Nothing here is an offer of a boat, a guide or a lake excursion.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "lake-como",
        label: "Lake Como",
        detail: "The towns, the three arms of water, and the ferries.",
      },
      {
        page: "route-mxp-milan",
        label: "Malpensa Airport to Milan",
        detail: "Into the city instead.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "If the lake is one end of a longer stay.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Nearly all of them resolve into the same question: which town?",
    items: [
      {
        question: "Can you take me from Malpensa to Lake Como?",
        answer:
          "To a town on it, yes. Name the town, though, because Como, Bellagio, Varenna, Menaggio and Tremezzina are different drives on different shores.",
      },
      {
        question: "Is Milan on the way?",
        answer:
          "No. The airport is north-west of Milan and the lake is north of the airport, so going via the city would be a detour. If you want to stop in Milan, say so and it becomes a different request.",
      },
      {
        question: "Is a ferry crossing part of the transfer?",
        answer:
          "No. A road transfer is by road. The lake's public navigation service is run by Navigazione Laghi and is a separate arrangement with them, unless something different is explicitly agreed.",
      },
      {
        question: "How long does it take?",
        answer:
          "It depends on which town, which shore and what hour, and no figure here would hold for all of them. That is exactly what a quotation for your own town and date is for.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Name the town, and the flight",
    body: "Those two together make this answerable. Add the address, the time and the party, and the reply can be about your journey rather than about the lake in general.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Lake Como", page: "lake-como" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const mxpComoIt: RoutePage = {
  meta: {
    title: "Da Malpensa al Lago di Como",
    description:
      "Il lago è a nord dell'aeroporto e Milano non è sulla strada. Il paese che indicate determina il percorso — e nessun battello è compreso.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Malpensa (MXP)",
    to: "Lago di Como",
    eyebrow: "Tratta",
    h1: "Da Malpensa al Lago di Como",
    lead: "Non tutti quelli che atterrano a Malpensa vanno a Milano. Il lago si trova a nord dell'aeroporto e la città non è sulla strada — ma nemmeno «Lago di Como» è ancora una destinazione.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il lago",
    note: "Qui non trovate prezzi, distanze o durate, e nessun battello è compreso in un transfer su strada. Entrambe le cose sono spiegate per esteso nella pagina del lago.",
  },
  lead: {
    id: "bivio",
    eyebrow: "Il bivio",
    heading: "Un aeroporto, diversi percorsi",
    text: "Il viaggio si divide nel momento in cui indicate un paese, perché il lago ha tre rami e una strada deve seguirne uno.",
    terms: [
      {
        term: "Como",
        detail:
          "All'estremità sud del ramo occidentale, ed è il paese del lago più vicino all'aeroporto. Il più semplice di questi tragitti, con una città vera all'arrivo e non un borgo.",
      },
      {
        term: "Menaggio e Tremezzina",
        detail:
          "Risalendo la sponda occidentale, che è il lato del lago più vicino all'aeroporto. Tremezzina è un comune di più frazioni e non un centro unico: indicate quella giusta.",
      },
      {
        term: "Bellagio",
        detail:
          "Sul promontorio fra i due rami meridionali. Arrivarci in auto significa risalire una sponda per intero e girare: in tempo è quasi sempre più lontana di quanto sembri sulla cartina.",
      },
      {
        term: "Varenna",
        detail:
          "Sulla sponda orientale, di fronte a Bellagio dall'altra parte dell'acqua. Un altro lato del lago, e quindi un altro percorso dall'aeroporto.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Un terminal e un paese da indicare",
    lead: "Il capo aeroportuale è quello consueto. L'altro è il motivo per cui questa pagina esiste.",
    from: {
      id: "mxp",
      label: "Partenza",
      name: "Aeroporto di Malpensa",
      page: "malpensa",
      linkText: "Terminal, tempi e che cosa indicare",
      items: [
        {
          term: "Il terminal",
          detail:
            "Terminal 1 e Terminal 2 sono edifici separati. Indicate quale, leggendolo dalla carta d'imbarco.",
        },
        {
          term: "L'intervallo all'arrivo",
          detail:
            "Chi arriva dal lungo raggio passa il controllo passaporti e il nastro bagagli prima di uscire. L'orario di atterraggio non è quello di uscita.",
        },
        {
          term: "Perché proprio questo aeroporto",
          detail:
            "Si trova a nord-ovest di Milano e il lago è più a nord: per chi è diretto al lago la città è una deviazione, non una tappa.",
        },
      ],
    },
    to: {
      id: "lago",
      label: "Arrivo",
      name: "Un paese sul lago",
      page: "lake-como",
      linkText: "I paesi, i rami e i traghetti",
      items: [
        {
          term: "Il paese, non il lago",
          detail:
            "Una cinquantina di chilometri di riva su tre rami. Como, Bellagio, Varenna, Menaggio e Tremezzina sono viaggi davvero diversi.",
        },
        {
          term: "L'indirizzo all'interno",
          detail:
            "Il nome della villa o dell'hotel aiuta, e aiuta anche qualsiasi particolarità dell'accesso: una rampa privata ripida, una stradina a traffico limitato o l'assenza di strada.",
        },
        {
          term: "Nessun battello compreso",
          detail:
            "Un transfer su strada avviene su strada. Il servizio pubblico di navigazione del lago è un'organizzazione separata con il suo operatore, salvo accordi espliciti diversi.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per questa tratta",
    lead: "Le prime due voci sono quelle che la rendono valutabile.",
    items: [
      "Il paese sul lago — e l'indirizzo o il nome della struttura.",
      "Numero del volo, data, orario di arrivo previsto e terminal.",
      "Quanti passeggeri e quanti bagagli.",
      "Qualsiasi particolarità dell'accesso alla struttura.",
      "Se vi aspettate che una parte del viaggio avvenga in battello, così da avere una risposta chiara.",
      "Se qualcun altro del gruppo arriva separatamente.",
    ],
    note: "Se un determinato viaggio sia organizzabile per la vostra data, e con quale veicolo, lo dice la risposta. Nulla qui è un'offerta di battelli, guide o escursioni sul lago.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "lake-como",
        label: "Lago di Como",
        detail: "I paesi, i tre rami d'acqua e i traghetti.",
      },
      {
        page: "route-mxp-milan",
        label: "Dall'aeroporto di Malpensa a Milano",
        detail: "Verso la città, invece.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Se il lago è un capo di un soggiorno più lungo.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Quasi tutte si riducono alla stessa domanda: quale paese?",
    items: [
      {
        question: "Mi portate da Malpensa al Lago di Como?",
        answer:
          "In un paese del lago, sì. Indicate però quale, perché Como, Bellagio, Varenna, Menaggio e Tremezzina sono percorsi diversi su sponde diverse.",
      },
      {
        question: "Milano è sulla strada?",
        answer:
          "No. L'aeroporto è a nord-ovest di Milano e il lago è a nord dell'aeroporto: passare dalla città sarebbe una deviazione. Se volete fermarvi a Milano, segnalatelo: diventa un'altra richiesta.",
      },
      {
        question: "La traversata in traghetto fa parte del transfer?",
        answer:
          "No. Un transfer su strada avviene su strada. Il servizio pubblico di navigazione del lago è gestito da Navigazione Laghi ed è un'organizzazione separata con loro, salvo accordi espliciti diversi.",
      },
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Dipende da quale paese, da quale sponda e da che ora, e nessuna cifra qui varrebbe per tutti i casi. È esattamente a questo che serve un preventivo per il vostro paese e la vostra data.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Indicate il paese e il volo",
    body: "Questi due dati insieme rendono valutabile la richiesta. Aggiungete indirizzo, orario e numero di persone, e la risposta potrà parlare del vostro viaggio invece che del lago in generale.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Il Lago di Como", page: "lake-como" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeMxpMilan: Record<Locale, RoutePage> = {
  en: mxpMilanEn,
  it: mxpMilanIt,
};
export const routeLinMilan: Record<Locale, RoutePage> = {
  en: linMilanEn,
  it: linMilanIt,
};
export const routeBgyMilan: Record<Locale, RoutePage> = {
  en: bgyMilanEn,
  it: bgyMilanIt,
};
export const routeMxpComo: Record<Locale, RoutePage> = {
  en: mxpComoEn,
  it: mxpComoIt,
};
