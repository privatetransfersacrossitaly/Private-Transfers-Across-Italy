import type { SicilyAirportPage } from "./types";

/**
 * Aeroporto di Catania (CTA) — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano serve sapere
 * su quale aerostazione atterra, cosa si può chiedere davvero e quando il
 * taxi basta. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 55 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Non compaiono: lo stato attuale della
 * linea Messina-Siracusa, il gestore di un eventuale bus aeroportuale (il
 * nome "Alibus" non è sostenuto da nessuna fonte letta) e i tempi di
 * percorrenza. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const cataniaAirportIt: SicilyAirportPage = {
  meta: {
    // 55 caratteri.
    title: "Transfer aeroporto di Catania (CTA) – Prenota l'autista",
    description:
      "Transfer privati da Catania Fontanarossa, a 4,3 km dalla città: le tre aerostazioni, l'incontro con l'autista e le tratte per Taormina e Siracusa.",
  },

  hero: {
    eyebrow: "Sicilia · Aeroporto di Catania",
    h1: "Transfer privati dall'aeroporto di Catania",
    lead: "Fontanarossa è lo scalo più trafficato della Sicilia e sta a circa 4,3 km dalla città che serve: pochissimo per un aeroporto che muove oltre dodici milioni di passeggeri l'anno. La corsa verso Catania è la parte facile. Questo scalo serve soprattutto per tutto ciò che viene dopo: Taormina risalendo la costa, Siracusa scendendola, l'Etna alle spalle.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va",
    facts: [
      { label: "Codici", value: "CTA · LICC" },
      { label: "Noto anche come", value: "Vincenzo Bellini" },
      { label: "Da Catania", value: "Circa 4,3 km, a sud-ovest" },
      { label: "Passeggeri", value: "12.346.530 nel 2024" },
    ],
  },

  identity: {
    heading: "Lo scalo",
    paragraphs: [
      "Catania-Fontanarossa, noto anche come aeroporto Vincenzo Bellini, è uno scalo internazionale a 2,3 miglia nautiche — circa 4,3 km — a sud-ovest di Catania. È gestito da SAC e nel 2024 ha movimentato 12.346.530 passeggeri, in crescita del 15,0% sull'anno precedente, con 82.530 movimenti. È il più trafficato dell'isola con ampio margine.",
      "Ha più di un'aerostazione, ed è il dettaglio che più conviene sapere prima di partire: i Terminal B e C sono stati aperti nel 2018 accanto al Terminal A originario, e il Terminal C è riservato a easyJet. Su quale si atterra cambia dove deve aspettarvi qualcuno. È base operativa di Ryanair e Wizz Air.",
      "Organizziamo questi transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi ci date il volo e la destinazione, noi organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro con l'autista al CTA",
    lead: "Uno scalo grande con più aerostazioni: qui il punto d'incontro è una domanda vera e non una formalità.",
    steps: [
      {
        title: "Dite su quale terminal",
        body: "Oppure dateci il numero del volo e lo ricaviamo noi. Con tre aerostazioni, una delle quali riservata a una sola compagnia, dare per scontato è il modo in cui si finisce ad aspettare in edifici diversi.",
      },
      {
        title: "Date comunque il numero del volo",
        body: "Non l'orario. È quello che permette all'autista di vedere un ritardo o un dirottamento mentre accade invece di subirlo, e in uno scalo così affollato la differenza si nota.",
      },
      {
        title: "Concordate cosa c'è sul cartello",
        body: "L'autista attende in arrivi con il cartello. Un cognome scritto diversamente da come ve lo aspettavate è il motivo più comune per cui due persone non si trovano in una sala affollata.",
      },
      {
        title: "Dite con precisione dove andate",
        body: "Catania, la costa a nord o quella a sud sono tre viaggi diversi dallo stesso aeroporto. Per Taormina in particolare l'indirizzo conta doppio, perché molte strutture vendute come Taormina stanno al livello del mare sotto il paese.",
      },
    ],
    note: "Aerostazione e numero del volo insieme eliminano quasi tutti i modi in cui un arrivo qui può andare storto.",
  },

  routes: {
    heading: "Dove si va dall'aeroporto di Catania",
    lead: "Un aeroporto, tre direzioni: la città accanto, la costa a nord, il sud-est. Chi atterra qui, in maggioranza, non si ferma a Catania.",
    city: {
      id: "catania",
      note: "La città, circa 4,3 km a nord-est. È il tragitto più breve della pagina e una delle poche tratte siciliane in cui il taxi al posteggio è un'alternativa ragionevole: la pagina della città lo dice apertamente.",
    },
    items: [
      {
        id: "taormina",
        note: "A nord risalendo la costa: il tragitto più richiesto da questo scalo. Il paese sta a circa 250 m sul mare con il centro a traffico limitato, quindi l'arrivo è più complicato della strada.",
      },
      {
        id: "syracuse",
        note: "A sud, verso Ortigia, l'isola che è il centro storico di Siracusa. Tragitto più lungo, e il fatto che il vostro indirizzo sia o meno sull'isola decide come finisce.",
      },
      {
        id: "agrigento",
        note: "A ovest attraverso l'isola, per la Valle dei Templi. Da qui è lunga: la pagina di Agrigento spiega quando conviene atterrare a Palermo invece.",
      },
      {
        id: "sicily",
        note: "La pagina regionale: come si tiene insieme l'isola e quale scalo conviene per quale angolo.",
      },
    ],
    footnote: "Per nessuna di queste pubblichiamo tempi di percorrenza né distanze stradali, oltre ai 4,3 km che lo scalo stesso indica per Catania. Le cifre in circolazione vengono da pianificatori che non concordano fra loro, e la costiera ad agosto non è la stessa strada di marzo. L'itinerario lo conferma l'operatore al preventivo.",
  },

  ports: {
    heading: "Da e per i porti crociere",
    lead: "Due dei tre scali crocieristici siciliani si raggiungono da qui, ed entrambi sono richieste abituali in entrambi i sensi.",
    items: [
      {
        id: "catania-cruise-port",
        note: "Porto cittadino, a pochi passi dal centro storico: il collegamento aeroporto-banchina è breve. Soprattutto chi si imbarca o sbarca con un volo dall'altra parte.",
      },
      {
        id: "messina-cruise-port",
        note: "A nord lungo la costa, oltre Taormina. Più lungo, e di norma per chi si imbarca più che per chi visita: Messina è quasi sempre uno scalo in giornata.",
      },
    ],
  },

  alternatives: {
    heading: "Quando il transfer non serve",
    lead: "Per uno di questi tragitti la risposta onesta è che potreste non averne bisogno, e la pagina è più utile se dice quale.",
    modes: [
      {
        mode: "Taxi verso Catania",
        suits: "La città. A circa 4,3 km c'è il posteggio davanti agli arrivi e il tragitto è abbastanza breve perché non possa andare granché storto.",
        against: "Nessun cartello, nessuno che segua il volo e nessun prezzo concordato per qualcosa di più lungo. Va bene per il centro, non è la risposta per la costa.",
      },
      {
        mode: "Treno",
        suits: "Il proseguimento in treno. In aeroporto c'è la fermata Catania Aeroporto-Fontanarossa, inaugurata da RFI nel marzo 2021.",
        against: "Non vi diremo che la linea è in funzione. I collegamenti su questa costa hanno subito interruzioni negli ultimi anni e qualunque cosa scrivessimo sullo stato attuale sarebbe probabilmente superata il mese prossimo. Verificate presso il gestore.",
      },
      {
        mode: "Auto a noleggio",
        suits: "Girare l'est e il sud-est per più giorni, soprattutto se si cambia base più di una volta.",
        against: "A Taormina un'auto non entra quasi, Ortigia è a traffico limitato e parcheggiare nel centro di Catania è complicato. L'auto serve fra un posto e l'altro, non nei posti.",
      },
      {
        mode: "Transfer privato",
        suits: "Taormina, Siracusa, qualunque punto della costa a nord o a sud, un arrivo serale, un gruppo, bambini, o una nave da prendere.",
        against: "Va organizzato prima, e per il breve salto verso Catania in pieno giorno è più di quanto serva.",
      },
    ],
    verdict: "In pratica: per Catania prendete il taxi e non pensateci più. Per uscire da Catania — a nord, a sud o su per la montagna — conviene organizzare, perché le distanze sono vere e gli arrivi non sono semplici.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Da cosa dipende che un arrivo qui fili liscio.",
    items: [
      {
        term: "Quale aerostazione",
        detail: "Sono tre e una è riservata a una sola compagnia. Ditecelo, oppure mandate il numero del volo e lo stabiliamo noi.",
      },
      {
        term: "Il numero del volo",
        detail: "Non l'orario. È l'unica cosa che permette a un autista di reagire a un ritardo invece di restarci dentro.",
      },
      {
        term: "Paese o riva, per Taormina",
        detail: "Moltissime strutture vendute come Taormina stanno al livello del mare sotto il paese. Mandate l'indirizzo completo, così l'autista va alla quota giusta.",
      },
      {
        term: "Isola o terraferma, per Siracusa",
        detail: "Ortigia è un'isola ad accesso limitato. Da che parte dell'acqua state cambia il punto di fermata e se ci sia da camminare.",
      },
      {
        term: "Le condizioni dell'Etna",
        detail: "Se il programma tocca la montagna, cosa sia possibile lo decidono le condizioni del giorno e non la prenotazione. Diciamo cosa può fare un operatore, non promettiamo un panorama.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dall'aeroporto di Catania",
    items: [
      {
        question: "Quanto dista l'aeroporto dalla città?",
        answer: "Circa 4,3 km a sud-ovest, secondo il dato pubblicato dallo scalo: 2,3 miglia nautiche. È pochissimo per un aeroporto che muove oltre dodici milioni di passeggeri l'anno, ed è il motivo per cui vi diciamo che il taxi al posteggio è un modo del tutto ragionevole per arrivare in centro.",
      },
      {
        question: "Su quale aerostazione atterriamo?",
        answer: "Ce n'è più di una. I Terminal B e C sono stati aperti nel 2018 accanto al Terminal A originario, e il C è riservato a easyJet. Mandateci il numero del volo e stabiliamo quale vale: con tre aerostazioni il punto d'incontro è una questione concreta.",
      },
      {
        question: "Potete portarci direttamente a Taormina?",
        answer: "Sì, è il tragitto più richiesto da questo scalo. Da sapere prima: Taormina sta a circa 250 m sul mare con il centro a traffico limitato, quindi se un veicolo arrivi al vostro portone dipende dall'albergo più che dall'autista. La pagina di Taormina spiega cosa chiedergli.",
      },
      {
        question: "Potete portarci a Siracusa?",
        answer: "Sì, è l'altra direzione principale da qui. A decidere l'arrivo è se il vostro indirizzo sta in Ortigia, l'isola che è il centro storico, oppure in terraferma: sono due finali molto diversi dello stesso viaggio. Indicatelo nella richiesta.",
      },
      {
        question: "C'è il treno dall'aeroporto?",
        answer: "C'è la fermata: Catania Aeroporto-Fontanarossa, inaugurata da RFI nel marzo 2021. Non vi diremo cosa ci passa adesso. I collegamenti su questa costa hanno subito interruzioni negli ultimi anni e qualunque cosa pubblicassimo sullo stato attuale invecchierebbe in fretta: verificate presso il gestore.",
      },
      {
        question: "Cosa succede se il volo è in ritardo?",
        answer: "L'autista lo vede, a condizione che abbiamo il numero del volo. I ritardi sono ordinari e si mettono in conto. A creare problemi è semmai un transfer fissato su un orario senza alcun volo associato, perché a quel punto nessuno sa se aspettare.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Catania?",
        answer: "Non esiste un listino. Una corsa di quattro chilometri verso il centro e un viaggio fino a Siracusa non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci numero del volo e aerostazione",
    body: "In uno scalo che ne ha tre, quei due risolvono quasi tutto. Aggiungete l'indirizzo di destinazione e quanti siete, e l'organizzazione e il prezzo tornano indietro per iscritto — prima di qualsiasi conferma e prima di qualsiasi addebito.",
    cta: "Richiedi un preventivo",
  },
};
