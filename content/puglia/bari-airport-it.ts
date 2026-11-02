import type { AirportPage } from "./types";

/**
 * Aeroporto di Bari Karol Wojtyła (BRI) — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca "transfer aeroporto Bari" in
 * italiano è spesso un residente o un italiano che accoglie ospiti: conosce
 * la geografia, conosce Palese, e non ha bisogno che gli si racconti cosa
 * siano i trulli. Quello che cerca è operativo — chi esegue il servizio, chi
 * si paga, cosa succede se il volo ritarda, se conviene il treno. La pagina
 * italiana sposta quindi il peso su quella parte e riduce la presentazione.
 *
 * Fonti identiche alla versione inglese: codici, gestore, gli ~8 km a
 * nord-ovest del centro, il nome Palese, Ryanair e Volotea, la linea
 * Ferrotramviaria e la linea AMTAB 16. Le distanze stradali (Polignano ~48
 * km, Monopoli ~60 km, Matera ~63 km, Alberobello ~70 km) vengono da
 * pianificatori di percorso che non concordano fra loro e sono quindi
 * sempre indicate come approssimative.
 *
 * Nessun dato sui passeggeri: le fonti danno due anni diversi e il numero
 * non serve a chi prenota un'auto.
 *
 * Nessun prezzo, nessuna promessa sui tempi, nessuna classe di veicolo,
 * nessuna flotta di proprietà, nessun accordo, nessuna testimonianza.
 */

