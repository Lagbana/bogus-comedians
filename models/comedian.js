const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ComedianSchema = new Schema(
  {
    name: {
      type: String,
    },
    avatar: {
      type: String,
      required: true,
    },
    githubId: {
      type: String,
    },
    url: String,
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comedian", ComedianSchema);