const notFound = (req, res, next) => res.send(`Not found the route ${req.url}`);

module.exports = notFound;
