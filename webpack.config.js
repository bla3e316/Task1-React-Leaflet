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
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:'file-loader',
            options: {}
        }
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
