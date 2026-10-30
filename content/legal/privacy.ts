import { contactEmail } from "@/lib/site";
import type { LocalizedLegal } from "./types";

/**
 * Privacy Policy. In force from 29 October 2026.
 *
 * ── §3 is the one section that rests on measurement ───────────────────────
 * It separates two things a single "what we collect" section kept conflating.
 * Reading the site collects nothing: a production build was served and driven
 * in a real browser across four pages, and it made zero third-party requests,
 * set zero cookies, and left localStorage and sessionStorage empty. Sending
 * the form does transmit everything typed into it: that was measured too, by
 * capturing the submission and reading the request body. Both halves are
 * evidence, not assumption, and both are worth keeping that way — "no
 * cookies, no analytics, no third-party content" is a claim a reader can
 * verify in thirty seconds with their own developer tools.
 *
 * ── Two things named rather than hedged ───────────────────────────────────
 * The controller is Private Transfers Across Italy, operated by an
 * individual, established outside the EU/EEA; that is the owner's decision
 * about what to publish, and no personal name, postal address or company
 * registration is claimed. §13 points a complaint at the authority where the
 * reader lives rather than naming one, which is correct for a non-EU
 * controller and does not depend on an establishment analysis.
 *
 * §5 lists exactly the fields in `lib/quote/schema.ts`, because that is the
 * only description of what the form asks for that cannot fall out of date.
 * The contact address comes from `contactEmail` in `lib/site.ts` for the same
 * reason: one mailbox, written once, so English and Italian cannot disagree.
 *
 * ── What §8 depends on ────────────────────────────────────────────────────
 * It names Cloudflare and Resend as the processors and describes storage and
 * email delivery as operating. Cloudflare is now accurate: the site runs on
 * Workers and the enquiry database is Cloudflare D1, both on the owner's own
 * account. Resend is not connected yet, so that half must be true before the
 * pages are served publicly. See `docs/legal-pages-launch-readiness.md`.
 */
