const userController= require("../controllers/user");
const travelController= require("../controllers/travel");
const { NoUnusedVariablesRule } = require("graphql");
const resolvers = {
	Query:{
		getUser:()=>{
			console.log("Obteniendo usuario");
			return null;
		},
		getTravelsByStatus: (_,{status}) =>travelController.getTravelsByStatus(status),
	},
	Mutation:{
		//user 
		newTravel:(_,{input})=> travelController.newTravel(input),
		register:(_,{input})=> userController.register(input),
		login:(_,{input})=> userController.login(input),
	},
}


module.exports= resolvers;	