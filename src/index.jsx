import 'sanitize.css/sanitize.css'
import 'styles/base.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'containers'

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
  module.hot.accept('containers/app', renderApp)
}

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime') // eslint-disable-line

  runtime.install({
    onInstalled: () => {
      console.log('SW Event:', 'initialised: app is offline-enabled')
    },

    onUpdating: () => {
      console.log('SW Event:', 'updating')
    },

    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady')

      // Tells to new SW to take control immediately
      runtime.applyUpdate()
    },

    onUpdated: () => {
      console.log('SW Event:', 'onUpdated')

      // Reload page to load the new version
      window.location.reload()
    },

    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed')
    }
  })
}
