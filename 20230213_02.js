// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    var answer = [];
    const reportCnt = {};
    const reportId = {};

    for (const reportData of report) {
        const reportDataSplit = reportData.split(' ');
        const victim = reportDataSplit[0];
        const perpetrator = reportDataSplit[1];

        if (reportId[victim]) {
            if (!reportId[victim].includes(perpetrator)) {
                reportId[victim].push(perpetrator);

                reportCnt[perpetrator] ? reportCnt[perpetrator] = reportCnt[perpetrator] + 1 : reportCnt[perpetrator] = 1;
            }
        } else if (!reportId[victim]) {
            reportId[victim] = [perpetrator];

            reportCnt[perpetrator] ? reportCnt[perpetrator] = reportCnt[perpetrator] + 1 : reportCnt[perpetrator] = 1;
        }
    }

    for (const id of id_list) {
        const reportList = reportId[id];

        if (!reportList) {
            answer.push(0);
            continue;
        }

        let mailCnt = 0;
        for (const perpetrator of reportList) {
            const cnt = reportCnt[perpetrator];

            if (cnt >= k) mailCnt++;
        }

        answer.push(mailCnt);
    }

    return answer;
}

//* good solution
function good_solution (id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}