import type { SicilyDestination } from "./types";

/**
 * Siracusa — italiano.
 *
 * Scritto in italiano, non tradotto. A chi cerca in italiano non serve che
 * si spieghi che Ortigia è un'isola o cosa sia la ZTL: serve sapere da quale
 * ponte si entra, chi può autorizzare e cosa succede se non si è chiesto
 * nulla prima. Lo spazio va lì.
 *
 * ── Titolo ────────────────────────────────────────────────────────────────
 * 54 caratteri, senza brand, con call to action.
 *
 * ── Fonti ─────────────────────────────────────────────────────────────────
 * Identiche alla versione inglese. Sulla ZTL di Ortigia le fonti disponibili
 * — stampa siracusana e portali di automobilisti — si contraddicono su quale
 * ponte sia l'ingresso consentito, sulla raggiungibilità dei parcheggi
 * interni nelle ore di limitazione e sugli orari stessi, e nessuna di quelle
 * lette è il documento attuale del Comune. La pagina dice quindi che l'isola
 * è a traffico limitato e che il punto di fermata lo conferma l'operatore,
 * senza pubblicare orari, regole sui ponti o nomi di parcheggi.
 *
 * Non compaiono qui distanze né tempi verso Catania o il suo aeroporto.
 * Vedi docs/sicily-cluster-plan.md.
 *
 * Nessun prezzo, nessun tempo di percorrenza, nessuna affermazione su
 * veicoli di proprietà, nessuna testimonianza.
 */

