const path              = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pcssCssNext       = require('postcss-cssnext')

const cssVars = require('../../src/styles/variables')

const extractForProduction = (loaders) =>
  ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')))

const postCssDefaults = {
  plugins:    [],
  localIdent: '',
  nextOpts:   {
    features: {
      customProperties: {
        variables: cssVars
      }
    }
  }
}

function makeConfig ({
  production,
  externals = {},
  preEntries = [],
  plugins = [],
  preloaders = [],
  postcss = [],
  loaders,
  output,
  devtool,
  postcssOpts
}) {
  postcssOpts = Object.assign({}, postCssDefaults, postcssOpts)

  let cssLoaders  = 'style!css!postcss'
  let pcssLoaders = `style!css?module&localIdentName=${postcssOpts.localIdent}!postcss`

  if (production) {
    pcssLoaders = extractForProduction(pcssLoaders)
  }

  return {
    devtool,
    output,
    externals,
    plugins,

    entry: [
      ...preEntries,
      './src/index.js'
    ],

    debug: !production,

    module: {
      preloaders,

      loaders: loaders || [
        {
          test:    /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(process.cwd(), 'src')
        },
        {
          test:   /\.css$/,
          loader: cssLoaders
        },
        {
          test:   /\.pcss$/,
          loader: pcssLoaders
        },
        {
          test:   /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png'
        },
        {
          test:   /\.svg$/,
          loader: 'svg-inline'
        },
        {
          test:   /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif'
        },
        {
          test:   /\.jpg$/,
          loader: 'file'
        }
      ]
    },

    resolve: {
      modules:    ['src', 'node_modules'],
      extensions: ['', '.js', '.jsx']
    },

    postcss: () => [
      pcssCssNext(postcssOpts.nextOpts)
    ].concat(postcssOpts.plugins),

    devServer: {
      noInfo:      true,
      port:        4000,
      contentBase: './public'
    }
  }
}

module.exports = makeConfig
