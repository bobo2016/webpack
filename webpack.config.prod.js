
var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserPlugin = require('open-browser-webpack-plugin')
var uglifyPlugin = webpack.optimize.UglifyJsPlugin

var config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test:/\.sass $/,
        loader: 'style-loader!sass-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title: 'FE flow',
      template: './src/index.html'
    }),
    new uglifyPlugin({
      compress: false
    }),
    new webpack.BannerPlugin('Author: Charles\nDatae:03/09/2017\nLicence: MIT')
  ]
}

module.exports = config
