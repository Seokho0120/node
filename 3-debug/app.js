function sayHello() {
  console.log("hi");
  console.log("seokho");
  console.log("seokho2");
}

function calculate(x, y) {
  console.log("계산중");
  const result = x + y;
  console.log("result", result);
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;
console.log("loading...");
for (let i = 0; i < 10; i++) {
  console.log("count", 1);
  if (i === stop) break;
}

// test
