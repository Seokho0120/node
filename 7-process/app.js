// node가 동작하고 있는 process 정보를 얻어오는 방법

const process = require("process");

console.log("process.execPath", process.execPath);
console.log("process.version", process.version);
console.log("process.pid", process.pid);
console.log("process.ppid", process.ppid);
console.log("process.platform", process.platform);
console.log("process.env", process.env);
console.log("process.uptime()", process.uptime());
console.log("process.cwd()", process.cwd());
console.log("process.cpuUsage()", process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
});

// nextTick은 테스크큐에 이미 다른 콜백함수가 들어있어도, 순서를 무시하고 등록한 함수를 우선순위를 높여서 태스크큐 가장 앞부분에 배치하여 가장 첫번째에 실행되도록함
process.nextTick(() => {
  console.log("nextThick");
});

// for loop가 전부 실행된 후에 콜스택이 비어있을때 위의 함수들이 실행됨
for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
