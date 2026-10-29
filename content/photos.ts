import type { Locale } from "@/lib/site";

/**
 * Every photograph on the site, with the record of where it came from.
 *
 * ── Why these licences ─────────────────────────────────────────────────────
 * All of them are CC0 or public domain. That is a deliberate constraint: the
 * site presents photography with no visible source caption, and a clean
 * presentation is only lawful if the licence does not require attribution.
 * CC BY and CC BY-SA images were therefore ruled out rather than used with
 * their credits quietly removed.
 *
 * The record below — creator, provider, source page, licence and its URL — is
 * internal documentation. It is never rendered: no component reads it, and
 * nothing in it reaches the page.
 *
 * Every image was downloaded and looked at before being used. Two candidates
 * were rejected at that step: a Tivoli "photograph" that turned out to be a
 * sepia engraving, and a Venice one shot from inside a moving vehicle.
 *
 * Alt text describes what is visible, in each language, for someone who
 * cannot see it. It never mentions where the file came from — alt text is not
 * a caption, and a caption is not a credit line.
 */
export type SitePhoto = {
  slug: string;
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  /** Internal provenance record. Not rendered anywhere. */
  source: {
    creator: string;
    provider: string;
    sourceUrl: string;
    licence: string;
    licenceUrl: string;
    attributionRequired: false;
  };
};

