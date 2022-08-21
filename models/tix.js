const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const TixSchema= Schema({
    origin:{
        type:String,
        require:true,
    },
    destin:{
        type:String,
        require:true,
    },
    client:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    distance:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    amount:{
        type:String,
        trim:true,
    },
    status:{
        type:String,
        trim:true,
    },
    rateType:{
        type:String,
        trim:true,
    }, 
    currency:{
        type:String,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    
})
module.exports=mongoose.model("Tix",TixSchema);