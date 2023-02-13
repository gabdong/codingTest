function solution(new_id) {
    var answer = new_id
        .toLowerCase()
        .replace(/[^a-z|\-|_|\.|0-9]/g, '')
        .replace(/[.]+/g, '.')
        .replace(/^[.]|[.]$/g, '');

    if (answer === '') answer = 'a';

    const ln = answer.length;

    if (ln > 15) {
        answer = answer.substring(0, 15);
        answer = answer.replace(/[.]$/, '');
    } else if (ln < 3) {
        const sum = 3 - ln;
        const lastChar = answer[ln - 1];

        for (let i = 0; i < sum; i++) {
            answer = answer + lastChar;
        }
    }

    return answer;
}

//* good solution
function good_solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

function good_solution2(new_id) {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}