const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

const config = require('../webpack.config')

module.exports = (app) => {
  const compiler = webpack(config)
  app.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      noInfo: true,
      publicPath: config.output.publicPath
    })
  )
  app.use(webpackHotMiddleware(compiler))
}