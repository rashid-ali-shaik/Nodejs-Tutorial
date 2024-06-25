const UserModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../utils");

//REGISTER
const register = async (req, res) => {
  // destructuring all if the use send role as admin we are not sending to db
  const { email, name, password } = req.body;

  //checking email already exists
  const emailAlreadyExists = await UserModel.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadReqError("Email already exists");
  }

  const user = await UserModel.create({ name, email, password });

  const tokenUser = { name: user.name, role: user.role, userId: user._id };
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

//LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  //checking the both values are present
  if (!email || !password) {
    throw new CustomError.BadReqError("Please Provide values");
  }

  //checking user is present in the db.
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new CustomError.UnAuthenticated("Invalid Credentials");
  }

  //checking password is correct
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnAuthenticated("Invalid Credentials");
  }

  // attaching the cookies after all validations
  const tokenUser = { name: user.name, role: user.role, userId: user._id };
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

//LOGOUT
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out successfully" });
};

module.exports = {
  register,
  login,
  logout,
};
