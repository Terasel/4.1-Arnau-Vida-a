const express = require("express"),
  config = require("./app"),
  path = require("path");
(app = express()), (dotenv = require("dotenv").config());

app = config(app);
app.set("port", process.env.PORT || 5000);

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("open", () => {
  console.log("Mongoose connectat amb èxit");
});
mongoose.connection.on("error", (err) => {
  console.log("No s'ha pogut connectar amb el servidor mongo");
  return console.log(err.message);
});

const server = app.listen(app.get("port"), () => {
  console.log("Server up: http://localhost:" + app.get("port"));
});
