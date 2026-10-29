import type { Locale } from "@/lib/site";
import type { ExcelsiorHotel } from "./types";

/**
 * Starhotels Excelsior.
 *
 * ── The page that had to be rewritten after verification ──────────────────
 * Phase 1 planned this as the contrast case: "outside the ZTL, a car reaches
 * the door at any hour". Verification would not support it. The Comune's own
 * rules could not be read, and the hotel's site **never mentions the zone at
 * all** — it simply publishes motorway directions. Ordinary directions and a
 * silence are not a municipal classification, so the claim is gone.
 *
 * What survives is better evidenced and, as it happens, more interesting.
 * This hotel sits where three ways into Bologna converge: the motorway
 * network it publishes directions from, the railway station it faces, and
 * the airport monorail that terminates at that station. Two independent
 * publishers agree on the last point — the hotel says the Marconi Express
 * stop is "right in front of the hotel", and the airport says the line runs
 * from the terminal to Bologna central station.
 *
 * So the hero lays those three out flat, and the page's honesty test is
 * whether it will say that for some journeys the monorail is the better
 * answer. It does.
 *
 * ── What it must not say ──────────────────────────────────────────────────
 * No ZTL classification in either direction. No airport distance: the
 * hotel's own 11 km figure is unconfirmed by any authority and is excluded.
 *
 * See `docs/bologna-stage2-hotel-verification.md` §2.
 */

const sourceEn = {
  text: "The address and the driving directions are published on the hotel's own location page, read on 27 October 2026. The Marconi Express connection is stated by both the hotel and the airport operator. The hotel's own distance figure to the airport is deliberately not reproduced: no authority confirms it. Neither the hotel nor any source consulted states where this address stands in relation to Bologna's limited-traffic zone:",
  linkText: "the hotel publishes its own directions",
  href: "https://www.starhotels.com/en/our-hotels/excelsior-bologna/location.html",
};

const sourceIt = {
  text: "L'indirizzo e le indicazioni stradali sono pubblicati sulla pagina della posizione dell'hotel, consultata il 27 ottobre 2026. Il collegamento del Marconi Express è dichiarato sia dall'hotel sia dal gestore aeroportuale. La distanza dall'aeroporto indicata dall'hotel non viene volutamente riportata: nessun ente la conferma. Né l'hotel né alcuna fonte consultata precisa come questo indirizzo si collochi rispetto alla zona a traffico limitato di Bologna:",
  linkText: "l'hotel pubblica le proprie indicazioni",
  href: "https://www.starhotels.com/it/i-nostri-hotel/excelsior-bologna/",
};

