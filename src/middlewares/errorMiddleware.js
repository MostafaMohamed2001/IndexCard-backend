const ApiError = require("../utils/errors/apiError");

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";
  if (process.env.NODE_ENV == "production") {
    if (err.code === 11000) {
      err = handelDuplicated(err.keyValue);
    }
    sendErrorProd(err, res);
  } else {
    sendErrorDev(err, res);
  }
};

const sendErrorProd = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    msg: err.message,
  });
};
const sendErrorDev = (err, res) => {
  console.error("Error:  444", err);
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    msg: err.message,
    stack: err.stack,
  });
};
const handelDuplicated = (keyValue) => {
  const field = Object.keys(keyValue)[0];
  const value = keyValue[field];
  return new ApiError(`${field}' already exists`, 400);
};


module.exports = globalError;
