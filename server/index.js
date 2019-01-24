const process = require('process')

const express = require('express')

const apolloMw = require('./apolloMw')
const { PORT } = require('./constants')

const isDevelpoment = process.env.NODE_ENV !== 'production'

// Handle uncaught promise rejections & exceptions
process.on('unhandledRejection', (reason, p) => { throw reason })
process.on('uncaughtException', (error) => {
  console.error('Exception received:', error.toString())
  process.exitCode = 1
})

// Express setup
const app = express()
app.use(express.static('public'))
if (isDevelpoment) {
  const webpackMw = require('./webpackMw')
  webpackMw(app)
}
apolloMw(app)
app.listen({ port: PORT }, () => {
  console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`)
})
