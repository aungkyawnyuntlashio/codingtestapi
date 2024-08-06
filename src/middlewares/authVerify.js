const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "No token provided",
    });
  }
  jwt.verify(token, "codingtest", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    req.userId = decoded.id;
    req.username = decoded.username;
    next();
  });
}

module.exports = { verifyToken };