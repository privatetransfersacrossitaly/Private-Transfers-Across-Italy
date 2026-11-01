import type { BariPage } from "./types";

/**
 * Bari — italiano.
 *
 * Scritto in italiano, non tradotto dall'inglese. Chi cerca in italiano
 * arriva con domande diverse: conosce già la geografia, sa cos'è una
 * masseria e non ha bisogno che gli si spieghi dove sia la Valle d'Itria.
 * Ha però più spesso bisogno di sapere come funziona il trasferimento in
 * sé — chi esegue il servizio, chi si paga, cosa succede se il volo ritarda.
 * La pagina italiana dedica quindi più spazio a quello e meno
 * all'orientamento geografico.
 *
 * Le fonti sono le stesse della versione inglese: codici e distanze
 * dell'aeroporto dalla voce enciclopedica, nomi dei terminal e linee AMTAB
 * dalla voce sul Porto di Bari, distanze stradali da pianificatori di
 * percorso che non concordano fra loro — e che qui sono quindi sempre
 * indicate come approssimative.
 *
 * Nessun prezzo, nessuna affermazione su flotte di proprietà, nessuna
 * testimonianza, nessuna garanzia di servizio.
 */

export const bariIt: BariPage = {
  meta: {
    // Nudo: il layout aggiunge " | Private Transfer Across Italy".
    title: "Transfer aeroporto di Bari",
    description:
      // Attenzione alla lunghezza: ogni apostrofo diventa &#x27; nell'HTML e
      // pesa cinque caratteri invece di uno nel conteggio del meta tag.
      "Transfer privati dall'aeroporto di Bari (BRI) e dal terminal crociere: città, Alberobello, Polignano, Matera. Preventivo scritto su richiesta.",
  },

  hero: {
    eyebrow: "Puglia · Bari",
    h1: "Transfer dall'aeroporto e dal porto di Bari",
    lead: "A Bari si arriva per via aerea o per via mare. L'aeroporto è poco fuori città, il terminal crociere è dentro un porto che lavora. Uscire da entrambi è semplice: il problema è di solito quello che viene dopo, perché molte delle mete per cui si arriva qui sono a un'ora verso l'interno o lungo la costa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Arrivo in nave",
    facts: [
      { label: "Aeroporto", value: "Bari Karol Wojtyła · BRI / LIBD" },
      { label: "Dal centro", value: "Circa 8 km, a nord-ovest" },
      { label: "Gestore", value: "Aeroporti di Puglia" },
      { label: "Porto", value: "Terminal Crociere, Porto di Bari" },
    ],
  },

  intro: {
    heading: "Chi arriva a Bari",
    paragraphs: [
      "Bari è il capoluogo e la porta d'ingresso più usata della regione. Ci si arriva per raggiungere la Valle d'Itria e la zona dei trulli, per la costa adriatica fra Polignano a Mare e Monopoli, oppure da una nave da crociera con poche ore a terra e un orario di rientro che non si sposta.",
      "C'è poi chi arriva a Bari per Matera, che in Puglia non è: sta oltre il confine, in Basilicata. Resta però lo scalo più comodo per raggiungerla, e una parte consistente dei transfer che ci vengono richiesti da Bari finisce lì.",
      "Organizziamo questi trasferimenti con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
    ],
  },

  airport: {
    heading: "L'arrivo al Karol Wojtyła",
    lead: "Il BRI è uno scalo piccolo e lineare — ufficialmente Bari Karol Wojtyła, per molti ancora Palese, dal quartiere accanto. È base operativa di Ryanair e Volotea, il che spiega perché tanti arrivi siano di prima mattina o di sera tardi. Questo è l'andamento tipico di uno sbarco.",
    steps: [
      {
        title: "A terra",
        body: "A piedi o con la navetta fino all'aerogare, a seconda della piazzola. Il controllo passaporti riguarda solo i voli extra-Schengen: da un volo nazionale o europeo si prosegue direttamente.",
      },
      {
        title: "Ritiro bagagli",
        body: "La sala è piccola e i nastri sono vicini. In una sera d'estate, con più aerei atterrati insieme, i bagagli possono richiedere tempo: è la fase che più spesso allunga un arrivo.",
      },
      {
        title: "In area arrivi",
        body: "C'è una sola area arrivi, quindi non esiste l'uscita sbagliata. L'autista attende qui con il cartello: è il momento in cui conviene aver già concordato cosa ci sarà scritto sopra.",
      },
      {
        title: "Fino alla vettura",
        body: "L'area di carico è a pochi passi dalle porte del terminal. Da lì i bagagli li prende l'autista; la breve camminata non cambia nulla sul fatto che la vettura sia già lì ad aspettare.",
      },
    ],
    note: "Il numero del volo conta più dell'orario. Con il numero del volo l'autista verifica da sé se siete in anticipo, in ritardo o dirottati: un orario scritto su un modulo non lo permette.",
  },

  waysIn: {
    heading: "Come si raggiunge la città: il confronto",
    lead: "Il transfer privato non è sempre la risposta giusta, e questa pagina è più utile se lo dice. Bari è uno degli aeroporti italiani più facili da lasciare in autonomia.",
    rows: [
      {
        mode: "Treno",
        suits: "Per il centro di Bari con pochi bagagli. L'aeroporto ha la propria stazione sulla linea Ferrotramviaria e gli orari pubblicati indicano circa 15-20 minuti fino al centro.",
        against: "Arriva alla stazione Ferrotramviaria accanto a Bari Centrale, non dentro: se si prosegue con Trenitalia servono un trasbordo e qualche minuto a piedi. Di notte non è attivo.",
      },
      {
        mode: "Autobus urbano",
        suits: "La soluzione più economica. La linea AMTAB 16 collega l'aeroporto con il centro.",
        against: "Più lento del treno e scomodo con più di un bagaglio a mano.",
      },
      {
        mode: "Taxi",
        suits: "Tragitti brevi dentro Bari quando non si è organizzato nulla in anticipo. C'è il posteggio davanti agli arrivi.",
        against: "Non essendoci nulla di concordato prima, non c'è un cartello con il nome, né un percorso fissato, né qualcuno che segua il volo. Per una corsa lunga verso l'interno è l'opzione meno prevedibile.",
      },
      {
        mode: "Transfer privato",
        suits: "Tutto ciò che non è il centro di Bari: una masseria in fondo a una strada di campagna senza illuminazione, un paese con centro a traffico limitato, Matera oltre il confine, o un arrivo notturno con bambini e bagagli.",
        against: "Va organizzato in anticipo, e per un breve tragitto verso un albergo in centro è più di quanto serva.",
      },
    ],
    verdict: "In pratica: se alloggiate nel centro di Bari e viaggiate leggeri, il treno va benissimo. Per qualunque altra destinazione della regione il calcolo cambia in fretta, soprattutto dopo il tramonto e soprattutto se c'è di mezzo un seggiolino.",
  },

  port: {
    heading: "L'arrivo in nave",
    lead: "Il Porto di Bari è gestito dall'Autorità di Sistema Portuale del Mare Adriatico Meridionale e fa più lavori insieme: scali crocieristici, traghetti per Albania, Grecia e Croazia, merci.",
    paragraphs: [
      "Le navi da crociera usano il Terminal Crociere; i traghetti per Durazzo, Igoumenitsa, Corfù, Patrasso e i porti croati usano la Stazione Marittima. All'interno del porto circola una navetta gratuita fra le banchine, dettaglio meno banale di quanto sembri: il porto è grande e l'ormeggio assegnato non è sempre il più vicino al varco.",
      "Fra le compagnie che scalano Bari ci sono MSC, Costa, AIDA, Royal Caribbean, Celebrity, TUI Cruises e Phoenix Reisen. Bari è molto più spesso uno scalo di un itinerario adriatico che un porto di imbarco, e questo definisce cosa sia di solito un transfer da qui: una gita in giornata, non un trasferimento verso un albergo.",
      "Uscire dal porto in autonomia è possibile: ci sono posteggi taxi a entrambi i terminal e la linea circolare AMTAB 50 collega il varco portuale con Piazza Moro, accanto a Bari Centrale. Per una passeggiata in Bari Vecchia è più che sufficiente.",
    ],
    terminals: [
      {
        title: "Terminal Crociere",
        body: "Dove sbarcano i crocieristi. L'autista attende al terminal e non sotto bordo: la banchina è area a accesso controllato.",
      },
      {
        title: "Stazione Marittima",
        body: "Il terminal traghetti, per le linee albanesi, greche e croate. È un edificio diverso: conviene nominarlo correttamente nella richiesta, così nessuno aspetta nel posto sbagliato.",
      },
    ],
    shoreNote: "Per una gita a terra l'unico orario che conta è quello di rientro a bordo, ed è prima dell'orario di partenza stampato sul biglietto. Indicateci nome della nave, data, orario di arrivo e orario di rientro a bordo: la giornata si costruisce a ritroso a partire dall'ultimo. Se quello che volete vedere non ci sta, preferiamo dirlo finché siete ancora in tempo a cambiare.",
  },

  onward: {
    heading: "Da Bari, dove si va",
    lead: "Gran parte dei transfer da Bari non ha come destinazione un indirizzo di Bari. Queste sono le tratte più richieste, con le distanze stradali così come le riportano le fonti.",
    items: [
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        distance: "Circa 48 km",
        note: "Il più breve dei tragitti costieri abituali. Un paese costruito su una falesia calcarea a picco sul mare.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        distance: "Circa 60 km",
        note: "Più avanti sulla stessa costa, oltre Polignano. Cittadina con porto e strutture balneari da entrambi i lati.",
      },
      {
        id: null,
        name: "Matera",
        distance: "Circa 63 km",
        note: "Oltre il confine regionale, in Basilicata. Spesso una giornata intera da Bari più che un trasferimento di sola andata, e si raggiunge senza attraversare il centro città.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "Circa 70 km",
        note: "Il paese dei trulli, verso l'interno nella Valle d'Itria. Il classico primo giorno, e l'escursione più richiesta da chi arriva in crociera.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Più lontano, verso l'interno a sud",
        note: "La Città Bianca. Si raggiunge anche da Bari, benché Brindisi sia di norma lo scalo più vicino.",
      },
    ],
    footnote: "Le distanze provengono da pianificatori di percorso e da operatori di transfer, differiscono di qualche chilometro da una fonte all'altra a seconda dell'itinerario e vanno quindi prese come orientamento. I tempi di percorrenza dipendono dalla stagione — la statale costiera ad agosto non è la stessa di marzo — e confermiamo il percorso effettivo al momento del preventivo.",
  },

  staying: {
    heading: "Dove alloggiate cambia la risposta",
    lead: "La cosa che più influisce su un transfer da Bari non è la distanza, ma se all'indirizzo esiste un punto dove una vettura possa effettivamente fermarsi.",
    groups: [
      {
        title: "Bari città",
        body: "Gli alberghi fra Bari Centrale e il quartiere Murat non pongono problemi. Bari Vecchia è un'altra cosa: vicoli stretti e in parte a traffico limitato, quindi di norma si scarica al margine e non davanti alla porta. Un autista che sa a quale margine evita un giro completo delle mura con le valigie.",
      },
      {
        title: "La costa",
        body: "Polignano, Monopoli e le strutture fra le due si raggiungono agevolmente lungo la SS16. Molte non sono dentro il paese, e va benissimo: significa solo che la posizione esatta conta più del nome della località.",
      },
      {
        title: "Masserie e campagna",
        body: "Le masserie ristrutturate sono una buona parte del motivo per cui si viene in Puglia, e quasi tutte stanno in fondo a una strada non illuminata, con un cancello facile da superare senza vederlo. Allegate alla richiesta le indicazioni di arrivo fornite dalla struttura: molte masserie ne tengono una versione pensata per gli autisti proprio perché le stradine sono difficili da trovare.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le domande che tornano più spesso, con la risposta prima che dobbiate farla.",
    items: [
      {
        term: "Seggiolini",
        detail: "Indicate numero ed età dei bambini al momento della richiesta, non dopo. I seggiolini vanno concordati in anticipo con l'operatore: non sono qualcosa che l'autista possa procurarsi in aeroporto.",
      },
      {
        term: "Bagagli",
        detail: "Dite il numero reale, sacche da golf, passeggini e tutto ciò che non si piega compresi. Il veicolo si sceglie su quel numero, e un veicolo scelto su una stima approssimativa è la causa abituale dei problemi al marciapiede.",
      },
      {
        term: "Arrivi notturni",
        detail: "Bari riceve voli a tarda ora, e un transfer concordato vale molto di più a mezzanotte che a mezzogiorno, soprattutto verso un indirizzo di campagna. La disponibilità in fascia notturna è più limitata: conviene muoversi per tempo.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Bari Vecchia e diversi borghi collinari limitano l'accesso ai veicoli. È la norma in Italia e non è un ostacolo: significa soltanto che il punto di scarico consentito è a volte a qualche decina di metri dalla porta.",
      },
      {
        term: "Ritardi del volo",
        detail: "Con il numero del volo l'autista segue l'andamento del volo. I ritardi sono ordinari; a creare problemi è semmai un transfer fissato su un orario senza alcun numero di volo associato.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer da Bari",
    items: [
      {
        question: "Quanto dista l'aeroporto di Bari dal centro?",
        answer: "Circa 8 km, a nord-ovest. È uno degli aeroporti italiani più vicini alla città che serve, e il tragitto verso il centro è breve: la maggior parte dei transfer che organizziamo dal BRI va molto più lontano di così.",
      },
      {
        question: "C'è il treno dall'aeroporto di Bari?",
        answer: "Sì. L'aeroporto ha la propria stazione sulla linea Ferrotramviaria e gli orari pubblicati indicano circa 15-20 minuti fino al centro. Arriva però alla stazione Ferrotramviaria accanto a Bari Centrale e non al suo interno: se proseguite con Trenitalia tenete conto di un breve trasferimento a piedi e di un cambio, e verificate gli orari aggiornati presso il gestore.",
      },
      {
        question: "Venite a prenderci al terminal crociere?",
        answer: "Sì. Gli autisti attendono al Terminal Crociere e non sotto bordo, perché la banchina è ad accesso controllato. Indicateci nome della nave e data, così si concordano il terminal e il varco giusti: la Stazione Marittima, cioè il terminal traghetti, è un edificio diverso.",
      },
      {
        question: "Siamo in crociera con scalo a Bari: riusciamo a vedere Alberobello e rientrare?",
        answer: "È l'escursione più richiesta dal porto. Indicateci nome della nave, orario di arrivo e soprattutto orario di rientro a bordo: la giornata si costruisce a ritroso da quest'ultimo. Se quello che volete far entrare nelle ore a terra non è realistico, ve lo diciamo chiaramente.",
      },
      {
        question: "Potete portarci da Bari a Matera?",
        answer: "Sì, ed è fra le richieste più frequenti. Matera è in Basilicata e non in Puglia, a circa 63 km dall'aeroporto secondo i dati pubblicati, e il percorso non passa per il centro di Bari. Si organizza come trasferimento di sola andata oppure come giornata con attesa: diteci quale preferite e il preventivo verrà fatto di conseguenza.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Bari?",
        answer: "Non esiste un listino. Il prezzo dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data. Descrivete il tragitto e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "In Puglia serve l'auto a noleggio o bastano i transfer?",
        answer: "Dipende dal soggiorno. Se si alloggia in un posto solo e si fanno poche escursioni, i singoli transfer risultano di solito più semplici del noleggio, perché parcheggiare nei centri storici è davvero complicato. Se invece ci si sposta ogni giorno su un'area ampia, l'auto può convenire: se è questa la risposta onesta, ve la diciamo.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci il volo o la nave",
    body: "Il numero del volo o il nome della nave, dove siete diretti e quanti siete. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se un tragitto non funziona come lo avete descritto, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
