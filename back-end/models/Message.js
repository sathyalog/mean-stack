var mongoose = require('mongoose');
module.exports =  mongoose.model('Message',{  //schema creation
    msg:String,
    user:{type:mongoose.Schema.ObjectId, ref:'User'}
});
