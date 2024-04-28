const { UnAuthenticated } = require("../errors");
const jwt = require("jsonwebtoken");
const authorization = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnAuthenticated("please provide token");
  }
  const token = authorization.split(" ")[1];
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    throw new UnAuthenticated("token expired check once");
  }
};

module.exports = authorization;
