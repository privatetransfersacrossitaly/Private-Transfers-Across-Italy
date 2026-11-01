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
    title: "Transfer aeroporto di Brindisi",
    description:
      "Transfer privati dall'aeroporto di Brindisi (BDS) verso Lecce, Ostuni, il Salento e le masserie. Indicate il tragitto e ricevete un preventivo scritto.",
  },

  hero: {
    eyebrow: "Puglia · Brindisi",
    h1: "Transfer dall'aeroporto di Brindisi",
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
    paragraphs: [
      "L'aeroporto di Brindisi è intitolato ad Antonio Papola, aviatore morto in un incidente di volo nel febbraio 1948, e porta altri due nomi che si incontrano su biglietti e cartelli: Papola Casale, dal quartiere, e Aeroporto del Salento, dalla regione storica a cui dà accesso. È quest'ultimo a spiegare meglio di tutti a cosa serve lo scalo.",
      "È un aeroporto piccolo — poco meno di 3,4 milioni di passeggeri nel 2024 — e base operativa di Ryanair, con un traffico fortemente stagionale: le rotte dal Nord Europa si infittiscono d'estate e si diradano da novembre. La stagionalità conta quando si organizza il trasporto a terra, perché ad agosto sono impegnati l'aeroporto e tutti gli operatori che ci lavorano.",
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
    heading: "Uscire dall'aeroporto",
    paragraphs: [
      "Il BDS è piccolo davvero, ed è il suo pregio maggiore. Dall'aereo alla sala arrivi si fanno pochi passi, i bagagli si ritirano in un punto solo e l'uscita è una: non esiste l'uscita sbagliata e non c'è alcun trasferimento interno da mettere in conto.",
      "La conseguenza pratica è che qui si esce in fretta. Dove uno scalo grande concede all'autista venti minuti di margine mentre i passeggeri si districano, Brindisi non li concede. Un transfer agganciato al numero del volo assorbe questa differenza; uno fissato su un orario stimato no.",
    ],
    meeting: [
      {
        title: "Punto d'incontro",
        body: "Gli autisti attendono in sala arrivi con il cartello. Concordate prima cosa ci sarà scritto: un cognome diverso da quello atteso è il motivo più comune per cui due persone restano a dieci metri l'una dall'altra senza trovarsi.",
      },
      {
        title: "Indicate il numero del volo",
        body: "Con il numero del volo l'autista vede da sé un ritardo o un dirottamento. Senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato: il momento peggiore per organizzare qualsiasi cosa.",
      },
      {
        title: "Voli serali e stagionali",
        body: "L'orario estivo di Brindisi comprende parecchi arrivi in tarda serata, e nelle ore piccole la disponibilità è più ridotta che in pieno giorno. A luglio e agosto muoversi per tempo fa una differenza reale.",
      },
    ],
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
        detail: "Lecce, Ostuni e quasi tutti i centri storici limitano l'accesso dei veicoli. È normale e non è un ostacolo: significa solo che lo scarico consentito è a volte a qualche minuto a piedi dalla porta.",
      },
      {
        term: "Stagionalità",
        detail: "L'orario di Brindisi è fortemente stagionale, e con esso il trasporto a terra. Luglio e agosto sono mesi pieni per tutti gli operatori dello scalo: organizzare per tempo qui rende più che in un aeroporto attivo tutto l'anno.",
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
      {
        question: "Quanto dista l'aeroporto di Brindisi da Lecce?",
        answer: "Circa 39 km secondo la guida regionale agli itinerari, con una mezz'ora di percorrenza in condizioni normali. È con ampio margine il tragitto più richiesto da questo scalo.",
      },
      {
        question: "Conviene atterrare a Brindisi o a Bari?",
        answer: "Se alloggiate a sud di Ostuni — Lecce, Otranto, Gallipoli, il Salento in generale — Brindisi. A nord di Ostuni è più vicino Bari. Ostuni sta sulla linea di confine e funziona da entrambi. Se i voli convengono sull'altro scalo, il transfer resta organizzabile: è soltanto un tragitto più lungo.",
      },
      {
        question: "Quanto dista l'aeroporto dal centro di Brindisi?",
        answer: "Circa 6 km. Lo scalo è vicino alla città, ed è anche per questo che si lascia in fretta — ma chi atterra qui raramente si ferma a Brindisi, e il tragitto che conta è quello più a sud.",
      },
      {
        question: "Venite a prenderci in una masseria in campagna?",
        answer: "Sì, ed è una delle richieste più frequenti su questo scalo. Indicate il nome della struttura e le indicazioni di arrivo che vi ha fornito: molte masserie ne tengono una versione scritta per gli autisti proprio perché le stradine sono difficili da trovare, e inoltrarcela è la cosa più utile che possiate fare.",
      },
      {
        question: "Ci sono autobus o treni dall'aeroporto di Brindisi?",
        answer: "Esistono collegamenti in autobus, ma preferiamo rimandarvi agli orari aggiornati piuttosto che pubblicare orari che non possiamo verificare: i servizi variano per stagione e per operatore. Per Lecce e i centri più a sud il confronto pratico è di solito fra un collegamento con cambio e un'auto porta a porta, e con i bagagli e un arrivo serale il confronto tende a risolversi da sé.",
      },
      {
        question: "Organizzate i trasferimenti per un matrimonio in Salento?",
        answer: "Sì. L'organizzazione tipica prevede gli arrivi degli ospiti in aeroporto distribuiti su più giorni, un trasferimento coordinato verso la location e i rientri successivi. Indicateci numero di ospiti, punti di raccolta e orari e prepariamo un preventivo unico invece che frammentato. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Brindisi?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data: un tragitto per Ostuni e uno per Santa Maria di Leuca non sono paragonabili. Descrivete quello che vi serve e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci dove alloggiate",
    body: "Numero del volo, struttura e quanti siete — e le indicazioni di arrivo della struttura, se ve ne ha mandate. Vi rispondiamo con l'organizzazione e il prezzo per iscritto, e se il tragitto non funziona come lo avete descritto ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
