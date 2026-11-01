import type {
  AlberobelloContent,
  BariContent,
  BrindisiContent,
  LecceContent,
  MonopoliContent,
  OstuniContent,
  PolignanoContent,
  PugliaPillarContent,
  SalentoContent,
} from "./types";
import { pugliaPillarEn } from "./pillar-en";
import { pugliaPillarIt } from "./pillar-it";
import { bariEn } from "./bari-en";
import { bariIt } from "./bari-it";
import { brindisiEn } from "./brindisi-en";
import { brindisiIt } from "./brindisi-it";
import { lecceEn } from "./lecce-en";
import { lecceIt } from "./lecce-it";
import { ostuniEn } from "./ostuni-en";
import { ostuniIt } from "./ostuni-it";
import { alberobelloEn } from "./alberobello-en";
import { alberobelloIt } from "./alberobello-it";
import { monopoliEn } from "./monopoli-en";
import { monopoliIt } from "./monopoli-it";
import { polignanoEn } from "./polignano-en";
import { polignanoIt } from "./polignano-it";
import { salentoEn } from "./salento-en";
import { salentoIt } from "./salento-it";

/**
 * The Puglia cluster's content, keyed by language.
 *
 * Split into one file per language rather than one object holding both,
 * because each pillar runs to several thousand words and the two were
 * written independently — the Italian is not a translation of the English
 * and reviewing them side by side in one file encourages making it one.
 */
export const pugliaPillar: PugliaPillarContent = {
  en: pugliaPillarEn,
  it: pugliaPillarIt,
};

/** Bari: the airport and the cruise port. */
export const bariPage: BariContent = { en: bariEn, it: bariIt };

/** Brindisi: the southern gateway. */
export const brindisiPage: BrindisiContent = { en: brindisiEn, it: brindisiIt };

/** Lecce: the walled city. */
export const leccePage: LecceContent = { en: lecceEn, it: lecceIt };

/** Ostuni: the white town and its masserie. */
export const ostuniPage: OstuniContent = { en: ostuniEn, it: ostuniIt };

/** Alberobello: the listed trulli districts. */
export const alberobelloPage: AlberobelloContent = {
  en: alberobelloEn,
  it: alberobelloIt,
};

/** Monopoli: the harbour town and its coastline. */
export const monopoliPage: MonopoliContent = { en: monopoliEn, it: monopoliIt };

/** Polignano a Mare: the cliff town. */
export const polignanoPage: PolignanoContent = {
  en: polignanoEn,
  it: polignanoIt,
};

/** Salento: the peninsula, as a circuit. */
export const salentoPage: SalentoContent = { en: salentoEn, it: salentoIt };

export type {
  PugliaPillar,
  PugliaTown,
  PugliaJourney,
  BariPage,
  BrindisiPage,
  LeccePage,
  OstuniPage,
  AlberobelloPage,
  MonopoliPage,
  PolignanoPage,
  SalentoPage,
} from "./types";
