import type { MonopoliPage } from "./types";

/**
 * Monopoli — italiano.
 *
 * Scritto in italiano, non tradotto. Il lettore italiano non ha bisogno che
 * gli si spieghi dove sia Monopoli né cosa sia una masseria, ma ha molto più
 * spesso un problema specifico: prenota una struttura "a Monopoli" che sta
 * in realtà a dodici chilometri dal centro, lungo una litoranea. La pagina
 * italiana insiste quindi sull'indirizzo e sulla distinzione fra comune e
 * centro abitato, e spende meno righe sul contesto turistico.
 *
 * Fonti: popolazione 49.246 (31-12-2014), superficie 157,89 km², altitudine
 * 9 m, Città metropolitana di Bari, Castello di Carlo V (ultimato nel 1525,
 * pianta pentagonale, carcere fino al 1969), la cattedrale settecentesca e
 * basilica minore, il castello di Santo Stefano (1086), Cala Porta Vecchia
 * come spiaggia cittadina, la Via Traiana e i comuni confinanti — tutto
 * dalla voce enciclopedica su Monopoli.
 *
 * Sulle distanze: la stessa voce dà "circa 40 km a sud-est di Bari" nel
 * cappello e "44 da Bari" nella sezione geografica. Entrambe si riferiscono
 * alla città. I circa 60 km citati nella pagina su Bari sono dall'aeroporto,
 * che sta 8 km a nord-ovest del centro: i numeri sono coerenti e la pagina
 * lo dice, perché altrimenti sembrerebbe che uno dei due sia sbagliato.
 *
 * Capitolo non compare nella voce e quindi non viene nominato come dato
 * verificato.
 *
 * Nessun prezzo, nessuna flotta di proprietà, nessuna testimonianza,
 * nessuna garanzia.
 */

