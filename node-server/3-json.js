const http = require("http");

const courses = [{ name: "HTML" }, { name: "Js" }, { name: "Node" }];

const server = http.createServer((req, res) => {
  const url = req.url; // 무엇을 원하는지?
  const method = req.method; // 어떻게? 액션?

  if (url === "/course") {
    if (method === "GET") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(courses)); // 객체를 json형태로 전달
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log("chunk", chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log("course >>", course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
