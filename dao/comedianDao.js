const mongoose = require('mongoose')

class ComedianDao {
    constructor(options = {}) {
        this.options = options
        this.user = mongoose.model("Comedian");
    }
}

module.exports = ComedianDao