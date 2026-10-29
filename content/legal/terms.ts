import type { LocalizedLegal } from "./types";

/**
 * Terms and Conditions — draft.
 *
 * ── The two structural facts these terms are written around ───────────────
 * First, this website arranges inquiries; the transport is provided by a
 * separate operating business. That has been confirmed by the owner, and it
 * changes the shape of the document: the website is not the carrier, and
 * these terms must not read as if it were. The operating business is not
 * named, because its identity has not been confirmed in a publishable form.
 *
 * Second, nothing can currently be requested, quoted, booked or paid for.
 * There is no form, no contact channel and no payment arrangement. So these
 * terms describe the arrangement that will apply once those exist, and say so
 * rather than pretending to govern transactions that cannot happen.
 *
 * ── What is deliberately absent ───────────────────────────────────────────
 * No governing law, no dispute venue, no VAT rate, no blanket exclusion of
 * liability. The first two are not known; the third would be invented; the
 * fourth would purport to override consumer protections that cannot be
 * contracted away, which is both wrong and, in most jurisdictions,
 * ineffective.
 */
export const terms: LocalizedLegal = {
  en: {
    meta: {
      title: "Terms and Conditions",
      description:
        "What this website does, the difference between a quotation request and a confirmed booking, and the terms that will apply to a journey. A working draft.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Terms and Conditions",
    lead:
      "What this website is, what it is not, and the terms that will apply to a journey arranged through it.",

    draft: {
      label: "Draft — not in force",
      body:
        "These terms are a working draft prepared ahead of launch. They have not been reviewed by a lawyer, they are not yet in force, and several provisions — including the governing law — depend on business facts that have not been confirmed. Those are marked where they appear.",
    },

    status: {
      stateLabel: "Status",
      state: "Draft, pending owner confirmation and legal review",
      draftedLabel: "Drafted",
      drafted: "28 October 2026",
      effectiveLabel: "In force from",
      effective: "Not yet in force",
    },

    tocLabel: "On this page",

    sections: [
      {
        id: "scope",
        heading: "1. Scope",
        paragraphs: [
          "These terms will govern the use of this website and the arrangement of private transfers requested through it, once those arrangements can be made.",
          "At present they cannot. There is no quotation form, no contact channel and no payment arrangement on this website, so no request can be sent, no booking can be made and no payment can be taken. These terms are published in advance so the position is clear before that changes.",
        ],
      },
      {
        id: "what-this-is",
        heading: "2. What this website is",
        paragraphs: [
          "This website is an independent service through which a traveller can describe a journey in Italy and ask for it to be quoted. It publishes information about reaching places by road — where a vehicle may go, where it may stop, and which authority says so — and it takes the details of a journey so that a quotation can be prepared.",
          "It is operated independently. It is not part of, and does not trade as, any other transfer website or business.",
          "The transport itself is provided by a separate operating business. This website does not own vehicles, does not employ drivers and does not itself carry passengers. It makes no claim to hold transport licences, permits or insurance of its own.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "The operating business that provides the transport is not named here, and the party a customer contracts with for the journey has not been confirmed. Section 13 cannot be completed, and these terms cannot come into force, until it is.",
        },
      },
      {
        id: "request-vs-booking",
        heading: "3. A request is not a booking",
        paragraphs: [
          "This is the most important term on the page, and it is already stated throughout this website.",
          "Sending a request is asking a question. It does not reserve a vehicle, it does not hold a date, and it does not create a contract. A journey is booked only when it has been confirmed in writing, with the journey, the vehicle, the price and the meeting arrangement set out, and you have agreed to that confirmation.",
          "Until that written confirmation exists, nothing is owed by you and nothing is promised to you.",
        ],
      },
      {
        id: "availability",
        heading: "4. Availability, price and written confirmation",
        paragraphs: [
          "No route, date, vehicle type or pickup arrangement is guaranteed in advance of being asked about. Availability is established when a quotation is prepared, not when a page is read.",
          "A quotation will state the journey, the vehicle, the price, what the price covers and anything about the request that cannot be done as asked. A quotation is valid for the journey it describes; a change to the journey may change the price or the availability.",
        ],
        bullets: [
          "Prices are quoted for an individual journey, not taken from a published tariff.",
          "No page on this website quotes a fare for a route.",
          "Where a public authority charges for access to a restricted area, that is the authority's charge and is identified as such on the relevant page.",
        ],
      },
      {
        id: "payment",
        heading: "5. Payment",
        paragraphs: [
          "No payment arrangement exists on this website today. Nothing can be paid for here, and no card or bank details are collected by it.",
          "When bookings begin, payment timing and method may vary by destination and by individual booking. Some journeys may require payment in advance; others may be payable to the driver by cash or card. The method that applies to your journey will be stated in your quotation or booking confirmation.",
        ],
        bullets: [
          "The total amount payable will be stated before you are asked to confirm.",
          "The payment method and any deadline for payment will be stated before you are asked to confirm.",
          "No fee is added for administration, for card handling or for arranging the booking unless it is stated in the quotation.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "How payment will be taken, and by which party, has not been decided. Until it is, this section describes an intention rather than a process, and the Privacy Policy cannot name a payment provider either.",
        },
      },
      {
        id: "tax",
        heading: "6. VAT and other charges",
        paragraphs: [
          "Where VAT or another tax applies to a journey, it will be identified in the quotation or booking confirmation, and the total shown to you will be the total payable.",
          "No tax rate is stated on this page, and no assumption is made about whether tax applies to any particular booking or to any particular payment method. Those depend on the journey and on the party providing the transport, and will be stated for your booking rather than assumed from this page.",
        ],
      },
      {
        id: "your-responsibilities",
        heading: "7. What you are responsible for",
        paragraphs: [
          "A quotation is only as good as the journey it describes, and most of what makes a transfer go wrong is a detail that was not given.",
        ],
        bullets: [
          "Giving both addresses in full, including a street and a number where one exists.",
          "Giving the correct date and time, and saying which time zone you are quoting from if you are booking from abroad.",
          "Giving the flight, train or ship number where one applies, so that a delay can be worked around.",
          "Giving the true number of passengers and the true number of bags, including cabin bags. Luggage decides the vehicle more often than passenger numbers do.",
          "Telling us in advance about anything unusual: a child and their age, a wheelchair, a pet, bulky equipment, a stop along the way, or an address with restricted access.",
          "Being at the agreed place at the agreed time, and being reachable on the number you gave.",
        ],
      },
      {
        id: "changes",
        heading: "8. Changes to a confirmed booking",
        paragraphs: [
          "If something about your journey changes, tell us as soon as you know. A change to the date, the time, the addresses, the party or the luggage may change the price, the vehicle or whether the journey can be covered at all.",
          "A change takes effect only when it has been confirmed in writing, in the same way the original booking was. An unconfirmed change is not a change.",
        ],
      },
      {
        id: "waiting",
        heading: "9. Waiting time and no-shows",
        paragraphs: [
          "For an airport pickup based on an arriving flight, the included waiting period is 60 minutes from the flight's actual landing time — not its scheduled arrival time.",
          "Waiting arrangements for other pickup points have not been set, and this page does not invent one. Where your journey starts somewhere other than an airport arrivals area, the waiting arrangement will be stated in your booking confirmation.",
          "The full rules, including what counts as a no-show, are in the Cancellation and Refund Policy.",
        ],
      },
      {
        id: "cancellation",
        heading: "10. Cancellation and refunds",
        paragraphs: [
          "Cancellation deadlines, cancellation charges, no-show charges and refund handling are set out in the Cancellation and Refund Policy, which forms part of these terms.",
          "In summary, and subject to that policy: a cancellation more than 24 hours before the confirmed pickup time may qualify for a refund of an advance payment; a cancellation at or within 24 hours is intended to attract a charge equal to the full confirmed price. Those provisions are themselves drafts awaiting legal review.",
        ],
      },
      {
        id: "disruption",
        heading: "11. Delays and events outside reasonable control",
        paragraphs: [
          "Road journeys are affected by traffic, weather, roadworks, accidents, demonstrations, official closures and similar events. Where a journey is delayed by something of that kind, the delay does not by itself mean the service was not provided.",
          "That is a narrow statement and it is meant narrowly. It does not mean that every delay is excused, and it does not apply where the confirmed service was not provided at all — where no vehicle arrived, where the vehicle was unsuitable for the party and luggage that had been confirmed, or where the journey was not completed. Those are failures to provide the service and are dealt with as such.",
        ],
        pending: {
          label: "Legal review required",
          body:
            "The boundary between an excused delay and a failure to provide the service needs legal review, as does the question of what remedies apply in each case under the law that will govern these terms.",
        },
      },
      {
        id: "complaints",
        heading: "12. Complaints",
        paragraphs: [
          "If something goes wrong, the first step is to say so in writing, with the booking details and what happened, as soon as you reasonably can.",
          "No complaints address exists on this website yet, and no response time is promised here because none has been set. A complaints channel and a target for acknowledging complaints will be published before bookings begin.",
        ],
        bullets: [
          "Complaints contact: [TO BE CONFIRMED — email address or other channel]",
        ],
      },
      {
        id: "liability",
        heading: "13. Responsibility and your rights as a consumer",
        paragraphs: [
          "Nothing in these terms removes or limits any right you have as a consumer that cannot lawfully be removed or limited. Where any provision here conflicts with such a right, the right applies and the provision does not.",
          "The extent of responsibility, and which party carries it for what, depends on who you contract with for the journey and on the law that governs that contract. Neither has been confirmed, so this page does not state a limit of liability. A limitation written before those facts were known would be guesswork dressed as a term.",
        ],
        pending: {
          label: "Legal review required",
          body:
            "The contracting party, the allocation of responsibility between this website and the operating business, and any permissible limitation of liability all need to be settled with legal advice before these terms come into force.",
        },
      },
      {
        id: "content",
        heading: "14. The content of this website",
        paragraphs: [
          "The text, structure, illustrations and layout of this website belong to its operator. You are welcome to read it, quote it with attribution and link to it. You may not republish it wholesale as your own.",
          "Where a page describes a rule set by a public authority, that rule belongs to the authority, not to this site, and the page names the authority and links to its document. Those documents are the authoritative version and may change without this site knowing. Pages that state a dated rule carry the date on which it was last verified.",
        ],
      },
      {
        id: "privacy",
        heading: "15. Privacy",
        paragraphs: [
          "How personal information is handled is set out in the Privacy Policy. At present the website collects nothing: there is no form, no contact channel, no analytics and no cookies.",
        ],
      },
      {
        id: "changes-to-terms",
        heading: "16. Changes to these terms",
        paragraphs: [
          "These terms carry the date they were drafted and will carry the date they come into force. The terms that apply to a booking are the ones in force when that booking was confirmed, not a later version.",
        ],
      },
      {
        id: "law",
        heading: "17. Governing law and disputes",
        paragraphs: [
          "No governing law or dispute venue is stated here, because neither has been determined.",
          "The owner is established outside the European Union and the European Economic Area, while the journeys are in Italy and many customers will be consumers resident in the EU. Consumer protection law commonly gives a consumer rights in their own country of residence regardless of what a contract says, so this is not a clause that can be settled by choosing a convenient jurisdiction.",
        ],
        bullets: [
          "Governing law: [TO BE CONFIRMED — requires legal advice]",
          "Dispute resolution: [TO BE CONFIRMED — requires legal advice]",
        ],
        pending: {
          label: "Legal review required",
          body:
            "This is the single provision most likely to be wrong if guessed. It needs advice that takes account of the owner's place of establishment, the place of performance and the consumer-protection rules of the customer's country.",
        },
      },
      {
        id: "contact",
        heading: "18. Contact",
        paragraphs: [
          "There is no contact channel on this website yet. When one exists it will be published here and in the Privacy Policy.",
        ],
        bullets: ["Contact: [TO BE CONFIRMED — email address or other channel]"],
      },
    ],

    related: {
      heading: "The other policies",
      items: [
        {
          page: "privacy",
          label: "Privacy Policy",
          detail: "What is collected, what is not, and what would happen to it.",
        },
        {
          page: "cancellation",
          label: "Cancellation and Refund Policy",
          detail: "Deadlines, charges, airport waiting time and refund handling.",
        },
        {
          page: "about",
          label: "About us",
          detail: "What this site is for, and how a request becomes a journey.",
        },
      ],
    },
  },

  it: {
    meta: {
      title: "Termini e condizioni",
      description:
        "Che cosa fa questo sito, la differenza fra una richiesta di preventivo e una prenotazione confermata e i termini che si applicheranno a un viaggio. Bozza di lavoro.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Termini e condizioni",
    lead:
      "Che cos'è questo sito, che cosa non è e quali termini si applicheranno a un viaggio organizzato tramite esso.",

    draft: {
      label: "Bozza — non in vigore",
      body:
        "Questi termini sono una bozza di lavoro preparata prima del lancio. Non sono stati esaminati da un legale, non sono ancora in vigore e diverse disposizioni — fra cui la legge applicabile — dipendono da dati aziendali non ancora confermati, segnalati dove compaiono.",
    },

    status: {
      stateLabel: "Stato",
      state: "Bozza, in attesa di conferma del titolare e di revisione legale",
      draftedLabel: "Redatti il",
      drafted: "28 ottobre 2026",
      effectiveLabel: "In vigore dal",
      effective: "Non ancora in vigore",
    },

    tocLabel: "In questa pagina",

    sections: [
      {
        id: "ambito",
        heading: "1. Ambito",
        paragraphs: [
          "Questi termini disciplineranno l'uso di questo sito e l'organizzazione dei transfer privati richiesti attraverso di esso, quando sarà possibile organizzarli.",
          "Al momento non lo è. Su questo sito non esistono un modulo di preventivo, un canale di contatto o una modalità di pagamento: non si può inviare una richiesta, non si può prenotare e non si può pagare. Questi termini vengono pubblicati in anticipo perché la posizione sia chiara prima che tutto ciò cambi.",
        ],
      },
      {
        id: "che-cos-e",
        heading: "2. Che cos'è questo sito",
        paragraphs: [
          "Questo sito è un servizio indipendente attraverso il quale chi viaggia può descrivere un tragitto in Italia e chiederne il preventivo. Pubblica informazioni sul raggiungere i luoghi su strada — dove un veicolo può andare, dove può fermarsi e chi lo stabilisce — e raccoglie i dati di un viaggio perché se ne possa preparare un preventivo.",
          "È gestito in modo indipendente. Non fa parte di alcun altro sito o attività di transfer e non opera con un altro marchio.",
          "Il trasporto è svolto da un'attività operativa distinta. Questo sito non possiede veicoli, non impiega conducenti e non trasporta esso stesso passeggeri. Non rivendica licenze, autorizzazioni o coperture assicurative di trasporto proprie.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "L'attività operativa che svolge il trasporto non è indicata qui, e la parte con cui il cliente conclude il contratto per il viaggio non è stata confermata. Il punto 13 non può essere completato, e questi termini non possono entrare in vigore, finché non lo sarà.",
        },
      },
      {
        id: "richiesta-prenotazione",
        heading: "3. Una richiesta non è una prenotazione",
        paragraphs: [
          "È il termine più importante della pagina, ed è già scritto ovunque su questo sito.",
          "Inviare una richiesta è fare una domanda. Non riserva un veicolo, non blocca una data e non crea un contratto. Un viaggio è prenotato soltanto quando è stato confermato per iscritto, con il viaggio, il veicolo, il prezzo e le modalità di incontro indicati, e voi avete accettato quella conferma.",
          "Finché quella conferma scritta non esiste, non dovete nulla e non vi è promesso nulla.",
        ],
      },
      {
        id: "disponibilita",
        heading: "4. Disponibilità, prezzo e conferma scritta",
        paragraphs: [
          "Nessuna tratta, data, categoria di veicolo o modalità di presa in carico è garantita prima di essere richiesta. La disponibilità si accerta quando si prepara un preventivo, non quando si legge una pagina.",
          "Il preventivo indicherà il viaggio, il veicolo, il prezzo, che cosa il prezzo comprende e che cosa della richiesta non si può fare come formulata. Un preventivo vale per il viaggio che descrive: una modifica al viaggio può cambiarne il prezzo o la disponibilità.",
        ],
        bullets: [
          "I prezzi sono quotati sul singolo viaggio, non presi da un tariffario pubblicato.",
          "Nessuna pagina di questo sito quota una corsa per una tratta.",
          "Quando un ente pubblico fa pagare l'accesso a un'area limitata, quello è un onere dell'ente e come tale è indicato nella pagina pertinente.",
        ],
      },
      {
        id: "pagamento",
        heading: "5. Pagamento",
        paragraphs: [
          "Su questo sito non esiste oggi alcuna modalità di pagamento. Qui non si può pagare nulla e non vengono raccolti dati di carte o conti.",
          "Quando le prenotazioni saranno attive, tempi e modalità di pagamento potranno variare per destinazione e per singola prenotazione. Alcuni viaggi potranno richiedere il pagamento anticipato; altri potranno essere pagati al conducente in contanti o con carta. La modalità che riguarda il vostro viaggio sarà indicata nel preventivo o nella conferma di prenotazione.",
        ],
        bullets: [
          "L'importo totale dovuto sarà indicato prima che vi sia chiesto di confermare.",
          "La modalità di pagamento e l'eventuale termine saranno indicati prima che vi sia chiesto di confermare.",
          "Non vengono aggiunti costi di gestione pratica, di incasso con carta o di intermediazione, salvo che siano indicati nel preventivo.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Come verrà incassato il pagamento, e da quale parte, non è stato deciso. Finché non lo sarà, questa sezione descrive un'intenzione e non un processo, e nemmeno l'informativa privacy può indicare un fornitore di pagamento.",
        },
      },
      {
        id: "imposte",
        heading: "6. IVA e altri oneri",
        paragraphs: [
          "Quando a un viaggio si applica l'IVA o un'altra imposta, questa sarà indicata nel preventivo o nella conferma di prenotazione, e il totale che vi verrà mostrato sarà l'importo dovuto.",
          "In questa pagina non è indicata alcuna aliquota e non si dà per scontato che un'imposta si applichi a una determinata prenotazione o a una determinata modalità di pagamento. Dipende dal viaggio e dalla parte che svolge il trasporto, e sarà indicato per la vostra prenotazione anziché desunto da qui.",
        ],
      },
      {
        id: "responsabilita-cliente",
        heading: "7. Di che cosa siete responsabili voi",
        paragraphs: [
          "Un preventivo vale quanto il viaggio che descrive, e quasi sempre ciò che fa andare storto un transfer è un dettaglio che non era stato indicato.",
        ],
        bullets: [
          "Indicare entrambi gli indirizzi per esteso, con via e numero civico dove esistono.",
          "Indicare data e ora corrette, precisando il fuso orario se prenotate dall'estero.",
          "Indicare il numero di volo, treno o nave quando ce n'è uno, così che un ritardo possa essere gestito.",
          "Indicare il numero reale di passeggeri e di bagagli, compresi quelli a mano. È il bagaglio, più spesso del numero di persone, a determinare il veicolo.",
          "Segnalare in anticipo qualsiasi esigenza particolare: un bambino e la sua età, una sedia a rotelle, un animale, attrezzatura ingombrante, una tappa intermedia o un indirizzo ad accesso limitato.",
          "Trovarvi nel luogo e all'ora concordati ed essere raggiungibili al numero che avete lasciato.",
        ],
      },
      {
        id: "modifiche-prenotazione",
        heading: "8. Modifiche a una prenotazione confermata",
        paragraphs: [
          "Se qualcosa del vostro viaggio cambia, comunicatelo appena lo sapete. Una modifica della data, dell'ora, degli indirizzi, del gruppo o dei bagagli può cambiare il prezzo, il veicolo o la possibilità stessa di coprire il viaggio.",
          "Una modifica ha effetto soltanto quando è stata confermata per iscritto, nello stesso modo della prenotazione originaria. Una modifica non confermata non è una modifica.",
        ],
      },
      {
        id: "attesa",
        heading: "9. Tempo di attesa e mancata presentazione",
        paragraphs: [
          "Per una presa in carico in aeroporto basata su un volo in arrivo, l'attesa compresa è di 60 minuti dall'orario effettivo di atterraggio del volo, non dall'orario previsto di arrivo.",
          "Per gli altri punti di presa in carico non sono state fissate regole di attesa, e questa pagina non ne inventa. Se il vostro viaggio parte da un luogo diverso dagli arrivi di un aeroporto, la modalità di attesa sarà indicata nella conferma di prenotazione.",
          "Le regole complete, compreso che cosa si considera mancata presentazione, sono nella pagina Cancellazioni e rimborsi.",
        ],
      },
      {
        id: "cancellazioni",
        heading: "10. Cancellazioni e rimborsi",
        paragraphs: [
          "Termini di cancellazione, penali, addebiti per mancata presentazione e gestione dei rimborsi sono indicati nella pagina Cancellazioni e rimborsi, che forma parte di questi termini.",
          "In sintesi, e fatto salvo quanto previsto in quella pagina: una cancellazione più di 24 ore prima dell'orario di presa in carico confermato può dare diritto al rimborso di un pagamento anticipato; una cancellazione nelle 24 ore precedenti è destinata a comportare un addebito pari all'intero prezzo confermato. Anche quelle disposizioni sono bozze in attesa di revisione legale.",
        ],
      },
      {
        id: "disservizi",
        heading: "11. Ritardi ed eventi fuori dal controllo ragionevole",
        paragraphs: [
          "I viaggi su strada risentono di traffico, meteo, cantieri, incidenti, manifestazioni, chiusure disposte dalle autorità ed eventi simili. Quando un viaggio subisce un ritardo di questo tipo, il ritardo non significa di per sé che il servizio non sia stato prestato.",
          "È un'affermazione circoscritta, e va intesa in senso stretto. Non significa che ogni ritardo sia giustificato e non vale quando il servizio confermato non è stato affatto prestato: quando nessun veicolo si è presentato, quando il veicolo non era adatto al gruppo e ai bagagli confermati, o quando il viaggio non è stato completato. Quelle sono mancate prestazioni e come tali vengono trattate.",
        ],
        pending: {
          label: "Revisione legale necessaria",
          body:
            "Il confine fra un ritardo giustificato e una mancata prestazione richiede una revisione legale, così come la questione dei rimedi applicabili in ciascun caso secondo la legge che disciplinerà questi termini.",
        },
      },
      {
        id: "reclami",
        heading: "12. Reclami",
        paragraphs: [
          "Se qualcosa va storto, il primo passo è scriverlo, con i dati della prenotazione e il racconto dell'accaduto, appena ragionevolmente possibile.",
          "Su questo sito non esiste ancora un recapito per i reclami, e qui non viene promesso alcun tempo di risposta perché non ne è stato fissato alcuno. Un canale per i reclami e un termine per il riscontro saranno pubblicati prima dell'avvio delle prenotazioni.",
        ],
        bullets: [
          "Recapito reclami: [DA CONFERMARE — indirizzo e-mail o altro canale]",
        ],
      },
      {
        id: "responsabilita",
        heading: "13. Responsabilità e diritti del consumatore",
        paragraphs: [
          "Nulla in questi termini elimina o limita diritti che vi spettano come consumatori e che non possono essere legittimamente eliminati o limitati. Quando una disposizione di questa pagina confligge con un diritto di quel tipo, prevale il diritto e non la disposizione.",
          "L'estensione della responsabilità, e quale parte ne risponda e per che cosa, dipende da chi è la vostra controparte contrattuale per il viaggio e dalla legge che disciplina quel contratto. Nessuno dei due elementi è confermato, quindi questa pagina non indica alcun limite di responsabilità. Una limitazione scritta prima di conoscere quei fatti sarebbe una supposizione travestita da clausola.",
        ],
        pending: {
          label: "Revisione legale necessaria",
          body:
            "La controparte contrattuale, la ripartizione delle responsabilità fra questo sito e l'attività operativa e ogni limitazione di responsabilità ammissibile vanno definite con un parere legale prima che questi termini entrino in vigore.",
        },
      },
      {
        id: "contenuti",
        heading: "14. I contenuti di questo sito",
        paragraphs: [
          "Testi, struttura, illustrazioni e impaginazione di questo sito appartengono a chi lo gestisce. Potete leggerli, citarli indicandone la fonte e inserire collegamenti. Non potete ripubblicarli integralmente come vostri.",
          "Quando una pagina descrive una regola stabilita da un ente pubblico, quella regola è dell'ente e non di questo sito: la pagina indica l'ente e collega il suo documento. Quei documenti sono la versione che fa fede e possono cambiare senza che questo sito lo sappia. Le pagine che riportano una regola datata indicano la data dell'ultima verifica.",
        ],
      },
      {
        id: "privacy",
        heading: "15. Privacy",
        paragraphs: [
          "Il trattamento dei dati personali è descritto nell'informativa sulla privacy. Al momento il sito non raccoglie nulla: non ci sono moduli, canali di contatto, strumenti di analisi né cookie.",
        ],
      },
      {
        id: "modifiche-termini",
        heading: "16. Modifiche a questi termini",
        paragraphs: [
          "Questi termini riportano la data di redazione e riporteranno la data di entrata in vigore. I termini che si applicano a una prenotazione sono quelli in vigore al momento in cui quella prenotazione è stata confermata, non una versione successiva.",
        ],
      },
      {
        id: "legge",
        heading: "17. Legge applicabile e controversie",
        paragraphs: [
          "Qui non è indicata alcuna legge applicabile né alcun foro, perché nessuno dei due è stato determinato.",
          "Il titolare è stabilito fuori dall'Unione europea e dallo Spazio economico europeo, mentre i viaggi si svolgono in Italia e molti clienti saranno consumatori residenti nell'UE. Il diritto dei consumatori riconosce di norma tutele nel Paese di residenza del consumatore a prescindere da quanto scritto nel contratto: non è quindi una clausola che si possa risolvere scegliendo un foro comodo.",
        ],
        bullets: [
          "Legge applicabile: [DA CONFERMARE — richiede parere legale]",
          "Risoluzione delle controversie: [DA CONFERMARE — richiede parere legale]",
        ],
        pending: {
          label: "Revisione legale necessaria",
          body:
            "È la disposizione che più facilmente risulterebbe errata se indovinata. Richiede un parere che tenga conto del luogo di stabilimento del titolare, del luogo di esecuzione e delle norme a tutela del consumatore del Paese del cliente.",
        },
      },
      {
        id: "contatti",
        heading: "18. Contatti",
        paragraphs: [
          "Su questo sito non esiste ancora un canale di contatto. Quando ci sarà, verrà pubblicato qui e nell'informativa sulla privacy.",
        ],
        bullets: ["Contatto: [DA CONFERMARE — indirizzo e-mail o altro canale]"],
      },
    ],

    related: {
      heading: "Le altre pagine legali",
      items: [
        {
          page: "privacy",
          label: "Informativa sulla privacy",
          detail: "Che cosa viene raccolto, che cosa no e che fine farebbe.",
        },
        {
          page: "cancellation",
          label: "Cancellazioni e rimborsi",
          detail: "Termini, penali, attesa in aeroporto e gestione dei rimborsi.",
        },
        {
          page: "about",
          label: "Chi siamo",
          detail: "A che cosa serve questo sito e come una richiesta diventa un viaggio.",
        },
      ],
    },
  },
};
