const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("please provide values");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ user: username, token });
};

const dashboard = (req, res, next) => {
  const luckyNum = Math.floor(Math.random() * 1000);
  res.json({ msg: `hey ${req.user.username} your token is ${luckyNum}` });
};

module.exports = { login, dashboard };
