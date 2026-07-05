#!/usr/bin/env node

/**
 * Build-time puzzle encryption for Cornerz (Phase 9).
 *
 * Reads the plaintext source of truth (tools/puzzles-plaintext.json, kept out
 * of the repo) and writes the encrypted src/assets/puzzles.json the app ships.
 *
 * Each puzzle with id > 0 becomes { id, releaseDate, difficulty, iv, ciphertext }.
 * Entries with id <= 0 (test puzzles) stay in plaintext — they are dev-only
 * and contain nothing to spoil.
 *
 * Usage:
 *   npm run encrypt                # plaintext -> encrypted assets file
 *   node tools/encrypt-puzzles.js [plaintext-path] [output-path]
 *
 * If the plaintext file is missing, reconstruct it first with `npm run decrypt`
 * (every puzzle's key is derivable from its stored releaseDate).
 */

const fs = require('fs');
const path = require('path');
const { releaseDateForId, encryptPuzzle, decryptPuzzle, isEncryptedEntry } = require('./puzzle-crypto');

const plaintextPath = process.argv[2] || path.join(__dirname, 'puzzles-plaintext.json');
const outputPath = process.argv[3] || path.join(__dirname, '..', 'src', 'assets', 'puzzles.json');

if (!fs.existsSync(plaintextPath)) {
  console.error(`Plaintext source not found: ${plaintextPath}`);
  console.error('Run "npm run decrypt" first to reconstruct it from src/assets/puzzles.json.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(plaintextPath, 'utf8'));
if (!Array.isArray(data.puzzles)) {
  console.error('Expected a top-level { "puzzles": [...] } object.');
  process.exit(1);
}

if (data.puzzles.some(isEncryptedEntry)) {
  console.error('Input already contains encrypted entries — refusing to double-encrypt.');
  process.exit(1);
}

const out = data.puzzles.map(puzzle => {
  if (puzzle.id <= 0) return puzzle; // dev/test puzzles stay plaintext

  const releaseDate = releaseDateForId(puzzle.id);
  const { iv, ciphertext } = encryptPuzzle(puzzle, releaseDate);
  return {
    id: puzzle.id,
    releaseDate,
    difficulty: puzzle.difficulty, // non-spoiler metadata stays readable
    iv,
    ciphertext
  };
});

// Round-trip verification before writing anything
for (const entry of out) {
  if (!isEncryptedEntry(entry)) continue;
  const original = data.puzzles.find(p => p.id === entry.id);
  const decrypted = decryptPuzzle(entry);
  if (JSON.stringify(decrypted) !== JSON.stringify(original)) {
    console.error(`Round-trip verification FAILED for puzzle ${entry.id} — aborting.`);
    process.exit(1);
  }
}

fs.writeFileSync(outputPath, JSON.stringify({ format: 'encrypted-v1', puzzles: out }, null, 2) + '\n');
const encryptedCount = out.filter(isEncryptedEntry).length;
console.log(`Encrypted ${encryptedCount} puzzle(s) (+${out.length - encryptedCount} plaintext test entr${out.length - encryptedCount === 1 ? 'y' : 'ies'}) -> ${outputPath}`);
console.log('All entries round-trip verified.');
