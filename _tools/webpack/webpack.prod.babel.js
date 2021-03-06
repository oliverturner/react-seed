const webpack                       = require('webpack')
const ExtractTextPlugin             = require('extract-text-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const OfflinePlugin                 = require('offline-plugin')
const FaviconsWebpackPlugin         = require('favicons-webpack-plugin')
const StaticSiteGeneratorPlugin     = require('static-site-generator-webpack-plugin')

const config  = require('./config')
const pkg     = require('../../package.json')
const palette = require('../../src/styles/variables').palette

module.exports = config({
  production: true,
  devtool:    'source-map',

  entry: {
    app: ['./src/index.jsx']
  },

  output: {
    path:          './dist',
    publicPath:    '',
    filename:      '[name].js',
    libraryTarget: 'umd' // required by StaticSiteGeneratorPlugin
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

    new LodashModuleReplacementPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),

    new ExtractTextPlugin('[name].css'),

    new FaviconsWebpackPlugin({
      logo:       './src/assets/images/logo.png',
      prefix:     'icons/',
      background: palette.primary
    }),

    new StaticSiteGeneratorPlugin('app', ['/'], {title: pkg.description}),

    // Listen for updates to resources
    new OfflinePlugin({
      caches: {
        main:     ['/', '/app.css', '/app.js'],
        optional: ['icons/*']
      },

      AppCache: false,

      ServiceWorker: {
        events: true
      }
    })
  ]
})
