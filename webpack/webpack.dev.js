const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

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
    new ReactRefreshWebpackPlugin(),
    new ImageminWebpWebpackPlugin(),
    new ImageMinimizerPlugin({
      generator: [
        {
          preset: "webp",
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ["imagemin-webp"]
          }
        }
      ]
    })
  ],
}
