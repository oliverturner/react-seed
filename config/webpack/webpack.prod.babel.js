const webpack                       = require('webpack')
const ExtractTextPlugin             = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin             = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin                 = require('offline-plugin')

const config = require('./config')
const pkg    = require('../../package.json')

module.exports = config({
  production: true,

  localIdentName: '[hash:base64]',

  output: {
    path:       './dist',
    publicPath: '',
    filename:   'app.[hash].js'
  },

  plugins: [
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.[hash].css'),
    new HtmlWebpackPlugin({
      production: true,
      title:      pkg.description,
      name:       pkg.name,
      template:   './config/template.html'
    }),
    new OfflinePlugin({
      caches: {
        main: ['index.html', 'app.*.css', 'app.*.js']
      },

      AppCache: false,

      ServiceWorker: {
        scope: `/${pkg.name}/`
      }
    })
  ]
})
