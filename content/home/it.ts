import type { HomeContent } from "./types";

/**
 * La homepage in italiano.
 *
 * Scritta in italiano, non tradotta dall'inglese: le due versioni dicono gli
 * stessi fatti, ma non con le stesse frasi. Chi legge in italiano sa già che
 * cos'è un NCC, che cosa sia una ZTL e dove finisca la strada a Venezia, e ha
 * bisogno di sapere altro — che cosa scrivere perché il preventivo serva.
 *
 * Valgono gli stessi limiti della versione inglese: nessuna tariffa, nessuna
 * durata, nessuna distanza, nessun tempo di risposta, nessuna flotta, nessun
 * "24 ore su 24", nessuna disponibilità garantita, nessuna recensione, nessun
 * indirizzo e nessun numero di telefono. Nomi e codici IATA degli aeroporti
 * sono stati verificati uno per uno.
 */
export const it: HomeContent = {
  meta: {
    title: "Transfer privati in tutta Italia | Aeroporti, città, porti",
    description:
      "Richiedi un'auto con autista in Italia: arrivi e partenze dagli aeroporti, viaggi fra città, collegamenti con i porti crocieristici, escursioni in giornata e tratte transfrontaliere selezionate. Ogni viaggio su preventivo.",
  },

  hero: {
    eyebrow: "Auto con autista — Italia",
    h1: "Transfer privati in tutta Italia",
    lead:
      "Arrivi e partenze dagli aeroporti, viaggi fra una città e l'altra, collegamenti con i porti crocieristici, giornate costruite sul vostro itinerario e alcune tratte oltre confine. Diteci il viaggio e la data: ricevete un preventivo scritto per quel viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Scopri le destinazioni",
    caveat:
      "Ogni viaggio si preventiva a sé e dipende dalla disponibilità di un autista per la vostra data. Una richiesta di preventivo non è una prenotazione: nulla è bloccato finché l'accordo non è confermato per iscritto.",
    photo: "tuscany-val-dorcia",
  },

  services: {
    id: "services",
    eyebrow: "Che cosa si può chiedere",
    heading: "I viaggi per cui ci si rivolge a noi",
    lead:
      "Otto tipi di richiesta coprono quasi tutto quello che arriva. Ognuno ha bisogno di dettagli leggermente diversi per essere preventivato come si deve, e ognuno ha una sezione dedicata qui sotto o una pagina ancora in lavorazione.",
    cards: [
      {
        id: "airport-transfers",
        title: "Transfer aeroportuali",
        body:
          "Per andare a prendere un volo o per farsi trovare all'arrivo. Servono l'aeroporto, il numero del volo e l'indirizzo completo dall'altra parte: il numero del volo perché un ritardo cambia il piano.",
        photo: "airport-check-in",
      },
      {
        id: "station-transfers",
        title: "Transfer da e per le stazioni",
        body:
          "Le stazioni italiane principali sono grandi e hanno più di un ingresso. Quale stazione, e da che lato, è ciò che fa funzionare un ritiro; l'ultimo tratto fino al binario si fa comunque a piedi.",
        photo: "rome-termini",
      },
      {
        id: "cruise-port-transfers",
        title: "Transfer per i porti crocieristici",
        body:
          "Le crociere scalano in porti commerciali veri e propri, e l'accosto lo assegnano il porto e la compagnia. È il terminal indicato sui vostri documenti a decidere il percorso.",
        photo: "cruise-ship-dock",
      },
      {
        id: "hotel-transfers",
        title: "Transfer per gli hotel",
        body:
          "Da porta a porta dove l'indirizzo lo consente. Diversi centri storici italiani limitano l'accesso ai veicoli: contano la via e il numero civico, molto più del nome del quartiere.",
        photo: "rome-trevi-fountain",
      },
      {
        id: "intercity-transfers",
        title: "Trasferimenti fra città",
        body:
          "Da una città all'altra con un solo veicolo: i bagagli restano nel baule, non ci sono cambi per strada e la giornata è vostra invece che di un orario ferroviario.",
        photo: "road-scenic",
      },
      {
        id: "cross-border-transfers",
        title: "Viaggi oltre confine",
        body:
          "Alcuni viaggi proseguono fuori dall'Italia. Si preventivano tratta per tratta e restano soggetti a conferma: segnalateci subito se il percorso attraversa una frontiera.",
        photo: "italy-amalfi-coast",
      },
      {
        id: "day-trips",
        title: "Escursioni in giornata e tour privati",
        body:
          "Una giornata costruita su dove volete andare, con le soste che chiedete e l'ora di partenza che preferite. Noi guidiamo: non siamo un tour operator e non vendiamo biglietti d'ingresso.",
        photo: "tuscany-val-dorcia",
      },
      {
        id: "business-events",
        title: "Aziende, fiere ed eventi",
        body:
          "Riunioni, fiere e giornate congressuali: di solito più indirizzi in un ordine che conta, a volte con il gruppo che si divide durante la giornata.",
        photo: "milan-porta-nuova",
      },
    ],
  },

  destinations: {
    id: "destinations",
    eyebrow: "Dove si va",
    heading: "Destinazioni in Italia",
    lead:
      "Le città di cui ci si chiede più spesso. Roma, Milano, Venezia e Firenze hanno ciascuna pagine proprie: i loro aeroporti e le stazioni, con il porto, il lago, la laguna e la campagna che le accompagnano. Tutto ciò che non è indicato qui si può comunque richiedere con un preventivo.",
    cards: [
      {
        id: "rome",
        name: "Roma",
        blurb:
          "Due aeroporti, un porto crocieristico a Civitavecchia risalendo la costa e un centro storico con regole di accesso che decidono dove un'auto può fermarsi.",
        photo: "rome-colosseum",
        page: "rome",
      },
      {
        id: "milan",
        name: "Milano",
        blurb:
          "Tre aeroporti venduti con il nome della città, uno solo dei quali le sta davvero vicino, più il traffico fieristico che ruota attorno a Rho Fiera.",
        photo: "milan-porta-nuova",
        page: "milan",
      },
      {
        id: "venice",
        name: "Venezia",
        blurb:
          "L'unica città italiana in cui l'auto non arriva al portone: il trasporto su gomma finisce a Piazzale Roma, il resto si fa a piedi o per acqua.",
        photo: "venice-grand-canal",
        page: "venice",
      },
      {
        id: "florence",
        name: "Firenze",
        blurb:
          "Un aeroporto piccolo dentro l'area urbana, uno più grande a Pisa, un centro rigidamente regolato e la Toscana che comincia pochi minuti dopo i viali.",
        photo: "florence-skyline",
        page: "florence",
      },
    ],
    alsoHeading: "Ci si chiede anche di",
    also: [
      "Napoli e la Costiera Amalfitana",
      "Bologna",
      "Verona e il lago di Garda",
      "Pisa e la costa toscana",
      "Torino",
      "Genova",
      "Palermo",
      "Catania",
    ],
    note:
      "Nominare qui una città significa che un viaggio da o per quella città si può preventivare. Non significa che esista già una pagina dedicata, né che ci sia un veicolo fermo ad aspettare.",
  },

  airports: {
    id: "airports",
    eyebrow: "Arrivi in aereo",
    heading: "Gli aeroporti di cui ci si chiede",
    lead:
      "Raggruppati per la parte di paese che servono. Nomi e codici IATA sono stati verificati sulle informazioni pubblicate da ciascun aeroporto.",
    groups: [
      {
        id: "rome-airports",
        region: "Roma",
        airports: [
          { name: "Roma Fiumicino (Leonardo da Vinci)", code: "FCO", note: "Il più grande aeroporto italiano, a ovest della città, sulla costa.", page: "fiumicino" },
          { name: "Roma Ciampino (G. B. Pastine)", code: "CIA", note: "A sud-est della città, senza una stazione ferroviaria propria.", page: "ciampino" },
        ],
      },
      {
        id: "milan-airports",
        region: "Milano e il nord-ovest",
        airports: [
          { name: "Milano Malpensa", code: "MXP", note: "A nord-ovest di Milano, in provincia di Varese.", page: "malpensa" },
          { name: "Milano Linate", code: "LIN", note: "Vicino alla città, soprattutto voli nazionali e a corto raggio.", page: "linate" },
          { name: "Milano Bergamo (Orio al Serio)", code: "BGY", note: "In provincia di Bergamo, più vicino a Bergamo che a Milano.", page: "bergamo-airport" },
          { name: "Torino", code: "TRN", note: "A nord di Torino, a Caselle." },
          { name: "Genova (Cristoforo Colombo)", code: "GOA", note: "Sulla costa ligure, a ovest della città." },
        ],
      },
      {
        id: "northeast-airports",
        region: "Nord-est",
        airports: [
          { name: "Venezia Marco Polo", code: "VCE", note: "Sulla gronda lagunare a Tessera, con un lato terra e un lato acqua.", page: "venice-marco-polo" },
          { name: "Treviso (A. Canova)", code: "TSF", note: "Nell'entroterra vicino a Treviso, spesso venduto con il nome di Venezia.", page: "treviso-airport" },
          { name: "Verona Villafranca", code: "VRN", note: "A sud-ovest di Verona, porta d'accesso abituale al lago di Garda.", page: "verona-airport" },
          { name: "Bologna (Guglielmo Marconi)", code: "BLQ", note: "A nord-ovest del centro città.", page: "blq" },
        ],
      },
      {
        id: "centre-airports",
        region: "Toscana e centro",
        airports: [
          { name: "Firenze (Peretola)", code: "FLR", note: "Nella zona di Peretola, al margine della città.", page: "florence-airport" },
          { name: "Pisa (Galileo Galilei)", code: "PSA", note: "L'aeroporto più grande della Toscana, vicino a Pisa.", page: "pisa-airport" },
        ],
      },
      {
        id: "south-airports",
        region: "Sud e isole",
        airports: [
          { name: "Napoli (Capodichino)", code: "NAP", note: "Dentro l'area urbana di Napoli.", page: "nap-airport" },
          { name: "Bari (Karol Wojtyła)", code: "BRI", note: "A nord-ovest di Bari, per la Puglia." },
          { name: "Catania (Fontanarossa)", code: "CTA", note: "A sud di Catania, per la Sicilia orientale." },
          { name: "Palermo (Falcone Borsellino)", code: "PMO", note: "A ovest di Palermo, a Punta Raisi." },
          { name: "Cagliari (Elmas)", code: "CAG", note: "A nord-ovest di Cagliari, per il sud della Sardegna." },
          { name: "Olbia (Costa Smeralda)", code: "OLB", note: "Per il nord-est della Sardegna." },
        ],
      },
    ],
    note:
      "Elencare un aeroporto significa che un viaggio da o per quello scalo si può preventivare. Non è una dichiarazione di disponibilità per una data, e qui non pubblichiamo procedure di ritiro terminal per terminal: quelle si confermano sulla singola prenotazione.",
    checklistHeading: "Per un transfer aeroportuale scriveteci",
    checklist: [
      "L'aeroporto, per nome o con il codice IATA",
      "Il numero del volo e l'orario di arrivo o partenza sul biglietto",
      "L'indirizzo completo dall'altra parte",
      "Quanti passeggeri e quanti bagagli",
      "Tutto ciò che cambia il veicolo: un bambino, una carrozzina, attrezzatura ingombrante",
    ],
  },

  intercity: {
    id: "intercity",
    eyebrow: "Da una città all'altra",
    heading: "Viaggi fra città, e oltre il confine",
    lead:
      "Non tutti i viaggi sono corse da e per l'aeroporto. Buona parte di quello che ci si chiede è un lungo trasferimento su strada che altrimenti sarebbe due treni e un'attesa.",
    paragraphs: [
      "Un trasferimento intercity è un solo veicolo dall'indirizzo di partenza a quello di arrivo. I bagagli si caricano una volta sola. Non c'è coincidenza, non c'è binario e non c'è quel quarto d'ora speso a capire in quale carrozza si sale. Conviene a chi viaggia con le valigie, alle famiglie, alle partenze all'alba e a chiunque abbia un programma che non combacia con l'orario ferroviario.",
      "I viaggi oltre confine — verso la Francia, la Svizzera, l'Austria o la Slovenia, per esempio — sono un'altra cosa e si preventivano tratta per tratta. Diteci fin dalla prima richiesta che il percorso esce dall'Italia: cambia la documentazione, cambia il percorso e cambia anche la possibilità stessa di coprirlo.",
    ],
    photo: "road-scenic",
    note:
      "La disponibilità di una tratta si conferma quando il viaggio viene preventivato, non quando compare in un elenco. Nulla di quanto scritto qui afferma che una determinata coppia di città o un determinato valico siano sempre coperti.",
  },

  cruise: {
    id: "cruise-ports",
    eyebrow: "Arrivi e partenze via mare",
    heading: "Collegamenti con i porti crocieristici",
    lead:
      "In Italia le crociere scalano in porti commerciali, e la città che compare sull'itinerario spesso non è la città della banchina.",
    paragraphs: [
      "Il traffico crocieristico di Roma scala a Civitavecchia, risalendo la costa. Firenze e Pisa si raggiungono da Livorno. Gli accosti di Venezia sono divisi fra il porto di terraferma e terminal più vicini al centro. In ogni caso è il nome stampato sui vostri documenti di imbarco a decidere il percorso, e una richiesta «per il porto» senza terminal indica il posto sbagliato più o meno quanto quello giusto.",
      "Dove un veicolo possa attendere lo stabilisce il porto, non noi, e cambia da terminal a terminal. L'organizzazione per il vostro viaggio si conferma insieme al preventivo.",
    ],
    photo: "cruise-ship-dock",
    link: { page: "civitavecchia", label: "Transfer per il porto di Civitavecchia" },
    checklistHeading: "Per un transfer da crociera scriveteci",
    checklist: [
      "Il porto e il terminal o l'accosto indicati dalla compagnia",
      "Il nome della nave e la data dello scalo o della partenza",
      "Dove volete andare e se rientrate a bordo",
      "L'orario entro cui dovete essere rientrati, se c'è",
      "Passeggeri e bagagli",
    ],
  },

  dayTrips: {
    id: "day-trips-and-events",
    eyebrow: "Una giornata, non una corsa",
    heading: "Escursioni, tour privati e viaggi per eventi",
    lead:
      "Certe richieste non sono affatto un viaggio da A a B. Sono una giornata: una partenza, un rientro e le soste che volete in mezzo.",
    paragraphs: [
      "Una giornata privata si preventiva come giornata intera e non come corsa fra due punti: per questo le soste contano quanto i capolinea. Diteci da dove volete partire, che cosa volete vedere e a che ora vorreste muovervi — e se qualcuno del gruppo ha un orario entro cui deve essere di ritorno.",
      "Le trasferte di lavoro funzionano allo stesso modo. Una giornata di fiera o di congresso è di solito fatta di più indirizzi in un ordine preciso, a volte con il gruppo che si divide. Mandateci gli indirizzi nell'ordine che vi serve e gli orari in cui dovete essere in ciascuno.",
    ],
    photos: ["rome-colosseum", "milan-porta-nuova"],
    note:
      "Noi guidiamo. Non siamo un tour operator, non vendiamo biglietti né ingressi, e qui non c'è nessuna offerta di visita guidata né di trasporto garantito durante un grande evento.",
  },

  how: {
    id: "how-it-works",
    eyebrow: "Come funziona",
    heading: "Come una richiesta diventa un viaggio",
    lead: "Tre passaggi, e solo l'ultimo è una prenotazione.",
    steps: [
      {
        title: "Raccontateci il viaggio",
        body:
          "Da dove si parte, dove si arriva, data e ora, quanti siete e quanti bagagli portate. Più il viaggio è descritto con precisione, più la risposta può essere esatta.",
      },
      {
        title: "Ricevete il preventivo",
        body:
          "Vi arriva un prezzo per quel viaggio, con l'accordo messo nero su bianco: dove vi aspetta l'autista, che cosa comprende il preventivo e che cosa della richiesta non si può fare come l'avete chiesta.",
      },
      {
        title: "Confermate per iscritto",
        body:
          "Il viaggio è prenotato quando è stato confermato per iscritto, non prima. Fino a quel momento non è riservato nulla e nessun veicolo è assegnato alla vostra data.",
      },
    ],
    note:
      "Inviare una richiesta significa fare una domanda, non prenotare. La sezione qui sotto spiega che cosa tenere pronto prima di compilare il modulo.",
  },

  prepare: {
    id: "prepare",
    eyebrow: "Prima di scrivere",
    heading: "Che cosa tenere pronto",
    lead:
      "Un preventivo vale quanto il viaggio che descrive. Questi sono i dettagli che cambiano la risposta.",
    items: [
      {
        title: "Tutti e due gli indirizzi, per esteso",
        body:
          "Una via e un numero civico a ciascun capo. «Vicino al Duomo» non è valutabile da nessuno; un indirizzo sì, compreso se un veicolo possa fermarcisi.",
      },
      {
        title: "Volo, treno o nave",
        body:
          "Numero e orario previsto, quando ce n'è uno. È ciò che permette di gestire un arrivo in ritardo invece di mancarlo.",
      },
      {
        title: "Data e ora",
        body:
          "Compreso il fuso orario da cui scrivete se prenotate dall'estero, e l'ora entro cui dovete arrivare se ce n'è una.",
      },
      {
        title: "Passeggeri e bagagli",
        body:
          "Contate le valigie, non solo le persone. È il bagaglio, più del numero di passeggeri, a decidere il veicolo.",
      },
      {
        title: "Tutto ciò che è particolare",
        body:
          "Un bambino, una carrozzina, un animale, attrezzatura ingombrante, una sosta lungo la strada o un indirizzo ad accesso limitato. Meglio dirlo adesso che scoprirlo il giorno stesso.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande che ci fanno",
    lead: "Risposte dirette, comprese quelle che dipendono.",
    items: [
      {
        question: "Che cosa vi serve per fare un preventivo?",
        answer:
          "Tutti e due gli indirizzi per esteso, data e ora, il numero di passeggeri e di bagagli e il numero del volo, del treno o della nave quando ce n'è uno. Tutto ciò che è particolare — un seggiolino, una carrozzina, una sosta per strada — conviene aggiungerlo nello stesso messaggio.",
      },
      {
        question: "Posso chiedere un viaggio fra due città italiane?",
        answer:
          "Sì. I viaggi fra città si preventivano come un unico viaggio con un solo veicolo, senza cambi lungo il percorso. La disponibilità per la vostra data si conferma al momento del preventivo.",
      },
      {
        question: "Posso chiedere un ritiro in aeroporto?",
        answer:
          "Sì, in tutti gli aeroporti elencati in questa pagina e in altri su richiesta. Mandate il numero del volo oltre all'orario: è quello che consente di gestire un arrivo in ritardo invece di perderlo.",
      },
      {
        question: "Un viaggio può partire o finire in un porto crocieristico?",
        answer:
          "Sì. Indicateci il porto e il terminal o l'accosto riportati dalla compagnia, con il nome della nave e la data. Gli accosti crocieristici italiani stanno dentro porti operativi e cambiano quanto a dove un veicolo può attendere: è il terminal a reggere il preventivo.",
      },
      {
        question: "Posso chiedere un viaggio che esce dall'Italia?",
        answer:
          "Potete chiederlo, e alcune tratte transfrontaliere vengono preventivate. Ditelo fin dal primo messaggio, perché incide sul percorso, sulla documentazione e sulla possibilità stessa di coprire il viaggio.",
      },
      {
        question: "Come si organizza un'escursione privata in giornata?",
        answer:
          "Descrivete tutta la giornata: da dove comincia, le soste che volete in mezzo, dove deve finire e a che ora vorreste partire. Una giornata si preventiva come giornata, non come corsa fra due punti.",
      },
      {
        question: "Quando la prenotazione è confermata?",
        answer:
          "Soltanto quando è stata confermata per iscritto, con il viaggio, il punto d'incontro e le condizioni indicati. Inviare una richiesta è fare una domanda: non riserva un veicolo e non blocca una data.",
      },
    ],
  },

  finalCta: {
    id: "request-a-quote",
    eyebrow: "Il passo successivo",
    heading: "Raccontateci il viaggio",
    body:
      "Tutti e due gli indirizzi, data e ora, quanti siete e quanti bagagli portate, e il volo, il treno o la nave se c'entrano. Basta questo per tornare con un prezzo per quel viaggio e l'accordo messo per iscritto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Vedi che cosa tenere pronto",
    note:
      "Il modulo di preventivo è la destinazione di ogni “Richiedi un preventivo” di questo sito. Inviarlo è una richiesta e non una prenotazione: nulla è riservato e nessun veicolo è bloccato finché un viaggio non è stato confermato per iscritto e voi non l'avete accettato.",
  },

  chrome: {
    skipToContent: "Vai al contenuto principale",
    quoteCta: "Richiedi un preventivo",
    menuLabel: "Menu",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    languageLabel: "Lingua",
    footerTagline:
      "Auto con autista, su prenotazione. Diteci il viaggio — aeroporto, stazione, porto crocieristico, una giornata fuori o una tratta fra città — e ne ricevete un preventivo scritto.",
    footerLegal:
      "I viaggi si preventivano singolarmente e restano soggetti a conferma. Una richiesta di preventivo non è una prenotazione.",
    contactHeading: "Contatti",
    whatsappLabel: "Scrivici su WhatsApp",
  },
};
