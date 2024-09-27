// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  var answer = 0;
  const pointArr = [];

  let i = 0;
  let point = "";

  for (const char of dartResult) {
    const number = new RegExp(/[0-9]/);
    const square = new RegExp(/[S|D|T]/);
    const prize = new RegExp(/[\*|\#]/);

    if (number.test(char)) point += char;

    if (square.test(char)) {
      if (char === "S") point = Number(point);
      if (char === "D") point = Number(point) ** 2;
      if (char === "T") point = Number(point) ** 3;

      pointArr[i] = point;
      point = "";
      i++;
    }

    if (prize.test(char)) {
      if (char === "*") {
        if (pointArr[i - 1]) pointArr[i - 1] = pointArr[i - 1] * 2;
        pointArr[i - 2] = pointArr[i - 2] * 2;
      } else {
        pointArr[i - 1] = -pointArr[i - 1];
      }
    }
  }

  for (const resultPoint of pointArr) {
    answer += resultPoint;
  }

  return answer;
}
