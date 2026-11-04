import type { SicilyDestination } from "./types";

/**
 * Trapani — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano non serve che
 * si spieghi cosa siano le Egadi o le saline: serve sapere cosa copre un
 * transfer quando di mezzo c'è un imbarco, cosa no, e con quale margine si
 * lavora. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 52 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Le distanze delle isole (Favignana circa
 * 16 km a sud-ovest, Marettimo circa 24 km a ovest) sono quelle della voce
 * sulle Egadi e sono distanze in mare, non stradali. Per Levanzo la fonte
 * indica 13 km senza dire da cosa, quindi non compare.
 *
 * Non compaiono qui: la distanza stradale aeroporto-città (nessuna fonte la
 * indica), compagnie, orari e durate delle traversate (non verificati) e la
 * futura stazione ferroviaria dell'aeroporto, la cui data di fine lavori la
 * fonte stessa riporta in modo incoerente.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const trapaniIt: SicilyDestination = {
  meta: {
    // 52 caratteri.
    title: "Transfer privati a Trapani e nel Trapanese – Riserva",
    description:
      "Transfer privati a Trapani, nel vertice occidentale: le saline, la città e la banchina per le Egadi. Preventivo scritto, nessun listino.",
  },

  hero: {
    eyebrow: "Sicilia · Trapani",
    h1: "Transfer privati a Trapani",
    lead: "Trapani è il vertice occidentale della Sicilia: un porto peschereccio a livello del mare, le saline ai lati della strada e la banchina da cui passa quasi chiunque vada alle Egadi. È l'arrivo più semplice di tutto il cluster, ed è anche quello in cui il viaggio più spesso prosegue via mare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "I traghetti per le Egadi",
    facts: [
      { label: "Costa", value: "Occidentale" },
      { label: "Sul livello del mare", value: "3 m" },
      { label: "Aeroporto", value: "Vincenzo Florio, Birgi (TPS)" },
      { label: "Abitanti", value: "54.636" },
    ],
  },

  intro: {
    heading: "Il vertice occidentale",
    paragraphs: [
      "Trapani è città e comune sulla costa occidentale della Sicilia e capoluogo della sua provincia. La voce enciclopedica la descrive ancora come un importante porto peschereccio e come la principale porta d'accesso alle vicine Egadi, e la sua economia è storicamente legata all'estrazione e al commercio del sale: è il motivo per cui ci si arriva passando fra le saline e non fra le colline.",
      "Per un transfer quella pianura è una buona notizia, e la complicazione è semmai l'imbarco. La città sta a tre metri sul mare, le strade passano, e gli arrivi qui sono fra i meno problematici dell'isola. Quello che va pianificato non è la strada ma la coincidenza: se c'è di mezzo una nave, è la corsa a decidere tutto il resto.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Trapani",
    lead: "Due scali servono questo angolo, e quale si usa lo decide di solito il volo disponibile più che la distanza.",
    options: [
      {
        id: "trapani-airport",
        label: "Quello locale",
        body: "L'aeroporto Vincenzo Florio di Birgi non sta né a Trapani né a Marsala ma fra le due, ed è condiviso con l'Aeronautica Militare. Nel 2025 ha movimentato 1.007.409 passeggeri, in calo del 6,29% sull'anno precedente, e Ryanair vi ha una base dal 2009. L'orario è più sottile di quello di Palermo: è uno scalo che si usa quando il volo c'è, non un'opzione predefinita.",
      },
      {
        id: "palermo-airport",
        label: "Quello grande",
        body: "Il Falcone Borsellino di Palermo muove circa nove volte il traffico di Birgi e spesso ha il volo quando Birgi non ce l'ha. È più lontano su strada, ma per molti itinerari è lo scambio che conviene fare, ed è un tragitto lineare attraverso l'estremità occidentale dell'isola.",
      },
    ],
    note: "Da Birgi ci sono anche autolinee: Autoservizi Salemi serve Trapani, Marsala e Palermo, Autolinee Lumia serve Agrigento, AST serve Trapani. Preferiamo nominarle piuttosto che far credere che da un piccolo scalo si esca solo in transfer.",
  },

  kerb: {
    heading: "A terra, a Trapani",
    lead: "Gli arrivi più semplici del cluster, con un vincolo vero e uno che coglie di sorpresa.",
    items: [
      {
        title: "La città è piana e raggiungibile",
        body: "A tre metri sul mare e distesa lungo un promontorio, Trapani non ha l'altitudine di Taormina né l'acqua di Ortigia. Quasi tutti gli indirizzi sono indirizzi normali e una vettura ci arriva.",
      },
      {
        title: "Il centro antico però si stringe",
        body: "Le vie storiche verso la punta del promontorio sono strette come ovunque in Italia e in parte ad accesso limitato. Non è un ostacolo: significa che il punto di fermata può essere a qualche decina di metri dalla porta, e che sapere da dove avvicinarsi evita un giro.",
      },
      {
        title: "La banchina è una scadenza, non un indirizzo",
        body: "Un transfer verso un traghetto lo governa la corsa, non un orario di ritiro. Indicateci quale imbarco intendete prendere e la giornata si costruisce a ritroso da lì, con il margine che serve. È la cosa che più conviene impostare bene in un viaggio trapanese.",
      },
      {
        title: "Fuori, fra le saline",
        body: "Buona parte degli alloggi di questo angolo sta fuori città, lungo la costiera o verso l'interno in direzione Marsala. Sono indirizzi di campagna: allegate le indicazioni di arrivo fornite dalla struttura, perché queste stradine si descrivono molto più facilmente di quanto si trovino.",
      },
    ],
  },

  ferries: {
    heading: "Le Egadi, e cosa può e non può fare un transfer",
    body: "Trapani è la principale porta d'accesso alle Egadi. Favignana dista circa 16 km a sud-ovest della città e Marettimo circa 24 km a ovest, secondo i dati della voce sulle isole: sono distanze in mare, non stradali, e nessun veicolo le copre. Il transfer vi porta in banchina e vi riprende allo sbarco del ritorno; la traversata è un viaggio in traghetto e la vettura non attraversa con voi se non è stato concordato espressamente. Diciamo con chiarezza quale metà di un programma possiamo coprire, e qui non pubblichiamo orari né compagnie perché non li abbiamo verificati.",
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Trapani.",
    items: [
      {
        id: "palermo",
        body: "A est lungo la costa: la seconda base abituale, oppure lo scalo da cui siete arrivati.",
      },
      {
        id: "agrigento",
        body: "A sud-est lungo la costa, per la Valle dei Templi. Una giornata intera e non una mezza.",
      },
      {
        id: "cefalu",
        body: "Oltre Palermo, sulla costa settentrionale. Di norma una tappa a sé più che una gita da qui.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da sistemare prima di volare o di imbarcarsi.",
    items: [
      {
        term: "L'imbarco, se c'è",
        detail: "Indicateci la corsa che intendete prendere invece di un orario di ritiro. Tutto il resto della giornata si organizza attorno a quella, e una nave non aspetta.",
      },
      {
        term: "Quale aeroporto",
        detail: "Birgi o Palermo. Dateci il volo e lo ricaviamo noi, invece di dare per scontato che siate atterrati nel più vicino.",
      },
      {
        term: "Indirizzi di campagna",
        detail: "Fra le saline e verso Marsala, allegate le indicazioni di arrivo della struttura se ve ne ha date. Per un indirizzo di campagna è la cosa più utile che possiate inoltrarci.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Conta doppio se c'è di mezzo un traghetto, perché quello che sale su una nave viene maneggiato più di quello che sta in un bagagliaio.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo da sé; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer a Trapani",
    items: [
      {
        question: "Un transfer può portarci alle Egadi?",
        answer: "Vi porta in banchina a Trapani e vi riprende allo sbarco del ritorno. La traversata è un viaggio in traghetto — Favignana sta a circa 16 km a sud-ovest della città e Marettimo a circa 24 km a ovest, in mare — e il veicolo non attraversa con voi se non è stato concordato espressamente. Indicateci la corsa che intendete prendere e la giornata si costruisce attorno a quella.",
      },
      {
        question: "Su quale aeroporto conviene atterrare?",
        answer: "Birgi se il volo c'è, Palermo se non c'è. Birgi è lo scalo locale e sta fra Trapani e Marsala, ma ha un orario molto più sottile: nel 2025 ha fatto circa un milione di passeggeri contro i nove di Palermo. Molti di quelli che vengono in questo angolo atterrano a Palermo e attraversano, ed è una soluzione del tutto normale.",
      },
      {
        question: "Quanto dista Birgi da Trapani?",
        answer: "Non pubblichiamo una cifra, perché nessuna fonte affidabile ne indica una: la voce sull'aeroporto dice soltanto che si trova fra Trapani e Marsala. L'itinerario lo conferma l'operatore al preventivo. Preferiamo dirvelo piuttosto che mettere in pagina un numero su cui non possiamo rispondere.",
      },
      {
        question: "C'è l'autobus dall'aeroporto?",
        answer: "Sì. Autoservizi Salemi serve Trapani, Marsala e Palermo, Autolinee Lumia serve Agrigento, AST serve Trapani. Le nominiamo perché da un piccolo scalo, di giorno e con un bagaglio solo, il transfer non è sempre la risposta giusta: per gli orari aggiornati rivolgetevi ai gestori e non a noi.",
      },
      {
        question: "Venite a prenderci in una struttura fra le saline?",
        answer: "Sì, ed è buona parte di quello che ci viene chiesto qui. Mandate le indicazioni di arrivo della struttura insieme all'indirizzo: gli indirizzi di campagna di questo angolo si descrivono molto più facilmente di quanto si trovino, e le istruzioni che una struttura scrive per gli autisti valgono più di una posizione su una mappa.",
      },
      {
        question: "Potete portarci da Trapani ad Agrigento o a Palermo?",
        answer: "Sì, sono richieste abituali. Agrigento è una giornata intera lungo la costa meridionale e non una mezza; Palermo è la tappa successiva più comune verso est. Per nessuna delle due pubblichiamo distanze o tempi, perché le cifre in circolazione non concordano: l'itinerario lo conferma l'operatore al preventivo.",
      },
      {
        question: "Quanto costa un transfer a Trapani?",
        answer: "Non esiste un listino. Una corsa fino alla banchina e una giornata ad Agrigento non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci la corsa, oppure il volo",
    body: "A Trapani di solito è uno dei due a governare la giornata. Mandatecelo insieme all'indirizzo, alla data e al numero di persone. L'organizzazione e il prezzo tornano indietro per iscritto, e se la coincidenza che avete descritto è troppo stretta ve lo diciamo invece di preventivarla lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
