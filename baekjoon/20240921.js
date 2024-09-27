const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input/20240921.txt"
  )
  .toString()
  .split(" ")
  .map(Number);

console.log(input);
