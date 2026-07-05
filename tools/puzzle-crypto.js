/**
 * Shared crypto helpers for Cornerz puzzle encryption tooling.
 *
 * Scheme (must stay in sync with src/app/services/static-puzzle-provider.ts):
 *  - Key:  PBKDF2(password = releaseDate "YYYY-MM-DD", salt = "cornerz-<id>",
 *          100k iterations, SHA-256) -> 256-bit AES key
 *  - Data: AES-256-GCM, 12-byte random IV, auth tag appended to the
 *          ciphertext (matches the Web Crypto API's AES-GCM output format)
 *  - Payload: JSON string of the full plaintext puzzle object
 */

const crypto = require('crypto');

const PBKDF2_ITERATIONS = 100000;
const SALT_PREFIX = 'cornerz-';

/** Launch date of puzzle #1; releaseDate(id) = start + (id - 1) days. */
const PUZZLE_EPOCH_UTC = Date.UTC(2026, 2, 25); // March 25, 2026

function releaseDateForId(id) {
  const d = new Date(PUZZLE_EPOCH_UTC + (id - 1) * 86400000);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

function deriveKey(releaseDate, puzzleId) {
  return crypto.pbkdf2Sync(
    Buffer.from(releaseDate, 'utf8'),
    Buffer.from(SALT_PREFIX + puzzleId, 'utf8'),
    PBKDF2_ITERATIONS,
    32,
    'sha256'
  );
}

function encryptPuzzle(puzzle, releaseDate) {
  const key = deriveKey(releaseDate, puzzle.id);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(puzzle), 'utf8'),
    cipher.final(),
    cipher.getAuthTag() // appended, like Web Crypto's subtle.encrypt output
  ]);
  return { iv: iv.toString('base64'), ciphertext: ciphertext.toString('base64') };
}

function decryptPuzzle(entry) {
  const key = deriveKey(entry.releaseDate, entry.id);
  const iv = Buffer.from(entry.iv, 'base64');
  const blob = Buffer.from(entry.ciphertext, 'base64');
  const tag = blob.subarray(blob.length - 16);
  const data = blob.subarray(0, blob.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([decipher.update(data), decipher.final()]).toString('utf8');
  return JSON.parse(plaintext);
}

function isEncryptedEntry(entry) {
  return typeof entry.ciphertext === 'string' && typeof entry.iv === 'string';
}

module.exports = {
  PBKDF2_ITERATIONS,
  SALT_PREFIX,
  releaseDateForId,
  deriveKey,
  encryptPuzzle,
  decryptPuzzle,
  isEncryptedEntry
};
