const { createServer } = require("http");

const server = createServer((req, res) => {
  console.log("Hello World");
  res.end("server is created");
});

server.listen(5000, () => {
  console.log("Listening to port 5000...");
});
