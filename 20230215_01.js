// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {
        const a = arr1[i];
        const b = arr2[i];

        let binaryA = a.toString(2);
        let binaryB = b.toString(2);

        if (binaryA.length < n) binaryA = binaryA.padStart(n, 0);
        if (binaryB.length < n) binaryB = binaryB.padStart(n, 0);

        const binaryAarr = binaryA.split('');
        const binaryBarr = binaryB.split('');

        let mapString = '';
        for (let j = 0; j < n; j++) {
            if (binaryAarr[j] === '1' || binaryBarr[j] === '1') {
                mapString += '#';
            } else {
                mapString += ' ';
            }
        }
        answer.push(mapString);
    }

    return answer;
}

//* good solution
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))