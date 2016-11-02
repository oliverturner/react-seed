const path    = require('path')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
//
// const cssVars = require('../../src/styles/variables')
//
// const extractForProduction = (loaders) =>
//   ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')))

// const postCssDefaults = {
//   plugins:    [],
//   localIdent: '',
//   nextOpts:   {
//     features: {
//       customProperties: {
//         variables: cssVars
//       }
//     }
//   }
// }

function makeConfig ({
  externals = {},
  preEntries = [],
  plugins = [],
  output,
  devtool,
  moduleRules
}) {
  return {
    devtool,
    output,
    externals,
    plugins: [
      new webpack.NamedModulesPlugin(),
      ...plugins
    ],

    entry: {
      app: [
        ...preEntries,
        './src/index.js'
      ]
    },

    module: {
      rules: [
        ...moduleRules,
        {
          test:    /\.jsx?$/,
          loader:  'babel',
          include: path.join(process.cwd(), 'src')
        },
        {
          test: /\.css$/,
          use:  [
            'style',
            {
              loader:  'css',
              options: {importLoaders: 1}
            },
            'postcss'
          ]
        },
        {
          test:   /\.json$/,
          loader: 'json'
        },
        {
          test:   /\.svg$/,
          loader: 'svg-inline'
        },
        {
          test:   /\.jpg$/,
          loader: 'url?limit=100000&mimetype=image/jpg'
        },
        {
          test:   /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png'
        },
        {
          test:   /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif'
        }
      ]
    },

    resolve: {
      modules:    ['node_modules', 'src'],
      extensions: ['.js', '.jsx']
    },

    devServer: {
      noInfo:      true,
      port:        4000,
      contentBase: './public'
    }
  }
}

module.exports = makeConfig
