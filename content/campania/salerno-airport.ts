import type { Locale } from "@/lib/site";
import type { SalernoAirport } from "./types";

/**
 * Salerno Costa d'Amalfi Airport.
 *
 * ── One verified fact, carrying the page ──────────────────────────────────
 * The operator publishes this, and it was rechecked verbatim on 27 October
 * 2026 immediately before writing:
 *
 *   "For security reasons Passengers' Terminal of Salerno Costa d'Amalfi and
 *    Cilento Airport is closed from 22:30 to 5:00, except for exceptional
 *    flight delays."
 *
 * That is unusually useful on a transfer page. It is not a curiosity about
 * opening hours — it decides what a passenger can do if something goes wrong
 * late at night, because the building they would otherwise wait in is shut.
 *
 * The page states it plainly and draws the one honest consequence: do not
 * plan on waiting inside. It does **not** go further and tell anyone they
 * will be left outside, or promise that a car solves it.
 *
 * ── What it must not say ──────────────────────────────────────────────────
 * No pickup point: the operator publishes none. No distance, journey time or
 * fare: none is published. No flight schedule or airline coverage: the
 * operator's news headlines mention carriers but publish no routes here, and
 * one secondary report contradicts the expansion story. And **no claim that
 * this airport is the designated alternative during the Naples closure** —
 * its own site does not mention that closure at all.
 *
 * See `docs/campania-source-verification.md` §2, S1–S9.
 */

const sourceEn = {
  text: "The airport's official name, its operator and the terminal's overnight closure are published by GE.S.A.C. S.p.A., which also operates Naples airport. Its site was read on 27 October 2026 and the closing window was rechecked verbatim immediately before this page was written. No fare, distance, journey time, route list or collection point appears here, because the operator publishes none:",
  linkText: "the airport publishes its own information",
  href: "https://www.aeroportosalerno.it/en/",
};

const sourceIt = {
  text: "La denominazione ufficiale dell'aeroporto, il gestore e la chiusura notturna del terminal sono pubblicati da GE.S.A.C. S.p.A., che gestisce anche l'aeroporto di Napoli. Il suo sito è stato consultato il 27 ottobre 2026 e la fascia di chiusura è stata riverificata testualmente subito prima di scrivere questa pagina. Qui non compaiono tariffe, distanze, durate, elenchi di rotte o punti di prelievo, perché il gestore non ne pubblica:",
  linkText: "l'aeroporto pubblica le proprie informazioni",
  href: "https://www.aeroportosalerno.it/it/",
};

