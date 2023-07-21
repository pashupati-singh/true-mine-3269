const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema(
  {
    blacklist: { type: [String], required: true },
  },
  {
    versionKey: false,
  }
);

const blacklistModel = mongoose.model("blacklists", blacklistSchema);

module.exports = blacklistModel;
