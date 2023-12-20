const path = require('path');
module.exports = {
    entry: './dist/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js'], // Add more extensions as needed
    },
  };