export function gameController() {
  const game = gameBoard();
  let playerOne = players("playerOne", "X");
  let playerTwo = players("playerTwo", "O");
  let currentPlayer = playerOne;
  function playRound() {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
}