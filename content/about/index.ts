import type { Locale } from "@/lib/site";
import { aboutEn } from "./en";
import { aboutIt } from "./it";
import type { AboutContent } from "./types";

/**
 * Two languages, one shape. The compiler is what guarantees that neither
 * version is missing a section the other has — including the four required
 * notes described in `./types.ts`.
 */
export const about: Record<Locale, AboutContent> = {
  en: aboutEn,
  it: aboutIt,
};

export type { AboutContent } from "./types";
