import type { AlberobelloPage } from "./types";

/**
 * Alberobello — italiano.
 *
 * Scritto in italiano, non tradotto. In inglese bisogna spiegare cosa sia un
 * trullo e perché Alberobello sia patrimonio UNESCO; in italiano la storia
 * della pietra a secco e dell'esenzione fiscale è nota a scuola. Lo spazio
 * va quindi su quello che un lettore italiano non sa già e che gli serve:
 * come funziona concretamente l'arrivo, dove si ferma l'auto rispetto ai due
 * rioni, come si imposta una giornata in Valle d'Itria, e cosa cambia fra
 * transfer di sola andata e auto a disposizione.
 *
 * Fonti identiche alla versione inglese. I dati UNESCO — "The Trulli of
 * Alberobello", criteri iii/iv/v, riferimento 787, iscrizione 1996 nella
 * 20ª sessione, 10,52 ha — sono quelli registrati nella voce enciclopedica
 * su Alberobello, che cita l'iscrizione: il sito whc.unesco.org risponde
 * 403 alle richieste automatiche e qui non viene citato come se fosse stato
 * letto. Le dimensioni dei due rioni vengono da fonti turistiche e sono
 * indicate come approssimative. L'anno in cui il Trullo Sovrano è stato
 * dichiarato monumento nazionale è dato come 1923 da alcune fonti e 1930 da
 * altre, quindi non viene pubblicato.
 *
 * Non si afferma l'esistenza di una ZTL con perimetro e orari precisi: si
 * dice il dato verificabile, cioè che i rioni sono tutelati e fatti di
 * vicoli stretti e gradonati in cui un'auto non entra.
 *
 * Nessun prezzo, nessuna flotta di proprietà, nessuna testimonianza,
 * nessuna garanzia.
 */

