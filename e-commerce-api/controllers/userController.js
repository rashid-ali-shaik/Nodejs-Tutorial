const userModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

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
  res.send("showCurrentUser");
};
const updateUser = async (req, res) => {
  res.send(req.body);
};
const updateUserPassword = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
