const tmpl = ({title, react = ''}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- critical -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${title}</title>
    <link rel="stylesheet" href="/app.css" >

    <!-- apple webapp / chrome pwa -->
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/icons/manifest.json">
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#66ddaa">
    <link rel="shortcut icon" href="/icons/favicon.ico">
    <meta name="msapplication-config" content="/icons/browserconfig.xml">
    <meta name="theme-color" content="#66ddaa">
  </head>
  <body>
    <div id="root">${react}</div>
    <script src="/app.js" async></script>
  </body>
</html>

`

export default tmpl
