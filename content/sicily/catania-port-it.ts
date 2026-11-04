import type { SicilyPortPage } from "./types";

/**
 * Porto crociere di Catania — italiano.
 *
 * ── La pagina con meno fonti del cluster, e lo dichiara ───────────────────
 * Per questo porto non esiste una voce enciclopedica: "Port of Catania" su
 * en.wikipedia.org restituisce 404. Esiste stampa di settore italiana, che
 * descrive un porto cittadino a pochi minuti a piedi dal centro storico,
 * banchine crocieristiche salite a tre con la fine dei lavori al molo 25
 * nel luglio 2025 e una concessione del terminal a Catania Cruise Terminal,
 * del gruppo Global Ports Holding.
 *
 * Sono notizie di settore e non fonti ufficiali o enciclopediche: la pagina
 * usa quindi solo la vicinanza al centro — su cui più fonti concordano e che
 * è il dato che cambia davvero cosa si può fare — e la attribuisce invece di
 * affermarla. Niente numero di banchine, niente concessionario, niente
 * minuti a piedi, niente dati sui passeggeri.
 *
 * Ne esce una pagina più corta di quelle di Palermo e Messina. È il
 * risultato corretto di fonti sottili, non un difetto da riempire.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 54 caratteri, senza brand, con call to action.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessun accordo con compagnie di crociera.
 */

