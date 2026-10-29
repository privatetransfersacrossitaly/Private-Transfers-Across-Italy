import type { PompeiiDestination } from "./types";

/**
 * Pompeii.
 *
 * ── What the recheck settled, and what it did not ─────────────────────────
 * Phase 1 flagged a real doubt: the three named places might be ticket-office
 * locations rather than entrances. The park's "How to visit the excavations"
 * page settles it — "Access to the Pompeii archaeological site is by showing
 * your entrance ticket … through three entrances", and it names them. They are
 * entrances.
 *
 * What no official page states is whether any of them can be **reached by a
 * vehicle**. The park's "How to get there" page gives one line for cars — the
 * A3 exit — and no road directions, no drop-off and no car park. So this page
 * names the gates and declines to say a car can get to them.
 *
 * The park also names them inconsistently across its own two pages. One calls
 * them Porta Marina, Piazza Esedra and Piazza Anfiteatro; the other calls them
 * Porta Marina Superiore, Porta Marina Inferiore (also known as Piazza Esedra)
 * and Piazza Anfiteatro. Both namings appear here, because a passenger holding
 * one of them needs to recognise the other.
 *
 * ── The fact that earns this page ────────────────────────────────────────
 * The park's current access regulation — linked from its own site as "Decreto
 * 446 del 23/12/2025 – Nuovo regolamento" — lists among the things a visitor
 * may not do: "to enter with suitcases or bulky bags (permitted size 30x30x15
 * cm)". For anyone arriving by car with luggage, and above all for a cruise
 * passenger on a day call, that single line changes the shape of the day more
 * than anything else published about the site. It belongs in the body, not a
 * footnote.
 *
 * ── The dated claim ──────────────────────────────────────────────────────
 * The park's answer about parking is useful and old: published **29 May 2018**,
 * with no last-updated field. It is carried here with that date stated in the
 * copy and in the type, as what the park said then — never as confirmation of
 * what is true now.
 */

const gatesSourceEn = {
  text: "The three entrances, their street addresses and the single line about arriving by car are published by the Archaeological Park of Pompeii. Its pages were read on 27 October 2026. Neither page states whether any entrance can be reached by a vehicle:",
  linkText: "the park publishes its own access information",
  href: "https://pompeiisites.org/en/visiting-info/how-to-get-there/",
};

const gatesSourceIt = {
  text: "I tre ingressi, i loro indirizzi e l'unica riga sull'arrivo in auto sono pubblicati dal Parco Archeologico di Pompei. Le sue pagine sono state consultate il 27 ottobre 2026. Nessuna delle due dichiara se un ingresso sia raggiungibile da un veicolo:",
  linkText: "il Parco pubblica le proprie informazioni di accesso",
  href: "https://pompeiisites.org/en/visiting-info/how-to-get-there/",
};

const rulesSourceEn = {
  text: "The prohibitions are set out in the park's regulations for visitors, which its own page links as “Decreto 446 del 23/12/2025 – Nuovo regolamento”. Read on 27 October 2026:",
  linkText: "the park's current access regulation",
  href: "https://pompeiisites.org/en/visiting-info/regulations-for-visitors/",
};

const rulesSourceIt = {
  text: "I divieti sono stabiliti dal regolamento di accesso del Parco, che la sua stessa pagina collega come «Decreto 446 del 23/12/2025 – Nuovo regolamento». Consultato il 27 ottobre 2026:",
  linkText: "il regolamento di accesso in vigore",
  href: "https://pompeiisites.org/en/visiting-info/regulations-for-visitors/",
};

const parkingSourceEn = {
  text: "This answer is published in the park's own FAQ, which carries a publication date of 29 May 2018 and no last-updated field. It is quoted here with that date because it is the park's statement from then, not a confirmation of what is true now:",
  linkText: "the park's 2018 answer about parking",
  href: "https://pompeiisites.org/en/faq-en/e-presente-un-parcheggio-per-i-visitatori/",
};

