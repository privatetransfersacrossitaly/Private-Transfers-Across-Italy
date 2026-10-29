import type { LocalizedLegal } from "./types";

/**
 * Privacy Policy — draft.
 *
 * ── What the audit established, and what it did not ───────────────────────
 * The "current processing" section is unusually short because it is true: a
 * production build was served and driven in a real browser across four pages,
 * and it made zero third-party requests, set zero cookies, and left
 * localStorage and sessionStorage empty. There is no form, no contact link
 * and no analytics, so the site collects nothing at all today. That is a
 * measured result, not an assumption, and it is the one part of this policy
 * that rests on evidence rather than on a decision still to be taken.
 *
 * Everything else is conditional. The controller has been stated to be an
 * individual established outside the EU/EEA, which means GDPR's application
 * runs through Article 3(2) rather than Article 3(1) — an analysis this
 * document flags for legal review rather than asserting. No supervisory
 * authority is named for the same reason: naming the Garante would imply an
 * Italian establishment that has not been stated.
 *
 * The planned-processing section lists exactly the fields in
 * `lib/quote/schema.ts`, because that is the only description of what the
 * form will collect that actually exists.
 */
export const privacy: LocalizedLegal = {
  en: {
    meta: {
      title: "Privacy Policy",
      description:
        "What this website collects today, what it will collect once the inquiry form exists, and how that information would be used. A working draft.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    lead:
      "What this website does with personal information — which, at the time of writing, is nothing, because there is no way yet to send it any.",

    draft: {
      label: "Draft — not in force",
      body:
        "This policy is a working draft prepared ahead of launch. It has not been reviewed by a lawyer, it is not yet in force, and several provisions depend on business facts that have not been confirmed. Those are marked where they appear. Nothing on this page should be relied on as a current statement of practice.",
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
        heading: "1. What this policy covers",
        paragraphs: [
          "This policy describes how personal information is handled in connection with this website and with requests for private transfers made through it. It covers the website itself and the handling of a transfer inquiry once one can be sent.",
          "It does not cover any other website, and it does not cover what a transport provider does with information after a journey has been arranged with them. Where that distinction matters, it is set out in section 7.",
        ],
      },
      {
        id: "controller",
        heading: "2. Who is responsible for your information",
        paragraphs: [
          "The person responsible for decisions about personal information handled through this website — the data controller — is an individual operating this site as a sole trader, established outside the European Union and the European Economic Area.",
          "Their name, the country in which they are established and an address for privacy correspondence are not published on this page because they have not yet been confirmed for publication. A policy that named a controller incorrectly would be worse than one that says the detail is outstanding.",
        ],
        bullets: [
          "Controller: [TO BE CONFIRMED — name of the individual acting as controller]",
          "Country of establishment: [TO BE CONFIRMED — country]",
          "Privacy contact: [TO BE CONFIRMED — email address or other channel for privacy requests]",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "A privacy policy must identify the controller and give a usable way to reach them. Until those three details are supplied and published here, this policy is incomplete and should not be relied on.",
        },
      },
      {
        id: "today",
        heading: "3. What this website collects today: nothing",
        paragraphs: [
          "This is unusual enough to be worth stating plainly. At the time this policy was drafted, the website has no inquiry form, no contact form, no email address, no telephone number and no messaging link. There is no mechanism by which a visitor can transmit personal information to it.",
          "The site was also tested in a browser rather than merely read in source. Across the pages checked, it made no requests to any third-party host, set no cookies, and wrote nothing to the browser's local or session storage. Typefaces are served from this site rather than from a font service, and every image is a local file.",
        ],
        bullets: [
          "No cookies are set — not for analytics, not for advertising, and not for preferences.",
          "No analytics or tracking service is present: no Google Analytics, no tag manager, no advertising pixel, no session recording.",
          "No content is loaded from a third-party host, so no third party receives your IP address through this site.",
          "No account, login or profile exists, so nothing is stored about you between visits.",
        ],
      },
      {
        id: "server-logs",
        heading: "4. Server records",
        paragraphs: [
          "Any website is served by a hosting provider, and hosting providers ordinarily keep technical records of requests — typically including IP addresses, timestamps and the pages requested — for operational and security reasons. That happens at the hosting layer rather than through anything this site does.",
          "The hosting arrangements for this website have not been confirmed, so this policy does not state who the provider is, what they record or how long they keep it.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "The hosting provider, the technical records it keeps and its retention period need to be established, so that this section can describe them specifically rather than in general terms.",
        },
      },
      {
        id: "planned",
        heading: "5. What will be collected when the inquiry form exists",
        paragraphs: [
          "A quotation form is planned. It is not built, and nothing described in this section happens yet. It is set out in advance so that the position is clear before the form goes live rather than after.",
          "The form is designed to collect the information needed to price and arrange a journey, and nothing beyond it:",
        ],
        terms: [
          {
            term: "The journey",
            detail:
              "Pickup and drop-off locations, the date and time, and the same again for a return leg where one is requested.",
          },
          {
            term: "Travel reference",
            detail:
              "A flight, train or ship number, where you choose to give one. It is optional, and it is what allows a delayed arrival to be worked around.",
          },
          {
            term: "The party",
            detail:
              "The number of adults and children, the ages of any children — because child restraints depend on them — and the number of hold and cabin bags.",
          },
          {
            term: "Contact details",
            detail: "Your name, email address and telephone number.",
          },
          {
            term: "Anything you add",
            detail:
              "A free-text notes field. Please do not put health information, or anything else you would not want handled as ordinary correspondence, into it.",
          },
          {
            term: "Technical context",
            detail:
              "The language the request was made in and the time the server received it. Neither is taken from your browser's history or profile.",
          },
        ],
      },
      {
        id: "purposes",
        heading: "6. Why that information would be used",
        paragraphs: [
          "Only for dealing with the request you send and the journey that may follow from it.",
        ],
        bullets: [
          "To work out whether the journey can be arranged, and to price it.",
          "To reply to you with a quotation and the arrangement that goes with it.",
          "To arrange the journey with a transport provider if you confirm it.",
          "To keep a record of what was agreed, so that a later question about it can be answered.",
          "To deal with a complaint, a cancellation or a refund claim.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "The legal basis for each of these uses has not been determined, and depends on the applicable-law question in section 11. This policy does not state one, because stating the wrong basis is itself a failure.",
        },
      },
      {
        id: "sharing",
        heading: "7. Sharing with a transport provider",
        paragraphs: [
          "This website arranges inquiries. When a journey is confirmed, the transport itself is provided by a separate operating business, and the details needed to carry out the journey would be passed to them — ordinarily the pickup and drop-off, the date and time, the travel reference, the size of the party and its luggage, and a contact name and number so the journey can be completed.",
          "That business is not named on this page. The relationship has not been confirmed in a form that can be published, and naming an operator that has not been verified would be exactly the kind of invented detail this site does not publish.",
          "Nothing is sold, and nothing is shared for anyone else's marketing.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "The identity of the operating business, and whether it acts as a separate controller or as a processor, both need to be established. The answer changes what this section has to say and what, if anything, has to be put in writing between the two parties.",
        },
      },
      {
        id: "systems",
        heading: "8. Systems used to handle a request",
        paragraphs: [
          "A customer-relationship system and an email arrangement are planned for this website. They are planned as this website's own, independent of any other site or business.",
          "Neither exists yet. No customer-relationship system holds any data for this website, and no email arrangement is in place. When they are, this section will name what they are and where they operate, because a system that stores your information is something you are entitled to know about.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "The customer-relationship system, the email provider and the hosting provider all need to be chosen and named here, together with where each one stores data.",
        },
      },
      {
        id: "international",
        heading: "9. Information leaving the country you are in",
        paragraphs: [
          "The controller is established outside the European Union and the European Economic Area. If you are in the EU or the EEA, that means information you send would be handled in a country outside it.",
          "Where that happens, the law of your country may require a specific safeguard to be in place. No such safeguard is described here, because none has yet been put in place and describing one that did not exist would be a false assurance.",
        ],
        pending: {
          label: "Legal review required",
          body:
            "Whether an international-transfer safeguard is required, and which mechanism would be appropriate, needs legal advice once the controller's country of establishment and the systems in section 8 are settled.",
        },
      },
      {
        id: "retention",
        heading: "10. How long information would be kept",
        paragraphs: [
          "No retention period has been set. Rather than state a figure that has not been decided and would not be followed, this policy says that the question is open.",
          "A reasonable approach, which has not yet been adopted, is to keep an inquiry that does not become a booking for a short period and a confirmed booking for as long as a question about it could still arise — but that is a recommendation for the owner to accept or change, not a rule currently in force.",
        ],
        pending: {
          label: "Confirmation required before launch",
          body:
            "Retention periods need to be decided for inquiries that do not become bookings, for confirmed bookings, and for correspondence about complaints or refunds.",
        },
      },
      {
        id: "security",
        heading: "11. Security",
        paragraphs: [
          "The website is served over an encrypted connection. The quotation form is designed so that a submission is validated on the server and delivered server to server, with no credential or endpoint exposed to the browser — but that form is not live, so this describes a design rather than an operating system.",
          "No absolute assurance is offered here. No one can promise that information sent over the internet cannot be intercepted, and a policy that said otherwise would be making a promise it could not keep.",
        ],
      },
      {
        id: "rights",
        heading: "12. Your rights over your information",
        paragraphs: [
          "Depending on where you are and which law applies, you may have the right to ask what information is held about you, to have it corrected, to have it deleted, to object to or restrict how it is used, and to receive a copy of it.",
          "Because no information is collected yet and the applicable law has not been settled, this policy does not set out a procedure or a response time. Once a privacy contact exists, a request made to it will be answered.",
        ],
        pending: {
          label: "Legal review required",
          body:
            "Which law applies to this website's processing — and therefore which rights and which deadlines are enforceable — has not been determined. Section 2 and section 9 both depend on the same answer.",
        },
      },
      {
        id: "complaints",
        heading: "13. Complaints",
        paragraphs: [
          "If you are unhappy with how your information has been handled, the first step is to contact the controller at the address that will be published in section 2.",
          "You may also be able to complain to a data protection authority in the country where you live. This policy does not name one, because the supervisory authority with jurisdiction depends on the controller's establishment and on the applicable-law question above.",
        ],
      },
      {
        id: "children",
        heading: "14. Children",
        paragraphs: [
          "This website is intended for adults arranging travel. It is not directed at children and does not knowingly collect information from them.",
          "Where a transfer is for a family, the ages of children travelling are asked for only because child restraints depend on them, and that information is given by the adult making the request rather than by the child.",
        ],
      },
      {
        id: "changes",
        heading: "15. Changes to this policy",
        paragraphs: [
          "This policy carries the date it was drafted and will carry the date it comes into force. When it changes materially, the date will change with it.",
          "While it remains a draft, it should be read as a statement of intent rather than as a description of current practice — except for section 3, which describes what the website measurably does today.",
        ],
      },
      {
        id: "contact",
        heading: "16. Contact",
        paragraphs: [
          "There is no contact channel on this website yet: no form, no email address and no telephone number. When a privacy contact exists it will be published in section 2 and repeated here.",
        ],
        bullets: [
          "Privacy contact: [TO BE CONFIRMED — email address or other channel for privacy requests]",
        ],
      },
    ],

    related: {
      heading: "The other policies",
      items: [
        {
          page: "terms",
          label: "Terms and Conditions",
          detail: "What this website does, and what a quotation request is and is not.",
        },
        {
          page: "cancellation",
          label: "Cancellation and Refund Policy",
          detail: "Cancellation deadlines, airport waiting time and refund handling.",
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
      title: "Privacy",
      description:
        "Che cosa raccoglie oggi questo sito, che cosa raccoglierà quando esisterà il modulo di richiesta e come verrebbero usate le informazioni. Bozza di lavoro.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Informativa sulla privacy",
    lead:
      "Che cosa fa questo sito con i dati personali: al momento in cui scriviamo, nulla, perché non esiste ancora un modo per inviargliene.",

    draft: {
      label: "Bozza — non in vigore",
      body:
        "Questa informativa è una bozza di lavoro preparata prima del lancio. Non è stata esaminata da un legale, non è ancora in vigore e diverse disposizioni dipendono da dati aziendali non ancora confermati, segnalati dove compaiono. Nulla in questa pagina va inteso come descrizione della prassi attuale.",
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
        heading: "1. Che cosa copre questa informativa",
        paragraphs: [
          "Questa informativa descrive come vengono trattati i dati personali in relazione a questo sito e alle richieste di transfer privati inviate attraverso di esso. Riguarda il sito stesso e la gestione di una richiesta di transfer, una volta che sarà possibile inviarne una.",
          "Non riguarda altri siti e non riguarda ciò che un fornitore di trasporto fa dei dati dopo che un viaggio è stato organizzato con lui. Dove la distinzione conta, se ne parla al punto 7.",
        ],
      },
      {
        id: "titolare",
        heading: "2. Chi risponde dei vostri dati",
        paragraphs: [
          "La persona che decide sul trattamento dei dati personali attraverso questo sito — il titolare del trattamento — è una persona fisica che gestisce il sito in proprio, stabilita fuori dall'Unione europea e dallo Spazio economico europeo.",
          "Il nome, il Paese di stabilimento e un recapito per le questioni di privacy non compaiono in questa pagina perché non sono ancora stati confermati per la pubblicazione. Un'informativa che indicasse un titolare sbagliato sarebbe peggio di una che dichiara il dato mancante.",
        ],
        bullets: [
          "Titolare: [DA CONFERMARE — nome della persona fisica titolare del trattamento]",
          "Paese di stabilimento: [DA CONFERMARE — Paese]",
          "Recapito privacy: [DA CONFERMARE — indirizzo e-mail o altro canale per le richieste privacy]",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Un'informativa deve identificare il titolare e indicare un recapito utilizzabile. Finché questi tre dati non saranno forniti e pubblicati qui, l'informativa è incompleta e non va considerata affidabile.",
        },
      },
      {
        id: "oggi",
        heading: "3. Che cosa raccoglie oggi questo sito: nulla",
        paragraphs: [
          "È una cosa abbastanza insolita da meritare una frase esplicita. Nel momento in cui questa informativa è stata redatta, il sito non ha un modulo di richiesta, né un modulo di contatto, né un indirizzo e-mail, né un numero di telefono, né un collegamento di messaggistica. Non esiste alcun meccanismo con cui un visitatore possa trasmettergli dati personali.",
          "Il sito è stato anche provato in un browser, non soltanto letto nel codice. Sulle pagine verificate non ha effettuato richieste verso host di terze parti, non ha impostato cookie e non ha scritto nulla nella memoria locale o di sessione del browser. I caratteri tipografici sono serviti da questo sito e non da un servizio esterno, e ogni immagine è un file locale.",
        ],
        bullets: [
          "Non viene impostato alcun cookie: né di analisi, né pubblicitario, né di preferenza.",
          "Non è presente alcun servizio di analisi o tracciamento: nessun Google Analytics, nessun tag manager, nessun pixel pubblicitario, nessuna registrazione di sessione.",
          "Nessun contenuto viene caricato da host di terze parti, quindi nessun terzo riceve il vostro indirizzo IP tramite questo sito.",
          "Non esistono account, accessi o profili: fra una visita e l'altra non resta memorizzato nulla su di voi.",
        ],
      },
      {
        id: "log",
        heading: "4. Registri del server",
        paragraphs: [
          "Qualsiasi sito viene servito da un fornitore di hosting, e i fornitori di hosting conservano abitualmente registri tecnici delle richieste — di norma indirizzi IP, orari e pagine richieste — per motivi operativi e di sicurezza. Questo avviene al livello dell'hosting, non per effetto di qualcosa che faccia il sito.",
          "Le modalità di hosting di questo sito non sono ancora state confermate: questa informativa non indica perciò chi sia il fornitore, che cosa registri o per quanto tempo lo conservi.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Vanno individuati il fornitore di hosting, i registri tecnici che conserva e il relativo periodo di conservazione, perché questa sezione possa descriverli in concreto e non in generale.",
        },
      },
      {
        id: "previsto",
        heading: "5. Che cosa verrà raccolto quando esisterà il modulo",
        paragraphs: [
          "È previsto un modulo per le richieste di preventivo. Non è realizzato, e nulla di quanto descritto in questa sezione avviene oggi: lo si mette per iscritto in anticipo perché la posizione sia chiara prima che il modulo entri in funzione, e non dopo.",
          "Il modulo è progettato per raccogliere ciò che serve a quotare e organizzare un viaggio, e nient'altro:",
        ],
        terms: [
          {
            term: "Il viaggio",
            detail:
              "Luogo di partenza e di arrivo, data e ora, e gli stessi dati per il ritorno quando viene richiesto.",
          },
          {
            term: "Riferimento di viaggio",
            detail:
              "Numero di volo, treno o nave, se scegliete di indicarlo. È facoltativo ed è ciò che consente di gestire un arrivo in ritardo.",
          },
          {
            term: "Il gruppo",
            detail:
              "Numero di adulti e di bambini, età dei bambini — perché da essa dipendono i sistemi di ritenuta — e numero di bagagli da stiva e a mano.",
          },
          {
            term: "Recapiti",
            detail: "Nome, indirizzo e-mail e numero di telefono.",
          },
          {
            term: "Quello che aggiungete voi",
            detail:
              "Un campo note libero. Vi chiediamo di non inserirvi informazioni sulla salute, né altro che non vorreste fosse trattato come normale corrispondenza.",
          },
          {
            term: "Contesto tecnico",
            detail:
              "La lingua in cui è stata fatta la richiesta e l'ora in cui il server l'ha ricevuta. Nessuno dei due dato viene ricavato dalla cronologia o dal profilo del vostro browser.",
          },
        ],
      },
      {
        id: "finalita",
        heading: "6. Perché quei dati verrebbero usati",
        paragraphs: [
          "Soltanto per gestire la richiesta che inviate e il viaggio che eventualmente ne deriva.",
        ],
        bullets: [
          "Per capire se il viaggio si può organizzare e per quotarlo.",
          "Per rispondervi con un preventivo e con l'accordo che lo accompagna.",
          "Per organizzare il viaggio con un fornitore di trasporto, se lo confermate.",
          "Per conservare traccia di quanto concordato, così da poter rispondere a una domanda successiva.",
          "Per gestire un reclamo, una cancellazione o una richiesta di rimborso.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "La base giuridica di ciascuno di questi usi non è stata determinata e dipende dalla questione di legge applicabile di cui al punto 12. Questa informativa non ne indica alcuna, perché indicarne una sbagliata sarebbe di per sé una mancanza.",
        },
      },
      {
        id: "fornitori",
        heading: "7. Comunicazione a un fornitore di trasporto",
        paragraphs: [
          "Questo sito si occupa di richieste. Quando un viaggio viene confermato, il trasporto è svolto da un'attività operativa distinta, e i dati necessari a effettuare il viaggio le verrebbero trasmessi: di norma luogo di partenza e di arrivo, data e ora, riferimento di viaggio, composizione del gruppo e dei bagagli, un nome e un numero di telefono per poter portare a termine il servizio.",
          "Quell'attività non viene nominata in questa pagina. Il rapporto non è stato confermato in una forma pubblicabile, e indicare un operatore non verificato sarebbe esattamente il tipo di dettaglio inventato che questo sito non pubblica.",
          "Nulla viene venduto e nulla viene comunicato per il marketing di terzi.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Vanno stabiliti l'identità dell'attività operativa e se essa agisca come titolare autonomo o come responsabile del trattamento. La risposta cambia il contenuto di questa sezione e l'eventuale accordo da mettere per iscritto fra le due parti.",
        },
      },
      {
        id: "sistemi",
        heading: "8. Sistemi usati per gestire una richiesta",
        paragraphs: [
          "Per questo sito sono previsti un sistema di gestione dei contatti e una soluzione di posta elettronica propri, indipendenti da qualsiasi altro sito o attività.",
          "Nessuno dei due esiste ancora. Nessun sistema di gestione dei contatti conserva dati per questo sito e nessuna soluzione di posta è attiva. Quando lo saranno, questa sezione indicherà quali sono e dove operano, perché un sistema che conserva i vostri dati è qualcosa che avete diritto di conoscere.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Il sistema di gestione dei contatti, il fornitore di posta elettronica e il fornitore di hosting vanno scelti e indicati qui, insieme al luogo in cui ciascuno conserva i dati.",
        },
      },
      {
        id: "trasferimenti",
        heading: "9. Dati che escono dal Paese in cui vi trovate",
        paragraphs: [
          "Il titolare è stabilito fuori dall'Unione europea e dallo Spazio economico europeo. Se vi trovate nell'UE o nel SEE, ciò significa che i dati che inviate verrebbero trattati in un Paese esterno.",
          "In questi casi la legge del vostro Paese può richiedere una garanzia specifica. Qui non ne viene descritta alcuna, perché nessuna è ancora stata predisposta e descriverne una inesistente sarebbe una rassicurazione falsa.",
        ],
        pending: {
          label: "Revisione legale necessaria",
          body:
            "Se sia necessaria una garanzia per il trasferimento internazionale, e quale strumento sia appropriato, richiede un parere legale una volta definiti il Paese di stabilimento del titolare e i sistemi di cui al punto 8.",
        },
      },
      {
        id: "conservazione",
        heading: "10. Per quanto tempo i dati verrebbero conservati",
        paragraphs: [
          "Non è stato fissato alcun periodo di conservazione. Invece di indicare un termine non deciso e che non verrebbe rispettato, questa informativa dichiara che la questione è aperta.",
          "Un'impostazione ragionevole, non ancora adottata, è conservare per un periodo breve una richiesta che non diventa prenotazione e per più tempo una prenotazione confermata, finché possa sorgere una contestazione: è però una proposta che il titolare deve accettare o modificare, non una regola in vigore.",
        ],
        pending: {
          label: "Conferma necessaria prima del lancio",
          body:
            "Vanno decisi i periodi di conservazione per le richieste che non diventano prenotazioni, per le prenotazioni confermate e per la corrispondenza su reclami o rimborsi.",
        },
      },
      {
        id: "sicurezza",
        heading: "11. Sicurezza",
        paragraphs: [
          "Il sito è servito su connessione cifrata. Il modulo di preventivo è progettato in modo che l'invio sia validato sul server e consegnato da server a server, senza esporre al browser alcuna credenziale o endpoint — ma quel modulo non è attivo, quindi questa è la descrizione di un progetto e non di un sistema in funzione.",
          "Non viene offerta alcuna garanzia assoluta. Nessuno può promettere che dati inviati via internet non possano essere intercettati, e un'informativa che lo sostenesse farebbe una promessa che non può mantenere.",
        ],
      },
      {
        id: "diritti",
        heading: "12. I vostri diritti sui dati",
        paragraphs: [
          "A seconda di dove vi trovate e di quale legge si applichi, potete avere il diritto di sapere quali dati vi riguardano sono conservati, di farli correggere, di farli cancellare, di opporvi al loro uso o limitarlo e di riceverne copia.",
          "Poiché oggi non viene raccolto alcun dato e la legge applicabile non è stata definita, questa informativa non indica una procedura né un termine di risposta. Quando esisterà un recapito privacy, una richiesta inviata a quel recapito riceverà risposta.",
        ],
        pending: {
          label: "Revisione legale necessaria",
          body:
            "Quale legge si applichi al trattamento di questo sito — e quindi quali diritti e quali termini siano esigibili — non è stato determinato. I punti 2 e 9 dipendono dalla stessa risposta.",
        },
      },
      {
        id: "reclami",
        heading: "13. Reclami",
        paragraphs: [
          "Se non siete soddisfatti di come sono stati trattati i vostri dati, il primo passo è scrivere al titolare al recapito che verrà pubblicato al punto 2.",
          "Potreste inoltre avere la possibilità di rivolgervi a un'autorità di protezione dei dati del Paese in cui risiedete. Questa informativa non ne indica una, perché l'autorità competente dipende dallo stabilimento del titolare e dalla questione di legge applicabile sopra richiamata.",
        ],
      },
      {
        id: "minori",
        heading: "14. Minori",
        paragraphs: [
          "Questo sito si rivolge ad adulti che organizzano un viaggio. Non è destinato ai minori e non raccoglie consapevolmente dati che li riguardino.",
          "Quando un transfer è per una famiglia, l'età dei bambini viene chiesta soltanto perché da essa dipendono i sistemi di ritenuta, ed è l'adulto che fa la richiesta a indicarla, non il bambino.",
        ],
      },
      {
        id: "modifiche",
        heading: "15. Modifiche a questa informativa",
        paragraphs: [
          "Questa informativa riporta la data in cui è stata redatta e riporterà la data in cui entrerà in vigore. Quando cambierà in modo sostanziale, cambierà con essa anche la data.",
          "Finché resta una bozza va letta come dichiarazione di intenti e non come descrizione della prassi attuale, con l'eccezione del punto 3, che descrive ciò che il sito fa oggi in modo verificabile.",
        ],
      },
      {
        id: "contatti",
        heading: "16. Contatti",
        paragraphs: [
          "Su questo sito non esiste ancora alcun canale di contatto: nessun modulo, nessun indirizzo e-mail, nessun numero di telefono. Quando esisterà un recapito privacy verrà pubblicato al punto 2 e ripetuto qui.",
        ],
        bullets: [
          "Recapito privacy: [DA CONFERMARE — indirizzo e-mail o altro canale per le richieste privacy]",
        ],
      },
    ],

    related: {
      heading: "Le altre pagine legali",
      items: [
        {
          page: "terms",
          label: "Termini e condizioni",
          detail: "Che cosa fa questo sito e che cosa è, e non è, una richiesta di preventivo.",
        },
        {
          page: "cancellation",
          label: "Cancellazioni e rimborsi",
          detail: "Termini di cancellazione, attesa in aeroporto e gestione dei rimborsi.",
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
