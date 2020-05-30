const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComedianSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    // firstStandUpDate: {
    //   bsonType: Date,
    //   required: true,
    // },
    bestDadJoke: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comedian", ComedianSchema);