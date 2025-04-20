const fs = require("fs");

console.log(global); // 브라우저에서는 window

global.hello = () => {
  global.console.log("hello");
  console.log("hello");
};

global.hello();
hello(); // global 생략가능
