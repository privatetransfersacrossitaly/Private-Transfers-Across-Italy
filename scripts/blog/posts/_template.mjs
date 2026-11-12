/**
 * Template for a blog post. Copy to scripts/blog/posts/<slug>.mjs, fill in,
 * then:
 *
 *   node scripts/blog/publish.mjs scripts/blog/posts/<slug>.mjs            # try it locally
 *   node scripts/blog/publish.mjs scripts/blog/posts/<slug>.mjs --remote   # publish to the live site
 *
 * One file can carry the English post and its Italian translation. The
 * Italian row names the English slug in `translation_of`; that is what links
 * the two for hreflang and the "Leggi in italiano" link.
 *
 * ── Body conventions (the same as Italy Taxi Service's) ───────────────────
 *   - HTML, not Markdown.
 *   - Sections are <h2>; the table of contents is built from them. Ids are
 *     added automatically if you leave them out.
 *   - FAQ: an <h2>Frequently Asked Questions</h2> (or "Domande frequenti"),
 *     then pairs of <h3 id="faq-1">Question?</h3><p>Answer.</p>. They are
 *     moved into the page's FAQ section and FAQPage structured data.
 *   - Link to the site's own pages with relative paths (/destinations/rome).
 *     External links get rel="nofollow noopener" automatically.
 *
 * ── Content rules for this site ───────────────────────────────────────────
 * Facts come from the operator, comune or port that publishes them, with a
 * link. No prices, journey times or service promises the site does not
 * already state elsewhere. Featured images go in public/blog/ and must be
 * licensed for use.
 */
export default {
  // Optional. Created or updated by id; omit for posts with no byline (the
  // organisation is then the author in structured data).
  author: {
    id: "team",
    full_name: "Private Transfers Across Italy",
    bio: null,
    avatar_url: null,
  },

  posts: [
    {
      language: "en",
      slug: "example-post-slug",
      title: "Example title, 60 characters or fewer",
      excerpt: "One or two sentences shown on the blog index and used as the meta description if seo_description is empty.",
      category: "Airport guide",
      tags: [],
      focus_keyword: "example keyword",
      seo_title: null, // defaults to title
      seo_description: null, // defaults to excerpt
      read_time: null, // computed from the body when null
      featured_image_url: null, // e.g. "/blog/example.webp" (file must exist in public/)
      featured_image_alt: null,
      status: "draft", // "published" to make it live
      content: `
<p>Opening paragraph.</p>
<h2>First section</h2>
<p>…</p>
<h2>Frequently Asked Questions</h2>
<h3 id="faq-1">A question people ask?</h3>
<p>The answer.</p>
`,
    },
    {
      language: "it",
      slug: "esempio-slug-articolo",
      translation_of: "example-post-slug",
      title: "Titolo di esempio",
      excerpt: "Una o due frasi.",
      category: "Guida aeroporti",
      tags: [],
      focus_keyword: "parola chiave",
      status: "draft",
      content: `
<p>Paragrafo iniziale.</p>
<h2>Prima sezione</h2>
<p>…</p>
<h2>Domande frequenti</h2>
<h3 id="faq-1">Una domanda?</h3>
<p>La risposta.</p>
`,
    },
  ],
};
