const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const keys = require('./keys');
const User = require('../db_models/users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleTokenStrategy({
  // options for google strategy
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({'userId': profile.id}).then((currentUser) => {
      if(currentUser){
        //console.log('old user:' + currentUser);
        return done(null, currentUser);
      } else {
        new User({
          userId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          provider: profile.provider,
          email: profile.emails[0].value
        }).save().then((newUser) => {
          //console.log('new user:' + newUser);
          return done(null, newUser);
        })
      }
    });
  })
);
