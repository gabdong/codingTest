// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  var answer = [];
  const alphabet = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    ["E", 5],
    ["F", 6],
    ["G", 7],
    ["H", 8],
    ["I", 9],
    ["J", 10],
    ["K", 11],
    ["L", 12],
    ["M", 13],
    ["N", 14],
    ["O", 15],
    ["P", 16],
    ["Q", 17],
    ["R", 18],
    ["S", 19],
    ["T", 20],
    ["U", 21],
    ["V", 22],
    ["W", 23],
    ["X", 24],
    ["Y", 25],
    ["Z", 26],
  ]);
  msg = msg.split("");

  let stack = [];
  const msgLn = msg.length;

  for (let i = 0; i < msgLn; i++) {
    const char = msg[i];
    stack.push(char);
    const newStr = stack.join("");
    if (i == msgLn - 1) {
      const lastIndex = alphabet.get(newStr);
      if (lastIndex) answer.push(lastIndex);
    }
    if (alphabet.get(newStr)) continue;

    stack.pop();
    const addStr = stack.join("");
    const addIndex = alphabet.get(addStr);
    const newIndex = alphabet.size + 1;

    alphabet.set(newStr, newIndex);
    answer.push(addIndex);

    stack = [];
    i--;
  }

  return answer;
}
