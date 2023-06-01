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
        generator: {
          filename: `styles/[name][hash][ext]`
        },
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
        generator: {
          filename: `styles/[name][hash][ext]`
        },
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
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name][hash][ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html")
    }),

  ]

}
