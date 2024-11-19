const http = require("http");
const fs = require("fs");
// const { error } = require("console");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(5000);

// show it chuncked on the transfer-encoding developer tools chrome.
