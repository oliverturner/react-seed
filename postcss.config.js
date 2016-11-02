const variables = require('./src/styles/variables')

module.exports = (ctx) => ({
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables:       variables.palette,
          preserve:        true,
          appendVariables: true
        },

        customMedia: {
          extensions: variables.breakpoints
        }
      }
    },

    'postcss-focus': {}
  }
})
