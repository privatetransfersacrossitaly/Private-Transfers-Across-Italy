import type { SicilyPortPage } from "./types";

/**
 * Porto crociere di Messina — italiano.
 *
 * Scritto in italiano, non tradotto. Qui il lettore italiano vuole sapere
 * una cosa sopra le altre: quanto margine c'è davvero fra lo sbarco e il
 * rientro a bordo. La pagina è costruita su quello.
 *
 * Messina non ha una pagina di destinazione in questo cluster: le sette
 * destinazioni sono state scelte per dove si va davvero, e Messina è un
 * posto da cui si passa. La pagina linka quindi Taormina e Catania.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 53 caratteri, senza brand, con call to action.
 *
 * ── Fonti e loro limiti ───────────────────────────────────────────────────
 * Identiche alla versione inglese. I dati sui crocieristi sono del 2006 e
 * del 2009 e compaiono con i loro anni; non ripetiamo come affermazione
 * attuale la definizione «uno dei più grandi e importanti», perché gli
 * unici numeri che la sostengono hanno sedici anni. Non si nomina nessuna
 * Autorità di Sistema Portuale: la riforma del 2016 colloca i porti dello
 * Stretto sotto un'autorità diversa da quelle siciliane, le fonti
 * successive divergono e il decreto attuale non è stato letto. La voce non
 * dice nulla sull'attraversamento dello Stretto né sui traghetti
 * ferroviari, e nemmeno questa pagina.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessun accordo con compagnie di crociera.
 */

