const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configure = require('./config')
const pkg = require('../../package.json')

const config = {
  devtool: 'eval',

  preEntries: ['react-hot-loader/patch'],

  output: {
    path:       path.join(process.cwd(), 'public'),
    publicPath: '/',
    filename:   'app.js'
  },

  moduleRules: [
    {
      test: /\.(css|pcss)$/,
      use:  [
        'style',
        {
          loader:  'css',
          options: {
            module:         true,
            sourceMap:      true,
            localIdentName: '[path]-[local]',
            importLoaders:  1
          }
        },
        'postcss'
      ]
    }
  ],

  plugins: [
    new HtmlWebpackPlugin({
      title:    pkg.description,
      template: './config/template.html'
    })
  ]
}

module.exports = configure(config)
