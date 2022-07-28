const Product= require ("../models/product"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getProductsByStatus(status){
   const products = await Product.find()
   .where({status})
   .sort({createdAt: -1})
   ;
   return products;
}

async function newProduct(input){
    const newProduct = input;
    const { 
        name, 
        description, 
        price, 
        ref,
        presentation, 
        category, 
        currency, 
        status
    }=newProduct;

    try{
        const product = new Product(newProduct);
        product.save();
        return product; 
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    newProduct,
    getProductsByStatus,
};