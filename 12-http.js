const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
  } else if (req.url == "/about") {
    res.end("This is about page");
  } else {
    res.end(
      '<h1>Oops</h1> <p>We dont have the page you looking for</p> <a href="/"> Back to main page</a>'
    );
  }
});

server.listen(5000);
