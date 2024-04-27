const errorHandleMiddleware = (err, req, res, next) => {
  return res.json({ msg: err });
};

module.exports = errorHandleMiddleware;