const en: SalernoAirport = {
  meta: {
    title: "Salerno Costa d'Amalfi Airport transfers",
    description:
      "The passenger terminal closes overnight, which changes what a late arrival can do. What the operator publishes, and what it does not.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Arriving in Campania",
    h1: "Salerno Costa d'Amalfi Airport",
    lead: "Campania's second airport, run by the same company as Naples, and the one with a fact worth knowing before you book a late flight: its terminal does not stay open through the night.",
    primaryCta: "Request a quotation",
    secondaryCta: "The overnight closure",
    facts: [
      { label: "Operator", value: "GE.S.A.C. S.p.A." },
      { label: "Terminal closed", value: "22:30 – 05:00" },
      { label: "Exception", value: "Exceptional delays" },
    ],
  },

  terminal: {
    id: "terminal",
    eyebrow: "The fact that shapes a late arrival",
    heading: "The terminal closes overnight",
    lead: "Published by the operator, and rechecked word for word before this page went up.",
    paragraphs: [
      "The airport states, for security reasons, that the passengers' terminal of Salerno Costa d'Amalfi and Cilento Airport is closed from 22:30 to 5:00, except for exceptional flight delays. That is the operator's own wording, and it is more consequential than an opening-hours note usually is.",
      "Most airport pages treat the building as a constant: something is always open, there is always somewhere to sit. Here the operator says otherwise for six and a half hours of every night. If your flight lands close to that window, or is delayed into it, the practical question stops being how to get into town and becomes where you will actually be standing.",
      "The sensible response is simply to plan the onward leg rather than improvise it. Send the flight number with your request so an arrangement exists before you land; if the flight then moves, tell us. What this page will not do is promise that a car removes the problem, or describe where one would wait — the operator publishes no collection arrangement of any kind.",
    ],
    caution: {
      heading: "What this page does not claim",
      body: "That you may remain inside the terminal overnight — the operator says it is closed, and the exception it names is for exceptional flight delays rather than for convenience. Nor that this airport is the official alternative while Naples is closed: its own site does not mention that closure at all, and we are not going to speak for it. No pickup point, distance, journey time, fare or route list appears here either, because the operator publishes none.",
    },
    source: sourceEn,
  },

  ownerClaim: {
    label: "Our own position, not a published fact",
    heading: "What we cover here",
    body: "We arrange transfers in Campania, including the Amalfi Coast road. That is our own operating position — the airport publishes nothing about us, and nothing here should be read as an arrangement with it, an endorsement by it, or permission to wait anywhere in particular. Where a driver meets you is settled in the reply to your request.",
  },

  send: {
    id: "request",
    heading: "What to send",
    lead: "Four things, and the first matters more here than at most airports.",
    items: [
      "The flight number and the date.",
      "The scheduled arrival time — particularly if it is close to 22:30.",
      "The full destination address.",
      "How many passengers and how much luggage.",
    ],
    note: "A late arrival is the case worth flagging in your own words. The terminal's hours are the operator's and we cannot change them, but an arrangement made in advance is a different proposition from one improvised at a closed door.",
  },

  onward: {
    id: "onward",
    heading: "From this airport",
    items: [
      {
        page: "naples",
        label: "Private transfers in Naples",
        detail:
          "The city, its four separate arrival points, and the airport notice that currently matters there.",
      },
      {
        page: "naples-cruise-port",
        label: "The cruise terminal at the Stazione Marittima",
        detail:
          "If a ship is the reason you are in Campania, this is the quay to name.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "About this airport",
    lead: "Short, because the operator publishes less than you might expect.",
    items: [
      {
        question: "What happens if I land after 22:30?",
        answer:
          "The operator says the passengers' terminal is closed from 22:30 to 5:00, except for exceptional flight delays. So plan the onward leg before you travel rather than after you land. We will not pretend to know what the airport will do on a given night — that is theirs to decide, not ours to promise.",
      },
      {
        question: "Where will the driver meet me?",
        answer:
          "Settled in the reply to your request. The operator publishes no collection point for cars with a driver, so nothing is described here as though it were a fixed arrangement.",
      },
      {
        question: "How far is it, and how long does it take?",
        answer:
          "No distance or journey time appears on this page. The operator publishes none, and nor does any other source consulted. It would depend on where you are going in any case.",
      },
      {
        question: "Is this the airport to use while Naples is closed?",
        answer:
          "We are not going to say so. Naples's operator has announced a runway closure for November 2026 and names no substitute; this airport's own site does not mention the closure at all. Ask your airline where it is actually flying you, and tell us — we arrange the car around the answer.",
      },
      {
        question: "Which airlines fly here?",
        answer:
          "No route or airline list appears on this page. The operator's news mentions carriers but publishes no schedule we could cite, and the reports that exist do not agree with one another. Your airline is the authority on your own flight.",
      },
    ],
  },

  closing: {
    id: "quote",
    heading: "Flight, time, and where you are going",
    body: "Especially the time. This is the one airport in the cluster where the hour you land changes what is sensible, and an arrangement made in advance is worth more here than most places.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Naples", page: "naples" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: SalernoAirport = {
  meta: {
    title: "Transfer dall'aeroporto di Salerno Costa d'Amalfi",
    description:
      "Il terminal passeggeri chiude di notte, e questo cambia ciò che può fare un arrivo in tarda serata. Che cosa pubblica il gestore e che cosa no.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Arrivare in Campania",
    h1: "Aeroporto di Salerno Costa d'Amalfi",
    lead: "Il secondo aeroporto della Campania, gestito dalla stessa società di Napoli, e quello con un dato che conviene conoscere prima di prenotare un volo in tarda serata: il terminal non resta aperto tutta la notte.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "La chiusura notturna",
    facts: [
      { label: "Gestore", value: "GE.S.A.C. S.p.A." },
      { label: "Terminal chiuso", value: "22.30 – 5.00" },
      { label: "Eccezione", value: "Ritardi eccezionali" },
    ],
  },

  terminal: {
    id: "terminal",
    eyebrow: "Il dato che condiziona un arrivo tardi",
    heading: "Il terminal chiude di notte",
    lead: "Lo pubblica il gestore, ed è stato riverificato parola per parola prima che questa pagina venisse messa online.",
    paragraphs: [
      "L'aeroporto dichiara che, per ragioni di sicurezza, il terminal passeggeri dell'aeroporto di Salerno Costa d'Amalfi e del Cilento è chiuso dalle 22.30 alle 5.00, salvo ritardi eccezionali dei voli. È la formulazione del gestore, ed è più rilevante di quanto una nota sugli orari di apertura di solito sia.",
      "Quasi tutte le pagine aeroportuali danno l'edificio per scontato: qualcosa è sempre aperto, un posto dove sedersi c'è sempre. Qui il gestore dice il contrario per sei ore e mezza ogni notte. Se il vostro volo atterra vicino a quella fascia, o vi slitta dentro, la domanda pratica non è più come raggiungere il centro ma dove vi troverete effettivamente ad aspettare.",
      "La risposta sensata è semplicemente organizzare il proseguimento invece di improvvisarlo. Inviate il numero del volo con la richiesta, così l'accordo esiste prima che atterriate; se poi il volo si sposta, diteccelo. Quello che questa pagina non farà è promettere che un'auto risolva il problema, o descrivere dove attenderebbe: il gestore non pubblica alcuna modalità di prelievo.",
    ],
    caution: {
      heading: "Che cosa questa pagina non afferma",
      body: "Che possiate restare dentro il terminal durante la notte: il gestore dice che è chiuso, e l'eccezione che indica riguarda ritardi eccezionali dei voli, non la comodità. Né che questo scalo sia l'alternativa ufficiale mentre Napoli è chiusa: il suo sito non cita affatto quella chiusura, e non parleremo noi al posto suo. Qui non compaiono nemmeno punti di prelievo, distanze, durate, tariffe o elenchi di rotte, perché il gestore non ne pubblica.",
    },
    source: sourceIt,
  },

  ownerClaim: {
    label: "La nostra posizione, non un dato pubblicato",
    heading: "Che cosa copriamo qui",
    body: "Organizziamo transfer in Campania, compresa la strada della Costiera Amalfitana. È la nostra posizione operativa: l'aeroporto non pubblica nulla sul nostro conto, e niente qui va letto come un accordo con esso, un suo avallo o un permesso di attendere in un punto preciso. Dove l'autista vi incontri si definisce nella risposta alla vostra richiesta.",
  },

  send: {
    id: "richiesta",
    heading: "Che cosa inviare",
    lead: "Quattro cose, e la prima qui conta più che nella maggior parte degli aeroporti.",
    items: [
      "Numero del volo e data.",
      "Orario previsto di arrivo, soprattutto se è vicino alle 22.30.",
      "L'indirizzo completo di destinazione.",
      "Quanti passeggeri e quanti bagagli.",
    ],
    note: "Un arrivo in tarda serata è il caso da segnalare con parole vostre. Gli orari del terminal sono del gestore e non possiamo cambiarli, ma un accordo preso in anticipo è un'altra cosa rispetto a uno improvvisato davanti a una porta chiusa.",
  },

  onward: {
    id: "proseguimenti",
    heading: "Da questo aeroporto",
    items: [
      {
        page: "naples",
        label: "Transfer privati a Napoli",
        detail:
          "La città, i suoi quattro punti d'arrivo distinti e l'avviso aeroportuale che al momento vi riguarda.",
      },
      {
        page: "naples-cruise-port",
        label: "Il terminal crociere alla Stazione Marittima",
        detail:
          "Se siete in Campania per una nave, è questa la banchina da indicare.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo aeroporto",
    lead: "Poche, perché il gestore pubblica meno di quanto ci si aspetti.",
    items: [
      {
        question: "Che succede se atterro dopo le 22.30?",
        answer:
          "Il gestore dichiara che il terminal passeggeri è chiuso dalle 22.30 alle 5.00, salvo ritardi eccezionali dei voli. Organizzate quindi il proseguimento prima di partire, non dopo l'atterraggio. Non fingeremo di sapere che cosa farà l'aeroporto in una determinata notte: lo decide lui, non lo promettiamo noi.",
      },
      {
        question: "Dove mi aspetta l'autista?",
        answer:
          "Si definisce nella risposta alla vostra richiesta. Il gestore non pubblica alcun punto di prelievo per le auto con conducente: qui non ne descriviamo nessuno come se fosse fissato.",
      },
      {
        question: "Quanto dista e quanto ci vuole?",
        answer:
          "Su questa pagina non compaiono distanze né durate. Il gestore non ne pubblica, e nemmeno le altre fonti consultate. Dipenderebbe comunque da dove siete diretti.",
      },
      {
        question: "È questo l'aeroporto da usare mentre Napoli è chiusa?",
        answer:
          "Non lo diremo noi. Il gestore di Napoli ha annunciato una chiusura della pista per novembre 2026 e non indica alcun sostituto; il sito di questo scalo non cita affatto quella chiusura. Chiedete alla vostra compagnia dove vi fa volare davvero e diteccelo: l'auto la organizziamo sulla risposta.",
      },
      {
        question: "Quali compagnie volano qui?",
        answer:
          "Su questa pagina non compare alcun elenco di rotte o compagnie. Le notizie del gestore citano vettori ma non pubblicano un orario che potessimo riportare, e le fonti esistenti non concordano fra loro. Sul vostro volo l'autorità è la vostra compagnia aerea.",
      },
    ],
  },

  closing: {
    id: "preventivo",
    heading: "Volo, orario e destinazione",
    body: "Soprattutto l'orario. È l'unico aeroporto della sezione in cui l'ora in cui atterrate cambia ciò che è sensato fare, e un accordo preso in anticipo qui vale più che altrove.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Napoli", page: "naples" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const salernoAirport: Record<Locale, SalernoAirport> = { en, it };
