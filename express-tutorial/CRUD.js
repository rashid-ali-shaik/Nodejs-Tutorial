const express = require("express");
const app = express();
const morgan = require("morgan");
const { people } = require("./data");

app.use(morgan("tiny"));

app.use(express.json());

app.get("/api/postman/people", (req, res) => {
  res.json(people);
});

//post
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a value" });
  }
  return res.status(201).json([...people, { id: 6, name }]);
});

//put

app.put("/api/postman/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((i) => i.id == Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no member found with that ${id}` });
  }
  const newPeople = people.map((pl) => {
    if (pl.id == id) {
      pl.name = name;
    }
    return pl;
  });
  res.json({ success: true, data: newPeople });
});

//delete
app.delete("/api/postman/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((i) => i.id == Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no member found with that ${id}` });
  }

  const newPeople = people.filter((ppl) => ppl.id !== Number(id));
  res.json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server running at port 5000....");
});
