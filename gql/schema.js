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
	}
	
	type Mutation {
		newTravel(input:TravelInput):Travel
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