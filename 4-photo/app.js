const path = require("path");
const os = require("os");
const fs = require("fs");

// 계획
// 1. 사용자가 원한느 폴더의 이름을 받아온다
console.log(process.argv[2]);
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov,png/aae,IMG_1234
fs.promises
  .readdir(workingDir)
  .then((files) => processFiles(files))
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aee)$/gm;
  const match = file.match(regExp);
  return !!match;
}

// IMG_XXXX -> IMG_EXXX
function isDuplicatedFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`${file}을 ${targetDir}으로 옮김`);

  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises.rename(oldPath, newPath).catch(console.error);
}
