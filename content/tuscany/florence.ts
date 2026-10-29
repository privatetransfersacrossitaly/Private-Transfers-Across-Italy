import type { Locale } from "@/lib/site";
import type { FlorenceHub } from "./types";

/**
 * The Florence hub.
 *
 * ── The page is built around something it does not know ───────────────────
 * The homepage already tells a reader that Florence has "a strictly regulated
 * centre". This page has to make good on that, and it has to do so without
 * the primary source: the Comune's own ZTL pages refused connection
 * throughout this build, and no official text could be read on whether
 * private-hire vehicles may enter a sector.
 *
 * Rome's and Milan's hubs could each quote the city on exactly that point.
 * This one cannot, so it says so — in the hero, with an accent rule against
 * it, rather than in a footnote. No hours are published anywhere on the page:
 * secondary sources disagree about them, and they change by ordinance and by
 * season.
 *
 * See `docs/tuscany-research-log.md` §3, where Z5 is recorded as blocked.
 */

const ztlSourceEn = {
  text: "The boundary, the hours and the categories allowed through are set and published by the Comune di Firenze, and that is the only version that counts:",
  linkText: "the city's own ZTL service",
  href: "https://ztl.comune.fi.it/",
};

const ztlSourceIt = {
  text: "Il perimetro, gli orari e le categorie ammesse sono stabiliti e pubblicati dal Comune di Firenze, ed è l'unica versione che conta:",
  linkText: "il servizio ZTL del Comune",
  href: "https://ztl.comune.fi.it/",
};

