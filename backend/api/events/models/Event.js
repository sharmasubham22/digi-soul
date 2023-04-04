const mongoose = require("mongoose");

const event = mongoose.Schema({
  name: String,
  brief: String,
  detail: String,
  date: {
    type: Date,
    default: Date.now,
  },
  imageURL: {
    data: Buffer,
    contentType: String,
  },
});

const eventSchema = mongoose.model("Events", event);

module.exports = eventSchema;
