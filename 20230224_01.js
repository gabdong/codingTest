// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
    var answer = [];

    const result = {};
    for (const cnt of course) {
        result[cnt] = [];

        let combinations = [];
        for (const menuOrder of orders) {
            combinations = combinations.concat(
                getCombinations(menuOrder.split(''), cnt).map((el) => { 
                    el = el.sort();

                    if(el.length > 0) return el.join('');
                })
            );
        }
        combinations = Array.from(new Set([...combinations])).map((el) => el.split(''));

        let max = 0;
        for (let combination of combinations) {
            let orderCnt = 0;

            for (let order of orders) {
                let include = true;

                for (const menu of combination) {
                    if (!order.includes(menu)) include = false;
                }

                if (include) orderCnt++;
            }
            
            if (orderCnt > 1) {
                if (orderCnt === max) {
                    result[cnt].push(combination.join('')); 
                } else if (orderCnt > max) {
                    result[cnt] = [combination.join('')];
                    max = orderCnt;
                }
            }
        }
    }

    Object.values(result).map((el) => {
        answer = answer.concat(el);
    });

    return answer.sort();
}

const getCombinations = (menus, num) => {
    const result = [];

    if (num === 1) return menus.map((val) => [...val]);

    menus.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]).sort();

        result.push(...attached);
    });

    return result;
}

//* good solution
function good_solution(orders, course) {
    const ordered = {};
    const candidates = {};
    const maxNum = Array(11).fill(0);

    const createSet = (arr, start, len, foods) => {
        if (len === 0) {
            ordered[foods] = (ordered[foods] || 0) + 1;
            if (ordered[foods] > 1) candidates[foods] = ordered[foods];
            maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);

            return;
        }

        for (let i = start; i < arr.length; i++) {
            createSet(arr, i + 1, len - 1, foods + arr[i]);
        }
    };

    orders.forEach((od) => {
        // arr.sort는 기본적으로 사전식 배열
        const sorted = od.split('').sort();

        console.log(sorted);
        // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
        // course에 있는 길이만 만들면 된다.
        course.forEach((len) => {
            createSet(sorted, 0, len, '');
        });
    });

    const launched = Object.keys(candidates).filter(
        (food) => maxNum[food.length] === candidates[food]
    );

    return launched.sort();
}