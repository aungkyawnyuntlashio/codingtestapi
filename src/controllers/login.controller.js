const LoginService = require("../services/login.service");
const jwt = require("jsonwebtoken");

const createLogin = async (req, res) => {
  try {
    const loginService = new LoginService();
    const { username, password } = req.body;
    const login = await loginService.register(username, password);
    res.status(200).json({
      data: login,
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const loginService = new LoginService();
    const { username, password } = req.body;
    const login = await loginService.login(username, password);
    if (!login) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
    }
    const token = jwt.sign({ username, id: login._id }, "codingtest", {
      expiresIn: "1h",
    });
    res.status(200).json({
      data: { token, userInfo: login },
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createLogin,
  login,
};
