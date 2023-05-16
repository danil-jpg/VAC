const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
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
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html")
    }),

  ]

}
