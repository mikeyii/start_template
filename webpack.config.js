const path = require('path');

const config = {
  entry:  ['./src/js/index.js', './src/sass/main.sass'],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
    }]
  }
}

module.exports = config;
