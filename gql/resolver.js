const userController= require("../controllers/user");
const travelController= require("../controllers/travel");
const tixController= require("../controllers/tix");
const { NoUnusedVariablesRule } = require("graphql");
const resolvers = {
	Query:{
		getUser:()=>{
			console.log("Obteniendo usuario");
			return null;
		},
		getTravelsByStatus: (_,{status}) =>travelController.getTravelsByStatus(status),
		getTixsByStatus: (_,{status}) =>tixController.getTixsByStatus(status),
	},
	Mutation:{
		//user 
		newTix:(_,{input})=> tixController.newTix(input),
		newTravel:(_,{input})=> travelController.newTravel(input),
		register:(_,{input})=> userController.register(input),
		login:(_,{input})=> userController.login(input),
	},
}


module.exports= resolvers;	