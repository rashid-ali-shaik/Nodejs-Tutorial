const express = require("express");
const app = express();
const { users } = require("./data");

app.listen(2000, () => {
  console.log("server listening at port 2000...");
});

app.get("/users", (req, res) => {
  const newUsers = users.map((user) => {
    const { login, id } = user;
    return { id, login };
  });
  res.send(newUsers);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  const user = users.find((user) => user.id == Number(userId));

  if (!user) {
    res.status(404).send("<h1>user not found</h1>");
  }

  res.status(200).json(user);
});
