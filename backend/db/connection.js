const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB - Connection successful!");
  });

const dbConnnection = mongoose.connection;

dbConnnection.on("error", (err) => {
  console.log("Unable to connect to database: ", err);
});

module.exports = dbConnnection;
