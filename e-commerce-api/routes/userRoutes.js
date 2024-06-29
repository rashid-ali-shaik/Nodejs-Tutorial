const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

const {
  AuthenticateUser,
  AuthorizeUser,
} = require("../middlewares/authentication");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get([AuthenticateUser, AuthorizeUser("admin", "owner")], getAllUsers);
router.route("/showMe").get(AuthenticateUser, showCurrentUser);
router.route("/updateUser").patch(AuthenticateUser, updateUser);
router.route("/updateUserPassword").patch(AuthenticateUser, updateUserPassword);

router.route("/:id").get(getSingleUser);

module.exports = router;
