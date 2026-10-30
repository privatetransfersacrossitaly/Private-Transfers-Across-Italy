import { contactEmail } from "@/lib/site";
import type { LocalizedLegal } from "./types";

/**
 * Cancellation and Refund Policy. In force from 29 October 2026.
 *
 * ── The fact the whole page turns on ──────────────────────────────────────
 * The customer pays the transfer company directly, normally the driver at the
 * end of the journey. That single arrangement decides the shape of every
 * section: there is usually no advance payment, so there is usually nothing
 * to refund, and a cancellation charge is something that company would bill
 * rather than something this site holds and keeps. §1 says so up front so the
 * rest of the page is read in the right frame.
 *
 * ── Charges stated as charges, with discretion kept ───────────────────────
 * §§3–9 are the owner's policy. The four with real consumer-law exposure —
 * the 24-hour charge, the no-show charge, the road-delay provision and the
 * five-day evidence deadline — are written as "up to" and paired with an
 * explicit willingness to take a reason into account, rather than as
 * absolutes. A flat 100% with no stated discretion is the term that gets
 * struck down; the same charge with a route to being reconsidered is not.
 * §12 preserves consumer rights over all of it.
 *
 * ── The one thing this page still declines to invent ──────────────────────
 * Waiting time away from an airport. §6 keeps the 60-minute rule for airport
 * arrivals only and says the written confirmation governs everywhere else,
 * because where a driver may legally wait differs by place — a hotel kerb, a
 * port gate and a ZTL boundary are not the same problem. Extending one figure
 * across all of them would be a guess dressed as a rule.
 *
 * What changed at publication: §10 now states a real outcome — you are not
 * charged for a journey that was not provided — which the direct-payment
 * arrangement makes true rather than generous.
 */
