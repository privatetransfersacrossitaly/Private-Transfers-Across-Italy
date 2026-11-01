import type { SalentoPage } from "./types";

/**
 * Salento — italiano.
 *
 * Scritto in italiano, non tradotto, e qui la distanza fra le due versioni è
 * la maggiore di tutto il cluster. Al lettore inglese bisogna spiegare cosa
 * sia il Salento, dove finisca e perché Ostuni non ne faccia parte. Al
 * lettore italiano no: sa dov'è e probabilmente ci è stato. Quello che gli
 * serve è il conto dei trasferimenti — quante volte si muove davvero in una
 * settimana — e un parere onesto su quando convenga invece il noleggio.
 * La versione italiana riduce quindi la definizione geografica e amplia la
 * parte di pianificazione.
 *
 * Il vincolo della mappa delle keyword vale identico: questa pagina non
 * descrive Lecce. Lecce compare due volte, come base e come link, e il tipo
 * di contenuto non prevede una sezione in cui una descrizione di città
 * possa infilarsi.
 *
 * Fonti: definizione, province, i due mari, 5.856,57 km², la stima di
 * 1.785.500 abitanti (2017) e il griko salentino dalla voce sul Salento —
 * che esclude espressamente Fasano, Ostuni e Cisternino. Otranto, Gallipoli
 * e Santa Maria di Leuca dalle rispettive voci.
 *
 * Tre trappole evitate: Otranto non è definita "il comune più a est
 * d'Italia" (la voce dice che è il faro della Palascìa, circa cinque km a
 * sud-est, a segnare il punto più orientale dell'Italia continentale); la
 * popolazione di Gallipoli è contraddittoria nella stessa voce e quindi non
 * viene pubblicata; l'incontro dei due mari è riportato come "per
 * tradizione", non come dato.
 *
 * Nessun prezzo, nessuna flotta di proprietà, nessuna testimonianza,
 * nessuna garanzia.
 */

