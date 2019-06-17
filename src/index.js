import { GraphQLServer } from "graphql-yoga";

//Type Definitions(schema)
const typeDefs = `
    type Query {
        greeting(name:String): String!
        me: User!
        post: Post!
    }

    type User{
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post{
        title: String!
    }
`;

//Resolvers
const resolvers = {
	Query: {
		me() {
			return {
				id: "123098",
				name: "mike",
				email: "email@example.com",
				age: 28
			};
		},
		post() {
			return {
				title: "Hello"
			};
		},
		greeting(parent, args, ctx, info) {
			console.log(args.name);
			return "Hello";
		}
	}
};

const server = new GraphQLServer({
	typeDefs,
	resolvers
});

server.start(() => {
	console.log("Server is running");
});
