const Products = require("../model/product");

const getProducts = async (req, res, next) => {
  // throw new Error("hey there");
  let object = {};

  const { search, sort, fields, numericFilters } = req.query;

  // sorting
  if (search) {
    object.name = { $regex: search, $options: "i" };
  }

  // Numeric filters
  if (numericFilters) {
    const mappingObject = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$gt",
      "<=": "$gt",
    };
    const regex = /\b(<|>|>=|=|<|<=)\b/g;
    const filters = numericFilters.replace(
      regex,
      (match) => `-${mappingObject[match]}-`
    );
    const options = ["price"];
    const [name, operator, number] = filters.split("-");
    if (options.includes(name)) {
      object[name] = { [operator]: Number(number) };
    }
  }

  let results = Products.find(object);

  //sort the data
  if (sort) {
    const sortedOne = sort.split(",").join(" ");
    results = results.sort(sortedOne);
  }

  // shows specific fields
  if (fields) {
    const field = fields.split(",").join(" ");
    results = results.select(field);
  }

  // pagination
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;

  const products = await results.limit(limit).skip(skip);
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getProducts };
