const { isTokenValid } = require("../utils");
const CustomError = require("../errors");

const AuthenticateUser = (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnAuthenticated("Authentication invalid");
  }

  try {
    const { name, role, userId } = isTokenValid({ token });
    req.user = { name, role, userId };
    next();
  } catch (error) {
    throw new CustomError.UnAuthenticated("Authentication invalid");
  }
};

const AuthorizeUser = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      throw new CustomError.Forbidden("Unauthorized to access this route ");
    }
    next();
  };
};

module.exports = {
  AuthenticateUser,
  AuthorizeUser,
};
