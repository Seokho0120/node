const fs = require("fs");

// const readStream = fs.createReadStream("./file.txt", {
//   // highWaterMark: 8, // 64 kbytes
//   // encoding: "utf-8",
// });

// const data = [];

// readStream.on("data", (chunk) => {
//   // console.log("chunk", chunk);
//   data.push(chunk);
//   console.count("data");
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });

// readStream.on("error", (error) => {
//   console.log("error", error);
// });

const data = [];
// caning 형태로 가능
fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 64 kbytes
  // encoding: "utf-8",
})
  // .once("data", (chunk) => { // once는 처음 하나만
  .onc("data", (chunk) => {
    // console.log("chunk", chunk);
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log("error", error);
  });
