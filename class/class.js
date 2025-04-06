// https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6
// 영상을 참고해 class 내용 정리함

// 1. 선언
class Person {
  // constructor 생성자를 이용해서 객체를 만들때 필요한 data를 전달함
  constructor(name, age) {
    // fields 전달받은 data를 class에 존재하는 name과 age에 바로 할당할 수 있음
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    // this는 생성된 object의 .임, seokho의 name값
    console.log(`${this.name}: hello!`);
  }
}

// 새로운 객체를 만들때는 new 키워드를 씀
const seokho = new Person("seokho", 20);
console.log(seokho.name);
console.log(seokho.age);
seokho.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }

    this._age = value < 0 ? 0 : value;
  }
}

const river = new User("river", "lee", -1);
console.log("river", river.age);

// 3. Fields(public, private) > 나온지 별로 안되서 쓰기 애매함
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log("experiment publicField", experiment.publicField);
console.log("experiment privateField", experiment.privateField);

// 4. Static Properties and methods
class Article {
  // static으로 설정된건 객체가 아니라 class에 직접 붙어있는거임. 그래서 호출할때 Article.publisher 이렇게 확인 가능
  static publisher = "Seokho";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(">>", Article.publisher);
Article.printPublisher();

// ⭐️ 5. 상속과 다양성, class의 가장 중요한 부분임 ⭐️
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!!`);
  }

  getArea() {
    return this.width * this.height;
  }
}
// extends는 확장, 연장함의 개념이며, Rectangle는 Shape의 내용을 포함
// 이와같이 상속을 이용하게 되면 공통되어지는 부분은 extends을 이용해 재사용할 수 있음 ex. draw함수 하나만 수정하면 끝남
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 만약 부모에 설정된 함수도 호출하고 싶다면 super 사용하면됨
    console.log("🔺");
  }
  // 필요한 함수만 재정의도 가능하기 때문에 다양성이 확보됨
  // 삼각형 너비는 (너비*높이)/2 이기 떄문에 getArea을 재정의해서 사용
  // 이러한것을 overriding 이라고 함
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return "Triangle: color~";
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log("rectangle area", rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log("triangle area", triangle.getArea());

// 6. instance of:
// 이 오브젝트는 class를 이용해 만들어진 새로운 instance임
// instanceof는 이 객체가 해당 클래스로 만들어졌는지(해당 클래스의 instance인지 아닌지) 확인하는거임 true/false 로 뱉어냄
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
