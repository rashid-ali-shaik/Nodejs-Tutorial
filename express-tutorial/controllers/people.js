const { people } = require("../data");

const getPeople = (req, res) => {
  res.json(people);
};

const createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a value" });
  }
  return res.status(201).json([...people, { id: 6, name }]);
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((i) => i.id == Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no member found with that ${id}` });
  }

  const newPeople = people.filter((ppl) => ppl.id !== Number(id));
  res.json({ success: true, data: newPeople });
};

module.exports = {
  createPeople,
  getPeople,
  deletePeople,
  updatePeople,
};
