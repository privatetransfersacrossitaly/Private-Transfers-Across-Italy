import type { AirportPage } from "./types";

/**
 * Aeroporto di Brindisi (BDS) — italiano.
 *
 * Scritto in italiano, non tradotto. La differenza di pubblico è reale: chi
 * cerca in inglese sta pianificando una vacanza e va orientato; chi cerca
 * "transfer aeroporto Brindisi" in italiano molto spesso accoglie qualcuno,
 * o scende in Salento per un matrimonio, e sa già dove sono Lecce e Otranto.
 * La pagina italiana dedica quindi più righe al funzionamento del servizio e
 * al coordinamento, e meno alla geografia.
 *
 * Fonti identiche alla versione inglese: codici, i nomi Papola Casale e
 * Aeroporto del Salento, Antonio Papola, i ~6 km dal centro, i 3.385.610
 * passeggeri del 2024 (Assaeroporti, via la voce enciclopedica) e Ryanair
 * come base operativa. I 39 km per Lecce vengono dalla guida agli itinerari
 * della Regione Puglia; Ostuni 32-37 km, Gallipoli 80-86 km e Otranto 65-97
 * km sono forbici perché le fonti divergono davvero, e la pagina lo dice.
 *
 * Per autobus e treni non si pubblicano orari: nessuna fonte raggiungibile
 * li documenta in forma pubblicabile, e inventarli sarebbe peggio che
 * rimandare agli operatori.
 *
 * Nessun prezzo, nessuna promessa sui tempi, nessuna classe di veicolo,
 * nessuna flotta di proprietà, nessun accordo, nessuna testimonianza.
 */

