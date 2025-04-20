function hello() {
  console.log(this);
  console.log(this === global); // class외부, 함수안에서 this 호출하면 global임
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("------");
    console.log(this); // class 안에 있는 this는 class를 가르키고 있고
    console.log(this === global); // global이 아님
  }
}

const a = new A(1);
a.memberFunction();

console.log("------ global scope -------");
console.log(this);
console.log(this === module.exports);
// 브라우저에서 밖에서 쓰이는 this는 global
// Node.js에서 this는 module의 exports를 가르킴
// this는 어디에서 쓰이는지, 문맥에 따라 달라짐
