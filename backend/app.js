const express = require("express");
const app = express();
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const dbConnnection = require("./db/connection");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("", routes);

dbConnnection.on("connected", () => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server listening on 3000!");
  });
});
