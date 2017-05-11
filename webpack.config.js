const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

if (dev) {
  plugins.push(
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 14600,
      proxy: 'http://localhost:14500/',
    })
  );
}
else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = {
  entry: './client/index.js',
  output: {
    filename: './public/js/website.js',
  },
  plugins,
};
