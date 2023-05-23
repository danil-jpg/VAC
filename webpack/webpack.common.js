const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]'
            }
          }
        }, "sass-loader"]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /src/,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]'
            }
          }
        }, "sass-loader"]
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html")
    }),

  ]

}
