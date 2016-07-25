const Server = require('./server.js');
const port = (process.env.PORT || 3000);
const app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.dev.config.js');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(`Listening at http://localhost:${port}/`);
  });
} else {
  app.listen(port);
}
