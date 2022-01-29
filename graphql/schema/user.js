const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
})

const RootQuery = {
    users: {
        type: GraphQLList(UserType)
    },
    user: {
        type: UserType,
        args: {
            _id: {
                type: GraphQLNonNull(GraphQLID)
            }
        }
    }
}

const Mutation = {
    createUser: {
        type: UserType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            age: {
                type: new GraphQLNonNull(GraphQLInt)
            },
        }
    }
}
module.exports = {
    UserQuery: RootQuery,
    UserMutation: Mutation
}