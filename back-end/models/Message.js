var mongoose = require('mongoose');
module.exports =  mongoose.model('Message',{  //schema creation
    msg:String
});
