const http = require("http");
const fs = require("fs"); // file system

// console.log("http.STATUS_CODES", http.STATUS_CODES);
// console.log("http.METHODS", http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");

  // console.log(req.headers);
  // console.log(req.httpVersion);
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    // TODO: 이렇게 텍스트도 보여줄 수 있고
    // res.write("Welcome!");
    // TODO: 직접 html을 작성해서 보여줄 수 있음. 하지만 이건 비효율적이야~
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Seokho</title></head>");
    // res.write("<body><h1>Welcome!!</h1></body>");
    // res.write("</html>");

    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/course") {
    // res.write("course");
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Hello</title></head>");
    // res.write("<body><h1>Courses</h1></body>");
    // res.write("</html>");

    fs.createReadStream("./html/course.html").pipe(res);
  } else {
    // res.write("Not Found");
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Hello</title></head>");
    // res.write("<body><h1>Not Found!</h1></body>");
    // res.write("</html>");

    fs.createReadStream("./html/not-found.html").pipe(res);
  }
  // TODO: pipe 쓸때는 res.end() 삭제, pipe 내부적으로 end 해줌
  // res.end();
});

server.listen(8080);
