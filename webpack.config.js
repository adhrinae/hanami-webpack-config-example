const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './apps/web/assets/javascripts/app.js',
    vendor: ['vue', 'axios']
  },

  output: {
    path: path.resolve(__dirname + '/public/assets'),
    filename: '[name].js',
    publicPath: './public'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  );

  module.exports.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  );
};

