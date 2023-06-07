const Webpack = require("webpack");
const path = require("path")
const CssMin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "..", "docs/"),
    filename: "scripts/bundle[hash].js",
    clean: true,
    publicPath: '/'
  },

  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [['mozjpeg', { quality: 85 }]],
        },
      },
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
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path]/[name][hash][ext]'
        }
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMin(),
      new TerserPlugin(),
    ]
  }
}