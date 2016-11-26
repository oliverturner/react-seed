const tmpl = ({title, react}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- critical -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- chrome pwa -->
    <link rel="manifest" href="/icons/manifest.json">

    <title>${title}</title>
    <link rel="stylesheet" href="/app.css" >
  </head>
  <body>
    <div id="root">${react}</div>
    <script src="/app.js" async></script>
  </body>
</html>

`

export default tmpl
