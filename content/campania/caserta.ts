import type { CasertaDestination } from "./types";

/**
 * Caserta.
 *
 * ── The entrance number this page will not give you ───────────────────────
 * The palace's own site numbers the Corso Giannone entrance twice, and
 * differently. Its "how to get here" page says **Corso Pietro Giannone, 5**;
 * its accessibility page says **Corso Pietro Giannone, 17**. Both carry a 2026
 * copyright and the accessibility page describes a change dated 1 October 2026,
 * so neither is obviously the stale one.
 *
 * The page that settles it is the one written specifically about the
 * entrances — "Gli ingressi della Reggia di Caserta: piazza Carlo di Borbone e
 * corso Giannone" — and it gives **no street number at all**, only "corso
 * Giannone". That is the authoritative treatment, so it is the one this page
 * copies: the entrance is named, not numbered, and a note says why.
 *
 * Averaging them, picking the newer-looking one, or quietly choosing 17
 * because two mentions beat one would all be inventing a street address for a
 * gate a driver is being sent to. The palace declines to number it; so do we.
 *
 * ── What the palace does publish, and what it does not ───────────────────
 * Verbatim, on its "how to get here" page: **"The Museum does not have its own
 * public parking."** Its accessibility page adds **"Please note that parking
 * isn't permitted inside the Royal Palace."** Two independent statements, both
 * negative, both current.
 *
 * What it never publishes is a drop-off arrangement for cars. So that is the
 * declared gap, and it sits in its own band rather than in the FAQ.
 *
 * Opening hours, ticket offices and admissions are deliberately absent. The
 * palace's own pages disagree about which entrance has a ticket office, we do
 * not sell admissions, and a transfer page is not where anyone should be
 * reading either.
 */

const sourceEn = {
  text: "The entrances, the motorway exits and the statement that the palace has no public parking of its own are published by the Reggia di Caserta, which is run by the Ministry of Culture. Its pages were read on 27 October 2026. The page written specifically about the two entrances gives no street number for Corso Giannone, and neither does this one:",
  linkText: "the palace publishes its own access information",
  href: "https://reggiadicaserta.cultura.gov.it/en/how-to-get-here/",
};

const sourceIt = {
  text: "Gli ingressi, le uscite autostradali e la dichiarazione che la Reggia non ha un parcheggio pubblico proprio sono pubblicati dalla Reggia di Caserta, che fa capo al Ministero della Cultura. Le sue pagine sono state consultate il 27 ottobre 2026. La pagina dedicata specificamente ai due ingressi non indica un numero civico per corso Giannone, e nemmeno questa lo fa:",
  linkText: "la Reggia pubblica le proprie informazioni di accesso",
  href: "https://reggiadicaserta.cultura.gov.it/gli-ingressi-della-reggia-di-caserta-piazza-carlo-di-borbone-e-corso-giannone-tutte-le-info/",
};

