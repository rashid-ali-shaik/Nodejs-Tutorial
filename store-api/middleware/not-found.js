const notFound = (req, res) => {
  res.status(404).send("UnKnown");
};

module.exports = notFound;
