import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from './config';

export default config({
  devtool: 'eval',

  entry: ['react-hot-loader/patch'],

  localIdentName: '[path]-[local]-[hash:base64:5]',

  output: {
    path:       './public',
    publicPath: '/',
    filename:   'app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './config/tmplate.html'
    })
  ]
});
