const createUserToken = (user) => ({
  name: user.name,
  role: user.role,
  userId: user._id,
});

module.exports = createUserToken;