export const alberobelloIt: AlberobelloPage = {
  meta: {
    title: "Transfer per Alberobello e i trulli",
    description:
      "Transfer privati per Alberobello: aeroporti di Bari e Brindisi, alloggi nei trulli, escursioni dal porto e Valle d'Itria. Indicate il tragitto, ricevete un preventivo.",
  },

  hero: {
    eyebrow: "Puglia · Alberobello",
    h1: "Transfer per Alberobello",
    lead: "Alberobello è un sito UNESCO abitato. Due rioni interi di trulli in pietra a secco, circa millequattrocento, disposti lungo vicoli stretti e gradonati: magnifici da percorrere a piedi e del tutto inadatti a un'automobile. Qui quasi ogni viaggio finisce con una camminata breve, e la domanda utile è da dove cominci.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "I due rioni",
    facts: [
      { label: "Patrimonio UNESCO", value: "Iscritto nel 1996" },
      { label: "Altitudine", value: "402,5 m" },
      { label: "Abitanti", value: "10.237" },
      { label: "Aeroporto più vicino", value: "Bari (BRI), circa 70 km" },
    ],
  },

  listing: {
    heading: "Cosa è tutelato esattamente",
    officialName: "The Trulli of Alberobello",
    rows: [
      { label: "Iscrizione", value: "1996, 20ª sessione" },
      { label: "Criteri", value: "Culturali: iii, iv, v" },
      { label: "Riferimento", value: "787" },
      { label: "Superficie del sito", value: "10,52 ha" },
    ],
    note: "Sono i dati dell'iscrizione UNESCO così come registrati nella voce enciclopedica su Alberobello, che cita l'iscrizione. Il sito UNESCO rifiuta le richieste automatiche, quindi qui non si riporta nulla come se fosse stato letto direttamente: per la formulazione ufficiale conviene consultare whc.unesco.org.",
  },

  intro: {
    heading: "Perché il paese è fatto così",
    paragraphs: [
      "Un trullo è una costruzione in pietra a secco con copertura conica autoportante, tirata su senza malta. Quel dettaglio non è una scelta estetica: nel 1481 il conte locale impose che le case fossero costruite a secco, senza malta, così da potersi configurare come edifici precari e da demolire facilmente — un modo per sottrarsi ai tributi che il viceré spagnolo del Regno di Napoli imponeva sui centri abitati. Un paese smontabile in un giorno, sulla carta, non era un paese.",
      "Quella che nasce come elusione fiscale diventa una tradizione costruttiva. I contadini trovarono nella forma circolare con cupola autoportante la configurazione più semplice, e le coperture presero pinnacoli decorativi che funzionavano da firma del costruttore, il mastro trullaro. L'insediamento risale al primo Cinquecento, quando una quarantina di famiglie contadine provenienti da Noci ottennero di stabilirsi qui dal conte Andrea Matteo III Acquaviva d'Aragona.",
      "Alberobello è l'unico centro abitato con un intero rione di trulli ed è considerata la capitale culturale dei trulli della Valle d'Itria. È questa la distinzione che conta: di trulli ne è disseminata tutta la valle, ma soltanto qui costituiscono il paese.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta e vi mandiamo prima l'accordo e il prezzo per iscritto.",
    ],
  },

  districts: {
    heading: "Due rioni, due visite diverse",
    lead: "I trulli tutelati si concentrano in due rioni su versanti opposti, e sapere verso quale siete diretti cambia il punto in cui conviene farsi lasciare.",
    items: [
      {
        name: "Rione Monti",
        scale: "Circa mille trulli",
        character: "Quello animato",
        body: "Il rione più esteso, che scende lungo il pendio, ed è quello in cui viene scattata praticamente ogni fotografia. Moltissimi dei suoi trulli sono oggi botteghe, locali e strutture ricettive: è vivo e, a luglio e agosto, davvero pieno.",
      },
      {
        name: "Rione Aia Piccola",
        scale: "Circa quattrocento trulli",
        character: "Quello silenzioso",
        body: "Più piccolo, a due passi, e ancora in larga parte residenziale: molti trulli sono abitati da famiglie del posto invece che affittati. È come sarebbe Rione Monti senza il commercio, ed è il motivo per tornarci la sera.",
      },
    ],
    note: "Le dimensioni dei rioni sono approssimative e provengono da fonti turistiche, non dall'iscrizione UNESCO, che non pubblica un conteggio. L'edificio che quasi tutti cercano è il Trullo Sovrano, l'unico trullo a due piani del paese, oggi casa-museo: insolito, perché i trulli sono altrimenti a un piano solo.",
  },

  arriving: {
    heading: "Come si arriva ad Alberobello",
    lead: "Il paese è nell'entroterra, su in Valle d'Itria a poco più di 400 metri: più lontano dal mare e più in alto di quanto le fotografie lascino immaginare.",
    routes: [
      {
        from: "Aeroporto di Bari (BRI)",
        distance: "Circa 70 km",
        body: "L'arrivo abituale e lo scalo più vicino. I dati pubblicati indicano circa un'ora di percorrenza. È il classico tragitto del primo giorno in Puglia: dall'aereo direttamente alla zona dei trulli.",
      },
      {
        from: "Aeroporto di Brindisi (BDS)",
        distance: "Più a sud",
        body: "Praticabile, e a volte la scelta giusta se Alberobello è l'estremità nord di un viaggio con base in Salento, o se semplicemente i voli convengono. Il tragitto è più lungo rispetto a Bari.",
      },
      {
        from: "Terminal crociere di Bari",
        distance: "Escursione in giornata",
        body: "Alberobello è l'escursione più richiesta dalle navi che scalano Bari. La pianificazione è diversa da un transfer aeroportuale, perché l'orario di rientro a bordo è un limite rigido e non una preferenza.",
      },
    ],
    note: "Le distanze stradali provengono da pianificatori di percorso e operatori, differiscono di qualche chilometro a seconda dell'itinerario e vanno prese come orientamento. I tempi dipendono molto dalla stagione: le strade che salgono in valle ad agosto non sono quelle di marzo.",
  },

  dayVisit: {
    heading: "Venire in giornata",
    lead: "La maggior parte delle persone vede Alberobello in giornata invece di fermarsi a dormire, e quella giornata ha una forma che conviene conoscere.",
    paragraphs: [
      "Il paese è piccolo e i due rioni si percorrono in qualche ora. A riempire la giornata è tutto ciò che sta intorno — i paesi della valle, un pranzo in masseria, una cantina — ed è il motivo per cui spesso conviene un'auto con autista a disposizione più che due transfer di sola andata.",
      "Se arrivate da una nave a Bari, i conti sono più stretti e il vincolo è assoluto. Indicateci nome della nave, orario di arrivo e orario di rientro a bordo: la giornata si costruisce a ritroso da quest'ultimo. Se quello che volete far entrare nelle ore a terra non è realistico, preferiamo dirlo finché siete in tempo a cambiare programma.",
    ],
    steps: [
      {
        title: "Presto o tardi",
        body: "Il cuore di una giornata estiva è l'ora dei pullman. La prima mattina e l'ora prima del tramonto sono un altro paese.",
      },
      {
        title: "Mettete in conto di camminare",
        body: "I vicoli sono stretti, a tratti gradonati, e la pietra è levigata dall'uso. Qui le scarpe comode contano più che nella media dei centri storici italiani.",
      },
      {
        title: "Tutti e due i rioni",
        body: "Rione Monti è quello famoso, e Aia Piccola, a cinque minuti, è quello che ci si ricorda. Fermarsi al primo è l'errore più comune.",
      },
      {
        title: "Concordate dove attende l'auto",
        body: "Nei rioni le auto non entrano. Stabilite il punto d'incontro con l'autista prima di incamminarvi, non dopo.",
      },
    ],
  },

  staying: {
    heading: "Dormire in un trullo",
    lead: "Molti visitatori oggi alloggiano in un trullo recuperato, in paese oppure in campagna: due arrivi piuttosto diversi.",
    paragraphs: [
      "In paese, un trullo ristrutturato si trova su un vicolo dentro o accanto a un rione tutelato: l'auto vi porta vicino e l'ultimo tratto si fa a piedi, sulla pietra, magari su gradini, con i bagagli. È una camminata breve e conviene chiedere alla struttura dove esattamente possano fermarsi i veicoli: tutti gli ospiti prima di voi sono arrivati così e lo sapranno con precisione.",
      "In campagna, un trullo o una masseria pongono lo stesso problema di qualunque struttura rurale pugliese: strada non illuminata, cancello che si supera senza vederlo, e una vista dall'alto fatta quasi solo di ulivi. Allegate alla richiesta le indicazioni di arrivo della struttura: molte ne tengono una versione scritta per gli autisti proprio per questo.",
    ],
  },

  valley: {
    heading: "La Valle d'Itria intorno",
    lead: "Alberobello è il paese più noto della valle ma non l'unico motivo per esserci. Questi sono i vicini con cui di solito si combina: nominati qui come contesto, perché sono brevi tragitti e non viaggi a sé.",
    towns: [
      {
        id: null,
        name: "Locorotondo",
        note: "Borgo circolare di case imbiancate affacciato sulla valle. Spesso abbinato ad Alberobello nella stessa giornata.",
      },
      {
        id: null,
        name: "Martina Franca",
        note: "Il più grande dei centri della valle, e barocco: un'architettura del tutto diversa dai trulli a pochi chilometri di distanza.",
      },
      {
        id: null,
        name: "Cisternino",
        note: "Piccolo centro imbiancato sul margine meridionale della valle, noto per il suo nucleo antico.",
      },
      {
        id: "ostuni",
        name: "Ostuni",
        note: "Oltre il margine sud della valle, la Città Bianca sul suo colle — e le masserie sotto di essa.",
      },
      {
        id: "monopoli",
        name: "Monopoli",
        note: "Giù sulla costa adriatica, a circa mezz'ora. Abbinamento frequente: mattina fra i trulli, pomeriggio al mare.",
      },
    ],
    footnote: "Una giornata che ne unisca due o tre si organizza di norma come auto con autista a disposizione e non come transfer separati, perché è l'attesa fra una tappa e l'altra la parte che state effettivamente organizzando.",
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose specifiche dell'arrivo qui.",
    items: [
      {
        term: "Le auto e i rioni",
        detail: "I rioni dei trulli sono tutelati e fatti di vicoli stretti e gradonati. L'auto vi porta al margine, non al portone, ed è il risultato corretto più che un limite.",
      },
      {
        term: "Bagagli sulla pietra",
        detail: "Se alloggiate in paese, l'ultimo tratto è a piedi su pietra levigata, a volte su gradini. Da segnalare se qualcuno del gruppo farebbe fatica: può cambiare il punto in cui conviene fermarsi.",
      },
      {
        term: "Orari di rientro a bordo",
        detail: "Per un'escursione da Bari, l'unico orario che conta è quello di rientro a bordo, ed è anteriore alla partenza stampata sul biglietto. Indicatelo nella richiesta.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età al momento della richiesta. Si concordano in anticipo con l'operatore: l'autista non può procurarne uno il giorno stesso.",
      },
      {
        term: "Stagionalità",
        detail: "In piena estate Alberobello è fra i luoghi più frequentati della Puglia. Organizzare per tempo qui conta più che quasi ovunque in regione.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e mettiamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer per Alberobello",
    items: [
      {
        question: "Quanto dista Alberobello dall'aeroporto di Bari?",
        answer: "Circa 70 km secondo i dati pubblicati, con all'incirca un'ora di percorrenza. Bari è il più vicino dei due scali pugliesi per Alberobello ed è l'arrivo abituale. Anche Brindisi funziona, ma il tragitto è più lungo.",
      },
      {
        question: "L'auto può entrare nei rioni dei trulli?",
        answer: "No, e non vi converrebbe. Rione Monti e Aia Piccola sono rioni tutelati, fatti di vicoli stretti e gradonati in pietra. Il transfer vi porta al margine e l'ultimo tratto si fa a piedi: in un paese piccolo è una camminata breve. Concordate il punto d'incontro esatto con l'autista prima di incamminarvi.",
      },
      {
        question: "Siamo in crociera con scalo a Bari: riusciamo a vedere Alberobello e rientrare?",
        answer: "È l'escursione più richiesta dal porto. Indicateci nome della nave, orario di arrivo e soprattutto orario di rientro a bordo: la giornata si costruisce a ritroso da quest'ultimo. Se quello che volete far entrare nelle ore a terra non è realistico, ve lo diciamo chiaramente.",
      },
      {
        question: "Perché Alberobello è patrimonio dell'umanità?",
        answer: "È stata iscritta nel 1996 come \"The Trulli of Alberobello\", secondo i criteri culturali iii, iv e v, per un sito di 10,52 ettari. Alberobello è l'unico centro abitato con un intero rione di trulli, ed è questo a distinguerla dai molti trulli sparsi nel resto della Valle d'Itria.",
      },
      {
        question: "Venite a prenderci in un trullo in campagna?",
        answer: "Sì, ed è frequente. A un trullo o a una masseria di campagna si arriva come a qualunque struttura rurale da queste parti: strada senza nome e cancello facile da superare senza vederlo. Allegate alla richiesta le indicazioni di arrivo della struttura: molte ne hanno una scritta per gli autisti, proprio perché le svolte sono difficili da individuare.",
      },
      {
        question: "Potete abbinare Alberobello ad altri paesi della Valle d'Itria?",
        answer: "Sì, ed è di solito il modo migliore di passare la giornata. Locorotondo, Martina Franca e Cisternino sono tutti a breve distanza, e Monopoli è a circa mezz'ora sulla costa. Una giornata così si organizza come auto con autista e attesa, non come transfer separati.",
      },
      {
        question: "Quanto costa un transfer per Alberobello?",
        answer: "Non esiste un listino. Dipende dal percorso, dal veicolo, dal numero di passeggeri, dalla data e dal fatto che vogliate un transfer di sola andata o un'auto per la giornata. Descrivete cosa avete in mente e riceverete un preventivo scritto; non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Puglia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci che giornata volete",
    body: "Numero del volo o nome della nave, dove alloggiate, e se preferite un transfer di sola andata o un'auto a disposizione. Vi rispondiamo con l'organizzazione e il prezzo per iscritto — e se la giornata non ci sta come l'avete descritta, ve lo diciamo.",
    cta: "Richiedi un preventivo",
  },
};
