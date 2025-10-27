import { gameController } from "./gameController.js";
import { gameBoard } from "./gameBoard.js";
import { players } from "./player.js";

const button_grid = document.getElementById("button_grid");
const playbuttons = document.getElementsByClassName("play_button");
export function createBoard() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("button");
    div.dataset.id = i;
    button_grid.appendChild(div);
    div.classList.add("play_button");
  }
}

export function displayController() {
  let game = gameController();
  function renderBoard() {
    console.log(playbuttons);
  }
  return { renderBoard };
}
