const express = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const app = express();
const html = readFileSync("./counter/index.html");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "counter", "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(2000, () => {
  console.log("listening at port 2000");
});
