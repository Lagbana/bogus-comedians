const passport = require("passport");

class AuthRoute {
  constructor(options = {}) {
    this.options = options;
    this.router = options.Router;
  }

  initialize() {
    // Github Auth Strategy
    this.router.get(
      "/auth/github",
      passport.authenticate("github", { scope: ["user:email"] })
    );
    this.router.get(
      "/auth/github/callback",
      passport.authenticate("github", { failureRedirect: "/login" }),
      (_, res) => res.redirect("/")
    );

    // Local Auth Strategy
    this.router.get("/auth", (req, res) => this.auth(req, res));
    this.router.post("/auth", passport.authenticate("local"), (req, res) =>
      this.createAuth(req, res)
    );
  }

  async auth(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "You are not currently logged in.",
        });
      }
      return this.getCurrentUser(req, res);
    } catch (err) {
      throw err;
    }
  }

  async createAuth(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Invalid username or password.",
        });
      }
      return this.getCurrentUser(req, res);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser(req, _) {
    // I'm picking only the specific fields its OK for the audience to see publicly
    // never send the whole user object in the response, and only show things it's OK
    // for others to read (like ID, name, email address, etc.)
    const { id, username } = req.user;
    return res.json({
      id,
      username,
    });
  }
}

module.exports = AuthRoute;