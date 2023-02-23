// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
    var answer = [];

    const head = [];
    const number = [];
    const tail = [];

    for (const file of files) {
        const fileString = file.split(/[0-9]/g).filter((el) => el);
        const fileNumber = file.split(/[^0-9]/g).filter((el) => el);

        if (fileString.length > 0) tail.push(fileString[fileString.length - 1]);
        head.push(fileString[0]);
        number.push(Number(fileNumber[0]));
    }

    console.log(head);
    console.log(number);
    console.log(tail);
    return answer;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]);