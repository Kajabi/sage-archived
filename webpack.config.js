// webpack.config.js
var path = require('path');

module.exports = {
  entry: './assets/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, 'assets/stylesheets')
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
  }
}
