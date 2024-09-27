// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => a - b);
	const length = A.length;

	let answer = 0;

	for (let i = 0; i < length; i++) {
		const aVal = A[i];
		const bVal = B[length - 1 - i];

		answer += aVal * bVal;
	}

	return answer;
}

function good_solution() {
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

solution([1, 4, 2], [5, 4, 4]);
solution([1, 2], [3, 4]);
