import express from "express";
import Email from "./controllers/sendEmail.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello World</h1> <a href='/send'>send Email</a>");
});

app.get("/send", Email);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening at port" + port);
});
