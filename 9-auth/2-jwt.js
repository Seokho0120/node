import jwt from "jsonwebtoken";

const secret = "{1%.5]PHq/Rm9int}Gc.-4Z-])u^w@£W";
const token = jwt.sign(
  {
    id: "userId",
    usAdmin: true,
  },
  secret,
  { expiresIn: 2 } // 유효기간 설정
);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);

// https://www.lastpass.com/features/password-generator 비번만들기
// https://jwt.io/ jwt 정보 확인하는곳
