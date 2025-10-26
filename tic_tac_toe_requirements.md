# 🧩 Project: Tic Tac Toe Game

## 🎯 Objective
Create a browser-based **Tic Tac Toe** game using **HTML, CSS, and JavaScript**, structured with clean, modular code. Focus on logical design, encapsulation, and separation of concerns — minimizing global code.

---

## 📁 Project Setup
1. **Files**
   - `index.html`
   - `style.css`
   - `script.js`
2. **Git**
   - Initialize a Git repository.
   - Commit after each milestone (setup, game logic, DOM integration, final UI).

---

## 🧱 Core Architecture
The app should be structured around **three main modules/objects**:

### 1. Gameboard (Module)
- Store the **state of the board** as an array (e.g. 9 elements representing cells).
- Provide methods to:
  - Retrieve the current board.
  - Update a cell with a player’s move.
  - Reset the board.

### 2. Player (Factory Function)
- Create player objects with:
  - `name`
  - `marker` (either `"X"` or `"O"`)
- Optionally include a method like `getMarker()` or `getName()` for encapsulation.

### 3. Game Controller (Module)
- Control **game flow and rules**:
  - Manage turns.
  - Prevent illegal moves (playing in an occupied space).
  - Check for **win conditions** and **ties**.
  - Switch active players.
  - Reset or restart the game.
- Should be able to run purely in the **console** initially (no DOM).

---

## 🧠 Development Phases

### Phase 1: Console Game Logic
- Build and test the game entirely in the console.
- Manually simulate moves by calling functions.
- Implement and test:
  - Win detection for all 3-in-a-row patterns.
  - Tie detection.
  - Turn alternation.

### Phase 2: Display Controller (Module)
- Create a separate object/module to manage **DOM rendering**.
- Render the gameboard array to the screen (e.g. 3×3 grid).
- Update the display dynamically as the game progresses.

### Phase 3: Player Interaction
- Allow players to **click** a cell to make a move.
- Ensure:
  - Moves alternate between players.
  - Already filled cells cannot be clicked again.
  - The board updates visually.

### Phase 4: UI Enhancements
Add interface elements for:
- Player name input fields.
- A **Start / Restart** button.
- A **status display** (e.g. “Player X’s turn”, “Player O wins!”, “It’s a tie!”).

### Phase 5: Polishing
- Style the grid with **CSS** for clarity and a clean appearance.
- Ensure consistent UX (disable input when the game ends, etc.).
- Optional: Add subtle animations or hover effects.

---

## 🧩 Design Goals
- Use **IIFE (Immediately Invoked Function Expressions)** or the **module pattern** to encapsulate code.
- Minimize global variables — ideally, only one line outside modules (e.g. initialization call).
- Keep **responsibilities separated**:
  - Gameboard → handles data.
  - Game Controller → handles rules.
  - Display Controller → handles UI updates.

---

## ✅ Completion Checklist
- [ ] Game works entirely in console (logic verified).  
- [ ] No global variables except initialization.  
- [ ] DOM version allows real player interaction.  
- [ ] Win and tie detection fully functional.  
- [ ] UI polished with restart functionality.  
