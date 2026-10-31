import "server-only";
import { esc, isMailConfigured, send } from "@/lib/mail/mailer";
import { formatPhone } from "@/lib/quote/phone";
import { absoluteUrl, siteName, type Locale } from "@/lib/site";
import { pathFor } from "@/lib/routes";
import type { EmailStatus, NewLead } from "./types";

/**
 * The two emails a new lead triggers: one to the business, one to the
 * customer.
 *
 * ── Both are sent after the lead is saved, and neither can undo it ────────
 * Each send is wrapped on its own. A failure is reported back so the caller
 * can record it on the lead, which is the part the reference implementation
 * is missing: there, a failed email is logged to a console nobody reads and
 * the lead sits in the CRM looking handled.
 *
 * ── The customer's email is in the customer's language ────────────────────
 * The reference can only send English. This site has two languages and a
 * visitor who filled in an Italian form should not get an English reply, so
 * every customer-facing string here exists in both.
 *
 * ── What the customer email does not say ──────────────────────────────────
 * It says a request was received and a quotation will follow. It does not
 * say anything is booked, reserved or confirmed, because none of that is
 * true at this point — and because the site's own Terms, FAQ and footer all
 * say in terms that a request is not a booking. An email that implied
 * otherwise would contradict the page the customer just left.
 */

export type NotifyResult = { admin: EmailStatus; customer: EmailStatus };

const palette = {
  deep: "#18233a",
  ivory: "#fbf8f2",
  accent: "#b2542c",
  accentGlow: "#c0864f",
  border: "#e3ded3",
  muted: "#5b6477",
};

// A percentage, not `width:160px`. A fixed label column cannot shrink, so on
// a 320px screen it took half the width and left an address nowhere to wrap,
// which is what forced the whole message sideways.
const cellLabel = `padding:9px 12px;border:1px solid ${palette.border};background:${palette.ivory};font-size:13px;color:${palette.muted};width:38%;text-align:left;vertical-align:top`;
// `word-break` because a long address or an email with no spaces in it is the
// one value guaranteed to overflow a narrow column.
const cellValue = `padding:9px 12px;border:1px solid ${palette.border};font-size:13px;color:${palette.deep};vertical-align:top;word-break:break-word`;

/**
 * Both languages satisfy one shape, so the compiler guarantees neither is
 * missing a string the other has.
 */
type Copy = {
  subject: (reference: string) => string;
  greeting: (name: string) => string;
  intro: string;
  notBooking: string;
  reference: string;
  yourDetails: string;
  outbound: string;
  inbound: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  party: string;
  luggage: string;
  pickup: string;
  dropoff: string;
  when: string;
  travelRef: string;
  message: string;
  changes: string;
  terms: string;
  cancellation: string;
  adults: string;
  adultsPlural: string;
  children: string;
  childrenPlural: string;
  hold: string;
  cabin: string;
  ages: string;
};

