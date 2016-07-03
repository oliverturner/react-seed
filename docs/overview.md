## General

- include a .npmrc file in the root of your project:

  ```save-exact=true```

- But... try to keep the project root as free of config clutter as possible
  - Integrate Babel config into package.json
  - Other options - Karma, Linting, etc - should live in `/config`
- Use Husky to create pre-commit hooks to run linters & tests

## Babel

### Production
- Use `babel-preset-react-optimize`
- Use `babel-plugin-lodash` to optimise lodash imports from dependencies

## Webpack

- Use per-env configs
  - dev
  - prod
  - test
- Use `webpack.{env}.babel.js` for automatic ES6 support
- Use `modulesDirectories` to set resolve base
  - Use `NODE_PATH` for SSR

## React

- Use `react-hot-loader@3`
- Use - and learn! - Immutable, esp. Immutable.Record
- Consider using Normalizr to flatten JSON from remote APIs: flatter === better

## Flux

- Use Redux
  - Plugins:
    - `redux-thunk`
    - `redux-form`
  - Tools:
    - Redux Chrome plugin
- Group actions, reducers, constants by feature/page
- Use Reselect to memoise data-wrangling computations: filtering, sorting, etc.

## Styling

- Use co-located styles
- Use global styles for layout & "dumb" components
- Use "local-by-default" modules for "smart" components ("containers")
- Reset: Sanitize.css

### PostCSS
Plugins:
  - postcss-cssnext
  - postcss-focus
  - Dev:
    - postcss-reporter

## Testing

- Tools:
  - Runner: Karma
  - Shallow: Enzyme
  - Unit: Mocha + Chai
  - Integration: Nightwatch
- Rewire is amazing :)

- Patterns
  - {component}/__tests__

## Server

- Framework: Hapi + Manifest
- Views:
  - Current: Swig
  - Next: PostHtml

## Linting

### JS
- Use either
  - Standard
  - AirBnB
- Plugins:
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react

### CSS
- Use Stylelint + stylelint-config-standard

## Miscellaneous

- Windows compat
  - npm-run-all
  - cross-env
  - `locahost` not `0.0.0.0`
