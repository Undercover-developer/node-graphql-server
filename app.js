const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const config = require('./configurations/config')
const mongoDbConnection = require('./configurations/dbConnection')
const routes = require('./routes/index')
const cors = require('cors')

app.use(cors())
mongoDbConnection(mongoose, config, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).connectToMongo()

routes(app, express, graphqlHTTP)

app.listen(config.PORT, ()=>{
    console.log(`Server started on ${config.PORT} ⚓` )
})