export const messinaPortIt: SicilyPortPage = {
  meta: {
    // 53 caratteri.
    title: "Transfer porto crociere di Messina – Prenota la corsa",
    description:
      "Transfer privati dalle banchine crociere di Messina. Quasi tutti sbarcano per andare a Taormina o sull'Etna e rientrare prima dell'orario di bordo.",
  },

  hero: {
    eyebrow: "Sicilia · Porto crociere di Messina",
    h1: "Transfer privati dal porto crociere di Messina",
    lead: "Messina è uno scalo in giornata, non una destinazione. Il porto si apre sulla sponda occidentale dello Stretto, e quasi chiunque scenda da una nave qui è diretto altrove — a Taormina sulla sua terrazza, o sull'Etna dietro la costa — e rientra nel pomeriggio. È la pagina del cluster più governata da una scadenza.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Una giornata a terra",
    facts: [
      { label: "Porto", value: "Porto di Messina" },
      { label: "Posizione", value: "Sponda occidentale dello Stretto" },
      { label: "Crocieristi", value: "405.000 nel 2009" },
      { label: "Giornata tipica", value: "Taormina o l'Etna" },
    ],
  },

  identity: {
    heading: "Un porto da cui si passa",
    paragraphs: [
      "Il Porto di Messina si apre sulla sponda occidentale dello Stretto ed è collegato per ferrovia attraverso le stazioni di Messina Centrale e Messina Marittima. La sua voce enciclopedica lo descrive come un importante scalo crocieristico del Mediterraneo, con un traffico passato da 260.000 passeggeri nel 2006 a 405.000 nel 2009: sono i dati più recenti pubblicati. Numeri di sedici anni fa, che riportiamo con i loro anni e non come fotografia dell'oggi.",
      "Quello che conta per un transfer non è la dimensione del porto ma la forma di uno scalo qui. È una tappa di un itinerario e non un posto in cui ci si ferma, e la stragrande maggioranza di chi sbarca ha una sola giornata con una scadenza fissa in fondo. Ogni scelta di questa pagina discende da lì.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli, non impieghiamo direttamente gli autisti e non abbiamo accordi con compagnie di crociera. Voi ci dite la nave e il giorno, noi organizziamo con un operatore che copre questo tipo di servizio, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro in banchina",
    lead: "La meccanica è quella di ogni porto. Cambia quanto poco margine le resta intorno, quando l'intera giornata è un andata e ritorno.",
    steps: [
      {
        title: "Mandate nome della nave e data",
        body: "Fanno il lavoro di un numero di volo: permettono a un operatore di confermare cosa sta succedendo davvero invece di affidarsi a un programma stampato.",
      },
      {
        title: "L'autista attende al terminal",
        body: "Non sotto bordo: la banchina è ad accesso controllato. Vale ovunque, e conviene saperlo prima di cercare qualcuno alla passerella.",
      },
      {
        title: "Dite dove va la giornata",
        body: "Taormina e l'Etna sono viaggi diversi con margini diversi. Qui la prenotazione è la destinazione, perché il ritorno è metà del lavoro.",
      },
      {
        title: "Date per primo l'orario di rientro a bordo",
        body: "Non per ultimo. In uno scalo in giornata non è un dettaglio da confermare dopo: è il numero da cui si costruisce l'intera organizzazione.",
      },
    ],
    note: "In un porto in cui quasi ogni servizio è un andata e ritorno contro una scadenza, l'orario di rientro a bordo conta più dell'orario di ritiro. È l'unico punto fisso della giornata.",
  },

  shore: {
    heading: "Una giornata a terra da Messina",
    lead: "Due tragitti coprono quasi tutto ciò che ci viene chiesto qui, ed entrambi sono andata e ritorno con uno stop netto alla fine.",
    allAboard: "L'orario di rientro a bordo è prima di quello di partenza stampato sul biglietto, e in uno scalo in giornata governa tutto: quando si parte, quanto tempo avete a destinazione e quando l'auto gira. Indicatelo nella richiesta e non dopo. Se la giornata che volete non ci sta dentro con un margine sensato ve lo diciamo: una gita che vi fa rientrare tardi non è un servizio che vogliamo avervi venduto.",
    options: [
      {
        id: "taormina",
        note: "Il motivo abituale per cui si sbarca qui. Il paese sta a circa 250 m sul mare con il centro storico a traffico limitato, quindi l'arrivo richiede più tempo di quanto suggerisca la strada — e conta doppio quando il ritorno è già fissato dalla nave.",
      },
      {
        id: "catania",
        note: "A sud lungo la costa, per il centro barocco o come punto di partenza per l'Etna. Più lontana di Taormina e giornata più piena.",
      },
      {
        id: "catania-cruise-port",
        note: "Se il vostro itinerario scala entrambi, vale il confronto: quello di Catania è un porto centrale con più ore utilizzabili, e potrebbe essere lo scalo giusto su cui spendere il tragitto più lungo.",
      },
      {
        id: "sicily",
        note: "La pagina regionale: come si tiene insieme l'isola e cos'altro è a portata.",
      },
    ],
    footnote: "L'Etna è l'altra richiesta frequente ed è quella che dipende meno dall'organizzazione: i tragitti raggiungono le aree visitabili sulla montagna, e cosa sia possibile lo decidono le condizioni del giorno. Per nessuna di queste mete pubblichiamo tempi di percorrenza: contro una scadenza fissa una cifra sbagliata è peggio di nessuna, e itinerario e margine li conferma l'operatore al preventivo.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Breve, e tutto spostato sull'orologio.",
    items: [
      {
        term: "L'orario di rientro a bordo",
        detail: "Per primo, non per ultimo. È l'unico punto fisso di uno scalo in giornata e tutto il resto si organizza attorno.",
      },
      {
        term: "Una meta sola",
        detail: "Taormina, oppure l'Etna, oppure Catania. Combinarne due in uno scalo in giornata da qui è raramente realistico, e ve lo diciamo quando non lo è.",
      },
      {
        term: "Nome della nave e data",
        detail: "Perché un operatore lavori su quello che accade e non su un programma.",
      },
      {
        term: "Il centro limitato di Taormina",
        detail: "Se la giornata è Taormina, la zona a traffico limitato decide dove si ferma la vettura e quanto si cammina. Va messo nel conto delle ore che avete.",
      },
      {
        term: "Difficoltà motorie",
        detail: "Ditelo prima se qualcuno ha problemi con salite o gradini. Taormina ha entrambe, e in una giornata a tempo cambia cosa valga la pena tentare.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dal porto crociere di Messina",
    items: [
      {
        question: "Scaliamo a Messina: riusciamo a vedere Taormina?",
        answer: "Sì, è il motivo principale per cui si sbarca qui. Indicateci nome della nave, data, orario di sbarco e orario di rientro a bordo. La giornata si costruisce a ritroso dal rientro, e vi diciamo onestamente se il margine è comodo o tirato.",
      },
      {
        question: "Perché questa pagina parla continuamente della scadenza?",
        answer: "Perché Messina è uno scalo in giornata e non una destinazione. Quasi ogni servizio da questa banchina è un andata e ritorno con uno stop fisso alla fine, quindi l'orario di rientro a bordo non è un dettaglio da confermare dopo: è il numero da cui si costruisce tutta l'organizzazione.",
      },
      {
        question: "Si possono fare Taormina e l'Etna nello stesso giorno?",
        answer: "Da qui, raramente. Sono entrambi viaggi veri con ritorni veri, e uno scalo in giornata di norma non li contiene entrambi con un margine sicuro. Mandateci le vostre ore a terra e vi diamo una risposta netta sul vostro scalo invece di una regola generale.",
      },
      {
        question: "Dove ci aspetta l'autista?",
        answer: "Al terminal e non sotto bordo, perché la banchina è ad accesso controllato. Mandate nome della nave e data, così il punto d'incontro si concorda su quello che succede davvero quella mattina e non su un programma stampato.",
      },
      {
        question: "C'è una pagina su Messina in questo sito?",
        answer: "No, ed è una scelta e non una dimenticanza. Le sette destinazioni siciliane che trattiamo sono state scelte per dove si va davvero, e Messina è un posto da cui la maggior parte dei visitatori passa. Questa pagina del porto linka Taormina e Catania, che è dove le giornate a terra da qui vanno effettivamente.",
      },
      {
        question: "Quanto è trafficato questo porto?",
        answer: "I dati più recenti che abbiamo trovato sono vecchi: il traffico crocieristico è passato da 260.000 passeggeri nel 2006 a 405.000 nel 2009, e nella fonte non compare nulla di più recente. Riportiamo gli anni insieme ai numeri invece di far passare per attuale un traffico di sedici anni fa.",
      },
      {
        question: "Quanto costa un transfer dal porto crociere?",
        answer: "Non esiste un listino. Un andata e ritorno a Taormina e una giornata verso l'Etna non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete la giornata e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No, e non abbiamo accordi con compagnie di crociera. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Dateci per primo l'orario di rientro a bordo",
    body: "In uno scalo in giornata è l'unico punto fisso che esiste. Mandatelo con nome della nave, data, dove vorreste andare e quanti siete. L'organizzazione e il prezzo tornano indietro per iscritto — e se la giornata non ci sta con un margine sensato ve lo diciamo invece di vendervela.",
    cta: "Richiedi un preventivo",
  },
};
