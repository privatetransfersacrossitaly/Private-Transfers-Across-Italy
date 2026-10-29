import type { Locale } from "@/lib/site";
import type { BolognaHub } from "./types";

/**
 * The Bologna hub.
 *
 * ── The page is organised around a rule with three strengths ──────────────
 * Bologna's historic centre is restricted from 07:00 to 20:00 every day; the
 * pedestrian zones and Area T — via Rizzoli, via Indipendenza and via Ugo
 * Bassi — are restricted around the clock. So a visitor's real question is
 * not "is there a ZTL" but "which of the three bands is my address in", and
 * only one of the three leaves them anything to decide.
 *
 * The tier model is the page. Everything else serves it.
 *
 * ── What it must not say ──────────────────────────────────────────────────
 * Bologna Welcome states that concessions exist for access to hotels, but
 * does not publish the procedure; nothing official could be read on whether
 * private-hire vehicles may enter at all. The owner has separately confirmed
 * that the business works under a valid authorisation, and that is stated as
 * what we do — never as a rule the city publishes, and never as a guarantee
 * that any particular door can be reached.
 *
 * See `docs/bologna-research-log.md` §3, Z1–Z8.
 */

const ztlSourceEn = {
  text: "The hours, the gates and the categories allowed through are set by the Comune di Bologna. The figures above are as published by the city's official tourist information and checked on 27 October 2026; the Comune's own pages are the version to act on:",
  linkText: "Bologna Welcome publishes the current ZTL summary",
  href: "https://www.bolognawelcome.com/it/altro/altro/ztl-centro-storico",
};

const ztlSourceIt = {
  text: "Orari, varchi e categorie ammesse li stabilisce il Comune di Bologna. I dati qui sopra sono quelli pubblicati dall'informazione turistica ufficiale della città e verificati il 27 ottobre 2026; la versione su cui regolarsi resta quella del Comune:",
  linkText: "Bologna Welcome pubblica il riepilogo aggiornato della ZTL",
  href: "https://www.bolognawelcome.com/it/altro/altro/ztl-centro-storico",
};