export const cancellation: LocalizedLegal = {
  en: {
    meta: {
      title: "Cancellation and Refund Policy",
      description:
        "How to cancel, the 24-hour rule, no-shows, the 60-minute airport waiting period, refunds and the exceptions that apply.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Cancellation and Refund Policy",
    lead:
      "How to cancel a confirmed journey, what it costs if you cancel late, how long we wait for you, and what happens if the transfer cannot be provided.",

    status: {
      stateLabel: "Status",
      state: "In force",
      draftedLabel: "Last updated",
      drafted: "29 October 2026",
      effectiveLabel: "In force from",
      effective: "29 October 2026",
    },

    tocLabel: "On this page",

    sections: [
      {
        id: "scope",
        heading: "1. When this policy applies",
        paragraphs: [
          "This policy applies to a journey that has been confirmed to you in writing. It forms part of our Terms and Conditions and should be read with them.",
          "One thing to keep in mind throughout: you pay the transfer company directly for the journey, not us. So in most cases there is no advance payment to refund — a cancellation charge, where one applies, is a charge that company would make, and we will tell you clearly whenever one is in play.",
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
              "Any amount paid before the journey. Most journeys are paid to the driver on the day, so there is usually no advance payment. Where one does apply to your booking, your quotation and confirmation say so before you confirm.",
          },
        ],
      },
      {
        id: "more-than-24",
        heading: "3. Cancelling more than 24 hours before pickup",
        paragraphs: [
          "Cancel more than 24 hours before your confirmed pickup time and there is nothing to pay. Tell us as early as you can — by email is fine — and we will cancel the booking with the transfer company for you.",
          "If an advance payment was taken for your journey, it is refunded in full. The refund is issued within 5 to 7 business days of the cancellation being confirmed; how long it then takes to appear in your account is up to your bank or card provider.",
          "No deduction, administration fee or handling charge is applied to a refund.",
        ],
      },
      {
        id: "within-24",
        heading: "4. Cancelling within 24 hours of pickup",
        paragraphs: [
          "Cancelling at or within 24 hours of the confirmed pickup time attracts a cancellation charge of up to 100% of the transfer price. By that point the vehicle and driver have been committed to your journey and the slot cannot usually be resold.",
          "Where an advance payment was taken, the charge is set against it. Where it was not, the transfer company may ask you for it.",
          "This is stated again at the point of booking, before you confirm, so it is never something you find out afterwards.",
          "We will not apply the full charge mechanically. If your plans change for a reason outside your control — illness, a bereavement, a cancelled or diverted flight — tell us and we will take it up with the transfer company on your behalf. Your rights as a consumer apply in any case: see section 12.",
        ],
      },
      {
        id: "no-show",
        heading: "5. No-shows",
        paragraphs: [
          "A no-show means you did not arrive at the confirmed pickup place by the end of the waiting period, and could not be reached on the contact number given with the booking. It is treated as a late cancellation, and a charge of up to 100% of the transfer price applies.",
          "Before that happens, the driver will wait for the full period in section 6 and will try to reach you on the number you gave. Please keep that number switched on and reachable on the day — it is the single thing that most often prevents a no-show.",
          "What counts as the pickup place, and the waiting period that applies to it, is set out in your written confirmation for that journey.",
          "If you are delayed and can tell us, tell us. A journey we know about is one we can usually still save.",
        ],
      },
      {
        id: "airport-waiting",
        heading: "6. Waiting time for an airport arrival",
        paragraphs: [
          "Where a pickup is based on an arriving flight, the included waiting period is 60 minutes from the flight's actual landing time — not from its scheduled arrival time. The actual landing time is what counts, so a delayed flight does not shorten your waiting period.",
          "The hour is there to absorb passport control, baggage reclaim and the walk to the meeting point. After it, if you have not arrived and cannot be reached, the booking may be treated as a no-show under section 5.",
          "This 60-minute rule is for airport arrivals. For a pickup at a hotel, a cruise port, a railway station or a private address, the waiting period that applies to your journey is stated in your written confirmation, because it depends on where the driver can legally wait. The same is true if your flight is cancelled or diverted, or your baggage is delayed beyond the hour — contact us and we will do what we can to re-arrange rather than charge you.",
        ],
      },
      {
        id: "delays",
        heading: "7. Delays on the road",
        paragraphs: [
          "The intended rule is that an unexpected delay caused by traffic, an accident, roadworks, weather, a demonstration, an official closure or a similar unforeseen event does not by itself entitle you to a refund or a price reduction.",
          "That is meant narrowly. It is not a general exemption. It does not apply where the confirmed service was not provided — where no vehicle arrived, where the vehicle could not carry the party and luggage that had been confirmed, or where the journey was not completed. Those are failures to provide the service, not delays, and this section does not cover them.",
          "Nor does it remove any right you have as a consumer that cannot lawfully be removed.",
        ],
      },
      {
        id: "evidence",
        heading: "8. Supporting evidence for a refund claim",
        paragraphs: [
          "Most cancellations need no evidence at all: the booking record already shows what was confirmed and when the cancellation was received, and where that is enough, nothing further will be asked of you.",
          "Where a claim does turn on something the booking record cannot show, please send the supporting evidence within 5 calendar days of our asking for it. If you need longer, say so and we will agree a date rather than close the claim.",
        ],
      },
      {
        id: "payment",
        heading: "9. Payment, VAT and destination-specific arrangements",
        paragraphs: [
          "You pay the transfer company directly, normally to the driver at the end of the journey, by cash or by card where that company accepts it. Some journeys or destinations are arranged differently; what applies to yours is stated in your quotation or booking confirmation before you confirm.",
          "Where VAT or another tax applies, it is included and identified before you confirm, and the total shown to you is the total payable. No tax rate is stated on this page, because it depends on the journey and on the company carrying it out.",
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
          "If a confirmed journey cannot be provided — no vehicle arrives, the vehicle cannot carry the party and luggage that were confirmed, the transfer company cancels, or the journey is not completed — you are not charged for it. Any advance payment is refunded in full, on the same 5-to-7-business-day basis as section 3, and no cancellation or no-show charge applies.",
          "Tell us as soon as you can and we will try to arrange an alternative. Where we cannot, nothing on this page limits what you may be owed: your rights under the consumer law that applies to you apply in full, and in some circumstances they give you more than a refund.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "11. How to cancel",
        paragraphs: [
          "Cancel in writing, by email. Write to the address in your booking confirmation, or to the address below if you no longer have it — both reach us. The time your cancellation is received is what every deadline on this page is measured against, so send it as soon as you know.",
          "Tell us the name on the booking and the date and time of the journey. You do not have to give a reason, though it helps us if a charge might otherwise apply.",
        ],
        bullets: [
          `Cancellations contact: ${contactEmail}`,
        ],
      },
      {
        id: "consumer-rights",
        heading: "12. Your rights as a consumer",
        paragraphs: [
          "Nothing in this policy removes or limits any right you have as a consumer that cannot lawfully be removed or limited. Where a provision here conflicts with such a right, the right applies.",
          "If you are a consumer, the mandatory consumer-protection law of the country where you live applies to you whatever this page says. Nothing here asks you to give that up.",
        ],
      },
      {
        id: "changes",
        heading: "13. Changes to this policy",
        paragraphs: [
          "This policy carries the date it last changed, at the top of the page. The version that applies to a booking is the one in force when that booking was confirmed.",
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
          detail: "What we collect, how we use it, and how long we keep it.",
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
        "Come cancellare, la regola delle 24 ore, la mancata presentazione, i 60 minuti di attesa in aeroporto, i rimborsi e le eccezioni che si applicano.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Cancellazioni e rimborsi",
    lead:
      "Come cancellare un viaggio confermato, quanto costa cancellare tardi, quanto vi aspettiamo e che cosa succede se il transfer non può essere effettuato.",

    status: {
      stateLabel: "Stato",
      state: "In vigore",
      draftedLabel: "Ultimo aggiornamento",
      drafted: "29 ottobre 2026",
      effectiveLabel: "In vigore dal",
      effective: "29 ottobre 2026",
    },

    tocLabel: "In questa pagina",

    sections: [
      {
        id: "ambito",
        heading: "1. Quando si applica questa pagina",
        paragraphs: [
          "Queste regole si applicano a un viaggio che vi è stato confermato per iscritto. Fanno parte dei nostri Termini e condizioni e vanno lette insieme a essi.",
          "Una cosa da tenere presente in tutta la pagina: il viaggio lo pagate direttamente all'azienda di transfer, non a noi. Nella maggior parte dei casi non c'è quindi alcun anticipo da rimborsare: una penale di cancellazione, quando si applica, è un addebito di quell'azienda, e vi diremo sempre con chiarezza quando ne è in gioco una.",
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
              "Qualsiasi importo versato prima del viaggio. Quasi tutti i viaggi si pagano al conducente in giornata, quindi di norma non c'è alcun anticipo. Quando invece ne è previsto uno per la vostra prenotazione, il preventivo e la conferma lo indicano prima che confermiate.",
          },
        ],
      },
      {
        id: "oltre-24",
        heading: "3. Cancellazione oltre 24 ore prima della presa in carico",
        paragraphs: [
          "Se cancellate più di 24 ore prima dell'orario di presa in carico confermato, non c'è nulla da pagare. Avvisateci appena potete — basta una e-mail — e cancelleremo noi la prenotazione presso l'azienda di transfer.",
          "Se per il vostro viaggio era previsto un anticipo, viene rimborsato per intero. Il rimborso viene disposto entro 5-7 giorni lavorativi dalla conferma della cancellazione; quanto impieghi poi a comparire sul vostro conto dipende dalla vostra banca o dall'emittente della carta.",
          "Al rimborso non viene applicata alcuna trattenuta, spesa di gestione o commissione.",
        ],
      },
      {
        id: "entro-24",
        heading: "4. Cancellazione nelle 24 ore precedenti",
        paragraphs: [
          "Cancellare nelle 24 ore precedenti l'orario di presa in carico confermato comporta una penale fino al 100% del prezzo del transfer. A quel punto veicolo e conducente sono già impegnati sul vostro viaggio e di norma lo slot non è più rivendibile.",
          "Se era stato versato un anticipo, la penale vi viene imputata. In caso contrario, l'azienda di transfer può richiedervela.",
          "Questo viene ripetuto al momento della prenotazione, prima che confermiate, così non è mai qualcosa che scoprite dopo.",
          "Non applicheremo la penale piena in modo meccanico. Se i vostri programmi cambiano per una ragione fuori dal vostro controllo — malattia, un lutto, un volo cancellato o dirottato — ditecelo e ne parleremo noi con l'azienda di transfer per vostro conto. In ogni caso valgono i vostri diritti di consumatori: vedete il punto 12.",
        ],
      },
      {
        id: "mancata-presentazione",
        heading: "5. Mancata presentazione",
        paragraphs: [
          "Si ha mancata presentazione quando non vi siete presentati nel luogo di presa in carico confermato entro il termine di attesa e non siete stati raggiungibili al numero indicato con la prenotazione. Viene trattata come una cancellazione tardiva e comporta un addebito fino al 100% del prezzo del transfer.",
          "Prima che ciò accada, il conducente aspetta per tutto il tempo previsto al punto 6 e prova a raggiungervi al numero che avete indicato. Tenete quel numero acceso e raggiungibile in giornata: è la cosa che più spesso evita una mancata presentazione.",
          "Che cosa sia il luogo di presa in carico e quale termine di attesa si applichi risulta dalla vostra conferma scritta per quel viaggio.",
          "Se siete in ritardo e potete avvisarci, avvisateci. Un viaggio di cui sappiamo è un viaggio che di solito si riesce ancora a salvare.",
        ],
      },
      {
        id: "attesa-aeroporto",
        heading: "6. Attesa per un arrivo in aeroporto",
        paragraphs: [
          "Quando la presa in carico si basa su un volo in arrivo, l'attesa compresa è di 60 minuti dall'orario effettivo di atterraggio del volo, non da quello previsto. Conta l'atterraggio effettivo: un volo in ritardo non riduce quindi il vostro tempo di attesa.",
          "L'ora serve ad assorbire controllo passaporti, ritiro bagagli e il tragitto fino al punto di incontro. Trascorsa, se non vi siete presentati e non siete rintracciabili, la prenotazione può essere trattata come mancata presentazione ai sensi del punto 5.",
          "Questa regola dei 60 minuti riguarda gli arrivi aeroportuali. Per una presa in carico presso un hotel, un porto crocieristico, una stazione ferroviaria o un indirizzo privato, il termine di attesa che vale per il vostro viaggio è indicato nella conferma scritta, perché dipende da dove il conducente può legittimamente attendere. Lo stesso vale se il vostro volo viene cancellato o dirottato, o se i bagagli tardano oltre l'ora: contattateci e faremo il possibile per riorganizzare invece di addebitarvi qualcosa.",
        ],
      },
      {
        id: "ritardi",
        heading: "7. Ritardi sulla strada",
        paragraphs: [
          "La regola prevista è che un ritardo imprevisto dovuto a traffico, a un incidente, a cantieri, al meteo, a una manifestazione, a una chiusura disposta dalle autorità o a un evento imprevedibile analogo non dia di per sé diritto a un rimborso o a una riduzione di prezzo.",
          "Va intesa in senso stretto. Non è un'esenzione generale. Non vale quando il servizio confermato non è stato prestato: quando nessun veicolo si è presentato, quando il veicolo non poteva accogliere il gruppo e i bagagli confermati, o quando il viaggio non è stato completato. Quelle sono mancate prestazioni, non ritardi, e questa sezione non le copre.",
          "Non elimina inoltre alcun diritto che vi spetti come consumatori e che non possa essere legittimamente eliminato.",
        ],
      },
      {
        id: "documentazione",
        heading: "8. Documentazione a supporto di una richiesta di rimborso",
        paragraphs: [
          "La maggior parte delle cancellazioni non richiede alcuna documentazione: la traccia della prenotazione mostra già che cosa era stato confermato e quando è arrivata la cancellazione, e dove questo basta non vi verrà chiesto altro.",
          "Quando invece una richiesta dipende da un elemento che la traccia della prenotazione non può dimostrare, inviateci la documentazione entro 5 giorni di calendario da quando ve la chiediamo. Se vi serve più tempo, ditecelo: concorderemo una data invece di chiudere la pratica.",
        ],
      },
      {
        id: "pagamenti",
        heading: "9. Pagamenti, IVA e modalità per destinazione",
        paragraphs: [
          "Pagate direttamente all'azienda di transfer, di norma al conducente al termine del viaggio, in contanti o con carta dove quell'azienda la accetta. Alcuni viaggi o destinazioni sono organizzati diversamente: quanto vale per il vostro è indicato nel preventivo o nella conferma di prenotazione, prima che confermiate.",
          "Quando si applica l'IVA o un'altra imposta, è compresa e viene indicata prima che confermiate, e il totale che vi viene mostrato è l'importo dovuto. In questa pagina non è indicata alcuna aliquota, perché dipende dal viaggio e dall'azienda che lo effettua.",
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
          "Se un viaggio confermato non può essere effettuato — non arriva alcun veicolo, il veicolo non può trasportare il gruppo e i bagagli confermati, l'azienda di transfer annulla oppure il viaggio non viene portato a termine — non vi viene addebitato nulla. L'eventuale anticipo viene rimborsato per intero, con gli stessi 5-7 giorni lavorativi del punto 3, e non si applica alcuna penale di cancellazione o per mancata presentazione.",
          "Avvisateci appena potete e cercheremo di organizzare un'alternativa. Dove non ci riuscissimo, nulla in questa pagina limita quanto vi potrebbe essere dovuto: i diritti che vi riconosce la legge sul consumo a voi applicabile valgono per intero e in alcuni casi vi danno più di un rimborso.",
        ],
      },
      {
        id: "come-cancellare",
        heading: "11. Come cancellare",
        paragraphs: [
          "Cancellate per iscritto, via e-mail. Scrivete all'indirizzo indicato nella conferma di prenotazione, oppure a quello qui sotto se non l'avete più: arrivano entrambi a noi. Il momento in cui la cancellazione viene ricevuta è quello su cui si calcola ogni termine di questa pagina, quindi inviatela appena lo sapete.",
          "Indicate il nome sulla prenotazione e la data e l'ora del viaggio. Non dovete darci una motivazione, anche se ci aiuta quando altrimenti si applicherebbe una penale.",
        ],
        bullets: [
          `Recapito per le cancellazioni: ${contactEmail}`,
        ],
      },
      {
        id: "diritti",
        heading: "12. I vostri diritti come consumatori",
        paragraphs: [
          "Nulla in questa pagina elimina o limita diritti che vi spettano come consumatori e che non possono essere legittimamente eliminati o limitati. Quando una disposizione confligge con un diritto di quel tipo, prevale il diritto.",
          "Se siete consumatori, si applica comunque la normativa imperativa a tutela dei consumatori del Paese in cui risiedete, qualunque cosa dica questa pagina. Nulla qui vi chiede di rinunciarvi.",
        ],
      },
      {
        id: "modifiche",
        heading: "13. Modifiche a questa pagina",
        paragraphs: [
          "Questa pagina riporta in cima la data dell'ultima modifica. La versione che si applica a una prenotazione è quella in vigore quando la prenotazione è stata confermata.",
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
          detail: "Quali dati raccogliamo, come li usiamo e per quanto tempo li conserviamo.",
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
