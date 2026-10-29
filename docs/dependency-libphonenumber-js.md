# Dependency note — `libphonenumber-js`

**Added for:** country-aware phone validation and E.164 formatting on the Get a Quote form.
**Approved by the owner:** 28 October 2026, subject to compatibility being confirmed and the dependency documented first. This note is that record.

---

## What it is

A rewrite of Google's `libphonenumber` for JavaScript, carrying Google's own metadata. It answers two questions this project needs and cannot answer reliably by hand:

1. Is this national number valid for the selected calling code?
2. What is its canonical E.164 form?

Hand-rolled length ranges get both wrong often enough to matter — Italian mobile numbers alone run 9 or 10 digits depending on the prefix, and UK, German and Dutch numbering plans are all irregular.

## Facts established before installing

| | |
|---|---|
| Version | 1.13.15 |
| Licence | **MIT** |
| Runtime dependencies | **none** |
| Peer dependencies | none |
| `engines` constraint | none declared |
| TypeScript types | bundled (`index.d.ts`) — no `@types/*` package needed |
| `sideEffects` | `false` — tree-shakeable |
| `./min` subpath export | present |

Checked with `npm view libphonenumber-js --json` against the public registry. No value, credential or private data was involved.

## Which entry point, and why

The package ships four metadata sets. We import from **`libphonenumber-js/min`**.

| Entry | Metadata | What it can do |
|---|---|---|
| `/min` | smallest | parse, validate as a possible/valid number, format to E.164 |
| `/mobile` | + mobile detection | distinguishes mobile from landline |
| `/max` | full | number *type* (mobile, fixed line, toll-free…) |
| `/core` | none bundled | you supply metadata yourself |

`/min` is enough: this form needs "is this a valid number for this country" and "give me E.164". It does not need to know whether a number is a mobile. The larger sets cost tens of kilobytes for information nothing in this project reads.

The tarball's *unpacked* size is ~10 MB because it contains all four metadata sets plus ES5 and ES6 builds. **That is the package on disk, not the bundle.** Only the `/min` subpath is imported, and `sideEffects: false` lets the bundler drop the rest.

## Where it is used

| Place | Use |
|---|---|
| `lib/quote/phone.ts` | the only module that imports it; wraps parsing, validation and E.164 formatting behind this project's own types |
| `lib/quote/schema.ts` | calls that wrapper during validation, on the server |
| `components/quote/…` | calls the same wrapper for inline feedback in the browser |

It is confined to one module deliberately, so replacing or removing it later is a single-file change.

## What it is *not* used for

- Not for the country list in the selector. That is project data in `content/quote/countries.ts`, so the dropdown's labels can be localised to English and Italian and ordered the way this site wants.
- Not for geolocation, carrier lookup, or number-type detection.
- Not on any page other than the quote form.

## Verification performed after installing

### Functional — 10/10 cases

Run against `libphonenumber-js/min` in this project's own `node_modules`:

| Country | National number | Expected | Result |
|---|---|---|---|
| IT | 3331234567 | valid | ✅ `+393331234567` |
| IT | 0612345678 | valid (landline, leading zero kept) | ✅ `+390612345678` |
| GB | 7911123456 | valid | ✅ `+447911123456` |
| US | 2125551234 | valid | ✅ `+12125551234` |
| DE | 15123456789 | valid | ✅ `+4915123456789` |
| FR | 612345678 | valid | ✅ `+33612345678` |
| IT | 123 | too short | ✅ rejected |
| IT | 99999999999999 | too long | ✅ rejected |
| GB | abcdefghij | not numeric | ✅ rejected |
| US | 0000000000 | not a real plan | ✅ rejected |

`getCountries()` returns **245** countries, all of which are in the selector.

The Italian landline case is the one that justifies the dependency: `0612345678` keeps its leading zero and is still valid, while a hand-written "strip non-digits and check the length" rule would either reject it or corrupt it.

### Size

| File | Raw | Gzipped |
|---|---|---|
| `metadata.min.json` | 81 KB | **19 KB** |
| `min/index.cjs` | 4 KB | 1 KB |

For comparison, `metadata.max.json` is 153 KB raw — roughly double, for number-type classification nothing in this project reads.

Nineteen kilobytes gzipped is the real cost on the one page that loads it. No other page imports `lib/quote/phone.ts`, so no other page pays it.

### Build

`tsc --noEmit` clean, `eslint` clean, `next build` 127/127 static pages. No peer-dependency warnings and no `engines` conflict.
