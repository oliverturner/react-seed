const props = require('./src/styles/variables')

module.exports = () => ({
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables:       props.palette,
          preserve:        'computed',
          // appendVariables: true
        },

        customMedia: {
          extensions: props.breakpoints
        }
      }
    },

    'postcss-focus': {}
  }
})
