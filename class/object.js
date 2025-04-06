// Object
// obj = { key: value }

// 1. Literals and properties
// 객체를 만드는 방법은 2가지임
const obj1 = {};
// object literal 문법
const obj2 = new Object();
// object constructor 문법, Object에서 정의된 constructor가 호출됨

function print(person) {
  console.log("name", person.name);
  console.log("age", person.age);
}

const seokho = { name: "seokho", age: 4 };
print(seokho);

seokho.hasJob = true; // 미친짓임, 가능한 이유는 JS는 유연한 언어이기 때문이여~
console.log(seokho.hasJob);

// 2. 계산된 속성들(Computed properties)
console.log("seokho.name >>", seokho.name);
// .을 이용해서 접근 가능
console.log('seokho["name"] >>', seokho["name"]);
// []을 이용해서 접근 가능, string 타입으로 지정해서 받아와야함
// runtime 에서 확인하는 경우가 많음

function printValue(obj, key) {
  // undefined 나옴, obj에 key라는게 들어있니? 라는 의미임
  console.log("??", obj.key);

  // 정상 출력됨
  console.log("!!", obj[key]);
}
printValue(seokho, "name");
printValue(seokho, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 4 };
const person3 = { name: "dave", age: 30 };
const person4 = makePerson("elile", 22);
console.log("person4?", person4);
// JS에 class가 없을때는 이런식으로 만들었음
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor 함수
// 다른 계산안하고 순수하게 객체를 생성하는 함수는 아래왜 같이 만듦
const person5 = new Person("elile", 22);
function Person(name, age) {
  // this = {} 생략됨
  this.name = name;
  this.age = age;
  // return this 생략됨
}

// 5. in 속성: 객체안에 key가 있는지 체크하는거임
console.log("name" in seokho);
console.log("age" in seokho);
console.log("age12" in seokho);
console.log(seokho.random);

// 6. for..in / for..of
// for(key in obj)
console.clear();
for (key in seokho) {
  console.log("key ->", key);
}

// for(value of iterable)
const arr = [1, 2, 3, 4, 5];
// 번거롭고 쓰기 귀찮음
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
for (value of arr) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1,obj2,obj3...])
const user = { name: "bob", age: "20" };
const user2 = user;
// user2.name = "coder";
console.log(user);

// 예전
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// 최신
const user4 = {};
Object.assign(user4, user); // user4에 user복사
console.log("user4", user4);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 적을수록 덮어 씌워줌, fruit2가 맨 뒤에있기 때문에 fruit2 값으로 출력
console.log(mixed.color);
console.log(mixed.size);
