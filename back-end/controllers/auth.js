var User = require('../models/user');
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {
    register: function (req, res) {
        console.log(req.body);

        User.findOne({
            email: req.body.email
        }, function (err, existingUser) {

            if(existingUser)
                return res.status(409).send({message: 'Email is already registered'});

            var user = new User(req.body);

            user.save(function (err, result) {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }
                res.status(200).send({token: createToken(result)});
            })
        });
    }
}

function createToken(user){
    var payload = {
        sub: user._id, //subject as user_id
        iat: moment().unix(), //issued at time
        exp: moment().add(14, 'days').unix() //set expire limit for 14 days
    };
    return jwt.encode(payload,'secret'); //passing a secret token
}
