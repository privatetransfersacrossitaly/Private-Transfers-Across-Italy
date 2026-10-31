#!/usr/bin/env node
/**
 * Generates the three CRM secrets, locally, and prints the commands to set
 * them.
 *
 * Nothing here contacts the network. The password never leaves this machine
 * except as the hash you choose to upload, and the hash cannot be reversed
 * into the password.
 *
 *   node scripts/hash-password.mjs                 # generate a password for me
 *   node scripts/hash-password.mjs --ask           # type my own, not echoed
 *   node scripts/hash-password.mjs --iterations N  # for Workers Paid
 *
 * ── Why it generates the password by default ──────────────────────────────
 * The free plan's 10 ms CPU limit caps PBKDF2 at about 10,000 iterations —
 * far below the usual recommendation. What closes that gap is entropy: a
 * 20-character random password has roughly 115 bits, and no iteration count
 * is relevant against a search space that size. A password you invented is
 * the one case where the low iteration count would matter, so this script
 * makes the good option the lazy one.
 */
import { webcrypto as crypto } from "node:crypto";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const ITERATIONS = Number(value("--iterations", "10000"));
if (!Number.isInteger(ITERATIONS) || ITERATIONS < 1000) {
  console.error("--iterations must be an integer of at least 1000");
  process.exit(1);
}

const toB64 = (bytes) => Buffer.from(bytes).toString("base64");

/**
 * Rejection sampling, not `% alphabet.length`.
 *
 * The modulo version is the classic bug: 256 is not a multiple of 70, so the
 * first few characters of the alphabet come up slightly more often. It is a
 * small bias and it is entirely avoidable.
 */
function generatePassword(length = 20) {
  const alphabet =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#%^&*-_=+";
  const limit = 256 - (256 % alphabet.length);
  let out = "";
  while (out.length < length) {
    const buf = new Uint8Array(length * 2);
    crypto.getRandomValues(buf);
    for (const byte of buf) {
      if (byte >= limit) continue; // discard, do not fold
      out += alphabet[byte % alphabet.length];
      if (out.length === length) break;
    }
  }
  return out;
}

async function hashPassword(password, iterations) {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    key,
    256,
  );
  return `pbkdf2-sha256$i=${iterations}$${toB64(salt)}$${toB64(new Uint8Array(bits))}`;
}

/**
 * Read a line without echoing it.
 *
 * ── Why this does not use readline ────────────────────────────────────────
 * The previous version created a readline interface *and* attached a `data`
 * listener to `process.stdin` to blank the echo. Attaching that listener puts
 * the stream into flowing mode, so the listener consumed the keystrokes and
 * readline received almost none of them. The symptom was a password that had
 * clearly been typed being reported as "under 12 characters" — the input was
 * being eaten, not judged.
 *
 * Raw mode and one reader avoids the whole class of problem. An asterisk per
 * character is echoed so that typing and pasting visibly register; without
 * any feedback a silent prompt is routinely mistaken for a hung program.
 */
function askHidden(question) {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;
    if (!stdin.isTTY) {
      reject(new Error("No terminal available to read a password from."));
      return;
    }
    stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    let buffer = "";
    const done = (value) => {
      stdin.setRawMode(false);
      stdin.pause();
      stdin.removeListener("data", onData);
      stdout.write("\n");
      resolve(value);
    };
    const onData = (chunk) => {
      const text = String(chunk);
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];

        // ── Escape sequences, skipped whole ───────────────────────────────
        // An arrow key, Home, End or a function key arrives as ESC [ … final.
        // Filtering only the ESC byte leaves the rest behind, so pressing Up
        // mid-entry used to append a literal "[A" to the password. The hash
        // was then of a string the person never typed, it matched on the
        // confirmation prompt because the same keys produced the same stray
        // characters twice, and the failure only appeared later at a login
        // that said nothing more useful than "not recognised".
        if (ch === "\u001b") {
          i += 1;
          if (text[i] === "[" || text[i] === "O") {
            i += 1;
            // CSI parameters are digits and ';'; the sequence ends at a letter
            // or '~'. Stop at the end of the chunk either way.
            while (i < text.length && !/[A-Za-z~]/.test(text[i])) i += 1;
          }
          continue;
        }

        if (ch === "\r" || ch === "\n") {
          done(buffer);
          return;
        }
        if (ch === "\u0003") {
          // Ctrl+C must still quit, which raw mode would otherwise swallow.
          stdin.setRawMode(false);
          stdout.write("\n");
          process.exit(130);
        }
        if (ch === "\u007f" || ch === "\b") {
          if (buffer.length > 0) {
            buffer = buffer.slice(0, -1);
            stdout.write("\b \b");
          }
          continue;
        }
        // Ignore remaining control characters; accept everything else,
        // including the punctuation a generated password is full of.
        if (ch >= " ") {
          buffer += ch;
          stdout.write("*");
        }
      }
    };
    stdin.on("data", onData);
  });
}

