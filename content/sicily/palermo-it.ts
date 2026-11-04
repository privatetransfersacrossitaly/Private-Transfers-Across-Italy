import type { SicilyDestination } from "./types";

/**
 * Palermo — italiano.
 *
 * Scritto in italiano, non tradotto. Chi cerca in italiano non ha bisogno
 * che gli si spieghi cosa sia Monreale né dove stia Mondello: ha bisogno di
 * sapere dove la vettura può effettivamente fermarsi, come funziona il
 * servizio e chi si paga. La pagina italiana sposta quindi peso dalla parte
 * descrittiva a quella operativa.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 56 caratteri, senza brand, con call to action. Vedi la nota sul pilastro.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Non compaiono qui: la distanza
 * centro-Mondello (le fonti danno 9,8 / 10 / 11 / 12 km), frequenze, tempi e
 * tariffe del treno aeroportuale, e qualunque distanza stradale verso
 * Agrigento, Trapani o Cefalù. Il perché sta in docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const palermoIt: SicilyDestination = {
  meta: {
    // 56 caratteri.
    title: "Transfer privati a Palermo e dintorni – Prenota la corsa",
    description:
      "Transfer privati a Palermo: centro storico, Mondello, Monreale e le gite più richieste. Indicate l'indirizzo esatto e ricevete un preventivo scritto.",
  },

  hero: {
    eyebrow: "Sicilia · Palermo",
    h1: "Transfer privati a Palermo",
    lead: "Palermo è un capoluogo con una pianta medievale: è tutto il problema e buona parte del piacere. Arrivare in città è semplice. Arrivare a un portone preciso dentro la città è la parte da organizzare, ed è quella che di solito si scopre sul marciapiede con le valigie già fuori.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Dove si può fermare",
    facts: [
      { label: "Ruolo", value: "Capoluogo della Sicilia" },
      { label: "Costa", value: "Tirrenica, sul Golfo di Palermo" },
      { label: "Aeroporto", value: "Falcone Borsellino (PMO), circa 35 km" },
      { label: "Abitanti", value: "626.273 (2026)" },
    ],
  },

  intro: {
    heading: "Una città che non è fatta per le automobili",
    paragraphs: [
      "Palermo è la città più grande dell'isola ed è sede principale del sito UNESCO intitolato Palermo arabo-normanna e le cattedrali di Cefalù e Monreale: un nome che dice una cosa utile, e cioè che i tre luoghi stanno insieme e chi ne visita uno di solito vuole anche gli altri.",
      "La città sta sul Tirreno in fondo al proprio golfo, con Monte Pellegrino a chiuderne un lato. La geografia conta più di quanto sembri: il monte e il parco stanno fra il centro e Mondello, cosicché quello che sulla carta è un tratto lungo la costa è in realtà una strada che gira attorno a una montagna.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Palermo",
    lead: "Due modi, che producono transfer completamente diversi: uno comincia a 35 km dalla città, l'altro dentro un porto che lavora.",
    options: [
      {
        id: "palermo-airport",
        label: "In aereo",
        body: "L'aeroporto Falcone Borsellino, a Cinisi, circa 35 km a ovest-nord-ovest della città: più lontano della media degli scali di capoluogo, perché sta lungo la costa e non ai margini della periferia. Nel 2025 ha movimentato 9.220.905 passeggeri ed è gestito da GESAP. L'incontro con l'autista, le tratte e il confronto con il treno stanno sulla pagina dello scalo.",
      },
      {
        id: "palermo-cruise-port",
        label: "Via mare",
        body: "Il Porto di Palermo è uno scalo passeggeri di primo piano — nel 2018 vi sono transitati 1.986.941 passeggeri, di cui 577.934 crocieristi — ed è un porto che lavora, non un terminal crociere con una città attorno. Dentro l'area portuale c'è il cantiere Fincantieri: la banchina assegnata alla nave non è un dettaglio e va comunicata all'autista.",
      },
    ],
    note: "Comunque arriviate, la cosa utile da indicare non è l'orario. Per un volo è il numero del volo, per una nave il nome e la data. In entrambi i casi l'autista verifica da sé cosa sta succedendo, invece di aspettare a un orario scritto su un modulo.",
  },

  kerb: {
    heading: "Dove la vettura può davvero fermarsi",
    lead: "Per un veicolo Palermo non è una città sola: sono quattro o cinque, e quale di queste contiene il vostro indirizzo decide se il transfer finisce davanti al portone o due strade più in là.",
    items: [
      {
        title: "Vucciria, Kalsa e i quartieri antichi",
        body: "Una pianta medievale con dentro qualche taglio ottocentesco. Molti vicoli non passano con un veicolo grande, alcuni sono a traffico limitato, altri hanno gradini. Per un albergo qui dentro il punto di scarico consentito è spesso in fondo alla via e non davanti alla porta: sapere quale sia evita il giro dell'isolato con i bagagli.",
      },
      {
        title: "La città ottocentesca",
        body: "I viali a nord del centro antico — l'asse di via Roma e via Maqueda, la zona del Politeama — si comportano come in qualunque altra città europea. Gli alberghi di quest'area si raggiungono e si lasciano senza complicazioni: è un elemento da tenere presente quando si sceglie dove alloggiare.",
      },
      {
        title: "Mondello",
        body: "La borgata balneare della città, fra Monte Pellegrino e Monte Gallo. Il parco sul monte sta in mezzo fra la borgata e il centro, quindi la strada gira invece di costeggiare. Gli indirizzi qui sono per lo più normali e una vettura ci arriva: è un arrivo più semplice del centro storico e più lungo di quanto suggerisca la cartina.",
      },
      {
        title: "Su, verso Monreale",
        body: "Monreale sta sopra la città e la sua cattedrale è una delle chiese comprese nel sito arabo-normanno. È la mezza giornata più richiesta da Palermo, ed è il tipo di tragitto in cui un autista che sa dove si parcheggia vale molto più di quanto sembri sulla carta.",
      },
    ],
  },

  going: {
    heading: "Cosa ci viene chiesto da Palermo",
    lead: "Palermo è una base tanto quanto una meta, e le richieste si dividono con nettezza.",
    items: [
      {
        name: "Monreale",
        body: "Sulla collina alle spalle della città. La cattedrale è una delle nove strutture che compongono il sito arabo-normanno, insieme ai monumenti palermitani e al duomo di Cefalù. Di norma mezza giornata.",
      },
      {
        name: "Cefalù",
        body: "A est lungo la costa tirrenica: circa 70 km, secondo il dato che la voce su Cefalù indica come distanza dal capoluogo. Una cattedrale normanna iniziata nel 1131 sotto la rocca, e il terzo vertice dello stesso sito UNESCO.",
      },
      {
        name: "Mondello",
        body: "Il mare della città, dall'altra parte di Monte Pellegrino. Più spesso una serata o una mezza giornata che un transfer a sé, e spesso aggiunta in coda a una corsa dall'aeroporto invece che prenotata separatamente.",
      },
      {
        name: "L'ovest e il sud",
        body: "Trapani, le saline, Segesta e la Valle dei Templi sull'altra costa. Sono giornate intere, non escursioni, ed è il caso in cui conviene dirci prima cosa volete vedere: quello che ci sta dentro non sempre coincide con quello che si immagina.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Palermo.",
    items: [
      {
        id: "cefalu",
        body: "La gita abituale, e spesso una seconda base sulla costa settentrionale.",
      },
      {
        id: "trapani",
        body: "Il vertice occidentale, le saline e i collegamenti per le Egadi.",
      },
      {
        id: "agrigento",
        body: "La Valle dei Templi, sulla costa meridionale. Da Palermo è una giornata lunga, e funziona meglio come tappa che come andata e ritorno.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da cui dipende che un arrivo a Palermo fili liscio.",
    items: [
      {
        term: "L'indirizzo completo",
        detail: "Non il nome dell'albergo. A Palermo più di una struttura condivide il nome con una via o una piazza, e nei quartieri antichi fra due di esse ci sono dieci minuti a piedi con le valigie.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo mentre accade; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Zone a traffico limitato",
        detail: "Parti del centro storico limitano l'accesso ai veicoli. È la norma in Italia e non è un ostacolo: significa che il punto di sosta consentito è a volte a qualche minuto a piedi, e che saperlo prima evita il giro dell'isolato.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero e, nei quartieri stretti, un veicolo più grande non è semplicemente una versione più capiente: cambia dove può fermarsi.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età nella richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno sul posto e d'estate sono molto richiesti.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer a Palermo",
    items: [
      {
        question: "Quanto dista l'aeroporto dalla città?",
        answer: "Circa 35 km a ovest-nord-ovest, secondo il dato pubblicato dallo scalo. Sta a Cinisi, lungo la costa, il che lo rende un tragitto più lungo della media dei capoluoghi — e più corto di quanto ci si aspetti se invece si prosegue verso ovest o lungo la costa settentrionale. Gli arrivi sono trattati per esteso sulla pagina dell'aeroporto.",
      },
      {
        question: "La vettura arriva al nostro albergo nel centro storico?",
        answer: "A volte davanti al portone, a volte in fondo alla via. I quartieri antichi hanno una pianta medievale: vicoli stretti, alcuni a traffico limitato, qualcuno con gradini. Indicate l'indirizzo completo e non il nome dell'albergo: l'autista saprà in anticipo quale punto di scarico vale, ed è la differenza fra due passi e il giro dell'isolato.",
      },
      {
        question: "Organizzate la mezza giornata a Monreale?",
        answer: "Sì, è la richiesta più frequente dalla città. Il duomo di Monreale è una delle strutture del sito arabo-normanno di cui Palermo è sede principale. Diteci quanto tempo volete restare e se rientrate allo stesso indirizzo, e la giornata si costruisce su quello.",
      },
      {
        question: "Potete portarci da Palermo a Cefalù?",
        answer: "Sì. Cefalù sta a est lungo la costa tirrenica, a circa 70 km secondo il dato che la sua voce indica come distanza dal capoluogo. Funziona sia come giornata con attesa sia come trasferimento di sola andata verso una seconda base: diteci quale preferite e il preventivo segue quello.",
      },
      {
        question: "Mondello è lontana dal centro?",
        answer: "È una borgata di Palermo e non un comune a sé, ma la strada è più lunga di quanto suggerisca la carta: Monte Pellegrino e il suo parco stanno in mezzo, quindi il percorso gira attorno al monte. Non pubblichiamo una cifra perché le fonti che abbiamo trovato non concordano. Come arrivo è comunque semplice: indirizzi normali, raggiungibili in auto.",
      },
      {
        question: "Venite a prenderci al porto?",
        answer: "Sì, e la pagina del porto lo tratta per esteso. La cosa da sapere prima è che Palermo è un porto operativo con un cantiere all'interno, quindi la banchina assegnata conta. Indicateci nome della nave, data e orario di rientro a bordo: è quest'ultimo a determinare come si costruisce la giornata.",
      },
      {
        question: "Quanto costa un transfer a Palermo?",
        answer: "Non esiste un listino. Un tragitto dentro la città e una giornata ad Agrigento non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Mandateci l'indirizzo, non solo il nome dell'albergo",
    body: "A Palermo è la cosa più utile che possiate darci. Indirizzo, data, numero del volo o nome della nave, e quanti siete. L'organizzazione e il prezzo tornano indietro per iscritto, e se il tragitto non funziona come lo avete descritto ve lo diciamo invece di preventivarlo lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
