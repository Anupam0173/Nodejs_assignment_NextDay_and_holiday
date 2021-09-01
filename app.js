var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var app=express();

//All Api url
const route=require('./routes/route');


// connection to database
mongoose.connect('mongodb://localhost:27017/nextDay');
mongoose.connection.on('connected',()=>{
    console.log("connected to the database");
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log("errror in conection ,"+err);
    }
    else
    {console.log("error in the db connection.....");}
 
})
//port no
const port=3000;

//body parser for sending & recieving the data in json format
app.use(bodyparser.json());

// routes
app.use('/',route);


// testing server
app.get('/',(req,res)=>{
    res.send("foobar");
});

app.listen(port,()=>{
    console.log("server started at port:"+port);
});


