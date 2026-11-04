import type { SicilyDestination } from "./types";

/**
 * Agrigento — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca in italiano sa dov'è
 * Agrigento e cosa sia la Valle dei Templi: quello che gli serve è sapere da
 * quale scalo conviene arrivare, se il tragitto regga come andata e ritorno
 * e cosa si può chiedere davvero. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 55 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Non compare — e su questa pagina conta
 * più che altrove — la distanza fra la città e i templi: nessuna fonte letta
 * la indica. Non compaiono nemmeno il tempo in treno verso l'aeroporto di
 * Palermo (solo in un riassunto non verificato) né Porto Empedocle, che è
 * nella stessa condizione. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const agrigentoIt: SicilyDestination = {
  meta: {
    // 55 caratteri.
    title: "Transfer privati ad Agrigento e ai Templi – Prenota ora",
    description:
      "Transfer privati per Agrigento e la Valle dei Templi, sulla costa sud della Sicilia, e quale scalo conviene davvero per arrivarci.",
  },

  hero: {
    eyebrow: "Sicilia · Agrigento",
    h1: "Transfer privati per Agrigento",
    lead: "Agrigento è l'unico posto in Sicilia senza uno scalo evidente. Sta sulla costa meridionale, con la Valle dei Templi su un crinale sotto la città, e ci si arriva da Palermo, da Catania o da Trapani a seconda del volo trovato. È la destinazione in cui chiedere prima di prenotare il volo fa risparmiare una giornata vera.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Quale aeroporto?",
    facts: [
      { label: "Costa", value: "Meridionale" },
      { label: "La città sta a", value: "230 m" },
      { label: "Patrimonio UNESCO", value: "Area archeologica, dal 1997" },
      { label: "Abitanti", value: "55.227 (2025)" },
    ],
  },

  intro: {
    heading: "L'angolo senza aeroporto",
    paragraphs: [
      "Agrigento è una città della costa meridionale della Sicilia e capoluogo della sua provincia. L'antica Akragas fu fondata su un altopiano affacciato sul mare, e la città moderna sta tuttora intorno ai 230 metri, con l'Area archeologica di Agrigento — iscritta nel patrimonio UNESCO nel 1997 e nota come Valle dei Templi — su un crinale fuori dall'abitato.",
      "Tutto, in un transfer per Agrigento, discende dalla geografia. In questo cluster la costa meridionale non ha un aeroporto proprio, quindi il tragitto è lungo da qualunque estremità dell'isola si arrivi, e la scelta fra Palermo, Catania e Trapani è una decisione vera e non una formalità. È l'unica destinazione siciliana per cui preferiamo essere consultati prima che il volo sia prenotato.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Su quale aeroporto si atterra per Agrigento?",
    lead: "Non ce n'è uno vicino. Ce ne sono tre plausibili, e la risposta onesta è che dipende dal volo più che dalla cartina.",
    options: [
      {
        id: "palermo-airport",
        label: "Il più frequente",
        body: "Il Falcone Borsellino di Palermo muove più traffico degli altri due scali che servono questa costa e di solito ha il volo. È l'arrivo di cui ci si chiede più spesso per Agrigento.",
      },
      {
        id: "catania-airport",
        label: "Praticabile",
        body: "Catania è lo scalo più trafficato dell'isola e spesso ha un volo quando Palermo non ce l'ha. La traversata verso la costa meridionale è lunga: conviene saperlo prima e non scoprirlo il giorno stesso.",
      },
      {
        id: "trapani-airport",
        label: "A volte",
        body: "Birgi è piccolo, ma Autolinee Lumia fa un servizio di linea da lì ad Agrigento. Vale la pena dirlo: da un piccolo scalo, di giorno e con un bagaglio solo, il transfer non è sempre la risposta giusta.",
      },
    ],
    note: "Per nessuno dei tre pubblichiamo distanze o tempi di percorrenza. Nessuno è ricavabile da qualcosa di meglio di pianificatori di percorso che non concordano fra loro, e su tragitti così lunghi una cifra sbagliata è peggio di nessuna cifra. L'itinerario lo conferma l'operatore al preventivo.",
  },

  kerb: {
    heading: "La città, i templi e il crinale in mezzo",
    lead: "Agrigento sono due destinazioni che condividono un nome, e un transfer deve sapere quale intendete.",
    items: [
      {
        title: "La città moderna sta in alto",
        body: "L'abitato sta intorno ai 230 metri, sull'altopiano su cui fu fondata la città antica. Le sue vie sono quelle di un normale centro collinare: raggiungibili, ma in pendenza e con il consueto restringersi verso il centro storico.",
      },
      {
        title: "I templi stanno sotto, su un crinale",
        body: "L'area archeologica è su un crinale fuori dall'abitato e non dentro. Un albergo presentato come «Agrigento» può stare su in città, giù vicino al sito oppure lungo la costa: tre arrivi diversi. È l'indirizzo completo a risolverlo, non il nome della località.",
      },
      {
        title: "La distanza fra i due non la pubblichiamo",
        body: "In giro si trovano cifre. Non ne abbiamo trovata una su cui potessimo rispondere, quindi questa pagina non ne indica nessuna. Quello che possiamo dire è che è un tragitto in auto e non una passeggiata, e che una giornata pensata per il sito si costruisce sugli orari del sito e non su quelli di un transfer.",
      },
      {
        title: "Lungo la costa",
        body: "Buona parte degli alloggi qui sta del tutto fuori città, lungo la costa meridionale. Sono indirizzi di campagna o di mare: allegate le indicazioni di arrivo della struttura se ve ne ha date, perché da queste parti valgono più di una posizione su una mappa.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Agrigento è più spesso una tappa di un percorso che una base: queste sono le pagine da una parte e dall'altra.",
    items: [
      {
        id: "palermo",
        body: "A nord attraverso l'isola: l'arrivo abituale, oppure la tappa successiva.",
      },
      {
        id: "trapani",
        body: "A nord-ovest lungo la costa, per le saline e i traghetti per le Egadi.",
      },
      {
        id: "catania",
        body: "A est attraverso l'isola. Lunga, e funziona meglio come sola andata che come giornata.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose che contano su un tragitto di questa lunghezza.",
    items: [
      {
        term: "Chiedete prima di prenotare il volo",
        detail: "Per Agrigento in particolare. Fra lo scalo giusto e quello sbagliato ci sono ore a ciascuna estremità della vacanza, ed è l'unica decisione su cui possiamo esservi utili prima che qualcosa sia prenotato.",
      },
      {
        term: "Città, templi o costa",
        detail: "Ditecelo. Tre indirizzi molto diversi vengono tutti venduti come «Agrigento», e la conferma di prenotazione raramente chiarisce a un autista quale sia il vostro.",
      },
      {
        term: "Sola andata o andata e ritorno",
        detail: "Da Palermo o da Catania, Agrigento funziona spesso meglio come tappa lungo un percorso che come giornata. Diteci quale avete in mente e la giornata si costruisce di conseguenza.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Su una traversata lunga il veicolo si sceglie su quel numero e non esiste un secondo viaggio.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo da sé; senza, un volo in ritardo diventa una telefonata da un aereo appena atterrato — e qui pesa di più, perché la strada davanti è lunga.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer per Agrigento",
    items: [
      {
        question: "Qual è l'aeroporto più vicino ad Agrigento?",
        answer: "Nessuno dei tre è vicino, ed è la risposta onesta. Palermo, Catania e Trapani raggiungono tutti la costa meridionale e per tutti si tratta di un tragitto lungo. Palermo è quello di cui ci si chiede più spesso. Diteci dove alloggerete prima di prenotare il volo e vi diremo quale conviene per il vostro viaggio, non in generale.",
      },
      {
        question: "Quanto ci vuole da Palermo o da Catania?",
        answer: "Non pubblichiamo tempi di percorrenza, e su queste tratte è una scelta deliberata. Le cifre in circolazione vengono da pianificatori di percorso che non concordano fra loro, e su una traversata così lunga un numero sbagliato manda all'aria dei programmi. L'itinerario e i tempi li conferma l'operatore al preventivo.",
      },
      {
        question: "I templi sono in città?",
        answer: "No. L'Area archeologica di Agrigento sta su un crinale fuori dall'abitato, che a sua volta sta intorno ai 230 metri sull'altopiano della città antica. Sono due luoghi distinti, e un albergo venduto come «Agrigento» può stare in uno dei due — o lungo la costa. Mandateci l'indirizzo completo.",
      },
      {
        question: "Organizzate una giornata alla Valle dei Templi?",
        answer: "Sì, ed è il tragitto più richiesto qui. Una giornata al sito si costruisce sugli orari di apertura e sul caldo, non sull'orario di un transfer, soprattutto d'estate. Diteci da dove partite e se volete l'attesa inclusa, e la giornata si organizza su quello.",
      },
      {
        question: "C'è l'autobus dall'aeroporto di Trapani?",
        answer: "Sì: Autolinee Lumia fa un servizio di linea da Birgi ad Agrigento. Lo segnaliamo perché da un piccolo scalo, di giorno e viaggiando leggeri, può essere la soluzione migliore, e preferiamo dirlo piuttosto che far credere che il transfer sia l'unica possibilità.",
      },
      {
        question: "Agrigento funziona meglio come tappa o come gita?",
        answer: "Più spesso come tappa. Da Palermo o da Catania l'andata e ritorno in giornata è lunga, e parecchi trovano che funzioni meglio come trasferimento di sola andata fra due basi. Diteci cosa avete in mente e vi diremo onestamente se ci sta.",
      },
      {
        question: "Quanto costa un transfer per Agrigento?",
        answer: "Non esiste un listino, e su queste distanze una media non direbbe nulla. Percorso, veicolo, numero di passeggeri e data spostano tutti la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Chiedeteci prima di prenotare il volo",
    body: "Per Agrigento questo consiglio vale qualcosa. Diteci dove volete alloggiare e più o meno quando, e vi diremo quale scalo ha davvero senso. Dopodiché è la solita cosa: indirizzo, volo, quanti siete, e il prezzo per iscritto prima di qualsiasi conferma.",
    cta: "Richiedi un preventivo",
  },
};
