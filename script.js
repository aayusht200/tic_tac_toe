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
let score = { playerOne: 0, playerTwo: 0 };

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
      score.playerOne++;
      playerOne_score.textContent = score.playerOne;
      board = [null, null, null, null, null, null, null, null, null];
      temp = 0;
    } else if (check == "O") {
      score.playerTwo++;
      playerTwo_score.textContent = score.playerTwo;
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

const control_area = document.getElementById("control_area");
console.log(score);

const new_game = document.createElement("button");
const reset_score = document.createElement("button");
const score_area = document.createElement("div");
const playerOne_tag = document.createElement("p");
const playerTwo_tag = document.createElement("p");
const playerOne_score = document.createElement("p");
const playerTwo_score = document.createElement("p");

new_game.classList.add("button");
reset_score.classList.add("button");

new_game.textContent = "New Game";
reset_score.textContent = "Reset Score";
score_area.classList.add("score_area");
playerOne_tag.textContent = "Player One";
playerTwo_tag.textContent = "Player Two";
playerOne_score.textContent = 0;
playerTwo_score.textContent = 0;
score_area.append(
  playerOne_tag,
  playerTwo_tag,
  playerOne_score,
  playerTwo_score
);

control_area.append(new_game, reset_score, score_area);
