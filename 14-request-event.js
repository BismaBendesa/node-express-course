const http = require("http");

const server = http.createServer();

// // const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

// Using Event Emitters API
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
