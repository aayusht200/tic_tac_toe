import * as Condition from "./winCondition.js";
import { gameBoard } from "./gameBoard.js";
import { players } from "./player.js";
let board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
let boardTwo = [null, null, null, null, null, null, null, null, null];

console.log(Condition.isDraw(board));
console.log(Condition.isDraw(boardTwo));
