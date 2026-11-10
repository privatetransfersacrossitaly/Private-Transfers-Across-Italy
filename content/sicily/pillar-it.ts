import type { SicilyPillar } from "./types";

/**
 * Pilastro regionale Sicilia — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca in italiano arriva con
 * domande diverse: la geografia la conosce, sa dove sta Taormina e non ha
 * bisogno che gli si spieghi che l'isola è grande. Ha invece più spesso
 * bisogno di sapere come funziona il servizio — chi esegue, chi si paga,
 * cosa succede se il volo ritarda, cosa si può e cosa non si può chiedere.
 * La pagina italiana dedica quindi più spazio a quello e meno
 * all'orientamento.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * Tutto il cluster Sicilia usa `brandedTitle: false`: la regola è 50-60
 * caratteri con una call to action, e " | Private Transfers Across Italy"
 * pesa da solo 33 caratteri. Il titolo qui sotto ne conta 52.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese: dati degli aeroporti dalle rispettive
 * voci enciclopediche (che citano Assaeroporti per il traffico), le due
 * distanze stradali dalla voce su Cefalù. Non compaiono qui — e il perché
 * sta in docs/sicily-cluster-plan.md — frequenze e tempi del treno da
 * Palermo aeroporto, il gestore del bus dall'aeroporto di Catania, lo stato
 * attuale della linea Messina-Siracusa e i nomi delle Autorità di Sistema
 * Portuale.
 *
 * Nessun prezzo, nessuna promessa sui tempi di percorrenza, nessuna
 * affermazione su veicoli di proprietà, nessun accordo commerciale,
 * nessuna testimonianza.
 */

