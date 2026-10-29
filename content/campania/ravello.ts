import type { RavelloDestination } from "./types";

/**
 * Ravello.
 *
 * ── What makes this page worth having ─────────────────────────────────────
 * Ravello **names the places**. Positano charges by seat count and tells you
 * nothing about where to stop; Amalfi gives you an hour and forbids stopping
 * in its four central streets; Naples Capodichino designates bays by reference
 * to drawings nobody can read. Ravello's ordinance lists, in words, the areas
 * established for setting passengers down and collecting them — and then
 * requires the visit to be booked the day before.
 *
 * ── What makes it dangerous to cite ───────────────────────────────────────
 * The evidence moved twice in two days. The Comune's own ZetaPass service page
 * publishes `ordinanza_2022-13.pdf` as its "service conditions"; that ordinance
 * was revoked and replaced by Ordinanza n. 26 of 09/08/2025. And on 28 October
 * 2026 the portal's legal list carried **Ordinanza n. 46 of 25/09/2026**, which
 * had not been listed the previous day and which amends the first.
 *
 * Both were re-downloaded immediately before this page was written and
 * confirmed byte-identical by SHA-256 to the audited copies.
 *
 * ── The price that is not here, and why ───────────────────────────────────
 * Ordinanza 46/2026 states that the loading/unloading tariff table "è
 * sostituita dalla seguente" and gives four rows: 7,31–10,33 m at €80,
 * 5,31–7,31 m at €60, over 10,33 m not permitted, and the Ape calessino /
 * four-wheel electric category at €4. **No row covers a car of up to nine
 * seats and 5,30 m** — the class an ordinary transfer uses — while a separate
 * clause of the same ordinance goes on regulating that very category.
 *
 * The earlier table priced it at €8, or €10 at Piazza Duomo. Those figures are
 * from the superseded table and **appear nowhere on this page, in any language,
 * in metadata, in the FAQ or in structured data.** `rule.unresolvedTariff` is a
 * required field so the page says why rather than leaving a silent gap.
 *
 * ── Deliberately absent ───────────────────────────────────────────────────
 * Restaurant-access hours and their €6 authorisation: they rest on Delibera
 * G.C. 59/2025, whose standing against the later Delibere 65/2025 and 82/2025
 * could not be established, and neither of those is published. Anything from
 * Ordinanza 36/2026 or 45/2023, both cited in force and both unobtainable. The
 * SS163 plate rule. Any physical meeting point: the portal's ZTL map returns an
 * empty page and its link is commented out of the site's own HTML.
 */

const ordEn = {
  text: "The designated areas, the booking obligation and the vehicle limits are established by Ordinanza n. 26 of 9 August 2025 of the Comando Unico Polizia Locale Tramonti–Ravello, as amended by Ordinanza n. 46 of 25 September 2026. Both were read on 28 October 2026 from the Comune's ZetaPass portal, which publishes them:",
  linkText: "the Comune's ZetaPass portal and the ordinances it publishes",
  href: "https://www.ravellozetapass.it/",
};

const ordIt = {
  text: "Le aree designate, l'obbligo di prenotazione e i limiti dimensionali sono stabiliti dall'Ordinanza n. 26 del 9 agosto 2025 del Comando Unico Polizia Locale Tramonti–Ravello, come modificata dall'Ordinanza n. 46 del 25 settembre 2026. Entrambe sono state consultate il 28 ottobre 2026 sul portale ZetaPass del Comune, che le pubblica:",
  linkText: "il portale ZetaPass del Comune e le ordinanze che vi sono pubblicate",
  href: "https://www.ravellozetapass.it/",
};

