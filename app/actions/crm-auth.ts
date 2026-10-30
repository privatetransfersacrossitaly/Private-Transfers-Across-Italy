"use server";

import { redirect } from "next/navigation";
import { isCrmConfigured } from "@/lib/crm/auth";
import { verifyPassword } from "@/lib/crm/password";
import {
  checkLoginRate,
  pruneLoginAttempts,
  recordLoginAttempt,
} from "@/lib/crm/login-rate-limit";
import {
  createSession,
  destroySession,
  pruneExpiredSessions,
  requestIp,
} from "@/lib/crm/session";
import { isDatabaseConfigured } from "@/lib/db/d1";
import type { LoginState } from "@/lib/crm/login-state";

/**
 * Signing in and out.
 *
 * ── One error message, on purpose ─────────────────────────────────────────
 * A wrong username and a wrong password produce the same sentence. Telling
 * them apart would confirm which usernames exist, and with a single
 * administrator that is the whole secret of one of the two fields. The only
 * distinct message is the rate-limit one, because a user who is locked out
 * needs to know that waiting is the answer.
 *
 * ── The order of operations matters ───────────────────────────────────────
 * Rate limit first, then hash. Checking the limit before deriving a key
 * means a flood costs one indexed read each rather than 10 ms of CPU each —
 * which on the free plan is the difference between a slow login and no login
 * at all for anyone.
 *
 * ── Why there is no "remember me" ─────────────────────────────────────────
 * It would mean a longer-lived cookie for the one account that can read every
 * customer's name, telephone number and movements. Twelve hours with a
 * two-hour idle timeout is already generous for an administrator panel.
 */

const GENERIC_FAILURE = "That username and password combination was not recognised.";

export async function signInAction(
  _previous: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!isCrmConfigured() || !isDatabaseConfigured()) {
    return { status: "error", message: "This CRM is not configured yet." };
  }

  const username = String(formData.get("username") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { status: "error", message: GENERIC_FAILURE };
  }

  // Bound the work an attacker can ask for. A password field is not a reason
  // to run a key derivation over a megabyte of input.
  if (username.length > 190 || password.length > 1024) {
    return { status: "error", message: GENERIC_FAILURE };
  }

  const ip = await requestIp();

  const rate = await checkLoginRate(ip, username);
  if (!rate.allowed) {
    // Not recorded as an attempt: doing so would let an attacker extend their
    // own lockout indefinitely, and would grow the table under attack.
    return {
      status: "error",
      message: `Too many failed attempts. Try again in about ${rate.retryAfterMinutes} minutes.`,
    };
  }

  const expectedUsername = (process.env.CRM_ADMIN_USERNAME ?? "")
    .trim()
    .toLowerCase();
  const storedHash = process.env.CRM_ADMIN_PASSWORD_HASH ?? "";

  // Always verify, even when the username is wrong, so that a wrong username
  // and a wrong password take the same time. Returning early on the username
  // would make the response time a username oracle.
  const passwordOk = await verifyPassword(password, storedHash);
  const ok = passwordOk && username === expectedUsername;

  await recordLoginAttempt(ip, username, ok);

  if (!ok) {
    return { status: "error", message: GENERIC_FAILURE };
  }

  // A fresh token on every login, so a session cannot be fixated by handing
  // someone a cookie before they sign in.
  const created = await createSession(expectedUsername);
  if (!created) {
    return {
      status: "error",
      message: "Could not start a session. Please try again.",
    };
  }

  // Cheap housekeeping on the one request per day that can afford it.
  await pruneExpiredSessions();
  await pruneLoginAttempts();

  redirect("/crm");
}

export async function signOutAction(): Promise<void> {
  await destroySession();
  redirect("/crm/login?signedOut=1");
}
