const { Joi, validate } = require("express-validation");

const loginValidator = validate({
  body: Joi.object({
    username: Joi.string().min(5).max(50).required().messages({
      "string.base": "Username must be a string",
      "string.min": "Username must be at least 5 characters long",
      "string.max": "Username must be at most 50 characters long",
      "any.required": "Username is required",
    }),
    password: Joi.string().min(5).max(50).required().messages({
      "string.base": "Password must be a string",
      "string.min": "Password must be at least 5 characters long",
      "string.max": "Password must be at most 50 characters long",
      "any.required": "Password is required",
    }),
  }),
});

module.exports = { loginValidator };
