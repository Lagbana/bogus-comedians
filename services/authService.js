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
    this.app.use(cookieparser());

    const sessionConfig = this.sessionConfig();
    this.app.use(session(sessionConfig));

    passport.deserializeUser(this.deSerialize);
    passport.serializeUser(this.serialize);

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

  deSerialize(userId, done) {
    this.getUser(userId)
      .then(function (user) {
        done(null, user);
      })
      .catch(function (err) {
        done(err);
      });
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
      (accessToken, refreshToken, profile, cb) => {
        console.log({ accessToken, refreshToken, profile, cb });
        this.user.findOrCreate({ githubId: profile.id }, (err, user) => {
          return cb(err, user);
        });
      }
    );
  }
}

module.exports = AuthService;
