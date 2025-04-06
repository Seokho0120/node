const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first", args);
};

emitter.on("seokho", callback1);

emitter.on("seokho", (args) => {
  console.log("second", args);
});

// seokho 이벤트 이름, message 콜백함수
emitter.emit("seokho", { message: 1 });
emitter.emit("seokho", { message: 2 });
emitter.removeListener("seokho", callback1);
emitter.removeAllListeners();
emitter.emit("seokho", { message: 3 });
