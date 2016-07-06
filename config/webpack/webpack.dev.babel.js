const HtmlWebpackPlugin   = require('html-webpack-plugin')
const pcssReporter        = require('postcss-reporter')
const pcssBrowserReporter = require('postcss-browser-reporter')

const config = require('./config')
const pkg    = require('../../package.json')

module.exports = config({
  devtool: 'eval',

  preEntries: ['react-hot-loader/patch'],

  output: {
    path:       './public',
    publicPath: '/',
    filename:   'app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:    pkg.description,
      template: './config/template.html'
    })
  ],

  postcssOpts: {
    localIdent: '[path]-[local]',
    plugins:    [
      pcssReporter({clearMessages: true}),
      pcssBrowserReporter()
    ]
  }
})
