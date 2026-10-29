import type { Locale } from "@/lib/site";
import type { RavennaTerminal } from "./types";

/**
 * Ravenna Cruise Terminal at Porto Corsini.
 *
 * ── The best-sourced page in the cluster, and the least certain ───────────
 * Three official bodies describe this place: the port operator, the regional
 * tourism authority and the Comune di Ravenna. All three were reachable. All
 * three were read. **They disagree with each other** on the distance to the
 * city, on where the public bus stops, and on whether a taxi can be had.
 *
 * Picking one figure would make the page look more confident and be less
 * true. So the disagreement is published as a table — a row per question, a
 * column per publisher, attributed — and no distance is stated anywhere on
 * this site. Nothing else on the site does this, because nothing else needed
 * it.
 *
 * ── Two facts that constrain everything else ──────────────────────────────
 * The operator states that a temporary marquee is presently used as the
 * cruise terminal. There is no terminal building, so none may be described
 * and none may be photographed.
 *
 * The operator publishes no rule about where a car may collect a passenger.
 * So no meeting point, kerbside arrangement, port permission or driver-sign
 * procedure appears here, exactly as none appears on the BLQ page.
 *
 * The owner has confirmed the business covers Porto Corsini. That is stated
 * as our coverage — never as an endorsement, partnership or guarantee by the
 * port, which has said nothing about us.
 *
 * See `docs/bologna-research-log.md` §4, R1–R11.
 */

const operatorEn = {
  text: "The pier address, the temporary-terminal arrangement, bus line 90, the taxi arrangements and the nearby parking are as published by the port operator, read on 27 October 2026:",
  linkText: "Ravenna Cruise Port publishes its own guest information",
  href: "https://rccp.it/en/guests/",
};

const operatorIt = {
  text: "L'indirizzo del molo, la sistemazione provvisoria del terminal, la linea 90, le modalità del servizio taxi e il parcheggio vicino sono quelli pubblicati dall'operatore portuale, consultati il 27 ottobre 2026:",
  linkText: "Ravenna Cruise Port pubblica le proprie informazioni per i passeggeri",
  href: "https://rccp.it/en/guests/",
};

