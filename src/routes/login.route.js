const express = require("express");
const { login, createLogin } = require("../controllers/login.controller");
const { loginValidator } = require("../validators/user.validator");

const loginRoute = express.Router();

loginRoute.post("/login", loginValidator, login);
loginRoute.post("/", loginValidator, createLogin);

module.exports = loginRoute;