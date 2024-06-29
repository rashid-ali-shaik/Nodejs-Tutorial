const CustomError = require("../errors");

const checkPermissions = (reqUser, resourceId) => {
  //   console.log(typeof resourceId); --> object

  if (reqUser.role == "admin") return;

  //   changing object to string to check
  if (reqUser.userId == resourceId.toString()) return;

  throw new CustomError.Forbidden("Not Authorized to access this route");
};

module.exports = checkPermissions;