const en: ExcelsiorHotel = {
  meta: {
    title: "Transfers to the Starhotels Excelsior, Bologna",
    description:
      "The hotel faces Bologna Centrale, where the airport monorail terminates. What it publishes about arriving by car — and what nobody publishes about its street.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "A Bologna address",
    h1: "Transfers to the Starhotels Excelsior",
    lead: "Of the Bologna addresses on this site, this is the one where the fewest things stand in the way — and the one where it is most worth saying that a transfer may not be what you need.",
    primaryCta: "Request a quotation",
    secondaryCta: "What the hotel publishes",
    modes: [
      {
        id: "road",
        label: "By road",
        name: "The Tangenziale, exit 7",
        detail:
          "The hotel publishes motorway directions from the A1, A13 and A14, all of them via the Bologna bypass and exit 7.",
      },
      {
        id: "rail",
        label: "By rail",
        name: "Bologna Centrale, opposite",
        detail:
          "The hotel describes itself as strategically located opposite the railway station.",
      },
      {
        id: "air",
        label: "From the airport",
        name: "The Marconi Express terminus",
        detail:
          "The airport's monorail runs to Bologna Centrale. The hotel says the stop is right in front of it.",
      },
    ],
  },

  driving: {
    id: "driving",
    eyebrow: "Arriving by car",
    heading: "What the hotel publishes, and what nobody does",
    lead: "Short, because there is less to say here than at the other two Bologna addresses — and the reason that is true is itself worth setting out.",
    paragraphs: [
      "The hotel's own location page gives ordinary motorway directions. From the A1 or the A13 you take the Bologna bypass towards Ancona and leave at exit 7, signed for the Fiera and the centre, then follow signs for the railway station; from the A14 the route is the same bypass in the other direction and the same exit. Nothing in those directions mentions a restriction, a permit, a gate or a time of day.",
      "That is not the same as the hotel being outside Bologna's limited-traffic zone, and this page will not say that it is. The Comune's own rules could not be read while this was written, and the hotel does not address the question at all. An absence of warnings in a set of driving directions is suggestive. It is not a municipal classification, and the difference matters enough to leave the claim out.",
      "What can be said is the useful part. The hotel faces the city's main railway station, and the airport's monorail — the Marconi Express — terminates there. Both the hotel and the airport operator describe that connection, independently. For an arrival whose destination is this hotel and nowhere else, that is a genuine alternative to arranging a car, and you should weigh it rather than be sold past it.",
    ],
    source: sourceEn,
  },

  limits: {
    heading: "What this page does not claim",
    body: "That the hotel is inside or outside the limited-traffic zone. No municipal source establishing either could be read, and the hotel does not say. We also publish no distance or journey time to the airport: the hotel states a figure of its own, no authority confirms it, and this site does not repeat unverified numbers that people plan connections around. What a car can do at this address, on your date and at your hour, is answered when your request is.",
  },

  onward: {
    id: "onward",
    heading: "Around this hotel",
    items: [
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport, the monorail it runs to the station, and what it does not publish about private hire.",
      },
      {
        page: "route-blq-excelsior",
        label: "Bologna Airport to this hotel",
        detail:
          "The arrival route, with the monorail set honestly beside it.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at its three strengths, and why the street decides the answer.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "A central address where a great deal does stand in the way — the opposite case to this one.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About reaching this hotel",
    lead: "Including one answered against our own interest.",
    items: [
      {
        question: "Should I take the Marconi Express instead?",
        answer:
          "If this hotel is your destination, it is worth considering seriously. The airport runs a monorail to Bologna Centrale and the hotel says the stop is right in front of it. What a transfer answers that the monorail does not is luggage, a door, and a time set by your flight rather than by a timetable — but for a light traveller arriving at a reasonable hour, the train may simply be better.",
      },
      {
        question: "Is the hotel inside the ZTL?",
        answer:
          "We do not know, and will not guess. The Comune's own rules could not be read while this page was written, and the hotel's site does not mention the zone. It publishes ordinary motorway directions with no restriction noted, which is suggestive and is not the same as an answer.",
      },
      {
        question: "How far is it from the airport?",
        answer:
          "No distance is published here. The hotel states a figure of its own; no authority confirms it, and this site does not repeat unverified numbers for journeys people plan flight connections around.",
      },
      {
        question: "Can a car reach the hotel entrance?",
        answer:
          "That is answered for your date and hour when your request is answered. Nothing we could verify says the address is restricted, and nothing we could verify says it is not — so the honest position is to settle it in the reply rather than promise it on a page.",
      },
      {
        question: "What should I send when I ask?",
        answer:
          "The hotel name, the date and time, your flight or train if there is one, and how many of you there are with how much luggage. The address end of this request is the simplest in the Bologna cluster.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "The simplest Bologna address to ask about",
    body: "Flight or train, date and time, and how many of you there are. And if the monorail turns out to suit you better, that is a perfectly good outcome.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Bologna Marconi Airport", page: "blq" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: ExcelsiorHotel = {
  meta: {
    title: "Transfer per lo Starhotels Excelsior, Bologna",
    description:
      "L'hotel è di fronte a Bologna Centrale, capolinea della monorotaia dell'aeroporto. Che cosa pubblica sull'arrivo in auto e che cosa nessuno pubblica sulla sua via.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Un indirizzo bolognese",
    h1: "Transfer per lo Starhotels Excelsior",
    lead: "Fra gli indirizzi bolognesi di questo sito è quello con meno ostacoli di mezzo — e quello per cui più vale la pena dire che forse un transfer non vi serve.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa pubblica l'hotel",
    modes: [
      {
        id: "road",
        label: "Su strada",
        name: "La tangenziale, uscita 7",
        detail:
          "L'hotel pubblica indicazioni autostradali da A1, A13 e A14, tutte attraverso la tangenziale di Bologna e l'uscita 7.",
      },
      {
        id: "rail",
        label: "In treno",
        name: "Bologna Centrale, di fronte",
        detail:
          "L'hotel si descrive come situato proprio di fronte alla stazione ferroviaria.",
      },
      {
        id: "air",
        label: "Dall'aeroporto",
        name: "Il capolinea del Marconi Express",
        detail:
          "La monorotaia dell'aeroporto arriva a Bologna Centrale. L'hotel indica che la fermata gli è proprio davanti.",
      },
    ],
  },

  driving: {
    id: "in-auto",
    eyebrow: "Arrivare in auto",
    heading: "Che cosa pubblica l'hotel, e che cosa non pubblica nessuno",
    lead: "Breve, perché qui c'è meno da dire che agli altri due indirizzi bolognesi — e il motivo per cui è così merita a sua volta di essere spiegato.",
    paragraphs: [
      "La pagina della posizione dell'hotel dà normali indicazioni autostradali. Dalla A1 o dalla A13 si prende la tangenziale di Bologna in direzione Ancona e si esce al numero 7, indicato per la Fiera e il centro, seguendo poi le indicazioni per la stazione ferroviaria; dalla A14 il percorso usa la stessa tangenziale nell'altro senso e la stessa uscita. In quelle indicazioni non si accenna ad alcuna limitazione, permesso, varco o fascia oraria.",
      "Questo però non equivale a dire che l'hotel sia fuori dalla zona a traffico limitato di Bologna, e questa pagina non lo dirà. Le norme del Comune non sono state consultabili mentre il testo veniva scritto, e l'hotel non affronta affatto la questione. L'assenza di avvertenze in un elenco di indicazioni stradali è un indizio: non è una classificazione comunale, e la differenza conta abbastanza da lasciare fuori l'affermazione.",
      "Quello che si può dire è la parte utile. L'hotel è di fronte alla stazione principale della città, e lì arriva la monorotaia dell'aeroporto, il Marconi Express. Il collegamento lo descrivono, separatamente, sia l'hotel sia il gestore aeroportuale. Per un arrivo la cui destinazione è questo hotel e nient'altro è una vera alternativa all'organizzare un'auto, e conviene valutarla invece di sentirsela scavalcare.",
    ],
    source: sourceIt,
  },

  limits: {
    heading: "Che cosa questa pagina non afferma",
    body: "Che l'hotel sia dentro o fuori dalla zona a traffico limitato. Non è stato possibile leggere alcuna fonte comunale che stabilisca l'una o l'altra cosa, e l'hotel non si pronuncia. Non pubblichiamo nemmeno distanze o durate verso l'aeroporto: l'hotel indica un proprio dato, nessun ente lo conferma, e questo sito non ripete numeri non verificati attorno a cui le persone pianificano coincidenze. Che cosa possa fare un'auto a questo indirizzo, nella vostra data e alla vostra ora, lo diciamo quando rispondiamo alla richiesta.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Attorno a questo hotel",
    items: [
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail:
          "L'aeroporto, la monorotaia che porta in stazione e ciò che non pubblica sul noleggio con conducente.",
      },
      {
        page: "route-blq-excelsior",
        label: "Dall'aeroporto di Bologna a questo hotel",
        detail:
          "La tratta d'arrivo, con la monorotaia messa onestamente a fianco.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
      {
        page: "hotel-majestic",
        label: "Grand Hotel Majestic “già Baglioni”",
        detail:
          "Un indirizzo centrale dove di mezzo c'è parecchio: il caso opposto a questo.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su come raggiungere questo hotel",
    lead: "Compresa una a cui rispondiamo contro il nostro interesse.",
    items: [
      {
        question: "Conviene prendere il Marconi Express?",
        answer:
          "Se la vostra destinazione è questo hotel, vale la pena considerarlo sul serio. L'aeroporto gestisce una monorotaia fino a Bologna Centrale e l'hotel indica che la fermata gli è proprio davanti. Quello a cui risponde un transfer e la monorotaia no sono i bagagli, una porta e un orario deciso dal vostro volo e non da un orario ferroviario — ma per chi viaggia leggero e arriva a un'ora ragionevole, il treno può semplicemente essere meglio.",
      },
      {
        question: "L'hotel è dentro la ZTL?",
        answer:
          "Non lo sappiamo e non tireremo a indovinare. Le norme del Comune non sono state consultabili mentre questa pagina veniva scritta, e il sito dell'hotel non cita la zona. Pubblica normali indicazioni autostradali senza segnalare limitazioni: è un indizio, e non è la stessa cosa di una risposta.",
      },
      {
        question: "Quanto dista dall'aeroporto?",
        answer:
          "Qui non pubblichiamo distanze. L'hotel indica un proprio dato; nessun ente lo conferma, e questo sito non ripete numeri non verificati per tragitti attorno a cui si pianificano coincidenze aeree.",
      },
      {
        question: "Un'auto può arrivare all'ingresso dell'hotel?",
        answer:
          "Ve lo diciamo per la vostra data e la vostra ora quando rispondiamo alla richiesta. Nulla di verificabile dice che l'indirizzo sia soggetto a limitazione, e nulla di verificabile dice il contrario: la posizione onesta è deciderlo nella risposta invece di prometterlo su una pagina.",
      },
      {
        question: "Che cosa devo inviare nella richiesta?",
        answer:
          "Il nome dell'hotel, la data e l'ora, il volo o il treno se ce n'è uno, e quante persone siete con quanti bagagli. Il capo d'indirizzo di questa richiesta è il più semplice di tutta la sezione bolognese.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "L'indirizzo bolognese più semplice su cui scrivere",
    body: "Volo o treno, data e ora, e quante persone siete. E se alla fine vi conviene la monorotaia, è un esito del tutto accettabile.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Bologna Marconi", page: "blq" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const hotelExcelsior: Record<Locale, ExcelsiorHotel> = { en, it };
