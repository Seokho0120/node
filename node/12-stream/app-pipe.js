const fs = require("fs");
const zib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream); // readStream으로 data를 받아서 writeStream으로 data를 연결시킬 수 있음
piping.on("finish", () => {
  console.log("done~!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  // file를 다 읽은 다음에 메모리에 들어온 data를 보내주게됨
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });

  // stream 자체를 piping해서 연결하는게 더 좋음
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
// http://localhost:3000 로 접속하면, data를 확인할 수 있음
