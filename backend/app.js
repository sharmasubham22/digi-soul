const express = require("express");
const app = express();
const routes = require("./api/routes/eventRoutes");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("", routes);

app.listen(3000, () => {
  console.log("Server listening on 3000!");
});