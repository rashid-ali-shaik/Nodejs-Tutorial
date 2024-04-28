const express = require("express");
require("express-async-errors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const mainRouter = require("./routes/main");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());

//route
app.use("/api/v1", mainRouter);
//port
const port = process.env.PORT || 5000;

//middleware
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`app running at port ${port}`);
});
