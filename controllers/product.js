const Product= require ("../models/product"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getProductsByStatus(status,skip,limit){
   const products = await Product.find()
   .where({status})
   .skip(skip)
   .limit(limit)  
   .sort({
        name: 'asc'
    })
   ;
   return products;
}

async function getBestseller(bestseller,skip,limit){
    const products = await Product.find()
    .where({bestseller})
    .skip(skip)
    .limit(limit)  
    .sort({
         name: 'asc'
     })
    ;
    return products;
 }
 async function getDiscount(discount,skip,limit){
    const products = await Product.find()
    .where({discount})
    .skip(skip)
    .limit(limit)  
    .sort({
         name: 'asc'
     })
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
        status,
        discount,
        bestseller,
        images
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
    getBestseller,
    getDiscount,
};