export const cataniaPortIt: SicilyPortPage = {
  meta: {
    // 54 caratteri.
    title: "Transfer porto crociere di Catania – Prenota l'autista",
    description:
      "Transfer privati dalle banchine crociere di Catania. Porto cittadino: Etna, Taormina o Siracusa sono possibili in giornata — una delle tre, non tutte.",
  },

  hero: {
    eyebrow: "Sicilia · Porto crociere di Catania",
    h1: "Transfer privati dal porto crociere di Catania",
    lead: "Quello di Catania è un porto cittadino: le banchine stanno vicino al centro storico e non in una zona industriale fuori città. Questo solo fatto ne fa lo scalo crocieristico più generoso della Sicilia per una giornata a terra — Etna, Taormina e Siracusa sono ciascuna davvero possibile da qui. Ciascuna. Non tutte e tre.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Una giornata a terra",
    facts: [
      { label: "Porto", value: "Porto di Catania" },
      { label: "Posizione", value: "Accanto al centro storico" },
      { label: "Scalo più vicino", value: "Fontanarossa (CTA)" },
      { label: "Alle spalle", value: "L'Etna" },
    ],
  },

  identity: {
    heading: "Un porto cittadino",
    paragraphs: [
      "Il porto di Catania sta accanto alla città e non staccato da essa, e le fonti di settore descrivono le banchine crocieristiche a pochi passi dal centro storico. Lo attribuiamo invece di affermarlo in modo netto perché — caso unico in questo cluster — non esiste una voce enciclopedica su questo porto con cui verificarlo, e preferiamo dirvi da dove viene un'informazione piuttosto che fingere una certezza che non abbiamo.",
      "Quello che non è in dubbio è cosa comporta quella posizione. Un porto centrale, una griglia barocca che regge il traffico e strade di uscita veloci in tre direzioni ne fanno lo scalo siciliano con più ore realmente utilizzabili. Il vincolo qui non è uscire dal porto: è scegliere fra tre buone opzioni senza tentarle tutte.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli, non impieghiamo direttamente gli autisti e non abbiamo accordi con compagnie di crociera. Voi ci dite la nave e il giorno, noi organizziamo con un operatore che copre questo tipo di servizio, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro in banchina",
    lead: "Qui è breve e semplice: è il vantaggio di un porto centrale.",
    steps: [
      {
        title: "Mandate nome della nave e data",
        body: "Fanno il lavoro che in aeroporto fa il numero del volo: permettono a un operatore di verificare cosa sta succedendo davvero invece di lavorare su un programma.",
      },
      {
        title: "L'autista attende al terminal",
        body: "Non sotto bordo: la banchina è ad accesso controllato. Vale in ogni porto e coglie comunque di sorpresa.",
      },
      {
        title: "Diteci il programma, non solo il ritiro",
        body: "Che la giornata sia l'Etna, Taormina o Siracusa cambia veicolo, orari e margine. Qui la prenotazione è la destinazione; il ritiro ne è un dettaglio.",
      },
      {
        title: "Mettete in conto lo sbarco",
        body: "Il vostro turno di sbarco non coincide con l'orario di arrivo della nave. Usate quello che vi ha comunicato la nave.",
      },
    ],
    note: "In un porto centrale il margine sull'orologio è migliore che quasi ovunque in Sicilia — ed è esattamente il motivo per cui qui si tende a strafare.",
  },

  shore: {
    heading: "Una giornata a terra da Catania",
    lead: "Tre opzioni vere, e il consiglio onesto è sceglierne una. Questa pagina esiste soprattutto per evitare che se ne tentino due.",
    allAboard: "L'orario di rientro a bordo è l'unico che conta, ed è prima della partenza stampata sul biglietto. Indicatecelo e la giornata si costruisce a ritroso da lì. Proprio perché il porto è centrale e le strade di uscita sono veloci, qui ci si chiede regolarmente se si riescano a fare due delle tre mete qui sotto. Quando la risposta è no ve lo diciamo, e di norma è no.",
    options: [
      {
        id: "catania",
        note: "La città: il centro tardobarocco iscritto fra le Città tardo barocche della Val di Noto, a due passi dalle banchine. L'opzione con più margine e meno da organizzare.",
      },
      {
        id: "taormina",
        note: "A nord risalendo la costa, sulla sua terrazza sopra il mare. La giornata più richiesta da questo porto, e quella in cui il centro a traffico limitato rende l'arrivo più complicato della strada.",
      },
      {
        id: "syracuse",
        note: "A sud, per Ortigia e la città archeologica. Una giornata intera e non una mezza, ed è la più lontana delle tre.",
      },
      {
        id: "sicily",
        note: "La pagina regionale, se state confrontando questo scalo con gli altri dello stesso itinerario.",
      },
    ],
    footnote: "L'Etna è la quarta opzione ed è quella che dipende meno da noi: i tragitti raggiungono le aree visitabili sulla montagna, e cosa sia possibile in una certa giornata lo decidono le condizioni e non una prenotazione. Per nessuna di queste mete pubblichiamo tempi di percorrenza: le cifre in circolazione non concordano e, contro una scadenza fissa, una cifra sbagliata è peggio di nessuna.",
  },

  airports: {
    heading: "Dal porto all'aeroporto",
    lead: "Breve, perché anche lo scalo è vicino alla città.",
    items: [
      {
        id: "catania-airport",
        note: "Fontanarossa, circa 4,3 km a sud-ovest della città: uno dei collegamenti porto-aeroporto più brevi di tutta la Sicilia. Mandate volo e nave, e indicate l'aerostazione se la conoscete — sono tre.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Elenco breve, perché è un porto lineare.",
    items: [
      {
        term: "L'orario di rientro a bordo",
        detail: "Prima di quello di partenza, ed è la scadenza da cui si pianifica tutto a ritroso.",
      },
      {
        term: "Una meta, non due",
        detail: "Dite quale fra Etna, Taormina e Siracusa. Se ne chiedete due vi diciamo se ci stanno, e nella maggior parte dei casi non ci stanno.",
      },
      {
        term: "Nome della nave e data",
        detail: "Permettono a un operatore di confermare ormeggio e orari invece di lavorare su un programma stampato.",
      },
      {
        term: "Le condizioni dell'Etna",
        detail: "Decide la montagna il giorno stesso, non la prenotazione. Diciamo cosa può fare un operatore, non promettiamo un panorama.",
      },
      {
        term: "Il centro limitato di Taormina",
        detail: "Se la giornata è Taormina, la zona a traffico limitato determina dove la vettura può fermarsi. Lo tratta la pagina di Taormina.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dal porto crociere di Catania",
    items: [
      {
        question: "Riusciamo a fare Taormina e l'Etna nella stessa giornata?",
        answer: "Di norma no, e preferiamo dirlo adesso e non sul marciapiede. La posizione del porto rende comoda una meta sola e tirata la seconda, contro un orario di rientro a bordo. Mandateci le vostre ore a terra e vi diamo una risposta netta sul vostro scalo, non una generica.",
      },
      {
        question: "Quanto è vicino il porto al centro?",
        answer: "Vicino: le banchine stanno accanto al centro storico e non in una zona industriale fuori città. Lo descriviamo da fonti di settore e non da una fonte enciclopedica, perché per questo porto una voce enciclopedica non esiste, e preferiamo attribuire l'informazione piuttosto che gonfiarla.",
      },
      {
        question: "Dove ci aspetta l'autista?",
        answer: "Al terminal, non sotto bordo: la banchina è ad accesso controllato, come in ogni porto. Mandate nome della nave e data, così il punto d'incontro si concorda su quello che succede davvero quel giorno.",
      },
      {
        question: "Ci portate sull'Etna?",
        answer: "I tragitti raggiungono le aree visitabili sulla montagna. Cosa sia possibile in una certa giornata dipende dalle condizioni lassù, e vi diciamo cosa può realmente fare un operatore invece di promettere una cima o un panorama. Contro la scadenza di una nave quella precisazione conta più del solito.",
      },
      {
        question: "Potete portarci dal porto all'aeroporto?",
        answer: "Sì, ed è uno dei collegamenti più brevi di tutta la Sicilia: Fontanarossa sta a circa 4,3 km a sud-ovest della città. Mandate volo e nave, e indicate quale delle tre aerostazioni se la conoscete.",
      },
      {
        question: "Quanti passeggeri muove questo porto?",
        answer: "Non pubblichiamo una cifra. A differenza di Palermo e Messina, questo porto non ha una voce enciclopedica con dati di traffico, e non siamo riusciti a riscontrare in modo sufficiente i numeri in circolazione. È una lacuna in ciò che possiamo dirvi, e preferiamo dichiararla invece di riempirla con una stima.",
      },
      {
        question: "Quanto costa un transfer dal porto crociere?",
        answer: "Non esiste un listino. Uno spostamento a distanza di passeggiata in città e una giornata intera a Siracusa non sono lavori confrontabili. Descrivete la giornata e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No, e non abbiamo accordi con compagnie di crociera. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci quale delle tre",
    body: "Etna, Taormina o Siracusa — più la nave, la data e l'orario di rientro a bordo. L'organizzazione e il prezzo tornano indietro per iscritto, e se la giornata che avete descritto non ci sta nelle vostre ore a terra ve lo diciamo invece di preventivarla lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
