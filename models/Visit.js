const mongoose = require("mongoose");

const Visit = mongoose.model("Visit", {
  slots: String,
  date: Date,
  name: String,
});

module.exports = Visit;
