var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var database;

/*var Message = mongoose.model('Message',{  //schema creation
    msg:String
});*/

var auth = require('./controllers/auth');
var message = require('./controllers/message');
app.use(bodyParser.json()); // to send json data

// add the following headers to allow cross origin requests
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Request-Headers","Content-Type, Authorization");
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();
});

// post data to server and db using api
app.post('/api/message',message.post);

//get all values in messages collection from DB
app.get('/api/message',message.get); // you can try finding values in browser with localhost:5000/api/message

//register component
app.post('/auth/register',auth.register);

//establish connection for mongodb
mongoose.connect("mongodb://localhost:27017/test",function(err,db){
    if(!err){
        console.log("we are connected to mongo");
        //database=db;
        //getMessages(); //once we make connections we will show up all messages
    }
});

var server = app.listen(5000,function(){
    console.log('listening on port',server.address().port);
});
