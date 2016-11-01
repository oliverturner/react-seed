module.exports = {
  'extends': [
    'stylelint-config-standard'
  ],

  'rules': {
    'at-rule-empty-line-before': [
      'always', {
        'except': [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        'ignore': [
          'all-nested',
          'after-comment'
        ]
      }
    ],

    'declaration-block-properties-order': [
      {
        'order':      'strict',
        'properties': [
          '@include',
          'content',
          'flex',
          'order',
          'display',
          'flex-wrap',
          'flex-direction',
          'visibility',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'float',
          'clear',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'padding',
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-style',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius'
        ]
      },
      {
        'order':      'flexible',
        'properties': [
          'font',
          'line-height',
          'word-spacing',
          'letter-spacing',
          'text',
          'white-space',
          'columns',
          'column',
          'vertical-align',
          'cursor',
          'opacity'
        ]
      },
      {
        'order':      'strict',
        'properties': [
          'background',
          'color',
          'z-index'
        ]
      }
    ],

    'declaration-colon-space-before':       null,
    'declaration-colon-space-after':        null,
    'declaration-empty-line-before':        null,
    'declaration-property-value-blacklist': {'/^border/': ['0']},

    'property-no-unknown': [true, {'ignoreProperties': ['composes']}],

    'selector-class-pattern':      ['^[a-z_-]+$', {'resolveNestedSelectors': true}],
    'selector-nested-pattern':     '^(?!&_)',
    'selector-no-id':              true,
    'selector-no-qualifying-type': true,

    'value-list-max-empty-lines': 1
  }
}
