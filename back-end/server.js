var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var database;

var Message = mongoose.model('Message',{  //schema creation
    msg:String
});

app.use(bodyParser.json()); // to send json data

// add the following headers to allow cross origin requests
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Request-Headers","Content-Type, Authorization");
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();
});

// post data to server and db using api
app.post('/api/message',function(req,res){
    console.log(req.body);
   // database.collection('messages').insertOne(req.body);
    var message = new Message(req.body); //instantiate and assign to a local variable
    message.save(); // mongoose will save values to db
    res.status(200);
});

//get all values in messages collection from DB
app.get('/api/message',getMessages); // you can try finding values in browser with localhost:5000/api/message

// retrieve all values from testdb->messages collection
function getMessages(req,res){
    Message.find({}).exec(function(err,result){
        res.send(result);
    })
}
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
