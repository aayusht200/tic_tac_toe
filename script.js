function winCondition(board) {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== null)
    return board[0];
  else if (board[3] === board[4] && board[4] === board[5] && board[3] !== null)
    return board[3];
  else if (board[6] === board[7] && board[7] === board[8] && board[6] !== null)
    return board[6];
  else if (board[0] === board[3] && board[3] === board[6] && board[0] !== null)
    return board[0];
  else if (board[1] === board[4] && board[4] === board[7] && board[1] !== null)
    return board[1];
  else if (board[2] === board[5] && board[5] === board[8] && board[2] !== null)
    return board[2];
  else if (board[0] === board[4] && board[4] === board[8] && board[0] !== null)
    return board[0];
  else if (board[2] === board[4] && board[4] === board[6] && board[2] !== null)
    return board[2];
  return false;
}
let board = [null, null, null, null, null, null, null, null, null];
let temp = 0;

function game(id) {
  if (temp % 2 == 0) {
    if (board[id] == null) {
      board[id] = "X";
      temp++;
    }
  } else {
    if (board[id] == null) {
      board[id] = "O";
      temp++;
    }
  }
  if (temp > 4) {
    let check = winCondition(board);
    if (check == "X") {
      alert("X");
      board = [null, null, null, null, null, null, null, null, null];
      temp = 0;
    } else if (check == "O") {
      alert("O");
      board = [null, null, null, null, null, null, null, null, null];
      temp = 0;
    } else if (temp === 9 && winCondition(board) == false) {
      alert("Draw");
      board = [null, null, null, null, null, null, null, null, null];
      temp = 0;
    }
  }
  console.log(board);
}

const button_grid = document.getElementById("button_grid");

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    button.dataset.id = i;
    button_grid.appendChild(button);
    button.addEventListener("click", () => {
      game(button.dataset.id);
    });
  }
}
createBoard();
