import HtmlWebpackPlugin from 'html-webpack-plugin'
import pcssReporter      from 'postcss-reporter'

import config from './config'
import pkg from '../../package.json'

export default config({
  devtool: 'eval',

  entry: ['react-hot-loader/patch'],

  output: {
    path:       './public',
    publicPath: '/',
    filename:   'app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:    pkg.description,
      template: './config/tmplate.html'
    })
  ],

  postcss: {
    localIdent: '[path]-[local]-[hash:base64:5]',
    plugins:    [
      pcssReporter({clearMessages: true})
    ]
  }
})
