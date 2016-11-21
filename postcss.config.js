const props = require('./src/styles/variables')

module.exports = () => ({
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables:       props.palette,
          preserve:        true,
          appendVariables: true
        },

        customMedia: {
          extensions: props.breakpoints
        }
      }
    },

    'postcss-focus': {}
  }
})