const parkingSourceIt = {
  text: "Questa risposta è pubblicata nelle FAQ del Parco, che riportano la data di pubblicazione 29 maggio 2018 e nessun campo di ultimo aggiornamento. È citata qui con quella data perché è ciò che il Parco dichiarava allora, non una conferma di come stiano le cose oggi:",
  linkText: "la risposta del Parco sul parcheggio, del 2018",
  href: "https://pompeiisites.org/en/faq-en/e-presente-un-parcheggio-per-i-visitatori/",
};

const en: PompeiiDestination = {
  meta: {
    title: "Private transfers to Pompeii",
    description:
      "Pompeii has three entrances, which the archaeological park itself names two different ways, and an access regulation that keeps suitcases outside them.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers to Pompeii",
    lead:
      "Three gates, in three different parts of the town, and the park names them two different ways on its own website. Getting this one detail right is most of what a transfer to Pompeii involves.",
    primaryCta: "Request a quotation",
    secondaryCta: "What cannot come in",
    modes: [
      {
        id: "porta-marina",
        label: "Also called Porta Marina Superiore",
        name: "Porta Marina",
        detail:
          "Published address: via Villa dei Misteri. The upper of the two Porta Marina gates in the park's other naming.",
      },
      {
        id: "piazza-esedra",
        label: "Also called Porta Marina Inferiore",
        name: "Piazza Esedra",
        detail:
          "Published address: piazza Porta Marina Inferiore. The park states the two names are the same place.",
      },
      {
        id: "piazza-anfiteatro",
        label: "One name on both pages",
        name: "Piazza Anfiteatro",
        detail:
          "Published address: piazza Immacolata. At the far end of the site from the Porta Marina gates.",
      },
    ],
  },

  entrances: {
    id: "entrances",
    eyebrow: "Three gates, two sets of names",
    heading: "Pompeii's three gates, and why the names differ",
    lead:
      "The park is emphatic that there are three entrances. It is less consistent about what they are called.",
    paragraphs: [
      "On its page about visiting, the park writes that access “is by showing your entrance ticket … through three entrances”, and lists them as Porta Marina Superiore, Porta Marina Inferiore (also known as Piazza Esedra) and Piazza Anfiteatro. On its page about getting there, the same three appear as Porta Marina (via Villa dei Misteri), Piazza Esedra (piazza Porta Marina Inferiore) and Piazza Anfiteatro (piazza Immacolata).",
      "Both namings are the park's own, and both are given above, because a visitor holding a ticket or a tour note that uses one set needs to recognise the other. What matters for a journey is which of the three you are going to: the Porta Marina gates and Piazza Anfiteatro are at opposite ends of the site, and arriving at the wrong one is a long walk around the walls rather than a short correction.",
      "What the park does not publish anywhere we could read is whether a vehicle can reach any of them. For cars it gives a single line — the A3 Napoli-Salerno motorway, exit Pompeii Scavi — and no road directions beyond it, no set-down point and no waiting place. So this page names the gates and stops there.",
    ],
    limits: {
      heading: "What this page does not claim",
      body: "That any entrance can be driven to or stopped at; that a drop-off point exists; any distance, journey time or walking time between the gates; or where a vehicle may wait. The park publishes none of it, and the addresses above are the gates' own addresses, not places a car has been confirmed able to reach.",
    },
    source: gatesSourceEn,
  },

  rules: {
    id: "rules",
    eyebrow: "The regulation at the gate",
    heading: "What cannot come in with you",
    lead:
      "The park's current access regulation matters more to a transfer than its ruins do, because it decides what you can bring from the car.",
    items: [
      {
        term: "Suitcases and bulky bags",
        detail:
          "The regulation lists, among the things a visitor may not do, “to enter with suitcases or bulky bags (permitted size 30x30x15 cm)”. If you are arriving with luggage — off a ship, or between hotels — the cases do not come through the gate with you. The park does not describe a left-luggage arrangement on the pages we read, so do not assume one.",
      },
      {
        term: "Vehicles of any type",
        detail:
          "Also prohibited: “to bring in unauthorised (including electric) vehicles of any type”. Whatever the arrangement outside the gate, nothing drives inside the park.",
      },
      {
        term: "Bicycles and scooters",
        detail:
          "Listed separately in the same article — “to bring in bicycles, scooters or other motorised vehicles”.",
      },
      {
        term: "A ticket, shown at the gate",
        detail:
          "The regulation's article on entry states that “In order to enter the Archaeological Park of Pompeii, visitors will be asked to show a ticket”, and that staff may request an identification document. We do not sell tickets or admissions.",
      },
    ],
    note:
      "The luggage line is the one to act on. A cruise passenger calling for the day, or anyone travelling between hotels, should settle what happens to the cases before the car leaves — because the gate will not.",
    source: rulesSourceEn,
  },

  parking: {
    id: "parking",
    heading: "The park's answer about parking, and its date",
    asOf: "Published 29 May 2018",
    body:
      "Asked whether there is a parking area for visitors, the park answers: “No. Outside the Archaeological Park there are many municipal parking spaces available at a cost, delineated by blue lines. There are also several private car parks.”",
    caution:
      "That page carries a publication date of 29 May 2018 and no last-updated field. It is quoted here as what the park said then. It is not confirmation that the same arrangements, spaces or costs exist now, and this page does not name, recommend or describe any car park.",
    source: parkingSourceEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover at Pompeii",
    body: "We arrange transfers in Campania, Pompeii included. That is our own operating position — the park publishes nothing about us, and nothing here should be read as an arrangement with it, an endorsement by it, or permission to stop or wait anywhere in particular. Which gate the driver takes you to, and what happens to your luggage, are settled in the reply to your request.",
  },

  send: {
    id: "send",
    heading: "What to send with a Pompeii request",
    lead:
      "Two of these are specific to Pompeii, and both come from the park's own rules.",
    items: [
      "Where you are starting from and the date",
      "Which of the three gates you want — Porta Marina, Piazza Esedra or Piazza Anfiteatro",
      "Whether you are travelling with luggage, and how much",
      "Whether you want the car to wait, and roughly for how long",
      "If you are on a cruise call, the latest time you must be back on board",
    ],
    note:
      "Tell us about the luggage even if it seems beside the point. The park's size limit for what may be carried in is 30x30x15 cm, so what happens to a suitcase has to be part of the arrangement rather than a surprise at the gate.",
  },

  onward: {
    id: "onward",
    heading: "Nearby",
    items: [
      {
        page: "naples",
        label: "Transfers in Naples",
        detail:
          "The regional hub — four arrival points with one name, and which of them you actually mean.",
      },
      {
        page: "naples-cruise-port",
        label: "The cruise terminal at the Stazione Marittima",
        detail:
          "Where most Pompeii day visits begin, and the quay to name when you ask.",
      },
      {
        page: "caserta",
        label: "Transfers to Caserta",
        detail:
          "The other Campania site whose own pages decide the journey — two gates, and no parking of its own.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Pompeii questions",
    lead: "Mostly about the gate and the luggage.",
    items: [
      {
        question: "Can we take our suitcases in?",
        answer:
          "No. The park's access regulation prohibits entering with suitcases or bulky bags and gives a permitted size of 30x30x15 cm. The pages we read describe no left-luggage arrangement, so settle what happens to the cases when you ask about the journey rather than at the gate.",
      },
      {
        question: "Which entrance should we ask for?",
        answer:
          "Whichever your ticket, tour or itinerary names — and tell us that name. The park calls the same gates by two different sets of names on its own site: Porta Marina is also Porta Marina Superiore, and Piazza Esedra is also Porta Marina Inferiore. Piazza Anfiteatro is at the other end of the site.",
      },
      {
        question: "Where exactly will the driver drop us?",
        answer:
          "Settled in the reply to your request. The park publishes one line about arriving by car — the A3 exit — and no drop-off point, no waiting place and no statement that any entrance can be reached by a vehicle. We would rather tell you that than invent a kerb.",
      },
      {
        question: "Is there parking at the site?",
        answer:
          "The park answered that question in 2018 with a flat no, pointing to paid municipal spaces and private car parks outside it. That answer is dated 29 May 2018 and we are not treating it as current, so this page does not name or describe any car park.",
      },
      {
        question: "How long does the drive take, and what does it cost?",
        answer:
          "Both come back with the quotation. This site does not publish distances, journey times or fares on any page, because the honest answer depends on where you are starting, the day and the traffic.",
      },
      {
        question: "Do you run tours of Pompeii, or sell tickets?",
        answer:
          "No. We drive. We are not a tour operator and we do not sell tickets or admissions. A day built around the site with the stops you want is a different kind of request, quoted as a day rather than as a fare between two points.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Name the gate, and the luggage",
    body:
      "Porta Marina, Piazza Esedra or Piazza Anfiteatro, the date, and whether there are cases in the boot. Those three things make a reply useful.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "The Naples cruise terminal",
      page: "naples-cruise-port",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: PompeiiDestination = {
  meta: {
    title: "Transfer privati per Pompei",
    description:
      "Tre ingressi, chiamati in due modi diversi dal Parco stesso, e un regolamento che tiene fuori le valigie. Che cosa il Parco Archeologico di Pompei pubblica sull'arrivo, e che cosa no.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati per Pompei",
    lead:
      "Tre cancelli, in tre punti diversi della città, e il Parco li chiama in due modi diversi sul proprio sito. Azzeccare questo dettaglio è gran parte di quello che comporta un transfer per Pompei.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Cosa non può entrare",
    modes: [
      {
        id: "porta-marina",
        label: "Detto anche Porta Marina Superiore",
        name: "Porta Marina",
        detail:
          "Indirizzo pubblicato: via Villa dei Misteri. Il superiore dei due accessi di Porta Marina, nell'altra denominazione del Parco.",
      },
      {
        id: "piazza-esedra",
        label: "Detta anche Porta Marina Inferiore",
        name: "Piazza Esedra",
        detail:
          "Indirizzo pubblicato: piazza Porta Marina Inferiore. Il Parco precisa che i due nomi indicano lo stesso luogo.",
      },
      {
        id: "piazza-anfiteatro",
        label: "Un solo nome su entrambe le pagine",
        name: "Piazza Anfiteatro",
        detail:
          "Indirizzo pubblicato: piazza Immacolata. All'estremità del sito opposta agli accessi di Porta Marina.",
      },
    ],
  },

  entrances: {
    id: "ingressi",
    eyebrow: "Tre cancelli, due serie di nomi",
    heading: "I tre cancelli di Pompei, e perché i nomi non coincidono",
    lead:
      "Il Parco è categorico sul fatto che gli ingressi siano tre. È meno coerente su come si chiamino.",
    paragraphs: [
      "Nella pagina sulla visita, il Parco scrive che l'accesso avviene «showing your entrance ticket … through three entrances», mostrando il biglietto a uno dei tre ingressi, e li elenca come Porta Marina Superiore, Porta Marina Inferiore (detta anche Piazza Esedra) e Piazza Anfiteatro. Nella pagina su come arrivare, gli stessi tre compaiono come Porta Marina (via Villa dei Misteri), Piazza Esedra (piazza Porta Marina Inferiore) e Piazza Anfiteatro (piazza Immacolata).",
      "Entrambe le denominazioni sono del Parco, ed entrambe sono riportate qui sopra, perché chi ha in mano un biglietto o una nota di viaggio che usa una delle due deve riconoscere l'altra. Per il viaggio conta quale dei tre: gli accessi di Porta Marina e Piazza Anfiteatro stanno alle estremità opposte del sito, e arrivare a quello sbagliato significa un lungo giro lungo le mura, non una piccola correzione.",
      "Quello che il Parco non pubblica da nessuna parte che abbiamo potuto leggere è se un veicolo possa raggiungerne qualcuno. Per le auto indica una sola riga — l'autostrada A3 Napoli-Salerno, uscita Pompei Scavi — e nient'altro: nessuna indicazione stradale, nessun punto di discesa, nessun luogo d'attesa. Questa pagina nomina quindi i cancelli e si ferma lì.",
    ],
    limits: {
      heading: "Che cosa questa pagina non afferma",
      body: "Che un ingresso sia raggiungibile o accostabile in auto; che esista un punto di discesa; distanze, tempi di percorrenza o di cammino fra i cancelli; né dove un veicolo possa attendere. Il Parco non pubblica nulla di tutto questo, e gli indirizzi qui sopra sono quelli dei cancelli, non luoghi di cui sia confermato che un'auto possa raggiungerli.",
    },
    source: gatesSourceIt,
  },

  rules: {
    id: "regole",
    eyebrow: "Il regolamento al cancello",
    heading: "Cosa non può entrare con voi",
    lead:
      "Per un transfer il regolamento di accesso in vigore conta più degli scavi, perché decide cosa potete portare giù dall'auto.",
    items: [
      {
        term: "Valigie e borse ingombranti",
        detail:
          "Il regolamento elenca, fra le cose che un visitatore non può fare, «to enter with suitcases or bulky bags (permitted size 30x30x15 cm)»: entrare con valigie o borse ingombranti, con una misura consentita di 30x30x15 cm. Se arrivate con i bagagli — da una nave, o fra due alberghi — le valigie non passano il cancello con voi. Nelle pagine che abbiamo letto il Parco non descrive un deposito bagagli: non datelo per scontato.",
      },
      {
        term: "Veicoli di qualsiasi tipo",
        detail:
          "Vietato anche «to bring in unauthorised (including electric) vehicles of any type»: introdurre veicoli non autorizzati di qualunque tipo, compresi quelli elettrici. Qualunque sia l'organizzazione fuori dal cancello, dentro il Parco non si guida.",
      },
      {
        term: "Biciclette e monopattini",
        detail:
          "Elencati a parte nello stesso articolo: «to bring in bicycles, scooters or other motorised vehicles».",
      },
      {
        term: "Il biglietto, mostrato al cancello",
        detail:
          "L'articolo sull'ingresso stabilisce che «In order to enter the Archaeological Park of Pompeii, visitors will be asked to show a ticket», e che il personale può chiedere un documento d'identità. Noi non vendiamo biglietti né ingressi.",
      },
    ],
    note:
      "La riga sui bagagli è quella su cui agire. Chi arriva in crociera per la giornata, o si sposta fra due alberghi, deve decidere che fine fanno le valigie prima che l'auto parta, perché al cancello non si deciderà.",
    source: rulesSourceIt,
  },

  parking: {
    id: "parcheggio",
    heading: "La risposta del Parco sul parcheggio, e la sua data",
    asOf: "Pubblicata il 29 maggio 2018",
    body:
      "Alla domanda se esista un parcheggio per i visitatori, il Parco risponde: «No. Outside the Archaeological Park there are many municipal parking spaces available at a cost, delineated by blue lines. There are also several private car parks» — no, fuori dal Parco ci sono molti stalli comunali a pagamento, delimitati dalle strisce blu, e diversi parcheggi privati.",
    caution:
      "Quella pagina riporta la data di pubblicazione 29 maggio 2018 e nessun campo di ultimo aggiornamento. È citata qui come ciò che il Parco dichiarava allora. Non è una conferma che oggi esistano gli stessi stalli, le stesse condizioni o gli stessi costi, e questa pagina non nomina, consiglia né descrive alcun parcheggio.",
    source: parkingSourceIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo a Pompei",
    body: "Organizziamo transfer in Campania, Pompei compresa. È la nostra posizione operativa: il Parco non pubblica nulla sul nostro conto, e niente qui va letto come un accordo con esso, un suo avallo o un permesso di fermarsi o attendere in un punto preciso. A quale cancello vi porta l'autista, e che fine fanno i bagagli, si definiscono nella risposta alla vostra richiesta.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per Pompei",
    lead:
      "Due di queste voci sono specifiche di Pompei, ed entrambe vengono dalle regole del Parco.",
    items: [
      "Da dove partite e la data",
      "Quale dei tre cancelli volete: Porta Marina, Piazza Esedra o Piazza Anfiteatro",
      "Se viaggiate con bagagli, e quanti",
      "Se volete che l'auto attenda, e per quanto tempo circa",
      "Se siete in crociera, l'ora entro cui dovete essere di nuovo a bordo",
    ],
    note:
      "Parlateci dei bagagli anche se sembra un dettaglio marginale. La misura consentita dal Parco per ciò che si può portare dentro è 30x30x15 cm: che fine fa una valigia deve far parte dell'organizzazione, non essere una sorpresa al cancello.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Nei dintorni",
    items: [
      {
        page: "naples",
        label: "Transfer a Napoli",
        detail:
          "Il riferimento regionale: quattro punti d'arrivo con un solo nome, e quale intendete davvero.",
      },
      {
        page: "naples-cruise-port",
        label: "Il terminal crociere alla Stazione Marittima",
        detail:
          "Da dove parte la maggior parte delle giornate a Pompei, e la banchina da indicare quando scrivete.",
      },
      {
        page: "caserta",
        label: "Transfer per Caserta",
        detail:
          "L'altro sito campano in cui sono le sue stesse pagine a decidere il viaggio: due cancelli, e nessun parcheggio proprio.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Pompei",
    lead: "In gran parte sul cancello e sui bagagli.",
    items: [
      {
        question: "Possiamo portare dentro le valigie?",
        answer:
          "No. Il regolamento di accesso del Parco vieta di entrare con valigie o borse ingombranti e indica una misura consentita di 30x30x15 cm. Le pagine che abbiamo letto non descrivono alcun deposito bagagli: decidete che fine fanno le valigie quando chiedete il viaggio, non al cancello.",
      },
      {
        question: "Quale ingresso dobbiamo chiedere?",
        answer:
          "Quello indicato dal vostro biglietto, dalla visita o dal programma — e ditecene il nome. Il Parco chiama gli stessi cancelli con due serie di nomi diverse sul proprio sito: Porta Marina è anche Porta Marina Superiore, e Piazza Esedra è anche Porta Marina Inferiore. Piazza Anfiteatro è all'altra estremità del sito.",
      },
      {
        question: "Dove ci farà scendere esattamente l'autista?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. Il Parco pubblica una sola riga sull'arrivo in auto — l'uscita dell'A3 — e nessun punto di discesa, nessun luogo d'attesa e nessuna indicazione che un ingresso sia raggiungibile da un veicolo. Preferiamo dirvelo piuttosto che inventare un marciapiede.",
      },
      {
        question: "C'è parcheggio al sito?",
        answer:
          "Il Parco ha risposto a questa domanda nel 2018 con un no netto, rimandando agli stalli comunali a pagamento e ai parcheggi privati esterni. Quella risposta è datata 29 maggio 2018 e non la trattiamo come attuale, quindi questa pagina non nomina né descrive alcun parcheggio.",
      },
      {
        question: "Quanto dura il viaggio e quanto costa?",
        answer:
          "Entrambe le cose tornano con il preventivo. Questo sito non pubblica distanze, tempi di percorrenza o tariffe su nessuna pagina, perché la risposta onesta dipende da dove partite, dal giorno e dal traffico.",
      },
      {
        question: "Organizzate visite guidate di Pompei o vendete biglietti?",
        answer:
          "No. Noi guidiamo. Non siamo un tour operator e non vendiamo biglietti né ingressi. Una giornata costruita intorno al sito con le tappe che volete è un tipo di richiesta diverso, e si preventiva come giornata e non come tariffa fra due punti.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il cancello, e i bagagli",
    body:
      "Porta Marina, Piazza Esedra o Piazza Anfiteatro, la data, e se nel baule ci sono valigie. Sono le tre cose che rendono utile una risposta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Il terminal crociere di Napoli",
      page: "naples-cruise-port",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const pompeii = { en, it };
