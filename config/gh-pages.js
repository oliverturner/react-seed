const ghpages = require('gh-pages')
const path    = require('path')

ghpages.publish(path.join(__dirname, '..', 'dist'), function(err) {
  if (err) return console.log(err)

  return 'published to Github Pages'
})
