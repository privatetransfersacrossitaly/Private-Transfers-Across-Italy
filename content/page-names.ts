import type { PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * The short name of every page, in both languages.
 *
 * One table, read by three things that must agree: the breadcrumb trail, the
 * `BreadcrumbList` markup generated from that trail, and the navigation
 * menus. When a page is renamed it is renamed once.
 *
 * These are short forms — "Fiumicino (FCO)", not the page's full title. A
 * breadcrumb and a menu need a label, not a headline; the page's own `<h1>`
 * and `<title>` live in its content file.
 */
export const pageNames: Record<PageId, Record<Locale, string>> = {
  home: { en: "Home", it: "Home" },
  rome: { en: "Rome", it: "Roma" },
  fiumicino: { en: "Fiumicino (FCO)", it: "Fiumicino (FCO)" },
  ciampino: { en: "Ciampino (CIA)", it: "Ciampino (CIA)" },
  civitavecchia: { en: "Civitavecchia", it: "Civitavecchia" },
  "rome-stations": {
    en: "Railway stations",
    it: "Stazioni ferroviarie",
  },
  "route-fco-rome": {
    en: "Fiumicino to Rome",
    it: "Da Fiumicino a Roma",
  },
  "route-cia-rome": {
    en: "Ciampino to Rome",
    it: "Da Ciampino a Roma",
  },
  "route-rome-civitavecchia": {
    en: "Rome to Civitavecchia",
    it: "Da Roma a Civitavecchia",
  },
  "route-fco-civitavecchia": {
    en: "Fiumicino to Civitavecchia",
    it: "Da Fiumicino a Civitavecchia",
  },

  milan: { en: "Milan", it: "Milano" },
  malpensa: { en: "Malpensa (MXP)", it: "Malpensa (MXP)" },
  linate: { en: "Linate (LIN)", it: "Linate (LIN)" },
  "bergamo-airport": { en: "Bergamo (BGY)", it: "Bergamo (BGY)" },
  "milan-stations": {
    en: "Railway stations",
    it: "Stazioni ferroviarie",
  },
  "lake-como": { en: "Lake Como", it: "Lago di Como" },
  "route-mxp-milan": {
    en: "Malpensa to Milan",
    it: "Da Malpensa a Milano",
  },
  "route-lin-milan": { en: "Linate to Milan", it: "Da Linate a Milano" },
  "route-bgy-milan": { en: "Bergamo to Milan", it: "Da Bergamo a Milano" },
  "route-mxp-como": {
    en: "Malpensa to Lake Como",
    it: "Da Malpensa al Lago di Como",
  },

  // Venice in English, Venezia in Italian: the same city, the same page.
  venice: { en: "Venice", it: "Venezia" },
  verona: { en: "Verona", it: "Verona" },
  "venice-marco-polo": { en: "Marco Polo (VCE)", it: "Marco Polo (VCE)" },
  "treviso-airport": { en: "Treviso (TSF)", it: "Treviso (TSF)" },
  "verona-airport": { en: "Villafranca (VRN)", it: "Villafranca (VRN)" },
  "venice-stations": {
    en: "Railway stations",
    it: "Stazioni ferroviarie",
  },
  "route-vce-venice": {
    en: "Marco Polo to Venice",
    it: "Da Marco Polo a Venezia",
  },
  "route-tsf-venice": {
    en: "Treviso to Venice",
    it: "Da Treviso a Venezia",
  },
  "route-vrn-verona": {
    en: "Villafranca to Verona",
    it: "Da Villafranca a Verona",
  },

  // Florence in English, Firenze in Italian: the same city, the same page.
  florence: { en: "Florence", it: "Firenze" },
  "pisa-airport": { en: "Pisa (PSA)", it: "Pisa (PSA)" },
  "florence-airport": { en: "Peretola (FLR)", it: "Peretola (FLR)" },
  // Not translated: the valley is called the Val d'Orcia in both languages.
  "val-dorcia": { en: "Val d'Orcia", it: "Val d'Orcia" },
  "route-psa-florence": {
    en: "Pisa to Florence",
    it: "Da Pisa a Firenze",
  },
  "route-flr-florence": {
    en: "Peretola to Florence",
    it: "Da Peretola a Firenze",
  },

  // Bologna and Ravenna keep their names in both languages.
  bologna: { en: "Bologna", it: "Bologna" },
  blq: { en: "Marconi (BLQ)", it: "Marconi (BLQ)" },
  ravenna: { en: "Ravenna", it: "Ravenna" },
  "ravenna-terminal": {
    en: "Porto Corsini",
    it: "Porto Corsini",
  },
  "route-terminal-ravenna": {
    en: "Terminal to Ravenna",
    it: "Dal terminal a Ravenna",
  },
  "route-ravenna-terminal": {
    en: "Ravenna to the terminal",
    it: "Da Ravenna al terminal",
  },

  // Hotel names are proper nouns and are not translated. The breadcrumb
  // carries a short form; each page's own <h1> gives the full name.
  "hotel-majestic": { en: "Grand Hotel Majestic", it: "Grand Hotel Majestic" },
  "hotel-commercianti": {
    en: "Art Hotel Commercianti",
    it: "Art Hotel Commercianti",
  },
  "hotel-excelsior": {
    en: "Starhotels Excelsior",
    it: "Starhotels Excelsior",
  },

  "route-blq-majestic": {
    en: "BLQ to the Majestic",
    it: "Dal BLQ al Majestic",
  },
  "route-blq-commercianti": {
    en: "BLQ to the Commercianti",
    it: "Dal BLQ al Commercianti",
  },
  "route-blq-excelsior": {
    en: "BLQ to the Excelsior",
    it: "Dal BLQ all'Excelsior",
  },

  // Naples in English, Napoli in Italian: the same city, the same page.
  naples: { en: "Naples", it: "Napoli" },
  "salerno-airport": {
    en: "Salerno Costa d'Amalfi",
    it: "Salerno Costa d'Amalfi",
  },
  "naples-cruise-port": {
    en: "Stazione Marittima",
    it: "Stazione Marittima",
  },
  caserta: { en: "Caserta", it: "Caserta" },
  // Pompeii in English, Pompei in Italian — the Naples/Napoli rule again.
  pompeii: { en: "Pompeii", it: "Pompei" },
  positano: { en: "Positano", it: "Positano" },
  amalfi: { en: "Amalfi", it: "Amalfi" },
  "nap-airport": { en: "Capodichino", it: "Capodichino" },
  ravello: { en: "Ravello", it: "Ravello" },

  // Puglia. Place names are the same in both languages except the region
  // itself, which English-language travel writing still often calls Apulia —
  // the Italian form is used on both sides here because that is what the
  // signage, the airports and the accommodation all use.
  puglia: { en: "Puglia", it: "Puglia" },
  bari: { en: "Bari", it: "Bari" },
  brindisi: { en: "Brindisi", it: "Brindisi" },
  lecce: { en: "Lecce", it: "Lecce" },
  ostuni: { en: "Ostuni", it: "Ostuni" },
  alberobello: { en: "Alberobello", it: "Alberobello" },
  monopoli: { en: "Monopoli", it: "Monopoli" },
  "polignano-a-mare": { en: "Polignano a Mare", it: "Polignano a Mare" },
  salento: { en: "Salento", it: "Salento" },

  about: { en: "About us", it: "Chi siamo" },
  quote: { en: "Get a quote", it: "Preventivo" },

  privacy: { en: "Privacy", it: "Privacy" },
  terms: { en: "Terms", it: "Termini" },
  cancellation: { en: "Cancellation", it: "Cancellazioni" },
};

export function pageName(id: PageId, locale: Locale): string {
  return pageNames[id][locale];
}
