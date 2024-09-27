// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  var answer = [];

  const left = [1, 4, 7];
  const right = [3, 6, 9];

  let leftLast = 10;
  let rightLast = 12;

  for (let number of numbers) {
    if (number === 0) number = 11;

    let leftDistance = 0;
    let rightDistance = 0;

    if (left.includes(number)) {
      answer.push("L");
      leftLast = number;
      continue;
    } else if (right.includes(number)) {
      answer.push("R");
      rightLast = number;
      continue;
    }

    leftDistance =
      Math.floor(Math.abs((leftLast - number) / 3)) +
      Math.abs((leftLast - number) % 3);
    rightDistance =
      Math.floor(Math.abs((rightLast - number) / 3)) +
      Math.abs((rightLast - number) % 3);

    if (leftDistance > rightDistance) {
      answer.push("R");
      rightLast = number;
    } else if (leftDistance < rightDistance) {
      answer.push("L");
      leftLast = number;
    } else if (leftDistance == rightDistance) {
      if (hand == "right") {
        answer.push("R");
        rightLast = number;
      } else {
        answer.push("L");
        leftLast = number;
      }
    }
  }

  return answer.join("");
}
