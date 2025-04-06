console.log("logging");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, "not same"); // true가 아닌 경우에만 출력
console.assert(2 === 2, "same");

// print object
const student = { name: "seokho", age: 20, company: { name: "NX" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 }); // depth에 따라 어느정도까지 보여줄지 설정

// measuring time
console.time("for loop"); // 성능 체크 시 확인하면 유용함
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function"); // 몇번 호출됫는지 확인
}
a();
console.countReset("a function"); // 호출 횟수 리셋 시킴
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace(); // 디버깅할때 유용함, 이 함수를 어디서 호출했는지 확인하는 용도
}
f1();
