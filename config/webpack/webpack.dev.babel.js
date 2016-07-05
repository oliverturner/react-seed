import HtmlWebpackPlugin from 'html-webpack-plugin'
import pcssReporter      from 'postcss-reporter'

import config from './config'
import pkg from '../../package.json'

export default config({
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
      pcssReporter({clearMessages: true})
    ]
  }
})
