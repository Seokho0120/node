import { getCount, increase } from "./counter.js";
increase();
increase();
console.log(getCount());

// import * as counter from "./counter.js"; // counter.js에 있는 모든것을 다 가져오고, counter라는 이름의 객체로 묶어서 가져와서 사용 가능
// counter.increase();
// counter.increase();
// console.log(counter.getCount());
