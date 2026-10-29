import type { Locale } from "@/lib/site";
import type { CruisePort } from "./types";

/**
 * Civitavecchia.
 *
 * Two things make this page useful, and both are refusals. It does not
 * pretend the port is in Rome, and it does not promise access to a berth.
 * Movement inside a working port is controlled, varies by dock and by ship,
 * and no primary source sets out a rule that holds generally — so the page
 * says the meeting point must be confirmed, which is both the honest answer
 * and the one that prevents a bad morning.
 *
 * Sources and the points on which sources disagree are in
 * `docs/rome-research-log.md` §3.
 */

const en: CruisePort = {
  meta: {
    title: "Civitavecchia cruise port transfers",
    description:
      "The port that serves Rome is a separate town roughly 70 km away. How the port is laid out, what to confirm before sailing day, and why a meeting point has to be agreed rather than assumed.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome's cruise port",
    h1: "Transfers to and from Civitavecchia",
    lead: "Ships calling at Rome dock at Civitavecchia, a working port roughly 70 km north-west of the city. Almost every difficulty on a cruise day comes from treating that as a detail rather than as a journey.",
    primaryCta: "Request a quotation",
    secondaryCta: "What to confirm before you sail",
    note: "No access to any particular berth or terminal is promised here. Movement inside a working port is controlled and varies by dock and by ship; the arrangement for your own journey is confirmed when you ask.",
  },

  geography: {
    id: "geography",
    eyebrow: "The geography",
    heading: "Ship, port gate, city — three different places",
    lead: "The distance people underestimate is not the one to Rome. It is the one inside the port.",
    stages: [
      {
        label: "Stage one",
        title: "Your ship, at a numbered dock",
        body: "Cruise ships berth at numbered docks — 10, 11, 12, 12bis, 13, 13bis and 25. Which one your ship uses is decided by the port and the line, and it is the single piece of information nobody can look up on your behalf.",
      },
      {
        label: "Stage two",
        title: "The gates, and Largo della Pace",
        body: "A port shuttle connects the cruise docks with the Largo della Pace service centre, and the Varco Fortezza entrance stands about 600 metres from Civitavecchia's railway station. A private vehicle meets you where the port permits — which is not the same thing as at the foot of the gangway.",
      },
      {
        label: "Stage three",
        title: "Rome, or the airport",
        body: "From the port, Rome lies roughly 70 km to the south-east, and Fiumicino is a journey of its own again. Civitavecchia is also a town in its own right with its own station, which is worth remembering if the day goes sideways.",
      },
    ],
    source: {
      text: "The port is administered by the Port System Authority of the North Central Tyrrhenian Sea, which also administers Fiumicino and Gaeta; the cruise terminals are operated by Roma Cruise Terminal. Dock numbers, the shuttle and the distance to Rome are published by the port and were checked in October 2026:",
      linkText: "the port's information for cruise passengers",
      href: "https://www.civitavecchiaport.org/how-to-get-there/",
    },
  },

  confirm: {
    id: "confirm",
    eyebrow: "Before you sail",
    heading: "Six things to settle before the day",
    lead: "This is not a sales checklist. Every item on it has caught somebody out.",
    steps: [
      {
        title: "Which dock the ship is using",
        body: "Ask your cruise line and send the answer with your request. Dock numbers change from call to call, and the port is large enough that the wrong one is a long walk with luggage.",
      },
      {
        title: "The all-aboard time, not the sailing time",
        body: "The time printed on your cruise documents by which you must be back on board is the deadline the entire day works backwards from, and it is usually well before the ship moves. Use that figure when you arrange anything.",
      },
      {
        title: "Where you will actually be met",
        body: "Agree the meeting point in writing beforehand. Access inside the port is controlled and varies by dock and by ship, and nobody should be working it out at eight in the morning with four cases.",
      },
      {
        title: "Who is travelling, and with what",
        body: "The number of passengers and the number of cases decides the vehicle. Cruise luggage tends to be larger than airline luggage, which is why it is worth stating separately rather than assuming.",
      },
      {
        title: "Where the journey really ends",
        body: "A Rome address, Fiumicino, or somewhere else entirely. For most people the port is not a destination in itself, and the second half of the day is often the harder half to plan.",
      },
      {
        title: "A way to reach each other on the day",
        body: "Ships disembark in waves and timings move. Make sure there is a working telephone number on both sides, and that you have agreed what happens if either of you is delayed.",
      },
    ],
    warning: {
      heading: "What no page can promise you",
      body: "That a car will be waiting at the gangway, that a particular berth is reachable by private vehicle, or that a given dock will be open on your date. Those are the port's decisions and the ship's, they vary, and anyone promising them in advance is promising something they do not control.",
    },
  },

  connections: {
    id: "connections",
    eyebrow: "Connections",
    heading: "To and from the port",
    lead: "The two journeys almost everyone arriving here needs, and the pages behind them.",
    items: [
      {
        page: "route-rome-civitavecchia",
        label: "Rome to Civitavecchia cruise port",
        detail: "Sailing day, counted backwards from all-aboard time.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia",
        detail: "Fly in and sail — the same day, or the day before.",
      },
      {
        page: "rome",
        label: "Private transfers in Rome",
        detail: "If the ship is one end of a longer stay.",
      },
      {
        page: "fiumicino",
        label: "Fiumicino Airport (FCO)",
        detail: "Terminals, timings and what to send.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Cruise-day questions",
    lead: "The ones worth answering before you are standing on a quayside.",
    items: [
      {
        question: "How far is Civitavecchia from Rome?",
        answer:
          "The port gives roughly 70 km, north-west of the city. How long that takes depends on the hour, the traffic and the exact address at the other end, which is why no journey time is quoted here.",
      },
      {
        question: "Can a driver meet me at the ship?",
        answer:
          "Not as a general rule you can rely on. The cruise docks sit inside a controlled area, and the port runs its own shuttle between the berths and the Largo della Pace service centre. Where a private vehicle can meet you is something to confirm for your date and your dock, not to assume.",
      },
      {
        question: "What is Largo della Pace?",
        answer:
          "The port's service centre. The port shuttle connects it with the cruise docks, and it is one of the points passengers are commonly directed to after leaving the ship.",
      },
      {
        question: "Can I fly into Fiumicino and sail the same day?",
        answer:
          "People do, and it is among the most common requests here. Whether it is sensible for your particular flight and sailing is a question of timing and of how much margin you are willing to lose, and it is set out properly on the Fiumicino to Civitavecchia page.",
      },
      {
        question: "Does Civitavecchia have a railway station?",
        answer:
          "Yes, the town has its own, and the Varco Fortezza port entrance is about 600 metres from it. That matters mainly as a fallback if the day does not go to plan.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Send the ship, the dock and the all-aboard time",
    body: "With those three, plus where you are going and how many of you there are with how much luggage, a cruise-day transfer can be arranged properly instead of hopefully.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: CruisePort = {
  meta: {
    title: "Transfer per il porto di Civitavecchia",
    description:
      "Il porto che serve Roma è un comune a sé, a circa 70 km dalla città. Com'è organizzato, che cosa confermare prima del giorno dell'imbarco e perché il punto d'incontro va concordato.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Il porto crocieristico di Roma",
    h1: "Transfer da e per Civitavecchia",
    lead: "Le navi che fanno scalo «a Roma» attraccano a Civitavecchia, un porto operativo a circa 70 km a nord-ovest della città. Quasi tutte le complicazioni del giorno dell'imbarco nascono dal considerarlo un dettaglio anziché un viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa confermare prima",
    note: "Questa pagina non promette l'accesso a una banchina o a un terminal specifico. Gli spostamenti dentro un porto operativo sono regolamentati e cambiano da banchina a banchina e da nave a nave: le modalità del vostro viaggio si confermano con la richiesta.",
  },

  geography: {
    id: "geografia",
    eyebrow: "La geografia",
    heading: "Nave, varco, città: tre luoghi diversi",
    lead: "La distanza che si tende a sottovalutare non è quella da Roma, ma quella interna al porto.",
    stages: [
      {
        label: "Primo tratto",
        title: "La vostra nave, a una banchina numerata",
        body: "Le navi da crociera ormeggiano a banchine numerate: 10, 11, 12, 12bis, 13, 13bis e 25. Quale tocchi alla vostra lo decidono il porto e la compagnia, ed è l'unica informazione che nessuno può cercare al posto vostro.",
      },
      {
        label: "Secondo tratto",
        title: "I varchi e Largo della Pace",
        body: "Una navetta portuale collega le banchine crociere con il centro servizi di Largo della Pace, e il varco Fortezza si trova a circa 600 metri dalla stazione ferroviaria di Civitavecchia. Un veicolo privato vi incontra dove il porto lo consente, che non coincide con il piede della passerella.",
      },
      {
        label: "Terzo tratto",
        title: "Roma, oppure l'aeroporto",
        body: "Dal porto, Roma dista circa 70 km verso sud-est, e Fiumicino è a sua volta un viaggio a sé. Civitavecchia è anche una città con una propria stazione: utile da ricordare se la giornata prende una piega imprevista.",
      },
    ],
    source: {
      text: "Il porto è amministrato dall'Autorità di Sistema Portuale del Mar Tirreno Centro Settentrionale, che amministra anche Fiumicino e Gaeta; i terminal crociere sono gestiti da Roma Cruise Terminal. Numerazione delle banchine, navetta e distanza da Roma sono pubblicate dal porto e verificate nell'ottobre 2026:",
      linkText: "le informazioni del porto per i croceristi",
      href: "https://www.civitavecchiaport.org/how-to-get-there/",
    },
  },

  confirm: {
    id: "da-confermare",
    eyebrow: "Prima dell'imbarco",
    heading: "Sei cose da definire prima del giorno",
    lead: "Non è un elenco commerciale: ciascuna di queste voci ha già messo in difficoltà qualcuno.",
    steps: [
      {
        title: "A quale banchina ormeggia la nave",
        body: "Chiedetelo alla compagnia e indicatelo nella richiesta. I numeri delle banchine cambiano da scalo a scalo, e il porto è abbastanza grande perché sbagliarla significhi una lunga camminata con i bagagli.",
      },
      {
        title: "L'orario di rientro a bordo, non quello di partenza",
        body: "L'orario entro cui dovete essere di nuovo a bordo, indicato sui documenti di crociera, è la scadenza da cui si conta a ritroso tutta la giornata, ed è di norma ben prima che la nave molli gli ormeggi. È quello il dato da usare.",
      },
      {
        title: "Dove avverrà davvero l'incontro",
        body: "Concordate il punto d'incontro per iscritto in anticipo. L'accesso all'interno del porto è regolamentato e varia secondo la banchina e la nave: non è una cosa da risolvere alle otto del mattino con quattro valigie.",
      },
      {
        title: "Chi viaggia e con che cosa",
        body: "Il numero di passeggeri e di valigie determina il veicolo. I bagagli da crociera sono di solito più grandi di quelli aerei, ed è il motivo per cui conviene indicarli a parte invece di darli per scontati.",
      },
      {
        title: "Dove finisce davvero il viaggio",
        body: "Un indirizzo a Roma, Fiumicino, o tutt'altro. Per la maggior parte delle persone il porto non è una destinazione in sé, e la seconda metà della giornata è spesso la più difficile da organizzare.",
      },
      {
        title: "Un modo per contattarsi il giorno stesso",
        body: "Gli sbarchi avvengono a ondate e gli orari si spostano. Assicuratevi che ci sia un numero di telefono funzionante da entrambe le parti e che sia chiaro che cosa succede se qualcuno ritarda.",
      },
    ],
    warning: {
      heading: "Che cosa nessuna pagina può promettervi",
      body: "Che un'auto vi attenda alla passerella, che una determinata banchina sia raggiungibile da un veicolo privato o che un certo varco sia aperto nella vostra data. Sono decisioni del porto e della nave, cambiano, e chi le promette in anticipo sta promettendo qualcosa che non controlla.",
    },
  },

  connections: {
    id: "collegamenti",
    eyebrow: "Collegamenti",
    heading: "Da e per il porto",
    lead: "I due viaggi di cui ha bisogno quasi chiunque arrivi qui, e le pagine che li spiegano.",
    items: [
      {
        page: "route-rome-civitavecchia",
        label: "Da Roma al porto di Civitavecchia",
        detail: "Il giorno dell'imbarco, contato a ritroso.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Da Fiumicino a Civitavecchia",
        detail: "Volo e crociera: stesso giorno o il giorno prima.",
      },
      {
        page: "rome",
        label: "Transfer privati a Roma",
        detail: "Se la nave è un capo di un soggiorno più lungo.",
      },
      {
        page: "fiumicino",
        label: "Aeroporto di Fiumicino (FCO)",
        detail: "Terminal, tempi e che cosa indicare.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sul giorno dell'imbarco",
    lead: "Quelle a cui conviene rispondere prima di trovarsi su una banchina.",
    items: [
      {
        question: "Quanto dista Civitavecchia da Roma?",
        answer:
          "Il porto indica circa 70 km, a nord-ovest della città. Quanto tempo richieda dipende dall'ora, dal traffico e dall'indirizzo esatto: per questo qui non trovate una durata.",
      },
      {
        question: "L'autista può venire a prendermi sotto la nave?",
        answer:
          "Non come regola su cui contare. Le banchine crociere si trovano in un'area ad accesso controllato e il porto gestisce una propria navetta fra gli ormeggi e il centro servizi di Largo della Pace. Dove possa attendervi un veicolo privato è qualcosa da confermare per la vostra data e la vostra banchina, non da dare per scontato.",
      },
      {
        question: "Che cos'è Largo della Pace?",
        answer:
          "È il centro servizi del porto. La navetta portuale lo collega alle banchine crociere ed è uno dei punti verso cui i passeggeri vengono comunemente indirizzati dopo lo sbarco.",
      },
      {
        question: "Posso atterrare a Fiumicino e imbarcarmi lo stesso giorno?",
        answer:
          "C'è chi lo fa, ed è fra le richieste più frequenti. Se sia prudente per il vostro volo e la vostra partenza è una questione di orari e di margine, ed è spiegata per esteso nella pagina dedicata alla tratta da Fiumicino a Civitavecchia.",
      },
      {
        question: "Civitavecchia ha una stazione ferroviaria?",
        answer:
          "Sì, la città ha la propria, e il varco Fortezza dista da essa circa 600 metri. Conta soprattutto come alternativa se la giornata non va come previsto.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate nave, banchina e orario di rientro a bordo",
    body: "Con questi tre dati, più la destinazione, il numero di persone e quello dei bagagli, un transfer nel giorno dell'imbarco si organizza davvero, invece di sperare che funzioni.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const civitavecchia: Record<Locale, CruisePort> = { en, it };
