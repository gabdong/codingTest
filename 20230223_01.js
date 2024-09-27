// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
    return files.sort((a, b) => {
        const reg = /^[a-zA-Z\s.-]+|\d{1,5}/g
        const matchA = a.match(reg)
            , matchB = b.match(reg);
        const aString = matchA[0].toLowerCase()
            , bString = matchB[0].toLowerCase();

        if (aString === bString) {
            return matchA[1] - matchB[1];
        } else if (aString > bString) {
            return 1;
        } else {
            return -1;
        }
    });
}