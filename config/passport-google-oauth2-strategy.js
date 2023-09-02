const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


passport.use(new GoogleStrategy({
    clientID: '967483345530-rcvvcfmf6pg2n4p8a9lgj182hlgn8ak9.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/users/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ email: profile.emails[0].value }).exec();

        console.log(profile);
        if (user) {
            //if found set it as req.user
            return done(null, user);
        } else {
            //if not fount , create a user ans set it as req.user
            const newUser = await User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            });
            
            return done(null, newUser);
        }
    } catch (err) {
        console.log('Error in Google strategy-passport:', err);
        return done(err, false);
    }
}));


module.exports=passport;