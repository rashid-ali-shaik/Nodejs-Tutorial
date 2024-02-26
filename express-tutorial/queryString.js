// require("./params");
const { users } = require("./data");
const express = require("express");
const app = express();

app.listen(2000);

app.get("/api/v1/users", (req, res) => {
  const { search, limit } = req.query;
  let sortedData = [...users];
  if (search) {
    sortedData = sortedData.filter((user) => user.login.startsWith(search));
  }
  if (limit) {
    sortedData = sortedData.slice(0, Number(limit));
  }
  if (sortedData.length < 1) {
    return res
      .status(200)
      .json([{ status: "success", message: "sorry no results found" }]);
  }
  return res.json(sortedData);
});
