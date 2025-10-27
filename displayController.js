import { gameController } from "./gameController.js";
import { gameBoard } from "./gameBoard.js";
export function displayController() {
  const display = document.getElementById("display");
  const reset = document.getElementById("reset");
  let score = "";
  const game = gameController();
  function createGrid() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("button");
      div.dataset.id = i;
      button_grid.appendChild(div);
      div.classList.add("play_button");
      div.addEventListener("click", (e) => {
        score = game.playRound(i);
        renderBoard();
        if (score != "") displayArea(score);
      });
    }
  }
  function renderBoard() {
    const playbuttons = document.getElementsByClassName("play_button");
    let board = game.getBoard();
    for (let i = 0; i < board.length; i++) {
      playbuttons[i].textContent = board[i] ? board[i] : "";
    }
  }
  function displayArea(score) {
    switch (score) {
      case "playerOne":
        display.textContent = "Player One Wins";
        break;
      case "playerTwo":
        display.textContent = "Player Two Wins";
        break;
      case "Draw":
        display.textContent = "Draw!";
        break;
      default:
        display.textContent = "";
    }
  }
  reset.addEventListener("click", (e) => {
    console.log(game.getBoard());
  });
  return { renderBoard, createGrid };
}

// console.log("test");
