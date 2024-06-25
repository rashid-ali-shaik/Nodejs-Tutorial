const NotFoundError = require("./not-found.js");
const BadReqError = require("./bad-req.js");
const UnAuthenticated = require("./unauthenticated.js");
const CustomError = require("./custom-api.js");
module.exports = {
  CustomError,
  NotFoundError,
  BadReqError,
  UnAuthenticated,
};
