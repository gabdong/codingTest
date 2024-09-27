// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
	let isSpace = false;
	return Array.from(s)
		.map((w, i) => {
			if (w === " ") {
				isSpace = true;
				return w;
			} else {
				if (isNaN(w)) {
					if (isSpace == true || i === 0) {
						isSpace = false;
						return w.toUpperCase();
					} else {
						return w.toLowerCase();
					}
				} else {
					isSpace = false;
					return w;
				}
			}
		})
		.join("");
}

function good_solution() {
	return s
		.split(" ")
		.map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
		.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
