const path = require('path');

module.exports = {
  mode: 'development',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: {
    'main': ['./src/js/app.js']
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, './dist/js/'),
    publicPath: './dist/js/'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  'debug': false,
                  'useBuiltIns': false,
                  targets: {
                    browsers: '> 1%, last 2 version, not dead',
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};