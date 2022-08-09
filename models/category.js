const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const CategorySchema= Schema({
    name:{
        type:String,
        require:true,
    },  
    idcategory:{
        type:String,
        trim:true,
    },
    status:{
        type:String,
        trim:true,
    },   
    subs:{}
})
module.exports=mongoose.model("Category",CategorySchema);