import type {
  SicilyAirportContent,
  SicilyDestinationContent,
  SicilyPillarContent,
  SicilyPortContent,
} from "./types";
import { sicilyPillarEn } from "./pillar-en";
import { sicilyPillarIt } from "./pillar-it";
import { palermoEn } from "./palermo-en";
import { palermoIt } from "./palermo-it";
import { cataniaEn } from "./catania-en";
import { cataniaIt } from "./catania-it";
import { taorminaEn } from "./taormina-en";
import { taorminaIt } from "./taormina-it";
import { syracuseEn } from "./syracuse-en";
import { syracuseIt } from "./syracuse-it";
import { trapaniEn } from "./trapani-en";
import { trapaniIt } from "./trapani-it";
import { agrigentoEn } from "./agrigento-en";
import { agrigentoIt } from "./agrigento-it";
import { cefaluEn } from "./cefalu-en";
import { cefaluIt } from "./cefalu-it";
import { palermoAirportEn } from "./palermo-airport-en";
import { palermoAirportIt } from "./palermo-airport-it";
import { cataniaAirportEn } from "./catania-airport-en";
import { cataniaAirportIt } from "./catania-airport-it";
import { trapaniAirportEn } from "./trapani-airport-en";
import { trapaniAirportIt } from "./trapani-airport-it";
import { palermoPortEn } from "./palermo-port-en";
import { palermoPortIt } from "./palermo-port-it";
import { cataniaPortEn } from "./catania-port-en";
import { cataniaPortIt } from "./catania-port-it";
import { messinaPortEn } from "./messina-port-en";
import { messinaPortIt } from "./messina-port-it";

/**
 * The Sicily cluster's content, keyed by language.
 *
 * One file per language rather than one object holding both: each page runs
 * to a couple of thousand words, and the Italian is written independently
 * rather than translated, so keeping the two apart stops an edit to one
 * quietly becoming an edit to the other.
 *
 * The cluster ships in phases. This index grows as each page lands; the
 * route registry already declares every id, so the pillar can name the
 * pages that do not exist yet without linking to them.
 */
export const sicilyPillar: SicilyPillarContent = {
  en: sicilyPillarEn,
  it: sicilyPillarIt,
};

export const palermoPage: SicilyDestinationContent = {
  en: palermoEn,
  it: palermoIt,
};

export const cataniaPage: SicilyDestinationContent = {
  en: cataniaEn,
  it: cataniaIt,
};

export const taorminaPage: SicilyDestinationContent = {
  en: taorminaEn,
  it: taorminaIt,
};

export const syracusePage: SicilyDestinationContent = {
  en: syracuseEn,
  it: syracuseIt,
};

export const trapaniPage: SicilyDestinationContent = {
  en: trapaniEn,
  it: trapaniIt,
};

export const agrigentoPage: SicilyDestinationContent = {
  en: agrigentoEn,
  it: agrigentoIt,
};

export const cefaluPage: SicilyDestinationContent = {
  en: cefaluEn,
  it: cefaluIt,
};

export const palermoAirportPage: SicilyAirportContent = {
  en: palermoAirportEn,
  it: palermoAirportIt,
};

export const cataniaAirportPage: SicilyAirportContent = {
  en: cataniaAirportEn,
  it: cataniaAirportIt,
};

export const trapaniAirportPage: SicilyAirportContent = {
  en: trapaniAirportEn,
  it: trapaniAirportIt,
};

export const palermoPortPage: SicilyPortContent = {
  en: palermoPortEn,
  it: palermoPortIt,
};

export const cataniaPortPage: SicilyPortContent = {
  en: cataniaPortEn,
  it: cataniaPortIt,
};

export const messinaPortPage: SicilyPortContent = {
  en: messinaPortEn,
  it: messinaPortIt,
};

export type {
  AirportRoute,
  AlternativeMode,
  ArrivalOption,
  Draw,
  FaqItem,
  HeroFact,
  Neighbour,
  SicilyAirport,
  SicilyAirportContent,
  SicilyAirportPage,
  SicilyDestination,
  SicilyDestinationContent,
  SicilyPortContent,
  SicilyPortPage,
  SicilyCorner,
  SicilyPillar,
  SicilyPillarContent,
  SicilyPlace,
  SicilyPort,
  SourcedDistance,
  Termed,
  Titled,
} from "./types";
