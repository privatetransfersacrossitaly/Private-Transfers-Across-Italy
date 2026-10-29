import type { Locale } from "@/lib/site";
import type { MajesticHotel } from "./types";

/**
 * Grand Hotel Majestic "già Baglioni".
 *
 * ── The page exists because the address is not the destination ────────────
 * The hotel publishes its own street directions, and they open by telling
 * guests not to use its address: *"NEVER USE THE ADDRESS OF OUR PROPERTY
 * 'VIA DELL'INDIPENDENZA 8' ON YOUR GPS. Via dell'Indipendenza is totally
 * pedestrianized"*. Arrivals are sent to a side entrance at Via Manzoni 2.
 *
 * That gap — between the address you book and the place a car can go — is
 * the whole page, and it is the single most useful thing anyone arranging a
 * car to this hotel could be told.
 *
 * ── The line this page must not cross ─────────────────────────────────────
 * The hotel also states: *"Via Manzoni is also a pedestrian street, but the
 * Hotel has a municipality permission for all our Guests."* That permission
 * is **the hotel's**, exercised through **the hotel's own valet**. It is not
 * evidence that our vehicles may drive Via Manzoni, and the page says so in
 * terms rather than leaving it to be assumed.
 *
 * So: summarise what the hotel publishes, send the reader to the hotel to
 * confirm it, and claim nothing about our own access. The directions
 * document carries no revision date, which the page also states.
 *
 * See `docs/bologna-stage2-hotel-verification.md` §1.
 */

const sourceEn = {
  text: "The address, the pedestrianised street, the Via Manzoni side entrance and the hotel's statement about its own municipal permission are all from the hotel's published street-directions document, read on 27 October 2026. That document carries no revision date, so confirm the current arrangement with the hotel before you travel:",
  linkText: "the hotel publishes its own arrival directions",
  href: "https://grandhotelmajestic.duetorrihotels.com/en",
};

const sourceIt = {
  text: "L'indirizzo, la via pedonalizzata, l'ingresso laterale di via Manzoni e quanto l'albergo dichiara sulla propria autorizzazione comunale provengono tutti dal documento di indicazioni stradali pubblicato dall'hotel, consultato il 27 ottobre 2026. Quel documento non riporta una data di revisione: verificate con l'hotel la situazione attuale prima di partire:",
  linkText: "l'hotel pubblica le proprie indicazioni per l'arrivo",
  href: "https://grandhotelmajestic.duetorrihotels.com/en",
};

