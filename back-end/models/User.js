var mongoose = require('mongoose');
module.exports =  mongoose.model('User',{  //schema creation
    email:String,
    pwd:String
});
