const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')
const pkg    = require('../../package.json')

const webpackConfig = config({
  devtool: 'eval',

  entry: {
    app: ['react-hot-loader/patch', './src/index.jsx']
  },

  output: {
    path:       path.join(process.cwd(), 'public'),
    publicPath: '/',
    filename:   'app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:    pkg.description,
      template: './config/template.html'
    })
  ]
})

module.exports = webpackConfig