export const photos = {
  "italy-amalfi-coast": {
    slug: "italy-amalfi-coast",
    src: "/photos/italy-amalfi-coast.jpg",
    width: 1024,
    height: 443,
    alt: {
      en: "The town of Amalfi on its coastline, with a pier reaching into the sea.",
      it: "Il paese di Amalfi sulla sua costa, con un pontile che entra nel mare.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/5921038/photo-image-background-public-domain-ocean",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "rome-colosseum": {
    slug: "rome-colosseum",
    src: "/photos/rome-colosseum.jpg",
    width: 2200,
    height: 1467,
    alt: {
      en: "The Colosseum in Rome, its tiers of arches seen from close to.",
      it: "Il Colosseo a Roma, con i suoi ordini di arcate visti da vicino.",
    },
    source: {
      creator: "Julian Lupyan",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=175885773",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "rome-trevi-fountain": {
    slug: "rome-trevi-fountain",
    src: "/photos/rome-trevi-fountain.jpg",
    width: 1024,
    height: 683,
    alt: {
      en: "The sculpted figures and horses of the Trevi Fountain in Rome.",
      it: "Le statue e i cavalli della Fontana di Trevi a Roma.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/3295758/free-photo-image-italy-sculpture-brown",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "rome-termini": {
    slug: "rome-termini",
    src: "/photos/rome-termini.jpg",
    width: 2200,
    height: 1467,
    alt: {
      en: "A regional train waiting at a platform at Roma Termini.",
      it: "Un treno regionale fermo a un binario di Roma Termini.",
    },
    source: {
      creator: "Bvcmz248.5",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=181077615",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "milan-porta-nuova": {
    slug: "milan-porta-nuova",
    src: "/photos/milan-porta-nuova.jpg",
    width: 2200,
    height: 1467,
    alt: {
      en: "The Milan skyline, with the towers of the Porta Nuova district above the city.",
      it: "Lo skyline di Milano, con le torri di Porta Nuova sopra la città.",
    },
    source: {
      creator: "https://www.pexels.com/u/ghostpresenter/",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=59053766",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "florence-skyline": {
    slug: "florence-skyline",
    src: "/photos/florence-skyline.jpg",
    width: 1024,
    height: 683,
    alt: {
      en: "The rooftops of Florence from above, with Giotto's campanile rising among them.",
      it: "I tetti di Firenze dall'alto, con il campanile di Giotto che svetta fra loro.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/3299493/free-photo-image-aerial-view-architecture",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "tuscany-val-dorcia": {
    slug: "tuscany-val-dorcia",
    src: "/photos/tuscany-val-dorcia.jpg",
    width: 2048,
    height: 1536,
    alt: {
      en: "A track running between cypresses across the hills of the Val d'Orcia in Tuscany.",
      it: "Una strada bianca fra i cipressi sulle colline della Val d'Orcia, in Toscana.",
    },
    source: {
      creator: "Fabrizio Lunardi",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=75789172",
      licence: "CC0 1.0".trim(),
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "airport-check-in": {
    slug: "airport-check-in",
    src: "/photos/airport-check-in.jpg",
    width: 2200,
    height: 1650,
    alt: {
      en: "An airport check-in hall, with self-service kiosks and desks along one side.",
      it: "L'area check-in di un aeroporto, con i totem per l'accettazione e i banchi lungo un lato.",
    },
    source: {
      creator: "Rasunda1937",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=148291579",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "cruise-ship-dock": {
    slug: "cruise-ship-dock",
    src: "/photos/cruise-ship-dock.jpg",
    width: 1024,
    height: 576,
    alt: {
      en: "A cruise ship moored alongside a pier, with open sea beyond it.",
      it: "Una nave da crociera ormeggiata a un pontile, con il mare aperto alle spalle.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/5922144/photo-image-background-public-domain-blue",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "road-scenic": {
    slug: "road-scenic",
    src: "/photos/road-scenic.jpg",
    width: 1024,
    height: 683,
    alt: {
      en: "A lorry on a road curving between fields and woodland, seen from above.",
      it: "Un camion su una strada che curva fra campi e boschi, vista dall'alto.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/6022123/photo-image-public-domain-nature-free",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "rome-st-peters": {
    slug: "rome-st-peters",
    src: "/photos/rome-st-peters.jpg",
    width: 1600,
    height: 1063,
    alt: {
      en: "The facade and dome of St Peter's Basilica in Rome, behind one of the fountains in the square.",
      it: "La facciata e la cupola della Basilica di San Pietro a Roma, dietro una delle fontane della piazza.",
    },
    source: {
      creator: "carlo75",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=82446213",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "rome-tiber": {
    slug: "rome-tiber",
    src: "/photos/rome-tiber.jpg",
    width: 1024,
    height: 523,
    alt: {
      en: "The Tiber running between its embankments in Rome, with the dome of St Peter's on the skyline beyond.",
      it: "Il Tevere fra i lungotevere a Roma, con la cupola di San Pietro all'orizzonte.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/5946366/free-public-domain-cc0-photo",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "milan-duomo": {
    slug: "milan-duomo",
    src: "/photos/milan-duomo.jpg",
    width: 1800,
    height: 1200,
    alt: {
      en: "The marble west front of Milan Cathedral, with people crossing the square before it.",
      it: "La facciata in marmo del Duomo di Milano, con la gente che attraversa la piazza davanti.",
    },
    source: {
      creator: "Skarkkai",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=10945353",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "milan-galleria": {
    slug: "milan-galleria",
    src: "/photos/milan-galleria.jpg",
    width: 1200,
    height: 906,
    alt: {
      en: "The glass and iron dome of the Galleria Vittorio Emanuele II in Milan, seen from below.",
      it: "La cupola in ferro e vetro della Galleria Vittorio Emanuele II a Milano, vista dal basso.",
    },
    source: {
      creator: "Dennis Hipp (Zepto)",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=144015272",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "milan-centrale": {
    slug: "milan-centrale",
    src: "/photos/milan-centrale.jpg",
    width: 1280,
    height: 854,
    alt: {
      en: "The stone concourse of Milano Centrale station, with departure boards above the doorways and travellers crossing with luggage.",
      it: "L'atrio in pietra della stazione di Milano Centrale, con i tabelloni delle partenze sopra le porte e viaggiatori che lo attraversano con i bagagli.",
    },
    source: {
      creator: "Leonhard Lenz",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=152127858",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "lake-como-shore": {
    slug: "lake-como-shore",
    src: "/photos/lake-como-shore.jpg",
    width: 1280,
    height: 960,
    alt: {
      en: "Lake Como at dusk, with small boats at a jetty and mountains closing in on both shores.",
      it: "Il Lago di Como al tramonto, con piccole imbarcazioni a un pontile e le montagne che stringono entrambe le sponde.",
    },
    source: {
      creator: "Oursana",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=151694538",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "lake-como-bellagio": {
    slug: "lake-como-bellagio",
    src: "/photos/lake-como-bellagio.jpg",
    width: 1024,
    height: 683,
    alt: {
      en: "Lake Como seen across the water from a planted terrace, with a lakeside town on the far shore below wooded hills.",
      it: "Il Lago di Como visto dall'altra sponda da una terrazza fiorita, con un paese sulla riva opposta sotto le colline boscose.",
    },
    source: {
      creator: "unattributed",
      provider: "rawpixel",
      sourceUrl: "https://www.rawpixel.com/image/6076071/lake-como-view-bellagio-italy",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      attributionRequired: false,
    },
  },
  "lake-como-ferry": {
    slug: "lake-como-ferry",
    src: "/photos/lake-como-ferry.jpg",
    width: 1600,
    height: 1200,
    alt: {
      en: "A passenger ferry crossing Lake Como at dusk, with a headland rising behind it.",
      it: "Un traghetto passeggeri attraversa il Lago di Como al tramonto, con un promontorio che si alza alle sue spalle.",
    },
    source: {
      creator: "Oursana",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=151686590",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "malpensa-terminal": {
    slug: "malpensa-terminal",
    src: "/photos/malpensa-terminal.jpg",
    width: 1600,
    height: 1200,
    alt: {
      en: "A terminal building at Malpensa Airport seen from the approach road, with an elevated walkway running along its front.",
      it: "Un terminal dell'aeroporto di Malpensa visto dalla strada di accesso, con una passerella sopraelevata lungo la facciata.",
    },
    source: {
      creator: "SIG SG 510",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=71671910",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "bergamo-airport": {
    slug: "bergamo-airport",
    src: "/photos/bergamo-airport.jpg",
    width: 1600,
    height: 1200,
    alt: {
      en: "The apron at Bergamo Orio al Serio airport at dusk, with aircraft at stands and the terminal building behind them.",
      it: "Il piazzale dell'aeroporto di Bergamo Orio al Serio al tramonto, con gli aerei alle piazzole e il terminal sullo sfondo.",
    },
    source: {
      creator: "Air fans",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=166370553",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/",
      attributionRequired: false,
    },
  },
  "venice-santa-lucia-canal": {
    slug: "venice-santa-lucia-canal",
    src: "/photos/venice-santa-lucia-canal.jpg",
    width: 1600,
    height: 1059,
    alt: {
      en: "The Grand Canal beside Venezia Santa Lucia station, with boats moored at landing stages and the station forecourt along the bank.",
      it: "Il Canal Grande accanto alla stazione di Venezia Santa Lucia, con le barche ormeggiate ai pontili e il piazzale della stazione lungo la riva.",
    },
    source: {
      creator: "Gary Houston",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=27719654",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "venice-vaporetto": {
    slug: "venice-vaporetto",
    src: "/photos/venice-vaporetto.jpg",
    width: 1600,
    height: 1059,
    alt: {
      en: "A public water bus pulling in at a floating landing stage on a Venice canal, with passengers waiting to board.",
      it: "Un vaporetto di linea accosta a un pontile galleggiante su un canale di Venezia, con i passeggeri in attesa di salire.",
    },
    source: {
      creator: "Gary Houston",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=20715421",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
  "venice-grand-canal": {
    slug: "venice-grand-canal",
    src: "/photos/venice-grand-canal.jpg",
    width: 2200,
    height: 1238,
    alt: {
      en: "The Grand Canal in Venice at golden hour, with gondolas and palazzi along the water.",
      it: "Il Canal Grande a Venezia all'ora dorata, con gondole e palazzi lungo l'acqua.",
    },
    source: {
      creator: "Jenny Kim jen_nysj",
      provider: "wikimedia",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=61901861",
      licence: "CC0 1.0",
      licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      attributionRequired: false,
    },
  },
} as const satisfies Record<string, SitePhoto>;

export type PhotoSlug = keyof typeof photos;

export function photo(slug: PhotoSlug): SitePhoto {
  return photos[slug];
}
