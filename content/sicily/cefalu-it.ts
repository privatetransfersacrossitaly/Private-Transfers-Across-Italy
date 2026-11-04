import type { SicilyDestination } from "./types";

/**
 * Cefalù — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano non serve che
 * si racconti cos'è il duomo di Cefalù: serve sapere se conviene come
 * giornata o come tappa, dove si ferma la vettura e cosa succede se si
 * arriva da una nave. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 54 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * È la pagina meglio documentata del cluster quanto a distanze, perché la
 * voce su Cefalù ne riporta due: circa 70 km a est del capoluogo di
 * provincia e 185 km a ovest di Messina. Il duomo iniziato nel 1131 e la sua
 * appartenenza al sito UNESCO arabo-normanno vengono dalla stessa voce, così
 * come i 16 m di quota e la rocca con i resti del castello normanno.
 *
 * La popolazione indicata dalla fonte è del 2007: un dato di diciotto anni
 * fa non viene presentato come attuale e non compare.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const cefaluIt: SicilyDestination = {
  meta: {
    // 54 caratteri.
    title: "Transfer privati a Cefalù e sulla costa nord – Prenota",
    description:
      "Transfer privati per Cefalù, sulla costa tirrenica a circa 70 km da Palermo: il duomo normanno, la rocca e la costa da entrambi i lati.",
  },

  hero: {
    eyebrow: "Sicilia · Cefalù",
    h1: "Transfer privati per Cefalù",
    lead: "Cefalù sta sulla costa tirrenica a circa 70 km a est di Palermo, sotto una rocca che porta in cima i resti di un castello normanno. È la gita più comoda dal capoluogo e una delle seconde basi più usate sulla costa settentrionale — e, cosa rara in Sicilia, un posto di cui possiamo dirvi la distanza citando una fonte.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Come ci si arriva",
    facts: [
      { label: "Costa", value: "Tirrenica, a nord" },
      { label: "A est di Palermo", value: "Circa 70 km" },
      { label: "A ovest di Messina", value: "185 km" },
      { label: "Duomo iniziato nel", value: "1131" },
    ],
  },

  intro: {
    heading: "Sotto la rocca",
    paragraphs: [
      "Cefalù è sulla costa tirrenica della Sicilia, a circa 70 km a est del capoluogo di provincia — Palermo — e a 185 km a ovest di Messina. Le due cifre vengono dalla voce enciclopedica sul comune e sono fra le pochissime distanze stradali di questo cluster attribuibili a una fonte invece che stimate: è il motivo per cui compaiono qui e quasi da nessun'altra parte.",
      "Il paese sta al livello del mare sotto una rupe a picco che in cima conserva i resti estesi di un castello normanno. Il suo duomo, iniziato nel 1131, è una delle nove strutture che compongono il sito UNESCO «Palermo arabo-normanna e le cattedrali di Cefalù e Monreale»: è la ragione concreta per cui tanti di quelli che visitano Palermo vengono anche qui.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Cefalù",
    lead: "Quasi tutti arrivano da Palermo: dall'aeroporto, oppure in giornata dalla città o dal porto.",
    options: [
      {
        id: "palermo-airport",
        label: "In aereo",
        body: "Lo scalo è il Falcone Borsellino di Palermo e il tragitto verso Cefalù corre a est lungo la costa, senza attraversare la città. Gli arrivi e le tratte sono trattati sulla sua pagina. Da tenere presente: l'aeroporto sta già a ovest di Palermo, quindi la strada fin qui è la lunghezza della città più la costa oltre di essa.",
      },
      {
        id: "palermo-cruise-port",
        label: "In nave",
        body: "Cefalù è una gita frequente da uno scalo crocieristico a Palermo. Lo scalo in sé è trattato sulla pagina del porto; è l'orario di rientro a bordo a determinare come si costruisce una giornata del genere, ed è prima dell'orario di partenza stampato sul biglietto.",
      },
    ],
    note: "È uno dei pochi tragitti siciliani per cui possiamo indicare una distanza con una fonte: circa 70 km a est di Palermo, secondo la voce sul comune. Un tempo di percorrenza però non lo pubblichiamo lo stesso, perché la costiera ad agosto e la stessa strada a marzo non sono la stessa strada.",
  },

  kerb: {
    heading: "Dove la vettura può fermarsi",
    lead: "Un arrivo più semplice di Taormina o di Ortigia, con un vincolo che ormai conoscete.",
    items: [
      {
        title: "Il paese è al livello del mare",
        body: "A differenza di Taormina, Cefalù sta sulla riva e non su un pendio. L'avvicinamento è piano e le strade moderne passano: è uno degli arrivi più lineari della costa settentrionale.",
      },
      {
        title: "Il centro antico però è stretto",
        body: "I vicoli medievali sotto la rupe sono la consueta situazione italiana: stretti, in parte ad accesso limitato, e non un posto in cui girare con un veicolo grande cercando un portone. Per un albergo qui dentro la fermata può essere al margine, e sapere a quale margine evita il giro.",
      },
      {
        title: "La rocca sta sopra tutto",
        body: "Alla rupe con i resti del castello normanno si sale a piedi e in salita. Nessun transfer vi porta in cima, e nessuno dovrebbe prenotarne uno aspettandosi di esserci accompagnato in auto.",
      },
      {
        title: "La costa da entrambi i lati",
        body: "Buona parte degli alloggi sta fuori paese lungo la costa, in una direzione o nell'altra. Sono indirizzi normali e una vettura ci arriva, ma la posizione esatta conta più del nome: strutture a diversi chilometri di distanza vengono comunque vendute come «Cefalù».",
      },
    ],
  },

  going: {
    heading: "Cosa ci viene chiesto da Cefalù",
    lead: "Soprattutto le due cose per cui si viene, più un tragitto lungo.",
    items: [
      {
        name: "Il duomo e il centro storico",
        body: "Iniziato nel 1131 e una delle nove strutture del sito arabo-normanno. Per quasi tutti è mezza giornata a piedi, una volta che la vettura ha fatto la sua parte.",
      },
      {
        name: "La costa da una parte e dall'altra",
        body: "Le spiagge e i centri minori lungo la costa settentrionale. Di norma si raggiungono dentro un transfer invece di essere prenotati a parte, ed è un motivo in più per mandare l'indirizzo esatto e non il nome del paese.",
      },
      {
        name: "Palermo e Monreale",
        body: "A ovest lungo la costa — circa 70 km secondo il dato pubblicato — per il capoluogo e per la terza chiesa dello stesso sito UNESCO. È l'abbinamento più comune con un soggiorno qui.",
      },
      {
        name: "Più a est",
        body: "La risalita verso Messina è lunga: 185 km secondo la stessa fonte. Il che rende Cefalù una tappa di un itinerario che attraversa l'isola, non una base da cui l'est sia una gita in giornata.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Cefalù.",
    items: [
      {
        id: "palermo",
        body: "A ovest lungo la costa, ed è da lì che quasi tutti arrivano.",
      },
      {
        id: "palermo-cruise-port",
        body: "Lo scalo crocieristico da cui Cefalù viene visitata più spesso.",
      },
      {
        id: "trapani",
        body: "Oltre Palermo, all'estremità occidentale: le saline e i traghetti per le Egadi.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da sistemare prima della giornata.",
    items: [
      {
        term: "In paese o lungo la costa",
        detail: "Strutture a diversi chilometri in una direzione o nell'altra vengono comunque descritte come Cefalù. Mandate l'indirizzo completo, così l'autista punta al tratto di costa giusto e non solo al nome giusto.",
      },
      {
        term: "Strade a accesso limitato",
        detail: "Il centro antico sotto la rupe limita l'accesso nel modo consueto. Significa che la fermata è a volte a qualche minuto a piedi dalla porta, e che conviene sapere prima da dove avvicinarsi.",
      },
      {
        term: "Giornata o trasferimento",
        detail: "Da Palermo, Cefalù funziona in entrambi i modi: giornata con attesa oppure sola andata verso una seconda base. Diteci quale e il preventivo segue quello.",
      },
      {
        term: "Orario di rientro a bordo",
        detail: "Se arrivate da una nave a Palermo è l'unico orario che conta, ed è prima della partenza stampata sul biglietto. Indicatecelo e la giornata si costruisce a ritroso da lì.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Nel centro antico l'ultimo tratto può essere a piedi, e lì il numero di valigie è un vincolo reale.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer per Cefalù",
    items: [
      {
        question: "Quanto dista Cefalù da Palermo?",
        answer: "Circa 70 km a est, secondo il dato che la voce sul comune indica come distanza dal capoluogo di provincia. È un numero con una fonte e non una nostra stima: vale la pena dirlo, perché per la maggior parte delle distanze stradali siciliane non è così. Un tempo di percorrenza, comunque, non lo pubblichiamo.",
      },
      {
        question: "Ci portate in giornata da Palermo?",
        answer: "Sì, è la gita più richiesta dal capoluogo. Funziona come giornata con attesa inclusa oppure come trasferimento di sola andata verso una seconda base sulla costa settentrionale. Diteci quale preferite e quanto tempo volete restare, e la giornata si costruisce su quello.",
      },
      {
        question: "Siamo in crociera con scalo a Palermo: riusciamo a vedere Cefalù?",
        answer: "Sì, ed è una delle richieste più frequenti dal porto. Indicateci nome della nave, data, orario di arrivo e orario di rientro a bordo: è quest'ultimo a determinare come si costruisce la giornata, ed è prima della partenza stampata sul biglietto. Se non ci sta, ve lo diciamo.",
      },
      {
        question: "La vettura arriva al nostro albergo nel centro storico?",
        answer: "A volte davanti alla porta, a volte al margine. I vicoli medievali sotto la rupe sono stretti e in parte ad accesso limitato, come in quasi tutti i centri italiani di quell'età. Mandate l'indirizzo completo invece del nome dell'albergo e l'autista saprà prima di arrivare quale fermata vale.",
      },
      {
        question: "Potete portarci su al castello sulla rocca?",
        answer: "No. I resti del castello normanno stanno in cima al promontorio e si sale a piedi, in salita. Preferiamo dirlo chiaramente piuttosto che accettare una prenotazione per qualcosa che un veicolo non può fare.",
      },
      {
        question: "Quanto dista Cefalù da Messina o dalla costa orientale?",
        answer: "185 km a ovest di Messina, secondo lo stesso dato pubblicato. È abbastanza perché Cefalù funzioni come tappa di un itinerario che attraversa l'isola e non come base da cui la costa orientale sia una gita in giornata: preferiamo chiarirlo adesso e non sul marciapiede.",
      },
      {
        question: "Quanto costa un transfer per Cefalù?",
        answer: "Non esiste un listino. Veicolo, numero di passeggeri, data e la presenza o meno dell'attesa spostano tutti la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci l'indirizzo e il giorno",
    body: "Che sia una giornata da Palermo, uno spostamento verso una seconda base o un arrivo da una nave, quello che ci serve è l'indirizzo e la data — più l'orario di rientro a bordo se c'è di mezzo una nave. L'organizzazione e il prezzo tornano indietro per iscritto, e se la giornata non ci sta ve lo diciamo invece di preventivarla lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
