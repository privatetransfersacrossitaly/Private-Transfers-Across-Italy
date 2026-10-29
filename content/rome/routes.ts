import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The four route pages.
 *
 * They share a page type, which is legitimate — they answer the same kind of
 * question. What they must not share is a shape, so each one is led by a
 * different module and the leading module is the one its own journey actually
 * needs:
 *
 * - Fiumicino → Rome: no lead module. The two endpoints are the content, and
 *   the page puts them first precisely because the city end is the hard half.
 * - Ciampino → Rome: a difference panel, because the question behind the
 *   search is "how is this unlike the other airport?".
 * - Rome → Civitavecchia: a countdown, because a sailing day is governed by a
 *   deadline rather than by a distance.
 * - Fiumicino → Civitavecchia: a fork, because the page exists to help
 *   somebody choose between two plans.
 *
 * No page states a price, a duration or a distance beyond the two figures
 * their operators publish. See `docs/rome-research-log.md`.
 */

/* ── Fiumicino → Rome ─────────────────────────────────────────────────── */

const fcoRomeEn: RoutePage = {
  meta: {
    title: "Fiumicino Airport to Rome",
    description:
      "What a quotation for the Fiumicino run actually needs: the terminal at one end, the address and its traffic restrictions at the other, and the things that genuinely change the price.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Fiumicino Airport (FCO)",
    to: "Rome",
    eyebrow: "Route",
    h1: "Fiumicino Airport to Rome",
    lead: "The most asked-about transfer in Rome — and the one where almost all the difficulty sits at the city end rather than the airport end.",
    primaryCta: "Request a quotation",
    secondaryCta: "About Fiumicino",
    note: "No price and no journey time appear on this page. The operator gives the airport as about 32 km south-west of Rome; everything beyond that depends on your terminal, your address and your hour.",
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Two endpoints, two different problems",
    lead: "They are not symmetrical, and the second is the harder one.",
    from: {
      id: "fco",
      label: "Departure",
      name: "Fiumicino Airport",
      page: "fiumicino",
      linkText: "Terminals, timings and what to send",
      items: [
        {
          term: "The terminal",
          detail:
            "Terminal 1 for mainly domestic and Schengen flights, Terminal 3 for extra-Schengen and intercontinental. The operator asks passengers to confirm it rather than assume it.",
        },
        {
          term: "When you actually emerge",
          detail:
            "Landing time is not arrival time. Taxiing, passport control and the baggage belt all sit between them.",
        },
        {
          term: "What to send",
          detail:
            "Flight number, date, the scheduled arrival time and the terminal.",
        },
      ],
    },
    to: {
      id: "rome",
      label: "Arrival",
      name: "A Rome address",
      page: "rome",
      linkText: "Access and districts across Rome",
      items: [
        {
          term: "The street",
          detail:
            "Much of the centre is a limited-traffic zone. Taxis and cars for hire with driver are among the permitted categories, but no permit widens a narrow lane.",
        },
        {
          term: "The exact address",
          detail:
            "A hotel's name is not an address. Give the street and number, and the district if you know it.",
        },
        {
          term: "What to expect",
          detail:
            "Inside the historic centre, a meeting point a short walk from the door — agreed in advance — is often the workable answer.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What a quotation for this journey needs",
    lead: "Six lines in an email are enough to turn a guess into an answer.",
    items: [
      "The flight number and date, not just the airline.",
      "The terminal, from the boarding pass.",
      "The full destination address, with the hotel's name if it is a hotel.",
      "How many passengers, and how many are children.",
      "How many hold bags and how many cabin bags.",
      "Anything bulky: a pushchair, skis, golf clubs, a wheelchair.",
    ],
    note: "Whether a specific vehicle, a child seat or an accessible vehicle can be provided is answered in the reply, not promised here.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia cruise port",
        detail: "The same airport, a very different second half.",
      },
      {
        page: "route-cia-rome",
        label: "Ciampino Airport to Rome",
        detail: "If you are still choosing between flights.",
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
    heading: "About this journey",
    lead: "Including the two questions this page deliberately will not answer with a number.",
    items: [
      {
        question: "How long does the journey take?",
        answer:
          "That cannot be answered honestly from a web page. The operator places the airport about 32 km south-west of Rome; what that means in minutes depends on the hour, the traffic and the address at the other end. A quotation for your own date and time can give a realistic expectation.",
      },
      {
        question: "What does it cost?",
        answer:
          "It depends on the address, the hour, how many of you there are and the vehicle that suits you. No fixed fare is published here, because a fare that ignored those things would be either wrong or padded to cover being wrong.",
      },
      {
        question: "Which terminal should I give?",
        answer:
          "The one printed on your boarding pass. Allocation at Fiumicino varies by airline and destination, and the operator asks passengers to check the boarding pass, the airline's messages and the airport monitors.",
      },
      {
        question: "Can the car take me into the historic centre?",
        answer:
          "Usually, as far as the street allows. Taxis and cars for hire with driver are among the categories permitted in Rome's limited-traffic zones, but a permitted vehicle still cannot drive where there is no road width. The practical meeting point is worth agreeing when the journey is arranged.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Six lines, and you have an answer",
    body: "Flight, date, terminal, address, passengers, luggage. Send those and the reply can be specific rather than a range with the risk priced into it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Fiumicino Airport", page: "fiumicino" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const fcoRomeIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Fiumicino a Roma",
    description:
      "Che cosa serve davvero per un preventivo sulla tratta da Fiumicino: il terminal da una parte, l'indirizzo e le sue limitazioni al traffico dall'altra, e ciò che fa variare il prezzo.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Fiumicino (FCO)",
    to: "Roma",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Fiumicino a Roma",
    lead: "È il transfer più richiesto a Roma, ed è quello in cui quasi tutta la difficoltà sta dal lato città, non dal lato aeroporto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto di Fiumicino",
    note: "In questa pagina non ci sono né prezzi né tempi di percorrenza. Il gestore colloca l'aeroporto a circa 32 km a sud-ovest di Roma; tutto il resto dipende dal vostro terminal, dal vostro indirizzo e dalla vostra ora.",
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Due estremi, due problemi diversi",
    lead: "Non sono simmetrici, e il secondo è il più complicato.",
    from: {
      id: "fco",
      label: "Partenza",
      name: "Aeroporto di Fiumicino",
      page: "fiumicino",
      linkText: "Terminal, tempi e che cosa indicare",
      items: [
        {
          term: "Il terminal",
          detail:
            "Terminal 1 soprattutto per voli nazionali e Schengen, Terminal 3 per extra Schengen e intercontinentali. Il gestore invita a verificarlo, non a presumerlo.",
        },
        {
          term: "Quando uscite davvero",
          detail:
            "L'orario di atterraggio non è l'orario di uscita: in mezzo ci sono rullaggio, controllo passaporti e nastro bagagli.",
        },
        {
          term: "Che cosa indicare",
          detail:
            "Numero del volo, data, orario di arrivo previsto e terminal.",
        },
      ],
    },
    to: {
      id: "roma",
      label: "Arrivo",
      name: "Un indirizzo a Roma",
      page: "rome",
      linkText: "Accessi e quartieri di Roma",
      items: [
        {
          term: "La strada",
          detail:
            "Buona parte del centro è zona a traffico limitato. Taxi e auto a noleggio con conducente rientrano fra le categorie ammesse, ma nessun permesso allarga un vicolo.",
        },
        {
          term: "L'indirizzo esatto",
          detail:
            "Il nome di un hotel non è un indirizzo. Indicate via e numero civico, e il quartiere se lo conoscete.",
        },
        {
          term: "Che cosa aspettarsi",
          detail:
            "In centro storico la soluzione praticabile è spesso un punto d'incontro a pochi passi dal portone, concordato in anticipo.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa serve per un preventivo su questa tratta",
    lead: "Sei righe in una mail bastano a trasformare una stima in una risposta.",
    items: [
      "Numero del volo e data, non la sola compagnia.",
      "Il terminal, come riportato sulla carta d'imbarco.",
      "L'indirizzo completo di destinazione, con il nome dell'hotel se è un hotel.",
      "Quanti passeggeri e quanti di loro sono bambini.",
      "Quanti bagagli da stiva e quanti a mano.",
      "Eventuali ingombri: passeggino, sci, sacca da golf, carrozzina.",
    ],
    note: "Se sia disponibile un veicolo specifico, un seggiolino o un mezzo accessibile lo dice la risposta: qui non viene promesso.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-fco-civitavecchia",
        label: "Da Fiumicino al porto di Civitavecchia",
        detail: "Stesso aeroporto, seconda metà molto diversa.",
      },
      {
        page: "route-cia-rome",
        label: "Dall'aeroporto di Ciampino a Roma",
        detail: "Se state ancora scegliendo fra i voli.",
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
    heading: "Su questa tratta",
    lead: "Comprese le due domande a cui questa pagina, deliberatamente, non risponde con un numero.",
    items: [
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non si può rispondere onestamente da una pagina web. Il gestore colloca l'aeroporto a circa 32 km a sud-ovest di Roma; che cosa significhi in minuti dipende dall'ora, dal traffico e dall'indirizzo di arrivo. Un preventivo per la vostra data e il vostro orario può darvi un'aspettativa realistica.",
      },
      {
        question: "Quanto costa?",
        answer:
          "Dipende dall'indirizzo, dall'ora, da quante persone siete e dal veicolo adatto. Qui non viene pubblicata una tariffa fissa, perché una tariffa che ignorasse quei fattori sarebbe sbagliata, oppure gonfiata per coprire l'errore.",
      },
      {
        question: "Quale terminal devo indicare?",
        answer:
          "Quello riportato sulla carta d'imbarco. A Fiumicino l'assegnazione varia per compagnia e destinazione, e il gestore invita a controllare carta d'imbarco, comunicazioni della compagnia e monitor informativi.",
      },
      {
        question: "L'auto può portarmi in centro storico?",
        answer:
          "Di norma sì, fin dove la strada lo consente. Taxi e NCC rientrano fra le categorie ammesse nelle ZTL di Roma, ma un veicolo ammesso non può comunque passare dove non c'è larghezza. Il punto d'incontro concreto conviene concordarlo quando si organizza il viaggio.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Sei righe, e avete una risposta",
    body: "Volo, data, terminal, indirizzo, passeggeri, bagagli. Con questi dati la risposta può essere precisa invece che una forbice con dentro il margine di errore.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Fiumicino", page: "fiumicino" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Ciampino → Rome ──────────────────────────────────────────────────── */

const ciaRomeEn: RoutePage = {
  meta: {
    title: "Ciampino Airport to Rome",
    description:
      "The shorter of the two Rome airport runs, and what is genuinely different about it: the hours, the single passenger building, and why closer does not mean quicker.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Ciampino Airport (CIA)",
    to: "Rome",
    eyebrow: "Route",
    h1: "Ciampino Airport to Rome",
    lead: "Half the distance of the Fiumicino run and a fraction of the airport, but not simply a smaller version of the same journey.",
    primaryCta: "Request a quotation",
    secondaryCta: "About Ciampino",
    note: "No price and no journey time here either. The operator gives the airport as about 15 km south-east of Rome, and the hour of day does more to the journey than the distance does.",
  },
  lead: {
    id: "difference",
    eyebrow: "The difference",
    heading: "What is actually different about this one",
    text: "Four things, and only the first is the one people expect.",
    terms: [
      {
        term: "It is shorter",
        detail:
          "About 15 km south-east, against Fiumicino's 32 km south-west. The city end of the journey, though, is exactly the same problem.",
      },
      {
        term: "The hours are extreme",
        detail:
          "Low-cost schedules concentrate flights at the beginning and the end of the day. Arrivals near midnight and departures before dawn are ordinary here, and they are the thing to raise first.",
      },
      {
        term: "One passenger building",
        detail:
          "Arrivals and departures share a single building, so there is no terminal to get wrong. General aviation uses a separate terminal, which is a different arrangement.",
      },
      {
        term: "The approach is urban",
        detail:
          "The route runs through the south-eastern edge of the city rather than down a motorway. Shorter is not automatically quicker.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where it starts, where it finishes",
    lead: "The airport end is the simple one here — which is the reverse of Fiumicino.",
    from: {
      id: "cia",
      label: "Departure",
      name: "Ciampino Airport",
      page: "ciampino",
      linkText: "About Ciampino, and how it compares",
      items: [
        {
          term: "The building",
          detail:
            "A single passenger building holding both arrivals and departures. Nothing to confuse, which is a genuine advantage at two in the morning.",
        },
        {
          term: "The time",
          detail:
            "Say the scheduled arrival or departure time plainly. At this airport it is the detail that shapes the whole request.",
        },
        {
          term: "If it is a private flight",
          detail:
            "General aviation uses a separate terminal. Mention it, because it is not the default assumption.",
        },
      ],
    },
    to: {
      id: "rome",
      label: "Arrival",
      name: "A Rome address",
      page: "rome",
      linkText: "Access and districts across Rome",
      items: [
        {
          term: "The street",
          detail:
            "The limited-traffic zones apply to this journey exactly as they do to one from Fiumicino. Being closer to the city changes nothing about them.",
        },
        {
          term: "The hour",
          detail:
            "A pre-dawn departure from a central address is a different request from a midday one, even along the same route.",
        },
        {
          term: "The exact address",
          detail:
            "Street and number. The district too, if you know it — it helps more than a hotel's name does.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for a Ciampino journey",
    lead: "Shorter than the Fiumicino list, because there is no terminal to specify.",
    items: [
      "The flight number and date.",
      "The scheduled time — stated explicitly if it is late at night or before dawn.",
      "The full address at the other end.",
      "How many passengers, and how many are children.",
      "How many bags, hold and cabin.",
      "Whether you are arriving on a scheduled or a private flight.",
    ],
    note: "What can be arranged at an unusual hour is answered in the reply. Nothing on this site claims a service that runs around the clock.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "The same journey from the other airport.",
      },
      {
        page: "ciampino",
        label: "Ciampino Airport (CIA)",
        detail: "The airport in full, and how it compares with Fiumicino.",
      },
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "What happens at the city end.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Mostly about the clock rather than the road.",
    items: [
      {
        question: "Is this quicker than the Fiumicino journey?",
        answer:
          "It is shorter — about 15 km against about 32 km — but it runs through the edge of the city rather than along a motorway, and the hour of day matters more than either figure. No duration is quoted here for that reason.",
      },
      {
        question: "My flight lands at one in the morning. Can anything be arranged?",
        answer:
          "It is a common question at Ciampino and the honest answer is that it depends on the date and is settled in the reply to your request. Ask explicitly rather than assuming, and get the answer in writing before you rely on it.",
      },
      {
        question: "Which terminal do I give?",
        answer:
          "For a scheduled flight there is only the one passenger building, so there is nothing to specify. If you are arriving on a private flight, say so — general aviation uses a separate terminal.",
      },
      {
        question: "Can I compare this with a Fiumicino transfer before booking flights?",
        answer:
          "Yes, and it is worth doing. Ask about both journeys with the same addresses and the same party, and compare the two answers rather than two guesses.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "The time matters more than the route",
    body: "Flight number, date, the scheduled time, the address, the party and the luggage. At Ciampino the hour is the detail that shapes everything else.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Ciampino Airport", page: "ciampino" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const ciaRomeIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Ciampino a Roma",
    description:
      "La più breve delle due tratte aeroportuali romane e ciò che la distingue davvero: gli orari, l'unico edificio passeggeri e perché più vicino non significa più veloce.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Ciampino (CIA)",
    to: "Roma",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Ciampino a Roma",
    lead: "Metà della distanza della tratta da Fiumicino e una frazione dell'aeroporto, ma non semplicemente una versione ridotta dello stesso viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "L'aeroporto di Ciampino",
    note: "Anche qui niente prezzi né durate. Il gestore colloca l'aeroporto a circa 15 km a sud-est di Roma, e sull'esito del viaggio l'ora del giorno pesa più della distanza.",
  },
  lead: {
    id: "differenze",
    eyebrow: "Le differenze",
    heading: "Che cosa cambia davvero in questa tratta",
    text: "Quattro cose, e solo la prima è quella che ci si aspetta.",
    terms: [
      {
        term: "È più corta",
        detail:
          "Circa 15 km a sud-est, contro i 32 km a sud-ovest di Fiumicino. Il capo cittadino del viaggio, però, pone esattamente lo stesso problema.",
      },
      {
        term: "Gli orari sono estremi",
        detail:
          "Gli orari low cost concentrano i voli all'inizio e alla fine della giornata. Arrivi verso mezzanotte e partenze prima dell'alba qui sono normali, ed è la prima cosa da segnalare.",
      },
      {
        term: "Un solo edificio passeggeri",
        detail:
          "Arrivi e partenze stanno nello stesso edificio: non c'è un terminal da sbagliare. L'aviazione generale usa invece un terminal separato, con un'organizzazione diversa.",
      },
      {
        term: "Si entra dalla periferia",
        detail:
          "Il percorso attraversa il margine sud-orientale della città invece di seguire un'autostrada. Più corto non vuol dire automaticamente più rapido.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Dove comincia e dove finisce",
    lead: "Qui il lato aeroporto è quello semplice: l'esatto contrario di Fiumicino.",
    from: {
      id: "cia",
      label: "Partenza",
      name: "Aeroporto di Ciampino",
      page: "ciampino",
      linkText: "Ciampino, e il confronto con Fiumicino",
      items: [
        {
          term: "L'edificio",
          detail:
            "Un unico edificio passeggeri con arrivi e partenze. Non c'è nulla da confondere, e alle due di notte è un vantaggio concreto.",
        },
        {
          term: "L'orario",
          detail:
            "Indicate con chiarezza l'orario previsto di arrivo o partenza. In questo aeroporto è il dato che dà forma a tutta la richiesta.",
        },
        {
          term: "Se è un volo privato",
          detail:
            "L'aviazione generale usa un terminal separato. Segnalatelo, perché non è l'ipotesi predefinita.",
        },
      ],
    },
    to: {
      id: "roma",
      label: "Arrivo",
      name: "Un indirizzo a Roma",
      page: "rome",
      linkText: "Accessi e quartieri di Roma",
      items: [
        {
          term: "La strada",
          detail:
            "Le ZTL valgono per questo viaggio esattamente come per uno da Fiumicino. Essere più vicini alla città non cambia nulla.",
        },
        {
          term: "L'ora",
          detail:
            "Una partenza prima dell'alba da un indirizzo in centro è una richiesta diversa da una di mezzogiorno, pur sullo stesso percorso.",
        },
        {
          term: "L'indirizzo esatto",
          detail:
            "Via e numero civico. E il quartiere, se lo conoscete: aiuta più del nome dell'hotel.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per un viaggio da Ciampino",
    lead: "L'elenco è più breve di quello di Fiumicino, perché non c'è alcun terminal da specificare.",
    items: [
      "Numero del volo e data.",
      "L'orario previsto, detto esplicitamente se è notturno o prima dell'alba.",
      "L'indirizzo completo all'altro capo.",
      "Quanti passeggeri e quanti di loro sono bambini.",
      "Quanti bagagli, da stiva e a mano.",
      "Se arrivate con un volo di linea o con un volo privato.",
    ],
    note: "Che cosa sia organizzabile a un'ora inconsueta ve lo dice la risposta. Nessuna pagina di questo sito dichiara un servizio attivo ventiquattr'ore su ventiquattro.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "Lo stesso viaggio dall'altro aeroporto.",
      },
      {
        page: "ciampino",
        label: "Aeroporto di Ciampino (CIA)",
        detail: "L'aeroporto per esteso, e il confronto con Fiumicino.",
      },
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Che cosa succede dal lato città.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questa tratta",
    lead: "Riguardano più l'orologio che la strada.",
    items: [
      {
        question: "È più rapida della tratta da Fiumicino?",
        answer:
          "È più breve — circa 15 km contro circa 32 — ma attraversa il margine della città invece di seguire un'autostrada, e l'ora del giorno pesa più di entrambe le cifre. È il motivo per cui qui non trovate una durata.",
      },
      {
        question: "Il mio volo atterra all'una di notte. Si può organizzare qualcosa?",
        answer:
          "È una domanda frequente a Ciampino e la risposta onesta è che dipende dalla data e si definisce nella risposta alla richiesta. Chiedetelo in modo esplicito e fatevelo confermare per iscritto prima di contarci.",
      },
      {
        question: "Quale terminal devo indicare?",
        answer:
          "Per un volo di linea c'è un solo edificio passeggeri, quindi non c'è nulla da specificare. Se arrivate con un volo privato, segnalatelo: l'aviazione generale usa un terminal separato.",
      },
      {
        question: "Posso confrontarla con un transfer da Fiumicino prima di prenotare il volo?",
        answer:
          "Sì, e conviene farlo. Chiedete per entrambe le tratte indicando gli stessi indirizzi e lo stesso gruppo, e confrontate due risposte invece di due supposizioni.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Conta più l'ora che il percorso",
    body: "Numero del volo, data, orario previsto, indirizzo, persone e bagagli. A Ciampino è l'ora il dato che determina tutto il resto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Ciampino", page: "ciampino" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Rome → Civitavecchia ─────────────────────────────────────────────── */

const romeCivEn: RoutePage = {
  meta: {
    title: "Rome to Civitavecchia cruise port",
    description:
      "Sailing day, worked backwards from the all-aboard time printed on your cruise documents — the port's geography, what to send, and why the margin is not symmetrical.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Rome",
    to: "Civitavecchia cruise port",
    eyebrow: "Route",
    h1: "Rome to Civitavecchia cruise port",
    lead: "Roughly 70 km, one immovable deadline, and a port you cannot be driven into as far as the ship. Of all the journeys in this cluster, this is the one where planning backwards matters most.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the port",
    note: "The port gives the distance as roughly 70 km north-west of Rome. No journey time is quoted here, because the figure that matters is not the average one — it is the one that still works on a bad day.",
  },
  lead: {
    id: "countdown",
    eyebrow: "The countdown",
    heading: "Count backwards from all-aboard time",
    text: "The whole day is set by one figure you already have, and it is not the time the ship leaves.",
    steps: [
      {
        title: "Start at the all-aboard time",
        body: "It is printed on your cruise documents, and it is normally well before the ship actually sails. This is the only fixed point in the day; everything else is subtracted from it.",
      },
      {
        title: "Subtract the time inside the port",
        body: "You are set down where the port permits, which is not at the gangway. Between that point and the ship there may be a shuttle, a queue and a security check.",
      },
      {
        title: "Subtract the journey itself",
        body: "Roughly 70 km, on a day whose traffic nobody can predict in advance. This is the part a quotation can give you a realistic figure for.",
      },
      {
        title: "Subtract getting out of the centre",
        body: "If you are starting inside a limited-traffic zone, the first minutes are a walk to the meeting point and a slow extraction through narrow streets with luggage.",
      },
      {
        title: "Now pick a pickup time — and add margin",
        body: "Being early at a cruise port costs you a wait. Being late costs you the ship. The two are not comparable, and the margin you choose should say so.",
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A street, and a working port",
    lead: "One end you control. The other is run by other people.",
    from: {
      id: "rome",
      label: "Departure",
      name: "Your Rome address",
      page: "rome",
      linkText: "Access and districts across Rome",
      items: [
        {
          term: "The zone",
          detail:
            "If the address is in the historic centre or Trastevere, a limited-traffic zone may apply at the hour you are leaving. Taxis and cars for hire with driver are among the permitted categories, but the street still has to be usable.",
        },
        {
          term: "The luggage",
          detail:
            "Cruise cases are larger than airline cases and there are usually more of them. Say how many, because it decides the vehicle.",
        },
        {
          term: "The walk",
          detail:
            "From a central address, allow for the few minutes between the door and the car. With four cases they are not nothing.",
        },
      ],
    },
    to: {
      id: "port",
      label: "Arrival",
      name: "Civitavecchia cruise port",
      page: "civitavecchia",
      linkText: "The port, and what to confirm",
      items: [
        {
          term: "The dock",
          detail:
            "Ships berth at numbered docks — 10, 11, 12, 12bis, 13, 13bis and 25. Ask your line which one and send it with your request.",
        },
        {
          term: "The meeting point",
          detail:
            "Where a private vehicle may set you down is the port's decision and varies by dock and ship. It is confirmed for your date, not promised in advance.",
        },
        {
          term: "The town",
          detail:
            "Civitavecchia is a town with its own railway station, about 600 metres from the Varco Fortezza port entrance. Useful to know if the day goes wrong.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send for a sailing day",
    lead: "Three of these are about the ship rather than the car, and they are the three that matter most.",
    items: [
      "The ship's name and the sailing date.",
      "The all-aboard time from your cruise documents.",
      "The dock number, if your line has given it.",
      "The full Rome address you are leaving from.",
      "How many passengers and how many cases.",
      "A telephone number that will work on the day.",
    ],
    note: "Nothing here promises a particular drop-off point inside the port. That is confirmed with your quotation, and it should be in writing before you rely on it.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia",
        detail: "If you are flying in rather than staying in Rome.",
      },
      {
        page: "civitavecchia",
        label: "Civitavecchia cruise port",
        detail: "The port's geography and the full checklist.",
      },
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "The city end, and what governs it.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About sailing day",
    lead: "The questions that decide whether the day is calm or not.",
    items: [
      {
        question: "What time should I leave Rome?",
        answer:
          "Work backwards from the all-aboard time on your documents, allowing for the journey, the movement inside the port and getting out of your own street — then add margin, because the two ways of being wrong are not equally expensive. A quotation can give you a realistic figure for the middle part.",
      },
      {
        question: "Will the car take me to the ship?",
        answer:
          "To where the port permits, which is not usually the gangway. The cruise docks sit inside a controlled area with the port's own shuttle between the berths and the Largo della Pace service centre. The actual drop-off is confirmed for your date and your dock.",
      },
      {
        question: "What if my dock changes?",
        answer:
          "It can, and it is one reason to have a telephone number that works on the day on both sides. Send the dock number you were given, and pass on any change as soon as your line tells you.",
      },
      {
        question: "Is the return journey the same in reverse?",
        answer:
          "In outline, but the pressure is different: on disembarkation the deadline is usually a flight rather than a ship, and ships disembark in waves. Say which it is when you ask.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Give us the deadline, not just the address",
    body: "The ship, the date, the all-aboard time, the dock if you have it, where you are leaving from and how many of you there are with how many cases.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About the cruise port", page: "civitavecchia" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const romeCivIt: RoutePage = {
  meta: {
    title: "Da Roma al porto di Civitavecchia",
    description:
      "Il giorno dell'imbarco calcolato a ritroso dall'orario di rientro a bordo: la geografia del porto, che cosa indicare e perché il margine non è simmetrico.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Roma",
    to: "Porto di Civitavecchia",
    eyebrow: "Tratta",
    h1: "Da Roma al porto di Civitavecchia",
    lead: "Circa 70 km, una scadenza inderogabile e un porto in cui non si arriva in auto fino alla nave. Fra tutte le tratte di questo gruppo, è quella in cui pianificare a ritroso conta di più.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il porto",
    note: "Il porto indica una distanza di circa 70 km a nord-ovest di Roma. Qui non trovate una durata, perché il dato che conta non è quello medio: è quello che regge anche in una giornata storta.",
  },
  lead: {
    id: "conto-alla-rovescia",
    eyebrow: "Il conto alla rovescia",
    heading: "Contate a ritroso dall'orario di rientro a bordo",
    text: "Tutta la giornata è determinata da un dato che avete già, e non è l'orario di partenza della nave.",
    steps: [
      {
        title: "Partite dall'orario di rientro a bordo",
        body: "È indicato sui documenti di crociera ed è di norma ben prima che la nave salpi davvero. È l'unico punto fisso della giornata: tutto il resto si sottrae da lì.",
      },
      {
        title: "Sottraete il tempo dentro il porto",
        body: "Vi lasciano dove il porto lo consente, che non è sotto la passerella. Fra quel punto e la nave possono esserci una navetta, una coda e un controllo di sicurezza.",
      },
      {
        title: "Sottraete il viaggio",
        body: "Circa 70 km, in una giornata il cui traffico nessuno può prevedere. È la parte su cui un preventivo può darvi una stima realistica.",
      },
      {
        title: "Sottraete l'uscita dal centro",
        body: "Se partite dall'interno di una ZTL, i primi minuti sono la camminata fino al punto d'incontro e un'uscita lenta fra strade strette, con i bagagli.",
      },
      {
        title: "Ora scegliete l'ora del prelievo, e aggiungete margine",
        body: "Arrivare in anticipo al porto costa un'attesa. Arrivare tardi costa la nave. Non sono eventi paragonabili, e il margine che scegliete dovrebbe dirlo.",
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Una strada e un porto operativo",
    lead: "Un capo lo controllate voi. L'altro lo gestiscono altri.",
    from: {
      id: "roma",
      label: "Partenza",
      name: "Il vostro indirizzo a Roma",
      page: "rome",
      linkText: "Accessi e quartieri di Roma",
      items: [
        {
          term: "La zona",
          detail:
            "Se l'indirizzo è in centro storico o a Trastevere, all'ora della partenza potrebbe essere attiva una ZTL. Taxi e NCC rientrano fra le categorie ammesse, ma la strada deve comunque essere percorribile.",
        },
        {
          term: "I bagagli",
          detail:
            "Le valigie da crociera sono più grandi di quelle aeree e di solito più numerose. Indicatene il numero: determina il veicolo.",
        },
        {
          term: "La camminata",
          detail:
            "Da un indirizzo centrale, mettete in conto i minuti fra il portone e l'auto. Con quattro valigie non sono pochi.",
        },
      ],
    },
    to: {
      id: "porto",
      label: "Arrivo",
      name: "Porto di Civitavecchia",
      page: "civitavecchia",
      linkText: "Il porto e che cosa confermare",
      items: [
        {
          term: "La banchina",
          detail:
            "Le navi ormeggiano a banchine numerate: 10, 11, 12, 12bis, 13, 13bis e 25. Chiedete alla compagnia quale sia e indicatela nella richiesta.",
        },
        {
          term: "Il punto d'incontro",
          detail:
            "Dove un veicolo privato possa lasciarvi lo decide il porto e varia secondo banchina e nave. Si conferma per la vostra data, non si promette in anticipo.",
        },
        {
          term: "La città",
          detail:
            "Civitavecchia è una città con una propria stazione, a circa 600 metri dal varco Fortezza. Utile sapere che c'è, se la giornata va storta.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare per il giorno dell'imbarco",
    lead: "Tre di queste voci riguardano la nave e non l'auto, e sono le tre che pesano di più.",
    items: [
      "Il nome della nave e la data di partenza.",
      "L'orario di rientro a bordo indicato sui documenti di crociera.",
      "Il numero della banchina, se la compagnia ve l'ha comunicato.",
      "L'indirizzo completo di Roma da cui partite.",
      "Quanti passeggeri e quante valigie.",
      "Un numero di telefono che funzioni il giorno stesso.",
    ],
    note: "Qui non viene promesso alcun punto di discesa specifico dentro il porto: si conferma con il preventivo, e conviene averlo per iscritto prima di contarci.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-fco-civitavecchia",
        label: "Da Fiumicino a Civitavecchia",
        detail: "Se arrivate in aereo invece di soggiornare a Roma.",
      },
      {
        page: "civitavecchia",
        label: "Il porto di Civitavecchia",
        detail: "La geografia del porto e l'elenco completo.",
      },
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Il capo cittadino e che cosa lo governa.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Sul giorno dell'imbarco",
    lead: "Le domande che decidono se la giornata sarà tranquilla o no.",
    items: [
      {
        question: "A che ora conviene partire da Roma?",
        answer:
          "Contate a ritroso dall'orario di rientro a bordo indicato sui documenti, considerando il viaggio, gli spostamenti dentro il porto e l'uscita dalla vostra strada; poi aggiungete margine, perché i due modi di sbagliare non costano uguale. Sulla parte centrale un preventivo può darvi una stima realistica.",
      },
      {
        question: "L'auto mi porta fino alla nave?",
        answer:
          "Fino a dove il porto lo consente, che di norma non è la passerella. Le banchine crociere si trovano in un'area ad accesso controllato, con una navetta portuale fra gli ormeggi e il centro servizi di Largo della Pace. Il punto di discesa effettivo si conferma per la vostra data e la vostra banchina.",
      },
      {
        question: "E se cambia la banchina?",
        answer:
          "Può succedere, ed è uno dei motivi per avere un numero di telefono funzionante da entrambe le parti. Indicate la banchina che vi è stata comunicata e segnalate ogni variazione appena la compagnia ve la comunica.",
      },
      {
        question: "Il viaggio di ritorno è lo stesso al contrario?",
        answer:
          "Nelle linee generali sì, ma la pressione è diversa: allo sbarco la scadenza è di solito un volo e non una nave, e gli sbarchi avvengono a ondate. Precisate di quale dei due casi si tratta quando scrivete.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Dateci la scadenza, non solo l'indirizzo",
    body: "La nave, la data, l'orario di rientro a bordo, la banchina se la conoscete, da dove partite e quante persone siete con quante valigie.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Il porto di Civitavecchia", page: "civitavecchia" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Fiumicino → Civitavecchia ────────────────────────────────────────── */

const fcoCivEn: RoutePage = {
  meta: {
    title: "Fiumicino Airport to Civitavecchia",
    description:
      "Fly in and sail: the same-day plan and the day-before plan set side by side, with what each one costs you and what each one risks.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Fiumicino Airport (FCO)",
    to: "Civitavecchia cruise port",
    eyebrow: "Route",
    h1: "Fiumicino Airport to Civitavecchia",
    lead: "An airport south-west of Rome, a port roughly 70 km north-west of it, and a ship that will not wait. The real question on this route is not how, but when you fly.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the port",
    note: "This page does not tell you which plan to choose. It sets out what you are trading, because the trade is the decision and only you know your own tolerance for it.",
  },
  lead: {
    id: "choice",
    eyebrow: "The choice",
    heading: "Two ways to do it",
    text: "Both are ordinary. They fail in different ways, and that is the whole of the decision.",
    columns: [
      {
        id: "same-day",
        heading: "Land and sail the same day",
        subheading: "Less cost, less margin",
        rows: [
          {
            term: "What it saves",
            detail: "A night's accommodation and a second transfer.",
          },
          {
            term: "What it risks",
            detail:
              "Everything rests on one flight. A delay that would be an inconvenience on a city break can mean missing the ship — and a ship does not wait.",
          },
          {
            term: "If you do it",
            detail:
              "Take the earliest arrival you can bear, send the flight number, and agree in advance what happens if that flight is late.",
          },
        ],
      },
      {
        id: "day-before",
        heading: "Arrive the day before",
        subheading: "More cost, more margin",
        rows: [
          {
            term: "What it costs",
            detail:
              "A night somewhere — Rome, near the airport, or Civitavecchia itself — and a second journey the next morning.",
          },
          {
            term: "What it buys",
            detail:
              "A flight delay stops being a crisis and becomes an inconvenience. You start sailing day rested and already in the right half of the country.",
          },
          {
            term: "If you do it",
            detail:
              "Decide where that night is spent before you book it: Rome, the airport and Civitavecchia produce three completely different second journeys.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "What each end needs from you",
    lead: "Whichever plan you choose, these are the details that make the journey arrangeable.",
    from: {
      id: "fco",
      label: "Departure",
      name: "Fiumicino Airport",
      page: "fiumicino",
      linkText: "Terminals, timings and what to send",
      items: [
        {
          term: "The terminal",
          detail:
            "Terminal 1 or Terminal 3, depending on the airline and the destination. The operator asks passengers to confirm it rather than assume it.",
        },
        {
          term: "The margin after landing",
          detail:
            "Passport control and the baggage belt sit between landing and emerging. On a same-day plan that gap is the part most likely to hurt.",
        },
        {
          term: "The flight number",
          detail:
            "Send it. On this route more than any other, it is the thing that lets anyone follow what is actually happening.",
        },
      ],
    },
    to: {
      id: "port",
      label: "Arrival",
      name: "Civitavecchia cruise port",
      page: "civitavecchia",
      linkText: "The port, and what to confirm",
      items: [
        {
          term: "The all-aboard time",
          detail:
            "Printed on your cruise documents and usually well before the ship sails. It is the deadline, not the sailing time.",
        },
        {
          term: "The dock",
          detail:
            "Numbered — 10, 11, 12, 12bis, 13, 13bis, 25. Ask your line and pass it on.",
        },
        {
          term: "The drop-off",
          detail:
            "Where the port permits, which is not the gangway. Confirmed for your date and dock rather than promised in advance.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send either way",
    lead: "The list is the same for both plans; only the dates change.",
    items: [
      "The flight number, the date and the scheduled arrival time.",
      "The ship's name and the sailing date.",
      "The all-aboard time from your cruise documents.",
      "The dock number, if you have been given it.",
      "How many passengers and how many cases.",
      "Whether you are travelling the same day or staying somewhere first — and where, if so.",
    ],
    note: "Whether a transfer can be arranged for your particular combination of flight and sailing is answered in the reply. Nothing here claims it can always be done.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "route-rome-civitavecchia",
        label: "Rome to Civitavecchia cruise port",
        detail: "If you spend the night in Rome first.",
      },
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "The first leg, if you break the journey.",
      },
      {
        page: "civitavecchia",
        label: "Civitavecchia cruise port",
        detail: "The port's geography and the full checklist.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Fly-and-sail questions",
    lead: "The honest answers, including where the honest answer is “it depends on your nerve”.",
    items: [
      {
        question: "Can I really fly in and sail the same day?",
        answer:
          "People do it regularly. Whether it is wise for your flight and your sailing depends on how early the flight lands, how much margin that leaves before all-aboard time, and what you are prepared to lose if the flight slips. This page sets out the trade rather than making the decision.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "That depends on the arrangement, and it is exactly the question to ask explicitly before agreeing to anything. This site does not state a waiting or re-routing policy it has not confirmed.",
      },
      {
        question: "Is it better to stay in Rome or near the port the night before?",
        answer:
          "They produce different second journeys: from Rome you cross roughly 70 km on sailing morning, from Civitavecchia you are already there, and from near the airport you are somewhere in between. Decide that before booking the room, because it changes the transfer completely.",
      },
      {
        question: "Can the same car do the airport pickup and the port drop-off?",
        answer:
          "That is the usual shape of the request. Whether it can be arranged for your date, and on what terms, is answered when you ask — with the flight and the sailing both named.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Name the flight and the ship",
    body: "Both, with their dates and times, plus the dock if you have it and how many of you there are with how many cases. The answer can then be about your actual margin rather than a general one.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About the cruise port", page: "civitavecchia" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const fcoCivIt: RoutePage = {
  meta: {
    title: "Da Fiumicino a Civitavecchia",
    description:
      "Volo e crociera: il piano «stesso giorno» e quello «giorno prima» messi a confronto, con che cosa costa e che cosa rischia ciascuno dei due.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Aeroporto di Fiumicino (FCO)",
    to: "Porto di Civitavecchia",
    eyebrow: "Tratta",
    h1: "Da Fiumicino a Civitavecchia",
    lead: "Un aeroporto a sud-ovest di Roma, un porto a circa 70 km a nord-ovest della città e una nave che non aspetta. Su questa tratta la vera domanda non è come, ma quando volate.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il porto",
    note: "Questa pagina non vi dice quale piano scegliere: espone che cosa state scambiando, perché lo scambio è la decisione e solo voi sapete quanto margine vi serve per stare tranquilli.",
  },
  lead: {
    id: "la-scelta",
    eyebrow: "La scelta",
    heading: "Due modi di farlo",
    text: "Sono entrambi normali. Falliscono in modi diversi, ed è tutta lì la decisione.",
    columns: [
      {
        id: "stesso-giorno",
        heading: "Atterrare e imbarcarsi lo stesso giorno",
        subheading: "Costa meno, lascia meno margine",
        rows: [
          {
            term: "Che cosa vi fa risparmiare",
            detail: "Un pernottamento e un secondo transfer.",
          },
          {
            term: "Che cosa rischia",
            detail:
              "Tutto dipende da un solo volo. Un ritardo che in un weekend in città sarebbe una seccatura qui può significare perdere la nave, e la nave non aspetta.",
          },
          {
            term: "Se lo fate",
            detail:
              "Scegliete l'arrivo più presto che riuscite a sopportare, indicate il numero del volo e concordate in anticipo che cosa succede se quel volo ritarda.",
          },
        ],
      },
      {
        id: "giorno-prima",
        heading: "Arrivare il giorno prima",
        subheading: "Costa di più, lascia più margine",
        rows: [
          {
            term: "Che cosa costa",
            detail:
              "Una notte da qualche parte — Roma, vicino all'aeroporto o a Civitavecchia — e un secondo viaggio la mattina dopo.",
          },
          {
            term: "Che cosa vi compra",
            detail:
              "Un ritardo del volo smette di essere una crisi e torna a essere un fastidio. Il giorno dell'imbarco comincia riposati e già nella metà giusta del Paese.",
          },
          {
            term: "Se lo fate",
            detail:
              "Decidete dove passare quella notte prima di prenotarla: Roma, l'aeroporto e Civitavecchia danno tre secondi viaggi completamente diversi.",
          },
        ],
      },
    ],
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Che cosa serve a ciascun capo",
    lead: "Qualunque piano scegliate, sono questi i dati che rendono organizzabile il viaggio.",
    from: {
      id: "fco",
      label: "Partenza",
      name: "Aeroporto di Fiumicino",
      page: "fiumicino",
      linkText: "Terminal, tempi e che cosa indicare",
      items: [
        {
          term: "Il terminal",
          detail:
            "Terminal 1 o Terminal 3, secondo la compagnia e la destinazione. Il gestore invita a verificarlo invece di presumerlo.",
        },
        {
          term: "Il margine dopo l'atterraggio",
          detail:
            "Fra l'atterraggio e l'uscita ci sono il controllo passaporti e il nastro bagagli. Nel piano «stesso giorno» è la parte che fa più male.",
        },
        {
          term: "Il numero del volo",
          detail:
            "Indicatelo. Su questa tratta più che su ogni altra è ciò che permette di capire che cosa stia davvero succedendo.",
        },
      ],
    },
    to: {
      id: "porto",
      label: "Arrivo",
      name: "Porto di Civitavecchia",
      page: "civitavecchia",
      linkText: "Il porto e che cosa confermare",
      items: [
        {
          term: "L'orario di rientro a bordo",
          detail:
            "È sui documenti di crociera, di norma ben prima della partenza della nave. È quella la scadenza, non l'orario di salpare.",
        },
        {
          term: "La banchina",
          detail:
            "Numerata: 10, 11, 12, 12bis, 13, 13bis, 25. Chiedetela alla compagnia e comunicatela.",
        },
        {
          term: "La discesa",
          detail:
            "Dove il porto lo consente, che non è la passerella. Si conferma per la vostra data e la vostra banchina, non si promette prima.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa indicare, in entrambi i casi",
    lead: "L'elenco è lo stesso per i due piani: cambiano solo le date.",
    items: [
      "Numero del volo, data e orario di arrivo previsto.",
      "Il nome della nave e la data di partenza.",
      "L'orario di rientro a bordo indicato sui documenti di crociera.",
      "Il numero della banchina, se vi è stato comunicato.",
      "Quanti passeggeri e quante valigie.",
      "Se viaggiate lo stesso giorno o pernottate prima, e in quel caso dove.",
    ],
    note: "Se la vostra specifica combinazione di volo e partenza sia organizzabile ve lo dice la risposta. Qui non si afferma che sia sempre possibile.",
  },
  related: {
    id: "correlate",
    heading: "Tratte collegate",
    items: [
      {
        page: "route-rome-civitavecchia",
        label: "Da Roma al porto di Civitavecchia",
        detail: "Se pernottate prima a Roma.",
      },
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "La prima tappa, se spezzate il viaggio.",
      },
      {
        page: "civitavecchia",
        label: "Il porto di Civitavecchia",
        detail: "La geografia del porto e l'elenco completo.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su volo e crociera",
    lead: "Risposte oneste, compresa quella in cui la risposta onesta è «dipende da quanto siete disposti a rischiare».",
    items: [
      {
        question: "Posso davvero atterrare e imbarcarmi lo stesso giorno?",
        answer:
          "C'è chi lo fa abitualmente. Se sia prudente per il vostro volo e la vostra partenza dipende da quanto presto atterra l'aereo, da quanto margine resta prima dell'orario di rientro a bordo e da che cosa siete disposti a perdere se il volo slitta. Questa pagina espone lo scambio, non decide al posto vostro.",
      },
      {
        question: "Che cosa succede se il volo è in ritardo?",
        answer:
          "Dipende dall'accordo, ed è esattamente la domanda da porre in modo esplicito prima di accettare qualsiasi cosa. Questo sito non dichiara una politica di attesa o di riprogrammazione che non ha verificato.",
      },
      {
        question: "Meglio dormire a Roma o vicino al porto la notte prima?",
        answer:
          "Producono secondi viaggi diversi: da Roma il mattino dell'imbarco attraversate circa 70 km, da Civitavecchia siete già sul posto, da vicino all'aeroporto state nel mezzo. Decidetelo prima di prenotare la camera, perché cambia completamente il transfer.",
      },
      {
        question: "La stessa auto può fare il prelievo in aeroporto e la discesa al porto?",
        answer:
          "È la forma abituale della richiesta. Se sia organizzabile per la vostra data, e a quali condizioni, ve lo dirà la risposta, indicando sia il volo sia la partenza della nave.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Indicate il volo e la nave",
    body: "Entrambi, con date e orari, più la banchina se la conoscete e quante persone siete con quante valigie. Così la risposta potrà parlare del vostro margine reale e non di uno generico.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Il porto di Civitavecchia", page: "civitavecchia" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routeFcoRome: Record<Locale, RoutePage> = {
  en: fcoRomeEn,
  it: fcoRomeIt,
};
export const routeCiaRome: Record<Locale, RoutePage> = {
  en: ciaRomeEn,
  it: ciaRomeIt,
};
export const routeRomeCivitavecchia: Record<Locale, RoutePage> = {
  en: romeCivEn,
  it: romeCivIt,
};
export const routeFcoCivitavecchia: Record<Locale, RoutePage> = {
  en: fcoCivEn,
  it: fcoCivIt,
};