const en: RavennaTerminal = {
  meta: {
    title: "Ravenna Cruise Terminal at Porto Corsini transfers",
    description:
      "Three official sources describe this port differently. Rather than pick one, this page shows what each of them says — and what none of them publishes.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Joining or leaving a ship",
    h1: "Ravenna Cruise Terminal at Porto Corsini",
    lead: "Ships calling at Ravenna berth at Porto Corsini, out on the coast. It is a straightforward place to arrange a car to — and a surprisingly difficult one to describe accurately, because the bodies that describe it do not agree.",
    primaryCta: "Request a quotation",
    secondaryCta: "Where the sources disagree",
    constraint: {
      label: "Before anything else",
      heading: "What is settled, and what is not",
      known: [
        {
          term: "Where it is",
          detail:
            "The cruise pier is at Porto Corsini, on the coast. The operator gives the address as Molo Crociere Porto Corsini, Ravenna.",
        },
        {
          term: "It is not in Ravenna",
          detail:
            "The city is inland of the port. A request naming Ravenna when you mean the ship is a request to a different place.",
        },
        {
          term: "What we cover",
          detail:
            "We serve both Ravenna and Porto Corsini. That is our own position, not something the port publishes about us.",
        },
      ],
      unknown: {
        label: "What this page will not tell you",
        body: "Where a car may collect you inside the port. The operator publishes no pick-up or drop-off rule for private vehicles, so none is described here — not a point, not a procedure, not a sign to look for. The meeting arrangement is settled in the reply to your request. Nor is a distance to the city quoted: two official publishers give different figures, and the table below shows both rather than choosing one.",
      },
      source: operatorEn,
    },
  },

  disagreement: {
    id: "sources",
    eyebrow: "The published record",
    heading: "Three official sources, three answers",
    lead: "All of these publishers are official and all were reachable. On the three questions a passenger actually asks, they do not agree — which is worth seeing rather than being spared.",
    table: {
      caption:
        "What each publisher states about Porto Corsini, read 27 October 2026",
      questionHeading: "The question",
      publishers: [
        "Ravenna Cruise Port (operator)",
        "Visit Ravenna (tourism)",
        "Comune di Ravenna",
      ],
      rows: [
        {
          id: "distance",
          question: "How far is the terminal from central Ravenna?",
          answers: ["13 km", "About 15 km", "Does not state a distance"],
        },
        {
          id: "bus",
          question: "Where does the public bus stop?",
          answers: [
            "In front of the terminal",
            "About a ten-minute walk away",
            "Lists its own shuttles instead",
          ],
        },
        {
          id: "taxi",
          question: "Can you get a taxi there?",
          answers: [
            "Normally available inside the terminal area when ships are in",
            "Availability is limited, and taxis cannot be booked in advance",
            "Does not mention taxis",
          ],
        },
      ],
    },
    note: "No figure from this table is published elsewhere on this site. Averaging 13 km and about 15 km would produce a number no authority has ever stated, and the honest position is that the distance is not settled.",
  },

  marquee: {
    id: "terminal",
    eyebrow: "What is actually there",
    heading: "A temporary terminal, and what follows from it",
    lead: "This is the detail most worth knowing before you arrive, and the one most easily assumed away.",
    paragraphs: [
      "The port operator states that a temporary marquee is presently used as the cruise terminal, with a permanent building planned. So there is no terminal hall in the sense a traveller might picture — no concourse to meet in, no fixed set of facilities to rely on, and nothing that will look like an airport arrivals area.",
      "That has a practical consequence for a transfer. Where a car can wait at a working port is decided by the port, and this operator publishes no rule about it. Combined with a temporary structure, it means any confident description of a meeting point would be invention. The arrangement is settled for your sailing, in the reply to your request.",
      "What the operator does publish is more useful than it sounds: bus line 90 runs between the terminal area and Ravenna's railway station, the official radio taxi service operates around the clock from a rank at that station, and there is free parking for roughly a hundred and fifty cars near the terminal. Those are public facts about the port, not an account of our service.",
    ],
    source: operatorEn,
  },

  directions: {
    id: "directions",
    heading: "The two directions",
    items: [
      {
        page: "route-terminal-ravenna",
        label: "Cruise terminal to Ravenna",
        detail:
          "Disembarkation, when a whole ship wants to leave at once and the tourism authority's own advice is that taxis cannot be booked ahead.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Ravenna to the cruise terminal",
        detail:
          "Embarkation, where the sailing time is fixed and the margin is the entire problem.",
      },
      {
        page: "ravenna",
        label: "Transfers in Ravenna",
        detail: "The city itself, which is not where the ship is.",
      },
    ],
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "A ship changes what matters in a request, so two of these are specific to it.",
    items: [
      "The ship's name, and the date.",
      "Whether you are joining or leaving it.",
      "The scheduled arrival or sailing time.",
      "The address at the other end, in full.",
      "How many passengers, and how much luggage.",
    ],
    note: "Say whether you are embarking or disembarking. The two are not the same journey: missing a sailing cannot be recovered, while a slow start after disembarkation usually can, and the margin we suggest depends entirely on which one you are doing.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this port",
    lead: "Several of these are answered with what is not known, which on this subject is the useful answer.",
    items: [
      {
        question: "How far is the terminal from Ravenna?",
        answer:
          "Not settled. The port operator says 13 km; the regional tourism authority says about 15 km. Both are official. This site publishes neither as fact and shows both instead, because picking one would be choosing a side in a disagreement we have no way to resolve.",
      },
      {
        question: "Where will the driver meet me at the port?",
        answer:
          "That is settled in the reply to your request. The operator publishes no pick-up rule for private vehicles, and the terminal is currently a temporary marquee rather than a building, so there is no fixed meeting point this page could honestly describe.",
      },
      {
        question: "Is there a terminal building?",
        answer:
          "Not at present. The operator states that a temporary marquee is in use as the cruise terminal, with a permanent building planned. Expect less shelter and fewer facilities than the word terminal normally implies.",
      },
      {
        question: "Could I just take a taxi?",
        answer:
          "Possibly, and the two official sources disagree about how easy that is. The port operator says taxis are normally available in the terminal area when ships are in; the regional tourism authority says availability is limited and that they cannot be booked in advance. That second statement is theirs, not ours, and it is the clearest argument for arranging a car beforehand.",
      },
      {
        question: "Aren't there shuttles from the terminal?",
        answer:
          "The Comune's tourist information lists seasonal shuttles run by the regional tourism body, to the railway station and elsewhere, on dates that vary by year. They are a third party's service, not ours, and one of the routes it lists is still to be defined. Check with them directly if that is what you want.",
      },
      {
        question: "Do you actually cover this port?",
        answer:
          "Yes. We serve Ravenna and Porto Corsini. That is our own operating position; the port has published nothing about us, and nothing here should be read as a partnership, endorsement or guarantee by the terminal.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Name the ship, and the direction",
    body: "Whether you are joining or leaving her changes the whole shape of the arrangement. The ship, the date, the time, and the address at the other end.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Ravenna", page: "ravenna" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: RavennaTerminal = {
  meta: {
    title: "Transfer per il terminal crociere di Ravenna a Porto Corsini",
    description:
      "Tre fonti ufficiali descrivono questo porto in modo diverso. Invece di sceglierne una, questa pagina mostra che cosa dice ciascuna — e che cosa nessuna pubblica.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Imbarco e sbarco",
    h1: "Terminal crociere di Ravenna a Porto Corsini",
    lead: "Le navi che scalano Ravenna ormeggiano a Porto Corsini, sulla costa. È un luogo semplice verso cui organizzare un'auto e sorprendentemente difficile da descrivere con esattezza, perché gli enti che lo descrivono non concordano.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove le fonti non concordano",
    constraint: {
      label: "Prima di ogni altra cosa",
      heading: "Che cosa è certo e che cosa no",
      known: [
        {
          term: "Dove si trova",
          detail:
            "Il molo crociere è a Porto Corsini, sulla costa. L'operatore indica l'indirizzo come Molo Crociere Porto Corsini, Ravenna.",
        },
        {
          term: "Non è a Ravenna",
          detail:
            "La città si trova nell'entroterra rispetto al porto. Una richiesta che indica Ravenna quando si intende la nave è una richiesta per un altro luogo.",
        },
        {
          term: "Che cosa copriamo",
          detail:
            "Serviamo sia Ravenna sia Porto Corsini. È la nostra posizione, non qualcosa che il porto pubblichi sul nostro conto.",
        },
      ],
      unknown: {
        label: "Che cosa questa pagina non vi dirà",
        body: "Dove un'auto possa prendervi a bordo dentro il porto. L'operatore non pubblica alcuna regola di prelievo o rilascio per i veicoli privati: qui quindi non ne descriviamo nessuna, né un punto, né una procedura, né un cartello da cercare. La modalità d'incontro si definisce nella risposta alla vostra richiesta. E non indichiamo una distanza dalla città: due fonti ufficiali danno cifre diverse, e la tabella qui sotto le mostra entrambe invece di sceglierne una.",
      },
      source: operatorIt,
    },
  },

  disagreement: {
    id: "fonti",
    eyebrow: "Ciò che è pubblicato",
    heading: "Tre fonti ufficiali, tre risposte",
    lead: "Tutti questi enti sono ufficiali e tutti erano raggiungibili. Sulle tre domande che un passeggero si pone davvero, non concordano — e vale la pena vederlo invece di esserne risparmiati.",
    table: {
      caption:
        "Che cosa dichiara ciascun ente su Porto Corsini, consultati il 27 ottobre 2026",
      questionHeading: "La domanda",
      publishers: [
        "Ravenna Cruise Port (operatore)",
        "Visit Ravenna (turismo)",
        "Comune di Ravenna",
      ],
      rows: [
        {
          id: "distance",
          question: "Quanto dista il terminal dal centro di Ravenna?",
          answers: ["13 km", "Circa 15 km", "Non indica una distanza"],
        },
        {
          id: "bus",
          question: "Dove ferma l'autobus pubblico?",
          answers: [
            "Davanti al terminal",
            "A circa dieci minuti a piedi",
            "Elenca invece le proprie navette",
          ],
        },
        {
          id: "taxi",
          question: "Si trova un taxi?",
          answers: [
            "Di norma disponibili nell'area del terminal quando ci sono navi",
            "La disponibilità è limitata e non si possono prenotare in anticipo",
            "Non cita i taxi",
          ],
        },
      ],
    },
    note: "Nessun dato di questa tabella è pubblicato altrove sul sito. Fare una media fra 13 km e circa 15 km produrrebbe un numero che nessun ente ha mai scritto, e la posizione onesta è che la distanza non è stabilita.",
  },

  marquee: {
    id: "terminal",
    eyebrow: "Che cosa c'è davvero",
    heading: "Un terminal provvisorio, e che cosa ne consegue",
    lead: "È il dettaglio più utile da sapere prima di arrivare, e quello che più facilmente si dà per scontato.",
    paragraphs: [
      "L'operatore portuale dichiara che attualmente come terminal crociere si utilizza una struttura temporanea, con un edificio definitivo in progetto. Non c'è quindi una hall nel senso che un viaggiatore potrebbe immaginare: nessun atrio in cui darsi appuntamento, nessun insieme stabile di servizi su cui contare, nulla che assomigli a un'area arrivi aeroportuale.",
      "Per un transfer la conseguenza è concreta. Dove un'auto possa attendere in un porto operativo lo decide il porto, e questo operatore non pubblica alcuna regola in merito. Unito a una struttura provvisoria, significa che qualsiasi descrizione sicura di un punto d'incontro sarebbe inventata. La modalità si concorda per la vostra partenza, nella risposta alla richiesta.",
      "Ciò che l'operatore pubblica è più utile di quanto sembri: la linea 90 collega l'area del terminal alla stazione ferroviaria di Ravenna, il servizio ufficiale di radiotaxi è attivo ventiquattr'ore su ventiquattro da un posteggio presso quella stazione, e vicino al terminal c'è un parcheggio gratuito per circa centocinquanta auto. Sono dati pubblici sul porto, non un resoconto del nostro servizio.",
    ],
    source: operatorIt,
  },

  directions: {
    id: "direzioni",
    heading: "Le due direzioni",
    items: [
      {
        page: "route-terminal-ravenna",
        label: "Dal terminal crociere a Ravenna",
        detail:
          "Lo sbarco, quando un'intera nave vuole ripartire insieme e l'ente turistico stesso avverte che i taxi non si prenotano in anticipo.",
      },
      {
        page: "route-ravenna-terminal",
        label: "Da Ravenna al terminal crociere",
        detail:
          "L'imbarco, dove l'orario di partenza è fisso e il margine è tutto il problema.",
      },
      {
        page: "ravenna",
        label: "Transfer a Ravenna",
        detail: "La città, che non è dove si trova la nave.",
      },
    ],
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Una nave cambia ciò che conta in una richiesta: due di queste voci riguardano proprio quello.",
    items: [
      "Il nome della nave e la data.",
      "Se vi imbarcate o sbarcate.",
      "L'orario previsto di arrivo o di partenza.",
      "L'indirizzo all'altro capo, per esteso.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Dite se vi imbarcate o sbarcate. Non sono lo stesso viaggio: perdere una partenza non si recupera, mentre una partenza lenta dopo lo sbarco di solito sì, e il margine che vi suggeriremo dipende interamente da quale delle due state facendo.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo porto",
    lead: "A diverse di queste si risponde con ciò che non si sa, che su questo tema è la risposta utile.",
    items: [
      {
        question: "Quanto dista il terminal da Ravenna?",
        answer:
          "Non è stabilito. L'operatore portuale indica 13 km; l'ente turistico regionale indica circa 15 km. Entrambi sono ufficiali. Questo sito non pubblica nessuno dei due come dato di fatto e li mostra entrambi, perché sceglierne uno significherebbe prendere posizione in una divergenza che non abbiamo modo di risolvere.",
      },
      {
        question: "Dove mi aspetta l'autista al porto?",
        answer:
          "Si stabilisce nella risposta alla vostra richiesta. L'operatore non pubblica regole di prelievo per i veicoli privati, e il terminal è attualmente una struttura temporanea e non un edificio: non esiste quindi un punto d'incontro fisso che questa pagina possa descrivere onestamente.",
      },
      {
        question: "C'è un edificio del terminal?",
        answer:
          "Al momento no. L'operatore dichiara che come terminal crociere si utilizza una struttura temporanea, con un edificio definitivo in progetto. Aspettatevi meno riparo e meno servizi di quanto la parola terminal faccia normalmente immaginare.",
      },
      {
        question: "Non potrei semplicemente prendere un taxi?",
        answer:
          "Forse, e le due fonti ufficiali non concordano su quanto sia semplice. L'operatore portuale dice che di norma i taxi sono disponibili nell'area del terminal quando ci sono navi; l'ente turistico regionale dice che la disponibilità è limitata e che non si possono prenotare in anticipo. Quella seconda affermazione è loro, non nostra, ed è l'argomento più chiaro per organizzare un'auto in anticipo.",
      },
      {
        question: "Non ci sono navette dal terminal?",
        answer:
          "L'informazione turistica del Comune elenca navette stagionali gestite dall'ente turistico regionale, verso la stazione ferroviaria e altre mete, con date che variano di anno in anno. Sono il servizio di un terzo, non il nostro, e una delle tratte elencate è ancora da definire. Se è ciò che vi interessa, rivolgetevi direttamente a loro.",
      },
      {
        question: "Coprite davvero questo porto?",
        answer:
          "Sì. Serviamo Ravenna e Porto Corsini. È la nostra posizione operativa; il porto non ha pubblicato nulla sul nostro conto, e nulla qui va letto come una partnership, un avallo o una garanzia da parte del terminal.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate la nave e la direzione",
    body: "Che vi imbarchiate o sbarchiate cambia tutta la forma dell'accordo. La nave, la data, l'ora e l'indirizzo all'altro capo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Ravenna", page: "ravenna" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const ravennaTerminal: Record<Locale, RavennaTerminal> = { en, it };
