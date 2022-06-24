const Travel= require ("../models/travel"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getTravelsByStatus(status){
   const travels = await Travel.find()
   .where({status})
   .sort({createdAt: -1})
   ;
   return travels;
}

async function newTravel(input){
    const newTravel = input;
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
        const travel = new Travel(newTravel);
        travel.save();
        return travel; 
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    newTravel,
    getTravelsByStatus,
};