export const privacy: LocalizedLegal = {
  en: {
    meta: {
      title: "Privacy Policy",
      description:
        "What we collect when you ask for a quotation, how we use it, who else sees it, how long we keep it and what rights you have.",
    },
    breadcrumbLabel: "Breadcrumb",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    lead:
      "What we ask for when you request a quotation, what we do with it, and what you can ask us to do about it. Browsing this site collects nothing; sending the form sends us what you typed.",

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
        heading: "1. What this policy covers",
        paragraphs: [
          "This policy explains how we handle personal information when you use this website and when you ask us to quote for a private transfer.",
          "It does not cover any other website, and it does not cover what a transfer company does with your information once your journey has been arranged with them. Section 7 explains where that line falls.",
        ],
      },
      {
        id: "controller",
        heading: "2. Who is responsible for your information",
        paragraphs: [
          "Private Transfers Across Italy is responsible for the personal information handled through this website. It is operated and managed by an individual rather than by a company, and that person deals with your enquiry personally: the correspondence, the quotation and the arrangements for your journey.",
          "We are established outside the European Union and the European Economic Area.",
          "Write to us at the address below with any question or request about your information. It reaches us directly and it is answered.",
        ],
        bullets: [
          `Privacy contact: ${contactEmail}`,
        ],
      },
      {
        id: "today",
        heading: "3. Reading the site, and sending the form",
        paragraphs: [
          "Reading this site collects nothing about you. There is no analytics, no advertising, no tracking and no third-party content of any kind: the typefaces and images are served from this site itself, so no other company learns that you visited.",
          "Sending the quotation form is different. When you press the button, everything you typed is sent to us so that we can read it and reply. That is the only way personal information reaches us through this website.",
        ],
        bullets: [
          "No cookies are set anywhere on this site — not for analytics, not for advertising, not for preferences.",
          "No content is loaded from another company's server, so no one else receives your IP address through this site.",
          "There is no account, login or profile, so nothing is kept about you between visits.",
          "What you type in the form is never written to our technical logs. If something goes wrong, we record an error code, not your details.",
        ],
      },
      {
        id: "server-logs",
        heading: "4. Server records",
        paragraphs: [
          "Like any website, this one is served to you by a hosting provider, and hosting providers keep technical records of requests — usually the IP address, the time and the page requested — to keep the service running and secure. These records are created by the hosting provider, not by anything this site does, and we do not use them to build any picture of you.",
        ],
      },
      {
        id: "planned",
        heading: "5. What the quotation form asks for",
        paragraphs: [
          "The form asks for what is needed to price and arrange a journey, and nothing beyond it:",
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
          "Only to deal with the request you send and the journey that may follow from it:",
        ],
        bullets: [
          "To work out whether your journey can be arranged, and what it would cost.",
          "To reply to you with a quotation and the arrangements that go with it.",
          "To arrange the journey with a local transfer company once you confirm it.",
          "To keep a record of what was agreed, so a later question about it can be answered.",
          "To deal with a complaint, a cancellation or a refund claim.",
        ],
        terms: [
          {
            term: "Our legal grounds",
            detail:
              "For the first three, we handle your information because you have asked us to — it is needed to take the steps you requested and to arrange the journey you confirm. For the last two, we rely on our legitimate interest in keeping accurate records of what was agreed and in resolving complaints fairly, and on the record-keeping obligations that apply to us.",
          },
          {
            term: "What we never do",
            detail:
              "We do not send marketing, we do not sell or rent your information, we do not share it for anyone else's advertising, and we make no automated decisions about you.",
          },
        ],
      },
      {
        id: "sharing",
        heading: "7. Sharing with a transport provider",
        paragraphs: [
          "We arrange your journey; we do not drive it. The transfer itself is carried out by a local transfer company, and you pay that company directly for the journey.",
          "When you confirm a booking, we pass that company only what it needs to collect you and complete the journey: the pickup and drop-off addresses, the date and time, your flight, train or ship number if you gave one, the size of your party and its luggage, and a contact name and telephone number. Once it has those details, that company handles them under its own privacy policy.",
          "The company that will carry out your journey is identified to you in your quotation or booking confirmation, so you know who will be collecting you before you confirm anything.",
          "Apart from that company and the service providers in section 8, we share your information with no one. Nothing is sold, and nothing is shared for anyone else's marketing.",
        ],
      },
      {
        id: "systems",
        heading: "8. Systems used to handle a request",
        paragraphs: [
          "We use a small number of service providers to run this website. They act on our instructions, only for the purposes in section 6, and none of them is permitted to use your information for anything of their own.",
          "They are Cloudflare, which serves this website to you and stores your enquiry in a database used only by this website; and Resend, which delivers the email confirming your request and our reply. The system we use to read and manage enquiries is part of this website rather than a third-party product, so your details are not loaded into any outside sales or marketing tool.",
        ],
      },
      {
        id: "international",
        heading: "9. Information leaving the country you are in",
        paragraphs: [
          "We are established outside the European Union and the European Economic Area, and your journey is in Italy. Your information is therefore handled in more than one country, and if you are in the EU or the EEA it will be handled outside it.",
          "Wherever it goes, it is handled only by us, by the service providers listed in section 8 and by the transfer company carrying out your journey, only for the purposes in section 6, and under this policy.",
        ],
      },
      {
        id: "retention",
        heading: "10. How long information is kept",
        paragraphs: [
          "We keep your information for three set periods, each counted from our last contact with you about the journey in question. After that it is deleted.",
        ],
        bullets: [
          "An enquiry that does not become a booking: 12 months.",
          "A confirmed booking: 7 years, so that a record of the journey and what was paid for it stays available for as long as an accounting or tax question about it could arise.",
          "Correspondence about a complaint or a refund: 3 years.",
        ],
      },
      {
        id: "security",
        heading: "11. Security",
        paragraphs: [
          "This website is served over an encrypted connection, your enquiry is checked on our server before anything else happens, and the database holding enquiries is not reachable from your browser. Access to stored enquiries is restricted to the person managing them.",
          "No one can promise that information sent over the internet can never be intercepted, and we do not make that promise. What we can say is that we keep what you send to the minimum we need, and delete it on the schedule in section 10.",
        ],
      },
      {
        id: "rights",
        heading: "12. Your rights over your information",
        paragraphs: [
          "You can ask us what information we hold about you, ask us to correct it, ask us to delete it, ask us to stop or limit how we use it, object to our using it, and ask for a copy of it in a portable form.",
          "Write to the address in section 2 and say what you would like us to do. We will not charge you for it, and we will not ask you for anything beyond what we need to be sure the request is yours. If we cannot do what you have asked, we will tell you why.",
        ],
      },
      {
        id: "complaints",
        heading: "13. Complaints",
        paragraphs: [
          "If you are unhappy with how your information has been handled, the first step is to write to the controller at the address in section 2.",
          "If we cannot resolve it between us, you can complain to the data protection authority in the country where you live. Doing so costs you nothing and does not affect any other right you have.",
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
          "This policy carries the date it last changed, at the top of the page. If we change it in a way that matters, we will update that date.",
          "The version that applies to your enquiry is the one in force when you sent it.",
        ],
      },
      {
        id: "contact",
        heading: "16. Contact",
        paragraphs: [
          "There are two ways to reach us: the quotation form, for describing a journey you would like quoted, and the email address below for everything else — privacy requests, questions, complaints and cancellations.",
        ],
        bullets: [
          `Privacy and general contact: ${contactEmail}`,
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
        "Quali dati raccogliamo quando chiedete un preventivo, come li usiamo, chi altro li riceve, per quanto tempo li conserviamo e quali diritti avete.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    eyebrow: "Note legali",
    h1: "Informativa sulla privacy",
    lead:
      "Che cosa vi chiediamo quando richiedete un preventivo, che cosa ne facciamo e che cosa potete chiederci di farne. Leggere il sito non raccoglie nulla; inviare il modulo ci trasmette quello che avete scritto.",

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
        heading: "1. Che cosa copre questa informativa",
        paragraphs: [
          "Questa informativa spiega come trattiamo i dati personali quando usate questo sito e quando ci chiedete un preventivo per un transfer privato.",
          "Non riguarda altri siti e non riguarda ciò che l'azienda di transfer fa dei vostri dati una volta che il viaggio è stato organizzato con lei. Il punto 7 spiega dove passa questo confine.",
        ],
      },
      {
        id: "titolare",
        heading: "2. Chi risponde dei vostri dati",
        paragraphs: [
          "Private Transfers Across Italy risponde dei dati personali trattati attraverso questo sito. È gestito da una persona fisica e non da una società, ed è quella persona a seguire personalmente la vostra richiesta: la corrispondenza, il preventivo e l'organizzazione del viaggio.",
          "Siamo stabiliti fuori dall'Unione europea e dallo Spazio economico europeo.",
          "Scriveteci all'indirizzo qui sotto per qualsiasi domanda o richiesta sui vostri dati. Arriva direttamente a noi e riceve risposta.",
        ],
        bullets: [
          `Recapito privacy: ${contactEmail}`,
        ],
      },
      {
        id: "oggi",
        heading: "3. Leggere il sito e inviare il modulo",
        paragraphs: [
          "Leggere questo sito non raccoglie nulla su di voi. Non ci sono sistemi di analisi, pubblicità, tracciamento né contenuti di terze parti di alcun tipo: i caratteri tipografici e le immagini sono serviti da questo stesso sito, quindi nessun'altra azienda viene a sapere che l'avete visitato.",
          "Inviare il modulo di preventivo è un'altra cosa. Quando premete il pulsante, tutto quello che avete scritto ci viene inviato perché possiamo leggerlo e rispondervi. È l'unico modo in cui dati personali ci raggiungono attraverso questo sito.",
        ],
        bullets: [
          "Su tutto il sito non viene impostato alcun cookie: né di analisi, né pubblicitario, né di preferenza.",
          "Nessun contenuto viene caricato dal server di un'altra azienda, quindi nessun altro riceve il vostro indirizzo IP tramite questo sito.",
          "Non esistono account, accessi o profili: fra una visita e l'altra non resta memorizzato nulla su di voi.",
          "Quello che scrivete nel modulo non finisce mai nei nostri registri tecnici. Se qualcosa non funziona, annotiamo un codice di errore, non i vostri dati.",
        ],
      },
      {
        id: "log",
        heading: "4. Registri del server",
        paragraphs: [
          "Come ogni sito, anche questo vi viene servito da un fornitore di hosting, e i fornitori di hosting conservano registri tecnici delle richieste — di norma indirizzo IP, orario e pagina richiesta — per mantenere il servizio funzionante e sicuro. Questi registri sono creati dal fornitore di hosting, non da qualcosa che faccia il sito, e noi non li usiamo per ricostruire alcun profilo su di voi.",
        ],
      },
      {
        id: "previsto",
        heading: "5. Che cosa chiede il modulo di preventivo",
        paragraphs: [
          "Il modulo chiede ciò che serve a quotare e organizzare un viaggio, e nient'altro:",
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
          "Soltanto per gestire la richiesta che inviate e il viaggio che eventualmente ne deriva:",
        ],
        bullets: [
          "Per capire se il vostro viaggio si può organizzare e quanto costerebbe.",
          "Per rispondervi con un preventivo e con le modalità che lo accompagnano.",
          "Per organizzare il viaggio con un'azienda di transfer locale, una volta che lo confermate.",
          "Per conservare traccia di quanto concordato, così da poter rispondere a una domanda successiva.",
          "Per gestire un reclamo, una cancellazione o una richiesta di rimborso.",
        ],
        terms: [
          {
            term: "Le nostre basi giuridiche",
            detail:
              "Per i primi tre, trattiamo i vostri dati perché ce lo avete chiesto: servono a dare seguito alla vostra richiesta e a organizzare il viaggio che confermate. Per gli ultimi due ci basiamo sul nostro legittimo interesse a conservare traccia esatta di quanto concordato e a gestire correttamente i reclami, e sugli obblighi di conservazione documentale che ci riguardano.",
          },
          {
            term: "Che cosa non facciamo mai",
            detail:
              "Non inviamo comunicazioni commerciali, non vendiamo né cediamo i vostri dati, non li comunichiamo per la pubblicità di terzi e non prendiamo decisioni automatizzate sul vostro conto.",
          },
        ],
      },
      {
        id: "fornitori",
        heading: "7. Comunicazione a un fornitore di trasporto",
        paragraphs: [
          "Noi organizziamo il viaggio; non lo guidiamo. Il transfer è svolto da un'azienda di transfer locale, e il viaggio lo pagate direttamente a quell'azienda.",
          "Quando confermate una prenotazione, le trasmettiamo soltanto ciò che le serve per venirvi a prendere e portare a termine il viaggio: gli indirizzi di partenza e di arrivo, data e ora, il numero del volo, del treno o della nave se lo avete indicato, la composizione del gruppo e dei bagagli, un nome e un numero di telefono. Da quel momento quell'azienda tratta quei dati secondo la propria informativa.",
          "L'azienda che effettuerà il vostro viaggio vi viene indicata nel preventivo o nella conferma di prenotazione, così sapete chi verrà a prendervi prima di confermare qualsiasi cosa.",
          "A parte quell'azienda e i fornitori indicati al punto 8, non comunichiamo i vostri dati a nessuno. Nulla viene venduto e nulla viene comunicato per il marketing di terzi.",
        ],
      },
      {
        id: "sistemi",
        heading: "8. Sistemi usati per gestire una richiesta",
        paragraphs: [
          "Per far funzionare questo sito ci avvaliamo di pochi fornitori di servizi. Agiscono su nostra istruzione, soltanto per le finalità del punto 6, e nessuno di essi può usare i vostri dati per scopi propri.",
          "Sono Cloudflare, che vi serve questo sito e conserva la vostra richiesta in una banca dati usata soltanto da esso; e Resend, che recapita l'email di conferma della richiesta e la nostra risposta. Il sistema con cui leggiamo e gestiamo le richieste fa parte di questo sito e non è un prodotto di terzi: i vostri dati non finiscono quindi in alcuno strumento esterno di vendita o marketing.",
        ],
      },
      {
        id: "trasferimenti",
        heading: "9. Dati che escono dal Paese in cui vi trovate",
        paragraphs: [
          "Siamo stabiliti fuori dall'Unione europea e dallo Spazio economico europeo, e il vostro viaggio si svolge in Italia. I vostri dati sono quindi trattati in più di un Paese e, se vi trovate nell'UE o nel SEE, anche fuori da essa.",
          "Ovunque si trovino, sono trattati soltanto da noi, dai fornitori elencati al punto 8 e dall'azienda di transfer che effettua il vostro viaggio, soltanto per le finalità del punto 6 e secondo questa informativa.",
        ],
      },
      {
        id: "conservazione",
        heading: "10. Per quanto tempo i dati vengono conservati",
        paragraphs: [
          "Conserviamo i vostri dati per tre periodi stabiliti, ciascuno calcolato dall'ultimo contatto avuto con voi in merito al viaggio di cui si tratta. Trascorso quel termine, vengono cancellati.",
        ],
        bullets: [
          "Una richiesta che non diventa prenotazione: 12 mesi.",
          "Una prenotazione confermata: 7 anni, perché resti disponibile la documentazione del viaggio e di quanto è stato pagato per tutto il tempo in cui possa sorgere una questione contabile o fiscale.",
          "Corrispondenza su un reclamo o un rimborso: 3 anni.",
        ],
      },
      {
        id: "sicurezza",
        heading: "11. Sicurezza",
        paragraphs: [
          "Questo sito è servito su connessione cifrata, la vostra richiesta viene controllata sul nostro server prima di qualsiasi altro passaggio e la banca dati che conserva le richieste non è raggiungibile dal vostro browser. L'accesso alle richieste conservate è riservato a chi le gestisce.",
          "Nessuno può promettere che dati inviati via internet non possano mai essere intercettati, e noi non lo promettiamo. Possiamo però dire che teniamo quanto ci inviate al minimo necessario e lo cancelliamo secondo i termini del punto 10.",
        ],
      },
      {
        id: "diritti",
        heading: "12. I vostri diritti sui dati",
        paragraphs: [
          "Potete chiederci quali dati vi riguardano conserviamo, chiederci di correggerli, chiederci di cancellarli, chiederci di interrompere o limitare il loro uso, opporvi al loro trattamento e chiederne copia in formato portabile.",
          "Scrivete al recapito indicato al punto 2 dicendo che cosa desiderate. Non vi addebiteremo nulla e non vi chiederemo nulla oltre a quanto ci serve per essere certi che la richiesta sia vostra. Se non potremo dare seguito a quanto chiedete, vi spiegheremo perché.",
        ],
      },
      {
        id: "reclami",
        heading: "13. Reclami",
        paragraphs: [
          "Se non siete soddisfatti di come sono stati trattati i vostri dati, il primo passo è scrivere al titolare al recapito indicato al punto 2.",
          "Se non riusciamo a risolverla fra noi, potete rivolgervi all'autorità di protezione dei dati del Paese in cui risiedete. Farlo non vi costa nulla e non pregiudica alcun altro vostro diritto.",
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
          "Questa informativa riporta in cima alla pagina la data dell'ultima modifica. Se la cambieremo in modo rilevante, aggiorneremo quella data.",
          "Alla vostra richiesta si applica la versione in vigore nel momento in cui l'avete inviata.",
        ],
      },
      {
        id: "contatti",
        heading: "16. Contatti",
        paragraphs: [
          "Per raggiungerci ci sono due vie: il modulo di preventivo, per descrivere un viaggio di cui volete il preventivo, e l'indirizzo e-mail qui sotto per tutto il resto — richieste privacy, domande, reclami e cancellazioni.",
        ],
        bullets: [
          `Recapito privacy e contatto generale: ${contactEmail}`,
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
