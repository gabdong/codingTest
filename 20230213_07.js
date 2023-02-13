function solution(board, moves) {
    var answer = 0;
    const basket = [];

    for (let position of moves) {
        position = position - 1;

        for (const boardLine of board) {
            const item = boardLine[position];

            if (item === 0) continue;

            if (basket[basket.length - 1] === item) {
                basket.pop();
                answer = answer + 2;
            } else {
                basket.push(item);
            }
            boardLine[position] = 0;

            break;
        }
    }

    return answer;
}