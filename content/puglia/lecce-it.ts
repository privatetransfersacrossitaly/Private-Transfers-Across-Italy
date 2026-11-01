import type { LeccePage } from "./types";

/**
 * Lecce — italiano.
 *
 * Scritto in italiano, non tradotto. La differenza di taglio rispetto
 * all'inglese è precisa: chi cerca in inglese deve farsi spiegare cos'è il
 * barocco leccese e perché la pietra conta; chi cerca in italiano lo sa già.
 * Lo spazio risparmiato va sulle cose che servono davvero a chi prenota un
 * transfer — l'indirizzo esatto, la porta giusta, cosa cambia fra treno e
 * auto, come si organizza il trasporto di un matrimonio.
 *
 * Fonti: soprannome, pietra leccese, popolazione, altitudine, le tre porte,
 * Santa Croce, il campanile del Duomo e la colonna di Sant'Oronzo dalla voce
 * enciclopedica su Lecce; i 39 km dall'aeroporto di Brindisi dalla guida
 * agli itinerari della Regione Puglia.
 *
 * Non si afferma l'esistenza di una ZTL con orari e perimetro precisi:
 * nessuna fonte raggiungibile la documenta in forma pubblicabile. La pagina
 * descrive il dato fisico — centro murato, tre porte, strade strette — che
 * è verificato e sufficiente.
 *
 * Nessun prezzo, nessuna affermazione su veicoli di proprietà, nessuna
 * testimonianza, nessuna garanzia, nessun accordo con strutture o location.
 */

