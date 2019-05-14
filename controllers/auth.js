const User = require('../models/User')


module.exports.login = function(req, res) {

    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}


module.exports.register = function(req, res) {
//email password
   new user = new User({
       email: req.body.email,
       password: req.password
   })
   user.save().then(() => console.log('user created'))
}