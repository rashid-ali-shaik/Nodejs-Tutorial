const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  next();
};
const authorize = (req, res, next) => {
  const { user } = req.query;
  console.log("from logger");
  if (user == "rasheed") {
    req.user = { name: "rasheed", age: 25 };
    return next();
  }

  return res.send("Un Authorize");
};

const notfound = (req, res, next) => {
  res.send("not found");
};

module.exports = { logger, authorize, notfound };
