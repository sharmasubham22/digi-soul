const mongoose = require("mongoose");

mongoose
  .connect('mongodb+srv://digisoul:dbuser123@ds-cluster.pnswsy5.mongodb.net/web15', { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("MongoDB - Connection successful!");
  })
  .catch((err) => {
    console.log("Unable to establish connection... ");
  });

const dbConnnection = mongoose.connection;

dbConnnection.on("error", (err) => {
  console.log("Unable to connect to database");
});

module.exports = dbConnnection;
