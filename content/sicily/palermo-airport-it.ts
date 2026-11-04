import type { SicilyAirportPage } from "./types";

/**
 * Aeroporto di Palermo (PMO) — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano non serve che
 * si spieghi dove sia Punta Raisi: serve sapere come funziona l'incontro
 * con l'autista, cosa succede se il volo ritarda e quando conviene invece
 * il treno. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 52 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Non compaiono frequenza, durata e tariffa
 * del treno: le fonti trovate danno tre frequenze, due durate e due tariffe
 * diverse e nessuna è il gestore. La pagina dice che la stazione c'è e
 * rimanda a Trenitalia. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const palermoAirportIt: SicilyAirportPage = {
  meta: {
    // 52 caratteri.
    title: "Transfer aeroporto di Palermo (PMO) – Prenota l'auto",
    description:
      "Transfer privati dall'aeroporto Falcone Borsellino, a circa 35 km dalla città: l'incontro con l'autista, le tratte e il confronto con il treno.",
  },

  hero: {
    eyebrow: "Sicilia · Aeroporto di Palermo",
    h1: "Transfer privati dall'aeroporto di Palermo",
    lead: "Il Falcone Borsellino è più lontano dalla città che serve rispetto alla media degli scali di capoluogo: circa 35 km, lungo la costa a Cinisi. È la prima cosa da sapere. La seconda è che per molti arrivi quella distanza gioca a favore, perché l'aeroporto sta già dal lato giusto di Palermo per l'ovest e per la costa settentrionale.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va",
    facts: [
      { label: "Codici", value: "PMO · LICJ" },
      { label: "Noto anche come", value: "Punta Raisi" },
      { label: "Da Palermo", value: "Circa 35 km, a ovest-nord-ovest" },
      { label: "Passeggeri", value: "9.220.905 nel 2025" },
    ],
  },

  identity: {
    heading: "Lo scalo",
    paragraphs: [
      "L'aeroporto Falcone Borsellino, intitolato ai due magistrati e tuttora chiamato da molti Punta Raisi, si trova a Cinisi, 19 miglia nautiche — circa 35 km — a ovest-nord-ovest di Palermo. È gestito da GESAP e nel 2025 ha movimentato 9.220.905 passeggeri, in crescita del 3,4% sull'anno precedente, con 64.841 movimenti.",
      "È base operativa di Aeroitalia, Ryanair, Volotea e Wizz Air, e questo determina l'andamento della giornata: buona parte degli arrivi è di prima mattina o di sera tardi, perché è lì che le compagnie low cost collocano i voli. Atterrare alle undici di sera in uno scalo a 35 km dalla città è gestibilissimo, ma solo se chi vi aspetta conosce già il volo.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi ci date il volo e la destinazione, noi organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro con l'autista al PMO",
    lead: "La meccanica è quella di sempre; qui cambiano le conseguenze di sbagliarla, perché lo scalo è lontano dalla città e la fascia serale è affollata.",
    steps: [
      {
        title: "Date il numero del volo",
        body: "Non l'orario. Con quello l'autista vede il ritardo o il dirottamento mentre accade; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato — e a 35 km dalla città a mezzanotte è il momento peggiore per mettersi a organizzare.",
      },
      {
        title: "Concordate cosa c'è sul cartello",
        body: "L'autista attende in area arrivi con il cartello. Un cognome scritto diversamente da come ve lo aspettavate è il motivo più comune per cui due persone restano a dieci metri l'una dall'altra senza trovarsi.",
      },
      {
        title: "Dite dove andate davvero",
        body: "Non il paese: l'indirizzo. Per un albergo di Palermo decide se si scarica davanti al portone o al margine di una zona limitata. Per una struttura sulla costa decide addirittura da che parte si esce dall'aeroporto.",
      },
      {
        title: "Gli arrivi serali vogliono più anticipo",
        body: "L'orario di questo scalo concentra molto traffico in tarda serata, e nelle ore piccole la disponibilità è più ridotta che a metà giornata. Muoversi per tempo conta più per un atterraggio alle 23:40 che per uno di mezzogiorno.",
      },
    ],
    note: "Il numero del volo è l'informazione più utile in una richiesta di transfer aeroportuale, ed è quella che manca più spesso.",
  },

  routes: {
    heading: "Dove si va dall'aeroporto di Palermo",
    lead: "Lo scalo sta a ovest della città, quindi alcuni tragitti non passano affatto da Palermo. Queste sono le tratte più richieste.",
    city: {
      id: "palermo",
      note: "La città, circa 35 km a est. È il tragitto più breve di questa pagina e l'unico in cui il treno è un'alternativa reale; quartieri, strade limitate e punti di fermata stanno sulla pagina della città.",
    },
    items: [
      {
        id: "cefalu",
        note: "A est lungo la costa tirrenica, circa 70 km oltre il capoluogo secondo il dato pubblicato. La gita abituale e una seconda base frequente.",
      },
      {
        id: "trapani",
        note: "A ovest lungo la costa, per le saline e i traghetti delle Egadi. L'aeroporto sta già da questa parte della città, quindi il tragitto non attraversa Palermo.",
      },
      {
        id: "agrigento",
        note: "A sud attraverso l'isola, per la Valle dei Templi. Tragitto lungo, ed è uno dei motivi principali per cui si atterra qui invece che a Catania.",
      },
      {
        id: "sicily",
        note: "La pagina regionale: come si tiene insieme l'isola e quale scalo conviene per quale angolo.",
      },
    ],
    footnote: "Per nessuna di queste pubblichiamo tempi di percorrenza, e una sola distanza: quella di Cefalù, che la sua voce indica. I chilometraggi stradali siciliani cambiano da un pianificatore all'altro a seconda del percorso e della stagione, e su un tragitto lungo una cifra sbagliata manda all'aria dei programmi. L'itinerario lo conferma l'operatore al preventivo.",
  },

  ports: {
    heading: "Da e per il porto",
    lead: "Il porto di Palermo è uno scalo passeggeri operativo dentro la città, e il collegamento aeroporto-banchina è una richiesta abituale in entrambi i sensi.",
    items: [
      {
        id: "palermo-cruise-port",
        note: "Soprattutto chi si imbarca o sbarca con un volo dall'altra parte. Qui la banchina assegnata conta — il porto è grande e ha un cantiere all'interno — quindi mandate nome della nave e data insieme al volo.",
      },
    ],
  },

  alternatives: {
    heading: "Quando il transfer non serve",
    lead: "Questo scalo ha un'alternativa vera, cosa che non vale per tutti, e la pagina è più utile se lo dice.",
    modes: [
      {
        mode: "Treno",
        suits: "Il centro di Palermo con pochi bagagli. L'aeroporto ha una stazione propria, cosa che pochi scali italiani possono dire.",
        against: "Serve il centro di Palermo e nient'altro di dove probabilmente state andando. Non pubblichiamo frequenze, durate né tariffe: le fonti trovate non concordano fra loro e nessuna è il gestore — verificate su Trenitalia e non su di noi.",
      },
      {
        mode: "Autobus",
        suits: "Arrivare in città spendendo poco, viaggiando leggeri e di giorno.",
        against: "Non nominiamo gestori né orari che non abbiamo verificato. E per qualunque destinazione oltre il centro di Palermo non è comunque il confronto che conta.",
      },
      {
        mode: "Taxi al posteggio",
        suits: "Una corsa verso Palermo quando non si è concordato nulla prima.",
        against: "Nessun cartello con il nome, nessun percorso concordato, nessuno che segua il volo. Su 35 km, con i bagagli e un atterraggio serale, è l'opzione meno prevedibile.",
      },
      {
        mode: "Transfer privato",
        suits: "Tutto ciò che non è il centro di Palermo: la costa, Cefalù, l'ovest, Agrigento, un arrivo notturno, un gruppo, o una prima volta in cui nessuno ha mai guidato da queste parti.",
        against: "Va organizzato prima, e per una corsa diurna verso un albergo vicino alla stazione è più di quanto serva.",
      },
    ],
    verdict: "In pratica: centro di Palermo, di giorno, con un bagaglio a mano, va benissimo il treno. Per qualunque altra destinazione di questo lato dell'isola — e per qualunque cosa dopo il tramonto — il calcolo si rovescia in fretta.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Da cosa dipende che un arrivo qui fili liscio.",
    items: [
      {
        term: "Il numero del volo",
        detail: "Non l'orario. È l'unica informazione che permette a un autista di reagire a un ritardo invece di subirlo.",
      },
      {
        term: "L'indirizzo completo",
        detail: "A Palermo i nomi degli alberghi si ripetono e più d'uno coincide con una via o una piazza. È l'indirizzo a decidere il punto di fermata, soprattutto nei quartieri antichi.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età nella richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno sul posto e d'estate sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero e su questa distanza non esiste un secondo viaggio.",
      },
      {
        term: "Indirizzi di campagna e di costa",
        detail: "Allegate le indicazioni di arrivo della struttura, se ve ne ha date. A ovest dello scalo e lungo la costa valgono più di una posizione su una mappa.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dall'aeroporto di Palermo",
    items: [
      {
        question: "Quanto dista l'aeroporto dalla città?",
        answer: "Circa 35 km a ovest-nord-ovest, secondo il dato pubblicato dallo scalo: 19 miglia nautiche. Si trova a Cinisi, lungo la costa, ed è quindi un tragitto più lungo della media dei capoluoghi. Se però state andando verso ovest o lungo la costa settentrionale, quella stessa posizione gioca a vostro favore.",
      },
      {
        question: "C'è il treno dall'aeroporto?",
        answer: "Sì, lo scalo ha una stazione propria, cosa non comune in Italia. Non pubblichiamo frequenza, durata né tariffa: le fonti trovate danno tre frequenze, due durate e due tariffe diverse, e nessuna è il gestore. Per gli orari aggiornati rivolgetevi a Trenitalia, e considerate il treno un'opzione solo per il centro di Palermo.",
      },
      {
        question: "Potete portarci direttamente a Cefalù o a Trapani senza passare da Palermo?",
        answer: "Sì, e per Trapani è il percorso naturale: l'aeroporto sta già a ovest della città. Cefalù è invece a est, oltre il capoluogo, a circa 70 km da Palermo secondo il dato pubblicato. Entrambe funzionano come transfer diretto dagli arrivi: indicateci indirizzo e volo.",
      },
      {
        question: "Cosa succede se il volo è in ritardo?",
        answer: "L'autista lo vede, a condizione che abbiamo il numero del volo. I ritardi sono ordinari e si mettono in conto. A creare problemi è semmai un transfer fissato su un orario senza alcun volo associato, perché a quel punto nessuno sa se aspettare.",
      },
      {
        question: "Venite a prenderci per un arrivo a notte fonda?",
        answer: "Sì, e questo scalo riceve molto traffico serale per via degli orari low cost. Nelle ore piccole la disponibilità è più ridotta che a metà giornata, quindi muoversi per tempo serve davvero — qui più che in un aeroporto a cinque minuti dal centro.",
      },
      {
        question: "Fate anche il collegamento aeroporto-porto?",
        answer: "Sì, in entrambi i sensi, ed è una richiesta abituale. Mandate nome della nave e data oltre al volo: Palermo è un porto operativo con un cantiere all'interno, e la banchina assegnata non è una cosa che un autista possa indovinare.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Palermo?",
        answer: "Non esiste un listino. Una corsa in città e una giornata ad Agrigento non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci il numero del volo e l'indirizzo",
    body: "Quei due risolvono quasi tutto di un arrivo qui. Aggiungete quanti siete e se serve un seggiolino, e l'organizzazione e il prezzo tornano indietro per iscritto — prima di qualsiasi conferma e prima di qualsiasi addebito.",
    cta: "Richiedi un preventivo",
  },
};
