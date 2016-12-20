module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/main.jsx"
    },
    extensions: ['','.js', '.jsx']
  },
  module: {
    loaders: [{
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
    }]
  }
};
