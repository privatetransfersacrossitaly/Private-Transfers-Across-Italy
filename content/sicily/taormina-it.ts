import type { SicilyDestination } from "./types";

/**
 * Taormina — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca in italiano sa benissimo
 * cos'è Taormina e che il centro è a traffico limitato: quello che vuole
 * sapere è dove la vettura può effettivamente fermarsi, chi può autorizzare
 * l'accesso e cosa succede se non lo si è chiesto prima. La pagina italiana
 * va quindi più dritta al punto operativo.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 55 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Sulla ZTL: le fonti disponibili — stampa
 * regionale e portali di automobilisti — non concordano su orari e stato dei
 * controlli, quindi la pagina dice che il centro è a traffico limitato e che
 * il punto di fermata dipende dalla struttura, e non pubblica né orari né
 * capienze di parcheggio.
 *
 * Non compaiono qui: il nome della stazione ferroviaria (attestato solo in
 * un riassunto non verificabile), frequenza e durata della funivia (solo
 * fonti di viaggio) e qualunque distanza stradale verso Catania, Messina o
 * l'Etna. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const taorminaIt: SicilyDestination = {
  meta: {
    // 55 caratteri.
    title: "Transfer privati a Taormina e sulla costa – Prenota ora",
    description:
      "Transfer privati per Taormina, 250 m sopra la costa ionica. Dove la vettura può fermarsi davvero, e le corse verso Isola Bella e Giardini Naxos.",
  },

  hero: {
    eyebrow: "Sicilia · Taormina",
    h1: "Transfer privati per Taormina",
    lead: "Taormina sta circa 250 metri sopra il mare, sulla costa orientale, con il teatro greco in cima e le spiagge molto più in basso. Tutto ciò che la rende un posto per cui si viene è anche ciò che rende scomodo arrivarci: il paese è in alto, il centro è a traffico limitato, e le ultime centinaia di metri sono la parte che nessuno mette in conto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si può fermare",
    facts: [
      { label: "Sul livello del mare", value: "Circa 250 m" },
      { label: "Provincia", value: "Città metropolitana di Messina" },
      { label: "Scalo abituale", value: "Catania (CTA)" },
      { label: "Abitanti", value: "10.440 (2025)" },
    ],
  },

  intro: {
    heading: "Un paese su una terrazza",
    paragraphs: [
      "Taormina è un comune della Città metropolitana di Messina, sulla costa orientale, costruito su un ripiano di collina a circa 250 metri sullo Ionio. Il teatro greco per cui si sale sta in cima al paese, e la rocca con il castello normanno altri 150 metri più su. Le strade arrivano da Messina a nord e da Catania a sud.",
      "Quell'altezza è tutto il carattere di un transfer per Taormina. La salita è ordinaria; l'arrivo no. Il centro storico è zona a traffico limitato, il corso principale è in buona parte pedonale, e se un veicolo possa raggiungere un certo portone dipende dalla struttura, non dall'autista.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Taormina",
    lead: "Quasi tutti atterrano a Catania e risalgono la costa. Una parte consistente arriva in nave a Messina e la scende.",
    options: [
      {
        id: "catania-airport",
        label: "In aereo",
        body: "Catania-Fontanarossa è lo scalo di riferimento e la salita avviene da sud lungo la costa. L'incontro con l'autista, le aerostazioni e le tratte stanno sulla pagina dell'aeroporto. Non pubblichiamo un tempo di percorrenza: le cifre in circolazione non concordano e la costiera ad agosto non è la stessa strada di marzo.",
      },
      {
        id: "messina-cruise-port",
        label: "In nave",
        body: "Messina è lo scalo crocieristico per Taormina, e chi vi sbarca di solito sale qui per la giornata e rientra nel pomeriggio. Questo rende l'orario di rientro a bordo l'unico che conta davvero: è da lì che la giornata si costruisce a ritroso.",
      },
    ],
    note: "Comunque arriviate, indicateci il nome dell'albergo oltre alla via. A Taormina non è una formalità: decide dove il veicolo è autorizzato a fermarsi, e di norma è solo la struttura a poter fare diversamente.",
  },

  kerb: {
    heading: "Dove la vettura può davvero fermarsi",
    lead: "È la domanda di Taormina, e ha una risposta vera e non rassicurante.",
    items: [
      {
        title: "Il centro è a traffico limitato",
        body: "L'accesso al centro storico è limitato e la via principale è in gran parte pedonale. Orari e modalità di controllo sono cambiati più di una volta e le fonti a nostra disposizione non concordano sullo stato attuale, quindi qui non pubblichiamo nessun orario. Quello che resta costante è che non si può portare un veicolo davanti a un portone del centro e lasciarlo lì.",
      },
      {
        title: "L'albergo spesso può autorizzare",
        body: "Le strutture dentro l'area limitata possono spesso comunicare in anticipo una targa, così che il veicolo sia ammesso ad avvicinarsi. Se ne occupa la struttura, non l'autista e non noi. Chiedetelo alla prenotazione e riferiteci la risposta: è la cosa che più cambia come finisce un arrivo a Taormina.",
      },
      {
        title: "Altrimenti il margine, e due passi",
        body: "Dove l'accesso non si può concordare, lo scarico avviene al limite della zona e l'ultimo tratto si fa a piedi, a volte in salita e quasi sempre con qualche gradino. Un autista che sa da quale lato ci si avvicina al vostro indirizzo evita la versione peggiore di quella camminata. Qui conta il numero di bagagli, non i metri.",
      },
      {
        title: "Le spiagge stanno sotto, non accanto",
        body: "Isola Bella, la riserva naturale appena a sud del paese, e la riva sotto di essa si raggiungono con la funivia costruita nel 1992 oppure per strada lungo il pendio. Una struttura descritta come «a Taormina» può stare al livello del mare e non in paese, e l'arrivo cambia completamente. È l'indirizzo a risolvere la questione, non il nome della località.",
      },
    ],
  },

  going: {
    heading: "Cosa ci viene chiesto da Taormina",
    lead: "Taormina è una base per tutto il vertice orientale, e le richieste si ripetono.",
    items: [
      {
        name: "L'Etna",
        body: "La voce enciclopedica sul paese indica circa 45 minuti di auto dal vulcano: è uno dei pochissimi tempi di percorrenza siciliani con una fonte pubblicata dietro, ed è il motivo per cui compare qui. Cosa sia poi possibile sulla montagna in una certa giornata dipende comunque dalle condizioni.",
      },
      {
        name: "Isola Bella e la riva",
        body: "La riserva naturale appena sotto il paese, raggiungibile con la funivia o per strada. Spesso una mezza giornata, e più spesso abbinata al tragitto che prenotata a parte.",
      },
      {
        name: "Giardini Naxos",
        body: "La località balneare più a sud, affacciata sulla sua baia. Parecchi di quelli che alloggiano «a Taormina» stanno in realtà qui, a livello del mare: come arrivo è molto più semplice del paese in alto.",
      },
      {
        name: "Siracusa e il barocco a sud",
        body: "Giù lungo la costa, oltre Catania. Una giornata intera e non una mezza, ed è un tragitto in cui una vettura concordata con un autista che l'ha già fatto vale più di quanto la cartina lasci immaginare.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Taormina.",
    items: [
      {
        id: "catania",
        body: "La città più a sud e più in basso, e la base da cui quasi tutti arrivano.",
      },
      {
        id: "syracuse",
        body: "Ancora più giù lungo la costa, per Ortigia e la città archeologica. Una giornata intera.",
      },
      {
        id: "messina-cruise-port",
        body: "Lo scalo crocieristico di riferimento, per chi arriva in nave per la giornata.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose che decidono come finisce davvero un arrivo a Taormina.",
    items: [
      {
        term: "L'autorizzazione della struttura",
        detail: "Chiedete all'albergo se può far autorizzare una targa all'accesso e riferiteci la risposta. È l'informazione più utile per un arrivo qui, ed è quella che più spesso si recupera quando l'autista è già davanti alla sbarra.",
      },
      {
        term: "Paese o riva",
        detail: "Molte strutture presentate come «Taormina» stanno al livello del mare sotto il paese. Mandateci l'indirizzo completo, così l'autista va alla quota giusta e non solo al nome giusto.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Se l'ultimo tratto si rivela a piedi sarà in pendenza e con ogni probabilità con gradini: qui il numero di valigie pesa più che in una città pianeggiante.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo da sé; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Difficoltà motorie",
        detail: "Se qualcuno ha problemi con salite o gradini, ditecelo prima. Cambia quale punto di fermata convenga concordare, ed è una cosa che si risolve meglio in anticipo che sul posto.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer per Taormina",
    items: [
      {
        question: "La vettura ci porta fino all'albergo in centro?",
        answer: "A volte sì, e dipende dall'albergo più che dall'autista. Il centro storico è a traffico limitato e le strutture che vi si trovano possono spesso far autorizzare in anticipo una targa. Chiedetelo alla vostra e riferiteci la risposta: dove non è possibile, lo scarico avviene al limite della zona e l'ultimo tratto si fa a piedi.",
      },
      {
        question: "Su quale aeroporto si atterra per Taormina?",
        answer: "Catania. La salita da sud lungo la costa è il percorso abituale; l'altra strada arriva da Messina a nord. Gli arrivi, le tre aerostazioni e l'incontro con l'autista sono trattati sulla pagina dell'aeroporto.",
      },
      {
        question: "Quanto dura il tragitto dall'aeroporto di Catania?",
        answer: "Non pubblichiamo una cifra, ed è una scelta e non una scappatoia: i tempi in circolazione non concordano fra loro e la costiera ad agosto non è la stessa strada di marzo. L'itinerario e i tempi li conferma l'operatore al momento del preventivo.",
      },
      {
        question: "Organizzate una giornata sull'Etna da Taormina?",
        answer: "Sì, ed è il tragitto più richiesto dal paese. La voce sul comune indica circa 45 minuti di auto dal vulcano: è un dato pubblicato e non una nostra stima. Cosa sia poi possibile sulla montagna dipende dalle condizioni del giorno, e vi diciamo cosa può fare un operatore senza promettere un panorama.",
      },
      {
        question: "Il nostro albergo è in paese o giù al mare?",
        answer: "Vale la pena verificarlo, perché parecchie strutture vendute come Taormina stanno al livello del mare e non in paese. I due livelli sono collegati dalla funivia costruita nel 1992 e dalla strada lungo il pendio, ma come arrivo sono due cose diverse. Mandateci l'indirizzo completo e la domanda si risolve da sé.",
      },
      {
        question: "Siamo in crociera con scalo a Messina: riusciamo a vedere Taormina?",
        answer: "Sì, ed è il motivo principale per cui si sbarca a Messina. Indicateci nome della nave, data, orario di arrivo e orario di rientro a bordo: la giornata si costruisce a ritroso da quest'ultimo. Se quello che volete far entrare nelle ore a terra non è realistico, ve lo diciamo finché siete in tempo a cambiarlo.",
      },
      {
        question: "Quanto costa un transfer per Taormina?",
        answer: "Non esiste un listino. Veicolo, numero di passeggeri, data e il punto esatto — in paese o sotto — spostano tutti la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci albergo, indirizzo e cosa vi ha risposto",
    body: "Taormina è l'unico posto in Sicilia in cui è l'autorizzazione della struttura a decidere come finisce il viaggio. Mandatecela insieme al volo o alla nave e al numero di persone. L'organizzazione e il prezzo tornano indietro per iscritto, e se l'arrivo non funziona come lo avete descritto ve lo diciamo invece di preventivarlo lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
