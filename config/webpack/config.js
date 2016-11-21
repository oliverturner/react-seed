const path    = require('path')
const webpack = require('webpack')

function makeConfig ({
  externals = {},
  preEntries = [],
  plugins = [],
  resolve = {},
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
        {
          test:    /\.jsx?$/,
          loader:  'babel',
          include: path.join(process.cwd(), 'src')
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
        },
        ...moduleRules
      ]
    },

    resolve: Object.assign({}, {
      modules:    ['node_modules', 'src'],
      extensions: ['.js', '.jsx']
    }, resolve),

    devServer: {
      noInfo:      true,
      port:        4000,
      contentBase: './public'
    }
  }
}

module.exports = makeConfig
