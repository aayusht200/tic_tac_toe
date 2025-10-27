// winCondition.js
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
];

export function winCondition(arr) {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
  }
  return false;
}
