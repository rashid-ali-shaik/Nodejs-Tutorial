//we need to write all four arguments
const customError = async (err, req, res, next) => {
  console.log(err, "hello there");
  return res.status(500).json({ msg: "something went wrong", err });
};

module.exports = customError;