const en: CasertaDestination = {
  meta: {
    title: "Private transfers to Caserta",
    description:
      "The Royal Palace of Caserta publishes two entrances and states that it has no public parking of its own. Which gate you want, and what the palace does not publish about cars.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers to Caserta",
    lead:
      "The Royal Palace of Caserta has two entrances, and its main one faces the square in front of Caserta railway station. That makes the palace easy to find and surprisingly awkward to be dropped at — and on the second point the palace publishes almost nothing at all.",
    primaryCta: "Request a quotation",
    secondaryCta: "The two entrances",
    diagram: {
      caption:
        "The chain the palace publishes, and the one thing it does not: nowhere along it does the palace name a point where a car may stop or wait. That arrangement is settled in the reply to your request.",
      nodes: [
        {
          id: "motorway",
          label: "A1 Caserta Nord · A30 Caserta Sud",
          detail:
            "The two exits the palace names, each followed by its own instruction to continue on the signs for Caserta.",
        },
        {
          id: "square",
          label: "The station square",
          detail:
            "The palace states that Caserta station is located in front of it, and that you leave the station on the Piazza Carlo di Borbone side.",
        },
        {
          id: "entrance",
          label: "Piazza Carlo di Borbone",
          detail:
            "The main entrance, across that square — preferential access for disabled visitors and the obligatory one for ArteCard holders.",
          emphasis: true,
        },
      ],
      gaps: ["follow the signs for Caserta", "cross the square"],
    },
  },

  entrances: {
    id: "entrances",
    eyebrow: "Two gates, not interchangeable",
    heading: "Which of the palace's two entrances you want",
    lead:
      "The palace has two, and the choice is not cosmetic: one of them is compulsory for some visitors and the other opens straight into the park.",
    columns: [
      {
        id: "borbone",
        heading: "Piazza Carlo di Borbone",
        subheading: "The main entrance, facing the station square",
        rows: [
          {
            term: "Leads to",
            detail:
              "The Vanvitellian complex, and through the palace's central gate to the Cannocchiale — the long view down the park.",
          },
          {
            term: "Who must use it",
            detail:
              "ArteCard holders, for whom the palace states this is the obligatory entrance. It is also the entrance with preferential access for disabled visitors.",
          },
          {
            term: "Bicycles",
            detail: "Not permitted at this entrance, in the palace's own words.",
          },
          {
            term: "Address published",
            detail: "Piazza Carlo di Borbone, 81100 Caserta CE.",
          },
        ],
      },
      {
        id: "giannone",
        heading: "Corso Giannone",
        subheading: "The park entrance, named but not numbered",
        rows: [
          {
            term: "Leads to",
            detail:
              "Directly into the Royal Park. The palace recommends this entrance if you want to see the Royal Park and the English Garden only.",
          },
          {
            term: "What it does not limit",
            detail:
              "Your route. The palace states that entering by one gate or the other implies no limitation on the visit itinerary.",
          },
          {
            term: "Bicycles",
            detail: "Permitted here — the palace calls it the only access allowed for bicycles.",
          },
          {
            term: "Street number",
            detail:
              "Not given on this page, and not given by the palace's own page about the entrances. See the note below.",
          },
        ],
      },
    ],
    note:
      "A deliberate omission: two pages on the palace's own site number this entrance differently — one says Corso Pietro Giannone 5, the other says 17 — and both look current. The page the palace wrote specifically about its entrances gives no number at all, so neither does this one. If you need the civic number for a satellite navigation system, take it from the palace rather than from us.",
    source: sourceEn,
  },

  stopping: {
    id: "stopping",
    eyebrow: "Where the car stops",
    heading: "The palace has no parking of its own, and says so",
    lead:
      "This is the most useful sentence on the palace's website, and it is a negative one.",
    paragraphs: [
      "The palace states plainly, on its own page about reaching it, that “The Museum does not have its own public parking.” Its accessibility page puts the same thing from the other direction: “Please note that parking isn't permitted inside the Royal Palace.” Those are two separate statements, in the palace's own words, and they agree.",
      "What the palace does not publish anywhere we could read is a drop-off arrangement for cars — no set-down point, no waiting place, no gate a vehicle may approach. The station square in front of the main entrance is a public space governed by the municipality, not by the palace, and nothing on the palace's site describes how a car should use it.",
      "So this page does not tell you where your driver will stop. That is settled when your journey is quoted, against the rules in force on the day, rather than guessed at here.",
    ],
    limits: {
      heading: "What this page does not claim",
      body: "That any particular kerb, square or gate may be used by a vehicle; that parking exists nearby or what it costs; that a car can approach either entrance; or any opening time, ticket arrangement or admission price. The palace publishes none of that for cars, we do not sell admissions, and a transfer page is the wrong place to read either.",
    },
    source: sourceEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover in Caserta",
    body: "We arrange transfers in Campania, Caserta included. That is our own operating position — the palace publishes nothing about us, and nothing here should be read as an arrangement with it, an endorsement by it, or permission to stop anywhere in particular. Where a driver sets you down is settled in the reply to your request.",
  },

  send: {
    id: "send",
    heading: "What to send with a Caserta request",
    lead:
      "Mostly the same as any journey, plus the one detail that is specific to a palace with two gates.",
    items: [
      "Where you are starting from and the date",
      "Which entrance you want — Piazza Carlo di Borbone or Corso Giannone",
      "The time you would like to arrive, and whether anything is booked for a fixed time",
      "Whether you want the car to wait, and roughly for how long",
      "Passengers and luggage",
    ],
    note:
      "Naming the entrance matters more here than at most destinations: the two gates are on different sides of the complex, and the one you need depends on what you have booked.",
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
        page: "pompeii",
        label: "Transfers to Pompeii",
        detail:
          "The other Campania site where the rules at the gate decide the journey, and where a suitcase cannot come in with you.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Caserta questions",
    lead: "Including the one about the street number.",
    items: [
      {
        question: "Why does this page not give the Corso Giannone street number?",
        answer:
          "Because the palace's own site gives two different numbers for it — 5 on one page, 17 on another — and the page it wrote specifically about its entrances gives none. We would rather name the gate than invent its address. If a satellite navigation system needs a number, take it from the palace directly.",
      },
      {
        question: "Can we be dropped at the entrance?",
        answer:
          "Settled in the reply to your request. The palace publishes no drop-off point and states that it has no public parking of its own, so there is no arrangement here for us to describe honestly. The square in front of the main entrance is municipal, not the palace's.",
      },
      {
        question: "Is there parking at the palace?",
        answer:
          "Not the palace's own. In its words, “The Museum does not have its own public parking,” and its accessibility page adds that parking is not permitted inside the Royal Palace. What exists outside it is not published by the palace, so this page does not describe it.",
      },
      {
        question: "Which entrance should we ask for?",
        answer:
          "Piazza Carlo di Borbone if you are visiting the palace itself, or hold an ArteCard, for which the palace states it is the obligatory entrance. Corso Giannone if you want the Royal Park and the English Garden only. The palace says either gate gives the full visit route.",
      },
      {
        question: "Do you run tours of the palace?",
        answer:
          "No. We drive; we are not a tour operator and we do not sell admissions. A day built around Caserta with the stops you want is a different kind of request, and it is quoted as a day rather than as a fare between two points.",
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
    heading: "Name the gate, and the day",
    body:
      "Piazza Carlo di Borbone or Corso Giannone, the date, and whether the car is waiting. The rest of the arrangement comes back with the quotation.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "Naples and its four gateways",
      page: "naples",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: CasertaDestination = {
  meta: {
    title: "Transfer privati per Caserta",
    description:
      "La Reggia di Caserta pubblica due ingressi e dichiara di non avere un parcheggio pubblico proprio. Quale cancello vi serve, e cosa la Reggia non pubblica sulle auto.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati per Caserta",
    lead:
      "È uno dei pochi grandi siti italiani il cui ingresso principale guarda il piazzale di una stazione ferroviaria. Questo lo rende facilissimo da trovare e sorprendentemente scomodo come punto di discesa, e sulla seconda parte la Reggia pubblica molto meno di quanto si immagini.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "I due ingressi",
    diagram: {
      caption:
        "La catena che la Reggia pubblica, e l'unica cosa che non pubblica: in nessun punto di questo percorso indica un luogo in cui un'auto possa fermarsi o attendere. Quella modalità si definisce nella risposta alla vostra richiesta.",
      nodes: [
        {
          id: "motorway",
          label: "A1 Caserta Nord · A30 Caserta Sud",
          detail:
            "Le due uscite indicate dalla Reggia, ciascuna seguita dall'indicazione di proseguire secondo i cartelli per Caserta.",
        },
        {
          id: "square",
          label: "Il piazzale della stazione",
          detail:
            "La Reggia dichiara che la stazione di Caserta si trova di fronte a essa, e che si esce dal lato di piazza Carlo di Borbone.",
        },
        {
          id: "entrance",
          label: "Piazza Carlo di Borbone",
          detail:
            "L'ingresso principale, al di là di quel piazzale: accesso preferenziale per i visitatori con disabilità e accesso obbligatorio per i titolari di ArteCard.",
          emphasis: true,
        },
      ],
      gaps: ["seguite i cartelli per Caserta", "attraversate il piazzale"],
    },
  },

  entrances: {
    id: "ingressi",
    eyebrow: "Due cancelli, non equivalenti",
    heading: "Quale dei due ingressi della Reggia vi serve",
    lead:
      "La Reggia ne ha due, e la scelta non è estetica: uno è obbligatorio per alcuni visitatori, l'altro si apre direttamente sul parco.",
    columns: [
      {
        id: "borbone",
        heading: "Piazza Carlo di Borbone",
        subheading: "L'ingresso principale, di fronte al piazzale della stazione",
        rows: [
          {
            term: "Dove porta",
            detail:
              "Al complesso vanvitelliano e, attraverso il cancello centrale del Palazzo reale, al Cannocchiale: la lunga prospettiva sul parco.",
          },
          {
            term: "Chi deve usarlo",
            detail:
              "I titolari di ArteCard, per i quali la Reggia indica questo come accesso obbligatorio. È anche l'ingresso con accesso preferenziale per i visitatori con disabilità.",
          },
          {
            term: "Biciclette",
            detail: "Non consentite a questo ingresso, secondo le parole della Reggia.",
          },
          {
            term: "Indirizzo pubblicato",
            detail: "Piazza Carlo di Borbone, 81100 Caserta CE.",
          },
        ],
      },
      {
        id: "giannone",
        heading: "Corso Giannone",
        subheading: "L'ingresso del parco, indicato ma senza civico",
        rows: [
          {
            term: "Dove porta",
            detail:
              "Direttamente nel Parco reale. La Reggia consiglia questo ingresso a chi vuole visitare soltanto il Parco reale e il Giardino Inglese.",
          },
          {
            term: "Cosa non limita",
            detail:
              "Il vostro percorso. La Reggia dichiara che l'ingresso dall'uno o dall'altro accesso non implica limitazioni al percorso di visita.",
          },
          {
            term: "Biciclette",
            detail: "Qui sono ammesse: la Reggia lo definisce l'unico accesso consentito alle biciclette.",
          },
          {
            term: "Numero civico",
            detail:
              "Non indicato in questa pagina, e non indicato nemmeno dalla pagina che la Reggia dedica ai propri ingressi. Vedete la nota qui sotto.",
          },
        ],
      },
    ],
    note:
      "Un'omissione voluta: due pagine dello stesso sito della Reggia indicano per questo ingresso numeri civici diversi — una dice corso Pietro Giannone 5, l'altra 17 — ed entrambe sembrano attuali. La pagina che la Reggia ha scritto specificamente sui propri ingressi non indica alcun numero, e quindi nemmeno noi. Se vi serve il civico per un navigatore, prendetelo dalla Reggia e non da noi.",
    source: sourceIt,
  },

  stopping: {
    id: "fermata",
    eyebrow: "Dove si ferma l'auto",
    heading: "La Reggia non ha un parcheggio proprio, e lo dichiara",
    lead:
      "È la frase più utile del sito della Reggia, ed è una frase negativa.",
    paragraphs: [
      "Nella pagina su come raggiungerla, la Reggia dichiara esplicitamente che «The Museum does not have its own public parking»: non ha un parcheggio pubblico proprio. La pagina sull'accessibilità dice la stessa cosa dall'altro lato: «Please note that parking isn't permitted inside the Royal Palace», non è consentito parcheggiare all'interno della Reggia. Sono due dichiarazioni distinte, con le sue parole, e concordano.",
      "Quello che la Reggia non pubblica da nessuna parte che abbiamo potuto leggere è una modalità di discesa per le auto: nessun punto di fermata, nessun luogo d'attesa, nessun cancello a cui un veicolo possa avvicinarsi. Il piazzale della stazione davanti all'ingresso principale è spazio pubblico comunale, non della Reggia, e nulla sul sito della Reggia descrive come un'auto debba usarlo.",
      "Questa pagina non vi dice quindi dove si fermerà il vostro autista. Lo si definisce quando il viaggio viene preventivato, in base alle regole in vigore quel giorno, invece di tirare a indovinare qui.",
    ],
    limits: {
      heading: "Che cosa questa pagina non afferma",
      body: "Che un determinato marciapiede, piazzale o cancello possa essere usato da un veicolo; che esista un parcheggio nelle vicinanze o quanto costi; che un'auto possa avvicinarsi a uno dei due ingressi; né orari, modalità di biglietteria o prezzi d'ingresso. La Reggia non pubblica nulla di tutto questo per le auto, noi non vendiamo biglietti, e una pagina di transfer è il posto sbagliato per leggere l'una o l'altra cosa.",
    },
    source: sourceIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo a Caserta",
    body: "Organizziamo transfer in Campania, Caserta compresa. È la nostra posizione operativa: la Reggia non pubblica nulla sul nostro conto, e niente qui va letto come un accordo con essa, un suo avallo o un permesso di fermarsi in un punto preciso. Dove l'autista vi fa scendere si definisce nella risposta alla vostra richiesta.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per Caserta",
    lead:
      "In gran parte le stesse cose di qualsiasi viaggio, più l'unico dettaglio specifico di una reggia con due cancelli.",
    items: [
      "Da dove partite e la data",
      "Quale ingresso volete: piazza Carlo di Borbone o corso Giannone",
      "A che ora desiderate arrivare, e se avete qualcosa prenotato a orario fisso",
      "Se volete che l'auto attenda, e per quanto tempo circa",
      "Passeggeri e bagagli",
    ],
    note:
      "Indicare l'ingresso conta qui più che in molte altre destinazioni: i due cancelli sono su lati diversi del complesso, e quello che vi serve dipende da ciò che avete prenotato.",
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
        page: "pompeii",
        label: "Transfer per Pompei",
        detail:
          "L'altro sito campano in cui sono le regole al cancello a decidere il viaggio, e dove una valigia non può entrare con voi.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Caserta",
    lead: "Compresa quella sul numero civico.",
    items: [
      {
        question: "Perché questa pagina non indica il civico di corso Giannone?",
        answer:
          "Perché il sito della Reggia ne indica due diversi — 5 su una pagina, 17 su un'altra — e la pagina che ha scritto specificamente sui propri ingressi non ne indica nessuno. Preferiamo nominare il cancello piuttosto che inventarne l'indirizzo. Se a un navigatore serve un numero, prendetelo direttamente dalla Reggia.",
      },
      {
        question: "Possiamo scendere all'ingresso?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. La Reggia non pubblica alcun punto di discesa e dichiara di non avere un parcheggio pubblico proprio: non c'è quindi una modalità che possiamo descrivere onestamente. Il piazzale davanti all'ingresso principale è comunale, non della Reggia.",
      },
      {
        question: "C'è parcheggio alla Reggia?",
        answer:
          "Non suo. Con le sue parole, «The Museum does not have its own public parking», e la pagina sull'accessibilità aggiunge che all'interno della Reggia non è consentito parcheggiare. Quello che esiste all'esterno non è pubblicato dalla Reggia, e quindi questa pagina non lo descrive.",
      },
      {
        question: "Quale ingresso dobbiamo chiedere?",
        answer:
          "Piazza Carlo di Borbone se visitate il Palazzo, o se avete l'ArteCard, per cui la Reggia indica questo come ingresso obbligatorio. Corso Giannone se volete soltanto il Parco reale e il Giardino Inglese. La Reggia precisa che entrambi i cancelli danno accesso all'intero percorso di visita.",
      },
      {
        question: "Organizzate visite guidate della Reggia?",
        answer:
          "No. Noi guidiamo: non siamo un tour operator e non vendiamo biglietti d'ingresso. Una giornata costruita intorno a Caserta con le tappe che volete è un tipo di richiesta diverso, e si preventiva come giornata e non come tariffa fra due punti.",
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
    heading: "Indicate il cancello, e il giorno",
    body:
      "Piazza Carlo di Borbone o corso Giannone, la data, e se l'auto attende. Il resto dell'organizzazione torna con il preventivo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Napoli e i suoi quattro accessi",
      page: "naples",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const caserta = { en, it };
