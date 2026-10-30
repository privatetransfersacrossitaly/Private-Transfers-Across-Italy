import { contactEmail } from "@/lib/site";
import type { LocalizedLegal } from "./types";

/**
 * Terms and Conditions. In force from 29 October 2026.
 *
 * ── The three-party shape, stated once in §2 ──────────────────────────────
 * The customer deals with one person, who arranges the journey; a local
 * transfer company performs it and takes payment directly. §2 sets that out
 * as two `terms` entries — what we do, what the transfer company does —
 * because the whole document depends on a reader holding both in mind, and a
 * paragraph is easier to skim past than a pair of labelled rows.
 *
 * That split also drives §13. The site is not the carrier and must not read
 * as if it were, but a customer should not be handed a jurisdictional puzzle
 * when something goes wrong on the road. So §13 allocates responsibility
 * plainly and then commits to helping take a problem up with the company
 * rather than retreating behind the distinction.
 *
 * ── Deliberately absent ───────────────────────────────────────────────────
 * No governing law, no chosen court, no VAT rate, no limitation of liability.
 * The VAT rate depends on the journey and the company. The other three are
 * absent on purpose: a non-EU operator choosing its own law and forum against
 * EU consumers is both unenforceable and a bad look, so §17 says instead that
 * the customer keeps the mandatory protection of their own country. An
 * unstated limitation leaves the ordinary law in place, which is the safer
 * default of the two.
 *
 * ── The one commercial fact kept off the page ─────────────────────────────
 * How this is paid for. §5 says the customer pays the transfer company and
 * that no fee is added — both true and both the customer's business. What the
 * arrangement is between this site and that company is not, and no section
 * hints at it.
 */
