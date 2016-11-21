// @flow

const ghpages = require('gh-pages')
const path    = require('path')

ghpages.publish(path.join(__dirname, '..', 'dist'), function (err: Error): void {
  if (err) return console.log(err)

  return console.log('published to Github Pages')
})
