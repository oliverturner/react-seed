module.exports = {
  parser: 'babel-eslint',

  extends: ['standard', 'standard-react'],

  env: {
    browser: true,
    node:    true,
    es6:     true
  },

  plugins: ['flowtype', 'import', 'react', 'jsx-a11y'],

  parserOptions: {
    ecmaVersion:  6,
    sourceType:   'module',
    ecmaFeatures: {jsx: true}
  },

  globals: {
    define:     true,
    describe:   true,
    assert:     true,
    expect:     true,
    it:         true,
    beforeEach: true,
    afterEach:  true
  },

  rules: {
    'brace-style':     [2, 'stroustrup', {allowSingleLine: true}],
    'key-spacing':     [2, {align: 'value'}],
    indent:            [2, 2, {SwitchCase: 1}],
    'jsx-quotes':      [2, 'prefer-double'],
    'no-multi-spaces': 0,
    'spaced-comment':  [2, 'always', {exceptions: ['-', '*']}],

    'flowtype/require-parameter-type':  [2, {'excludeArrowFunctions': 'expressionsOnly'}],
    'flowtype/require-return-type':     [1, 'always', {'annotateUndefined': 'never'}],
    'flowtype/space-after-type-colon':  [1, 'always'],
    'flowtype/space-before-type-colon': [1, 'never'],
    'flowtype/define-flow-type':        1,
    'flowtype/use-flow-type':           1,

    'jsx-a11y/href-no-hash':                 2,
    'jsx-a11y/label-has-for':                2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props':     2,
    'jsx-a11y/aria-props':                   2,

    'react/no-danger': 0,
    'react/sort-comp': [
      2, {
        order:  [
          'static-methods',
          'lifecycle',
          'everything-else',
          'rendering'
        ],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],

    'standard/object-curly-even-spacing': 0
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
