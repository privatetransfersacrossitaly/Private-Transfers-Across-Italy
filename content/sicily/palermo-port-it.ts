import type { SicilyPortPage } from "./types";

/**
 * Porto crociere di Palermo — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca in italiano su un porto
 * crociere vuole sapere tre cose: dove aspetta l'autista, cosa ci sta
 * davvero nelle ore a terra e cosa succede se la nave arriva in ritardo.
 * La pagina va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 53 caratteri, senza brand, con call to action.
 *
 * ── Fonti e loro limiti ───────────────────────────────────────────────────
 * Identiche alla versione inglese. Tutti i dati sui passeggeri sono del
 * 2018 e sono riportati con il loro anno: non vengono presentati come
 * traffico attuale. Non si nomina nessuna Autorità di Sistema Portuale,
 * perché la riforma del 2016, le fonti successive e il decreto attuale non
 * concordano. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessun accordo con compagnie di crociera.
 */

export const palermoPortIt: SicilyPortPage = {
  meta: {
    // 53 caratteri.
    title: "Transfer porto crociere di Palermo – Riserva la corsa",
    description:
      "Transfer privati dalle banchine crociere di Palermo: giornate a Monreale e Cefalù, corse per l'aeroporto e l'orario di rientro che decide tutto.",
  },

  hero: {
    eyebrow: "Sicilia · Porto crociere di Palermo",
    h1: "Transfer privati dal porto crociere di Palermo",
    lead: "Quello di Palermo è un porto che lavora, non un terminal crociere con una città attorno. Accanto agli scali crocieristici ci sono traghetti, merci e un cantiere navale, e si estende per qualche chilometro lungo la riva: è il motivo per cui la banchina assegnata alla vostra nave non è un dettaglio che un autista possa indovinare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Una giornata a terra",
    facts: [
      { label: "Porto", value: "Porto di Palermo" },
      { label: "Passeggeri", value: "1.986.941 nel 2018" },
      { label: "Di cui crocieristi", value: "577.934 nel 2018" },
      { label: "Dentro il porto", value: "Il cantiere Fincantieri" },
    ],
  },

  identity: {
    heading: "Un porto operativo",
    paragraphs: [
      "La voce enciclopedica descrive il Porto di Palermo come uno dei principali porti passeggeri del Mediterraneo. I dati più recenti pubblicati sono del 2018: quell'anno 1.986.941 passeggeri, di cui 577.934 crocieristi, con 3.677 approdi e 6.189.091 tonnellate di merci. Sono numeri di sette anni fa e li riportiamo con il loro anno, non come descrizione dell'oggi.",
      "Si estende per qualche chilometro lungo la riva a partire da via Francesco Crispi, vicino all'antico porto della Cala, comprendendo aree come l'Arenella e l'Acquasanta. Nell'area portuale c'è anche il cantiere Fincantieri con i suoi due bacini di carenaggio. La conseguenza pratica è semplice: è un porto grande, industriale e polifunzionale, e il punto di ormeggio varia.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli, non impieghiamo direttamente gli autisti e non abbiamo accordi con compagnie di crociera. Voi ci dite la nave e il giorno, noi organizziamo con un operatore che copre questo tipo di servizio, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro in banchina",
    lead: "Aspettare una nave non è come aspettare un aereo: non c'è una sala arrivi, l'ormeggio può cambiare e l'orologio corre al contrario.",
    steps: [
      {
        title: "Mandate nome della nave e data",
        body: "Qui fanno quello che fa il numero del volo. Con quelli un operatore stabilisce su quale banchina sarete; senza, l'autista tira a indovinare in un porto lungo chilometri.",
      },
      {
        title: "L'autista attende al terminal, non sotto bordo",
        body: "La banchina è area ad accesso controllato. L'autista vi aspetta all'edificio del terminal: è la norma ovunque e sorprende comunque chi si aspetta di essere preso alla passerella.",
      },
      {
        title: "Concordate cosa c'è sul cartello",
        body: "Un cartello con il cognome scritto come ve lo aspettate. In mezzo a una folla che sbarca tutta insieme conta più che in un aeroporto tranquillo.",
      },
      {
        title: "Mettete in conto lo sbarco",
        body: "Far scendere qualche migliaio di persone richiede tempo, e il vostro turno non coincide con l'orario di arrivo della nave. Diteci quello che vi ha comunicato la nave, non l'orario previsto.",
      },
    ],
    note: "Nome della nave e data fanno qui quello che fa un numero di volo in aeroporto: permettono a qualcuno di verificare la realtà invece di affidarsi a un programma.",
  },

  shore: {
    heading: "Una giornata a terra da Palermo",
    lead: "Chi scala qui ha di norma una giornata e una scadenza rigida. Queste sono le mete che ci stanno davvero, e la pagina è più utile se dice anche cosa non ci sta.",
    allAboard: "L'unico orario che conta è quello di rientro a bordo, ed è prima dell'orario di partenza stampato sul biglietto. Indicatecelo: la giornata si costruisce a ritroso da lì e non in avanti dall'arrivo. Se quello che volete vedere non ci sta dentro, preferiamo dirvelo finché siete in tempo a cambiare programma piuttosto che portarvi in un posto da cui dovrete ripartire subito.",
    options: [
      {
        id: "palermo",
        note: "La città: i quartieri antichi, i mercati e i monumenti arabo-normanni da cui prende nome il sito UNESCO. È l'opzione più breve e quella con più margine sull'orologio.",
      },
      {
        id: "cefalu",
        note: "A est lungo la costa, circa 70 km secondo il dato pubblicato. Una giornata vera e non una mezza, ed è quella in cui l'orario di rientro decide di più.",
      },
      {
        id: "sicily",
        note: "La pagina regionale, se state confrontando questo scalo con gli altri dello stesso itinerario.",
      },
    ],
    footnote: "Monreale, il cui duomo appartiene allo stesso sito UNESCO dei monumenti palermitani e del duomo di Cefalù, sta sulla collina sopra la città ed è la mezza giornata più richiesta da questo porto. Per nessuna di queste mete pubblichiamo tempi di percorrenza: le cifre in circolazione non concordano e, contro una scadenza fissa, una cifra sbagliata è peggio di nessuna cifra. Itinerario e margine li conferma l'operatore al preventivo.",
  },

  airports: {
    heading: "Dal porto all'aeroporto",
    lead: "L'altra metà del lavoro qui: chi si imbarca o sbarca con un volo dall'altra parte.",
    items: [
      {
        id: "palermo-airport",
        note: "Il Falcone Borsellino, circa 35 km a ovest-nord-ovest della città. Mandate il volo oltre alla nave: un transfer fra due orari fissi ha bisogno di entrambi gli estremi, e vi diciamo onestamente se l'intervallo è comodo.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Da cosa dipende che una giornata a terra funzioni.",
    items: [
      {
        term: "L'orario di rientro a bordo",
        detail: "Non quello di partenza. È prima, è quello attorno a cui si costruisce la giornata, ed è la cosa più utile che possiate mandarci.",
      },
      {
        term: "Nome della nave e data",
        detail: "Fanno il lavoro di un numero di volo. Il porto è lungo chilometri e l'ormeggio varia: è così che un operatore vi trova.",
      },
      {
        term: "Quanti siete",
        detail: "Le navi producono gruppi. Il veicolo si sceglie sul numero, e un gruppo di nove è un lavoro diverso da uno di quattro.",
      },
      {
        term: "Difficoltà motorie",
        detail: "Ditelo prima se qualcuno ha problemi con gradini o salite. I quartieri antichi di Palermo e la collina di Monreale ne hanno, e cambia quale programma convenga organizzare.",
      },
      {
        term: "Bagagli, se vi imbarcate o sbarcate",
        detail: "Una giornata a terra non ne ha; un transfer di imbarco o sbarco li ha tutti. Contate tutto ciò che non si piega.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dal porto crociere di Palermo",
    items: [
      {
        question: "Dove ci aspetta l'autista?",
        answer: "Al terminal, non sotto bordo: la banchina è ad accesso controllato. Mandate nome della nave e data, così si concordano il terminal e il varco giusti. Il porto di Palermo si estende per chilometri e gestisce traghetti, merci e un cantiere oltre alle crociere: l'ormeggio cambia davvero.",
      },
      {
        question: "Cosa ci sta in una giornata?",
        answer: "La città con comodo, Monreale sulla collina come mezza giornata, oppure Cefalù lungo la costa come giornata intera. Non tutte e tre. Indicateci l'orario di rientro a bordo e vi diciamo cosa ci sta — e lo diciamo chiaramente anche quando quello che avete in mente non ci sta.",
      },
      {
        question: "Perché continuate a chiedere l'orario di rientro a bordo?",
        answer: "Perché è prima dell'orario di partenza stampato sul biglietto, ed è la scadenza da cui si costruisce a ritroso tutta la giornata. Un programma costruito sull'orario di partenza vi fa arrivare alla passerella dopo che è stata chiusa. È l'unica informazione senza la quale non pianifichiamo.",
      },
      {
        question: "Riusciamo ad andare a Cefalù e tornare prima della partenza?",
        answer: "Spesso sì, e dipende interamente dalle vostre ore a terra. Cefalù dista circa 70 km a est di Palermo secondo il dato pubblicato: è una giornata vera, non una scappata. Mandateci l'orario di rientro a bordo e vi diciamo se il margine è comodo, invece di preventivare qualcosa di stretto e sperare.",
      },
      {
        question: "Potete portarci dal porto all'aeroporto?",
        answer: "Sì, ed è una richiesta abituale in entrambi i sensi. L'aeroporto di Palermo sta a circa 35 km a ovest-nord-ovest della città. Mandate il volo e la nave: un transfer fra due orari fissi ha bisogno di entrambi gli estremi, e se la coincidenza è scomoda ve lo diciamo.",
      },
      {
        question: "I dati sui passeggeri sono aggiornati?",
        answer: "No, e preferiamo dirlo. I dati più recenti che abbiamo trovato per questo porto sono del 2018: 1.986.941 passeggeri, di cui 577.934 crocieristi. Riportiamo l'anno insieme al numero invece di far passare per attuale un traffico di sette anni fa.",
      },
      {
        question: "Quanto costa un transfer dal porto crociere?",
        answer: "Non esiste un listino. Una mezza giornata a Monreale e una giornata intera a Cefalù non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete la giornata e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No, e non abbiamo accordi con compagnie di crociera. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci nave, data e orario di rientro a bordo",
    body: "Quei tre risolvono una giornata a terra. Aggiungete quanti siete e qualsiasi cosa riguardi la mobilità, e l'organizzazione e il prezzo tornano indietro per iscritto — e se la giornata che avete descritto non ci sta nelle vostre ore, ve lo diciamo invece di preventivarla lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