const copy: Record<Locale, Copy> = {
  en: {
    subject: (ref: string) => `Quotation request received — ${ref}`,
    greeting: (name: string) => `Hello ${name},`,
    intro:
      "We have your request. We will come back to you with a price for this journey and the arrangement in writing.",
    notBooking:
      "This is a request, not a booking. Nothing is reserved and no vehicle is allocated to your date until the journey has been confirmed in writing and you have agreed to it.",
    reference: "Your reference",
    yourDetails: "Your details",
    outbound: "Outbound journey",
    inbound: "Return journey",
    name: "Name",
    email: "Email",
    phone: "Phone",
    service: "Service",
    party: "Passengers",
    luggage: "Luggage",
    pickup: "Pickup",
    dropoff: "Drop-off",
    when: "Date and time",
    travelRef: "Flight / train / ship",
    message: "Your message",
    changes:
      "If anything above is wrong, reply to this email and tell us — it is easier to correct now than on the day.",
    terms: "Terms and Conditions",
    cancellation: "Cancellation and Refund Policy",
    adults: "adult",
    adultsPlural: "adults",
    children: "child",
    childrenPlural: "children",
    hold: "hold",
    cabin: "cabin",
    ages: "ages",
  },
  it: {
    subject: (ref: string) => `Richiesta di preventivo ricevuta — ${ref}`,
    greeting: (name: string) => `Buongiorno ${name},`,
    intro:
      "Abbiamo ricevuto la vostra richiesta. Vi risponderemo con un prezzo per questo viaggio e con l'accordo per iscritto.",
    notBooking:
      "Questa è una richiesta, non una prenotazione. Nulla è riservato e nessun veicolo è assegnato alla vostra data finché il viaggio non è stato confermato per iscritto e voi non l'avete accettato.",
    reference: "Il vostro riferimento",
    yourDetails: "I vostri dati",
    outbound: "Viaggio di andata",
    inbound: "Viaggio di ritorno",
    name: "Nome",
    email: "E-mail",
    phone: "Telefono",
    service: "Servizio",
    party: "Passeggeri",
    luggage: "Bagagli",
    pickup: "Partenza",
    dropoff: "Arrivo",
    when: "Data e ora",
    travelRef: "Volo / treno / nave",
    message: "Il vostro messaggio",
    changes:
      "Se qualcosa qui sopra non è corretto, rispondete a questa e-mail e segnalatecelo: è più semplice correggerlo adesso che il giorno stesso.",
    terms: "Termini e condizioni",
    cancellation: "Cancellazioni e rimborsi",
    adults: "adulto",
    adultsPlural: "adulti",
    children: "bambino",
    childrenPlural: "bambini",
    hold: "da stiva",
    cabin: "a mano",
    ages: "età",
  },
};

