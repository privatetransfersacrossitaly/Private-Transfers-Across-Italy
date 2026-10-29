import type { QuoteContent } from "./types";

/**
 * Richiedi un preventivo, in italiano.
 *
 * Scritto in italiano, non tradotto frase per frase. Vale la stessa regola di
 * tutto il sito: una richiesta è una domanda, non una prenotazione, e qui non
 * si promettono prezzi, veicoli, tempi di risposta o disponibilità. Il sito dà
 * del voi.
 */
export const quoteIt: QuoteContent = {
  meta: {
    title: "Richiedi un preventivo",
    description:
      "Descrivete il vostro viaggio in Italia e ricevete un preventivo scritto: i due indirizzi, la data, chi viaggia e quanti bagagli. Una richiesta non è una prenotazione.",
  },

  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Richiedi un preventivo",
    h1: "Raccontateci il viaggio",
    lead:
      "Più il viaggio è descritto con precisione, più esatta può essere la risposta. Tutto quello che scrivete qui sotto lo legge una persona, non lo valuta un sistema.",
    assurances: [
      "Nessun account, nessun pagamento, nulla da confermare qui.",
      "Un preventivo scritto, con l'accordo nel dettaglio.",
      "Una risposta netta se il viaggio non si può fare come chiesto.",
    ],
  },

  sections: {
    journey: "Il viaggio",
    return: "Il ritorno",
    party: "Chi viaggia",
    contact: "Come contattarvi",
    extra: "Altro",
    review: "Invio",
  },

  sectionNotes: {
    journey: "Dove andate e quando. I due indirizzi contano più di ogni altra cosa in questo modulo.",
    party: "È il bagaglio, più spesso del numero di persone, a determinare il veicolo.",
    contact: "Perché il preventivo possa raggiungervi e perché possiamo chiedervi chiarimenti.",
    extra: "Tutto ciò che cambia il veicolo, il percorso o gli orari.",
  },

  optionalLabel: "Facoltativo",

  labels: {
    service: "Tipo di transfer",
    tripType: "Aggiungi il viaggio di ritorno",
    tripTypeDescription:
      "Spuntate questa casella e comparirà una seconda serie di campi. Lasciatela vuota per un viaggio di sola andata.",
    pickup: "Indirizzo di partenza",
    dropoff: "Indirizzo di arrivo",
    date: "Data",
    time: "Ora",
    travelReference: "Numero di volo, treno o nave",
    returnPickup: "Indirizzo di partenza del ritorno",
    returnDropoff: "Indirizzo di arrivo del ritorno",
    returnDate: "Data del ritorno",
    returnTime: "Ora del ritorno",
    returnTravelReference: "Numero di volo, treno o nave del ritorno",
    adults: "Adulti",
    children: "Bambini",
    childAges: "Età dei bambini",
    holdBags: "Valigie",
    cabinBags: "Bagagli a mano",
    name: "Nome e cognome",
    email: "Indirizzo e-mail",
    phoneCountry: "Paese",
    phoneNational: "Numero di telefono",
    notes: "Qualcosa che dovremmo sapere",
  },

  hints: {
    pickup: "Via e numero civico dove ci sono. Va bene anche il nome di un aeroporto o di una stazione.",
    dropoff: "Con il terminal o l'accosto se il viaggio finisce in aeroporto o in porto.",
    travelReference: "Facoltativo, ed è ciò che consente di gestire un arrivo in ritardo.",
    childAges: "Necessaria quando viaggiano bambini: il sistema di ritenuta dipende dall'età.",
    holdBags: "Contate le valigie, non le persone. È il bagaglio, più spesso dei passeggeri, a determinare il veicolo.",
    phoneCountry: "Dove è registrato il vostro numero, così il prefisso è quello giusto.",
    phoneNational: "Senza prefisso internazionale: il numero come lo comporreste da casa.",
    notes: "Una sedia a rotelle, un animale, un seggiolino, attrezzatura ingombrante, una tappa intermedia, un indirizzo ad accesso limitato.",
    swap: "Copia i dati dell'andata nel ritorno, invertendo i due capi.",
  },

  placeholders: {
    pickup: "es. Aeroporto di Fiumicino, Terminal 1",
    dropoff: "es. Via dei Condotti 12, Roma",
    travelReference: "es. AZ610",
    childAges: "es. 3 e 7 anni",
    name: "Il vostro nome",
    email: "nome@esempio.com",
    phoneNational: "333 123 4567",
    notes: "Facoltativo",
  },

  services: {
    airport: "Transfer aeroportuale",
    hotel: "Transfer per l'hotel",
    station: "Transfer per la stazione",
    cruise: "Transfer per il porto crocieristico",
    intercity: "Fra due città",
    "day-trip": "Escursione in giornata o tour privato",
    hourly: "A ore",
    other: "Altro",
  },

  errors: {
    required: "Serve questo dato per poter preventivare il viaggio.",
    email: "Non sembra un indirizzo e-mail a cui possiamo rispondere.",
    phone: "Non sembra un numero di telefono.",
    phone_country: "Scegliete un Paese dall'elenco.",
    phone_national: "Non è un numero valido per il Paese scelto. Omettete il prefisso internazionale.",
    date_past: "Quella data e quell'ora sono già passate.",
    date_invalid: "Non riusciamo a interpretare questa data e ora.",
    return_before_outbound: "Il ritorno non può precedere l'andata.",
    adults_min: "Deve viaggiare almeno un adulto.",
    number_invalid: "Inserite un numero intero.",
    too_long: "È più lungo di quanto questo campo possa contenere.",
  },

  actions: {
    submit: "Invia il viaggio",
    submitting: "Invio in corso…",
    swapLegs: "Usa i dati dell'andata, invertiti",
    another: "Invia un altro viaggio",
  },

  outcomes: {
    invalid: "Alcune cose vanno corrette prima di poter inviare. Sono segnalate qui sotto.",
    delivered: {
      heading: "Abbiamo ricevuto la vostra richiesta",
      body:
        "Una copia è stata inviata all'indirizzo che ci avete lasciato. Vi risponderemo con un prezzo per questo viaggio e con l'accordo per iscritto.",
      referenceLabel: "Il vostro riferimento",
      note:
        "Questa è una richiesta, non una prenotazione. Nulla è riservato e nessun veicolo è assegnato alla vostra data finché il viaggio non è stato confermato per iscritto e voi non l'avete accettato.",
    },
    notConfigured: {
      heading: "Questo modulo non è ancora attivo",
      body:
        "I vostri dati sono stati controllati ma non è stato inviato nulla, perché il sistema dietro questo modulo non è ancora stato configurato. Nulla è stato conservato e nessuno è stato avvisato. Riprovate più tardi.",
    },
    unreachable: {
      heading: "Non è stato inviato nulla",
      body:
        "Qualcosa non ha funzionato da parte nostra e la vostra richiesta non ci è arrivata. Nulla è stato salvato. Riprovate fra qualche minuto.",
    },
    rejected: {
      heading: "Richiesta non accettata",
      body:
        "Non è stato possibile accettare questo invio. Se pensate che si tratti di un errore, riprovate fra qualche minuto.",
    },
  },

  disclaimer:
    "Inviare questo modulo significa fare una domanda. Non riserva un veicolo, non blocca una data e non crea una prenotazione: un viaggio è prenotato soltanto quando è stato confermato per iscritto e voi l'avete accettato.",

  aside: {
    heading: "Che cosa succede dopo",
    items: [
      {
        term: "La leggiamo",
        detail:
          "Ogni richiesta la legge una persona. Se una pagina di questo sito dice che un'auto non può fermarsi dove avete chiesto, ve lo diremo, invece di quotarvi qualcosa che non funzionerebbe.",
      },
      {
        term: "Ricevete un preventivo",
        detail:
          "Un prezzo per questo viaggio, con il veicolo, il punto d'incontro con il conducente ai due capi, che cosa comprende il prezzo e che cosa della richiesta non si può fare come l'avete formulata.",
      },
      {
        term: "Decidete voi",
        detail:
          "Un viaggio è prenotato quando è stato confermato per iscritto e voi l'avete accettato. Fino ad allora non dovete nulla e nulla è bloccato.",
      },
    ],
    note:
      "Qui non viene promesso alcun tempo di risposta, perché non ne è stato fissato alcuno. Nulla in questa pagina è una conferma.",
  },
};
