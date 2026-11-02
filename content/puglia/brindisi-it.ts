import type { BrindisiPage } from "./types";

/**
 * Brindisi — italiano.
 *
 * Scritto in italiano, non tradotto. Due differenze sostanziali rispetto
 * alla versione inglese, dettate da chi cerca in ciascuna lingua:
 *
 * 1. Il confronto "Bari o Brindisi" pesa meno. Chi cerca in italiano
 *    raramente deve scegliere lo scalo: spesso arriva in auto o in treno,
 *    oppure sa già dove atterra. La sezione resta — è una domanda che la
 *    pagina possiede secondo la mappa delle keyword — ma il taglio è più
 *    pratico e meno didascalico.
 * 2. Le masserie non vanno spiegate. In inglese bisogna dire cosa sia una
 *    masseria; in italiano no, e lo spazio risparmiato va su ciò che serve
 *    davvero, cioè come far trovare l'ingresso a un autista.
 *
 * Fonti identiche alla versione inglese: dati dell'aeroporto dalla voce
 * enciclopedica (che cita Assaeroporti per il traffico), i 39 km per Lecce
 * dalla guida agli itinerari della Regione Puglia, le distanze più a sud da
 * fonti che divergono fra loro — e la pagina lo dichiara invece di scegliere
 * un numero e presentarlo come certo.
 *
 * Nessun prezzo, nessuna affermazione su veicoli di proprietà, nessuna
 * testimonianza, nessuna garanzia.
 */

