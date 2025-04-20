const fs = require("fs");

// api는 3가지 형태로 제공됨
// rename(..., callback(error, data))
// try {renameSync(...)} catch(e){} --> 사용안하는게 좋음
// promise.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt"); // 동기적으로 동작함
} catch (error) {
  console.error(error);
}

fs.rename("./text-new.txt", "./text.txt", (err) => {
  // 비동기적으로 동작함
  console.log(err);
});

console.log("hi");

fs.promises
  .rename("./text.txt", "./text-new.txt")
  .then(() => console.log("done!"))
  .catch(console.log);
