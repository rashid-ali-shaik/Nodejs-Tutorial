const http = require("http");
const { readFileSync } = require("fs");

const html = readFileSync("./counter/index.html");
const script = readFileSync("./counter/script.js");
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(html);
    res.end();
    return;
  } else if (url == "/script.js") {
    res.writeHead(200, { "content-type": "text/script" });
    res.write(script);
    res.end();
    return;
  }
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1>Not found</h1>");
  res.end();
  return;
});
server.listen(2000);
