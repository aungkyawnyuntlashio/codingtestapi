const { ValidationError } = require("express-validation");

const validateRequest = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const mes = err.details.body || err.details.params || err.details.query;
    return res.status(err.statusCode).json({
      success: false,
      message: "VALIDATION_ERROR",
      error: mes[0].message,
    });
  }

  return res.status(400).json({
    success: false,
    message: err,
  });
};

module.exports = { validateRequest };
