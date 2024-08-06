const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("./src/mongodb.config");
const loginRoute = require("./src/routes/login.route");
const postRoute = require("./src/routes/post.route");
const { validateRequest } = require("./src/middlewares/validateRequest");
const {
  notFoundHandler,
  errorHandler,
} = require("./src/middlewares/errorHandler");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", loginRoute);
app.use("/post", postRoute);

app.use(validateRequest);
app.use(notFoundHandler);
app.use(errorHandler);
mongodb
  .connect()
  .then(() => {
    app.listen(8000);
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
