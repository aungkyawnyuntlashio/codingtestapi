const { Joi, validate } = require("express-validation");

const createPostValidator = validate({
  body: Joi.object({
    name: Joi.string().min(5).max(50).required().messages({
      "string.base": "name must be a string",
      "string.min": "name must be at least 5 characters long",
      "string.max": "name must be at most 50 characters long",
      "any.required": "name is required",
    }),
    body: Joi.string().min(5).max(50).required().messages({
      "string.base": "body must be a string",
      "string.min": "body must be at least 5 characters long",
      "string.max": "body must be at most 50 characters long",
      "any.required": "body is required",
    }),
  }),
});

const updatePostValidator = validate({
  params: Joi.object({
    id: Joi.string().max(60).required().messages({
      "string.base": "id must be a string",
      "string.max": "id must be at most 6 characters long",
      "any.required": "id is required",
    }),
  }),
  body: Joi.object({
    name: Joi.string().min(5).max(50).required().messages({
      "string.base": "name must be a string",
      "string.min": "name must be at least 5 characters long",
      "string.max": "name must be at most 50 characters long",
      "any.required": "name is required",
    }),
    body: Joi.string().min(5).max(50).required().messages({
      "string.base": "body must be a string",
      "string.min": "body must be at least 5 characters long",
      "string.max": "body must be at most 50 characters long",
      "any.required": "body is required",
    }),
  }),
});

const deletePostValidator = validate({
    params: Joi.object({
      id: Joi.string().max(60).required().messages({
        "string.base": "id must be a string",
        "string.max": "id must be at most 6 characters long",
        "any.required": "id is required",
      }),
    }),
  });

module.exports = { createPostValidator, updatePostValidator, deletePostValidator };
