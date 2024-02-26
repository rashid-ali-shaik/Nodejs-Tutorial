const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home page");
    return;
  }
  if (req.url == "/about") {
    // Blocking code
    for (let i = 0; i < 500; i++) {
      for (let j = 0; j < 500; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("about page");
    return;
  }
  if (req.url == "/contact") {
    res.end("contact page");
    return;
  }
  res.end("Error page");
});

server.listen(5000, () => {
  console.log("server running");
});