export const brindisiIt: BrindisiPage = {
  meta: {
    // Ri-orientata all'arrivo della pagina dedicata al BDS: questa pagina
    // portava il titolo "Transfer aeroporto di Brindisi", che ora appartiene a
    // quella. Il corpo del testo non e' stato riscritto.
    title: "Transfer a Brindisi e verso il Salento",
    description:
      "Transfer privati a Brindisi e dintorni: la porta del sud della Puglia, quale scalo conviene e la discesa verso il Salento. Preventivo scritto.",
  },

  hero: {
    eyebrow: "Puglia · Brindisi",
    h1: "Transfer a Brindisi e verso sud",
    lead: "Brindisi è lo scalo del Salento. Lecce è a una mezz'ora, Ostuni poco meno, e quasi tutto ciò per cui si scende quaggiù è più vicino a questa pista che a quella di Bari. L'aeroporto si lascia in fretta: la parte da organizzare bene è il tragitto che viene dopo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Bari o Brindisi?",
    facts: [
      { label: "Aeroporto", value: "Brindisi · BDS / LIBR" },
      { label: "Noto anche come", value: "Papola Casale · Aeroporto del Salento" },
      { label: "Dal centro", value: "Circa 6 km" },
      { label: "Passeggeri", value: "3.385.610 nel 2024" },
    ],
  },

  intro: {
    heading: "La porta del Salento",
    // L'identità dello scalo — l'intitolazione ad Antonio Papola, i nomi
    // Papola Casale e Aeroporto del Salento, il traffico 2024, la base
    // Ryanair — non si ripete qui: sta per esteso, con le fonti, sulla
    // pagina del BDS, che possiede quella query. Qui serve solo ciò che
    // l'aeroporto implica per il tragitto.
    paragraphs: [
      "Brindisi è la porta del sud della Puglia, e il secondo nome con cui lo scalo è conosciuto — Aeroporto del Salento — lo dice meglio del primo. Quasi tutto ciò per cui si scende quaggiù è più vicino a questo angolo di regione che a Bari: Lecce, le masserie negli uliveti, le spiagge di entrambe le coste e i paesi alla punta del tacco.",
      "Il traffico qui è fortemente stagionale, e lo è anche tutto ciò che a terra lo accoglie. A luglio e agosto lo scalo e gli operatori che ci lavorano sono al massimo insieme; nei mesi di spalla c'è molto più spazio. Questo incide su quanto convenga muoversi in anticipo assai più della distanza.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi indicate il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  ladder: {
    heading: "Quanto scendete a sud?",
    lead: "È la domanda che determina davvero un transfer da Brindisi. Più in basso si alloggia lungo il tacco, più il tragitto è il viaggio — e più conta che sia stato organizzato invece che improvvisato al posteggio.",
    stops: [
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Circa 32-37 km",
        drive: "Calcolate una trentina di minuti",
        note: "A nord-ovest dell'aeroporto, non a sud. La Città Bianca, sul colle sopra gli uliveti: molti ospiti però alloggiano in una masseria sotto il paese, non nel paese.",
      },
      {
        id: "lecce",
        name: "Lecce",
        distance: "Circa 39 km",
        drive: "Calcolate 30-40 minuti",
        note: "La capitale del barocco e l'arrivo tipico di una vacanza salentina. La guida regionale agli itinerari indica 39 km e circa mezz'ora.",
      },
      {
        id: null,
        name: "Otranto",
        distance: "Le fonti danno 65-97 km",
        drive: "Calcolate un'ora e un quarto",
        note: "Versante adriatico. La forbice fra le distanze pubblicate è reale: dipende dal percorso, interno via Lecce oppure lungo la costa.",
      },
      {
        id: null,
        name: "Gallipoli",
        distance: "Circa 80-86 km",
        drive: "Calcolate un'ora e un quarto",
        note: "Versante ionico, di norma via Lecce e poi SS101. Un altro mare, e una vacanza di tutt'altro tipo.",
      },
      {
        id: null,
        name: "Santa Maria di Leuca",
        distance: "La punta estrema, oltre Otranto",
        drive: "Calcolate ben oltre un'ora e mezza",
        note: "Dove i due mari si incontrano, alla fine del tacco. Il più lungo dei tragitti abituali dal BDS e quello che si sottovaluta più spesso.",
      },
    ],
    footnote: "Sono dati pubblicati da pianificatori di percorso, operatori e dalla guida regionale agli itinerari, e non coincidono tutti — la forbice su Otranto ne è l'esempio più evidente. La scaletta serve come orientamento, non come orario. Il traffico estivo sulle litoranee aggiunge tempo che nessun pianificatore considera, e il percorso effettivo lo confermiamo al momento del preventivo.",
  },

  versusBari: {
    heading: "Bari o Brindisi?",
    lead: "I due scali stanno alle estremità opposte di una regione lunga. Atterrare in quello sbagliato non è un disastro: aggiunge semplicemente un tragitto che si poteva evitare.",
    rule: "Se alloggiate a sud di Ostuni, Brindisi. Se alloggiate a nord di Ostuni, Bari. Ostuni sta sulla linea di confine e funziona bene da entrambi.",
    columns: [
      {
        heading: "Brindisi conviene per",
        points: [
          "Lecce e tutto il Salento",
          "Otranto, Gallipoli e i capi meridionali",
          "Ostuni e il margine sud della Valle d'Itria",
          "La costa adriatica a sud di Brindisi",
        ],
      },
      {
        heading: "Bari conviene per",
        points: [
          "Bari stessa e il terminal crociere",
          "Alberobello e la zona dei trulli",
          "Polignano a Mare e Monopoli",
          "Matera, oltre il confine in Basilicata",
        ],
      },
    ],
    caveat: "A decidere sono più spesso i voli che la geografia. Se l'unico volo sensato atterra nell'altro scalo, prendetelo: il transfer resta organizzabile, è soltanto un tragitto più lungo — ed è meglio saperlo prima di acquistare il volo che dopo.",
  },

  airport: {
    heading: "Se arrivate in aereo",
    summary: [
      "Il BDS dista circa 6 km dalla città ed è piccolo davvero: pochi passi dall'aereo, un solo punto di ritiro bagagli, un'uscita sola. Quello che conta per un transfer è che si svuota in fretta, quindi qui il margine per un accordo vago è più stretto che in uno scalo grande.",
      "La meccanica dell'incontro — il cartello, perché il numero del volo vale più di un orario scritto su un modulo, i voli serali d'estate, cosa indicare per un indirizzo di campagna — sta sulla pagina dedicata allo scalo, insieme a tutte le tratte verso sud e al confronto con autobus, treno e auto a noleggio. Questa pagina resta su Brindisi e sulla strada verso sud.",
    ],
    handoff: {
      heading: "I transfer dall'aeroporto di Brindisi, per esteso",
      body: "L'incontro con l'autista al BDS, come si organizza e come si paga un transfer privato, tutte le tratte lungo il tacco con le distanze così come le riportano le fonti, e cosa coprono davvero autobus, treno e auto a noleggio.",
      cta: "Transfer aeroporto di Brindisi (BDS)",
    },
  },

  lecce: {
    heading: "Arrivare a Lecce",
    paragraphs: [
      "Lecce è di gran lunga la destinazione più richiesta da questo aeroporto, e il tragitto è lineare: circa 39 km secondo la guida regionale, una mezz'ora in condizioni normali, in gran parte sulla SS613.",
      "La complicazione non è il viaggio ma l'arrivo. Il centro storico di Lecce è in parte a traffico limitato, e moltissime delle strutture in cui si alloggia — i palazzi storici recuperati e i piccoli alberghi di cui la città è piena — stanno dentro quel perimetro. Il punto di scarico consentito è a volte a qualche minuto a piedi dalla porta, e un autista che sa già da quale porta entrare per la vostra via evita un giro completo delle mura con le valigie.",
      "Se alloggiate in centro, indicate nella richiesta l'indirizzo completo e non solo il nome della struttura: a Lecce più di un alloggio condivide il nome con una via o una piazza, e la differenza può valere dieci minuti di camminata alla fine di un volo.",
    ],
  },

  masserie: {
    heading: "Masserie e campagna",
    lead: "Buona parte di chi atterra a Brindisi non è diretto in un paese, ma in una masseria fra l'aeroporto e il mare. È un viaggio di natura diversa.",
    paragraphs: [
      "Le masserie migliori sono isolate per scelta: strada bianca senza illuminazione, cancello senza insegna o con un cartello piccolo, e intorno solo ulivi. Di giorno è esattamente ciò per cui si prenota. Alle undici di sera, dopo un volo in ritardo, con un'auto a noleggio e un segnale telefonico che va e viene, è il modo più frequente in cui una vacanza in Puglia comincia male.",
      "È il caso in cui organizzare conviene di più. Un autista che in quella struttura c'è già stato vale molto più di una posizione sulla mappa, e gli operatori che lavorano su Brindisi conoscono la maggior parte delle masserie della zona.",
    ],
    send: {
      heading: "Cosa allegare alla richiesta",
      items: [
        "Nome completo della struttura e le sue indicazioni di arrivo: molte masserie ne hanno una versione pensata per gli autisti",
        "Posizione sulla mappa o coordinate, se la struttura le fornisce, non solo il comune",
        "Il centro abitato più vicino e la strada su cui si apre l'ingresso",
        "Numero del volo, numero di passeggeri e di bagagli",
        "Se serve un seggiolino e l'età dei bambini",
      ],
    },
  },

  coasts: {
    heading: "Due coste, due vacanze diverse",
    lead: "Il Salento è una penisola con un mare per lato, e non sono intercambiabili. Da che parte si alloggia cambia il tragitto, e spesso cambia anche quale scalo fosse quello giusto.",
    sides: [
      {
        heading: "Versante adriatico",
        body: "A est, più roccioso, con falesie e cale invece di spiagge lunghe. Il fondale scende subito. Da Brindisi si scende lungo la costa oppure all'interno via Lecce, a seconda di quanto si va a sud.",
        places: "Otranto · Santa Cesarea Terme · la costa a sud di Brindisi",
      },
      {
        heading: "Versante ionico",
        body: "A ovest, più pianeggiante, con spiagge ampie e sabbiose e acqua bassa: il lato che scelgono più spesso le famiglie. Di solito si raggiunge via Lecce, attraversando la penisola.",
        places: "Gallipoli · Porto Cesareo · le spiagge ioniche",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da sistemare prima di partire, non sul marciapiede all'arrivo.",
    items: [
      {
        term: "Seggiolini",
        detail: "Indicate numero ed età dei bambini nella richiesta. I seggiolini si concordano in anticipo con l'operatore: non sono qualcosa che l'autista possa procurarsi all'arrivo e in alta stagione sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contateli tutti, compreso ciò che non si piega. Il veicolo si sceglie su quel numero, e il problema di una stima approssimativa si vede soltanto a bagagliaio aperto.",
      },
      {
        term: "Indirizzi di campagna",
        detail: "Allegate le indicazioni di arrivo della struttura, non solo il nome. In Salento conta più che quasi ovunque in Italia, perché moltissimi alloggi stanno su strade senza nome.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Lecce e Ostuni limitano entrambe l'accesso al centro storico, e così fanno quasi tutti i borghi lungo la penisola. In Italia è la norma, non un ostacolo: significa soltanto che il punto in cui ci si può fermare è a volte un paio di strade più in là, e che conviene sapere prima qual è il varco giusto.",
      },
      {
        term: "Stagionalità",
        detail: "In piena estate la regione lavora al limite, vetture e autisti compresi, e la differenza fra organizzare con due settimane di anticipo e chiedere in giornata è qui più marcata che quasi ovunque in Puglia.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer da Brindisi",
    items: [
      // Riscritte all'arrivo della pagina del BDS. Quella pagina risponde
      // alle stesse domande dal lato dell'aeroporto; queste rispondono dal
      // lato della città, e nessuna qui sotto ne ripete più una frase.
      {
        question: "Quanto dista l'aeroporto di Brindisi da Lecce?",
        answer: "Circa 39 km secondo la guida agli itinerari della Regione Puglia, e il tragitto è la parte semplice. A decidere com'è la fine del viaggio è il centro storico di Lecce, come spiega la sezione qui sopra: lo scarico consentito può essere a qualche minuto a piedi dalla porta, e quale varco usare dipende dalla via.",
      },
      {
        question: "Conviene atterrare a Brindisi o a Bari?",
        answer: "Se alloggiate a sud di Ostuni — Lecce, Otranto, Gallipoli, il Salento in generale — Brindisi. A nord di Ostuni è più vicino Bari. Ostuni sta sulla linea di confine e funziona da entrambi. Se i voli convengono sull'altro scalo, il transfer resta organizzabile: è soltanto un tragitto più lungo.",
      },
      {
        question: "Alloggiamo a Brindisi città: vale la pena organizzare un transfer?",
        answer: "Forse no, e preferiamo dirlo. La città dista circa 6 km dalla pista: è uno dei tragitti aeroportuali più brevi della Puglia e uno dei pochi in cui arrivare senza nulla di concordato è un piano ragionevole. Diteci dove alloggiate e vi rispondiamo francamente. Sono i tragitti che proseguono verso sud — un'ora o più, spesso verso un indirizzo senza numero civico — quelli in cui organizzare prima cambia la serata.",
      },
      {
        question: "Venite a prenderci in una masseria in campagna?",
        answer: "Sì, ed è la richiesta più frequente da queste parti. L'elenco qui sopra dice cosa indicare: nome completo della struttura, posizione esatta o coordinate se le fornisce, paese più vicino e strada su cui si apre l'ingresso. Le strutture di campagna qui si descrivono molto più facilmente di quanto si trovino, ed è esattamente per questo che tante tengono pronte indicazioni scritte per gli autisti.",
      },
      {
        question: "Cambia qualcosa a seconda della costa?",
        answer: "Cambia il tragitto più di quanto si immagini. Il Salento ha un mare per lato e le strade non li trattano allo stesso modo: il versante adriatico si raggiunge lungo la costa oppure per l'interno passando da Lecce, quello ionico quasi sempre attraversando la penisola da Lecce. Per una meta come Otranto le distanze pubblicate vanno da circa 65 a 97 km a seconda di quale dei due percorsi si prende: è il motivo per cui l'itinerario effettivo lo confermiamo al preventivo e non prima.",
      },
      {
        question: "Organizzate i trasferimenti per un matrimonio in Salento?",
        answer: "Sì, e di solito come un lavoro unico e non come tanti pezzi: ospiti in arrivo su più giorni, un trasferimento coordinato verso la location e i rientri a notte fonda, che sono la parte a cui si pensa più tardi. Mandateci numero di ospiti, punti di raccolta e orari e il preventivo esce intero. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
      },
      {
        question: "Quanto costa un transfer da Brindisi?",
        answer: "Non esiste un listino, perché i tragitti non sono confrontabili: un indirizzo a dieci minuti dall'aerostazione e uno in fondo al tacco sono due lavori diversi, e anche data e veicolo spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci dove alloggiate",
    body: "Qui conta più dove andate che dove atterrate: l'indirizzo, quanti siete e il volo a cui il tragitto deve agganciarsi. L'organizzazione e il prezzo tornano indietro per iscritto, e se il tragitto non funziona come lo avete descritto ve lo diciamo invece di preventivarlo lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
