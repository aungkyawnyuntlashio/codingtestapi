const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("mongodb+srv://root:skyglobal14062024@exchangerateandjobclust.edfobu6.mongodb.net/testingakn?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connect,
};
