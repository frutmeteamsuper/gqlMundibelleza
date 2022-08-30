const userController= require("../controllers/user");
const travelController= require("../controllers/travel");
const tixController= require("../controllers/tix");
const productController= require("../controllers/product");
const categoryController= require("../controllers/category");
const { NoUnusedVariablesRule } = require("graphql");
const resolvers = {
	Query:{
		getUser:()=>{
			console.log("Obteniendo usuario");
			return null;
		},
		getProduct:()=>{
			console.log("Obteniendo producto");
			return null;
		},
		getProductsByStatus: (_,{status,skip,limit}) =>productController.getProductsByStatus(status,skip,limit),
		getBestseller: (_,{bestseller,skip,limit}) =>productController.getBestseller(bestseller,skip,limit),
		getDiscount: (_,{discount,skip,limit}) =>productController.getDiscount(discount,skip,limit),
		
		getCategories: (_,{status,skip,limit}) =>categoryController.getCategories(status,skip,limit),
		getTravelsByStatus: (_,{status}) =>travelController.getTravelsByStatus(status),
		getTixsByStatus: (_,{status}) =>tixController.getTixsByStatus(status),
	},
	Mutation:{
		//user 
		newProduct:(_,{input})=> productController.newProduct(input),
		newTix:(_,{input})=> tixController.newTix(input),
		newTravel:(_,{input})=> travelController.newTravel(input),
		register:(_,{input})=> userController.register(input),
		login:(_,{input})=> userController.login(input),
	},
}


module.exports= resolvers;	