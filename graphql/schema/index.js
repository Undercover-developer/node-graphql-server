const { UserQuery, UserMutation } = require('./user')
const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...UserQuery
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...UserMutation
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})