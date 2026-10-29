import type { Locale } from "@/lib/site";
import { en } from "./en";
import { it } from "./it";
import type { HomeContent } from "./types";

export const homeContent: Record<Locale, HomeContent> = { en, it };

export type { HomeContent } from "./types";
