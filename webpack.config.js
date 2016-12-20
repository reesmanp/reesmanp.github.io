const Webpack = require('webpack');

let prod = true;
if (process.env.npm_lifecycle_event !== "build") {
  prod = false;
}

module.exports = {
  entry: {
    portfolio: "./src/portfolio.js",
  },
  output: {
    path: "./dist/",
    filename: "[name].min.js",
    publicPath: "/"
  },
  plugins: prod ? [
      new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false,
          "max_line_len": 500
        }
      }),
      new Webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ] : [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?-autoprefixer",
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],
  },
};