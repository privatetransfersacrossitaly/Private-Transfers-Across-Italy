import type { PugliaPillar } from "./types";

/**
 * Il pillar regionale della Puglia, in italiano.
 *
 * ── Scritto, non tradotto ─────────────────────────────────────────────────
 * Chi cerca in italiano non cerca le stesse cose di chi cerca in inglese.
 * Un visitatore straniero parte da "quale aeroporto"; un lettore italiano
 * spesso sa già dove atterra e cerca invece "transfer aeroporto Bari",
 * "navetta masseria", "noleggio con conducente Puglia". Le sezioni sono le
 * stesse, i testi no: sono stati scritti a partire da quella domanda.
 *
 * NCC — noleggio con conducente — è il termine corretto e riconoscibile in
 * italiano, e compare dove un lettore italiano se lo aspetta.
 */
export const pugliaPillarIt: PugliaPillar = {
  meta: {
    // Nudo: il layout aggiunge già " | Private Transfer Across Italy".
    title: "Transfer privati in Puglia",
    description:
      "Transfer privati in Puglia: aeroporti di Bari e Brindisi, porto, masserie, matrimoni e costa. Indicate il tragitto e ricevete un preventivo scritto.",
  },

  hero: {
    eyebrow: "Puglia",
    h1: "Transfer privati in Puglia",
    lead:
      "La Puglia è più lunga di quanto sembri sulla cartina. Due aeroporti distano circa due ore l'uno dall'altro, molte delle strutture migliori si raggiungono da una strada di campagna senza illuminazione, e i luoghi da vedere sono distribuiti su due coste diverse. Un'auto con autista, organizzata in anticipo, è il modo più semplice di tenere insieme tutto questo.",
    primaryCta: "Organizza il tuo viaggio in Puglia",
    secondaryCta: "Come funziona la prenotazione",
  },

  intro: {
    heading: "Di cosa parla questa pagina",
    paragraphs: [
      "Questa è la pagina regionale dedicata alla Puglia. Spiega quale aeroporto conviene per quale zona, che cosa comporta davvero un transfer privato qui e come sono collegate fra loro le località, così da poter impostare gli spostamenti prima di prenotare.",
      "Organizziamo transfer privati con società di noleggio con conducente e autisti locali autorizzati in tutta la regione. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Prendiamo il tragitto che ci descrivete, lo organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
      "Ogni viaggio comincia allo stesso modo: ci dite dove andate e quando, e noi rispondiamo con un preventivo. Nulla viene bloccato, riservato o addebitato finché non lo avete accettato.",
    ],
  },

  why: {
    heading: "Perché conviene un transfer privato in Puglia",
    lead:
      "Più che in altre regioni italiane, in Puglia chi ha organizzato prima gli spostamenti a terra viaggia meglio. I motivi ricorrenti sono quattro.",
    points: [
      {
        title: "Le strutture sono spesso in campagna",
        body:
          "Le masserie sono una delle ragioni principali per cui si viene in Puglia, e quasi tutte si trovano fuori dai centri abitati, in fondo a una strada senza illuminazione e con un cancello facile da superare senza accorgersene. Un autista che c'è già stato vale molto più di una posizione sulla mappa.",
      },
      {
        title: "Due aeroporti, lontani fra loro",
        body:
          "Bari serve il nord e il centro della regione, Brindisi il sud. Atterrare in quello sbagliato non è un problema insormontabile, ma può aggiungere un'ora abbondante di strada all'inizio della vacanza.",
      },
      {
        title: "I trasporti pubblici si diradano in fretta",
        body:
          "I treni collegano bene i centri maggiori lungo l'Adriatico. Appena ci si allontana da quella linea — verso la Valle d'Itria, lungo la costa salentina, fino a una masseria — le corse diventano rare e le coincidenze con bagagli e volo serale raramente funzionano.",
      },
      {
        title: "I centri storici sono a traffico limitato",
        body:
          "Ostuni, Alberobello, Lecce, Monopoli e Polignano hanno centri pedonali o a ZTL. Un autista che sa dove si può scendere evita il giro delle mura con le valigie.",
      },
    ],
  },

  airports: {
    heading: "Aeroporti di Bari e Brindisi",
    lead:
      "La Puglia ha due aeroporti internazionali. Sono entrambi piccoli e si lasciano in fretta: la domanda non è quale sia migliore, ma quale sia più vicino a dove dormite.",
    items: [
      {
        code: "BRI",
        name: "Aeroporto di Bari Karol Wojtyła",
        body:
          "È lo scalo più trafficato della regione e si trova a circa 8–9 km a nord-ovest del centro di Bari. È l'arrivo naturale per la città, per la Valle d'Itria e la zona dei trulli attorno ad Alberobello, e per la costa adriatica a sud fino a Polignano a Mare e Monopoli. È anche l'aeroporto abituale per chi prosegue verso Matera.",
        suits: [
          "Bari città e il terminal crociere",
          "Alberobello e la Valle d'Itria",
          "Polignano a Mare e Monopoli",
          "Proseguimento verso Matera",
        ],
      },
      {
        code: "BDS",
        name: "Aeroporto di Brindisi",
        body:
          "Più piccolo, ed è la scelta giusta per il sud. Le distanze stradali pubblicate lo collocano a circa 35–40 km da Lecce e 32–37 km da Ostuni, a seconda della fonte e del percorso. Per il Salento — Lecce, Otranto, Gallipoli, il capo di Leuca — atterrare a Brindisi anziché a Bari evita un trasferimento lungo e non necessario.",
        suits: [
          "Lecce e tutto il Salento",
          "Ostuni e la parte meridionale della Valle d'Itria",
          "La costa adriatica a sud di Brindisi",
          "Gallipoli, Otranto e le spiagge ioniche",
        ],
      },
    ],
    choosing: {
      heading: "Come scegliere",
      body:
        "In linea di massima: se la struttura è a nord di Ostuni conviene Bari, se è a sud conviene Brindisi. Ostuni si trova vicino allo spartiacque e si raggiunge comodamente da entrambi. Se i voli funzionano solo sull'aeroporto «sbagliato», il transfer resta possibile: è semplicemente un tragitto più lungo, ed è meglio saperlo prima di comprare il biglietto.",
    },
  },

  cruise: {
    heading: "Arrivi in crociera a Bari",
    paragraphs: [
      "Bari è uno scalo abituale degli itinerari adriatici e per molti passeggeri è l'unica giornata in Puglia. Il terminal crociere fa parte del porto commerciale, subito a nord della città vecchia.",
      "La distanza dal centro dipende interamente dalla banchina assegnata alla nave. Da alcuni ormeggi si arriva al quartiere Murat con una breve camminata; da altri il percorso si avvicina ai tre chilometri lungo strade portuali non pensate per i pedoni. Poiché la banchina si conosce di solito solo a ridosso dell'arrivo, un'auto che vi aspetta al terminal elimina l'incertezza.",
      "La maggior parte delle richieste che riceviamo dalle crociere non riguarda la città: sono mezze giornate verso Alberobello, Polignano a Mare o Matera con rientro a bordo. In questi casi conta soprattutto l'orario di rientro, quindi indicateci l'all aboard: il programma si costruisce a ritroso da lì.",
    ],
  },

  towns: {
    heading: "Dove si va in Puglia",
    lead:
      "Otto località coprono la maggior parte dei transfer che ci vengono richiesti. Sono molto diverse fra loro, e cambia anche l'aeroporto più comodo.",
    items: [
      {
        id: "bari",
        name: "Bari",
        summary:
          "Il capoluogo: città portuale con un centro storico murato e l'aeroporto di riferimento per il nord.",
        travellers:
          "Arrivi e partenze, scali crocieristici e chi prosegue verso l'entroterra dei trulli.",
        airport: "Bari (BRI)",
      },
      {
        id: "brindisi",
        name: "Brindisi",
        summary:
          "Città portuale più tranquilla e aeroporto che apre tutto il sud della regione.",
        travellers:
          "Chi è diretto in Salento, passeggeri dei traghetti e chi punta direttamente alla costa.",
        airport: "Brindisi (BDS)",
      },
      {
        id: "lecce",
        name: "Lecce",
        summary:
          "La città barocca del sud, costruita in una pietra tenera che si lavora come legno.",
        travellers:
          "Soggiorni in città, matrimoni e chi la usa come base per tutto il Salento.",
        airport: "Brindisi (BDS)",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        summary:
          "La Città Bianca, arroccata sopra gli uliveti che scendono verso il mare.",
        travellers:
          "Ospiti delle masserie, matrimoni e coppie che alloggiano in campagna più che in paese.",
        airport: "Brindisi (BDS) o Bari (BRI)",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        summary:
          "Il paese dei trulli, iscritto nella Lista del Patrimonio Mondiale UNESCO dal 1996.",
        travellers:
          "Visitatori in giornata da Bari e dal porto, e chi soggiorna nei trulli ristrutturati.",
        airport: "Bari (BRI)",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        summary:
          "Cittadina portuale sull'Adriatico, con un centro storico raccolto e spiagge da entrambi i lati.",
        travellers:
          "Soggiorni settimanali sulla costa, ospiti dei resort e famiglie.",
        airport: "Bari (BRI)",
      },
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        summary:
          "Un paese costruito sul ciglio della scogliera, direttamente sopra il mare.",
        travellers:
          "Coppie, soggiorni brevi sulla costa, matrimoni ed eventi.",
        airport: "Bari (BRI)",
      },
      {
        id: "salento",
        name: "Salento",
        summary:
          "La penisola all'estremità del tacco, con due coste e un mare diverso su ciascuna.",
        travellers:
          "Vacanze al mare, itinerari e chi si sposta fra più località in una settimana.",
        airport: "Brindisi (BDS)",
      },
    ],
  },

  journeys: {
    heading: "I tragitti più richiesti",
    lead:
      "Sono le tratte che ci vengono chieste più spesso. Ognuna viene organizzata singolarmente: l'elenco serve a mostrare la geografia della regione, non è un listino.",
    items: [
      {
        from: "Aeroporto di Bari",
        to: "Alberobello",
        note: "Il classico primo spostamento verso l'interno, e l'escursione più richiesta dalle crociere.",
      },
      {
        from: "Aeroporto di Bari",
        to: "Polignano a Mare",
        note: "Breve tratto lungo la costa: spesso il transfer aeroportuale più corto della regione.",
      },
      {
        from: "Aeroporto di Bari",
        to: "Monopoli",
        note: "Prosegue oltre Polignano fino alla cittadina portuale e ai resort vicini.",
      },
      {
        from: "Aeroporto di Brindisi",
        to: "Lecce",
        note: "Circa 35–40 km di strada. È l'arrivo tipico per una vacanza in Salento.",
      },
      {
        from: "Aeroporto di Brindisi",
        to: "Ostuni",
        note: "Circa 32–37 km, con arrivo più spesso in masseria che in paese.",
      },
      {
        from: "Lecce",
        to: "Gallipoli oppure Otranto",
        note: "Attraversando la penisola verso lo Ionio, o scendendo lungo l'Adriatico.",
      },
      {
        from: "Monopoli",
        to: "Polignano a Mare",
        note: "Breve spostamento fra due paesi vicini, spesso richiesto per la serata.",
      },
      {
        from: "Bari",
        to: "Matera",
        note: "Oltre il confine regionale, in Basilicata: giornata intera o trasferimento di sola andata.",
      },
    ],
  },

  staying: {
    heading: "I tipi di soggiorno per cui organizziamo transfer",
    lead:
      "In Puglia ciò che serve da un transfer dipende meno dalla località che dal tipo di struttura in cui arrivate.",
    groups: [
      {
        title: "Masserie e strutture di campagna",
        body:
          "Una masseria si raggiunge quasi sempre da una stradina laterale, spesso senza numero civico e a volte senza insegna. Inviateci il nome della struttura e le indicazioni che vi ha dato: molte masserie hanno istruzioni già pronte per gli autisti, e trasmetterle in anticipo è la differenza fra arrivare e girare a vuoto.",
      },
      {
        title: "Matrimoni ed eventi",
        body:
          "La Puglia è diventata una meta da destination wedding, e il problema logistico è quasi sempre lo stesso: invitati che arrivano su voli diversi, in due aeroporti diversi, nell'arco di due o tre giorni, e che poi devono trovarsi tutti nello stesso posto alla stessa ora. Possiamo preventivare gli arrivi in aeroporto, il trasferimento coordinato alla cerimonia e i rientri. Indicateci numero di invitati, punti di ritiro e orari: riceverete un unico preventivo scritto.",
      },
      {
        title: "Resort e località balneari",
        body:
          "Le strutture sulla costa vanno dai grandi resort a poche camere sopra una cala. A luglio e agosto le strade costiere sono lente: un orario che funziona a maggio può non funzionare ad agosto. Se viaggiate in alta stagione ditecelo, e il preventivo ne terrà conto anziché ignorarlo.",
      },
      {
        title: "Hotel in centro e ville private",
        body:
          "Gli hotel nei centri di Lecce, Ostuni, Monopoli e Polignano sono spesso dentro una ZTL. La soluzione abituale è la discesa nel punto consentito più vicino, con assistenza fino all'ingresso. Se la struttura ha un permesso o un accesso preferito, segnalatecelo e lo comunicheremo all'autista.",
      },
      {
        title: "Famiglie e gruppi",
        body:
          "Numero di passeggeri e bagagli determinano il veicolo, quindi indicateli entrambi nella richiesta. I seggiolini per bambini si possono di norma organizzare su richiesta anticipata: confermiamo la disponibilità invece di darla per scontata. Se servono più veicoli, lo scriviamo nel preventivo.",
      },
      {
        title: "Noleggio con conducente a ore o a giornata",
        body:
          "Non tutti gli spostamenti sono da punto a punto. Una giornata in Valle d'Itria fra tre paesi, o un'auto a disposizione per un matrimonio, si preventiva a tempo e non a tratta. Descriveteci la giornata e vi diremo che cosa comporta.",
      },
    ],
  },

  booking: {
    heading: "Come funziona la prenotazione",
    lead: "Non esiste un acquisto immediato, ed è una scelta precisa.",
    steps: [
      {
        title: "Ci descrivete il tragitto",
        body:
          "Punto di ritiro, destinazione, data, orario, quante persone e quanti bagagli. Se avete un numero di volo, il nome della nave o quello della struttura, aggiungeteli: sono i dettagli che fanno funzionare un ritiro.",
      },
      {
        title: "Organizziamo e preventiviamo",
        body:
          "Portiamo la richiesta a una società di noleggio con conducente che copre quella tratta e vi inviamo prezzo e condizioni per iscritto. Se qualcosa non può funzionare come descritto, lo diciamo adesso e non dopo.",
      },
      {
        title: "Decidete voi",
        body:
          "Nulla è riservato e nessun veicolo è assegnato alla vostra data finché non avete accettato il preventivo per iscritto. Una richiesta non è una prenotazione.",
      },
      {
        title: "Pagate l'operatore",
        body:
          "Il pagamento avviene direttamente alla società locale che effettua il servizio. Non siamo un intermediario di pagamento e non raccogliamo dati di carte.",
      },
    ],
  },

  practical: {
    heading: "Informazioni pratiche",
    lead:
      "Cose che in Puglia ricorrono abbastanza spesso da essere dette prima che ce le chiediate.",
    items: [
      {
        term: "Ritiri in aeroporto",
        detail:
          "Indicate il numero del volo. Un autista che può seguirlo conta ancora di più qui, perché entrambi gli scali sono piccoli e l'area arrivi si svuota rapidamente.",
      },
      {
        term: "Ritiri dalle crociere",
        detail:
          "Indicate la nave e l'orario di all aboard. A Bari l'assegnazione della banchina cambia, quindi il punto d'incontro si conferma a ridosso dell'arrivo.",
      },
      {
        term: "Bagagli",
        detail:
          "Indicate il numero reale di valigie, comprese quelle ingombranti. Un veicolo scelto per quattro persone con bagaglio a mano non è lo stesso che serve a quattro persone con sacche da golf.",
      },
      {
        term: "Seggiolini",
        detail:
          "Di norma disponibili su richiesta, compatibilmente con la dotazione dell'operatore nella vostra data. Chiedetelo in fase di richiesta: confermiamo, non supponiamo.",
      },
      {
        term: "Accessibilità",
        detail:
          "Veicoli accessibili e attrezzati esistono in regione ma non sono diffusi ovunque. Diteci che cosa serve e verifichiamo la disponibilità prima di preventivare.",
      },
      {
        term: "ZTL e centri storici",
        detail:
          "Diversi centri storici limitano l'accesso ai veicoli. È normale scendere al limite della zona con assistenza fino all'ingresso: non è una mancanza del servizio.",
      },
      {
        term: "Stagionalità",
        detail:
          "A luglio e agosto le strade costiere e i siti UNESCO sono molto frequentati. Tragitti rapidi in primavera richiedono più tempo in piena estate, e il preventivo tiene conto della data reale di viaggio.",
      },
      {
        term: "Durate",
        detail:
          "Non pubblichiamo durate fisse. Traffico, stagione, punto di ritiro e cantieri le modificano, e un tempo garantito sarebbe una stima presentata come promessa.",
      },
    ],
  },

  faq: {
    heading: "Domande frequenti sulla Puglia",
    items: [
      {
        question: "Conviene atterrare a Bari o a Brindisi?",
        answer:
          "Dipende da dove alloggiate. Bari conviene per il nord e il centro: la città, Alberobello e la Valle d'Itria, Polignano a Mare e Monopoli. Brindisi conviene per il sud: Lecce, Ostuni e tutto il Salento. Ostuni è vicina allo spartiacque e funziona da entrambi. Se i voli sensati ci sono solo su uno scalo, il transfer resta organizzabile: cambia solo la durata del tragitto.",
      },
      {
        question: "Serve l'auto a noleggio o bastano i transfer?",
        answer:
          "Dipende dal tipo di vacanza. Se restate in una base e fate qualche escursione, i singoli transfer risultano spesso più semplici, perché parcheggiare nei centri storici è davvero complicato. Se invece cambiate località ogni giorno su un'area ampia, l'auto a noleggio può convenire. Se per il vostro itinerario è questa la risposta onesta, ve lo diciamo.",
      },
      {
        question: "Potete venire a prenderci in una masseria in campagna?",
        answer:
          "Sì, ed è una delle richieste più frequenti. Inviateci il nome della struttura e le indicazioni che vi ha fornito. Molte masserie tengono pronte istruzioni per gli autisti proprio perché le stradine sono difficili da trovare: girarcele al momento della richiesta è la cosa più utile che possiate fare.",
      },
      {
        question: "Organizzate i transfer per un matrimonio in Puglia?",
        answer:
          "Sì. L'impostazione abituale prevede gli arrivi degli invitati in aeroporto su più giorni, il trasferimento coordinato alla location e i rientri. Indicateci numero di invitati, punti di ritiro e orari e preventiviamo il tutto insieme, non a pezzi. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
      },
      {
        question: "Siamo in crociera a Bari: si riesce ad andare ad Alberobello e tornare?",
        answer:
          "È uno dei tragitti più richiesti della regione. Indicateci nome della nave, orario di arrivo e soprattutto l'all aboard: il programma si costruisce a ritroso da quello. Se ciò che volete inserire non è realistico nel tempo a terra, ve lo diciamo chiaramente.",
      },
      {
        question: "Quanto costa un transfer in Puglia?",
        answer:
          "Non esiste un listino, perché il prezzo dipende dalla tratta, dal veicolo, dal numero di passeggeri e dalla data. Descriveteci il tragitto e riceverete un preventivo scritto. Nulla viene addebitato prima della vostra accettazione.",
      },
      {
        question: "Con quanto anticipo conviene organizzarsi?",
        answer:
          "Il prima possibile, soprattutto per luglio e agosto, per i matrimoni e per tutto ciò che richiede un veicolo grande o un seggiolino. La disponibilità in Puglia è davvero stagionale, e preferiamo dirvi per tempo che una richiesta è difficile.",
      },
      {
        question: "I veicoli sono vostri?",
        answer:
          "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Descriveteci il tragitto",
    body:
      "Indicate punto di ritiro, destinazione, data e numero di passeggeri. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se un tragitto non può funzionare come lo avete descritto, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