const en: RavelloDestination = {
  meta: {
    title: "Private transfers to Ravello",
    description:
      "Ravello names the areas where passengers may be set down and collected, and requires the access authorisation to be booked the calendar day before the journey.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Naples and Campania",
    h1: "Private transfers to Ravello",
    lead:
      "Ravello is the one comune on this coast whose ordinance names the places a passenger may be set down and collected. It is also the one that will not let a vehicle into them without permission applied for the day before. Both facts shape a transfer here more than the drive does.",
    primaryCta: "Request a quotation",
    secondaryCta: "The four designated areas",
    facts: [
      { label: "Designated areas", value: "Four, named" },
      { label: "Booking deadline", value: "The day before" },
      { label: "Governing rule", value: "Ordinanza 26/2025" },
      { label: "As amended by", value: "Ordinanza 46/2026" },
    ],
  },

  areas: {
    id: "areas",
    eyebrow: "Named in the ordinance",
    heading: "The four areas established for passengers",
    lead:
      "The ordinance establishes these as the areas for loading and unloading passengers. It does not describe where within them a vehicle stands, and neither does this page.",
    items: [
      {
        term: "Largo Gradillo",
        detail:
          "The forecourt by the church of Santa Maria a Gradillo is reserved for boarding and alighting by passengers using private-hire, local public-service shuttle, school-bus, taxi and private car-park shuttle services. Scheduled and tourist buses are excluded from it even when they hold prior authorisation.",
      },
      {
        term: "Largo Boccaccio",
        detail:
          "Two bays here serve goods from 06:00 to 09:30 and private-hire passenger boarding and alighting from 09:30 to 24:00. Two further bays take luggage for hotel-bound clientele for a maximum of fifteen minutes, with the time of arrival displayed.",
      },
      {
        term: "Park Duomo",
        detail:
          "Named by the ordinance among the four areas established for loading and unloading passengers. The ordinance sets out no further conditions specific to it that we were able to read.",
      },
      {
        term: "Piazza San Giovanni del Toro",
        detail:
          "Also named among the four. For private-hire vehicles between 5,31 and 7,30 metres travelling here for religious events or to accommodation inside the limited-traffic zone, the amending ordinance requires the application to reach the Polizia Locale at least 48 hours beforehand, with the ordinary loading and unloading tariff paid.",
      },
    ],
    note:
      "These are the official names and nothing more. The ordinance locates its bays by reference to drawings, the portal's own ZTL map page returns nothing, and so no bay number, kerb, entrance, approach or walking direction appears here.",
    source: ordEn,
  },

  booking: {
    id: "booking",
    eyebrow: "The part that has to happen first",
    heading: "Access is booked the calendar day before",
    lead:
      "This is the single most useful thing to know about a transfer to Ravello, and the easiest to discover too late.",
    steps: [
      {
        title: "A specific authorisation is required",
        body: "The ordinance states that access to the designated areas requires booking, with a specific authorisation issued. It is not a matter of arriving and finding a space.",
      },
      {
        title: "Applications go through one portal only",
        body: "The ordinance names a single route: the Comune's web portal at www.ravellozetapass.it. Applications are not accepted elsewhere.",
      },
      {
        title: "The deadline is the day before the journey",
        body: "The application must be made by the calendar day preceding the date of transit, together with payment of the charge where one is due. A same-day request does not meet the published deadline.",
      },
      {
        title: "The authorisation travels with the vehicle",
        body: "It must be displayed visibly in the vehicle throughout the transit and the stop — the ordinance says this applies even inside private car parks in the area concerned.",
      },
      {
        title: "Some cases need longer",
        body: "Vehicles over six metres require the request to be made at least 48 hours beforehand and by the hosting accommodation, addressed to the Polizia Locale. The same 48 hours applies to private-hire vehicles of 5,31 to 7,30 metres at Piazza San Giovanni del Toro in the cases the amending ordinance describes.",
      },
    ],
    note:
      "Applying is not the same as being authorised. The ordinance provides for a specific authorisation to be issued; nothing in it, and nothing here, says that any particular application will be granted. Failure to pay a charge that is due, or to display the authorisation, attracts penalties under the Highway Code and removal of the vehicle.",
    source: ordEn,
  },

  waiver: {
    id: "waiver",
    eyebrow: "Two obligations, regularly confused",
    heading: "A waived fee is not a waived booking",
    lead:
      "The ordinance relieves some journeys of the charge. It relieves none of them of the authorisation.",
    columns: [
      {
        id: "authorisation",
        heading: "The authorisation",
        subheading: "Required in every case the ordinance covers",
        rows: [
          {
            term: "Always",
            detail:
              "Access to the designated areas requires booking and a specific authorisation. The ordinance states this before it says anything about money.",
          },
          {
            term: "For guests who are staying",
            detail:
              "Where the stop is free of charge for guests lodged in Ravello accommodation, the amending ordinance still requires the booking, and requires the booking number to be entered on the Comune's platform by the property or by the holder of the private-hire, taxi or car-park licence.",
          },
          {
            term: "For locally authorised operators",
            detail:
              "Where a firm holds a private-hire authorisation issued by the Comune di Ravello, loading and unloading may take place without the charge — but the ordinance says the request for authorisation remains obligatory in any case.",
          },
        ],
      },
      {
        id: "fee",
        heading: "The charge",
        subheading: "Due in some cases, waived in others",
        rows: [
          {
            term: "What it is",
            detail:
              "A municipal charge for the authorisation to enter the limited-traffic zone for loading and unloading passengers. It is set by the Comune and paid to it.",
          },
          {
            term: "What it is not",
            detail:
              "It is not a fare, and it is not ours. Nothing on this page is a price for a journey, and this page does not say who bears the municipal charge on any given booking.",
          },
          {
            term: "Where the amounts are",
            detail:
              "The verified bands appear in the section below, by vehicle length and emissions category. They do not form a complete price list — see the note there.",
          },
        ],
      },
    ],
    callout: {
      heading: "Do not read a waiver as permission",
      body: "Nothing here should be taken to mean that a journey exempt from the charge may proceed without the booking, or that a booking will be approved. The two obligations are separate, and only one of them is ever lifted.",
    },
    source: ordEn,
  },

  limits: {
    id: "limits",
    eyebrow: "Size, and what the ordinance charges",
    heading: "Vehicle limits, and the bands that are unambiguous",
    lead:
      "Published by length and emissions category. Read the note underneath before treating this as a price list, because it is not one.",
    items: [
      {
        term: "Over 10,33 metres",
        detail: "Circulation is not permitted. The ordinance states it flatly.",
      },
      {
        term: "Over 3 metres high or over 6 metres long",
        detail:
          "Prohibited in both directions on the stretch towards Viale Parco della Rimembranza.",
      },
      {
        term: "Vehicles 7,31 to 10,33 metres, Euro 5 and 6",
        detail:
          "€80.00 for the loading and unloading authorisation, under the table substituted by the amending ordinance.",
      },
      {
        term: "Vehicles 5,31 to 7,31 metres, Euro 5 and 6",
        detail:
          "€60.00, under the same substituted table.",
      },
      {
        term: "Ape calessino and four-wheel electric passenger vehicles",
        detail:
          "€4.00 at Largo Boccaccio, at the junction of Via Parco della Rimembranza with Via della Marra, and at Piazza San Giovanni del Toro — the three locations the amending ordinance names for this category.",
      },
    ],
    note:
      "This is deliberately not a complete tariff. The amending ordinance of 25 September 2026 substituted the whole table, and the substituted table contains no band for a car of up to nine seats and 5,30 metres in length — the class an ordinary private transfer uses — while another clause of the same ordinance continues to regulate that category. The earlier figures for it are from a table that no longer stands, so no price for an ordinary car appears anywhere on this page. Ask the Comune, or ask us and we will tell you what we are quoted.",
    source: ordEn,
  },

  meeting: {
    id: "meeting",
    eyebrow: "The limit of what can be published",
    heading: "The official names are as precise as this page gets",
    body: "The ordinance identifies its bays by reference to site drawings annexed to it, and the ZetaPass portal's own ZTL map page returns an empty document — the link to it is commented out of the site's HTML. We can therefore tell you which areas the Comune designates, and not where within them a vehicle waits.",
    note: "Where your driver actually meets you is confirmed for your own journey, against the authorisation obtained for it. We hold no Ravello permit and no special access, and we would rather name the four areas and stop than invent a corner of one.",
  },

  rule: {
    label: "Which rules this page follows, and when they were checked",
    governing:
      "Governing measure: Ordinanza n. 26 of 9 August 2025, Comando Unico Polizia Locale Tramonti–Ravello, “Disciplina generale della circolazione stradale”.",
    amendedBy:
      "As amended by: Ordinanza n. 46 of 25 September 2026, “Disciplina generale della circolazione stradale — Precisazioni e variazioni tariffarie”, which states that it is not novative and leaves the essential elements of the earlier measures in force.",
    supersession:
      "A discrepancy worth knowing about: the Comune's own ZetaPass service page still offers Ordinanza n. 13 of 2022 as its service conditions. That ordinance was revoked and replaced by the 2025 one, which says so in terms. We mention it because a reader who follows that link would be reading a superseded document; we are not suggesting the Comune has withdrawn the page.",
    unresolvedTariff:
      "Why no ordinary-car price appears: the 2026 amendment substituted the tariff table, and the substituted table has no band for cars of up to nine seats and 5,30 metres. The figures published for that class before the amendment belong to a table that no longer stands, so they are not reproduced here in any form.",
    verifiedOn:
      "Regulatory claims on this page were last verified on 28 October 2026, against the ordinances as published on the Comune's ZetaPass portal.",
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover in Ravello",
    body: "We arrange transfers in Campania, including the Amalfi Coast road. Whether a particular journey to or from Ravello can be arranged, which vehicle would be suitable under the ordinance's length and emissions bands, and how the authorisation is obtained for your date are settled in the reply to your request. We do not claim to hold a private-hire authorisation issued by the Comune di Ravello, to qualify for any waiver, or to be able to guarantee that an authorisation will be granted.",
  },

  send: {
    id: "send",
    heading: "What to send with a Ravello request",
    lead:
      "The first two matter more here than anywhere else on the coast, because the booking has to be made before the day.",
    items: [
      "The date, and how much notice you are giving",
      "The address you are going to, and whether it is inside the limited-traffic zone",
      "Whether you are lodged in Ravello, and at which property",
      "Where you are starting from",
      "Passengers and luggage",
    ],
    note:
      "Tell us the date as early as you can. The published deadline for the access authorisation is the calendar day before the journey, and vehicles over six metres need forty-eight hours and a request made by the property hosting you.",
  },

  onward: {
    id: "onward",
    heading: "Nearby",
    items: [
      {
        page: "amalfi",
        label: "Transfers to Amalfi",
        detail:
          "Below Ravello on the coast, and governed by the clock instead: sixty minutes inside, and four streets where stopping is banned outright.",
      },
      {
        page: "positano",
        label: "Transfers to Positano",
        detail:
          "The third coast comune with published rules, and a third kind again: a charge that depends on how many seats the vehicle has.",
      },
      {
        page: "naples",
        label: "Transfers in Naples",
        detail:
          "The regional hub — four arrival points with one name, and which of them you actually mean.",
      },
      {
        page: "nap-airport",
        label: "Naples Capodichino Airport (NAP)",
        detail:
          "The usual way into the region, and the rules at its kerb.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Ravello questions",
    lead: "Mostly about the booking, and about where a car is allowed to stop.",
    items: [
      {
        question: "Where can the car set us down in Ravello?",
        answer:
          "At one of the four areas the ordinance establishes for loading and unloading passengers: Largo Gradillo, Largo Boccaccio, Park Duomo and Piazza San Giovanni del Toro. Access to them requires an authorisation booked in advance. Where within an area a vehicle stands is not something this page can tell you — the ordinance refers to drawings and the portal's map page is empty.",
      },
      {
        question: "How far ahead does it have to be booked?",
        answer:
          "By the calendar day before the date of transit, through the Comune's portal at ravellozetapass.it. Vehicles over six metres need at least forty-eight hours, with the request made by the accommodation hosting you and addressed to the Polizia Locale.",
      },
      {
        question: "We are staying at a hotel in Ravello. Is it free?",
        answer:
          "The ordinance provides that for guests lodged in Ravello accommodation the stop for loading and unloading may take place without the charge. The booking is not waived with it: the amending ordinance requires the booking number to be entered on the Comune's platform by the property or by the licensed operator. A waived fee is not a waived authorisation.",
      },
      {
        question: "What does the access authorisation cost?",
        answer:
          "That depends on the vehicle, and the published table is not complete for our purposes. It sets €80 for vehicles of 7,31 to 10,33 metres in Euro 5 or 6, €60 for 5,31 to 7,31 metres, €4 for Ape calessino and four-wheel electric passenger vehicles at three named locations, and no circulation at all above 10,33 metres. It contains no band for an ordinary car of up to nine seats, so we do not publish a figure for one.",
      },
      {
        question: "Why not just quote the old price for a car?",
        answer:
          "Because it was superseded. The ordinance of 25 September 2026 substituted the tariff table, and the figures published for ordinary cars before that belong to the table it replaced. Repeating them would be quoting a rule that no longer stands.",
      },
      {
        question: "Which ordinance actually applies?",
        answer:
          "Ordinanza n. 26 of 9 August 2025, as amended by Ordinanza n. 46 of 25 September 2026. Note that the Comune's ZetaPass service page still links the 2022 ordinance as its service conditions, and that one was revoked by the 2025 measure.",
      },
      {
        question: "Can you guarantee the authorisation will be granted?",
        answer:
          "No. The ordinance provides for a specific authorisation to be issued on application; it does not say that any particular application succeeds, and neither do we. We also hold no Ravello-issued private-hire authorisation and claim no exemption.",
      },
      {
        question: "Is a request a booking?",
        answer:
          "No. Every journey on this site is an enquiry. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Give us the date early",
    body:
      "Ravello's access authorisation has to be applied for before the day of travel, and longer for a larger vehicle. The earlier the date reaches us, the more of the arrangement can be settled in the reply.",
    primaryCta: "Request a quotation",
    secondaryCta: {
      label: "Amalfi, and its sixty minutes",
      page: "amalfi",
    },
    note:
      "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: RavelloDestination = {
  meta: {
    title: "Transfer privati per Ravello",
    description:
      "Ravello indica per nome le aree in cui i passeggeri possono scendere e salire, e richiede che l'autorizzazione all'accesso sia prenotata il giorno prima del viaggio.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Napoli e la Campania",
    h1: "Transfer privati per Ravello",
    lead:
      "Ravello è l'unico comune di questa costiera la cui ordinanza indica per nome i luoghi in cui un passeggero può scendere ed essere prelevato. Ed è anche l'unico che non vi fa entrare un veicolo senza un'autorizzazione richiesta il giorno prima. Entrambe le cose contano, per un transfer, più del viaggio in sé.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Le quattro aree designate",
    facts: [
      { label: "Aree designate", value: "Quattro, per nome" },
      { label: "Termine di prenotazione", value: "Il giorno prima" },
      { label: "Norma di riferimento", value: "Ordinanza 26/2025" },
      { label: "Come modificata da", value: "Ordinanza 46/2026" },
    ],
  },

  areas: {
    id: "aree",
    eyebrow: "Indicate dall'ordinanza",
    heading: "Le quattro aree istituite per i passeggeri",
    lead:
      "L'ordinanza le istituisce come aree di carico e scarico passeggeri. Non descrive in quale punto al loro interno si collochi un veicolo, e nemmeno questa pagina lo fa.",
    items: [
      {
        term: "Largo Gradillo",
        detail:
          "Il largo prospiciente la chiesa di Santa Maria a Gradillo è riservato alle operazioni di salita e discesa dei passeggeri che utilizzano il servizio di noleggio con conducente, le navette del servizio pubblico locale, gli scuolabus, i taxi e le navette dei parcheggi privati. Gli autobus di linea e turistici ne sono esclusi anche se preventivamente autorizzati.",
      },
      {
        term: "Largo Boccaccio",
        detail:
          "Qui due stalli sono riservati al carico e scarico merci dalle 06:00 alle 09:30 e ai servizi di noleggio con conducente per la salita e discesa dei passeggeri dalle 09:30 alle 24:00. Altri due stalli servono al carico e scarico dei bagagli della clientela diretta agli alberghi, per un massimo di quindici minuti, con esposizione dell'ora di arrivo.",
      },
      {
        term: "Park Duomo",
        detail:
          "Indicato dall'ordinanza fra le quattro aree istituite per il carico e scarico dei passeggeri. L'ordinanza non stabilisce, in quanto abbiamo potuto leggere, ulteriori condizioni specifiche per esso.",
      },
      {
        term: "Piazza San Giovanni del Toro",
        detail:
          "Anch'essa indicata fra le quattro. Per i veicoli a noleggio con conducente fra 5,31 e 7,30 metri diretti qui per eventi religiosi o presso strutture ricettive in zona a traffico limitato, l'ordinanza di modifica richiede che l'istanza pervenga alla Polizia Locale almeno 48 ore prima, previo pagamento della tariffa ordinaria di carico e scarico.",
      },
    ],
    note:
      "Questi sono i nomi ufficiali e nulla di più. L'ordinanza individua i propri stalli rinviando alle planimetrie, la pagina della mappa ZTL del portale non restituisce alcun contenuto, e perciò qui non compaiono numeri di stallo, marciapiedi, ingressi, percorsi di avvicinamento o indicazioni a piedi.",
    source: ordIt,
  },

  booking: {
    id: "prenotazione",
    eyebrow: "La parte che viene prima di tutto",
    heading: "L'accesso si prenota il giorno di calendario precedente",
    lead:
      "È la cosa più utile da sapere su un transfer per Ravello, e la più facile da scoprire troppo tardi.",
    steps: [
      {
        title: "Serve una specifica autorizzazione",
        body: "L'ordinanza stabilisce che per l'accesso alle aree designate è obbligatoria la prenotazione, con rilascio di specifica autorizzazione. Non è questione di arrivare e trovare posto.",
      },
      {
        title: "Le istanze passano da un solo portale",
        body: "L'ordinanza indica una sola strada: il portale web del Comune all'indirizzo www.ravellozetapass.it. Le istanze non si presentano altrove.",
      },
      {
        title: "Il termine è il giorno prima del viaggio",
        body: "L'istanza va presentata entro il giorno di calendario antecedente la data del transito, unitamente al pagamento dei corrispettivi dovuti. Una richiesta in giornata non rispetta il termine pubblicato.",
      },
      {
        title: "L'autorizzazione viaggia con il veicolo",
        body: "Va esposta in modo ben visibile per tutta la durata del transito e della fermata: l'ordinanza precisa che vale anche all'interno dei parcheggi privati presenti nell'area.",
      },
      {
        title: "Alcuni casi richiedono più tempo",
        body: "Per i veicoli superiori a sei metri la richiesta va presentata almeno 48 ore prima e a cura della struttura ricettiva ospitante, indirizzata all'Ufficio di Polizia Locale. Le stesse 48 ore valgono per i veicoli NCC da 5,31 a 7,30 metri in piazza San Giovanni del Toro, nei casi descritti dall'ordinanza di modifica.",
      },
    ],
    note:
      "Presentare l'istanza non equivale a essere autorizzati. L'ordinanza prevede il rilascio di una specifica autorizzazione; né essa né questa pagina affermano che una determinata richiesta venga accolta. Il mancato pagamento della tariffa dovuta o la mancata esposizione dell'autorizzazione comportano le sanzioni del Codice della Strada e la rimozione del veicolo.",
    source: ordIt,
  },

  waiver: {
    id: "esenzioni",
    eyebrow: "Due obblighi, spesso confusi",
    heading: "Una tariffa esentata non è una prenotazione esentata",
    lead:
      "L'ordinanza esonera alcuni viaggi dal pagamento. Non ne esonera nessuno dall'autorizzazione.",
    columns: [
      {
        id: "authorisation",
        heading: "L'autorizzazione",
        subheading: "Richiesta in tutti i casi previsti dall'ordinanza",
        rows: [
          {
            term: "Sempre",
            detail:
              "Per l'accesso alle aree designate sono obbligatorie la prenotazione e una specifica autorizzazione. L'ordinanza lo stabilisce prima di dire qualsiasi cosa sul denaro.",
          },
          {
            term: "Per gli ospiti alloggiati",
            detail:
              "Dove la fermata è gratuita per i turisti alloggiati presso le strutture ricettive di Ravello, l'ordinanza di modifica mantiene l'obbligo della prenotazione e richiede che il numero di prenotazione sia inserito sulla piattaforma informatica dell'Ente a cura della struttura o del titolare di licenza NCC, taxi o parcheggio.",
          },
          {
            term: "Per gli operatori autorizzati dal Comune",
            detail:
              "Quando un'azienda è titolare di autorizzazione al noleggio con conducente rilasciata dal Comune di Ravello, il carico e scarico può avvenire senza pagamento della tariffa, ma l'ordinanza precisa che la richiesta di autorizzazione resta in ogni caso obbligatoria.",
          },
        ],
      },
      {
        id: "fee",
        heading: "La tariffa",
        subheading: "Dovuta in alcuni casi, esentata in altri",
        rows: [
          {
            term: "Che cos'è",
            detail:
              "Un corrispettivo comunale per l'autorizzazione all'accesso in zona a traffico limitato per il carico e scarico dei passeggeri. Lo stabilisce il Comune e al Comune è versato.",
          },
          {
            term: "Che cosa non è",
            detail:
              "Non è una tariffa di viaggio e non è nostra. Nulla in questa pagina è un prezzo per un trasferimento, e questa pagina non dice a chi faccia capo il corrispettivo comunale in una determinata prenotazione.",
          },
          {
            term: "Dove sono gli importi",
            detail:
              "Le fasce verificate sono nella sezione qui sotto, per lunghezza del veicolo e classe ambientale. Non costituiscono un listino completo: si veda la nota che le accompagna.",
          },
        ],
      },
    ],
    callout: {
      heading: "Non leggete un'esenzione come un permesso",
      body: "Nulla qui va inteso nel senso che un viaggio esente dal pagamento possa avvenire senza prenotazione, o che una prenotazione verrà accolta. I due obblighi sono distinti, e soltanto uno dei due viene talvolta meno.",
    },
    source: ordIt,
  },

  limits: {
    id: "limiti",
    eyebrow: "Dimensioni, e quanto fa pagare l'ordinanza",
    heading: "Limiti dimensionali e le fasce non ambigue",
    lead:
      "Pubblicate per lunghezza e classe ambientale. Leggete la nota qui sotto prima di considerarle un listino, perché non lo sono.",
    items: [
      {
        term: "Oltre 10,33 metri",
        detail: "Circolazione non consentita. L'ordinanza lo afferma senza condizioni.",
      },
      {
        term: "Oltre 3 metri di altezza o 6 metri di lunghezza",
        detail:
          "Circolazione vietata in entrambi i sensi di marcia nel tratto in direzione di Viale Parco della Rimembranza.",
      },
      {
        term: "Veicoli da 7,31 a 10,33 metri, Euro 5 e 6",
        detail:
          "80,00 € per l'autorizzazione al carico e scarico, secondo la tabella sostituita dall'ordinanza di modifica.",
      },
      {
        term: "Veicoli da 5,31 a 7,31 metri, Euro 5 e 6",
        detail: "60,00 €, secondo la stessa tabella sostituita.",
      },
      {
        term: "NCC ape calessino e mezzi elettrici a quattro ruote per trasporto persone",
        detail:
          "4,00 € a Largo Boccaccio, all'incrocio fra Via Parco della Rimembranza e Via della Marra e in Piazza San Giovanni del Toro: le tre località che l'ordinanza di modifica indica per questa categoria.",
      },
    ],
    note:
      "Volutamente non è un tariffario completo. L'ordinanza del 25 settembre 2026 ha sostituito l'intera tabella, e la tabella sostituita non contiene alcuna fascia per gli autoveicoli fino a nove posti e 5,30 metri di lunghezza — la categoria di un normale transfer privato — mentre un'altra clausola della stessa ordinanza continua a disciplinare quella categoria. Gli importi pubblicati in precedenza per essa appartengono a una tabella che non è più in vigore, perciò in questa pagina non compare alcun prezzo per un'auto ordinaria. Chiedetelo al Comune, oppure chiedetelo a noi e vi diremo che cosa ci viene richiesto.",
    source: ordIt,
  },

  meeting: {
    id: "incontro",
    eyebrow: "Il limite di ciò che si può pubblicare",
    heading: "I nomi ufficiali sono il massimo della precisione di questa pagina",
    body: "L'ordinanza individua i propri stalli rinviando alle planimetrie allegate, e la pagina della mappa ZTL del portale ZetaPass restituisce un documento vuoto: il collegamento è commentato nel codice stesso del sito. Possiamo quindi dirvi quali aree il Comune designa, non in quale punto al loro interno attenda un veicolo.",
    note: "Dove il vostro autista vi incontrerà effettivamente si conferma per il vostro viaggio, in base all'autorizzazione ottenuta. Non possediamo alcun permesso di Ravello né accessi particolari, e preferiamo indicare le quattro aree e fermarci lì piuttosto che inventarne un angolo.",
  },

  rule: {
    label: "Quali norme segue questa pagina, e quando sono state verificate",
    governing:
      "Norma di riferimento: Ordinanza n. 26 del 9 agosto 2025 del Comando Unico Polizia Locale Tramonti–Ravello, «Disciplina generale della circolazione stradale».",
    amendedBy:
      "Come modificata da: Ordinanza n. 46 del 25 settembre 2026, «Disciplina generale della circolazione stradale — Precisazioni e variazioni tariffarie», che dichiara di non avere carattere novativo e di lasciare inalterati gli elementi essenziali dei provvedimenti precedenti.",
    supersession:
      "Una discrepanza che vale la pena conoscere: la pagina di servizio ZetaPass del Comune propone ancora l'Ordinanza n. 13 del 2022 come condizioni di servizio. Quell'ordinanza è stata revocata e sostituita da quella del 2025, che lo afferma espressamente. Lo segnaliamo perché chi seguisse quel collegamento leggerebbe un documento superato; non stiamo sostenendo che il Comune abbia ritirato quella pagina.",
    unresolvedTariff:
      "Perché non compare alcun prezzo per un'auto ordinaria: la modifica del 2026 ha sostituito la tabella tariffaria, e la tabella sostituita non prevede alcuna fascia per gli autoveicoli fino a nove posti e 5,30 metri. Gli importi pubblicati per quella categoria prima della modifica appartengono a una tabella non più in vigore, perciò non sono riprodotti qui in alcuna forma.",
    verifiedOn:
      "Le affermazioni normative di questa pagina sono state verificate l'ultima volta il 28 ottobre 2026, sulle ordinanze pubblicate dal portale ZetaPass del Comune.",
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo a Ravello",
    body: "Organizziamo transfer in Campania, compresa la strada della Costiera Amalfitana. Se un determinato viaggio da o per Ravello sia organizzabile, quale veicolo risulti adatto rispetto alle fasce di lunghezza e classe ambientale dell'ordinanza e come si ottenga l'autorizzazione per la vostra data si definiscono nella risposta alla vostra richiesta. Non sosteniamo di essere titolari di un'autorizzazione al noleggio con conducente rilasciata dal Comune di Ravello, di rientrare in alcuna esenzione né di poter garantire il rilascio di un'autorizzazione.",
  },

  send: {
    id: "da-inviare",
    heading: "Cosa inviare con una richiesta per Ravello",
    lead:
      "Le prime due voci contano qui più che altrove in costiera, perché la prenotazione va fatta prima del giorno del viaggio.",
    items: [
      "La data, e con quanto anticipo ce la comunicate",
      "L'indirizzo di destinazione, e se si trova in zona a traffico limitato",
      "Se alloggiate a Ravello, e presso quale struttura",
      "Da dove partite",
      "Passeggeri e bagagli",
    ],
    note:
      "Comunicateci la data il prima possibile. Il termine pubblicato per l'autorizzazione all'accesso è il giorno di calendario precedente il viaggio, e per i veicoli superiori a sei metri servono quarantotto ore e una richiesta presentata dalla struttura che vi ospita.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Nei dintorni",
    items: [
      {
        page: "amalfi",
        label: "Transfer per Amalfi",
        detail:
          "Più in basso sulla costiera, e regolata invece dall'orologio: sessanta minuti dentro e quattro vie in cui la fermata è vietata del tutto.",
      },
      {
        page: "positano",
        label: "Transfer per Positano",
        detail:
          "Il terzo comune costiero con regole pubblicate, e di un terzo tipo ancora: una tariffa che dipende da quanti posti ha il veicolo.",
      },
      {
        page: "naples",
        label: "Transfer a Napoli",
        detail:
          "Il riferimento regionale: quattro punti d'arrivo con un solo nome, e quale intendete davvero.",
      },
      {
        page: "nap-airport",
        label: "Aeroporto di Napoli Capodichino (NAP)",
        detail: "La via d'accesso abituale alla regione, e le regole al suo marciapiede.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Ravello",
    lead: "In gran parte sulla prenotazione e su dove un'auto possa fermarsi.",
    items: [
      {
        question: "Dove può farci scendere l'auto a Ravello?",
        answer:
          "In una delle quattro aree che l'ordinanza istituisce per il carico e scarico dei passeggeri: Largo Gradillo, Largo Boccaccio, Park Duomo e Piazza San Giovanni del Toro. Per accedervi serve un'autorizzazione prenotata in anticipo. In quale punto di un'area si collochi il veicolo questa pagina non può dirlo: l'ordinanza rinvia alle planimetrie e la pagina della mappa del portale è vuota.",
      },
      {
        question: "Con quanto anticipo va prenotata?",
        answer:
          "Entro il giorno di calendario precedente la data del transito, tramite il portale del Comune ravellozetapass.it. Per i veicoli superiori a sei metri servono almeno quarantotto ore, con la richiesta presentata dalla struttura che vi ospita e indirizzata alla Polizia Locale.",
      },
      {
        question: "Alloggiamo in un albergo a Ravello: è gratuito?",
        answer:
          "L'ordinanza prevede che per i turisti alloggiati presso le strutture ricettive di Ravello la fermata per il carico e scarico possa avvenire senza pagamento della tariffa. La prenotazione però non decade: l'ordinanza di modifica richiede che il numero di prenotazione sia inserito sulla piattaforma del Comune a cura della struttura o dell'operatore titolare di licenza. Una tariffa esentata non è un'autorizzazione esentata.",
      },
      {
        question: "Quanto costa l'autorizzazione all'accesso?",
        answer:
          "Dipende dal veicolo, e la tabella pubblicata non è completa per quanto ci riguarda. Prevede 80,00 € per i veicoli da 7,31 a 10,33 metri in classe Euro 5 o 6, 60,00 € per quelli da 5,31 a 7,31 metri, 4,00 € per ape calessino e mezzi elettrici a quattro ruote per trasporto persone in tre località indicate, e nessuna circolazione oltre i 10,33 metri. Non contiene alcuna fascia per un'auto ordinaria fino a nove posti, perciò non ne pubblichiamo l'importo.",
      },
      {
        question: "Perché non riportate il vecchio prezzo per un'auto?",
        answer:
          "Perché è stato superato. L'ordinanza del 25 settembre 2026 ha sostituito la tabella tariffaria, e gli importi pubblicati per le auto ordinarie prima di allora appartengono alla tabella che essa ha sostituito. Riportarli significherebbe citare una norma non più in vigore.",
      },
      {
        question: "Quale ordinanza si applica davvero?",
        answer:
          "L'Ordinanza n. 26 del 9 agosto 2025, come modificata dall'Ordinanza n. 46 del 25 settembre 2026. Si noti che la pagina di servizio ZetaPass del Comune collega ancora l'ordinanza del 2022 come condizioni di servizio, e che quella è stata revocata dal provvedimento del 2025.",
      },
      {
        question: "Potete garantire che l'autorizzazione venga rilasciata?",
        answer:
          "No. L'ordinanza prevede il rilascio di una specifica autorizzazione su istanza; non afferma che una determinata richiesta venga accolta, e non lo affermiamo neppure noi. Non siamo inoltre titolari di un'autorizzazione NCC rilasciata dal Comune di Ravello e non rivendichiamo alcuna esenzione.",
      },
      {
        question: "Una richiesta è una prenotazione?",
        answer:
          "No. Ogni viaggio su questo sito è una richiesta. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Comunicateci la data per tempo",
    body:
      "L'autorizzazione all'accesso di Ravello va richiesta prima del giorno del viaggio, e con più anticipo per un veicolo più grande. Prima ci arriva la data, più cose si possono definire nella risposta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Amalfi e i suoi sessanta minuti",
      page: "amalfi",
    },
    note:
      "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const ravello = { en, it };
