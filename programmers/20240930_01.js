// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
	let answer = n + 1;

	const match = n.toString(2).match(/1/g).length;
	while (n < answer) {
		if (answer.toString(2).match(/1/g).length == match) break;
		answer++;
	}

	return answer;
}

function good_solution(n, a = n + 1) {
	return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
		? a
		: solution(n, a + 1);
}

solution(78); // 83
solution(15); // 23
