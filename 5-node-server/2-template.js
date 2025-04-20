const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "Seokho";
const courses = [{ name: "HTML" }, { name: "Js" }, { name: "Node" }];

const server = http.createServer((req, res) => {
  console.log("incoming...");

  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name: name })
      .then((date) => res.end(date));
  } else if (url === "/course") {
    ejs
      .renderFile("./template/course.ejs", { courses: courses })
      .then((date) => res.end(date));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name: name })
      .then((date) => res.end(date));
  }
});

server.listen(8080);
