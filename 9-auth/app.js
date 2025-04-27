import bcrypt from "bcrypt";

const password = "abc1234";
const hashed = bcrypt.hashSync(password, 10); // 복잡도가 늘어날수록 시간이 기하급수적으로 늘어나게됨, 8~12정도 추천
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync("abc1234", hashed);
console.log("result", result);

/**
 *  bcrypt는 비밀번호 해싱을 위한 라이브러리로, 보안을 강화하기 위해 비밀번호를 안전하게 저장.
 * 데이터를 고정 길이의 문자열로 변환하는 과정으로, 원본 데이터를 복원할 수 없도록 만든다.
 * hashing(해싱)을 통해 원본 비밀번호를 직접 저장하는 대신, 해시 값만 저장하여 보안을 강화.
 */
