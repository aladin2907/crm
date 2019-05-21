const User = require('../models/User')


module.exports.login = function(req, res) {

   res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    }) 
}


module.exports.register = async function(req, res) {
//email password
const candidate = await User.findOne({email:req.body.email}) 
if (candidate){
    //пользователь существует
    res.status(409).json({
        message: 'user exist, try another name or sign in'
    })
}  
else {
    // create user
}
}