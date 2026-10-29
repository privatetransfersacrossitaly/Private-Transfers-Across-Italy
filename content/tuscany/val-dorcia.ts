import type { Locale } from "@/lib/site";
import type { ValDOrcia } from "./types";

/**
 * The Val d'Orcia.
 *
 * ── The only page in this cluster justified by somebody else ──────────────
 * Every other page here argues for a transfer in its own voice. This one does
 * not have to. The valley's own tourist authority states that travelling by
 * car is "definitely the best means" of visiting, and that there are no
 * direct rail connections — the nearest stations being Siena, Buonconvento
 * and Chiusi-Chianciano Terme.
 *
 * So the page quotes that and links it, rather than making the case itself.
 * It is both more honest and considerably more persuasive than the same claim
 * in a transfer company's voice.
 *
 * ── Why the hero reuses Verona's module, and says the opposite ────────────
 * `HeroModes` lays three ways of arriving flat across the foot of the hero.
 * In Verona the point was that none of the three is a trap. Here the point is
 * that one of them is missing: the rail column exists so a reader can look
 * down it and find nothing. Same structure, inverted meaning — which is why
 * it is a reuse rather than a thirteenth hero.
 *
 * ── Deliberately without a photograph ─────────────────────────────────────
 * The site owns a Val d'Orcia photograph and it is the homepage hero. No
 * image on this site appears on two pages, and reusing the site's own hero on
 * a sub-page would be the worst place to break that. New countryside
 * photography can be sourced later; the page does not depend on it, as six of
 * the nine Veneto pages do not depend on one.
 */

