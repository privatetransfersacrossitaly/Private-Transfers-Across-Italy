import type { Locale } from "@/lib/site";
import type { MilanHub } from "./types";

/**
 * The Milan destination hub, in both languages.
 *
 * Every factual claim is recorded in `docs/milan-research-log.md` with its
 * source and the date it was checked. The Area B and Area C hours are the
 * most volatile of them — set by city ordinance, as Rome's ZTL hours are —
 * so the page dates them in the visible copy and links to the city.
 *
 * The Area C charge is deliberately not quoted. It has changed more than
 * once, and a stale fee on a transfer page is worse than no fee at all.
 */

const en: MilanHub = {
  meta: {
    title: "Private transfers in Milan",
    description:
      "Three airports sold under one city name, two companies running them, and two nested traffic zones that decide where a car can stop. What to check before you ask for a quotation.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Milan and Lombardy",
    h1: "Private transfers in Milan",
    lead: "Milan is the one Italian city where the airport printed on your ticket may be fifty kilometres away, in a different province, run by a different company. Everything else follows from which of the three you are actually flying into.",
    primaryCta: "Request a quotation",
    secondaryCta: "What Area B and Area C change",
    chooser: {
      heading: "Which airport is on your ticket?",
      note: "All three are sold as Milan. Only one of them is in it.",
      rows: [
        {
          id: "mxp",
          page: "malpensa",
          code: "MXP",
          name: "Malpensa",
          fact: "North-west of the city, in the province of Varese. Two terminals, and the country's largest intercontinental gateway.",
        },
        {
          id: "lin",
          page: "linate",
          code: "LIN",
          name: "Linate",
          fact: "The city airport: closest in, smallest of the three, mostly short- and medium-haul.",
        },
        {
          id: "bgy",
          page: "bergamo-airport",
          code: "BGY",
          name: "Bergamo",
          fact: "Not in Milan. It stands at Orio al Serio, about 50 km away, in the province of Bergamo.",
        },
      ],
    },
  },

  zones: {
    id: "zones",
    eyebrow: "Access",
    heading: "Two zones, one inside the other",
    lead: "Milan does not have a single restricted zone. It has a low-emission zone covering most of the city, and a charged zone inside that one.",
    paragraphs: [
      "Almost every explanation of this treats Area B and Area C as two items in a list, which is the one thing they are not. Area C sits inside Area B, so a journey into the historic centre crosses both — and the rules that apply are the rules of whichever zone you are in at the time.",
      "Area B is the outer one, a low-emission zone covering most of the municipality and entered through a few hundred camera-controlled gates. It restricts the most polluting vehicles, goods vehicles over twelve metres, vehicles carrying dangerous goods, and vehicles without blind-spot warning systems.",
      "The city names taxis, and private-hire cars of up to nine seats, among the categories exempt from the Area C charge — provided the vehicle's plate is registered for limited-traffic zones and reserved lanes. That is a rule about categories of vehicle. It is not a statement about any particular journey, and no exemption makes a narrow street wider or a closed one open.",
    ],
    outer: {
      label: "The outer zone",
      name: "Area B",
      detail:
        "A low-emission zone over most of the city, entered through camera-controlled gates. It restricts the most polluting vehicles, goods vehicles over 12 m, vehicles carrying dangerous goods, and vehicles without blind-spot warning systems.",
      hours:
        "Monday to Friday, 07:30–19:30. Not active on Saturdays or public holidays.",
    },
    inner: {
      label: "And inside it",
      name: "Area C",
      detail:
        "A charged zone covering the Cerchia dei Bastioni, the ring of boulevards around the historic centre. Vehicles that are not exempt pay a daily charge to enter during its hours.",
      hours:
        "Monday to Friday, 07:30–19:30, public holidays excluded, all year.",
    },
    source: {
      text: "Zone rules and hours as published by the Comune di Milano and checked in October 2026. They are set by city ordinance and change; the charge itself has changed more than once, which is why no amount appears on this page.",
      linkText: "the city publishes the current rules",
      href: "https://www.comune.milano.it/en/argomenti/mobilita/area-c",
    },
  },

  districts: {
    id: "districts",
    eyebrow: "Districts",
    heading: "Where you are staying changes the journey",
    lead: "Milan's centre is small and old, and almost everything around it is not. The difference shows up in the last two hundred metres.",
    items: [
      {
        term: "Duomo and the Centro Storico",
        detail:
          "Inside Area C as well as Area B, on streets that were medieval before they were anything else. For an address in here, expect to be met at an agreed point a short walk away rather than at the door.",
      },
      {
        term: "Brera",
        detail:
          "North of the Duomo and inside both zones, on narrow streets that fill with people in the evening. The same practical answer applies.",
      },
      {
        term: "Porta Nuova",
        detail:
          "Towers and wide roads immediately north of the centre, inside Area B but outside Area C. Generally the easiest central district for a vehicle to reach an actual address.",
      },
      {
        term: "Navigli",
        detail:
          "The canal district to the south-west, inside Area B. The quaysides are narrow and busy at night, which matters more than the zone rules do.",
      },
      {
        term: "CityLife and Portello",
        detail:
          "West of the centre and built in this century, with generous frontages and underground parking. Straightforward by comparison.",
      },
      {
        term: "Fiera and Rho",
        detail:
          "The main exhibition grounds are not in the city at all — they are out to the north-west, on the way to Malpensa. Say which site you mean when you ask, because the two are not in the same place.",
      },
      {
        term: "Centrale",
        detail:
          "Around the main station: broad approach roads, dense traffic and the station's own layout to allow for. The constraint here is congestion rather than access.",
      },
    ],
  },

  onward: {
    id: "onward",
    eyebrow: "Onward",
    heading: "From Milan",
    lead: "The journeys that have pages of their own.",
    items: [
      {
        page: "lake-como",
        label: "Lake Como",
        detail: "Not one destination — three arms of water and a town to name.",
      },
      {
        page: "milan-stations",
        label: "Milan's railway stations",
        detail: "Centrale, Garibaldi, Cadorna and Rogoredo, and why Cadorna is different.",
      },
      {
        page: "route-mxp-milan",
        label: "Malpensa Airport to Milan",
        detail: "The most asked-about Milan transfer.",
      },
      {
        page: "route-lin-milan",
        label: "Linate Airport to Milan",
        detail: "Short, and not automatically quick.",
      },
      {
        page: "route-bgy-milan",
        label: "Bergamo Airport to Milan",
        detail: "The fifty kilometres the airport's name conceals.",
      },
      {
        page: "route-mxp-como",
        label: "Malpensa Airport to Lake Como",
        detail: "Straight to the lake rather than into the city.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Milan questions worth answering first",
    lead: "Short answers, and two of them are corrections.",
    items: [
      {
        question: "How many airports does Milan have?",
        answer:
          "Three are sold under its name. Malpensa and Linate are operated by SEA; Bergamo, officially Il Caravaggio International Airport, is operated by SACBO and stands at Orio al Serio in the province of Bergamo, about 50 km from Milan. Check which one your ticket means before you arrange anything.",
      },
      {
        question: "Is Bergamo Airport in Milan?",
        answer:
          "No. It is about 5 km from Bergamo and about 50 km from Milan, in a different province. It is a real airport with a real transfer to Milan attached to it — but it is not a Milan airport in the sense the name suggests.",
      },
      {
        question: "What is the difference between Area B and Area C?",
        answer:
          "Area B is a low-emission zone covering most of the city; Area C is a charged zone inside it, covering the Cerchia dei Bastioni around the historic centre. Both operate Monday to Friday, 07:30 to 19:30. A journey into the old centre crosses both.",
      },
      {
        question: "Can a car collect me from my hotel door in the centre?",
        answer:
          "Sometimes. Taxis and private-hire cars of up to nine seats are among the categories the city exempts from the Area C charge when their plates are registered for limited-traffic zones — but an exemption is not a wider street. Inside the Centro Storico and Brera, a meeting point a short walk away, agreed in advance, is often the workable answer.",
      },
      {
        question: "Which station will my train use?",
        answer:
          "Your ticket names it. Centrale has 24 tracks and Porta Garibaldi has 20; Rogoredo has 13; Cadorna is run by a different infrastructure manager altogether and is where the Malpensa Express terminates. The station decides where a car can reasonably wait.",
      },
      {
        question: "What changes the price of a transfer?",
        answer:
          "The exact addresses at both ends, the date and time, how many of you there are and how much luggage, the vehicle that suits that, and anything added to the journey. None of it can be answered from a page, which is what a quotation is for.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us which airport, and where you are going",
    body: "The airport and flight, the full address at the other end, the date and time, and how many of you there are with how much luggage. In Milan the first of those decides most of the rest.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "What to have ready", page: "home", hash: "prepare" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: MilanHub = {
  meta: {
    title: "Transfer privati a Milano",
    description:
      "Tre aeroporti venduti con il nome di una sola città, due società che li gestiscono e due zone a traffico limitato una dentro l'altra. Che cosa verificare prima di chiedere un preventivo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Milano e Lombardia",
    h1: "Transfer privati a Milano",
    lead: "Milano è l'unica città italiana in cui l'aeroporto stampato sul biglietto può trovarsi a cinquanta chilometri, in un'altra provincia e con un altro gestore. Tutto il resto dipende da quale dei tre vi riguarda davvero.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa cambiano Area B e Area C",
    chooser: {
      heading: "Quale aeroporto c'è sul vostro biglietto?",
      note: "Tutti e tre vengono venduti come «Milano». Uno solo è a Milano.",
      rows: [
        {
          id: "mxp",
          page: "malpensa",
          code: "MXP",
          name: "Malpensa",
          fact: "A nord-ovest della città, in provincia di Varese. Due terminal, ed è il principale scalo intercontinentale del Paese.",
        },
        {
          id: "lin",
          page: "linate",
          code: "LIN",
          name: "Linate",
          fact: "L'aeroporto cittadino: il più vicino, il più piccolo dei tre, soprattutto corto e medio raggio.",
        },
        {
          id: "bgy",
          page: "bergamo-airport",
          code: "BGY",
          name: "Bergamo",
          fact: "Non è a Milano. Si trova a Orio al Serio, a circa 50 km, in provincia di Bergamo.",
        },
      ],
    },
  },

  zones: {
    id: "zone",
    eyebrow: "Accessi",
    heading: "Due zone, una dentro l'altra",
    lead: "Milano non ha una sola zona a traffico limitato: ha una zona a basse emissioni che copre quasi tutta la città e, al suo interno, una zona a pagamento.",
    paragraphs: [
      "Quasi tutte le spiegazioni che si trovano in giro presentano Area B e Area C come due voci di un elenco, che è l'unica cosa che non sono. Area C sta dentro Area B: un viaggio verso il centro storico le attraversa entrambe, e valgono di volta in volta le regole della zona in cui ci si trova.",
      "Area B è quella esterna: una zona a basse emissioni che copre quasi tutto il territorio comunale, con alcune centinaia di varchi controllati da telecamere. Vieta l'accesso ai veicoli più inquinanti, ai mezzi merci oltre i dodici metri, ai veicoli che trasportano merci pericolose e a quelli privi di sistemi di rilevazione dell'angolo cieco.",
      "Il Comune indica i taxi e le auto a noleggio con conducente fino a nove posti fra le categorie esentate dal ticket di Area C, a condizione che la targa sia registrata per le ZTL e le corsie riservate. È una regola che riguarda categorie di veicoli: non dice nulla su un viaggio specifico, e nessuna esenzione allarga una strada stretta o apre una strada chiusa.",
    ],
    outer: {
      label: "La zona esterna",
      name: "Area B",
      detail:
        "Zona a basse emissioni estesa a quasi tutta la città, con varchi controllati da telecamere. Vieta l'accesso ai veicoli più inquinanti, ai mezzi merci oltre i 12 metri, ai veicoli con merci pericolose e a quelli senza sistemi per l'angolo cieco.",
      hours:
        "Dal lunedì al venerdì, 7.30–19.30. Non è attiva il sabato né nei giorni festivi.",
    },
    inner: {
      label: "E al suo interno",
      name: "Area C",
      detail:
        "Zona a pagamento che copre la Cerchia dei Bastioni, l'anello attorno al centro storico. I veicoli non esentati pagano un ticket giornaliero per entrarvi negli orari di attivazione.",
      hours:
        "Dal lunedì al venerdì, 7.30–19.30, festivi esclusi, tutto l'anno.",
    },
    source: {
      text: "Regole e orari delle zone come pubblicati dal Comune di Milano e verificati nell'ottobre 2026. Sono stabiliti per ordinanza e cambiano; anche il ticket è cambiato più di una volta, ed è il motivo per cui qui non trovate alcun importo.",
      linkText: "Il Comune pubblica le regole aggiornate",
      href: "https://www.comune.milano.it/it/argomenti/mobilita/area-c",
    },
  },

  districts: {
    id: "quartieri",
    eyebrow: "Quartieri",
    heading: "Dove alloggiate cambia il viaggio",
    lead: "Il centro di Milano è piccolo e antico; quasi tutto ciò che lo circonda non lo è. La differenza si vede negli ultimi duecento metri.",
    items: [
      {
        term: "Duomo e centro storico",
        detail:
          "Dentro Area C oltre che dentro Area B, su strade che erano medievali prima di essere qualsiasi altra cosa. Per un indirizzo qui, mettete in conto un punto d'incontro concordato a pochi passi, non davanti al portone.",
      },
      {
        term: "Brera",
        detail:
          "A nord del Duomo e dentro entrambe le zone, su vie strette che la sera si riempiono di gente. Vale la stessa soluzione pratica.",
      },
      {
        term: "Porta Nuova",
        detail:
          "Torri e strade larghe appena a nord del centro, dentro Area B ma fuori da Area C. In genere è il quartiere centrale in cui è più semplice raggiungere un indirizzo in auto.",
      },
      {
        term: "Navigli",
        detail:
          "Il quartiere dei canali, a sud-ovest, dentro Area B. Le alzaie sono strette e affollate di sera, e questo conta più delle regole di accesso.",
      },
      {
        term: "CityLife e Portello",
        detail:
          "A ovest del centro, costruiti in questo secolo, con ampi spazi davanti agli edifici e parcheggi interrati. Al confronto, semplici.",
      },
      {
        term: "Fiera e Rho",
        detail:
          "Il polo fieristico principale non è in città: si trova a nord-ovest, sulla strada per Malpensa. Quando scrivete, precisate quale sede intendete, perché le due non sono nello stesso posto.",
      },
      {
        term: "Centrale",
        detail:
          "Attorno alla stazione centrale: strade di accesso ampie, traffico intenso e la conformazione della stazione da considerare. Qui il vincolo è la congestione, non l'accesso.",
      },
    ],
  },

  onward: {
    id: "proseguimenti",
    eyebrow: "Proseguimenti",
    heading: "Da Milano",
    lead: "Le tratte che hanno una pagina dedicata.",
    items: [
      {
        page: "lake-como",
        label: "Lago di Como",
        detail: "Non una destinazione sola: tre rami d'acqua e un paese da indicare.",
      },
      {
        page: "milan-stations",
        label: "Le stazioni ferroviarie di Milano",
        detail: "Centrale, Garibaldi, Cadorna e Rogoredo, e perché Cadorna fa storia a sé.",
      },
      {
        page: "route-mxp-milan",
        label: "Dall'aeroporto di Malpensa a Milano",
        detail: "Il transfer milanese più richiesto.",
      },
      {
        page: "route-lin-milan",
        label: "Dall'aeroporto di Linate a Milano",
        detail: "Breve, e non per questo rapido.",
      },
      {
        page: "route-bgy-milan",
        label: "Dall'aeroporto di Bergamo a Milano",
        detail: "I cinquanta chilometri che il nome dell'aeroporto nasconde.",
      },
      {
        page: "route-mxp-como",
        label: "Da Malpensa al Lago di Como",
        detail: "Direttamente al lago, senza passare dalla città.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande milanesi a cui rispondere per prime",
    lead: "Risposte brevi, e due sono correzioni.",
    items: [
      {
        question: "Quanti aeroporti ha Milano?",
        answer:
          "Tre vengono venduti con il suo nome. Malpensa e Linate sono gestiti da SEA; Bergamo, ufficialmente Il Caravaggio International Airport, è gestito da SACBO e si trova a Orio al Serio, in provincia di Bergamo, a circa 50 km da Milano. Verificate quale intende il vostro biglietto prima di organizzare qualsiasi cosa.",
      },
      {
        question: "L'aeroporto di Bergamo è a Milano?",
        answer:
          "No. Dista circa 5 km da Bergamo e circa 50 km da Milano, in un'altra provincia. È un aeroporto vero con un transfer vero verso Milano, ma non è un aeroporto milanese nel senso che il nome lascia intendere.",
      },
      {
        question: "Che differenza c'è fra Area B e Area C?",
        answer:
          "Area B è una zona a basse emissioni estesa a quasi tutta la città; Area C è una zona a pagamento al suo interno, che copre la Cerchia dei Bastioni attorno al centro storico. Entrambe sono attive dal lunedì al venerdì, dalle 7.30 alle 19.30. Un viaggio verso il centro storico le attraversa tutte e due.",
      },
      {
        question: "Un'auto può venire a prendermi davanti all'hotel in centro?",
        answer:
          "A volte. Taxi e NCC fino a nove posti rientrano fra le categorie che il Comune esenta dal ticket di Area C quando la targa è registrata per le ZTL, ma un'esenzione non allarga una strada. In centro storico e a Brera, un punto d'incontro a pochi passi dal portone, concordato prima, è spesso la soluzione praticabile.",
      },
      {
        question: "A quale stazione arriva il mio treno?",
        answer:
          "Lo indica il biglietto. Centrale ha 24 binari e Porta Garibaldi 20; Rogoredo ne ha 13; Cadorna è gestita da un altro gestore dell'infrastruttura ed è il capolinea del Malpensa Express. È la stazione a stabilire dove un'auto possa ragionevolmente attendere.",
      },
      {
        question: "Che cosa fa cambiare il prezzo di un transfer?",
        answer:
          "Gli indirizzi esatti ai due capi, la data e l'ora, quante persone siete e quanti bagagli avete, il veicolo adatto e qualsiasi cosa si aggiunga al percorso. Nulla di tutto questo si stabilisce da una pagina: serve un preventivo.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Diteci quale aeroporto e dove andate",
    body: "Aeroporto e volo, indirizzo completo di arrivo, data e ora, quante persone siete e quanti bagagli avete. A Milano il primo di questi dati determina quasi tutti gli altri.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Che cosa tenere pronto",
      page: "home",
      hash: "prepare",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const milanHub: Record<Locale, MilanHub> = { en, it };
