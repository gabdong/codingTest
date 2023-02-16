// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const strArr1 = str1.split('');
    const strArr2 = str2.split('');
    const arr1 = [];
    const arr2 = [];

    strArr1.filter((char, index) => {
        if (/[a-z]/.test(char) && /[a-z]/.test(strArr1[index + 1]) && strArr1[index + 1]) {
            arr1.push(`${char}${strArr1[index + 1]}`);
        }
    });

    strArr2.filter((char, index) => {
        if (/[a-z]/.test(char) && /[a-z]/.test(strArr2[index + 1]) && strArr2[index + 1]) {
            arr2.push(`${char}${strArr2[index + 1]}`);
        }
    });

    let union = arr1.concat(arr2);

    const intersection = arr1.filter((x) => {
        if (arr2.indexOf(x) !== -1) {
            arr2.splice(arr2.indexOf(x), 1);
            return x;
        }
    });
    const intersectionCnt = intersection.length;

    let i = 0;
    for (const x of union) {
        if (intersection.indexOf(x) !== -1) {
            union.splice(i, 1);
            intersection.splice(intersection.indexOf(x), 1);
        }

        i++;
    }

    const unionCnt = union.length;
    const answer = unionCnt === 0 && intersectionCnt === 0 ? 65536 : Math.floor((intersectionCnt / unionCnt) * 65536);

    return answer;
}

//* good solution
function good_solution (str1, str2) {
    function explode(text) {
        const result = [];
        const textln = text.length;
        for (let i = 0; i < textln - 1; i++) {
            const node = text.substr(i, 2);
            if (node.match(/[A-Za-z]{2}/)) result.push(node.toLowerCase());
        }
        return result;
    }

    const arr1 = explode(str1);
    const arr2 = explode(str2);
    const set = new Set([...arr1, ...arr2]);
    let union = 0;
    let intersection = 0;

    set.forEach(item => {
        const has1 = arr1.filter(x => x === item).length;
        const has2 = arr2.filter(x => x === item).length;

        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}