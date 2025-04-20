import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan"; // 사용자에게 요청을 받을때마다 로그를 남기고 싶은데, 그 로그를 원하는 타입으로 정리해서 보여주는거임
import helmet from "helmet"; // 보안에 필요한 헤더에 필요한 설정을 해줌

const app = express();

const corsOptions = {
  origin: ["http://127.0.0.1:5500"], // 여기만 허락해
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use(helmet());

app.get("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.cookies);
  req.cookies.yummy_cookie;
  res.send("Welcome!");
});

app.listen(8080);
