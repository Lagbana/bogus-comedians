class ComedianRoute {
  constructor(options = {}) {
    this.options = options;
    this.router = options.Router;
    this.comedianService = new options.ComedianService();
  }

  initialize() {
    this.router.get("/user", (req, res) => this.retrieveUser(req, res));
    this.router.get("/users", (req, res) => this.retrieveUsers(req, res));
    this.router.post("/users", (req, res) => this.createUser(req, res));
  }

  async retrieveUser(req, res) {
    try {
      const _id = this._getUser(req)
      if (!_id) return res.send({})
      const user = await this.comedianService.getUser({ _id })
      res.send(user);
    } catch (err) {
      throw err;
    }
  }

  async retrieveUsers(req, res) {
    try {
    } catch (err) {
      throw err;
    }
  }

  async createUser() {
    try {
    } catch (err) {
      throw err;
    }
  }

  _getUser(req) {
    const sessions = req.sessionStore.sessions;
    const key = Object.keys(sessions)[0];
    let context = sessions[key]
    if (!context) return
    context = JSON.parse(context);
    const {
      passport: { user },
    } = context;
    return user
  }
}

module.exports = ComedianRoute;
