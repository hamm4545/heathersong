const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./src/js/index.js", "./src/_scss/main.scss"],
  output: {
    publicPath: '/',
    filename: "js/index.js",
    path: path.join(__dirname, "./build/")
  },
  devServer: {
    contentBase: "./build"
  },
  module: {
    rules: [ 
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
      },  
      {
        test: /\.(mp4|jpg|png|gif|svg)$/i,
        use:'file-loader?name=[name].[ext]&outputPath=img/'         
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: false } }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: false }
            },
            { loader: "postcss-loader" },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: "css/main.css"
    })
  ]
};
