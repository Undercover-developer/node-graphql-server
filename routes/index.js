const schema = require('../graphql/schema/index')
const resolvers = require('../graphql/resolvers/index')

module.exports = function routes(app, express, graphqlHTTP) {
    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    }))
}