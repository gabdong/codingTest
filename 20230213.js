// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
  var answer = [];

  const typeOrder = ["R", "T", "C", "F", "J", "M", "A", "N"];
  const typeArr = ["RT", "CF", "JM", "AN"];
  const typePoint = new Map();

  let i = 0;
  for (const type of survey) {
    const firstType = type[0];
    const secondType = type[1];
    const choice = choices[i];

    if (choice === 4) {
      i++;
      continue;
    }

    let point;
    if (choice > 4) point = choice - 4;
    if (choice === 1) point = 3;
    if (choice === 2) point = 2;
    if (choice === 3) point = 1;

    if (choice > 4) {
      typePoint.get(secondType)
        ? typePoint.set(secondType, typePoint.get(secondType) + point)
        : typePoint.set(secondType, point);
    } else {
      typePoint.get(firstType)
        ? typePoint.set(firstType, typePoint.get(firstType) + point)
        : typePoint.set(firstType, point);
    }

    i++;
  }

  for (const type of typeArr) {
    const firstType = type[0];
    const secondType = type[1];

    const firstPoint = typePoint.get(firstType) || 0;
    const secondPoint = typePoint.get(secondType) || 0;

    if (firstPoint > secondPoint) {
      answer.push(firstType);
    } else if (firstPoint < secondPoint) {
      answer.push(secondType);
    } else if (firstPoint == secondPoint) {
      const firstOrder = typeOrder.indexOf(firstType);
      const secondOrder = typeOrder.indexOf(secondType);

      if (firstOrder > secondOrder) {
        answer.push(secondType);
      } else {
        answer.push(firstType);
      }
    }
  }

  return answer.join("");
}
