# Puglia cluster — image requirements

Written during the Phase 6 production-readiness audit. The Puglia cluster
ships with **no photography at all**. All nine components are typographic and
hold their structure through rule, colour and rhythm. That was a deliberate
choice — illustrating Ostuni with a photograph of Amalfi would be worse than
illustrating it with nothing — but it is a gap, and this document says
exactly what would close it.

**Nothing in this document has been downloaded, added or licensed.** It is a
specification and a procedure.

---

## 1. The licensing problem, stated first

Every existing photograph in `public/photos/` is **CC0 1.0**. Look at
`docs/asset-manifest.csv`: 35 rows, every one of them CC0, every one with
`attribution_required = no`. The site therefore has **no credits mechanism**
— no caption slot, no image-credits page, no attribution line anywhere.

During this audit I looked for freely-licensed Puglia photography and found
that the material which surfaces for these towns is predominantly
**CC BY-SA 3.0, CC BY 2.5 and GFDL** — not CC0. Those licences are free to
use commercially, but they *require attribution*, and CC BY-SA additionally
requires share-alike terms on derivatives.

I was not able to verify this exhaustively: `commons.wikimedia.org` does not
resolve from this environment (`getaddrinfo ENOTFOUND`), so I could not read
the category pages to count what is actually there. What I can say honestly
is that the sample I could see was attribution-licensed rather than CC0, and
that the CC0-only assumption behind the existing manifest should not be
carried into Puglia without checking.

**This is a decision for you, not a task to be completed.** Three options:

| Option | What it costs | What it needs |
|---|---|---|
| **A. CC0 only** | Slowest, and may simply not be possible for some subjects | No code change. Continue as the manifest already works |
| **B. Accept CC BY / CC BY-SA** | A credits mechanism | A caption or credit line component, plus an image-credits page, plus a `attribution_text` that actually renders. Roughly a day of work |
| **C. Licence stock or commission** | Money | Nothing structural. A commissioned shoot also solves the "no picture of the actual harbour" problem permanently |

My recommendation is **B for the landscape and townscape shots, C for
anything that must show a specific building or arrival point.** Option A
alone will likely leave half this list unfilled.

---

## 2. Exact requirements, by page

Twenty slots across nine pages. Each gives the subject, the crop, the
placement, and whether the image must be *verifiably* of that place or may be
generic.

### Pillar — `/destinations/puglia`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 1 | Puglia landscape: olive country with a dry-stone wall | 21:9 wide band | Behind the hero, under a scrim of 80%+ | No — must be Puglia, need not be a named spot |
| 2 | A masseria exterior at distance | 4:3 | Beside the "staying" section | Yes, or captioned generically |

### Bari — `/destinations/puglia/bari`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 3 | Bari Karol Wojtyła terminal exterior or arrivals hall | 16:9 | Head of the arrival-sequence section | **Yes.** A generic airport must never be implied to be BRI |
| 4 | Bari cruise terminal / Terminal Crociere quayside | 16:9 | Head of the `#port` section | **Yes**, or omit |
| 5 | Bari Vecchia street scene | 3:4 portrait | Beside the "staying" column | Yes |

### Brindisi — `/destinations/puglia/brindisi`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 6 | Brindisi Airport exterior | 16:9 | Head of "leaving the airport" | **Yes.** Never a generic terminal |
| 7 | Salento olive grove / country road at dusk | 21:9 wide band | Above the masserie section | No |

### Lecce — `/destinations/puglia/lecce`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 8 | Basilica di Santa Croce façade | 3:4 portrait | Beside the intro prose | **Yes** — the page describes its carving specifically |
| 9 | Porta Napoli | 1:1 | Inside the first gate panel | **Yes** |
| 10 | A narrow Lecce street in warm stone | 16:9 | Head of the "staying inside the walls" band | Yes |

### Ostuni — `/destinations/puglia/ostuni`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 11 | Ostuni hill town from a distance, white against green | 21:9 wide band | Behind the hero, light scrim | **Yes** — it is the page's whole premise |
| 12 | A masseria gate or approach lane | 4:3 | Left half of the diptych's country side | No, but must be Puglia |
| 13 | Whitewashed stepped lane in the citadel | 3:4 | Town side of the diptych | Yes |

