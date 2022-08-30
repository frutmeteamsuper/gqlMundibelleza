const {gql} = require("apollo-server");
const typeDefs = gql`
	type Travel {
		id: ID
		client: String
		origin: String
		destin: String
		distance : String
		amount :  String
		createdAt: String
		status: String
		rateType: String
		currency: String
	}	
	type Subs {
		name: String
		idsub: String
		idcategory: String
	}	
	type Category {
		id: ID
		name: String
		idcategory: String
		status: String
		subs: [Subs]
	}		
	type Tix {
		id: ID
		client: String
		origin: String
		destin: String
		distance : String
		amount :  String
		createdAt: String
		status: String
		rateType: String
		currency: String
	
	}		
	type Product {
		id: ID
		name: String
		price: Int
		ref: String 
		description: String
		presentation: Stringquantity
		category: String
		status: String
		currency: String
		discount: Boolean
		bestseller: Boolean
		images:[String]
	}	
	type User {
		id: ID
		name: String
		username: String
		email: String
		sitioweb : String
		description :  String
		password :String
		avatar:String
		createdAt:String
		role: UserRoleEnum!
	}
	type Token{
		token:String
	}
	type Query {
		user(id: ID!): User
		users(role: UserRoleEnum): [User!]!
	  }
	input TravelInput{
		client:String!
		origin:String!
		distance:String!
		destin:String!
		amount:String!
		status:String!
		currency:String!
		rateType:String!
	}
	input ProductInput{
		name:String!
		price:Int!
		ref:String!
		description:String!
		presentation:String!
		category:String!
		status:String!
		currency:String!
		discount:Boolean!
		bestseller:Boolean!
	}
	input TixInput{
		client:String!
		origin:String!
		distance:String!
		destin:String!
		amount:String!
		status:String!
		currency:String!
		rateType:String!
	}
		input UserInput{
		name:String!
		username:String!
		email:String!
		password:String!
		role: UserRoleEnum = ACCOUNTANT
	}
	input LoginInput{
		email:String!
		password:String!
	}	
	type Query {
		# user	
		getUser: User 
		getTravelsByStatus(status:String!): [Travel] 
		getCategories(status:String!,skip:Int,limit:Int): [Category] 
		getTixsByStatus(status:String!): [Tix] 
		getProductsByStatus(status:String!,skip:Int,limit:Int): [Product] 
		getBestseller(bestseller:Boolean!,skip:Int,limit:Int): [Product] 
		getDiscount(discount:Boolean!,skip:Int,limit:Int): [Product] 
	}
	type Mutation {
		newTravel(input:TravelInput):Travel
	}
	type Mutation {
		newProduct(input:ProductInput):Product
	}
	type Mutation {
		newTix(input:TixInput):Tix
	}
	type Mutation {
		register(input:UserInput):User
	}
	type Mutation {
		login(input:LoginInput):Token
	}
	enum UserRoleEnum {
		ADMIN
		ACCOUNTANT
	  }

`;

module.exports=typeDefs;
