const session = require("express-session");
const cookieparser = require("cookie-parser");
const passport = require("passport");
const { ComedianDao } = require("../dao");
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

class AuthService extends ComedianDao {
  constructor(options = {}) {
    super();
    this.options = options;
    this.app = options.app;
  }

  initialize() {
    const config = this.sessionConfig();
    this.app.use(cookieparser());
    this.app.use(session(config));

    passport.serializeUser((user, done) => this.serialize(user, done));
    passport.deserializeUser((userId, done) => this.deSerialize(userId, done));

    // Register passport strategies
    passport.use(this.localStrategy());
    passport.use(this.githubStrategy());

    this.app.use(passport.initialize());
    // only required if using sessions. this will add middleware from passport
    // that will serialize/deserialize the user from the session cookie and add
    // them to req.user
    this.app.use(passport.session());
  }

  sessionConfig() {
    return {
      // this should be changed to something cryptographically secure for production
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      // automatically extends the session age on each request. useful if you want
      // the user's activity to extend their session. If you want an absolute session
      // expiration, set to false
      rolling: true,
      name: "sid", // don't use the default session cookie name
      // set your options for the session cookie
      cookie: {
        httpOnly: true,
        // the duration in milliseconds that the cookie is valid
        maxAge: 20 * 60 * 1000, // 20 minutes
        // recommended you use this setting in production if you have a well-known domain you want to restrict the cookies to.
        // domain: 'your.domain.com',
        // recommended you use this setting in production if your site is published using HTTPS
        // secure: true,
      },
    };
  }

  serialize(user, done) {
    done(null, user._id);
  }

  async deSerialize(userId, done) {
    try {
      const user = await this.getUser({ _id: userId });
      return done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  }

  localStrategy() {
    return new LocalStrategy(async (username, password, done) => {
      const errorMsg = "Invalid username or password";
      this.getUser({ username })
        .then((user) => {
          // if no matching user was found...
          if (!user) {
            return done(null, false, { message: errorMsg });
          }

          // call our validate method, which will call done with the user if the
          // passwords match, or false if they don't
          return user
            .validatePassword(password)
            .then((isMatch) =>
              done(
                null,
                isMatch ? user : false,
                isMatch ? null : { message: errorMsg }
              )
            );
        })
        .catch(done);
    });
  }

  githubStrategy() {
    return new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:8080/v1/api/auth/github/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
        let user = await this.getUser({ githubId: profile.id });
        if (!user) {
          const { id, avatar_url, url, name, email, login } = profile["_json"];
          user = await this.createUser({
            githubId: id,
            avatar: avatar_url,
            url,
            name,
            email,
            username: login,
          });
        }
        return cb(null, user);
      }
    );
  }
}

module.exports = AuthService;
