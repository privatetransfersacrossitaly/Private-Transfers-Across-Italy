/**
 * "Related articles" for a post, ranked by topic rather than by date.
 *
 * Ported from Italy Taxi Service (src/lib/related-posts.ts). The method is
 * unchanged: tokens from the focus keyword and title are scored by inverse
 * document frequency, so words the whole blog shares count for nothing and
 * distinctive ones ("fiumicino", "civitavecchia") carry the match. Category
 * is corroborating evidence, never enough alone. If nothing clears the bar,
 * the fallback is same-category recency — and if there is no category match
 * either, the block is empty rather than padded with unrelated posts.
 *
 * The stopword list is this site's: "taxi" is not its vocabulary, "transfer",
 * "private" and "quote" are, and those are the words that would otherwise
 * link every post to every other.
 */

export type RelatedCandidate = {
  slug: string;
  title: string;
  category?: string | null;
  focus_keyword?: string | null;
  published_at?: string | null;
};

const STOPWORDS = new Set([
  // English function words
  "a", "an", "the", "and", "or", "of", "to", "from", "in", "on", "at", "for", "with", "by", "as",
  "is", "are", "was", "were", "be", "been", "do", "does", "did", "can", "could", "should", "would",
  "will", "you", "your", "we", "our", "they", "their", "it", "its", "this", "that", "these", "those",
  "what", "how", "why", "when", "which", "where", "who", "if", "then", "than", "but", "not", "no",
  "so", "too", "very", "just", "only", "more", "most", "much", "many", "any", "all", "both", "each",
  "other", "some", "such", "same", "there", "here", "about", "into", "over", "after", "before",
  "between", "during", "while", "because", "vs", "versus",
  // Italian function words
  "il", "lo", "la", "gli", "le", "un", "uno", "una", "di", "del", "dello", "della", "dei", "degli",
  "delle", "dal", "dallo", "dalla", "dai", "dagli", "dalle", "nel", "nello", "nella", "nei", "negli",
  "nelle", "con", "su", "sul", "sulla", "sui", "sulle", "per", "tra", "fra", "ed", "ma", "se", "che",
  "chi", "cui", "come", "dove", "quando", "perche", "non", "si", "ci", "vi", "ne", "piu", "meno",
  "molto", "tutto", "tutti", "tutte", "ogni", "quale", "quali", "sono", "essere", "avere", "fare",
  "cosa", "quanto",
  // This site's own vocabulary: present everywhere, so it discriminates nothing.
  "italy", "italian", "italia", "italiano", "italiana", "transfer", "transfers", "private",
  "privato", "privata", "privati", "car", "auto", "driver", "drivers", "autista", "autisti",
  "journey", "journeys", "viaggio", "viaggi", "quote", "quotation", "preventivo", "travel",
  "traveller", "travellers", "service", "services", "servizio", "servizi",
  // Headline furniture
  "guide", "guida", "complete", "everything", "tips", "consigli", "best", "how", "know", "need",
  "get", "getting", "arrive", "arriving", "arrivare", "arrivo", "option", "options", "compared",
  "confronto", "city", "citta", "centre", "center", "centro", "2026", "2027",
]);

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** "Airport guide" and "Airport guides" are one shelf. */
export function normalizeCategory(category?: string | null): string {
  if (!category) return "";
  return fold(category).replace(/[^a-z0-9]+/g, " ").trim().replace(/s\b/g, "");
}

function tokenize(...parts: (string | null | undefined)[]): Set<string> {
  const out = new Set<string>();
  for (const p of parts) {
    if (!p) continue;
    for (const raw of fold(p).split(/[^a-z0-9]+/)) {
      if (raw.length < 3 || STOPWORDS.has(raw) || /^\d+$/.test(raw)) continue;
      out.add(raw);
    }
  }
  return out;
}

const QUALIFY_DF_SHARE = 0.1;
const CATEGORY_BONUS = 1.5;
const MAX_DOC_SHARE = 0.15;

export function rankRelated<T extends RelatedCandidate>(
  current: RelatedCandidate,
  pool: T[],
  limit = 3,
): T[] {
  const candidates = pool.filter((p) => p.slug && p.slug !== current.slug);
  if (candidates.length === 0) return [];

  const currentTokens = tokenize(current.focus_keyword, current.title);
  const currentCat = normalizeCategory(current.category);
  const docTokens = candidates.map((c) => tokenize(c.focus_keyword, c.title));

  const df = new Map<string, number>();
  for (const toks of [...docTokens, currentTokens]) {
    for (const t of toks) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const total = docTokens.length + 1;
  const idf = (t: string) => Math.log(total / (1 + (df.get(t) ?? 0)));
  const dfCeiling = Math.max(3, Math.round(total * MAX_DOC_SHARE));
  const minScore = Math.log(total / (1 + Math.max(2, Math.round(total * QUALIFY_DF_SHARE))));

  const scored = candidates.map((post, i) => {
    let score = 0;
    for (const t of docTokens[i]) {
      if (currentTokens.has(t) && (df.get(t) ?? 0) <= dfCeiling) score += idf(t);
    }
    const sameCat = currentCat !== "" && normalizeCategory(post.category) === currentCat;
    if (sameCat) score += CATEGORY_BONUS;
    return { post, score, sameCat };
  });

  const newestFirst = (a: { post: T }, b: { post: T }) =>
    String(b.post.published_at ?? "").localeCompare(String(a.post.published_at ?? ""));

  const qualified = scored
    .filter((s) => s.score >= minScore)
    .sort((a, b) => b.score - a.score || newestFirst(a, b))
    .slice(0, limit);
  if (qualified.length > 0) return qualified.map((s) => s.post);

  return scored.filter((s) => s.sameCat).sort(newestFirst).slice(0, limit).map((s) => s.post);
}
