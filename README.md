# Cornerz

A challenging word puzzle game inspired by NY Times Connections, built with Angular. Players arrange words in a 3x3 grid where each word must belong to both its row category and column category simultaneously.

## Features

- **Interactive Drag & Drop**: Intuitive word placement using Angular CDK
- **Dual-Category Logic**: Each word must satisfy both row and column categories
- **Multiple Puzzle Sets**: Various themed word collections with different difficulty levels
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Strategic Gameplay**: Requires analytical thinking and creative word association
- **Clean UI**: Modern, minimalist interface focused on puzzle-solving

## Game Mechanics

Cornerz is a sophisticated word puzzle that challenges players to think in multiple dimensions. The game presents a 4x4 grid with 12 outer spots where each position must be filled with a word that satisfies **two categories simultaneously**.

### How It Works

The puzzle has **6 total categories** organized into two sets:
- **Category Set A**: Three categories that can be assigned to rows or columns
- **Category Set B**: Three categories that can be assigned to the remaining rows or columns

Players can choose whether Category Set A represents rows or columns, making the puzzle flexible and allowing multiple solution approaches.

Each word in the grid must belong to **both** its row category **and** its column category, creating a complex web of interconnected meanings.

### Game Mechanics

```
4x4 Grid (X = available spots, O = disabled center spots):

X X X X
X O O X  
X O O X
X X X X

Drag 4 words to form complete lines:
- Top Row (positions 0,1,2,3)
- Bottom Row (positions 12,13,14,15)
- Left Column (positions 0,4,8,12)
- Right Column (positions 3,7,11,15)

If all 4 words belong to the same category, they turn GREEN and lock in place.
Otherwise, they automatically return to the tile bank.
Any line can be any category!

🎯 VISUAL INDICATORS:
When a line is completed, the corresponding center square shows:
- Top Row → Top Right center (arrow ↑ + category name)
- Right Column → Bottom Right center (arrow → + category name)  
- Bottom Row → Bottom Left center (arrow ↓ + category name)
- Left Column → Top Left center (arrow ← + category name)
```

In this example:
- **CHEDDAR** works because it's both slang for money (column) and a type of cheese (row)
- **BROWN** works because it's a color (column) and a bakery term (row)
- **CHECKER** works because it's something that rolls (column) and a musician's last name (row)

### The Challenge

The brilliance of Cornerz lies in finding words that can satisfy dual categories. Players must:

1. **Analyze Categories**: Understand what each row and column category represents
2. **Find Intersections**: Identify words that logically fit both their row and column themes
3. **Strategic Placement**: Position words to create a coherent, solvable grid
4. **Verify Logic**: Ensure every word makes sense within both of its assigned categories

### Available Puzzles

1. **Puzzle 1** - A puzzle written by Fyl

*More puzzles can be added by extending the puzzle data structure in `puzzles.json`.*

## Technology Stack

- **Frontend**: Angular 14.2.0
- **UI Components**: Angular CDK for drag-and-drop functionality
- **Styling**: SCSS with component-scoped styles
- **Testing**: Jasmine & Karma
- **Build Tool**: Angular CLI

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Angular CLI (optional, for development)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cornerz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Development

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── game-board/          # Main game interface
│   │   └── game-tile/           # Individual draggable tiles
│   ├── services/
│   │   └── game.service.ts      # Puzzle data management
│   ├── app-routing.module.ts    # Application routing
│   └── app.module.ts           # Main app module
├── assets/
│   └── puzzles.json            # Puzzle data configuration
└── environments/               # Environment configurations
```

### Development Commands

- **Start dev server**: `npm start` or `ng serve`
- **Build for production**: `npm run build` or `ng build`
- **Run tests**: `npm test` or `ng test`
- **Build and watch**: `npm run watch` or `ng build --watch`

### Adding New Puzzles

To add new puzzle sets, edit `src/assets/puzzles.json`. Each puzzle defines two category sets where each word appears exactly once in each set, allowing flexible row/column assignment:

```json
{
  "puzzles": [
    {
      "id": 2,
      "title": "Your New Puzzle",
      "description": "Brief description of the puzzle theme",
      "words": [
        "WORD1", "WORD2", "WORD3",
        "WORD4", "WORD5", "WORD6", 
        "WORD7", "WORD8", "WORD9"
      ],
      "categorySetA": [
        {
          "name": "First Category A",
          "words": ["WORD1", "WORD2", "WORD3"]
        },
        {
          "name": "Second Category A", 
          "words": ["WORD4", "WORD5", "WORD6"]
        },
        {
          "name": "Third Category A",
          "words": ["WORD7", "WORD8", "WORD9"]
        }
      ],
      "categorySetB": [
        {
          "name": "First Category B",
          "words": ["WORD1", "WORD4", "WORD7"]
        },
        {
          "name": "Second Category B",
          "words": ["WORD2", "WORD5", "WORD8"]
        },
        {
          "name": "Third Category B",
          "words": ["WORD3", "WORD6", "WORD9"]
        }
      ]
    }
  ]
}
```

Each word must appear exactly once in categorySetA and once in categorySetB, creating the dual-category constraint that makes the puzzle challenging.

### Component Overview

- **GameBoardComponent**: Main game interface handling the 3x3 grid and tile bank
- **GameTileComponent**: Individual draggable word tiles
- **GameService**: Manages puzzle data loading and retrieval

## Playing the Game

1. **Select a Puzzle**: Use URL parameter `?puzzle=1` (or 2, 3) to choose a puzzle set
2. **Study the Categories**: Examine the row and column headers to understand the 6 different categories
3. **Drag Words**: Click and drag word tiles from the bank to positions on the 3x3 grid
4. **Think Dual-Purpose**: Each word must logically fit both its row category AND column category
5. **Rearrange**: Move words between grid positions or back to the bank as you refine your solution
6. **Verify Connections**: Ensure every placement makes logical sense for both intersecting categories

### Strategy Tips

- **Start with Obvious Intersections**: Look for words that clearly fit specific row/column combinations
- **Work Systematically**: Focus on one category at a time, then verify the perpendicular connections
- **Think Creatively**: Some words may have multiple meanings or interpretations that satisfy categories
- **Use Process of Elimination**: If a word doesn't work in one position, try it elsewhere

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Testing

Run the test suite with:
```bash
npm test
```

Tests are written using Jasmine and executed via Karma. The test configuration can be found in `karma.conf.js`.

## Build and Deployment

### Production Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for production deployment.

### Development Build

```bash
npm run watch
```

Builds the project in development mode and watches for file changes.

## License

This project is licensed under the MIT License.

## Angular CLI Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

For more help with Angular CLI commands, run `ng help` or visit the [Angular CLI Documentation](https://angular.io/cli).
