const debug = require("debug")("calculator:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  debug("Error! - >  ", error.message);
  const message = error.code ? error.message : "General Error";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  generalErrorHandler,
};
