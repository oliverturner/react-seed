const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const appRoot = path.join(__dirname, '../../')

function makeConfig ({
  preEntries = [],
  plugins = [],
  resolve = {},
  output,
  devtool,
  postcssOpts
}) {
  const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

  const cssLoaderOpts = {
    modules:        true,
    sourceMap:      true,
    localIdentName: postcssOpts.localIdent,
    importLoaders:  1
  }

  const pcssRules = {
    development: {
      test: /\.(css|pcss)$/,
      use:  [
        {loader: 'style-loader'},
        {loader: 'css-loader', options: cssLoaderOpts},
        {loader: 'postcss-loader'}
      ]
    },

    production: {
      test:   /\.(css|pcss)$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader:         [
          // TODO: restore this once ExtractTextPlugin is updated
          // {loader: 'css-loader', options: cssLoaderOpts},
          {loader: 'css-loader', query: cssLoaderOpts},
          {loader: 'postcss-loader'}
        ]
      })
    }
  }

  return {
    devtool,
    output,
    plugins: [new webpack.NamedModulesPlugin(), ...plugins],

    entry: {
      app: [
        ...preEntries,
        './src/index.jsx'
      ]
    },

    resolve: Object.assign({}, {
      modules:    ['node_modules', 'src'],
      extensions: ['.js', '.jsx']
    }, resolve),

    module: {
      rules: [
        {
          test:    /\.jsx?$/,
          loader:  'babel-loader',
          include: [
            path.join(appRoot, 'src'),
            path.join(appRoot, 'node_modules/preact-compat')
          ]
        },
        {
          test:   /\.json$/,
          loader: 'json-loader'
        },
        {
          test:   /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test:   /\.jpg$/,
          loader: 'url-loader?limit=100000&mimetype=image/jpg'
        },
        {
          test:   /\.png$/,
          loader: 'url-loader?limit=100000&mimetype=image/png'
        },
        {
          test:   /\.gif$/,
          loader: 'url-loader?limit=100000&mimetype=image/gif'
        }
      ].concat(pcssRules[env])
    },

    devServer: {
      noInfo:      true,
      port:        4000,
      contentBase: './public'
    }
  }
}

module.exports = makeConfig