const en: BolognaHub = {
  meta: {
    title: "Private transfers in Bologna",
    description:
      "Bologna's centre is restricted at three different strengths, and which one applies depends on your street. What that means for a car, and what the city does not publish.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Bologna and Romagna",
    h1: "Private transfers in Bologna",
    lead: "Most Italian cities have one restricted centre. Bologna has the same restriction at three strengths, and which one you meet is decided by the street you are going to rather than by anything you can arrange. Start by finding your band.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the restriction means",
    tiers: {
      heading: "Three bands, strongest last",
      items: [
        {
          id: "outside",
          label: "Outside the zone",
          rule: "No restriction",
          consequence:
            "A car reaches the door at any hour. Most of the ring road, the station frontage and everything beyond the viali sit here.",
          strength: "none",
        },
        {
          id: "timed",
          label: "Inside the limited-traffic zone",
          rule: "Restricted 07:00–20:00, every day",
          consequence:
            "The hour is the variable. A late arrival meets no restriction at all; a mid-morning one meets the full force of it.",
          strength: "timed",
        },
        {
          id: "absolute",
          label: "Area T and the pedestrian zones",
          rule: "Restricted 24 hours",
          consequence:
            "Via Rizzoli, via Indipendenza and via Ugo Bassi, plus the pedestrian streets. Arriving at midnight helps no more than arriving at noon.",
          strength: "absolute",
        },
      ],
      note: "Hours and boundaries are the Comune's to set and to change. Send the full address when you ask and the answer will be about that address.",
    },
  },

  ztl: {
    id: "ztl",
    eyebrow: "The centre",
    heading: "One rule, three strengths",
    lead: "Worth understanding before you book anything, because it is the only part of a Bologna arrival that is genuinely awkward.",
    paragraphs: [
      "The whole historic centre is a limited-traffic zone. Motor traffic is restricted from seven in the morning until eight at night, every day of the week, and entry is read automatically at the gates — there are seventeen of them, from Porta Santo Stefano and Porta San Vitale round to via Saragozza and viale XII Giugno. Outside those hours the zone is open.",
      "Inside it sit the pedestrian streets and Area T, the spine of via Rizzoli, via Indipendenza and via Ugo Bassi. These are restricted around the clock, which is the part people are most often caught out by: a flight landing at eleven at night makes no difference to an address on via Indipendenza, although it makes all the difference to one two streets away.",
      "The practical consequence is the same as it is in Florence or Milan, and worth saying plainly. The useful question is never whether a car can drive into Bologna. It is whether a car can reach this address, on this date, at this hour — and sometimes the honest answer is that the nearest practical stopping point is a short walk from the door.",
    ],
    caution: {
      heading: "What we can and cannot tell you",
      body: "We work under a valid authorisation for access where one is required, and that is our own operating position rather than something the city publishes about us. What this page will not do is tell you that every street, courtyard or hotel entrance can be driven to — some cannot, by anybody. The city's official tourist information notes that concessions exist for reaching hotels but does not publish the procedure, and no official text on private-hire access could be read while this page was written. Send the address and the answer will be specific to it.",
    },
    source: ztlSourceEn,
  },

  arrivals: {
    id: "arrivals",
    eyebrow: "Arriving",
    heading: "How people reach Bologna",
    lead: "One airport, three hotels with access arrangements of their own, and a region that extends to the Adriatic coast.",
    items: [
      {
        page: "blq",
        label: "Bologna Guglielmo Marconi Airport (BLQ)",
        detail:
          "North-west of the city, with a monorail of its own running to the central station.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "Via dell'Indipendenza — an address the hotel tells guests not to use for driving directions.",
      },
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "A pedestrian street inside the restricted centre, which the hotel says a car can still reach by an authorised route.",
      },
      {
        page: "hotel-excelsior",
        label: "Starhotels Excelsior",
        detail:
          "Opposite the central station, where the airport monorail terminates.",
      },
      {
        page: "ravenna",
        label: "Transfers in Ravenna",
        detail:
          "East towards the Adriatic, and the city whose cruise port is not in the city.",
      },
      {
        page: "ravenna-terminal",
        label: "Ravenna Cruise Terminal at Porto Corsini",
        detail:
          "Where ships actually berth — a separate place from Ravenna, with its own problems.",
      },
    ],
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "In Bologna one of these matters more than it does anywhere else on this site.",
    items: [
      "The full street address — not just the city.",
      "The date, and the time you need to arrive or leave.",
      "The flight or train, if one is involved.",
      "How many passengers and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "The street address is the one that decides the answer. Which of the three bands it falls in changes what is possible, and it is the difference between a useful reply and a general one.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Bologna questions",
    lead: "Mostly about the centre, which is where the difficulty is.",
    items: [
      {
        question: "Can a car take me to my hotel in the centre?",
        answer:
          "Often, and it depends on the street. If the address is outside the zone there is nothing in the way. If it is inside the timed zone, the hour matters. If it is on via Rizzoli, via Indipendenza, via Ugo Bassi or a pedestrian street, the restriction runs around the clock and the honest answer may be a nearest practical stop and a short walk. Send the address and you will get the answer for that address.",
      },
      {
        question: "What are the ZTL hours?",
        answer:
          "The city's official tourist information gives 07:00 to 20:00, every day, for the limited-traffic zone, with the pedestrian zones and Area T restricted 24 hours. Hours and boundaries are set by the Comune and can change by ordinance, so treat this as orientation and check the city's own pages for your date.",
      },
      {
        question: "Does being a private-hire vehicle let you in?",
        answer:
          "We work under a valid authorisation where one is required. That is our operating position and not a rule the city publishes about private hire in general — no official text on the point could be read while this page was written. It also does not mean every door can be driven to; some streets admit nobody.",
      },
      {
        question: "How long does the airport transfer take?",
        answer:
          "No journey time appears on these pages. Neither the airport nor any other source consulted publishes one for a road transfer, and the time would depend on the hour and the address in any case.",
      },
      {
        question: "Is the Marconi Express a better option?",
        answer:
          "For some journeys, genuinely yes. It is a monorail between the airport and Bologna Centrale, and the airport states a seven-minute ride. It answers the question of reaching the station. It does not answer the question of reaching an address with luggage, which is a different one.",
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
    heading: "Send the street, not the city",
    body: "In Bologna the street decides what is possible, because the street decides which of the three bands applies. The address, the date and time, the flight or train if there is one, and how many of you there are with how much luggage.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Bologna Marconi Airport", page: "blq" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: BolognaHub = {
  meta: {
    title: "Transfer privati a Bologna",
    description:
      "Il centro di Bologna è limitato in tre gradi diversi, e quale valga dipende dalla via. Che cosa comporta per un'auto e che cosa il Comune non pubblica.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Bologna e la Romagna",
    h1: "Transfer privati a Bologna",
    lead: "Quasi tutte le città italiane hanno un centro limitato. Bologna ha la stessa limitazione in tre gradi, e quale vi tocchi lo decide la via in cui andate, non qualcosa che possiate organizzare. Cominciate individuando la vostra fascia.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa comporta la limitazione",
    tiers: {
      heading: "Tre fasce, dalla più lieve alla più rigida",
      items: [
        {
          id: "outside",
          label: "Fuori dalla zona",
          rule: "Nessuna limitazione",
          consequence:
            "L'auto arriva alla porta a qualsiasi ora. Buona parte dei viali, il fronte della stazione e tutto ciò che sta oltre rientrano qui.",
          strength: "none",
        },
        {
          id: "timed",
          label: "Dentro la zona a traffico limitato",
          rule: "Limitata dalle 7 alle 20, tutti i giorni",
          consequence:
            "La variabile è l'ora. Un arrivo in tarda serata non incontra alcuna limitazione; uno a metà mattina la incontra per intero.",
          strength: "timed",
        },
        {
          id: "absolute",
          label: "Area T e zone pedonali",
          rule: "Limitate 24 ore su 24",
          consequence:
            "Via Rizzoli, via Indipendenza e via Ugo Bassi, oltre alle vie pedonali. Arrivare a mezzanotte non serve più che arrivare a mezzogiorno.",
          strength: "absolute",
        },
      ],
      note: "Orari e perimetri li stabilisce e li modifica il Comune. Mandate l'indirizzo completo quando scrivete: la risposta riguarderà quell'indirizzo.",
    },
  },

  ztl: {
    id: "ztl",
    eyebrow: "Il centro",
    heading: "Una regola, tre gradi",
    lead: "Vale la pena capirla prima di prenotare qualsiasi cosa, perché è l'unica parte davvero scomoda di un arrivo a Bologna.",
    paragraphs: [
      "Tutto il centro storico è zona a traffico limitato. La circolazione dei veicoli a motore è limitata dalle sette del mattino alle otto di sera, tutti i giorni, e gli ingressi vengono letti automaticamente ai varchi: sono diciassette, da Porta Santo Stefano e Porta San Vitale fino a via Saragozza e viale XII Giugno. Fuori da quella fascia oraria la zona è aperta.",
      "Al suo interno stanno le vie pedonali e l'Area T, l'asse di via Rizzoli, via Indipendenza e via Ugo Bassi. Queste sono limitate ventiquattr'ore su ventiquattro, ed è la parte che coglie più spesso di sorpresa: un volo che atterra alle undici di sera non cambia nulla per un indirizzo in via Indipendenza, mentre cambia tutto per uno a due vie di distanza.",
      "La conseguenza pratica è la stessa di Firenze o di Milano, e conviene dirla chiaramente. La domanda utile non è mai se un'auto possa entrare a Bologna, ma se un'auto possa raggiungere questo indirizzo, in questa data, a quest'ora — e a volte la risposta onesta è che il punto di sosta più pratico è a pochi minuti a piedi dalla porta.",
    ],
    caution: {
      heading: "Che cosa possiamo e non possiamo dirvi",
      body: "Operiamo con regolare autorizzazione dove ne serve una: è la nostra posizione operativa, non qualcosa che la città pubblichi sul nostro conto. Quello che questa pagina non farà è dirvi che ogni via, cortile o ingresso d'albergo sia raggiungibile in auto: alcuni non lo sono per nessuno. L'informazione turistica ufficiale segnala che esistono agevolazioni per l'accesso alle strutture ricettive ma non ne pubblica la procedura, e mentre questo testo veniva scritto non è stato possibile consultare alcun documento ufficiale sull'accesso degli NCC. Mandate l'indirizzo e la risposta sarà specifica.",
    },
    source: ztlSourceIt,
  },

  arrivals: {
    id: "arrivi",
    eyebrow: "Arrivare",
    heading: "Come si arriva a Bologna",
    lead: "Un aeroporto, tre hotel con accordi d'accesso propri e una regione che arriva fino all'Adriatico.",
    items: [
      {
        page: "blq",
        label: "Aeroporto di Bologna Guglielmo Marconi (BLQ)",
        detail:
          "A nord-ovest della città, con una monorotaia propria che arriva alla stazione centrale.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "Via dell'Indipendenza: un indirizzo che l'hotel stesso raccomanda di non usare per il navigatore.",
      },
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "Una via pedonale dentro il centro limitato, che secondo l'hotel un'auto può comunque raggiungere con un percorso autorizzato.",
      },
      {
        page: "hotel-excelsior",
        label: "Starhotels Excelsior",
        detail:
          "Di fronte alla stazione centrale, dove arriva la monorotaia dell'aeroporto.",
      },
      {
        page: "ravenna",
        label: "Transfer a Ravenna",
        detail:
          "Verso l'Adriatico, nella città il cui porto crociere non è in città.",
      },
      {
        page: "ravenna-terminal",
        label: "Terminal crociere di Ravenna a Porto Corsini",
        detail:
          "Dove le navi attraccano davvero: un luogo distinto da Ravenna, con problemi propri.",
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "A Bologna una di queste voci conta più che in qualsiasi altro punto del sito.",
    items: [
      "L'indirizzo completo, via e numero: non solo la città.",
      "La data e l'ora in cui dovete arrivare o ripartire.",
      "Il volo o il treno, se ce n'è uno.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "È l'indirizzo a determinare la risposta. La fascia in cui ricade cambia ciò che è possibile, ed è la differenza fra una risposta utile e una generica.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Bologna",
    lead: "Quasi tutte sul centro, che è dove sta la difficoltà.",
    items: [
      {
        question: "Un'auto può portarmi al mio hotel in centro?",
        answer:
          "Spesso sì, e dipende dalla via. Se l'indirizzo è fuori dalla zona non c'è nulla di mezzo. Se è dentro la zona a orario, conta l'ora. Se è in via Rizzoli, via Indipendenza, via Ugo Bassi o in una via pedonale, la limitazione vale tutto il giorno e la risposta onesta può essere un punto di sosta vicino e pochi minuti a piedi. Mandate l'indirizzo e avrete la risposta per quell'indirizzo.",
      },
      {
        question: "Quali sono gli orari della ZTL?",
        answer:
          "L'informazione turistica ufficiale della città indica dalle 7 alle 20, tutti i giorni, per la zona a traffico limitato, con le zone pedonali e l'Area T limitate 24 ore su 24. Orari e perimetri li stabilisce il Comune e possono cambiare per ordinanza: consideratelo un orientamento e verificate le pagine del Comune per la vostra data.",
      },
      {
        question: "Essere un NCC vi consente di entrare?",
        answer:
          "Operiamo con regolare autorizzazione dove ne serve una. È la nostra posizione operativa e non una regola che la città pubblichi sugli NCC in generale: mentre questa pagina veniva scritta non è stato possibile leggere alcun testo ufficiale in proposito. E non significa che ogni porta sia raggiungibile in auto: in certe vie non entra nessuno.",
      },
      {
        question: "Quanto dura il transfer dall'aeroporto?",
        answer:
          "Su queste pagine non compaiono durate. Né l'aeroporto né alcuna altra fonte consultata ne pubblica una per un tragitto su strada, e in ogni caso dipenderebbe dall'ora e dall'indirizzo.",
      },
      {
        question: "Il Marconi Express è un'opzione migliore?",
        answer:
          "Per certi viaggi sì, sinceramente. È una monorotaia fra l'aeroporto e Bologna Centrale, e l'aeroporto indica un percorso di sette minuti. Risolve il problema di raggiungere la stazione. Non risolve quello di arrivare a un indirizzo con i bagagli, che è un'altra cosa.",
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
    heading: "Mandate la via, non la città",
    body: "A Bologna è la via a determinare ciò che è possibile, perché è la via a determinare quale delle tre fasce si applica. L'indirizzo, la data e l'ora, il volo o il treno se ce n'è uno, e quante persone siete con quanti bagagli.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Bologna Marconi", page: "blq" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const bolognaHub: Record<Locale, BolognaHub> = { en, it };