const en: FlorenceHub = {
  meta: {
    title: "Private transfers in Florence",
    description:
      "Two airports, a sector-based limited-traffic centre, and an honest account of what this page could not confirm about reaching an address inside it.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Florence and Tuscany",
    h1: "Private transfers in Florence",
    lead: "Most of what a visitor needs here is straightforward: two airports, one of them not in Florence at all, and a city small enough to cross on foot. The part that is not straightforward is how close a car can get to a historic-centre address — and this page would rather say so than guess.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the ZTL means for you",
    constraint: {
      label: "Before anything else",
      heading: "The restricted centre, and the question we could not answer",
      known: [
        {
          term: "What it is",
          detail:
            "Florence's historic centre is a limited-traffic zone — a ZTL — divided into five lettered sectors: A, B, O, F and G. Its edge is a line of electronic gates that read the plate of every vehicle passing through.",
        },
        {
          term: "Why that matters",
          detail:
            "Which sector an address falls in is part of what decides whether a vehicle can reach it, so the address is the question, not the city.",
        },
        {
          term: "Who sets the rule",
          detail:
            "The Comune di Firenze, which publishes the boundary, the operating hours and the categories of vehicle allowed through.",
        },
      ],
      unknown: {
        label: "What this page cannot tell you",
        body: "Whether a private-hire car may enter a sector. In Rome and in Milan the city names private-hire vehicles among the permitted categories in its own published rules. Florence sets out who may be authorised in schedules annexed to a technical regulation — the Disciplinare Tecnico ZTL — and that document could not be read for this page. Taxis hold an authorisation category of their own; private hire is named in nothing we were able to read, which is not the same thing as being ruled out. So this page makes no claim in either direction, and quotes no operating hours.",
      },
      source: ztlSourceEn,
    },
  },

  arrivals: {
    id: "arrivals",
    eyebrow: "Arriving",
    heading: "Two airports, and only one of them is in Florence",
    lead: "Tuscany is served by a pair of airports under the same operator. Which one your flight uses is usually decided for you, and it changes the journey considerably more than it changes the city you end up in.",
    rows: [
      {
        id: "psa",
        role: "The larger one",
        page: "pisa-airport",
        name: "Pisa Galileo Galilei",
        fact: "PSA · in the comune of Pisa",
        body: "Tuscany's busiest airport, and the usual gateway to Florence despite not being anywhere near it. The name is accurate; the geography is simply wider than the name suggests.",
      },
      {
        id: "flr",
        role: "The closer one",
        page: "florence-airport",
        name: "Florence Peretola",
        fact: "FLR · at the edge of the city",
        body: "Florence's own airport, inside the urban area, and the smaller of the two. Its operator runs the pair as complements and gives them different work, and a single short runway limits the aircraft able to use this one.",
      },
    ],
  },

  ztl: {
    id: "ztl",
    eyebrow: "The centre",
    heading: "What a sector-based ZTL means in practice",
    lead: "Not a verdict, because none is available. What follows is the shape of the thing, so that the question you take to the Comune — or to us — is the right one.",
    paragraphs: [
      "A limited-traffic zone restricts who may drive into an area, and when. Florence's covers the historic centre and is divided into lettered sectors, which is the detail that catches people out: an address a few streets from another can sit under a different sector, and a permission that applies to one is not automatically a permission for the next.",
      "The city also operates a wider scheme of its own around the centre, so there can be more than one layer of rule between a motorway exit and a hotel door. Both layers are the Comune's to define and to change, and both are published by it rather than by anybody writing about it.",
      "What this means for a transfer is easy to state and harder to resolve: the useful question is never whether a car can go into Florence, but whether a car can reach this address, on this date, at this hour. Send the full address when you ask, and that is the question that gets answered — including, if it comes to it, the answer that the nearest practical stopping point is a short walk away.",
      "One rule applies across every category alike: the Comune does not authorise a vehicle that falls outside the emissions parameters set by its own 2018 ordinance. That is a question about the vehicle rather than about the journey, and it is one more reason the answer depends on the particular arrangement rather than on the city in general.",
    ],
    caution: {
      heading: "What this page does not claim",
      body: "That a private-hire vehicle is exempt from Florence's ZTL — nor that it is not. The categories that can be authorised are set out in schedules annexed to the Comune's technical regulation, and that document could not be read for this page, so neither claim is made here. Repeating the Rome and Milan position without it would be an assurance nobody could stand behind. Treat the access question as open until the Comune, or a reply to your request, closes it.",
    },
    source: ztlSourceEn,
  },

  onward: {
    id: "onward",
    heading: "From Florence",
    items: [
      {
        page: "route-psa-florence",
        label: "Pisa Airport to Florence",
        detail: "The commonest Tuscan transfer, and the one between two different cities.",
      },
      {
        page: "route-flr-florence",
        label: "Florence Airport to Florence",
        detail: "The short run in from Peretola.",
      },
      {
        page: "val-dorcia",
        label: "The Val d'Orcia",
        detail:
          "The countryside south of Siena, where no railway reaches and the valley's own authority says a car is the best way to come.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Florence questions",
    lead: "Including the one this page answers with “we do not know”, which is an honest answer rather than a gap.",
    items: [
      {
        question: "Can a car take me to my hotel in the centre?",
        answer:
          "That depends on the address and on rules set by the Comune, and this page will not pretend otherwise. Florence's centre is a sector-based limited-traffic zone, and no official text on private-hire access could be read while this was written. Send the full address with your request and it will be answered for that address — including the possibility that the nearest practical stop is a short walk from the door.",
      },
      {
        question: "What are the ZTL hours?",
        answer:
          "No hours are quoted here, and that is deliberate. They are not the same across the whole zone — the weekday restriction is set out for some sectors and not for others, and a separate summer night restriction covers all five — and when the Comune's own page was last read it was still illustrating the night rule with dates from 2022. Hours that change by ordinance and by season, on a page that is not always current, are exactly the thing to check at the source for your own date.",
      },
      {
        question: "Which airport should I fly into?",
        answer:
          "Usually your airline decides. Pisa is the larger of the two and takes most of the traffic into Tuscany; Peretola is smaller and closer, limited by a short runway to aircraft around the size of an A320neo. A transfer to Florence can be requested from either.",
      },
      {
        question: "How long does it take from Pisa Airport?",
        answer:
          "No journey time appears on these pages. The operator's own 2025 service charter places its airport about a kilometre from Pisa, but says nothing about the distance or the time to Florence, and no other source consulted does either — so none is published, rather than estimated.",
      },
      {
        question: "Can you take me out into Tuscany for the day?",
        answer:
          "A point-to-point transfer to a named address can be requested, and the Val d'Orcia has a page of its own. A day of touring between several stops is a different service, and this site does not claim it: multi-stop days, waiting time and anything involving estate or tasting arrangements would have to be confirmed before they could be offered.",
      },
      {
        question: "Is a request a booking?",
        answer:
          "No. Every journey on this site is an enquiry. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the address, not the city",
    body: "In most Italian cities the name of the city is enough to begin with. In Florence it is the street and the number that decide the answer, because they decide which rules apply. The flight or train, the date and time, the address, and how many of you there are with how much luggage.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Pisa Airport (PSA)", page: "pisa-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: FlorenceHub = {
  meta: {
    title: "Transfer privati a Firenze",
    description:
      "Due aeroporti, un centro a traffico limitato diviso in settori e un resoconto onesto di ciò che questa pagina non ha potuto confermare sull'accesso in auto.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Firenze e la Toscana",
    h1: "Transfer privati a Firenze",
    lead: "Quasi tutto, qui, è semplice: due aeroporti, uno dei quali non è affatto a Firenze, e una città abbastanza piccola da attraversare a piedi. Ciò che semplice non è riguarda quanto un'auto possa avvicinarsi a un indirizzo in centro — e questa pagina preferisce dirlo invece di tirare a indovinare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa comporta la ZTL",
    constraint: {
      label: "Prima di ogni altra cosa",
      heading: "Il centro a traffico limitato, e la domanda a cui non sappiamo rispondere",
      known: [
        {
          term: "Che cos'è",
          detail:
            "Il centro storico di Firenze è una zona a traffico limitato — una ZTL — divisa in cinque settori: A, B, O, F e G. Il suo perimetro è una linea di varchi elettronici che leggono la targa di ogni veicolo che vi transita.",
        },
        {
          term: "Perché conta",
          detail:
            "Il settore in cui ricade un indirizzo concorre a determinare se un veicolo possa raggiungerlo: la domanda è l'indirizzo, non la città.",
        },
        {
          term: "Chi stabilisce la regola",
          detail:
            "Il Comune di Firenze, che pubblica il perimetro, gli orari di vigenza e le categorie di veicoli ammesse.",
        },
      ],
      unknown: {
        label: "Che cosa questa pagina non può dirvi",
        body: "Se un'auto a noleggio con conducente possa entrare in un settore. A Roma e a Milano le norme pubblicate dalle rispettive amministrazioni indicano l'NCC fra le categorie ammesse. Firenze stabilisce chi può essere autorizzato in schede allegate a un regolamento tecnico — il Disciplinare Tecnico ZTL — e quel documento non è stato consultabile per questa pagina. I taxi hanno una propria categoria di autorizzazione; l'NCC non compare in nulla che siamo riusciti a leggere, il che non equivale a un divieto. Questa pagina quindi non afferma nulla né in un senso né nell'altro, e non indica orari.",
      },
      source: ztlSourceIt,
    },
  },

  arrivals: {
    id: "arrivi",
    eyebrow: "Arrivare",
    heading: "Due aeroporti, e solo uno è a Firenze",
    lead: "La Toscana è servita da una coppia di aeroporti gestiti dalla stessa società. Quale dei due usi il vostro volo di solito lo decide la compagnia, e cambia il viaggio molto più di quanto cambi la città in cui arrivate.",
    rows: [
      {
        id: "psa",
        role: "Il più grande",
        page: "pisa-airport",
        name: "Pisa Galileo Galilei",
        fact: "PSA · nel comune di Pisa",
        body: "L'aeroporto più trafficato della Toscana e la porta d'ingresso abituale per Firenze, pur non essendole affatto vicino. Il nome è esatto; è la geografia a essere più ampia di quanto il nome suggerisca.",
      },
      {
        id: "flr",
        role: "Il più vicino",
        page: "florence-airport",
        name: "Firenze Peretola",
        fact: "FLR · al margine della città",
        body: "L'aeroporto di Firenze, dentro l'area urbana, e il più piccolo dei due. Il gestore conduce i due scali come complementari e assegna a ciascuno un ruolo diverso, e un'unica pista corta limita gli aeromobili che possono usare questo.",
      },
    ],
  },

  ztl: {
    id: "ztl",
    eyebrow: "Il centro",
    heading: "Che cosa comporta davvero una ZTL divisa in settori",
    lead: "Non un verdetto, perché non ne abbiamo uno. Quello che segue è la forma della cosa, perché la domanda che porterete al Comune — o a noi — sia quella giusta.",
    paragraphs: [
      "Una zona a traffico limitato stabilisce chi può entrare in un'area e in quali orari. Quella di Firenze riguarda il centro storico ed è divisa in settori contrassegnati da lettere: è il dettaglio che coglie di sorpresa, perché un indirizzo a poche vie da un altro può ricadere in un settore diverso, e un permesso valido per l'uno non è automaticamente valido per l'altro.",
      "La città gestisce inoltre un proprio schema più ampio attorno al centro, quindi fra l'uscita dell'autostrada e la porta dell'hotel può esserci più di uno strato di regole. Entrambi gli strati li definisce e li modifica il Comune, ed entrambi li pubblica il Comune, non chi ne scrive.",
      "Per un transfer la conseguenza è semplice da enunciare e più difficile da risolvere: la domanda utile non è mai se un'auto possa entrare a Firenze, ma se un'auto possa raggiungere questo indirizzo, in questa data, a quest'ora. Mandate l'indirizzo completo quando scrivete, ed è a quella domanda che riceverete risposta — compresa, se è il caso, quella che il punto di sosta più pratico è a pochi minuti a piedi.",
      "Una regola vale per ogni categoria allo stesso modo: il Comune non autorizza un veicolo che non rientri nei parametri antinquinamento fissati da una propria ordinanza del 2018. È una questione che riguarda il veicolo e non il viaggio, ed è un motivo in più per cui la risposta dipende dal singolo accordo e non dalla città in generale.",
    ],
    caution: {
      heading: "Che cosa questa pagina non afferma",
      body: "Che un veicolo NCC sia esente dalla ZTL di Firenze, né che non lo sia. Le categorie autorizzabili sono indicate in schede allegate al regolamento tecnico del Comune, e quel documento non è stato consultabile per questa pagina: qui quindi non affermiamo né l'una né l'altra cosa. Ripetere la posizione di Roma e di Milano senza quel testo sarebbe una garanzia che nessuno potrebbe sostenere. Consideratela una questione aperta finché non la chiude il Comune, o la risposta alla vostra richiesta.",
    },
    source: ztlSourceIt,
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Firenze",
    items: [
      {
        page: "route-psa-florence",
        label: "Dall'aeroporto di Pisa a Firenze",
        detail: "Il transfer toscano più richiesto, e l'unico fra due città diverse.",
      },
      {
        page: "route-flr-florence",
        label: "Dall'aeroporto di Firenze alla città",
        detail: "Il breve tragitto da Peretola.",
      },
      {
        page: "val-dorcia",
        label: "La Val d'Orcia",
        detail:
          "La campagna a sud di Siena, dove non arriva alcuna ferrovia e dove l'ente della valle indica l'auto come il mezzo migliore.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Firenze",
    lead: "Compresa quella a cui questa pagina risponde «non lo sappiamo», che è una risposta onesta e non una lacuna.",
    items: [
      {
        question: "Un'auto può portarmi al mio hotel in centro?",
        answer:
          "Dipende dall'indirizzo e da regole stabilite dal Comune, e questa pagina non farà finta del contrario. Il centro di Firenze è una ZTL divisa in settori e, mentre questo testo veniva scritto, non è stato possibile consultare alcun documento ufficiale sull'accesso degli NCC. Inviate l'indirizzo completo con la richiesta e la risposta riguarderà quell'indirizzo, inclusa l'eventualità che il punto di sosta più pratico sia a pochi minuti a piedi.",
      },
      {
        question: "Quali sono gli orari della ZTL?",
        answer:
          "Qui non indichiamo orari, ed è una scelta. Non sono gli stessi per tutta la zona — la limitazione feriale è indicata per alcuni settori e non per altri, e una distinta limitazione notturna estiva riguarda tutti e cinque — e quando la pagina del Comune è stata letta l'ultima volta illustrava ancora la regola notturna con date del 2022. Orari che cambiano per ordinanza e per stagione, su una pagina non sempre aggiornata, sono esattamente ciò che conviene verificare alla fonte per la propria data.",
      },
      {
        question: "Su quale aeroporto conviene atterrare?",
        answer:
          "Di solito lo decide la compagnia aerea. Pisa è il maggiore dei due e assorbe gran parte del traffico verso la Toscana; Peretola è più piccolo e più vicino, limitato da una pista corta ad aeromobili all'incirca delle dimensioni di un A320neo. Da entrambi si può richiedere un transfer per Firenze.",
      },
      {
        question: "Quanto ci vuole dall'aeroporto di Pisa?",
        answer:
          "Su queste pagine non compaiono durate. La carta dei servizi 2025 del gestore colloca il proprio aeroporto a circa un chilometro da Pisa, ma non dice nulla sulla distanza o sul tempo verso Firenze, e nessun'altra fonte consultata lo fa: perciò non ne pubblichiamo, invece di stimarli.",
      },
      {
        question: "Mi portate in giro per la Toscana per una giornata?",
        answer:
          "Si può richiedere un transfer punto a punto verso un indirizzo preciso, e la Val d'Orcia ha una pagina dedicata. Una giornata di tour fra più tappe è un altro servizio, e questo sito non lo rivendica: giornate con più soste, tempi di attesa e qualsiasi accordo con tenute o cantine andrebbero confermati prima di poter essere offerti.",
      },
      {
        question: "Una richiesta è una prenotazione?",
        answer:
          "No. Ogni viaggio su questo sito è una richiesta. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Mandate l'indirizzo, non la città",
    body: "Nella maggior parte delle città italiane il nome della città basta per cominciare. A Firenze sono la via e il numero a decidere la risposta, perché decidono quali regole si applicano. Il volo o il treno, la data e l'ora, l'indirizzo, quante persone siete e quanti bagagli avete.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Pisa (PSA)", page: "pisa-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const florenceHub: Record<Locale, FlorenceHub> = { en, it };
