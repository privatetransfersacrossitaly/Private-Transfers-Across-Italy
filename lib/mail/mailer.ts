import "server-only";
import { Resend } from "resend";

/**
 * Email transport.
 *
 * Resend, like the system this was modelled on — but with every address read
 * from the environment rather than written into the file. That project
 * hard-codes its sender and its reply-to, which works until the brand or the
 * mailbox changes and then requires a code change and a deploy.
 *
 * ── Lazily constructed, deliberately ──────────────────────────────────────
 * `new Resend(undefined)` throws. Built at module load, that would take down
 * every route importing this file before any "key not set" guard could run.
 * Building on first use means a missing key degrades to "no email sent",
 * which is what `send()` already intends, and a lead is still captured.
 */

let client: Resend | null = null;

export type MailConfig = {
  apiKey: string;
  from: string;
  replyTo: string;
  adminTo: string;
};

export function mailConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const adminTo = process.env.LEAD_ADMIN_EMAIL;
  if (!apiKey || !from || !adminTo) return null;
  return {
    apiKey,
    from,
    adminTo,
    // Falling back to the admin address is right: a reply should reach a
    // person, and the admin inbox is the one address we know exists.
    replyTo: process.env.LEAD_REPLY_TO_EMAIL || adminTo,
  };
}

export function isMailConfigured(): boolean {
  return mailConfig() !== null;
}

export type SendResult = { ok: true } | { ok: false; reason: string };

/**
 * Send one message. Never throws — the caller is always a path where a lead
 * has already been saved, and an email failure must not undo that.
 *
 * One retry, because the common failure is a transient network error rather
 * than a rejected message. A second failure is reported and recorded.
 */
export async function send(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const config = mailConfig();
  if (!config) {
    console.warn("[mail] not configured — email skipped");
    return { ok: false, reason: "not_configured" };
  }

  if (!client) client = new Resend(config.apiKey);

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const { error } = await client.emails.send({
        from: config.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        replyTo: options.replyTo ?? config.replyTo,
      });

      if (!error) return { ok: true };

      // A rejected message will be rejected again; only retry once and only
      // for what might be transient.
      if (attempt === 0 && /timeout|network|ECONN|fetch failed|50\d/i.test(error.message ?? "")) {
        continue;
      }
      console.error("[mail] send rejected:", error.message);
      return { ok: false, reason: error.message ?? "rejected" };
    } catch (error) {
      if (attempt === 0) continue;
      const reason = error instanceof Error ? error.message : "unknown";
      console.error("[mail] send threw:", reason);
      return { ok: false, reason };
    }
  }

  return { ok: false, reason: "unreachable" };
}

/** Escapes the five characters that matter when building HTML by hand. */
export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
