import express from "express";

const app = express();

// all은 "/api" 에서만 처리가됨, 정확히 명시해야함 /api/* 하면 use랑 똑같긴함
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

// use는 "/sky" 이후의 모든 url 처리가됨
app.all("/sky", (req, res, next) => {
  console.log("use");
  next();
});

// TODO: 등록한 미들웨어에서는 항상 next를 하거나 return을 해야함!!
app.get(
  "/",
  (req, res, next) => {
    console.log("11");
    // 콜백 함수 하나에서 return 여러번 못함. 무조건 한번만 해야됨 그래서 return을 써야함
    if (true) {
      return res.send("Hello-1");
    }
    res.send("Hello");
  },
  (req, res, next) => {
    console.log("11-2");
  }
);

app.get("/", (req, res, next) => {
  console.log("22");
});

// 항상 마지막에 에러처리해야함, 사용자에게 보여주게
app.use((error, req, res, next) => {
  res.status(404).send("Not available!!");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(8080);
