console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("settimeout 0");
}, 0);

for (let i = 0; i < 100; i++) {}

// console.log("code2");
// setImmediate(() => {
//   console.log("setImmediate");
// });

// console.log("code3");
// process.nextTick(() => {
//   console.log("process.nextTick");
// });

// 출력 순서
// code1
// code2
// code3
// process.nextTick
// settimeout 0
// setImmediate
