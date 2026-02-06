#!/usr/bin/env node

/**
 * Puzzle Validation Tool for Cornerz
 *
 * Validates puzzles.json to ensure:
 *  - Correct structure (4 categories, 4 words each, 12 unique words)
 *  - Exactly 4 corner words (shared by 2 categories) and 8 edge words (1 category)
 *  - Difficulty values 1-4, each used exactly once
 *  - Solvable ring: categories can be arranged in a cycle where neighbors share 1 corner word
 *
 * Usage: node tools/validate-puzzles.js [path-to-puzzles.json]
 */

const fs = require('fs');
const path = require('path');

const jsonPath = process.argv[2] || path.join(__dirname, '..', 'src', 'assets', 'puzzles.json');

// --- Helpers ---

function bold(s) { return `\x1b[1m${s}\x1b[0m`; }
function green(s) { return `\x1b[32m${s}\x1b[0m`; }
function red(s) { return `\x1b[31m${s}\x1b[0m`; }
function yellow(s) { return `\x1b[33m${s}\x1b[0m`; }

function pass(msg) { console.log(`  ${green('PASS')} ${msg}`); }
function fail(msg) { console.log(`  ${red('FAIL')} ${msg}`); }
function warn(msg) { console.log(`  ${yellow('WARN')} ${msg}`); }

// --- Validation ---

