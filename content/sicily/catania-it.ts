import type { SicilyDestination } from "./types";

/**
 * Catania — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano non serve che
 * si spieghi cos'è l'Etna o cosa sia il tardobarocco: serve sapere cosa si
 * può effettivamente chiedere, come funziona il servizio e cosa dipende
 * dalle condizioni della montagna. Lo spazio si sposta di conseguenza.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 52 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Il porto è descritto come porto cittadino
 * vicino al centro storico: è un dato di stampa di settore e non
 * enciclopedico — la voce inglese "Port of Catania" non esiste — quindi la
 * pagina dice che è un porto cittadino e non pubblica né distanza né minuti
 * a piedi.
 *
 * Non compaiono qui distanze stradali né tempi verso Taormina, Siracusa o le
 * aree visitabili dell'Etna: nessuna fonte affidabile li riporta e i siti di
 * viaggio non concordano. Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const cataniaIt: SicilyDestination = {
  meta: {
    // 52 caratteri.
    title: "Transfer privati a Catania e sull'Etna – Prenota ora",
    description:
      "Transfer privati a Catania: il centro barocco, il porto e le giornate verso l'Etna e la costa. Indicate indirizzo o volo per un preventivo scritto.",
  },

  hero: {
    eyebrow: "Sicilia · Catania",
    h1: "Transfer privati a Catania",
    lead: "Catania è costruita con la pietra del vulcano sotto cui sta, ed è per questo che il centro sembra un edificio solo. È anche la città siciliana in cui è più facile arrivare: l'aeroporto è a pochi chilometri e il porto è a due passi dal centro storico. Qui le complicazioni cominciano quando si esce dalla città, non quando si entra.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Le giornate sull'Etna",
    facts: [
      { label: "Costa", value: "Orientale, sullo Ionio" },
      { label: "Alle spalle", value: "L'Etna" },
      { label: "Aeroporto", value: "Fontanarossa (CTA), circa 4,3 km" },
      { label: "Abitanti", value: "296.984" },
    ],
  },

  intro: {
    heading: "La città ai piedi del vulcano",
    paragraphs: [
      "Catania sta sulla costa orientale della Sicilia, affacciata sullo Ionio ai piedi dell'Etna. Il centro storico fa parte delle Città tardo barocche della Val di Noto, iscritte nel patrimonio UNESCO nel 2002: una ricostruzione dopo la catastrofe che ha prodotto uno dei centri urbani più coerenti d'Italia, ed è il motivo per cui qui le strade sono più larghe e più dritte che a Palermo.",
      "Per un transfer quella coerenza è una buona notizia. Una griglia tardobarocca resta una griglia: in centro quasi tutti gli indirizzi si raggiungono, i viali passano, e l'arrivo raramente è la parte difficile. Difficile è semmai tutto ciò di cui la città è base: il vulcano alle spalle, la costa verso Taormina e la discesa verso Siracusa.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Catania",
    lead: "Entrambi i punti di arrivo sono vicini alla città: è una condizione rara e conviene sfruttarla.",
    options: [
      {
        id: "catania-airport",
        label: "In aereo",
        body: "Catania-Fontanarossa, noto anche come aeroporto Vincenzo Bellini, a circa 4,3 km a sud-ovest della città. È il più trafficato dell'isola — 12.346.530 passeggeri nel 2024, gestito da SAC — e insolitamente vicino alla città che serve. Ha tre aerostazioni e il Terminal C è riservato a easyJet: conviene stabilire su quale si atterra prima che qualcuno si organizzi per venirvi a prendere.",
      },
      {
        id: "catania-cruise-port",
        label: "Via mare",
        body: "Un porto cittadino e non uno scalo industriale staccato dall'abitato: le banchine sono a pochi passi dal centro storico. Questo definisce cosa può essere uno scalo qui — Etna, Taormina e Siracusa sono tutte ipotesi plausibili in una sola giornata a terra, cosa non vera per ogni approdo siciliano.",
      },
    ],
    note: "Proprio perché l'aeroporto è vicino e il porto è centrale, Catania è uno dei pochi posti in Sicilia in cui il transfer è una comodità e non una necessità per l'arrivo in sé. Diventa una necessità nel momento in cui il tragitto esce dalla città.",
  },

  kerb: {
    heading: "Dove la vettura può fermarsi",
    lead: "Catania tratta i veicoli meglio di quasi tutte le città siciliane, con due eccezioni da conoscere.",
    items: [
      {
        title: "Il centro barocco",
        body: "La griglia ricostruita dopo il Seicento regge bene il traffico. Via Etnea e le strade che vi si innestano sono ampie e gli alberghi che vi affacciano si raggiungono senza problemi. È la metà semplice della città.",
      },
      {
        title: "Le strade a traffico limitato",
        body: "Parti del centro storico limitano l'accesso dei veicoli, come in ogni città italiana di quell'età. Non è un ostacolo: significa che il punto di sosta consentito è a volte a qualche minuto a piedi, e che un autista che sa già quale sia evita il giro dell'isolato.",
      },
      {
        title: "Su per la montagna",
        body: "Le strade che salgono sull'Etna sono un'altra cosa: si arrampicano, sono più strette di quelle costiere e le condizioni cambiano con la stagione e con il tempo. È la parte di un soggiorno catanese in cui una vettura concordata e un autista che conosce la strada valgono di più.",
      },
      {
        title: "La costiera verso nord",
        body: "La risalita verso Taormina attraversa i paesi affacciati sul mare. Molte strutture stanno sotto il livello della strada o in fondo a una discesa verso la riva: conta l'indirizzo più del nome del paese, e l'ultimo tratto è spesso quello lento.",
      },
    ],
  },

  going: {
    heading: "Cosa ci viene chiesto da Catania",
    lead: "Catania è la base più usata dell'isola, e le richieste si ripetono.",
    items: [
      {
        name: "L'Etna",
        body: "Il vulcano con cui la città è costruita e sotto cui sta. I tragitti raggiungono le aree visitabili sulla montagna, non la cima, e quello che si può fare in una certa giornata dipende dalle condizioni. Vi diciamo cosa può effettivamente fare un operatore, non vi promettiamo un panorama.",
      },
      {
        name: "Taormina",
        body: "Risalendo la costa, sulla sua terrazza sopra lo Ionio: la gita più richiesta dalla città e dal porto. Cosa comporti arrivarci lo spiega la sua pagina, ed è più di quanto sembri, perché il paese sta in alto sopra la strada costiera.",
      },
      {
        name: "Siracusa e Ortigia",
        body: "Verso sud, fino all'isola che è il centro storico di Siracusa. Una giornata intera più che una mezza, e spesso organizzata come trasferimento di sola andata verso una seconda base invece che come andata e ritorno.",
      },
      {
        name: "Le città barocche",
        body: "I centri della Val di Noto che condividono con Catania l'iscrizione UNESCO stanno nell'entroterra, a sud. Sono giornate vere e si prestano a una vettura concordata, perché i paesi sono piccoli, i parcheggi limitati e la strada fra l'uno e l'altro è parte del motivo per cui ci si va.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Catania.",
    items: [
      {
        id: "taormina",
        body: "La gita più richiesta, e spesso una seconda base risalendo la costa.",
      },
      {
        id: "syracuse",
        body: "A sud, per Ortigia e la città archeologica. Una giornata intera, oppure un trasferimento di sola andata.",
      },
      {
        id: "messina-cruise-port",
        body: "L'altro scalo crocieristico orientale. Anche da lì si va quasi sempre a Taormina o sull'Etna.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose da sistemare prima di partire, non sul marciapiede all'arrivo.",
    items: [
      {
        term: "Quale aerostazione",
        detail: "A Catania ce ne sono tre e una è riservata a una sola compagnia. Indicate su quale atterrate, oppure mandateci il numero del volo e lo ricaviamo noi.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo da sé; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
      },
      {
        term: "Le condizioni dell'Etna",
        detail: "Quello che si può fare lo decide la montagna il giorno stesso, non la prenotazione. Vi diciamo cosa può fare un operatore e cosa dipende dalle condizioni, invece di descrivere un panorama come se fosse garantito.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Il veicolo si sceglie su quel numero, e in una giornata fuori non esiste un secondo viaggio per recuperare il resto.",
      },
      {
        term: "Seggiolini",
        detail: "Numero ed età nella richiesta. Si concordano in anticipo con l'operatore e d'estate sono molto richiesti.",
      },
      {
        term: "Pagamento",
        detail: "Si paga l'operatore locale che esegue il servizio. Noi organizziamo e inviamo prima il prezzo per iscritto; non viene addebitato nulla finché non avete accettato.",
      },
    ],
  },

  faq: {
    heading: "Domande sui transfer a Catania",
    items: [
      {
        question: "Quanto dista l'aeroporto dalla città?",
        answer: "Circa 4,3 km a sud-ovest, secondo il dato pubblicato dallo scalo: pochissimo per un aeroporto che muove oltre dodici milioni di passeggeri l'anno. È una delle poche tratte siciliane in cui il taxi al posteggio è un'alternativa del tutto ragionevole, e preferiamo dirlo piuttosto che far finta di no.",
      },
      {
        question: "Organizzate una giornata sull'Etna?",
        answer: "Sì, ed è il tragitto più richiesto dalla città. Si raggiungono le aree visitabili sulla montagna. Cosa sia possibile in una certa giornata dipende dalle condizioni: vi diciamo cosa può realmente fare un operatore, senza promettere una cima o un panorama.",
      },
      {
        question: "Potete portarci da Catania a Taormina?",
        answer: "Sì, è la gita più richiesta sia dalla città sia dal porto. Taormina sta in alto sopra la costa, quindi arrivarci è più complicato del tragitto in sé, e la sua pagina lo spiega. Diteci se volete l'attesa inclusa o un trasferimento di sola andata e il preventivo segue quello.",
      },
      {
        question: "Siamo in crociera con scalo a Catania: cosa ci sta in una giornata?",
        answer: "Più che in quasi tutti gli altri porti siciliani, perché le banchine sono vicine al centro e si esce in fretta dalla città. Etna, Taormina o Siracusa sono ciascuna plausibile: non tutte e tre. Indicateci nome della nave, data e orario di rientro a bordo, e la giornata si costruisce a ritroso da lì. Se quello che volete non ci sta, ve lo diciamo.",
      },
      {
        question: "Quanto ci vuole per Taormina o per Siracusa?",
        answer: "Non pubblichiamo tempi di percorrenza, e su questa costa è una scelta e non una scappatoia. Le cifre in circolazione non concordano fra loro, e la stessa strada ad agosto e a marzo non è la stessa strada. L'itinerario e i tempi li conferma l'operatore al momento del preventivo.",
      },
      {
        question: "C'è il treno dall'aeroporto di Catania?",
        answer: "In aeroporto c'è la fermata Catania Aeroporto-Fontanarossa, inaugurata da RFI nel marzo 2021. Per lo stato attuale delle linee e per gli orari rivolgetevi al gestore e non a noi: i collegamenti su questa costa hanno subito interruzioni negli ultimi anni e qualsiasi cosa scrivessimo qui invecchierebbe in fretta.",
      },
      {
        question: "Quanto costa un transfer a Catania?",
        answer: "Non esiste un listino. Una corsa dall'aeroporto al centro e una giornata sull'Etna non sono lavori confrontabili, e veicolo, numero di passeggeri e data spostano la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci il volo, la nave o l'indirizzo",
    body: "A Catania si arriva facilmente e si esce con più impegno. Mandateci il numero del volo o il nome della nave, dove siete diretti e quanti siete. L'organizzazione e il prezzo tornano indietro per iscritto, e se la giornata che avete descritto non ci sta, ve lo diciamo invece di preventivarla lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
