# Cornerz Puzzle Difficulty Rubric

Use this rubric to assign a solve-difficulty rating to each puzzle before release. The rating reflects how hard the puzzle is for a typical player to solve — not how good or fair the puzzle is (see `PUZZLE_EVALUATION.md` for quality scoring).

Difficulty and quality are independent. A puzzle can be excellent and easy, or weak and hard.

---

## Rating Scale

| Rating | Label | Description |
|:------:|-------|-------------|
| ★☆☆☆☆ | Very Easy | Mostly literal categories, common knowledge, clear entry point, low misdirection |
| ★★☆☆☆ | Easy | One non-literal category but still accessible; some misdirection easily overcome |
| ★★★☆☆ | Medium | Mix of literal and abstract; at least one real "aha" required; some specialized knowledge may help |
| ★★★★☆ | Hard | Most categories are non-literal or trivia-gated; strong misdirection; corner words are disguised |
| ★★★★★ | Very Hard | All categories are abstract or require specific trivia; heavy misdirection; revealed answers still surprise |

---

## Scoring Criteria

Rate each of the six factors below, then use the summary guidelines to land on a final star rating. The factors are not a strict formula — use them as a checklist to justify your rating and catch blind spots.

---

### 1. Category Transparency

*How obvious is the underlying rule from the words alone?*

Literal, concrete categories are easy. Abstract, figurative, or secondary-meaning categories are hard. Ask: if a player saw just the four words in a completed line, how long would it take them to name the category?

| Transparency | Examples |
|---|---|
| Fully literal | Breakfast Foods, Types of Fish, Building Materials |
| Accessible abstraction | Words That Follow RED, ___ Potato, Apply Pressure |
| Non-obvious abstraction | Romantic Partner (FLAME, SQUEEZE), Criticize Harshly (ROAST, FLAME) |
| Trivia or secondary meanings | Repeat Best Actress Winners, First Words of Kevin Costner Movies |

**Weight: high.** A single very opaque category raises difficulty noticeably. Two or more push a puzzle toward 4–5 stars regardless of other factors.

---

### 2. Knowledge Barrier

*Does solving any category require specialized or domain-specific knowledge?*

Common knowledge (colors, fruits, NFL teams) is accessible to nearly all players. Specialized trivia (Oscar history, Chinese zodiac, a specific director's filmography) creates a hard wall for players who lack that knowledge.

| Level | Description |
|---|---|
| None | All categories solvable from general everyday knowledge |
| Mild | One category benefits from domain knowledge but can be inferred from pattern recognition |
| Moderate | One category essentially requires specific knowledge to crack |
| High | Two or more categories are trivia-gated |

**Note:** A category that can be inferred backward (e.g., "these four must go together, so what's the connection?") has a lower effective barrier than one where you must name the category first to place the words.

---

### 3. Misdirection Strength

*How convincingly do words pull players toward the wrong category?*

Good misdirection is intentional and survives scrutiny; it makes the solve feel earned. For difficulty purposes, it doesn't matter whether misdirection was intentional — it raises difficulty either way.

| Level | Description |
|---|---|
| Low | Most words clearly suggest their correct category |
| Moderate | One or two words create a plausible false lead |
| High | Several words strongly suggest wrong categories; players will make wrong guesses |
| Severe | The puzzle's surface theme is a red herring (e.g., all words are animal names but no category is "animals") |

---

### 4. Corner Word Disguise

*How obvious is it that the corner words each belong to two categories?*

Easy corner words wear both identities on their sleeve — players quickly see them as bridges. Hard corner words look like they belong to exactly one category until a late insight reveals the second connection.

| Level | Description |
|---|---|
| Transparent | Corner words obviously fit two categories (e.g., TOAST in Breakfast + Party) |
| Mild | Corner words' dual nature becomes apparent once one category is solved |
| Disguised | Corner words strongly suggest only one category; the second connection is a surprise |
| Well-hidden | Players may place a corner word incorrectly multiple times before seeing both connections |

---

### 5. Entry Point Availability

*Is there at least one category that gives the player a clear starting foothold?*

A "gimme" category lets the player eliminate 4 words early and reduces the search space for the remaining 8. Without one, the player has to reason about all 12 words simultaneously, which is significantly harder.

| Level | Description |
|---|---|
| Strong | One category is immediately obvious to most players |
| Moderate | One category becomes clear after a moment's thought |
| Weak | All categories require some work; there is no obvious first step |
| None | All categories are equally opaque or equally misleading |

---

### 6. Surface Theme Overlap

*Do multiple categories share the same surface domain, forcing deeper reasoning?*

When all 12 words look like they belong to the same type of thing (all animals, all synonyms for the same word, all celebrity names), players cannot use domain as a sorting heuristic. They must engage with secondary meanings or meta-categories from the start.

| Level | Description |
|---|---|
| None | Categories cover distinct domains; words naturally cluster |
| Mild | One or two words straddle surface domains |
| Moderate | Half or more of the words share a surface identity |
| Total | All words share an obvious surface identity that is not the puzzle's actual theme |

---

## Rating Guidelines

Use the criteria above to land on a final 1–5 star rating:

**★☆☆☆☆ Very Easy**
- All or nearly all categories are fully literal and common-knowledge
- Strong entry point (one obvious gimme)
- Low misdirection; corner words' dual nature is apparent
- Most players solve with zero or one mistake

**★★☆☆☆ Easy**
- Most categories are literal or accessible
- One non-literal or mildly specialized category
- Some misdirection but easy to overcome once one category is found
- Clear entry point still exists

**★★★☆☆ Medium**
- Meaningful mix of literal and abstract categories
- At least one real "aha" moment required
- Some misdirection makes wrong guesses likely
- One or two corner words are non-obvious
- May have mild domain knowledge requirement

**★★★★☆ Hard**
- Most categories are abstract, figurative, or trivia-gated
- Strong misdirection across multiple words
- Entry point is limited or only apparent in retrospect
- Corner words are well-disguised
- Players will typically need multiple attempts

**★★★★★ Very Hard**
- All categories are abstract, non-literal, or require specific trivia
- Severe misdirection; surface theme may be a total red herring
- No obvious entry point
- Corner connections are subtle and surprising even after the solution is revealed
- Most players will not solve without mistakes

---

## Relationship to the In-Game Difficulty Field

Each puzzle already has a `difficulty` field (1–3: easy/medium/hard) used for library filtering. The star rating from this rubric is a more precise version of that same concept and should inform it:

| Star Rating | Library Difficulty |
|:-----------:|:-----------------:|
| ★☆☆☆☆ – ★★☆☆☆ | 1 (easy) |
| ★★★☆☆ | 2 (medium) |
| ★★★★☆ – ★★★★★ | 3 (hard) |

When a puzzle's star rating disagrees with its current `difficulty` field, update the field.

---

## What This Rubric Does Not Cover

- **Puzzle quality** — see `PUZZLE_EVALUATION.md`
- **Per-category difficulty** — the `difficulty` field on each category (1–4, Yellow through Purple) is about *which line to solve first*, not how hard the overall puzzle is. These are separate concepts.
- **Playtest data** — if observed solve rates or mistake counts are available, let them override the on-paper rating.
