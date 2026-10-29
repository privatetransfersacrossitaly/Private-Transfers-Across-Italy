import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * The two Tuscan route pages.
 *
 * They use the shared route type and component, as Rome's, Milan's and the
 * Veneto's do. What differs is the leading module, and neither repeats a
 * counterpart:
 *
 * - Pisa → Florence: an intercity framing. It is the only airport route in
 *   this project whose two endpoints are different cities — Rome's, Milan's
 *   and Venice's airport routes all end in the city the airport is sold
 *   under. So it leads with a definition list that says exactly that, rather
 *   than with a difference panel or a countdown.
 * - Peretola → Florence: nothing leads. The endpoints are the content, as on
 *   the Verona route, and the page's shortness is the point after the Pisa
 *   one.
 *
 * Both end in the same unresolved ZTL question, and both say so in the same
 * words. No fare, duration or road distance appears on either: no source
 * consulted for this build states one for any Tuscan journey.
 */

/* ── Pisa → Florence ──────────────────────────────────────────────────── */

const psaEn: RoutePage = {
  meta: {
    title: "Pisa Airport to Florence",
    description:
      "The commonest Tuscan transfer, and the only airport route here whose two ends are different cities. What decides the arrival, and what could not be confirmed.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Pisa Galileo Galilei (PSA)",
    to: "Florence",
    eyebrow: "Route",
    h1: "Pisa Airport to Florence",
    lead: "The most asked-about journey in Tuscany, and the only airport route on this site that is genuinely an intercity one. You land in one city and you are going to another, which is ordinary — it is just not what the airport's name suggests.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price, journey time or road distance appears here. The operator's own 2025 service charter states nothing about the distance or the time between the airport and Florence, and no other source consulted does either, so nothing has been invented to fill the gap.",
  },
  lead: {
    id: "intercity",
    eyebrow: "What kind of journey this is",
    heading: "Two cities, one airport between them",
    text: "Every other airport route on this site ends in the city its airport is named for. This one does not, and recognising that early makes the rest of the arrangement obvious.",
    terms: [
      {
        term: "The airport is correctly named",
        detail:
          "Pisa Galileo Galilei stands in the comune of Pisa. Nothing is mis-sold here: it is not an airport borrowing another city's name, as Bergamo and Treviso are.",
      },
      {
        term: "Florence is a separate city",
        detail:
          "The journey is between two cities rather than across one. That is not a complication; it simply means the arrangement is an intercity transfer, with an airport at one end of it.",
      },
      {
        term: "It is still the normal way in",
        detail:
          "Pisa is Tuscany's busiest airport and takes much of the traffic bound for Florence, partly because Florence's own runway limits the aircraft that can use it.",
      },
      {
        term: "The road is named, the time is not",
        detail:
          "The operator lists the A11 Firenze–Pisa Nord among the airport's road connections, reached by way of the Pisa Nord/A12 interchange, alongside the A12 itself and the Firenze–Pisa–Livorno highway. How long any of it takes is still not something this page will guess at.",
      },
      {
        term: "The far end is the hard part",
        detail:
          "Florence's historic centre is a sector-based limited-traffic zone. Which sector your address falls in is part of what decides where a car can stop, and that is the question worth settling in advance.",
      },
    ],
    source: {
      text: "The operator, the airports' complementary roles and the road connections come from Toscana Aeroporti's own 2025 Service Charter for Pisa, read on 27 October 2026 from an archived copy because the company's website refuses automated requests. Airport names and codes are from published reference records. Neither source states a distance or a journey time between the airport and Florence:",
      linkText: "Toscana Aeroporti's 2025 Service Charter for Pisa, archived copy",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "One of them is straightforward",
    lead: "The airport end of this journey is an ordinary arrival. The Florence end is where the real question lives.",
    from: {
      id: "psa",
      label: "Departure",
      name: "Pisa Galileo Galilei",
      page: "pisa-airport",
      linkText: "The airport, and why it serves more than Pisa",
      items: [
        {
          term: "Where it is",
          detail:
            "In the comune of Pisa. Tuscany's busiest airport, operated by Toscana Aeroporti alongside the Italian Air Force.",
        },
        {
          term: "What to send",
          detail:
            "Flight number, date and scheduled arrival time. Those three make the airport end answerable.",
        },
        {
          term: "Where you are met",
          detail:
            "Settled in the reply to your request. Meeting arrangements are set by the airport, and Pisa's were not verified for this build, so none is promised here.",
        },
      ],
    },
    to: {
      id: "florence",
      label: "Arrival",
      name: "Florence",
      page: "florence",
      linkText: "The city, and the open ZTL question",
      items: [
        {
          term: "The address",
          detail:
            "Street and number, not the city. In Florence the address decides the answer, because it decides which rules apply.",
        },
        {
          term: "The restricted centre",
          detail:
            "A sector-based limited-traffic zone covers the historic centre. No official text on private-hire access could be read for this build, so this page makes no claim about it.",
        },
        {
          term: "The likely outcome",
          detail:
            "Either a car reaches the door, or the nearest practical stop is a short walk from it. Which of the two applies is answered for your address when you ask.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Five things, and the third is the one that matters most on this particular route.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The full Florence address — street and number.",
      "How many passengers and how much luggage.",
      "Whether anyone needs a child seat, and the ages involved.",
    ],
    note: "If the address is inside the historic centre, say so. It does not make the journey impossible; it makes the answer specific, which on this route is worth considerably more than a general reassurance.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail: "The airport in full, and the gap between its name and its job.",
      },
      {
        page: "florence",
        label: "Private transfers in Florence",
        detail: "The city, the centre, and what could not be confirmed about it.",
      },
      {
        page: "route-flr-florence",
        label: "Florence Airport to Florence",
        detail: "The same city from the other, much closer airport.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Two of these are answered by declining to answer them, which on this route is the responsible thing to do.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "No duration is quoted. The operator's own 2025 service charter publishes nothing about the time between the airport and Florence, and no other source consulted does either. On a route people plan flight connections around, an invented number would be the worst kind of guess.",
      },
      {
        question: "How far is it?",
        answer:
          "No road distance is published for this journey. The operator's charter places the airport about a kilometre from Pisa, but neither it nor any other source consulted states a distance or a time between the airport and Florence — which is the figure this page would need. Pisa and Florence are separate cities and the journey between them is an intercity one.",
      },
      {
        question: "Why not just take the train?",
        answer:
          "It is a reasonable question and this page will not argue you out of it. A transfer answers a different one: an address with luggage, at a time set by your flight rather than by a timetable. Which matters more depends on where you are staying and what you are carrying.",
      },
      {
        question: "Can the car take me to a hotel in the centre?",
        answer:
          "That depends on the address and on rules set by the Comune di Firenze. No official text on private-hire access to the ZTL could be read while this page was written, so no assurance is given. Send the address and it will be answered for that address.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Send the flight number with your request. That is what makes an arrival trackable, and it is the reason the flight number is first on the list above rather than the time.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "Flight, date, and a street in Florence",
    body: "The airport end of this route is simple and the city end is not. Sending the full address with the flight details is what turns a general enquiry into a specific answer.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Pisa Airport", page: "pisa-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const psaIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Pisa a Firenze",
    description:
      "Il transfer toscano più richiesto, e l'unica tratta aeroportuale del sito con due città diverse ai capi. Che cosa determina l'arrivo e che cosa non abbiamo confermato.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Pisa Galileo Galilei (PSA)",
    to: "Firenze",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Pisa a Firenze",
    lead: "Il tragitto più richiesto della Toscana, e l'unica tratta aeroportuale del sito che sia davvero interurbana. Atterrate in una città e ne raggiungete un'altra: è normale, semplicemente non è ciò che il nome dell'aeroporto lascia intendere.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto",
    note: "Qui non compaiono prezzi, durate o distanze stradali. La carta dei servizi 2025 del gestore non dice nulla sulla distanza o sul tempo fra l'aeroporto e Firenze, e nessun'altra fonte consultata lo fa: non abbiamo inventato nulla per colmare la lacuna.",
  },
  lead: {
    id: "interurbano",
    eyebrow: "Che tipo di viaggio è",
    heading: "Due città, un aeroporto in mezzo",
    text: "Ogni altra tratta aeroportuale del sito termina nella città da cui il suo aeroporto prende il nome. Questa no, e accorgersene subito rende ovvio tutto il resto.",
    terms: [
      {
        term: "L'aeroporto è nominato correttamente",
        detail:
          "Pisa Galileo Galilei si trova nel comune di Pisa. Qui non c'è nulla di mal venduto: non è uno scalo che prende in prestito il nome di un'altra città, come Bergamo e Treviso.",
      },
      {
        term: "Firenze è un'altra città",
        detail:
          "Il viaggio è fra due città, non all'interno di una. Non è una complicazione: significa solo che l'accordo è un trasferimento interurbano, con un aeroporto a un capo.",
      },
      {
        term: "Resta la via normale",
        detail:
          "Pisa è l'aeroporto più trafficato della Toscana e assorbe gran parte del traffico diretto a Firenze, anche perché la pista fiorentina limita gli aeromobili che possono usarla.",
      },
      {
        term: "La strada ha un nome, il tempo no",
        detail:
          "Il gestore elenca la A11 Firenze–Pisa Nord fra i collegamenti stradali dell'aeroporto, raggiungibile attraverso l'interconnessione Pisa Nord/A12, insieme alla A12 stessa e alla Firenze–Pisa–Livorno. Quanto tempo richieda resta qualcosa che questa pagina non tenterà di indovinare.",
      },
      {
        term: "La parte difficile è l'altro capo",
        detail:
          "Il centro storico di Firenze è una ZTL divisa in settori. Il settore in cui ricade il vostro indirizzo concorre a determinare dove un'auto possa fermarsi: è la domanda da sciogliere in anticipo.",
      },
    ],
    source: {
      text: "Il gestore, i ruoli complementari dei due scali e i collegamenti stradali provengono dalla carta dei servizi 2025 di Toscana Aeroporti per Pisa, letta il 27 ottobre 2026 da una copia archiviata perché il sito della società rifiuta le richieste automatiche. Denominazioni e codici degli aeroporti provengono da registri di riferimento pubblicati. Nessuna delle due fonti indica una distanza o un tempo di percorrenza fra l'aeroporto e Firenze:",
      linkText: "La carta dei servizi 2025 di Toscana Aeroporti per Pisa, copia archiviata",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Uno dei due è semplice",
    lead: "Il capo aeroportuale di questo viaggio è un arrivo ordinario. È il capo fiorentino a contenere la vera domanda.",
    from: {
      id: "psa",
      label: "Partenza",
      name: "Pisa Galileo Galilei",
      page: "pisa-airport",
      linkText: "L'aeroporto, e perché serve più di Pisa",
      items: [
        {
          term: "Dove si trova",
          detail:
            "Nel comune di Pisa. È l'aeroporto più trafficato della Toscana, gestito da Toscana Aeroporti insieme all'Aeronautica Militare.",
        },
        {
          term: "Che cosa inviare",
          detail:
            "Numero del volo, data e orario previsto di arrivo. Questi tre dati rendono rispondibile il capo aeroportuale.",
        },
        {
          term: "Dove vi si incontra",
          detail:
            "Si definisce nella risposta alla vostra richiesta. Le modalità d'incontro le stabilisce l'aeroporto, e quelle di Pisa non sono state verificate per questa versione: qui non ne promettiamo nessuna.",
        },
      ],
    },
    to: {
      id: "firenze",
      label: "Arrivo",
      name: "Firenze",
      page: "florence",
      linkText: "La città e la questione aperta sulla ZTL",
      items: [
        {
          term: "L'indirizzo",
          detail:
            "Via e numero, non la città. A Firenze è l'indirizzo a determinare la risposta, perché determina quali regole si applicano.",
        },
        {
          term: "Il centro a traffico limitato",
          detail:
            "Una ZTL divisa in settori copre il centro storico. Per questa versione non è stato possibile leggere alcun testo ufficiale sull'accesso degli NCC: questa pagina non afferma nulla in proposito.",
        },
        {
          term: "L'esito probabile",
          detail:
            "O l'auto arriva alla porta, oppure il punto di sosta più pratico è a pochi minuti a piedi. Quale dei due valga per il vostro indirizzo ve lo diciamo quando lo chiedete.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Cinque cose, e su questa tratta la terza è quella che conta di più.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "L'indirizzo fiorentino completo: via e numero.",
      "Quanti passeggeri e quanti bagagli.",
      "Se serve un seggiolino per bambini, e le età.",
    ],
    note: "Se l'indirizzo è dentro il centro storico, ditelo. Non rende il viaggio impossibile: rende la risposta specifica, che su questa tratta vale molto più di una rassicurazione generica.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail: "L'aeroporto per esteso, e la distanza fra il nome e il mestiere.",
      },
      {
        page: "florence",
        label: "Transfer privati a Firenze",
        detail: "La città, il centro e ciò che non abbiamo potuto confermare.",
      },
      {
        page: "route-flr-florence",
        label: "Dall'aeroporto di Firenze alla città",
        detail: "La stessa città dall'altro aeroporto, molto più vicino.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "A due di queste rispondiamo rifiutandoci di rispondere, che su questa tratta è la cosa responsabile da fare.",
    items: [
      {
        question: "Quanto ci vuole?",
        answer:
          "Non indichiamo durate. La carta dei servizi 2025 del gestore non pubblica nulla sul tempo fra l'aeroporto e Firenze, e nessun'altra fonte consultata lo fa. Su una tratta attorno a cui si pianificano coincidenze aeree, un numero inventato sarebbe la peggiore delle approssimazioni.",
      },
      {
        question: "Quanto dista?",
        answer:
          "Per questo tragitto non pubblichiamo alcuna distanza stradale. La carta dei servizi del gestore colloca l'aeroporto a circa un chilometro da Pisa, ma né essa né alcun'altra fonte consultata indica una distanza o un tempo fra l'aeroporto e Firenze, che è il dato che servirebbe a questa pagina. Pisa e Firenze sono città distinte e il tragitto fra le due è interurbano.",
      },
      {
        question: "Perché non prendere il treno?",
        answer:
          "È una domanda legittima e questa pagina non proverà a dissuadervi. Un transfer risponde a un'altra domanda: un indirizzo con i bagagli, a un orario deciso dal vostro volo e non da un orario ferroviario. Quale conti di più dipende da dove alloggiate e da quanto portate.",
      },
      {
        question: "L'auto può portarmi a un hotel in centro?",
        answer:
          "Dipende dall'indirizzo e dalle regole stabilite dal Comune di Firenze. Mentre questa pagina veniva scritta non è stato possibile leggere alcun testo ufficiale sull'accesso degli NCC alla ZTL: non diamo quindi alcuna garanzia. Mandate l'indirizzo e la risposta riguarderà quell'indirizzo.",
      },
      {
        question: "E se il volo è in ritardo?",
        answer:
          "Inviate il numero del volo con la richiesta. È ciò che rende tracciabile un arrivo, ed è la ragione per cui nell'elenco qui sopra il numero del volo viene prima dell'orario.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Volo, data e una via di Firenze",
    body: "Il capo aeroportuale di questa tratta è semplice, quello cittadino no. Inviare l'indirizzo completo insieme ai dati del volo è ciò che trasforma una domanda generica in una risposta precisa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sull'aeroporto di Pisa", page: "pisa-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

/* ── Peretola → Florence ──────────────────────────────────────────────── */

const flrEn: RoutePage = {
  meta: {
    title: "Florence Airport to Florence",
    description:
      "The short run in from Peretola. The simplest page in this cluster, and the one unresolved question it still ends on.",
  },
  breadcrumbLabel: "Breadcrumb",
  hero: {
    from: "Florence Peretola (FLR)",
    to: "Florence",
    eyebrow: "Route",
    h1: "Florence Airport to Florence",
    lead: "After the run from Pisa, here is its opposite: an airport at the edge of the city it is named for, and a short drive into the middle of it. The only thing that complicates this route is the thing that complicates every Florence arrival.",
    primaryCta: "Request a quotation",
    secondaryCta: "About the airport",
    note: "No price, journey time or road distance appears here. The airport is in the Peretola area at the edge of the city; what that means in minutes depends on the hour and on the address.",
  },
  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A short journey with one open question",
    lead: "This is the simplest route in the cluster, and the brevity of the page is deliberate rather than an oversight.",
    from: {
      id: "flr",
      label: "Departure",
      name: "Florence Peretola",
      page: "florence-airport",
      linkText: "The airport, and its single short runway",
      items: [
        {
          term: "Where it is",
          detail:
            "In the Peretola area at the edge of Florence — inside the urban area rather than out in the country.",
        },
        {
          term: "The size of it",
          detail:
            "Small, because of a single 1,560 m runway. Small enough that finding someone is not a problem, which helps at an awkward hour.",
        },
        {
          term: "What to send",
          detail: "Flight number, date and scheduled arrival time.",
        },
      ],
    },
    to: {
      id: "florence",
      label: "Arrival",
      name: "Florence",
      page: "florence",
      linkText: "The city, and the open ZTL question",
      items: [
        {
          term: "The address",
          detail:
            "Street and number. A short drive still ends at a specific door, and the door is what decides the answer.",
        },
        {
          term: "The restricted centre",
          detail:
            "A sector-based limited-traffic zone covers the historic centre, and no official text on private-hire access could be read for this build. This page claims nothing about it.",
        },
        {
          term: "Being close does not settle it",
          detail:
            "The shortness of this journey has no bearing on the access rules at the end of it. A short drive and a long one meet the same ZTL.",
        },
      ],
    },
  },
  prepare: {
    id: "request",
    heading: "What to send",
    lead: "Four things. On this route that genuinely is the whole list.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time.",
      "The full address, street and number.",
      "How many passengers and how much luggage.",
    ],
    note: "If the address is inside the historic centre, say so. It is the one detail on this short route that can change the answer.",
  },
  related: {
    id: "related",
    heading: "Related",
    items: [
      {
        page: "florence-airport",
        label: "Florence Peretola (FLR)",
        detail: "The airport, and the runway that explains its size.",
      },
      {
        page: "florence",
        label: "Private transfers in Florence",
        detail: "The city, the centre, and what could not be confirmed.",
      },
      {
        page: "route-psa-florence",
        label: "Pisa Airport to Florence",
        detail: "The longer run, from the airport most Florence visitors use.",
      },
    ],
  },
  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this journey",
    lead: "Fewer than the Pisa route generates, which is rather the point of it.",
    items: [
      {
        question: "How long does it take?",
        answer:
          "No duration is quoted. The airport is at the edge of the city, so the drive is short by any reckoning, but what it takes depends on the hour and on the address — and no source consulted publishes a figure.",
      },
      {
        question: "Is it worth arranging a transfer for such a short trip?",
        answer:
          "That is your call, and this page will not oversell it. What a transfer answers is an address with luggage at a time set by a flight. For a short hop into an unrestricted address, other options may suit you just as well.",
      },
      {
        question: "Can the car take me into the historic centre?",
        answer:
          "That depends on the address and on rules set by the Comune di Firenze, exactly as it does on the longer route from Pisa. No official text on private-hire access could be read for this build, so no assurance is given here.",
      },
      {
        question: "Why did my Florence flight land at Pisa instead?",
        answer:
          "Most likely the aircraft could not use Peretola's single 1,560 m runway. If that is what happened, the route you want is the one from Pisa, which is an intercity journey rather than this one.",
      },
    ],
  },
  closing: {
    id: "quote",
    heading: "A short route, honestly described",
    body: "Flight, time, address. The brevity of this page is not an oversight — it is what an ordinary airport transfer looks like when only one thing stands in the way, and that one thing is at the far end.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "About Florence Airport", page: "florence-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const flrIt: RoutePage = {
  meta: {
    title: "Dall'aeroporto di Firenze alla città",
    description:
      "Il breve tragitto da Peretola. La pagina più semplice di questa sezione, e l'unica questione aperta su cui finisce comunque.",
  },
  breadcrumbLabel: "Percorso di navigazione",
  hero: {
    from: "Firenze Peretola (FLR)",
    to: "Firenze",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Firenze alla città",
    lead: "Dopo il tragitto da Pisa, ecco il suo opposto: un aeroporto al margine della città di cui porta il nome e un breve percorso fino al centro. L'unica cosa che complica questa tratta è la stessa che complica ogni arrivo a Firenze.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto",
    note: "Qui non compaiono prezzi, durate o distanze stradali. L'aeroporto è nella zona di Peretola, al margine della città; quanto significhi in minuti dipende dall'ora e dall'indirizzo.",
  },
  endpoints: {
    id: "capi",
    eyebrow: "I due capi",
    heading: "Un viaggio breve con una domanda aperta",
    lead: "È la tratta più semplice della sezione, e la brevità di questa pagina è voluta, non una dimenticanza.",
    from: {
      id: "flr",
      label: "Partenza",
      name: "Firenze Peretola",
      page: "florence-airport",
      linkText: "L'aeroporto e la sua unica pista corta",
      items: [
        {
          term: "Dove si trova",
          detail:
            "Nella zona di Peretola, al margine di Firenze: dentro l'area urbana, non fuori in campagna.",
        },
        {
          term: "Quanto è grande",
          detail:
            "Piccolo, per via di un'unica pista di 1.560 m. Abbastanza piccolo da rendere semplice ritrovarsi, il che aiuta a un'ora scomoda.",
        },
        {
          term: "Che cosa inviare",
          detail: "Numero del volo, data e orario previsto di arrivo.",
        },
      ],
    },
    to: {
      id: "firenze",
      label: "Arrivo",
      name: "Firenze",
      page: "florence",
      linkText: "La città e la questione aperta sulla ZTL",
      items: [
        {
          term: "L'indirizzo",
          detail:
            "Via e numero. Anche un tragitto breve finisce a una porta precisa, ed è la porta a determinare la risposta.",
        },
        {
          term: "Il centro a traffico limitato",
          detail:
            "Una ZTL divisa in settori copre il centro storico, e per questa versione non è stato possibile leggere alcun testo ufficiale sull'accesso degli NCC. Questa pagina non afferma nulla in proposito.",
        },
        {
          term: "Essere vicini non risolve",
          detail:
            "La brevità di questo tragitto non incide sulle regole di accesso al suo termine. Un tragitto breve e uno lungo incontrano la stessa ZTL.",
        },
      ],
    },
  },
  prepare: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Quattro cose. Su questa tratta è davvero tutto l'elenco.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo.",
      "L'indirizzo completo, via e numero.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Se l'indirizzo è dentro il centro storico, ditelo. Su questa breve tratta è l'unico dettaglio che può cambiare la risposta.",
  },
  related: {
    id: "correlate",
    heading: "Correlate",
    items: [
      {
        page: "florence-airport",
        label: "Firenze Peretola (FLR)",
        detail: "L'aeroporto, e la pista che ne spiega le dimensioni.",
      },
      {
        page: "florence",
        label: "Transfer privati a Firenze",
        detail: "La città, il centro e ciò che non abbiamo potuto confermare.",
      },
      {
        page: "route-psa-florence",
        label: "Dall'aeroporto di Pisa a Firenze",
        detail: "Il tragitto più lungo, dall'aeroporto che usa la maggior parte dei visitatori.",
      },
    ],
  },
  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo viaggio",
    lead: "Meno di quante ne generi la tratta da Pisa, ed è proprio questo il punto.",
    items: [
      {
        question: "Quanto ci vuole?",
        answer:
          "Non indichiamo durate. L'aeroporto è al margine della città, quindi il tragitto è breve comunque lo si misuri, ma quanto duri dipende dall'ora e dall'indirizzo — e nessuna fonte consultata pubblica un dato.",
      },
      {
        question: "Vale la pena organizzare un transfer per un tragitto così breve?",
        answer:
          "Decidete voi, e questa pagina non ve lo venderà a tutti i costi. Un transfer risponde a questo: un indirizzo con i bagagli, a un orario deciso da un volo. Per un breve spostamento verso un indirizzo non soggetto a limitazioni, altre soluzioni possono andare altrettanto bene.",
      },
      {
        question: "L'auto può portarmi nel centro storico?",
        answer:
          "Dipende dall'indirizzo e dalle regole stabilite dal Comune di Firenze, esattamente come sulla tratta più lunga da Pisa. Per questa versione non è stato possibile leggere alcun testo ufficiale sull'accesso degli NCC: qui non diamo alcuna garanzia.",
      },
      {
        question: "Perché il mio volo per Firenze è atterrato a Pisa?",
        answer:
          "Molto probabilmente l'aeromobile non poteva usare l'unica pista di 1.560 m di Peretola. Se è andata così, la tratta che vi serve è quella da Pisa, che è un viaggio interurbano e non questo.",
      },
    ],
  },
  closing: {
    id: "preventivo",
    heading: "Una tratta breve, descritta onestamente",
    body: "Volo, ora, indirizzo. La brevità di questa pagina non è una dimenticanza: è l'aspetto di un normale transfer aeroportuale quando una cosa sola si mette di mezzo, e quella cosa sta all'altro capo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sull'aeroporto di Firenze", page: "florence-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const routePsaFlorence: Record<Locale, RoutePage> = {
  en: psaEn,
  it: psaIt,
};
export const routeFlrFlorence: Record<Locale, RoutePage> = {
  en: flrEn,
  it: flrIt,
};
