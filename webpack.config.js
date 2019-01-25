const webpack = require('webpack')
const path = require('path')
const isDevelpoment = process.env.NODE_ENV !== 'production'

const srcEntryPoint = path.resolve(__dirname, 'client/index.tsx')

module.exports = {
  mode: isDevelpoment ? 'development' : 'production',
  devtool: isDevelpoment ? 'inline-source-map' : 'none',
  entry: isDevelpoment
    ? ['webpack-hot-middleware/client', srcEntryPoint]
    : srcEntryPoint,
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/, loader: 'source-map-loader',
        exclude: [
          /zen-observable/,
          /apollo-cache-inmemory/,
          /apollo-link/,
          /apollo-client/
        ]
      }
    ]
  },
  plugins: isDevelpoment
    ? [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
    : [],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
};