function validatePuzzle(puzzle, index) {
  const errors = [];
  const warnings = [];
  const label = `Puzzle ${puzzle.id ?? index + 1}` + (puzzle.title ? ` — "${puzzle.title}"` : '');

  console.log(`\n${bold(label)}`);

  // 1. Required fields
  for (const field of ['id', 'title', 'description', 'words', 'categories']) {
    if (puzzle[field] == null) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  if (errors.length) {
    errors.forEach(e => fail(e));
    return errors.length;
  }

  // 2. Exactly 4 categories
  if (puzzle.categories.length !== 4) {
    fail(`Expected 4 categories, found ${puzzle.categories.length}`);
    return 1;
  }
  pass('4 categories');

  // 3. Each category has exactly 4 words
  let catWordCountOk = true;
  for (const cat of puzzle.categories) {
    if (cat.words.length !== 4) {
      fail(`Category "${cat.name}" has ${cat.words.length} words (expected 4)`);
      catWordCountOk = false;
    }
  }
  if (catWordCountOk) pass('Each category has 4 words');

  // 4. Difficulty values
  const diffs = puzzle.categories.map(c => c.difficulty);
  const expectedDiffs = [1, 2, 3, 4];
  const diffsSorted = [...diffs].sort();
  if (JSON.stringify(diffsSorted) !== JSON.stringify(expectedDiffs)) {
    fail(`Difficulty values should be [1,2,3,4], found [${diffs.join(',')}]`);
  } else {
    pass('Difficulty values [1,2,3,4] each used once');
  }

  // 5. Words array: 12 unique words
  const wordsSet = new Set(puzzle.words);
  if (puzzle.words.length !== 12) {
    fail(`Words array should have 12 entries, found ${puzzle.words.length}`);
  } else if (wordsSet.size !== 12) {
    fail(`Words array has duplicates (${puzzle.words.length} entries, ${wordsSet.size} unique)`);
  } else {
    pass('12 unique words');
  }

  // 6. Category words match the words array
  const allCategoryWords = new Set();
  for (const cat of puzzle.categories) {
    for (const w of cat.words) {
      allCategoryWords.add(w);
    }
  }
  const inCategoriesNotInWords = [...allCategoryWords].filter(w => !wordsSet.has(w));
  const inWordsNotInCategories = [...wordsSet].filter(w => !allCategoryWords.has(w));
  if (inCategoriesNotInWords.length) {
    fail(`Words in categories but not in words array: ${inCategoriesNotInWords.join(', ')}`);
  }
  if (inWordsNotInCategories.length) {
    fail(`Orphan words (in words array but no category): ${inWordsNotInCategories.join(', ')}`);
  }
  if (!inCategoriesNotInWords.length && !inWordsNotInCategories.length) {
    pass('All category words match words array (no orphans)');
  }

  // 7. Word frequency: exactly 4 corner words (in 2 categories), 8 edge words (in 1 category)
  const wordFreq = new Map();
  for (const cat of puzzle.categories) {
    for (const w of cat.words) {
      wordFreq.set(w, (wordFreq.get(w) || 0) + 1);
    }
  }

  const corners = [];
  const edges = [];
  let badFreq = false;
  for (const [word, count] of wordFreq) {
    if (count === 2) {
      corners.push(word);
    } else if (count === 1) {
      edges.push(word);
    } else {
      fail(`"${word}" appears in ${count} categories (expected 1 or 2)`);
      badFreq = true;
    }
  }

  if (!badFreq) {
    if (corners.length !== 4) {
      fail(`Expected 4 corner words (in 2 categories), found ${corners.length}: ${corners.join(', ')}`);
    } else {
      pass(`4 corner words: ${corners.join(', ')}`);
    }
    if (edges.length !== 8) {
      fail(`Expected 8 edge words (in 1 category), found ${edges.length}`);
    } else {
      pass(`8 edge words: ${edges.join(', ')}`);
    }
  }

  // 8. Solvability: categories form a valid ring
  //    Each pair of adjacent categories in the ring shares exactly 1 corner word.
  //    Non-adjacent categories share 0 words.
  const cats = puzzle.categories;
  const shared = {}; // "i,j" -> shared words
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const setA = new Set(cats[i].words);
      const common = cats[j].words.filter(w => setA.has(w));
      shared[`${i},${j}`] = common;
    }
  }

  // Build adjacency: categories that share exactly 1 word
  const adj = [[], [], [], []];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (shared[`${i},${j}`].length === 1) {
        adj[i].push(j);
        adj[j].push(i);
      } else if (shared[`${i},${j}`].length > 1) {
        fail(`Categories "${cats[i].name}" and "${cats[j].name}" share ${shared[`${i},${j}`].length} words (expected 0 or 1): ${shared[`${i},${j}`].join(', ')}`);
      }
    }
  }

  // Each category should have exactly 2 neighbors
  let degreeOk = true;
  for (let i = 0; i < 4; i++) {
    if (adj[i].length !== 2) {
      fail(`Category "${cats[i].name}" shares a word with ${adj[i].length} categories (expected 2 for ring)`);
      degreeOk = false;
    }
  }

  if (degreeOk) {
    // Verify it's a single cycle (not two disjoint pairs)
    const visited = new Set();
    const queue = [0];
    visited.add(0);
    while (queue.length) {
      const node = queue.shift();
      for (const neighbor of adj[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    if (visited.size === 4) {
      pass('Solvable ring: categories form a valid cycle');

      // Print the ring order
      const ring = [0];
      let prev = -1;
      let curr = 0;
      for (let step = 0; step < 3; step++) {
        const next = adj[curr].find(n => n !== prev);
        ring.push(next);
        prev = curr;
        curr = next;
      }

      const ringNames = ring.map(i => cats[i].name);
      const ringCorners = [];
      for (let k = 0; k < 4; k++) {
        const a = ring[k];
        const b = ring[(k + 1) % 4];
        const key = a < b ? `${a},${b}` : `${b},${a}`;
        ringCorners.push(shared[key][0]);
      }

      console.log(`\n  Ring layout (one valid assignment):`);
      console.log(`         ${bold(ringNames[0])}`);
      console.log(`    ${ringCorners[3]}  ·───────·  ${ringCorners[0]}`);
      console.log(`         │       │`);
      console.log(`  ${bold(ringNames[3])}  │       │  ${bold(ringNames[1])}`);
      console.log(`         │       │`);
      console.log(`    ${ringCorners[2]}  ·───────·  ${ringCorners[1]}`);
      console.log(`         ${bold(ringNames[2])}`);
    } else {
      fail('Categories do not form a connected ring (graph is disconnected)');
    }
  }

  return 0;
}

// --- Main ---

console.log(bold(`\nCornerz Puzzle Validator`));
console.log(`Reading: ${jsonPath}\n`);

let raw;
try {
  raw = fs.readFileSync(jsonPath, 'utf-8');
} catch (err) {
  console.error(red(`Could not read file: ${jsonPath}`));
  process.exit(1);
}

let data;
try {
  data = JSON.parse(raw);
} catch (err) {
  console.error(red(`Invalid JSON: ${err.message}`));
  process.exit(1);
}

if (!data.puzzles || !Array.isArray(data.puzzles)) {
  console.error(red('Expected top-level "puzzles" array'));
  process.exit(1);
}

console.log(`Found ${data.puzzles.length} puzzle(s)`);

let totalErrors = 0;
for (let i = 0; i < data.puzzles.length; i++) {
  totalErrors += validatePuzzle(data.puzzles[i], i);
}

console.log('');
if (totalErrors === 0) {
  console.log(green(bold('All puzzles valid!')));
} else {
  console.log(red(bold(`${totalErrors} error(s) found.`)));
  process.exit(1);
}
