import MyLogger from "./middleWare/myLogger";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

mongoose.connect(
  process.env.MONGO,
  { useNewUrlParser: true }
);
app.use(MyLogger);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  app.use("/", routes);

  var listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
});
