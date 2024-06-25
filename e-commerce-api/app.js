require("dotenv").config();
require("express-async-errors");

//express
const express = require("express");
const app = express();

//other packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// port
const port = process.env.PORT || 5000;

//database connection
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

//middlewares
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("E-Commerce API");
});

app.get("/api/v1", (req, res) => {
  console.log(req.signedCookies, " signed");
  res.send("hello there");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound); // place first after the routes.
app.use(errorHandler); // this will invoke when hits the route only

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`port listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

//start server
start();
