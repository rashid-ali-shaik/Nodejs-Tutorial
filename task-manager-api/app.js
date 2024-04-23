const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/errorHandleMiddleware");
require("dotenv").config();
//middleware
app.use(express.json());
//

app.use("/api/v1/tasks", tasks);

app.use(errorHandleMiddleware);
app.use(notFound);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening at port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
