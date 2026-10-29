import type { LocalizedLegal } from "./types";

/**
 * Cancellation and Refund Policy — draft.
 *
 * ── Whose rules these are ─────────────────────────────────────────────────
 * Sections 3 to 9 state the owner's intended policy, supplied as part of the
 * brief for this page. They are written as intended rules rather than as
 * settled ones, and each of the four that carry real legal exposure — the
 * 24-hour charge, the no-show charge, the delay provision and the five-day
 * evidence rule — carries a visible note saying it awaits legal review. That
 * is not hedging for its own sake: a 100% charge and a five-day evidence
 * deadline are exactly the kinds of term that consumer-protection rules in
 * several jurisdictions test hardest.
 *
 * ── The two things this page refuses to invent ────────────────────────────
 * Waiting time away from an airport, and what happens when the transfer
 * cannot be provided. The first has no rule, so the page says there is none
 * rather than extending the 60-minute airport rule to hotels, ports and
 * stations, where it was never meant to apply. The second is rendered as an
 * explicit recommendation awaiting the owner's approval — the brief asked
 * for a fair suggestion, and asked equally clearly that the suggestion not
 * quietly become policy.
 *
 * ── Why the whole page is conditional ─────────────────────────────────────
 * No payment can be taken on this website today, so nothing described here
 * can yet happen to anybody. Section 1 says that outright. A refund policy
 * that implied live transactions would be the same kind of error as a
 * privacy policy that implied live data collection.
 */
