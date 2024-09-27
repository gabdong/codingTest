// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];

  const stageMap = new Map();
  for (let stage = 1; stage <= N; stage++) {
    let totalCnt = 0;

    const failCnt = stages.filter((i) => {
      if (stage <= i) {
        totalCnt++;

        if (stage == i) return i;
      }
    }).length;

    const per = failCnt / totalCnt;

    stageMap.set(stage, per);

    if (stage <= N) answer.push(stage);
  }

  answer.sort((a, b) => {
    if (stageMap.get(a) > stageMap.get(b)) return -1;
  });

  return answer;
}

//* good solution
function good_solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
