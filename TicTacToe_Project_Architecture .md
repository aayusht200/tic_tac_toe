# 🧩 Tic Tac Toe --- Project Architecture (No Code)

## 🗂 Files

    📁 project/
    │
    ├── index.html          → basic structure, links to style.css & script.js
    ├── style.css           → layout and UI styling
    │
    ├── script.js           → main entry point (initializes the game)
    ├── gameBoard.js        → handles board state
    ├── player.js           → factory for creating players
    ├── gameController.js   → core logic and rules of the game
    └── winCondition.js     → evaluates the board for a win or tie

---

## 1️⃣ gameBoard.js --- "Data Layer"

**Purpose:** Handles the _state of the board_. Nothing else --- no
display, no rules.

### Responsibilities / Functions

- `getBoard()` → returns the current board array.\
- `setCell(index, marker)` → updates a specific cell with a player's
  marker (X/O).\
- `reset()` → clears the board (all cells back to `null`).\
- (Optional) `isCellEmpty(index)` → check if a cell is available.

➡️ Does **not** know about players or turns --- just stores board data.

---

## 2️⃣ player.js --- "Factory Function"

**Purpose:** Creates and manages player objects.

### Responsibilities / Functions

- `players(name, marker)` → returns a player object with:
  - `getName()` → returns player's name.
  - `getMarker()` → returns player's symbol (X or O).

➡️ Does **not** know about the board or game rules --- just represents
players.

---

## 3️⃣ winCondition.js --- "Logic Helper"

**Purpose:** Checks if someone has won or if the game is a draw.

### Responsibilities / Functions

- `winCondition(board)` →
  - Takes the board array.\
  - Checks all winning patterns.\
  - Returns the winning marker ("X" or "O") if found, else `false`.\
- (Optional) `isDraw(board)` → returns `true` if all cells filled and
  no winner.

➡️ **Stateless** helper --- just evaluates logic.

---

## 4️⃣ gameController.js --- "Game Logic Brain"

**Purpose:** Controls the game flow --- player turns, win checking, and
reset logic.

### Responsibilities / Functions

- Initialize players and board (`gameBoard()` and `players()`).\
- Keep track of the current player.\
- `playRound(index)` →
  1.  Validate the move (cell is empty).\
  2.  Place the marker using `gameBoard.setCell()`.\
  3.  Check for winner via `winCondition()`.\
  4.  If winner → announce / end game.\
  5.  If no winner → switch player.\
- `getCurrentPlayer()` → returns whose turn it is.\
- `resetGame()` → resets the board and current player.

➡️ Does **not** handle HTML or buttons --- just logic.

---

## 5️⃣ displayController.js --- "View Layer"

**Purpose:** Handles all DOM interactions and visual updates.

### Responsibilities / Functions

- `renderBoard(board)` → draws current state of the board to the
  screen.\
- Add event listeners to grid cells → calls
  `gameController.playRound(index)`.\
- Update text labels ("Player X's turn", "Player O wins!", etc.).\
- Control UI buttons (restart, reset score).\
- Disable input when game ends.

➡️ Talks to `gameController`, but **never changes the board directly**.

---

## 6️⃣ script.js --- "Entry Point"

**Purpose:** Starts everything.

### Responsibilities / Functions

- Import all modules.\
- Initialize `gameController()` and `displayController()`.\
- Set up event listeners for start/restart buttons.

➡️ The only file that runs automatically when loaded in the browser.

## 7 working.js --- "Classic JS Solution"

**Purpose:** Non Modular.

### Responsibilities / Functions

- Just Paste and add id/classes good to go

## ➡️ The only file that runs automatically when loaded in the browser.

## ✅ Flow Summary

    User clicks → displayController → gameController.playRound(index)
    → gameBoard updates → winCondition checks → gameController decides
    → displayController updates visuals
