const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("welcome to out homepage");
    res.end();
    return;
  }
  if (req.url == "/about") {
    res.write("welcome to out about page");
    res.end();
    return;
  }
  res.write(`<h1>Opps!</h1> <br/> <a href="/">back to home</a>`);
  res.end();
  return;
});

server.listen(5000);
