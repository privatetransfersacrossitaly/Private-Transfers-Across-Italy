import type { OstuniPage } from "./types";

/**
 * Ostuni — italiano.
 *
 * Scritto in italiano, non tradotto. La differenza di impostazione è netta:
 * in inglese bisogna spiegare cos'è una masseria e perché una strada bianca
 * di sera sia un problema; in italiano no. Al suo posto la pagina italiana
 * entra più nel merito di come si organizza concretamente — cosa mandare,
 * chi esegue il servizio, come funziona un matrimonio in masseria — e dedica
 * più righe al coordinamento degli ospiti, che è la richiesta che arriva più
 * spesso in italiano.
 *
 * Fonti identiche alla versione inglese: Città Bianca, mura, quattro porte
 * medievali, 207 m di altitudine, "circa 8 km dalla costa", popolazione,
 * provincia di Brindisi, olio e vino, le masserie come aziende agricole
 * fortificate — tutto dalla voce enciclopedica su Ostuni. I 32-37 km
 * dall'aeroporto di Brindisi vengono dalla ricerca della Fase 2.
 *
 * Non si afferma l'esistenza di una ZTL con perimetro e orari: nessuna fonte
 * la documenta in forma pubblicabile. Si descrive il dato verificato, cioè
 * una cittadella in cima a un colle, dentro le mura.
 *
 * Nessun prezzo, nessuna flotta di proprietà, nessuna testimonianza, nessuna
 * garanzia, nessun accordo con location.
 */

