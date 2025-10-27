# 🎮 Tic Tac Toe

A simple and modular **Tic Tac Toe** game built using **JavaScript (ES Modules)**, **HTML**, and **CSS**.

---

## 🧩 Overview

This project follows a **modular architecture**, separating logic, state management, and UI rendering into distinct components.  
It ensures maintainability, readability, and reusability.

---

## 🗂️ Project Structure

```
📁 project/
│
├── index.html          → Basic structure, links to style.css & script.js
├── style.css           → Layout and UI styling
│
├── script.js           → Entry point (initializes the game)
├── gameBoard.js        → Manages board state
├── player.js           → Factory for creating players
├── gameController.js   → Core logic & game rules
└── winCondition.js     → Evaluates win or draw conditions
```

---

## ⚙️ Modules Explained

### 🧠 1. gameBoard.js — Data Layer
Handles board state only — no display logic.

**Responsibilities:**
- `getBoard()` → returns the board array.
- `setCell(index, marker)` → sets a marker if the cell is empty.
- `reset()` → clears all cells.
- `isEmpty(index)` → checks if a cell is available.

---

### 👤 2. player.js — Player Factory
Creates player objects with their name and marker.

**Responsibilities:**
- `players(name, marker)` → returns player object.
- Includes helper methods like `getName()` and `getMarker()`.

---

### 🏆 3. winCondition.js — Game Logic Helper
Evaluates if there’s a winner or a draw.

**Responsibilities:**
- `winCondition(board)` → returns “X” or “O” if there’s a winner, else `false`.
- `isDraw(board)` → returns `true` if no empty cells remain and no winner.

---

### 🎮 4. gameController.js — Game Brain
Controls game flow and player turns.

**Responsibilities:**
- Initializes board and players.
- Handles moves via `playRound(index)`.
- Checks for win/draw via `winCondition()` and `isDraw()`.
- Switches players or resets the board when needed.
- Keeps track of the current player.

---

### 🖥️ 5. displayController.js — View Layer
Handles all **DOM interactions** and updates visuals.

**Responsibilities:**
- Creates game grid dynamically.
- Displays messages (“Player One Wins”, “Draw!”).
- Updates the board visuals using `renderBoard()`.
- Manages Reset Game and Reset Score buttons.
- Communicates with `gameController` for gameplay actions.

---

### 🚀 6. script.js — Entry Point
Starts the game.

**Responsibilities:**
- Imports `displayController()`.
- Initializes the game and creates the grid on page load.

---

## 🔁 Game Flow

```
User clicks cell
   ↓
displayController → gameController.playRound(index)
   ↓
gameBoard updates the board
   ↓
winCondition checks for winner/draw
   ↓
gameController decides next move
   ↓
displayController updates visuals
```

---

## 🧱 Tech Stack

- **HTML5** — Structure
- **CSS3 (Grid)** — Layout & Design
- **JavaScript (ES6 Modules)** — Game Logic & UI

---

## 📄 License

This project is open-source and available for personal or educational use.
