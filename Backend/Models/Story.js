const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  url: {
    type: String
  },

  points: {
    type: Number
  },

  author: {
    type: String
  },

  time: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("Story", storySchema);