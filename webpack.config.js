const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    tooltip: './src/scripts/toolbar.js',
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
}