export const sicilyPillarIt: SicilyPillar = {
  meta: {
    // 52 caratteri, senza brand: vedi la nota sopra.
    title: "Transfer privati in Sicilia – Prenota il tuo autista",
    description:
      "Transfer privati in Sicilia: quale scalo o porto conviene secondo dove alloggiate, e quanto dista davvero il resto dell'isola. Preventivo scritto.",
  },

  hero: {
    eyebrow: "Sicilia",
    h1: "Transfer privati in Sicilia",
    lead: "La Sicilia è l'isola più grande del Mediterraneo e ha la forma di un triangolo: il dettaglio conta più di quanto sembri. Due aeroporti stanno a due dei vertici e al terzo non c'è quasi nulla. Dove alloggiate decide quale dei due vi serve, e in Sicilia nulla pesa su un transfer quanto quella scelta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Quale aeroporto?",
    facts: [
      { label: "Aeroporti principali", value: "Palermo PMO · Catania CTA · Trapani TPS" },
      { label: "Porti crociere", value: "Palermo · Catania · Messina" },
      { label: "Isola", value: "La più grande del Mediterraneo" },
      { label: "Dalla Calabria la separa", value: "Lo Stretto di Messina" },
    ],
  },

  intro: {
    heading: "Prima il vertice, poi il paese",
    paragraphs: [
      "La Sicilia si organizza per vertici. Il nord-ovest è quello di Palermo, e l'aeroporto che lo serve è quello di Palermo. L'est è quello di Catania, con lo scalo praticamente dentro la città. La costa meridionale — Agrigento e i templi — non appartiene a nessuno dei due, ed è la parte dell'isola in cui il calcolo è meno ovvio.",
      "Il punto non è la distanza in sé ma cosa comporta: un volo conveniente sullo scalo sbagliato si paga in ore di strada, due volte, all'andata e al ritorno. È il motivo per cui conviene stabilire il transfer prima del volo e non dopo.",
      "Organizziamo questi trasferimenti con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  corners: {
    heading: "I tre vertici",
    lead: "Stabilire in quale vi trovate è il primo passo: da lì discendono l'aeroporto, il porto e quasi tutta la strada.",
    items: [
      {
        corner: "Il nord-ovest",
        arrival: "Aeroporto di Palermo (PMO), e Trapani (TPS) per l'estremo ovest",
        body: "Il capoluogo, la costa tirrenica che corre verso Cefalù e l'estremità occidentale attorno a Trapani e alle saline. Lo scalo di Palermo sta a Cinisi, lungo la costa: il tragitto verso la città è più lungo di quanto ci si aspetti da un capoluogo, quello verso ovest spesso più corto.",
        places: ["palermo", "cefalu", "trapani"],
      },
      {
        corner: "L'est",
        arrival: "Aeroporto di Catania (CTA)",
        body: "Catania, l'Etna alle spalle, Taormina sulla sua terrazza risalendo la costa e Siracusa scendendo verso sud-est. È il vertice con più traffico e quello in cui l'aeroporto è più vicino alla città che serve: pochi chilometri, cosa non comune da nessuna parte.",
        places: ["catania", "taormina", "syracuse"],
      },
      {
        corner: "Il sud",
        arrival: "Entrambi gli scali, e la scelta è reale",
        body: "Agrigento e la Valle dei Templi stanno sulla costa meridionale senza un aeroporto proprio. Ci si arriva da Palermo, da Catania o da Trapani a seconda del volo trovato: è l'unica parte della Sicilia in cui conviene davvero chiedere del transfer prima di prenotare il volo.",
        places: ["agrigento"],
      },
    ],
  },

  airports: {
    heading: "I tre aeroporti",
    lead: "Due reggono quasi tutto il traffico dell'isola, il terzo è piccolo e occidentale. I dati sui passeggeri sono quelli pubblicati da ciascuno scalo, con l'anno a cui si riferiscono.",
    items: [
      {
        id: "catania-airport",
        code: "CTA",
        name: "Catania-Fontanarossa, noto anche come aeroporto Vincenzo Bellini",
        body: "Il più trafficato dell'isola: 12.346.530 passeggeri nel 2024, gestito da SAC. Dista circa 4,3 km a sud-ovest di Catania, abbastanza vicino da rendere breve il transfer verso la città, cosa rara per uno scalo di queste dimensioni. Ha tre aerostazioni e il Terminal C è riservato a easyJet: sapere su quale si atterra serve prima che qualcuno venga a prendervi.",
        serves: "Catania, Taormina, Siracusa e la costa orientale. Agrigento si raggiunge, ma è lunga.",
      },
      {
        id: "palermo-airport",
        code: "PMO",
        name: "Aeroporto Falcone Borsellino, già Punta Raisi",
        body: "Il secondo scalo siciliano: 9.220.905 passeggeri nel 2025, gestito da GESAP. Sta a Cinisi, circa 35 km a ovest-nord-ovest di Palermo, ed è base operativa di Aeroitalia, Ryanair, Volotea e Wizz Air. Ha una stazione ferroviaria propria, che per un albergo nel centro di Palermo è un'alternativa seria e per qualunque altra destinazione non lo è affatto.",
        serves: "Palermo, Cefalù e la costa nord, Trapani e l'ovest, Agrigento.",
      },
      {
        id: "trapani-airport",
        code: "TPS",
        name: "Aeroporto Vincenzo Florio, Trapani-Birgi",
        body: "Molto più piccolo — 1.007.409 passeggeri nel 2025, in calo del 6,29% sull'anno precedente — e condiviso con l'Aeronautica Militare, che vi tiene il 37° Stormo. Le attività civili sono gestite da Airgest. Non sta né a Trapani né a Marsala ma fra le due, e Ryanair vi ha una base dal 2009.",
        serves: "Trapani, Marsala e il vertice occidentale. Palermo e Agrigento si raggiungono su strada.",
      },
    ],
    choosing: {
      heading: "Come si sceglie",
      body: "A est dell'Etna — Catania, Taormina, Siracusa — si atterra a Catania. Lungo la costa settentrionale o a ovest, si atterra a Palermo. Trapani serve nello specifico l'estremo occidente e ha un orario più sottile degli altri due: è una scelta che si fa quando il volo esiste, non un'opzione predefinita. Per la costa meridionale conviene chiedere prima: fra lo scalo giusto e quello sbagliato la differenza si misura in ore, non in minuti.",
    },
  },

  ports: {
    heading: "Arrivare via mare",
    lead: "La Sicilia riceve crociere in più punti della costa. Questi tre hanno una pagina propria perché sono quelli in cui i transfer privati vengono effettivamente richiesti.",
    items: [
      {
        id: "palermo-cruise-port",
        name: "Palermo",
        body: "Porto passeggeri di primo piano: nel 2018 vi sono transitati 1.986.941 passeggeri, di cui 577.934 crocieristi. È un porto che lavora, non un terminal crociere con una città attorno — dentro c'è il cantiere Fincantieri — quindi la banchina assegnata alla nave non è un dettaglio.",
      },
      {
        id: "catania-cruise-port",
        name: "Catania",
        body: "Il porto è accanto al centro, e questo rende insolitamente generoso il calcolo di una giornata a terra: Etna, Taormina e Siracusa sono tutte ipotesi plausibili in un solo scalo, cosa non vera per ogni approdo siciliano.",
      },
      {
        id: "messina-cruise-port",
        name: "Messina",
        body: "Sulla sponda occidentale dello Stretto, ed è quasi sempre uno scalo in giornata più che un posto in cui ci si ferma. Il traffico crocieristico è passato da 260.000 passeggeri nel 2006 a 405.000 nel 2009, gli ultimi dati pubblicati. Chi sbarca qui va quasi sempre a Taormina o sull'Etna e rientra nel pomeriggio.",
      },
    ],
    ferries: {
      heading: "I traghetti sono un'altra cosa",
      body: "Trapani è la porta delle Egadi e Milazzo è lo scalo per le Eolie. Sono traversate, non tragitti in auto: il transfer vi porta alla banchina e vi riprende allo sbarco del ritorno, e il veicolo non attraversa con voi se non è stato concordato espressamente. Diciamo con chiarezza quale metà di un programma possiamo coprire.",
    },
  },

  places: {
    heading: "Dove si va",
    lead: "Sette destinazioni con una pagina propria. Ognuna dice quale punto di arrivo le conviene e com'è davvero la strada.",
    items: [
      {
        id: "palermo",
        name: "Palermo",
        summary: "Il capoluogo, sulla costa tirrenica, sede principale del sito UNESCO arabo-normanno che comprende anche le cattedrali di Cefalù e Monreale.",
        arrival: "Aeroporto di Palermo, o il porto",
      },
      {
        id: "catania",
        name: "Catania",
        summary: "Sulla costa orientale ai piedi dell'Etna, con il centro tardobarocco iscritto fra le Città tardo barocche della Val di Noto.",
        arrival: "Aeroporto di Catania, a pochi chilometri",
      },
      {
        id: "taormina",
        name: "Taormina",
        summary: "Una terrazza sullo Ionio con il teatro greco in cima. Il centro storico sta attorno ai 250 m sul mare, e per un transfer è un problema quanto è un panorama.",
        arrival: "Aeroporto di Catania, o Messina via nave",
      },
      {
        id: "syracuse",
        name: "Siracusa",
        summary: "Ortigia, l'isola che è il centro storico, e la città archeologica alle spalle: patrimonio UNESCO dal 2005 insieme alla Necropoli di Pantalica.",
        arrival: "Aeroporto di Catania",
      },
      {
        id: "trapani",
        name: "Trapani",
        summary: "Il vertice occidentale: porto peschereccio, saline ai lati della strada e principale porta d'accesso alle Egadi.",
        arrival: "Aeroporto di Trapani, oppure Palermo",
      },
      {
        id: "agrigento",
        name: "Agrigento",
        summary: "L'Area archeologica di Agrigento — la Valle dei Templi — iscritta nel 1997, su un altopiano sopra la costa meridionale.",
        arrival: "Palermo, Catania o Trapani: chiedete prima",
      },
      {
        id: "cefalu",
        name: "Cefalù",
        summary: "Una cattedrale normanna iniziata nel 1131 sotto la rocca, sulla costa settentrionale a circa 70 km da Palermo.",
        arrival: "Aeroporto di Palermo",
      },
    ],
  },

  distances: {
    heading: "Quanto dista davvero il resto?",
    lead: "È la domanda che decide una vacanza siciliana, ed è quella a cui si risponde più spesso a occhio. Queste sono le uniche distanze stradali che questa pagina dichiara, tutte da fonte pubblicata.",
    rows: [
      {
        between: "Cefalù-Palermo",
        figure: "Circa 70 km",
        source: "La voce enciclopedica su Cefalù, che la indica come distanza dal capoluogo",
      },
      {
        between: "Cefalù-Messina",
        figure: "185 km",
        source: "La stessa voce",
      },
      {
        between: "Aeroporto di Palermo-Palermo",
        figure: "Circa 35 km, a ovest-nord-ovest",
        source: "La voce sull'aeroporto, che riporta 19 miglia nautiche",
      },
      {
        between: "Aeroporto di Catania-Catania",
        figure: "Circa 4,3 km, a sud-ovest",
        source: "La voce sull'aeroporto, che riporta 2,3 miglia nautiche",
      },
    ],
    footnote: "Sono le quattro cifre che possiamo attribuire a una fonte, e per questo sono le uniche. Ogni pagina di destinazione del cluster porta le proprie distanze con le proprie fonti, tutte indicate come approssimative: in Sicilia i chilometraggi stradali cambiano da un pianificatore all'altro a seconda del percorso e della stagione. L'itinerario effettivo lo confermiamo al preventivo. I tempi di percorrenza non li pubblichiamo affatto: una statale costiera ad agosto e la stessa strada a marzo non sono la stessa strada.",
  },

  alternatives: {
    heading: "Quando il transfer privato non serve",
    lead: "In Sicilia questa domanda ha una risposta vera e non di cortesia, e la pagina è più utile se la dà.",
    modes: [
      {
        mode: "Treno dall'aeroporto di Palermo",
        suits: "Il centro di Palermo con pochi bagagli. Lo scalo ha una stazione propria, cosa che pochi aeroporti italiani possono dire.",
        against: "Serve il centro di Palermo e nient'altro di dove probabilmente state andando. Qui non pubblichiamo frequenze né tempi: le fonti trovate non concordano fra loro e nessuna è il gestore, quindi verificate su Trenitalia e non su di noi.",
      },
      {
        mode: "Treno dall'aeroporto di Catania",
        suits: "Il proseguimento in treno. In aeroporto c'è la fermata Catania Aeroporto-Fontanarossa, inaugurata da RFI nel marzo 2021.",
        against: "La rete siciliana è esposta al meteo e le linee della costa orientale hanno subito interruzioni negli ultimi anni. Preferiamo rimandarvi al gestore per lo stato attuale della linea piuttosto che scrivere qui qualcosa che fra un mese non sarà più vero.",
      },
      {
        mode: "Auto a noleggio",
        suits: "Il viaggio itinerante. Se avete in programma di cambiare base ogni due giorni su un'isola di queste dimensioni, l'auto conviene davvero, e ve lo diciamo.",
        against: "Parcheggiare a Palermo, a Catania e nei paesi collinari è complicato, e diversi centri storici limitano l'accesso. Taormina in particolare non è un paese in cui si entra in auto e si lascia la macchina.",
      },
      {
        mode: "Transfer privato",
        suits: "Arrivi con bagagli, gruppi o bambini; indirizzi fuori dai centri; le tratte lunghe fra un vertice e l'altro dell'isola; una nave con un orario di rientro a bordo; e tutti i casi in cui la parte difficile è l'ultimo chilometro.",
        against: "Va organizzato prima, e per uno spostamento breve dentro Catania è più di quanto serva.",
      },
    ],
    verdict: "La regola onesta per la Sicilia: per un tragitto breve in città vanno benissimo il treno o il taxi. Per tutto ciò che attraversa l'isola, arriva tardi, porta bagagli o deve rientrare in banchina a un'ora fissa, conviene organizzarlo.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da cui dipende che un arrivo in Sicilia fili liscio.",
    items: [
      {
        term: "Il numero del volo",
        detail: "Non l'orario. Con quello l'autista vede da sé un ritardo o un dirottamento; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Quale aerostazione",
        detail: "A Catania conta: ce ne sono tre e una è riservata a una sola compagnia. Indicate su quale atterrate, oppure dateci il volo e lo ricaviamo noi.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno sul posto e in piena estate sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero e su una tratta lunga non esiste un secondo viaggio.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Taormina, Ortigia, il centro di Palermo e diversi borghi collinari limitano l'accesso. È la norma in Italia e non è un ostacolo: significa che il punto di scarico consentito è a volte a qualche minuto a piedi, e che sapere quale usare evita un giro inutile.",
      },
      {
        term: "Orari dei traghetti",
        detail: "Se il programma tocca Egadi o Eolie, è la corsa a decidere tutto il resto. Indicateci quale intendete prendere e la giornata si costruisce attorno a quella invece che attorno a un orario di ritiro.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer in Sicilia",
    items: [
      {
        question: "Su quale aeroporto conviene atterrare?",
        answer: "Dipende solo da dove alloggiate. Catania per l'est — Catania, Taormina, Siracusa, l'Etna. Palermo per il capoluogo, la costa nord e Cefalù. Trapani per l'estremo ovest, quando il volo c'è. Per Agrigento e la costa meridionale non esiste una risposta ovvia, ed è esattamente il motivo per cui conviene chiedere prima di prenotare il volo.",
      },
      {
        question: "Quanto dista l'aeroporto di Palermo dalla città?",
        answer: "Circa 35 km a ovest-nord-ovest, secondo il dato pubblicato dallo scalo. Si trova a Cinisi, lungo la costa: è un tragitto più lungo di quello della maggior parte degli aeroporti di capoluogo, e più corto di quanto ci si aspetti se invece state andando verso ovest o lungo la costa settentrionale.",
      },
      {
        question: "Quanto dista l'aeroporto di Catania dalla città?",
        answer: "Circa 4,3 km a sud-ovest: pochissimo per uno scalo che muove oltre dodici milioni di passeggeri l'anno. È una delle poche tratte siciliane in cui prendere un taxi al posteggio è un'alternativa del tutto ragionevole.",
      },
      {
        question: "Potete portarci da Catania a Taormina o da Palermo a Cefalù?",
        answer: "Sì, sono due fra i tragitti più richiesti dell'isola. Entrambi sono trattati nelle pagine delle destinazioni, con le distanze così come le riportano le fonti pubblicate. Indicateci il volo o la nave e dove alloggiate, e il preventivo segue quello.",
      },
      {
        question: "In Sicilia conviene il transfer o l'auto a noleggio?",
        answer: "Non sempre il transfer, e preferiamo dirlo. Se cambiate base ogni due giorni attraversando l'isola, l'auto può convenire. Se restate in uno o due posti con qualche escursione, i singoli transfer risultano di solito più semplici, perché parcheggiare nelle città e nei paesi collinari è davvero complicato.",
      },
      {
        question: "Venite a prenderci al porto di Palermo, Catania o Messina?",
        answer: "Sì. Ognuno di quei porti ha qui una pagina propria. Indicateci nome della nave, data, orario di arrivo e soprattutto orario di rientro a bordo, che è quello che governa la giornata. Se ciò che volete far entrare nelle ore a terra non è realistico, ve lo diciamo finché siete ancora in tempo a cambiarlo.",
      },
      {
        question: "Un transfer può portarci alle Eolie o alle Egadi?",
        answer: "Il transfer vi porta al porto e vi riprende allo sbarco del ritorno. La traversata è un viaggio in traghetto e il veicolo non attraversa con voi se non è stato concordato espressamente. Trapani è la porta per le Egadi, Milazzo per le Eolie: indicateci la corsa e il resto si costruisce attorno.",
      },
      {
        question: "Quanto costa un transfer in Sicilia?",
        answer: "Non esiste un listino, e su un'isola di queste dimensioni una media non direbbe nulla: un tragitto dentro Catania e uno da Palermo a Siracusa non sono lavori confrontabili. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci dove alloggiate",
    body: "In Sicilia conta più del volo. Indirizzo, data, numero del volo o nome della nave, e quanti siete. L'organizzazione e il prezzo tornano indietro per iscritto, e se il programma non funziona come lo avete descritto ve lo diciamo invece di preventivarlo lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
