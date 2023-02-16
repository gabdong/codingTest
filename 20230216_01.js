// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  var answer = [];

  s = s.split('},{');
  s.sort((a, b) => a.split(',').length - b.split(',').length);

  for (let el of s) {
    el = el.replace(/{|}/g, '');
    el = el.split(',');
    
    el.filter((a) => {
      a = Number(a);
      if (!answer.includes(a)) answer.push(a);
    });
  }

  return answer;
}

//* good solution
function good_solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
  .sort((a, b) => a.length - b.length)
  .reduce((arr, v, n) => {
      if (n) {
          return arr.concat(v.filter(f => !arr.includes(f)));
      }
      return v;
  }, []);
}