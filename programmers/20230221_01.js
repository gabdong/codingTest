// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const baseTime = Number(fees[0]);
  const basePrice = Number(fees[1]);
  const unitTime = Number(fees[2]);
  const unitPrice = Number(fees[3]);

  records.sort((a, b) => {
    a = a.split(" ");
    b = b.split(" ");

    return a[1] - b[1];
  });

  const map = new Map();

  let i = 0;
  for (const record of records) {
    //* current
    const recordSplit = record.split(" ");
    const [time, number, mode] = recordSplit;
    const timeSplit = time.split(":");

    //* next
    const nextRecord = records[i + 1];
    const nextRecordSplit = nextRecord ? nextRecord.split(" ") : [];
    const nextNumber = nextRecordSplit[1];

    if (
      mode == "OUT" ||
      (!nextRecord && mode == "IN") ||
      (mode == "IN" && nextNumber != number)
    ) {
      //* prev
      const prevData = records[i - 1];
      const prevSplit = prevData ? prevData.split(" ") : [];
      const prevTime = prevSplit[0];
      const prevTimeSplit = prevTime ? prevTime.split(":") : [];

      if (mode == "OUT") {
        const outTime = Number(timeSplit[0]) * 60 + Number(timeSplit[1]);
        const inTime = Number(prevTimeSplit[0]) * 60 + Number(prevTimeSplit[1]);

        parkingTime = outTime - inTime;
      } else if (
        (!nextRecord && mode == "IN") ||
        (mode == "IN" && nextNumber != number)
      ) {
        parkingTime = 1439 - (Number(timeSplit[0]) * 60 + Number(timeSplit[1]));
      }

      if (map.get(number)) {
        map.set(number, map.get(number) + parkingTime);
      } else {
        map.set(number, parkingTime);
      }
    }

    i++;
  }

  var answer = [];
  for (const data of map) {
    const totalTime = data[1];

    if (totalTime <= baseTime) {
      answer.push(basePrice);
    } else {
      answer.push(
        basePrice + Math.ceil((totalTime - baseTime) / unitTime) * unitPrice
      );
    }
  }

  return answer;
}

//* good solution
function good_solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