export const bariAirportIt: AirportPage = {
  meta: {
    title: "Transfer aeroporto di Bari (BRI)",
    // 141 caratteri reali (145 nell'HTML: l'apostrofo diventa &#x27; e pesa
    // cinque caratteri). La versione precedente allineava sei nomi di
    // località: sembrava un elenco di parole chiave e non una frase. Le
    // tratte stanno tutte in pagina.
    description:
      "Transfer privati dall'aeroporto di Bari Karol Wojtyła (BRI): la città, i trulli, Matera. Indicate il volo, il preventivo arriva per iscritto.",
  },

  hero: {
    eyebrow: "Puglia · Aeroporto di Bari",
    h1: "Transfer privati dall'aeroporto di Bari",
    lead: "Il BRI è uno scalo piccolo che si svuota in fretta: è il suo pregio maggiore ed è anche il motivo per cui gli arrivi qui si complicano quando nessuno li ha preparati. Chi atterra a Bari, quasi sempre, a Bari non si ferma: va un'ora verso l'interno, giù lungo la costa, oppure oltre il confine a Matera.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si va",
    facts: [
      { label: "Aeroporto", value: "Bari Karol Wojtyła · BRI / LIBD" },
      { label: "Dal centro", value: "Circa 8 km, a nord-ovest" },
      { label: "Gestore", value: "Aeroporti di Puglia" },
      { label: "Noto anche come", value: "Palese" },
    ],
  },

  identity: {
    heading: "Lo scalo",
    paragraphs: [
      "L'aeroporto di Bari Karol Wojtyła si trova a circa otto chilometri a nord-ovest del centro. Molti continuano a chiamarlo Palese, dal quartiere accanto, e quel nome compare ancora su segnaletica non recente e su alcune conferme di prenotazione. È gestito da Aeroporti di Puglia, che gestisce anche Brindisi.",
      "È base operativa di Ryanair e Volotea, e questo definisce la giornata più di qualsiasi altra cosa: gran parte degli arrivi è di prima mattina o di sera tardi, perché lì li colloca l'orario delle compagnie low cost. Atterrare alle undici di sera in uno scalo piccolo con una sola area arrivi è semplice, ma solo se chi vi attende conosce già il volo.",
      "Organizziamo questi trasferimenti con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi ci date il volo e la destinazione, noi organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
    ],
  },

  meeting: {
    heading: "L'incontro con l'autista",
    lead: "Un terminal, una sala arrivi, un'uscita. Qui non esiste l'uscita sbagliata, il che elimina la causa più comune di incontri mancati negli scali grandi e ne lascia altre due.",
    steps: [
      {
        title: "Prima i bagagli",
        body: "La sala ritiro è piccola e i nastri sono vicini. In una sera d'estate, con più aerei atterrati insieme, sono i bagagli ad allungare l'arrivo. Un autista che segue il volo se lo aspetta; uno a cui è stato dato solo un orario no.",
      },
      {
        title: "Il cartello",
        body: "Gli autisti attendono in arrivi con il cartello. Concordate prima cosa ci sarà scritto: un cognome trascritto diversamente da come ve lo aspettavate è il motivo abituale per cui due persone restano a dieci metri senza trovarsi.",
      },
      {
        title: "Fino alla vettura",
        body: "L'area di carico è a pochi passi dalle porte del terminal. Da lì i bagagli li prende l'autista. Quei pochi passi non cambiano nulla sul fatto che la vettura sia già lì.",
      },
      {
        title: "Se il volo si sposta",
        body: "Ritardi e dirottamenti sono ordinari. Conta che l'autista possa vederli accadere: per questo chiediamo il numero del volo e non l'orario.",
      },
    ],
    note: "Indicate il numero del volo, non l'orario previsto. È il dato più utile in una richiesta di transfer aeroportuale ed è quello che manca più spesso.",
  },

  howItWorks: {
    heading: "Come funziona",
    lead: "Quattro passaggi, e nessun pagamento prima che abbiate accettato il prezzo per iscritto.",
    steps: [
      {
        title: "Ci descrivete il tragitto",
        body: "Numero del volo, destinazione, quanti passeggeri e quanti bagagli. Se serve un seggiolino, contano le età: si concordano in anticipo e non si procurano sul marciapiede.",
      },
      {
        title: "Organizziamo con un operatore locale",
        body: "Passiamo il tragitto a una società di noleggio con conducente autorizzata che copre quella tratta. Non siamo il vettore: siamo chi organizza e chi resta responsabile della correttezza dell'organizzazione.",
      },
      {
        title: "Ricevete il prezzo per iscritto",
        body: "Prima di qualsiasi conferma. Se il tragitto non funziona come lo avete descritto — troppo stretto rispetto a una partenza in nave, troppi bagagli per una vettura — ve lo diciamo adesso e non dopo.",
      },
      {
        title: "Pagate l'operatore",
        body: "La società locale che esegue il servizio incassa direttamente. Non viene addebitato nulla finché non avete accettato il preventivo.",
      },
    ],
  },

  routes: {
    heading: "Da qui, dove si va",
    lead: "Gran parte dei transfer dal BRI non ha come destinazione un indirizzo di Bari. Queste sono le tratte più richieste, con le distanze stradali così come le riportano le fonti.",
    city: {
      id: "bari",
      name: "Bari centro",
      distance: "Circa 8 km",
      note: "Il tragitto più breve di questa pagina, e quello in cui il treno è una vera alternativa. La pagina sulla città racconta Bari, la città vecchia e il terminal crociere.",
    },
    items: [
      {
        id: "polignano-a-mare",
        name: "Polignano a Mare",
        distance: "Circa 48 km",
        note: "Il più breve dei tragitti costieri: un paese sulla falesia a picco sul mare. Soprattutto coppie e piccoli gruppi, spesso come prima sera.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        distance: "Circa 60 km",
        note: "Più avanti sulla stessa costa. Il comune è esteso, quindi il solo nome raramente individua una struttura: mandate l'indirizzo completo.",
      },
      {
        id: null,
        name: "Matera",
        distance: "Circa 63 km",
        note: "Oltre il confine regionale, in Basilicata e non in Puglia. Resta comunque lo scalo più comodo per raggiungerla, e il percorso non attraversa il centro di Bari.",
      },
      {
        id: "alberobello",
        name: "Alberobello",
        distance: "Circa 70 km",
        note: "Verso l'interno, in Valle d'Itria. Il classico tragitto del primo giorno in Puglia e l'escursione più richiesta da chi arriva in crociera.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        distance: "Più lontano, verso l'interno a sud",
        note: "La Città Bianca e le masserie sotto il paese. Si raggiunge anche da qui, benché Brindisi sia di norma più vicino: Ostuni sta sulla linea fra i due scali.",
      },
      {
        id: "puglia",
        name: "Resto della Puglia",
        distance: "Molto variabile",
        note: "La pagina regionale spiega quanto distino davvero le cose fra loro: è la domanda che viene prima ancora della scelta dell'aeroporto.",
      },
    ],
    footnote: "Le distanze provengono da pianificatori di percorso e da operatori di transfer, variano di qualche chilometro da una fonte all'altra a seconda dell'itinerario e vanno prese come orientamento, non come orario. I tempi dipendono molto dalla stagione — la statale costiera ad agosto non è quella di marzo — e il percorso effettivo lo confermiamo al momento del preventivo.",
  },

  alternatives: {
    heading: "Quando il transfer non serve",
    lead: "Bari è fra gli aeroporti italiani più semplici da lasciare in autonomia, e questa pagina è più utile se lo dice.",
    modes: [
      {
        mode: "Treno",
        suits: "Per il centro di Bari con pochi bagagli. L'aeroporto ha la propria stazione sulla linea Ferrotramviaria e gli orari pubblicati indicano circa 15-20 minuti fino al centro.",
        against: "Arriva alla stazione Ferrotramviaria accanto a Bari Centrale, non al suo interno: se proseguite con Trenitalia servono un breve trasferimento a piedi e un cambio. Di notte non è attivo.",
      },
      {
        mode: "Autobus urbano",
        suits: "La soluzione più economica. La linea AMTAB 16 collega l'aeroporto con il centro.",
        against: "Più lento del treno e scomodo con più di un bagaglio a mano.",
      },
      {
        mode: "Taxi al posteggio",
        suits: "Un tragitto breve dentro Bari quando non si è organizzato nulla prima.",
        against: "Nessun cartello, nessun percorso concordato, nessuno che segua il volo. Per una corsa lunga verso l'interno è la meno prevedibile delle quattro.",
      },
      {
        mode: "Transfer privato",
        suits: "Tutto ciò che non è il centro di Bari: una masseria su una strada bianca senza illuminazione, un borgo a traffico limitato, Matera oltre il confine, o un arrivo notturno con bambini e bagagli.",
        against: "Va organizzato in anticipo, e per un breve tragitto verso un albergo in centro è più di quanto serva.",
      },
    ],
    verdict: "In pratica: se alloggiate nel centro di Bari e viaggiate leggeri, prendete il treno. Per qualunque altra destinazione della regione il calcolo cambia in fretta — e cambia più in fretta dopo il tramonto, con un indirizzo di campagna, o con un seggiolino di mezzo.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose che decidono se un arrivo fila liscio.",
    items: [
      {
        term: "Il numero del volo",
        detail: "Non l'orario. Con quello l'autista vede da sé un ritardo o un dirottamento; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Seggiolini",
        detail: "Numero dei bambini ed età, già nella richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno all'arrivo e in alta stagione sono molto richiesti.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega: sacche da golf, passeggini, strumenti musicali. Il veicolo si sceglie su quel numero, e una stima approssimativa si vede a bagagliaio aperto.",
      },
      {
        term: "Indirizzi di campagna",
        detail: "Moltissime strutture pugliesi stanno in fondo a una strada senza nome, dietro un cancello senza insegna. Allegate le indicazioni di arrivo che vi ha dato la struttura: molte ne tengono una versione per autisti.",
      },
      {
        term: "Arrivi notturni",
        detail: "Il BRI riceve voli a tarda ora e un'auto concordata vale molto di più a mezzanotte che a mezzogiorno, soprattutto verso la campagna. Nelle ore piccole la disponibilità è più ridotta: muoversi per tempo aiuta.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Bari Vecchia e diversi borghi collinari limitano l'accesso dei veicoli. È la norma in Italia e non è un ostacolo: significa solo che lo scarico consentito è a volte a qualche passo dal portone.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer dall'aeroporto di Bari",
    items: [
      {
        question: "Quanto dista l'aeroporto di Bari dal centro?",
        answer: "Circa 8 km, a nord-ovest. È uno degli aeroporti italiani più vicini alla città che serve. La maggior parte dei transfer che organizziamo dal BRI va però molto più lontano: verso l'interno fra i trulli, giù lungo la costa, oppure oltre il confine a Matera.",
      },
      {
        question: "C'è il treno dall'aeroporto di Bari?",
        answer: "Sì. L'aeroporto ha la propria stazione sulla linea Ferrotramviaria e gli orari pubblicati indicano circa 15-20 minuti fino al centro. Arriva però accanto a Bari Centrale e non al suo interno: se proseguite con Trenitalia mettete in conto un breve tratto a piedi e un cambio, e verificate gli orari aggiornati presso il gestore. Di notte non è attivo.",
      },
      {
        question: "Quanto costa un transfer dall'aeroporto di Bari?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data: una corsa in città e una per Matera non sono tragitti paragonabili. Descrivete quello che vi serve e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "Potete portarci dall'aeroporto di Bari ad Alberobello?",
        answer: "Sì, ed è fra le tratte più richieste da questo scalo: circa 70 km secondo i dati pubblicati. Si organizza come trasferimento di sola andata oppure come auto con autista a disposizione per la giornata, soluzione che conviene se volete abbinare altri paesi della Valle d'Itria.",
      },
      {
        question: "Potete portarci dall'aeroporto di Bari a Matera?",
        answer: "Sì. Matera è in Basilicata e non in Puglia, a circa 63 km dall'aeroporto secondo i dati pubblicati, e il percorso non passa per il centro di Bari. Si organizza come sola andata o come giornata con attesa: diteci quale preferite e il preventivo lo rispecchierà.",
      },
      {
        question: "Cosa succede se il volo è in ritardo?",
        answer: "Indicateci il numero del volo nella richiesta e l'autista segue il volo. I ritardi sono ordinari e vengono assorbiti. A creare problemi è semmai un transfer fissato su un orario senza alcun volo associato.",
      },
      {
        question: "Seguite anche i crocieristi?",
        answer: "Sì, ma il terminal crociere è un'organizzazione diversa da quella aeroportuale e la pianificazione cambia, perché l'orario di rientro a bordo è un vincolo rigido. La pagina su Bari descrive il Terminal Crociere e la Stazione Marittima.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci il numero del volo",
    body: "Numero del volo, destinazione e quanti siete. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se il tragitto non funziona come lo avete descritto, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
