const errorHandler = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
  });
};

const notFoundHandler = (err, req, res, next) => {
  console.log(err);
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error);
};

module.exports = { errorHandler, notFoundHandler };
