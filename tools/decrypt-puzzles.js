#!/usr/bin/env node

/**
 * Reconstructs the plaintext puzzle source (tools/puzzles-plaintext.json) from
 * src/assets/puzzles.json. Handles both encrypted entries (decrypts them using
 * their stored releaseDate) and plaintext entries (passes them through), so it
 * also serves as the one-time bootstrap when migrating to the encrypted format.
 *
 * Usage:
 *   npm run decrypt
 *   node tools/decrypt-puzzles.js [assets-path] [output-path]
 */

const fs = require('fs');
const path = require('path');
const { decryptPuzzle, isEncryptedEntry } = require('./puzzle-crypto');

const assetsPath = process.argv[2] || path.join(__dirname, '..', 'src', 'assets', 'puzzles.json');
const outputPath = process.argv[3] || path.join(__dirname, 'puzzles-plaintext.json');

const data = JSON.parse(fs.readFileSync(assetsPath, 'utf8'));
let decryptedCount = 0;

const puzzles = data.puzzles.map(entry => {
  if (!isEncryptedEntry(entry)) return entry;
  decryptedCount++;
  return decryptPuzzle(entry);
});

fs.writeFileSync(outputPath, JSON.stringify({ puzzles }, null, 2) + '\n');
console.log(`Wrote ${puzzles.length} plaintext puzzle(s) (${decryptedCount} decrypted) -> ${outputPath}`);
