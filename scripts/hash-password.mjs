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
import { createInterface } from "node:readline";

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

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const onData = (char) => {
      // Re-write the prompt without the typed characters, so a shoulder and a
      // scrollback both see nothing.
      if (![`\n`, `\r`, `\u0004`].includes(String(char))) {
        process.stdout.write(`\u001b[2K\u001b[200D${question}`);
      }
    };
    process.stdin.on("data", onData);
    rl.question(question, (answer) => {
      process.stdin.removeListener("data", onData);
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
  });
}

const username = value("--username", "admin").trim().toLowerCase();

let password;
let generated = false;
if (flag("--ask")) {
  password = await askHidden("Password (not shown): ");
  if (password.length < 12) {
    console.error(
      "\nThat password is under 12 characters. Given the iteration count the\n" +
        "free plan allows, length is doing most of the work here. Refusing.",
    );
    process.exit(1);
  }
} else {
  password = generatePassword(20);
  generated = true;
}

const hash = await hashPassword(password, ITERATIONS);

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
