const theme = {
  primary:   'aquamarine',
  secondary: 'lemonchiffon',
  text:      'mediumaquamarine'
}

module.exports = {
  palette: Object.assign({}, theme, {
    tintGradientTop:    theme.secondary,
    tintGradientBottom: theme.primary,
    tintText:           theme.text
  }),

  breakpoints: {
    'break-med':   '(min-width: 768px)',
    'break-large': '(min-width: 960px)'
  }
}
