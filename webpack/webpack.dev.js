const Webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path")

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
      type: "asset/resource"
    },
    ]
  },

  devtool: "cheap-module-source-map",
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas")
    }),
    new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../src/assets/img/'),
        to: path.resolve(__dirname, '../src/assets/img/')
      }]
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
    ]
  }
}
