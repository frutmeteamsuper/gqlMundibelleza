const Category= require ("../models/category"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getCategories(status,skip,limit){
   const categories = await Category.find()
   .where({status})
   .skip(skip)
   .limit(limit)  
   .sort({
        name: 'asc'
    })
   ;
   return categories;
}



module.exports={
    getCategories,
};