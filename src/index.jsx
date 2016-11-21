import 'sanitize.css/sanitize.css'
import 'styles/base.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'containers/home'

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
  module.hot.accept('containers/home', renderApp)
}

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime') // eslint-disable-line

  runtime.install({
    onUpdateReady: () => { runtime.applyUpdate() },
    onUpdated:     () => { window.location.reload() }
  })
}
