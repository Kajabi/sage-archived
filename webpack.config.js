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
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'assets/javascript'),
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
        use: [
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ],
        include: path.resolve(__dirname, 'assets/stylesheets')
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
  }
}
