//require technologies
const mongoose = require("mongoose"); //inclode mongoose in our page

// const config = require('./config');

//connection to mongodb
const db = mongoose
  .connect("mongodb+srv://wael:1234@cluster0.kpnvv.mongodb.net/reservation?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false ,
  })
  .then(() => {
    console.log("connected successfully DB");
  })
  .catch((err) => {
    console.log(" Error when connecting To Database :", err);
  });

//export db
module.exports = db;
