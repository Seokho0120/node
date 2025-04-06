const fs = require("fs").promises; // fs은 fileSystem module, fs의 promises들을 가르킴

// file 읽기
fs.readFile("./text2.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// file 쓰기(추가, 덮어쓰기)
fs.writeFile("./file.txt", "hello~~~~~~").catch(console.error);
fs.appendFile("./file.txt", "seokho hello~~~~~~22")
  // file 복사하기
  .then(fs.copyFile("./file.txt", "./file2.txt").catch(console.error))
  .catch(console.error);

// file 복사하기
fs.copyFile("./file.txt", "./file2.txt").catch(console.error);

// folder
fs.mkdir("sub-folder").catch(console.error);

// 모든 파일 읽기
fs.readdir("./").then(console.log).catch(console.error);
