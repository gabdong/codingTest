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

  const msgLn = msg.length;

  for (let i = 0; i < msgLn; i++) {
    let next = i + 1;
    let currentStr = msg[i];
    // let currentStr = msg.slice(i, next)[0];

    let j = 1;
    while (alphabet.get(currentStr) && j < 50) {
      if (!msg[next + j]) {
        answer.push(alphabet.get(currentStr));
        break;
      }

      const addStr = msg.slice(i, next + j).join("");

      if (alphabet.get(addStr)) {
        currentStr = addStr;
        j++;
      } else if (!alphabet.get(addStr)) {
        alphabet.set(addStr, alphabet.size + 1);
        console.log("current: " + currentStr);
        console.log("currentIndex: " + alphabet.get(currentStr));
        console.log("add: " + addStr);
        console.log("addIndex: " + alphabet.get(addStr));
        console.log("i: " + i);
        console.log("------------------------");
        answer.push(alphabet.get(currentStr));
        break;
      }
    }
  }

  console.log(answer);
  return answer;
}

// solution("KAKAO");
solution("ABABABABABABABAB");
