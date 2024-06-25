const jwt = require("jsonwebtoken");

const generateToken = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const attachCookiesToResponse = ({ res, user }) => {
  const token = generateToken({ payload: user });

  //setting up cookie
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    signed: true,
  });
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  generateToken,
  isTokenValid,
  attachCookiesToResponse,
};
