const fs = require("fs");

const beforeMem = process.memoryUsage().rss;

fs.readFile("./file.txt", (_, data) => {
  // data를 다 받아오고 콜백함수에서 알 수 있음
  fs.writeFile("./file2.txt", data, () => {});

  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;

  console.log("diff", diff);
  console.log("consumed", `${consumed} MB`);
});
