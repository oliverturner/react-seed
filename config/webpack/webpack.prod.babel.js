const webpack                       = require('webpack')
const ExtractTextPlugin             = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin             = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin                 = require('offline-plugin')

const config = require('./config')
const pkg    = require('../../package.json')

module.exports = config({
  postcssOpts: {
    localIdent: null
  },

  production: true,
  devtool:    'source-map',

  output: {
    path:       './dist',
    publicPath: '',
    filename:   '[name].[hash].js'
  },

  resolve: {
    alias: {
      react:       'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  plugins: [
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // Uncomment for multi-chunk apps
    /*
     new webpack.optimize.CommonsChunkPlugin({
     name:      'commons',
     minChunks: Infinity
     },
     */
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      production: true,
      title:      pkg.description,
      name:       pkg.name,
      template:   './config/template.html'
    }),
    new OfflinePlugin({
      // caches: {
      //   main: ['app.*.css', 'app.*.js']
      // },

      AppCache: false,

      ServiceWorker: {
        events: true,
        scope:  `/${pkg.name}/`
      }
    })
  ]
})
