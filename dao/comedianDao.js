const mongoose = require("mongoose");

class ComedianDao {
  constructor(options = {}) {
    this.options = options;
    this.user = mongoose.model("Comedian");
  }

  async getUser(context) {
    try {
      return this.user.findOne(context);
    } catch (err) {
      throw err;
    }
  }

  async createUser(context) {
    try {
      return this.user.create(context);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ComedianDao;
