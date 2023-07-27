const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = require("./helpers/keys").MongoURI;
const routes = require("./routes/routes");
require("dotenv").config();

const whitelist = ["http://localhost:3000"];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());
app.use("/", routes);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