export const lecceIt: LeccePage = {
  meta: {
    title: "Transfer privati a Lecce",
    description:
      "Transfer privati per Lecce e dintorni: aeroporti di Brindisi e Bari, centro storico, trasporti per matrimoni e tratte verso il Salento. Preventivo scritto.",
  },

  hero: {
    eyebrow: "Puglia · Lecce",
    h1: "Transfer privati a Lecce",
    lead: "Lecce è una città barocca costruita in una pietra calcarea tenera e dorata, e quasi tutto quello che si viene a vedere sta dentro un centro murato in cui si entra da tre porte antiche. Arrivare in città è semplice. Arrivare a un portone dentro le mura è la parte che conviene preparare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Le tre porte",
    facts: [
      { label: "Aeroporto più vicino", value: "Brindisi (BDS), circa 39 km" },
      { label: "Provincia", value: "Capoluogo della provincia di Lecce" },
      { label: "Abitanti", value: "94.387" },
      { label: "Posizione", value: "Penisola salentina" },
    ],
  },

  intro: {
    heading: "Una città fatta di una pietra sola",
    paragraphs: [
      "Lecce è chiamata la Firenze del Sud per la sua architettura barocca, e quell'architettura esiste per via del terreno su cui poggia. La pietra leccese è un calcare abbastanza tenero da lavorarsi come legno — facile da incidere, adatta alla scultura — ed è il motivo per cui le facciate qui portano una densità di ornato che altrove in Puglia non si trova. La Basilica di Santa Croce, iniziata nel 1353 e conclusa solo nel 1695, ne è il caso estremo.",
      "La conseguenza pratica per chi arriva è che la parte buona di Lecce è concentrata e antica: centro compatto, strade strette, e le tre porte superstiti — Porta Napoli, Porta San Biagio e Porta Rudiae — che restano il modo in cui ci si entra.",
      "Organizziamo i transfer a Lecce e dintorni con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta e vi inviamo per iscritto l'accordo e il prezzo prima di qualsiasi conferma.",
    ],
  },

  arriving: {
    heading: "Come si arriva a Lecce",
    lead: "La città è servita da due aeroporti, che non sono ugualmente comodi. C'è poi la ferrovia, che per certi viaggi è davvero la risposta migliore.",
    routes: [
      {
        from: "Aeroporto di Brindisi (BDS)",
        body: "Il più vicino, e l'arrivo abituale per Lecce. La guida regionale agli itinerari indica circa 39 km e una mezz'ora, in gran parte sulla SS613.",
        detail: "Se state scegliendo i voli e la base è Lecce, è questo lo scalo da puntare.",
      },
      {
        from: "Aeroporto di Bari (BRI)",
        body: "Molto più a nord. Funziona benissimo — il transfer si organizza allo stesso modo — ma è un tragitto lungo invece che breve, ed è meglio saperlo prima di acquistare il volo che dopo.",
        detail: "Resta spesso la scelta giusta se i voli convengono, o se Lecce è la seconda parte di un viaggio cominciato più a nord.",
      },
      {
        from: "In treno",
        body: "Lecce ha una stazione sulla linea principale e buoni collegamenti lungo l'Adriatico. Per un albergo in centro con pochi bagagli, arrivare in treno e fare a piedi o con un breve transfer l'ultimo tratto è spesso la soluzione più semplice.",
        detail: "Se è questa la risposta onesta per il vostro viaggio, ve lo diciamo.",
      },
    ],
    note: "Qualunque sia lo scalo, indicateci il numero del volo e non l'orario. Così l'autista vede da sé un ritardo o un dirottamento: un orario scritto su un modulo non glielo mostra.",
  },

  gates: {
    heading: "Le tre porte, e perché contano",
    lead: "È l'unica cosa davvero specifica di un transfer a Lecce. Nel centro storico si entra da tre porte, le strade dietro sono strette e antiche, e quale porta serve il vostro indirizzo decide dove un'auto possa ragionevolmente fermarsi.",
    items: [
      {
        name: "Porta Napoli",
        detail: "Arco di trionfo eretto nel 1548 in onore di Carlo V, la più monumentale delle tre.",
        serves: "Il lato nord del centro e le strade verso la zona universitaria.",
      },
      {
        name: "Porta San Biagio",
        detail: "La porta orientale della città vecchia.",
        serves: "L'accesso da est e il lato più vicino a Piazza Sant'Oronzo.",
      },
      {
        name: "Porta Rudiae",
        detail: "La porta occidentale, dal nome dell'antico insediamento di Rudiae fuori città.",
        serves: "Le strade a ovest e la parte più tranquilla del centro.",
      },
    ],
    note: "Un autista che sa già quale porta serve la vostra via vi lascia a pochi passi dal portone. Uno che non lo sa gira intorno alle mura con le valigie nel bagagliaio. È per questo che chiediamo l'indirizzo completo e non solo il nome della struttura: a Lecce più di un albergo porta il nome della via o della piazza su cui si affaccia.",
  },

  staying: {
    heading: "Dormire dentro le mura",
    lead: "Quasi tutti quelli che vengono a Lecce alloggiano in centro storico, e moltissimi in un palazzo storico recuperato.",
    paragraphs: [
      "La città è piena di piccoli alberghi e case di charme ricavati da dimore antiche: soffitti alti, una corte, otto o dieci camere e un portone su un vicolo invece che su una strada di scorrimento. Sono la cosa migliore dello stare qui e sono anche il motivo per cui l'arrivo va pensato: un vicolo in cui un'auto non gira resta il vicolo su cui dà la vostra camera.",
      "Niente di tutto questo è un ostacolo. Significa solo che il punto di scarico e il portone a volte non coincidono — cosa ordinaria nei centri storici italiani, e che diventa un problema solo se nessuno ci ha pensato prima.",
    ],
    tips: [
      {
        title: "Mandate la via, non solo il nome",
        body: "Indirizzo completo con il numero civico. Diverse strutture leccesi prendono il nome dalla via o dalla piazza, e le due cose non sempre coincidono.",
      },
      {
        title: "Segnalate le scale",
        body: "I palazzi recuperati hanno spesso una rampa prima dell'ascensore, quando l'ascensore c'è. Vale la pena dirlo se qualcuno del gruppo farebbe fatica: può cambiare il punto in cui conviene fermarsi.",
      },
      {
        title: "Chiedete alla struttura dove si ferma l'auto",
        body: "Quasi tutte lo sanno con precisione, perché tutti gli ospiti prima di voi sono arrivati allo stesso modo. Giratecelo insieme alla richiesta.",
      },
    ],
  },

  weddings: {
    heading: "Matrimoni a Lecce e dintorni",
    lead: "A Lecce ci si sposa molto, e il trasporto per un matrimonio è un lavoro diverso da un transfer aeroportuale.",
    paragraphs: [
      "La forma tipica non è un viaggio ma una sequenza: ospiti che atterrano a Brindisi distribuiti su due o tre giorni, un trasferimento coordinato dai vari alloggi alla cerimonia, e i rientri dopo, a un'ora in cui non circola più niente. Gli ospiti quasi mai stanno tutti nello stesso albergo, e la location è spesso fuori città.",
      "Indicateci numero di ospiti, punti di raccolta e orari: prepariamo un preventivo unico invece che frammentato. Trattarlo come tanti viaggi separati costa di solito di più e si coordina peggio.",
    ],
    covers: [
      "Arrivi degli ospiti in aeroporto distribuiti su più giorni",
      "Trasferimenti alloggio-location nel giorno della cerimonia, con il numero di vetture che serve",
      "Rientri dopo il ricevimento, anche a tarda notte",
      "Spostamenti fra cerimonia e location del ricevimento, se sono separate",
      "Partenze verso l'aeroporto alla fine",
    ],
  },

  around: {
    heading: "Muoversi una volta arrivati",
    lead: "Lecce si gira a piedi, e per la maggior parte di un soggiorno l'auto non serve. Queste sono le eccezioni.",
    items: [
      {
        term: "Serate fuori città",
        detail: "Ristoranti e locali nelle campagne intorno a Lecce sono il motivo più frequente per volere un'auto per una sera e non per tutto il viaggio.",
      },
      {
        term: "Giornate al mare",
        detail: "Entrambe le coste salentine si raggiungono in giornata dalla città. Di solito conviene un'auto con autista a disposizione per la giornata, più che un transfer di sola andata.",
      },
      {
        term: "Gruppi e bagagli",
        detail: "Anche dentro la città, sei persone con le valigie sono un problema diverso da una coppia con due trolley. Diteci i numeri reali.",
      },
      {
        term: "Partenze all'alba",
        detail: "Un volo presto da Brindisi vuol dire lasciare Lecce prima che apra qualsiasi cosa. Organizzato per tempo è banale; organizzato a mezzanotte del giorno prima, no.",
      },
    ],
  },

  onward: {
    heading: "Da Lecce, più avanti",
    lead: "Lecce è la base abituale per il Salento, e quasi ogni soggiorno comprende almeno un'uscita dalla città. Queste sono le più comuni: la penisola in sé la racconta la pagina sul Salento.",
    items: [
      {
        id: "salento",
        name: "Verso il Salento",
        note: "La penisola nel suo insieme: due coste, un mare diverso per lato e i paesi della punta. Chi fa base a Lecce ne percorre di solito due o tre in una settimana.",
      },
      {
        id: null,
        name: "Gallipoli",
        note: "Sul versante ionico, attraversando la penisola. Una giornata, oppure uno spostamento di sola andata se la seconda parte del viaggio è su quella costa.",
      },
      {
        id: null,
        name: "Otranto",
        note: "Sul versante adriatico. Anche questa di norma una giornata da Lecce più che una base a sé.",
      },
      {
        id: "brindisi",
        name: "Aeroporto di Brindisi",
        note: "Il ritorno. Conviene organizzarlo insieme all'arrivo: è il viaggio che più spesso si rimanda troppo.",
      },
    ],
    footnote: "Ognuno di questi si organizza singolarmente e si quota per quello che è. Non esiste un menu fisso né un listino: descrivete la giornata che avete in mente e vi diciamo cosa comporta.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose che tornano più spesso sui viaggi da e per Lecce.",
    items: [
      {
        term: "L'indirizzo completo",
        detail: "Qui serve più che altrove: il centro è un reticolo di strade strette e antiche, e il solo nome della struttura è spesso ambiguo.",
      },
      {
        term: "Accesso al centro storico",
        detail: "Le strade dentro le mura sono strette e antiche, e lo scarico pratico è a volte a qualche minuto a piedi dal portone. È la norma in un centro storico italiano e non è un ostacolo: conviene solo saperlo prima di arrivare con le valigie.",
      },
      {
        term: "Seggiolini",
        detail: "Indicate numero ed età dei bambini nella richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno all'arrivo.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero, e il problema di una stima si vede a bagagliaio aperto.",
      },
      {
        term: "Ritardi del volo",
        detail: "Con il numero del volo l'autista segue il volo. A creare problemi è semmai un transfer fissato su un orario senza alcun volo associato.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer a Lecce",
    items: [
      {
        question: "Qual è l'aeroporto più vicino a Lecce?",
        answer: "Brindisi. La guida regionale agli itinerari indica circa 39 km e una mezz'ora. Bari è molto più a nord e il tragitto è di conseguenza più lungo: resta perfettamente organizzabile, ed è spesso la scelta giusta se i voli convengono, ma conviene sapere quale sia quale prima di acquistare il biglietto.",
      },
      {
        question: "L'auto arriva al mio albergo in centro storico?",
        answer: "Di solito arriva molto vicino. Nel centro si entra da tre porte e le strade dietro sono strette, quindi lo scarico pratico è a volte a qualche passo dal portone invece che davanti. Mandate l'indirizzo completo e le eventuali istruzioni di arrivo della struttura: l'autista userà la porta giusta.",
      },
      {
        question: "Conviene arrivare a Lecce in treno?",
        answer: "Per un albergo in centro con pochi bagagli, spesso sì: Lecce ha una stazione sulla linea principale e buoni collegamenti. Il calcolo cambia con un arrivo serale, un gruppo, molti bagagli, un seggiolino o un indirizzo fuori dal centro. Se il treno è la risposta migliore per il vostro caso, ve lo diciamo.",
      },
      {
        question: "Organizzate i trasporti per un matrimonio a Lecce?",
        answer: "Sì. L'organizzazione tipica prevede gli arrivi degli ospiti a Brindisi su più giorni, i trasferimenti coordinati verso la cerimonia e i rientri successivi. Indicateci numero di ospiti, punti di raccolta e orari e lo quotiamo come un lavoro unico. Non abbiamo accordi con location specifiche e non sosteniamo di averne.",
      },
      {
        question: "Potete portarci da Lecce a Gallipoli o Otranto?",
        answer: "Sì: sono entrambe giornate classiche dalla città, Gallipoli sul versante ionico e Otranto su quello adriatico. Si organizzano come trasferimento di sola andata oppure come auto con autista a disposizione per la giornata. Diteci quale preferite e il preventivo lo rispecchierà.",
      },
      {
        question: "Serve l'auto per una settimana a Lecce?",
        answer: "Spesso no. Lecce si gira a piedi e un soggiorno con base qui può funzionare con due o tre uscite organizzate. Se invece volete cambiare posto ogni giorno su un'area ampia, il noleggio può convenire: in quel caso ve lo diciamo.",
      },
      {
        question: "Quanto costa un transfer per Lecce?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri e dalla data. Descrivete il tragitto e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci la via, non solo l'albergo",
    body: "Numero del volo, indirizzo completo e quanti siete. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se il tragitto non funziona come lo avete descritto, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
