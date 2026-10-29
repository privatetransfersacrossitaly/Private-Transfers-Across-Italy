import type { Locale } from "@/lib/site";
import type { LakeComo } from "./types";

/**
 * Lake Como.
 *
 * The page's whole structure follows from one fact: "Lake Como" is not a
 * destination. It is an inverted Y of water with towns on three different
 * arms, and two towns facing each other across it can be an hour apart by
 * road. So the hero asks for a town before anything else, and the page is
 * organised by branch rather than by prose.
 *
 * The second thing it does is refuse. A road transfer is a road transfer: no
 * boat, no ferry crossing, no lake excursion is included in one, and the page
 * says so in its own section rather than in a footnote. Ferry times, fares
 * and frequencies are not quoted anywhere — secondary sources contradicted
 * each other, and the operator is linked instead.
 */

const en: LakeComo = {
  meta: {
    title: "Lake Como transfers",
    description:
      "Lake Como is not one destination. Which town you name decides the road, the shore and the journey — and a road transfer never includes a boat.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Lombardy",
    h1: "Transfers to Lake Como",
    lead: "The lake is shaped like an inverted Y, and its towns sit on three different arms of it. Two of them can face each other across the water and still be an hour apart by road. So the useful question is never “Lake Como” — it is which town.",
    primaryCta: "Request a quotation",
    secondaryCta: "Is a boat included?",
    townsHeading: "Jump to a town",
  },

  shape: {
    id: "shape",
    eyebrow: "The shape of the place",
    heading: "Three arms of water, not one destination",
    lead: "This is the fact that decides everything else about a transfer here.",
    paragraphs: [
      "Lake Como runs north from Como as a single arm, then splits: one branch continues south-east towards Lecco, the other south-west towards Como itself, and the two meet at the headland where Bellagio stands. That geometry is why the lake behaves nothing like a single destination.",
      "A road has to go round the water, not across it. Two towns in sight of one another — Bellagio and Varenna, say — sit on different shores, and a car between them follows the lake rather than the view. The drive from an airport changes accordingly: it is not one journey with a handful of drop-off points, but several different journeys that happen to share a lake.",
      "Which is why every request for this area should name a town, and ideally the address within it. “Lake Como” narrows the destination to about fifty kilometres of shoreline.",
    ],
  },

  towns: {
    id: "towns",
    eyebrow: "The towns",
    heading: "Where you are actually going",
    lead: "Five of the best known, with the arm of the lake each one sits on.",
    items: [
      {
        id: "como",
        name: "Como",
        branch: "South-western tip",
        detail:
          "The city at the foot of the western branch, and the closest of these to Milan and to Malpensa. It is a working city rather than a lakeside village, with the road access that implies.",
      },
      {
        id: "bellagio",
        name: "Bellagio",
        branch: "The headland where the branches meet",
        detail:
          "On the promontory dividing the two southern arms. Reaching it by road means following one shore all the way up and round, which is why it is often further in time than it looks on a map.",
      },
      {
        id: "varenna",
        name: "Varenna",
        branch: "Eastern shore",
        detail:
          "On the eastern side, facing Bellagio across the water. It has its own railway station, which makes it one of the easier lake towns to reach without a car for part of the journey.",
      },
      {
        id: "menaggio",
        name: "Menaggio",
        branch: "Western shore",
        detail:
          "On the western side, opposite Bellagio and Varenna, on the shore nearer the Malpensa side of the lake.",
      },
      {
        id: "tremezzina",
        name: "Tremezzina",
        branch: "Western shore",
        detail:
          "South of Menaggio on the same shore, and a municipality covering several lakeside villages rather than a single centre. Name the village or the villa if you can; the municipality alone covers a good deal of shoreline.",
      },
    ],
  },

  water: {
    id: "water",
    eyebrow: "Road and water",
    heading: "A road transfer does not include a boat",
    lead: "This is the single most common misunderstanding about transfers to this lake, and it is worth being blunt about.",
    paragraphs: [
      "There is a public ferry service on the lake, run by Gestione Governativa Navigazione Laghi, and some of its crossings carry vehicles. It is a genuine part of how people move around here, and for a crossing between the central towns it is often the sensible way to do it.",
      "It is also a separate thing from a car with a driver. A road transfer takes you by road. If your journey would be better split — driven to one shore, then across by boat — that is two arrangements, and the second one is yours to make with the ferry operator unless something is explicitly agreed otherwise.",
      "No timetable, frequency, duration or fare for the ferries appears on this page. The sources that publish them disagree with each other, services vary by season, and some routes do not run all year. The operator is the place to check.",
    ],
    warning: {
      heading: "What this page will not imply",
      body: "That a boat trip, a ferry crossing or a lake excursion forms part of a road transfer; that a car can reach a villa or hotel whose only access is from the water; or that a journey between two towns facing each other is a short one. All three are assumptions worth testing before you travel, not after.",
    },
    source: {
      text: "The lake's public navigation service is operated by Gestione Governativa Navigazione Laghi. Timetables and fares change seasonally and are published by the operator:",
      linkText: "Navigazione Laghi publishes the current services",
      href: "https://www.navigazionelaghi.it/",
    },
  },

  send: {
    id: "request",
    heading: "What to send for a lake transfer",
    lead: "The first item is the one that makes the difference between an answer and a guess.",
    items: [
      "The town — and the address or property name within it, if you have one.",
      "Where you are coming from: an airport and flight, a Milan address, or a station.",
      "The date and the time you expect to arrive.",
      "How many passengers and how much luggage.",
      "Whether any part of the journey is expected to involve a boat, so it can be answered clearly either way.",
      "Anything about the address that is unusual — a steep private drive, a restricted lane, access only from the water.",
    ],
    note: "Whether a particular journey can be arranged for your date, and in what vehicle, is answered in the reply to your request. Nothing on this page is an offer of a boat, a guide or a lake excursion.",
  },

  onward: {
    id: "onward",
    heading: "Getting here",
    items: [
      {
        page: "route-mxp-como",
        label: "Malpensa Airport to Lake Como",
        detail: "Arriving by air and going straight to the lake.",
      },
      {
        page: "malpensa",
        label: "Malpensa Airport (MXP)",
        detail: "Terminals, timings and what to send.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "If the lake is one end of a longer stay.",
      },
      {
        page: "milan-stations",
        label: "Milan's railway stations",
        detail: "If part of the journey is by train.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Lake Como questions",
    lead: "Most of them come down to the same thing: which town?",
    items: [
      {
        question: "Can you take me to Lake Como?",
        answer:
          "Which part? The lake is about fifty kilometres of shoreline on three arms, and the towns on it are genuinely different journeys. Name the town — Como, Bellagio, Varenna, Menaggio, Tremezzina or another — and the question becomes answerable.",
      },
      {
        question: "Is a boat or ferry included in a transfer?",
        answer:
          "No. A road transfer is by road. There is a public ferry service on the lake, run by Navigazione Laghi, and it is a separate arrangement that you make with the operator unless something different is explicitly agreed.",
      },
      {
        question: "Bellagio and Varenna are opposite each other. Is it a short drive?",
        answer:
          "No — they are on different shores, and a car has to go round the water rather than across it. It is one of the clearest examples of why a map of this lake is misleading about time.",
      },
      {
        question: "Which airport is best for the lake?",
        answer:
          "Malpensa sits north-west of Milan and the lake is north of the airport, so the city is not on the way — which is why it is the one these pages cover. Whether it suits your particular town and flight is worth asking rather than assuming.",
      },
      {
        question: "My hotel says it is only reachable by boat. What then?",
        answer:
          "Say so when you ask. A car can reach a road, and some lakeside properties do not have one. Knowing that in advance turns a problem on the day into a plan made beforehand.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Name the town, and the rest can be answered",
    body: "The town and address, where you are coming from, the date and time, and how many of you there are with how much luggage. On this lake the first of those does most of the work.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Malpensa Airport", page: "malpensa" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: LakeComo = {
  meta: {
    title: "Transfer per il Lago di Como",
    description:
      "Il Lago di Como non è una destinazione sola. Il paese che indicate determina la strada, la sponda e il viaggio — e un transfer su strada non comprende mai un battello.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Lombardia",
    h1: "Transfer per il Lago di Como",
    lead: "Il lago ha la forma di una Y rovesciata e i suoi paesi stanno su tre rami diversi. Due possono guardarsi da una sponda all'altra ed essere comunque a un'ora di strada. La domanda utile quindi non è mai «il Lago di Como»: è quale paese.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Il battello è compreso?",
    townsHeading: "Vai a un paese",
  },

  shape: {
    id: "forma",
    eyebrow: "La forma del posto",
    heading: "Tre rami d'acqua, non una destinazione",
    lead: "È il dato da cui dipende tutto il resto di un transfer da queste parti.",
    paragraphs: [
      "Il lago sale verso nord da Como come un ramo unico, poi si divide: un braccio prosegue a sud-est verso Lecco, l'altro a sud-ovest verso Como, e i due si incontrano al promontorio su cui sorge Bellagio. È questa geometria a far sì che il lago non si comporti affatto come una destinazione sola.",
      "Una strada deve girare attorno all'acqua, non attraversarla. Due paesi che si vedono l'un l'altro — Bellagio e Varenna, per dire — stanno su sponde diverse, e un'auto fra i due segue il lago, non il panorama. Il tragitto dall'aeroporto cambia di conseguenza: non è un viaggio solo con qualche punto di discesa, ma diversi viaggi che hanno in comune un lago.",
      "Per questo ogni richiesta per quest'area dovrebbe indicare un paese e, se possibile, l'indirizzo. «Lago di Como» restringe la destinazione a una cinquantina di chilometri di riva.",
    ],
  },

  towns: {
    id: "paesi",
    eyebrow: "I paesi",
    heading: "Dove state andando davvero",
    lead: "Cinque fra i più noti, con il ramo del lago su cui si trova ciascuno.",
    items: [
      {
        id: "como",
        name: "Como",
        branch: "Punta sud-occidentale",
        detail:
          "La città ai piedi del ramo occidentale, e la più vicina fra queste a Milano e a Malpensa. È una città vera e non un borgo sul lago, con gli accessi stradali che questo comporta.",
      },
      {
        id: "bellagio",
        name: "Bellagio",
        branch: "Il promontorio fra i due rami",
        detail:
          "Sul promontorio che divide i due bracci meridionali. Arrivarci in auto significa risalire una sponda per intero e poi girare: è il motivo per cui in tempo è spesso più lontana di quanto sembri sulla cartina.",
      },
      {
        id: "varenna",
        name: "Varenna",
        branch: "Sponda orientale",
        detail:
          "Sul lato est, di fronte a Bellagio dall'altra parte dell'acqua. Ha una propria stazione ferroviaria, il che la rende uno dei paesi del lago più semplici da raggiungere senza auto per una parte del viaggio.",
      },
      {
        id: "menaggio",
        name: "Menaggio",
        branch: "Sponda occidentale",
        detail:
          "Sul lato ovest, di fronte a Bellagio e Varenna, sulla sponda più vicina al versante da cui si arriva da Malpensa.",
      },
      {
        id: "tremezzina",
        name: "Tremezzina",
        branch: "Sponda occidentale",
        detail:
          "A sud di Menaggio sulla stessa sponda: è un comune che riunisce più borghi affacciati sul lago, non un centro unico. Se potete indicate la frazione o il nome della villa, perché il solo comune copre parecchia riva.",
      },
    ],
  },

  water: {
    id: "acqua",
    eyebrow: "Strada e acqua",
    heading: "Un transfer su strada non comprende il battello",
    lead: "È l'equivoco più frequente sui transfer verso questo lago, e vale la pena essere espliciti.",
    paragraphs: [
      "Sul lago esiste un servizio pubblico di navigazione, gestito dalla Gestione Governativa Navigazione Laghi, e alcune corse trasportano veicoli. È una parte reale del modo in cui ci si sposta qui e, per una traversata fra i paesi del centro lago, è spesso la soluzione più sensata.",
      "Ed è anche una cosa distinta da un'auto con conducente. Un transfer su strada vi porta su strada. Se per il vostro viaggio fosse meglio spezzare il percorso — in auto fino a una sponda e poi in battello — si tratta di due organizzazioni diverse, e la seconda resta a vostro carico presso l'operatore, salvo che non sia stato concordato esplicitamente altro.",
      "In questa pagina non troverete orari, frequenze, durate o tariffe dei battelli: le fonti che li pubblicano non concordano, i servizi variano con la stagione e alcune rotte non sono attive tutto l'anno. Per quello c'è l'operatore.",
    ],
    warning: {
      heading: "Che cosa questa pagina non lascerà intendere",
      body: "Che una gita in battello, una traversata o un'escursione sul lago facciano parte di un transfer su strada; che un'auto possa raggiungere una villa o un hotel accessibile soltanto dall'acqua; o che il tragitto fra due paesi che si guardano sia breve. Sono tre ipotesi da verificare prima di partire, non dopo.",
    },
    source: {
      text: "Il servizio pubblico di navigazione del lago è gestito dalla Gestione Governativa Navigazione Laghi. Orari e tariffe cambiano con la stagione e sono pubblicati dall'operatore:",
      linkText: "Navigazione Laghi pubblica i servizi in vigore",
      href: "https://www.navigazionelaghi.it/",
    },
  },

  send: {
    id: "richiesta",
    heading: "Che cosa indicare per un transfer sul lago",
    lead: "La prima voce è quella che distingue una risposta da una stima.",
    items: [
      "Il paese — e l'indirizzo o il nome della struttura, se li avete.",
      "Da dove partite: un aeroporto con il volo, un indirizzo milanese o una stazione.",
      "La data e l'ora prevista di arrivo.",
      "Quanti passeggeri e quanti bagagli.",
      "Se vi aspettate che una parte del viaggio avvenga in battello, così da avere una risposta chiara in un senso o nell'altro.",
      "Qualsiasi particolarità dell'indirizzo: una rampa privata ripida, una stradina a traffico limitato, un accesso solo dall'acqua.",
    ],
    note: "Se un determinato viaggio sia organizzabile per la vostra data, e con quale veicolo, ve lo dirà la risposta alla richiesta. Nulla in questa pagina è un'offerta di battelli, guide o escursioni sul lago.",
  },

  onward: {
    id: "come-arrivare",
    heading: "Come si arriva",
    items: [
      {
        page: "route-mxp-como",
        label: "Da Malpensa al Lago di Como",
        detail: "Arrivare in aereo e andare dritti al lago.",
      },
      {
        page: "malpensa",
        label: "Aeroporto di Malpensa (MXP)",
        detail: "Terminal, tempi e che cosa indicare.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Se il lago è un capo di un soggiorno più lungo.",
      },
      {
        page: "milan-stations",
        label: "Le stazioni ferroviarie di Milano",
        detail: "Se una parte del viaggio è in treno.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sul Lago di Como",
    lead: "Quasi tutte si riducono alla stessa cosa: quale paese?",
    items: [
      {
        question: "Mi portate al Lago di Como?",
        answer:
          "In quale punto? Il lago è una cinquantina di chilometri di riva distribuiti su tre rami, e i paesi che vi si affacciano sono viaggi davvero diversi. Indicate il paese — Como, Bellagio, Varenna, Menaggio, Tremezzina o un altro — e la domanda diventa una a cui si può rispondere.",
      },
      {
        question: "Il battello o il traghetto è compreso nel transfer?",
        answer:
          "No. Un transfer su strada avviene su strada. Sul lago c'è un servizio pubblico di navigazione, gestito da Navigazione Laghi, ed è un'organizzazione separata che fate voi con l'operatore, salvo che non sia stato concordato esplicitamente altro.",
      },
      {
        question: "Bellagio e Varenna sono una di fronte all'altra: è un tragitto breve?",
        answer:
          "No: stanno su sponde diverse e un'auto deve girare attorno all'acqua invece di attraversarla. È l'esempio più chiaro del perché la cartina di questo lago inganna sui tempi.",
      },
      {
        question: "Qual è l'aeroporto migliore per il lago?",
        answer:
          "Malpensa si trova a nord-ovest di Milano e il lago è più a nord dell'aeroporto: la città non è sulla strada, ed è il motivo per cui è quello di cui parlano queste pagine. Se sia adatto al vostro paese e al vostro volo conviene chiederlo, non presumerlo.",
      },
      {
        question: "Il mio hotel dice che è raggiungibile solo in barca. E allora?",
        answer:
          "Scrivetelo nella richiesta. Un'auto può arrivare dove c'è una strada, e alcune proprietà sul lago non ne hanno. Saperlo prima trasforma un problema del giorno stesso in un piano fatto per tempo.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il paese, al resto si può rispondere",
    body: "Paese e indirizzo, da dove partite, data e ora, quante persone siete e quanti bagagli avete. Su questo lago è il primo dato a fare quasi tutto il lavoro.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Malpensa", page: "malpensa" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const lakeComo: Record<Locale, LakeComo> = { en, it };