export const ostuniIt: OstuniPage = {
  meta: {
    title: "Transfer per Ostuni e le masserie",
    description:
      "Transfer privati per Ostuni e le masserie dei dintorni: aeroporti di Brindisi e Bari, indirizzi di campagna, coordinamento ospiti per matrimoni. Preventivo scritto.",
  },

  hero: {
    eyebrow: "Puglia · Ostuni",
    h1: "Transfer a Ostuni, fra paese e campagna",
    lead: "Ostuni è un paese bianco arroccato su un colle a circa otto chilometri dal mare, e quasi nessuno di quelli che ci vengono alloggia davvero dentro. Alloggiano in una masseria giù negli uliveti — strada bianca, cancello, nessuna illuminazione. È tutto qui il motivo di questa pagina.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Arrivi in masseria",
    facts: [
      { label: "Conosciuta come", value: "La Città Bianca" },
      { label: "Altitudine", value: "207 m, circa 8 km dalla costa" },
      { label: "Provincia", value: "Brindisi (BR)" },
      { label: "Aeroporto più vicino", value: "Brindisi (BDS), circa 32-37 km" },
    ],
  },

  intro: {
    heading: "Perché a Ostuni il transfer è un problema vero",
    paragraphs: [
      "Il paese è detto Città Bianca per le mura bianche e l'architettura imbiancata, e il quartiere antico è una cittadella in cima a un colle, ancora racchiusa dalle mura — che un tempo avevano quattro porte. È bellissimo ed è quasi interamente in verticale. Intorno, in una campagna che produce olio extravergine e vino di qualità, stanno le masserie: aziende agricole fortificate, molte oggi trasformate in strutture ricettive.",
      "Questi due dati bastano a descrivere l'arrivo. Se alloggiate nella cittadella, l'ultimo tratto è ripido e stretto. Se alloggiate in masseria — ed è il caso della maggior parte — l'ultimo tratto è una strada di campagna senza illuminazione, con un cancello facile da superare senza accorgersene.",
      "Organizziamo questi trasferimenti con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi dite dove siete diretti, noi organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
    ],
  },

  twoWorlds: {
    heading: "Due Ostuni",
    lead: "Quasi ogni domanda su un transfer qui si riduce a quale dei due posti sia la vostra destinazione. Distano pochi chilometri e sono due arrivi completamente diversi.",
    town: {
      heading: "La cittadella",
      body: "Il centro bianco sul colle, dentro le mura. Ripido, a tratti a gradoni, costruito molto prima delle automobili. Gli alberghi qui sono piccoli e i portoni danno sui vicoli.",
      points: [
        "Si scarica spesso a una porta o in una piazza, non davanti all'ingresso",
        "Conviene chiedere alla struttura dove si fermano le auto: lo sanno tutte",
        "I bagagli su un vicolo a gradoni sono la cosa da prevedere",
        "La camminata è di norma breve: è un paese piccolo",
      ],
    },
    country: {
      heading: "Le masserie",
      body: "Gli uliveti intorno e sotto il paese. Antiche aziende agricole recuperate, spesso a diversi chilometri, raggiunte da strade non sempre denominate e cancelli non sempre segnalati.",
      points: [
        "La posizione sulla mappa conta più del nome del comune",
        "Di notte è tutto buio e il segnale telefonico può mancare",
        "Molte masserie hanno indicazioni scritte per gli autisti: inoltratele",
        "Un autista che c'è già stato vale più di qualsiasi mappa",
      ],
    },
  },

  masserie: {
    heading: "Arrivi in masseria",
    lead: "È l'argomento più solido a favore di un'auto concordata in tutta la Puglia, e conviene esporlo per quello che è invece di venderlo.",
    paragraphs: [
      "Una masseria è un'azienda agricola fortificata, e quelle diventate strutture ricettive hanno conservato ciò che le rendeva buone aziende: spazio, isolamento e un lungo viale d'accesso. San Domenico, una delle più note, appartenne ai Cavalieri di Malta. Quella storia spiega esattamente perché stanno dove stanno: lontano dalla strada, dietro la propria terra.",
      "Di giorno è il senso stesso della vacanza. Il problema è che i voli su Brindisi sono spesso serali, e la somma di strada buia, svolta non segnalata, auto a noleggio e telefono senza campo è il modo più frequente in cui un viaggio in Puglia comincia male.",
      "Niente di tutto questo significa che dobbiate per forza prenotare un transfer. Significa che, se arrivate dopo il tramonto a un indirizzo di campagna che non avete mai visto, qualcuno dovrebbe conoscere la strada in anticipo — e gli operatori che lavorano su Brindisi conoscono la maggior parte delle masserie della zona.",
    ],
    problems: [
      {
        title: "Il cancello si supera senza vederlo",
        body: "Molti ingressi sono un'interruzione in un muretto a secco con un cartello piccolo, o senza cartello. Da un'auto in movimento, di notte, in entrambi i sensi di marcia, non si distingue.",
      },
      {
        title: "La strada spesso non ha nome",
        body: "Il navigatore vi porta in zona. Sono le ultime centinaia di metri la parte che nessuna mappa risolve davvero.",
      },
      {
        title: "L'indirizzo non è l'ingresso",
        body: "L'indirizzo registrato e il cancello che usano gli ospiti sono spesso due punti diversi, talvolta su strade diverse.",
      },
      {
        title: "Non c'è illuminazione",
        body: "Qui è campagna di ulivi, non periferia. Dopo il tramonto non c'è luce con cui leggere un cartello.",
      },
    ],
    send: {
      heading: "Da allegare alla richiesta",
      items: [
        "Nome completo della masseria e le sue indicazioni di arrivo: quasi tutte ne hanno una versione per autisti",
        "Posizione sulla mappa o coordinate, se la struttura le fornisce",
        "Il comune più vicino e la strada su cui si apre l'ingresso",
        "Numero del volo, numero di passeggeri e di bagagli",
        "Se serve un seggiolino e l'età dei bambini",
        "A che ora contate di arrivare alla struttura, non solo in aeroporto",
      ],
    },
  },

  airports: {
    heading: "Quale aeroporto per Ostuni",
    lead: "Ostuni è uno dei pochi posti in Puglia dove la domanda è reale e non retorica, perché sta vicino alla linea che divide i due scali della regione.",
    options: [
      {
        airport: "Brindisi (BDS)",
        distance: "Circa 32-37 km",
        body: "Il più vicino e l'arrivo abituale. Calcolate una trentina di minuti per il paese; una masseria fuori può richiedere qualcosa in più o in meno a seconda del lato su cui si trova.",
      },
      {
        airport: "Bari (BRI)",
        distance: "Più lontano, verso nord",
        body: "Tragitto più lungo e del tutto praticabile. Spesso è la scelta giusta se i voli convengono, o se Ostuni è l'estremità sud di un viaggio cominciato nella zona dei trulli.",
      },
    ],
    note: "Ostuni sta vicino alla linea di confine fra i due aeroporti e funziona comodamente da entrambi: è una situazione insolita, perché per quasi tutte le località pugliesi la risposta è univoca. Se i voli vi portano su Bari, prendeteli: è un tragitto più lungo, non un problema.",
  },

  weddings: {
    heading: "Trasporti per matrimoni intorno a Ostuni",
    lead: "Moltissimi matrimoni in Puglia si celebrano in una masseria vicino a Ostuni, e il trasporto per un matrimonio è un lavoro di coordinamento più che una prenotazione.",
    paragraphs: [
      "La location è in campagna: non ci si arriva a piedi e fuori non c'è un posteggio taxi. Gli ospiti arrivano distribuiti su più giorni, con voli diversi, magari su scali diversi, e alloggiano in posti diversi — qualcuno in struttura, qualcuno in paese, qualcuno in altre strutture vicine. Il giorno della cerimonia devono però presentarsi tutti allo stesso cancello nell'arco di venti minuti, e a notte fonda devono ripartire da un posto dove non passa nulla.",
      "È per questo che preferiamo quotare l'insieme come un lavoro unico. Trattato come dodici prenotazioni separate costa di solito di più e si coordina molto peggio.",
    ],
    phases: [
      {
        title: "Prima — gli arrivi",
        body: "Prelievi degli ospiti da Brindisi e da Bari distribuiti su due o tre giorni, ciascuno agganciato al proprio numero di volo e non a un orario stimato.",
      },
      {
        title: "Il giorno — verso la location",
        body: "Trasferimenti coordinati dalle varie strutture in cui il gruppo è distribuito, con il numero di vetture che i numeri richiedono, per arrivare insieme e non alla spicciolata.",
      },
      {
        title: "Dopo — il rientro notturno",
        body: "La parte che più spesso resta fuori dalla pianificazione. Da una location di campagna all'una di notte non si torna in nessun altro modo, e il rientro va organizzato prima del giorno stesso.",
      },
      {
        title: "Le partenze",
        body: "Ospiti che ripartono su più giorni, di nuovo ciascuno sul proprio volo. Conviene organizzarle insieme agli arrivi.",
      },
    ],
    limits: "Ci occupiamo di trasporto e di nient'altro. Non abbiamo accordi con location specifiche, non facciamo da wedding planner e non sosteniamo di farlo. Se la vostra location ha già un'organizzazione di trasporto che preferisce, usatela: ve lo diciamo invece di metterci in concorrenza.",
  },

  luxury: {
    heading: "Sulla fascia alta del mercato",
    paragraphs: [
      "Intorno a Ostuni c'è una concentrazione di strutture di campagna di fascia alta, e chi ci arriva si aspetta ragionevolmente che il trasporto a terra sia all'altezza. In concreto questo significa qualcosa di più ristretto di quanto suggerisca la comunicazione abituale: un veicolo adatto al gruppo e ai bagagli, un autista che conosce la struttura, e un arrivo che avviene senza tre telefonate.",
      "Quello che non faremo è descrivere una flotta che non possediamo o promettere una classe di veicolo prima che un operatore l'abbia confermata. Indicateci numero di persone, bagagli e tutto ciò che conta davvero — un seggiolino, una carrozzina, un cane, uno strumento musicale — e il preventivo dirà esattamente cosa viene fornito. Tutto ciò che vi si legge sarà già stato confermato.",
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da sistemare prima di partire.",
    items: [
      {
        term: "Indicazioni di arrivo",
        detail: "La cosa più utile che possiate mandare per un viaggio su Ostuni. Chiedete alla struttura la versione che dà agli autisti e inoltratecela così com'è.",
      },
      {
        term: "Arrivi serali",
        detail: "L'orario estivo di Brindisi è pieno di voli a tarda ora, e un indirizzo di campagna dopo il buio è esattamente il caso per cui esiste un transfer. Di notte la disponibilità è più ridotta: muoversi per tempo aiuta.",
      },
      {
        term: "La cittadella",
        detail: "Se alloggiate dentro il centro antico e non fuori, mettete in conto uno scarico a una porta o in piazza e un ultimo tratto a piedi, magari su gradini.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore e in alta stagione sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Per una masseria la scelta del veicolo pesa più del solito, perché non esiste un secondo viaggio.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer a Ostuni",
    items: [
      {
        question: "Venite a prenderci in una masseria in campagna?",
        answer: "Sì, e intorno a Ostuni è la richiesta più frequente che riceviamo. Mandate il nome completo della struttura e le indicazioni di arrivo che vi ha fornito: quasi tutte le masserie ne tengono una versione scritta per gli autisti, proprio perché le stradine sono difficili da trovare. Inoltrarcela è la cosa più utile che possiate fare.",
      },
      {
        question: "Quale aeroporto conviene per Ostuni?",
        answer: "Brindisi è più vicino, intorno ai 32-37 km, ed è l'arrivo abituale. Ostuni sta però vicino alla linea che separa i due scali, quindi anche Bari funziona bene: è soltanto un tragitto più lungo. Se i voli vi portano su Bari, prendeteli.",
      },
      {
        question: "Quanto dista Ostuni dal mare?",
        answer: "Circa 8 km. Il paese è su un colle nell'entroterra e non sulla costa, cosa che sorprende chi l'ha visto solo in fotografia. Se alloggiate in una struttura sul mare e non in paese o nei pressi, segnalatelo: cambia il tragitto.",
      },
      {
        question: "L'auto arriva al mio albergo in centro storico?",
        answer: "Arriva a un punto vicino. Il quartiere antico è una cittadella in cima al colle, ancora dentro le mura, costruita molto prima delle automobili: lo scarico pratico è quindi spesso a una porta o in una piazza, con una breve camminata — a volte su gradini — fino all'ingresso. È un paese piccolo e il tratto è raramente lungo, ma conviene saperlo prima di arrivare con le valigie.",
      },
      {
        question: "Organizzate i trasporti per un matrimonio in masseria?",
        answer: "Sì, ed è buona parte di quello che facciamo intorno a Ostuni. La forma tipica prevede gli arrivi degli ospiti su più giorni, i trasferimenti coordinati verso la location il giorno della cerimonia e i rientri a tarda notte — quest'ultimo è il pezzo che più spesso ci si dimentica. Indicateci numero di ospiti, punti di raccolta e orari e lo quotiamo come un lavoro unico. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
      },
      {
        question: "Serve l'auto a noleggio se alloggiamo in masseria?",
        answer: "Dipende dal soggiorno. Se state in struttura quasi sempre con due o tre uscite, i singoli transfer risultano di solito più semplici, perché parcheggiare nei centri storici della zona è davvero complicato. Se invece volete essere ogni giorno in un posto diverso, il noleggio può convenire: se è questa la risposta onesta, ve la diciamo.",
      },
      {
        question: "Quanto costa un transfer per Ostuni?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data — e una masseria a diversi chilometri non è lo stesso tragitto del paese. Descrivete dove siete diretti e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci le indicazioni della struttura",
    body: "Nome della masseria e le sue indicazioni di arrivo, numero del volo e quanti siete. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se quello che avete descritto non funziona, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
