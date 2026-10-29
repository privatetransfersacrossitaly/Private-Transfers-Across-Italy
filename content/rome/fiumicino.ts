import type { Locale } from "@/lib/site";
import type { AirportHub } from "./types";

/**
 * Fiumicino.
 *
 * The page is built around one fact that genuinely helps a traveller — the
 * operator's own instruction to verify the terminal rather than assume it —
 * and around the gap between landing time and the moment someone walks out
 * with their luggage.
 *
 * What it refuses to say is as considered as what it says. There is no
 * meeting point, no waiting allowance, no parking rule and no journey time,
 * because the airport sets the first three and changes them, and the fourth
 * depends on the day. See `docs/rome-research-log.md` §1.
 */

const en: AirportHub = {
  meta: {
    title: "Fiumicino Airport transfers (FCO)",
    description:
      "Arranging a car at Rome Fiumicino: which terminal you are using and how to confirm it, what a useful pickup request contains, and where a transfer from the airport can take you.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome Fiumicino · FCO",
    h1: "Transfers at Fiumicino Airport",
    lead: "Leonardo da Vinci is the larger of Rome's two airports by a wide margin, and the one where getting the terminal right actually matters. This page covers what to check before you travel, and what to send when you ask for a car.",
    primaryCta: "Request a quotation",
    secondaryCta: "Terminal 1 or Terminal 3?",
    note: "You will not find a meeting point, a waiting allowance or a parking rule here. The airport sets those and revises them; the arrangement for your own journey is confirmed with your quotation.",
  },

  facts: [
    { label: "Official name", value: "Leonardo da Vinci" },
    { label: "IATA code", value: "FCO" },
    { label: "From Rome", value: "About 32 km south-west" },
    { label: "Passengers, 2025", value: "About 51.3 million" },
  ],
  factsSource: {
    text: "Names, distances and passenger figures as published by the airport operator and checked in October 2026:",
    linkText: "Aeroporti di Roma on the Rome airport system",
    href: "https://www.adr.it/web/aeroporti-di-roma-en/bsn-rome-airport-system",
  },

  terminals: {
    id: "terminals",
    eyebrow: "Terminals",
    heading: "Terminal 1 or Terminal 3",
    lead: "Fiumicino has two passenger terminals. Which one your flight uses depends on the airline and the destination, and the operator asks passengers to check rather than assume.",
    columns: [
      {
        id: "t1",
        heading: "Terminal 1",
        subheading: "Mainly domestic and Schengen",
        rows: [
          {
            term: "What it handles",
            detail:
              "Chiefly domestic flights and flights within the Schengen area.",
          },
          {
            term: "Why it matters for a pickup",
            detail:
              "The terminal is the one part of the address nobody can infer. It is the first thing to confirm and the first thing to send.",
          },
        ],
      },
      {
        id: "t3",
        heading: "Terminal 3",
        subheading: "Extra-Schengen and intercontinental",
        rows: [
          {
            term: "What it handles",
            detail:
              "The reference terminal for extra-Schengen and intercontinental flights, and for airlines not allocated to Terminal 1.",
          },
          {
            term: "Why it matters for a pickup",
            detail:
              "Arrivals from outside the Schengen area clear passport control here, which is one reason landing time and the time you actually appear are different.",
          },
        ],
      },
    ],
    source: {
      text: "Allocation varies by airline and by destination. The operator tells passengers to check the boarding pass, the airline's own messages and the airport monitors — before travelling, and again on arrival:",
      linkText: "Aeroporti di Roma, which terminal to use",
      href: "https://www.adr.it/pax-fco-quale-terminal",
    },
  },

  sequence: {
    id: "arriving",
    eyebrow: "On the day",
    heading: "From wheels down to the car",
    lead: "The useful thing to understand about an airport pickup is that it is a sequence, and only part of it is the drive.",
    steps: [
      {
        title: "Before you fly",
        body: "Confirm the terminal on your boarding pass and send it with your request, along with the flight number and the arrival time printed on your ticket.",
      },
      {
        title: "Landing is not arriving",
        body: "Taxiing to a stand, passport control for a flight from outside the Schengen area, and the wait at the baggage belt all sit between the two. A party of four with hold luggage takes longer to emerge than one person with a cabin bag.",
      },
      {
        title: "Luggage sets the pace",
        body: "The group moves at the speed of the last bag off the belt. Say how many bags there are when you ask: it affects the vehicle as well as the timing.",
      },
      {
        title: "Meeting the driver",
        body: "Where exactly that happens is settled with your quotation rather than on this page. Vehicle access at an airport is the airport's rule, it changes, and a page that guessed would be wrong sooner or later.",
      },
      {
        title: "If the flight moves",
        body: "Send the flight number with the request, and say as soon as you know of a change. What can be done about a delay depends on the arrangement — ask the question directly and get the answer before you agree to anything.",
      },
    ],
  },

  send: {
    id: "request",
    heading: "What makes a Fiumicino request answerable",
    lead: "Six things. With them a quotation can be specific; without them it can only be a range.",
    items: [
      "The flight number and the date — the airline alone is not enough.",
      "The terminal, as printed on the boarding pass.",
      "The full destination address, including the hotel's name if it is a hotel.",
      "How many passengers, and how many of them are children.",
      "How many pieces of hold luggage, and how many cabin bags.",
      "Anything bulky: a pushchair, golf clubs, skis, a wheelchair.",
    ],
    note: "Whether a particular vehicle, a child seat or an accessible vehicle can be provided is answered in the reply to your request. Nothing on this site promises any of them in advance.",
  },

  onward: {
    id: "onward",
    eyebrow: "Onward",
    heading: "From Fiumicino to",
    lead: "The journeys most often asked about from this airport.",
    items: [
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "The city address at the other end is the harder half.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia cruise port",
        detail: "Fly in and sail — the same day, or the day before.",
      },
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "Arrival points, districts and access across the city.",
      },
      {
        page: "rome-stations",
        label: "Rome's railway stations",
        detail: "If the journey continues by train.",
      },
      {
        page: "ciampino",
        label: "Ciampino Airport (CIA)",
        detail: "Rome's other airport, and how it differs.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Fiumicino questions",
    lead: "Answers that hold whatever date you are travelling.",
    items: [
      {
        question: "How do I know which terminal my flight uses?",
        answer:
          "The boarding pass names it, the airline's messages repeat it, and the monitors at the airport show it. Aeroporti di Roma asks passengers to check all three, before travelling and again on arrival, because allocation varies by airline and by destination.",
      },
      {
        question: "How far is Fiumicino from Rome?",
        answer:
          "The operator gives about 32 km, south-west of the city. How long that takes to drive is a different question and depends on the hour, the traffic and the exact address at the other end — which is why no figure for it appears here.",
      },
      {
        question: "What is the difference between Fiumicino and Ciampino?",
        answer:
          "Size and purpose. Fiumicino handled about 51.3 million passengers in 2025 against Ciampino's four million, carries the scheduled national, international and intercontinental flights, and is about 32 km from the city. Ciampino is about 15 km out and serves mainly low-cost airlines, express couriers and general aviation.",
      },
      {
        question: "Can a transfer go from Fiumicino straight to the cruise port?",
        answer:
          "It is one of the journeys most often asked about, since Civitavecchia is roughly 70 km north-west of Rome while the airport lies south-west of it. Whether it can be arranged for your date, and on what terms, is answered when you ask.",
      },
      {
        question: "Will a driver wait if my flight is delayed?",
        answer:
          "That depends on the arrangement, and this site does not state a waiting policy it has not confirmed. Send the flight number with your request and raise the question directly — it should be answered in writing before you agree to anything.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the flight, and the rest follows",
    body: "Flight number, date, terminal, destination address, how many of you and how much luggage. That is a request that can be answered precisely rather than approximately.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: AirportHub = {
  meta: {
    title: "Transfer aeroporto di Fiumicino (FCO)",
    description:
      "Organizzare un'auto a Roma Fiumicino: quale terminal vi riguarda e come verificarlo, che cosa serve indicare per una richiesta utile e dove può portarvi un transfer dall'aeroporto.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Roma Fiumicino · FCO",
    h1: "Transfer all'aeroporto di Fiumicino",
    lead: "Leonardo da Vinci è di gran lunga il maggiore dei due aeroporti di Roma, ed è quello in cui individuare il terminal giusto fa davvero la differenza. Qui trovate che cosa verificare prima di partire e che cosa indicare quando chiedete un'auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Terminal 1 o Terminal 3?",
    note: "Non troverete qui un punto d'incontro, un'attesa inclusa o le regole di sosta. Le stabilisce l'aeroporto e cambiano nel tempo; le modalità per il vostro viaggio si confermano insieme al preventivo.",
  },

  facts: [
    { label: "Denominazione", value: "Leonardo da Vinci" },
    { label: "Codice IATA", value: "FCO" },
    { label: "Da Roma", value: "Circa 32 km a sud-ovest" },
    { label: "Passeggeri 2025", value: "Circa 51,3 milioni" },
  ],
  factsSource: {
    text: "Denominazioni, distanze e dati di traffico pubblicati dal gestore aeroportuale e verificati nell'ottobre 2026:",
    linkText: "Aeroporti di Roma, il sistema aeroportuale romano",
    href: "https://www.adr.it/bsn-sistema-aeroportuale-romano",
  },

  terminals: {
    id: "terminal",
    eyebrow: "Terminal",
    heading: "Terminal 1 o Terminal 3",
    lead: "Fiumicino ha due terminal passeggeri. Quale vi riguardi dipende dalla compagnia e dalla destinazione, e il gestore invita a verificarlo invece di darlo per scontato.",
    columns: [
      {
        id: "t1",
        heading: "Terminal 1",
        subheading: "Soprattutto voli nazionali e Schengen",
        rows: [
          {
            term: "Che cosa accoglie",
            detail:
              "Principalmente voli nazionali e voli all'interno dell'area Schengen.",
          },
          {
            term: "Perché conta per il prelievo",
            detail:
              "Il terminal è l'unica parte dell'indirizzo che nessuno può dedurre. È la prima cosa da verificare e da comunicare.",
          },
        ],
      },
      {
        id: "t3",
        heading: "Terminal 3",
        subheading: "Extra Schengen e intercontinentali",
        rows: [
          {
            term: "Che cosa accoglie",
            detail:
              "È il terminal di riferimento per i voli extra Schengen e intercontinentali e per le compagnie non assegnate al Terminal 1.",
          },
          {
            term: "Perché conta per il prelievo",
            detail:
              "Chi arriva da fuori area Schengen passa qui il controllo passaporti: è uno dei motivi per cui l'orario di atterraggio e il momento in cui si esce non coincidono.",
          },
        ],
      },
    ],
    source: {
      text: "L'assegnazione varia per compagnia e destinazione. Il gestore invita a controllare la carta d'imbarco, le comunicazioni della compagnia e i monitor informativi, prima di partire e di nuovo all'arrivo:",
      linkText: "Aeroporti di Roma, quale terminal",
      href: "https://www.adr.it/pax-fco-quale-terminal",
    },
  },

  sequence: {
    id: "arrivo",
    eyebrow: "Il giorno stesso",
    heading: "Dall'atterraggio all'auto",
    lead: "La cosa utile da capire su un prelievo in aeroporto è che si tratta di una sequenza, e che il viaggio in auto ne è solo una parte.",
    steps: [
      {
        title: "Prima di partire",
        body: "Verificate il terminal sulla carta d'imbarco e indicatelo nella richiesta, insieme al numero del volo e all'orario di arrivo riportato sul biglietto.",
      },
      {
        title: "Atterrare non è arrivare",
        body: "Fra i due momenti ci sono il rullaggio, il controllo passaporti per i voli extra Schengen e l'attesa al nastro bagagli. Quattro persone con bagagli da stiva impiegano più tempo di una con il solo bagaglio a mano.",
      },
      {
        title: "Il ritmo lo danno i bagagli",
        body: "Il gruppo esce alla velocità dell'ultima valigia sul nastro. Indicate quanti bagagli avete: incide sul veicolo oltre che sui tempi.",
      },
      {
        title: "L'incontro con l'autista",
        body: "Dove avvenga esattamente si definisce con il preventivo, non in questa pagina. L'accesso dei veicoli è disciplinato dall'aeroporto, cambia nel tempo, e una pagina che tirasse a indovinare prima o poi sarebbe sbagliata.",
      },
      {
        title: "Se il volo si sposta",
        body: "Indicate il numero del volo nella richiesta e segnalate ogni variazione appena la conoscete. Che cosa sia possibile fare in caso di ritardo dipende dall'accordo: chiedetelo esplicitamente e fatevelo mettere per iscritto prima di accettare.",
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa rende una richiesta per Fiumicino davvero utile",
    lead: "Sei informazioni. Con queste un preventivo può essere preciso; senza, può essere solo una forbice.",
    items: [
      "Numero del volo e data: la sola compagnia non basta.",
      "Il terminal, come indicato sulla carta d'imbarco.",
      "L'indirizzo completo di destinazione, con il nome dell'hotel se si tratta di un hotel.",
      "Quanti passeggeri siete e quanti sono bambini.",
      "Quanti bagagli da stiva e quanti bagagli a mano.",
      "Qualsiasi ingombro particolare: passeggino, sacca da golf, sci, carrozzina.",
    ],
    note: "Se sia disponibile un veicolo specifico, un seggiolino o un mezzo accessibile è una risposta che arriva con il preventivo. Nessuna pagina di questo sito lo promette in anticipo.",
  },

  onward: {
    id: "proseguimenti",
    eyebrow: "Proseguimenti",
    heading: "Da Fiumicino verso",
    lead: "Le tratte di cui ci si chiede più spesso partendo da questo aeroporto.",
    items: [
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "La metà difficile è l'indirizzo in città.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Da Fiumicino al porto di Civitavecchia",
        detail: "Volo e crociera: stesso giorno o il giorno prima.",
      },
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Punti di arrivo, quartieri e accessi in città.",
      },
      {
        page: "rome-stations",
        label: "Le stazioni ferroviarie di Roma",
        detail: "Se il viaggio prosegue in treno.",
      },
      {
        page: "ciampino",
        label: "Aeroporto di Ciampino (CIA)",
        detail: "L'altro aeroporto di Roma, e in che cosa differisce.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Fiumicino",
    lead: "Risposte valide qualunque sia la vostra data di viaggio.",
    items: [
      {
        question: "Come faccio a sapere da quale terminal parte il mio volo?",
        answer:
          "Lo indica la carta d'imbarco, lo ripetono le comunicazioni della compagnia e lo mostrano i monitor in aeroporto. Aeroporti di Roma invita a controllarli tutti e tre, prima di partire e di nuovo all'arrivo, perché l'assegnazione varia per compagnia e destinazione.",
      },
      {
        question: "Quanto dista Fiumicino da Roma?",
        answer:
          "Il gestore indica circa 32 km, a sud-ovest della città. Quanto tempo richieda in auto è un'altra questione: dipende dall'ora, dal traffico e dall'indirizzo esatto di arrivo, ed è il motivo per cui qui non troverete una cifra.",
      },
      {
        question: "Che differenza c'è fra Fiumicino e Ciampino?",
        answer:
          "Dimensione e vocazione. Nel 2025 Fiumicino ha avuto circa 51,3 milioni di passeggeri contro i 4 milioni di Ciampino, accoglie i voli di linea nazionali, internazionali e intercontinentali e dista circa 32 km dalla città. Ciampino è a circa 15 km ed è usato soprattutto da compagnie low cost, corrieri espresso e aviazione generale.",
      },
      {
        question: "Un transfer può portarmi da Fiumicino direttamente al porto?",
        answer:
          "È una delle tratte più richieste, dato che Civitavecchia si trova a circa 70 km a nord-ovest di Roma mentre l'aeroporto è a sud-ovest. Se sia organizzabile per la vostra data, e a quali condizioni, ve lo dirà la risposta alla richiesta.",
      },
      {
        question: "L'autista aspetta se il volo è in ritardo?",
        answer:
          "Dipende dall'accordo, e questo sito non dichiara una politica di attesa che non ha verificato. Indicate il numero del volo nella richiesta e ponete la domanda in modo esplicito: la risposta deve arrivarvi per iscritto prima che accettiate.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il volo, il resto viene da sé",
    body: "Numero del volo, data, terminal, indirizzo di destinazione, quante persone e quanti bagagli. Una richiesta così si può valutare con precisione invece che a occhio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const fiumicino: Record<Locale, AirportHub> = { en, it };
