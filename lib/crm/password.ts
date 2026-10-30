import "server-only";

/**
 * Password hashing for the single CRM administrator.
 *
 * ── Why PBKDF2 and not Argon2id ───────────────────────────────────────────
 * Argon2id is the better algorithm and it is not available here. The Workers
 * runtime has no native implementation, so it would arrive as WebAssembly —
 * and being memory-hard, it costs *more* CPU than PBKDF2, not less. That
 * matters because of the limit below. PBKDF2-HMAC-SHA-256 is built into
 * `crypto.subtle`, adds nothing to the bundle, and is still an accepted
 * choice when configured honestly.
 *
 * ── The iteration count is low, and here is the real reason ───────────────
 * Workers Free allows 10 ms of CPU per request. Measured in this runtime:
 *
 *     10,000 iterations ≈  6 ms        50,000 ≈  51 ms
 *     16,000 iterations ≈ 10 ms       600,000 ≈ 432 ms
 *
 * OWASP recommends 600,000. That is 40× over the budget: a login would be
 * killed mid-request with "exceeded resource limits", so it is not a
 * trade-off between fast and secure, it is a choice between 10,000 and a
 * login button that does not work.
 *
 * What makes that acceptable is where the hash lives. It is a Worker secret,
 * not a row in a database. The usual argument for a huge iteration count is
 * "databases leak, and then the attacker grinds offline" — but there is no
 * leak path to this hash that does not already hand over CRM_SESSION_SECRET
 * (forge any session) and the D1 binding (read every lead directly). By the
 * time the hash is exposed, it is the least valuable thing the attacker has.
 *
 * So the iteration count is not what defends this login. These are:
 *   - a high-entropy generated password (scripts/hash-password.mjs makes one
 *     by default); at 20 random characters no iteration count is relevant,
 *     because the search space is the defence;
 *   - rate limiting, which is what actually stops an online attack, and which
 *     refuses *before* spending the CPU;
 *   - the secret store itself.
 *
 * ── Tunable without a code change ─────────────────────────────────────────
 * The iteration count is encoded in the hash string, not compiled in. Moving
 * to Workers Paid (30 s of CPU) means regenerating the hash with a larger
 * count and setting the secret again — this file needs no edit, and old
 * hashes keep verifying at their own count.
 */

/** What `scripts/hash-password.mjs` writes when nothing overrides it. */
export const DEFAULT_ITERATIONS = 10_000;

/** Refuse absurd values rather than trust a hash string we were handed. */
const MIN_ITERATIONS = 1_000;
const MAX_ITERATIONS = 5_000_000;

const SALT_BYTES = 16;
const KEY_BITS = 256;

/**
 * Backed by an explicit `ArrayBuffer`. The bare `new Uint8Array(n)` is typed
 * `Uint8Array<ArrayBufferLike>`, which could be a `SharedArrayBuffer`, and
 * `crypto.subtle` will not accept one.
 */
function bytes(length: number): Uint8Array<ArrayBuffer> {
  return new Uint8Array(new ArrayBuffer(length));
}

function toBase64(input: Uint8Array): string {
  let binary = "";
  for (const byte of input) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function fromBase64(value: string): Uint8Array<ArrayBuffer> {
  const binary = atob(value);
  const out = bytes(binary.length);
  for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
  return out;
}

async function derive(
  password: string,
  salt: Uint8Array<ArrayBuffer>,
  iterations: number,
): Promise<Uint8Array<ArrayBuffer>> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const derived = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    key,
    KEY_BITS,
  );
  const out = bytes(derived.byteLength);
  out.set(new Uint8Array(derived));
  return out;
}

/**
 * Hash a password into `pbkdf2-sha256$i=<n>$<salt>$<key>`.
 *
 * Used by the generator script, never at request time — the CRM only ever
 * verifies.
 */
export async function hashPassword(
  password: string,
  iterations: number = DEFAULT_ITERATIONS,
): Promise<string> {
  const salt = bytes(SALT_BYTES);
  crypto.getRandomValues(salt);
  const key = await derive(password, salt, iterations);
  return `pbkdf2-sha256$i=${iterations}$${toBase64(salt)}$${toBase64(key)}`;
}

/**
 * Compare without leaking where two byte strings first differ.
 *
 * `a === b` on strings short-circuits, and the time it takes is a function of
 * the shared prefix. Over enough samples that is a usable oracle. This always
 * reads every byte.
 */
function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

/**
 * Verify a password against a stored hash string.
 *
 * Returns false for every failure — a malformed hash, an out-of-range
 * iteration count, a wrong password — and never throws, so a corrupted
 * secret locks the CRM rather than crashing it open.
 */
export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  try {
    const parts = stored.split("$");
    if (parts.length !== 4) return false;
    const [scheme, iterationField, saltField, keyField] = parts;
    if (scheme !== "pbkdf2-sha256") return false;
    if (!iterationField.startsWith("i=")) return false;

    const iterations = Number(iterationField.slice(2));
    if (
      !Number.isInteger(iterations) ||
      iterations < MIN_ITERATIONS ||
      iterations > MAX_ITERATIONS
    ) {
      return false;
    }

    const salt = fromBase64(saltField);
    const expected = fromBase64(keyField);
    if (salt.length !== SALT_BYTES || expected.length !== KEY_BITS / 8) {
      return false;
    }

    const actual = await derive(password, salt, iterations);
    return timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}
