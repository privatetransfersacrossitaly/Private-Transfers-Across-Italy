import type { SicilyAirportPage } from "./types";

/**
 * Aeroporto di Trapani (TPS) — italiano.
 *
 * Scritto in italiano, non tradotto. Qui più che altrove il lettore
 * italiano vuole sapere una cosa precisa: se gli serve davvero un transfer
 * o se l'autobus basta. La pagina risponde a quella, e nomina le autolinee.
 *
 * ── Niente blocco `ports` ─────────────────────────────────────────────────
 * La sezione porti è assente, ed è il motivo per cui è opzionale: la
 * banchina di Trapani è un terminal traghetti, non un porto crociere, e in
 * questo cluster non ha una pagina crocieristica. Il collegamento marittimo
 * sta sulla pagina della città ed è linkato dalle tratte.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 54 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Non compare nessuna distanza
 * aeroporto-città (nessuna fonte la indica) né la data di fine lavori della
 * futura stazione, che la fonte riporta in due modi incoerenti.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const trapaniAirportIt: SicilyAirportPage = {
  meta: {
    // 54 caratteri.
    title: "Transfer aeroporto di Trapani (TPS) – Prenota la corsa",
    description:
      "Transfer privati dall'aeroporto di Birgi, fra Trapani e Marsala: le tratte verso ovest, la banchina dei traghetti e le autolinee, dette per nome.",
  },

  hero: {
    eyebrow: "Sicilia · Aeroporto di Trapani",
    h1: "Transfer privati dall'aeroporto di Trapani",
    lead: "Birgi è il più piccolo dei tre scali siciliani principali e l'unico condiviso con l'Aeronautica Militare. Non sta né a Trapani né a Marsala ma fra le due, ed è il dettaglio che spiazza: fuori dalle porte non c'è una città, e cosa fare dopo dipende interamente dalla direzione che prendete.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va",
    facts: [
      { label: "Codici", value: "TPS · LICT" },
      { label: "Ufficialmente", value: "Aeroporto Vincenzo Florio" },
      { label: "Sta fra", value: "Trapani e Marsala" },
      { label: "Passeggeri", value: "1.007.409 nel 2025" },
    ],
  },

  identity: {
    heading: "Lo scalo",
    paragraphs: [
      "Ufficialmente aeroporto Vincenzo Florio, Trapani-Birgi è uno scalo civile e militare della Sicilia occidentale, situato fra le città di Trapani e Marsala. Le attività civili sono gestite da Airgest; il lato militare, intitolato a Livio Bassi, ospita il 37° Stormo dell'Aeronautica Militare.",
      "È piccolo e sta diventando più piccolo: 1.007.409 passeggeri nel 2025, in calo del 6,29% sui 1.074.939 del 2024, che a loro volta erano sotto i 1.332.368 del 2023. Ryanair vola da qui dal 2006 e vi ha aperto una base nel 2009. La conseguenza pratica è che questo è uno scalo che si usa quando ha il vostro volo, non uno attorno a cui si progetta una vacanza.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi ci date il volo e la destinazione, noi organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro con l'autista al TPS",
    lead: "Uno scalo piccolo si svuota in fretta: è piacevole e lascia pochissimo margine a un accordo vago.",
    steps: [
      {
        title: "Una sala, una sola uscita",
        body: "Qui non esiste l'uscita sbagliata e non c'è nessun trasferimento interno da mettere in conto. Questo elimina la causa più comune di incontri mancati negli scali grandi e lascia le due qui sotto.",
      },
      {
        title: "Date il numero del volo",
        body: "Non l'orario. Con quello l'autista vede il ritardo mentre accade; senza, un volo in ritardo diventa una telefonata da un aereo appena atterrato. In uno scalo con pochi voli e poco movimento, quella telefonata si risolve più difficilmente che in uno affollato.",
      },
      {
        title: "Dite in che direzione",
        body: "Trapani, Marsala, Palermo e Agrigento sono quattro viaggi molto diversi dalla stessa porta. L'aeroporto sta fra le prime due, quindi anche «in città» qui va specificato.",
      },
      {
        title: "Gli indirizzi di campagna vogliono le loro indicazioni",
        body: "Buona parte di ciò che ci viene chiesto qui finisce in una struttura fra le saline o verso Marsala. Inoltrateci le indicazioni di arrivo scritte dalla struttura, se ve ne ha date: da queste parti valgono più di una posizione su una mappa.",
      },
    ],
    note: "Numero del volo e destinazione bastano. Tutto il resto di un arrivo a Birgi è lineare.",
  },

  routes: {
    heading: "Dove si va dall'aeroporto di Trapani",
    lead: "Soprattutto a ovest e a sud. Questo scalo è la porta del vertice occidentale, non dell'isola intera.",
    city: {
      id: "trapani",
      note: "La città, la costa delle saline e la banchina per le Egadi. La pagina della destinazione tratta il collegamento marittimo, compreso cosa può e non può fare un transfer quando c'è di mezzo una nave.",
    },
    items: [
      {
        id: null,
        name: "Marsala",
        note: "L'altra città fra cui sta l'aeroporto. La nominiamo perché la posizione dello scalo la rende una destinazione ovvia, anche se in questo cluster non ha una pagina propria.",
      },
      {
        id: "agrigento",
        note: "A sud-est lungo la costa, per la Valle dei Templi. Su questa tratta Autolinee Lumia fa anche un servizio di linea: conviene saperlo prima di prenotare qualcosa.",
      },
      {
        id: "palermo",
        note: "A est lungo la costa settentrionale fino al capoluogo, e al suo aeroporto se c'è una coincidenza da prendere.",
      },
      {
        id: "sicily",
        note: "La pagina regionale: come si tiene insieme l'isola e quale scalo conviene per quale angolo.",
      },
    ],
    footnote: "Da questo scalo non pubblichiamo distanze verso nessuna destinazione, Trapani compresa. La voce sull'aeroporto dice soltanto che si trova fra Trapani e Marsala, e non abbiamo trovato una cifra su cui valga la pena rispondere. L'itinerario lo conferma l'operatore al preventivo.",
  },

  alternatives: {
    heading: "Quando il transfer non serve",
    lead: "È lo scalo siciliano in cui più spesso la risposta giusta è l'autobus, e nasconderlo sarebbe disonesto.",
    modes: [
      {
        mode: "Autolinee",
        suits: "Spostamenti diurni con pochi bagagli. Autoservizi Salemi serve Trapani, Marsala e Palermo; Autolinee Lumia serve Agrigento; l'Azienda Siciliana Trasporti serve Trapani. Coprono quasi tutte le mete reali da qui.",
        against: "Gli orari sono costruiti attorno a voli già radi, e una coincidenza persa in un posto piccolo significa una lunga attesa. Verificate gli orari presso i gestori e non presso di noi: non li abbiamo verificati.",
      },
      {
        mode: "Treno",
        suits: "Il proseguimento in treno una volta raggiunta una stazione. La voce sull'aeroporto lo descrive come equidistante dalle stazioni di Trapani e di Marsala.",
        against: "Equidistante da due stazioni significa a nessuna delle due: prima bisogna raggiungerne una. Una stazione a servizio dello scalo è in costruzione, ma la fonte dà date di fine lavori discordanti e non ne pubblichiamo nessuna.",
      },
      {
        mode: "Auto a noleggio",
        suits: "Girare il vertice occidentale, che è esteso e dove buona parte degli alloggi sta in campagna.",
        against: "Il centro storico di Trapani si stringe e limita l'accesso come ogni centro italiano di quell'età, e un cancello di campagna di notte è più difficile da trovare la prima volta di quanto sembri su una mappa.",
      },
      {
        mode: "Transfer privato",
        suits: "Una struttura di campagna, un arrivo serale, un gruppo, bambini, un traghetto da prendere, o una prima volta in cui nessuno ha mai percorso queste stradine.",
        against: "Va organizzato prima, e per una corsa diurna verso Trapani con una valigia l'autobus basta.",
      },
    ],
    verdict: "Regola onesta per Birgi: di giorno, viaggiando leggeri, verso una città servita dalle autolinee, prendete l'autobus. Per un indirizzo di campagna, un atterraggio serale, un imbarco da rispettare o un gruppo con i bagagli, organizzatelo.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Elenco breve, perché è uno scalo semplice.",
    items: [
      {
        term: "Il numero del volo",
        detail: "Non l'orario. In uno scalo tranquillo un accordo vago ha meno margine per assorbire un imprevisto, non di più.",
      },
      {
        term: "Quale città",
        detail: "L'aeroporto sta fra Trapani e Marsala, quindi qui «in città» è ambiguo come non lo è altrove. Specificatelo.",
      },
      {
        term: "Scadenze dei traghetti",
        detail: "Se il tragitto finisce alla banchina di Trapani per una corsa verso le Egadi, è l'imbarco a governare la giornata e non un orario di ritiro. Indicateci quale intendete prendere.",
      },
      {
        term: "Indirizzi di campagna",
        detail: "Fra le saline e verso Marsala, inoltrate le indicazioni di arrivo della struttura. È la cosa più utile che possiate mandare.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero, e conta doppio se c'è di mezzo un traghetto.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dall'aeroporto di Trapani",
    items: [
      {
        question: "Quanto dista l'aeroporto da Trapani?",
        answer: "Non pubblichiamo una cifra, perché nessuna fonte su cui faremmo affidamento ne indica una: la voce sullo scalo dice soltanto che si trova fra Trapani e Marsala. È una lacuna dichiarata e non una scappatoia, e l'itinerario lo conferma l'operatore al preventivo.",
      },
      {
        question: "C'è l'autobus dall'aeroporto?",
        answer: "Sì, e per diversi tragitti può essere la soluzione migliore. Autoservizi Salemi serve Trapani, Marsala e Palermo; Autolinee Lumia serve Agrigento; l'Azienda Siciliana Trasporti serve Trapani. Le nominiamo invece di far credere che da un piccolo scalo si esca solo in transfer. Per gli orari rivolgetevi ai gestori.",
      },
      {
        question: "C'è una stazione ferroviaria in aeroporto?",
        answer: "Non ancora. Lo scalo è descritto come equidistante dalle stazioni di Trapani e Marsala, il che significa che non sta a nessuna delle due. Una stazione a suo servizio è in costruzione: la fonte che abbiamo letto dà due date di fine lavori diverse nello stesso articolo, quindi non ne pubblichiamo nessuna.",
      },
      {
        question: "Perché questo aeroporto è più piccolo di un tempo?",
        answer: "Il traffico pubblicato è calato per due anni di fila: 1.332.368 passeggeri nel 2023, 1.074.939 nel 2024 e 1.007.409 nel 2025. Lo diciamo perché ha un effetto pratico su di voi: l'orario è rado, quindi Birgi è uno scalo che si usa quando ha il vostro volo, non uno attorno a cui organizzare un viaggio.",
      },
      {
        question: "Potete portarci alla banchina per il traghetto delle Egadi?",
        answer: "Sì. Il transfer arriva in banchina e può riprendervi allo sbarco del ritorno; la traversata è un viaggio in traghetto e il veicolo non attraversa con voi se non è stato concordato espressamente. Indicateci la corsa che intendete prendere e la giornata si costruisce attorno a quella. La pagina di Trapani lo tratta per esteso.",
      },
      {
        question: "Potete portarci a Palermo o al suo aeroporto?",
        answer: "Sì, sono richieste abituali, a volte perché una coincidenza esiste solo da Palermo. Diteci gli orari da entrambe le parti e vi diremo onestamente se la coincidenza è comoda, invece di preventivare qualcosa di stretto e sperare.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Trapani?",
        answer: "Non esiste un listino. Una corsa breve verso Trapani e un viaggio fino ad Agrigento non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci il volo e da che parte andate",
    body: "In uno scalo fra due città, la direzione conta quanto l'indirizzo. Mandateci entrambi, più quante persone siete e l'eventuale traghetto da prendere. L'organizzazione e il prezzo tornano indietro per iscritto — e se l'autobus vi conviene di più, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
