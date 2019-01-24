const process = require('process')

const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const fakeData = require('../data/fakeData.json')

const { PORT } = require('./constants')

const isDevelpoment = process.env.NODE_ENV !== 'production'

// Handle uncaught promise rejections & exceptions
process.on('unhandledRejection', (reason, p) => { throw reason })
process.on('uncaughtException', (error) => {
  console.error('Exception received:', error.toString())
  process.exitCode = 1
})

// Fast Apollo setup
const typeDefs = gql`
  type Item {
    id: ID!
    civility: String!
    country: String!
    firstName: String!
    lastName: String!
  }
  type Query {
    items: [Item]
  }
`
const resolvers = {
  Query: {
    items: () => fakeData
  }
}
const server = new ApolloServer({ typeDefs, resolvers })

// Express setup
const app = express()
app.use(express.static('public'))
server.applyMiddleware({ app })
if (isDevelpoment) {
  const webpackMw = require('./webpackMw')
  webpackMw(app)
}
app.listen({ port: PORT }, () => {
  console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`)
})
