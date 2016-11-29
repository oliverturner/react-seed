const path       = require('path')
const HtmlPlugin = require('html-webpack-plugin')

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
    new HtmlPlugin({
      title:    pkg.description,
      template: '_tools/template.html'
    })
  ]
})

module.exports = webpackConfig
