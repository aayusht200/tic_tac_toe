import { gameController } from "./gameController.js";
import { gameBoard } from "./gameBoard.js";
export function displayController() {
  const display = document.getElementById("display");
  const reset = document.getElementById("reset");
  const playerOneScore = document.getElementById("playerOneScore");
  const playerTwoScore = document.getElementById("playerTwoScore");
  const score_area = document.getElementById("score_area");
  let winner = "";
  const game = gameController();
  function createGrid() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("button");
      div.dataset.id = i;
      button_grid.appendChild(div);
      div.classList.add("play_button");
      div.addEventListener("click", (e) => {
        winner = game.playRound(i);
        if (winner != "") displayArea(winner);
        renderBoard();
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
  function displayArea(winner) {
    switch (winner) {
      case "X":
        display.textContent = "Player One Wins";
        break;
      case "O":
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
    game.resetBoard();
    renderBoard();
  });
  return { renderBoard, createGrid };
}

// console.log("test");
