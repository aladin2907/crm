const JwtStrategy= require('passport-jwt').Strategy
const ExtractJwt= require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('../config/keys')


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:keys.jwt
}


module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) =>{ //3

            try{ //2
                
        const user = await User.findById(payload. userId).select('email id')
                        //1
            if (user){
                        done(null, user)
                } else{
    done(null, false)
                        }
                        // 1
                    } catch(e) {
                        console.log(e)
                    }
            }) //3
    )
}

