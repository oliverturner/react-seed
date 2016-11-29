import 'sanitize.css/sanitize.css'
import 'styles/base.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {AppContainer} from 'react-hot-loader'

import App from 'containers/index'

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
}

export default (locals, callback) =>
  Promise.resolve()
    .then(() => {
      const assets = locals.webpackStats.compilation.assets
      const key    = Object.keys(assets).filter((k) => k.match(/^iconstats-*/))[0]
      const icons  = JSON.parse(assets[key].source()).html.join('\n')

      callback(null, template({
        title: locals.title,
        react: ReactDOMServer.renderToString(<App />),
        icons
      }))
    })
    .catch((e) => console.log(e))
