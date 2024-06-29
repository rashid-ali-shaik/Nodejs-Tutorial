const userModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { createUserToken, attachCookiesToResponse } = require("../utils");
const getAllUsers = async (req, res) => {
  const users = await userModel.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {
  const user = await userModel
    .findOne({ _id: req.params.id })
    .select("-password");
  console.log(user);
  if (!user) {
    throw new CustomError.NotFoundError(
      `No user found with id: ${req.params.id}`
    );
  }
  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

//Update using User.save();
const updateUser = async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    throw new CustomError.BadReqError("Please provide name and email");
  }

  const user = await userModel.findOne({ _id: req.user.userId });
  user.email = email;
  user.name = name;
  user.save();

  const tokenUser = createUserToken(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ tokenUser });
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new CustomError.BadReqError("Please provide old and new Passwords");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  const isPasswordCorrect = await user.comparePassword(oldPassword);

  if (!isPasswordCorrect) {
    throw new CustomError.UnAuthenticated("Invalid Credentials");
  }
  user.password = newPassword;
  user.save();
  res.status(StatusCodes.OK).json({ msg: "Updated Password Successfully" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};

/* //Update using findOneAndUpdate on Schema
const updateUser = async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    throw new CustomError.BadReqError("Please provide name and email");
  }

  const user = await userModel.findOneAndUpdate(
    { _id: req.user.userId },
    { name, email },
    { new: true, runValidators: true }
  );

  const tokenUser = createUserToken(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ tokenUser });
}; */
