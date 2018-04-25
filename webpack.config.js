const path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
    publicPath: '/client/dist/'
  },
  devServer: {
    publicPath: '/client/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')]
  }
};
