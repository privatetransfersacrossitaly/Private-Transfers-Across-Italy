import type { Locale } from "@/lib/site";
import type { CityAirport } from "./types";

/**
 * Linate.
 *
 * The shortest page in either cluster, deliberately. Linate's whole argument
 * is proximity and simplicity, and a long page would contradict its own
 * content. It has no photograph for the same reason: nothing it could show
 * would say anything the text does not.
 *
 * What it will not do is claim that close means quick. Linate sits inside the
 * same traffic zones as the address you are going to, at the same hours, and
 * the page says so rather than selling the short distance.
 */

const en: CityAirport = {
  meta: {
    title: "Linate Airport transfers (LIN)",
    description:
      "Milan's city airport: closest in, smallest of the three, mostly short-haul. What proximity actually buys you, and what Area B and Area C take back.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Milan Linate · LIN",
    h1: "Transfers at Linate Airport",
    lead: "Its operator calls Linate the city airport, and the description is accurate: it is the closest of Milan's three, the smallest, and the one most of its passengers use repeatedly rather than once.",
    primaryCta: "Request a quotation",
    secondaryCta: "What proximity does not buy",
    facts: [
      { label: "Operator", value: "SEA" },
      { label: "Code", value: "LIN" },
      { label: "Passengers, 2025", value: "About 11 million" },
      { label: "Gates", value: "24" },
    ],
  },

  cases: {
    id: "use-cases",
    eyebrow: "Who uses it",
    heading: "What Linate is good for",
    lead: "Three situations account for most of the requests from this airport.",
    items: [
      {
        term: "A meeting with a fixed start",
        detail:
          "The airport is on the city side of Milan, so an address in the centre or in the northern business districts is a short run. If a meeting has a time, say the time rather than the flight's scheduled arrival — the two are not the same promise.",
      },
      {
        term: "A same-day return",
        detail:
          "Much of Linate's traffic is short-haul and repeated. If you are flying back the same day, send both legs in one request: an outbound and a return arranged together are one conversation, not two.",
      },
      {
        term: "A connection you did not plan",
        detail:
          "Arriving at Linate and departing from Malpensa — or the other way round — is a real journey across the whole metropolitan area, not an airport shuttle. It is worth treating it as a transfer in its own right, with its own margin.",
      },
    ],
  },

  caution: {
    id: "proximity",
    heading: "Close is not the same as quick",
    paragraphs: [
      "Linate's advantage is that it is near the city. Its complication is the same fact: the airport is on the city side of Milan, which means a journey from it usually ends inside Area B, and often inside Area C as well.",
      "Both zones operate Monday to Friday from 07:30 to 19:30 — which is precisely when a business arrival is most likely to land. Being close does not exempt a journey from the rules it drives into, and the last few hundred metres of a central address behave the same way here as they do from any other airport.",
    ],
    source: {
      text: "Zone hours as published by the Comune di Milano and checked in October 2026; they are set by ordinance and change.",
      linkText: "the city publishes the current rules",
      href: "https://www.comune.milano.it/en/argomenti/mobilita/area-c",
    },
  },

  onward: {
    id: "onward",
    heading: "From Linate",
    items: [
      {
        page: "route-lin-milan",
        label: "Linate Airport to Milan",
        detail: "The short run, and what actually governs it.",
      },
      {
        page: "milan",
        label: "Private transfers in Milan",
        detail: "Districts, Area B and Area C.",
      },
      {
        page: "malpensa",
        label: "Malpensa Airport (MXP)",
        detail: "The other SEA airport, and a very different proposition.",
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
    heading: "Linate questions",
    lead: "Four, which is as many as this airport generates.",
    items: [
      {
        question: "Is Linate closer to Milan than Malpensa?",
        answer:
          "Yes — it is the city airport, and the closest of the three. Whether that makes your particular journey quicker depends on the hour and the address, because the near end of a short journey is still a Milan street inside Area B.",
      },
      {
        question: "Is there a metro to Linate?",
        answer:
          "The airport is served by Milan's metro network, which is useful to know and is a different proposition from a door-to-door car with luggage. No times or fares are quoted here; check the transport operator for those.",
      },
      {
        question: "I land at Linate and fly out of Malpensa. Is that simple?",
        answer:
          "It is a journey right across the metropolitan area, so treat it as a transfer in its own right with its own margin rather than as a short hop between terminals. Send both flight numbers when you ask.",
      },
      {
        question: "Can a car meet me and wait while I attend a meeting?",
        answer:
          "That is a different arrangement from a transfer, and whether it can be offered is answered in the reply to your request. Nothing on this site claims a waiting service, an hourly hire or a by-the-day arrangement in advance.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the flight and the time that matters",
    body: "At Linate the useful detail is usually not the distance but the deadline: the meeting, the return flight, the hour you need to be somewhere. Say that, and the answer can be built around it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Milan", page: "milan" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: CityAirport = {
  meta: {
    title: "Transfer aeroporto di Linate (LIN)",
    description:
      "L'aeroporto cittadino di Milano: il più vicino, il più piccolo dei tre, soprattutto corto raggio. Che cosa vi dà davvero la vicinanza e che cosa vi tolgono Area B e Area C.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Milano Linate · LIN",
    h1: "Transfer all'aeroporto di Linate",
    lead: "Il gestore lo definisce l'aeroporto cittadino, e la definizione è esatta: è il più vicino dei tre scali milanesi, il più piccolo, e quello che la maggior parte dei suoi passeggeri usa abitualmente e non una volta sola.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa non vi dà la vicinanza",
    facts: [
      { label: "Gestore", value: "SEA" },
      { label: "Codice", value: "LIN" },
      { label: "Passeggeri 2025", value: "Circa 11 milioni" },
      { label: "Gate", value: "24" },
    ],
  },

  cases: {
    id: "casi",
    eyebrow: "Chi lo usa",
    heading: "A che cosa serve davvero Linate",
    lead: "Tre situazioni coprono quasi tutte le richieste che partono da qui.",
    items: [
      {
        term: "Una riunione con un orario fisso",
        detail:
          "L'aeroporto è dalla parte della città, quindi un indirizzo in centro o nei quartieri direzionali a nord è un tragitto breve. Se la riunione ha un orario, indicate quello e non l'orario previsto di arrivo del volo: non sono la stessa promessa.",
      },
      {
        term: "Andata e ritorno in giornata",
        detail:
          "Buona parte del traffico di Linate è corto raggio e ripetuto. Se ripartite in giornata, indicate entrambe le tratte in un'unica richiesta: andata e ritorno organizzati insieme sono una conversazione sola, non due.",
      },
      {
        term: "Un collegamento non previsto",
        detail:
          "Arrivare a Linate e ripartire da Malpensa — o viceversa — è un viaggio che attraversa tutta l'area metropolitana, non una navetta fra terminal. Conviene trattarlo come un transfer a sé, con il suo margine.",
      },
    ],
  },

  caution: {
    id: "vicinanza",
    heading: "Vicino non vuol dire rapido",
    paragraphs: [
      "Il vantaggio di Linate è che è vicino alla città. La sua complicazione è lo stesso fatto: l'aeroporto si trova dal lato urbano di Milano, quindi un viaggio che parte da qui finisce quasi sempre dentro Area B, e spesso anche dentro Area C.",
      "Entrambe le zone sono attive dal lunedì al venerdì dalle 7.30 alle 19.30, cioè proprio quando è più probabile che atterri un volo di lavoro. Essere vicini non esenta dalle regole della zona in cui si entra, e gli ultimi duecento metri di un indirizzo in centro si comportano qui come da qualunque altro aeroporto.",
    ],
    source: {
      text: "Orari delle zone pubblicati dal Comune di Milano e verificati nell'ottobre 2026; sono stabiliti per ordinanza e cambiano.",
      linkText: "Il Comune pubblica le regole aggiornate",
      href: "https://www.comune.milano.it/it/argomenti/mobilita/area-c",
    },
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Linate",
    items: [
      {
        page: "route-lin-milan",
        label: "Dall'aeroporto di Linate a Milano",
        detail: "Il tragitto breve, e che cosa lo governa davvero.",
      },
      {
        page: "milan",
        label: "Transfer privati a Milano",
        detail: "Quartieri, Area B e Area C.",
      },
      {
        page: "malpensa",
        label: "Aeroporto di Malpensa (MXP)",
        detail: "L'altro scalo SEA, con tutt'altra funzione.",
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
    heading: "Domande su Linate",
    lead: "Quattro: tante quante ne genera questo aeroporto.",
    items: [
      {
        question: "Linate è più vicino a Milano di Malpensa?",
        answer:
          "Sì: è l'aeroporto cittadino e il più vicino dei tre. Se questo renda più rapido il vostro viaggio dipende dall'ora e dall'indirizzo, perché il capo vicino di un tragitto breve resta pur sempre una strada milanese dentro Area B.",
      },
      {
        question: "C'è la metropolitana per Linate?",
        answer:
          "L'aeroporto è servito dalla rete metropolitana milanese: è utile saperlo, ed è una cosa diversa da un'auto porta a porta con i bagagli. Qui non trovate orari né tariffe: consultate l'operatore del trasporto pubblico.",
      },
      {
        question: "Atterro a Linate e riparto da Malpensa. È semplice?",
        answer:
          "È un viaggio che attraversa l'intera area metropolitana: trattatelo come un transfer a sé, con il suo margine, e non come un breve salto fra terminal. Indicate entrambi i numeri di volo nella richiesta.",
      },
      {
        question: "Un'auto può aspettarmi durante una riunione?",
        answer:
          "È un'organizzazione diversa da un transfer, e se sia possibile ve lo dirà la risposta alla richiesta. Questo sito non dichiara in anticipo un servizio di attesa, un noleggio a ore o una disponibilità a giornata.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il volo e l'orario che conta",
    body: "A Linate il dato utile di solito non è la distanza ma la scadenza: la riunione, il volo di ritorno, l'ora in cui dovete essere da qualche parte. Ditelo, e la risposta si costruirà attorno a quello.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Milano", page: "milan" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const linate: Record<Locale, CityAirport> = { en, it };
