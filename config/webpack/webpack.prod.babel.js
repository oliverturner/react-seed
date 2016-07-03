import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

import config from './config'
import pkg from '../../package.json'

export default config({
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
      title:      pkg.description,
      template:   './config/tmplate.html',
      production: true
    }),
    new OfflinePlugin()
  ]
})
