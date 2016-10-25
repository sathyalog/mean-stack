var Message = require('../models/message');


module.exports = {
    get:function(req,res){ // retrieve all values from testdb->messages collection
        Message.find({}).populate('user','-pwd').exec(function(err,result){
        res.send(result);
    })
    },
    post:function(req,res){
        console.log(req.body, req.user);
        req.body.user = req.user;
        var message = new Message(req.body); //instantiate and assign to a local variable
        message.save(); // mongoose will save values to db
        res.status(200);
    }
}
