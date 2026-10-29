import type { Locale } from "@/lib/site";
import type { VeniceHub } from "./types";

/**
 * The Venice hub.
 *
 * One fact governs this page and everything that links to it: road transport
 * into Venice ends at Piazzale Roma, and the historic centre beyond it is
 * reached on foot or by water. The page is organised so that a reader meets
 * that before they meet anything else, because it is an assumption people
 * arrive with rather than a detail they look up.
 *
 * Three refusals are held throughout, in both languages:
 *
 * - no road vehicle is implied to reach a historic-centre address or any
 *   island;
 * - no boat, vaporetto, water taxi or porter is implied to form part of a
 *   road transfer;
 * - no fare, duration or distance for any leg appears anywhere — the only
 *   sources that could have supported them were the four that blocked
 *   automated access. See `docs/veneto-research-log.md` §0.
 */

const en: VeniceHub = {
  meta: {
    title: "Private transfers in Venice",
    description:
      "Venice is the one Italian city where a road transfer cannot finish at the door. Where a car can actually take you, what the airports and stations really mean, and what is never included.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Venice and the Veneto",
    h1: "Private transfers in Venice",
    lead: "Road transport into Venice ends at Piazzale Roma. Everything past it — the Grand Canal, the sestieri, the islands — is reached on foot or by water. That one fact decides almost everything about a transfer here, so it is worth settling before anything else.",
    primaryCta: "Request a quotation",
    secondaryCta: "Why the road stops",
    split: {
      road: {
        label: "A car can reach",
        heading: "Where a road transfer can end",
        note: "These are the places a vehicle can actually finish at. If your destination is one of them, a Venice transfer behaves like a transfer anywhere else.",
        items: [
          {
            id: "piazzale-roma",
            name: "Piazzale Roma",
            detail:
              "The road terminus for the historic city. Buses, taxis and private vehicles all end here.",
          },
          {
            id: "tronchetto",
            name: "Tronchetto",
            detail:
              "The other road terminus, on the artificial island beside Piazzale Roma.",
          },
          {
            id: "mestre",
            name: "Venezia Mestre",
            detail:
              "The mainland station and the streets around it. Ordinary roads, ordinary addresses.",
          },
          {
            id: "mainland",
            name: "Mainland addresses",
            detail:
              "Mestre, Marghera and the rest of the mainland part of the comune — reachable like anywhere else in Italy.",
          },
        ],
      },
      water: {
        label: "A car cannot reach",
        heading: "Everything past the road's end",
        note: "A boat, vaporetto, water taxi or porter is not part of a road transfer. Where a journey needs one, it is a separate arrangement with its own operator unless something different has been explicitly agreed.",
        items: [
          {
            id: "centro-storico",
            name: "The historic centre",
            detail:
              "San Marco, Cannaregio, Dorsoduro and the rest. There is no road beyond Piazzale Roma.",
          },
          {
            id: "santa-lucia",
            name: "Venezia Santa Lucia",
            detail:
              "The station inside the historic city, at the western end of the Grand Canal. On foot or by water from Piazzale Roma — not by car.",
          },
          {
            id: "islands",
            name: "The lagoon islands",
            detail:
              "Lido, Murano, Burano and the others. Water, in every case.",
          },
          {
            id: "hotel-door",
            name: "A hotel's own door",
            detail:
              "Most historic-centre addresses are reached down a calle or from a canal. No vehicle gets there.",
          },
        ],
      },
    },
  },

  why: {
    id: "why",
    eyebrow: "The geography",
    heading: "Why the road stops where it does",
    lead: "This is not a restriction imposed on traffic. It is a city built before traffic existed.",
    paragraphs: [
      "Until 1933 the historic city could be reached only by boat or by rail. The Ponte della Libertà changed that, but only so far: it carries road and rail onto the edge of the islands and then stops. Piazzale Roma and Tronchetto are where it stops.",
      "Everything beyond is canals, bridges with steps, and lanes narrower than a car. There is no limited-traffic zone to apply for and no permit to obtain, because there is no road to permit. That is the difference between Venice and every other city on this site: in Rome or Milan the question is whether a vehicle may use a particular street, and here the question is whether a street exists at all.",
      "So a transfer to Venice is a transfer to the edge of Venice, and the last part of the journey is yours to make. Knowing that in advance is the difference between a short walk with luggage and a bad surprise at the end of a flight.",
    ],
  },

  arrivals: {
    id: "arrivals",
    eyebrow: "Arriving",
    heading: "Which airport, which station",
    lead: "Three of the four arrival points people mean when they say Venice are not in the historic city at all.",
    items: [
      {
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail:
          "Venice's own airport, at Tessera inside the comune — and still unable to deliver you to a historic-centre door.",
      },
      {
        page: "treviso-airport",
        label: "Treviso (TSF)",
        detail:
          "A Treviso airport about 31 km from Venice, often sold under Venice's name.",
      },
      {
        page: "venice-stations",
        label: "Venice's railway stations",
        detail:
          "Santa Lucia is in the historic centre; Mestre is on the mainland. Your ticket says which.",
      },
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "The commonest arrival, set out endpoint by endpoint.",
      },
      {
        page: "route-tsf-venice",
        label: "Treviso Airport to Venice",
        detail: "The distance first, then the same road limit as everyone else.",
      },
    ],
  },

  accessFee: {
    heading: "The city's access fee, briefly",
    paragraphs: [
      "Venice operates a contributo di accesso — a fee for day visitors entering the historic centre on designated days. It has nothing to do with this service and is not part of any transfer, but it affects people going in for the day rather than staying overnight, so it is worth knowing it exists.",
      "Its status changes. The 2026 trial ran on designated days and closed on 26 July 2026, and whether it runs again had not been decided in the sources checked for this page in October 2026. Amounts and exemptions have also differed between versions, which is why none is stated here.",
    ],
    source: {
      text: "The city runs the scheme and publishes its current status, calendar and exemptions. Checked October 2026:",
      linkText: "the city's access-fee portal",
      href: "https://cda.ve.it/en/faq",
    },
  },

  onward: {
    id: "onward",
    heading: "Elsewhere in the Veneto",
    items: [
      {
        page: "verona",
        label: "Transfers in Verona",
        detail:
          "The same region, and in transfer terms very nearly the opposite city.",
      },
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "Where the road actually ends, and what follows.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Venice questions",
    lead: "Most of them are the same question in different words: how close can a car actually get?",
    items: [
      {
        question: "Can a car take me to my hotel in Venice?",
        answer:
          "If the hotel is on the mainland, yes. If it is in the historic centre, no — road transport ends at Piazzale Roma and the rest is on foot or by water. That is true of every vehicle, not only of a private transfer.",
      },
      {
        question: "Where does a transfer to Venice actually end?",
        answer:
          "At Piazzale Roma or Tronchetto if you are going into the historic city, or at the address itself if you are staying on the mainland. Say which you need when you ask, because they are genuinely different journeys.",
      },
      {
        question: "Is a water taxi or vaporetto included?",
        answer:
          "No. A road transfer is by road. Any water leg is a separate arrangement with its own operator unless something different has been explicitly agreed in writing beforehand.",
      },
      {
        question: "What is the difference between Santa Lucia and Mestre?",
        answer:
          "Santa Lucia is inside the historic centre, at the western end of the Grand Canal, and cannot be reached by car. Mestre is on the mainland and can be. Both appear as Venice on a ticket, which is where the trouble starts.",
      },
      {
        question: "Which airport should I fly into?",
        answer:
          "Marco Polo is Venice's own airport, at Tessera inside the comune of Venice. Treviso is about 31 km away and is a Treviso airport often sold under Venice's name. Both have pages here, and the difference is worth two minutes before you book a flight.",
      },
      {
        question: "How much luggage can I realistically manage?",
        answer:
          "Worth thinking about honestly. Between Piazzale Roma and a historic-centre hotel you are walking or on a boat, frequently over bridges with steps. Nothing about a road transfer changes that, and nobody carries it for you as part of one.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us where the journey really ends",
    body: "The address, and whether it is on the mainland or in the historic centre. In Venice that single detail changes the whole arrangement, and it is the one most requests leave out.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "What to have ready", page: "home", hash: "prepare" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: VeniceHub = {
  meta: {
    title: "Transfer privati a Venezia",
    description:
      "Venezia è l'unica città italiana in cui un transfer su strada non può finire al portone. Dove arriva davvero un'auto e che cosa non è mai compreso.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Venezia e il Veneto",
    h1: "Transfer privati a Venezia",
    lead: "Il trasporto su gomma verso Venezia finisce a Piazzale Roma. Tutto quello che c'è oltre — il Canal Grande, i sestieri, le isole — si raggiunge a piedi o per acqua. È questo singolo fatto a determinare quasi tutto di un transfer qui, e conviene chiarirlo prima di ogni altra cosa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Perché la strada si ferma",
    split: {
      road: {
        label: "L'auto ci arriva",
        heading: "Dove può finire un transfer su strada",
        note: "Sono i luoghi in cui un veicolo può davvero fermarsi. Se la vostra destinazione è una di queste, un transfer a Venezia funziona come in qualsiasi altra città.",
        items: [
          {
            id: "piazzale-roma",
            name: "Piazzale Roma",
            detail:
              "Il capolinea stradale della città storica. Qui finiscono autobus, taxi e veicoli privati.",
          },
          {
            id: "tronchetto",
            name: "Tronchetto",
            detail:
              "L'altro capolinea stradale, sull'isola artificiale accanto a Piazzale Roma.",
          },
          {
            id: "mestre",
            name: "Venezia Mestre",
            detail:
              "La stazione di terraferma e le vie attorno. Strade normali, indirizzi normali.",
          },
          {
            id: "mainland",
            name: "Indirizzi in terraferma",
            detail:
              "Mestre, Marghera e il resto della parte continentale del comune: raggiungibili come ovunque in Italia.",
          },
        ],
      },
      water: {
        label: "L'auto non ci arriva",
        heading: "Tutto ciò che sta oltre la fine della strada",
        note: "Un battello, un vaporetto, un taxi acqueo o un portabagagli non fanno parte di un transfer su strada. Se il vostro viaggio ne ha bisogno, è un'organizzazione separata con il relativo operatore, salvo accordi espliciti diversi.",
        items: [
          {
            id: "centro-storico",
            name: "Il centro storico",
            detail:
              "San Marco, Cannaregio, Dorsoduro e gli altri sestieri. Oltre Piazzale Roma non c'è strada.",
          },
          {
            id: "santa-lucia",
            name: "Venezia Santa Lucia",
            detail:
              "La stazione dentro la città storica, all'estremità occidentale del Canal Grande. Da Piazzale Roma si raggiunge a piedi o per acqua, non in auto.",
          },
          {
            id: "islands",
            name: "Le isole della laguna",
            detail:
              "Lido, Murano, Burano e le altre. Per acqua, sempre.",
          },
          {
            id: "hotel-door",
            name: "Il portone dell'hotel",
            detail:
              "Quasi tutti gli indirizzi del centro storico si raggiungono per calle o dal canale. Nessun veicolo ci arriva.",
          },
        ],
      },
    },
  },

  why: {
    id: "perche",
    eyebrow: "La geografia",
    heading: "Perché la strada finisce dove finisce",
    lead: "Non è una limitazione imposta al traffico: è una città costruita prima che il traffico esistesse.",
    paragraphs: [
      "Fino al 1933 la città storica si poteva raggiungere soltanto in barca o in treno. Il Ponte della Libertà ha cambiato le cose, ma solo fino a un certo punto: porta strada e ferrovia fino al margine delle isole e lì si ferma. Piazzale Roma e Tronchetto sono quel punto.",
      "Oltre ci sono canali, ponti con i gradini e calli più strette di un'automobile. Non c'è una ZTL per cui chiedere il permesso né un pass da ottenere, perché non c'è una strada da autorizzare. È questa la differenza fra Venezia e ogni altra città di questo sito: a Roma o a Milano la domanda è se un veicolo possa percorrere una certa via; qui la domanda è se quella via esista.",
      "Un transfer per Venezia è quindi un transfer fino al margine di Venezia, e l'ultimo tratto tocca a voi. Saperlo in anticipo è la differenza fra una breve camminata con i bagagli e una brutta sorpresa alla fine di un volo.",
    ],
  },

  arrivals: {
    id: "arrivi",
    eyebrow: "Arrivare",
    heading: "Quale aeroporto, quale stazione",
    lead: "Tre dei quattro punti di arrivo che si chiamano «Venezia» non sono affatto nella città storica.",
    items: [
      {
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail:
          "L'aeroporto di Venezia, a Tessera, dentro il comune — e comunque incapace di portarvi davanti a un portone del centro storico.",
      },
      {
        page: "treviso-airport",
        label: "Treviso (TSF)",
        detail:
          "Un aeroporto trevigiano a circa 31 km da Venezia, spesso venduto con il nome di Venezia.",
      },
      {
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail:
          "Santa Lucia è nel centro storico, Mestre in terraferma. Lo dice il vostro biglietto.",
      },
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "L'arrivo più frequente, spiegato punto per punto.",
      },
      {
        page: "route-tsf-venice",
        label: "Dall'aeroporto di Treviso a Venezia",
        detail: "Prima la distanza, poi lo stesso limite stradale di tutti gli altri.",
      },
    ],
  },

  accessFee: {
    heading: "Il contributo di accesso, in breve",
    paragraphs: [
      "Venezia applica un contributo di accesso ai visitatori giornalieri che entrano nel centro storico in determinate giornate. Non ha nulla a che vedere con questo servizio e non fa parte di alcun transfer, ma riguarda chi entra per la giornata invece di pernottare: vale la pena sapere che esiste.",
      "La sua situazione cambia nel tempo. La sperimentazione 2026 si è svolta in giornate stabilite e si è chiusa il 26 luglio 2026; se verrà ripetuta non era deciso nelle fonti consultate per questa pagina nell'ottobre 2026. Anche importi ed esenzioni sono cambiati fra una versione e l'altra, ed è il motivo per cui qui non ne indichiamo nessuno.",
    ],
    source: {
      text: "Il Comune gestisce la misura e ne pubblica stato, calendario ed esenzioni aggiornati. Verificato nell'ottobre 2026:",
      linkText: "il portale del contributo di accesso",
      href: "https://cda.ve.it/it/faq",
    },
  },

  onward: {
    id: "altrove",
    heading: "Altrove in Veneto",
    items: [
      {
        page: "verona",
        label: "Transfer a Verona",
        detail:
          "Stessa regione e, in termini di transfer, quasi la città opposta.",
      },
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "Dove finisce davvero la strada, e che cosa viene dopo.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Venezia",
    lead: "Quasi tutte sono la stessa domanda con parole diverse: quanto può avvicinarsi davvero un'auto?",
    items: [
      {
        question: "Un'auto può portarmi al mio hotel a Venezia?",
        answer:
          "Se l'hotel è in terraferma, sì. Se è nel centro storico, no: il trasporto su gomma finisce a Piazzale Roma e il resto si fa a piedi o per acqua. Vale per qualsiasi veicolo, non solo per un transfer privato.",
      },
      {
        question: "Dove finisce davvero un transfer per Venezia?",
        answer:
          "A Piazzale Roma o al Tronchetto se andate nella città storica, oppure all'indirizzo stesso se alloggiate in terraferma. Indicate quale vi serve quando scrivete, perché sono viaggi davvero diversi.",
      },
      {
        question: "Il taxi acqueo o il vaporetto è compreso?",
        answer:
          "No. Un transfer su strada avviene su strada. Qualsiasi tratto per acqua è un'organizzazione separata con il suo operatore, salvo che non sia stato concordato esplicitamente altro, per iscritto e in anticipo.",
      },
      {
        question: "Che differenza c'è fra Santa Lucia e Mestre?",
        answer:
          "Santa Lucia è nel centro storico, all'estremità occidentale del Canal Grande, e non è raggiungibile in auto. Mestre è in terraferma e lo è. Sul biglietto compaiono entrambe come «Venezia», ed è da lì che nascono i problemi.",
      },
      {
        question: "Su quale aeroporto conviene atterrare?",
        answer:
          "Marco Polo è l'aeroporto di Venezia, a Tessera, dentro il comune. Treviso dista circa 31 km ed è un aeroporto trevigiano spesso venduto con il nome di Venezia. Qui trovate una pagina per ciascuno, e la differenza merita due minuti prima di prenotare un volo.",
      },
      {
        question: "Quanti bagagli riesco davvero a gestire?",
        answer:
          "Vale la pena pensarci con onestà. Fra Piazzale Roma e un hotel del centro storico si cammina o si va per acqua, spesso su ponti con i gradini. Un transfer su strada non cambia nulla di tutto questo, e nessuno li porta per voi come parte del servizio.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Diteci dove finisce davvero il viaggio",
    body: "L'indirizzo, e se si trova in terraferma o nel centro storico. A Venezia è questo singolo dato a cambiare tutta l'organizzazione, ed è proprio quello che quasi tutte le richieste dimenticano.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Che cosa tenere pronto",
      page: "home",
      hash: "prepare",
    },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const veniceHub: Record<Locale, VeniceHub> = { en, it };
