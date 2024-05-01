const { CustomError } = require("../errors");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: "something went wrong", err });
};
module.exports = errorMiddleware;
