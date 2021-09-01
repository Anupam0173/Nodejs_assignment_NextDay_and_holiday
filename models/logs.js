const mongoose=require('mongoose');

const LogSchema=mongoose.Schema(
{
    inputIso:{
        type:String,
        required:true
    },
    outputDay:{
        type:String,
        required:true
    },
    outputDate:{
        type:String,
        required:true
    },
    queryTimestamp:
    {
        type:String,
        required:true
    }
});
module.exports=mongoose.model('LogDetails',LogSchema);