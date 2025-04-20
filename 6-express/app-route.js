import express from "express";
import postRouter from "./router/post.js";
import useRouter from "./router/user.js";

const options = {
  dotfiles: "ignore",
  etag: false,
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, req, stat) {
    res.set("x-timestamp", Date.now());
  },
};

const app = express();
app.use(express.json()); // REST API -> Body 를 파싱할때 간편하게 사용
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
app.use(express.static("public", options));

app.use("/posts", postRouter);
app.use("/users", useRouter);

app.listen(8080);
