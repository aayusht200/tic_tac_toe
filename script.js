import * as Condition from "./winCondition.js";
import { gameBoard } from "./gameBoard.js";
import { players } from "./player.js";
import { gameController } from "./gameController.js";
import { createBoard, displayController } from "./displayController.js";

createBoard();
let game = displayController();

console.log(game.renderBoard());
