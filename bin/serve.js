const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = {
  ...webpackConfig.devServer,
  hot: false,
  client: false,
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('[*] Starting Webpack Dev Server...');
  await server.start();
}

runServer();
