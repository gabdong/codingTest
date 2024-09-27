// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let matchingCnt = 0;
  let zeroCnt = 0;

  for (let i = 0; i < 6; i++) {
    const lotto = lottos[i];

    if (lotto === 0) {
      zeroCnt++;
    } else if (win_nums.includes(lotto)) {
      matchingCnt++;
    }
  }

  const highestMatching = matchingCnt + zeroCnt;
  const lowestMatching = matchingCnt;

  var answer = [
    7 - highestMatching > 6 ? 6 : 7 - highestMatching,
    7 - lowestMatching > 6 ? 6 : 7 - lowestMatching,
  ];

  return answer;
}

//* good solution
function good_solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
