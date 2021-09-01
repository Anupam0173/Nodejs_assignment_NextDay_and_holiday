const express=require('express');
const router = express.Router();
const LogDetails = require('../models/logs');
var moment = require('moment-holiday');
moment.modifyHolidays.set('India')


//GET    http://127.0.0.1:3000/day
router.get('/day',(req,res,next)=>{
    LogDetails.find(function(err,logs)
    {
        if(err)
        {
            res.json({"msg":"failed to fetch data"});
        }
        else
        {
            //Here we are sending the data.
            res.json(logs);
        } 
        
    })
});


//POST    http://127.0.0.1:3000/day
router.post('/day',(req,res,next)=>
{   
    var nextDate = req.body.date;
    do{
        nextDate = new Date(nextDate);
        nextDate.setDate(nextDate.getDate() + 1);

        var options = { weekday: 'long'};
        nextDay = new Intl.DateTimeFormat('en-US', options).format(nextDate);
    }while(nextDay == 'Sunday' || nextDay == 'Saturday' || moment(nextDate).isHoliday()!=false);
    
    let newLogDetail=new LogDetails(
        {
            inputIso:req.body.date,
            outputDay:nextDay,
            outputDate:nextDate.toISOString(),
            queryTimestamp:new Date(),
        }
    );
    
    newLogDetail.save((err,logdetails)=>{
        if(err)
        {
            res.json({"msg":"failed to save timestamp"});
        }
        else
        {
            //Here we are saving the data.
            res.json([{"Day":nextDay},
                     {"Date":nextDate}]);
        }
    });
    
});

module.exports=router;