### Alberobello — `/destinations/puglia/alberobello`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 14 | Trulli roofs across Rione Monti | 21:9 wide band | Directly under the UNESCO plaque | **Yes** |
| 15 | A single trullo with its pinnacle | 1:1 | Rione Monti district card | **Yes** |
| 16 | A quiet residential lane in Aia Piccola | 1:1 | Aia Piccola district card | **Yes** — the contrast is the point |

### Monopoli — `/destinations/puglia/monopoli`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 17 | Monopoli old port with fishing boats | 21:9 wide band | Above the coast rail | **Yes** |
| 18 | Castle of Charles V | 4:3 | First card in the harbour sights row | **Yes** |

### Polignano a Mare — `/destinations/puglia/polignano-a-mare`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 19 | The cliff and Lama Monachile inlet | 3:2 | Full-bleed band under the hero | **Yes.** This is the most recognisable image in the cluster |

### Salento — `/destinations/puglia/salento`

| # | Subject | Crop | Placement | Must be the real place? |
|---|---|---|---|---|
| 20 | A two-image pair: Adriatic cliff coast and Ionian sandy shallows | 1:1 each, side by side | Head of the circuit section, tinted to match the coast markers | **Yes** for both — the page's argument is that the two coasts differ |

---

## 3. Technical specification

Match what the existing set already does, so nothing about delivery changes:

- **Format:** JPEG, as `public/photos/`. `next/image` handles conversion.
- **Width:** 1600px minimum for wide bands, 1200px for cards, 800px for 1:1.
  Never upscale — a 1024px source stays 1024px, as the Tiber row records.
- **Weight:** under 400 KB each after optimisation. Twenty images at that
  ceiling is ~8 MB of assets, which is well inside the Worker asset budget
  (assets are served separately from the 3 MiB script limit) but still worth
  holding to.
- **Naming:** `puglia-<town>-<subject>.jpg`, lowercase, hyphenated.
- **Alt text:** describes only what is visible and names no place the image
  does not verifiably show. This is the existing standard and it is a good
  one.

---

## 4. Where to look

In rough order of likely success:

1. **Wikimedia Commons** — the categories `Alberobello`, `Ostuni`,
   `Polignano a Mare`, `Monopoli`, `Lecce`, `Gallipoli (Italy)`, and the
   subcategory for the trulli. Filter by licence; expect CC BY-SA more often
   than CC0. *Could not be verified from this environment — the host does not
   resolve here.*
2. **rawpixel public-domain collection** — already a source for two existing
   rows, serves CC0, but its Italian coverage is thin outside the famous
   cities.
3. **Openverse** (`openverse.org`) — aggregates Commons, Flickr and others
   with a licence filter that actually works. Good for a first sweep.
4. **Flickr, filtered to CC0 / Public Domain Mark** — real coverage of Puglia
   exists here but the licence filter must be set explicitly and each file
   re-checked on its own page.
5. **Stock (Adobe, Getty, Shutterstock)** — guaranteed coverage of every
   subject on this list, at a price, with no attribution burden.
6. **Commission a photographer in Puglia** — the only route that reliably
   gets items 3, 4, 6, 17 and 18, which are specific buildings and arrival
   points that hobbyist photography tends not to cover.

---

## 5. Procedure for adding any image

Non-negotiable, and it is the procedure the existing manifest already
implies:

1. Open the file's own page and read the licence there. Never trust a search
   result, a mirror, or an aggregator's label.
2. Confirm `commercial_use_allowed` and `modification_allowed` are both yes.
3. If attribution is required, **stop** until option B above is built — there
   is nowhere on this site for a credit to go, and using an attribution-
   licensed image without the credit is a licence breach.
4. Verify the location. If it cannot be verified, the row gets
   `location_verified: NO — <what it actually shows>` and
   `review_status: approved-with-caveat`, and the page copy must never imply
   otherwise. Two existing rows do exactly this and are a good model.
5. Add a complete row to `docs/asset-manifest.csv` — all seventeen columns,
   including `date_checked` and `crop_notes`.
6. Only then add the file and wire it into the component.

---

## 6. What happens if none of this is done

The cluster ships as it stands: eighteen pages of typographic layout that
pass every SEO, accessibility and link check, and that read as deliberate
rather than unfinished. That is a legitimate outcome and not a blocker.

The cost is competitive rather than technical. Travel searches are visual,
and a Puglia page with no picture of Puglia will convert less well than one
with — most sharply on Polignano a Mare (item 19) and Alberobello (item 14),
which are the two subjects people search for *because* they have seen a
photograph of them.
