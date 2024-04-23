const express = require("express");
const app = express();
const morgan = require("morgan");
const people = require("./router/people");
const { notfound } = require("./middlewareFunc");

app.use(morgan("tiny"));

app.use(express.json());

// we fix the route here
app.use("/api/postman/people", people);

app.use(notfound);

app.listen(5000, () => {
  console.log("server running at port 5000....");
});
