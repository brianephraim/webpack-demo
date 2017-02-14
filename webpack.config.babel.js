import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';

var names = [
  'animals','cats','dogs',
  'wild-animals'
];
var makeConfig = (name) => {
  return {
    entry: {
      [name]: `./app/${name}/${name}-example-entry.js`
    },
    output: {
      filename: 'app/[name]/[name]-bundle.js',
      chunkFilename: `./app/${name}/_chunks/[name].js`,
      publicPath: __dirname+'/'
    },
    module: {
      rules:[
        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          options: {

            // needed for tree shaking
            presets: [['es2015', {modules: false}]],
            plugins: ["transform-es2015-spread","transform-object-rest-spread"],
            // mocha needs .babelrc,
            // and .babelrc cannot use the above config
            // so ignore .babelrc here
            babelrc: false,
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
      ]
    },
    plugins: [
      ...(name === 'animals' ?
      [new StatsPlugin('./stats.json', {})]
      : []),

      // needed for tree shaking
      new webpack.optimize.UglifyJsPlugin({
        exclude: [/.*\.css$/]
      })
    ],
    resolve: {
      modules: [__dirname+'/app'],
      // extensions: ['.js','/index.js','.module-or-something.js'],
    }
  };
};


var configs = [];
names.forEach((name) => {
  configs.push(makeConfig(name));
});

export default configs;
