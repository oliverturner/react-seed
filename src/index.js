import 'sanitize.css/sanitize.css'
import 'styles/base.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'containers/home'

const renderApp = () =>
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('mount-app')
  )

renderApp()

if (module.hot) {
  module.hot.accept('containers/home', renderApp)
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
