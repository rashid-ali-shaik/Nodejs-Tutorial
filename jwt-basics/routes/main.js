const express = require("express");
const router = express.Router();
const authorization = require("../middleware/auth");
const { dashboard, login } = require("../controllers/main");

router.route("/dashboard").get(authorization, dashboard);
router.route("/login").post(login);

module.exports = router;
