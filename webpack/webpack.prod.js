const Webpack = require("webpack");
const path = require("path")
const CssMin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../src/assets/img/'),
        to: path.resolve(__dirname, '../docs/images')
      }]
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "docs/"),
    filename: "bundle.js",
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
      }
    ),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', {}],
            ['jpegtran', {}],
            ['optipng', {}],
            ['svgo', {}],
          ],
        },
      },
    }),
    new ImageminWebpWebpackPlugin({
      // config: [{
      //   test: /\.(jpe?g|png)/,
      //   options: {
      //     quality: 75
      //   }
      // }],
      // overrideExtension: true,
      // detailedLogs: false,
      // silent: false,
      // strict: true
    })
    ]
  }
}