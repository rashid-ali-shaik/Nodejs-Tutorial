const express = require("express");
require("dotenv").config();
// this module replaces the async wrapper it do works with out wrapper
require("express-async-errors");
// -------------------------------------------------------
const connectDB = require("./db/connect");
const customError = require("./middleware/customError");
const productRouter = require("./routes/products");
const notFound = require("./middleware/not-found");

//express
const app = express();
//get body json parsed
app.use(express.json());

//routes
app.use("/api/v1/products", productRouter);

//middlewares
app.use(notFound);
app.use(customError);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("server running at port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
