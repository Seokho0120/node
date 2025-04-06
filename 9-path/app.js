const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js")); // 확장자 빼고 보기

// 디렉토리 이름만 보기
console.log(path.dirname(__filename));

// 확장자만 보기
console.log(path.extname(__filename));

// parse: 전체 경로를 객체로 만들어 분리할 수 있음
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log("str", str);

// 절대 경로인지 알아보기: isAbsolute는 절대경로이면 true
console.log("isAbsolute?", path.isAbsolute(__dirname)); // /Users/ 와 같은 절대 경로
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로

// normalize: 경로에서 오류가 있고, 이상한 부분이 있으면 알아서 고쳐줌
console.log(path.normalize("./folder//////sbu"));

// join
// console.log(__dirname + "/" + "image");
// console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
