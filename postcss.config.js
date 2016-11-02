const features = require('./src/styles/variables')

module.exports = () => ({
  plugins: {
    'postcss-cssnext': {features},
    'postcss-focus':   {}
  }
})

