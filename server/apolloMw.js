const { ApolloServer, gql } = require('apollo-server-express')

const fakeData = require('../data/fakeData.json')

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

module.exports = app => server.applyMiddleware({ app })