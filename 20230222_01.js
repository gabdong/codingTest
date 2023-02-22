// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  board = [...board.map((el) => [...el])].concat();
  let newBoard = [...board.map((el) => [...el])].concat();

  while (true) {
    let deleteCnt = 0;

    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        if (board[y][x] === "") continue;

        if (
          board[y][x] === board[y][x + 1] &&
          board[y][x] === board[y + 1][x] &&
          board[y][x] === board[y + 1][x + 1]
        ) {
          newBoard[y][x] = "";
          newBoard[y][x + 1] = "";
          newBoard[y + 1][x] = "";
          newBoard[y + 1][x + 1] = "";

          deleteCnt++;
        }
      }
    }

    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x <= n - 1; x++) {
        if (newBoard[y + 1][x] === "") {
          for (let i = y; i >= 0; i--) {
            newBoard[i + 1][x] = newBoard[i][x];
            newBoard[i][x] = "";
          }
        }
      }
    }

    board = [...newBoard.map((el) => [...el])].concat();
    if (deleteCnt === 0) break;
  }

  const result = board.reduce((acc, cur) => acc.concat(cur), []);

  return result.filter((el) => el === "").length;
}
