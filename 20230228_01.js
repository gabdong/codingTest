// https://school.programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
    let answer = '';
    let lastLn = 0;
    const tone = ['C#', 'D#', 'F#', 'G#', 'A#'];

    m = m.split('').reduce((acc, cur, i) => {
        if (cur === '#') return acc;
        if (m[i + 1] === '#') cur += '#';

        const a = tone.indexOf(cur);
        if (a === -1) return acc.concat(cur);
        return acc.concat(a);
    }, []).join('');

    for (const info of musicinfos) {
        let [start, end, title, music] = info.split(',');
        let [startH, startM] = start.split(':').map(el => parseInt(el));
        let [endH, endM] = end.split(':').map(el => parseInt(el))
        
        const time = (endH * 60 + endM) - (startH * 60 + startM);
        music =  music.split('').reduce((acc, cur, i) => {
            if (cur === '#') return acc;
            if (music[i + 1] === '#') cur += '#';

            const a = tone.indexOf(cur);
            if (a === -1) return acc.concat(cur);
            return acc.concat(a);
        }, []);
        const musicLn = music.length;

        let radio = [];
        if (time !== musicLn) {
            if (time > musicLn) {
                const value = parseInt(time / musicLn);

                for (let i = 0; i < value; i++) {
                    radio = radio.concat(music);
                }
            }
            const remainder = time % musicLn;
            radio = radio.concat(music.slice(0, remainder));
        } else  {
            radio = music;
        }
        radio = radio.join('');
        
        if (radio.includes(m) && lastLn < time) {
            answer = title;
            lastLn = time;
        }
    }

    if (!answer) answer = '(None)';
    
    return answer;
}

//* good solution

function solution(m, musicInfos) {
    let answer = '';

    musicInfos = musicInfos.map(e => {
        let eArr = e.split(',');
        let timeDiff = (new Date(`1970-01-01 ${eArr[1]}:00`) - new Date(`1970-01-01 ${eArr[0]}:00`)) / 60000;
        let melody = eArr[3].replace(/[A-Z]#/g, m => m[0].toLowerCase());
        melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
        return `${timeDiff},${eArr[2]},${melody}`;
    });

    musicInfos.sort((a,b) => b.split(',')[0] - a.split(',')[0]);

    answer = musicInfos.filter(e => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g,m => m[0].toLowerCase())) != -1);

    return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
}