// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    var answer = [];

    const number = new Map([
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9]
    ]);

    let changeStr = [];
    for (const char of s) {
        if (isNaN(char)) {
            changeStr.push(char);

            if (
                number.get(changeStr.join('')) 
                || number.get(changeStr.join('')) === 0
            ) {
                answer.push(number.get(changeStr.join('')));
                changeStr = [];
            }
        } else {
            if (changeStr.length > 0) {
                answer.push(number.get(changeStr.join('')));
                changeStr = [];
            }
            answer.push(char);
        }
    }

    return Number(answer.join(''));
}

//* good solution
function good_solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

function good_solution2(s) {
    const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine']

    return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}