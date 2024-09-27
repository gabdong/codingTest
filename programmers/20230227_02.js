// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
    let sum1 = queue1.reduce((pre, cur) => pre += cur, 0);
    let sum2 = queue2.reduce((pre, cur) => pre += cur, 0);
    const average = (sum1 + sum2) / 2
    const fullCnt = queue1.length * 3;

    let queue1Index = 0, queue2Index = 0;

    let cnt = 0;
    while (sum1 !== average && sum2 !== average && cnt <= fullCnt) {
        if (sum1 > sum2) {
            const pop = queue1[queue1Index];
            sum1 -= pop;
            sum2 += pop;

            queue2.push(pop);
            queue1Index++;
        } else if (sum1 < sum2) {
            const pop = queue2[queue2Index];
            sum2 -= pop;
            sum1 += pop;

            queue1.push(pop);
            queue2Index++;
        }

        cnt++;
    }

    return sum1 === sum2 ? cnt : -1;
}