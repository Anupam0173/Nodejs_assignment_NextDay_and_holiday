# Nodejs_assignment_NextDay_and_holiday

below i have pasted the note which i have made while developing this api



------------------------------------------nextDay project-------------------------------------------

npm init					---------------->for package.json
npm install express --save			----------------->It is the most popular framework
npm install ejs --save				----------------->template engine
npm install body-parser --save               ------------------>node js middleware,used for geting the body data in express.js
npm install mongoose --save			---------------->used for db connectivity with node js
npm install nodemon				---------------->enable the changes automatically 

var path=require('path');            ---------------------->Extract the filename from a file path:
The Path module provides a way of working with directories and file paths.

----------------------------------------------playing with dates-----------------------------------------------------
> foo = new Date("2012-07-14T01:00:00+01:00")---------------->Sat, 14 Jul 2012 00:00:00 GMT
> foo.toTimeString()--------------------------->'17:00:00 GMT-0700 (MST)'
// Note that getHours() and getMinutes() do not include leading 0s for single digit #s
ISODate("2012-07-14T01:00:00+01:00").getHours()
ISODate("2012-07-14T01:00:00+01:00").getMinutes()

var isoDate = new Date('2013-03-10T02:00:00Z').toISOString()------------------------>will convert any date in iso format



-------------------------------------------------main logic of fetching day----------------------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

var ISODate = '2021-08-26T00:00:00.000Z';
console.log(ISODate);
var date = new Date(ISODate);             //gives the ist(indian standard time)
console.log(date);
var options = { weekday: 'long'};
//var options = { weekday: 'short'}; 
console.log(options);
console.log(options);
console.log(new Intl.DateTimeFormat('en-US', options).format(date))

-------------------------------------------------------------------------------------------
Intl is the library.


-------------------------------------------------post request api--------------------------------------
http://127.0.0.1:3000/day
below data will be passed as a input in post request   ------------->>in the body in json form
{
    "date":"2021-08-25T00:00:00.000Z"
}


Get request url---------------------------------->http://127.0.0.1:3000/day

-------------------------------converstion from IST(indian standard time) to iso--------------------------------
var test = new Date()
console.log(test);
console.log(test.toISOString());




-------------------public holiday link and resources which was not usefulll while development---------------------------
# NPM
npm install --save holidayapi
not able to implement --------------->https://github.com/holidayapi/holidayapi-node

not supported for india-------------------------->https://www.npmjs.com/package/date-holidays
const LogDetails = require('../models/logs');
hd.isHoliday(nextDate)



==================================Main of national holiday==================================================
moment holiday working ======================>>https://www.npmjs.com/package/moment-holiday#isholiday
moment   ------------>>https://github.com/wonder2991/moment-holiday#global-parameters

author provjilf----------->>https://github.com/wonder2991

moment-js code for india--------------->https://github.com/kodie/moment-holiday/blob/HEAD/locale/india.js

we can add holiday as per our requirement requirement in moment js:
go-->project folder--->node_modules--->moment-holiday--->locale--->india.js. (we can add holiday as per our own requirement also).


{
    "date":"2021-01-25T00:00:00.000Z"
}
26 january and 1 january
{
    "date":"2020-12-31T00:00:00.000Z"
}


for fill the port it is the solution when we get an error that this port is already in use-------------->npx kill-port 3000
where 3000 is the port no which i want to kill.

alternate solution of port is already in use:
var port = process.env.PORT||3000;