function formatWhen(local: string, locale: Locale): string {
  const [date, time] = local.split("T");
  if (!date || !time) return local;
  const [y, m, d] = date.split("-").map(Number);
  const formatted = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(
    locale === "it" ? "it-IT" : "en-GB",
    { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" },
  );
  return `${formatted}, ${time}`;
}

function partySummary(lead: NewLead, t: Copy): string {
  const parts = [
    `${lead.adults} ${lead.adults === 1 ? t.adults : t.adultsPlural}`,
  ];
  if (lead.children > 0) {
    parts.push(`${lead.children} ${lead.children === 1 ? t.children : t.childrenPlural}`);
    if (lead.childAges) parts.push(`(${t.ages}: ${lead.childAges})`);
  }
  return parts.join(", ");
}

function luggageSummary(lead: NewLead, t: Copy): string {
  return `${lead.luggageHold} ${t.hold}, ${lead.luggageCabin} ${t.cabin}`;
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td class="lbl" style="${cellLabel}"><strong>${esc(label)}</strong></td><td class="val" style="${cellValue}">${esc(value)}</td></tr>`;
}

function legTable(
  leg: { pickup: string; dropoff: string; atLocal: string; travelReference: string },
  t: Copy,
  locale: Locale,
): string {
  return `<table style="border-collapse:collapse;width:100%;font-family:Georgia,'Times New Roman',serif">
    ${row(t.pickup, leg.pickup)}
    ${row(t.dropoff, leg.dropoff)}
    ${row(t.when, formatWhen(leg.atLocal, locale))}
    ${row(t.travelRef, leg.travelReference)}
  </table>`;
}

function heading(text: string): string {
  return `<h3 style="margin:26px 0 10px;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:${palette.accent};border-bottom:1px solid ${palette.border};padding-bottom:7px">${esc(text)}</h3>`;
}

/**
 * The message wrapper.
 *
 * ── A whole document, not a fragment ──────────────────────────────────────
 * It used to be a bare `<div>`. Without a `<head>` there is nowhere to put a
 * viewport meta or a media query, so a phone rendered the 620px layout at
 * desktop width and shrank it — which is why the text arrived too small to
 * read and the tables ran off the side.
 *
 * ── Inline styles stay the baseline ───────────────────────────────────────
 * Every element keeps its inline style, because Gmail's web client strips
 * `<style>` blocks and Outlook ignores much of what survives. The media
 * query below is an enhancement for the clients that do honour it — Apple
 * Mail, iOS Mail, Gmail's apps — never the thing the layout depends on.
 * `!important` is needed to beat the inline styles it is overriding.
 */
function shell(inner: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<style>
  /* Stops iOS turning dates and references into tappable blue links. */
  a[x-apple-data-detectors] { color:inherit !important; text-decoration:none !important; }
  @media only screen and (max-width:600px) {
    .wrap   { padding:12px 8px !important; }
    .card   { border-radius:8px !important; }
    .pad    { padding:22px 18px !important; }
    .padsm  { padding:16px 18px !important; }
    .logo   { width:200px !important; }
    .h1     { font-size:17px !important; }
    td.lbl  { width:34% !important; padding:8px 9px !important; font-size:12px !important; }
    td.val  { padding:8px 9px !important; font-size:12px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${palette.ivory}">
  <div class="wrap" style="background:${palette.ivory};padding:28px 16px">
    <div class="card" style="font-family:Georgia,'Times New Roman',serif;width:100%;max-width:620px;margin:0 auto;background:#ffffff;border:1px solid ${palette.border};border-radius:10px;overflow:hidden">
      ${inner}
    </div>
  </div>
</body>
</html>`;
}

/**
 * The masthead: the logo on ivory, then the deep band carrying the title.
 *
 * ── Why the logo gets its own light band ──────────────────────────────────
 * Two of the three words in the lockup are dark navy, so on the deep band
 * below they would be invisible. The logo file is flattened onto the same
 * ivory, because a transparent PNG is rendered against black by several
 * clients — which would hide exactly the same words.
 *
 * ── What happens when images are blocked ─────────────────────────────────
 * Most clients block remote images until the reader allows them, so the
 * masthead can arrive as `alt` text alone. That is why the alt is the full
 * business name rather than "logo", and why the customer email names the
 * business again in its footer: an email with images off still says plainly
 * who sent it. The explicit width and height matter for the same reason —
 * without them a blocked image collapses to nothing and the layout jumps
 * when it is later allowed to load.
 */
function header(title: string, subtitle: string): string {
  const logo = absoluteUrl("/brand/logo-email.png");
  // One navy band, as on the site, with the logo on a light plate inside it.
  //
  // The plate is not decoration. Two of the three words in the lockup —
  // "Private" and "Across Italy" — are the same dark navy as this band, so
  // placed straight onto it they disappear and only the gold "Transfers" is
  // left floating. The logo has no light-text variant and one cannot be
  // derived from it, because the wordmark sits on a photographic composite
  // rather than flat artwork. The public footer solves it the same way.
  return `<div class="padsm" style="background:${palette.deep};padding:22px 32px">
    <div style="background:${palette.ivory};border-radius:8px;padding:12px 16px;text-align:center">
      <img class="logo" src="${esc(logo)}" alt="${esc(siteName)}" width="260" height="57"
           style="display:inline-block;width:260px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none" />
    </div>
    <p class="h1" style="margin:16px 0 0;font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:#ffffff99">${esc(title)}</p>
    ${subtitle ? `<p style="margin:5px 0 0;font-size:12px;color:#ffffffaa;word-break:break-word">${esc(subtitle)}</p>` : ""}
  </div>`;
}

/** Sends both messages. Returns what each one did, for recording on the lead. */
export async function sendLeadNotifications(
  lead: NewLead,
  reference: string,
): Promise<NotifyResult> {
  if (!isMailConfigured()) {
    return { admin: "skipped", customer: "skipped" };
  }

  const locale = lead.locale;
  const t = copy[locale];
  const phone = formatPhone(lead.phone);

  // ── 1. The business ──────────────────────────────────────────────────────
  const adminHtml = shell(`
    ${header("New quotation request", `${reference} · ${lead.sourceForm} · ${locale.toUpperCase()}`)}
    <div class="pad" style="padding:30px 32px">
      ${heading("Contact")}
      <table style="border-collapse:collapse;width:100%;font-family:Georgia,'Times New Roman',serif">
        ${row("Name", lead.fullName)}
        ${row("Email", lead.email)}
        ${row("Phone", `${phone}  (${lead.phone.country})`)}
        ${row("Service", lead.serviceType)}
        ${row("Passengers", `${lead.adults} adult(s), ${lead.children} child(ren)${lead.childAges ? ` — ages ${lead.childAges}` : ""}`)}
        ${row("Luggage", `${lead.luggageHold} hold, ${lead.luggageCabin} cabin`)}
      </table>
      ${heading("Outbound")}
      ${legTable(lead.outbound, copy.en, "en")}
      ${lead.inbound ? heading("Return") + legTable(lead.inbound, copy.en, "en") : ""}
      ${
        lead.customerMessage
          ? `${heading("Customer message")}<p style="margin:0;font-size:13px;line-height:1.7;color:${palette.deep};white-space:pre-wrap">${esc(lead.customerMessage)}</p>`
          : ""
      }
      <p style="margin:26px 0 0;font-size:12px;color:${palette.muted}">Reply to this email to answer the customer directly.</p>
    </div>
  `);

  const adminResult = await send({
    to: process.env.LEAD_ADMIN_EMAIL as string,
    subject: `New quotation request — ${reference} — ${lead.fullName}`,
    html: adminHtml,
    // Replying to the notification should reach the customer.
    replyTo: lead.email,
  });

  // ── 2. The customer, in their own language ───────────────────────────────
  const customerHtml = shell(`
    ${header(locale === "it" ? "Richiesta ricevuta" : "Request received", "")}
    <div class="pad" style="padding:34px 32px">
      <p style="margin:0 0 16px;font-size:17px;color:${palette.deep}">${esc(t.greeting(lead.fullName))}</p>
      <p style="margin:0 0 20px;font-size:14px;line-height:1.75;color:${palette.muted}">${esc(t.intro)}</p>

      <div style="background:${palette.ivory};border-left:3px solid ${palette.accent};padding:14px 18px;margin:0 0 24px">
        <p style="margin:0;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:${palette.muted}">${esc(t.reference)}</p>
        <p style="margin:5px 0 0;font-size:19px;letter-spacing:1.5px;color:${palette.deep}">${esc(reference)}</p>
      </div>

      ${heading(t.yourDetails)}
      <table style="border-collapse:collapse;width:100%;font-family:Georgia,'Times New Roman',serif">
        ${row(t.name, lead.fullName)}
        ${row(t.email, lead.email)}
        ${row(t.phone, phone)}
        ${row(t.party, partySummary(lead, t))}
        ${row(t.luggage, luggageSummary(lead, t))}
      </table>

      ${heading(t.outbound)}
      ${legTable(lead.outbound, t, locale)}
      ${lead.inbound ? heading(t.inbound) + legTable(lead.inbound, t, locale) : ""}
      ${
        lead.customerMessage
          ? `${heading(t.message)}<p style="margin:0;font-size:13px;line-height:1.7;color:${palette.deep};white-space:pre-wrap">${esc(lead.customerMessage)}</p>`
          : ""
      }

      <p style="margin:26px 0 0;font-size:13px;line-height:1.75;color:${palette.muted}">${esc(t.changes)}</p>

      <div style="margin:26px 0 0;padding:16px 18px;background:${palette.ivory};border:1px solid ${palette.border};border-radius:7px">
        <p style="margin:0;font-size:12px;line-height:1.7;color:${palette.deep}"><strong>${esc(t.notBooking)}</strong></p>
      </div>
    </div>
    <div class="padsm" style="padding:18px 32px;background:${palette.ivory};border-top:1px solid ${palette.border}">
      <p style="margin:0;font-size:11px;color:${palette.muted}">
        ${esc(siteName)} ·
        <a href="${absoluteUrl(pathFor("terms", locale))}" style="color:${palette.accent}">${esc(t.terms)}</a> ·
        <a href="${absoluteUrl(pathFor("cancellation", locale))}" style="color:${palette.accent}">${esc(t.cancellation)}</a>
      </p>
    </div>
  `);

  const customerResult = await send({
    to: lead.email,
    subject: t.subject(reference),
    html: customerHtml,
  });

  return {
    admin: adminResult.ok ? "sent" : "failed",
    customer: customerResult.ok ? "sent" : "failed",
  };
}
