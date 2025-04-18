const path = require("path");
const os = require("os");
const fs = require("fs");

// 계획
// 1. 사용자가 원한느 폴더의 이름을 받아온다
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov,png/aae,IMG_1234

console.log(process.argv[2]);
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);
console.log("workingDir", workingDir);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}

console.log("workingDir", workingDir);
