const { CustomError } = require("../errors");

const errorHandler = async (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.json({ msg: "something went wrong" });
};

module.exports = errorHandler;
