// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];

  const nameData = {};
  for (const log of record) {
    const [mode, uid, name] = log.split(" ");

    const modeText = mode === "Enter" ? "들어왔습니다." : "나갔습니다.";

    if (mode != "Leave") nameData[uid] = name;
    if (mode != "Change") answer.push(`${uid},님이 ${modeText}`);
  }

  return (answer = answer.map((el) => {
    const [uid, text] = el.split(",");
    const name = nameData[uid];

    return `${name}${text}`;
  }));
}
