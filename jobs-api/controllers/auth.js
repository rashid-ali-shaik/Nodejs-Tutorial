const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");

const login = async (req, res) => {
  res.send("login");
};
const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

module.exports = { login, register };
