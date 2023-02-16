// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
    const num = n.toString(k);

    const arr = num.split(0);

    function isPrime(x) {
        if (x == 1 || !x) return false;
        if (x == 2) return true;

        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }

        return true;
    }

    var answer = 0;
    for (const x of arr) {
        if (isPrime(x)) answer++;
    }

    return answer;
}