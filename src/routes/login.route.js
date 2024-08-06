const express = require("express");
const { login, createLogin } = require("../controllers/login.controller");
const { loginValidator } = require("../validators/user.validator");
const { verifyToken } = require("../middlewares/authVerify");

const loginRoute = express.Router();

loginRoute.post("/login", loginValidator, login);
loginRoute.post("/", verifyToken, loginValidator, createLogin);

module.exports = loginRoute;