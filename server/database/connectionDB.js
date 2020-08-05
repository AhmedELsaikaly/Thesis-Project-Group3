const mongoose = require("mongoose"); //inclode mongoose in our page
// const config = require('./config');
//connection to mongodb
const db = mongoose
  .connect(
    "mongodb+srv://Khaled_20:258852@cluster0.gpjac.mongodb.net/ratest?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected successfully DB");
  })
  .catch((err) => {
    console.log(" Error when connecting To Database :", err);
  });
module.exports = db;
