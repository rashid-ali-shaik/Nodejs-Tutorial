const EventEmitter = require("events");
const http = require("http");
const events = new EventEmitter();

events.on("response", (name, age) => {
  console.log(`data received of user ${name} of age ${age}`);
});
events.on("response", () => {
  console.log(`some another logic`);
});

events.emit("response", "rasheed", 25);

//server events

const server = http.createServer();
server.on("request", (req, res) => {
  res.write("hello there");
  res.end();
});

server.listen(5000);
