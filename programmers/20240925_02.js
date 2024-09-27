// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
	// const length = s.length;

	// if (s[0] == ")" || s[length - 1] == "(") return false;

	// for (let i = 0; i < length; i++) {
	// 	if (s[i] == "(" && s[i + 1] == ")") {
	// 		// 한쌍이 맞을경우
	// 		i++;
	// 		continue;
	// 	} else if (s[i] == "(" && s[i + 1] == "(") {
	// 		// 좌측이 이어질경우
	// 		let left_cnt = 1;

	// 		for (let j = i + 1; j < length; j++) {
	// 			if (s[j] == "(") {
	// 				left_cnt++;
	// 			} else {
	// 				break;
	// 			}
	// 		}
	// 		for (let k = i + left_cnt; k < i + left_cnt * 2; k++) {
	// 			if (s[k] == "(") return false;
	// 		}
	// 	}

	// 	i++;
	// }

	// return true;

	//! ------------------------------------
	// function _solution(string) {
	// 	const length = string.length;

	// 	if (string[0] == ")" || string[length - 1] == "(") return false;

	// 	for (let i = 0; i < length; i++) {
	// 		const now = string[i];
	// 		const next = string[i + 1];

	// 		if (length == 2) {
	// 			if (string[0] == "(" && string[1] == ")") {
	// 				return true;
	// 			} else {
	// 				return false;
	// 			}
	// 		} else {
	// 			if (now == "(" && next == ")") {
	// 				const new_string = string.slice(i + 2, length - 1);

	// 				_solution(new_string);
	// 			}
	// 		}
	// 	}

	// 	return true;
	// }

	// return _solution(s);

	//! ------------------------------------
	const length = s.length;
	if (s[0] == ")" || s[length - 1] == "(") return false;

	let stack = 0;
	for (let i = 0; i < length; i++) {
		let current = s[i];
		if (current === "(") {
			stack++;
		} else if (current === ")") {
			stack--;
		}

		if (stack < 0) return false;
	}
	return stack === 0;
}

function good_solution(s) {
	let cum = 0;
	for (let paren of s) {
		cum += paren === "(" ? 1 : -1;
		if (cum < 0) return false; // 시작이 ) 일경우 걸러짐, 짝이 맞다가 )이 나오면 -가 되기때문에 걸러짐
	}
	return cum === 0 ? true : false; // +가 나올경우 ( 갯수가 더 많기때문에 false
}

// console.log(solution("()()")); // true
// console.log(solution("(())()")); // true
// console.log(solution(")()(")); // false
// console.log(solution("(()(")); // false
// console.log(solution("(()())")); // true
// console.log(solution("())((()))(()")); // false
console.log(good_solution("())(")); // false
