// https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

function solution(s) {
  let min = null,
    max = null;

  const arr = s.split(" ").map((num) => {
    const number = Number(num);

    if (min === null) min = number;
    if (max === null) max = number;

    if (number >= max) {
      max = num;
    } else if (number <= min) {
      min = num;
    }
  });

  return `${min} ${max}`;
}

solution("1 2 3 4");

function good_solution() {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