const username = value("--username", "admin").trim().toLowerCase();

let password;
let generated = false;
if (flag("--ask")) {
  password = await askHidden("Password: ");
  if (password.length < 12) {
    console.error(
      `\nReceived ${password.length} character${password.length === 1 ? "" : "s"}; ` +
        "12 is the minimum.\n\n" +
        "Given the iteration count the free plan allows, length is doing most\n" +
        "of the work here, so this is refused rather than warned about.\n\n" +
        "If you typed more than that, the terminal is not passing input through\n" +
        "— run without --ask and use the generated password instead.",
    );
    process.exit(1);
  }
  // Asked twice because a mistyped password becomes a hash nobody can match,
  // and the mistake only surfaces later at a login that cannot succeed.
  const again = await askHidden("Confirm:  ");
  if (again !== password) {
    console.error("\nThose did not match. Nothing was written. Run it again.");
    process.exit(1);
  }
} else {
  password = generatePassword(20);
  generated = true;
}

const hash = await hashPassword(password, ITERATIONS);

/**
 * Prove the hash matches the password before anyone is told to use it.
 *
 * This repeats, byte for byte, what `verifyPassword` in lib/crm/password.ts
 * does at login: split the stored string, decode the salt, derive, compare.
 * If the two ever disagree — a terminal mangling the input, an encoding
 * difference, a change to one side and not the other — it is caught here,
 * in a script that can simply refuse, rather than at a login that silently
 * says "not recognised" and sends you looking at the wrong thing.
 */
async function selfCheck(plain, stored) {
  const [scheme, iterField, saltField, keyField] = stored.split("$");
  if (scheme !== "pbkdf2-sha256") return false;
  const salt = Uint8Array.from(Buffer.from(saltField, "base64"));
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(plain),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: Number(iterField.slice(2)), hash: "SHA-256" },
    key,
    256,
  );
  return toB64(new Uint8Array(bits)) === keyField;
}

if (!(await selfCheck(password, hash))) {
  console.error(
    "\nSelf-check failed: the generated hash does not verify against the\n" +
      "password. Nothing has been printed. This is a bug — do not set any\n" +
      "secret from this run.",
  );
  process.exit(1);
}

const sessionSecret = toB64(crypto.getRandomValues(new Uint8Array(48)));

const bar = "─".repeat(72);
console.log(`\n${bar}`);
if (generated) {
  console.log("  YOUR PASSWORD — copy it into a password manager now.");
  console.log("  It is not stored anywhere and cannot be recovered from the hash.\n");
  console.log(`      username:  ${username}`);
  console.log(`      password:  ${password}\n`);
} else {
  console.log(`  username: ${username}  (password as typed)\n`);
}
console.log(bar);
console.log("\nRun these three, pasting the value at each prompt:\n");
console.log("  npx wrangler secret put CRM_ADMIN_USERNAME");
console.log(`      ${username}\n`);
console.log("  npx wrangler secret put CRM_ADMIN_PASSWORD_HASH");
console.log(`      ${hash}\n`);
console.log("  npx wrangler secret put CRM_SESSION_SECRET");
console.log(`      ${sessionSecret}\n`);
console.log(bar);
console.log(
  `\nHash cost: ${ITERATIONS.toLocaleString()} PBKDF2-HMAC-SHA256 iterations.` +
    `\nOn Workers Free (10 ms CPU) do not exceed about 10,000.` +
    `\nOn Workers Paid (30 s CPU) re-run with --iterations 600000.\n`,
);