export const terms: LocalizedLegal = {
  en: {
    meta: {
      title: "Terms and Conditions",
      description:
        "How our transfer quotation service works: requests, quotations, booking confirmation, payment direct to the transfer company, changes, cancellations and responsibilities.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Terms and Conditions",
    lead:
      "How this service works, what we do and do not do, and the terms that apply to a journey arranged through us.",

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
        heading: "1. Scope",
        paragraphs: [
          "These terms govern your use of this website and the arrangement of a private transfer requested through it. By sending a request you accept them.",
          "They apply alongside our Privacy Policy and our Cancellation and Refund Policy, both of which form part of them.",
        ],
      },
      {
        id: "what-this-is",
        heading: "2. What this website is",
        paragraphs: [
          "Private Transfers Across Italy is an independent service that arranges private transfers in Italy. It is operated and managed by an individual rather than by a company, and that person handles your enquiry personally from first message to completed journey.",
          "We publish what is actually known about reaching places by road — where a vehicle may go, where it may stop, and which authority says so — we take the details of your journey, and we arrange it with a transfer company near the route.",
          "We do not own vehicles, we do not employ drivers and we do not carry passengers ourselves. The journey is carried out by a local transfer company, which is identified to you before you confirm.",
        ],
        terms: [
          {
            term: "What we do",
            detail:
              "Answer your enquiry, prepare the quotation, choose and brief the transfer company, confirm the arrangements in writing, and stay reachable about your journey before and on the day.",
          },
          {
            term: "What the transfer company does",
            detail:
              "Supplies the vehicle and the driver, performs the journey, and takes payment from you for it directly. It is responsible for holding the licences, permits and insurance required to carry you.",
          },
        ],
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
          "You pay the transfer company directly for your journey. We do not take payment for it, and this website collects no card or bank details at any point — there is no payment page on it, and you will never be asked to enter card details here.",
          "Payment is normally made to the driver at the end of the journey, by cash or by card where the company accepts it. Some journeys or destinations may be arranged differently; where that is the case, your quotation and booking confirmation will say so before you are asked to confirm.",
        ],
        bullets: [
          "The total amount payable is stated before you are asked to confirm.",
          "How and when to pay is stated before you are asked to confirm.",
          "We add no booking fee, administration fee or card-handling fee. The price you are quoted is the price for the journey.",
          "If anyone asks you to pay us by card through this website, it is not us. Please tell us at the address in section 18.",
        ],
      },
      {
        id: "tax",
        heading: "6. VAT and other charges",
        paragraphs: [
          "Where VAT or another tax applies to a journey, it is included in the quotation and identified there. The total you are shown is the total payable: there is nothing further to add at the end.",
          "No tax rate is stated on this page, because it depends on the journey and on the transfer company carrying it out. Your quotation states the position for your booking.",
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
          "In summary, and subject to that policy: a cancellation more than 24 hours before the confirmed pickup time may qualify for a refund of an advance payment; a cancellation at or within 24 hours attracts a charge of up to the full confirmed price. The Cancellation and Refund Policy sets out both in full, along with the 60-minute airport waiting period, no-shows, and what happens if the transfer cannot be provided.",
        ],
      },
      {
        id: "disruption",
        heading: "11. Delays and events outside reasonable control",
        paragraphs: [
          "Road journeys are affected by traffic, weather, roadworks, accidents, demonstrations, official closures and similar events. Where a journey is delayed by something of that kind, the delay does not by itself mean the service was not provided.",
          "That is a narrow statement and it is meant narrowly. It does not mean that every delay is excused, and it does not apply where the confirmed service was not provided at all — where no vehicle arrived, where the vehicle was unsuitable for the party and luggage that had been confirmed, or where the journey was not completed. Those are failures to provide the service and are dealt with as such.",
        ],
      },
      {
        id: "complaints",
        heading: "12. Complaints",
        paragraphs: [
          "If something goes wrong, the first step is to say so in writing, with the booking details and what happened, as soon as you reasonably can.",
          "Write to the address below. No response time is promised here, because none has been set; a target for acknowledging a complaint will be published before bookings begin.",
        ],
        bullets: [
          `Complaints contact: ${contactEmail}`,
        ],
      },
      {
        id: "liability",
        heading: "13. Responsibility and your rights as a consumer",
        paragraphs: [
          "Nothing in these terms removes or limits any right you have as a consumer that cannot lawfully be removed or limited. Where any provision here conflicts with such a right, the right applies and the provision does not.",
          "We are responsible for arranging your journey as described in your confirmation: for quoting it accurately, for booking it with a suitable company, and for passing on the details correctly. If we get that wrong, tell us and we will put it right.",
          "The transfer company is responsible for performing the journey — the vehicle, the driver, the licences and insurance, and the way the journey is carried out. Where something goes wrong on the road, we will help you take it up with them, and we will not hide behind the distinction.",
          "Neither of us is responsible for what neither of us can control: traffic, weather, strikes, official road closures and similar events. Section 11 explains how those are handled.",
        ],
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
          "How we handle personal information is set out in the Privacy Policy. In short: reading this site collects nothing — no cookies, no analytics, no third-party content — and what you type into the quotation form comes to us so that we can quote for your journey and arrange it.",
        ],
      },
      {
        id: "changes-to-terms",
        heading: "16. Changes to these terms",
        paragraphs: [
          "These terms carry the date they last changed, at the top of the page. The terms that apply to a booking are the ones in force when that booking was confirmed, not a later version.",
        ],
      },
      {
        id: "law",
        heading: "17. Disputes",
        paragraphs: [
          "If something goes wrong, please write to us first, at the address in section 18. Most things are settled that way, and quickly.",
          "These terms do not choose a governing law or a court, and they do not ask you to give up the protection of your own. If you are a consumer, the mandatory consumer-protection law of the country where you live applies to you whatever a contract says, and you keep the right to bring a claim in the courts of that country.",
          "Where a dispute concerns how the journey itself was performed, it is a matter between you and the transfer company that carried it out. We will give you its details and help you take it up with them.",
        ],
      },
      {
        id: "contact",
        heading: "18. Contact",
        paragraphs: [
          "Two ways to reach us: the quotation form, for describing a journey you would like quoted, and the email address below for everything else. Your booking confirmation tells you how to reach us on the day of travel.",
        ],
        bullets: [`Contact: ${contactEmail}`],
      },
    ],

    related: {
      heading: "The other policies",
      items: [
        {
          page: "privacy",
          label: "Privacy Policy",
          detail: "What we collect, how we use it, and how long we keep it.",
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
        "Come funziona il nostro servizio di preventivi per transfer: richieste, preventivi, conferma, pagamento diretto all'azienda di transfer, modifiche, cancellazioni e responsabilità.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Termini e condizioni",
    lead:
      "Come funziona questo servizio, che cosa facciamo e che cosa non facciamo, e quali termini si applicano a un viaggio organizzato tramite noi.",

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
        heading: "1. Ambito",
        paragraphs: [
          "Questi termini disciplinano l'uso di questo sito e l'organizzazione di un transfer privato richiesto tramite esso. Inviando una richiesta li accettate.",
          "Si applicano insieme all'Informativa sulla privacy e alla pagina Cancellazioni e rimborsi, che ne fanno parte.",
        ],
      },
      {
        id: "che-cos-e",
        heading: "2. Che cos'è questo sito",
        paragraphs: [
          "Private Transfers Across Italy è un servizio indipendente che organizza transfer privati in Italia. È gestito da una persona fisica e non da una società, ed è quella persona a seguire personalmente la vostra richiesta, dal primo messaggio al viaggio concluso.",
          "Pubblichiamo ciò che si sa davvero sul raggiungere i luoghi su strada — dove un veicolo può andare, dove può fermarsi e chi lo stabilisce — raccogliamo i dati del vostro viaggio e lo organizziamo con un'azienda di transfer della zona.",
          "Non possediamo veicoli, non impieghiamo conducenti e non trasportiamo noi stessi passeggeri. Il viaggio è effettuato da un'azienda di transfer locale, che vi viene indicata prima della conferma.",
        ],
        terms: [
          {
            term: "Che cosa facciamo noi",
            detail:
              "Rispondiamo alla vostra richiesta, prepariamo il preventivo, scegliamo e istruiamo l'azienda di transfer, confermiamo per iscritto le modalità e restiamo raggiungibili sul vostro viaggio prima e durante la giornata.",
          },
          {
            term: "Che cosa fa l'azienda di transfer",
            detail:
              "Mette a disposizione veicolo e conducente, effettua il viaggio e ne riceve direttamente il pagamento da voi. È responsabile delle licenze, delle autorizzazioni e delle coperture assicurative necessarie per trasportarvi.",
          },
        ],
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
          "Il viaggio lo pagate direttamente all'azienda di transfer. Noi non ne incassiamo il prezzo, e questo sito non raccoglie in nessun momento dati di carte o conti: non esiste una pagina di pagamento e non vi verrà mai chiesto di inserire qui i dati di una carta.",
          "Di norma si paga al conducente al termine del viaggio, in contanti o con carta dove l'azienda la accetta. Alcuni viaggi o destinazioni possono essere organizzati diversamente: in quel caso il preventivo e la conferma di prenotazione lo indicano prima che vi sia chiesto di confermare.",
        ],
        bullets: [
          "L'importo totale dovuto è indicato prima che vi sia chiesto di confermare.",
          "Come e quando pagare è indicato prima che vi sia chiesto di confermare.",
          "Non aggiungiamo costi di prenotazione, di gestione pratica o di incasso con carta. Il prezzo che vi viene indicato è il prezzo del viaggio.",
          "Se qualcuno vi chiede di pagarci con carta tramite questo sito, non siamo noi. Segnalatecelo al recapito indicato al punto 18.",
        ],
      },
      {
        id: "imposte",
        heading: "6. IVA e altri oneri",
        paragraphs: [
          "Quando a un viaggio si applica l'IVA o un'altra imposta, è compresa nel preventivo e vi è indicata. Il totale che vedete è il totale dovuto: non c'è nulla da aggiungere alla fine.",
          "In questa pagina non viene indicata alcuna aliquota, perché dipende dal viaggio e dall'azienda di transfer che lo effettua. Il vostro preventivo indica la situazione relativa alla vostra prenotazione.",
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
          "In sintesi, e fatto salvo quanto previsto in quella pagina: una cancellazione più di 24 ore prima dell'orario di presa in carico confermato può dare diritto al rimborso di un pagamento anticipato; una cancellazione nelle 24 ore precedenti comporta un addebito fino all'intero prezzo confermato. La pagina Cancellazioni e rimborsi illustra entrambe per esteso, insieme ai 60 minuti di attesa in aeroporto, alla mancata presentazione e a che cosa succede se il transfer non può essere effettuato.",
        ],
      },
      {
        id: "disservizi",
        heading: "11. Ritardi ed eventi fuori dal controllo ragionevole",
        paragraphs: [
          "I viaggi su strada risentono di traffico, meteo, cantieri, incidenti, manifestazioni, chiusure disposte dalle autorità ed eventi simili. Quando un viaggio subisce un ritardo di questo tipo, il ritardo non significa di per sé che il servizio non sia stato prestato.",
          "È un'affermazione circoscritta, e va intesa in senso stretto. Non significa che ogni ritardo sia giustificato e non vale quando il servizio confermato non è stato affatto prestato: quando nessun veicolo si è presentato, quando il veicolo non era adatto al gruppo e ai bagagli confermati, o quando il viaggio non è stato completato. Quelle sono mancate prestazioni e come tali vengono trattate.",
        ],
      },
      {
        id: "reclami",
        heading: "12. Reclami",
        paragraphs: [
          "Se qualcosa va storto, il primo passo è scriverlo, con i dati della prenotazione e il racconto dell'accaduto, appena ragionevolmente possibile.",
          "Scrivete al recapito indicato qui sotto. Qui non viene promesso alcun tempo di risposta, perché non ne è stato fissato alcuno: un termine per il riscontro a un reclamo sarà pubblicato prima dell'avvio delle prenotazioni.",
        ],
        bullets: [
          `Recapito reclami: ${contactEmail}`,
        ],
      },
      {
        id: "responsabilita",
        heading: "13. Responsabilità e diritti del consumatore",
        paragraphs: [
          "Nulla in questi termini elimina o limita diritti che vi spettano come consumatori e che non possono essere legittimamente eliminati o limitati. Quando una disposizione di questa pagina confligge con un diritto di quel tipo, prevale il diritto e non la disposizione.",
          "Noi rispondiamo dell'organizzazione del vostro viaggio come descritta nella conferma: del preventivo corretto, della scelta di un'azienda adeguata e della trasmissione esatta dei dati. Se sbagliamo, ditecelo e lo sistemiamo.",
          "L'azienda di transfer risponde dell'esecuzione del viaggio: veicolo, conducente, licenze e assicurazioni, e il modo in cui il viaggio viene svolto. Se qualcosa va storto sulla strada, vi aiutiamo a farlo valere nei suoi confronti e non ci nascondiamo dietro questa distinzione.",
          "Nessuno dei due risponde di ciò che nessuno dei due può controllare: traffico, meteo, scioperi, chiusure stradali disposte dalle autorità ed eventi simili. Il punto 11 spiega come vengono gestiti.",
        ],
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
          "Il trattamento dei dati personali è descritto nell'informativa sulla privacy. In sintesi: leggere questo sito non raccoglie nulla — niente cookie, niente analisi, nessun contenuto di terze parti — e quanto scrivete nel modulo di preventivo arriva a noi perché possiamo quotare il vostro viaggio e organizzarlo.",
        ],
      },
      {
        id: "modifiche-termini",
        heading: "16. Modifiche a questi termini",
        paragraphs: [
          "Questi termini riportano in cima alla pagina la data dell'ultima modifica. A una prenotazione si applicano i termini in vigore al momento della conferma, non una versione successiva.",
        ],
      },
      {
        id: "legge",
        heading: "17. Controversie",
        paragraphs: [
          "Se qualcosa non va, scriveteci prima a noi, al recapito indicato al punto 18. Quasi tutto si risolve così, e in fretta.",
          "Questi termini non scelgono una legge applicabile né un foro, e non vi chiedono di rinunciare alla tutela della vostra. Se siete consumatori, si applica comunque la normativa imperativa a tutela dei consumatori del Paese in cui risiedete, qualunque cosa preveda un contratto, e conservate il diritto di agire davanti ai giudici di quel Paese.",
          "Quando la controversia riguarda il modo in cui il viaggio è stato effettuato, è una questione fra voi e l'azienda di transfer che lo ha svolto. Vi forniamo i suoi dati e vi aiutiamo a farla valere nei suoi confronti.",
        ],
      },
      {
        id: "contatti",
        heading: "18. Contatti",
        paragraphs: [
          "Due modi per raggiungerci: il modulo di preventivo, per descrivere un viaggio di cui volete il preventivo, e l'indirizzo e-mail qui sotto per tutto il resto. La conferma di prenotazione vi indica come raggiungerci il giorno del viaggio.",
        ],
        bullets: [`Contatto: ${contactEmail}`],
      },
    ],

    related: {
      heading: "Le altre pagine legali",
      items: [
        {
          page: "privacy",
          label: "Informativa sulla privacy",
          detail: "Quali dati raccogliamo, come li usiamo e per quanto tempo li conserviamo.",
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
