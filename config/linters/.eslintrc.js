const extensions = {
  css:  'always',
  pcss: 'always',
  json: 'always'
}

module.exports = {
  env: {
    "browser": true
  },

  extends: "airbnb",

  rules: {
    'arrow-parens':         [2, 'always'],
    semi:                   [2, 'never'],
    'comma-dangle':         0,
    'key-spacing':          [2, {align: 'value'}],
    'no-multi-spaces':      0,
    'object-curly-spacing': [2, 'never'],

    'import/extensions':                 [2, 'never', extensions],
    'import/no-extraneous-dependencies': 0
  },

  settings: {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    },

    'import/resolver': {
      webpack: {
        config: './config/webpack/webpack.dev.babel.js'
      }
    }
  }
}