export const cancellation: LocalizedLegal = {
  en: {
    meta: {
      title: "Cancellation and Refund Policy",
      description:
        "Cancellation deadlines, the 24-hour rule, no-shows, airport waiting time and how refunds would be handled. A working draft awaiting legal review.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Cancellation and Refund Policy",
    lead:
      "What happens if a confirmed journey is cancelled, and what would be refunded — set out before any of it can happen.",

    draft: {
      label: "Draft — not in force",
      body:
        "This policy is a working draft prepared ahead of launch. It has not been reviewed by a lawyer and it is not yet in force. Several provisions state the owner's intended rules and are marked as awaiting legal review; two further questions have no rule at all yet and say so. Nothing here currently applies to anyone, because no booking can be made or paid for on this website.",
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
        heading: "1. When this policy applies",
        paragraphs: [
          "This policy will apply to a journey that has been confirmed in writing through this website, once bookings can be made.",
          "At the time of writing they cannot. There is no quotation form, no contact channel and no payment arrangement on this website, so no booking exists, no payment has been taken and no refund can be owed. This page sets out the intended rules in advance so that they are visible before anyone is asked to agree to them.",
          "It forms part of the Terms and Conditions and should be read with them.",
        ],
      },
      {
        id: "definitions",
        heading: "2. The terms used here",
        paragraphs: [
          "Three words do most of the work in this policy, so they are defined before they are used.",
        ],
        terms: [
          {
            term: "Confirmed booking",
            detail:
              "A journey that has been confirmed to you in writing, with the journey, the vehicle, the price and the meeting arrangement set out, and which you have agreed to. A quotation request is not a confirmed booking and never becomes one by the passage of time.",
          },
          {
            term: "Pickup time",
            detail:
              "The scheduled pickup time stated in that written confirmation. Every deadline on this page is measured from it. For an airport pickup, the separate 60-minute waiting rule in section 6 runs from the flight's actual landing time instead.",
          },
          {
            term: "Advance payment",
            detail:
              "Any amount paid before the journey. Whether an advance payment applies depends on the destination and the individual booking, and is stated in the quotation or confirmation rather than assumed from this page.",
          },
        ],
      },
      {
        id: "more-than-24",
        heading: "3. Cancelling more than 24 hours before pickup",
        paragraphs: [
          "If you cancel more than 24 hours before the confirmed pickup time, and an advance payment was collected, you are eligible for a refund of the amount paid, subject to applicable law.",
          "An eligible refund is processed within 5 to 7 business days of the cancellation being confirmed. That is the time taken to issue the refund. How long it then takes to appear in your account is determined by your bank or card provider and is outside anyone's control here.",
          "No deduction, administration fee or handling charge is applied to an eligible refund.",
        ],
      },
      {
        id: "within-24",
        heading: "4. Cancelling within 24 hours of pickup",
        paragraphs: [
          "The intended rule is that a cancellation at or within 24 hours of the confirmed pickup time attracts a cancellation charge equal to 100% of the confirmed transfer price.",
          "Where an advance payment was collected, the intention is that it is not refunded. Where payment was not collected in advance, the intention is that the cancellation charge remains payable.",
          "This rule will be stated clearly at the point of booking, before you confirm, and not left to be discovered on this page afterwards.",
        ],
        pending: {
          label: "Awaiting legal review",
          body:
            "A charge of the full price is a significant term. Whether it is enforceable, and in what circumstances it may have to yield — for example where the cancellation results from illness, bereavement, or a cancelled or diverted flight — has not yet been assessed. It is stated here as the owner's intended policy and not as a settled rule.",
        },
      },
      {
        id: "no-show",
        heading: "5. No-shows",
        paragraphs: [
          "A no-show means that you did not arrive at the confirmed pickup place by the end of the applicable waiting period, and could not be reached on the contact number given with the booking.",
          "The intended rule is a charge equal to 100% of the confirmed transfer price. Where an advance payment was collected, the intention is that it is not refunded; where it was not, the intention is that the charge remains payable.",
          "What counts as the pickup place and the applicable waiting period comes from your written confirmation for that journey, not from this page.",
        ],
        pending: {
          label: "Awaiting legal review and owner confirmation",
          body:
            "Two things are unresolved. First, whether a full-price no-show charge is enforceable in the same way as the 24-hour charge above. Second, what steps will be taken to reach you before a booking is treated as a no-show — no contact procedure has been established, and this page does not invent one.",
        },
      },
      {
        id: "airport-waiting",
        heading: "6. Waiting time for an airport arrival",
        paragraphs: [
          "Where a pickup is based on an arriving flight, the included waiting period is 60 minutes from the flight's actual landing time — not from its scheduled arrival time. The actual landing time is what counts, so a delayed flight does not shorten your waiting period.",
          "After that period, if you have not arrived at the confirmed pickup place and cannot be located, the booking may be treated as a no-show under section 5, subject to the arrangements confirmed for your journey and to applicable law.",
          "This rule applies to airport-arrival pickups only.",
        ],
        pending: {
          label: "No rule set — owner decision required",
          body:
            "No waiting-time rule exists for pickups at hotels, cruise ports, railway stations or private addresses, and the airport rule is not extended to them here. Nor is there a rule for a diverted or cancelled flight, or for delayed baggage. Until those are decided, the waiting arrangement for a non-airport pickup will be whatever is stated in that booking's written confirmation.",
        },
      },
      {
        id: "delays",
        heading: "7. Delays on the road",
        paragraphs: [
          "The intended rule is that an unexpected delay caused by traffic, an accident, roadworks, weather, a demonstration, an official closure or a similar unforeseen event does not by itself entitle you to a refund or a price reduction.",
          "That is meant narrowly. It is not a general exemption. It does not apply where the confirmed service was not provided — where no vehicle arrived, where the vehicle could not carry the party and luggage that had been confirmed, or where the journey was not completed. Those are failures to provide the service, not delays, and this section does not cover them.",
          "Nor does it remove any right you have as a consumer that cannot lawfully be removed.",
        ],
        pending: {
          label: "Awaiting legal review",
          body:
            "Where the line falls between a delay that is excused and a failure to provide the service needs legal review, as does what remedy applies on each side of it.",
        },
      },
      {
        id: "evidence",
        heading: "8. Supporting evidence for a refund claim",
        paragraphs: [
          "Most cancellations need no evidence at all: the booking record already shows what was confirmed and when the cancellation was received, and where that is enough, nothing further will be asked of you.",
          "Where a claim does turn on something the booking record cannot show, the intended rule is that supporting evidence is provided within 5 calendar days of being asked for it, and that a claim is declined if it is not.",
        ],
        pending: {
          label: "Awaiting legal review",
          body:
            "Five calendar days is short, and whether a claim may be declined outright for missing it — rather than paused, extended, or decided on the evidence available — has not been assessed. Whether an extension must be available in particular circumstances is part of the same question.",
        },
      },
      {
        id: "payment",
        heading: "9. Payment, VAT and destination-specific arrangements",
        paragraphs: [
          "Payment timing and method vary by destination and by individual booking. Some journeys may require payment in advance; others may be payable to the driver in cash or by card. What applies to your journey is stated in your quotation or booking confirmation.",
          "Where VAT or another tax applies, it is identified before you confirm, and the total shown to you is the total payable. No tax rate is stated on this page, and no assumption is made about whether tax attaches to any particular payment method.",
        ],
        bullets: [
          "The total amount, the payment method and any payment deadline are stated before you are asked to confirm.",
          "No administration fee, card-handling fee, bank charge or refund deduction is applied unless it was stated in your quotation.",
        ],
      },
      {
        id: "not-provided",
        heading: "10. If the transfer cannot be provided",
        paragraphs: [
          "No rule has been set for what happens if a confirmed journey cannot be provided — because a vehicle is unavailable, because the operating business cancels, or because the service otherwise is not delivered.",
          "Rather than leave the question unanswered or invent an answer, a recommendation is set out below. It is a recommendation only. It has not been approved and it is not policy.",
        ],
        pending: {
          label: "Recommendation only — not approved, not in force",
          body:
            "Recommended approach, for the owner to accept, change or reject: where a confirmed journey cannot be provided and the failure is not attributable to the customer, any advance payment is refunded in full, no cancellation or no-show charge is applied, and the refund is processed on the same 5-to-7-business-day basis as section 3 — all subject to applicable law, which in some circumstances gives a consumer more than this. Until the owner decides, this is not the policy and should not be relied on.",
        },
      },
      {
        id: "how-to-cancel",
        heading: "11. How to cancel",
        paragraphs: [
          "No cancellation channel exists on this website yet, because no booking channel exists either. When bookings begin, a cancellation will be made in writing to the address given in your booking confirmation, and the time it is received is what the deadlines on this page are measured against.",
        ],
        bullets: [
          "Cancellations contact: [TO BE CONFIRMED — email address or other channel]",
        ],
      },
      {
        id: "consumer-rights",
        heading: "12. Your rights as a consumer",
        paragraphs: [
          "Nothing in this policy removes or limits any right you have as a consumer that cannot lawfully be removed or limited. Where a provision here conflicts with such a right, the right applies.",
          "Which consumer-protection law applies has not been settled: the owner is established outside the European Union and the European Economic Area, while the journeys take place in Italy. That question is open in the Terms and Conditions too, and it affects how several of the provisions above would be read.",
        ],
      },
      {
        id: "changes",
        heading: "13. Changes to this policy",
        paragraphs: [
          "This policy carries the date it was drafted and will carry the date it comes into force. The version that applies to a booking is the one in force when that booking was confirmed.",
        ],
      },
    ],

    related: {
      heading: "The other policies",
      items: [
        {
          page: "terms",
          label: "Terms and Conditions",
          detail: "What this website does, and what a confirmed booking is.",
        },
        {
          page: "privacy",
          label: "Privacy Policy",
          detail: "What is collected, what is not, and what would happen to it.",
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
      title: "Cancellazioni e rimborsi",
      description:
        "Termini di cancellazione, regola delle 24 ore, mancata presentazione, attesa in aeroporto e gestione dei rimborsi. Bozza in attesa di revisione legale.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Cancellazioni e rimborsi",
    lead:
      "Che cosa succede se un viaggio confermato viene annullato e che cosa verrebbe rimborsato, messo per iscritto prima che tutto questo possa accadere.",

    draft: {
      label: "Bozza — non in vigore",
      body:
        "Questa pagina è una bozza di lavoro preparata prima del lancio. Non è stata esaminata da un legale e non è ancora in vigore. Diverse disposizioni riportano le regole che il titolare intende adottare e sono segnalate come in attesa di revisione legale; per altre due questioni non esiste ancora alcuna regola, e la pagina lo dichiara. Nulla di quanto segue si applica oggi a chicchessia, perché su questo sito non si può prenotare né pagare.",
    },

    status: {
      stateLabel: "Stato",
      state: "Bozza, in attesa di conferma del titolare e di revisione legale",
      draftedLabel: "Redatta il",
      drafted: "28 ottobre 2026",
      effectiveLabel: "In vigore dal",
      effective: "Non ancora in vigore",
    },

    tocLabel: "In questa pagina",

    sections: [
      {
        id: "ambito",
        heading: "1. Quando si applica questa pagina",
        paragraphs: [
          "Queste regole si applicheranno a un viaggio confermato per iscritto tramite questo sito, quando sarà possibile prenotare.",
          "Nel momento in cui scriviamo non lo è. Su questo sito non esistono un modulo di preventivo, un canale di contatto o una modalità di pagamento: non esistono prenotazioni, non è stato incassato nulla e nessun rimborso può essere dovuto. Questa pagina espone in anticipo le regole previste perché siano visibili prima che a qualcuno venga chiesto di accettarle.",
          "Forma parte dei Termini e condizioni e va letta insieme a essi.",
        ],
      },
      {
        id: "definizioni",
        heading: "2. I termini usati qui",
        paragraphs: [
          "Tre espressioni reggono quasi tutta questa pagina, e vengono definite prima di essere usate.",
        ],
        terms: [
          {
            term: "Prenotazione confermata",
            detail:
              "Un viaggio confermato per iscritto, con viaggio, veicolo, prezzo e modalità di incontro indicati, che voi avete accettato. Una richiesta di preventivo non è una prenotazione confermata e non lo diventa con il passare del tempo.",
          },
          {
            term: "Orario di presa in carico",
            detail:
              "L'orario previsto indicato in quella conferma scritta. Tutti i termini di questa pagina si calcolano da lì. Per una presa in carico in aeroporto, la regola distinta dei 60 minuti di cui al punto 6 decorre invece dall'orario effettivo di atterraggio.",
          },
          {
            term: "Pagamento anticipato",
            detail:
              "Qualsiasi importo versato prima del viaggio. Se sia previsto un pagamento anticipato dipende dalla destinazione e dalla singola prenotazione, ed è indicato nel preventivo o nella conferma anziché desunto da questa pagina.",
          },
        ],
      },
      {
        id: "oltre-24",
        heading: "3. Cancellazione oltre 24 ore prima della presa in carico",
        paragraphs: [
          "Se cancellate più di 24 ore prima dell'orario di presa in carico confermato e avete versato un pagamento anticipato, avete diritto al rimborso dell'importo versato, nei limiti di legge.",
          "Un rimborso dovuto viene disposto entro 5-7 giorni lavorativi dalla conferma della cancellazione. Quello è il tempo necessario a emettere il rimborso: quanto impieghi poi a comparire sul vostro conto dipende dalla vostra banca o dall'emittente della carta e non è nelle mani di nessuno qui.",
          "A un rimborso dovuto non viene applicata alcuna trattenuta, spesa di gestione o commissione.",
        ],
      },
      {
        id: "entro-24",
        heading: "4. Cancellazione nelle 24 ore precedenti",
        paragraphs: [
          "La regola prevista è che una cancellazione nelle 24 ore precedenti l'orario di presa in carico confermato comporti una penale pari al 100% del prezzo del transfer confermato.",
          "Se è stato versato un pagamento anticipato, l'intenzione è che non venga rimborsato. Se non è stato versato alcun anticipo, l'intenzione è che la penale resti dovuta.",
          "Questa regola verrà indicata con chiarezza al momento della prenotazione, prima che confermiate, e non lasciata a una scoperta successiva su questa pagina.",
        ],
        pending: {
          label: "In attesa di revisione legale",
          body:
            "Una penale pari all'intero prezzo è una clausola significativa. Non è ancora stato valutato se sia opponibile e in quali casi debba cedere — per esempio in caso di malattia, lutto o volo cancellato o dirottato. È riportata qui come regola che il titolare intende adottare, non come regola consolidata.",
        },
      },
      {
        id: "mancata-presentazione",
        heading: "5. Mancata presentazione",
        paragraphs: [
          "Si ha mancata presentazione quando non vi siete presentati nel luogo di presa in carico confermato entro il termine di attesa applicabile e non siete stati raggiungibili al numero indicato con la prenotazione.",
          "La regola prevista è un addebito pari al 100% del prezzo del transfer confermato. Se è stato versato un anticipo, l'intenzione è che non venga rimborsato; in caso contrario, l'intenzione è che l'addebito resti dovuto.",
          "Che cosa sia il luogo di presa in carico e quale sia il termine di attesa applicabile risulta dalla vostra conferma scritta per quel viaggio, non da questa pagina.",
        ],
        pending: {
          label: "In attesa di revisione legale e di conferma del titolare",
          body:
            "Restano due questioni aperte. La prima è se un addebito pieno per mancata presentazione sia opponibile allo stesso modo della penale di cui al punto precedente. La seconda è quali tentativi verranno fatti per contattarvi prima di trattare una prenotazione come mancata presentazione: non è stata stabilita alcuna procedura di contatto, e questa pagina non ne inventa una.",
        },
      },
      {
        id: "attesa-aeroporto",
        heading: "6. Attesa per un arrivo in aeroporto",
        paragraphs: [
          "Quando la presa in carico si basa su un volo in arrivo, l'attesa compresa è di 60 minuti dall'orario effettivo di atterraggio del volo, non da quello previsto. Conta l'atterraggio effettivo: un volo in ritardo non riduce quindi il vostro tempo di attesa.",
          "Trascorso quel periodo, se non vi siete presentati nel luogo di presa in carico confermato e non siete rintracciabili, la prenotazione può essere trattata come mancata presentazione ai sensi del punto 5, fatte salve le modalità confermate per il vostro viaggio e la legge applicabile.",
          "Questa regola vale soltanto per le prese in carico agli arrivi aeroportuali.",
        ],
        pending: {
          label: "Regola non fissata — decisione del titolare necessaria",
          body:
            "Non esiste alcuna regola di attesa per prese in carico presso hotel, porti crocieristici, stazioni ferroviarie o indirizzi privati, e qui la regola aeroportuale non viene estesa a essi. Non esiste nemmeno una regola per un volo dirottato o cancellato, né per i bagagli in ritardo. Finché non saranno decise, la modalità di attesa per una presa in carico non aeroportuale sarà quella indicata nella conferma scritta di quella prenotazione.",
        },
      },
      {
        id: "ritardi",
        heading: "7. Ritardi sulla strada",
        paragraphs: [
          "La regola prevista è che un ritardo imprevisto dovuto a traffico, a un incidente, a cantieri, al meteo, a una manifestazione, a una chiusura disposta dalle autorità o a un evento imprevedibile analogo non dia di per sé diritto a un rimborso o a una riduzione di prezzo.",
          "Va intesa in senso stretto. Non è un'esenzione generale. Non vale quando il servizio confermato non è stato prestato: quando nessun veicolo si è presentato, quando il veicolo non poteva accogliere il gruppo e i bagagli confermati, o quando il viaggio non è stato completato. Quelle sono mancate prestazioni, non ritardi, e questa sezione non le copre.",
          "Non elimina inoltre alcun diritto che vi spetti come consumatori e che non possa essere legittimamente eliminato.",
        ],
        pending: {
          label: "In attesa di revisione legale",
          body:
            "Dove passi il confine fra un ritardo giustificato e una mancata prestazione richiede una revisione legale, così come quale rimedio si applichi da una parte e dall'altra.",
        },
      },
      {
        id: "documentazione",
        heading: "8. Documentazione a supporto di una richiesta di rimborso",
        paragraphs: [
          "La maggior parte delle cancellazioni non richiede alcuna documentazione: la traccia della prenotazione mostra già che cosa era stato confermato e quando è arrivata la cancellazione, e dove questo basta non vi verrà chiesto altro.",
          "Quando invece una richiesta dipende da un elemento che la traccia della prenotazione non può dimostrare, la regola prevista è che la documentazione venga fornita entro 5 giorni di calendario dalla richiesta, e che in mancanza la domanda venga respinta.",
        ],
        pending: {
          label: "In attesa di revisione legale",
          body:
            "Cinque giorni di calendario sono pochi, e non è stato valutato se una domanda possa essere respinta senz'altro per il loro mancato rispetto, anziché sospesa, prorogata o decisa sulla base degli elementi disponibili. Se in certi casi debba essere prevista una proroga fa parte della stessa questione.",
        },
      },
      {
        id: "pagamenti",
        heading: "9. Pagamenti, IVA e modalità per destinazione",
        paragraphs: [
          "Tempi e modalità di pagamento variano per destinazione e per singola prenotazione. Alcuni viaggi possono richiedere il pagamento anticipato; altri possono essere pagati al conducente in contanti o con carta. Quanto vale per il vostro viaggio è indicato nel preventivo o nella conferma di prenotazione.",
          "Quando si applica l'IVA o un'altra imposta, questa viene indicata prima che confermiate, e il totale che vi viene mostrato è l'importo dovuto. In questa pagina non è indicata alcuna aliquota e non si dà per scontato che un'imposta si colleghi a una determinata modalità di pagamento.",
        ],
        bullets: [
          "Importo totale, modalità di pagamento ed eventuale termine sono indicati prima che vi sia chiesto di confermare.",
          "Non vengono applicate spese di gestione, commissioni per l'incasso con carta, oneri bancari o trattenute sul rimborso, salvo che fossero indicati nel preventivo.",
        ],
      },
      {
        id: "servizio-non-prestato",
        heading: "10. Se il transfer non può essere effettuato",
        paragraphs: [
          "Non è stata fissata alcuna regola per il caso in cui un viaggio confermato non possa essere effettuato: per indisponibilità di un veicolo, per annullamento da parte dell'attività operativa o per mancata prestazione del servizio ad altro titolo.",
          "Invece di lasciare la questione senza risposta o di inventarne una, qui sotto è formulata una proposta. È soltanto una proposta: non è stata approvata e non è una regola in vigore.",
        ],
        pending: {
          label: "Solo proposta — non approvata, non in vigore",
          body:
            "Impostazione proposta, che il titolare può accettare, modificare o respingere: quando un viaggio confermato non può essere effettuato e la causa non è imputabile al cliente, l'eventuale pagamento anticipato viene rimborsato integralmente, non si applica alcuna penale di cancellazione o per mancata presentazione, e il rimborso segue gli stessi 5-7 giorni lavorativi del punto 3 — il tutto nei limiti di legge, che in alcuni casi riconosce al consumatore più di questo. Finché il titolare non decide, questa non è la regola applicabile e non va considerata tale.",
        },
      },
      {
        id: "come-cancellare",
        heading: "11. Come cancellare",
        paragraphs: [
          "Su questo sito non esiste ancora un canale per le cancellazioni, perché non esiste nemmeno un canale per prenotare. Quando le prenotazioni saranno attive, la cancellazione si farà per iscritto all'indirizzo indicato nella conferma di prenotazione, e il momento in cui viene ricevuta è quello su cui si calcolano i termini di questa pagina.",
        ],
        bullets: [
          "Recapito per le cancellazioni: [DA CONFERMARE — indirizzo e-mail o altro canale]",
        ],
      },
      {
        id: "diritti",
        heading: "12. I vostri diritti come consumatori",
        paragraphs: [
          "Nulla in questa pagina elimina o limita diritti che vi spettano come consumatori e che non possono essere legittimamente eliminati o limitati. Quando una disposizione confligge con un diritto di quel tipo, prevale il diritto.",
          "Quale legge a tutela del consumatore si applichi non è stato definito: il titolare è stabilito fuori dall'Unione europea e dallo Spazio economico europeo, mentre i viaggi si svolgono in Italia. La stessa questione resta aperta nei Termini e condizioni e incide sul modo in cui andrebbero lette diverse delle disposizioni qui sopra.",
        ],
      },
      {
        id: "modifiche",
        heading: "13. Modifiche a questa pagina",
        paragraphs: [
          "Questa pagina riporta la data in cui è stata redatta e riporterà la data di entrata in vigore. La versione che si applica a una prenotazione è quella in vigore quando la prenotazione è stata confermata.",
        ],
      },
    ],

    related: {
      heading: "Le altre pagine legali",
      items: [
        {
          page: "terms",
          label: "Termini e condizioni",
          detail: "Che cosa fa questo sito e che cos'è una prenotazione confermata.",
        },
        {
          page: "privacy",
          label: "Informativa sulla privacy",
          detail: "Che cosa viene raccolto, che cosa no e che fine farebbe.",
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
