// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// stack 활용할 수 있는 경우에 대한 생각 잘 하기
function solution(s) {
	const arr = [];

	const len = s.length;
	for (let i = 0; i < len; i++) {
		if (arr.length === 0 || arr[arr.length - 1] !== s[i]) {
			arr.push(s[i]);
		} else if (arr[arr.length - 1] === s[i]) {
			arr.pop();
		}
	}

	return arr.length == 0 ? 1 : 0;
}

solution("aabb");
solution("abab");
