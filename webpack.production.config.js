var path = require('path');
var cleaner = require('webpack-cleaner');

var entry = require('./webpack.entry.js');

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name]-[hash].js'
  },
  resolve: {
    modulesDirectories: ['', 'node_modules','assets/styles']
  },
  alias: {
    'react': 'react/dist/react.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url?limit=250000'
      // }
    ]
  },
  plugins: [
    cleaner(path.join(__dirname,'dist'))
  ]
};
