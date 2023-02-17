// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, searchCnt, playerCnt, turn) {
    var answer = '';

    let currentNum = 0,
        currentTurn = 1;

    while (answer.length < searchCnt) {
        const changeNum = currentNum.toString(n);
        const changeNumLn = changeNum.length;

        if (changeNumLn === 1) {
            if (currentTurn === turn) {
                turn += playerCnt;
                answer += `${changeNum}`;
            }
            currentTurn++;
        } else {
            for (let j = 0; j < changeNumLn; j++) {
                if (currentTurn === turn ) {
                    turn += playerCnt;

                    if (answer.length < searchCnt) answer += changeNum[j];
                }
                currentTurn++;
            }
        }
        currentNum++;
    }
    return answer.toUpperCase();
}

//* good solution
function good_solution(n, searchCnt, playerCnt, turn) {
    var tubeT = new Array(searchCnt).map((a, i) => i * playerCnt + turn - 1);
    var line = '';
    var max = playerCnt * searchCnt + turn;

    for (var i = 0; line.length <= max; i++) {
        line += i.toString(n);
    }
    return tubeT.map(a => line[a]).join('').toUpperCase();
}