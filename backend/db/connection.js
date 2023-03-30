const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DATABASE_URI ||
      "mongodb+srv://amanjot:5iO61trWswClCJWj@t6-cluster.6cwmqly.mongodb.net/digisoul",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
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
