const { ComedianDao } = require('../dao')

class ComedianService extends ComedianDao {
    constructor(options = {}) {
        super()
        this.options = options
    }

    async retrieveUser(context) {
        try {
            const user = await this.getUser(context)
            return user
        } catch (err) {
            throw err
        }
    }
}

module.exports = ComedianService