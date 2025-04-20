import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

// TODO: 항상 미들웨어에서 자체적으로 에러 처리해주는게 좋음
app.get("/", (req, res, next) => {
  fs.readFile("/file1.text", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

// FIXME: 에러처리가 안됨
// app.get("/file1", (req, res, next) => {
//   const data = fs.readFileSync("/file1.text");
//   res.send(data);
// });
app.get("/file1", (req, res, next) => {
  try {
    const data = fs.readFileSync("/file1.text");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// promise 사용하는 경우 catch로 에러 처리
app.get("/file2", (req, res, next) => {
  fsAsync
    .readFile("/file2.text")
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404));
});

app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file2.text");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// 안전망으로 전체 처리 해놓은거임
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(8080);
