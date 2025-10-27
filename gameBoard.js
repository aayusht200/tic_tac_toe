export const gameBoard = () => {
  let board = [null, null, null, null, null, null, null, null, null];
  const getBoard = () => board;
  const setCell = (index, marker) => {
    if (board[index] == null) board[index] = marker;
  };
  const reset = () =>
    (board = [null, null, null, null, null, null, null, null, null]);
  return { getBoard, setCell, reset };
};
