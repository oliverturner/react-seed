const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')
const pkg    = require('../../package.json')

const webpackConfig = config({
  postcssOpts: {
    localIdent: '[path]-[local]'
  },

  devtool: 'eval',

  preEntries: ['react-hot-loader/patch'],

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
