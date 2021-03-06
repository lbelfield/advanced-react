const path = require('path');

const config = {
  entry: [
    'babel-polyfill', 
    './lib/components/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader' 
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ejs'
    ]
  }
};

module.exports = config;