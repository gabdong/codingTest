// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
    if (p === '') return '';

    let leftCnt = 0, rightCnt = 0;

    let i = 0;
    for (const char of p) {
        if (char === '(') leftCnt++;
        if (char === ')') rightCnt++;

        if (leftCnt === rightCnt) {
            split = i;
            break;
        }

        i++;
    }

    let u = p.slice(0, i + 1);
    let v = p.slice(i + 1);

    if (check(u)) {
        return u + solution(v);
    } else {
        let str = '(';
        str += solution(v);
        str += ')';

        u = u.slice(1, u.length - 1).split('');
        const uCnt = u.length;
        for (let i = 0; i < uCnt; i++) {
            const a = u[i];

            if (a === '(') u[i] = ')';
            if (a === ')') u[i] = '(';
        }
        u = u.join('');

        str += u;

        return str;
    }
}

function check(u) {
    if (u === '') return true;

    let stack = [];

    const uCnt = u.length;
    for (let i = 0; i < uCnt; i++) {
        if (u[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length == 0 ? true : false;
}

//* good solution
function good_solution(p) {
    if (p.length < 1) return "";

    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

    const u = p.slice(0, pivot);
    const v = solution(p.slice(pivot, p.length));

    if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
    else return "(" + v + ")" + reverse(u);
}

function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}