const http = require("http");

// console.log("http.STATUS_CODES", http.STATUS_CODES);
// console.log("http.METHODS", http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incoming...");

  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  res.write("Welcome!");
  res.end();
});

server.listen(8080);
