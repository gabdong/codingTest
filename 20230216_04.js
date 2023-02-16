function solution(msg) {
    var answer = [];
    const alphabet = new Map([["A", 1], ["B", 2], ["C", 3], ["D", 4], ["E", 5], ["F", 6], ["G", 7], ["H", 8], ["I", 9], ["J", 10], ["K", 11], ["L", 12], ["M", 13], ["N", 14], ["O", 15], ["P", 16], ["Q", 17], ["R", 18], ["S", 19], ["T", 20], ["U", 21], ["V", 22], ["W", 23], ["X", 24], ["Y", 25], ["Z", 26]]);
    msg = msg.split('');

    const msgLn = msg.length;

    for (let i = 0; i < msgLn; i++) {        
        let next = i + 1;
        let currentStr = msg.slice(i, next)[0];

        while (alphabet.get(currentStr)) {

            const newStr = msg.slice(i, next + 1).join('');

            if (!alphabet.get(`${newStr}`)) {
                answer.push(alphabet.get(currentStr));
                alphabet.set(newStr, alphabet.size + 1);

                break;
            } else if (currentStr == newStr) {
                answer.push(alphabet.get(currentStr));
                break;
            } else {
                currentStr = newStr;
            }
            next++;
        }
    }

    console.log(answer);
    return answer;
}

solution('KAKAO');