export const monopoliIt: MonopoliPage = {
  meta: {
    title: "Transfer per Monopoli",
    description:
      "Transfer privati per Monopoli: aeroporto di Bari, il porto antico, la costa a nord e a sud e le giornate ad Alberobello. Indicate il tragitto, ricevete un preventivo.",
  },

  hero: {
    eyebrow: "Puglia · Monopoli",
    h1: "Transfer per Monopoli",
    lead: "Monopoli è una città portuale sull'Adriatico con una costa lunga da entrambi i lati, ed è quella costa la cosa da definire bene. Due strutture a pochi chilometri l'una dall'altra significano due viaggi diversi, e il centro potrebbe non essere affatto dove alloggiate.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Lungo la costa",
    facts: [
      { label: "Dove", value: "Costa adriatica, circa 40 km a SE di Bari città" },
      { label: "Città metropolitana", value: "Bari (BA)" },
      { label: "Abitanti", value: "49.246" },
      { label: "Superficie del comune", value: "157,89 km²" },
    ],
  },

  intro: {
    heading: "Un comune con molta costa",
    paragraphs: [
      "Monopoli viene descritta come centro agricolo, industriale e turistico insieme, ed è una sintesi insolitamente onesta: è tutte e tre le cose. Non è una località balneare con una città attaccata, ma una città di quasi cinquantamila abitanti con un porto che lavora, dove il turismo convive con il resto invece di sostituirlo. È gran parte del suo interesse.",
      "Il comune copre quasi 158 chilometri quadrati, e buona parte delle strutture che si prenotano è distribuita lungo la costa invece che concentrata nel centro storico. Resort, masserie recuperate e case vacanza si allineano a nord e a sud del porto: per questo la cosa più utile in una richiesta non è la parola \"Monopoli\" ma il punto preciso della litoranea in cui vi trovate.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi dite dove siete diretti, noi organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
    ],
  },

  coast: {
    heading: "In che punto della costa siete?",
    lead: "Il centro storico è il mezzo della linea, non tutta la linea. Questi sono i tratti in cui si alloggia, letti da nord verso sud — e la differenza fra loro è tempo di guida reale, non minuti.",
    stops: [
      {
        name: "A nord, verso Polignano",
        position: "Sopra il porto",
        note: "La costa che risale verso Polignano a Mare, il comune successivo. Qui si è più vicini a Bari e all'aeroporto, e un po' più lontani dalla Valle d'Itria.",
      },
      {
        name: "Centro storico e porto antico",
        position: "Il centro",
        note: "Il nucleo antico e il porto vecchio. Gli alberghi sono piccoli, le strade strette, e lo scarico pratico è a volte al margine invece che davanti al portone.",
      },
      {
        name: "Cala Porta Vecchia",
        position: "Al margine della città",
        note: "La spiaggia cittadina, accanto al centro storico. È l'unica che la scheda comunale nomina, ed è quella raggiungibile a piedi da un albergo in centro.",
      },
      {
        name: "A sud, verso Fasano",
        position: "Sotto il porto",
        note: "Il tratto più lungo, che scende verso Fasano — il comune registra 15 km fra i due. Da questo lato stanno quasi tutti i resort costieri più grandi e le strutture di campagna.",
      },
    ],
    footnote: "L'indirizzo di una struttura dirà spesso soltanto Monopoli, perché il comune è grande e quello è il riferimento anagrafico. Mandate l'indirizzo completo o la posizione sulla mappa che la struttura vi fornisce: su una costa così lunga il solo nome del comune restringe la ricerca a una ventina di chilometri.",
  },

  harbour: {
    heading: "Il centro storico e il porto",
    paragraphs: [
      "Il nucleo antico si sviluppa intorno al porto vecchio, e le due cose più visibili sono entrambe fortificate. Il Castello di Carlo V fu ultimato nel 1525 su pianta pentagonale, su un promontorio in origine separato dalla città medievale; ampliato nel Seicento, fu carcere dall'inizio dell'Ottocento fino al 1969 e oggi ospita mostre ed eventi culturali. Più avanti lungo la costa, il castello di Santo Stefano fu edificato nel 1086 da Goffredo di Conversano e divenne poi monastero benedettino.",
      "L'altro riferimento è la cattedrale — la settecentesca Basilica della Madonna della Madia, basilica minore — e sono le strade intorno a essa la parte di Monopoli che si percorre a piedi. Monopoli conserva inoltre il tratto più lungo della Via Traiana fra i comuni pugliesi, con un parco archeologico istituito nel 2012.",
      "Ai fini di un transfer, di tutto questo conta una cosa sola: è antico e compatto. L'auto arriva vicino, non sempre al portone.",
    ],
    sights: [
      {
        title: "Castello di Carlo V",
        body: "Ultimato nel 1525, pentagonale, su un proprio promontorio. Carcere fino al 1969, oggi sede di mostre ed eventi.",
      },
      {
        title: "Basilica della Madonna della Madia",
        body: "La cattedrale settecentesca, basilica minore, al centro del nucleo antico.",
      },
      {
        title: "Castello di Santo Stefano",
        body: "Edificato nel 1086 da Goffredo di Conversano, poi monastero benedettino, lungo la costa.",
      },
    ],
  },

  arriving: {
    heading: "Come si arriva a Monopoli",
    lead: "L'aeroporto è Bari, e in città c'è una stazione ferroviaria — che per certi arrivi è davvero la soluzione migliore.",
    routes: [
      {
        from: "Aeroporto di Bari (BRI)",
        distance: "Circa 60 km",
        body: "L'arrivo abituale. La scheda del comune indica 44 km da Bari: quella è la distanza dalla città. L'aeroporto sta altri 8 km a nord-ovest, ed è il motivo per cui il dato aeroportuale è maggiore. Entrambi i numeri sono corretti, misurano cose diverse.",
      },
      {
        from: "Aeroporto di Brindisi (BDS)",
        distance: "Il comune registra 75 km da Brindisi",
        body: "Tragitto più lungo, del tutto praticabile se i voli convengono o se Monopoli è l'estremità nord di un viaggio con base più a sud.",
      },
      {
        from: "In treno",
        distance: "Monopoli ha la propria stazione",
        body: "Per un albergo in centro con pochi bagagli è una soluzione ragionevole. Il calcolo cambia se alloggiate lungo la costa, come fa la maggior parte: la stazione è in città, la struttura probabilmente no.",
      },
    ],
    note: "Indicateci il numero del volo e non l'orario. Così l'autista vede da sé un ritardo o un dirottamento: un orario scritto su un modulo non glielo mostra.",
  },

  staying: {
    heading: "I tre tipi di soggiorno",
    lead: "Chi richiede un transfer per Monopoli rientra quasi sempre in uno di questi casi, e ciascuno cambia il viaggio.",
    groups: [
      {
        title: "In centro storico",
        body: "Piccoli alberghi e appartamenti intorno al porto. Tutto a piedi, spiaggia cittadina vicina, e nessuna necessità di auto una volta arrivati. L'unico passaggio un po' scomodo è l'arrivo, e solo moderatamente.",
      },
      {
        title: "In un resort sulla costa",
        body: "Le strutture più grandi lungo la litoranea, soprattutto a sud. Hanno ingresso e parcheggio propri, quindi l'arrivo è semplice — ma sono davvero fuori città, e andare a cena a piedi di norma non è un'opzione.",
      },
      {
        title: "In campagna",
        body: "Masserie e case rurali nell'entroterra costiero. Vale quanto in tutta la Puglia: strada bianca, cancello, nessuna illuminazione. Allegate le indicazioni di arrivo che vi ha dato la struttura.",
      },
    ],
  },

  excursions: {
    heading: "Giornate fuori da Monopoli",
    lead: "Monopoli funziona bene come base proprio per quello che ha entro mezz'ora. Queste sono le richieste più frequenti: ognuna ha la sua pagina.",
    items: [
      {
        id: "alberobello",
        name: "Alberobello",
        note: "Verso l'interno, nella zona dei trulli. I due comuni sono in realtà confinanti, cosa che sorprende chi immagina la Valle d'Itria lontana: comincia subito dietro la costa.",
      },
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        note: "Il comune successivo risalendo la costa, a breve distanza. Spesso una serata più che una giornata.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        note: "A sud e verso l'interno, la Città Bianca sul colle. Da qui è una giornata lineare.",
      },
      {
        id: "bari",
        name: "Bari",
        note: "Il capoluogo e il terminal crociere, risalendo la costa. Il comune registra 44 km dalla città.",
      },
      {
        id: null,
        name: "Martina Franca",
        note: "Su in valle: la scheda del comune indica 33 km. Di solito si abbina ad Alberobello nella stessa giornata.",
      },
    ],
    footnote: "Una giornata che ne comprenda due o tre si organizza di norma come auto con autista e attesa, non come transfer separati di sola andata: è l'attesa la parte che state effettivamente organizzando.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Cosa conviene definire prima di partire.",
    items: [
      {
        term: "L'indirizzo completo",
        detail: "Qui conta più che in un paese piccolo: il comune copre quasi 158 km² fra costa e campagna, e la parola Monopoli da sola non individua una struttura.",
      },
      {
        term: "Accesso al centro storico",
        detail: "Il nucleo antico intorno al porto è compatto e vecchio. L'auto arriva vicino; l'ultimo tratto è a volte a piedi. Conviene saperlo prima di presentarsi con le valigie.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno all'arrivo.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero, e una stima approssimativa si vede a bagagliaio aperto.",
      },
      {
        term: "Traffico estivo",
        detail: "La litoranea ad agosto non è la litoranea di marzo. I tempi pubblicati valgono in condizioni ordinarie, e l'alta stagione non lo è.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer per Monopoli",
    items: [
      {
        question: "Quanto dista Monopoli dall'aeroporto di Bari?",
        answer: "Circa 60 km secondo i dati di percorso pubblicati. Altrove troverete 40 o 44 km: sono le distanze da Bari città, e l'aeroporto sta altri 8 km a nord-ovest. Entrambi i dati sono corretti, misurano cose diverse. Calcolate fra i 45 minuti e l'ora in condizioni normali.",
      },
      {
        question: "Nella prenotazione c'è scritto solo \"Monopoli\": basta?",
        answer: "Di norma no. Il comune copre quasi 158 km² e le strutture sono distribuite su un lungo tratto di costa, quindi il nome restringe a una ventina di chilometri e non a un indirizzo. Mandate l'indirizzo completo o la posizione sulla mappa.",
      },
      {
        question: "Potete portarci da Monopoli ad Alberobello?",
        answer: "Sì, ed è la giornata più richiesta da qui. I due comuni sono confinanti, quindi la zona dei trulli comincia più vicino di quanto si pensi. Di norma si organizza come auto con autista e attesa per la giornata, non come due trasferimenti di sola andata.",
      },
      {
        question: "C'è il treno per Monopoli?",
        answer: "Sì, la città ha la propria stazione. Per un albergo in centro storico con pochi bagagli è un modo ragionevole di arrivare. Se alloggiate lungo la costa, come fa la maggior parte dei visitatori, la stazione è in città e la struttura probabilmente no: il confronto cambia.",
      },
      {
        question: "L'auto arriva al mio albergo in centro storico?",
        answer: "Arriva vicino. Il nucleo antico intorno al porto è compatto e antico, quindi lo scarico pratico è a volte al margine invece che davanti al portone, con una breve camminata. Mandate l'indirizzo completo e quello che la struttura vi ha detto su dove si fermano i veicoli.",
      },
      {
        question: "Serve l'auto a noleggio per una settimana a Monopoli?",
        answer: "Dipende da dove alloggiate e da cosa volete fare. In centro storico con due o tre escursioni, i singoli transfer risultano di solito più semplici, perché parcheggiare nei centri storici della zona è complicato. In una struttura sulla costa con l'intenzione di essere ogni giorno altrove, il noleggio può convenire: se è questa la risposta onesta, ve la diciamo.",
      },
      {
        question: "Quanto costa un transfer per Monopoli?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data — e una struttura all'estremità sud della costa non è lo stesso tragitto del centro. Descrivete dove siete diretti e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci in che punto della costa",
    body: "Numero del volo, indirizzo completo o posizione sulla mappa, e quanti siete. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se il tragitto non funziona come lo avete descritto, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
