const express = require("express");
const app = express();
const morgan = require("morgan");

// const { logger, authorize } = require("./middlewareFunc");
//to avoid repeating adding Middleware to each route we use app.use it apply for all;
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home page ");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(2000, () => {
  console.log("listening at port 2000...");
});

/* adding middleware to the routes

app.get("/", logger, (req, res) => {
  res.send("Home page");
});
app.get("/about", logger, (req, res) => {
  res.send("About page");
}); */
