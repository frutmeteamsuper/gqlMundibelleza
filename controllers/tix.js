const Tix= require ("../models/tix"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getTixsByStatus(status){
   const tixs = await Tix.find()
   .where({status})
   .sort({createdAt: -1})
   ;
   return tixs;
}

async function newTix(input){
    const newTix = input;
    const { 
        client, 
        destin, 
        rorigin, 
        amount,
        distance, 
        rateType, 
        currency, 
        status
    }=newTravel;

    try{
        const tix = new Tix(newTix);
        tix.save();
        return tix; 
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    newTix,
    getTixsByStatus,
};