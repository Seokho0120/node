import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
  res.send("hi~");
});
app.listen(8080);

// IP ip 주소로 서버가 네트워크상에 어디있는지 알 수 있음
// Port 포트는 그 서버의 어떤 어플리케이션에 접속하고 싶은지를 나타냄
// 컴퓨터에는 IP가 있고 여러개의 Port가 있음
// 그 포트중에 우리가 관심있는 어플리케이션에 듣고, 접속할 수 있음
