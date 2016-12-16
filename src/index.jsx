import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {AppContainer} from 'react-hot-loader'

import 'sanitize.css/sanitize.css'
import './styles/base.css'

import App from './containers/index'

import template from './template'

if (typeof document !== 'undefined') {
  const renderApp = () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root')
    )
  }

  renderApp()

  if (module.hot) {
    module.hot.accept('./containers/index', renderApp)
  }

  if (process.env.NODE_ENV === 'production') {
    require('./offline') // eslint-disable-line
  }
}

export default (locals, callback) =>
  Promise.resolve()
    .then(() => {
      callback(null, template({
        title: locals.title,
        react: ReactDOMServer.renderToString(<App />)
      }))
    })
    .catch((e) => console.log(e))
