function solution(n) {
	var answer = 0;

	let a = 0,
		b = 1;
	for (let i = 2; i <= n; i++) {
		answer = (a + b) % 1234567; // answer에 a + b를 대입 후 1234567로 나눠줄 경우 자료형 크기를 넘어서기때문에 나눠서 대입

		a = b;
		b = answer;
	}

	return answer;
}

solution(3); // 2
solution(5); // 5
solution(10); // 55
