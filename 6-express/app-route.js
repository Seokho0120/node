import express from "express";
import postRouter from "./router/post.js";
import useRouter from "./router/user.js";

const app = express();
app.use(express.json());

app.use("/posts", postRouter);
app.use("/users", useRouter);

app.listen(8080);
