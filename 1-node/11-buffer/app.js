// Fixed-size chunk of memory
// array of integers, byte of data
// Buffer는 메모리에서 고정된 메모리 덩어리라고 보면됨, 숫자의 배열이다. 데이터에 있는 바이트 데이터 자체이다.
const fs = require("fs");

const buf = Buffer.from("Hi");
console.log("buf", buf); // <Buffer 48 69>: 유니코드
console.log("buf", buf.length); // 2: Hi 2개
console.log("buf", buf[0]); // 72: 배열로 접근하면 아스키코드(ascii)로 출력됨
console.log("buf", buf[1]); // 105: 배열로 접근하면 아스키코드(ascii)로 출력됨
console.log("buf", buf.toString());

// buffer 만들기
const buf2 = Buffer.alloc(2); // 사이즈가 2개인 buffer를 만들고, 사용할 수 있는 메모리를 찾아서 초기화함
const buf3 = Buffer.allocUnsafe(2); // 사이즈가 2개인 buffer를 만들고, 초기화하지 않음, 그래서 빠름. 하지만 초기화하는게 좋음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log("buf2", buf2);
console.log("buf2", buf2.toString());
console.log("buf3", buf3.toString());

// concat: buf를 모으기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log("newBuf", newBuf.toString());
