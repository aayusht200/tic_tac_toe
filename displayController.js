import { gameController } from "./gameController.js";
export function displayController() {
  const display = document.getElementById("display");
  const reset_game = document.getElementById("reset_game");
  const button_grid = document.getElementById("button_grid");
  const playerOneScore = document.getElementById("playerOneScore");
  const playerTwoScore = document.getElementById("playerTwoScore");
  const reset_score = document.getElementById("reset_score");
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  let winner = "";
  const game = gameController();
  function createGrid() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("button");
      div.dataset.id = i;
      button_grid.appendChild(div);
      div.classList.add("play_button");
      div.addEventListener("click", (e) => {
        display.textContent = "";
        winner = game.playRound(i);
        if (winner) displayArea(winner);
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
        playerOneScore.textContent = Number(playerOneScore.textContent) + 1;
        break;
      case "O":
        display.textContent = "Player Two Wins";
        playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1;
        break;
      case "Draw":
        display.textContent = "Draw!";
        break;
      default:
        display.textContent = "";
    }
  }

  reset_game.addEventListener("click", (e) => {
    game.resetBoard();
    display.textContent = "";
    renderBoard();
  });
  reset_score.addEventListener("click", (e) => {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    game.resetBoard();
    renderBoard();
  });
  return { renderBoard, createGrid };
}
