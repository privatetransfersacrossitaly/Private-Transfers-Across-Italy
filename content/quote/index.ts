import type { Locale } from "@/lib/site";
import { quoteEn } from "./en";
import { quoteIt } from "./it";
import type { QuoteContent } from "./types";

export const quote: Record<Locale, QuoteContent> = {
  en: quoteEn,
  it: quoteIt,
};

export type { QuoteContent } from "./types";
