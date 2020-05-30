class ComedianRoute {
    constructor(options = {}) {
        this.options = options
        this.router = options.Router
        this.comedianService = new options.ComedianService()
    }

    initialize() {
        this.router.get('/users', (req, res) => this.retrieveUsers(req, res))
    }

    async retrieveUsers(req, res) {
        try {
            
        } catch (err) {
            throw err
        }
    }
}

module.exports = ComedianRoute
