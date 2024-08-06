const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("change your mongodb url", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connect,
};