const en: ValDOrcia = {
  meta: {
    title: "Private transfers to the Val d'Orcia",
    description:
      "Five comuni south of Siena, and no railway that reaches any of them. The valley's own tourist board says a car is the best way to come; here is how to ask for one.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Southern Tuscany",
    h1: "Private transfers to the Val d'Orcia",
    lead: "The countryside south of Siena is the one destination in this cluster whose case for a car is made by somebody other than us. Its own tourist authority says travelling by car is the best means of visiting, and that no direct rail connection exists. Both halves of that are worth taking seriously.",
    primaryCta: "Request a quotation",
    secondaryCta: "The five comuni",
    modes: [
      {
        id: "road",
        label: "By road",
        name: "The A1 and the Cassia",
        detail:
          "Reached from the A1 at the Chiusi-Chianciano or Valdichiana exits, by the Cassia, or from the north on the Florence–Siena road.",
      },
      {
        id: "rail",
        label: "By rail",
        name: "No direct connection",
        detail:
          "The valley's own authority states there are none. The nearest stations are Siena, Buonconvento and Chiusi-Chianciano Terme — all of them outside it.",
      },
      {
        id: "air",
        label: "By air",
        name: "Florence, Pisa, Perugia, Rome",
        detail:
          "The four airports the valley lists as nearest. Two of them have pages on this site.",
      },
    ],
  },

  comuni: {
    id: "comuni",
    eyebrow: "The valley",
    heading: "Five comuni, and the station nearest each",
    lead: "The Val d'Orcia is not one place with one address. It is five municipalities across a stretch of country, and the practical difference between them is how far you would be from a train if you were not in a car.",
    stationLabel: "Nearest station",
    items: [
      {
        id: "castiglione-dorcia",
        name: "Castiglione d'Orcia",
        station: "Buonconvento or Siena",
        detail:
          "On the western side of the valley, below Monte Amiata. One of the five comuni the valley's own authority names.",
      },
      {
        id: "montalcino",
        name: "Montalcino",
        station: "Buonconvento",
        detail:
          "North-west of the valley, and the comune most visitors have heard of before they arrive. The town is the destination; this site does not arrange estate or tasting visits.",
      },
      {
        id: "pienza",
        name: "Pienza",
        station: "Chiusi-Chianciano Terme",
        detail:
          "In the centre of the valley. A small hill town, which is the usual reason a transfer here is simpler to arrange than to walk from.",
      },
      {
        id: "radicofani",
        name: "Radicofani",
        station: "Chiusi-Chianciano Terme",
        detail:
          "The southern end, on high ground near the Cassia. The furthest of the five from any of the three stations.",
      },
      {
        id: "san-quirico-dorcia",
        name: "San Quirico d'Orcia",
        station: "Buonconvento or Chiusi-Chianciano Terme",
        detail:
          "On the Cassia in the middle of the valley, between Pienza and Montalcino.",
      },
    ],
  },

  noRail: {
    id: "no-rail",
    eyebrow: "The reason this page exists",
    heading: "No railway reaches the Val d'Orcia",
    lead: "That sentence is not ours. It is the valley's, and it is the single most useful thing on this page.",
    paragraphs: [
      "Elsewhere on this site, a transfer is one option among several and the honest thing to do is say so — Verona has a station in the middle of town, Venice has a water network, Milan has three airports with their own rail links. The Val d'Orcia has none of that. Its own tourist authority states plainly that there are no direct rail connections, and names Siena, Buonconvento and Chiusi-Chianciano Terme as the nearest stations, all of which are outside the valley.",
      "The same source describes travelling by car as definitely the best means of visiting. We did not write that, and we would be more cautious about writing it — but it is published by the destination itself, and it is a better argument for a transfer than anything a transfer company could say.",
      "What follows from it is practical. Name the comune, and ideally the address, when you ask. The five comuni are spread across a stretch of country and a road that is sensible from one is not necessarily sensible from another; and in open country a destination can be a building rather than a street, which is worth saying in advance rather than discovering on arrival.",
    ],
    source: {
      text: "The absence of direct rail connections, the three nearest stations, the road approaches, the four nearest airports and the five comuni are all as published by the valley's own tourist information, checked in October 2026:",
      linkText: "Visit Val d'Orcia publishes its own travel information",
      href: "https://visitvaldorcia.it/en/info/",
    },
  },

  byAir: {
    id: "by-air",
    eyebrow: "Arriving",
    heading: "Coming in by air",
    lead: "The valley names four nearest airports. Two of them are covered on this site; the others are named here because the valley names them, not because anything has been established about reaching the valley from them.",
    items: [
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail:
          "Tuscany's busiest airport, listed by the valley among those nearest to it.",
      },
      {
        page: "florence-airport",
        label: "Florence Peretola (FLR)",
        detail:
          "Florence's own airport, also listed. The smaller of the two Tuscan airports.",
      },
      {
        page: "florence",
        label: "Private transfers in Florence",
        detail:
          "The city most visitors pass through on the way here, and the hub this page sits under.",
      },
    ],
    caution: {
      heading: "What this page does not claim",
      body: "That a route from any airport to any comune in the valley is established. No such route is published on this site, and the valley's list of nearby airports is geography rather than a service. Perugia and Rome are named above only because the valley names them; neither is described here as covered. Ask with a named destination, and the answer will be about that destination.",
    },
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "One item on this list matters more here than anywhere else on the site.",
    items: [
      "The comune, and the full address or the property name.",
      "The date and the time you need to arrive or leave.",
      "Where you are coming from — an airport, a station, or another town.",
      "How many passengers, and how much luggage.",
      "Whether the address is on an unsurfaced or private road, if you know.",
    ],
    note: "That last item is not a formality. Rural addresses in this part of Tuscany are sometimes reached by tracks rather than roads, and whether a particular vehicle can use one is a question about that specific approach. It is better answered before a quotation than at the end of a drive.",
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Val d'Orcia questions",
    lead: "Mostly about geography, which is the honest subject of this page.",
    items: [
      {
        question: "Can I get there by train?",
        answer:
          "Not directly. The valley's own tourist authority states there are no direct rail connections, and lists Siena, Buonconvento and Chiusi-Chianciano Terme as the nearest stations — each of them outside the valley. That is the reason this page exists.",
      },
      {
        question: "Which comune should I say?",
        answer:
          "Whichever one you are actually going to: Castiglione d'Orcia, Montalcino, Pienza, Radicofani or San Quirico d'Orcia. They are spread across a stretch of country, and the road that suits one does not necessarily suit another.",
      },
      {
        question: "Can you take me to a winery?",
        answer:
          "A transfer to a named address can be requested. A visit to an estate is something else: tastings, reservations, waiting between stops and a day built around several of them are not claimed on this site, because none of it has been verified. Montalcino the town is a destination; a cellar door is an arrangement somebody has to make.",
      },
      {
        question: "Can a car reach a house out in the countryside?",
        answer:
          "Often, but it depends on the approach. Some rural addresses here are reached by unsurfaced tracks, and whether a given vehicle can use one is a question about that specific road. Say what you know when you ask, and it will be answered honestly rather than optimistically.",
      },
      {
        question: "How long does it take from Florence or Pisa?",
        answer:
          "No journey time or distance appears anywhere in this cluster. No source consulted for this build states one for any Tuscan route, and this is a long rural journey where an invented figure would be worse than no figure.",
      },
      {
        question: "Is a day trip from Florence possible?",
        answer:
          "A transfer to a named address and back can be asked about. A touring day — several stops, waiting time, an itinerary — is a different service, and this site does not claim it without confirmation.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Name the comune",
    body: "In a city the city name starts a conversation. Out here it does not: five municipalities, a lot of country between them, and no railway through any of it. The comune and the address are what make the question answerable.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Florence", page: "florence" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: ValDOrcia = {
  meta: {
    title: "Transfer privati per la Val d'Orcia",
    description:
      "Cinque comuni a sud di Siena e nessuna ferrovia che ne raggiunga uno. L'ente turistico della valle indica l'auto come il mezzo migliore: ecco come chiederne una.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Toscana meridionale",
    h1: "Transfer privati per la Val d'Orcia",
    lead: "La campagna a sud di Siena è l'unica destinazione di questa sezione il cui argomento a favore dell'auto non lo portiamo noi. È il suo stesso ente turistico a dire che l'auto è il mezzo migliore per visitarla, e che non esistono collegamenti ferroviari diretti. Entrambe le metà meritano attenzione.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "I cinque comuni",
    modes: [
      {
        id: "road",
        label: "Su strada",
        name: "L'A1 e la Cassia",
        detail:
          "Si raggiunge dall'A1 alle uscite Chiusi-Chianciano o Valdichiana, dalla Cassia, oppure da nord lungo la Firenze–Siena.",
      },
      {
        id: "rail",
        label: "In treno",
        name: "Nessun collegamento diretto",
        detail:
          "Lo afferma l'ente della valle. Le stazioni più vicine sono Siena, Buonconvento e Chiusi-Chianciano Terme, tutte fuori dalla valle.",
      },
      {
        id: "air",
        label: "In aereo",
        name: "Firenze, Pisa, Perugia, Roma",
        detail:
          "I quattro aeroporti che la valle indica come più vicini. Due hanno una pagina su questo sito.",
      },
    ],
  },

  comuni: {
    id: "comuni",
    eyebrow: "La valle",
    heading: "Cinque comuni, e la stazione più vicina a ciascuno",
    lead: "La Val d'Orcia non è un luogo solo con un indirizzo solo. Sono cinque comuni distribuiti su un tratto di campagna, e la differenza pratica fra loro è quanto sareste lontani da un treno se non foste in auto.",
    stationLabel: "Stazione più vicina",
    items: [
      {
        id: "castiglione-dorcia",
        name: "Castiglione d'Orcia",
        station: "Buonconvento o Siena",
        detail:
          "Sul lato occidentale della valle, sotto il Monte Amiata. Uno dei cinque comuni indicati dall'ente della valle.",
      },
      {
        id: "montalcino",
        name: "Montalcino",
        station: "Buonconvento",
        detail:
          "A nord-ovest della valle, il comune di cui più visitatori hanno sentito parlare prima di arrivare. La destinazione è il paese: questo sito non organizza visite a tenute o degustazioni.",
      },
      {
        id: "pienza",
        name: "Pienza",
        station: "Chiusi-Chianciano Terme",
        detail:
          "Al centro della valle. Un piccolo borgo in collina, il che è la ragione abituale per cui un transfer qui è più semplice da organizzare che da sostituire a piedi.",
      },
      {
        id: "radicofani",
        name: "Radicofani",
        station: "Chiusi-Chianciano Terme",
        detail:
          "L'estremità meridionale, in alto vicino alla Cassia. Il più lontano dei cinque da ciascuna delle tre stazioni.",
      },
      {
        id: "san-quirico-dorcia",
        name: "San Quirico d'Orcia",
        station: "Buonconvento o Chiusi-Chianciano Terme",
        detail:
          "Sulla Cassia, in mezzo alla valle, fra Pienza e Montalcino.",
      },
    ],
  },

  noRail: {
    id: "niente-treno",
    eyebrow: "Il motivo di questa pagina",
    heading: "Nessuna ferrovia arriva in Val d'Orcia",
    lead: "Questa frase non è nostra. È della valle, ed è la cosa più utile di tutta la pagina.",
    paragraphs: [
      "Altrove su questo sito un transfer è una fra più opzioni, e la cosa onesta è dirlo: Verona ha una stazione in mezzo alla città, Venezia ha una rete acquea, Milano ha tre aeroporti con i propri collegamenti ferroviari. La Val d'Orcia non ha niente di tutto questo. Il suo stesso ente turistico afferma chiaramente che non esistono collegamenti ferroviari diretti, e indica Siena, Buonconvento e Chiusi-Chianciano Terme come stazioni più vicine: tutte fuori dalla valle.",
      "La stessa fonte descrive l'auto come il mezzo decisamente migliore per visitarla. Non l'abbiamo scritto noi, e saremmo più prudenti nello scriverlo — ma lo pubblica la destinazione stessa, ed è un argomento a favore di un transfer migliore di qualsiasi cosa possa dire chi i transfer li fa.",
      "La conseguenza è pratica. Indicate il comune, e possibilmente l'indirizzo, quando scrivete. I cinque comuni sono distribuiti su un tratto di campagna e una strada sensata per l'uno non lo è necessariamente per l'altro; e in aperta campagna una destinazione può essere un edificio anziché una via, cosa che conviene dire prima invece di scoprirla all'arrivo.",
    ],
    source: {
      text: "L'assenza di collegamenti ferroviari diretti, le tre stazioni più vicine, gli accessi stradali, i quattro aeroporti più prossimi e i cinque comuni sono tutti come pubblicati dall'informazione turistica della valle, verificata nell'ottobre 2026:",
      linkText: "Visit Val d'Orcia pubblica le proprie informazioni di viaggio",
      href: "https://visitvaldorcia.it/info/",
    },
  },

  byAir: {
    id: "in-aereo",
    eyebrow: "Arrivare",
    heading: "Arrivare in aereo",
    lead: "La valle indica quattro aeroporti più vicini. Due sono trattati su questo sito; gli altri compaiono qui perché la valle li nomina, non perché sia stato accertato qualcosa sul raggiungerla da lì.",
    items: [
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail:
          "L'aeroporto più trafficato della Toscana, fra quelli che la valle indica come più vicini.",
      },
      {
        page: "florence-airport",
        label: "Firenze Peretola (FLR)",
        detail:
          "L'aeroporto di Firenze, anch'esso indicato. Il più piccolo dei due toscani.",
      },
      {
        page: "florence",
        label: "Transfer privati a Firenze",
        detail:
          "La città da cui passa la maggior parte dei visitatori diretti qui, e la pagina sotto cui questa si colloca.",
      },
    ],
    caution: {
      heading: "Che cosa questa pagina non afferma",
      body: "Che sia accertata una tratta da un qualsiasi aeroporto a un qualsiasi comune della valle. Su questo sito non ne è pubblicata nessuna, e l'elenco degli aeroporti vicini redatto dalla valle è geografia, non un servizio. Perugia e Roma compaiono sopra solo perché la valle le nomina: nessuna delle due è descritta qui come coperta. Chiedete indicando la destinazione, e la risposta riguarderà quella destinazione.",
    },
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Una voce di questo elenco conta qui più che in qualsiasi altro punto del sito.",
    items: [
      "Il comune, e l'indirizzo completo o il nome della struttura.",
      "La data e l'ora in cui dovete arrivare o ripartire.",
      "Da dove venite: un aeroporto, una stazione o un altro paese.",
      "Quanti passeggeri e quanti bagagli.",
      "Se sapete che l'indirizzo è su una strada bianca o privata.",
    ],
    note: "L'ultima voce non è una formalità. In questa parte della Toscana certi indirizzi di campagna si raggiungono per strade sterrate più che per strade asfaltate, e se un determinato veicolo possa percorrerle è una domanda su quel preciso accesso. Meglio risolverla prima del preventivo che alla fine del tragitto.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande sulla Val d'Orcia",
    lead: "Quasi tutte di geografia, che è l'argomento onesto di questa pagina.",
    items: [
      {
        question: "Ci si arriva in treno?",
        answer:
          "Non direttamente. L'ente turistico della valle afferma che non esistono collegamenti ferroviari diretti e indica Siena, Buonconvento e Chiusi-Chianciano Terme come stazioni più vicine, tutte fuori dalla valle. È la ragione per cui questa pagina esiste.",
      },
      {
        question: "Quale comune devo indicare?",
        answer:
          "Quello in cui andate davvero: Castiglione d'Orcia, Montalcino, Pienza, Radicofani o San Quirico d'Orcia. Sono distribuiti su un tratto di campagna, e la strada che va bene per uno non va necessariamente bene per un altro.",
      },
      {
        question: "Mi portate in una cantina?",
        answer:
          "Si può richiedere un transfer verso un indirizzo preciso. Una visita a una tenuta è un'altra cosa: degustazioni, prenotazioni, attese fra una tappa e l'altra e una giornata costruita su più soste non sono rivendicate su questo sito, perché nulla di ciò è stato verificato. Montalcino paese è una destinazione; la porta di una cantina è un accordo che qualcuno deve prendere.",
      },
      {
        question: "Un'auto può arrivare a una casa in campagna?",
        answer:
          "Spesso sì, ma dipende dall'accesso. Alcuni indirizzi rurali qui si raggiungono per strade sterrate, e se un dato veicolo possa percorrerle è una domanda su quella specifica strada. Dite quello che sapete quando scrivete, e la risposta sarà onesta anziché ottimistica.",
      },
      {
        question: "Quanto ci vuole da Firenze o da Pisa?",
        answer:
          "In tutta questa sezione non compaiono durate né distanze. Nessuna fonte consultata per questa versione ne indica per alcuna tratta toscana, e questo è un lungo tragitto di campagna in cui un dato inventato sarebbe peggio di nessun dato.",
      },
      {
        question: "Si può fare una gita in giornata da Firenze?",
        answer:
          "Si può chiedere un transfer verso un indirizzo preciso e ritorno. Una giornata di tour — più tappe, tempi di attesa, un itinerario — è un altro servizio, e questo sito non lo rivendica senza conferma.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Indicate il comune",
    body: "In città il nome della città avvia una conversazione. Qui no: cinque comuni, molta campagna in mezzo e nessuna ferrovia che l'attraversi. Sono il comune e l'indirizzo a rendere rispondibile la domanda.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Firenze", page: "florence" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const valDOrcia: Record<Locale, ValDOrcia> = { en, it };
