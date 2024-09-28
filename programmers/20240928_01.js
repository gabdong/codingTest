// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
	var answer = [];

	let cnt = 0,
		deleteCnt = 0;

	while (s !== "1") {
		cnt++;

		let zeroCnt = s.match(/0/g)?.length || 0;
		s = s.replaceAll("0", "").length.toString(2).toString();

		deleteCnt += zeroCnt;
	}

	answer = [cnt, deleteCnt];
	return answer;
}

function good_solution(s) {
	var answer = [0, 0];
	while (s.length > 1) {
		answer[0]++;
		answer[1] += (s.match(/0/g) || []).length;
		s = s.replace(/0/g, "").length.toString(2);
	}
	return answer;
}

// solution("110010101001");
// solution("01110");
solution("1111111");
