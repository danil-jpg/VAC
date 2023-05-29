const Webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: "asset/resource"
    },
  },

  devtool: "cheap-module-source-map",
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas")
    }),
    new ReactRefreshWebpackPlugin()
  ]
}
