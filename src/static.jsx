import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from 'containers/home'

import template from './template'

export default (locals, callback) => {
  console.log('--- locals:\n', locals, '\n---')

  callback(null, template({
    title: locals.title,
    react: ReactDOMServer.renderToString(<App />)
  }))
}