export const syracuseIt: SicilyDestination = {
  meta: {
    // 54 caratteri.
    title: "Transfer privati a Siracusa e Ortigia – Riserva l'auto",
    description:
      "Transfer privati per Siracusa e Ortigia, l'isola che ne è il centro storico. Come funzionano gli arrivi dove il quartiere antico è a traffico limitato.",
  },

  hero: {
    eyebrow: "Sicilia · Siracusa",
    h1: "Transfer privati per Siracusa",
    lead: "Siracusa sono due luoghi uniti da ponti: la città moderna sulla costa sud-orientale e Ortigia, l'isola che ne è il centro storico e il motivo per cui quasi tutti ci vengono. Arrivare in città è semplice. Arrivare sull'isola con i bagagli è la parte da organizzare prima.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Entrare in Ortigia",
    facts: [
      { label: "Costa", value: "Sud-orientale" },
      { label: "Centro storico", value: "Ortigia, un'isola" },
      { label: "Patrimonio UNESCO", value: "Dal 2005, con Pantalica" },
      { label: "Abitanti", value: "115.515" },
    ],
  },

  intro: {
    heading: "Una città e un'isola",
    paragraphs: [
      "Siracusa sta sulla costa sud-orientale della Sicilia ed è patrimonio UNESCO dal 2005 insieme alla Necropoli di Pantalica. Il suo centro storico è Ortigia: un'isola, collegata alla terraferma da ponti, ed è lì che si trova la gran parte degli alberghi che si prenotano.",
      "Quella divisione è tutta la forma di un transfer qui. La città in terraferma ha strade e indirizzi ordinari. L'isola no: è piccola, fitta, in buona parte a traffico limitato, e le regole su quale ponte si possa usare e quando sono cambiate più volte. L'autista deve sapere da che parte dell'acqua sta il vostro indirizzo prima della giornata, non davanti al ponte.",
      "Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati. Non possediamo veicoli e non impieghiamo direttamente gli autisti. Voi descrivete il tragitto, noi lo organizziamo con un operatore che copre quella tratta, e l'accordo e il prezzo vi arrivano per iscritto prima di qualsiasi conferma.",
    ],
  },

  arrival: {
    heading: "Come si arriva a Siracusa",
    lead: "Quasi tutti passano da Catania, in aereo o in nave. Non c'è uno scalo più vicino.",
    options: [
      {
        id: "catania-airport",
        label: "In aereo",
        body: "Catania-Fontanarossa serve tutto il sud-est. La sua pagina tratta le tre aerostazioni, l'incontro con l'autista e le tratte. Non pubblichiamo un tempo di percorrenza per la discesa: le cifre in circolazione non concordano e preferiamo che sia l'operatore a confermarlo al preventivo piuttosto che scrivere qui qualcosa di sbagliato per metà anno.",
      },
      {
        id: "catania-cruise-port",
        label: "In nave",
        body: "Siracusa è una delle tre cose che un crocierista sbarcato a Catania può realisticamente fare in giornata, insieme all'Etna e a Taormina: una delle tre, non tutte. Lo scalo è trattato sulla sua pagina; è l'orario di rientro a bordo a determinare come si costruisce la giornata.",
      },
    ],
    note: "Diteci se il vostro indirizzo è in Ortigia o in terraferma. È l'informazione più utile su un arrivo a Siracusa, ed è quella che manca più spesso perché la prenotazione diceva soltanto «Siracusa».",
  },

  kerb: {
    heading: "Entrare in Ortigia",
    lead: "All'isola si accede da due ponti, e cosa possa fare un veicolo una volta passati dipende da regole che cambiano.",
    items: [
      {
        title: "Due ponti, e non sono intercambiabili",
        body: "Ortigia è unita alla città dal Ponte Umbertino, il più antico dei due, e dal Ponte Santa Lucia. Quale si possa percorrere, e in quale senso, è stato modificato più di una volta dal Comune. Le fonti a nostra disposizione si contraddicono sull'assetto attuale, quindi non pubblichiamo qui una regola che potrebbe essere già superata.",
      },
      {
        title: "L'isola è a traffico limitato",
        body: "L'accesso per i non residenti è limitato ed è stato ristretto per gradi. In pratica significa che il punto di scarico per un indirizzo di Ortigia è qualcosa che l'operatore conferma a ridosso della data, sulle regole effettivamente in vigore allora, e non qualcosa che possiamo scrivere in anticipo garantendolo.",
      },
      {
        title: "Chiedete alla struttura e riferitecelo",
        body: "Come a Taormina, dentro una zona limitata è spesso solo la struttura a poter far autorizzare un veicolo, di norma comunicandone in anticipo la targa. Chiedetelo alla prenotazione. Se la risposta è no, l'arrivo diventa uno scarico al margine e due passi a piedi fra ponte e vicoli: va benissimo, ma è meglio saperlo prima che scoprirlo con le valigie fuori.",
      },
      {
        title: "In terraferma non ci sono problemi",
        body: "Gli indirizzi fuori dall'isola si comportano normalmente: strade ordinarie, sosta ordinaria. Il parco archeologico e gli alberghi da quel lato dell'acqua sono arrivi facili. Se avete ancora la possibilità di scegliere e viaggiate carichi, è un elemento da considerare prima di prenotare la camera.",
      },
    ],
  },

  nearby: {
    heading: "Dove si va poi",
    lead: "Le pagine dei luoghi più spesso abbinati a Siracusa.",
    items: [
      {
        id: "catania",
        body: "A nord lungo la costa, ed è la base da cui quasi tutti arrivano qui.",
      },
      {
        id: "taormina",
        body: "Ancora più a nord, sopra la costa. Da qui è una giornata intera e non una mezza.",
      },
      {
        id: "catania-cruise-port",
        body: "Lo scalo crocieristico da cui Siracusa viene visitata più spesso.",
      },
      {
        id: "sicily",
        body: "La pagina regionale: quale scalo conviene secondo dove alloggiate, e come si tiene insieme l'isola.",
      },
    ],
  },

  practical: {
    heading: "Dettagli pratici",
    lead: "Le cose che decidono come finisce un arrivo a Siracusa.",
    items: [
      {
        term: "Isola o terraferma",
        detail: "Ditecelo. Cambia il veicolo, il punto di fermata e se alla fine ci sia da camminare, e di norma la conferma di prenotazione da sola non lo dice a un autista.",
      },
      {
        term: "L'autorizzazione della struttura",
        detail: "Per un indirizzo in Ortigia, chiedete all'albergo se può far autorizzare una targa e riferiteci la risposta. Dove si può, l'arrivo è semplice; dove non si può, mettiamo in conto la camminata invece di scoprirla.",
      },
      {
        term: "Bagagli",
        detail: "Contate tutto ciò che non si piega. Sull'isola l'ultimo tratto può essere a piedi, sul ponte o fra i vicoli, e lì il numero di valigie è un vincolo reale e non una formalità.",
      },
      {
        term: "Il numero del volo",
        detail: "Al posto dell'orario. Con quello l'autista vede il ritardo mentre accade; senza, un volo in ritardo diventa una telefonata fatta da un aereo appena atterrato.",
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
    heading: "Domande sui transfer per Siracusa",
    items: [
      {
        question: "La vettura può entrare in Ortigia?",
        answer: "Dipende dalle regole in vigore e dal vostro albergo. All'isola si accede da due ponti e l'ingresso dei non residenti è limitato, con un assetto modificato più di una volta. Se la struttura può far autorizzare in anticipo una targa, l'arrivo è lineare; se non può, si scarica al margine e l'ultimo tratto si fa a piedi. Quale dei due casi valga lo conferma l'operatore a ridosso della data.",
      },
      {
        question: "Su quale aeroporto si atterra per Siracusa?",
        answer: "Catania: non ce n'è uno più vicino e serve tutto il sud-est. La sua pagina tratta le tre aerostazioni, l'incontro con l'autista e le tratte. Diteci se alloggiate in Ortigia o in terraferma e il resto discende da lì.",
      },
      {
        question: "Quanto ci vuole dall'aeroporto di Catania?",
        answer: "Non pubblichiamo una cifra. I tempi in circolazione non concordano fra loro e preferiamo che sia l'operatore a confermare l'itinerario al preventivo piuttosto che scrivere un numero sbagliato per metà anno. È un tragitto semplice: è solo che non ci mettiamo un cronometro in anticipo.",
      },
      {
        question: "Ortigia è davvero un'isola?",
        answer: "Sì: è il centro storico di Siracusa ed è separata dalla città in terraferma, collegata dal Ponte Umbertino e dal Ponte Santa Lucia. Non è un dettaglio formale. È il motivo per cui un albergo sull'isola e uno a cinque minuti in terraferma sono due arrivi completamente diversi.",
      },
      {
        question: "Siamo in crociera con scalo a Catania: riusciamo a vedere Siracusa?",
        answer: "Sì, ed è una delle tre scelte realistiche da uno scalo catanese — Siracusa, l'Etna o Taormina. Una delle tre, non tutte. Indicateci nome della nave, data e orario di rientro a bordo: la giornata si costruisce a ritroso da lì. Se quello che avete in mente non ci sta, ve lo diciamo.",
      },
      {
        question: "Cosa comprende qui il sito UNESCO?",
        answer: "Siracusa è stata iscritta nel 2005 insieme alla Necropoli di Pantalica. In pratica significa due cose ben distinte da visitare: la città con la sua isola, e la necropoli rupestre nell'entroterra. Non sono una tappa sola, e una giornata che voglia comprendere entrambe è un lavoro diverso da una che resti in città.",
      },
      {
        question: "Quanto costa un transfer per Siracusa?",
        answer: "Non esiste un listino. Veicolo, numero di passeggeri, data e il fatto che l'indirizzo sia o meno sull'isola spostano tutti la cifra. Descrivete il tragitto e il preventivo arriva per iscritto. Non viene addebitato nulla finché non lo avete accettato.",
      },
      {
        question: "I veicoli sono vostri?",
        answer: "No. Organizziamo i transfer con società di noleggio con conducente e autisti locali autorizzati in Sicilia. Noi seguiamo la richiesta, l'organizzazione e il preventivo scritto; il servizio è svolto dall'operatore locale, che pagate direttamente.",
      },
    ],
  },

  close: {
    heading: "Diteci da che parte dell'acqua state",
    body: "Isola o terraferma, l'indirizzo completo, il volo o la nave e quanti siete. L'organizzazione e il prezzo tornano indietro per iscritto, e se l'arrivo non funziona come lo avete descritto ve lo diciamo invece di preventivarlo lo stesso.",
    cta: "Richiedi un preventivo",
  },
};
