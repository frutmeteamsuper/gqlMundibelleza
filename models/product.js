const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const ProductSchema= Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    ref:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    presentation:{
        type:String,
        trim:true,
    },
    status:{
        type:String,
        trim:true,
    },
    category:{
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
module.exports=mongoose.model("Product",ProductSchema);