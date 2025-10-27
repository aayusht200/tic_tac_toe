import * as Condition from "./winCondition.js";
import { gameBoard } from "./gameBoard.js";
import { players } from "./player.js";
import { gameController } from "./gameController.js";
import { displayController } from "./displayController.js";

let game = displayController();

game.createGrid();
