var webpack = require("webpack");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const compressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(''),
    filename: 'index_bundle.min.js'
  },
  devtool: '#eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "react"]}
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader:'url-loader',
        options: { limit: 10000 }
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
    //new BundleAnalyzerPlugin()
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"'
    // }),
    // new UglifyJSPlugin({
    //   test: /\.js($|\?)/i
    // }),
    // new compressionPlugin({
    //   test: /\.js/
    // })
  ]
}
