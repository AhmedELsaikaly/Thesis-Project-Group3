//require technologies
const mongoose = require("mongoose"); //inclode mongoose in our page

// const config = require('./config');

//connection to mongodb
const db = mongoose
  .connect("mongodb://localhost:27017/tree", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully DB");
  })
  .catch((err) => {
    console.log(" Error when connecting To Database :", err);
  });

//export db
module.exports = db;
