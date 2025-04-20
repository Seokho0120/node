import express from "express";

const app = express();
app.use(express.json());

// FIXME: 중복되는 코드를 최대한 정리했지만, 이 이상으로 복잡해지면 모듈성과 확장성 등등 비효율적임
app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET: /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST: /posts");
  });

app
  .route("/posts/:id")
  .get((req, res, next) => {
    res.status(201).send("PUT: /posts/:id");
  })
  .post((req, res) => {
    res.status(201).send("DELETE: /posts/:id");
  });

app.listen(8080);