export const brindisiAirportIt: AirportPage = {
  meta: {
    title: "Transfer aeroporto di Brindisi (BDS)",
    // 145 caratteri reali (149 nell'HTML, per l'apostrofo). Da cinque nomi
    // a tre: Gallipoli e Otranto sono in pagina, e un elenco completo non
    // convince nessuno a cliccare.
    description:
      "Transfer privati dall'aeroporto di Brindisi verso Lecce, Ostuni e il Salento. Indicate volo e struttura, il preventivo arriva per iscritto.",
  },

  hero: {
    eyebrow: "Puglia · Aeroporto di Brindisi",
    h1: "Transfer privati dall'aeroporto di Brindisi",
    lead: "Il BDS è lo scalo del sud della Puglia e si lascia in pochi minuti. Quella rapidità è il punto: non c'è alcun percorso interno lungo ad assorbire un ritardo, quindi qui un transfer agganciato al numero del volo funziona e uno fissato su un orario stimato no.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va",
    facts: [
      { label: "Aeroporto", value: "Brindisi · BDS / LIBR" },
      { label: "Noto anche come", value: "Papola Casale · Aeroporto del Salento" },
      { label: "Dal centro", value: "Circa 6 km" },
      { label: "Passeggeri", value: "3.385.610 nel 2024" },
    ],
  },

  identity: {
    heading: "Lo scalo",
    paragraphs: [
      "L'aeroporto di Brindisi è intitolato ad Antonio Papola, aviatore morto in un incidente di volo nel febbraio 1948. Su biglietti e cartelli se ne incontrano altri due nomi: Papola Casale, dal quartiere, e Aeroporto del Salento, dalla regione storica a cui dà accesso. È quest'ultimo a spiegare meglio a cosa serve lo scalo.",
      "Nel 2024 ha movimentato 3.385.610 passeggeri ed è base operativa di Ryanair, con rotte stagionali dal Nord Europa che si infittiscono d'estate e si diradano da novembre. La stagionalità conta quando si organizza il trasporto a terra: ad agosto sono impegnati lo scalo e tutti gli operatori che ci lavorano.",
      "È inoltre davvero piccolo, e questo cambia il comportamento di un arrivo. Dall'aereo alla sala arrivi si fanno pochi passi, i bagagli si ritirano in un punto solo, l'uscita è una. Dove uno scalo grande concede all'autista venti minuti di margine mentre i passeggeri si districano, Brindisi non li concede.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi ci date il volo e la struttura, noi organizziamo con un operatore che copre quella tratta e vi mandiamo prima l'accordo e il prezzo per iscritto.",
    ],
  },

  meeting: {
    heading: "L'incontro con l'autista",
    lead: "Proprio perché lo scalo si svuota in fretta, qui il margine per un accordo vago è più stretto che quasi ovunque in Puglia.",
    steps: [
      {
        title: "La sala arrivi",
        body: "Una sala, un'uscita. Gli autisti attendono con il cartello. Concordate prima cosa ci sarà scritto: un cognome trascritto diversamente è il motivo più comune per cui due persone non si trovano in una stanza di queste dimensioni.",
      },
      {
        title: "Indicate il numero del volo",
        body: "Con quello, un ritardo o un dirottamento è qualcosa che l'autista vede accadere. Senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato: il momento peggiore per organizzare qualsiasi cosa.",
      },
      {
        title: "Dite dove andate davvero",
        body: "Non il comune: la struttura, con le sue indicazioni di arrivo se ve ne ha mandate. Moltissimi arrivi al BDS finiscono in una masseria su una strada senza illuminazione, ed è quell'ultimo chilometro la parte che va storta.",
      },
      {
        title: "Voli serali e stagionali",
        body: "L'orario estivo porta parecchi arrivi in tarda serata, e nelle ore piccole la disponibilità è più ridotta che in pieno giorno. A luglio e agosto muoversi per tempo fa una differenza reale.",
      },
    ],
    note: "Il numero del volo e le indicazioni della struttura sono le due cose che rendono tranquillo un arrivo a Brindisi. Di solito si trovano entrambe in una mail che avete già ricevuto.",
  },

  howItWorks: {
    heading: "Come funziona",
    lead: "Quattro passaggi, e non viene addebitato nulla finché non avete accettato il prezzo per iscritto.",
    steps: [
      {
        title: "Ci descrivete il tragitto",
        body: "Numero del volo, struttura di destinazione, passeggeri e bagagli. I seggiolini si concordano in anticipo e servono le età, non solo il numero.",
      },
      {
        title: "Organizziamo con un operatore locale",
        body: "Il tragitto passa a una società di noleggio con conducente autorizzata che copre quella tratta. Non siamo il vettore: predisponiamo l'organizzazione e restiamo responsabili della sua correttezza.",
      },
      {
        title: "Ricevete il prezzo per iscritto",
        body: "Prima di qualsiasi conferma. Se un tragitto non funziona come lo avete descritto — una corsa fino a Leuca compressa in un pomeriggio, più bagagli di quanti ne prenda una vettura — ve lo diciamo adesso e non il giorno stesso.",
      },
      {
        title: "Pagate l'operatore",
        body: "La società locale che esegue il servizio incassa direttamente. Nulla viene addebitato prima che il preventivo sia accettato.",
      },
    ],
  },

  routes: {
    heading: "Da qui, dove si va",
    lead: "Quasi nessuno atterra al BDS per fermarsi a Brindisi. Il viaggio è la discesa verso sud, e quanto a sud andiate è la domanda che determina tutto il resto.",
    city: {
      id: "brindisi",
      name: "Brindisi centro",
      distance: "Circa 6 km",
      note: "Breve, ed è il motivo per cui lo scalo si lascia in fretta. La pagina sulla città racconta Brindisi come destinazione e la scelta fra i due aeroporti della regione.",
    },
    items: [
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Circa 32-37 km",
        note: "A nord-ovest, non a sud. La Città Bianca sul colle — ma quasi tutti gli ospiti alloggiano in una masseria sotto il paese, e lì contano le indicazioni della struttura più del nome del comune.",
      },
      {
        id: "lecce",
        name: "Lecce",
        distance: "Circa 39 km",
        note: "Con ampio margine la tratta più richiesta da questo scalo. La guida regionale agli itinerari indica 39 km e circa mezz'ora, in gran parte sulla SS613.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "Più a nord, verso l'interno",
        note: "Si raggiunge anche da qui, benché per la zona dei trulli lo scalo più vicino sia Bari. Conviene saperlo prima di acquistare il volo.",
      },
      {
        id: null,
        name: "Otranto",
        distance: "Le fonti danno 65-97 km",
        note: "Versante adriatico. La forbice fra le distanze pubblicate è reale e dipende dal percorso: interno via Lecce oppure lungo la costa.",
      },
      {
        id: null,
        name: "Gallipoli",
        distance: "Circa 80-86 km",
        note: "Versante ionico, di norma via Lecce e poi SS101. Un altro mare, e una vacanza di tutt'altro tipo.",
      },
      {
        id: "salento",
        name: "Salento",
        distance: "Tutta la penisola",
        note: "Porto Cesareo, Santa Maria di Leuca e i paesi della punta. La pagina sul Salento conta quanti spostamenti serva davvero fare in una settimana quaggiù: di norma più di quanti si immagini.",
      },
    ],
    footnote: "I dati provengono da pianificatori di percorso, operatori di transfer e dalla guida regionale agli itinerari, e non coincidono tutti — la forbice su Otranto ne è l'esempio più evidente. Vanno presi come orientamento e non come orario. Il traffico estivo sulle litoranee aggiunge tempo che nessun pianificatore considera, e il percorso effettivo lo confermiamo al momento del preventivo.",
  },

  alternatives: {
    heading: "Le altre vie d'uscita dallo scalo",
    lead: "Dal BDS esistono collegamenti in autobus e per certi tragitti sono una risposta ragionevole. Preferiamo descriverli onestamente invece di fingere che non ci siano.",
    modes: [
      {
        mode: "Autobus",
        suits: "Spostamenti economici verso Brindisi o i centri maggiori, viaggiando leggeri e arrivando con la luce.",
        against: "I servizi variano per stagione e per operatore, quindi rimandiamo agli orari aggiornati invece di pubblicare orari che non possiamo verificare. Con i bagagli, un cambio e una destinazione di campagna, il confronto si risolve da sé.",
      },
      {
        mode: "Treno",
        suits: "Il proseguimento una volta raggiunta una città con stazione: Brindisi e Lecce sono entrambe sulla linea principale.",
        against: "La stazione non è in aeroporto, quindi serve comunque una tratta per arrivarci. Per un albergo nel centro di Lecce può funzionare bene; per una masseria no.",
      },
      {
        mode: "Auto a noleggio",
        suits: "Girare il Salento cambiando posto quasi ogni giorno. È una delle poche zone della Puglia in cui guidare da sé regge davvero il confronto: le distanze contano e fuori dai centri storici si parcheggia.",
        against: "Dentro i centri storici parcheggiare è complicato davvero, e un cancello di campagna a mezzanotte è più difficile da trovare la prima volta di quanto sembri sulla mappa.",
      },
      {
        mode: "Transfer privato",
        suits: "Una struttura di campagna, un arrivo serale, un gruppo, bambini, o una prima visita in cui nessuno in auto ha mai visto quella strada.",
        against: "Va organizzato in anticipo. Per un breve tragitto verso Brindisi città in pieno giorno è più di quanto serva.",
      },
    ],
    verdict: "Se fate base in un posto solo con qualche uscita, i transfer organizzati risultano di norma più semplici. Se avete intenzione di essere ogni giorno altrove sulla penisola, il noleggio può convenire — e ve lo diciamo invece di quotarvi otto viaggi separati.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Cosa conviene definire prima di partire.",
    items: [
      {
        term: "Le indicazioni della struttura",
        detail: "La cosa più utile che possiate mandare per un viaggio da Brindisi. Molte masserie ne tengono una versione scritta per gli autisti, proprio perché le stradine sono difficili da trovare.",
      },
      {
        term: "Il numero del volo",
        detail: "Non l'orario. Il BDS si svuota in fretta, quindi c'è poco margine per assorbire un accordo vago.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore e in alta stagione sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero e verso una struttura di campagna non esiste un secondo viaggio.",
      },
      {
        term: "Stagionalità",
        detail: "L'orario di Brindisi è fortemente stagionale, e con esso il trasporto a terra. Organizzare per tempo qui rende più che in uno scalo attivo tutto l'anno.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Lecce, Ostuni e quasi tutti i centri storici limitano l'accesso dei veicoli. È normale e non è un ostacolo: significa solo che lo scarico consentito è a volte a qualche minuto a piedi dal portone.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dall'aeroporto di Brindisi",
    items: [
      {
        question: "Quanto dista l'aeroporto di Brindisi da Lecce?",
        answer: "Circa 39 km secondo la guida regionale agli itinerari, con una mezz'ora di percorrenza in condizioni normali, in gran parte sulla SS613. È con ampio margine la tratta più richiesta da questo scalo.",
      },
      {
        question: "Quanto dista l'aeroporto dal centro di Brindisi?",
        answer: "Circa 6 km. Lo scalo è vicino alla città, ed è anche per questo che si lascia in fretta — ma chi atterra qui raramente si ferma a Brindisi, e il tragitto che conta è quello più a sud.",
      },
      {
        question: "Venite a prenderci in una masseria in campagna?",
        answer: "Sì, e da queste parti è fra le richieste più frequenti. Mandate il nome completo della struttura e le indicazioni di arrivo che vi ha fornito: molte masserie ne tengono una versione scritta per gli autisti, perché le stradine sono davvero difficili da individuare. Inoltrarcela è la cosa più utile che possiate fare.",
      },
      {
        question: "Ci sono autobus o treni dall'aeroporto di Brindisi?",
        answer: "Esistono collegamenti in autobus, ma i servizi variano per stagione e per operatore, quindi preferiamo rimandarvi agli orari aggiornati piuttosto che pubblicare orari non verificabili. La stazione non è in aeroporto. Per Lecce e i centri più a sud il confronto pratico è fra un collegamento con cambio e un'auto porta a porta: con i bagagli e un arrivo serale, si risolve da sé.",
      },
      {
        question: "Avremmo dovuto atterrare a Bari?",
        answer: "Se alloggiate a sud di Ostuni — Lecce, Otranto, Gallipoli, il Salento in generale — Brindisi è lo scalo giusto. A nord di Ostuni è più vicino Bari. Il confronto completo sta nella pagina su Brindisi città e in quella regionale. Se i voli convenivano solo su uno dei due, il transfer resta comunque organizzabile: è soltanto un tragitto più lungo.",
      },
      {
        question: "Organizzate i trasporti per un matrimonio in Salento?",
        answer: "Sì. L'organizzazione tipica prevede gli arrivi degli ospiti al BDS su più giorni, un trasferimento coordinato verso la location e i rientri a tarda notte — quest'ultimo è il pezzo che più spesso ci si dimentica. Indicateci numero di ospiti, punti di raccolta e orari e lo quotiamo come un lavoro unico. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
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
    heading: "Mandateci il volo e la struttura",
    body: "Numero del volo, struttura di destinazione, quanti siete — e le indicazioni di arrivo della struttura, se ve ne ha mandate. Vi rispondiamo con l'organizzazione e il prezzo per iscritto.",
    cta: "Richiedi un preventivo",
  },
};
