// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
    var answer = 0;
    const cacheMap = new Map();

    for (let city of cities) {
        city = city.toLowerCase();

        if (cacheMap.get(city) && cacheMap.size <= cacheSize) {
            answer += 1;

            cacheMap.delete(city);
            cacheMap.set(city, true);
        } else {
            cacheMap.set(city, true);

            if (cacheMap.size > cacheSize) {
                const keys = Array.from(cacheMap.keys())[0];
                cacheMap.delete(keys);
            }

            answer += 5;
        }
    }

    return answer;
}