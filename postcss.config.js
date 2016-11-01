module.exports = (ctx) => ({
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables:       {
            "tintGradientTop":    "lemonchiffon",
            "tintGradientBottom": "aquamarine",
            "tintText":           "mediumaquamarine"
          },
          preserve:        true,
          appendVariables: true
        },
        customMedia: {
          extensions: {
            "break-med":   '(min-width: 768px)',
            "break-large": '(min-width: 960px)'
          }
        }
      }
    },
    'postcss-focus':   {}
  }
})
