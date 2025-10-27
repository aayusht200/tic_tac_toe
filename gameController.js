import { gameBoard } from "./gameBoard.js";
import { players } from "./player.js";
import { isDraw, winCondition } from "./winCondition.js";

export function gameController() {
  const game = gameBoard();
  let playerOne = players("playerOne", "X");
  let playerTwo = players("playerTwo", "O");
  let currentPlayer = playerOne;
  function playRound(index) {
    if (game.isEmpty(index)) {
      game.setCell(index, currentPlayer.marker);
      let winner = winCondition(game.getBoard());
      if (winner) {
        resetBoard();
        return winner;
      } else if (isDraw(game.getBoard())) {
        resetBoard();
        return "Draw";
      } else switchPlayer();
    }
  }
  function switchPlayer() {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
  function getCurrentPlayer() {
    return currentPlayer;
  }
  function resetBoard() {
    currentPlayer = playerOne;
    game.reset();
  }
  return {
    playRound,
    switchPlayer,
    getBoard: () => game.getBoard(),
    resetBoard,
    getCurrentPlayer,
  };
}
