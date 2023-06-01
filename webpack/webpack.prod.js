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

  output: {
    path: path.resolve(__dirname, "..", "docs/"),
    filename: "scripts/bundle[hash].js",
    clean: true,
    publicPath: '/'
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../src/assets/img/'),
        to: path.resolve(__dirname, '../src/assets/img/')
      },]
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [
                            { xmlns: "http://www.w3.org/2000/svg" },
                          ],
                        },
                      },
                    },
                  },
                },
              ],
            },],
          ],
        },
      },
      generator: [
        {
          preset: 'webp',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-webp']
          }
        }
      ]
    }),
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
    minimizer: [new TerserPlugin(
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
      }
    ),
      // new ImageminWebpWebpackPlugin({
      // })
    ]
  }
}