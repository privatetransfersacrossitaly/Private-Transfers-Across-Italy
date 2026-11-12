import type { Locale } from "@/lib/site";

/**
 * The words around the blog: index page, post chrome, closing request.
 *
 * Posts themselves live in D1, not here. What lives here is everything a
 * post page says that is not the post — and it is written in the site's own
 * register, not Italy Taxi's. That site's post pages carry a trust bar
 * ("NCC-licensed drivers", "fixed prices") and a sidebar of service promises;
 * none of that is stated anywhere on this site, so none of it is carried
 * over. The closing request reuses the wording the About page already uses.
 */
export type BlogChrome = {
  meta: { title: string; description: string };
  breadcrumbLabel: string;
  index: {
    eyebrow: string;
    h1: string;
    lead: string;
    emptyHeading: string;
    emptyBody: string;
    readArticle: string;
  };
  post: {
    published: string;
    updated: string;
    contents: string;
    faqEyebrow: string;
    faqHeading: string;
    writtenBy: string;
    /** Byline under the title: "By <name>". */
    by: string;
    relatedHeading: string;
    allArticles: string;
    otherLanguage: string;
    /** The request box in the sticky sidebar, beside the contents list. */
    sidebarCtaHeading: string;
    sidebarCtaBody: string;
    sidebarCtaButton: string;
  };
  closing: {
    id: string;
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  dateLocale: string;
};

export const blogChrome: Record<Locale, BlogChrome> = {
  en: {
    meta: {
      title: "Blog: private transfers in Italy",
      description:
        "Articles on airports, stations, cruise ports and the roads between Italian cities, written from what the operators and comuni publish.",
    },
    breadcrumbLabel: "Breadcrumb",
    index: {
      eyebrow: "Blog",
      h1: "Articles on getting around Italy by car",
      lead:
        "Airports, stations, cruise ports and the rules that decide where a car can stop, written up one question at a time.",
      emptyHeading: "No articles yet",
      emptyBody:
        "The first articles are being written. Until then, the destination, airport and cruise-port pages cover the journeys people ask about most.",
      readArticle: "Read the article",
    },
    post: {
      published: "Published",
      updated: "Updated",
      contents: "In this article",
      faqEyebrow: "Questions",
      faqHeading: "Frequently asked questions",
      writtenBy: "Written by",
      by: "By",
      relatedHeading: "Related articles",
      allArticles: "All articles",
      otherLanguage: "Leggi in italiano",
      sidebarCtaHeading: "Need a car for this journey?",
      sidebarCtaBody:
        "Send the addresses, the date and time, how many of you there are and your luggage. We reply with a written quote.",
      sidebarCtaButton: "Request a quote",
    },
    closing: {
      id: "request",
      heading: "Tell us the journey",
      body:
        "Both addresses, the date and the time, how many of you there are and how much luggage, and the flight, train or ship if one is involved. That is enough to come back with a price for the journey and the arrangement in writing.",
      primaryCta: "Request a quote",
      secondaryCta: "All articles",
      note:
        "Journeys are quoted individually and are subject to confirmation. A quotation request is not a booking.",
    },
    dateLocale: "en-GB",
  },
  it: {
    meta: {
      title: "Blog: transfer privati in Italia",
      description:
        "Articoli su aeroporti, stazioni, porti crocieristici e strade tra le città italiane, scritti a partire da ciò che pubblicano gestori e comuni.",
    },
    breadcrumbLabel: "Percorso di navigazione",
    index: {
      eyebrow: "Blog",
      h1: "Articoli sugli spostamenti in auto in Italia",
      lead:
        "Aeroporti, stazioni, porti crocieristici e le regole che decidono dove un'auto può fermarsi, una domanda alla volta.",
      emptyHeading: "Ancora nessun articolo",
      emptyBody:
        "I primi articoli sono in preparazione. Nel frattempo, le pagine su destinazioni, aeroporti e porti crocieristici coprono i viaggi più richiesti.",
      readArticle: "Leggi l'articolo",
    },
    post: {
      published: "Pubblicato",
      updated: "Aggiornato",
      contents: "In questo articolo",
      faqEyebrow: "Domande",
      faqHeading: "Domande frequenti",
      writtenBy: "Scritto da",
      by: "Di",
      relatedHeading: "Articoli correlati",
      allArticles: "Tutti gli articoli",
      otherLanguage: "Read in English",
      sidebarCtaHeading: "Vi serve un'auto per questo viaggio?",
      sidebarCtaBody:
        "Indicate gli indirizzi, la data e l'ora, quanti siete e i bagagli. Vi rispondiamo con un preventivo scritto.",
      sidebarCtaButton: "Richiedi un preventivo",
    },
    closing: {
      id: "richiesta",
      heading: "Raccontateci il viaggio",
      body:
        "I due indirizzi, la data e l'ora, quanti siete e quanti bagagli, e il volo, il treno o la nave se ce n'è uno. Tanto basta per tornare da voi con un prezzo per quel viaggio e l'accordo per iscritto.",
      primaryCta: "Richiedi un preventivo",
      secondaryCta: "Tutti gli articoli",
      note:
        "I viaggi sono quotati singolarmente e sono soggetti a conferma. Una richiesta di preventivo non è una prenotazione.",
    },
    dateLocale: "it-IT",
  },
};
