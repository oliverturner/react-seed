import 'sanitize.css/sanitize.css'
import 'styles/base.css'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from 'containers'

import template from '../config/template'

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