export const salentoIt: SalentoPage = {
  meta: {
    title: "Transfer privati in Salento",
    description:
      "Transfer privati in tutto il Salento: aeroporto di Brindisi, Gallipoli, Otranto, Santa Maria di Leuca, Porto Cesareo. E quanti spostamenti serve davvero fare.",
  },

  hero: {
    eyebrow: "Puglia · Salento",
    h1: "Transfer privati in Salento",
    lead: "Nel Salento non si alloggia: si alloggia in un punto del Salento — un paese su una costa, una masseria nell'entroterra, una spiaggia sull'altro versante — e poi ci si sposta, perché le cose da vedere sono distribuite su una penisola con un mare diverso per lato. Questa pagina parla degli spostamenti.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Quanti spostamenti?",
    facts: [
      { label: "Che cos'è", value: "Il tacco dello stivale" },
      { label: "Province", value: "Lecce, Brindisi, Taranto" },
      { label: "Superficie", value: "5.856,57 km²" },
      { label: "Aeroporto di riferimento", value: "Brindisi (BDS)" },
    ],
  },

  definition: {
    heading: "Dove comincia e dove finisce",
    paragraphs: [
      "Il Salento è una regione culturale, storica e geografica all'estremità meridionale della Puglia: una sub-penisola della penisola italiana, il tacco dello stivale. Non è una regione amministrativa, ed è il motivo per cui i suoi confini sono più sfumati di quanto si creda e due guide lo disegnano diversamente.",
      "Secondo la definizione corrente comprende l'intera provincia di Lecce, gran parte di quella di Brindisi e la porzione sud-orientale di quella di Taranto, esclusa la città. Restano fuori, nel Brindisino, tre comuni nominati espressamente: Fasano, Ostuni e Cisternino. Non è una precisazione da pedanti: capita spesso di prenotare \"una settimana in Salento\" e poi alloggiare in una masseria vicino a Ostuni, che è un'altra parte della Puglia con altri tempi di percorrenza.",
      "Geograficamente separa il Golfo di Taranto a ovest dal Canale d'Otranto a est, con l'Adriatico a nord e lo Ionio a sud. In pratica: due coste, e una penisola abbastanza stretta da poter essere sull'altra entro l'ora.",
      "Organizziamo transfer su tutta la penisola con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi organizziamo con un operatore che copre quella tratta e vi mandiamo prima l'accordo e il prezzo per iscritto.",
    ],
    bounds: [
      {
        term: "Il limite settentrionale",
        detail: "All'incirca la linea Taranto-Ostuni. Fasano, Ostuni e Cisternino stanno fuori dal Salento, nella parte di Puglia che appartiene piuttosto alla Valle d'Itria.",
      },
      {
        term: "Le due coste",
        detail: "Adriatico a est e a nord, Ionio a ovest e a sud. Sono davvero diverse: roccia e fondali profondi da un lato, sabbia e bassi dall'altro.",
      },
      {
        term: "La punta",
        detail: "Santa Maria di Leuca, alla fine della penisola. Più lontana di quanto sembri sulla carta, ed è il tragitto che si sottovaluta più spesso.",
      },
      {
        term: "La lingua",
        detail: "In alcune aree del Salento si parla ancora greco, nella forma del griko salentino: un lascito dei secoli bizantini, non un'importazione recente.",
      },
    ],
  },

  circuit: {
    heading: "I posti dove si va davvero",
    lead: "Da leggere come un giro più che come un elenco: si scende lungo una costa, si gira la punta e si risale dall'altra. Sapere su quale costa stia un posto dice più dei chilometri.",
    stops: [
      {
        name: "Otranto",
        coast: "Adriatico",
        reach: "Scendendo la costa orientale",
        body: "Cittadina costiera e porto, poco più di cinquemilacinquecento abitanti. La cattedrale fu consacrata nel 1088 e conserva il pavimento musivo del 1166 con i mesi e i soggetti veterotestamentari: è ciò per cui quasi tutti ci vengono. Le reliquie dei Martiri di Otranto, uccisi quando gli Ottomani presero la città nel 1480 e canonizzati nel 2013, circondano l'altare maggiore. Il faro della Palascìa, circa cinque chilometri a sud-est, segna il punto più orientale dell'Italia continentale.",
      },
      {
        name: "Santa Maria di Leuca",
        coast: "La punta",
        reach: "L'estremità della penisola",
        body: "Frazione del comune di Castrignano del Capo, alla fine di tutto. Punta Meliso è per tradizione considerata il punto in cui le acque dell'Adriatico e dello Ionio si incontrano — per tradizione, perché un promontorio rivale, Punta Ristola, sta circa 440 metri più a sud. La Basilica De Finibus Terrae, \"il confine della terra\", fu edificata fra il 1720 e il 1755 ed è collegata al porto da una scalinata di 284 gradini. Il faro è alto 47 metri, a 102 metri sul livello del mare.",
      },
      {
        name: "Gallipoli",
        coast: "Ionio",
        reach: "Risalendo la costa occidentale",
        body: "Dal greco Kallípolis, \"città bella\". Il centro antico sorge su un'isola calcarea collegata alla terraferma da un ponte costruito nel Cinquecento: è il carattere stesso del posto, ed è anche il motivo per cui i veicoli si fermano dove si fermano. Il castello angioino-aragonese fu iniziato nel XIII secolo dai Bizantini e rifatto più volte; il bastione del Rivellino è del 1522. La città si affaccia sul Golfo di Taranto, parte dello Ionio.",
      },
      {
        name: "Porto Cesareo",
        coast: "Ionio",
        reach: "Più su lungo la costa occidentale",
        body: "Un tratto basso e sabbioso della costa ionica con isolotti al largo, ed è il versante che le famiglie scelgono più spesso. L'area marina protetta è stata istituita con decreto ministeriale nel 1997 ed è gestita insieme al vicino comune di Nardò. I dati sull'estensione della riserva circolano ampiamente ma non è stato possibile verificarli su una fonte ufficiale, e quindi non vengono riportati.",
      },
      {
        name: "Lecce",
        coast: "Entroterra",
        reach: "La città di arrivo abituale",
        body: "La città barocca in cima alla penisola, da cui comincia la maggior parte dei soggiorni salentini. Ha una pagina propria e non viene descritta di nuovo qui: seguite il collegamento per la città, le sue tre porte e gli arrivi in centro storico.",
      },
    ],
    footnote: "Le distanze nel Salento variano parecchio da una fonte all'altra, a seconda che il percorso passi all'interno via Lecce o segua la costa, e le litoranee ad agosto hanno poco a che vedere con le stesse strade a marzo. Invece di pubblicare numeri che non potremmo sostenere, confermiamo il percorso effettivo al momento del preventivo.",
  },

  tip: {
    heading: "Sulla punta",
    paragraphs: [
      "Santa Maria di Leuca è il tragitto che si valuta male più spesso. Sulla carta la penisola sembra corta; su strada non lo è, e l'ultimo tratto lungo entrambe le coste è lento in un modo che la distanza non lascia prevedere. Una giornata da Lecce a Leuca e ritorno è una giornata lunga, e una che comprenda anche Otranto o Gallipoli lungo il percorso è più lunga di quanto immagini chi la chiede.",
      "Preferiamo dirlo quando ci scrivete piuttosto che farvelo scoprire alle sei di sera. Se quello che avete descritto non sta nelle ore che avete, ve lo segnaliamo, e di norma suggeriamo di togliere una tappa invece di correre su tutte.",
    ],
  },

  planning: {
    heading: "Quanti spostamenti servono in una settimana",
    lead: "È la domanda dietro quasi ogni richiesta sul Salento, e conviene rispondere con i numeri invece che con le rassicurazioni.",
    paragraphs: [
      "Una settimana in Salento non è quasi mai un transfer all'andata e uno al ritorno. La penisola è abbastanza ampia che la spiaggia che volete, il paese in cui volete cenare e il posto in cui dormite siano spesso tre luoghi diversi, e fra loro ci sia un tragitto in auto e non una passeggiata.",
      "Queste sono le configurazioni che ci vengono chieste più spesso. Nessuna è un pacchetto e nessuna è quotata qui: sono schemi, utili per riconoscere il vostro prima di scriverci.",
    ],
    patterns: [
      {
        shape: "Una base, qualche uscita",
        journeys: "Di norma da 4 a 6 spostamenti",
        body: "Andata e ritorno dall'aeroporto, più due o tre giornate con auto e autista. È la configurazione più comune e in genere la più semplice, perché quello che si prenota è l'attesa più che la distanza.",
      },
      {
        shape: "Due basi, settimana divisa",
        journeys: "Di norma da 5 a 8 spostamenti",
        body: "Qualche notte su una costa e qualcuna sull'altra, con un trasferimento di sola andata fra le due. Aggiungendo le uscite da entrambe le basi il conto sale in fretta.",
      },
      {
        shape: "In giro, cambiando quasi ogni giorno",
        journeys: "Spesso 8 o più",
        body: "Una struttura diversa ogni una o due notti. È la configurazione in cui il noleggio conviene davvero più spesso, e lo diciamo invece di quotarvi otto transfer separati per principio.",
      },
      {
        shape: "Matrimonio o gruppo",
        journeys: "Dipende interamente dal gruppo",
        body: "Arrivi distribuiti su più giorni, trasferimento coordinato il giorno della cerimonia, rientri a tarda notte. Si quota come un lavoro unico e non come una pila di prenotazioni separate.",
      },
    ],
    note: "Se per il vostro viaggio la risposta onesta è l'auto a noleggio, ve lo diciamo. Il Salento è una delle poche parti della Puglia in cui girare in autonomia regge davvero il confronto con i transfer organizzati: le distanze contano e parcheggiare fuori dai centri storici è meno impossibile che più a nord.",
  },

  basing: {
    heading: "Dove fare base",
    lead: "La scelta della base decide quasi tutto il resto della settimana, compreso quanti spostamenti serviranno.",
    options: [
      {
        id: "lecce",
        name: "Lecce",
        body: "La risposta abituale e la più collegata: una città vera, con dove cenare tutte le sere e un tragitto breve verso l'aeroporto di Brindisi. Tutta la penisola è raggiungibile in giornata da qui, benché la punta sia una giornata lunga. La città ha una pagina propria.",
      },
      {
        id: null,
        name: "Il versante adriatico",
        body: "Otranto e la costa intorno. Più roccioso, fondali profondi, scenografico più che comodo. Adatto a chi cerca cale invece di spiagge lunghe, e ben posizionato per scendere verso la punta.",
      },
      {
        id: null,
        name: "Il versante ionico",
        body: "Gallipoli, Porto Cesareo e le spiagge fra i due. Più sabbioso, più basso, il lato che conviene alle famiglie. Dall'aeroporto di Brindisi è più lontano della costa adriatica.",
      },
      {
        id: "brindisi",
        name: "Vicino all'aeroporto",
        body: "Da considerare per un soggiorno breve o per un volo di ritorno molto presto. Brindisi è il punto di arrivo per quasi tutti quelli che scendono in Salento, e la pagina dedicata descrive nel dettaglio i tragitti verso sud.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Quello che vale su tutta la penisola.",
    items: [
      {
        term: "Indirizzi di campagna",
        detail: "Il Salento ha moltissime strutture su strade senza nome. Mandate le indicazioni di arrivo della struttura e non solo il nome: molte ne tengono una versione scritta per gli autisti.",
      },
      {
        term: "Centri storici",
        detail: "Otranto, la Gallipoli vecchia sull'isola e gli altri sono antichi e compatti. L'auto arriva vicino; l'ultimo tratto è spesso a piedi. È normale e non è un ostacolo.",
      },
      {
        term: "La punta è più lontana di quanto sembri",
        detail: "Per tutto ciò che sta oltre Otranto o Gallipoli calcolate parecchio più di quanto suggerisca la carta, soprattutto d'estate.",
      },
      {
        term: "Stagionalità",
        detail: "Il Salento ad agosto è un altro posto rispetto a maggio: strade più cariche, operatori più pieni, litoranee più lente. Organizzare per tempo qui rende più che quasi ovunque in Puglia.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore e in alta stagione sono molto richiesti.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer in Salento",
    items: [
      {
        question: "Qual è l'aeroporto di riferimento per il Salento?",
        answer: "Brindisi. È il punto di arrivo per quasi tutti quelli che scendono sulla penisola, e la pagina su Brindisi descrive nel dettaglio i tragitti verso sud. Bari è molto più a nord e comporta un viaggio più lungo: praticabile se i voli convengono, ma non la scelta ovvia per una vacanza salentina.",
      },
      {
        question: "Ostuni è in Salento?",
        answer: "Secondo la definizione corrente, no. Il Salento comprende tutta la provincia di Lecce, gran parte di quella di Brindisi e una porzione di quella di Taranto, ma Fasano, Ostuni e Cisternino sono eccezioni nominate espressamente e restano fuori. La cosa ha un risvolto pratico: capita di prenotare una settimana \"in Salento\" e alloggiare vicino a Ostuni, che è un'altra parte della Puglia con altri tempi di percorrenza. Ostuni ha una pagina propria.",
      },
      {
        question: "Quanti transfer servono per una settimana in Salento?",
        answer: "Più di due, quasi sempre. Una base con qualche uscita sono di norma da quattro a sei spostamenti; una settimana divisa fra le due coste da cinque a otto; girare cambiando quasi ogni giorno spesso otto o più — ed è la configurazione in cui il noleggio conviene più spesso. Raccontateci il viaggio e lo contiamo onestamente invece di vendervi spostamenti.",
      },
      {
        question: "Si possono vedere Gallipoli e Otranto in giornata?",
        answer: "È possibile ma è una giornata lunga, e comporta attraversare la penisola: stanno su coste opposte. Vi diciamo chiaramente se quello che volete sta nelle ore che avete, e di norma suggeriamo di togliere una tappa invece di correre su tutte.",
      },
      {
        question: "Quanto dista Santa Maria di Leuca?",
        answer: "Più di quanto suggerisca la carta. Sta all'estremità della penisola, e l'ultimo tratto lungo entrambe le coste è lento in un modo che la distanza non lascia prevedere. I dati pubblicati variano parecchio a seconda che il percorso passi all'interno o lungo la costa, quindi confermiamo il percorso effettivo al momento del preventivo invece di stampare un numero che non potremmo sostenere.",
      },
      {
        question: "Su quale costa conviene stare?",
        answer: "Il versante adriatico intorno a Otranto è più roccioso, con fondali profondi e cale invece di spiagge lunghe. Quello ionico fra Gallipoli e Porto Cesareo è più sabbioso e basso, ed è il lato che le famiglie scelgono più spesso. Sono due vacanze diverse, e la scelta cambia anche il tragitto dall'aeroporto.",
      },
      {
        question: "Conviene l'auto a noleggio?",
        answer: "In Salento a volte sì, più spesso che altrove in Puglia: le distanze contano e parcheggiare fuori dai centri storici è meno difficile che più a nord. Se avete intenzione di spostarvi quasi ogni giorno, ve lo diciamo. Se invece fate base in un posto solo con qualche uscita, i transfer organizzati risultano di norma più semplici.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Raccontateci la settimana, non un viaggio",
    body: "Dove alloggiate, cosa volete vedere e quanti giorni avete. Il Salento è una penisola più che una destinazione, e una settimana qui sono di solito diversi spostamenti: preferiamo quotarne la forma in una volta sola invece che a pezzi.",
    cta: "Richiedi un preventivo",
  },
};
