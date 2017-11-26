
module.exports = {
  entry: __dirname + '/client/router.js',
  module:{
    loaders: [
      {
        test: /\.jsx?$/,      //both js and jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      },
      {
        { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        },
      }
    ]
  },
  output: {
    filename: 'bundled.js',
    path: __dirname + '/build'
  }
};