const en: MajesticHotel = {
  meta: {
    title: "Transfers to the Grand Hotel Majestic, Bologna",
    description:
      "The hotel tells guests never to use its own address for driving directions. What it publishes instead, and what this page cannot promise about it.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "A Bologna address",
    h1: "Transfers to the Grand Hotel Majestic “già Baglioni”",
    lead: "This is the one hotel on this site whose own directions begin by telling you not to use its address. Understanding why is most of what you need before arranging a car to it.",
    primaryCta: "Request a quotation",
    secondaryCta: "Two addresses, one hotel",
    constraint: {
      label: "Before anything else",
      heading: "The address you book is not the address a car goes to",
      known: [
        {
          term: "The registered address",
          detail:
            "Via dell'Indipendenza, 8 — 40121 Bologna. This is the hotel's address and the one on your booking.",
        },
        {
          term: "What the hotel says about it",
          detail:
            "Its own directions describe Via dell'Indipendenza as totally pedestrianised, and instruct guests never to use that address for driving directions.",
        },
        {
          term: "Where it sends arrivals instead",
          detail:
            "A side entrance at Via Manzoni 2, by the I Carracci restaurant, which the hotel says is where its valet meets guests.",
        },
      ],
      unknown: {
        label: "What this page cannot tell you",
        body: "Whether our vehicle may use that route. The hotel states it holds a municipality permission for its own guests, exercised through its own valet — that is the hotel's arrangement, not ours, and it is not evidence of any access right on our part. We make no claim here about driving Via Manzoni, and we promise no pickup at the side entrance. Send the booking details and the arrangement is settled with you directly.",
      },
      source: sourceEn,
    },
  },

  addresses: {
    id: "addresses",
    eyebrow: "The gap",
    heading: "What the hotel publishes, side by side",
    lead: "Both columns are the hotel's own account. Reading them together is the point — neither on its own tells you what to do.",
    columns: [
      {
        id: "booking",
        heading: "The address on your booking",
        subheading: "Correct, and not drivable",
        rows: [
          {
            term: "Via dell'Indipendenza, 8",
            detail:
              "40121 Bologna. The hotel's registered address and the one you will see on every confirmation.",
          },
          {
            term: "The street is pedestrianised",
            detail:
              "In the hotel's own words, totally pedestrianised. Bologna's official tourist information separately lists via Indipendenza among the streets restricted around the clock.",
          },
          {
            term: "The hotel's instruction",
            detail:
              "Never to use this address for satellite navigation. It is the first line of its directions document, in capitals.",
          },
        ],
      },
      {
        id: "arrival",
        heading: "Where the hotel sends arriving cars",
        subheading: "Also the hotel's own account",
        rows: [
          {
            term: "Via Manzoni 2",
            detail:
              "The side entrance, by the I Carracci restaurant. The hotel describes this as the mandatory way to reach it by vehicle.",
          },
          {
            term: "A valet meets guests there",
            detail:
              "The hotel says its valet waits roughly fifty metres before the end of the street. That is the hotel's staff and the hotel's service, not ours.",
          },
          {
            term: "Via Marconi is the gate named",
            detail:
              "The hotel names Via Marconi as the limited-traffic-zone entrance to use. It also warns that getting a car back afterwards can take longer than usual.",
          },
        ],
      },
    ],
    source: sourceEn,
  },

  limits: {
    heading: "What this page does not claim",
    body: "That our vehicles may drive Via Manzoni, or that we can collect you from the hotel's side entrance. The permission described above belongs to the hotel and is operated by its valet; nothing we found establishes an equivalent right for a private-hire car, and Bologna's own municipal rules on private-hire access could not be read while this page was written. Follow the hotel's current instructions, confirm them with the hotel, and tell us what it says — then the arrangement can be built around the answer rather than around an assumption.",
  },

  streets: {
    id: "streets",
    eyebrow: "Worth knowing either way",
    heading: "Streets the hotel says you may not drive",
    lead: "Published in its own directions, and useful whoever is driving — a hire car, a friend, or anybody else.",
    items: [
      "Via Indipendenza",
      "Via Rizzoli",
      "Via Ugo Bassi",
      "Via Archiginnasio",
      "Piazza San Francesco",
      "Via Antonio Bertoloni",
      "The yellow bus lanes",
    ],
    note: "This list is the hotel's, reproduced as published. It is not a complete account of Bologna's traffic rules, which are the Comune's to set and to change — and the directions document it comes from carries no revision date.",
  },

  onward: {
    id: "onward",
    heading: "Around this hotel",
    items: [
      {
        page: "route-blq-majestic",
        label: "Bologna Airport to this hotel",
        detail:
          "The arrival route, and where our part of the journey stops.",
      },
      {
        page: "bologna",
        label: "Private transfers in Bologna",
        detail:
          "The city's restriction at its three strengths, and why the street decides the answer.",
      },
      {
        page: "blq",
        label: "Bologna Marconi Airport (BLQ)",
        detail:
          "The airport most guests arrive through, and what it does and does not publish about pickups.",
      },
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "Another central address with an access arrangement of its own — a procedure rather than a second entrance.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About reaching this hotel",
    lead: "Several of these are answered with a limit rather than a reassurance.",
    items: [
      {
        question: "Can a car take me to the hotel door?",
        answer:
          "Not to the Via dell'Indipendenza entrance. The hotel describes that street as totally pedestrianised and instructs guests not to use the address for driving directions at all. It sends arriving vehicles to the side entrance at Via Manzoni 2 instead.",
      },
      {
        question: "So can you drop me at Via Manzoni?",
        answer:
          "This page will not promise it. The hotel says it holds a municipality permission for its guests, operated through its own valet — that is the hotel's arrangement and not ours, and nothing we could read establishes an equivalent right for a private-hire car. Ask the hotel what it requires, tell us the answer, and we will build the arrangement around it.",
      },
      {
        question: "Are the hotel's directions current?",
        answer:
          "They are published by the hotel, and they carry no revision date. We read them on 27 October 2026. Because traffic rules in Bologna are set and changed by the Comune, confirm the current arrangement with the hotel before you travel rather than relying on a summary.",
      },
      {
        question: "What should I tell you when I ask?",
        answer:
          "The hotel name, the date and time, your flight or train if there is one, and anything the hotel has told you about how it wants arriving cars handled. That last item matters more here than at any other address in this cluster.",
      },
      {
        question: "Will I have to walk?",
        answer:
          "Possibly a short distance, and it depends on what is agreed. The honest position is that a car cannot finish at the registered address, the alternative is the hotel's own arrangement, and where exactly a given vehicle can stop is settled when the request is answered — not asserted in advance on a web page.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Tell us what the hotel told you",
    body: "This is the one address on the site where the hotel's own instruction is part of the request. Send the booking details, the date and time, and whatever it has said about arriving by car.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Bologna", page: "bologna" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: MajesticHotel = {
  meta: {
    title: "Transfer per il Grand Hotel Majestic, Bologna",
    description:
      "L'hotel raccomanda di non usare mai il proprio indirizzo per il navigatore. Che cosa pubblica al suo posto e che cosa questa pagina non può promettere.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Un indirizzo bolognese",
    h1: "Transfer per il Grand Hotel Majestic “già Baglioni”",
    lead: "È l'unico hotel di questo sito le cui indicazioni cominciano col dirvi di non usare il suo indirizzo. Capire perché è quasi tutto ciò che serve prima di organizzare un'auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Due indirizzi, un hotel",
    constraint: {
      label: "Prima di ogni altra cosa",
      heading: "L'indirizzo che prenotate non è quello a cui arriva l'auto",
      known: [
        {
          term: "L'indirizzo registrato",
          detail:
            "Via dell'Indipendenza, 8 — 40121 Bologna. È l'indirizzo dell'hotel e quello che trovate sulla prenotazione.",
        },
        {
          term: "Che cosa ne dice l'hotel",
          detail:
            "Le sue indicazioni descrivono via dell'Indipendenza come completamente pedonalizzata e raccomandano di non usare mai quell'indirizzo per il navigatore.",
        },
        {
          term: "Dove indirizza invece gli arrivi",
          detail:
            "A un ingresso laterale in via Manzoni 2, presso il ristorante I Carracci, dove secondo l'hotel il suo parcheggiatore accoglie gli ospiti.",
        },
      ],
      unknown: {
        label: "Che cosa questa pagina non può dirvi",
        body: "Se il nostro veicolo possa percorrere quel tragitto. L'hotel dichiara di avere un'autorizzazione comunale per i propri ospiti, esercitata tramite il proprio servizio di parcheggio: è un accordo dell'hotel, non nostro, e non prova alcun diritto di accesso da parte nostra. Qui non affermiamo nulla sul transito in via Manzoni e non promettiamo alcun prelievo all'ingresso laterale. Inviateci i dettagli della prenotazione e l'accordo lo definiamo direttamente con voi.",
      },
      source: sourceIt,
    },
  },

  addresses: {
    id: "indirizzi",
    eyebrow: "La distanza fra i due",
    heading: "Che cosa pubblica l'hotel, affiancato",
    lead: "Entrambe le colonne riportano quanto dichiara l'hotel. Il punto è leggerle insieme: presa da sola, nessuna delle due vi dice che cosa fare.",
    columns: [
      {
        id: "prenotazione",
        heading: "L'indirizzo sulla vostra prenotazione",
        subheading: "Esatto, e non percorribile",
        rows: [
          {
            term: "Via dell'Indipendenza, 8",
            detail:
              "40121 Bologna. L'indirizzo registrato dell'hotel, quello che comparirà su ogni conferma.",
          },
          {
            term: "La via è pedonalizzata",
            detail:
              "Parole dell'hotel: completamente pedonalizzata. L'informazione turistica ufficiale di Bologna, separatamente, indica via Indipendenza fra le vie limitate ventiquattr'ore su ventiquattro.",
          },
          {
            term: "L'istruzione dell'hotel",
            detail:
              "Non usare mai questo indirizzo per il navigatore satellitare. È la prima riga del suo documento di indicazioni, in maiuscolo.",
          },
        ],
      },
      {
        id: "arrivo",
        heading: "Dove l'hotel indirizza le auto in arrivo",
        subheading: "Anche questo è il resoconto dell'hotel",
        rows: [
          {
            term: "Via Manzoni 2",
            detail:
              "L'ingresso laterale, presso il ristorante I Carracci. L'hotel lo descrive come il modo obbligato per raggiungerlo in auto.",
          },
          {
            term: "Lì gli ospiti trovano un parcheggiatore",
            detail:
              "L'hotel indica che il suo parcheggiatore attende una cinquantina di metri prima della fine della via. È personale dell'hotel e un servizio dell'hotel, non nostro.",
          },
          {
            term: "Il varco indicato è via Marconi",
            detail:
              "L'hotel indica via Marconi come varco della zona a traffico limitato da utilizzare. Avverte inoltre che riavere l'auto può richiedere più tempo del solito.",
          },
        ],
      },
    ],
    source: sourceIt,
  },

  limits: {
    heading: "Che cosa questa pagina non afferma",
    body: "Che i nostri veicoli possano percorrere via Manzoni, o che possiamo prelevarvi all'ingresso laterale dell'hotel. L'autorizzazione descritta qui sopra è dell'hotel ed è gestita dal suo parcheggiatore; nulla di quanto abbiamo trovato stabilisce un diritto equivalente per un'auto a noleggio con conducente, e le norme comunali di Bologna sull'accesso degli NCC non sono state consultabili mentre questa pagina veniva scritta. Seguite le istruzioni aggiornate dell'hotel, verificatele con l'hotel e diteci che cosa vi risponde: così l'accordo si costruisce sulla risposta e non su un'ipotesi.",
  },

  streets: {
    id: "vie",
    eyebrow: "Utile in ogni caso",
    heading: "Vie che secondo l'hotel non si possono percorrere",
    lead: "Pubblicate nelle sue stesse indicazioni, e utili chiunque guidi: un'auto a noleggio, un amico o chiunque altro.",
    items: [
      "Via Indipendenza",
      "Via Rizzoli",
      "Via Ugo Bassi",
      "Via Archiginnasio",
      "Piazza San Francesco",
      "Via Antonio Bertoloni",
      "Le corsie gialle riservate ai bus",
    ],
    note: "Questo elenco è dell'hotel, riportato come pubblicato. Non è un resoconto completo delle regole di circolazione di Bologna, che spettano al Comune stabilire e modificare, e il documento da cui proviene non riporta una data di revisione.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Attorno a questo hotel",
    items: [
      {
        page: "route-blq-majestic",
        label: "Dall'aeroporto di Bologna a questo hotel",
        detail:
          "La tratta d'arrivo, e dove finisce la nostra parte del viaggio.",
      },
      {
        page: "bologna",
        label: "Transfer privati a Bologna",
        detail:
          "La limitazione cittadina nei suoi tre gradi, e perché è la via a determinare la risposta.",
      },
      {
        page: "blq",
        label: "Aeroporto di Bologna Marconi (BLQ)",
        detail:
          "L'aeroporto da cui arriva la maggior parte degli ospiti, e che cosa pubblica (e non pubblica) sui prelievi.",
      },
      {
        page: "hotel-commercianti",
        label: "Art Hotel Commercianti",
        detail:
          "Un altro indirizzo centrale con un proprio accordo d'accesso: una procedura, non un secondo ingresso.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su come raggiungere questo hotel",
    lead: "A diverse di queste si risponde con un limite anziché con una rassicurazione.",
    items: [
      {
        question: "Un'auto può portarmi alla porta dell'hotel?",
        answer:
          "Non all'ingresso di via dell'Indipendenza. L'hotel descrive quella via come completamente pedonalizzata e raccomanda di non usare affatto quell'indirizzo per il navigatore. Indirizza invece i veicoli in arrivo all'ingresso laterale di via Manzoni 2.",
      },
      {
        question: "Potete quindi lasciarmi in via Manzoni?",
        answer:
          "Questa pagina non lo promette. L'hotel dichiara di avere un'autorizzazione comunale per i propri ospiti, gestita dal proprio parcheggiatore: è un accordo suo e non nostro, e nulla di quanto abbiamo potuto leggere stabilisce un diritto equivalente per un NCC. Chiedete all'hotel che cosa richiede, diteci la risposta e costruiremo l'accordo su quella.",
      },
      {
        question: "Le indicazioni dell'hotel sono aggiornate?",
        answer:
          "Sono pubblicate dall'hotel e non riportano alcuna data di revisione. Le abbiamo lette il 27 ottobre 2026. Poiché le regole di circolazione a Bologna le stabilisce e le modifica il Comune, verificate con l'hotel la situazione attuale prima di partire, invece di affidarvi a un riassunto.",
      },
      {
        question: "Che cosa devo indicarvi nella richiesta?",
        answer:
          "Il nome dell'hotel, la data e l'ora, il volo o il treno se ce n'è uno, e tutto quello che l'hotel vi ha detto su come vuole che siano gestite le auto in arrivo. Quest'ultimo punto conta qui più che a qualsiasi altro indirizzo della sezione.",
      },
      {
        question: "Dovrò camminare?",
        answer:
          "Forse un breve tratto, e dipende da che cosa si concorda. La posizione onesta è questa: un'auto non può concludere all'indirizzo registrato, l'alternativa è l'accordo dell'hotel, e dove esattamente un determinato veicolo possa fermarsi si definisce quando si risponde alla richiesta, non lo si afferma in anticipo su una pagina web.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Diteci che cosa vi ha detto l'hotel",
    body: "È l'unico indirizzo del sito in cui l'istruzione dell'hotel fa parte della richiesta. Inviate i dati della prenotazione, la data e l'ora e quanto vi è stato detto sull'arrivo in auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Bologna", page: "bologna" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const hotelMajestic: Record<Locale, MajesticHotel> = { en, it };
