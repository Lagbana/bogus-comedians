const { ComedianDao } = require('../dao')

class ComedianService extends ComedianDao {
    constructor(options = {}) {
        super()
        this.options = options
    }
}

module.exports = ComedianService