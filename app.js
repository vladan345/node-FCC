const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page");
    return;
  }
  if (req.url === "/about") {
    res.end("This is about us page");
    return;
  } else {
    res.end(`
    <h1>404 Not found</h1>
    <a href="/">Back home</a>
    `);
    return;
  }
});

server.listen(5000);
