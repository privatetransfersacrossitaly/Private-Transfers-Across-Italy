import type { Locale } from "@/lib/site";
import type { FlorenceAirport } from "./types";

/**
 * Florence Peretola.
 *
 * ── One fact, carrying the whole page ─────────────────────────────────────
 * The verified fact available here is unusually good: a single runway of
 * 1,560 m, short enough to limit the airport to aircraft around A320neo size.
 *
 * That is worth building a page on, because it *explains* something the
 * homepage already asserts — that Florence has "a small airport inside the
 * urban area, a larger one at Pisa" — instead of repeating the assertion. A
 * reader who wondered why their flight to Florence landed at Pisa gets an
 * answer, and it is a physical one rather than a commercial one.
 *
 * ── Against its sibling ───────────────────────────────────────────────────
 * Pisa's page is about a *name* being narrower than the job. This one is
 * about a *runway* being shorter than expected. Same operator, opposite
 * arguments, and neither page would make sense in the other's place.
 *
 * A second, longer runway is planned. It is recorded in the research log and
 * deliberately kept off this page: planned infrastructure with no verified
 * completion would read, on a transfer page, as though it existed.
 */

const en: FlorenceAirport = {
  meta: {
    title: "Florence Peretola Airport transfers",
    description:
      "Florence's own airport is inside the urban area and limited by a single short runway. Why that is the reason many Florence flights land at Pisa instead.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Arriving in Florence",
    h1: "Florence Peretola Airport",
    lead: "Florence has an airport of its own, at the edge of the city, and it is the smaller of Tuscany's two. Part of that is a decision — one company runs both airports and gives them different work — and part of it is simply physical: there is one runway, and it is short.",
    primaryCta: "Request a quotation",
    secondaryCta: "The runway, and what it decides",
    facts: [
      { label: "IATA", value: "FLR" },
      { label: "ICAO", value: "LIRQ" },
      { label: "Runways", value: "One, 1,560 m" },
      { label: "In Tuscany", value: "The second" },
    ],
  },

  runway: {
    id: "runway",
    eyebrow: "The fact that explains the airport",
    heading: "A single runway of 1,560 metres",
    lead: "Most airport pages describe size as though it were a decision somebody made. Here it is a measurement.",
    paragraphs: [
      "Florence Airport, formally the Amerigo Vespucci and known to almost everyone as Peretola, has one runway. At 1,560 metres it is short by the standards of an international airport, and it is described as able to accept aircraft up to roughly the size of an A320neo.",
      "That single number explains a great deal, though not quite everything. It is why long-haul routes do not end here, and why a flight booked to Florence can turn out to land somewhere else entirely. The other half of the answer is deliberate: the operator runs the two Tuscan airports as a complementary pair, describing this one as the airport for full-service carriers connecting the main European hubs, and Pisa as the one for low-cost and tourist traffic.",
      "For a traveller the consequence is practical rather than technical. If your flight does use Peretola you are arriving at the edge of Florence itself, which is a genuinely short approach to the city. If it does not, the reason lies either in the ground or in the way the two airports divide the work, and the airport you want is Pisa.",
    ],
    consequence: {
      heading: "What it means for you",
      body: "Very little, once you have landed. The runway decides which flights can come here; it has no bearing on arranging a car. The airport is at the edge of the city, so the drive in is short — though the destination address still has to clear whatever the Comune's rules say about the restricted centre, which is the one open question on the Florence page.",
    },
    source: {
      text: "The operator and the way it divides work between its two airports come from Toscana Aeroporti's own 2025 Service Charter for Pisa, whose opening section describes both airports; it was read on 27 October 2026 from an archived copy, because the company's website refuses automated requests. Names, codes and the runway length are from published reference records rather than from the charter. A longer runway is planned; because no completion is verified, it is deliberately not described here as though it existed. No fare, journey time or distance is quoted, as no source consulted states one:",
      linkText: "Toscana Aeroporti's 2025 Service Charter, archived copy",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },

  meaning: {
    id: "arriving",
    eyebrow: "On the ground",
    heading: "Arriving at Peretola",
    lead: "Three things decide how an arrival here goes, and only one of them is about the airport.",
    steps: [
      {
        title: "A small airport is a quick one",
        body: "Peretola is small enough that finding someone is not a problem, which is a real advantage at an awkward hour or with a tired family. Nothing on this page describes where a driver waits, because that is set by the airport and by the arrangement rather than by us.",
      },
      {
        title: "The city starts almost immediately",
        body: "The airport sits in the Peretola area at the edge of Florence. The homepage says exactly that, and this page will not go further — no distance is published, because no source consulted states one.",
      },
      {
        title: "The address decides the rest",
        body: "A short drive into Florence still ends inside a city with a sector-based limited-traffic centre. The full street address is what makes the question answerable, and it is the single most useful thing to include in a request.",
      },
    ],
  },

  onward: {
    id: "onward",
    heading: "From Peretola",
    items: [
      {
        page: "route-flr-florence",
        label: "Florence Airport to Florence",
        detail: "The short run in, and the shortest page in this cluster.",
      },
      {
        page: "florence",
        label: "Private transfers in Florence",
        detail:
          "The city, the restricted centre, and the access question this site could not close.",
      },
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail:
          "The larger Tuscan airport, under the same operator — and, thanks to the runway, where a good many Florence-bound flights actually land.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this airport",
    lead: "Short, like the runway.",
    items: [
      {
        question: "Why is Florence's airport so small?",
        answer:
          "Chiefly because of the runway. There is one, it is 1,560 metres long, and that limits the airport to aircraft of around A320neo size. Alongside that, its operator runs the two Tuscan airports as a complementary pair and gives them different work — this one for full-service carriers into the main European hubs, Pisa for low-cost and tourist traffic.",
      },
      {
        question: "My flight to Florence landed at Pisa. Why?",
        answer:
          "Most likely the aircraft could not use Peretola's runway, or the route is not operated into it. Pisa is the larger of the two Tuscan airports and is the usual gateway to Florence, which is a different city — the journey between them is an intercity one.",
      },
      {
        question: "How far is the airport from the centre?",
        answer:
          "No distance is published here. The airport is in the Peretola area at the edge of the city, which is as far as any source consulted for this build will support. What the drive takes depends on the hour and on the address.",
      },
      {
        question: "Can the car take me into the historic centre?",
        answer:
          "That depends on the address and on rules set by the Comune di Firenze. No official text on private-hire access to the ZTL could be read while this was written, so no assurance is given here. The Florence page sets out what is known and what is not.",
      },
      {
        question: "Isn't a new runway being built?",
        answer:
          "A longer runway is planned. No completion has been verified, so this page describes the airport as it is rather than as it may become — a transfer page that implied otherwise would be misleading about today's flights.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "A short arrival, and one open question",
    body: "Peretola is about as straightforward as an Italian airport arrival gets. The complication is at the other end, in the centre, and the full address is what resolves it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Florence", page: "florence" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: FlorenceAirport = {
  meta: {
    title: "Transfer dall'aeroporto di Firenze Peretola",
    description:
      "L'aeroporto di Firenze è al margine dell'area urbana ed è limitato da un'unica pista corta. Perché è questa la ragione per cui molti voli per Firenze atterrano a Pisa.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Arrivare a Firenze",
    h1: "Aeroporto di Firenze Peretola",
    lead: "Firenze ha un proprio aeroporto, al margine della città, ed è il più piccolo dei due toscani. In parte è una scelta — un'unica società gestisce entrambi gli scali e assegna a ciascuno un ruolo diverso — e in parte è semplicemente fisico: la pista è una sola, ed è corta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "La pista, e che cosa determina",
    facts: [
      { label: "IATA", value: "FLR" },
      { label: "ICAO", value: "LIRQ" },
      { label: "Piste", value: "Una, 1.560 m" },
      { label: "In Toscana", value: "Il secondo" },
    ],
  },

  runway: {
    id: "pista",
    eyebrow: "Il dato che spiega l'aeroporto",
    heading: "Una sola pista di 1.560 metri",
    lead: "Quasi tutte le pagine aeroportuali descrivono la dimensione come se fosse una scelta di qualcuno. Qui è una misura.",
    paragraphs: [
      "L'aeroporto di Firenze, formalmente Amerigo Vespucci e per tutti Peretola, ha una sola pista. Con i suoi 1.560 metri è corta per gli standard di uno scalo internazionale, ed è descritta come in grado di accogliere aeromobili fino all'incirca alle dimensioni di un A320neo.",
      "Quel singolo numero spiega molto, ma non tutto. Spiega perché qui non arrivino rotte a lungo raggio e perché un volo prenotato «per Firenze» possa finire per atterrare altrove. L'altra metà della risposta è una scelta: il gestore conduce i due scali toscani come una coppia complementare e descrive questo come l'aeroporto dei vettori di linea verso i principali hub europei, e Pisa come quello del traffico low cost e turistico.",
      "Per chi viaggia la conseguenza è pratica più che tecnica. Se il vostro volo usa davvero Peretola, arrivate al margine di Firenze, e l'avvicinamento alla città è davvero breve. Se non lo usa, la ragione sta nel terreno oppure nel modo in cui i due scali si dividono il lavoro, e l'aeroporto che vi serve è Pisa.",
    ],
    consequence: {
      heading: "Che cosa comporta per voi",
      body: "Molto poco, una volta atterrati. La pista decide quali voli possano arrivare qui; non ha alcun effetto sull'organizzare un'auto. L'aeroporto è al margine della città, quindi il tragitto è breve — anche se l'indirizzo di destinazione deve comunque fare i conti con ciò che le regole del Comune dicono sul centro a traffico limitato, che è l'unica questione aperta della pagina su Firenze.",
    },
    source: {
      text: "Il gestore e il modo in cui ripartisce il lavoro fra i suoi due aeroporti provengono dalla carta dei servizi 2025 di Toscana Aeroporti per Pisa, la cui sezione iniziale descrive entrambi gli scali; è stata letta il 27 ottobre 2026 da una copia archiviata, perché il sito della società rifiuta le richieste automatiche. Denominazioni, codici e lunghezza della pista provengono da registri di riferimento pubblicati e non dalla carta. È prevista una pista più lunga: poiché non ne è verificato il completamento, qui non la descriviamo come se esistesse. Non indichiamo tariffe, durate o distanze, perché nessuna fonte consultata ne riporta:",
      linkText: "La carta dei servizi 2025 di Toscana Aeroporti, copia archiviata",
      href: "https://web.archive.org/web/20260221130329/https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250416-Pisa_ENG_2025.pdf",
    },
  },

  meaning: {
    id: "arrivo",
    eyebrow: "A terra",
    heading: "Arrivare a Peretola",
    lead: "Tre cose determinano com'è un arrivo qui, e solo una riguarda l'aeroporto.",
    steps: [
      {
        title: "Un aeroporto piccolo è un aeroporto rapido",
        body: "Peretola è abbastanza piccolo da rendere semplice ritrovarsi, il che è un vantaggio concreto a un'ora scomoda o con una famiglia stanca. Questa pagina non descrive dove attenda un autista, perché lo stabiliscono l'aeroporto e l'accordo, non noi.",
      },
      {
        title: "La città comincia quasi subito",
        body: "L'aeroporto si trova nella zona di Peretola, al margine di Firenze. La homepage dice esattamente questo, e questa pagina non va oltre: non pubblichiamo distanze, perché nessuna fonte consultata ne indica.",
      },
      {
        title: "È l'indirizzo a decidere il resto",
        body: "Un breve tragitto verso Firenze finisce comunque dentro una città con un centro a traffico limitato diviso in settori. È l'indirizzo completo a rendere rispondibile la domanda, ed è la cosa più utile da inserire in una richiesta.",
      },
    ],
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Peretola",
    items: [
      {
        page: "route-flr-florence",
        label: "Dall'aeroporto di Firenze alla città",
        detail: "Il breve tragitto, e la pagina più corta di questa sezione.",
      },
      {
        page: "florence",
        label: "Transfer privati a Firenze",
        detail:
          "La città, il centro a traffico limitato e la domanda sull'accesso che non abbiamo potuto chiudere.",
      },
      {
        page: "pisa-airport",
        label: "Pisa Galileo Galilei (PSA)",
        detail:
          "L'aeroporto toscano più grande, dello stesso gestore — e, grazie alla pista, quello su cui atterra buona parte dei voli diretti a Firenze.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo aeroporto",
    lead: "Corte, come la pista.",
    items: [
      {
        question: "Perché l'aeroporto di Firenze è così piccolo?",
        answer:
          "Soprattutto per via della pista. È una sola, lunga 1.560 metri, e limita lo scalo ad aeromobili all'incirca delle dimensioni di un A320neo. Accanto a questo, il gestore conduce i due scali toscani come una coppia complementare e assegna a ciascuno un ruolo diverso: questo ai vettori di linea verso i principali hub europei, Pisa al traffico low cost e turistico.",
      },
      {
        question: "Il mio volo per Firenze è atterrato a Pisa. Perché?",
        answer:
          "Molto probabilmente l'aeromobile non poteva usare la pista di Peretola, oppure la rotta non vi è operata. Pisa è il maggiore dei due aeroporti toscani ed è la porta d'accesso abituale per Firenze, che è un'altra città: il tragitto fra le due è un viaggio interurbano.",
      },
      {
        question: "Quanto dista l'aeroporto dal centro?",
        answer:
          "Qui non pubblichiamo distanze. L'aeroporto è nella zona di Peretola, al margine della città: è quanto le fonti consultate per questa versione permettono di dire. Quanto duri il tragitto dipende dall'ora e dall'indirizzo.",
      },
      {
        question: "L'auto può portarmi nel centro storico?",
        answer:
          "Dipende dall'indirizzo e dalle regole stabilite dal Comune di Firenze. Mentre questo testo veniva scritto non è stato possibile leggere alcun documento ufficiale sull'accesso degli NCC alla ZTL: qui quindi non diamo alcuna garanzia. La pagina su Firenze espone ciò che si sa e ciò che non si sa.",
      },
      {
        question: "Non stanno costruendo una pista nuova?",
        answer:
          "È prevista una pista più lunga. Non ne è stato verificato alcun completamento, perciò questa pagina descrive l'aeroporto com'è e non come potrebbe diventare: il contrario sarebbe fuorviante sui voli di oggi.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Un arrivo breve e una domanda aperta",
    body: "Peretola è pressoché il più semplice degli arrivi aeroportuali italiani. La complicazione sta all'altro capo, in centro, ed è l'indirizzo completo a scioglierla.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Firenze", page: "florence" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const florenceAirport: Record<Locale, FlorenceAirport> = { en, it };
