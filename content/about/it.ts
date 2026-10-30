import type { AboutContent } from "./types";

/**
 * Chi siamo, in italiano.
 *
 * Scritto in italiano, non tradotto frase per frase dall'inglese: i due testi
 * dicono le stesse cose e non le dicono con le stesse parole. Dove l'inglese
 * usa un'immagine che in italiano suonerebbe forzata, qui c'è un'altra
 * immagine, non un calco.
 *
 * Valgono gli stessi divieti: nessuna società, nessuna sede, nessun anno di
 * fondazione, nessuna licenza, autorizzazione, assicurazione o verifica sui
 * conducenti, nessun tempo di risposta. L'unica dichiarazione operativa
 * presente altrove sul sito — l'autorizzazione all'accesso nella zona
 * limitata di Bologna — resta dov'è stata scritta e non viene generalizzata.
 *
 * Il sito dà del voi.
 */
export const aboutIt: AboutContent = {
  meta: {
    title: "Chi siamo",
    description:
      "A che cosa serve questo sito, come una richiesta di transfer diventa un preventivo e la regola con cui è scritto: nulla che non si possa indicare alla fonte.",
  },

  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Chi siamo",
    h1: "Transfer privati, un viaggio alla volta",
    lead:
      "Questo sito esiste perché chi viaggia possa descrivere un tragitto in Italia e ricevere una risposta ragionata: che cosa comporta, quanto costerebbe e dove è davvero complicato.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Come funziona", hash: "come-funziona" },
    panel: {
      label: "In breve",
      items: [
        {
          term: "Che cosa fa questo sito",
          detail:
            "Mette per iscritto quello che si sa davvero sull'arrivare in un posto su strada — dove un veicolo può andare, dove può fermarsi e chi lo stabilisce — e raccoglie i dati di un viaggio perché possa essere preventivato.",
        },
        {
          term: "Che cosa non fa",
          detail:
            "Prenotare. Qui nulla riserva un veicolo e nulla blocca una data. Un viaggio è prenotato quando è stato confermato per iscritto, non prima.",
        },
      ],
    },
  },

  purpose: {
    id: "l-idea",
    eyebrow: "L'idea",
    heading: "Perché le pagine sono scritte così",
    lead:
      "La parte difficile di un transfer privato quasi mai è guidare. È sapere che cosa è consentito, e dove.",
    paragraphs: [
      "L'Italia è piena di posti che un'auto può raggiungere e dove poi non può fermarsi. Centri storici con varchi a orario, strade costiere che cambiano regola con la stagione, marciapiedi aeroportuali riservati a permessi precisi, accosti crocieristici dentro porti operativi dove il terminal stampato sul biglietto non è quello a cui attracca la nave. Sono regole pubblicate: quasi mai però in un unico posto, quasi mai in inglese. Ed è per questo che un tragitto semplice sulla mappa poi non lo è.",
      "Le pagine di questo sito partono perciò da quello che l'autorità competente pubblica davvero — un'ordinanza comunale, le indicazioni del gestore aeroportuale, un avviso dell'autorità portuale — e ciascuna dice quale, con il collegamento da seguire. Dove il quadro pubblicato è incompleto, scaduto o si contraddice, la pagina lo scrive, invece di scegliere la lettura più comoda.",
      "È tutta qui l'idea, ed è anche il motivo per cui questo sito promette meno in fretta di altri. Un preventivo vale quanto il viaggio che descrive, e un viaggio si descrive bene soltanto sapendo già com'è fatto l'altro capo.",
    ],
  },

  how: {
    id: "come-funziona",
    eyebrow: "Il percorso",
    heading: "Tre passaggi, e solo l'ultimo è una prenotazione",
    lead: "Che cosa succede fra il descrivere un viaggio e il farlo.",
    steps: [
      {
        title: "Inviate i dati del viaggio",
        body:
          "Da dove si parte e dove si arriva, entrambi per esteso; la data e l'ora; quanti siete e quanti bagagli; e il numero del volo, del treno o della nave quando ce n'è uno. Più il viaggio è descritto con precisione, più esatta può essere la risposta.",
      },
      {
        title: "Ricevete un preventivo",
        body:
          "Un prezzo per quel viaggio, e accanto l'accordo nel dettaglio: dove il conducente vi incontra ai due capi, che cosa comprende il preventivo e che cosa della richiesta non si può fare come l'avete formulata.",
      },
      {
        title: "Confermate per iscritto",
        body:
          "Un viaggio è prenotato quando è stato confermato per iscritto. Fino a quel momento nulla è riservato e nessun veicolo è assegnato alla vostra data, per quanto avanti sia andata la conversazione.",
      },
    ],
    note:
      "Ogni collegamento “Richiedi un preventivo” porta al modulo. Inviarlo significa fare una domanda: non conferma una prenotazione e, finché le predisposizioni dietro di esso non saranno completate, il modulo dice con chiarezza che cosa è successo e che cosa no alla vostra richiesta.",
  },

  coverage: {
    id: "dove",
    eyebrow: "Dove ci viene chiesto di andare",
    heading: "In tutta Italia, e soprattutto nei punti scomodi",
    lead:
      "Arrivi e partenze dagli aeroporti, spostamenti fra città, collegamenti con i porti crocieristici, stazioni ferroviarie, escursioni in giornata e alcune tratte oltre confine.",
    paragraphs: [
      "Le pagine scritte finora coprono sei regioni e i loro accessi. Ogni area qui sotto porta agli aeroporti, ai porti, alle stazioni e ai centri che le ruotano intorno, e ognuna è stata scritta con la stessa regola: indicare l'autorità, collegare il documento e dire con chiarezza dove il documento smette di rispondere.",
    ],
    items: [
      {
        page: "rome",
        label: "Roma e il Lazio",
        detail: "Fiumicino, Ciampino, il porto crocieristico di Civitavecchia e le stazioni della città.",
      },
      {
        page: "milan",
        label: "Milano e la Lombardia",
        detail: "Malpensa, Linate, Bergamo, le stazioni e il lago poco oltre.",
      },
      {
        page: "venice",
        label: "Venezia e il Veneto",
        detail: "Marco Polo, Treviso, Verona e il punto in cui un viaggio su strada deve finire.",
      },
      {
        page: "florence",
        label: "Firenze e la Toscana",
        detail: "Peretola, Pisa e la Val d'Orcia intesa come giornata, non come tratta.",
      },
      {
        page: "bologna",
        label: "Bologna e la Romagna",
        detail: "L'aeroporto Marconi, indirizzi di hotel precisi, Ravenna e il suo terminal crociere.",
      },
      {
        page: "naples",
        label: "Napoli e la Campania",
        detail: "Capodichino, la Stazione Marittima, Pompei, Caserta e i paesi della Costiera.",
      },
    ],
    note:
      "Questo è l'elenco dei luoghi di cui esiste una pagina, non l'elenco dei viaggi sempre disponibili. La disponibilità per una data precisa, un veicolo adatto al vostro gruppo e ai vostri bagagli, il punto in cui un'auto può davvero fermarsi ai due capi e il prezzo si definiscono sulla singola richiesta. Nessuna di queste cose è una caratteristica della tratta.",
  },

  fulfilment: {
    id: "come-si-organizza",
    eyebrow: "Come si organizza un viaggio",
    heading: "La parte su cui conviene essere chiari",
    label: "Dichiarazione nostra",
    body:
      "Quello che chiedete qui è un'auto privata con conducente per un tragitto preciso, organizzata in anticipo e quotata per quel tragitto, non a tassametro. Quello che viene definito con voi per iscritto prima di qualsiasi conferma è il viaggio stesso: il veicolo per il vostro gruppo e i vostri bagagli, dove il conducente vi incontra ai due capi, che cosa comprende il prezzo e che cosa della richiesta non si può fare come l'avete formulata.",
    paragraphs: [
      "Questa pagina non fa il nome di alcun operatore e non afferma nulla su licenze, autorizzazioni, coperture assicurative o verifiche sui conducenti. Sono cose che chi viaggia ha diritto di vedere dichiarate con precisione, oppure per niente, e la regola di questo sito è che non vi compaia nulla che non si possa indicare alla fonte. Un'altra pagina del sito dichiara un'autorizzazione all'accesso per la zona limitata di una città: quella frase è stata scritta per quella zona e non vale come affermazione generale.",
      "Quando una limitazione riguarda il vostro viaggio — una zona in cui un veicolo può entrare ma non sostare, un aeroporto che individua le sue piazzole rinviando a planimetrie che nessuno può consultare, un comune il cui tariffario d'accesso è conteso fra due ordinanze — la pagina interessata lo dice, indica l'autorità e vi spiega che cosa resta irrisolto. I limiti di quello che si sa li incontrate prima di dover decidere qualcosa.",
    ],
  },

  service: {
    id: "il-nostro-modo",
    eyebrow: "Che cosa aspettarsi",
    heading: "Il modo in cui proviamo a rispondere",
    lead: "Cinque cose che questo sito è in grado di offrire, e che quindi offre.",
    items: [
      "Una risposta sul vostro viaggio e non una tariffa presa da un listino: i due indirizzi, la data, il gruppo e i bagagli la cambiano tutti.",
      "L'accordo per iscritto: dove il conducente vi incontra, che cosa comprende il prezzo e che cosa non comprende.",
      "Una risposta netta quando qualcosa non si può fare come l'avete chiesta, anche quando il motivo è una regola che non aggira nessuno.",
      "La fonte indicata ogni volta che una pagina enuncia una limitazione, con il collegamento, così potete verificarla invece di fidarvi.",
      "Nessuna risposta inventata per riempire un vuoto. Dove il quadro pubblicato è incerto o controverso, ve lo diciamo.",
    ],
    note:
      "Qui non vengono dichiarati orari di assistenza né tempi di risposta, perché non ne è stato fissato alcuno. Le condizioni di cancellazione e rimborso sono esposte nella pagina dedicata. Dove una pagina enuncia una regola che porta una data, porta anche la data in cui quella regola è stata verificata l'ultima volta.",
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Su questo sito",
    lead: "Cinque risposte brevi su che cos'è e su che cosa comporta inviare una richiesta.",
    items: [
      {
        question: "A che cosa serve questo sito?",
        answer:
          "A descrivere un transfer privato in Italia e a farselo preventivare. Le pagine di destinazioni, aeroporti, porti crocieristici, stazioni e tratte mettono per iscritto quello che si sa sull'arrivare in ciascun posto su strada — dove un veicolo può andare, dove può fermarsi e chi lo stabilisce — e il preventivo riguarda il viaggio che descrivete.",
      },
      {
        question: "Come si richiede un transfer privato?",
        answer:
          "Inviando il viaggio: i due indirizzi per esteso, la data e l'ora, quanti siete e quanti bagagli, e il numero del volo, del treno o della nave quando ce n'è uno. Il collegamento “Richiedi un preventivo” presente in ogni pagina porta alla sezione che elenca che cosa tenere pronto.",
      },
      {
        question: "Inviare una richiesta equivale a confermare una prenotazione?",
        answer:
          "No. Una richiesta è una domanda. Nulla è riservato e nessun veicolo è assegnato alla vostra data finché il viaggio non è stato confermato per iscritto, con l'accordo e le condizioni messi nero su bianco.",
      },
      {
        question: "Tutte le tratte sono disponibili in qualsiasi data?",
        answer:
          "Nessuna tratta è disponibile prima che la si chieda. La disponibilità per una data precisa, e la possibilità di predisporre un veicolo adatto al vostro gruppo e ai vostri bagagli, si confermano nel momento in cui si prepara il preventivo.",
      },
      {
        question: "Chi conferma il prezzo finale e gli accordi?",
        answer:
          "Si definiscono con voi per iscritto prima che il viaggio sia confermato. Una pagina può dirvi quanto un ente pubblico fa pagare per accedere a un luogo, ma nessuna pagina quota una corsa: il prezzo appartiene al singolo viaggio, non alla tratta.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Raccontateci il viaggio",
    body:
      "I due indirizzi, la data e l'ora, quanti siete e quanti bagagli, e il volo, il treno o la nave se ce n'è uno. Tanto basta per tornare da voi con un prezzo per quel viaggio e l'accordo per iscritto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: {
      label: "Come una richiesta diventa un viaggio",
      page: "home",
      hash: "how-it-works",
    },
    note:
      "I viaggi sono quotati singolarmente e sono soggetti a conferma. Una richiesta di preventivo non è una prenotazione.",
  },
};
