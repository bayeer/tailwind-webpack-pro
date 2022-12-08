const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig  = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: 'development',
  entry: [
    'webpack/hot/dev-server.js',
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    './src/index.js'
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  // devtool: 'inline-source-map',
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/css'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3001,
    // liveReload: true,
    watchFiles: [
      './src/**/*.{html,ts,js,jsx,tsx,css}',
      './dist/**/*'
    ]
  },
};
