var StatsPlugin = require('stats-webpack-plugin');
console.log(__dirname)
module.exports = {
  entry: {
    'animals': './animals/animals-entry.js',
    'cats': './cats/just-cats-entry.js',
    'dogs': './dogs/just-dogs-entry.js',
    'wild-animals': './wild-animals/just-wild-animals-entry.js',
  },
  output: {
    filename: '[name]/[name]-bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  plugins: [
    new StatsPlugin('./stats.json', {
      
    })
  ],
  resolve: {
    modules: [__dirname],
    extensions: ['.js','/index.js'],
  }

};
